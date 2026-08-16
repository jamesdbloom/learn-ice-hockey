# ---------------------------------------------------------------------------
# Origin Access Control
#
# OAC, not the legacy OAI. OAI is deprecated, cannot sign to SSE-KMS origins
# and cannot be scoped by SourceArn on the bucket policy.
# ---------------------------------------------------------------------------

resource "aws_cloudfront_origin_access_control" "site" {
  name                              = "${local.name_prefix}-site-oac"
  description                       = "OAC for the ${var.project_name} static site bucket"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# ---------------------------------------------------------------------------
# Clean URLs, and the www -> apex redirect
#
# One function, because CloudFront permits only one viewer-request function per
# cache behaviour. The redirect runs first and returns before the rewrite.
#
# Note the scope: this is associated with the default cache behaviour only, so
# www is redirected for every page but not for /_astro/* or /audio/*. That is
# deliberate — those behaviours exist to serve immutable assets with no
# function latency, and an asset URL is not something a search engine indexes
# as a duplicate page.
# ---------------------------------------------------------------------------

resource "aws_cloudfront_function" "clean_urls" {
  name    = "${local.name_prefix}-clean-urls"
  runtime = "cloudfront-js-2.0"
  comment = "301 www to apex, then rewrite directory paths to index.html for ${var.project_name}"
  publish = true
  code    = file("${path.module}/functions/clean_urls.js")
}

# ---------------------------------------------------------------------------
# Cache policies
#
# Three, because the site has three kinds of object with very different
# lifetimes. All of them strip cookies and query strings from the cache key:
# this is a static site, nothing varies on them, and including them would only
# fragment the cache and open a poisoning surface.
# ---------------------------------------------------------------------------

resource "aws_cloudfront_cache_policy" "html" {
  name        = "${local.name_prefix}-html"
  comment     = "Short TTL for HTML and directory URLs"
  min_ttl     = 0
  default_ttl = var.html_ttl_seconds
  max_ttl     = var.html_ttl_seconds

  parameters_in_cache_key_and_forwarded_to_origin {
    enable_accept_encoding_gzip   = true
    enable_accept_encoding_brotli = true

    cookies_config {
      cookie_behavior = "none"
    }
    headers_config {
      header_behavior = "none"
    }
    query_strings_config {
      query_string_behavior = "none"
    }
  }
}

resource "aws_cloudfront_cache_policy" "immutable" {
  name        = "${local.name_prefix}-immutable"
  comment     = "One year for content-hashed assets"
  min_ttl     = var.immutable_ttl_seconds
  default_ttl = var.immutable_ttl_seconds
  max_ttl     = var.immutable_ttl_seconds

  parameters_in_cache_key_and_forwarded_to_origin {
    enable_accept_encoding_gzip   = true
    enable_accept_encoding_brotli = true

    cookies_config {
      cookie_behavior = "none"
    }
    headers_config {
      header_behavior = "none"
    }
    query_strings_config {
      query_string_behavior = "none"
    }
  }
}

resource "aws_cloudfront_cache_policy" "audio" {
  name        = "${local.name_prefix}-audio"
  comment     = "One year for narration audio, which never changes once generated"
  min_ttl     = var.immutable_ttl_seconds
  default_ttl = var.immutable_ttl_seconds
  max_ttl     = var.immutable_ttl_seconds

  parameters_in_cache_key_and_forwarded_to_origin {
    # Audio is already compressed. Re-encoding it wastes CPU for no gain, and
    # range requests are what actually matter for a seekable player.
    enable_accept_encoding_gzip   = false
    enable_accept_encoding_brotli = false

    cookies_config {
      cookie_behavior = "none"
    }
    headers_config {
      header_behavior = "none"
    }
    query_strings_config {
      query_string_behavior = "none"
    }
  }
}

# ---------------------------------------------------------------------------
# Response headers
#
# The CSP names no external origin because the site loads nothing external:
# no CDN, no analytics, no hosted fonts. See local.content_security_policy.
# ---------------------------------------------------------------------------

resource "aws_cloudfront_response_headers_policy" "security" {
  name    = "${local.name_prefix}-security-headers"
  comment = "Security headers for ${var.project_name}; self-hosted only, no external origins"

  security_headers_config {
    strict_transport_security {
      access_control_max_age_sec = 63072000
      include_subdomains         = true
      preload                    = true
      override                   = true
    }

    content_type_options {
      override = true
    }

    referrer_policy {
      referrer_policy = "strict-origin-when-cross-origin"
      override        = true
    }

    frame_options {
      frame_option = "DENY"
      override     = true
    }

    xss_protection {
      # Explicitly off. The legacy XSS auditor is removed from every current
      # browser and introduced bugs of its own; the CSP is the real control.
      protection = false
      mode_block = false
      override   = true
    }

    content_security_policy {
      content_security_policy = local.content_security_policy
      override                = true
    }
  }

  custom_headers_config {
    items {
      header   = "Permissions-Policy"
      value    = "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), interest-cohort=()"
      override = true
    }

    items {
      header   = "Cross-Origin-Opener-Policy"
      value    = "same-origin"
      override = true
    }

    items {
      header   = "X-Permitted-Cross-Domain-Policies"
      value    = "none"
      override = true
    }
  }
}

# `immutable` in Cache-Control is what actually stops browsers revalidating
# hashed assets. CloudFront's own TTL does not reach the browser.
resource "aws_cloudfront_response_headers_policy" "security_immutable" {
  name    = "${local.name_prefix}-security-headers-immutable"
  comment = "Security headers plus immutable Cache-Control for hashed assets"

  security_headers_config {
    strict_transport_security {
      access_control_max_age_sec = 63072000
      include_subdomains         = true
      preload                    = true
      override                   = true
    }

    content_type_options {
      override = true
    }

    referrer_policy {
      referrer_policy = "strict-origin-when-cross-origin"
      override        = true
    }

    frame_options {
      frame_option = "DENY"
      override     = true
    }

    content_security_policy {
      content_security_policy = local.content_security_policy
      override                = true
    }
  }

  custom_headers_config {
    items {
      header   = "Cache-Control"
      value    = "public, max-age=${var.immutable_ttl_seconds}, immutable"
      override = true
    }
  }
}

# ---------------------------------------------------------------------------
# Distribution
# ---------------------------------------------------------------------------

resource "aws_cloudfront_distribution" "site" {
  enabled             = true
  is_ipv6_enabled     = true
  comment             = "${var.project_name} (${var.environment}) static site - NOT mockserver"
  default_root_object = "index.html"
  price_class         = var.cloudfront_price_class
  http_version        = "http2and3"
  aliases             = local.all_domain_names

  origin {
    origin_id                = "s3-${aws_s3_bucket.site.id}"
    domain_name              = aws_s3_bucket.site.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.site.id
  }

  # Everything not matched below: HTML pages and directory URLs.
  default_cache_behavior {
    target_origin_id           = "s3-${aws_s3_bucket.site.id}"
    viewer_protocol_policy     = "redirect-to-https"
    allowed_methods            = ["GET", "HEAD", "OPTIONS"]
    cached_methods             = ["GET", "HEAD"]
    compress                   = true
    cache_policy_id            = aws_cloudfront_cache_policy.html.id
    response_headers_policy_id = aws_cloudfront_response_headers_policy.security.id

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.clean_urls.arn
    }
  }

  # Astro's hashed build output. Filenames change whenever content changes, so
  # these can be cached for a year and never invalidated.
  ordered_cache_behavior {
    path_pattern               = "/_astro/*"
    target_origin_id           = "s3-${aws_s3_bucket.site.id}"
    viewer_protocol_policy     = "redirect-to-https"
    allowed_methods            = ["GET", "HEAD"]
    cached_methods             = ["GET", "HEAD"]
    compress                   = true
    cache_policy_id            = aws_cloudfront_cache_policy.immutable.id
    response_headers_policy_id = aws_cloudfront_response_headers_policy.security_immutable.id
  }

  # Narration audio. Large, immutable once generated, and requested with byte
  # ranges by the players.
  ordered_cache_behavior {
    path_pattern               = "/audio/*"
    target_origin_id           = "s3-${aws_s3_bucket.site.id}"
    viewer_protocol_policy     = "redirect-to-https"
    allowed_methods            = ["GET", "HEAD"]
    cached_methods             = ["GET", "HEAD"]
    compress                   = false
    cache_policy_id            = aws_cloudfront_cache_policy.audio.id
    response_headers_policy_id = aws_cloudfront_response_headers_policy.security.id
  }

  custom_error_response {
    error_code            = 404
    response_code         = 404
    response_page_path    = "/404.html"
    error_caching_min_ttl = var.html_ttl_seconds
  }

  # S3 answers 403, not 404, for a key that does not exist when the reader is
  # OAC-signed and has no s3:ListBucket. Without this, a mistyped URL returns a
  # bare AccessDenied instead of the site's own 404 page.
  custom_error_response {
    error_code            = 403
    response_code         = 404
    response_page_path    = "/404.html"
    error_caching_min_ttl = var.html_ttl_seconds
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate_validation.site.certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  dynamic "logging_config" {
    for_each = var.enable_logging ? [1] : []

    content {
      bucket          = aws_s3_bucket.logs[0].bucket_domain_name
      prefix          = "${var.project_name}/"
      include_cookies = false
    }
  }

  tags = {
    Name = "${local.name_prefix}-site"
  }
}

locals {
  account_id = data.aws_caller_identity.current.account_id
  partition  = data.aws_partition.current.partition

  # Every name in this configuration starts with this. Nothing is allowed to be
  # called something generic like "site-bucket" or "cdn" — the account is
  # shared with MockServer and names are the first thing a human reads.
  name_prefix = "${var.project_name}-${var.environment}"

  # The four mandatory tags. var.tags may add to these but the merge order
  # means it cannot remove or override them.
  common_tags = merge(
    var.tags,
    {
      Project     = var.project_name
      ManagedBy   = "terraform"
      Repository  = var.github_repository
      Environment = var.environment
    },
  )

  site_bucket_name = coalesce(
    var.site_bucket_name,
    "${local.name_prefix}-site-${local.account_id}",
  )

  logs_bucket_name = "${local.name_prefix}-cf-logs-${local.account_id}"

  # Apex plus every SAN. These are the distribution aliases and the names that
  # get A/AAAA alias records.
  all_domain_names = concat([var.domain_name], var.subject_alternative_names)

  zone_id = var.create_route53_zone ? aws_route53_zone.this[0].zone_id : data.aws_route53_zone.this[0].zone_id

  github_oidc_url = "token.actions.githubusercontent.com"

  github_oidc_provider_arn = var.create_oidc_provider ? aws_iam_openid_connect_provider.github[0].arn : "arn:${local.partition}:iam::${local.account_id}:oidc-provider/${local.github_oidc_url}"

  # The full `sub` claim the trust policy matches, built from the prefix GitHub
  # actually issues plus the branch. github_repository is deliberately not used
  # to build this: it also feeds the mandatory Repository tag and the role
  # description, which want the readable "owner/repo" and not the id-qualified
  # form. See var.github_oidc_subject_prefix.
  github_oidc_subject = "${coalesce(var.github_oidc_subject_prefix, "repo:${var.github_repository}")}:ref:refs/heads/${var.github_branch}"

  # Content Security Policy. Self-hosted apart from Google Analytics, which is
  # the only external origin named here.
  #
  # 'unsafe-inline' is present for styles only, because Astro inlines critical
  # CSS into the document head at build time. Scripts get no such exemption, and
  # that is load-bearing: the site's own scripts are served from /public as
  # files precisely so this stays out.
  #
  # ⚠️ One inline script remains — the theme bootstrap in BaseHead.astro, which
  # has to run before first paint to avoid a flash of the wrong colour scheme.
  # It predates this policy and is blocked by it. Fix it by either serving it
  # from /public as a blocking script or adding its sha256 hash here; a hash
  # couples this file to that script's exact bytes, so prefer the former.
  #
  # The Google origins below are split by purpose deliberately: gtag.js is
  # fetched from googletagmanager.com, the collect beacon goes to
  # google-analytics.com, and the no-JavaScript pixel fallback is an image.
  content_security_policy = join("; ", [
    "default-src 'self'",
    "script-src 'self' https://www.googletagmanager.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com",
    "font-src 'self'",
    "media-src 'self'",
    "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
    "manifest-src 'self'",
    "worker-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ])
}

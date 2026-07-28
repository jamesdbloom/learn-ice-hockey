# ---------------------------------------------------------------------------
# Hosted zone
#
# Either created here, or looked up. The domain may be registered elsewhere and
# only delegated, in which case the zone might already exist — and in a shared
# account, creating a second zone for a name that already has one is a quiet
# way to break DNS for everybody.
# ---------------------------------------------------------------------------

resource "aws_route53_zone" "this" {
  count = var.create_route53_zone ? 1 : 0

  name    = var.domain_name
  comment = "Public zone for ${var.project_name} (${var.environment})"

  tags = {
    Name = "${local.name_prefix}-zone"
  }
}

data "aws_route53_zone" "this" {
  count = var.create_route53_zone ? 0 : 1

  name         = "${var.domain_name}."
  private_zone = false
}

# ---------------------------------------------------------------------------
# Certificate — us-east-1, because CloudFront accepts nothing else
# ---------------------------------------------------------------------------

resource "aws_acm_certificate" "site" {
  provider = aws.us_east_1

  domain_name               = var.domain_name
  subject_alternative_names = var.subject_alternative_names
  validation_method         = "DNS"

  # The certificate is referenced by the distribution, so a replacement has to
  # exist before the old one can go.
  lifecycle {
    create_before_destroy = true
  }

  tags = {
    Name = "${local.name_prefix}-cert"
  }
}

resource "aws_route53_record" "cert_validation" {
  for_each = {
    for option in aws_acm_certificate.site.domain_validation_options :
    option.domain_name => {
      name   = option.resource_record_name
      record = option.resource_record_value
      type   = option.resource_record_type
    }
  }

  zone_id = local.zone_id
  name    = each.value.name
  type    = each.value.type
  records = [each.value.record]
  ttl     = 60

  # A re-run that produces the same validation name must not fail on an
  # existing record.
  allow_overwrite = true
}

resource "aws_acm_certificate_validation" "site" {
  provider = aws.us_east_1

  certificate_arn         = aws_acm_certificate.site.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}

# ---------------------------------------------------------------------------
# Alias records
#
# One A and one AAAA for the apex and for every SAN. Alias records, not CNAMEs:
# a CNAME cannot live at a zone apex, and aliases are free to resolve.
# ---------------------------------------------------------------------------

resource "aws_route53_record" "a" {
  for_each = toset(local.all_domain_names)

  zone_id = local.zone_id
  name    = each.value
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "aaaa" {
  for_each = toset(local.all_domain_names)

  zone_id = local.zone_id
  name    = each.value
  type    = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}

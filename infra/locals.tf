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

  # Content Security Policy. The site is entirely self-hosted: no CDN, no
  # analytics, no web fonts from anyone else, so nothing here names an external
  # origin. 'unsafe-inline' is present for styles only, because Astro inlines
  # critical CSS into the document head at build time; scripts get no such
  # exemption.
  content_security_policy = join("; ", [
    "default-src 'self'",
    "script-src 'self'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    "font-src 'self'",
    "media-src 'self'",
    "connect-src 'self'",
    "manifest-src 'self'",
    "worker-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ])
}

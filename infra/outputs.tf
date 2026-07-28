output "site_bucket_name" {
  description = "Sync target for the build. Use as: aws s3 sync ./site/dist s3://<this> --delete"
  value       = aws_s3_bucket.site.id
}

output "site_bucket_arn" {
  description = "Bucket ARN. Useful when auditing that no policy outside this project references it."
  value       = aws_s3_bucket.site.arn
}

output "cloudfront_distribution_id" {
  description = "Invalidation target. Use as: aws cloudfront create-invalidation --distribution-id <this> --paths '/*'"
  value       = aws_cloudfront_distribution.site.id
}

output "cloudfront_distribution_arn" {
  description = "Distribution ARN. This is the value the site bucket policy conditions on via AWS:SourceArn."
  value       = aws_cloudfront_distribution.site.arn
}

output "cloudfront_domain_name" {
  description = "The d111111abcdef8.cloudfront.net name. Handy for testing before DNS has propagated."
  value       = aws_cloudfront_distribution.site.domain_name
}

output "site_url" {
  description = "The public URL of the site."
  value       = "https://${var.domain_name}"
}

output "github_actions_role_arn" {
  description = <<-EOT
    Role for GitHub Actions to assume. Put this in the workflow as
    role-to-assume, or in a repository variable. It is not a secret — it grants
    nothing without an OIDC token from the trusted repo and branch.
  EOT
  value       = aws_iam_role.github_actions.arn
}

output "route53_zone_id" {
  description = "Hosted zone the records live in, whether it was created here or looked up."
  value       = local.zone_id
}

output "route53_name_servers" {
  description = <<-EOT
    Name servers to set at the registrar to delegate the domain. Only populated
    when create_route53_zone is true; empty otherwise, because a pre-existing
    zone is already delegated.
  EOT
  value       = var.create_route53_zone ? aws_route53_zone.this[0].name_servers : []
}

output "acm_certificate_arn" {
  description = "Validated certificate in us-east-1 that the distribution is using."
  value       = aws_acm_certificate_validation.site.certificate_arn
}

output "logs_bucket_name" {
  description = "Access log bucket, or null when enable_logging is false."
  value       = var.enable_logging ? aws_s3_bucket.logs[0].id : null
}

output "isolation_summary" {
  description = <<-EOT
    Written so the separation from MockServer can be checked at a glance after
    an apply, without reading the whole state.
  EOT
  value = {
    project        = var.project_name
    environment    = var.environment
    name_prefix    = local.name_prefix
    account_id     = local.account_id
    bucket         = aws_s3_bucket.site.id
    distribution   = aws_cloudfront_distribution.site.id
    iam_role       = aws_iam_role.github_actions.name
    iam_path       = "/${var.project_name}/"
    mandatory_tags = local.common_tags
  }
}

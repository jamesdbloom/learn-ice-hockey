variable "project_name" {
  description = <<-EOT
    Short slug prefixed to every resource name. This is the primary defence
    against confusion with MockServer, which shares this AWS account. Do not
    set it to anything generic.
  EOT
  type        = string
  default     = "ice-hockey"

  validation {
    condition     = can(regex("^[a-z0-9][a-z0-9-]{1,30}[a-z0-9]$", var.project_name))
    error_message = "project_name must be lowercase alphanumeric with hyphens, 3-32 characters."
  }

  validation {
    condition     = !can(regex("mockserver", lower(var.project_name)))
    error_message = "project_name must not reference mockserver; this configuration must stay independent of it."
  }
}

variable "environment" {
  description = "Environment name, used in the Environment tag and in resource names."
  type        = string
  default     = "production"
}

variable "aws_region" {
  description = "Region for S3 and all regional resources. CloudFront is global and ACM is pinned to us-east-1 separately."
  type        = string
  default     = "eu-west-2"
}

variable "aws_profile" {
  description = <<-EOT
    Local AWS named profile to use. Leave null to fall back to the standard
    credential chain (which is what CI does). Never set this to
    mockserver-build or mockserver-website.
  EOT
  type        = string
  default     = null

  validation {
    condition     = var.aws_profile == null || !can(regex("mockserver", lower(coalesce(var.aws_profile, ""))))
    error_message = "Refusing to use a mockserver-* profile for this project."
  }
}

# ---------------------------------------------------------------------------
# Domain
# ---------------------------------------------------------------------------

variable "domain_name" {
  description = <<-EOT
    Apex domain the site is served from, e.g. "example.com". No default: the
    domain has not been chosen yet (decision D1 in the build specification).
  EOT
  type        = string

  validation {
    condition     = can(regex("^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$", var.domain_name))
    error_message = "domain_name must be a bare hostname such as example.com, with no scheme, port or trailing dot."
  }
}

variable "subject_alternative_names" {
  description = <<-EOT
    Extra names on the certificate and on the distribution, e.g.
    ["www.example.com"]. Each must sit in the same Route 53 hosted zone as
    domain_name, because validation and alias records are written into that
    one zone.
  EOT
  type        = list(string)
  default     = []
}

variable "create_route53_zone" {
  description = <<-EOT
    true  - create the hosted zone here, then delegate NS records at the registrar.
    false - a hosted zone for domain_name already exists; look it up instead.
  EOT
  type        = bool
  default     = true
}

# ---------------------------------------------------------------------------
# CI / GitHub Actions
# ---------------------------------------------------------------------------

variable "github_repository" {
  description = "GitHub repository allowed to assume the deploy role, as \"owner/repo\". No default."
  type        = string

  validation {
    condition     = can(regex("^[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+$", var.github_repository))
    error_message = "github_repository must be in owner/repo form."
  }
}

variable "github_branch" {
  description = "Branch whose workflow runs may assume the deploy role. Anything else is denied by the trust policy."
  type        = string
  default     = "main"
}

variable "create_oidc_provider" {
  description = <<-EOT
    true  - create the GitHub OIDC provider in this account.
    false - one already exists (likely created by MockServer); reference it.

    An account can hold only one provider per URL, so creating a duplicate
    fails with EntityAlreadyExists. Check first:
      aws iam list-open-id-connect-providers
  EOT
  type        = bool
  default     = false
}

variable "oidc_thumbprint_list" {
  description = <<-EOT
    Thumbprints for token.actions.githubusercontent.com. IAM no longer verifies
    these for well-known providers, but the argument is still accepted. Only
    used when create_oidc_provider is true.
  EOT
  type        = list(string)
  default = [
    "6938fd4d98bab03faadb97b34396831e3780aea1",
    "1c58a3a8518e8759bf075b76b750d4f2df264fcd",
  ]
}

# ---------------------------------------------------------------------------
# Behaviour toggles
# ---------------------------------------------------------------------------

variable "enable_logging" {
  description = <<-EOT
    Create a log bucket and turn on CloudFront standard access logging. Off by
    default: it costs money per request and the logs are rarely read.
  EOT
  type        = bool
  default     = false
}

variable "log_retention_days" {
  description = "Days before access logs expire. Only used when enable_logging is true."
  type        = number
  default     = 90
}

variable "cloudfront_price_class" {
  description = "CloudFront price class. PriceClass_100 is Europe + North America and is the cheapest."
  type        = string
  default     = "PriceClass_100"

  validation {
    condition     = contains(["PriceClass_All", "PriceClass_200", "PriceClass_100"], var.cloudfront_price_class)
    error_message = "Must be PriceClass_All, PriceClass_200 or PriceClass_100."
  }
}

variable "html_ttl_seconds" {
  description = "Cache TTL for HTML and directory URLs. Short, so edits appear promptly."
  type        = number
  default     = 300
}

variable "immutable_ttl_seconds" {
  description = "Cache TTL for content-hashed assets and audio. One year."
  type        = number
  default     = 31536000
}

variable "site_bucket_name" {
  description = <<-EOT
    Override for the site bucket name. S3 bucket names are globally unique, so
    the default appends the account id to the project name. Set this only if
    you need a specific name.
  EOT
  type        = string
  default     = null
}

variable "tags" {
  description = <<-EOT
    Extra tags merged over the mandatory ones. Project, ManagedBy, Repository
    and Environment are always set and cannot be dropped.
  EOT
  type        = map(string)
  default     = {}
}

variable "project_name" {
  description = "Prefixed to the state bucket and lock table. Must match the parent configuration."
  type        = string
  default     = "ice-hockey"

  validation {
    condition     = !can(regex("mockserver", lower(var.project_name)))
    error_message = "This backend must not be named after, or shared with, mockserver."
  }
}

variable "environment" {
  description = "Environment name for the Environment tag."
  type        = string
  default     = "production"
}

variable "aws_region" {
  description = "Region for the state bucket and lock table. Keep it the same as the parent configuration's aws_region."
  type        = string
  default     = "eu-west-2"
}

variable "aws_profile" {
  description = "Local AWS named profile. Leave null for the default credential chain. Never a mockserver-* profile."
  type        = string
  default     = null

  validation {
    condition     = var.aws_profile == null || !can(regex("mockserver", lower(coalesce(var.aws_profile, ""))))
    error_message = "Refusing to use a mockserver-* profile for this project."
  }
}

variable "github_repository" {
  description = "Repository this infrastructure belongs to, as owner/repo. Used for the Repository tag."
  type        = string

  validation {
    condition     = can(regex("^[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+$", var.github_repository))
    error_message = "github_repository must be in owner/repo form."
  }
}

variable "state_bucket_name" {
  description = <<-EOT
    Override for the state bucket name. The default appends the account id,
    because S3 bucket names are globally unique. This must never be an existing
    MockServer bucket: the configuration will refuse to adopt one, and you
    should not write a terraform import to make it.
  EOT
  type        = string
  default     = null
}

variable "lock_table_name" {
  description = "Override for the DynamoDB lock table name."
  type        = string
  default     = null
}

variable "noncurrent_version_retention_days" {
  description = "How long superseded state versions are kept. Long enough to recover from a bad apply."
  type        = number
  default     = 90
}

variable "tags" {
  description = "Extra tags merged over the mandatory ones."
  type        = map(string)
  default     = {}
}

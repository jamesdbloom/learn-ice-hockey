provider "aws" {
  region  = var.aws_region
  profile = var.aws_profile

  default_tags {
    tags = merge(
      var.tags,
      {
        Project     = var.project_name
        ManagedBy   = "terraform"
        Repository  = var.github_repository
        Environment = var.environment
        Component   = "terraform-state-backend"
      },
    )
  }
}

data "aws_caller_identity" "current" {}

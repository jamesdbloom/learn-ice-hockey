provider "aws" {
  region  = var.aws_region
  profile = var.aws_profile

  # Applied to every taggable resource this configuration creates, including
  # ones where a tags block was forgotten. This is how a resource in a shared
  # account is proved to belong to this project and not to MockServer.
  default_tags {
    tags = local.common_tags
  }
}

# CloudFront will only accept a certificate from us-east-1, whatever region the
# rest of the stack lives in.
provider "aws" {
  alias   = "us_east_1"
  region  = "us-east-1"
  profile = var.aws_profile

  default_tags {
    tags = local.common_tags
  }
}

data "aws_caller_identity" "current" {}

data "aws_partition" "current" {}

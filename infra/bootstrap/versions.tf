terraform {
  required_version = ">= 1.9.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }

  # Deliberately no backend block. This configuration creates the state backend
  # that the parent configuration uses, and a backend cannot provision itself.
  # State stays in a local terraform.tfstate file. See README.md.
}

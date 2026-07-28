# Remote state.
#
# This account is shared with an unrelated production project (MockServer).
# This state file is deliberately NOT the MockServer state file: it lives in a
# bucket created by ./bootstrap for this project alone, and its key is
# project-scoped so that even if the bucket were ever shared the objects could
# not collide.
#
# The bucket and lock table must exist before `terraform init` here. Create
# them once, by hand, with the configuration in ./bootstrap.
#
# The bucket name is NOT hardcoded here. ./bootstrap names the state bucket
# <project>-tfstate-<account-id>, because S3 bucket names are globally unique
# and the account id is what makes this one unique. This repository is public
# and contains no AWS account id anywhere else; hardcoding the bucket name
# would put one in it. So the bucket is supplied at init time instead:
#
#   terraform init -backend-config=backend.hcl
#
# backend.hcl is gitignored. Create it from backend.hcl.example, using the
# state_bucket_name that ./bootstrap prints.
#
terraform {
  backend "s3" {
    key    = "ice-hockey/site/terraform.tfstate"
    region = "eu-west-2"

    # Both lock mechanisms, deliberately.
    #
    # use_lockfile is the current one: an S3 conditional-write lock object
    # beside the state. dynamodb_table is the older one, and Terraform 1.11+
    # prints a deprecation warning for it on every init:
    #
    #   Warning: The parameter "dynamodb_table" is deprecated.
    #   Use parameter "use_lockfile" instead.
    #
    # That warning is expected, not a misconfiguration. The table is kept
    # because the build specification calls for it and because holding both
    # locks costs nothing. Drop the dynamodb_table line, and the table in
    # ./bootstrap, whenever you want the warning to stop.
    use_lockfile   = true
    dynamodb_table = "ice-hockey-tfstate-lock"

    encrypt = true
  }
}

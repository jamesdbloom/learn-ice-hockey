# Terraform state backend — bootstrap

Creates the S3 bucket and DynamoDB lock table that the configuration in `../`
stores its state in.

## Run this once, first, by hand

A Terraform state backend cannot provision itself: the parent configuration
needs the bucket to exist before its `terraform init` can succeed. So this is a
separate configuration with **local state**, run once, before anything else,
from a workstation.

It is not part of CI, and the CI role has no permission to run it.

```sh
cd infra/bootstrap
cp terraform.tfvars.example terraform.tfvars
$EDITOR terraform.tfvars          # set github_repository

terraform init                    # local state, no backend
terraform plan
terraform apply
```

Then take the `backend_config` output and paste it into `../backend.tf`:

```sh
terraform output -raw backend_config
```

You should not need to run this again. If you ever do, the local
`terraform.tfstate` file it wrote is the only record of these resources — keep
it. It is gitignored, because it names your account id.

## What it creates

| Resource | Name | Notes |
|---|---|---|
| `aws_s3_bucket` | `<project_name>-tfstate-<account-id>` | Versioned, SSE-S3 encrypted, all public access blocked, TLS-only bucket policy, old versions expired after 90 days |
| `aws_dynamodb_table` | `<project_name>-tfstate-lock` | `LockID` hash key, pay-per-request, encrypted, PITR on |

Both are tagged `Project`, `ManagedBy`, `Repository`, `Environment` and
`Component = terraform-state-backend` via provider `default_tags`.

## Shared account

This AWS account also runs **MockServer**, an unrelated production project.

- This state bucket and lock table are **this project's alone**. MockServer has
  its own state somewhere in the account and nothing here reads, writes or
  references it.
- Do not point `state_bucket_name` or `lock_table_name` at something that
  already exists. This configuration **creates**; it does not adopt. There is
  no `terraform import` anywhere in this repository and there should not be —
  importing a resource you did not create is how you end up destroying
  somebody else's production on a later apply.
- `project_name` and `aws_profile` both reject any value containing
  `mockserver`, so a typo cannot quietly attach this to the wrong project.

## Two locks

The parent `backend.tf` sets both `use_lockfile = true` (the current S3-native
lock) and `dynamodb_table` (the older mechanism). Terraform 1.11 and later
prints a deprecation warning for the latter on every `init`. That warning is
expected. Holding both locks costs nothing; if you would rather have a clean
init, delete the `dynamodb_table` line from `../backend.tf` and the
`aws_dynamodb_table.lock` resource from `main.tf`.

## Variables

| Variable | Required | Default | Purpose |
|---|---|---|---|
| `github_repository` | **yes** | — | `owner/repo`, for the `Repository` tag |
| `project_name` | no | `ice-hockey` | Name prefix; must match the parent |
| `environment` | no | `production` | `Environment` tag |
| `aws_region` | no | `eu-west-2` | Keep the same as the parent |
| `aws_profile` | no | `null` | Local named profile |
| `state_bucket_name` | no | derived | Override only if you must |
| `lock_table_name` | no | derived | Override only if you must |
| `noncurrent_version_retention_days` | no | `90` | State version history |
| `tags` | no | `{}` | Extra tags |

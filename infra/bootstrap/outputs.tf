output "state_bucket_name" {
  description = "Put this in ../backend.tf as the bucket, or in backend.hcl."
  value       = aws_s3_bucket.state.id
}

output "lock_table_name" {
  description = "Put this in ../backend.tf as dynamodb_table."
  value       = aws_dynamodb_table.lock.name
}

output "region" {
  description = "Region for the backend block."
  value       = var.aws_region
}

output "backend_config" {
  description = "Paste-ready backend configuration for ../backend.tf."
  value       = <<-EOT
    terraform {
      backend "s3" {
        bucket         = "${aws_s3_bucket.state.id}"
        key            = "${var.project_name}/site/terraform.tfstate"
        region         = "${var.aws_region}"
        dynamodb_table = "${aws_dynamodb_table.lock.name}"
        encrypt        = true
      }
    }
  EOT
}

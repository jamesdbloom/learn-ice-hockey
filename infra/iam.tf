# ---------------------------------------------------------------------------
# GitHub Actions OIDC
#
# No long-lived AWS keys in GitHub. Workflows exchange a short-lived GitHub
# token for a short-lived AWS role session.
#
# An AWS account can hold exactly one OIDC provider per URL. MockServer may
# already have created this one, in which case creating a second fails with
# EntityAlreadyExists — hence the guard. Check before you set it:
#
#   aws iam list-open-id-connect-providers
# ---------------------------------------------------------------------------

resource "aws_iam_openid_connect_provider" "github" {
  count = var.create_oidc_provider ? 1 : 0

  url             = "https://${local.github_oidc_url}"
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = var.oidc_thumbprint_list

  tags = {
    Name = "${local.name_prefix}-github-oidc"
  }
}

# ---------------------------------------------------------------------------
# Trust policy
#
# Scoped to one repository and one branch. `sub` is matched with StringEquals,
# not StringLike, so there is no wildcard for another repo to slip through —
# and `aud` is checked as well, which is what stops a token minted for a
# different audience being replayed here.
# ---------------------------------------------------------------------------

data "aws_iam_policy_document" "github_actions_trust" {
  statement {
    sid     = "GitHubActionsOIDC"
    effect  = "Allow"
    actions = ["sts:AssumeRoleWithWebIdentity"]

    principals {
      type        = "Federated"
      identifiers = [local.github_oidc_provider_arn]
    }

    condition {
      test     = "StringEquals"
      variable = "${local.github_oidc_url}:aud"
      values   = ["sts.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "${local.github_oidc_url}:sub"
      values   = [local.github_oidc_subject]
    }
  }
}

resource "aws_iam_role" "github_actions" {
  name        = "${local.name_prefix}-github-deploy"
  description = "Deploy role for ${var.github_repository}@${var.github_branch}. Scoped to this project's bucket and distribution only."
  path        = "/${var.project_name}/"

  assume_role_policy = data.aws_iam_policy_document.github_actions_trust.json

  # Hard ceiling on what this role can ever do. See the boundary policy below.
  permissions_boundary = aws_iam_policy.github_actions_boundary.arn

  # A deploy is minutes, not hours.
  max_session_duration = 3600

  tags = {
    Name = "${local.name_prefix}-github-deploy"
  }
}

# ---------------------------------------------------------------------------
# Permissions
#
# Every statement names a concrete ARN. There is no `Resource: "*"` anywhere,
# because this account also holds MockServer's buckets and distributions and a
# wildcard here would reach them.
# ---------------------------------------------------------------------------

data "aws_iam_policy_document" "github_actions_deploy" {
  # Enumerate the site bucket, so `aws s3 sync --delete` can work out what to
  # remove. Bucket-level actions take the bucket ARN, not the object ARN.
  statement {
    sid    = "ListSiteBucketOnly"
    effect = "Allow"

    actions = [
      "s3:ListBucket",
      "s3:ListBucketVersions",
      "s3:GetBucketLocation",
    ]

    resources = [aws_s3_bucket.site.arn]
  }

  # Read and write objects in that bucket, and nothing else.
  statement {
    sid    = "WriteSiteObjectsOnly"
    effect = "Allow"

    actions = [
      "s3:GetObject",
      "s3:GetObjectVersion",
      "s3:PutObject",
      "s3:DeleteObject",
    ]

    resources = ["${aws_s3_bucket.site.arn}/*"]
  }

  # Invalidate this distribution. CreateInvalidation is ARN-scopable, so the
  # role cannot invalidate MockServer's cache — which would be a real and
  # expensive way to hurt an unrelated production service.
  statement {
    sid    = "InvalidateThisDistributionOnly"
    effect = "Allow"

    actions = [
      "cloudfront:CreateInvalidation",
      "cloudfront:GetInvalidation",
      "cloudfront:ListInvalidations",
      "cloudfront:GetDistribution",
    ]

    resources = [aws_cloudfront_distribution.site.arn]
  }
}

resource "aws_iam_policy" "github_actions_deploy" {
  name        = "${local.name_prefix}-github-deploy"
  description = "Least-privilege deploy permissions for ${var.project_name}: this bucket, this distribution, nothing else."
  path        = "/${var.project_name}/"
  policy      = data.aws_iam_policy_document.github_actions_deploy.json

  tags = {
    Name = "${local.name_prefix}-github-deploy"
  }
}

resource "aws_iam_role_policy_attachment" "github_actions_deploy" {
  role       = aws_iam_role.github_actions.name
  policy_arn = aws_iam_policy.github_actions_deploy.arn
}

# ---------------------------------------------------------------------------
# Belt and braces
#
# The permissions policy above already grants nothing outside this project. A
# permissions boundary makes that structural: even if someone later attaches a
# broader policy to this role by mistake, the effective permissions cannot
# exceed what is listed here.
# ---------------------------------------------------------------------------

data "aws_iam_policy_document" "github_actions_boundary" {
  statement {
    sid    = "MaxPermissionsThisProjectOnly"
    effect = "Allow"

    actions = [
      "s3:ListBucket",
      "s3:ListBucketVersions",
      "s3:GetBucketLocation",
      "s3:GetObject",
      "s3:GetObjectVersion",
      "s3:PutObject",
      "s3:DeleteObject",
      "cloudfront:CreateInvalidation",
      "cloudfront:GetInvalidation",
      "cloudfront:ListInvalidations",
      "cloudfront:GetDistribution",
    ]

    resources = [
      aws_s3_bucket.site.arn,
      "${aws_s3_bucket.site.arn}/*",
      aws_cloudfront_distribution.site.arn,
    ]
  }
}

resource "aws_iam_policy" "github_actions_boundary" {
  name        = "${local.name_prefix}-github-deploy-boundary"
  description = "Permissions boundary capping the ${var.project_name} deploy role to this project's resources."
  path        = "/${var.project_name}/"
  policy      = data.aws_iam_policy_document.github_actions_boundary.json

  tags = {
    Name = "${local.name_prefix}-github-deploy-boundary"
  }
}

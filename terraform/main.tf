terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.54.1"
    }
  }

  cloud {
    organization = "Storipress"
    workspaces {
      name = "fonts-next"
    }
  }

  required_version = "1.5.7"
}

provider "aws" {
  region     = "us-east-1"
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}

resource "aws_s3_object" "fonts" {
  bucket      = "storipress"
  key         = "assets/storipress-next/styles/iconfont.css"
  source      = "../dist/iconfont.css"
  source_hash = filemd5("../dist/iconfont.css")
}

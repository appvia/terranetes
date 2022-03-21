terraform {
  required_providers {
    kind = {
      source  = "kyma-incubator/kind"
      version = "0.0.11"
    }
    helm = {
      source  = "hashicorp/helm"
      version = "2.4.1"
    }
  }
}

provider "kind" {}

provider "helm" {
  kubernetes {
    config_path    = "~/.kube/config"
    config_context = "kind-terranetes"
  }
}

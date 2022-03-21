variable "kind_node_image_version" {
  description = "The Kind Node Image version used for running nested containers, systemd, and Kubernetes components"
  type        = string
  default     = "v1.23.4"
}

variable "tf_operator_version" {
  description = "The Terraform Operator Helm Chart version"
  type        = string
  default     = "v0.2.2"
}

variable "tf_operator_namespace" {
  description = "The Kubernetes Namespace that the Terraform Operator will be installed in"
  type        = string
  default     = "tf-system"
}

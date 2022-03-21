resource "kind_cluster" "local" {
  name           = "local"
  node_image     = "kindest/node:${var.kind_node_image_version}"
  wait_for_ready = true
}

resource "helm_release" "terraform_operator" {
  name             = "terraform-operator"
  repository       = "https://isaaguilar.github.io/helm-charts"
  chart            = "terraform-operator"
  version          = var.tf_operator_version
  namespace        = var.tf_operator_namespace
  create_namespace = true
  depends_on       = [kind_cluster.local]
}

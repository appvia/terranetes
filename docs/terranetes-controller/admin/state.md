---
sidebar_position: 5
---

# Terraform State

Terraform maintains a state that encapsulates information about the managed infrastructure and configuration. This state serves as a critical component, enabling Terraform to establish a correlation between real-world resources and the corresponding configuration, manage metadata, and optimize performance for large-scale infrastructures. For a comprehensive understanding of Terraform state, we recommend consulting [the official documentation](https://www.terraform.io/language/state).

### Where is the state?

The Terraform state for all [Configurations](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) is, by default, stored within [Kubernetes secrets](https://kubernetes.io/docs/concepts/configuration/secret/) residing in the controller namespace. This storage configuration is facilitated through the utilization of a specific template as the backend.

Key aspects of this configuration include:

* The namespace is consistently set to the controller namespace.
* The suffix is derived from the [Configuration](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) UUID.
* It is important to note that the [kubernetes backend](https://www.terraform.io/language/settings/backends/kubernetes) automatically prepends `tfstate-` to the state secrets, resulting in names of the format `tfstate-UUID`.

The following Terraform configuration snippet illustrates the implementation of this backend:

```go
var backendTF = `
terraform {
  backend "kubernetes" {
    in_cluster_config = true
    namespace         = "{{ .controller.namespace }}"
    secret_suffix     = "{{ .controller.suffix }}"
  }
}
```

### How to change state backend?

:::tip
Please note that the capability to modify the state backend is only available starting from version v0.3.1.
:::

While utilizing Kubernetes as a state backend offers advantages in terms of ease of use, it also presents several drawbacks.

* It is essential to implement backup procedures for the state secrets.
* Manipulating or operating on the Terraform state, such as using taints, becomes more challenging.
* The Terraform state lacks versioning, making rollbacks more difficult to execute.
* It is not possible to reference the state using the [remote_state_data](https://www.terraform.io/language/state/remote-state-data) resource.
* The Terraform state is inherently tied to the Cluster.

Platform administrators can modify the state backend by following the outlined steps.

#### Create a template for the backend to use

To initiate the process of modifying the state backend, it is essential to create a Kubernetes secret within the controller namespace that contains the template for the backend configuration. This can be achieved by executing the following steps:

1. First, create a file named `backend.tf` with the following content:

```bash
cat <<EOF > backend.tf
terraform {
  backend "s3" {
    bucket     = "terranetes-controller-state"
    key        = "cluster_one/{{ .namespace }}/{{ .name }}"
    region     = "eu-west-2"
    access_key = "AWS_ACCESS_KEY_ID"
    secret_key = "AWS_SECRET_ACCESS_KEY"
  }
}
EOF
```
This template is designed to utilize the following variables:

* `controller.namespace`: Represents the namespace where the terranetes-controller is running.
* `controller.labels`: A map of all the labels associated with the terranetes controller.
* `controller.suffix`: A default suffix used by the controller for secrets, with a default value of `tfstate`.
* `configuration`: Represents the entire Configuration object, allowing for references to specific attributes such as `configuration.Metadata.Namespace`.
* `name`: The name of the Configuration being executed.
* `namespace`: Represents the namespace of the Configuration and can be used as a S3 key per namespace, for example.

:::tip
It is important to note that the entire [Configuration](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) resource is injected into the context of the template, enabling references to any attribute via `configuration.PATH`.
:::

2. Once the `backend.tf` file has been created, a Kubernetes secret can be generated from this file using the following command:

```shell
kubectl -n terraform-system create secret generic backend-s3 --from-file=backend.tf=backend.tf
```

3. Update the controller to use the backend template

To integrate the backend template with the controller, follow the steps outlined below.

**For Helm Chart Users:**

When utilizing the Helm chart, you need to update the configuration as follows:

```yaml
controller:
  # Name of a secret in the controller namespace which contains the template to use
  # for the backend state
  backendTemplate: backend-s3
```

**Important Note:** For Helm chart versions `>= v0.6.0`, the configuration format has been modified. Please use the following format:

```yaml
backend:
  name: backend-s3
  # This is an optional field. If provided, it will be used to generate the 'backend.name' Kubernetes secret.
  # The content of this field will be used as the template for the secret's data.
  template: |
    TEMPLATE_CONTENT
```

**For Self-Deployed Controller:**

If you are deploying the controller manually, ensure you update the command line flag to `--backend-template=backend-s3`.

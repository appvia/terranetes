---
sidebar_position: 1
sidebar_class_name: green
---
# Configure Credentials for a Terraform Module

Credentials to access the cloud are represented by the [Providers](/reference/providers.terraform.appvia.io.md) in the terraform-controller, a namespaced resource that usually lives in the same location as the controller. When defining a terraform module, developers reference an existing provider using `spec.providerRef`, and then tie the resource and credentials together.

:::tip
Credentials never leave the terraform-controller namespace to remove the risk of exposure.
:::

## Use a provider

To reference an existing provider apply the following Terraform configuration:

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Configuration
metadata:
  name: bucket
spec:
  providerRef:
    name: default
    namespace: terraform-system
  module: <url>
  variables: {}
```

## Configuring credentials

In [Providers](/reference/providers.terraform.appvia.io.md) we currently support these options for configuring credentials: 

* `spec.source: secret` References a kubernetes secret and mounts as environment variables into the executor.
* `spec.source: injected` Runs the executor with a defined service account. This is used to support pod identity or IRSA in AWS.

These are described below.

### Configure by Secret

:::tip
Static credentials are the easiest to get going, but moving forward we highly recommend using pod identity and offloading credentials management to the cloud provider.
:::

All the terraform providers support configuration using environment variables, e.g., for AWS you can use `AWS_REGION`, `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`. Simply create a Kubernetes secret in the controller namespace (defaults to `terraform-system`) with these environment variables defined:

```shell
$ kubectl -n terraform-system create secret generic aws \
  --from-literal=AWS_ACCESS_KEY_ID=<ID> \
  --from-literal=AWS_SECRET_ACCESS_KEY=<SECRET> \
  --from-literal=AWS_REGION=<REGION>
```

The process is the same for all the providers:
* [Amazon](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
* [Google Cloud](https://registry.terraform.io/providers/hashicorp/google/latest)
* [Azure](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs)

Presently we support using `google`, `aws` and `azurerm` as providers. The controller is not limited to these, but for additional providers you'll have to define them yourself in the module.

Once the secret is provisioned you can create a Provider for it:

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Provider
metadata:
  # This name should match the `providerRef` in the Configuration.
  name: default
spec:
  source: secret
  provider: aws
  secretRef:
    namespace: terraform-system
    name: aws
```

### Configure Injected Identity

Injected identities are known by a few names depending on the cloud provider you are using. On 

* AWS - [IRSA](https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/setting-up-enable-IAM.html) 
* Google - [workload identity](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity) 
* Azure - [pod identity](https://docs.microsoft.com/en-us/azure/aks/use-azure-ad-pod-identity)

In all cases these perform the same task:
* One or more roles are configured in the cloud provider with defined permissions.
* A binding (cloud vendor dependent) is provisioned that gives a [service account](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/) in Kubernetes the ability to retrieve short-term credentials for a defined Role.
* The cloud vendor generates ephemeral credentials and returns them to the workload.

Under this scenario all credentials management is offloaded to the cloud vendor and ensures the credentials used are short-lived and expire, thus improving the overall security.

Configuring injected identities is cloud dependent and the complete details are beyond the scope of this document.

### Configuring IRSA for Amazon Web Services

1. Before using IRSA in EKS, you must configure an OIDC connector. For details, see [Technical overview](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts-technical-overview.html).

  :::tip
  If you can build your clusters via Terraform, take a look at https://registry.terraform.io/modules/terraform-aws-modules/iam/aws/latest/submodules/iam-role-for-service-accounts-eks
  :::

2. Update your helm values in a similar way to the example below. The important values here are the annotations for the service account used by the executor; this must contain the ARN for the role to be used.

```yaml
rbac:
  # Indicates we should create all the necessary rbac resources
  create: true
  # ServiceAccount for the controller
  controller:
    # indicates we should create the terraform-controller service account
    create: true
    # annotations is a collection of annotations which should be added to the ServiceAccount
    annotations: {}

  # Configuration for the terraform executor service account
  executor:
    # indicates we should create the terraform-executor service account
    create: true
    # annotations is a collection of annotations which should be added to the ServiceAccount
    annotations:
      eks.amazonaws.com/role-arn: arn:aws:iam::<AWS_ACCOUNT_ID>:role/<NAME_OF_ROLE>
```

When the pod is created:
1. The EKS controlplane sees the annotation on the service account.
2. It checks for a binding between the service account and the defined IAM role.
3. If such a binding exists, it generates credentials and injects them via a secret as environment variables into the pod.

## Configure RBAC for Providers

Providers support the ability to filter who can use them. When a [`spec.selector`](/reference/providers.terraform.appvia.io#v1alpha1-.spec.selector) is defined on the provider, any configuration referencing it must pass the filter, otherwise it will fail.

:::important
By default an empty `spec.selector` dictates all [Configurations](/reference/configurations.terraform.appvia.io.md) in the cluster can use it. This is useful to provide limited scope credentials to all teams.
:::

Using the `spec.selector` field you can scope the credentials based on namespace and resource labels. For example you could add a [Provider](/reference/providers.terraform.appvia.io.md) for system namespaces only:

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Provider
metadata:
  # This name should match the `providerRef` in the Terraform Configuration (see above example).
  name: admin
spec:
  selector:
    namespace:
      matchExpressions:
        - key: kubernetes.io/metadata.name
          operator: In
          values: [kube-system]
  source: secret
  provider: aws
  secretRef:
    namespace: terraform-system
    name: admin
```

At the same time you could provide another limited set of permissions to all cluster users by removing the selector.

This feature could also be used to map to different pod identity roles in the cloud vendor, or different service account mapped to [Vault](https://www.vaultproject.io/).

---
sidebar_position: 1
sidebar_class_name: green
---
# Configuring Providers

In the context of the controller, cloud access credentials are embodied by the [Provider](../reference/providers.terraform.appvia.io.md) Custom Resource Definition (CRD), a cluster-scoped resource. When defining a Terraform module, developers reference a provider using the `spec.providerRef` field, thereby establishing a connection between the resource and the corresponding credentials.

:::important
It is essential to note that credentials are confined within the controller namespace, effectively mitigating the risk of exposure.

## Utilizing a Provider

To effectively reference a Provider within your Terraform configuration, the provider name must be referenced via `spec.providerRef.name`:

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Configuration
metadata:
  name: bucket
spec:
  providerRef:
    name: aws
  module: <url>
  variables: {}
```

### Default Provider

To simplify the process for developers, platform administrators can designate a [Provider](../reference/providers.terraform.appvia.io.md) as the default. This configuration ensures that any [Configuration](../reference/configurations.terraform.appvia.io.md) lacking a specified `spec.providerRef.name` will automatically utilize the default Provider.

:::important
Please note that this feature is only available starting from the v0.3.19 release.
:::

To mark a [Provider](../reference/providers.terraform.appvia.io.md) as the default, administrators should apply the annotation `terranetes.appvia.io/default-provider: "true"`. It is crucial to understand that only one [Provider](../reference/providers.terraform.appvia.io.md) can be designated as the default at any given time.

```yaml
---
apiVersion: terraform.appvia.io/v1alpha1
kind: Provider
metadata:
  name: aws
  annotations:
    terranetes.appvia.io/default-provider: "true"
spec:
```

## Credential Configuration Options

The [Provider](../reference/providers.terraform.appvia.io.md) resource supports two primary methods for configuring credentials:

1. **Secret-based Credentials**: Specified by `spec.source: secret`, this approach references a Kubernetes secret, which is then mounted as environment variables within the executor. This method is suitable for static credentials.
2. **Injected Credentials**: Identified by `spec.source: injected`, this option runs the executor with a predefined service account. This configuration is particularly useful for supporting pod identity or IRSA (Identity and Resource Access Management Service) in AWS environments.

A detailed explanation of these credential configuration options is provided below.

### Configuring Providers Using Secrets

:::tip
While static credentials offer a straightforward approach to getting started, we strongly recommend adopting pod identity and delegating credentials management to the cloud provider for enhanced security and manageability.
:::

Terraform providers universally support configuration through environment variables. For instance, when working with AWS, you can utilize `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`. To implement this, create a Kubernetes secret within the controller namespace (defaulting to `terraform-system`) that defines these environment variables:

```shell
$ kubectl -n terraform-system create secret generic aws \
  --from-literal=AWS_ACCESS_KEY_ID=<ID> \
  --from-literal=AWS_SECRET_ACCESS_KEY=<SECRET> \
  --from-literal=AWS_REGION=<REGION>
```

:::important
It is crucial to note that static credentials secrets must reside within the same namespace as the Terraform controller itself. This is because the credentials are mounted into the job as environment variables.
:::

This process applies uniformly to all supported providers:
* [Amazon](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
* [Google Cloud](https://registry.terraform.io/providers/hashicorp/google/latest)
* [Azure](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs)

Currently, we support the use of `google`, `aws`, and `azurerm` as providers. Although the controller is not limited to these providers, any additional providers must be defined within the module.

After provisioning the secret, you can create a Provider for it:

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Provider
metadata:
  # This name should match the `providerRef` in the Configuration.
  name: default
spec:
  summary: Default providers for all configurations
  source: secret
  provider: aws
  secretRef:
    namespace: terraform-system
    name: aws
```

### Configuring Injected Identity

Injected identity configurations are referred to by different names depending on the cloud provider in use. Specifically:

* Amazon Web Services (AWS) - [IRSA](https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/setting-up-enable-IAM.html)
* Google Cloud Platform - [workload identity](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity)
* Microsoft Azure - [pod identity](https://docs.microsoft.com/en-us/azure/aks/use-azure-ad-pod-identity)

Across all these cloud providers, the injected identity mechanism serves a common purpose:

* One or more roles are defined within the cloud provider, each with explicitly assigned permissions.
* A cloud provider-specific binding is established, granting a Kubernetes [service account](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/) the capability to obtain short-lived credentials for a specified role.
* The cloud provider generates ephemeral credentials and supplies them to the workload.

This approach effectively delegates all credentials management to the cloud provider, ensuring that the credentials utilized are transient and expire, thereby enhancing overall security.

The process of configuring injected identities is specific to each cloud provider, and the detailed procedures are outside the scope of this document.

### Configuring IRSA for Amazon Web Services

To utilize IRSA with EKS, it is essential to first configure an OIDC connector. For a detailed explanation, refer to the [Technical Overview](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts-technical-overview.html).

:::tip
For clusters created using Terraform, consider utilizing the Terraform module at https://registry.terraform.io/modules/terraform-aws-modules/iam/aws/latest/submodules/iam-role-for-service-accounts-eks.
:::

Next, update your Helm values as shown in the example below. The crucial aspect is the annotation for the service account employed by the executor, which must include the ARN of the role to be utilized.

```yaml
rbac:
  # Indicates the creation of all necessary RBAC resources
  create: true
  # ServiceAccount for the controller
  controller:
    # Indicates the creation of the terranetes-controller service account
    create: true
    # annotations is a collection of annotations to be added to the ServiceAccount
    annotations: {}

  # Configuration for the terraform executor service account
  executor:
    # Indicates the creation of the terraform-executor service account
    create: true
    # annotations is a collection of annotations to be added to the ServiceAccount
    annotations:
      eks.amazonaws.com/role-arn: arn:aws:iam::<AWS_ACCOUNT_ID>:role/<NAME_OF_ROLE>
```

Upon pod creation:
1. The EKS control plane identifies the annotation on the service account.
2. It verifies the existence of a binding between the service account and the specified IAM role.
3. If a binding is found, it generates credentials and injects them via a secret as environment variables into the pod.

### Configuring Azure AAD Pod Identity

To effectively utilize Azure's Pod identity service, the following steps must be undertaken:

1. **Ensure Provider MSI Configuration**: It is essential to configure the Provider with the `use_msi: true` setting to enable the use of Managed Service Identity (MSI) for authentication. This configuration is crucial to prevent the AzureRM provider from attempting to fallback to the `az` CLI, which may result in errors due to the absence of the binary.

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Provider
metadata:
  name: azurerm
spec:
  configuration:
    subscription_id: AZURE_SUBSCRIPTION_ID
    tenant_id: AZURE_TENANT_ID
    use_msi: true
  source: injected
  provider: azurerm
```

2. **Provision Azure Identity in Subscription**: Follow the standard walkthrough for provisioning Azure Identity in the subscription, as outlined in the Azure documentation (https://azure.github.io/aad-pod-identity/docs/demo/standard_walkthrough/).
3. **Provision Azure Identity in Controller Namespace**: Create an AzureIdentity resource in the controller namespace to manage the identity for the pods within that namespace.

```yaml
apiVersion: aadpodidentity.k8s.io/v1
kind: AzureIdentity
metadata:
  annotations:
    aadpodidentity.k8s.io/Behavior: namespaced
  generation: 3
  name: terranetes-controller
  namespace: terraform-system
spec:
  clientID: CLIENT_ID
  resourceID: /subscriptions/SUBSCRIPTION/resourcegroups/RESOURCE_GROUP/providers/Microsoft.ManagedIdentity/userAssignedIdentities/IDENTITY
  type: 0
```

4. **Provision Binding to Pods**: Create an AzureIdentityBinding resource to associate the AzureIdentity with the pods that require access to the Azure resources. This binding is crucial for filtering pods in the namespace and granting them the necessary permissions.

```yaml
apiVersion: aadpodidentity.k8s.io/v1
kind: AzureIdentityBinding
metadata:
  name: terranetes-controller
  namespace: terraform-system
spec:
  azureIdentity: IDENTITY
  selector: terranetes-executor
```

:::caution
Details on binding can be found [here](https://azure.github.io/aad-pod-identity/docs/concepts/azureidentitybinding/).

As of \<= v0.3.30 the pod selector is not configurable in the controller to ensure you use `terranetes-executor` on the binding.
:::

#### Service Account Permissions

It is crucial to ensure the correct Role-Based Access Control (RBAC) permissions are in place when utilizing or creating additional service accounts for a Provider. This is particularly important when referencing a service account in a Provider that leverages IRSA, such as 'admin' in the terraform-system namespace.

By default, the terraform controller employs the service account 'terraform-executor' to execute jobs. If you require additional service accounts for Providers, for instance, to use with `spec.source: injected` or to utilize another service account, it is essential to establish the correct RBAC permissions. The terraform job relies on Kubernetes secrets to store the terraform state and leases for locking purposes. Therefore, the following permissions must be configured:

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: NAME_OF_ROLE
  namespace: terraform-system
rules:
  - apiGroups:
      - coordination.k8s.io
    resources:
      - leases
    verbs:
      - create
      - delete
      - get
      - list
      - update
      - watch
  - apiGroups:
      - ""
    resources:
      - configmaps
    verbs:
      - get
      - list
      - watch
  - apiGroups:
      - ""
    resources:
      - secrets
    verbs:
      - create
      - delete
      - get
      - list
      - patch
      - update
      - watch
```

Additionally, a RoleBinding is required to associate the Role with the service account.

```yaml
  ---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: terraform-executor
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
    name: NAME_OF_ROLE
subjects:
  - kind: ServiceAccount
    name: terraform-executor
    namespace: terraform-system
```

The absence of these permissions will result in terraform execution failures due to access denied errors on secrets and/or leases.

## Configure RBAC for providers

Providers support the ability to filter who can use them. When a [`spec.selector`](../reference/providers.terraform.appvia.io.md#v1alpha1-.spec.selector) is defined on the provider, any configuration referencing it must pass the filter, otherwise it will fail.

It is important to note that by default an empty `spec.selector` dictates all [Configurations](../reference/configurations.terraform.appvia.io.md) in the cluster can use it. This is useful to provide limited scope credentials to all teams.

Using the `spec.selector` field you can scope the credentials based on namespace and resource labels. For example you could add a [Provider](../reference/providers.terraform.appvia.io.md) for system namespaces only:

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

Concurrently, you can offer a distinct set of limited permissions to all cluster users by omitting the selector.

This feature also enables the mapping of different pod identity roles to cloud vendors or distinct service accounts linked to [Vault](https://www.vaultproject.io/).

## Provider Configuration

The `spec.configuration` field within the [Provider](docs/terranetes-controller/reference/providers.terraform.appvia.io.md) resource allows for the integration of supplementary configuration settings. A notable example is the Azure provider, which includes a [features](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/guides/features-block) block that can be specifically tailored within the provider configuration.

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Provider
metadata:
  name: azure
spec:
  # Anything in configuration section is converting to HCL and configured the provider
  configuration:
    features:
      api_management:
        purge_soft_delete_on_destroy: true
        recover_soft_deleted_api_managements: true
      virtual_machine:
        graceful_shutdown: true
  source: secret
  provider: azurerm
  secretRef:
    namespace: terraform-system
    name: admin
```

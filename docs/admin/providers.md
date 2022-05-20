---
sidebar_position: 1
sidebar_class_name: green
---
# Configure Credentials

Credentials to access the cloud are represented by the [Providers](docs/reference/providers.terraform.appvia.io.md) in the terraform-controller. A namespaced resource which usually live in the same location as the controller, when defining a terraform module developers reference the provider using the `spec.providerRef`, tieing the requirements and credentials together.

:::tip
Credentials never leave the terraform-controller namespace to remove the risk of exposure.
:::

## Using a provider

Take the follow terraform configuration

```YAML
spec:
  providerRef:
    name: default
    namespace: terraform-system
  module: [URL]
  variables: {}

```

At presently we support.

* `spec.source: secret` which references a kubernetes secret and mounts as environment variables into the executor.
* `spec.source: injected` which runs the executor with a defined service account. This is used to support pod identity or IRSA in AWS.

## Configuring by Secret

:::tip
Static credentials are the easiest to get going, but moving forward we would highly recommend using pod identity and off loading the credential management to the cloud.
:::

All the terraform providers support configuration via environment variables i.e for aws you can use `AWS_REGION`, `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`; simply create a kubernetes secret in the controller namespace (defaults to `terraform-system`) with these environment variables defined.

```shell
$ kubectl -n terraform-system create secret generic aws \
  --from-literal=AWS_ACCESS_KEY_ID=<ID> \
  --from-literal=AWS_SECRET_ACCESS_KEY=<SECRET> \
  --from-literal=AWS_REGION=<REGION>
```

The process is the same for all the providers

* Amazon - https://registry.terraform.io/providers/hashicorp/aws/latest/docs
* Google Cloud - https://registry.terraform.io/providers/hashicorp/google/latest/
* Azure https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs

Presently we supports using `google`, `aws` and `azurerm` as providers. Note the controller is not limited to these, but for additional providers you'll have to define them yourself in the module.

Once the secret is provisioned you can create a Provider for it, for example AWS

```YAML
apiVersion: terraform.appvia.io/v1alpha1
kind: Provider
metadata:
  name: default
spec:
  source: secret
  provider: aws
  secretRef:
    namespace: terraform-system
    name: aws
```

## Configuring Injected Identity

Injected identities are known by a few names depending on the cloud provider you are using. On AWS it's [IRSA](https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/setting-up-enable-IAM.html), Google has [workload identity](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity) and Azure calls it [pod identity](https://docs.microsoft.com/en-us/azure/aks/use-azure-ad-pod-identity).

In all cases these perform the same task

* One of more roles are configured in the cloud provider with defined permissions.
* A binding _(cloud vendor dependent)_ is provisioned which permits a [service account](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/) in the Kubernetes the ability to retrieve short term credentials to a defined Role.
* The cloud vendor generates ephemeral credentials and returns them to the workload.

Under this scenario all credential management is offloaded to the cloud vendor and ensures the credentials used are short-lived and expire; improving the overall security.

Configuring injected identities is of course cloud dependent and the complete details are beyond the scope of this, but

### Configuring IRSA for Amazon

1. Before using IRSA in EKS you need to configure an OIDC connector, the detail of which can be found [here](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts-technical-overview.html).

:::tip
If you can building your clusters via Terraform take a look at https://registry.terraform.io/modules/terraform-aws-modules/iam/aws/latest/submodules/iam-role-for-service-accounts-eks.
:::

2. Next, update your helm values similar to the below. The important values here are the annotations the service account used by the executor; this must contain the ARN for the role to be used.

```YAML
rbac:
  # Indicates we should create all the rbac
  create: true
  # service account for the controller
  controller:
    # Indicates we should provision the rbac
    create: true
    # annotations is a collection of annotations which should be added
    annotations: {}

  # Configuration for the terraform executor service account
  executor:
    # indicates we should create the terraform-executor service account
    create: true
    # annotations is a collection of annotations which should be added
    annotations:
      eks.amazonaws.com/role-arn: arn:aws:iam::<AWS_ACCOUNT_ID>:role/<NAME_OF_ROLE>
```

When the pod is created

1. The EKS controlplane will see the annotation on the service account
2. It will check for a binding between the service account and the defined IAM role.
3. If such a binding exists, it will generate credentials and inject them via a secret as environment variables into the pod.


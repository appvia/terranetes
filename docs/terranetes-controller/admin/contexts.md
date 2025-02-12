---
sidebar_position: 3
sidebar_class_name: green
---
# Contexts

[Contexts](../reference/contexts.terraform.appvia.io.md) serve as a mechanism for sharing common configuration elements across [Configurations](../reference/configurations.terraform.appvia.io.md). This resource type is scoped at the cluster level, allowing any Configuration within the cluster to utilize it.

:::tip
Please note that this feature is only accessible starting from version 0.3.25 and onwards.
:::

## Create a Context

To create a [Context](../reference/contexts.terraform.appvia.io.md), follow the example below.

```yaml
---
apiVersion: terraform.appvia.io/v1alpha1
kind: Context
metadata:
  name: default
spec:
  #
  ## All variables MUST follow the pattern of 'description' and 'value'. The
  ## value can be any complex or simple type (boolean, int, map, object etc)
  #
  variables:
    # The name of the variable
    vpc_id:
      # A description for the consumer of the input
      description: The network identifier we are residing in
      # The value of the variable
      value: vpc-1223133113
    public_subnets_ids:
      # A description for the consumer of the input
      description: |
        A collection of subnet id's which are publicly available, i.e.
        they are attached to an internet gateway
      # The value of the variable
      value:
        - subnet-12312312312
        - subnet-32332321312
```

The resource contains a map of variables; each variable MUST have a `description` and `value`, with the value being any simple (integer, boolean, string) or complex type (maps, list, maps of maps and so forth).

## Configure Preloading

:::warning
At present, only the **AWS** cloud provider supports automatic preloading. While other providers are in the pipeline, they have not yet been implemented.
:::

Terranetes is equipped with the capability to automatically populate a [Context](../reference/contexts.terraform.appvia.io.md) by retrieving details about the cluster where the controller is located and populating them into the [Context](../reference/contexts.terraform.appvia.io.md). This feature is currently limited to AWS.

To leverage the preloading feature, it is necessary to modify the configuration of a [Provider](../reference/providers.terraform.appvia.io.md) by incorporating a `spec.preload` section. This section enables the preloading process to utilize the Provider's credentials for the purpose of retrieving information directly from the cloud vendor.

```yaml
---
apiVersion: terraform.appvia.io/v1alpha1
kind: Provider
metadata:
  name: aws
spec:
  # The source can be 'secret' or 'injected'. When using 'secret', you
  # must specify the spec.secretRef which defines the name of the
  # secret in the controller namespace containing the credentials.
  source: secret
  # The provider can be google, aws, azurerm, alicloud, azurestack, googleworkspace etc
  provider: aws
  # Provides configuration for the contextual data preloader (currently only
  # available for aws)
  preload:
    # Indicates if the preloading should be enabled
    enabled: true
    # Is the EKS cluster we use to pivot network and settings around
    cluster: eks
    # Is the cloud region the cluster above resides
    region: eu-west-2
    # Is the terranetes context resource we should provision
    context: default
  # Used when spec.source is secret.
  secretRef:
    namespace: terraform-system
    name: aws
```

The `spec.preload` in the [Provider](../reference/providers.terraform.appvia.io.md) requires the following information.

* `enabled` Indicates if we should preload any data into a [Context](../reference/contexts.terraform.appvia.io.md).
* `cluster` Is the cloud name of the cluster we reside in, i.e. the EKS cluster name.
* `region` Is the cloud region the cluster (`spec.preload.cluster`) resides in.
* `context` Is the name of the [Context](../reference/contexts.terraform.appvia.io.md) you wish to populate the values into.

Once this information has been defined, a [Context](../reference/contexts.terraform.appvia.io.md) resource will be automatically provisioned and preloaded with details, as shown below;

```yaml
$ k get contexts.terraform.appvia.io default  -o yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Context
metadata:
  generation: 1
  labels:
    terranetes.appvia.io/preload-provider-name: aws
  name: default
spec:
  variables:
    eks:
      description: AWS ARN for the Kubernetes cluster
      value: arn:aws:eks:eu-west-2:XXXXXXXXX:cluster/eks-test
    eks_cluster_security_group_id:
      description: The security group ID attached to the EKS cluster
      value: sg-XXXXXXXXX
    eks_endpoint:
      description: The endpoint for the EKS cluster
      value: https://XXXXXXXXXXXXXXXX.sk1.eu-west-2.eks.amazonaws.com
    eks_name:
      description: The name of the EKS cluster
      value: eks
    eks_platform_version:
      description: The platform version of the EKS cluster
      value: eks.6
    eks_private_access:
      description: Indicates whether or not the EKS cluster has private access enabled
      value: true
    eks_public_access:
      description: Indicates whether or not the EKS cluster has public access enabled
      value: false
    eks_public_access_cidrs:
      description: The CIDR blocks that are allowed access to the EKS cluster
      value:
      - 0.0.0.0/0
    eks_role_arn:
      description: The ARN of the IAM role that provides permissions for the EKS cluster
      value: arn:aws:iam::XXXXXXXXXX:role/eks-test-role
    eks_route_tables_ids:
      description: A list of all route tables id associate to the subnets which are
        part of the EKS cluster
      value:
      - rtb-04dbff51b83821XXX
     ....MORE VARIABLES
    vpc_id:
      description: The ID of the VPC used by the EKS cluster
      value: vpc-0a6f4fbb4bXXXXXXX
```

## How to reference a Context

Contexts can be referenced from any [Configuration](../reference/configurations.terraform.appvia.io.md) as follows:

```yaml
  ---
  apiVersion: terraform.appvia.io/v1alpha1
  kind: Configuration
  metadata:
    name: bucket
  spec:
    module: https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.10.1
    providerRef:
      name: aws
    valueFrom:
      - context: default # context to be used
        key: vpc_id
        name: vpc_id
```

The `spec.valueFrom` field in the Configuration CRD requires the name of the [Context](../reference/contexts.terraform.appvia.io.md) resource, the *key* being the name of the variable within the context, and the *name* representing the variable as it will be presented to the Terraform module. The *optional* field implies that both the context and any value reference can be omitted without causing a failure. By default, if either the context or the value is missing, the [Configuration](../reference/configurations.terraform.appvia.io.md) will be deferred until they are present.

## Utilizing a Custom Preload

Terranetes comes preconfigured with a loader to extract details from the cloud vendor, but it may not contain all the necessary details. This can be addressed in two ways:

a) A Configuration can reference multiple [Context](../reference/contexts.terraform.appvia.io.md) resources, allowing to use additional details or values.
b) Override the preload image in the controller and run a custom loader.

The first approach is straightforward and can be achieved through various means, including manual, CI, helm, and others. 

The second option, overloading the controller's preload images, requires updating the `--preload-image` argument. In the helm chart, this can be accomplished via:

```yaml
controller:
  images:
    preload: IMAGE:TAG
```

Note that the entrypoint when using this image is currently hardcoded, ensuring an executable at `/bin/preload`. The following arguments will also be passed, via environment variables, to the execution:

* `CLOUD` is the cloud vendor designation from the [Provider](../reference/providers.terraform.appvia.io.md) the preload is configured on, i.e., `spec.provider`.
* `CLUSTER` is the cluster name from the preload configuration, i.e., `spec.preload.cluster`.
* `CONTEXT` is the name of the context (`spec.preload.context`) defined in the [Provider](../reference/providers.terraform.appvia.io.md) configuration.
* `PROVIDER` is the name of the provider the preload was configured on, `metadata.name` on the [Provider](../reference/providers.terraform.appvia.io.md) resource.
* `REGION` is the cloud region configured in the [Provider](../reference/providers.terraform.appvia.io.md) preload configuration, i.e., `spec.preload.region`.

When utilizing a custom loader, the executable is responsible for two primary tasks:

* Retrieving the cloud details and constructing a valid [Context](../reference/contexts.terraform.appvia.io.md) resource.
* Creating or updating the `CONTEXT` in the Kubernetes cluster itself.

The controller is responsible for ensuring the execution occurs, handling job failures, and configuring the job with [Provider](../reference/providers.terraform.appvia.io.md) credentials.

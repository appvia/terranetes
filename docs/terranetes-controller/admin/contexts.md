---
sidebar_position: 3
sidebar_class_name: green
---
# Configuration Contexts

[Contexts](../reference/contexts.terraform.appvia.io.md) provide a means to share common configuration between [Configurations](../reference/configurations.terraform.appvia.io.md). The resource type is Cluster scoped and can be used by any Configuration in the cluster.

:::tip
This feature is only available from v0.3.25 onwards
:::

## Create a Context

You can create a [Context](../reference/contexts.terraform.appvia.io.md) like so.

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
    # Is the name of the variable
    vpc_id:
      # Provides a description to the consumer of the input
      description: Is the network identifier we are residing
      # The value of the value
      value: vpc-1223133113
    public_subnets_ids:
      # Provides a description to the consumer of the input
      description: |
        Is a collection of subnet id's which are publicly available i.e.
        they are attached to an internet gateway
      # The value of the value
      value:
        - subnet-12312312312
        - subnet-32332321312
```

The resource contains a map of variables; note each variable MUST have a `description` and `value`, with the value being any simple (integer, boolean, string) or complex type (maps, list, maps or maps and so forth).

## Configure Preloading

Terranetes has the ability to populate a [Context](../reference/contexts.terraform.appvia.io.md) automatically; retrieving details about the cluster the controller resides and populating them into a [Context](../reference/contexts.terraform.appvia.io.md). Currently this feature is limited to AWS only.

In order to use the feature we need to update the configuration of a [Provider](../reference/providers.terraform.appvia.io.md); It is the [Providers](../reference/providers.terraform.appvia.io.md) credentials which the preloading will use to retrieve the information from the cloud vendor.

```yaml
---
apiVersion: terraform.appvia.io/v1alpha1
kind: Provider
metadata:
  name: aws
spec:
  # Source and be 'secret' or 'injected'. When using a 'secret' you
  # must specify the spec.secretRef which defines the name of the
  # secret in the controller namespace containing the credentials.
  source: secret
  # Provider can be google, aws, azurerm, alicloud, azurestack, googleworkspace etc
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

The `spec.preload` in the [Provider](../reference/providers.terraform.appvia.io.md) needs the following information.

* `enabled` Indicates if we should preload any data into a [Context](../reference/contexts.terraform.appvia.io.md).
* `cluster` Is the cloud name of the cluster we reside in i.e. the EKS cluster name.
* `region` Is the cloud region the cluster (`spec.preload.cluster`) resides in.
* `context` Is the name of the [Context](../reference/contexts.terraform.appvia.io.md) you wish to populate the values into.

Once this information has been defined, a [Context](../reference/contexts.terraform.appvia.io.md) resource be automatically provisioned and preloaded with details, as such;

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

Contexts can be referenced from any [Configuration](../reference/configurations.terraform.appvia.io.md) like so

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
      - context: default
        key: vpc_id
        name: vpc_id
```

The `spec.valueFrom` requires the [Context](../reference/contexts.terraform.appvia.io.md) name, the key is the name of the variable in the context and the name is the variable you need to present this as to the terraform module. The optional field simply means both the context and any value reference, if they don't exist, can continue without failure. By default, anything missing (context or value) will defer the [Configuration](../reference/configurations.terraform.appvia.io.md) until they are present.

## Using a Custom Preload

Terranetes comes prebuilt with a loader to extract details from the cloud vendor, but perhaps it doesn't contain the details you need. You can solve this in two ways

a) Configuration can reference multiple [Context](../reference/contexts.terraform.appvia.io.md) resources, so you can provision with additional details / values.
b) Override the preload image in the controller and run your own custom loader.

The first one is simple and can achieved in multiple ways; manually, ci, helm and so forth. The second option, overloading the controller's preload images requires you update the `--preload-image` argument. In the helm chart, this can be done via

```yaml
controller:
  images:
    preload: IMAGE:TAG
```

Note, the entrypoint when using this image is currently hardcoded, so you have to ensure in the image we have an executable at `/bin/preload`. The following arguments will also be passed, via environment variables to the execution

* `CLOUD` is the cloud vendor designation from the [Provider](../reference/providers.terraform.appvia.io.md) the preload is configured on i.e. `spec.provider`.
* `CLUSTER` is the cluster name from the preload configuration i.e `spec.preload.cluster`.
* `CONTEXT` is the name of the context (`spec.preload.context`) defined in the [Provider](../reference/providers.terraform.appvia.io.md) configuration.
* `PROVIDER` is the name of the provider the preload was configured on `metadata.name` on the [Provider](../reference/providers.terraform.appvia.io.md) resource.
* `REGION` is the cloud region configured in the [Provider](../reference/providers.terraform.appvia.io.md) preload configuration i.e `spec.preload.region`.

When using a custom loader the executable is responsible for two things

* Retrieving the cloud details and constructing a valid [Context](../reference/contexts.terraform.appvia.io.md) resource.
* Creating or updating the `CONTEXT` in the Kubernetes cluster itself.

The controller is responsible for ensuring execution occurs, handing jobs fails and configuring the job with [Provider](../reference/providers.terraform.appvia.io.md) credentials.

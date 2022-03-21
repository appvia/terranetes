## Local setup with Terraform and Kind
This Terraform module uses the `kind` provider to create a Kind-managed Kubernetes cluster and then uses the `helm` provider to install the Terraform Operator into the cluster.

## Apply the Terraform module
```bash
terraform init -upgrade
terraform plan
terraform apply
```

## Interact with the cluster
```bash
kubectl config current-context
kubectl config use-context kind-local
kubectl cluster-info
```

## Self-serve cloud resources
See the [available packages](https://artifacthub.io/packages/search?ts_query_web=appvia) on artifacthub.io and refer to the [demo](../demo) for how to create an AWS S3 bucket and configure a S3 consumer to write and read objects to/from the bucket.

:warning: There is no state backend configured and therefore forcing Terraform to persist its state locally to align to the local development environment.

## Requirements

| Name | Version |
|------|---------|
| helm | 2.4.1 |
| kind | 0.0.11 |

## Providers

| Name | Version |
|------|---------|
| helm | 2.4.1 |
| kind | 0.0.11 |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| kind\_node\_image\_version | The Kind Node Image version used for running nested containers, systemd, and Kubernetes components | `string` | `"v1.23.4"` | no |
| tf\_operator\_namespace | The Kubernetes Namespace that the Terraform Operator will be installed in | `string` | `"tf-system"` | no |
| tf\_operator\_version | The Terraform Operator Helm Chart version | `string` | `"v0.2.2"` | no |

## Outputs

No output.

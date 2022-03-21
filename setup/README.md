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

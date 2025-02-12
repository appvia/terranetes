---
sidebar_position: 5
---

# Drift Detection

Drift detection is a feature that periodically executes a Terraform plan on a [Configuration](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) to ensure that the expected state, as defined by the Terraform state, aligns with the actual cloud resources. To utilize drift detection, [Configurations](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) must explicitly opt-in through their specification.

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Configuration
metadata:
  name: bucket
spec:
  module: https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0
  providerRef:
    namespace: terraform-system
    name: aws
  # Enable drift detection
  enableDriftDetection: true
```

## Tuning Drift Detection

Administrators have the ability to fine-tune drift detection through the controller, which offers two key configuration options:

### Drift Intervals

The `driftInterval` parameter specifies the duration that must elapse following the last Terraform plan execution (as recorded in the [Configuration](docs/terranetes-controller/reference/configurations.terraform.
appvia.io.md) object's status) before a new drift detection check is initiated. The default value for this interval is `3h`, indicating that a drift check will be performed every three hours from the last transition time for a given `Configuration` object, provided it falls within the defined [`driftThreshold`](#drift-threshold).

:::important
It is essential to note that the drift check is always measured from the last Terraform plan execution. If the `Configuration` is modified within the specified interval, the timer resets, and the next drift check will occur three hours from the time of modification.
:::

The `driftInterval` can be customized through the Helm value `controller.driftInterval`, with the format specified in minutes or hours, such as `10m` or `10h`.

### Drift Threshold

The `driftThreshold` parameter is a configurable value that serves as a safeguard against overwhelming the cloud provider's API with drift detection checks. Since these checks involve executing a `terraform plan`, they generate API requests to the cloud provider. Consequently, a large number of [Configurations](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) initiating drift checks simultaneously could lead to API timeouts and retries due to rate limiting.

The `driftThreshold` is expressed as a percentage, represented by a float value between 0 and 1. This percentage determines the maximum number of [Configuration](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) resources that can concurrently execute a drift check.

Notably, this threshold considers **all `Configuration` resources**, including those without `enableDriftDetection`, to ensure protection against Cloud API limits.

**Scenario 1:**
- Total `Configuration` resources: 10
- Resources currently undergoing Terraform operations (plan or apply): 1
- `driftThreshold: 0.2` (equivalent to 20% of total resources, allowing a maximum of 2 resources)
- **Outcome:** A `Configuration` with `enableDriftCheck` set to true will initiate a drift detection check, as the current number of resources in progress does not exceed the defined threshold.

**Scenario 2:**
- Total `Configuration` resources: 10
- Resources currently undergoing Terraform operations (plan or apply): 2
- `driftThreshold: 0.2` (equivalent to 20% of total resources, allowing a maximum of 2 resources)
- **Outcome:** A `Configuration` with `enableDriftCheck` set to true will not initiate a drift detection check at this time, as the current number of resources in progress has reached the defined threshold. The check will be re-evaluated after a fixed interval of 5 minutes.

**Scenario 3:**
- Total `Configuration` resources: 10
- Resources currently undergoing Terraform operations (plan or apply): 0
- `driftThreshold: 0.1` (equivalent to 1% of total resources, allowing a maximum of 1 resource)
- **Outcome:** A `Configuration` with `enableDriftCheck` set to true will initiate a drift detection check, as no resources are currently in progress and the maximum number of resources that can be run simultaneously is rounded up to 1.

### Selection Process

The controller selects a [Configuration](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) for drift detection based on the following criteria:

1. Drift detection is explicitly enabled within the configuration's specification, denoted by `spec.enableDriftDetection: true`.
2. The configuration has successfully completed a Terraform lifecycle, encompassing plan, approval, and apply phases.
3. The elapsed time since the last successful Terraform plan execution exceeds the defined drift interval.
4. The current number of concurrent Terraform plan or apply operations does not exceed the drift threshold, ensuring that the cloud provider's API rate limits are not breached.

The controller's selection process operates on a best-effort basis, without a predefined order. This approach ensures that all eligible [Configuration](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) resources will be evaluated for drift detection over time.

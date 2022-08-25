---
sidebar_position: 4
---

# Drift Detection

Drift detection periodically runs a terraform plan on a [Configuration](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md), ensuring the expected state _(terraform state)_ and the actual cloud resources are in sync. Currently [Configurations](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) must opt in for drift detection via their spec;

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
  # You can enable drift protection as so
  enableDriftDetection: true
```

## Tuning Drift Detection

From an administrative perspective the controller exposes two options:

### Drift Intervals

The `driftInterval` is the amount of time that must pass from the [Configuration's](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) last terraform plan (last transition time recorded within the status of the `Configuration` object), before a new check is run. By default this is `3h`, so every three hours that has passed from the last transition time for a given `Configuration` object, a drift check will be ran against this resource (providing it is within the [`driftThreshold`](#drift-threshold)).

:::important
The check is always from the last terraform plan run. So if the [Configuration](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) is altered within those 3 hours, the clocks restarts and will be 3 hours from then.
:::

You can configure the drift interval via the helm value `controller.driftInterval`; the format must be in minutes or hours, i.e. 10m or 10h

### Drift Threshold

The `driftThreshold` is a configurable threshold used to ensure we dont overwhelm the cloud provider API with drift checks. These checks are performing a `terraform plan` afterall and thus API requests are sent out to the cloud provider, so a large collection of [Configurations](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) all confirming at the same time could cause API timeouts and retries due to rate limiting.

The threshold is a percentage, expressed as a float between 0 and 1. This sets the maximum number of [Configuration](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) that can run a drift check at anyone time.

This value takes into account **all `Configuration` resources**, not just those with `enableDriftDetection`, as the intention is to protect against Cloud API limits.

**Scenario 1:**
- 10 `Configuration` resources
- 1 resource currently in progress (terraform plan or apply is executing)
- `driftThreshold: 0.2` (10 * 20% - maximum 2 resources)
- **Result:** A resource with `enableDriftCheck` will execute a check because it is below the threshold

**Scenario 2:**
- 10 `Configuration` Resources
- 2 resources currently in progress (terraform plan or apply is executing)
- `driftThreshold: 0.2` (10 * 20% - maximum 2 resources)
- **Result:** A resource with `enableDriftCheck` will not execute a check because the threshold is currently met. It will be evaluated again after a fixed 5 minute interval.

**Scenario 3:**
- 10 `Configuration` Resources
- 0 resources currently in progress (terraform plan or apply is executing)
- `driftThreshold: 0.01` (10 * 1% - maximum 1 resource)
- **Result:** A resource with `enableDriftCheck` will execute because none are currently in progress, and the maximum resources that can be run is rounded upwards to a value of 1.

### Selection Process

The controller chooses a [Configuration](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) based on the following:

* Drift detection is enabled on the spec i.e. `spec.enableDriftDetection: true`.
* The configuration has already ran successfully, i.e. a plan, approve and apply.
* The last time a plan ran was >= drift interval.
* Assuming the number of currently running terraform plan or apply actions is below the drift threshold, the configuration is selected.

The selection process is not ordered in any way, the controller makes a best effort approach, knowing eventually all the [Configuration](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) resources will be run in the end.

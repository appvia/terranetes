---
sidebar_position: 4
---

# Drift Detection

Drift detection periodically runs a terraform plan on [Configuration](docs/terraform-controller/reference/configurations.terraform.appvia.io.md) and checks for any drift between the expected state _(terraform state)_ and the actual cloud resources. [Configurations](docs/terraform-controller/reference/configurations.terraform.appvia.io.md) must opt in for drift detection via their spec;

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

From an administrative perspective the controller expose to main options

### Drift Intervals

Is the amount of time which must pass from the [Configurations](docs/terraform-controller/reference/configurations.terraform.appvia.io.md) last terraform plan. By default this is 3h, so every three hours a Configuration with drift detection enabled will be chosen and a drift check ran against it.

:::important
The check is always from the last terraform plan run. So if the [Configuration](docs/terraform-controller/reference/configurations.terraform.appvia.io.md) is altered within those 3 hours, the clocks restarts and will be 3 hours from then.
:::

You can configure the drift interval via the helm value `controller.driftInternal`; the format must be in minutes or hours, i.e. 10m or 10h

### Drift Threshold

Is configurable threshold added to ensure we do not overwhelm the cloud provider with drift checks. These checks are performing a `terraform plan` to determine drift i.e. API calls out to the cloud provider. So a large collection of [Configurations](docs/terraform-controller/reference/configurations.terraform.appvia.io.md) all confirming at the same time could cause API timeouts and retries due to rate limiting.

The threshold is a percentage, expressed as a float between 0 and 1. This sets the maximum number of [Configuration](docs/terraform-controller/reference/configurations.terraform.appvia.io.md) that can run a drift check at anyone time.

:::tip
If we were to set the threshold to 0.1 or 10%, the controller would enforce that 1 out of every 10 can check for drift at the same time.
:::

### Selection Process

The controller chooses a [Configuration](docs/terraform-controller/reference/configurations.terraform.appvia.io.md] based on the following

* Drift detection is enabled on the spec i.e. spec.enableDriftDetection = true.
* The configuration has already ran successfully, i.e. a plan, approve and apply.
* The last time a plan was ran was >= drift interval.
* Assuming the number of currently running drifts is below the drift threshold, the configuration is selected.

The selections process is not order in a way, the controller makes a best effort approach, knowing eventually all the [Configuration](docs/terraform-controller/reference/configurations.terraform.appvia.io.md) will be run in the end.





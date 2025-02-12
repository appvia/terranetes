---
sidebar_position: 3
---

# Enabling Drift Protection

Drift protection is a feature that enables the controller to perform periodic checks for discrepancies between the intended state and the actual state of resources in the upstream cloud provider. This is particularly useful in detecting changes made outside of the Terraform scope, such as through the cloud console or API. The frequency of these checks is determined by the platform team, and further information can be found in the [Drift Detection](docs/terranetes-controller/admin/drift.md) documentation.

In the event that a configuration is identified as being out of sync, the status of the associated resource is updated, and a Kubernetes event is generated.

```bash
$ kubectl -n apps get configurations.terraform.appvia.io
NAME     MODULE                                                                            SECRET   ESTIMATED     SYNCHRONIZED   AGE
bucket   https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0   test     Not Enabled   OutOfSync      3m5s
```

## Enabling Drift Detection

To activate drift detection for a [Configuration](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md), set `spec.enableDriftDetection` to `true`.

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Configuration
metadata:
  name: bucket
spec:
  module: https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0
  providerRef:
    name: aws
  # Drift protection can be enabled as follows
  enableDriftDetection: true
```

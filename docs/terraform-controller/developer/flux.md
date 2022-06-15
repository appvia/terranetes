---
sidebar_position: 2
---

# Using Flux as Source

Flux is a flexible and popular framework used for [Gitops](https://en.wikipedia.org/wiki/DevOps#GitOps). You can take advantage of any Flux install while still retaining the full feature set of the terraform controller.

:::important
The following has assumed you have installed the [source-controller](https://github.com/fluxcd/source-controller) and any dependant components in the cluster already.
:::

Lets rework our common example to take advantage of Flux and source our terraform module via the source controller.

```yaml
apiVersion: terraform.appvia.io/v1alpha1m .
kind: Configuration
metadata:
  name: bucket
spec:
  module: https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0

  providerRef:
    name: default

  writeConnectionSecretToRef:
    name: test

  variables: {}
    bucket: [BUCKET_NAME]
```

1. Now instead of pulling the terraform module direct as above we can use a [GitRepostory](https://fluxcd.io/docs/components/source/gitrepositories/) to represent the source module.

```yaml
apiVersion: source.toolkit.fluxcd.io/v1beta2
kind: GitRepository
metadata:
  name: bucket
spec:
  interval: 1m
  timeout: 60s
  url: https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git
```

2. Wait for the source controller to retrieve the module and view the status.

```shell
$ kubectl get gitrepositories bucket -o yaml
```

3. Look into the status of the resource

```yaml
status:
  artifact:
    ...
  observedGeneration: 2
  url: http://source-controller.source-system.svc.cluster.local./gitrepository/apps/terraform-aws-s3-bucket.git/latest.tar.gz
```

4. Note the URL will change depending on which namespace the source controller was installed and any branch references.

5. Update you [Configuration](docs/terraform-controller/reference/configurations.terraform.appvia.io.md) resource to use the above URL. Note we have to force the protocol type by prefixing it with `http::`

```yaml
apiVersion: terraform.appvia.io/v1alpha1m .
kind: Configuration
metadata:
  name: bucket
spec:
  module: http::http://source-controller.source-system.svc.cluster.local/gitrepository/apps/terraform-aws-s3-bucket.git/latest.tar.gz
```

The controller will retrieve the extract the archive for you.

:::important
These steps don't need to be performed sequentially. Once you know the expected format of the URL the source controller is going to give you can apply the resources all at once.
:::

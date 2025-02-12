---
sidebar_position: 4
---

# Using Flux as Source

Flux is a widely adopted and adaptable framework utilized for [Gitops](https://en.wikipedia.org/wiki/DevOps#GitOps). Leveraging any Flux installation, you can fully utilize the feature set of the terraform controller.

:::important
The following instructions assume that you have already installed the [source-controller](https://github.com/fluxcd/source-controller) and any dependent components in the cluster.
:::

Let's optimize our standard example to capitalize on Flux and source our terraform module through the source controller.

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Configuration
metadata:
  name: bucket
spec:
  module: https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0

  providerRef:
    name: default

  writeConnectionSecretToRef:
    name: test

  variables:
    bucket: [BUCKET_NAME]
```

1. Instead of directly pulling the terraform module as shown above, we can utilize a [GitRepository](https://fluxcd.io/docs/components/source/gitrepositories/) to represent the source module.

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

3. Examine the status of the resource.

```yaml
status:
  artifact:
    ...
  observedGeneration: 2
  url: http://source-controller.source-system.svc.cluster.local./gitrepository/apps/terraform-aws-s3-bucket.git/latest.tar.gz
```

4. Note that the URL will vary depending on the namespace in which the source controller was installed and any branch references.

5. Update your [Configuration](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) resource to use the above URL. Note that we have to force the protocol type by prefixing it with `http::`

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Configuration
metadata:
  name: bucket
spec:
  module: http::http://source-controller.source-system.svc.cluster.local/gitrepository/apps/terraform-aws-s3-bucket.git/latest.tar.gz
```

The controller will retrieve and extract the archive for you.

:::important
These steps do not need to be performed sequentially. Once you know the expected format of the URL that the source controller is going to provide, you can apply the resources all at once.
:::

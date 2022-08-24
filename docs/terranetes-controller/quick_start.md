---
sidebar_position: 2
---
# Quick start

Before we begin, you'll need the following tools:

* **[Helm CLI](https://helm.sh/docs/intro/install/)**
* **[Kind](https://kind.sigs.k8s.io/)**

The quickest way to get up and running is via the Helm chart (see [chart][tn_chart]):

```bash
$ helm repo add appvia https://terranetes-controller.appvia.io
$ helm repo update
$ kind create cluster
$ helm install -n terraform-system terranetes-controller appvia/terranetes-controller --create-namespace
$ kubectl -n terraform-system get pods
```

## Configure credentials

Next, we configure some cloud credentials to run terraform with (see [provider.yaml][ex_provider]):

:::info
The following assumes you are using static cloud credentials. See the docs for [**managed pod identity**](/terranetes-controller/admin/providers/#configure-injected-identity).
:::

```bash
$ kubectl -n terraform-system create secret generic aws \
  --from-literal=AWS_ACCESS_KEY_ID=<ID> \
  --from-literal=AWS_SECRET_ACCESS_KEY=<SECRET> \
  --from-literal=AWS_REGION=<REGION>
$ kubectl apply -f https://raw.githubusercontent.com/appvia/terranetes-controller/master/examples/provider.yaml
$ kubectl get provider -o yaml
```

See [Configure Credentials](/docs/terranetes-controller/admin/providers.md) for more details.

## Create your first terraform resource

Retrieve a demo configuration that creates an S3 bucket (see [configuration.yaml][ex_configuration]).

```bash
wget https://raw.githubusercontent.com/appvia/terranetes-controller/master/examples/configuration.yaml
```

Next, lets create a namespace and provision the cloud resources.

```bash
# Create the namespace
$ kubectl create namespace apps
# View the contains of the configuration
$ cat configuration.yaml # demo for provisioning an s3 bucket

$ kubectl -n apps apply -f configuration.yaml
$ kubectl -n apps get po

# Straight away a job is created to 'watch' the terraform workflow
$ kubectl -n apps logs -f <POD_ID>
```

## Approve the plan

By default, unless the `spec.enableAutoApproval` is true, all changes must be approved before acting on. An annotation is used to approve the previous plan.

```bash
$ kubectl -n apps annotate configurations bucket "terraform.appvia.io/apply"=true --overwrite
```

Another kubernetes job will be created to watch the execution of the terraform apply, you can view the logs via `kubectl -n apps get po | grep apply`, get the pod name and tail the logs `kubectl -n apps logs -f <NAME>`.

:::important
Note the actual terraform execution does not occur in the `apps` namespace, users simply has the ability to watch the output of the run. The job and the credentials never leave the platform teams namespace `terraform-system`
:::

View the the [Configuration](/docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) below.

```bash
$ kubectl -n apps get configurations.terraform.appvia.io
NAME     MODULE                                                                            SECRET   RESOURCES   ESTIMATED     AGE
bucket   https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0   test     5           Not Enabled   78s
# The terraform output will be written to a secret in the configuration namespace
$ kubectl -n apps get secret test -o yaml
```

For a complete summary of [Configurations](reference/configurations.terraform.appvia.io.md) click [here](developer/configuration.md).

## Deleting the terraform resources

You can delete the configuration like any other Kubernetes resource

```shell
$ kubectl -n apps delete configuration bucket
```

Tailing the logs from the watcher will allow you to view the execution.

[tn_chart]: https://github.com/appvia/terranetes-controller/tree/master/charts/terranetes-controller
[ex_provider]: https://github.com/appvia/terranetes-controller/blob/master/examples/provider.yaml
[ex_configuration]: https://github.com/appvia/terranetes-controller/blob/master/examples/configuration.yaml

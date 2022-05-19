---
sidebar_position: 1
---
# Getting Started

Before we begin, you'll need the following tools.

* Helm CLI (https://helm.sh/docs/intro/install/)
* Kind (https://kind.sigs.k8s.io/)

The quickest way to get up the running is via the Helm chart.

```bash
$ git clone git@github.com:appvia/terraform-controller.git
$ cd terraform-controller
# kind create cluster
$ helm install -n terraform-system terraform-controller charts/ --create-namespace
$ kubectl -n terraform-system get po
```

## Configure credentials

Next we configure some cloud credentials to run the terraform under.

```bash
# The following assumes you can using static credentials, for managed pod identity see docs

$ kubectl -n terraform-system create secret generic aws \
  --from-literal=AWS_ACCESS_KEY_ID=<ID> \
  --from-literal=AWS_SECRET_ACCESS_KEY=<SECRET> \
  --from-literal=AWS_REGION=<REGION>
$ kubectl -n terraform-system apply -f examples/provider.yaml
$ kubectl -n terraform-system get provider -o yaml
```

See [Configure Credentials](docs/admin/providers.md) for more details.

## Create a S3 Bucket

```bash
$ cat examples/configuration.yaml # demos a s3 bucket
$ kubectl create namespace apps

# NOTE: Make sure to change the bucket name in examples/configuration.yaml
# spec.variables.bucket
$ vim examples/configuration.yaml
$ kubectl -n apps apply -f examples/configuration.yaml
$ kubectl -n apps get po

# Straight away a job is created to 'watch' the terraform workflow
$ kubectl -n apps logs -f <POD_ID>

# Check the module output
$ kubectl -n apps get secret test -o yaml
```

* Approve the plan

By default unless the `spec.enableAutoApproval` is true, all changes must be approved before acting on. An annotation is used to approve the previous plan.

```bash
$ kubectl -n apps annotate configurations.terraform.appvia.io bucket "terraform.appvia.io/apply"=true --overwrite
```

---
sidebar_position: 1
---
import Features from '@site/src/components/Features';

# Terraform Controller

Terraform controller manages the life-cycle of terraform resources defined and built inside Kubernetes. This allows teams running workloads inside the cluster to self-service application dependencies and reuse the wealth of terraform modules already written.

The controller also comes bundled with a number of technical controls to enable platform teams to push the feature without compromising the standards and best practices required in the organizations.

<Features/>

## Additional Features

* **Module Security:** gives platform teams the means to control which terraform modules are permitted. This enables the organization to lockdown to an approved collection of modules.
* **Targetted Configuration:** gives platform teams the ability to inject environment-specific variables into the terraform modules consumed downstream. For example you could inject cost centers or project IDs, or environment-specific configuration like cloud tags and so forth.

## Quick start guide

Before we begin, you'll need the following tools:

* Helm CLI (https://helm.sh/docs/intro/install/)
* Kind (https://kind.sigs.k8s.io/)

The quickest way to get up the running is via the Helm chart:

```bash
$ git clone git@github.com:appvia/terraform-controller.git
$ cd terraform-controller
# kind create cluster
$ helm install -n terraform-system terraform-controller charts/ --create-namespace
$ kubectl -n terraform-system get po
```

### Configure credentials

Next we configure some cloud credentials to run the terraform under:

```bash
# The following assumes you can using static credentials, for managed pod identity—see docs

$ kubectl -n terraform-system create secret generic aws \
  --from-literal=AWS_ACCESS_KEY_ID=<ID> \
  --from-literal=AWS_SECRET_ACCESS_KEY=<SECRET> \
  --from-literal=AWS_REGION=<REGION>
$ kubectl -n terraform-system apply -f examples/provider.yaml
$ kubectl -n terraform-system get provider -o yaml
```

See [Configure Credentials](docs/admin/providers.md) for more details.

### Create your first configuration

```bash
$ cat examples/configuration.yaml # demos an s3 bucket
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

### Approve the plan

By default, unless the `spec.enableAutoApproval` is true, all changes must be approved before acting on. An annotation is used to approve the previous plan.

```bash
$ kubectl -n apps annotate configurations bucket "terraform.appvia.io/apply"=true --overwrite
```

For a complete summary of [Configurations](docs/reference/configurations.terraform.appvia.io.md) click [here](docs/developer/configuration.md).
---
sidebar_position: 2
---
# Quick start

:::tip
While all actions can be performed via kubectl, Terranetes comes bundled with a CLI tool to make operations quicker. You can find the download on [**releases**](../terranetes-controller/releases.md)
:::

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

## Configure a Revision

:::info
The following example uses a pre-baked Revision, however, for tips on generating Revisions please go [**here**](../terranetes-controller/admin/cloudresource.md)
:::

Retrieve a demo revision that creates an S3 bucket (see [revision.yaml][ex_revision]).

```bash
wget https://raw.githubusercontent.com/appvia/terranetes-controller/master/examples/revision.yaml
```

Next, let's create a [Revision](../terranetes-controller/reference/revisions.terraform.appvia.io.md) for the resource.

```bash
# View the contains of the revision for the s3 bucket
$ cat revision.yaml

# Apply the revision
$ kubectl apply -f revision.yaml
$ kubectl get revision

# We should have a plan from the new revision
$ kubectl get plan
```

## Provision a Cloud Resource

Let's retrieve the cloud resource example from [here][ex_cloudresource]

```bash
wget https://raw.githubusercontent.com/appvia/terranetes-controller/master/examples/cloudresource.yaml
```

:::info
You can also run `tnctl create cloudresource` to generate a CloudResource CRD from a Revision
:::

Let's create a namespace, and consume the revision.

```bash
# Create the namespace
$ kubectl create namespace apps

# Ensure you change any 'CHANGE_ME' placeholders in the example
$ vim cloudresource.yaml

#  Create the cloudresource
$ kubectl -n apps apply -f cloudresource.yaml
$ kubectl -n apps get po

# Straight away a job is created to 'watch' the terraform workflow
$ kubectl -n apps logs -f <POD_ID>
```

:::info
You can use the `tnctl logs cloudresource --namespace apps bucket --follow` to find and watch the logs from a build, instead of kubectl commands.
:::

## Approve the plan

By default, all changes require explicit approval before execution, unless the `spec.enableAutoApproval` property is set to `true`. This approval process is facilitated through the use of an annotation on the previous plan.

:::info
If you are using the `tnctl` cli, you can approve changes via `tnctl approve cloudresource --namespace apps bucket`
:::

```bash
kubectl -n apps annotate cloudresources bucket "terraform.appvia.io/apply"=true --overwrite
```

Upon approval, a Kubernetes job is created to monitor the execution of the `terraform apply` process. To access the logs, execute `kubectl -n apps get po | grep apply` to identify the pod name, and then use `kubectl -n apps logs -f <NAME>` to tail the logs in real-time.

:::important
The actual terraform execution does not occur in the `apps` namespace, users simply have the ability to watch the output of the run. The job and the credentials never leave the platform teams namespace `terraform-system`
:::

View the the [CloudResource](../terranetes-controller/reference/cloudresources.terraform.appvia.io.md) below.

```bash
$ kubectl -n apps get cloudresources.terraform.appvia.io
NAME     PLAN     REVISION   SECRET   CONFIGURATION   ESTIMATED     UPDATE   SYNCHRONIZED   AGE
bucket   bucket   v0.0.1     test     bucket-7v8jp    Not Enabled   None     InSync         2m7s

# View the kubernetes secrets containing the outputs
$ kubectl -n apps get secret test -o yaml
```

For a complete summary of [CloudResources](reference/cloudresources.terraform.appvia.io.md) click [here](developer/provision.md).

## Deleting the terraform resources

You can delete the cloud resource like any other Kubernetes resource.

```bash
kubectl -n apps delete cloudresource bucket --wait=false
```

Tailing the logs from the watcher will allow you to view the execution.

```bash
POD_NAME=$(kubectl -n apps get pods -l terraform.appvia.io/stage=destroy --no-headers | cut -d' ' -f1)
kubectl -n apps logs ${POD_NAME} -f
```

Or via [tnctl](../terranetes-controller/developer/tnctl.md)

```bash
tnctl logs cloudresource -n apps bucket -f
```

[tn_chart]: https://github.com/appvia/terranetes-controller/tree/master/charts/terranetes-controller
[ex_provider]: https://github.com/appvia/terranetes-controller/blob/master/examples/provider.yaml
[ex_revision]: https://raw.githubusercontent.com/appvia/terranetes-controller/master/examples/revision.yaml
[ex_cloudresource]: https://raw.githubusercontent.com/appvia/terranetes-controller/master/examples/cloudresource.yaml

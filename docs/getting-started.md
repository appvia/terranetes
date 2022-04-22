# Getting Started

This guide will walk you through what you need to do as an infrastructure operator and an application developer to adopt the Terranetes way of working.

## Prerequisites
- A Kubernetes cluster `>= v1.19` is available
- A cloud account where cloud resources will be created is available
- The [helm](https://helm.sh/docs/intro/install/) CLI `>= 3.4.0` is installed and configured to interact with your cluster
- The [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) CLI `>= v1.19` is installed and configured to interact with your cluster

## Infrastructure Operator
### Kubernetes Cluster Access
You need the following set of permissions to install, update and manage the Terraform Operator:
```yaml
rules:
- apiGroups:
  - ""
  resources:
  - serviceaccounts
  verbs:
  - '*'
- apiGroups:
  - apiextensions.k8s.io
  resources:
  - customresourcedefinitions
  verbs:
  - '*'
- apiGroups:
  - apps
  resources:
  - deployments
  verbs:
  - '*'
- apiGroups:
  - rbac.authorization.k8s.io
  resources:
  - clusterroles
  - clusterrolebindings
  verbs:
  - '*'
```

### Install Terraform Operator
Once you have the necessary Kubernetes access, you can use the Helm CLI to install the latest release of the [Terraform Operator](https://github.com/isaaguilar/terraform-operator) chart:
```bash
helm repo add isaaguilar https://isaaguilar.github.io/helm-charts
helm repo update
helm upgrade --install terraform-operator isaaguilar/terraform-operator \
  --version v0.2.2 \
  --namespace tf-system \
  --create-namespace
```

## Application Developer
### Kubernetes Cluster Access
You need the following set of permissions to install, update and manage the Kubernetes Custom Resource Definition object:
```yaml
rules:
- apiGroups:
  - tf.isaaguilar.com
  resources:
  - terraforms
  verbs:
  - '*'
```

### Create Cloud Credential
You need to follow your organisation's process for Identity and Access Management to obtain programmatic access and create your desired cloud resources. This may be a request to another team such as the infrastructure operators. The Terraform Operator uses the cloud provider-specific credentials supplied in the `.spec.credentials` property in the Kubernetes custom resource to create cloud resources:
- `.spec.credentials.aws.irsa` which creates and annotates a Kubernetes Service Account with an AWS IAM role.
- `.spec.credentials.secretNameRef` which loads environment variables into the terraform runner Pod from a Kubernetes Secret. The Kubernetes Secret must be created in the same Namespace as the Terraform custom resource.  
- `.spec.credentials.serviceAccountAnnotations` which creates and annotates a Kubernetes Service Account with a cloud IAM role such as Workload Identity for GCP or Azure.

### Create Cloud Resource
Once you have configured the cloud credential, you can move on to search for available packages from [artifacthub.io](https://artifacthub.io/packages/search?ts_query_web=appvia) or our appvia-community Helm repository and create your desired cloud resource(s).

```bash
helm repo add appvia-community https://appvia-community.storage.googleapis.com
helm repo update
helm search repo appvia-community
helm show readme appvia-community/aws-s3-bucket
```

## See Demo
You can see [our demo](../demo/README.md) of using Helm to create cloud resources.

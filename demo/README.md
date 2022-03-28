# Use Helm to create cloud resources

1. First, we need a Kubernetes cluster which I will go ahead and create with [Kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installation).
```bash
kind create cluster --name local
```
  This is going to take a few minutes so I am going to pause here and resume once it's completed.

  Perfect, our cluster is ready and we can interact with it.
```bash
kubectl config current-context
kubectl cluster-info
```

2. We can now install the Terraform Operator into the cluster using a Helm Chart.
```bash
helm repo add isaaguilar https://isaaguilar.github.io/helm-charts
helm repo update
helm upgrade --install terraform-operator isaaguilar/terraform-operator \
  --version v0.2.2 \
  --namespace tf-system \
  --create-namespace
```
  It takes around a minute or two for the Terraform Operator to start up and we can watch the progress.
  As you can see, it has been installed and it is now up and running.
```bash
watch kubectl -n tf-system get po
```

3. Before we can create any cloud resource, we need to create a Kubernetes Secret with the AWS credential.
```bash
kubectl create ns my-ns
kubectl -n my-ns create secret generic tf-aws-secrets \
  --from-literal=AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID \
  --from-literal=AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
```
I am using long-lived access keys for the demo but I recommend using a workload identity with least privilege access for your own production use cases.

4. Now, let’s see what cloud resources we can currently create using Helm. Let’s head over to artifacthub and search for Appvia.
```bash
https://artifacthub.io/packages/search?ts_query_web=appvia
```
As you can see we have a few options.

5. Let’s add the appvia-community Helm repository and grab the command we need to create an AWS S3 bucket from the `README.md` file.
```bash
helm repo add appvia-community https://appvia-community.storage.googleapis.com
helm repo update
helm search repo appvia-community
helm show readme appvia-community/aws-s3-bucket
```

6. Let's copy that and run it.
```bash
helm upgrade --install aws-s3-bucket appvia-community/aws-s3-bucket \
  --namespace my-ns \
  --set aws.region=eu-west-2 \
  --set s3.bucket=appvia-mys3bucket-123 \
  --set aws.credentials[0].secretNameRef.key=data,aws.credentials[0].secretNameRef.name=tf-aws-secrets,aws.credentials[0].secretNameRef.namespace=my-ns  
```

7. We can verify if the Kubernetes custom resource has been created and then check whether the terraform runner pod has successfully applied our Terraform module.
```bash
kubectl -n my-ns get terraforms.tf.isaaguilar.com
kubectl -n my-ns get terraforms.tf.isaaguilar.com -o json | jq '.items[].status.stages[] | select(.podType=="apply")'
```

8. Great it is now complete. We can inspect the Terraform Outputs that are available to us.
```bash
kubectl -n my-ns get secrets aws-s3-bucket-outputs -o yaml | ksd
```
  We can see that the Terraform Operator has created a bucket with this name and we can go back to our AWS account to confirm that the bucket does exist.

9. Lastly, we can install a simple Kubernetes workload that writes to the bucket and reads from it for completeness.
```bash
kubectl -n my-ns apply -f put-object.yaml
kubectl -n my-ns get po
watch kubectl -n my-ns get po
kubectl -n my-ns logs job/put-object
```
  As you can see, we have successfully added an object to the bucket.
  We can also verify this on the AWS Management Console.
  Now, let's read it back.
```bash
kubectl -n my-ns apply -f read-object.yaml
kubectl -n my-ns get po
watch kubectl -n my-ns get po
kubectl -n my-ns logs job/read-object
```

Perfect, this shows that we have successfully written an object to an S3 bucket and read it back from the bucket.

---
sidebar_position: 2
---

# Using Private Repositories

If the repository containing the terraform module is private and requires credentials to retrieve, you can add the authentication details to a secret held within the namespace.

Let's assume we have a terraform module hosted in a private Github repository. Here's how to add authentication details:

1. Create an SSH deployment key for the repository with the ability to clone.
2. Create a Kubernetes secret in the namespace containing the SSH private key.

    ```shell
    $ kubectl -n apps create secret generic ssh --from-file=SSH_KEY_AUTH=id.rsa
    ```

3. Update the Terraform module configuration resource, setting the `spec.auth.name: [NAME]` to the name of the secret:

    ```yaml
    spec:
      auth:
        name: ssh
    ```

The same process can be followed for GIT over HTTP; simply add `GIT_USERNAME` and `GIT_PASSWORD` to the secret.

## What sources are supported?

We use the same library as Terraform, [go-getter](https://github.com/hashicorp/go-getter) that supports:
* Git
* Mercurial
* HTTP
* Amazon S3
* Google GCP

For full details, see https://github.com/hashicorp/go-getter.

---
sidebar_position: 2
---

# Using Private Repositories

If the repository containing the terraform module is private and requires credentials to retrieve, you can add the authentication details to a secret held within the namespace.

## Using SSH Authentication

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
4. Reference a git repository as the module source
    ```yaml
    spec:
      module: git::ssh://git@github.com/ORG/REPOSITORY?ref=<TAG|BRANCH|COMMIT>
    ```

:::tip
If you need to extract a specific folder within the repository the syntax `git::ssh://git@github.com/ORG/REPOSITORY//PATH?ref=<TAG|BRANCH|COMMIT>`
:::

## Using HTTP Authentication

Similar to the above, create a Kubernetes secret like so

1. Create a Kubernetes secret containing the username and password

  ```shell
  $ kubectl -n app create secret generic httpauth --from-literal=GIT_USERNAME=USERNAME --from-literal=GIT_PASSWORD=PASSWORD
  ```

2. Update the [Configuration](../reference/configurations.terraform.appvia.io.md) to include the authentication reference

    ```yaml
    spec:
      auth:
        name: httpauth
    ```

3. Reference the terraform module using http
    ```yaml
    spec:
      module: https://git@github.com/ORG/REPOSITORY?ref=<TAG|BRANCH|COMMIT>
    ```

## Using Token Authentication

Use the same process as above, creating a Kubernetes secret `TOKEN`

## What sources are supported?

We use the same library as Terraform, [go-getter](https://github.com/hashicorp/go-getter) that supports:
* Git
* Mercurial
* HTTP
* Amazon S3
* Google GCP

For full details, see https://github.com/hashicorp/go-getter.

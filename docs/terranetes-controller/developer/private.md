---
sidebar_position: 2
---

# Using Private Repositories

In the event that the repository housing the Terraform module is private and necessitates authentication for access, it is possible to integrate the authentication credentials into a secret located within the namespace.

## Using SSH Authentication

Assuming a scenario where a Terraform module is hosted in a private Github repository, the following steps outline the process of adding authentication details:

1. Generate an SSH deployment key for the repository, granting it the ability to clone.
2. Create a Kubernetes secret within the namespace, housing the SSH private key.

    ```shell
    $ kubectl -n apps create secret generic ssh --from-file=SSH_AUTH_KEY=id.rsa
    ```

3. Update the Terraform module configuration resource, specifying the `spec.auth.name: [NAME]` as the name of the secret:

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
In case there is a need to extract a specific folder within the repository, the syntax `git::ssh://git@github.com/ORG/REPOSITORY//PATH?ref=<TAG|BRANCH|COMMIT>` can be utilized.
:::

## Using HTTP Authentication

To utilize HTTP authentication for a private repository, follow these steps:

1. Create a Kubernetes secret containing the username and password:

  ```shell
  $ kubectl -n app create secret generic httpauth --from-literal=GIT_USERNAME=USERNAME --from-literal=GIT_PASSWORD=PASSWORD
  ```

2. Update the [Configuration](../reference/configurations.terraform.appvia.io.md) to include the authentication reference:

    ```yaml
    spec:
      auth:
        name: httpauth
    ```

3. Reference the Terraform module using HTTP:

    ```yaml
    spec:
      module: https://git@github.com/ORG/REPOSITORY?ref=<TAG|BRANCH|COMMIT>
    ```

## Using Token Authentication

Use the same process as above, creating a Kubernetes secret containing `TOKEN`.

## What sources are supported?

Our platform leverages the same library as Terraform, specifically [go-getter](https://github.com/hashicorp/go-getter), which provides support for the following source types:
* Git
* Mercurial
* HTTP
* Amazon S3
* Google GCP

For a comprehensive overview of the supported sources, please refer to the [go-getter](https://github.com/hashicorp/go-getter) documentation.

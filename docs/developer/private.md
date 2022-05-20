---
sidebar_position: 1
---

# Using Private Repositories

If the repository containing the terraform module is private and requires credentials to retrieve. You can add the authentication details to a secret held in the namespace.

Lets assume we have terraform module hosted in a private Github repository.

1. We create a SSH deployment key for the repository with the ability to clone.
2. We create a Kubernetes secret in the namespace containing the SSH private key

```shell
$ kubectl -n apps create secret generic ssh --from-file=SSH_KEY_AUTH=id.rsa
```

3. We update the configuration, setting the `spec.auth.name: [NAME]` to the name of the secret

```YAML
spec:
  auth:
    name: ssh
```

The same process can be followed for GIT over HTTP; simply add `GIT_USERNAME` and `GIT_PASSWORD` to the secret.

## What sources are supported?

Under the hood we use the same library as terraform, called [go-getting](https://github.com/hashicorp/go-getter) which supports

* Git
* Mercurial
* HTTP
* Amazon S3
* Google GCP

Please consult https://github.com/hashicorp/go-getter for full details.

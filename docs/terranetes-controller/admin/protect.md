---
sidebar_position: 3
---

# Namespace Protection

In order to ensure credentials never leave the controller namespace, all terraform jobs, secrets and ultimately credentials are provisioned in the terranetes-controller namespace.

When performing an action on a [Configuration](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md), create, update or destroy, a watcher is created within the namespace of the Configuration. This job

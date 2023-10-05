---
title: "tnctl"
---
## tnctl

Terranetes CLI tool

### Synopsis

Provides a toolset for both the platform team and developers to work
seemlessly with the terranetes framework. The CLI can be used to view,
approve configurations, package up terraform modules for consumption and
permit developers to search for resources to consume.


```
tnctl [flags]
```

### Options

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
  -h, --help            help for tnctl
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl apply](../tnctl_apply)	 - Used to apply from a file or stdin
* [tnctl approve](../tnctl_approve)	 - Approves either a configuration or cloudresource
* [tnctl completion](../tnctl_completion)	 - Generate the autocompletion script for the specified shell
* [tnctl config](../tnctl_config)	 - Used to manage the CLI configuration
* [tnctl convert](../tnctl_convert)	 - Used to convert between different formats
* [tnctl create](../tnctl_create)	 - Used to create a resource
* [tnctl delete](../tnctl_delete)	 - Used to delete resource by file or resource name
* [tnctl describe](../tnctl_describe)	 - Used to describe the current state of the configuration
* [tnctl get](../tnctl_get)	 - Used to retrieve a list of resources
* [tnctl kubectl](../tnctl_kubectl)	 - Kubectl plugin related commands
* [tnctl logs](../tnctl_logs)	 - Displays the latest logs for the resource
* [tnctl retry](../tnctl_retry)	 - Attempts to trigger the resource to retry
* [tnctl search](../tnctl_search)	 - Searches for cloud resources to consume
* [tnctl state](../tnctl_state)	 - Used to manage the Terraform Configuration state secrets
* [tnctl verify](../tnctl_verify)	 - Used to verify and validate resources


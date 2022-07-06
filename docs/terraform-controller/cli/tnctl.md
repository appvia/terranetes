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

* [tnctl approve](../tnctl_approve)	 - Approves a terraform configuration for release
* [tnctl build](../tnctl_build)	 - Can be used to package up the terraform module for consumption
* [tnctl completion](../tnctl_completion)	 - Generate the autocompletion script for the specified shell
* [tnctl config](../tnctl_config)	 - Used to manage the CLI configuration
* [tnctl describe](../tnctl_describe)	 - Used to describe the current state of the configuration
* [tnctl search](../tnctl_search)	 - Searches for cloud resources to consume
* [tnctl workflow](../tnctl_workflow)	 - Can be used to generate a skelton CI pipeline


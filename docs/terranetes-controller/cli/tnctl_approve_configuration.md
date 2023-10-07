---
title: "tnctl approve configuration"
---
## tnctl approve configuration

Approves a configuration for release

### Synopsis


Used to approve a terraform configuration and permit the
configuration to move into the apply stage. This command
effectively changes the terraform.appvia.io/apply annotation
from 'false' to 'true'.

Approve one or more configurations
$ tnctl approve configuration NAME

Approve one or more cloudresource
$ tnctl approve cloudresource NAME


```
tnctl approve configuration [OPTIONS] NAME [flags]
```

### Options

```
  -h, --help               help for configuration
  -n, --namespace string   Namespace of the resource/s (default "default")
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl approve](../tnctl_approve)	 - Approves either a configuration or cloudresource


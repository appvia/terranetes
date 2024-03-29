---
title: "tnctl approve"
---
## tnctl approve

Approves either a configuration or cloudresource

### Synopsis


Used to approve a terraform configuration and permit the
configuration to move into the apply stage. This command
effectively changes the terraform.appvia.io/apply annotation
from 'false' to 'true'.

Approve one or more configurations
$ tnctl approve configuration NAME

Approve one or more cloudresource
$ tnctl approve cloudresource NAME


### Options

```
  -h, --help   help for approve
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl](../tnctl)	 - Terranetes CLI tool
* [tnctl approve cloudresource](../tnctl_approve_cloudresource)	 - Approves a cloudresource for release
* [tnctl approve configuration](../tnctl_approve_configuration)	 - Approves a configuration for release


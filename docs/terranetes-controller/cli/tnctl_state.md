---
title: "tnctl state"
---
## tnctl state

Used to manage the Terraform Configuration state secrets

### Synopsis


When using the kubernetes backend to store the terraform state, this
command provides the ability to list, clean and match up state secrets
against the Configuration CRD which are using them.


### Options

```
  -h, --help   help for state
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl](../tnctl)	 - Terranetes CLI tool
* [tnctl state clean](../tnctl_state_clean)	 - Cleans any orphaned state, cost, config or policy secrets
* [tnctl state list](../tnctl_state_list)	 - Listing all the configurations in the cluster and the current state


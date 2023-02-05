---
title: "tnctl state clean"
---
## tnctl state clean

Cleans any orphaned state, cost, config or policy secrets

### Synopsis


The clean command will clean any orphaned state, cost, config or policy secrets.
These are kubernetes secrets which are not associated with a configuration.

# Clean all orphaned secrets (you will be prompted to confirm)
$ tnctl state clean


```
tnctl state clean [OPTIONS] [flags]
```

### Options

```
      --controller-namespace string   The namespace the controller is running in (default "terraform-system")
      --force                         Force the deletion of the secrets
  -h, --help                          help for clean
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl state](../tnctl_state)	 - Used to manage the Terraform Configuration state secrets


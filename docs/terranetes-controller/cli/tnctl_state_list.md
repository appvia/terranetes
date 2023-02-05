---
title: "tnctl state list"
---
## tnctl state list

Listing all the configurations in the cluster and the current state

```
tnctl state list [OPTIONS] [flags]
```

### Options

```
      --controller-namespace string   The namespace the controller is running in (default "terraform-system")
  -h, --help                          help for list
      --namespace string              The namespace to list the configurations, defaults to all
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl state](../tnctl_state)	 - Used to manage the Terraform Configuration state secrets


---
title: "tnctl get configuration"
---
## tnctl get configuration

Used to retrieve configuration/s from the cluster

```
tnctl get configuration [OPTIONS] [NAME] [flags]
```

### Options

```
  -A, --all-namespaces     Retrieve cloud resources from all namespaces
  -h, --help               help for configuration
  -n, --namespace string   Namespace to retrieve the resource from
  -o, --output string      The output format. Supported formats are: json|yaml|wide
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl get](../tnctl_get)	 - Used to retrieve a list of resources


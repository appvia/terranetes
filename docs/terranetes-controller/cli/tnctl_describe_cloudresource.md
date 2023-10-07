---
title: "tnctl describe cloudresource"
---
## tnctl describe cloudresource

Used to describe the current state of the resources

### Synopsis

Retrieves the definition and current state of one or more of the
terraform configurations, displaying in a human friendly format.
The command also extracts any integration details which have been
produced by infracosts or checkov scans.

Describe a configuration in a namespace
$ tnctl describe configuration -n apps NAME

Describe a cloudresource in a namespace
$ tnctl describe cloudresource -n apps NAME


```
tnctl describe cloudresource [OPTIONS] NAME [flags]
```

### Options

```
  -h, --help                 help for cloudresource
  -n, --namespace string     Namespace of the resource/s (default "default")
      --show-passed-checks   Indicates we should show passed checks (default true)
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl describe](../tnctl_describe)	 - Used to describe the current state of the configuration


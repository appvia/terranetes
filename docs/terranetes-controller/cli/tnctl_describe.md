---
title: "tnctl describe"
---
## tnctl describe

Used to describe the current state of the configuration

### Synopsis

Retrieves the definition and current state of one or more of the
terraform configurations, displaying in a human friendly format.
The command also extracts any integration details which have been
produced by infracosts or checkov scans.

Describe all configurations in a namespace
$ tnctl describe -n apps

Describe a single configuration called 'test'
$ tnctl describe -n apps test


```
tnctl describe [NAME...] [flags]
```

### Options

```
  -h, --help                 help for describe
  -n, --namespace string     Namespace of the resource/s (default "default")
      --show-passed-checks   Indicates we should show passed checks (default true)
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl](../tnctl)	 - Terranetes CLI tool


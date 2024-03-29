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

Describe a configuration in a namespace
$ tnctl describe configuration -n apps NAME

Describe a cloudresource in a namespace
$ tnctl describe cloudresource -n apps NAME


### Options

```
  -h, --help   help for describe
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl](../tnctl)	 - Terranetes CLI tool
* [tnctl describe cloudresource](../tnctl_describe_cloudresource)	 - Used to describe the current state of the resources
* [tnctl describe configuration](../tnctl_describe_configuration)	 - Used to describe the current state of the resources


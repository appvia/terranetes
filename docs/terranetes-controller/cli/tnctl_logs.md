---
title: "tnctl logs"
---
## tnctl logs

Displays the latest logs for the resource

### Synopsis


Retrieves and follows the logs from a cloudresource or native configuration

Viewing the logs for a configuration
$ tnctl logs configuration NAME --follow

Viewing the logs for a cloudresource
$ tnctl logs cloudresource NAME --follow


### Options

```
  -h, --help   help for logs
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl](../tnctl)	 - Terranetes CLI tool
* [tnctl logs cloudresource](../tnctl_logs_cloudresource)	 - Displays the latest logs for the given resource
* [tnctl logs configuration](../tnctl_logs_configuration)	 - Displays the latest logs for the given resource


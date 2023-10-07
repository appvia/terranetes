---
title: "tnctl logs configuration"
---
## tnctl logs configuration

Displays the latest logs for the given resource

### Synopsis


Retrieves and follows the logs from a cloudresource or native configuration

Viewing the logs for a configuration
$ tnctl logs configuration NAME --follow

Viewing the logs for a cloudresource
$ tnctl logs cloudresource NAME --follow


```
tnctl logs configuration NAME [OPTIONS] [flags]
```

### Options

```
  -f, --follow             Indicates we should follow the logs
  -h, --help               help for configuration
  -n, --namespace string   The namespace of the resource (default "default")
      --stage string       Select the stage to show logs for, else defaults to the current state
      --timeout duration   Indicates how long we should wait for logs to be available (default 3s)
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl logs](../tnctl_logs)	 - Displays the latest logs for the resource


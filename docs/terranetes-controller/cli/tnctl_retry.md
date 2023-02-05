---
title: "tnctl retry"
---
## tnctl retry

Attempts to restart a configuration

### Synopsis


By default a Configuration is only run on a change to the specification. Its
useful however to be able to restart the process without changing the
spec - i.e. the credentials were incorrect and out-of-band error occurred or
so forth.

This command will restart the process by tagging the configuration with a
annotation. By default the restarted process will be watched for logs.

Restart the Configuration:
$ tnctl retry NAME

Restart the Configuration but do not watch the logs:
$ tnctl retry NAME --watch=false


```
tnctl retry [OPTIONS] NAME [flags]
```

### Options

```
  -h, --help               help for retry
  -n, --namespace string   The namespace the configuration resides (default "default")
  -w, --watch              Watch the logs after restarting the configuration (default true)
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl](../tnctl)	 - Terranetes CLI tool


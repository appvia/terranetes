---
title: "tnctl retry"
---
## tnctl retry

Attempts to trigger the resource to retry

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


### Options

```
  -h, --help   help for retry
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl](../tnctl)	 - Terranetes CLI tool
* [tnctl retry cloudresource](../tnctl_retry_cloudresource)	 - Attempts to restart a cloud resource
* [tnctl retry configuration](../tnctl_retry_configuration)	 - Attempts to restart a configuration


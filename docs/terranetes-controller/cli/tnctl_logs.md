---
title: "tnctl logs"
---
## tnctl logs

Displays the logs from the current configuration

### Synopsis




```
tnctl logs NAME [OPTIONS] [flags]
```

### Options

```
  -f, --follow             follow the logs
  -h, --help               help for logs
      --name string        Is the name of the resource to create
  -n, --namespace string   The namespace of the resource (default "default")
      --stage string       Selects the stage to show logs for, else defaults to the condition
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl](../tnctl)	 - Terranetes CLI tool


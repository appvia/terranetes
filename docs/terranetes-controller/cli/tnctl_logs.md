---
title: "tnctl logs"
---
## tnctl logs

Displays the latest logs for the given Configuration name

### Synopsis




```
tnctl logs NAME [OPTIONS] [flags]
```

### Options

```
  -f, --follow             Follow the logs
  -h, --help               help for logs
  -n, --namespace string   The namespace of the Configuration resource (default "default")
      --stage string       Select the stage to show logs for, else defaults to the current Configuration state
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl](../tnctl)	 - Terranetes CLI tool


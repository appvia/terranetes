---
title: "tnctl apply"
---
## tnctl apply

Used to apply from a file or stdin

```
tnctl apply [OPTIONS] [-f PATH...] [flags]
```

### Options

```
      --dry-run string     Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it
  -f, --file strings       Path to file to apply
      --force              If true, immediately remove resources from API and bypass graceful deletion
  -h, --help               help for apply
  -n, --namespace string   Namespace the resources will applied to
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl](../tnctl)	 - Terranetes CLI tool


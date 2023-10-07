---
title: "tnctl delete"
---
## tnctl delete

Used to delete resource by file or resource name

```
tnctl delete [OPTIONS] [-f PATH|NAME...] [flags]
```

### Options

```
  -f, --file strings       Path to file to apply
      --force              If true, immediately remove resources from API and bypass graceful deletion
  -h, --help               help for delete
  -n, --namespace string   Namespace to apply to
      --wait               If true, wait for resources to be gone before returning. This waits for finalizers. (default true)
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl](../tnctl)	 - Terranetes CLI tool


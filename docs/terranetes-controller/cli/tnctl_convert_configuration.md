---
title: "tnctl convert configuration"
---
## tnctl convert configuration

Converts configuration back to a terraform module

```
tnctl convert configuration [OPTIONS] [NAME|-f FILE] [flags]
```

### Options

```
  -f, --file string         Path to the configuration file
  -h, --help                help for configuration
      --include-checkov     Include checkov in the output (default true)
      --include-provider    Include provider in the output (default true)
      --include-terraform   Include terraform in the output (default true)
  -n, --namespace string    Namespace of the resource (default "default")
  -p, --path string         The path to write the files to (default ".")
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl convert](../tnctl_convert)	 - Used to convert between different formats


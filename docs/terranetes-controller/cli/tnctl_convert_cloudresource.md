---
title: "tnctl convert cloudresource"
---
## tnctl convert cloudresource

Used to convert cloudresource back to terraform

### Synopsis

Provides the ability to convert configurations and cloudresources back
into terraform modules.

Note, if you include --include-provider or --include-checkov, this
command will use the current kubeconfig context to retrieve the provider
and checkov policy from the cluster.

Convert a configuration in the cluster into a terraform module:
$ tnctl convert configuration -n my-namespace my-configuration

Convert a configuration file into a terraform module:
$ tnctl convert configuration -f my-configuration.yaml

Convert a cloudresource in the cluster into a terraform module:
$ tnctl convert cloudresource -n my-namespace my-cloudresource


```
tnctl convert cloudresource [OPTIONS] NAME [flags]
```

### Options

```
  -h, --help               help for cloudresource
      --include-checkov    Include checkov in the output (default true)
      --include-provider   Include provider in the output (default true)
  -n, --namespace string   Namespace of the resource (default "default")
  -p, --path string        The path to write the files to (default ".")
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl convert](../tnctl_convert)	 - Used to convert between different formats


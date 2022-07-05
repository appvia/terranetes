---
title: "tnctl build"
---
## tnctl build

Can be used to package up the terraform module for consumption

### Synopsis


Build is used to automatically generate a compatible terraform
configuration from a given terraform module. The source for the
module can be a local directory, a git repository, s3 bucket or
so forth. As long as you have the credentials and required CLI
binaries installed.

Generate a terraform configuration a Github repository
$ tnctl build github.com/terraform-aws-modules/terraform-aws-vpc

```
tnctl build SOURCE [OPTIONS] [flags]
```

### Options

```
      --enable-defaults    Indicates any defaults with values from the terraform module are included (default true)
      --enable-sensitive   Indicates any sensitive variables from the module should be placed into secrets (default true)
  -h, --help               help for build
      --name string        The name of the configuration resource (default "test")
      --namespace string   The namespace for the configuration (default "default")
      --provider string    Name of the credentials provider to use
      --source string      The path to the terraform module (default ".")
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl](../tnctl)	 - Terranetes CLI tool


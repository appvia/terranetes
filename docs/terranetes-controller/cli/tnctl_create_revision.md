---
title: "tnctl create revision"
---
## tnctl create revision

Used to create terranetes revision from a terraform module

### Synopsis


Create a terranetes revision from a terraform module. The command will
retrieve the module code if required, parse the attributes from the code
and build a plan.

Create a terranetes revision from the current directory
$ tnctl create revision .

Create a terranetes revision from a terraform module in a git repository
$ tnctl create revision -n test.01 -m https://examples.com/terraform-module.git?ref=v1.0.0


```
tnctl create revision [OPTIONS] MODULE [flags]
```

### Options

```
      --description string         A human readable description of the revision and what is provides
      --enable-default-variables   Indicates if include variables which have defaults from the terraform module (default true)
  -f, --file string                The path to save the revision to
  -h, --help                       help for revision
  -n, --name string                This name of the revision
      --provider string            The name of the terranetes provider to use (default "aws")
  -r, --revision string            The semvar version of this revision
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl create](../tnctl_create)	 - Used to create a resource


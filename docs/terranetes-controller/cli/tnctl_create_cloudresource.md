---
title: "tnctl create cloudresource"
---
## tnctl create cloudresource

Used to create a cloud resource from a plan

### Synopsis


Create a terranetes revision from a terraform module. The command will
retrieve the module code if required, parse the attributes from the code
and build a plan.

Create a terranetes revision from the current directory
$ tnctl create revision .

Create a terranetes revision from a terraform module in a git repository
$ tnctl create revision -n test.01 -m https://examples.com/terraform-module.git?ref=v1.0.0


```
tnctl create cloudresource [OPTIONS] [flags]
```

### Options

```
  -f, --filename string   The name of the file to write the cloud resource to
  -h, --help              help for cloudresource
      --plan string       The name of the plan to use
      --revision string   The semvar version of this revision
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl create](../tnctl_create)	 - Used to create a resource


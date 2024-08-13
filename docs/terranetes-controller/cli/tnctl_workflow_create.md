---
title: "tnctl workflow create"
---
## tnctl workflow create

Generates a workflow used to lint, validate and publish the module

### Synopsis


Can be used to generate an opinionate pipeline for terraform modules.
The module command will generate a Github actions pipeline, integrating
linting, validating and security checks.

Generate a workflow for module
$ tnctl workflow create PATH

You can override the location of the template via the configuration
file $\{HOME}/.tnctl/config.yaml (or TNCTL_CONFIG). Just add the
following

---
workflow: URL

```
tnctl workflow create PATH [OPTIONS] [flags]
```

### Options

```
      --ensure-naming-linting   Ensure the naming conventions of the repository (default true)
  -h, --help                    help for create
      --template string         Repository to use for the template (default "git::ssh://git@github.com/appvia/terranetes-workflows?ref=master")
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl workflow](../tnctl_workflow)	 - Can be used to generate a skelton CI pipeline


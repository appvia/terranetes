---
title: "tnctl create workflow"
---
## tnctl create workflow

Generates a workflow used to lint, validate and publish the module

### Synopsis


Workflow provide an out of the box solution to generating ci
pipelines for your terraform modules. The pipelines are coded
to enforce, linting, validation, documentation generation
and security scanning. Also when enabled the pipeline will
also include a release.

Can be used to generate an opinionate pipeline for terraform modules.
The module command will generate a Github actions pipeline, integrating
linting, validating and security checks.

Generate a workflow for module
$ tnctl create workflow PATH

You can override the location of the template via the configuration
file ${HOME}/.tnctl/config.yaml (or TNCTL_CONFIG). Just add the
following

---
workflow: URL

```
tnctl create workflow PATH [OPTIONS] [flags]
```

### Options

```
      --ensure-naming-linting   Ensure the naming conventions of the repository (default true)
  -h, --help                    help for workflow
      --template string         Repository to use for the template (default "git::ssh://git@github.com/appvia/terranetes-workflows?ref=master")
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl create](../tnctl_create)	 - Used to create a resource


---
title: "tnctl workflow"
---
## tnctl workflow

Can be used to generate a skelton CI pipeline

### Synopsis

Workflow provide an out of the box solution to generating ci
pipelines for your terraform modules. The pipelines are coded
to enforce, linting, validation, documentation generation
and security scanning. Also when enabled the pipeline will
also include a release.

Generate a pipeline for a terraform module
$ tnctl workflow create PATH


```
tnctl workflow COMMAND [flags]
```

### Options

```
  -h, --help   help for workflow
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl](../tnctl)	 - Terranetes CLI tool
* [tnctl workflow create](../tnctl_workflow_create)	 - Generates a workflow used to lint, validate and publish the module


---
title: "tnctl search"
---
## tnctl search

Searches for cloud resources to consume

### Synopsis


Searches the sources, determined by the configuration file (tnctl config view)
for modules which match the required terms. Once selected the command will
generate the Configuration CRD required to use the module as a source.

At present we support using the Terraform registry and GitHub user / organizations
as a source for terraform modules.

Add the terraform registry
$ tnctl config sources add https://registry.terraform.io

Scope the terraform registry searches to a specific namespace
$ tnctl config sources add https://registry.terraform.io/namespaces/appvia

Adding a GitHub user or organization
$ tnctl config sources add https://github.com/appvia

For private repositories on Github you will need to export your token
to the environment variable GITHUB_TOKEN.
$ export GITHUB_TOKEN=TOKEN

This command assumes credentials have already been setup. For the Terraform registry,
nothing is required, but for private repositories on Github your environment must
already be setup to git clone the repository.


```
tnctl search [OPTIONS] [flags]
```

### Options

```
      --enable-defaults           Indicates any defaults with values from the terraform module are included
  -h, --help                      help for search
      --name string               Is the name of the resource to create
  -p, --provider string           Limit the search only to modules with the given provider
  -s, --source string             Limit the scope of the search to a specific source
      --source-namespace string   The namespace within the source registry to scope the search
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl](../tnctl)	 - Terranetes CLI tool


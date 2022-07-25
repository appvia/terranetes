---
title: "tnctl config sources add"
---
## tnctl config sources add

Adds a terraform module source to the configuration

### Synopsis

Sources are the URL locations for terraform modules. By default if
no sources are defined we use the public terraform registry. We currently
support aggregating modules from any terraform registry and Github.

Add a terraform registry to the source
$ tnctl config sources add https://registry.terraform.io

Add a Github organization or user to the source
$ tnctl config sources add github.com/appvia/terranetes-controller

Note, skipping the name github organization or user requires your GITHUB_TOKEN
is exported as the CLI will use this to authenticate to the github and
search any repositories you are a member, contributor or owner of.


```
tnctl config sources add SOURCE [flags]
```

### Options

```
  -h, --help   help for add
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl config sources](../tnctl_config_sources)	 - Used to manage the sources of the terraform modules


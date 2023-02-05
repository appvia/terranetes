---
title: "tnctl kubectl plugin"
---
## tnctl kubectl plugin

Generates the kubectl plugin integration

### Synopsis


This command is used to integrate the tnctl command as a kubectl
plugin. It effectively generates a series of shortcuts that are
called from kubectl. You need to ensure the scripts this command
generates are included your $PATH, long with the location of the
tnctl command.

Create the kubectl plugins (defaults to ${HOME}/bin)
$ tnctl kubectl plugin

Place the plugins scripts in another directory
$ tnctl kubectl plugin -d ${GOPATH}/bin


```
tnctl kubectl plugin [OPTIONS] [flags]
```

### Options

```
  -d, --directory string   Directory to place the kubectl plugins shortcuts (default "/home/jest/bin")
  -h, --help               help for plugin
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl kubectl](../tnctl_kubectl)	 - Kubectl plugin related commands


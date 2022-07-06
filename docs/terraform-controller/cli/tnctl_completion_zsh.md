---
title: "tnctl completion zsh"
---
## tnctl completion zsh

Generate the autocompletion script for zsh

### Synopsis

Generate the autocompletion script for the zsh shell.

If shell completion is not already enabled in your environment you will need
to enable it.  You can execute the following once:

	echo "autoload -U compinit; compinit" >> ~/.zshrc

To load completions in your current shell session:

	source <(tnctl completion zsh); compdef _tnctl tnctl

To load completions for every new session, execute once:

#### Linux:

	tnctl completion zsh > "${fpath[1]}/_tnctl"

#### macOS:

	tnctl completion zsh > $(brew --prefix)/share/zsh/site-functions/_tnctl

You will need to start a new shell for this setup to take effect.


```
tnctl completion zsh [flags]
```

### Options

```
  -h, --help              help for zsh
      --no-descriptions   disable completion descriptions
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl completion](../tnctl_completion)	 - Generate the autocompletion script for the specified shell


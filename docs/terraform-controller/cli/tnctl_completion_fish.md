---
title: "tnctl completion fish"
---
## tnctl completion fish

Generate the autocompletion script for fish

### Synopsis

Generate the autocompletion script for the fish shell.

To load completions in your current shell session:

	tnctl completion fish | source

To load completions for every new session, execute once:

	tnctl completion fish > ~/.config/fish/completions/tnctl.fish

You will need to start a new shell for this setup to take effect.


```
tnctl completion fish [flags]
```

### Options

```
  -h, --help              help for fish
      --no-descriptions   disable completion descriptions
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl completion](../tnctl_completion)	 - Generate the autocompletion script for the specified shell


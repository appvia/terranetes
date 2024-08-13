---
title: "tnctl completion bash"
---
## tnctl completion bash

Generate the autocompletion script for bash

### Synopsis

Generate the autocompletion script for the bash shell.

This script depends on the 'bash-completion' package.
If it is not installed already, you can install it via your OS's package manager.

To load completions in your current shell session:

	source \<(tnctl completion bash)

To load completions for every new session, execute once:

#### Linux:

	tnctl completion bash > /etc/bash_completion.d/tnctl

#### macOS:

	tnctl completion bash > $(brew --prefix)/etc/bash_completion.d/tnctl

You will need to start a new shell for this setup to take effect.


```
tnctl completion bash
```

### Options

```
  -h, --help              help for bash
      --no-descriptions   disable completion descriptions
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl completion](../tnctl_completion)	 - Generate the autocompletion script for the specified shell


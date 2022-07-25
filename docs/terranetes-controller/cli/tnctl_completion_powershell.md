---
title: "tnctl completion powershell"
---
## tnctl completion powershell

Generate the autocompletion script for powershell

### Synopsis

Generate the autocompletion script for powershell.

To load completions in your current shell session:

	tnctl completion powershell | Out-String | Invoke-Expression

To load completions for every new session, add the output of the above command
to your powershell profile.


```
tnctl completion powershell [flags]
```

### Options

```
  -h, --help              help for powershell
      --no-descriptions   disable completion descriptions
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl completion](../tnctl_completion)	 - Generate the autocompletion script for the specified shell


---
title: "tnctl verify revision"
---
## tnctl verify revision

Performs a series of checks against a Revision to ensure it is ready for use

### Synopsis


Performs a series of checks against the Revision to ensure the configuration is
valid and it will work with the within the cluster. This command uses the current
kubeconfig context to retrieve details such as Provider/s, Policies and Contexts.

Verify the revision will work in the cluster
$ tnctl verify revision revision.yaml

We can also include additional files such as Contexts, Policies and Plans. This can
be useful if you want to test a revision against a specific context or policy, before
applying it to the cluster.
$ tnctl verify revision revision.yaml --source-dir /path/to/files

When validating the module against the Checkov security policy, by default you
scan the module rather than the terraform plan. While the module scan does pick
many issues some validation errors will only appear during the plan stage. You
should consider using the '--use-terraform-plan' flag. Note, this requires
you have the appropriate cloud credentials configured within your terminal
environment.
$ tnctl verify revision revision.yaml --use-terraform-plan

To speed up multiple iterations of this command it's useful to use the --directory
flag. This instructs the command to reuse the directory, rather then creating a
an ephemeral one each time (and downloading, terraform provider, if --use-terraform-plan
is enabled, and so forth). Note, the --directory flag will create files in the
directory, so ensure there's no terraform files already there.
$ tnctl verify revision revision.yaml --directory /path/to/directory

Once verification has completed, you can continue to assure the Revision by running
it against terraform itself
$ tnctl convert revision revision.yaml | terraform plan -out plan.out


```
tnctl verify revision [OPTIONS] FILE [flags]
```

### Options

```
      --checkov-image string     The docker image of checkov to use when validating the security policy
  -d, --directory string         Path to a directory to store temporary files
  -h, --help                     help for revision
  -s, --source-dir string        Path to a directory containing additional (or overrides) files i.e. Contexts, Policies, Plans etc
      --terraform-image string   The docker image of terraform to use when generating a plan
      --use-cluster              Indicates if we should retrieve configuration from the current kubeconfig (default true)
      --use-terraform-plan       Indicates if we should use a terraform plan to verify the security policy
```

### Options inherited from parent commands

```
      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")
      --verbose         Enable verbose logging
```

### SEE ALSO

* [tnctl verify](../tnctl_verify)	 - Used to verify and validate resources


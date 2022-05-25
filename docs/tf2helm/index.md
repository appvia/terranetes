---
sidebar_position: 1
title: Overview
---

# tf2helm

`t2helm` is a simple Python utility that converts a Terraform module to a Helm Chart. The Helm Chart contains a Kubernetes Custom Resource understood and managed by one of the following Kubernetes Operators:
1. [Appvia Terraform Controller (default)](https://github.com/appvia/terraform-controller)
2. [Isaaguilar Terraform Operator](https://github.com/isaaguilar/terraform-operator)
3. [OAM Terraform Controller](https://github.com/oam-dev/terraform-controller)

`tf2helm` reads a Terraform module from a local or remote path and converts it into a Helm chart in a specified directory. Terraform variables are read from the module source and written under `.Values.required` and `.Values.optional` keys in the Helm `values.yaml` file, depending on whether they have been assigned values or not.

This gives infrastructure operators e.g. DevOps or Platform engineers the flexibility to set sensible default parameters for cloud resources and make them visible and configurable to application developers who may or may not override them afterwards.

![Terranetes Diagram](/img/terranetes.jpg)

## Installation

The tf2helm package is published in the [Python Package Index](https://pypi.org/project/tf2helm/), making for easy installation via pip:

```
pip install tf2helm
```

## Usage

```shell
$ tf2helm --help

Usage: tf2helm [OPTIONS]


  tf2helm converts a Terraform module to a Helm Chart

Options:
  --tf_module_path TEXT  Terraform module local Path e.g.
                         "/local/path/to/module".
  --tf_module_url TEXT   Terraform module URL e.g.
                         "https://github.com/<org>/<module>?ref=<branch|tag>".
  --tf_version TEXT      Terraform version.
  --git_auth TEXT        Git access token or SSH private key to use with a
                         private repository.
  --template TEXT        Template to generate the custom resource definition.
                         (isaaguilar, terraform-controller, oam-terraform-
                         controller)
  --name TEXT            Helm chart name.
  --app_version TEXT     Helm chart application version.
  --output_dir TEXT      Path to the Helm chart output directory.
  --version              Show the version and exit.
  --help                 Show this message and exit.
```

---
sidebar_position: 2
---

# Releases

## Release v0.2.1

## Bug Fixes

* Fixing a bug in the parsing of the infracost report which was introduced in v0.1.6 release by https://github.com/appvia/terraform-controller/pull/96. We were expecting a float64 when actually it's a string

## What's Changed
* [HELM] - Helm Release for v0.2.0 by @gambol99 in https://github.com/appvia/terraform-controller/pull/137

**Full Changelog**: https://github.com/appvia/terraform-controller/compare/v0.2.0...v0.2.1

## Release v0.2.0

### New Features
* **Provider Scope moved to Cluster** has been moved to teh cluster scope and away from a namespace resource. [#116](https://github.com/appvia/terraform-controller/pull/116)
* **Drift Detection** provides the ability to automatically detect configurations which have drifted from the expected state [#131](https://github.com/appvia/terraform-controller/pull/131)
* **Adding Terraform Version to Status** is not exporsed on the terraform state [#131](https://github.com/appvia/terraform-controller/pull/131)
* **Overall Configuration State** now provides a synchronization overview of the configuration.

### Bug Fixes
* [BUGFIX] - Approval Annotation by @gambol99 https://github.com/appvia/terraform-controller/pull/133
* [BUGFIX] - Fixing Method Name Typo by @gambol99 https://github.com/appvia/terraform-controller/pull/121

### Migration Required

Would involve deleting all the current providers, their CRD and them applying them again without the namespace.

```shell
# scope the deployment down
$ kubectl -n terraform-system scale deployment terraform-controller --replicas=0
# delete the old provider
$ kubectl -n terraform-system get provider <NAME> -o yaml > saved.1
# Deploy the v0.1.7 version, just change the replicas to 0
$ vim <VALUE_FILE> # change the top replicaCount -> replicaCount: 0
# Perform the upgrade - no changes to the configurations are required. The namespace field in the spec.providerRef is simply ignored.
$ helm upgrade -n terraform-system terraform-controller appvia/terraform-controller --values <VALUE_FILE>
# Apply the providers again
$ kubectl apply -f saved.1
# Change the replicaCount back to 1 and rerun the helm upgrade
```

### What's Changed
* [FEATURE] - Provider Scope moved to Cluster by @gambol99 https://github.com/appvia/terraform-controller/pull/116
* [BUILD] - CI Workflow by @gambol99 https://github.com/appvia/terraform-controller/pull/135
* [E2E] - Drift Detection E2E by @gambol99 https://github.com/appvia/terraform-controller/pull/134
* [BUGFIX] - Approval Annotation by @gambol99 https://github.com/appvia/terraform-controller/pull/133
* [FEATURE] - Drift Detection by @gambol99 https://github.com/appvia/terraform-controller/pull/131
* [GENERAL] - Moving Utility Method into common by @gambol99 https://github.com/appvia/terraform-controller/pull/130
* [CLEAN] - Template Unit Tests by @gambol99 https://github.com/appvia/terraform-controller/pull/129
* [LOGGING] - Condition Logging by @gambol99 https://github.com/appvia/terraform-controller/pull/128
* [DEPENDABOT] - Bump gotest.tools/gotestsum from 1.8.0 to 1.8.1 by @gambol99 https://github.com/appvia/terraform-controller/pull/126
* [FEATURE] - Adding Terraform Version to Status by @gambol99 https://github.com/appvia/terraform-controller/pull/124
* [CI] - Linting Timeout
* [BUILD] - Clean Status by @gambol99 https://github.com/appvia/terraform-controller/pull/122
* [BUGFIX] - Fixing Method Name Typo by @gambol99 https://github.com/appvia/terraform-controller/pull/121
* [FEATURE] - Adding Labels to Executors
* [FEATURE] - Adding Pod Labels by @gambol99 https://github.com/appvia/terraform-controller/pull/119
* [DEPENDABOT] - Bump github.com/stretchr/testify from 1.7.1 to 1.7.2 by @gambol99 https://github.com/appvia/terraform-controller/pull/117
* [DEPENDABOT] - Bump mvdan.cc/sh/v3 from 3.4.3 to 3.5.1 by @gambol99 https://github.com/appvia/terraform-controller/pull/108
* [DEPENDABOT] - Bump k8s.io/code-generator from 0.24.0 to 0.24.1 by @gambol99 https://github.com/appvia/terraform-controller/pull/107
* [DEPENDABOT] - Bump github.com/golangci/golangci-lint from 1.45.2 to 1.46.2 [#97]https://github.com/appvia/terraform-controller/pull/97
* [DEPENDABOT] - Bump github.com/evanphx/json-patch from 4.12.0+incompatible to 5.6.0+incompatible by @gambol99 https://github.com/appvia/terraform-controller/pull/109
* [DEPENDABOT] - Bump github.com/felixge/httpsnoop from 1.0.2 to 1.0.3 by @gambol99 https://github.com/appvia/terraform-controller/pull/110
* [DOCS] - Development Docs by @gambol99 https://github.com/appvia/terraform-controller/pull/136
* [DOCS] - Readme Change by @gambol99 https://github.com/appvia/terraform-controller/pull/118
* [API] - Description on API Types by @gambol99 https://github.com/appvia/terraform-controller/pull/114
* [BUILD] - Dependabot Target Branch by @gambol99 https://github.com/appvia/terraform-controller/pull/113
* [DOCS] - Updating Architecture Image by @gambol99 https://github.com/appvia/terraform-controller/pull/115
* [BUILD] - Latest Workflow Change by @gambol99 https://github.com/appvia/terraform-controller/pull/112
* [HELM] - [DEPENDABOT] - Bumping Version of Chart by @gambol99 https://github.com/appvia/terraform-controller/pull/111

**Full Changelog**: https://github.com/appvia/terraform-controller/compare/v0.1.6...v0.2.0

## Release v0.1.6

### New Features
* **Configuration Cost Metrics** adds the predicted costs of the configuration as exposed prometheus metrics; by @gambol99 in https://github.com/appvia/terraform-controller/pull/96
* **ValueFrom fields** allows to source sensitive variables from kubernetes secrets rather exposing on the spec; by @gambol99 in https://github.com/appvia/terraform-controller/pull/103

### Bug Fixes
* Terraform State Decoding by @gambol99 in https://github.com/appvia/terraform-controller/pull/104
* Exposing the Metrics by @gambol99 in https://github.com/appvia/terraform-controller/pull/95
* Adding the UID Labels - adding the UIDs on the labels for resources to make pinpointing the source configuration easier. By @gambol99 in https://github.com/appvia/terraform-controller/pull/100

### What's Changed
* [BUILD] - Adding Dependabot Config by @gambol99 in https://github.com/appvia/terraform-controller/pull/70
* Bump github.com/onsi/gomega from 1.18.1 to 1.19.0 by @dependabot in https://github.com/appvia/terraform-controller/pull/71
* [BUILD] - Changing Workflow by @gambol99 in https://github.com/appvia/terraform-controller/pull/83
* [HELM] - Minior Changes by @gambol99 in https://github.com/appvia/terraform-controller/pull/84
* [BUILD] - Ginkgo Update by @gambol99 in https://github.com/appvia/terraform-controller/pull/80
* Update features in README linking to docs by @KashifSaadat in https://github.com/appvia/terraform-controller/pull/81
* [DOCS] - Adding Architecture Image by @gambol99 in https://github.com/appvia/terraform-controller/pull/85
* Update README.md by @gambol99 in https://github.com/appvia/terraform-controller/pull/87
* [HELM] - Ignore Existing Releases by @gambol99 in https://github.com/appvia/terraform-controller/pull/88
* Update README.md by @gambol99 in https://github.com/appvia/terraform-controller/pull/89
* lookup bash executable instead by @myjaffoo in https://github.com/appvia/terraform-controller/pull/90
* Bump sigs.k8s.io/controller-tools from 0.8.0 to 0.9.0 by @dependabot in https://github.com/appvia/terraform-controller/pull/92
* Bump gotest.tools/gotestsum from 1.8.0 to 1.8.1 by @dependabot in https://github.com/appvia/terraform-controller/pull/91
* Bump k8s.io/client-go from 0.23.5 to 0.24.1 by @dependabot in https://github.com/appvia/terraform-controller/pull/78
* [DEPS] - Updating the Dependencies by @gambol99 in https://github.com/appvia/terraform-controller/pull/94
* [BUGFIX] - Terraform State Decoding by @gambol99 in https://github.com/appvia/terraform-controller/pull/104
* [HELM] - Bumping Application Version by @gambol99 in https://github.com/appvia/terraform-controller/pull/106
* [RELEASE] - Release v0.1.6 by @gambol99 in https://github.com/appvia/terraform-controller/pull/86

### New Contributors
* @KashifSaadat made their first contribution in https://github.com/appvia/terraform-controller/pull/81
* @myjaffoo made their first contribution in https://github.com/appvia/terraform-controller/pull/90

**Full Changelog**: https://github.com/appvia/terraform-controller/compare/v0.1.5...v0.1.6

## Release v0.1.5

### Build
* Fixed up the chart directory structure in order to properly support the helm tools and deployment [#67](https://github.com/appvia/terraform-controller/pull/67)

### What's Changed
* [HELM] - Directory Structure by @gambol99 in https://github.com/appvia/terraform-controller/pull/67
* [HELM] - Bumping Helm Releaser Version by @gambol99 in https://github.com/appvia/terraform-controller/pull/68

**Full Changelog**: https://github.com/appvia/terraform-controller/compare/v0.1.4...v0.1.5

## Release v0.1.4

### New Features
* Disable Terraform Version Override [#50](https://github.com/appvia/terraform-controller/pull/50) Currently all configurations have the ability to override the terraform version on their spec (this effectively overrides the terraform image tag). There might be times where you want this disabled though. This PR adds the ability to the platform teams to switch off the feature (which is enabled by default).
* Module Selector (#58): The current module constraint is global, adding a selector here you can target specific resources or namespaces and provides a means for additional permissions. Note as with all selectors here, a empty selector indicates it applies to all.
* External Checks for Checkov [#64](https://github.com/appvia/terraform-controller/pull/64): Adding the ability to source in external checks to be included in the scan.

### Build
* Workflow Speed [#61](https://github.com/appvia/terraform-controller/pull/61): sped up the execution time of the images by breaking them up
* Deduplicating the E2E [#63](https://github.com/appvia/terraform-controller/pull/63): Much of the E2E is the we can dedup the workflow and reuse across all the providers
* Constraint Checks [#65](https://github.com/appvia/terraform-controller/pull/65): adding Constraint Checks
* Added E2E for Azure
* Adding E2E for Google [#42](https://github.com/appvia/terraform-controller/issues/42)

### What's Changed
* [E2E] - Adding Azure E2E by @gambol99 in https://github.com/appvia/terraform-controller/pull/54
* [FEATURE] - Resource Lock by @gambol99 in https://github.com/appvia/terraform-controller/pull/57
* [RELEASE] v0.1.4 by @gambol99 in https://github.com/appvia/terraform-controller/pull/59

**Full Changelog**: https://github.com/appvia/terraform-controller/compare/v0.1.3...v0.1.4

## Release v0.1.3

### Bug Fixes
* Fixed an issue with the API type for Provider. An enum was stopping an Azure provider from being added as it had `azure` not `azurerm` defined. https://github.com/appvia/terraform-controller/pull/51

### What's Changed
* [CI] - Reuse E2E Workflow by @gambol99 in https://github.com/appvia/terraform-controller/pull/46
* Update README.md by @gambol99 in https://github.com/appvia/terraform-controller/pull/48
* [DOCS] - Fixing the README links by @gambol99 in https://github.com/appvia/terraform-controller/pull/49
* [BUGFIX] - Provider Enum on API Types by @gambol99 in https://github.com/appvia/terraform-controller/pull/51

**Full Changelog**: https://github.com/appvia/terraform-controller/compare/v0.1.2...v0.1.3

## Release v0.1.2

### New Features
- **RBAC Support**:  Added support for RBAC on the Providers. This allows platform teams to specify a collection of selectors which are used to match namespace and resource labels to determine if the Configuration is permitted to use it. Click [here](https://terraform-controller.appvia.io/admin/providers#configure-rbac-for-providers) for full details https://github.com/appvia/terraform-controller/pull/29
- **Connection Secret Keys**: added the ability for Configuration's to filter which keys from the terraform ouput they want to see in the connection secret. Click [here](https://terraform-controller.appvia.io/admin/providers) for details. https://github.com/appvia/terraform-controller/pull/34
- **Kubernetes Events**: crucial events were being recorded in the status conditions only. This change raises those same conditions as Kubernetes events themselves which can be used to trigger off notifications. https://github.com/appvia/terraform-controller/pull/31

### Bug Fixes
- Fixed an issue where the service account from the provider was not correctly being set on the terraform https://github.com/appvia/terraform-controller/pull/35

### Documentation
- Added a additional docs on the types types https://github.com/appvia/terraform-controller/pull/26
- Updated the repository readme https://github.com/appvia/terraform-controller/pull/25

### What's Changed

* [DOCS] Updating the README by @gambol99 in https://github.com/appvia/terraform-controller/pull/25
* [DOCS] Updating the API Documentation by @gambol99 in https://github.com/appvia/terraform-controller/pull/26
* [CI] - E2E Workflow by @gambol99 in https://github.com/appvia/terraform-controller/pull/33
* [BUGFIX] - Provider Service Accounts by @gambol99 in https://github.com/appvia/terraform-controller/pull/35
* [DOCS] - Adding License File by @gambol99 in https://github.com/appvia/terraform-controller/pull/38
* [CI] - Dependency Review by @gambol99 in https://github.com/appvia/terraform-controller/pull/37
* [FEATURE] - Connection Secret Keys by @gambol99 in https://github.com/appvia/terraform-controller/pull/34
* [FEATURE] - Kubernetes Events by @gambol99 in https://github.com/appvia/terraform-controller/pull/31
* [FEATURE] - Provider RBAC by @gambol99 in https://github.com/appvia/terraform-controller/pull/29
* [CI] - Dependency Check by @gambol99 in https://github.com/appvia/terraform-controller/pull/44
* [RELEASE] - Version v0.1.2 by @gambol99 in https://github.com/appvia/terraform-controller/pull/45

**Full Changelog**: https://github.com/appvia/terraform-controller/compare/v0.1.1...v0.1.2

## Release v0.1.1

### Features

Introduced the ability for the platform administrators to enforce a security profile against the terraform modules.

```YAML
apiVersion: terraform.appvia.io/v1alpha1
kind: Policy
metadata:
  name: checkov
spec:
  constraints:
    checkov:
      # See: https://www.checkov.io/5.Policy%20Index/terraform.html
      checks: []
      # See: https://www.checkov.io/5.Policy%20Index/terraform.html
      skipChecks: []
```

Where necessary an exception can be added, targetting by namespace and resource labels; which will override the above.

```YAML
---
# Create an exception to the above policy and force configurations
# in the specific namespace to use this instead
---
apiVersion: terraform.appvia.io/v1alpha1
kind: Policy
metadata:
  name: checkov-override
spec:
  constraints:
    checkov:
      selector:
        namespace:
          matchExpressions:
            - key: kubernetes.io/metadata.name
              operator: In
              values: [apps2]
      # See: https://www.checkov.io/5.Policy%20Index/terraform.html
      skipChecks:
        - <NAME>
```

### What's Changed

* [CI] - Fixing Github Workflow (Release) by @gambol99 in https://github.com/appvia/terraform-controller/pull/18
* [BUGFIX] - Decreasing Backoff Limit by @gambol99 in https://github.com/appvia/terraform-controller/pull/19
* [DOCS] - Development Readme by @gambol99 in https://github.com/appvia/terraform-controller/pull/21
* [FIX] - Supported Providers by @gambol99 in https://github.com/appvia/terraform-controller/pull/22
* [FEATURE] - Adding Checkov Security Policy by @gambol99 in https://github.com/appvia/terraform-controller/pull/20
* Release v0.1.1 by @gambol99 in https://github.com/appvia/terraform-controller/pull/23
* [CI] - Fixing the Release Step by @gambol99 in https://github.com/appvia/terraform-controller/pull/24

**Full Changelog**: https://github.com/appvia/terraform-controller/compare/v0.1.0...v0.1.1

## Release v0.1.0

### New Features
* Changed to use multiple containers within a job rather then baking a executor with all the dependencies. This opens up the ability to change the versions, images and so forth.
* Added the ability to specify the terraform version in the configuration
* Added the ability to override the job template completely for customization

### Bug Fixes
* Fixes a helm chart which was recreating the ca secret

### What's Changed
* [BUGFIX] - Autogenerate Certificate by @gambol99 in https://github.com/appvia/terraform-controller/pull/12
* [DOCS] - Executor Docs by @gambol99 in https://github.com/appvia/terraform-controller/pull/13
* Release v0.1.0 by @gambol99 in https://github.com/appvia/terraform-controller/pull/10
* [CI] - Kind Installation by @gambol99 in https://github.com/appvia/terraform-controller/pull/16
* [DOCS] - Adding Administrative Docs by @gambol99 in https://github.com/appvia/terraform-controller/pull/17

**Full Changelog**: https://github.com/appvia/terraform-controller/compare/v0.0.4...v0.1.0

---
sidebar_position: 2
---

# Releases

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

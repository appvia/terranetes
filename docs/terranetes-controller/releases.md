---
sidebar_position: 2
---

# Releases

## Release v0.3.7

Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.3.7/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.7/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.7/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.7/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.7/tnctl-windows-amd64.exe

### New Features
* Added  the ability to source in Checkov policies from central repository by @gambol99 in https://github.com/appvia/terranetes-controller/pull/340
* Added prometheus API metrics by @gambol99 in https://github.com/appvia/terranetes-controller/pull/332
* Bumped the version of Infracost to v0.10.10 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/336
* Bumped the version of Checkov to 2.1.137 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/337

### What's Changed

* [BUGFIX] - Terraform Variables by @gambol99 in https://github.com/appvia/terranetes-controller/pull/354
* [IMAGES] - Terraform Image Version Downgrade (1.2.7 -> 1.2.5) by @gambol99 in https://github.com/appvia/terranetes-controller/pull/353
* [E2E] - Adding Diagnostics to E2E by @gambol99 in https://github.com/appvia/terranetes-controller/pull/352
* [E2E] - Bug Fixes in E2E by @gambol99 in https://github.com/appvia/terranetes-controller/pull/351
* [CI] - Image Version Automation by @gambol99 in https://github.com/appvia/terranetes-controller/pull/349
* [CLEAN] - Dropping Checkov Variables Options by @gambol99 in https://github.com/appvia/terranetes-controller/pull/348
* [CI] - Adding Image Scanning by @gambol99 in https://github.com/appvia/terranetes-controller/pull/334
* [CLEAN] - Cleaning the Job Template by @gambol99 in https://github.com/appvia/terranetes-controller/pull/347
* [FEATURE] - Watching Destroy Logs by @gambol99 in https://github.com/appvia/terranetes-controller/pull/339
* [BUGFIX] - Central Security Policy by @gambol99 in https://github.com/appvia/terranetes-controller/pull/346
* [BUILD] - Publishing an Image for CLI by @gambol99 in https://github.com/appvia/terranetes-controller/pull/333
* [BUILD] - Upgrading Base Image (Alpine 3.15 -> 3.16) by @gambol99 in https://github.com/appvia/terranetes-controller/pull/335
* [FEATURE] - Adding API Server Metrics by @gambol99 in https://github.com/appvia/terranetes-controller/pull/332
* [BUILD] - Checkov Version (2.1.104 -> 2.1.137) by @gambol99 in https://github.com/appvia/terranetes-controller/pull/337
* [BUILD] - Terraform Version (v1.2.5 - v1.2.7) by @gambol99 in https://github.com/appvia/terranetes-controller/pull/338
* [CLI] - Setting a Default Namespace by @gambol99 in https://github.com/appvia/terranetes-controller/pull/343
* [BUILD] - Infracost Version (v0.10.9 -> v0.10.10) by @gambol99 in https://github.com/appvia/terranetes-controller/pull/336
* [BUGFIX] - Checkov Configuraion Optional by @gambol99 in https://github.com/appvia/terranetes-controller/pull/342
* [BUGFIX] - Changing the Policy Source Field by @gambol99 in https://github.com/appvia/terranetes-controller/pull/341
* [FEATURE] - External Checkov Source by @gambol99 in https://github.com/appvia/terranetes-controller/pull/340
* Bump k8s.io/apiextensions-apiserver from 0.24.3 to 0.24.4 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/324
* Bump k8s.io/cli-runtime from 0.24.3 to 0.24.4 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/325
* Bump k8s.io/api from 0.24.3 to 0.24.4 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/329
* Bump k8s.io/client-go from 0.24.3 to 0.24.4 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/328
* Bump github.com/tcnksm/ghr from 0.14.0 to 0.15.0 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/327
* Bump github.com/tidwall/gjson from 1.14.2 to 1.14.3 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/322
* [CLEANUP] - Dependencies by @gambol99 in https://github.com/appvia/terranetes-controller/pull/320
* [DOCS] - Updating Configuration Example by @gambol99 in https://github.com/appvia/terranetes-controller/pull/350
* [DOCS] - Adding Private Module Example by @gambol99 in https://github.com/appvia/terranetes-controller/pull/345
* [DOCS] - Readme Update by @gambol99 in https://github.com/appvia/terranetes-controller/pull/323
* [DOCS] - GHCR badge by @gambol99 in https://github.com/appvia/terranetes-controller/pull/321

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.3.6...v0.3.7


## Release v0.3.6

Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.3.6/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.6/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.6/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.6/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.6/tnctl-windows-amd64.exe

### What's Changed
* [HELM] - Release v0.3.5 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/317
* [FEATURE] - Convert Command by @gambol99 in https://github.com/appvia/terranetes-controller/pull/318
* [BUGFIX] - Convert Configuration Source by @gambol99 in https://github.com/appvia/terranetes-controller/pull/319

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.3.5...v0.3.6

## Release v0.3.5

Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.3.5/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.5/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.5/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.5/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.5/tnctl-windows-amd64.exe

### What's Changed
* [HELM] - Release v0.3.4 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/315
* [FEATURE] - Redirect Search Output by @gambol99 in https://github.com/appvia/terranetes-controller/pull/316

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.3.4...v0.3.5

## Release v0.3.4

Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.3.4/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.4/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.4/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.4/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.4/tnctl-windows-amd64.exe

### What's Changed

* [DOCS] - Updating Development Docs by @gambol99 in https://github.com/appvia/terranetes-controller/pull/299
* [CI] - Support Binaries & CLI by @gambol99 in https://github.com/appvia/terranetes-controller/pull/301
* [CI] - Trigger Development E2E by @gambol99 in https://github.com/appvia/terranetes-controller/pull/304
* [DOCS] - Example Provider Secrets by @gambol99 in https://github.com/appvia/terranetes-controller/pull/307
* [DOCS] - Updating Readme by @gambol99 in https://github.com/appvia/terranetes-controller/pull/312
* Update README.md by @gambol99 in https://github.com/appvia/terranetes-controller/pull/313

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.3.3...v0.3.4

## Release v0.3.3

Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.3.3/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.3/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.3/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.3/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.3/tnctl-windows-amd64.exe

### What's Changed

* [HELM] - Release v0.3.2 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/288
* [HELM] - Bugfix Helm Template (Policies & Providers) by @gambol99 in https://github.com/appvia/terranetes-controller/pull/290
* Bump github.com/golangci/golangci-lint from 1.47.2 to 1.47.3 by @dependabot in https://github.com/appvia/terranetes-controller/pull/291
* [FEATURE] - Adding Configuration Interface by @gambol99 in https://github.com/appvia/terranetes-controller/pull/292

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.3.2...v0.3.3

## Release v0.3.2

Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.3.2/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.2/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.2/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.2/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.2/tnctl-windows-amd64.exe

### New Features

* The ability to generate the kubectl plugin by @gambol99 in https://github.com/appvia/terranetes-controller/pull/286

### Bug Fixes

* Fixed the issues where a $HOME/.tnctl/config.yaml not present would throw an error by @gambol99 in https://github.com/appvia/terranetes-controller/pull/284

### What's Changed

* Update README.md by @gambol99 in https://github.com/appvia/terranetes-controller/pull/278
* [FEATURE] - Updating Controller Version String by @gambol99 in https://github.com/appvia/terranetes-controller/pull/280
* [E2E] - Install Official Chart by @gambol99 in https://github.com/appvia/terranetes-controller/pull/279
* [E2E] - Use Chart Option by @gambol99 in https://github.com/appvia/terranetes-controller/pull/281
* [E2E] - Check Suite Script by @gambol99 in https://github.com/appvia/terranetes-controller/pull/282
* [BUGFIX] - CLI Configuration by @gambol99 in https://github.com/appvia/terranetes-controller/pull/284
* [TESTS] - Update CLI Tests for Sources Command by @gambol99 in https://github.com/appvia/terranetes-controller/pull/285
* [CLI] - Kubectl Plugin Command by @gambol99 in https://github.com/appvia/terranetes-controller/pull/286
* [FEATURE] - Using Repository Name in Search by @gambol99 in https://github.com/appvia/terranetes-controller/pull/287

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.3.1...v0.3.2

## Release v0.3.1

Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.3.1/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.1/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.1/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.1/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.1/tnctl-windows-amd64.exe

### New Features

* Added support for custom terraform state backends by @gambol99 in https://github.com/appvia/terranetes-controller/pull/276
* Added support to the Helm chart to specify the `spec.summary` field in Provider by @gambol99 in https://github.com/appvia/terranetes-controller/pull/275

### What's Changed

* [DOCS] - Architecture Images by @gambol99 in https://github.com/appvia/terranetes-controller/pull/274
* [FEATURE] - Support Summaries on Provider Helm Chart by @gambol99 in https://github.com/appvia/terranetes-controller/pull/275
* [FEATURE] - Custom State Backend by @gambol99 in https://github.com/appvia/terranetes-controller/pull/276
* [HELM] - Helm Release for v0.3.1 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/277

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.3.0...v0.3.1

## Release v0.3.0

Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.3.0/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.0/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.0/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.0/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.0/tnctl-windows-amd64.exe

### Breaking Change

Note the project was renamed from teraform-controller to terranetes-controller

* All the CRD have stayed the same - so no need to alter any Provides, Policies or Configurations.
* The helm chart and name of the project inside has changed though

To upgrade - the easiest solution would be to delete the old helm chart and install the latest one. There are no changes from v0.2.9, all commits are related to name changes.

```bash
# We are assuming here the controller is installed via helm in 'terraform-system' namespace.
$ helm ls -n terraform-system
# Remove the chart
$ helm -n terraform-system uninstall terraform-controller

# Add the new Helm chart repository
$ helm repo remove appvia
$ helm repo add appvia https://terranetes-controller.appvia.io
$ helm repo update
$ helm install -n terraform-system terranetes-controller appvia/terranetes-controller --create-namespace \
  --values YOUR_VALUES_IF_ANY
# kubectl -n terraform-system get po
```

If you are managing the deployments outside of Helm, you simply need to use the updated images

* ghcr.io/appvia/terranetes-controller:v0.3.0 (on deployment)
* ghcr.io/appvia/terranetes-executor:v0.3.0 (on command line --executor-image)

### What's Changed

* [NAMING] - Renaming to Terranetes Controller by @gambol99 in https://github.com/appvia/terranetes-controller/pull/268
* [CI] - Adding Workflow Dispatch - CodeQL by @gambol99 in https://github.com/appvia/terranetes-controller/pull/267
* [DOCS] - CodeQL Badge by @gambol99 in https://github.com/appvia/terranetes-controller/pull/266
* [HELM] - Bumping the Helm Chart by @gambol99 in https://github.com/appvia/terranetes-controller/pull/270
* [CI] - Workflow Fix - Docker Images by @gambol99 in https://github.com/appvia/terranetes-controller/pull/271
* [CI] - Fixing Naming on Docker Images by @gambol99 in https://github.com/appvia/terranetes-controller/pull/272
* [HELM] - Release v0.3.0 Chart by @gambol99 in https://github.com/appvia/terranetes-controller/pull/273

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.2.9...v0.3.0

## Release v0.2.9

Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.2.9/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.2.9/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.2.9/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.2.9/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.2.9/tnctl-windows-amd64.exe

### New Features

* Added code analysis by @gambol99 in https://github.com/appvia/terranetes-controller/pull/205
* Added Provider Summary Field by @gambol99 in https://github.com/appvia/terranetes-controller/pull/247
* Bumping Version Checkov 2.1.67 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/251
* Bumping Infracost Version 0.10.7, 0.10.8 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/250
* Terraform Version v1.2.5 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/252
* Added the abiliy to apply executor permissions to namespace service account, making it quicker to rollout multiple injected provided Service by @gambol99 in https://github.com/appvia/terranetes-controller/pull/260
* Started off the basis of error detection to ease diagnosis by @gambol99 in https://github.com/appvia/terranetes-controller/pull/259
* Added the ability to deploy Providers via Helm by @gambol99 in https://github.com/appvia/terranetes-controller/pull/261
* Added the ability to deploy Policies via Helm by @gambol99 in https://github.com/appvia/terranetes-controller/pull/262

### Build
* Added Code of Conduct by @gambol99 in https://github.com/appvia/terranetes-controller/pull/242
* Added Issue templates by @gambol99 in https://github.com/appvia/terranetes-controller/pull/243

### Bug Fixes
* Fixed the sync status of a remove to say 'Deleting' by @gambol99 in https://github.com/appvia/terranetes-controller/pull/253
* Sanity Checking Query Parameters by @gambol99 in https://github.com/appvia/terranetes-controller/pull/255

### What's Changed
* [HELM] - Chart Release v0.2.8 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/233
* [FEATURE] - Adding CodeQL Workflow by @gambol99 in https://github.com/appvia/terranetes-controller/pull/205
* [DOCS] - Add Code of Conduct by @gambol99 in https://github.com/appvia/terranetes-controller/pull/242
* [GITHUB] - Add Issue templates by @gambol99 in https://github.com/appvia/terranetes-controller/pull/243
* Bump github.com/golangci/golangci-lint from 1.46.2 to 1.47.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/246
* Bump github.com/sirupsen/logrus from 1.8.1 to 1.9.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/245
* [FEATURE] - Adding Provider Summary Field by @gambol99 in https://github.com/appvia/terranetes-controller/pull/247
* Bump github.com/onsi/gomega from 1.19.0 to 1.20.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/248
* [HELM] - Bumping Version Checkov 2.1.67 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/251
* [HELM] - Bumping Infracost Version 0.10.7, 0.10.8 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/250
* [HELM] - Terraform Version v1.2.5 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/252
* [BUGFIX] - Resource Status when deleting by @gambol99 in https://github.com/appvia/terranetes-controller/pull/253
* [BUGFIX] - Sanity Checking Query Parameters by @gambol99 in https://github.com/appvia/terranetes-controller/pull/255
* Bump github.com/golangci/golangci-lint from 1.47.1 to 1.47.2 by @dependabot in https://github.com/appvia/terranetes-controller/pull/256
* [BUGFIX] - User Inputs Parameter Checking by @gambol99 in https://github.com/appvia/terranetes-controller/pull/258
* [FEATURE] - Detection of Errors by @gambol99 in https://github.com/appvia/terranetes-controller/pull/259
* [HELM] - Service Account Permissions - Executors by @gambol99 in https://github.com/appvia/terranetes-controller/pull/260
* [HELM] - Deploy Providers via Helm by @gambol99 in https://github.com/appvia/terranetes-controller/pull/261
* [HELM] - Deploy Policies via Helm Chart by @gambol99 in https://github.com/appvia/terranetes-controller/pull/262
* [HELM] - Release v0.2.9 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/263
* [CI] - Github Release Workflow by @gambol99 in https://github.com/appvia/terranetes-controller/pull/264
* [BUGFIX] - Refuse to continue by @gambol99 in https://github.com/appvia/terranetes-controller/pull/265

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.2.8...v0.2.9


## Release v0.2.8

Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.2.8/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.2.8/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.2.8/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.2.8/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.2.8/tnctl-windows-amd64.exe

### What's Changed

* [HELM] - Helm Release (v0.2.7) by @gambol99 in https://github.com/appvia/terranetes-controller/pull/224
* [CI] - Release Workflow Fix by @gambol99 in https://github.com/appvia/terranetes-controller/pull/225
* [HELM] - Fixing Application Bump by @gambol99 in https://github.com/appvia/terranetes-controller/pull/226
* [CLI] - Adding Logs Command by @gambol99 in https://github.com/appvia/terranetes-controller/pull/227
* [CLI] - Build Command by @gambol99 in https://github.com/appvia/terranetes-controller/pull/230
* [CLI] - Build Command Resource Name by @gambol99 in https://github.com/appvia/terranetes-controller/pull/231
* [BUGFIX] - Fixing Logs Command for Plans by @gambol99 in https://github.com/appvia/terranetes-controller/pull/232

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.2.7...v0.2.8

## Release v0.2.7

Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.2.7/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.2.7/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.2.7/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.2.7/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.2.7/tnctl-windows-amd64.exe

### New Features
* Provides the ability to remap connection secrets https://github.com/appvia/terranetes-controller/pull/222

### Bug Fixes
* Fixes a template error in the `tnctl describe` command which was causing a error https://github.com/appvia/terranetes-controller/pull/219
* Fixes the streaming of the logs in the developer namespace we stream in real time rather than waiting for completion https://github.com/appvia/terranetes-controller/pull/215

### What's Changed

* [HELM] - Bumping Version of Chart by @gambol99 in https://github.com/appvia/terranetes-controller/pull/213
* [BUILD] - Release Workflow by @gambol99 in https://github.com/appvia/terranetes-controller/pull/214
* [BUGFIX] - Streaming Logs by @gambol99 in https://github.com/appvia/terranetes-controller/pull/215
* [TESTING] - Adding Unit Tests for CLI by @gambol99 in https://github.com/appvia/terranetes-controller/pull/216
* Bump sigs.k8s.io/controller-runtime from 0.12.2 to 0.12.3 by @dependabot in https://github.com/appvia/terranetes-controller/pull/217
* [CLI] - Workflow Override by @gambol99 in https://github.com/appvia/terranetes-controller/pull/218
* [BUGFIX] - CLI Describe Template by @gambol99 in https://github.com/appvia/terranetes-controller/pull/219
* [CLI] - Build Command by @gambol99 in https://github.com/appvia/terranetes-controller/pull/221
* [CLI] - Describe Command by @gambol99 in https://github.com/appvia/terranetes-controller/pull/220
* [FEATURE] - Secret Renaming by @gambol99 in https://github.com/appvia/terranetes-controller/pull/222

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.2.6...v0.2.7

## Release v0.2.6

Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.2.6/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.2.6/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.2.6/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.2.6/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.2.6/tnctl-windows-amd64.exe

### New Features

* Added a terranetes CLI (tnctl) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/187
* Exposed the Costs and Policy evaluations to user by @gambol99 in http://github.com/appvia/terranetes-controller/pull/180
* Added additional Executor Secrets by @gambol99 in http://github.com/appvia/terranetes-controller/pull/204

### Bug Fixes
* Changed the default port for the webhooks to 10250 which by default is available for callback on most cloud vendored kubernetes by @gambol99 in by @gambol99 in http://github.com/appvia/terranetes-controller/pull/206

### What's Changed

* [BUILD] - Fixing LFAGS (#212) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/212
* [BUGFIX] - CLI Docs Generation (#210) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/210
* [FEATURE] - Generate CLI Docs (#208) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/208
* [FEATURE] - Workflow Creation (#207) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/207
* [FEATURE] - Additional Controller Secrets (#204) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/204
* [FEATURE] - CLI Configuration Override (#203) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/203
* [FEATURE] - Terraform Registry Namespace (#202) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/202
* [FEATURE] - Sensitive Inputs (#201) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/201
* [FEATURE] - Terranetes Search CLI by @gambol99 in http://github.com/appvia/terranetes-controller/pull/187
* [CLI] - Github Repository Listing by @gambol99 in http://github.com/appvia/terranetes-controller/pull/198
* [CLI] - Infracost Workflow by @gambol99 in http://github.com/appvia/terranetes-controller/pull/199
* [BUGFIX] - Costs on Pull Requests by @gambol99 in http://github.com/appvia/terranetes-controller/pull/197
* [BUGFIX] - Fixing Workflow by @gambol99 in http://github.com/appvia/terranetes-controller/pull/195
* [BUGFIX] - Adding the Workflow ID by @gambol99 in http://github.com/appvia/terranetes-controller/pull/196
* [CLI] - Run on Merge by @gambol99 in http://github.com/appvia/terranetes-controller/pull/194
* [BUGFIX] - Dropping the Readme Check by @gambol99 in http://github.com/appvia/terranetes-controller/pull/193
* [CLI] - Removing Questions by @gambol99 in http://github.com/appvia/terranetes-controller/pull/192
* [DOCS] - Adding Checkov Example by @gambol99 in http://github.com/appvia/terranetes-controller/pull/191
* [BUGFIX] - Fixing Handler Lookup (#190) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/190
* [FEATURE] - Terranetes CLI (#187) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/187
* [DEPENDABOT] Bump sigs.k8s.io/controller-tools from 0.9.1 to 0.9.2 (#189) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/189
* [DEPENDABOT] Bump github.com/stretchr/testify from 1.7.5 to 1.8.0 (#188) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/188
* [DEPENDABOT] Bump sigs.k8s.io/controller-tools from 0.9.0 to 0.9.1 (#186) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/186
* [DEPENDABOT] Bump sigs.k8s.io/controller-runtime from 0.12.1 to 0.12.2 (#185) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/185
* [DEPENDABOT] Bump github.com/stretchr/testify from 1.7.4 to 1.7.5 (#184) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/184
* [DEPENDABOT] Bump github.com/stretchr/testify from 1.7.2 to 1.7.4 (#181) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/181
* [CI] - Helm Chart Linting (#183) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/183
* [DEPENDABOT] Bump github.com/spf13/cobra from 1.4.0 to 1.5.0 (#182) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/182
* [FEATURE] - Exposing Integrations (#180) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/180
* [DEPENDABOT] Bump k8s.io/apiextensions-apiserver from 0.24.1 to 0.24.2 (#176) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/176
* [DEPENDABOT] Bump k8s.io/code-generator from 0.24.1 to 0.24.2 (#177) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/177
* [DEPENDABOT] Bump k8s.io/client-go from 0.24.1 to 0.24.2 (#175) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/175
* [IMAGES] - Image Versions (#174) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/174
* [E2E] - Improvements to E2E (#173) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/173
* [DEPENDABOT] Bump k8s.io/apiextensions-apiserver from 0.24.0 to 0.24.1 (#169) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/169
* [DOCS] - Update README.md (#209) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/209
* [HELM] - Webhooks Port (#206) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/206
* [E2E] - Controller Version (#170) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/170
* [HELM] - CHart Version v0.2.12 (#168) by @gambol99 in http://github.com/appvia/terranetes-controller/pull/168

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.2.5...v0.2.6

## Release v0.2.5

### Bug Fixes
* **Configuration Secrets Removal**: the configuration secret in the controller namespace were not being deleted on deletion of the Configuration, fixed by @gambol99 in https://github.com/appvia/terranetes-controller/pull/165

### What's Changed
* [E2E] Infracost E2E by @gambol99 in https://github.com/appvia/terranetes-controller/pull/161
* [HELM] - Release v0.2.4 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/162
* [E2E] - Deployment Key Secret by @gambol99 in https://github.com/appvia/terranetes-controller/pull/163
* [BUILD] - Bumping the Infracost Version to v0.10.3 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/164
* [BUGFIX] - Ensuring Removal of Configuration Secrets by @gambol99 in https://github.com/appvia/terranetes-controller/pull/165
* [HELM] - Release for v0.2.5 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/167

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.2.4...v0.2.5

## Release v0.2.4

### New Features
* **Provider Configuration**: you can now specify additional configuration to the terraform providers via spec.configuration by @gambol99 in https://github.com/appvia/terranetes-controller/pull/154

### Bug Fixes
* **Configuration Authentication**: fixed a bug when using a source that required authentication by @gambol99 in https://github.com/appvia/terranetes-controller/pull/159
* **SSH Key**: fixed a bug in the source command that was incorrectly processing the ref options by @gambol99 in https://github.com/appvia/terranetes-controller/pull/159
* **Prometheus Metrics**: the helm chart was accidently adding prometheus metrics twice, helm ignored this but flux through issues, fix by @gambol99 in https://github.com/appvia/terranetes-controller/pull/162

### What's Changed
* [HELM] - Chart Version v0.2.4 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/162
* [BUGFIX] - Private Repositories & SSH Key by @gambol99 in https://github.com/appvia/terranetes-controller/pull/156
* [FEATURE] - Provider Configuration  by @gambol99 in https://github.com/appvia/terranetes-controller/pull/154
* [BUGFIX] - Configuration Authentication by @gambol99 in https://github.com/appvia/terranetes-controller/pull/159

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.2.3...v0.2.4

## Release v0.2.3

### New Features
* Expanded the provider list to include the official providers, by @gambol99 in https://github.com/appvia/terranetes-controller/pull/149

### What's Changed
* [HELM] - Release Helm Chart v0.2.2 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/148
* [FEATURE] - Provider List by @gambol99 in https://github.com/appvia/terranetes-controller/pull/149

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.2.2...v0.2.3

## Release v0.2.2

### Bug Fixes
* [BUGFIX] - Checkov Results by @gambol99 in https://github.com/appvia/terranetes-controller/pull/146

### What's Changed
* [TESTS] - Configuration Controller Unit Tests by @gambol99 in https://github.com/appvia/terranetes-controller/pull/143
* Use GHCR by @KashifSaadat in https://github.com/appvia/terranetes-controller/pull/127
* [LOGGING] - Display the version by @gambol99 in https://github.com/appvia/terranetes-controller/pull/144
* [BUGFIX] - Checkov Results by @gambol99 in https://github.com/appvia/terranetes-controller/pull/146
* [DOCS] - Update README.md by @gambol99 in https://github.com/appvia/terranetes-controller/pull/147

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.2.1...v0.2.2

## Release v0.2.1

### Bug Fixes

* Fixing a bug in the parsing of the infracost report which was introduced in v0.1.6 release by https://github.com/appvia/terranetes-controller/pull/96. We were expecting a float64 when actually it's a string

### What's Changed
* [HELM] - Helm Release for v0.2.0 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/137

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.2.0...v0.2.1

## Release v0.2.0

### New Features
* **Provider Scope moved to Cluster** has been moved to teh cluster scope and away from a namespace resource. [#116](https://github.com/appvia/terranetes-controller/pull/116)
* **Drift Detection** provides the ability to automatically detect configurations which have drifted from the expected state [#131](https://github.com/appvia/terranetes-controller/pull/131)
* **Adding Terraform Version to Status** is not exporsed on the terraform state [#131](https://github.com/appvia/terranetes-controller/pull/131)
* **Overall Configuration State** now provides a synchronization overview of the configuration.

### Bug Fixes
* [BUGFIX] - Approval Annotation by @gambol99 https://github.com/appvia/terranetes-controller/pull/133
* [BUGFIX] - Fixing Method Name Typo by @gambol99 https://github.com/appvia/terranetes-controller/pull/121

### Migration Required

Would involve deleting all the current providers, their CRD and them applying them again without the namespace.

```shell
# scope the deployment down
$ kubectl -n terraform-system scale deployment terranetes-controller --replicas=0
# delete the old provider
$ kubectl -n terraform-system get provider <NAME> -o yaml > saved.1
# Deploy the v0.1.7 version, just change the replicas to 0
$ vim <VALUE_FILE> # change the top replicaCount -> replicaCount: 0
# Perform the upgrade - no changes to the configurations are required. The namespace field in the spec.providerRef is simply ignored.
$ helm upgrade -n terraform-system terranetes-controller appvia/terranetes-controller --values <VALUE_FILE>
# Apply the providers again
$ kubectl apply -f saved.1
# Change the replicaCount back to 1 and rerun the helm upgrade
```

### What's Changed
* [FEATURE] - Provider Scope moved to Cluster by @gambol99 https://github.com/appvia/terranetes-controller/pull/116
* [BUILD] - CI Workflow by @gambol99 https://github.com/appvia/terranetes-controller/pull/135
* [E2E] - Drift Detection E2E by @gambol99 https://github.com/appvia/terranetes-controller/pull/134
* [BUGFIX] - Approval Annotation by @gambol99 https://github.com/appvia/terranetes-controller/pull/133
* [FEATURE] - Drift Detection by @gambol99 https://github.com/appvia/terranetes-controller/pull/131
* [GENERAL] - Moving Utility Method into common by @gambol99 https://github.com/appvia/terranetes-controller/pull/130
* [CLEAN] - Template Unit Tests by @gambol99 https://github.com/appvia/terranetes-controller/pull/129
* [LOGGING] - Condition Logging by @gambol99 https://github.com/appvia/terranetes-controller/pull/128
* [DEPENDABOT] - Bump gotest.tools/gotestsum from 1.8.0 to 1.8.1 by @gambol99 https://github.com/appvia/terranetes-controller/pull/126
* [FEATURE] - Adding Terraform Version to Status by @gambol99 https://github.com/appvia/terranetes-controller/pull/124
* [CI] - Linting Timeout
* [BUILD] - Clean Status by @gambol99 https://github.com/appvia/terranetes-controller/pull/122
* [BUGFIX] - Fixing Method Name Typo by @gambol99 https://github.com/appvia/terranetes-controller/pull/121
* [FEATURE] - Adding Labels to Executors
* [FEATURE] - Adding Pod Labels by @gambol99 https://github.com/appvia/terranetes-controller/pull/119
* [DEPENDABOT] - Bump github.com/stretchr/testify from 1.7.1 to 1.7.2 by @gambol99 https://github.com/appvia/terranetes-controller/pull/117
* [DEPENDABOT] - Bump mvdan.cc/sh/v3 from 3.4.3 to 3.5.1 by @gambol99 https://github.com/appvia/terranetes-controller/pull/108
* [DEPENDABOT] - Bump k8s.io/code-generator from 0.24.0 to 0.24.1 by @gambol99 https://github.com/appvia/terranetes-controller/pull/107
* [DEPENDABOT] - Bump github.com/golangci/golangci-lint from 1.45.2 to 1.46.2 [#97]https://github.com/appvia/terranetes-controller/pull/97
* [DEPENDABOT] - Bump github.com/evanphx/json-patch from 4.12.0+incompatible to 5.6.0+incompatible by @gambol99 https://github.com/appvia/terranetes-controller/pull/109
* [DEPENDABOT] - Bump github.com/felixge/httpsnoop from 1.0.2 to 1.0.3 by @gambol99 https://github.com/appvia/terranetes-controller/pull/110
* [DOCS] - Development Docs by @gambol99 https://github.com/appvia/terranetes-controller/pull/136
* [DOCS] - Readme Change by @gambol99 https://github.com/appvia/terranetes-controller/pull/118
* [API] - Description on API Types by @gambol99 https://github.com/appvia/terranetes-controller/pull/114
* [BUILD] - Dependabot Target Branch by @gambol99 https://github.com/appvia/terranetes-controller/pull/113
* [DOCS] - Updating Architecture Image by @gambol99 https://github.com/appvia/terranetes-controller/pull/115
* [BUILD] - Latest Workflow Change by @gambol99 https://github.com/appvia/terranetes-controller/pull/112
* [HELM] - [DEPENDABOT] - Bumping Version of Chart by @gambol99 https://github.com/appvia/terranetes-controller/pull/111

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.1.6...v0.2.0

## Release v0.1.6

### New Features
* **Configuration Cost Metrics** adds the predicted costs of the configuration as exposed prometheus metrics; by @gambol99 in https://github.com/appvia/terranetes-controller/pull/96
* **ValueFrom fields** allows to source sensitive variables from kubernetes secrets rather exposing on the spec; by @gambol99 in https://github.com/appvia/terranetes-controller/pull/103

### Bug Fixes
* Terraform State Decoding by @gambol99 in https://github.com/appvia/terranetes-controller/pull/104
* Exposing the Metrics by @gambol99 in https://github.com/appvia/terranetes-controller/pull/95
* Adding the UID Labels - adding the UIDs on the labels for resources to make pinpointing the source configuration easier. By @gambol99 in https://github.com/appvia/terranetes-controller/pull/100

### What's Changed
* [BUILD] - Adding Dependabot Config by @gambol99 in https://github.com/appvia/terranetes-controller/pull/70
* Bump github.com/onsi/gomega from 1.18.1 to 1.19.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/71
* [BUILD] - Changing Workflow by @gambol99 in https://github.com/appvia/terranetes-controller/pull/83
* [HELM] - Minior Changes by @gambol99 in https://github.com/appvia/terranetes-controller/pull/84
* [BUILD] - Ginkgo Update by @gambol99 in https://github.com/appvia/terranetes-controller/pull/80
* Update features in README linking to docs by @KashifSaadat in https://github.com/appvia/terranetes-controller/pull/81
* [DOCS] - Adding Architecture Image by @gambol99 in https://github.com/appvia/terranetes-controller/pull/85
* Update README.md by @gambol99 in https://github.com/appvia/terranetes-controller/pull/87
* [HELM] - Ignore Existing Releases by @gambol99 in https://github.com/appvia/terranetes-controller/pull/88
* Update README.md by @gambol99 in https://github.com/appvia/terranetes-controller/pull/89
* lookup bash executable instead by @myjaffoo in https://github.com/appvia/terranetes-controller/pull/90
* Bump sigs.k8s.io/controller-tools from 0.8.0 to 0.9.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/92
* Bump gotest.tools/gotestsum from 1.8.0 to 1.8.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/91
* Bump k8s.io/client-go from 0.23.5 to 0.24.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/78
* [DEPS] - Updating the Dependencies by @gambol99 in https://github.com/appvia/terranetes-controller/pull/94
* [BUGFIX] - Terraform State Decoding by @gambol99 in https://github.com/appvia/terranetes-controller/pull/104
* [HELM] - Bumping Application Version by @gambol99 in https://github.com/appvia/terranetes-controller/pull/106
* [RELEASE] - Release v0.1.6 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/86

### New Contributors
* @KashifSaadat made their first contribution in https://github.com/appvia/terranetes-controller/pull/81
* @myjaffoo made their first contribution in https://github.com/appvia/terranetes-controller/pull/90

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.1.5...v0.1.6

## Release v0.1.5

### Build
* Fixed up the chart directory structure in order to properly support the helm tools and deployment [#67](https://github.com/appvia/terranetes-controller/pull/67)

### What's Changed
* [HELM] - Directory Structure by @gambol99 in https://github.com/appvia/terranetes-controller/pull/67
* [HELM] - Bumping Helm Releaser Version by @gambol99 in https://github.com/appvia/terranetes-controller/pull/68

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.1.4...v0.1.5

## Release v0.1.4

### New Features
* Disable Terraform Version Override [#50](https://github.com/appvia/terranetes-controller/pull/50) Currently all configurations have the ability to override the terraform version on their spec (this effectively overrides the terraform image tag). There might be times where you want this disabled though. This PR adds the ability to the platform teams to switch off the feature (which is enabled by default).
* Module Selector (#58): The current module constraint is global, adding a selector here you can target specific resources or namespaces and provides a means for additional permissions. Note as with all selectors here, a empty selector indicates it applies to all.
* External Checks for Checkov [#64](https://github.com/appvia/terranetes-controller/pull/64): Adding the ability to source in external checks to be included in the scan.

### Build
* Workflow Speed [#61](https://github.com/appvia/terranetes-controller/pull/61): sped up the execution time of the images by breaking them up
* Deduplicating the E2E [#63](https://github.com/appvia/terranetes-controller/pull/63): Much of the E2E is the we can dedup the workflow and reuse across all the providers
* Constraint Checks [#65](https://github.com/appvia/terranetes-controller/pull/65): adding Constraint Checks
* Added E2E for Azure
* Adding E2E for Google [#42](https://github.com/appvia/terranetes-controller/issues/42)

### What's Changed
* [E2E] - Adding Azure E2E by @gambol99 in https://github.com/appvia/terranetes-controller/pull/54
* [FEATURE] - Resource Lock by @gambol99 in https://github.com/appvia/terranetes-controller/pull/57
* [RELEASE] v0.1.4 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/59

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.1.3...v0.1.4

## Release v0.1.3

### Bug Fixes
* Fixed an issue with the API type for Provider. An enum was stopping an Azure provider from being added as it had `azure` not `azurerm` defined. https://github.com/appvia/terranetes-controller/pull/51

### What's Changed
* [CI] - Reuse E2E Workflow by @gambol99 in https://github.com/appvia/terranetes-controller/pull/46
* Update README.md by @gambol99 in https://github.com/appvia/terranetes-controller/pull/48
* [DOCS] - Fixing the README links by @gambol99 in https://github.com/appvia/terranetes-controller/pull/49
* [BUGFIX] - Provider Enum on API Types by @gambol99 in https://github.com/appvia/terranetes-controller/pull/51

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.1.2...v0.1.3

## Release v0.1.2

### New Features
- **RBAC Support**:  Added support for RBAC on the Providers. This allows platform teams to specify a collection of selectors which are used to match namespace and resource labels to determine if the Configuration is permitted to use it. Click [here](https://terranetes-controller.appvia.io/admin/providers#configure-rbac-for-providers) for full details https://github.com/appvia/terranetes-controller/pull/29
- **Connection Secret Keys**: added the ability for Configuration's to filter which keys from the terraform ouput they want to see in the connection secret. Click [here](https://terranetes-controller.appvia.io/admin/providers) for details. https://github.com/appvia/terranetes-controller/pull/34
- **Kubernetes Events**: crucial events were being recorded in the status conditions only. This change raises those same conditions as Kubernetes events themselves which can be used to trigger off notifications. https://github.com/appvia/terranetes-controller/pull/31

### Bug Fixes
- Fixed an issue where the service account from the provider was not correctly being set on the terraform https://github.com/appvia/terranetes-controller/pull/35

### Documentation
- Added a additional docs on the types types https://github.com/appvia/terranetes-controller/pull/26
- Updated the repository readme https://github.com/appvia/terranetes-controller/pull/25

### What's Changed

* [DOCS] Updating the README by @gambol99 in https://github.com/appvia/terranetes-controller/pull/25
* [DOCS] Updating the API Documentation by @gambol99 in https://github.com/appvia/terranetes-controller/pull/26
* [CI] - E2E Workflow by @gambol99 in https://github.com/appvia/terranetes-controller/pull/33
* [BUGFIX] - Provider Service Accounts by @gambol99 in https://github.com/appvia/terranetes-controller/pull/35
* [DOCS] - Adding License File by @gambol99 in https://github.com/appvia/terranetes-controller/pull/38
* [CI] - Dependency Review by @gambol99 in https://github.com/appvia/terranetes-controller/pull/37
* [FEATURE] - Connection Secret Keys by @gambol99 in https://github.com/appvia/terranetes-controller/pull/34
* [FEATURE] - Kubernetes Events by @gambol99 in https://github.com/appvia/terranetes-controller/pull/31
* [FEATURE] - Provider RBAC by @gambol99 in https://github.com/appvia/terranetes-controller/pull/29
* [CI] - Dependency Check by @gambol99 in https://github.com/appvia/terranetes-controller/pull/44
* [RELEASE] - Version v0.1.2 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/45

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.1.1...v0.1.2

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

* [CI] - Fixing Github Workflow (Release) by @gambol99 in https://github.com/appvia/terranetes-controller/pull/18
* [BUGFIX] - Decreasing Backoff Limit by @gambol99 in https://github.com/appvia/terranetes-controller/pull/19
* [DOCS] - Development Readme by @gambol99 in https://github.com/appvia/terranetes-controller/pull/21
* [FIX] - Supported Providers by @gambol99 in https://github.com/appvia/terranetes-controller/pull/22
* [FEATURE] - Adding Checkov Security Policy by @gambol99 in https://github.com/appvia/terranetes-controller/pull/20
* Release v0.1.1 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/23
* [CI] - Fixing the Release Step by @gambol99 in https://github.com/appvia/terranetes-controller/pull/24

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.1.0...v0.1.1

## Release v0.1.0

### New Features
* Changed to use multiple containers within a job rather then baking a executor with all the dependencies. This opens up the ability to change the versions, images and so forth.
* Added the ability to specify the terraform version in the configuration
* Added the ability to override the job template completely for customization

### Bug Fixes
* Fixes a helm chart which was recreating the ca secret

### What's Changed
* [BUGFIX] - Autogenerate Certificate by @gambol99 in https://github.com/appvia/terranetes-controller/pull/12
* [DOCS] - Executor Docs by @gambol99 in https://github.com/appvia/terranetes-controller/pull/13
* Release v0.1.0 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/10
* [CI] - Kind Installation by @gambol99 in https://github.com/appvia/terranetes-controller/pull/16
* [DOCS] - Adding Administrative Docs by @gambol99 in https://github.com/appvia/terranetes-controller/pull/17

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.0.4...v0.1.0

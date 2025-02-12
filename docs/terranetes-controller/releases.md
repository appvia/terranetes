---
sidebar_position: 2
---

# Releases

## Release v0.4.0

### Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.4.0/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.4.0/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.4.0/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.4.0/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.4.0/tnctl-windows-amd64.exe

### What's Changed

This release marks the introduction of the CloudResource concept, which significantly refines the consumer interface. Previously, Configuration CRDs were directly mapped to Terraform modules, presenting a wide range of options to the consumer. The integration of CloudResources and Revisions simplifies the entry point for consumers, alleviating the cognitive burden on developers and enabling the platform team to implement best practices, default settings, and organizational policies prior to consumption.

For more details see https://terranetes.appvia.io/terranetes-controller/admin/cloudresource/

### Features
* [FEATURE] - Added the new user model of CloudResources & Revisions, scoping the interface to the resource via a strict version controlled blueprint by @gambol99 in https://github.com/appvia/terranetes-controller/pull/824
* [FEATURE] - Added Revision Command to provide a entrypoint for provisioning revisions by the platform team by @gambol99 in https://github.com/appvia/terranetes-controller/pull/847
* [FEATURE] - Added a new CLI command to verify a Revision is runnable by @gambol99 in https://github.com/appvia/terranetes-controller/pull/866
* [FEATURE] - Added a Create CloudResource Command by @gambol99 in https://github.com/appvia/terranetes-controller/pull/899
* [FEATURE] - Adding Convenience Aliases for Delete & Apply by @gambol99 in https://github.com/appvia/terranetes-controller/pull/868
* [FEATURE] - CLI Get Command by @gambol99 in https://github.com/appvia/terranetes-controller/pull/854
* [FEATURE] - Cloud Resources Reconciles on Plan Changes by @gambol99 in https://github.com/appvia/terranetes-controller/pull/856
* [FEATURE] - Additional EKS Preload Values by @gambol99 in https://github.com/appvia/terranetes-controller/pull/911
* [FEATURE] - Cloud Resource Update Available by @gambol99 in https://github.com/appvia/terranetes-controller/pull/852
* [CLI] - Create Workflow Command by @gambol99 in https://github.com/appvia/terranetes-controller/pull/853
* [FEATURE] - Added to the Convert Command the ability to render into a Revision by @gambol99 in https://github.com/appvia/terranetes-controller/pull/855
* [FEATURE] - Revisions in Use Metric by @gambol99 in https://github.com/appvia/terranetes-controller/pull/867
* [FEATURE] - Update Proection for Revisions in Use by @gambol99 in https://github.com/appvia/terranetes-controller/pull/851
* [IMAGES] - Terraform Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/992
* [IMAGES] - Checkov Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/993
* [IMAGES] - Checkov Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/999
controller/pull/1011
* [IMAGES] - Checkov Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/1009
* [IMAGES] - Terraform Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/1010
* [IMAGES] - Infracost Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/1027
* [IMAGES] - Checkov Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/1026
* [IMAGES] - Checkov Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/1035
* [IMAGES] - Checkov Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/1042
* [WF-3359] UpdateReadme by @celesteg1 in https://github.com/appvia/terranetes-controller/pull/979
* [HELM] - Helm Release v0.4.0 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/1050

### Documentation
* [BUILD] - Code Owners File by @gambol99 in https://github.com/appvia/terranetes-controller/pull/1031
* [DOCS] - Adding Examples by @gambol99 in https://github.com/appvia/terranetes-controller/pull/1045
* [DOCS] - Updating Examples by @gambol99 in https://github.com/appvia/terranetes-controller/pull/1051

### BugFixes
* [E2E] - Fixing Diagnostics by @gambol99 in https://github.com/appvia/terranetes-controller/pull/1047
* [E2E] - Pod Name Retry by @gambol99 in https://github.com/appvia/terranetes-controller/pull/1048
* [E2E] - Fixing Typo by @gambol99 in https://github.com/appvia/terranetes-controller/pull/1049
* [CLI] - Create Cloud Resource CLI by @gambol99 in https://github.com/appvia/terranetes-controller/pull/1052

### Dependencies
* [DEPS] - Updating Controller Runtime v0.16.0 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/985
* Bump k8s.io/client-go from 0.28.0 to 0.28.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/990
* Bump k8s.io/apiextensions-apiserver from 0.28.0 to 0.28.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/989
* Bump github.com/aws/aws-sdk-go from 1.44.331 to 1.44.332 by @dependabot in https://github.com/appvia/terranetes-controller/pull/987
* Bump k8s.io/cli-runtime from 0.28.0 to 0.28.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/988
* Bump github.com/aws/aws-sdk-go from 1.44.332 to 1.44.334 by @dependabot in https://github.com/appvia/terranetes-controller/pull/994
* Bump github.com/aws/aws-sdk-go from 1.44.334 to 1.45.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/995
* Bump sigs.k8s.io/controller-runtime from 0.16.0 to 0.16.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/996
* Bump github.com/aws/aws-sdk-go from 1.45.0 to 1.45.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/997
* Bump golang.org/x/oauth2 from 0.11.0 to 0.12.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1000
* Bump github.com/aws/aws-sdk-go from 1.45.1 to 1.45.5 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1004
* Bump golang.org/x/tools from 0.12.0 to 0.13.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1001
* Bump github.com/aws/aws-sdk-go from 1.45.5 to 1.45.6 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1005
* Bump actions/checkout from 3 to 4 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1006
* Bump docker/build-push-action from 4.1.1 to 4.2.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1007
* Bump github.com/evanphx/json-patch from 5.6.0+incompatible to 5.7.0+incompatible by @dependabot in https://github.com/appvia/terranetes-
* Bump k8s.io/code-generator from 0.28.1 to 0.28.2 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1016
* Bump github.com/aws/aws-sdk-go from 1.45.6 to 1.45.9 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1017
* Bump k8s.io/cli-runtime from 0.28.1 to 0.28.2 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1015
* Bump k8s.io/apiextensions-apiserver from 0.28.1 to 0.28.2 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1019
* Bump github.com/aws/aws-sdk-go from 1.45.9 to 1.45.10 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1018
* Bump docker/login-action from 2 to 3 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1024
* Bump docker/setup-buildx-action from 2 to 3 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1023
* Bump docker/build-push-action from 4.2.1 to 5.0.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1022
* Bump docker/metadata-action from 4.6.0 to 5.0.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1021
* Bump github.com/aws/aws-sdk-go from 1.45.10 to 1.45.11 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1020
* Bump github.com/onsi/ginkgo/v2 from 2.12.0 to 2.12.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1029
* Bump github.com/aws/aws-sdk-go from 1.45.11 to 1.45.13 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1028
* Bump github.com/aws/aws-sdk-go from 1.45.13 to 1.45.14 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1030
* Bump github.com/tidwall/gjson from 1.16.0 to 1.17.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1032
* Bump github.com/aws/aws-sdk-go from 1.45.14 to 1.45.15 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1033
* Bump github.com/aws/aws-sdk-go from 1.45.15 to 1.45.16 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1034
* Bump github.com/aws/aws-sdk-go from 1.45.16 to 1.45.17 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1036
* Bump github.com/aws/aws-sdk-go from 1.45.17 to 1.45.20 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1041
* Bump github.com/onsi/gomega from 1.27.10 to 1.28.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1040
* Bump github.com/prometheus/client_golang from 1.16.0 to 1.17.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1038
* Bump github.com/aws/aws-sdk-go from 1.45.20 to 1.45.22 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1044
* Bump github.com/aws/aws-sdk-go from 1.45.22 to 1.45.23 by @dependabot in https://github.com/appvia/terranetes-controller/pull/1046


## New Contributors
* @celesteg1 made their first contribution in https://github.com/appvia/terranetes-controller/pull/979

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.3.31...v0.4.0

## Release v0.3.23

### Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.3.23/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.23/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.23/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.23/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.23/tnctl-windows-amd64.exe

### ❇️ FEATURES
* [FEATURE] - Remove Provider Constraint by @gambol99 in https://github.com/appvia/terranetes-controller/pull/722
* [FEATURE] - Allowing for Remapping of ValueFrom Inputs by @gambol99 in https://github.com/appvia/terranetes-controller/pull/723
* [FEATURE] - Renaming ValueFrom Secret Name by @gambol99 in https://github.com/appvia/terranetes-controller/pull/724

### What's Changed
* [E2E] - Dummy Terraform Module by @gambol99 in https://github.com/appvia/terranetes-controller/pull/704
* [E2E] - Dummy Terraform Module by @gambol99 in https://github.com/appvia/terranetes-controller/pull/717
* [E2E] - Switching Dummy Module Requirements by @gambol99 in https://github.com/appvia/terranetes-controller/pull/719
* [E2E] - Custom Backend Testing by @gambol99 in https://github.com/appvia/terranetes-controller/pull/720
* Bump golang.org/x/oauth2 from 0.7.0 to 0.8.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/721
* [FEATURE] - Remove Provider Constraint by @gambol99 in https://github.com/appvia/terranetes-controller/pull/722
* [FEATURE] - Allowing for Remapping of ValueFrom Inputs by @gambol99 in https://github.com/appvia/terranetes-controller/pull/723
* [FEATURE] - Renaming ValueFrom Secret Name by @gambol99 in https://github.com/appvia/terranetes-controller/pull/724
* [HELM] - Release for v0.3.23 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/725
* [BUILD] - Fixing Image Building in E2E by @gambol99 in https://github.com/appvia/terranetes-controller/pull/726
* [E2E] - Bumping Terraform Module Version (Disabled ACLs) by @gambol99 in https://github.com/appvia/terranetes-controller/pull/727

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.3.22...v0.3.23

## Release v0.3.22

### Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.3.22/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.22/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.22/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.22/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.22/tnctl-windows-amd64.exe

### What's Changed
* [HELM] - Release v0.3.22 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/700

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.3.21...v0.3.22

## Release v0.3.21

### Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.3.21/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.21/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.21/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.21/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.21/tnctl-windows-amd64.exe

### ❇️ FEATURES
* [FEATURE] - Deletion of Namespace Protection Webhook by @gambol99 in https://github.com/appvia/terranetes-controller/pull/697

### 🐛 BUGS
* [BUGFIX] - Azure Identity Binding by @gambol99 in https://github.com/appvia/terranetes-controller/pull/696

### What's Changed

* [BUGFIX] - Azure Identity Binding by @gambol99 in https://github.com/appvia/terranetes-controller/pull/696
* [IMAGES] - Checkov Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/694
* [IMAGES] - Terraform Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/693
* [IMAGES] - Infracost Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/692
* [FEATURE] - Delection of Namespace Protection Webhook by @gambol99 in https://github.com/appvia/terranetes-controller/pull/697
* [HELM] - Release v0.3.21 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/698

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.3.20...v0.3.21

## Release v0.3.20

### Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.3.20/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.20/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.20/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.20/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.20/tnctl-windows-amd64.exe

### ❇️ FEATURES
* [FEATURE] - Namespace Protection by @gambol99 in https://github.com/appvia/terranetes-controller/pull/688
* [FEATURE] - Check Namespace Status by @gambol99 in https://github.com/appvia/terranetes-controller/pull/689

### 🐛 BUGS
* [BUGFIX] - Terranetes Namespace Error Message by @gambol99 in https://github.com/appvia/terranetes-controller/pull/691

### What's Changed
* Bump k8s.io/apimachinery from 0.27.0 to 0.27.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/683
* Bump k8s.io/code-generator from 0.27.0 to 0.27.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/684
* [FEATURE] - Namespace Protection by @gambol99 in https://github.com/appvia/terranetes-controller/pull/688
* [FEATURE] - Check Namespace Status by @gambol99 in https://github.com/appvia/terranetes-controller/pull/689
* [HELM] - Release v0.3.20 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/690
* [BUGFIX] - Terranetes Namespace Error Message by @gambol99 in https://github.com/appvia/terranetes-controller/pull/691

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.3.19...v0.3.20

## Release v0.3.19

### Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.3.19/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.19/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.19/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.19/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.19/tnctl-windows-amd64.exe

### ❇️ FEATURES
* [FEATURE] - Default Providers by @gambol99 in https://github.com/appvia/terranetes-controller/pull/676

### What's Changed

* Bump k8s.io/apimachinery from 0.26.3 to 0.27.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/678
* Bump github.com/prometheus/client_golang from 1.14.0 to 1.15.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/677
* [FEATURE] - Default Providers by @gambol99 in https://github.com/appvia/terranetes-controller/pull/676
* [BUILD] - Golang Version 1.19-1.20 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/679
* [HELM] - Release v0.3.19 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/680

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.3.18...v0.3.19

## Release v0.3.18

### Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.3.18/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.18/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.18/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.18/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.18/tnctl-windows-amd64.exe

### What's Changed
* [HELM] - Release v0.3.17 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/653
* [HELM] - Release v0.3.18 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/675

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.3.17...v0.3.18

## Release v0.3.17

### Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.3.17/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.17/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.17/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.17/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.17/tnctl-windows-amd64.exe

### What's Changed#
* [HELM] - Release for v0.3.16 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/611
* Bump golang.org/x/net from 0.6.0 to 0.7.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/631

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.3.16...v0.3.17

## Release v0.3.16

### Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.3.16/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.16/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.16/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.16/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.16/tnctl-windows-amd64.exe

### ❇️ FEATURES
* Updated the infracosts ci image to ci-0.10.17 in https://github.com/appvia/terranetes-controller/pull/607

### 🐛 BUGS
* Fixes a bug from v0.3.15 where the CRD definition was not updated in https://github.com/appvia/terranetes-controller/pull/608

### What's Changed
* [HELM] - Release v0.3.15 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/602
* Bump golang.org/x/oauth2 from 0.4.0 to 0.5.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/603
* Bump golang.org/x/tools from 0.5.0 to 0.6.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/604
* Bump github.com/onsi/ginkgo/v2 from 2.8.0 to 2.8.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/606
* Bump github.com/hashicorp/go-getter from 1.6.2 to 1.7.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/605
* [IMAGES] - Infracost Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/607
* [BUILD] - Updating the Boilerplate by @gambol99 in https://github.com/appvia/terranetes-controller/pull/608

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.3.15...v0.3.16

## Release v0.3.15

### Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.3.15/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.15/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.15/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.15/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.15/tnctl-windows-amd64.exe

### ❇️ Features
* [FEATURE] - Adding Default Secrets into Policy by @gambol99 in https://github.com/appvia/terranetes-controller/pull/600

### What's Changed
* [HELM] - Release v0.3.14 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/591
* [BUILD] - Makefile Fix Typo by @gambol99 in https://github.com/appvia/terranetes-controller/pull/592
* Bump github.com/golangci/golangci-lint from 1.50.1 to 1.51.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/593
* Bump sigs.k8s.io/controller-tools from 0.11.2 to 0.11.3 by @dependabot in https://github.com/appvia/terranetes-controller/pull/595
* Bump github.com/golangci/golangci-lint from 1.51.0 to 1.51.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/596
* Bump docker/build-push-action from 3.3.0 to 4.0.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/594
* Bump sigs.k8s.io/controller-runtime from 0.14.2 to 0.14.4 by @dependabot in https://github.com/appvia/terranetes-controller/pull/597
* [IMAGES] - Checkov Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/599
* [FEATURE] - Adding Default Secrets into Policy by @gambol99 in https://github.com/appvia/terranetes-controller/pull/600
* [BUILD] - Changing to v3 Save Github Actions by @gambol99 in https://github.com/appvia/terranetes-controller/pull/601

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.3.14...v0.3.15

## Release v0.3.14

### Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.3.14/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.14/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.14/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.14/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.14/tnctl-windows-amd64.exe

### 🐛 Bug Fixes
* Added job-template flag by @richardbeumer in https://github.com/appvia/terranetes-controller/pull/503
* Remove the --name flag from tnctl logs as it is a required arg by @KashifSaadat in https://github.com/appvia/terranetes-controller/pull/520
* Fixing Ready Condition Transition by @gambol99 in https://github.com/appvia/terranetes-controller/pull/535
* Enable Webhooks Toggle by @gambol99 in https://github.com/appvia/terranetes-controller/pull/562
* Reconcilation Annontation Predicate moved into Ensure Func by @gambol99 in https://github.com/appvia/terranetes-controller/pull/563
* Disable Infracosts Update Check by @gambol99 in https://github.com/appvia/terranetes-controller/pull/565

### ❇️ Features
* [IMAGES] - Checkov Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/499
* [IMAGES] - Terraform Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/498
* Kubernetes Backend Secret Labels by @gambol99 in https://github.com/appvia/terranetes-controller/pull/533
* Kubernetes State Command by @gambol99 in https://github.com/appvia/terranetes-controller/pull/534
* Retry Logic for Pod Logs by @gambol99 in https://github.com/appvia/terranetes-controller/pull/542
* Lookup Providers in cluster for CLI Search by @gambol99 in https://github.com/appvia/terranetes-controller/pull/560
* Retry CLI by @gambol99 in https://github.com/appvia/terranetes-controller/pull/568
* Provider Secret Validation by @gambol99 in https://github.com/appvia/terranetes-controller/pull/575
* Terraform Image Update to v1.3.7 by @github-actions in https://github.com/appvia/terranetes-controller/pull/546
* Changing to CI Infracost Image by @gambol99 in https://github.com/appvia/terranetes-controller/pull/577
* Checkov Image Update to v2.2.299 by @github-actions in https://github.com/appvia/terranetes-controller/pull/581

### What's Changed
* Helm Release v0.3.14 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/584

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.3.13...v0.3.14


## Release v0.3.13

### Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.3.13/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.13/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.13/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.13/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.13/tnctl-windows-amd64.exe

### 🐛 Bug Fixes
* [BUGFIX] - Checkov Policies Zero Matches by @gambol99 in https://github.com/appvia/terranetes-controller/pull/496
* [BUGFIX] - Wrap log watcher Pod with error handling and retry logic by @KashifSaadat in https://github.com/appvia/terranetes-controller/pull/493

### ❇️ Features
* [IMAGES] - Checkov Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/499
* [IMAGES] - Terraform Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/498

### What's Changed
* Bump github.com/onsi/ginkgo/v2 from 2.5.0 to 2.5.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/495
* [BUGFIX] - Wrap log watcher Pod with error handling and retry logic by @KashifSaadat in https://github.com/appvia/terranetes-controller/pull/493
* Bump github.com/tidwall/gjson from 1.14.3 to 1.14.4 by @dependabot in https://github.com/appvia/terranetes-controller/pull/497
* [BUGFIX] - Checkov Policies Zero Matches by @gambol99 in https://github.com/appvia/terranetes-controller/pull/496
* [IMAGES] - Checkov Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/499
* [IMAGES] - Terraform Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/498
* [HELM] - Chart Changes for Release v0.3.13 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/500

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.3.12...v0.3.13


## Release v0.3.12

### Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.3.12/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.12/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.12/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.12/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.12/tnctl-windows-amd64.exe

### Bug Fixes

* Fixed an issue in the CLI not showing Checkov policies when infracost disabled by @gambol99 in https://github.com/appvia/terranetes-controller/pull/488

### What's Changed

* [HELM] - Chart Release Fix by @gambol99 in https://github.com/appvia/terranetes-controller/pull/471
* [DOCS] - Security Policy by @gambol99 in https://github.com/appvia/terranetes-controller/pull/473
* Bump azure/setup-kubectl from 2.0 to 3.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/474
* Bump docker/metadata-action from 4.0.1 to 4.1.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/476
* Bump golang.org/x/tools from 0.2.0 to 0.3.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/480
* Bump helm/chart-releaser-action from 1.4.0 to 1.4.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/478
* Bump docker/build-push-action from 3.0.0 to 3.2.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/475
* Bump helm/chart-testing-action from 2.2.1 to 2.3.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/477
* Bump github.com/onsi/gomega from 1.24.0 to 1.24.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/479
* Bump k8s.io/apiextensions-apiserver from 0.25.3 to 0.25.4 by @dependabot in https://github.com/appvia/terranetes-controller/pull/481
* Bump actions/download-artifact from 2 to 3 by @dependabot in https://github.com/appvia/terranetes-controller/pull/485
* Bump actions/dependency-review-action from 1 to 3 by @dependabot in https://github.com/appvia/terranetes-controller/pull/486
* Bump k8s.io/cli-runtime from 0.25.3 to 0.25.4 by @dependabot in https://github.com/appvia/terranetes-controller/pull/487
* [CLI] - Checkov Policies on Describe by @gambol99 in https://github.com/appvia/terranetes-controller/pull/488
* [HELM] - Chart Updates for v0.3.12 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/489
* [BUILD] - Pegging the Artifact Upload to @v2.2.4 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/491
* [BUILD] - Action Throw Upload Errors by @gambol99 in https://github.com/appvia/terranetes-controller/pull/492

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.3.11...v0.3.12

## Release v0.3.11

### Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.3.11/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.11/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.11/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.11/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.11/tnctl-windows-amd64.exe

### What's Changed

* [DOCS] - Removing Tag Badge by @gambol99 in https://github.com/appvia/terranetes-controller/pull/431
* [BUILD] - Golang 1.19 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/432
* [BUILD] - Removing Deprecated Linters by @gambol99 in https://github.com/appvia/terranetes-controller/pull/433
* [DOCS] - Fixing CLI Reference Docs by @gambol99 in https://github.com/appvia/terranetes-controller/pull/434
* [IMAGES] - Infracost Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/435
* [IMAGES] - Checkov Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/437
* [IMAGES] - Terraform Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/436
* [BUILD] - Github Action Update (Upload Artifacts) by @gambol99 in https://github.com/appvia/terranetes-controller/pull/438
* [BUILD] - Github Actions Upgrade by @gambol99 in https://github.com/appvia/terranetes-controller/pull/439
* Bump github.com/spf13/cobra from 1.5.0 to 1.6.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/440
* Bump github.com/onsi/gomega from 1.21.1 to 1.22.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/441
* Bump github.com/onsi/ginkgo/v2 from 2.3.0 to 2.3.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/443
* Bump k8s.io/code-generator from 0.25.2 to 0.25.3 by @dependabot in https://github.com/appvia/terranetes-controller/pull/447
* Bump k8s.io/apimachinery from 0.25.2 to 0.25.3 by @dependabot in https://github.com/appvia/terranetes-controller/pull/445
* Bump k8s.io/client-go from 0.25.2 to 0.25.3 by @dependabot in https://github.com/appvia/terranetes-controller/pull/444
* Bump k8s.io/api from 0.25.2 to 0.25.3 by @dependabot in https://github.com/appvia/terranetes-controller/pull/449
* Bump k8s.io/apiextensions-apiserver from 0.25.2 to 0.25.3 by @dependabot in https://github.com/appvia/terranetes-controller/pull/446
* Bump k8s.io/cli-runtime from 0.25.2 to 0.25.3 by @dependabot in https://github.com/appvia/terranetes-controller/pull/448
* [IMAGES] - Checkov Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/450
* Bump golang.org/x/tools from 0.1.12 to 0.2.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/451
* Bump github.com/onsi/ginkgo/v2 from 2.3.1 to 2.4.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/453
* Bump github.com/golangci/golangci-lint from 1.50.0 to 1.50.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/454
* Bump github.com/stretchr/testify from 1.8.0 to 1.8.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/452
* Bump github.com/spf13/cobra from 1.6.0 to 1.6.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/455
* [IMAGES] - Checkov Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/456
* Bump github.com/onsi/gomega from 1.22.1 to 1.23.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/457
* [IMAGES] - Infracost Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/458
* [IMAGES] - Terraform Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/459
* [TESTS] - Fixing Unit Test by @gambol99 in https://github.com/appvia/terranetes-controller/pull/460
* [CI] - Updating Cosign Action by @gambol99 in https://github.com/appvia/terranetes-controller/pull/461
* [IMAGES] - Checkov Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/462
* Bump github.com/prometheus/client_golang from 1.13.0 to 1.13.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/463
* Bump github.com/onsi/gomega from 1.23.0 to 1.24.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/464
* Bump github.com/onsi/ginkgo/v2 from 2.4.0 to 2.5.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/465
* Bump sigs.k8s.io/controller-runtime from 0.13.0 to 0.13.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/466
* [IMAGES] - Checkov Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/468
* [IMAGES] - Terraform Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/467
* Bump github.com/prometheus/client_golang from 1.13.1 to 1.14.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/469
* [HELM] - Chart for v0.3.11 Release by @gambol99 in https://github.com/appvia/terranetes-controller/pull/470

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.3.10...v0.3.11

## Release v0.3.10

### Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.3.10/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.10/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.10/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.10/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.10/tnctl-windows-amd64.exe

### Bug Fixes
* Fixed an issue where the logs where not being shown when an error was encountered in the terranetes init by @gambol99 in https://github.com/appvia/terranetes-controller/pull/396
* Fixed an issue in tnctl which wasn't find the logs correctly in the tnctl log by @gambol99 in https://github.com/appvia/terranetes-controller/pull/401

### What's Changed
* [HELM] - Release for v0.3.9 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/390
* [DOCS] - Updating the Readme by @gambol99 in https://github.com/appvia/terranetes-controller/pull/391
* [E2E] - Release Dependency Workflow by @gambol99 in https://github.com/appvia/terranetes-controller/pull/392
* [BUGFIX] - Additional Secrets by @gambol99 in https://github.com/appvia/terranetes-controller/pull/395
* [BUILD] - Executor Service Account to terranetes-executor by @gambol99 in https://github.com/appvia/terranetes-controller/pull/394
* [BUGFIX] - Init Errors Showing in Logs by @gambol99 in https://github.com/appvia/terranetes-controller/pull/396
* [BUILD] - Fixing Typo on Makefile Comment by @gambol99 in https://github.com/appvia/terranetes-controller/pull/399
* Bump sigs.k8s.io/controller-runtime from 0.12.3 to 0.13.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/393
* [CLI] - Logs Command Fixes by @gambol99 in https://github.com/appvia/terranetes-controller/pull/401
* [E2E] - Fixing Namespace Creation in E2E by @gambol99 in https://github.com/appvia/terranetes-controller/pull/402
* [E2E] - Cleanup on E2E by @gambol99 in https://github.com/appvia/terranetes-controller/pull/403
* [IMAGES] - Infracost Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/404
* [BUILD] - Updating dependencies by @KashifSaadat in https://github.com/appvia/terranetes-controller/pull/400
* [IMAGES] - Checkov Image Update by @github-actions in https://github.com/appvia/terranetes-controller/pull/405
* Bump github.com/AlecAivazis/survey/v2 from 2.3.5 to 2.3.6 by @dependabot in https://github.com/appvia/terranetes-controller/pull/406
* Bump k8s.io/apimachinery from 0.25.0 to 0.25.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/409
* Bump k8s.io/code-generator from 0.25.0 to 0.25.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/411
* Bump k8s.io/api from 0.25.0 to 0.25.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/410
* Bump k8s.io/cli-runtime from 0.25.0 to 0.25.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/408
* Bump github.com/onsi/ginkgo/v2 from 2.1.6 to 2.2.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/413
* Bump k8s.io/apiextensions-apiserver from 0.25.0 to 0.25.1 by @dependabot in https://github.com/appvia/terranetes-controller/pull/414
* Bump k8s.io/apimachinery from 0.25.1 to 0.25.2 by @dependabot in https://github.com/appvia/terranetes-controller/pull/416
* Bump k8s.io/code-generator from 0.25.1 to 0.25.2 by @dependabot in https://github.com/appvia/terranetes-controller/pull/418
* Bump k8s.io/apiextensions-apiserver from 0.25.1 to 0.25.2 by @dependabot in https://github.com/appvia/terranetes-controller/pull/415
* Bump k8s.io/cli-runtime from 0.25.1 to 0.25.2 by @dependabot in https://github.com/appvia/terranetes-controller/pull/419
* Bump github.com/go-swagger/go-swagger from 0.30.2 to 0.30.3 by @dependabot in https://github.com/appvia/terranetes-controller/pull/421
* Bump sigs.k8s.io/controller-tools from 0.9.2 to 0.10.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/417
* Bump github.com/tcnksm/ghr from 0.15.0 to 0.16.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/422
* Bump github.com/golangci/golangci-lint from 1.49.0 to 1.50.0 by @dependabot in https://github.com/appvia/terranetes-controller/pull/424
* [BUILD] - Docker Ignore File by @gambol99 in https://github.com/appvia/terranetes-controller/pull/423
* [HELM] - Ensure Legacy ServiceAccount by @gambol99 in https://github.com/appvia/terranetes-controller/pull/425
* [FEATURE] - Deletion Event by @gambol99 in https://github.com/appvia/terranetes-controller/pull/427
* [HELM] - Release v0.3.10 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/428

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.3.9...v0.3.10

## Release v0.3.9

### Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.3.9/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.9/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.9/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.9/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.9/tnctl-windows-amd64.exe

### What's Changed

* [DOCS] - Fix Badge Format by @KashifSaadat in https://github.com/appvia/terranetes-controller/pull/367
* [HELM] - Chart Release v0.3.8 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/366
* [CI] - Fixing Versions Workflow by @gambol99 in https://github.com/appvia/terranetes-controller/pull/369
* [CI] - Bridgecrew Image Versions by @gambol99 in https://github.com/appvia/terranetes-controller/pull/373
* [E2E] - Adding Google Project ID by @gambol99 in https://github.com/appvia/terranetes-controller/pull/386

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.3.8...v0.3.9

## Release v0.3.8

### Terranetes CLI (tnctl)

* https://github.com/appvia/terranetes-controller/releases/download/v0.3.8/tnctl-darwin-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.8/tnctl-darwin-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.8/tnctl-linux-amd64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.8/tnctl-linux-arm64
* https://github.com/appvia/terranetes-controller/releases/download/v0.3.8/tnctl-windows-amd64.exe

### Bug Fixes
* Fixed an issue in the drift controller which was not correctly calculating the total running by @gambol99 in https://github.com/appvia/terranetes-controller/pull/362

### What's Changed
* [BUGFIX] - Drift Threshold by @gambol99 in https://github.com/appvia/terranetes-controller/pull/362
* [HELM] - Release Chart for v0.3.7 by @gambol99 in https://github.com/appvia/terranetes-controller/pull/355
* [CI] - Versions Workflow Bugfix by @gambol99 in https://github.com/appvia/terranetes-controller/pull/356
* [CI] - Versions Workflow by @gambol99 in https://github.com/appvia/terranetes-controller/pull/357
* [DOCS] - Split badges in README onto new lines by @KashifSaadat in https://github.com/appvia/terranetes-controller/pull/365

**Full Changelog**: https://github.com/appvia/terranetes-controller/compare/v0.3.7...v0.3.8

## Release v0.3.7

### Terranetes CLI (tnctl)

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

### Terranetes CLI (tnctl)

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

### Terranetes CLI (tnctl)

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

### Terranetes CLI (tnctl)

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

### Terranetes CLI (tnctl)

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

### Terranetes CLI (tnctl)

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

### Terranetes CLI (tnctl)

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

### Terranetes CLI (tnctl)

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

### Terranetes CLI (tnctl)

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

### Terranetes CLI (tnctl)

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

### Terranetes CLI (tnctl)

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

### Terranetes CLI (tnctl)

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

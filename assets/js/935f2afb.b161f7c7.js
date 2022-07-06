"use strict";(self.webpackChunkterraform_controller_docs=self.webpackChunkterraform_controller_docs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"What is Terranetes?","href":"/terraform-controller/","docId":"index"},{"type":"link","label":"Releases","href":"/terraform-controller/releases","docId":"releases"},{"type":"link","label":"Architecture","href":"/terraform-controller/architecture","docId":"architecture"},{"type":"category","label":"Workflows","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"What are workflows","href":"/terraform-controller/workflows/intro","docId":"workflows/intro"},{"type":"link","label":"Platform Team","href":"/terraform-controller/workflows/platform","docId":"workflows/platform"},{"type":"link","label":"Developer","href":"/terraform-controller/workflows/developer","docId":"workflows/developer"}],"href":"/terraform-controller/category/workflows"},{"type":"category","label":"Administration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Configure Providers","href":"/terraform-controller/admin/providers","className":"green","docId":"admin/providers"},{"type":"link","label":"Define Guardrails","href":"/terraform-controller/admin/policy","className":"green","docId":"admin/policy"},{"type":"link","label":"Expose Costs","href":"/terraform-controller/admin/costs","className":"green","docId":"admin/costs"},{"type":"link","label":"Drift Detection","href":"/terraform-controller/admin/drift","docId":"admin/drift"},{"type":"category","label":"Observability","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Metrics","href":"/terraform-controller/admin/observability/metrics","docId":"admin/observability/metrics"}],"href":"/terraform-controller/category/observability"},{"type":"link","label":"Customize Job Template","href":"/terraform-controller/admin/template","docId":"admin/template"},{"type":"link","label":"Additional Secrets","href":"/terraform-controller/admin/secrets","docId":"admin/secrets"}],"href":"/terraform-controller/category/administration"},{"type":"category","label":"Developer Docs","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Provisioning a Terraform Module","href":"/terraform-controller/developer/configuration","docId":"developer/configuration"},{"type":"link","label":"Finding Cloud Resources","href":"/terraform-controller/developer/tnctl","docId":"developer/tnctl"},{"type":"link","label":"Using Private Repositories","href":"/terraform-controller/developer/private","docId":"developer/private"},{"type":"link","label":"Enabling Drift Protection","href":"/terraform-controller/developer/drift","docId":"developer/drift"},{"type":"link","label":"Using Flux as Source","href":"/terraform-controller/developer/flux","docId":"developer/flux"}],"href":"/terraform-controller/category/developer-docs"},{"type":"category","label":"API Reference","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"configurations.terraform.appvia.io","href":"/terraform-controller/reference/configurations.terraform.appvia.io","docId":"reference/configurations.terraform.appvia.io"},{"type":"link","label":"policies.terraform.appvia.io","href":"/terraform-controller/reference/policies.terraform.appvia.io","docId":"reference/policies.terraform.appvia.io"},{"type":"link","label":"providers.terraform.appvia.io","href":"/terraform-controller/reference/providers.terraform.appvia.io","docId":"reference/providers.terraform.appvia.io"}],"href":"/terraform-controller/category/api-reference"},{"type":"category","label":"CLI Reference","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"tnctl","href":"/terraform-controller/cli/tnctl","docId":"cli/tnctl"},{"type":"link","label":"tnctl approve","href":"/terraform-controller/cli/tnctl_approve","docId":"cli/tnctl_approve"},{"type":"link","label":"tnctl build","href":"/terraform-controller/cli/tnctl_build","docId":"cli/tnctl_build"},{"type":"link","label":"tnctl completion","href":"/terraform-controller/cli/tnctl_completion","docId":"cli/tnctl_completion"},{"type":"link","label":"tnctl completion bash","href":"/terraform-controller/cli/tnctl_completion_bash","docId":"cli/tnctl_completion_bash"},{"type":"link","label":"tnctl completion fish","href":"/terraform-controller/cli/tnctl_completion_fish","docId":"cli/tnctl_completion_fish"},{"type":"link","label":"tnctl completion powershell","href":"/terraform-controller/cli/tnctl_completion_powershell","docId":"cli/tnctl_completion_powershell"},{"type":"link","label":"tnctl completion zsh","href":"/terraform-controller/cli/tnctl_completion_zsh","docId":"cli/tnctl_completion_zsh"},{"type":"link","label":"tnctl config","href":"/terraform-controller/cli/tnctl_config","docId":"cli/tnctl_config"},{"type":"link","label":"tnctl config sources","href":"/terraform-controller/cli/tnctl_config_sources","docId":"cli/tnctl_config_sources"},{"type":"link","label":"tnctl config sources add","href":"/terraform-controller/cli/tnctl_config_sources_add","docId":"cli/tnctl_config_sources_add"},{"type":"link","label":"tnctl config sources list","href":"/terraform-controller/cli/tnctl_config_sources_list","docId":"cli/tnctl_config_sources_list"},{"type":"link","label":"tnctl config sources remove","href":"/terraform-controller/cli/tnctl_config_sources_remove","docId":"cli/tnctl_config_sources_remove"},{"type":"link","label":"tnctl config view","href":"/terraform-controller/cli/tnctl_config_view","docId":"cli/tnctl_config_view"},{"type":"link","label":"tnctl describe","href":"/terraform-controller/cli/tnctl_describe","docId":"cli/tnctl_describe"},{"type":"link","label":"tnctl search","href":"/terraform-controller/cli/tnctl_search","docId":"cli/tnctl_search"},{"type":"link","label":"tnctl workflow","href":"/terraform-controller/cli/tnctl_workflow","docId":"cli/tnctl_workflow"},{"type":"link","label":"tnctl workflow create","href":"/terraform-controller/cli/tnctl_workflow_create","docId":"cli/tnctl_workflow_create"}],"href":"/terraform-controller/category/cli-reference"}]},"docs":{"admin/costs":{"id":"admin/costs","title":"Expose Costs","description":"The costs integration allows developers to see their associated costs before applying the terraform. This controller currently uses infracost to extract the predicted costs of a configuration, exposing the cost within the status of the Kubernetes object. It is viewable by running kubectl get configuration.","sidebar":"tutorialSidebar"},"admin/drift":{"id":"admin/drift","title":"Drift Detection","description":"Drift detection periodically runs a terraform plan on a Configuration, ensuring the expected state (terraform state) and the actual cloud resources are in sync. Currently Configurations must opt in for drift detection via their spec;","sidebar":"tutorialSidebar"},"admin/observability/metrics":{"id":"admin/observability/metrics","title":"Metrics","description":"The controller exposes a number of prometheus metrics that can be utilized for tracking operational conditions and usage metrics (i.e. configurations).","sidebar":"tutorialSidebar"},"admin/policy":{"id":"admin/policy","title":"Define Guardrails","description":"The controller comes with a number of controls and safeguards that the platform team can utilize to:","sidebar":"tutorialSidebar"},"admin/providers":{"id":"admin/providers","title":"Configure Providers","description":"Credentials to access the cloud are represented by Providers in the terraform-controller, a cluster scoped resource. When defining a terraform module developers reference a provider using spec.providerRef, tying together the resource and credentials.","sidebar":"tutorialSidebar"},"admin/secrets":{"id":"admin/secrets","title":"Additional Secrets","description":"The controller supports the ability to inject additional secrets into the terraform execution. A common use case to provide additional credentials, api tokens or custom configuration into the jobs.","sidebar":"tutorialSidebar"},"admin/template":{"id":"admin/template","title":"Customize Job Template","description":"When a configuration is changed (i.e. for plan, apply or destroy), the controller uses a template to render the final job configuration, taking the options provided on the controller command line, custom policies and the terraform configuration itself. A batch job is created from all the options and ordered to execute the change. You can find the default template for this here.","sidebar":"tutorialSidebar"},"architecture":{"id":"architecture","title":"Architecture","description":"The following diagram demos the architecture for the terraform controller.","sidebar":"tutorialSidebar"},"cli/tnctl":{"id":"cli/tnctl","title":"tnctl","description":"tnctl","sidebar":"tutorialSidebar"},"cli/tnctl_approve":{"id":"cli/tnctl_approve","title":"tnctl approve","description":"tnctl approve","sidebar":"tutorialSidebar"},"cli/tnctl_build":{"id":"cli/tnctl_build","title":"tnctl build","description":"tnctl build","sidebar":"tutorialSidebar"},"cli/tnctl_completion":{"id":"cli/tnctl_completion","title":"tnctl completion","description":"tnctl completion","sidebar":"tutorialSidebar"},"cli/tnctl_completion_bash":{"id":"cli/tnctl_completion_bash","title":"tnctl completion bash","description":"tnctl completion bash","sidebar":"tutorialSidebar"},"cli/tnctl_completion_fish":{"id":"cli/tnctl_completion_fish","title":"tnctl completion fish","description":"tnctl completion fish","sidebar":"tutorialSidebar"},"cli/tnctl_completion_powershell":{"id":"cli/tnctl_completion_powershell","title":"tnctl completion powershell","description":"tnctl completion powershell","sidebar":"tutorialSidebar"},"cli/tnctl_completion_zsh":{"id":"cli/tnctl_completion_zsh","title":"tnctl completion zsh","description":"tnctl completion zsh","sidebar":"tutorialSidebar"},"cli/tnctl_config":{"id":"cli/tnctl_config","title":"tnctl config","description":"tnctl config","sidebar":"tutorialSidebar"},"cli/tnctl_config_sources":{"id":"cli/tnctl_config_sources","title":"tnctl config sources","description":"tnctl config sources","sidebar":"tutorialSidebar"},"cli/tnctl_config_sources_add":{"id":"cli/tnctl_config_sources_add","title":"tnctl config sources add","description":"tnctl config sources add","sidebar":"tutorialSidebar"},"cli/tnctl_config_sources_list":{"id":"cli/tnctl_config_sources_list","title":"tnctl config sources list","description":"tnctl config sources list","sidebar":"tutorialSidebar"},"cli/tnctl_config_sources_remove":{"id":"cli/tnctl_config_sources_remove","title":"tnctl config sources remove","description":"tnctl config sources remove","sidebar":"tutorialSidebar"},"cli/tnctl_config_view":{"id":"cli/tnctl_config_view","title":"tnctl config view","description":"tnctl config view","sidebar":"tutorialSidebar"},"cli/tnctl_describe":{"id":"cli/tnctl_describe","title":"tnctl describe","description":"tnctl describe","sidebar":"tutorialSidebar"},"cli/tnctl_search":{"id":"cli/tnctl_search","title":"tnctl search","description":"tnctl search","sidebar":"tutorialSidebar"},"cli/tnctl_workflow":{"id":"cli/tnctl_workflow","title":"tnctl workflow","description":"tnctl workflow","sidebar":"tutorialSidebar"},"cli/tnctl_workflow_create":{"id":"cli/tnctl_workflow_create","title":"tnctl workflow create","description":"tnctl workflow create","sidebar":"tutorialSidebar"},"developer/configuration":{"id":"developer/configuration","title":"Provisioning a Terraform Module","description":"Example configuration resource","sidebar":"tutorialSidebar"},"developer/drift":{"id":"developer/drift","title":"Enabling Drift Protection","description":"Drift protection instructs the controller to periodically check for drift between the desired state and the upstream cloud provider; this could occur due to someone or something changing the configuration outside of the scope of terraform i.e. on the cloud console, API and so forth. The time frame is configured by the platform team, see Drift Detection for details.","sidebar":"tutorialSidebar"},"developer/flux":{"id":"developer/flux","title":"Using Flux as Source","description":"Flux is a flexible and popular framework used for Gitops. You can take advantage of any Flux install while still retaining the full feature set of the terraform controller.","sidebar":"tutorialSidebar"},"developer/private":{"id":"developer/private","title":"Using Private Repositories","description":"If the repository containing the terraform module is private and requires credentials to retrieve, you can add the authentication details to a secret held within the namespace.","sidebar":"tutorialSidebar"},"developer/tnctl":{"id":"developer/tnctl","title":"Finding Cloud Resources","description":"Terranetes comes bundled with a tnctl command (see Releases for downloads) which has ability to search for cloud resources. The search subcommand supports iterating through","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"What is Terranetes?","description":"The terranetes controller manages the life-cycle of terraform resources defined and built inside Kubernetes. This allows teams running workloads inside the cluster to self-serve application dependencies and reuse the wealth of terraform modules already written.","sidebar":"tutorialSidebar"},"reference/configurations.terraform.appvia.io":{"id":"reference/configurations.terraform.appvia.io","title":"configurations.terraform.appvia.io","description":"Configuration is the schema for terraform definitions in terraform controller","sidebar":"tutorialSidebar"},"reference/policies.terraform.appvia.io":{"id":"reference/policies.terraform.appvia.io","title":"policies.terraform.appvia.io","description":"Policy is the schema for provider definitions in terraform controller","sidebar":"tutorialSidebar"},"reference/providers.terraform.appvia.io":{"id":"reference/providers.terraform.appvia.io","title":"providers.terraform.appvia.io","description":"Provider is the schema for provider definitions in terraform controller","sidebar":"tutorialSidebar"},"releases":{"id":"releases","title":"Releases","description":"Release v0.2.6","sidebar":"tutorialSidebar"},"workflows/developer":{"id":"workflows/developer","title":"Developer","description":"Please read here for the developer workflow","sidebar":"tutorialSidebar"},"workflows/intro":{"id":"workflows/intro","title":"What are workflows","description":"\ud83d\udcac \\"In essence an opinion on a piece of paper\\"","sidebar":"tutorialSidebar"},"workflows/platform":{"id":"workflows/platform","title":"Platform Team","description":"Setting up workflows","sidebar":"tutorialSidebar"}}}')}}]);
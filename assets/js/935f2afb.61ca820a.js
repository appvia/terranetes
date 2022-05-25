"use strict";(self.webpackChunkterraform_controller_docs=self.webpackChunkterraform_controller_docs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Terraform Controller","href":"/terraform-controller/","docId":"index"},{"type":"link","label":"Releases","href":"/terraform-controller/releases","docId":"releases"},{"type":"category","label":"Administration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Configure Credentials for a Terraform Module","href":"/terraform-controller/admin/providers","className":"green","docId":"admin/providers"},{"type":"link","label":"Define Guardrails","href":"/terraform-controller/admin/policy","className":"green","docId":"admin/policy"},{"type":"link","label":"Expose Costs","href":"/terraform-controller/admin/costs","className":"green","docId":"admin/costs"},{"type":"link","label":"Customize Job Template","href":"/terraform-controller/admin/template","docId":"admin/template"}],"href":"/terraform-controller/category/administration"},{"type":"category","label":"Developer Docs","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Provisioning a Terraform Module","href":"/terraform-controller/developer/configuration","docId":"developer/configuration"},{"type":"link","label":"Using Private Repositories","href":"/terraform-controller/developer/private","docId":"developer/private"}],"href":"/terraform-controller/category/developer-docs"},{"type":"category","label":"API Reference","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"configurations.terraform.appvia.io","href":"/terraform-controller/reference/configurations.terraform.appvia.io","docId":"reference/configurations.terraform.appvia.io"},{"type":"link","label":"policies.terraform.appvia.io","href":"/terraform-controller/reference/policies.terraform.appvia.io","docId":"reference/policies.terraform.appvia.io"},{"type":"link","label":"providers.terraform.appvia.io","href":"/terraform-controller/reference/providers.terraform.appvia.io","docId":"reference/providers.terraform.appvia.io"}],"href":"/terraform-controller/category/api-reference"}]},"docs":{"admin/costs":{"id":"admin/costs","title":"Expose Costs","description":"The costs integration allows developers to see their associated costs before applying the terraform. This controller currently uses infracost to extract the predicted costs of a configuration, exposing the cost within the status of the Kubernetes object. It is viewable by running kubectl get configuration.","sidebar":"tutorialSidebar"},"admin/policy":{"id":"admin/policy","title":"Define Guardrails","description":"The controller comes with a number of controls and safeguards that the platform team can utilize to:","sidebar":"tutorialSidebar"},"admin/providers":{"id":"admin/providers","title":"Configure Credentials for a Terraform Module","description":"Credentials to access the cloud are represented by the Providers in the terraform-controller, a namespaced resource that usually lives in the same location as the controller. When defining a terraform module, developers reference an existing provider using spec.providerRef, and then tie the resource and credentials together.","sidebar":"tutorialSidebar"},"admin/template":{"id":"admin/template","title":"Customize Job Template","description":"When a configuration is changed (i.e. for plan, apply or destroy), the controller uses a template to render the final job configuration, taking the options provided on the controller command line, custom policies and the terraform configuration itself. A batch job is created from all the options and ordered to execute the change. You can find the default template for this here.","sidebar":"tutorialSidebar"},"developer/configuration":{"id":"developer/configuration","title":"Provisioning a Terraform Module","description":"Example configuration resource","sidebar":"tutorialSidebar"},"developer/private":{"id":"developer/private","title":"Using Private Repositories","description":"If the repository containing the terraform module is private and requires credentials to retrieve, you can add the authentication details to a secret held within the namespace.","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"Terraform Controller","description":"Terraform controller manages the life-cycle of terraform resources defined and built inside Kubernetes. This allows teams running workloads inside the cluster to self-service application dependencies and reuse the wealth of terraform modules already written.","sidebar":"tutorialSidebar"},"reference/configurations.terraform.appvia.io":{"id":"reference/configurations.terraform.appvia.io","title":"configurations.terraform.appvia.io","description":"Configuration is the schema for terraform definitions in terraform controller","sidebar":"tutorialSidebar"},"reference/policies.terraform.appvia.io":{"id":"reference/policies.terraform.appvia.io","title":"policies.terraform.appvia.io","description":"Policy is the schema for provider definitions in terraform controller","sidebar":"tutorialSidebar"},"reference/providers.terraform.appvia.io":{"id":"reference/providers.terraform.appvia.io","title":"providers.terraform.appvia.io","description":"Provider is the schema for provider definitions in terraform controller","sidebar":"tutorialSidebar"},"releases":{"id":"releases","title":"Releases","description":"Release v0.1.4","sidebar":"tutorialSidebar"}}}')}}]);
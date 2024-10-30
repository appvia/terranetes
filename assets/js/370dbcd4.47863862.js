"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[3952],{9368:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=n(4848),t=n(8453);const o={sidebar_position:1,sidebar_class_name:"green"},s="Configure Providers",a={id:"admin/providers",title:"Configure Providers",description:"Credentials to access the cloud are represented by Providers in the controller, a cluster scoped resource. When defining a terraform module developers reference a provider using spec.providerRef, tying together the resource and credentials.",source:"@site/docs/terranetes-controller/admin/providers.md",sourceDirName:"admin",slug:"/admin/providers",permalink:"/terranetes-controller/admin/providers",draft:!1,unlisted:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/admin/providers.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:173030469e4,sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"Administration",permalink:"/terranetes-controller/category/administration"},next:{title:"Define Guardrails",permalink:"/terranetes-controller/category/define-guardrails"}},c={},d=[{value:"Use a provider",id:"use-a-provider",level:2},{value:"Default Provider",id:"default-provider",level:3},{value:"Configure credentials",id:"configure-credentials",level:2},{value:"Configure by secret",id:"configure-by-secret",level:3},{value:"Configure injected identity",id:"configure-injected-identity",level:3},{value:"Configure IRSA for Amazon Web Services",id:"configure-irsa-for-amazon-web-services",level:3},{value:"Configure Azure AAD Pod Identity",id:"configure-azure-aad-pod-identity",level:3},{value:"Service Account Permissions",id:"service-account-permissions",level:4},{value:"Configure RBAC for providers",id:"configure-rbac-for-providers",level:2},{value:"Provider Configuration",id:"provider-configuration",level:2}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"configure-providers",children:"Configure Providers"})}),"\n",(0,i.jsxs)(r.p,{children:["Credentials to access the cloud are represented by ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/providers.terraform.appvia.io",children:"Providers"})," in the controller, a cluster scoped resource. When defining a terraform module developers reference a provider using ",(0,i.jsx)(r.code,{children:"spec.providerRef"}),", tying together the resource and credentials."]}),"\n",(0,i.jsx)(r.admonition,{type:"important",children:(0,i.jsx)(r.p,{children:"Note, credentials never leave the controller namespace, removing the risk of exposure."})}),"\n",(0,i.jsx)(r.h2,{id:"use-a-provider",children:"Use a provider"}),"\n",(0,i.jsx)(r.p,{children:"To reference a Provider apply the following Terraform configuration:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:"apiVersion: terraform.appvia.io/v1alpha1\nkind: Configuration\nmetadata:\n  name: bucket\nspec:\n  providerRef:\n    name: aws\n  module: <url>\n  variables: {}\n"})}),"\n",(0,i.jsx)(r.h3,{id:"default-provider",children:"Default Provider"}),"\n",(0,i.jsxs)(r.p,{children:["In order to remove the need for developers to discover Providers, platform administrators can set a ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/providers.terraform.appvia.io",children:"Provider"})," to be default. Under these condition any ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/configurations.terraform.appvia.io",children:"Configuration"})," which has not defined the ",(0,i.jsx)(r.code,{children:"spec.providerRef.name"})," will have the default Provider automatically injected for them."]}),"\n",(0,i.jsx)(r.admonition,{type:"important",children:(0,i.jsx)(r.p,{children:"Note, this feature is only available from >= v0.3.19 release"})}),"\n",(0,i.jsxs)(r.p,{children:["In order to configure an ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/providers.terraform.appvia.io",children:"Provider"})," as default, add the annotation ",(0,i.jsx)(r.code,{children:'terranetes.appvia.io/default-provider: "true"'})," as before. Note, only one ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/providers.terraform.appvia.io",children:"Provider"})," can be configured as 'default' at a time."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:'---\napiVersion: terraform.appvia.io/v1alpha1\nkind: Provider\nmetadata:\n  name: aws\n  annotations:\n    terranetes.appvia.io/default-provider: "true"\nspec:\n'})}),"\n",(0,i.jsx)(r.h2,{id:"configure-credentials",children:"Configure credentials"}),"\n",(0,i.jsxs)(r.p,{children:["In ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/providers.terraform.appvia.io",children:"Providers"})," we currently support these options for configuring credentials:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"spec.source: secret"})," References a kubernetes secret and mounts as environment variables into the executor."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"spec.source: injected"})," Runs the executor with a defined service account. This is used to support pod identity or IRSA in AWS."]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"These are described below."}),"\n",(0,i.jsx)(r.h3,{id:"configure-by-secret",children:"Configure by secret"}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsx)(r.p,{children:"Static credentials are the easiest to get going, but moving forward we highly recommend using pod identity and offloading credentials management to the cloud provider."})}),"\n",(0,i.jsxs)(r.p,{children:["All the terraform providers support configuration using environment variables, e.g., for AWS you can use ",(0,i.jsx)(r.code,{children:"AWS_REGION"}),", ",(0,i.jsx)(r.code,{children:"AWS_ACCESS_KEY_ID"})," and ",(0,i.jsx)(r.code,{children:"AWS_SECRET_ACCESS_KEY"}),". Simply create a Kubernetes secret in the controller namespace (defaults to ",(0,i.jsx)(r.code,{children:"terraform-system"}),") with these environment variables defined:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-shell",children:"$ kubectl -n terraform-system create secret generic aws \\\n  --from-literal=AWS_ACCESS_KEY_ID=<ID> \\\n  --from-literal=AWS_SECRET_ACCESS_KEY=<SECRET> \\\n  --from-literal=AWS_REGION=<REGION>\n"})}),"\n",(0,i.jsx)(r.admonition,{type:"important",children:(0,i.jsx)(r.p,{children:"Static credentials secrets must exist within the same namespace as the terraform controller itself. This is due to the fact the credentials are mounted into the job as environment variables."})}),"\n",(0,i.jsx)(r.p,{children:"The process is the same for all the providers:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs",children:"Amazon"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://registry.terraform.io/providers/hashicorp/google/latest",children:"Google Cloud"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs",children:"Azure"})}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["Presently we support using ",(0,i.jsx)(r.code,{children:"google"}),", ",(0,i.jsx)(r.code,{children:"aws"})," and ",(0,i.jsx)(r.code,{children:"azurerm"})," as providers. The controller is not limited to these, but for additional providers you'll have to define them yourself in the module."]}),"\n",(0,i.jsx)(r.p,{children:"Once the secret is provisioned you can create a Provider for it:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:"apiVersion: terraform.appvia.io/v1alpha1\nkind: Provider\nmetadata:\n  # This name should match the `providerRef` in the Configuration.\n  name: default\nspec:\n  summary: Default providers for all configurations\n  source: secret\n  provider: aws\n  secretRef:\n    namespace: terraform-system\n    name: aws\n"})}),"\n",(0,i.jsx)(r.h3,{id:"configure-injected-identity",children:"Configure injected identity"}),"\n",(0,i.jsx)(r.p,{children:"Injected identities are known by a few names depending on the cloud provider you are using. On"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["AWS - ",(0,i.jsx)(r.a,{href:"https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/setting-up-enable-IAM.html",children:"IRSA"})]}),"\n",(0,i.jsxs)(r.li,{children:["Google - ",(0,i.jsx)(r.a,{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity",children:"workload identity"})]}),"\n",(0,i.jsxs)(r.li,{children:["Azure - ",(0,i.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/azure/aks/use-azure-ad-pod-identity",children:"pod identity"})]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"In all cases these perform the same task:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"One or more roles are configured in the cloud provider with defined permissions."}),"\n",(0,i.jsxs)(r.li,{children:["A binding (cloud vendor dependent) is provisioned that gives a ",(0,i.jsx)(r.a,{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/",children:"service account"})," in Kubernetes the ability to retrieve short-term credentials for a defined Role."]}),"\n",(0,i.jsx)(r.li,{children:"The cloud vendor generates ephemeral credentials and returns them to the workload."}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Under this scenario all credentials management is offloaded to the cloud vendor and ensures the credentials used are short-lived and expire, thus improving the overall security."}),"\n",(0,i.jsx)(r.p,{children:"Configuring injected identities is cloud dependent and the complete details are beyond the scope of this document."}),"\n",(0,i.jsx)(r.h3,{id:"configure-irsa-for-amazon-web-services",children:"Configure IRSA for Amazon Web Services"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Before using IRSA in EKS, you must configure an OIDC connector. For details, see ",(0,i.jsx)(r.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts-technical-overview.html",children:"Technical overview"}),"."]}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsxs)(r.p,{children:["If you can build your clusters via Terraform, take a look at ",(0,i.jsx)(r.a,{href:"https://registry.terraform.io/modules/terraform-aws-modules/iam/aws/latest/submodules/iam-role-for-service-accounts-eks",children:"https://registry.terraform.io/modules/terraform-aws-modules/iam/aws/latest/submodules/iam-role-for-service-accounts-eks"})]})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Update your helm values in a similar way to the example below. The important values here are the annotations for the service account used by the executor; this must contain the ARN for the role to be used."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:"rbac:\n  # Indicates we should create all the necessary rbac resources\n  create: true\n  # ServiceAccount for the controller\n  controller:\n    # indicates we should create the terranetes-controller service account\n    create: true\n    # annotations is a collection of annotations which should be added to the ServiceAccount\n    annotations: {}\n\n  # Configuration for the terraform executor service account\n  executor:\n    # indicates we should create the terraform-executor service account\n    create: true\n    # annotations is a collection of annotations which should be added to the ServiceAccount\n    annotations:\n      eks.amazonaws.com/role-arn: arn:aws:iam::<AWS_ACCOUNT_ID>:role/<NAME_OF_ROLE>\n"})}),"\n",(0,i.jsx)(r.p,{children:"When the pod is created:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:"The EKS controlplane sees the annotation on the service account."}),"\n",(0,i.jsx)(r.li,{children:"It checks for a binding between the service account and the defined IAM role."}),"\n",(0,i.jsx)(r.li,{children:"If such a binding exists, it generates credentials and injects them via a secret as environment variables into the pod."}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"configure-azure-aad-pod-identity",children:"Configure Azure AAD Pod Identity"}),"\n",(0,i.jsx)(r.p,{children:"In order to use Azure's Pod identity service we need to"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Ensure the ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/providers.terraform.appvia.io",children:"Provider"})," msi configuration"]}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:"apiVersion: terraform.appvia.io/v1alpha1\nkind: Provider\nmetadata:\n  name: azurerm\nspec:\n  # Anything in configuration section is converting to HCL and configured the provider\n  configuration:\n    subscription_id: AZURE_SUBSCRIPTION_ID\n    tenant_id: AZURE_TENANT_ID\n    use_msi: true\n  source: injected\n  provider: azurerm\n"})}),"\n",(0,i.jsx)(r.admonition,{type:"caution",children:(0,i.jsxs)(r.p,{children:["Ensure you have added the ",(0,i.jsx)(r.code,{children:"use_msi: true"})," on the Provider configuration otherwise the AzureRM provider will attempt to fallback to the ",(0,i.jsx)(r.code,{children:"az"})," CLI and complain the binary is not found"]})}),"\n",(0,i.jsxs)(r.ol,{start:"2",children:["\n",(0,i.jsxs)(r.li,{children:["Provision the Azure Identity in the subscription (",(0,i.jsx)(r.a,{href:"https://azure.github.io/aad-pod-identity/docs/demo/standard_walkthrough/",children:"https://azure.github.io/aad-pod-identity/docs/demo/standard_walkthrough/"}),")"]}),"\n",(0,i.jsx)(r.li,{children:"Provision the Azure Identity in the controller namespace"}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:"apiVersion: aadpodidentity.k8s.io/v1\nkind: AzureIdentity\nmetadata:\n  annotations:\n    aadpodidentity.k8s.io/Behavior: namespaced\n  generation: 3\n  name: terranetes-controller\n  namespace: terraform-system\nspec:\n  clientID: CLIENT_ID\n  resourceID: /subscriptions/SUBSCRIPTION/resourcegroups/RESOURCE_GROUP/providers/Microsoft.ManagedIdentity/userAssignedIdentities/IDENTITY\n  type: 0\n"})}),"\n",(0,i.jsxs)(r.ol,{start:"4",children:["\n",(0,i.jsx)(r.li,{children:"Provision the binding to the pods"}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:"apiVersion: aadpodidentity.k8s.io/v1\nkind: AzureIdentityBinding\nmetadata:\n  name: terranetes-controller\n  namespace: terraform-system\nspec:\n  azureIdentity: IDENTITY\n  selector: terranetes-executor\n"})}),"\n",(0,i.jsxs)(r.admonition,{type:"caution",children:[(0,i.jsxs)(r.p,{children:["Details on binding can be found ",(0,i.jsx)(r.a,{href:"https://azure.github.io/aad-pod-identity/docs/concepts/azureidentitybinding/",children:"here"}),", but essentially it's used to filter the pods in the namespace and provide the permissions to the pods that match the labels - i.e. the pod must have label of the same name and value."]}),(0,i.jsxs)(r.p,{children:["As of <= v0.3.30 the pod selector is not configurable in the controller to ensure you use ",(0,i.jsx)(r.code,{children:"terranetes-executor"})," on the binding."]})]}),"\n",(0,i.jsx)(r.h4,{id:"service-account-permissions",children:"Service Account Permissions"}),"\n",(0,i.jsx)(r.admonition,{type:"important",children:(0,i.jsx)(r.p,{children:"The following is important when using or creating additional service accounts for a Provider. For example lets assume you create another service account 'admin' in the terraform-system namespace and reference that service account in a Provider which uses that account for IRSA."})}),"\n",(0,i.jsxs)(r.p,{children:["By default the service account the terraform controller uses to execute jobs is ",(0,i.jsx)(r.code,{children:"terraform-executor"}),". If you require additional service accounts for Providers i.e for use with ",(0,i.jsx)(r.code,{children:"spec.source: injected"})," or simply needing to use another service account; you need to ensure the correct RBAC permissions. The terraform job is using kubernetes secrets to store the terraform state and leases for locking. So the following needs to be in place."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:'apiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  name: NAME_OF_ROLE\n  namespace: terraform-system\nrules:\n  - apiGroups:\n      - coordination.k8s.io\n    resources:\n      - leases\n    verbs:\n      - create\n      - delete\n      - get\n      - list\n      - update\n      - watch\n  - apiGroups:\n      - ""\n    resources:\n      - configmaps\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - ""\n    resources:\n      - secrets\n    verbs:\n      - create\n      - delete\n      - get\n      - list\n      - patch\n      - update\n      - watch\n'})}),"\n",(0,i.jsx)(r.p,{children:"And a binding to the service account."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:"  ---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: terraform-executor\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: Role\n    name: NAME_OF_ROLE\nsubjects:\n  - kind: ServiceAccount\n    name: terraform-executor\n    namespace: terraform-system\n"})}),"\n",(0,i.jsx)(r.p,{children:"Without this the terraform execution will simply fail on access denied on secrets and or leases."}),"\n",(0,i.jsx)(r.h2,{id:"configure-rbac-for-providers",children:"Configure RBAC for providers"}),"\n",(0,i.jsxs)(r.p,{children:["Providers support the ability to filter who can use them. When a ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/providers.terraform.appvia.io#v1alpha1-.spec.selector",children:(0,i.jsx)(r.code,{children:"spec.selector"})})," is defined on the provider, any configuration referencing it must pass the filter, otherwise it will fail."]}),"\n",(0,i.jsx)(r.admonition,{type:"important",children:(0,i.jsxs)(r.p,{children:["By default an empty ",(0,i.jsx)(r.code,{children:"spec.selector"})," dictates all ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/configurations.terraform.appvia.io",children:"Configurations"})," in the cluster can use it. This is useful to provide limited scope credentials to all teams."]})}),"\n",(0,i.jsxs)(r.p,{children:["Using the ",(0,i.jsx)(r.code,{children:"spec.selector"})," field you can scope the credentials based on namespace and resource labels. For example you could add a ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/providers.terraform.appvia.io",children:"Provider"})," for system namespaces only:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:"apiVersion: terraform.appvia.io/v1alpha1\nkind: Provider\nmetadata:\n  # This name should match the `providerRef` in the Terraform Configuration (see above example).\n  name: admin\nspec:\n  selector:\n    namespace:\n      matchExpressions:\n        - key: kubernetes.io/metadata.name\n          operator: In\n          values: [kube-system]\n  source: secret\n  provider: aws\n  secretRef:\n    namespace: terraform-system\n    name: admin\n"})}),"\n",(0,i.jsx)(r.p,{children:"At the same time you could provide another limited set of permissions to all cluster users by removing the selector."}),"\n",(0,i.jsxs)(r.p,{children:["This feature could also be used to map to different pod identity roles in the cloud vendor, or different service account mapped to ",(0,i.jsx)(r.a,{href:"https://www.vaultproject.io/",children:"Vault"}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"provider-configuration",children:"Provider Configuration"}),"\n",(0,i.jsxs)(r.p,{children:["You can incorporate additional configuration into the ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/providers.terraform.appvia.io",children:"Provider"})," via the ",(0,i.jsx)(r.code,{children:"spec.configuration"}),". For instance the Azure provider comes with a ",(0,i.jsx)(r.a,{href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/guides/features-block",children:"features"})," which can be configured in the provider as such"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:"apiVersion: terraform.appvia.io/v1alpha1\nkind: Provider\nmetadata:\n  name: azure\nspec:\n  # Anything in configuration section is converting to HCL and configured the provider\n  configuration:\n    features:\n      api_management:\n        purge_soft_delete_on_destroy: true\n        recover_soft_deleted_api_managements: true\n      virtual_machine:\n        graceful_shutdown: true\n  source: secret\n  provider: azurerm\n  secretRef:\n    namespace: terraform-system\n    name: admin\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>a});var i=n(6540);const t={},o=i.createContext(t);function s(e){const r=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);
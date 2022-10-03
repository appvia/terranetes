"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[7683],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?n.createElement(f,i(i({ref:r},d),{},{components:t})):n.createElement(f,i({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3199:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_position:1,sidebar_class_name:"green"},i="Configure Providers",s={unversionedId:"admin/providers",id:"admin/providers",title:"Configure Providers",description:"Credentials to access the cloud are represented by Providers in the controller, a cluster scoped resource. When defining a terraform module developers reference a provider using spec.providerRef, tying together the resource and credentials.",source:"@site/docs/terranetes-controller/admin/providers.md",sourceDirName:"admin",slug:"/admin/providers",permalink:"/terranetes-controller/admin/providers",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/admin/providers.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1664804335,formattedLastUpdatedAt:"Oct 3, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"Administration",permalink:"/terranetes-controller/category/administration"},next:{title:"Define Guardrails",permalink:"/terranetes-controller/category/define-guardrails"}},l={},c=[{value:"Use a provider",id:"use-a-provider",level:2},{value:"Configure credentials",id:"configure-credentials",level:2},{value:"Configure by secret",id:"configure-by-secret",level:3},{value:"Configure injected identity",id:"configure-injected-identity",level:3},{value:"Configure IRSA for Amazon Web Services",id:"configure-irsa-for-amazon-web-services",level:3},{value:"Service Account Permissions",id:"service-account-permissions",level:4},{value:"Configure RBAC for providers",id:"configure-rbac-for-providers",level:2},{value:"Provider Configuration",id:"provider-configuration",level:2}],d={toc:c};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configure-providers"},"Configure Providers"),(0,a.kt)("p",null,"Credentials to access the cloud are represented by ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/providers.terraform.appvia.io"},"Providers")," in the controller, a cluster scoped resource. When defining a terraform module developers reference a provider using ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.providerRef"),", tying together the resource and credentials."),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"Note, credentials never leave the controller namespace, removing the risk of exposure.")),(0,a.kt)("h2",{id:"use-a-provider"},"Use a provider"),(0,a.kt)("p",null,"To reference a Provider apply the following Terraform configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: terraform.appvia.io/v1alpha1\nkind: Configuration\nmetadata:\n  name: bucket\nspec:\n  providerRef:\n    name: aws\n  module: <url>\n  variables: {}\n")),(0,a.kt)("h2",{id:"configure-credentials"},"Configure credentials"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/providers.terraform.appvia.io"},"Providers")," we currently support these options for configuring credentials:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.source: secret")," References a kubernetes secret and mounts as environment variables into the executor."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.source: injected")," Runs the executor with a defined service account. This is used to support pod identity or IRSA in AWS.")),(0,a.kt)("p",null,"These are described below."),(0,a.kt)("h3",{id:"configure-by-secret"},"Configure by secret"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Static credentials are the easiest to get going, but moving forward we highly recommend using pod identity and offloading credentials management to the cloud provider.")),(0,a.kt)("p",null,"All the terraform providers support configuration using environment variables, e.g., for AWS you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"AWS_REGION"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"AWS_ACCESS_KEY_ID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"AWS_SECRET_ACCESS_KEY"),". Simply create a Kubernetes secret in the controller namespace (defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform-system"),") with these environment variables defined:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl -n terraform-system create secret generic aws \\\n  --from-literal=AWS_ACCESS_KEY_ID=<ID> \\\n  --from-literal=AWS_SECRET_ACCESS_KEY=<SECRET> \\\n  --from-literal=AWS_REGION=<REGION>\n")),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"Static credentials secrets must exist within the same namespace as the terraform controller itself. This is due to the fact the credentials are mounted into the job as environment variables.")),(0,a.kt)("p",null,"The process is the same for all the providers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs"},"Amazon")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/google/latest"},"Google Cloud")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs"},"Azure"))),(0,a.kt)("p",null,"Presently we support using ",(0,a.kt)("inlineCode",{parentName:"p"},"google"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"aws")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"azurerm")," as providers. The controller is not limited to these, but for additional providers you'll have to define them yourself in the module."),(0,a.kt)("p",null,"Once the secret is provisioned you can create a Provider for it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: terraform.appvia.io/v1alpha1\nkind: Provider\nmetadata:\n  # This name should match the `providerRef` in the Configuration.\n  name: default\nspec:\n  summary: Default providers for all configurations\n  source: secret\n  provider: aws\n  secretRef:\n    namespace: terraform-system\n    name: aws\n")),(0,a.kt)("h3",{id:"configure-injected-identity"},"Configure injected identity"),(0,a.kt)("p",null,"Injected identities are known by a few names depending on the cloud provider you are using. On"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AWS - ",(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/setting-up-enable-IAM.html"},"IRSA")),(0,a.kt)("li",{parentName:"ul"},"Google - ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity"},"workload identity")),(0,a.kt)("li",{parentName:"ul"},"Azure - ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/aks/use-azure-ad-pod-identity"},"pod identity"))),(0,a.kt)("p",null,"In all cases these perform the same task:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"One or more roles are configured in the cloud provider with defined permissions."),(0,a.kt)("li",{parentName:"ul"},"A binding (cloud vendor dependent) is provisioned that gives a ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"},"service account")," in Kubernetes the ability to retrieve short-term credentials for a defined Role."),(0,a.kt)("li",{parentName:"ul"},"The cloud vendor generates ephemeral credentials and returns them to the workload.")),(0,a.kt)("p",null,"Under this scenario all credentials management is offloaded to the cloud vendor and ensures the credentials used are short-lived and expire, thus improving the overall security."),(0,a.kt)("p",null,"Configuring injected identities is cloud dependent and the complete details are beyond the scope of this document."),(0,a.kt)("h3",{id:"configure-irsa-for-amazon-web-services"},"Configure IRSA for Amazon Web Services"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Before using IRSA in EKS, you must configure an OIDC connector. For details, see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts-technical-overview.html"},"Technical overview"),"."),(0,a.kt)("admonition",{parentName:"li",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you can build your clusters via Terraform, take a look at ",(0,a.kt)("a",{parentName:"p",href:"https://registry.terraform.io/modules/terraform-aws-modules/iam/aws/latest/submodules/iam-role-for-service-accounts-eks"},"https://registry.terraform.io/modules/terraform-aws-modules/iam/aws/latest/submodules/iam-role-for-service-accounts-eks")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update your helm values in a similar way to the example below. The important values here are the annotations for the service account used by the executor; this must contain the ARN for the role to be used."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"rbac:\n  # Indicates we should create all the necessary rbac resources\n  create: true\n  # ServiceAccount for the controller\n  controller:\n    # indicates we should create the terranetes-controller service account\n    create: true\n    # annotations is a collection of annotations which should be added to the ServiceAccount\n    annotations: {}\n\n  # Configuration for the terraform executor service account\n  executor:\n    # indicates we should create the terraform-executor service account\n    create: true\n    # annotations is a collection of annotations which should be added to the ServiceAccount\n    annotations:\n      eks.amazonaws.com/role-arn: arn:aws:iam::<AWS_ACCOUNT_ID>:role/<NAME_OF_ROLE>\n")),(0,a.kt)("p",null,"When the pod is created:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The EKS controlplane sees the annotation on the service account."),(0,a.kt)("li",{parentName:"ol"},"It checks for a binding between the service account and the defined IAM role."),(0,a.kt)("li",{parentName:"ol"},"If such a binding exists, it generates credentials and injects them via a secret as environment variables into the pod.")),(0,a.kt)("h4",{id:"service-account-permissions"},"Service Account Permissions"),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"The following is important when using or creating additional service accounts for a Provider. For example lets assume you create another service account 'admin' in the terraform-system namespace and reference that service account in a Provider which uses that account for IRSA.")),(0,a.kt)("p",null,"By default the service account the terraform controller uses to execute jobs is ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform-executor"),". If you require additional service accounts for Providers i.e for use with ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.source: injected")," or simply needing to use another service account; you need to ensure the correct RBAC permissions. The terraform job is using kubernetes secrets to store the terraform state and leases for locking. So the following needs to be in place."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  name: NAME_OF_ROLE\n  namespace: terraform-system\nrules:\n  - apiGroups:\n      - coordination.k8s.io\n    resources:\n      - leases\n    verbs:\n      - create\n      - delete\n      - get\n      - list\n      - update\n      - watch\n  - apiGroups:\n      - ""\n    resources:\n      - configmaps\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - ""\n    resources:\n      - secrets\n    verbs:\n      - create\n      - delete\n      - get\n      - list\n      - patch\n      - update\n      - watch\n')),(0,a.kt)("p",null,"And a binding to the service account."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  ---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: terraform-executor\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: Role\n    name: NAME_OF_ROLE\nsubjects:\n  - kind: ServiceAccount\n    name: terraform-executor\n    namespace: terraform-system\n")),(0,a.kt)("p",null,"Without this the terraform execution will simply fail on access denied on secrets and or leases."),(0,a.kt)("h2",{id:"configure-rbac-for-providers"},"Configure RBAC for providers"),(0,a.kt)("p",null,"Providers support the ability to filter who can use them. When a ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/providers.terraform.appvia.io#v1alpha1-.spec.selector"},(0,a.kt)("inlineCode",{parentName:"a"},"spec.selector"))," is defined on the provider, any configuration referencing it must pass the filter, otherwise it will fail."),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"By default an empty ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.selector")," dictates all ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configurations")," in the cluster can use it. This is useful to provide limited scope credentials to all teams.")),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.selector")," field you can scope the credentials based on namespace and resource labels. For example you could add a ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/providers.terraform.appvia.io"},"Provider")," for system namespaces only:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: terraform.appvia.io/v1alpha1\nkind: Provider\nmetadata:\n  # This name should match the `providerRef` in the Terraform Configuration (see above example).\n  name: admin\nspec:\n  selector:\n    namespace:\n      matchExpressions:\n        - key: kubernetes.io/metadata.name\n          operator: In\n          values: [kube-system]\n  source: secret\n  provider: aws\n  secretRef:\n    namespace: terraform-system\n    name: admin\n")),(0,a.kt)("p",null,"At the same time you could provide another limited set of permissions to all cluster users by removing the selector."),(0,a.kt)("p",null,"This feature could also be used to map to different pod identity roles in the cloud vendor, or different service account mapped to ",(0,a.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/"},"Vault"),"."),(0,a.kt)("h2",{id:"provider-configuration"},"Provider Configuration"),(0,a.kt)("p",null,"You can incorporate additional configuration into the ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/providers.terraform.appvia.io"},"Provider")," via the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.configuration"),". For instance the Azure provider comes with a ",(0,a.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/guides/features-block"},"features")," which can be configured in the provider as such"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: terraform.appvia.io/v1alpha1\nkind: Provider\nmetadata:\n  name: azure\nspec:\n  # Anything in configuration section is converting to HCL and configured the provider\n  configuration:\n    features:\n      api_management:\n        purge_soft_delete_on_destroy: true\n        recover_soft_deleted_api_managements: true\n      virtual_machine:\n        graceful_shutdown: true\n  source: secret\n  provider: azurerm\n  secretRef:\n    namespace: terraform-system\n    name: admin\n")))}p.isMDXComponent=!0}}]);
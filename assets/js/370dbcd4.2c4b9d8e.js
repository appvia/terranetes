"use strict";(self.webpackChunkterraform_controller_docs=self.webpackChunkterraform_controller_docs||[]).push([[7683],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3199:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:1,sidebar_class_name:"green"},l="Configure Providers",c={unversionedId:"admin/providers",id:"admin/providers",title:"Configure Providers",description:"Credentials to access the cloud are represented by Providers in the controller, a cluster scoped resource. When defining a terraform module developers reference a provider using spec.providerRef, tying together the resource and credentials.",source:"@site/docs/terranetes-controller/admin/providers.md",sourceDirName:"admin",slug:"/admin/providers",permalink:"/terranetes-controller/admin/providers",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/admin/providers.md",tags:[],version:"current",lastUpdatedBy:"Kashif Saadat",lastUpdatedAt:1661348123,formattedLastUpdatedAt:"8/24/2022",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"Administration",permalink:"/terranetes-controller/category/administration"},next:{title:"Define Guardrails",permalink:"/terranetes-controller/admin/policy"}},d={},p=[{value:"Use a provider",id:"use-a-provider",level:2},{value:"Configure credentials",id:"configure-credentials",level:2},{value:"Configure by secret",id:"configure-by-secret",level:3},{value:"Configure injected identity",id:"configure-injected-identity",level:3},{value:"Configure IRSA for Amazon Web Services",id:"configure-irsa-for-amazon-web-services",level:3},{value:"Service Account Permissions",id:"service-account-permissions",level:4},{value:"Configure RBAC for providers",id:"configure-rbac-for-providers",level:2},{value:"Provider Configuration",id:"provider-configuration",level:2}],m={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure-providers"},"Configure Providers"),(0,o.kt)("p",null,"Credentials to access the cloud are represented by ",(0,o.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/providers.terraform.appvia.io"},"Providers")," in the controller, a cluster scoped resource. When defining a terraform module developers reference a provider using ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.providerRef"),", tying together the resource and credentials."),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note, credentials never leave the controller namespace, removing the risk of exposure."))),(0,o.kt)("h2",{id:"use-a-provider"},"Use a provider"),(0,o.kt)("p",null,"To reference a Provider apply the following Terraform configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: terraform.appvia.io/v1alpha1\nkind: Configuration\nmetadata:\n  name: bucket\nspec:\n  providerRef:\n    name: aws\n  module: <url>\n  variables: {}\n")),(0,o.kt)("h2",{id:"configure-credentials"},"Configure credentials"),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/providers.terraform.appvia.io"},"Providers")," we currently support these options for configuring credentials:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"spec.source: secret")," References a kubernetes secret and mounts as environment variables into the executor."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"spec.source: injected")," Runs the executor with a defined service account. This is used to support pod identity or IRSA in AWS.")),(0,o.kt)("p",null,"These are described below."),(0,o.kt)("h3",{id:"configure-by-secret"},"Configure by secret"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Static credentials are the easiest to get going, but moving forward we highly recommend using pod identity and offloading credentials management to the cloud provider."))),(0,o.kt)("p",null,"All the terraform providers support configuration using environment variables, e.g., for AWS you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"AWS_REGION"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AWS_ACCESS_KEY_ID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AWS_SECRET_ACCESS_KEY"),". Simply create a Kubernetes secret in the controller namespace (defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform-system"),") with these environment variables defined:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl -n terraform-system create secret generic aws \\\n  --from-literal=AWS_ACCESS_KEY_ID=<ID> \\\n  --from-literal=AWS_SECRET_ACCESS_KEY=<SECRET> \\\n  --from-literal=AWS_REGION=<REGION>\n")),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Static credentials secrets must exist within the same namespace as the terraform controller itself. This is due to the fact the credentials are mounted into the job as environment variables."))),(0,o.kt)("p",null,"The process is the same for all the providers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs"},"Amazon")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/google/latest"},"Google Cloud")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs"},"Azure"))),(0,o.kt)("p",null,"Presently we support using ",(0,o.kt)("inlineCode",{parentName:"p"},"google"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"aws")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"azurerm")," as providers. The controller is not limited to these, but for additional providers you'll have to define them yourself in the module."),(0,o.kt)("p",null,"Once the secret is provisioned you can create a Provider for it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: terraform.appvia.io/v1alpha1\nkind: Provider\nmetadata:\n  # This name should match the `providerRef` in the Configuration.\n  name: default\nspec:\n  summary: Default providers for all configurations\n  source: secret\n  provider: aws\n  secretRef:\n    namespace: terraform-system\n    name: aws\n")),(0,o.kt)("h3",{id:"configure-injected-identity"},"Configure injected identity"),(0,o.kt)("p",null,"Injected identities are known by a few names depending on the cloud provider you are using. On"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"AWS - ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/setting-up-enable-IAM.html"},"IRSA")),(0,o.kt)("li",{parentName:"ul"},"Google - ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity"},"workload identity")),(0,o.kt)("li",{parentName:"ul"},"Azure - ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/aks/use-azure-ad-pod-identity"},"pod identity"))),(0,o.kt)("p",null,"In all cases these perform the same task:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One or more roles are configured in the cloud provider with defined permissions."),(0,o.kt)("li",{parentName:"ul"},"A binding (cloud vendor dependent) is provisioned that gives a ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"},"service account")," in Kubernetes the ability to retrieve short-term credentials for a defined Role."),(0,o.kt)("li",{parentName:"ul"},"The cloud vendor generates ephemeral credentials and returns them to the workload.")),(0,o.kt)("p",null,"Under this scenario all credentials management is offloaded to the cloud vendor and ensures the credentials used are short-lived and expire, thus improving the overall security."),(0,o.kt)("p",null,"Configuring injected identities is cloud dependent and the complete details are beyond the scope of this document."),(0,o.kt)("h3",{id:"configure-irsa-for-amazon-web-services"},"Configure IRSA for Amazon Web Services"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Before using IRSA in EKS, you must configure an OIDC connector. For details, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts-technical-overview.html"},"Technical overview"),"."),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you can build your clusters via Terraform, take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/modules/terraform-aws-modules/iam/aws/latest/submodules/iam-role-for-service-accounts-eks"},"https://registry.terraform.io/modules/terraform-aws-modules/iam/aws/latest/submodules/iam-role-for-service-accounts-eks"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update your helm values in a similar way to the example below. The important values here are the annotations for the service account used by the executor; this must contain the ARN for the role to be used."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"rbac:\n  # Indicates we should create all the necessary rbac resources\n  create: true\n  # ServiceAccount for the controller\n  controller:\n    # indicates we should create the terranetes-controller service account\n    create: true\n    # annotations is a collection of annotations which should be added to the ServiceAccount\n    annotations: {}\n\n  # Configuration for the terraform executor service account\n  executor:\n    # indicates we should create the terraform-executor service account\n    create: true\n    # annotations is a collection of annotations which should be added to the ServiceAccount\n    annotations:\n      eks.amazonaws.com/role-arn: arn:aws:iam::<AWS_ACCOUNT_ID>:role/<NAME_OF_ROLE>\n")),(0,o.kt)("p",null,"When the pod is created:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The EKS controlplane sees the annotation on the service account."),(0,o.kt)("li",{parentName:"ol"},"It checks for a binding between the service account and the defined IAM role."),(0,o.kt)("li",{parentName:"ol"},"If such a binding exists, it generates credentials and injects them via a secret as environment variables into the pod.")),(0,o.kt)("h4",{id:"service-account-permissions"},"Service Account Permissions"),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The following is important when using or creating additional service accounts for a Provider. For example lets assume you create another service account 'admin' in the terraform-system namespace and reference that service account in a Provider which uses that account for IRSA."))),(0,o.kt)("p",null,"By default the service account the terraform controller uses to execute jobs is ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform-executor"),". If you require additional service accounts for Providers i.e for use with ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.source: injected")," or simply needing to use another service account; you need to ensure the correct RBAC permissions. The terraform job is using kubernetes secrets to store the terraform state and leases for locking. So the following needs to be in place."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  name: NAME_OF_ROLE\n  namespace: terraform-system\nrules:\n  - apiGroups:\n      - coordination.k8s.io\n    resources:\n      - leases\n    verbs:\n      - create\n      - delete\n      - get\n      - list\n      - update\n      - watch\n  - apiGroups:\n      - ""\n    resources:\n      - configmaps\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - ""\n    resources:\n      - secrets\n    verbs:\n      - create\n      - delete\n      - get\n      - list\n      - patch\n      - update\n      - watch\n')),(0,o.kt)("p",null,"And a binding to the service account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  ---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: terraform-executor\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: Role\n    name: NAME_OF_ROLE\nsubjects:\n  - kind: ServiceAccount\n    name: terraform-executor\n    namespace: terraform-system\n")),(0,o.kt)("p",null,"Without this the terraform execution will simply fail on access denied on secrets and or leases."),(0,o.kt)("h2",{id:"configure-rbac-for-providers"},"Configure RBAC for providers"),(0,o.kt)("p",null,"Providers support the ability to filter who can use them. When a ",(0,o.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/providers.terraform.appvia.io#v1alpha1-.spec.selector"},(0,o.kt)("inlineCode",{parentName:"a"},"spec.selector"))," is defined on the provider, any configuration referencing it must pass the filter, otherwise it will fail."),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"By default an empty ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.selector")," dictates all ",(0,o.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configurations")," in the cluster can use it. This is useful to provide limited scope credentials to all teams."))),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.selector")," field you can scope the credentials based on namespace and resource labels. For example you could add a ",(0,o.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/providers.terraform.appvia.io"},"Provider")," for system namespaces only:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: terraform.appvia.io/v1alpha1\nkind: Provider\nmetadata:\n  # This name should match the `providerRef` in the Terraform Configuration (see above example).\n  name: admin\nspec:\n  selector:\n    namespace:\n      matchExpressions:\n        - key: kubernetes.io/metadata.name\n          operator: In\n          values: [kube-system]\n  source: secret\n  provider: aws\n  secretRef:\n    namespace: terraform-system\n    name: admin\n")),(0,o.kt)("p",null,"At the same time you could provide another limited set of permissions to all cluster users by removing the selector."),(0,o.kt)("p",null,"This feature could also be used to map to different pod identity roles in the cloud vendor, or different service account mapped to ",(0,o.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/"},"Vault"),"."),(0,o.kt)("h2",{id:"provider-configuration"},"Provider Configuration"),(0,o.kt)("p",null,"You can incorporate additional configuration into the ",(0,o.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/providers.terraform.appvia.io"},"Provider")," via the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.configuration"),". For instance the Azure provider comes with a ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/guides/features-block"},"features")," which can be configured in the provider as such"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: terraform.appvia.io/v1alpha1\nkind: Provider\nmetadata:\n  name: azure\nspec:\n  # Anything in configuration section is converting to HCL and configured the provider\n  configuration:\n    features:\n      api_management:\n        purge_soft_delete_on_destroy: true\n        recover_soft_deleted_api_managements: true\n      virtual_machine:\n        graceful_shutdown: true\n  source: secret\n  provider: azurerm\n  secretRef:\n    namespace: terraform-system\n    name: admin\n")))}u.isMDXComponent=!0}}]);
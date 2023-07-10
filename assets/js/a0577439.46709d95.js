"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[5050],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6834:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3,sidebar_class_name:"green"},i="Configuration Contexts",l={unversionedId:"admin/contexts",id:"admin/contexts",title:"Configuration Contexts",description:"Contexts provide a means to share common configuration between Configurations. The resource type is Cluster scoped and can be used by any Configuration in the cluster.",source:"@site/docs/terranetes-controller/admin/contexts.md",sourceDirName:"admin",slug:"/admin/contexts",permalink:"/terranetes-controller/admin/contexts",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/admin/contexts.md",tags:[],version:"current",lastUpdatedBy:"Celeste",lastUpdatedAt:1688987168,formattedLastUpdatedAt:"Jul 10, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"Checkov Policy",permalink:"/terranetes-controller/admin/policy/checkov"},next:{title:"Expose Costs",permalink:"/terranetes-controller/admin/costs"}},s={},c=[{value:"Create a Context",id:"create-a-context",level:2},{value:"Configure Preloading",id:"configure-preloading",level:2},{value:"How to reference a Context",id:"how-to-reference-a-context",level:2},{value:"Using a Custom Preload",id:"using-a-custom-preload",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration-contexts"},"Configuration Contexts"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/contexts.terraform.appvia.io"},"Contexts")," provide a means to share common configuration between ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configurations"),". The resource type is Cluster scoped and can be used by any Configuration in the cluster."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This feature is only available from v0.3.25 onwards")),(0,a.kt)("h2",{id:"create-a-context"},"Create a Context"),(0,a.kt)("p",null,"You can create a ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/contexts.terraform.appvia.io"},"Context")," like so."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: terraform.appvia.io/v1alpha1\nkind: Context\nmetadata:\n  name: default\nspec:\n  #\n  ## All variables MUST follow the pattern of 'description' and 'value'. The\n  ## value can be any complex or simple type (boolean, int, map, object etc)\n  #\n  variables:\n    # Is the name of the variable\n    vpc_id:\n      # Provides a description to the consumer of the input\n      description: Is the network identifier we are residing\n      # The value of the value\n      value: vpc-1223133113\n    public_subnets_ids:\n      # Provides a description to the consumer of the input\n      description: |\n        Is a collection of subnet id's which are publicly available i.e.\n        they are attached to an internet gateway\n      # The value of the value\n      value:\n        - subnet-12312312312\n        - subnet-32332321312\n")),(0,a.kt)("p",null,"The resource contains a map of variables; note each variable MUST have a ",(0,a.kt)("inlineCode",{parentName:"p"},"description")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),", with the value being any simple (integer, boolean, string) or complex type (maps, list, maps or maps and so forth)."),(0,a.kt)("h2",{id:"configure-preloading"},"Configure Preloading"),(0,a.kt)("p",null,"Terranetes has the ability to populate a ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/contexts.terraform.appvia.io"},"Context")," automatically; retrieving details about the cluster the controller resides and populating them into a ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/contexts.terraform.appvia.io"},"Context"),". Currently this feature is limited to AWS only."),(0,a.kt)("p",null,"In order to use the feature we need to update the configuration of a ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/providers.terraform.appvia.io"},"Provider"),"; It is the ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/providers.terraform.appvia.io"},"Providers")," credentials which the preloading will use to retrieve the information from the cloud vendor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: terraform.appvia.io/v1alpha1\nkind: Provider\nmetadata:\n  name: aws\nspec:\n  # Source and be 'secret' or 'injected'. When using a 'secret' you\n  # must specify the spec.secretRef which defines the name of the\n  # secret in the controller namespace containing the credentials.\n  source: secret\n  # Provider can be google, aws, azurerm, alicloud, azurestack, googleworkspace etc\n  provider: aws\n  # Provides configuration for the contextual data preloader (currently only\n  # available for aws)\n  preload:\n    # Indicates if the preloading should be enabled\n    enabled: true\n    # Is the EKS cluster we use to pivot network and settings around\n    cluster: eks\n    # Is the cloud region the cluster above resides\n    region: eu-west-2\n    # Is the terranetes context resource we should provision\n    context: default\n  # Used when spec.source is secret.\n  secretRef:\n    namespace: terraform-system\n    name: aws\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.preload")," in the ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/providers.terraform.appvia.io"},"Provider")," needs the following information."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"enabled")," Indicates if we should preload any data into a ",(0,a.kt)("a",{parentName:"li",href:"/terranetes-controller/reference/contexts.terraform.appvia.io"},"Context"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cluster")," Is the cloud name of the cluster we reside in i.e. the EKS cluster name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"region")," Is the cloud region the cluster (",(0,a.kt)("inlineCode",{parentName:"li"},"spec.preload.cluster"),") resides in."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"context")," Is the name of the ",(0,a.kt)("a",{parentName:"li",href:"/terranetes-controller/reference/contexts.terraform.appvia.io"},"Context")," you wish to populate the values into.")),(0,a.kt)("p",null,"Once this information has been defined, a ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/contexts.terraform.appvia.io"},"Context")," resource be automatically provisioned and preloaded with details, as such;"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"$ k get contexts.terraform.appvia.io default  -o yaml\napiVersion: terraform.appvia.io/v1alpha1\nkind: Context\nmetadata:\n  generation: 1\n  labels:\n    terranetes.appvia.io/preload-provider-name: aws\n  name: default\nspec:\n  variables:\n    eks:\n      description: AWS ARN for the Kubernetes cluster\n      value: arn:aws:eks:eu-west-2:XXXXXXXXX:cluster/eks-test\n    eks_cluster_security_group_id:\n      description: The security group ID attached to the EKS cluster\n      value: sg-XXXXXXXXX\n    eks_endpoint:\n      description: The endpoint for the EKS cluster\n      value: https://XXXXXXXXXXXXXXXX.sk1.eu-west-2.eks.amazonaws.com\n    eks_name:\n      description: The name of the EKS cluster\n      value: eks\n    eks_platform_version:\n      description: The platform version of the EKS cluster\n      value: eks.6\n    eks_private_access:\n      description: Indicates whether or not the EKS cluster has private access enabled\n      value: true\n    eks_public_access:\n      description: Indicates whether or not the EKS cluster has public access enabled\n      value: false\n    eks_public_access_cidrs:\n      description: The CIDR blocks that are allowed access to the EKS cluster\n      value:\n      - 0.0.0.0/0\n    eks_role_arn:\n      description: The ARN of the IAM role that provides permissions for the EKS cluster\n      value: arn:aws:iam::XXXXXXXXXX:role/eks-test-role\n    eks_route_tables_ids:\n      description: A list of all route tables id associate to the subnets which are\n        part of the EKS cluster\n      value:\n      - rtb-04dbff51b83821XXX\n     ....MORE VARIABLES\n    vpc_id:\n      description: The ID of the VPC used by the EKS cluster\n      value: vpc-0a6f4fbb4bXXXXXXX\n")),(0,a.kt)("h2",{id:"how-to-reference-a-context"},"How to reference a Context"),(0,a.kt)("p",null,"Contexts can be referenced from any ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configuration")," like so"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  ---\n  apiVersion: terraform.appvia.io/v1alpha1\n  kind: Configuration\n  metadata:\n    name: bucket\n  spec:\n    module: https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.10.1\n    providerRef:\n      name: aws\n    valueFrom:\n      - context: default\n        key: vpc_id\n        name: vpc_id\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.valueFrom")," requires the ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/contexts.terraform.appvia.io"},"Context")," name, the key is the name of the variable in the context and the name is the variable you need to present this as to the terraform module. The optional field simply means both the context and any value reference, if they don't exist, can continue without failure. By default, anything missing (context or value) will defer the ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configuration")," until they are present."),(0,a.kt)("h2",{id:"using-a-custom-preload"},"Using a Custom Preload"),(0,a.kt)("p",null,"Terranetes comes prebuilt with a loader to extract details from the cloud vendor, but perhaps it doesn't contain the details you need. You can solve this in two ways"),(0,a.kt)("p",null,"a) Configuration can reference multiple ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/contexts.terraform.appvia.io"},"Context")," resources, so you can provision with additional details / values.\nb) Override the preload image in the controller and run your own custom loader."),(0,a.kt)("p",null,"The first one is simple and can achieved in multiple ways; manually, ci, helm and so forth. The second option, overloading the controller's preload images requires you update the ",(0,a.kt)("inlineCode",{parentName:"p"},"--preload-image")," argument. In the helm chart, this can be done via"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"controller:\n  images:\n    preload: IMAGE:TAG\n")),(0,a.kt)("p",null,"Note, the entrypoint when using this image is currently hardcoded, so you have to ensure in the image we have an executable at ",(0,a.kt)("inlineCode",{parentName:"p"},"/bin/preload"),". The following arguments will also be passed, via environment variables to the execution"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CLOUD")," is the cloud vendor designation from the ",(0,a.kt)("a",{parentName:"li",href:"/terranetes-controller/reference/providers.terraform.appvia.io"},"Provider")," the preload is configured on i.e. ",(0,a.kt)("inlineCode",{parentName:"li"},"spec.provider"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CLUSTER")," is the cluster name from the preload configuration i.e ",(0,a.kt)("inlineCode",{parentName:"li"},"spec.preload.cluster"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CONTEXT")," is the name of the context (",(0,a.kt)("inlineCode",{parentName:"li"},"spec.preload.context"),") defined in the ",(0,a.kt)("a",{parentName:"li",href:"/terranetes-controller/reference/providers.terraform.appvia.io"},"Provider")," configuration."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PROVIDER")," is the name of the provider the preload was configured on ",(0,a.kt)("inlineCode",{parentName:"li"},"metadata.name")," on the ",(0,a.kt)("a",{parentName:"li",href:"/terranetes-controller/reference/providers.terraform.appvia.io"},"Provider")," resource."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"REGION")," is the cloud region configured in the ",(0,a.kt)("a",{parentName:"li",href:"/terranetes-controller/reference/providers.terraform.appvia.io"},"Provider")," preload configuration i.e ",(0,a.kt)("inlineCode",{parentName:"li"},"spec.preload.region"),".")),(0,a.kt)("p",null,"When using a custom loader the executable is responsible for two things"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Retrieving the cloud details and constructing a valid ",(0,a.kt)("a",{parentName:"li",href:"/terranetes-controller/reference/contexts.terraform.appvia.io"},"Context")," resource."),(0,a.kt)("li",{parentName:"ul"},"Creating or updating the ",(0,a.kt)("inlineCode",{parentName:"li"},"CONTEXT")," in the Kubernetes cluster itself.")),(0,a.kt)("p",null,"The controller is responsible for ensuring execution occurs, handing jobs fails and configuring the job with ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/providers.terraform.appvia.io"},"Provider")," credentials."))}u.isMDXComponent=!0}}]);
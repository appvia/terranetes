"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[8933],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>h});var s=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,s,a=function(t,e){if(null==t)return{};var r,s,a={},p=Object.keys(t);for(s=0;s<p.length;s++)r=p[s],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(s=0;s<p.length;s++)r=p[s],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var n=s.createContext({}),c=function(t){var e=s.useContext(n),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},l=function(t){var e=c(t.components);return s.createElement(n.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},y=s.forwardRef((function(t,e){var r=t.components,a=t.mdxType,p=t.originalType,n=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),y=c(r),h=a,k=y["".concat(n,".").concat(h)]||y[h]||d[h]||p;return r?s.createElement(k,o(o({ref:e},l),{},{components:r})):s.createElement(k,o({ref:e},l))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=r.length,o=new Array(p);o[0]=y;var i={};for(var n in e)hasOwnProperty.call(e,n)&&(i[n]=e[n]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var c=2;c<p;c++)o[c]=r[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,r)}y.displayName="MDXCreateElement"},7811:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>n,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var s=r(7462),a=(r(7294),r(3905));const p={title:"configurations.terraform.appvia.io",linkTitle:"Configuration",sidebar_position:1},o="Configuration",i={unversionedId:"reference/configurations.terraform.appvia.io",id:"reference/configurations.terraform.appvia.io",title:"configurations.terraform.appvia.io",description:"Configuration is the schema for terraform definitions in terraform controller",source:"@site/docs/terranetes-controller/reference/configurations.terraform.appvia.io.md",sourceDirName:"reference",slug:"/reference/configurations.terraform.appvia.io",permalink:"/terranetes-controller/reference/configurations.terraform.appvia.io",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/reference/configurations.terraform.appvia.io.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1684742855,formattedLastUpdatedAt:"May 22, 2023",sidebarPosition:1,frontMatter:{title:"configurations.terraform.appvia.io",linkTitle:"Configuration",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API Reference",permalink:"/terranetes-controller/category/api-reference"},next:{title:"policies.terraform.appvia.io",permalink:"/terranetes-controller/reference/policies.terraform.appvia.io"}},n={},c=[],l={toc:c};function d(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,s.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration"},"Configuration"),(0,a.kt)("p",{class:"crd-description"},"Configuration is the schema for terraform definitions in terraform controller"),(0,a.kt)("dl",{class:"crd-meta"},(0,a.kt)("dt",{class:"fullname"},"Full name:"),(0,a.kt)("dd",{class:"fullname"},"configurations.terraform.appvia.io"),(0,a.kt)("dt",{class:"groupname"},"Group:"),(0,a.kt)("dd",{class:"groupname"},"terraform.appvia.io"),(0,a.kt)("dt",{class:"singularname"},"Singular name:"),(0,a.kt)("dd",{class:"singularname"},"configuration"),(0,a.kt)("dt",{class:"pluralname"},"Plural name:"),(0,a.kt)("dd",{class:"pluralname"},"configurations"),(0,a.kt)("dt",{class:"scope"},"Scope:"),(0,a.kt)("dd",{class:"scope"},"Namespaced"),(0,a.kt)("dt",{class:"versions"},"Versions:"),(0,a.kt)("dd",{class:"versions"},(0,a.kt)("a",{class:"version",href:"#v1alpha1",title:"Show schema for version v1alpha1"},"v1alpha1"))),(0,a.kt)("div",{class:"crd-schema-version"},(0,a.kt)("h2",{id:"v1alpha1"},"Version v1alpha1"),(0,a.kt)("h3",{id:"property-details-v1alpha1"},"Properties"),(0,a.kt)("div",{class:"property depth-0"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.apiVersion"},".apiVersion")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: ",(0,a.kt)("a",{href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources"},"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources"))))),(0,a.kt)("div",{class:"property depth-0"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.kind"},".kind")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: ",(0,a.kt)("a",{href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds"},"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds"))))),(0,a.kt)("div",{class:"property depth-0"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.metadata"},".metadata")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"object")))),(0,a.kt)("div",{class:"property depth-0"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.spec"},".spec")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"object")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"ConfigurationSpec defines the desired state of a terraform")))),(0,a.kt)("div",{class:"property depth-1"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.auth"},".spec.auth")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"object")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Auth is used to configure any options required when the source of the terraform module is private or requires credentials to retrieve. This could be SSH keys or git user/pass or AWS credentials for an s3 bucket.")))),(0,a.kt)("div",{class:"property depth-2"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.auth.name"},".spec.auth.name")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"name is unique within a namespace to reference a secret resource.")))),(0,a.kt)("div",{class:"property depth-2"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.auth.namespace"},".spec.auth.namespace")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"namespace defines the space within which the secret name must be unique.")))),(0,a.kt)("div",{class:"property depth-1"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.enableAutoApproval"},".spec.enableAutoApproval")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"boolean")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"EnableAutoApproval when enabled indicates the configuration does not need to be manually approved. On a change to the configuration, the controller will automatically approve the configuration. Note it still needs to adhere to any checks or policies.")))),(0,a.kt)("div",{class:"property depth-1"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.enableDriftDetection"},".spec.enableDriftDetection")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"boolean")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"EnableDriftDetection when enabled run periodic reconciliation configurations looking for any drift between the expected and current state. If any drift is detected the status is changed and a kubernetes event raised.")))),(0,a.kt)("div",{class:"property depth-1"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.module"},".spec.module")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string"),(0,a.kt)("span",{class:"property-required"},"Required")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Module is the URL to the source of the terraform module. The format of the URL is a direct implementation of terraform\u2019s module reference. Please see the following repository for more details ",(0,a.kt)("a",{href:"https://github.com/hashicorp/go-getter"},"https://github.com/hashicorp/go-getter"))))),(0,a.kt)("div",{class:"property depth-1"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.providerRef"},".spec.providerRef")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"object"),(0,a.kt)("span",{class:"property-required"},"Required")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"ProviderRef is the reference to the provider which should be used to execute this configuration.")))),(0,a.kt)("div",{class:"property depth-2"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.providerRef.name"},".spec.providerRef.name")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string"),(0,a.kt)("span",{class:"property-required"},"Required")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Name is the name of the provider which contains the credentials to use for this configuration.")))),(0,a.kt)("div",{class:"property depth-2"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.providerRef.namespace"},".spec.providerRef.namespace")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Namespace is the namespace of the provider itself.")))),(0,a.kt)("div",{class:"property depth-1"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.terraformVersion"},".spec.terraformVersion")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"TerraformVersion provides the ability to override the default terraform version. Before changing this field its best to consult with platform administrator. As the value of this field is used to change the tag of the terraform container image.")))),(0,a.kt)("div",{class:"property depth-1"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.valueFrom"},".spec.valueFrom")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"array")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"ValueFromSource is a collection of value from sources, where the source of the value is taken from a secret")))),(0,a.kt)("div",{class:"property depth-2"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.valueFrom[*]"},".spec.valueFrom[*]")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"object")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"ValueFromSource defines a value which is taken from a secret")))),(0,a.kt)("div",{class:"property depth-3"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.valueFrom[*].context"},".spec.valueFrom[*].context")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Context is the context is the name of the terraform context where the value should be retrieved from")))),(0,a.kt)("div",{class:"property depth-3"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.valueFrom[*].key"},".spec.valueFrom[*].key")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string"),(0,a.kt)("span",{class:"property-required"},"Required")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Key is the key in the secret which we should used for the value")))),(0,a.kt)("div",{class:"property depth-3"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.valueFrom[*].name"},".spec.valueFrom[*].name")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Name is the name which we use when injecting the value into the terraform code i.e. the secret maye contain data.DB_HOST but you call this database_hostname. Note, for backwards compatiability if no name is provided, we using the key at the name")))),(0,a.kt)("div",{class:"property depth-3"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.valueFrom[*].optional"},".spec.valueFrom[*].optional")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"boolean")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Optional indicates the secret can be optional, i.e if the secret does not exist, or the key is not contained in the secret, we ignore the error")))),(0,a.kt)("div",{class:"property depth-3"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.valueFrom[*].secret"},".spec.valueFrom[*].secret")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Secret is the name of the secret in the configuration namespace")))),(0,a.kt)("div",{class:"property depth-1"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.variables"},".spec.variables")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"object")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Variables provides the inputs for the terraform module itself. These are passed to the terraform executor and used to execute the plan, apply and destroy phases.")))),(0,a.kt)("div",{class:"property depth-1"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.writeConnectionSecretToRef"},".spec.writeConnectionSecretToRef")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"object")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"WriteConnectionSecretToRef is the name for a secret. On execution of the terraform module any module outputs are written to this secret. The outputs are automatically uppercased and ready to be consumed as environment variables. WriteConnectionSecretRef is the secret where the terraform outputs will be written.")))),(0,a.kt)("div",{class:"property depth-2"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.writeConnectionSecretToRef.keys"},".spec.writeConnectionSecretToRef.keys")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"array")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Keys is a collection of name used to filter the terraform output. By default all keys from the output of the terraform state are written to the connection secret. Here we can define exactly which keys we want from that output.")))),(0,a.kt)("div",{class:"property depth-3"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.writeConnectionSecretToRef.keys[*]"},".spec.writeConnectionSecretToRef.keys[*]")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string")))),(0,a.kt)("div",{class:"property depth-2"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.writeConnectionSecretToRef.name"},".spec.writeConnectionSecretToRef.name")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string"),(0,a.kt)("span",{class:"property-required"},"Required")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Name is the of the secret where you want to the terraform output to be written. The terraform outputs will be written to the secret as a key value pair. All are uppercased can read to be consumed by the workload.")))),(0,a.kt)("div",{class:"property depth-0"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status"},".status")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"object")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"ConfigurationStatus defines the observed state of a terraform")))),(0,a.kt)("div",{class:"property depth-1"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status.conditions"},".status.conditions")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"array")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Conditions represents the observations of the resource\u2019s current state.")))),(0,a.kt)("div",{class:"property depth-2"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status.conditions[*]"},".status.conditions[*]")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"object")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Condition is the current observed condition of some aspect of a resource")))),(0,a.kt)("div",{class:"property depth-3"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status.conditions[*].detail"},".status.conditions[*].detail")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Detail is any additional human-readable detail to understand this condition, for example, the full underlying error which caused an issue")))),(0,a.kt)("div",{class:"property depth-3"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status.conditions[*].lastTransitionTime"},".status.conditions[*].lastTransitionTime")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"LastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.")))),(0,a.kt)("div",{class:"property depth-3"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status.conditions[*].message"},".status.conditions[*].message")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Message is a human readable message indicating details about the transition. This may be an empty string.")))),(0,a.kt)("div",{class:"property depth-3"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status.conditions[*].name"},".status.conditions[*].name")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string"),(0,a.kt)("span",{class:"property-required"},"Required")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Name is a human-readable name for this condition.")))),(0,a.kt)("div",{class:"property depth-3"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status.conditions[*].observedGeneration"},".status.conditions[*].observedGeneration")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"integer")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"ObservedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.")))),(0,a.kt)("div",{class:"property depth-3"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status.conditions[*].reason"},".status.conditions[*].reason")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string"),(0,a.kt)("span",{class:"property-required"},"Required")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Reason contains a programmatic identifier indicating the reason for the condition\u2019s last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.")))),(0,a.kt)("div",{class:"property depth-3"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status.conditions[*].status"},".status.conditions[*].status")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string"),(0,a.kt)("span",{class:"property-required"},"Required")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Status of the condition, one of True, False, Unknown.")))),(0,a.kt)("div",{class:"property depth-3"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status.conditions[*].type"},".status.conditions[*].type")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string"),(0,a.kt)("span",{class:"property-required"},"Required")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Type of condition in CamelCase or in foo.example.com/CamelCase. \u2014 Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)")))),(0,a.kt)("div",{class:"property depth-1"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status.costs"},".status.costs")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"object")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Costs is the predicted costs of this configuration. Note this field is only populated when the integration has been configured by the administrator.")))),(0,a.kt)("div",{class:"property depth-2"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status.costs.enabled"},".status.costs.enabled")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"boolean")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Enabled indicates if the cost integration was enabled when this configuration was last executed.")))),(0,a.kt)("div",{class:"property depth-2"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status.costs.hourly"},".status.costs.hourly")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Hourly is the hourly estimated cost of the configuration")))),(0,a.kt)("div",{class:"property depth-2"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status.costs.monthly"},".status.costs.monthly")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Monthly is the monthly estimated cost of the configuration")))),(0,a.kt)("div",{class:"property depth-1"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status.driftTimestamp"},".status.driftTimestamp")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"DriftTimestamp is the timestamp of the last drift detection")))),(0,a.kt)("div",{class:"property depth-1"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status.lastReconcile"},".status.lastReconcile")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"object")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"LastReconcile describes the generation and time of the last reconciliation")))),(0,a.kt)("div",{class:"property depth-2"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status.lastReconcile.generation"},".status.lastReconcile.generation")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"integer")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Generation is the generation reconciled on the last reconciliation")))),(0,a.kt)("div",{class:"property depth-2"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status.lastReconcile.time"},".status.lastReconcile.time")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Time is the last time the resource was reconciled")))),(0,a.kt)("div",{class:"property depth-1"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status.lastSuccess"},".status.lastSuccess")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"object")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"LastSuccess descibes the generation and time of the last reconciliation which resulted in a Success status")))),(0,a.kt)("div",{class:"property depth-2"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status.lastSuccess.generation"},".status.lastSuccess.generation")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"integer")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Generation is the generation reconciled on the last reconciliation")))),(0,a.kt)("div",{class:"property depth-2"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status.lastSuccess.time"},".status.lastSuccess.time")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Time is the last time the resource was reconciled")))),(0,a.kt)("div",{class:"property depth-1"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status.resourceStatus"},".status.resourceStatus")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"ResourceStatus indicates the status of the resources and if the resources are insync with the configuration")))),(0,a.kt)("div",{class:"property depth-1"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status.resources"},".status.resources")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"integer")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"Resources is the number of managed cloud resources which are currently under management. This field is taken from the terraform state itself.")))),(0,a.kt)("div",{class:"property depth-1"},(0,a.kt)("div",{class:"property-header"},(0,a.kt)("h3",{class:"property-path",id:"v1alpha1-.status.terraformVersion"},".status.terraformVersion")),(0,a.kt)("div",{class:"property-body"},(0,a.kt)("div",{class:"property-meta"},(0,a.kt)("span",{class:"property-type"},"string")),(0,a.kt)("div",{class:"property-description"},(0,a.kt)("p",null,"TerraformVersion is the version of terraform which was last used to run this configuration"))))))}d.isMDXComponent=!0}}]);
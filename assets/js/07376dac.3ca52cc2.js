"use strict";(self.webpackChunkterraform_controller_docs=self.webpackChunkterraform_controller_docs||[]).push([[821],{3905:function(e,t,s){s.d(t,{Zo:function(){return l},kt:function(){return h}});var r=s(7294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function p(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?p(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,r,a=function(e,t){if(null==e)return{};var s,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)s=p[r],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)s=p[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var c=r.createContext({}),n=function(e){var t=r.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},l=function(e){var t=n(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var s=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),y=n(s),h=a,k=y["".concat(c,".").concat(h)]||y[h]||d[h]||p;return s?r.createElement(k,o(o({ref:t},l),{},{components:s})):r.createElement(k,o({ref:t},l))}));function h(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=s.length,o=new Array(p);o[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var n=2;n<p;n++)o[n]=s[n];return r.createElement.apply(null,o)}return r.createElement.apply(null,s)}y.displayName="MDXCreateElement"},1100:function(e,t,s){s.r(t),s.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return n},toc:function(){return d}});var r=s(7462),a=s(3366),p=(s(7294),s(3905)),o=["components"],i={title:"providers.terraform.appvia.io",linkTitle:"Provider",sidebar_position:1},c="Provider",n={unversionedId:"reference/providers.terraform.appvia.io",id:"reference/providers.terraform.appvia.io",title:"providers.terraform.appvia.io",description:"Provider is the schema for provider definitions in terraform controller",source:"@site/docs/terraform-controller/reference/providers.terraform.appvia.io.md",sourceDirName:"reference",slug:"/reference/providers.terraform.appvia.io",permalink:"/terraform-controller/reference/providers.terraform.appvia.io",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terraform-controller/reference/providers.terraform.appvia.io.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1653502442,formattedLastUpdatedAt:"5/25/2022",sidebarPosition:1,frontMatter:{title:"providers.terraform.appvia.io",linkTitle:"Provider",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"policies.terraform.appvia.io",permalink:"/terraform-controller/reference/policies.terraform.appvia.io"}},l={},d=[],y={toc:d};function h(e){var t=e.components,s=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},y,s,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"provider"},"Provider"),(0,p.kt)("p",{class:"crd-description"},"Provider is the schema for provider definitions in terraform controller"),(0,p.kt)("dl",{class:"crd-meta"},(0,p.kt)("dt",{class:"fullname"},"Full name:"),(0,p.kt)("dd",{class:"fullname"},"providers.terraform.appvia.io"),(0,p.kt)("dt",{class:"groupname"},"Group:"),(0,p.kt)("dd",{class:"groupname"},"terraform.appvia.io"),(0,p.kt)("dt",{class:"singularname"},"Singular name:"),(0,p.kt)("dd",{class:"singularname"},"provider"),(0,p.kt)("dt",{class:"pluralname"},"Plural name:"),(0,p.kt)("dd",{class:"pluralname"},"providers"),(0,p.kt)("dt",{class:"scope"},"Scope:"),(0,p.kt)("dd",{class:"scope"},"Namespaced"),(0,p.kt)("dt",{class:"versions"},"Versions:"),(0,p.kt)("dd",{class:"versions"},(0,p.kt)("a",{class:"version",href:"#v1alpha1",title:"Show schema for version v1alpha1"},"v1alpha1"))),(0,p.kt)("div",{class:"crd-schema-version"},(0,p.kt)("h2",{id:"v1alpha1"},"Version v1alpha1"),(0,p.kt)("h3",{id:"property-details-v1alpha1"},"Properties"),(0,p.kt)("div",{class:"property depth-0"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.apiVersion"},".apiVersion")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"string")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: ",(0,p.kt)("a",{href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources"},"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources"))))),(0,p.kt)("div",{class:"property depth-0"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.kind"},".kind")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"string")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: ",(0,p.kt)("a",{href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds"},"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds"))))),(0,p.kt)("div",{class:"property depth-0"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.metadata"},".metadata")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"object")))),(0,p.kt)("div",{class:"property depth-0"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.spec"},".spec")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"object")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"ProviderSpec defines the desired state of a provider")))),(0,p.kt)("div",{class:"property depth-1"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.provider"},".spec.provider")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"string"),(0,p.kt)("span",{class:"property-required"},"Required")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"ProviderType defines the cloud provider which is being used, currently supported providers are aws, google or azurerm.")))),(0,p.kt)("div",{class:"property depth-1"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.secretRef"},".spec.secretRef")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"object")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"SecretRef is a reference to a kubernetes secret. This is required only when using the source: secret. The secret should include the environment variables required to by the terraform provider.")))),(0,p.kt)("div",{class:"property depth-2"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.secretRef.name"},".spec.secretRef.name")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"string")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"Name is unique within a namespace to reference a secret resource.")))),(0,p.kt)("div",{class:"property depth-2"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.secretRef.namespace"},".spec.secretRef.namespace")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"string")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"Namespace defines the space within which the secret name must be unique.")))),(0,p.kt)("div",{class:"property depth-1"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.selector"},".spec.selector")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"object")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"Selector provider the ability to filter who can use this provider. If empty, all users in the cluster is permitted to use the provider. Otherrise you can specify a selector which can use namespace and resource labels")))),(0,p.kt)("div",{class:"property depth-2"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.selector.namespace"},".spec.selector.namespace")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"object")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"Namespace is used to filter a configuration based on the namespace labels of where it exists")))),(0,p.kt)("div",{class:"property depth-3"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.selector.namespace.matchExpressions"},".spec.selector.namespace.matchExpressions")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"array")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"matchExpressions is a list of label selector requirements. The requirements are ANDed.")))),(0,p.kt)("div",{class:"property depth-4"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.selector.namespace.matchExpressions[*]"},".spec.selector.namespace.matchExpressions[*]")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"object")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.")))),(0,p.kt)("div",{class:"property depth-5"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.selector.namespace.matchExpressions[*].key"},".spec.selector.namespace.matchExpressions[*].key")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"string"),(0,p.kt)("span",{class:"property-required"},"Required")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"key is the label key that the selector applies to.")))),(0,p.kt)("div",{class:"property depth-5"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.selector.namespace.matchExpressions[*].operator"},".spec.selector.namespace.matchExpressions[*].operator")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"string"),(0,p.kt)("span",{class:"property-required"},"Required")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"operator represents a key\u2019s relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.")))),(0,p.kt)("div",{class:"property depth-5"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.selector.namespace.matchExpressions[*].values"},".spec.selector.namespace.matchExpressions[*].values")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"array")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.")))),(0,p.kt)("div",{class:"property depth-6"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.selector.namespace.matchExpressions[*].values[*]"},".spec.selector.namespace.matchExpressions[*].values[*]")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"string")))),(0,p.kt)("div",{class:"property depth-3"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.selector.namespace.matchLabels"},".spec.selector.namespace.matchLabels")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"object")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is \u201ckey\u201d, the operator is \u201cIn\u201d, and the values array contains only \u201cvalue\u201d. The requirements are ANDed.")))),(0,p.kt)("div",{class:"property depth-2"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.selector.resource"},".spec.selector.resource")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"object")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"Resource provides the ability to filter a configuration based on it\u2019s labels")))),(0,p.kt)("div",{class:"property depth-3"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.selector.resource.matchExpressions"},".spec.selector.resource.matchExpressions")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"array")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"matchExpressions is a list of label selector requirements. The requirements are ANDed.")))),(0,p.kt)("div",{class:"property depth-4"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.selector.resource.matchExpressions[*]"},".spec.selector.resource.matchExpressions[*]")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"object")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.")))),(0,p.kt)("div",{class:"property depth-5"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.selector.resource.matchExpressions[*].key"},".spec.selector.resource.matchExpressions[*].key")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"string"),(0,p.kt)("span",{class:"property-required"},"Required")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"key is the label key that the selector applies to.")))),(0,p.kt)("div",{class:"property depth-5"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.selector.resource.matchExpressions[*].operator"},".spec.selector.resource.matchExpressions[*].operator")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"string"),(0,p.kt)("span",{class:"property-required"},"Required")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"operator represents a key\u2019s relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.")))),(0,p.kt)("div",{class:"property depth-5"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.selector.resource.matchExpressions[*].values"},".spec.selector.resource.matchExpressions[*].values")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"array")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.")))),(0,p.kt)("div",{class:"property depth-6"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.selector.resource.matchExpressions[*].values[*]"},".spec.selector.resource.matchExpressions[*].values[*]")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"string")))),(0,p.kt)("div",{class:"property depth-3"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.selector.resource.matchLabels"},".spec.selector.resource.matchLabels")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"object")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is \u201ckey\u201d, the operator is \u201cIn\u201d, and the values array contains only \u201cvalue\u201d. The requirements are ANDed.")))),(0,p.kt)("div",{class:"property depth-1"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.serviceAccount"},".spec.serviceAccount")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"string")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"ServiceAccount is the name of a service account to use when the provider source is \u2018injected\u2019. The service account should exist in the terraform controller namespace and be configure per cloud vendor requirements for pod identity.")))),(0,p.kt)("div",{class:"property depth-1"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.spec.source"},".spec.source")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"string"),(0,p.kt)("span",{class:"property-required"},"Required")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"Source defines the type of credentials the provider is wrapper, this could be wrapping a static secret or using a managed identity. The currently supported values are secret and injected.")))),(0,p.kt)("div",{class:"property depth-0"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.status"},".status")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"object")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"ProviderStatus defines the observed state of a provider")))),(0,p.kt)("div",{class:"property depth-1"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.status.conditions"},".status.conditions")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"array")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"Conditions represents the observations of the resource\u2019s current state.")))),(0,p.kt)("div",{class:"property depth-2"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.status.conditions[*]"},".status.conditions[*]")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"object")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"Condition is the current observed condition of some aspect of a resource")))),(0,p.kt)("div",{class:"property depth-3"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.status.conditions[*].detail"},".status.conditions[*].detail")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"string")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"Detail is any additional human-readable detail to understand this condition, for example, the full underlying error which caused an issue")))),(0,p.kt)("div",{class:"property depth-3"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.status.conditions[*].lastTransitionTime"},".status.conditions[*].lastTransitionTime")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"string")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"LastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.")))),(0,p.kt)("div",{class:"property depth-3"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.status.conditions[*].message"},".status.conditions[*].message")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"string")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"Message is a human readable message indicating details about the transition. This may be an empty string.")))),(0,p.kt)("div",{class:"property depth-3"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.status.conditions[*].name"},".status.conditions[*].name")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"string"),(0,p.kt)("span",{class:"property-required"},"Required")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"Name is a human-readable name for this condition.")))),(0,p.kt)("div",{class:"property depth-3"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.status.conditions[*].observedGeneration"},".status.conditions[*].observedGeneration")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"integer")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"ObservedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.")))),(0,p.kt)("div",{class:"property depth-3"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.status.conditions[*].reason"},".status.conditions[*].reason")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"string"),(0,p.kt)("span",{class:"property-required"},"Required")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"Reason contains a programmatic identifier indicating the reason for the condition\u2019s last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.")))),(0,p.kt)("div",{class:"property depth-3"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.status.conditions[*].status"},".status.conditions[*].status")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"string"),(0,p.kt)("span",{class:"property-required"},"Required")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"Status of the condition, one of True, False, Unknown.")))),(0,p.kt)("div",{class:"property depth-3"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.status.conditions[*].type"},".status.conditions[*].type")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"string"),(0,p.kt)("span",{class:"property-required"},"Required")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"Type of condition in CamelCase or in foo.example.com/CamelCase. \u2014 Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)")))),(0,p.kt)("div",{class:"property depth-1"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.status.lastReconcile"},".status.lastReconcile")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"object")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"LastReconcile describes the generation and time of the last reconciliation")))),(0,p.kt)("div",{class:"property depth-2"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.status.lastReconcile.generation"},".status.lastReconcile.generation")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"integer")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"Generation is the generation reconciled on the last reconciliation")))),(0,p.kt)("div",{class:"property depth-2"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.status.lastReconcile.time"},".status.lastReconcile.time")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"string")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"Time is the last time the resource was reconciled")))),(0,p.kt)("div",{class:"property depth-1"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.status.lastSuccess"},".status.lastSuccess")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"object")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"LastSuccess descibes the generation and time of the last reconciliation which resulted in a Success status")))),(0,p.kt)("div",{class:"property depth-2"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.status.lastSuccess.generation"},".status.lastSuccess.generation")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"integer")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"Generation is the generation reconciled on the last reconciliation")))),(0,p.kt)("div",{class:"property depth-2"},(0,p.kt)("div",{class:"property-header"},(0,p.kt)("h3",{class:"property-path",id:"v1alpha1-.status.lastSuccess.time"},".status.lastSuccess.time")),(0,p.kt)("div",{class:"property-body"},(0,p.kt)("div",{class:"property-meta"},(0,p.kt)("span",{class:"property-type"},"string")),(0,p.kt)("div",{class:"property-description"},(0,p.kt)("p",null,"Time is the last time the resource was reconciled"))))))}h.isMDXComponent=!0}}]);
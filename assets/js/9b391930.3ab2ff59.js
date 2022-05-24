"use strict";(self.webpackChunkterraform_controller_docs=self.webpackChunkterraform_controller_docs||[]).push([[975],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4260:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),s=["components"],i={sidebar_position:3,title:"Frequently Asked Questions"},l="Frequently Asked Questions (FAQs)",u={unversionedId:"faqs",id:"faqs",title:"Frequently Asked Questions",description:"How does it work?",source:"@site/docs/tf2helm/faqs.md",sourceDirName:".",slug:"/faqs",permalink:"/tf2helm/faqs",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/tf2helm/faqs.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1653396612,formattedLastUpdatedAt:"5/24/2022",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Frequently Asked Questions"},sidebar:"tutorialSidebar",previous:{title:"Creating Helm Packages",permalink:"/tf2helm/create-your-own-packages"}},c={},p=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"What are the benefits to this approach?",id:"what-are-the-benefits-to-this-approach",level:2},{value:"What if my cloud resource depends on another?",id:"what-if-my-cloud-resource-depends-on-another",level:2},{value:"How is the state managed?",id:"how-is-the-state-managed",level:2},{value:"How does this compare to other similar tools?",id:"how-does-this-compare-to-other-similar-tools",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"frequently-asked-questions-faqs"},"Frequently Asked Questions (FAQs)"),(0,o.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("p",null,"The solution leverages ",(0,o.kt)("a",{parentName:"p",href:"https://www.terraform.io/"},"Terraform")," and ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," to create a Kubernetes Custom Resource Definition (CRD) Object watched and understood by the ",(0,o.kt)("a",{parentName:"p",href:"/terraform-controller"},"Appvia Terraform Controller"),", which then triggers a workflow that applies a referenced Terraform module. We have aligned these CRD objects to cloud resources that Kubernetes workloads often depend on, and published them to ",(0,o.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/search?ts_query_web=appvia"},"artifacthub.io"),". You can either choose one of them or create your own package."),(0,o.kt)("h2",{id:"what-are-the-benefits-to-this-approach"},"What are the benefits to this approach?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clear separation of concerns for infrastructure operators and application developers"),(0,o.kt)("li",{parentName:"ol"},"Developer self-service of consumable cloud resource packages with minimal user input"),(0,o.kt)("li",{parentName:"ol"},"Leverages Helm as a package manager and its rich ecosystem"),(0,o.kt)("li",{parentName:"ol"},"Leverages Terraform as the de facto tool for infrastructure provisioning")),(0,o.kt)("h2",{id:"what-if-my-cloud-resource-depends-on-another"},"What if my cloud resource depends on another?"),(0,o.kt)("p",null,"It is common for a cloud resource to depend on other cloud resources as input arguments when being provisioned. These arguments or cloud resource attributes can be retrieved by querying the cloud API or Terraform state."),(0,o.kt)("p",null,"Here are some possible ways to address this if you are creating your own package:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a Terraform module that creates and/or references the dependent cloud resources"),(0,o.kt)("li",{parentName:"ol"},"Create a Terraform module based on organisational boundaries which accepts user inputs and/or sensible default values as arguments  "),(0,o.kt)("li",{parentName:"ol"},"Create a Helm Chart that uses Helm Lookup function to query the Kubernetes API for Terraform outputs generated by dependent Helm Charts stored in a Kubernetes Secret")),(0,o.kt)("p",null,"Each ",(0,o.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/search?ts_query_web=appvia"},"appvia-community package")," represents a single cloud resource with some appropriate default parameters which follows the second option and allows consumers to add minimal input."),(0,o.kt)("h2",{id:"how-is-the-state-managed"},"How is the state managed?"),(0,o.kt)("p",null,"Terraform includes a built-in ",(0,o.kt)("a",{parentName:"p",href:"https://www.terraform.io/language/settings/backends"},"selection of backends")," which define where Terraform's state snapshots are stored. The Terraform Controller defaults to using the Kubernetes backend for storing and managing state."),(0,o.kt)("p",null,"Some key points surrounding the usage of the Kubernetes backend:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It supports state locking which means that Terraform will lock the state for all operations that write state"),(0,o.kt)("li",{parentName:"ul"},"It is limited by Kubernetes' maximum Secret size of 1MB, which must be considered when creating larger Terraform modules"),(0,o.kt)("li",{parentName:"ul"},"The Terraform Controller stores sensitive data as plaintext within Kubernetes Secrets")),(0,o.kt)("h2",{id:"how-does-this-compare-to-other-similar-tools"},"How does this compare to other similar tools?"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Key areas"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Terranetes"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Kubeform"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Crossplane"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Architecture"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/appvia/terraform-controller"},"Terraform Controller")," component has a single controller and single CRD referencing a Terraform module"),(0,o.kt)("td",{parentName:"tr",align:"left"},"One controller per cloud provider and one CRD per cloud resource"),(0,o.kt)("td",{parentName:"tr",align:"left"},"One controller per cloud provider and one CRD per cloud resource")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"State management"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Kubernetes etcd store"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Kubernetes etcd store"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Kubernetes etcd store")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Ease of use"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Simplified consumption of cloud resources with minimal user input"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Steep learning curve to understand cloud infrastructure and multiple CRDs"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Steep learning curve of cloud infrastructure, multiple CRDs and concepts")))))}m.isMDXComponent=!0}}]);
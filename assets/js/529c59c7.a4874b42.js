"use strict";(self.webpackChunkterraform_controller_docs=self.webpackChunkterraform_controller_docs||[]).push([[839],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return h}});var a=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(r),h=l,f=s["".concat(p,".").concat(h)]||s[h]||u[h]||o;return r?a.createElement(f,n(n({ref:t},m),{},{components:r})):a.createElement(f,n({ref:t},m))}));function h(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,n=new Array(o);n[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,n[1]=i;for(var c=2;c<o;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1995:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=r(7462),l=r(3366),o=(r(7294),r(3905)),n=["components"],i={sidebar_position:2},p="Releases",c={unversionedId:"releases",id:"releases",title:"Releases",description:"Release v0.1.2",source:"@site/docs/terraform-controller/releases.md",sourceDirName:".",slug:"/releases",permalink:"/terraform-controller/releases",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terraform-controller/releases.md",tags:[],version:"current",lastUpdatedBy:"Gigi Hanna",lastUpdatedAt:1653395683,formattedLastUpdatedAt:"5/24/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Terraform Controller",permalink:"/terraform-controller/"},next:{title:"Administration",permalink:"/terraform-controller/category/administration"}},m={},u=[{value:"Release v0.1.2",id:"release-v012",level:2},{value:"New Features",id:"new-features",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Documentation",id:"documentation",level:3},{value:"What&#39;s Changed",id:"whats-changed",level:3},{value:"Release v0.1.1",id:"release-v011",level:2},{value:"Features",id:"features",level:3},{value:"What&#39;s Changed",id:"whats-changed-1",level:3},{value:"Release v0.1.0",id:"release-v010",level:2},{value:"New Features",id:"new-features-1",level:3},{value:"Bug Fixes",id:"bug-fixes-1",level:3},{value:"What&#39;s Changed",id:"whats-changed-2",level:3}],s={toc:u};function h(e){var t=e.components,r=(0,l.Z)(e,n);return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"releases"},"Releases"),(0,o.kt)("h2",{id:"release-v012"},"Release v0.1.2"),(0,o.kt)("h3",{id:"new-features"},"New Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"RBAC Support"),":  Added support for RBAC on the Providers. This allows platform teams to specify a collection of selectors which are used to match namespace and resource labels to determine if the Configuration is permitted to use it. Click ",(0,o.kt)("a",{parentName:"li",href:"https://terraform-controller.appvia.io/admin/providers#configure-rbac-for-providers"},"here")," for full details ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/29"},"https://github.com/appvia/terraform-controller/pull/29")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Connection Secret Keys"),": added the ability for Configuration's to filter which keys from the terraform ouput they want to see in the connection secret. Click ",(0,o.kt)("a",{parentName:"li",href:"https://terraform-controller.appvia.io/admin/providers"},"here")," for details. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/34"},"https://github.com/appvia/terraform-controller/pull/34")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Kubernetes Events"),": crucial events were being recorded in the status conditions only. This change raises those same conditions as Kubernetes events themselves which can be used to trigger off notifications. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/31"},"https://github.com/appvia/terraform-controller/pull/31"))),(0,o.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed an issue where the service account from the provider was not correctly being set on the terraform ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/35"},"https://github.com/appvia/terraform-controller/pull/35"))),(0,o.kt)("h3",{id:"documentation"},"Documentation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added a additional docs on the types types ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/26"},"https://github.com/appvia/terraform-controller/pull/26")),(0,o.kt)("li",{parentName:"ul"},"Updated the repository readme ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/25"},"https://github.com/appvia/terraform-controller/pull/25"))),(0,o.kt)("h3",{id:"whats-changed"},"What's Changed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[DOCS]"," Updating the README by @gambol99 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/25"},"https://github.com/appvia/terraform-controller/pull/25")),(0,o.kt)("li",{parentName:"ul"},"[DOCS]"," Updating the API Documentation by @gambol99 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/26"},"https://github.com/appvia/terraform-controller/pull/26")),(0,o.kt)("li",{parentName:"ul"},"[CI]"," - E2E Workflow by @gambol99 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/33"},"https://github.com/appvia/terraform-controller/pull/33")),(0,o.kt)("li",{parentName:"ul"},"[BUGFIX]"," - Provider Service Accounts by @gambol99 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/35"},"https://github.com/appvia/terraform-controller/pull/35")),(0,o.kt)("li",{parentName:"ul"},"[DOCS]"," - Adding License File by @gambol99 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/38"},"https://github.com/appvia/terraform-controller/pull/38")),(0,o.kt)("li",{parentName:"ul"},"[CI]"," - Dependency Review by @gambol99 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/37"},"https://github.com/appvia/terraform-controller/pull/37")),(0,o.kt)("li",{parentName:"ul"},"[FEATURE]"," - Connection Secret Keys by @gambol99 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/34"},"https://github.com/appvia/terraform-controller/pull/34")),(0,o.kt)("li",{parentName:"ul"},"[FEATURE]"," - Kubernetes Events by @gambol99 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/31"},"https://github.com/appvia/terraform-controller/pull/31")),(0,o.kt)("li",{parentName:"ul"},"[FEATURE]"," - Provider RBAC by @gambol99 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/29"},"https://github.com/appvia/terraform-controller/pull/29")),(0,o.kt)("li",{parentName:"ul"},"[CI]"," - Dependency Check by @gambol99 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/44"},"https://github.com/appvia/terraform-controller/pull/44")),(0,o.kt)("li",{parentName:"ul"},"[RELEASE]"," - Version v0.1.2 by @gambol99 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/45"},"https://github.com/appvia/terraform-controller/pull/45"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/appvia/terraform-controller/compare/v0.1.1...v0.1.2"},"https://github.com/appvia/terraform-controller/compare/v0.1.1...v0.1.2")),(0,o.kt)("h2",{id:"release-v011"},"Release v0.1.1"),(0,o.kt)("h3",{id:"features"},"Features"),(0,o.kt)("p",null,"Introduced the ability for the platform administrators to enforce a security profile against the terraform modules."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-YAML"},"apiVersion: terraform.appvia.io/v1alpha1\nkind: Policy\nmetadata:\n  name: checkov\nspec:\n  constraints:\n    checkov:\n      # See: https://www.checkov.io/5.Policy%20Index/terraform.html\n      checks: []\n      # See: https://www.checkov.io/5.Policy%20Index/terraform.html\n      skipChecks: []\n")),(0,o.kt)("p",null,"Where necessary an exception can be added, targetting by namespace and resource labels; which will override the above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-YAML"},"---\n# Create an exception to the above policy and force configurations\n# in the specific namespace to use this instead\n---\napiVersion: terraform.appvia.io/v1alpha1\nkind: Policy\nmetadata:\n  name: checkov-override\nspec:\n  constraints:\n    checkov:\n      selector:\n        namespace:\n          matchExpressions:\n            - key: kubernetes.io/metadata.name\n              operator: In\n              values: [apps2]\n      # See: https://www.checkov.io/5.Policy%20Index/terraform.html\n      skipChecks:\n        - <NAME>\n")),(0,o.kt)("h3",{id:"whats-changed-1"},"What's Changed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[CI]"," - Fixing Github Workflow (Release) by @gambol99 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/18"},"https://github.com/appvia/terraform-controller/pull/18")),(0,o.kt)("li",{parentName:"ul"},"[BUGFIX]"," - Decreasing Backoff Limit by @gambol99 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/19"},"https://github.com/appvia/terraform-controller/pull/19")),(0,o.kt)("li",{parentName:"ul"},"[DOCS]"," - Development Readme by @gambol99 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/21"},"https://github.com/appvia/terraform-controller/pull/21")),(0,o.kt)("li",{parentName:"ul"},"[FIX]"," - Supported Providers by @gambol99 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/22"},"https://github.com/appvia/terraform-controller/pull/22")),(0,o.kt)("li",{parentName:"ul"},"[FEATURE]"," - Adding Checkov Security Policy by @gambol99 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/20"},"https://github.com/appvia/terraform-controller/pull/20")),(0,o.kt)("li",{parentName:"ul"},"Release v0.1.1 by @gambol99 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/23"},"https://github.com/appvia/terraform-controller/pull/23")),(0,o.kt)("li",{parentName:"ul"},"[CI]"," - Fixing the Release Step by @gambol99 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/24"},"https://github.com/appvia/terraform-controller/pull/24"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/appvia/terraform-controller/compare/v0.1.0...v0.1.1"},"https://github.com/appvia/terraform-controller/compare/v0.1.0...v0.1.1")),(0,o.kt)("h2",{id:"release-v010"},"Release v0.1.0"),(0,o.kt)("h3",{id:"new-features-1"},"New Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Changed to use multiple containers within a job rather then baking a executor with all the dependencies. This opens up the ability to change the versions, images and so forth."),(0,o.kt)("li",{parentName:"ul"},"Added the ability to specify the terraform version in the configuration"),(0,o.kt)("li",{parentName:"ul"},"Added the ability to override the job template completely for customization")),(0,o.kt)("h3",{id:"bug-fixes-1"},"Bug Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixes a helm chart which was recreating the ca secret")),(0,o.kt)("h3",{id:"whats-changed-2"},"What's Changed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[BUGFIX]"," - Autogenerate Certificate by @gambol99 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/12"},"https://github.com/appvia/terraform-controller/pull/12")),(0,o.kt)("li",{parentName:"ul"},"[DOCS]"," - Executor Docs by @gambol99 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/13"},"https://github.com/appvia/terraform-controller/pull/13")),(0,o.kt)("li",{parentName:"ul"},"Release v0.1.0 by @gambol99 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/10"},"https://github.com/appvia/terraform-controller/pull/10")),(0,o.kt)("li",{parentName:"ul"},"[CI]"," - Kind Installation by @gambol99 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/16"},"https://github.com/appvia/terraform-controller/pull/16")),(0,o.kt)("li",{parentName:"ul"},"[DOCS]"," - Adding Administrative Docs by @gambol99 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller/pull/17"},"https://github.com/appvia/terraform-controller/pull/17"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/appvia/terraform-controller/compare/v0.0.4...v0.1.0"},"https://github.com/appvia/terraform-controller/compare/v0.0.4...v0.1.0")))}h.isMDXComponent=!0}}]);
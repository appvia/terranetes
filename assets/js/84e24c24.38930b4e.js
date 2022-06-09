"use strict";(self.webpackChunkterraform_controller_docs=self.webpackChunkterraform_controller_docs||[]).push([[426],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2733:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:1},p="Using Private Repositories",s={unversionedId:"developer/private",id:"developer/private",title:"Using Private Repositories",description:"If the repository containing the terraform module is private and requires credentials to retrieve, you can add the authentication details to a secret held within the namespace.",source:"@site/docs/terraform-controller/developer/private.md",sourceDirName:"developer",slug:"/developer/private",permalink:"/terraform-controller/developer/private",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terraform-controller/developer/private.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1654793673,formattedLastUpdatedAt:"6/9/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Provisioning a Terraform Module",permalink:"/terraform-controller/developer/configuration"},next:{title:"Enabling Drift Protection",permalink:"/terraform-controller/developer/drift"}},c={},u=[{value:"What sources are supported?",id:"what-sources-are-supported",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-private-repositories"},"Using Private Repositories"),(0,o.kt)("p",null,"If the repository containing the terraform module is private and requires credentials to retrieve, you can add the authentication details to a secret held within the namespace."),(0,o.kt)("p",null,"Let's assume we have a terraform module hosted in a private Github repository. Here's how to add authentication details:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create an SSH deployment key for the repository with the ability to clone.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a Kubernetes secret in the namespace containing the SSH private key."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl -n apps create secret generic ssh --from-file=SSH_KEY_AUTH=id.rsa\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the Terraform module configuration resource, setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.auth.name: [NAME]")," to the name of the secret:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  auth:\n    name: ssh\n")))),(0,o.kt)("p",null,"The same process can be followed for GIT over HTTP; simply add ",(0,o.kt)("inlineCode",{parentName:"p"},"GIT_USERNAME")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GIT_PASSWORD")," to the secret."),(0,o.kt)("h2",{id:"what-sources-are-supported"},"What sources are supported?"),(0,o.kt)("p",null,"We use the same library as Terraform, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/go-getter"},"go-getter")," that supports:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Git"),(0,o.kt)("li",{parentName:"ul"},"Mercurial"),(0,o.kt)("li",{parentName:"ul"},"HTTP"),(0,o.kt)("li",{parentName:"ul"},"Amazon S3"),(0,o.kt)("li",{parentName:"ul"},"Google GCP")),(0,o.kt)("p",null,"For full details, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/go-getter"},"https://github.com/hashicorp/go-getter"),"."))}m.isMDXComponent=!0}}]);
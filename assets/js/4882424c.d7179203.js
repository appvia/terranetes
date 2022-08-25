"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[2713],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},57:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:2},i="Using Private Repositories",p={unversionedId:"developer/private",id:"developer/private",title:"Using Private Repositories",description:"If the repository containing the terraform module is private and requires credentials to retrieve, you can add the authentication details to a secret held within the namespace.",source:"@site/docs/terranetes-controller/developer/private.md",sourceDirName:"developer",slug:"/developer/private",permalink:"/terranetes-controller/developer/private",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/developer/private.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1661443475,formattedLastUpdatedAt:"Aug 25, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Terranetes CLI",permalink:"/terranetes-controller/developer/tnctl"},next:{title:"Enabling Drift Protection",permalink:"/terranetes-controller/developer/drift"}},l={},s=[{value:"What sources are supported?",id:"what-sources-are-supported",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"using-private-repositories"},"Using Private Repositories"),(0,n.kt)("p",null,"If the repository containing the terraform module is private and requires credentials to retrieve, you can add the authentication details to a secret held within the namespace."),(0,n.kt)("p",null,"Let's assume we have a terraform module hosted in a private Github repository. Here's how to add authentication details:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create an SSH deployment key for the repository with the ability to clone.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a Kubernetes secret in the namespace containing the SSH private key."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl -n apps create secret generic ssh --from-file=SSH_KEY_AUTH=id.rsa\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Update the Terraform module configuration resource, setting the ",(0,n.kt)("inlineCode",{parentName:"p"},"spec.auth.name: [NAME]")," to the name of the secret:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  auth:\n    name: ssh\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reference a git repository as the module source"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  module: git::ssh://git@github.com/ORG/REPOSITORY?ref=<TAG|BRANCH|COMMIT>\n")))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you need to extract a specific folder within the repository the syntax ",(0,n.kt)("inlineCode",{parentName:"p"},"git::ssh://git@github.com/ORG/REPOSITORY//PATH?ref=<TAG|BRANCH|COMMIT>"))),(0,n.kt)("p",null,"The same process can be followed for GIT over HTTP; simply add ",(0,n.kt)("inlineCode",{parentName:"p"},"GIT_USERNAME")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"GIT_PASSWORD")," to the secret."),(0,n.kt)("h2",{id:"what-sources-are-supported"},"What sources are supported?"),(0,n.kt)("p",null,"We use the same library as Terraform, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/go-getter"},"go-getter")," that supports:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Git"),(0,n.kt)("li",{parentName:"ul"},"Mercurial"),(0,n.kt)("li",{parentName:"ul"},"HTTP"),(0,n.kt)("li",{parentName:"ul"},"Amazon S3"),(0,n.kt)("li",{parentName:"ul"},"Google GCP")),(0,n.kt)("p",null,"For full details, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/go-getter"},"https://github.com/hashicorp/go-getter"),"."))}u.isMDXComponent=!0}}]);
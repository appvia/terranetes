"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[2713],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),h=n,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||i;return r?a.createElement(d,o(o({ref:t},c),{},{components:r})):a.createElement(d,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:2},o="Using Private Repositories",l={unversionedId:"developer/private",id:"developer/private",title:"Using Private Repositories",description:"If the repository containing the terraform module is private and requires credentials to retrieve, you can add the authentication details to a secret held within the namespace.",source:"@site/docs/terranetes-controller/developer/private.md",sourceDirName:"developer",slug:"/developer/private",permalink:"/terranetes-controller/developer/private",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/developer/private.md",tags:[],version:"current",lastUpdatedBy:"Alastair Hinde",lastUpdatedAt:1686579314,formattedLastUpdatedAt:"Jun 12, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Terranetes CLI",permalink:"/terranetes-controller/developer/tnctl"},next:{title:"Configuration Contexts",permalink:"/terranetes-controller/developer/contexts"}},p={},s=[{value:"Using SSH Authentication",id:"using-ssh-authentication",level:2},{value:"Using HTTP Authentication",id:"using-http-authentication",level:2},{value:"Using Token Authentication",id:"using-token-authentication",level:2},{value:"What sources are supported?",id:"what-sources-are-supported",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"using-private-repositories"},"Using Private Repositories"),(0,n.kt)("p",null,"If the repository containing the terraform module is private and requires credentials to retrieve, you can add the authentication details to a secret held within the namespace."),(0,n.kt)("h2",{id:"using-ssh-authentication"},"Using SSH Authentication"),(0,n.kt)("p",null,"Let's assume we have a terraform module hosted in a private Github repository. Here's how to add authentication details:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create an SSH deployment key for the repository with the ability to clone.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a Kubernetes secret in the namespace containing the SSH private key."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl -n apps create secret generic ssh --from-file=SSH_KEY_AUTH=id.rsa\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Update the Terraform module configuration resource, setting the ",(0,n.kt)("inlineCode",{parentName:"p"},"spec.auth.name: [NAME]")," to the name of the secret:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  auth:\n    name: ssh\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reference a git repository as the module source"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  module: git::ssh://git@github.com/ORG/REPOSITORY?ref=<TAG|BRANCH|COMMIT>\n")))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you need to extract a specific folder within the repository the syntax ",(0,n.kt)("inlineCode",{parentName:"p"},"git::ssh://git@github.com/ORG/REPOSITORY//PATH?ref=<TAG|BRANCH|COMMIT>"))),(0,n.kt)("h2",{id:"using-http-authentication"},"Using HTTP Authentication"),(0,n.kt)("p",null,"Similar to the above, create a Kubernetes secret like so"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a Kubernetes secret containing the username and password"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl -n app create secret generic httpauth --from-literal=GIT_USERNAME=USERNAME --from-literal=GIT_PASSWORD=PASSWORD\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Update the ",(0,n.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configuration")," to include the authentication reference"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  auth:\n    name: httpauth\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reference the terraform module using http"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  module: https://git@github.com/ORG/REPOSITORY?ref=<TAG|BRANCH|COMMIT>\n")))),(0,n.kt)("h2",{id:"using-token-authentication"},"Using Token Authentication"),(0,n.kt)("p",null,"Use the same process as above, creating a Kubernetes secret ",(0,n.kt)("inlineCode",{parentName:"p"},"TOKEN")),(0,n.kt)("h2",{id:"what-sources-are-supported"},"What sources are supported?"),(0,n.kt)("p",null,"We use the same library as Terraform, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/go-getter"},"go-getter")," that supports:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Git"),(0,n.kt)("li",{parentName:"ul"},"Mercurial"),(0,n.kt)("li",{parentName:"ul"},"HTTP"),(0,n.kt)("li",{parentName:"ul"},"Amazon S3"),(0,n.kt)("li",{parentName:"ul"},"Google GCP")),(0,n.kt)("p",null,"For full details, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/go-getter"},"https://github.com/hashicorp/go-getter"),"."))}u.isMDXComponent=!0}}]);
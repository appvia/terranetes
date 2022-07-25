"use strict";(self.webpackChunkterraform_controller_docs=self.webpackChunkterraform_controller_docs||[]).push([[8654],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1781:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:100},s="Additional Secrets",l={unversionedId:"admin/secrets",id:"admin/secrets",title:"Additional Secrets",description:"The controller supports the ability to inject additional secrets into the terraform execution. A common use case to provide additional credentials, api tokens or custom configuration into the jobs.",source:"@site/docs/terranetes-controller/admin/secrets.md",sourceDirName:"admin",slug:"/admin/secrets",permalink:"/terranetes-controller/admin/secrets",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/admin/secrets.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1658753918,formattedLastUpdatedAt:"7/25/2022",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Customize Job Template",permalink:"/terranetes-controller/admin/template"},next:{title:"Developer Docs",permalink:"/terranetes-controller/category/developer-docs"}},d={},p=[{value:"Adding a custom secret",id:"adding-a-custom-secret",level:2}],u={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"additional-secrets"},"Additional Secrets"),(0,a.kt)("p",null,"The controller supports the ability to inject additional secrets into the terraform execution. A common use case to provide additional credentials, api tokens or custom configuration into the jobs."),(0,a.kt)("p",null,"The platform team must create the Kubernetes secrets ahead of time, which are referenced on the command line of the controller."),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"These secrets are added to all jobs so be prudent when using this feature. This intention is to add the feature on to ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/providers.terraform.appvia.io"},"Providers")," CRD to make it fine grained."))),(0,a.kt)("h2",{id:"adding-a-custom-secret"},"Adding a custom secret"),(0,a.kt)("p",null,"Update your Helm chart values to include the following. The secrets must exist in the controller namespace and contain environment variable i.e. uppercases key/values, as the secrets are sourced into the jobs via the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/#use-case-as-container-environment-variables"},"spec.envFrom")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"controller:\n  # A collection of secret names which exist the controller namespace\n  executorSecrets:\n    - NAME\n")),(0,a.kt)("p",null,"Alternatively if you are not using the Helm chart, update the deployment yaml to include the ",(0,a.kt)("inlineCode",{parentName:"p"},"--executor-secret")," flags."))}m.isMDXComponent=!0}}]);
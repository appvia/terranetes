/*! For license information please see c4f5d8e4.c36043ba.js.LICENSE.txt */
(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[2634],{2555:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>M});var t=a(6540),n=a(6942),s=a.n(n);const o={container:"container_bfhl",row:"row_Kb3D",h1:"h1_SKUt",spacer:"spacer_hnjC",hero:"hero_aEcG",heroContainer:"heroContainer_i2aB",heroBefore:"heroBefore_Nccm",heroAfter:"heroAfter_rddx",heroSpaceContainer:"heroSpaceContainer_t73L",heroSpace:"heroSpace_ncXm",heroPackage:"heroPackage_2PmF",heroPackage2:"heroPackage2_lEQ4",heroImage:"heroImage_xZN7",heroSubtitle:"heroSubtitle_jFu1",commandContainer:"commandContainer_y6dw",productLogos:"productLogos_IN_s",cardContainer:"cardContainer_z0Sh",card:"card_M5pr",cardSide:"cardSide_Y6jR",cardLeading:"cardLeading_NK6F",cardImage:"cardImage_DTfg",cardSpacer:"cardSpacer_TH73"};var i=a(7823),l=a(8774),c=a(5293),u=a(4586),d=a(1312),m=a(1432),g=a(4164),p=a(3104),h=a(6347),f=a(205),v=a(7485),b=a(1682),x=a(679);function T(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function j(e){const{values:r,children:a}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return T(e).map((e=>{let{props:{value:r,label:a,attributes:t,default:n}}=e;return{value:r,label:a,attributes:t,default:n}}))}(a);return function(e){const r=(0,b.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,a])}function y(e){let{value:r,tabValues:a}=e;return a.some((e=>e.value===r))}function k(e){let{queryString:r=!1,groupId:a}=e;const n=(0,h.W6)(),s=function(e){let{queryString:r=!1,groupId:a}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:r,groupId:a});return[(0,v.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(n.location.search);r.set(s,e),n.replace({...n.location,search:r.toString()})}),[s,n])]}function S(e){const{defaultValue:r,queryString:a=!1,groupId:n}=e,s=j(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!y({value:r,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[l,c]=k({queryString:a,groupId:n}),[u,d]=function(e){let{groupId:r}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,s]=(0,x.Dv)(a);return[n,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),m=(()=>{const e=l??u;return y({value:e,tabValues:s})?e:null})();(0,f.A)((()=>{m&&i(m)}),[m]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!y({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),d(e)}),[c,d,s]),tabValues:s}}var w=a(2303);const N="tabList__CuJ",_="tabItem_LNqP";var C=a(4848);function A(e){let{className:r,block:a,selectedValue:t,selectValue:n,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,p.a_)(),l=e=>{const r=e.currentTarget,a=o.indexOf(r),l=s[a].value;l!==t&&(i(r),n(l))},c=e=>{let r=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;r=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;r=o[a]??o[o.length-1];break}}r?.focus()};return(0,C.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,g.A)("tabs",{"tabs--block":a},r),children:s.map((e=>{let{value:r,label:a,attributes:n}=e;return(0,C.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>o.push(e),onKeyDown:c,onClick:l,...n,className:(0,g.A)("tabs__item",_,n?.className,{"tabs__item--active":t===r}),children:a??r},r)}))})}function I(e){let{lazy:r,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:(0,g.A)("margin-top--md",e.props.className)}):null}return(0,C.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function E(e){const r=S(e);return(0,C.jsxs)("div",{className:(0,g.A)("tabs-container",N),children:[(0,C.jsx)(A,{...r,...e}),(0,C.jsx)(I,{...r,...e})]})}function L(e){const r=(0,w.A)();return(0,C.jsx)(E,{...e,children:T(e.children)},String(r))}const V="tabItem_Ymn6";function P(e){let{children:r,hidden:a,className:t}=e;return(0,C.jsx)("div",{role:"tabpanel",className:(0,g.A)(V,t),hidden:a,children:r})}const D=()=>(0,C.jsx)(L,{children:(0,C.jsx)(P,{value:"Helm",children:(0,C.jsxs)(m.A,{className:"language-shell",children:["$ helm repo add appvia https://terranetes-controller.appvia.io",(0,C.jsx)("br",{}),"$ helm repo update",(0,C.jsx)("br",{}),"$ helm install -n terraform-system terranetes-controller appvia/terranetes-controller --create-namespace",(0,C.jsx)("br",{})]})})});function q(){const e=[{label:(0,d.T)({message:"Self Service"}),description:(0,d.T)({message:"Enable Developers to get the Cloud resources they need immediately, without going through external teams"}),link:"/terranetes-controller/developer/provision",linkText:(0,d.T)({message:"Learn More"}),imageUrl:"img/index/features/self-service.svg"},{label:(0,d.T)({message:"Security"}),description:(0,d.T)({message:"Protect Cloud Credentials and enforce Checkov policies on Cloud resource configuration"}),link:"/terranetes-controller/category/administration",linkText:(0,d.T)({message:"Learn More"}),imageUrl:"img/index/features/security.svg"},{label:(0,d.T)({message:"Simplicity"}),description:(0,d.T)({message:"Keep the Terraform Configuration simple to use and easily consume existing modules"}),link:"/terranetes-controller/developer/tnctl",linkText:(0,d.T)({message:"Learn More"}),imageUrl:"img/index/features/simplicity.svg"},{label:(0,d.T)({message:"Cost Estimates"}),description:(0,d.T)({message:"Directly see cost estimates for your Terraform Plan runs prior to creating the resources"}),link:"/terranetes-controller/admin/costs",linkText:(0,d.T)({message:"Learn More"}),imageUrl:"img/index/features/cost-estimates.svg"},{label:(0,d.T)({message:"Approval Workflows"}),description:(0,d.T)({message:"Approve changes before application, supporting Terraform Plan and Apply workflows"}),link:"/terranetes-controller/developer/provision/#approving-a-plan",linkText:(0,d.T)({message:"Learn More"}),imageUrl:"img/index/features/approval-workflows.svg"},{label:(0,d.T)({message:"Drift Detection"}),description:(0,d.T)({message:"Automatically detect any upstream changes in the cloud provider and ensure the Terraform State is inline with the resources it manages"}),link:"/terranetes-controller/developer/drift",linkText:(0,d.T)({message:"Learn More"}),imageUrl:"img/index/features/drift-detection.svg"},{label:(0,d.T)({message:"GitOps"}),description:(0,d.T)({message:"Leverage FluxCD as a Source for your Terraform Configuration resources"}),link:"/terranetes-controller/developer/flux",linkText:(0,d.T)({message:"Learn More"}),imageUrl:"img/index/features/gitops.svg"},{label:(0,d.T)({message:"Private Sources"}),description:(0,d.T)({message:"Enable the use and consumption of private repositories"}),link:"/terranetes-controller/developer/private",linkText:(0,d.T)({message:"Learn More"}),imageUrl:"img/index/features/private-sources.svg"}];return(0,C.jsx)("section",{className:s()(o.cardContainer),children:e.map(((e,r)=>(0,C.jsxs)("div",{className:s()(o.card,"card"),children:[(0,C.jsxs)("div",{className:s()(o.cardSide,o.cardLeading),children:[(0,C.jsx)("h2",{children:e.label}),(0,C.jsx)("p",{children:e.description}),(0,C.jsx)("div",{className:s()(o.cardSpacer)}),(0,C.jsx)(l.A,{className:"button button--primary",href:e.link,children:e.linkText})]}),(0,C.jsx)("div",{className:s()(o.cardSide,o.cardImage),children:(0,C.jsx)("img",{src:e.imageUrl})})]},r)))})}function U(){const{colorMode:e}=(0,c.G)(),[r,a]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{const e=[],r=(new Image).src="img/index/terranetes-dark.svg";e.push(r);const a=(new Image).src="img/index/terranetes-light.svg";e.push(a)}),[]),(0,t.useEffect)((()=>{a("dark"===e)}),[e]),(0,C.jsx)("img",{src:r?"/img/index/terranetes-dark.svg":"/img/index/terranetes-light.svg",height:"100",alt:"Appvia Terranetes Controller"})}function M(){const e=(0,u.A)();return(0,C.jsxs)(i.A,{title:`${e.siteConfig.tagline}`,description:(0,d.T)({message:"The terranetes controller manages the life-cycle of terraform resources defined and built inside Kubernetes."}),children:[(0,C.jsx)("header",{className:s()("hero",o.hero),children:(0,C.jsxs)("div",{className:s()(o.heroContainer),children:[(0,C.jsx)("span",{className:s()(o.heroImage),children:(0,C.jsx)(U,{})}),(0,C.jsxs)("div",{className:s()(o.heroSubtitle,"hero__subtitle"),children:[(0,C.jsx)(d.A,{children:"Enabling developers to securely self-serve"}),(0,C.jsx)("br",{}),(0,C.jsx)(d.A,{children:"Cloud dependencies in a controlled manner"})]}),(0,C.jsx)("div",{className:s()(o.commandContainer),children:(0,C.jsx)(D,{})}),(0,C.jsx)(l.A,{className:s()("button button--primary button--lg"),to:"/terranetes-controller/quick_start",children:(0,C.jsx)(d.A,{children:"Quick Start"})}),(0,C.jsx)("br",{}),(0,C.jsxs)("div",{className:s()(o.productLogos),children:[(0,C.jsx)("img",{className:s()(o.heroPackage),src:"/img/index/terraform.svg"}),(0,C.jsx)("img",{className:s()(o.heroPackage),src:"/img/index/kubernetes.svg"}),(0,C.jsx)("img",{className:s()(o.heroPackage),src:"/img/index/opentofu.svg"})]})]})}),(0,C.jsx)("main",{children:(0,C.jsx)("section",{className:"container",children:(0,C.jsx)("div",{className:s()(o.row),children:(0,C.jsx)(q,{})})})})]})}},6942:(e,r)=>{var a;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e="",r=0;r<arguments.length;r++){var a=arguments[r];a&&(e=o(e,s(a)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var a in e)t.call(e,a)&&e[a]&&(r=o(r,a));return r}function o(e,r){return r?e?e+" "+r:e+r:e}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(r,[]))||(e.exports=a)}()}}]);
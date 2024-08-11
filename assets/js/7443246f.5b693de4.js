"use strict";(self.webpackChunkdukedot_dev=self.webpackChunkdukedot_dev||[]).push([[2972],{6840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var r=n(5893),o=n(1151),s=n(2991);const c={id:"projects",title:"Projects",tags:["Category","Project"],sidebar_position:1,slug:"/projects"},i=void 0,a={id:"Projects/projects",title:"Projects",description:"This category contains all of my projects. This can include projects I'm no longer maintaining.",source:"@site/docs/Projects/index.mdx",sourceDirName:"Projects",slug:"/projects",permalink:"/projects",draft:!1,unlisted:!1,editUrl:"https://github.com/dukedotdev/dukedot.dev/edit/main/docs/Projects/index.mdx",tags:[{inline:!0,label:"Category",permalink:"/tags/category"},{inline:!0,label:"Project",permalink:"/tags/project"}],version:"current",sidebarPosition:1,frontMatter:{id:"projects",title:"Projects",tags:["Category","Project"],sidebar_position:1,slug:"/projects"},sidebar:"tutorialSidebar",previous:{title:"Steam",permalink:"/info/steam"},next:{title:"PAYDAY 3 Mods",permalink:"/projects/payday3mods"}},l={},u=[];function d(e){const t={p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This category contains all of my projects. This can include projects I'm no longer maintaining."}),"\n","\n",(0,r.jsx)(s.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},2991:(e,t,n)=>{n.d(t,{Z:()=>x});n(7294);var r=n(6905),o=n(9690),s=n(3692),c=n(8824),i=n(3919),a=n(5999),l=n(2503);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(5893);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(s.Z,{href:t,className:(0,r.Z)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:o,description:s}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.Z,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:o,children:[n," ",o]}),s&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e;const n=(0,o.LM)(t),r=function(){const{selectMessage:e}=(0,c.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.xz)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function j(e){let{className:t}=e;const n=(0,o.jA)();return(0,d.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(j,{...e});const s=(0,o.MN)(t);return(0,d.jsx)("section",{className:(0,r.Z)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},8824:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(7294),o=n(2263);const s=["zero","one","two","few","many","other"];function c(e){return s.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>c});var r=n(7294);const o={},s=r.createContext(o);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
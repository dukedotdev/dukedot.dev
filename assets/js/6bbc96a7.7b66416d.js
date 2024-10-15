"use strict";(self.webpackChunkdukedot_dev=self.webpackChunkdukedot_dev||[]).push([[648],{9923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=n(5893),o=n(1151),s=n(2991);const a={id:"payday3mods",title:"PAYDAY 3 Mods",tags:["Category","Project","PAYDAY 3","Mods"],sidebar_position:1,slug:"/projects/payday3mods"},i=void 0,c={id:"Projects/Payday3Mods/payday3mods",title:"PAYDAY 3 Mods",description:"A collection of all PAYDAY 3 mods I've made.",source:"@site/docs/Projects/Payday3Mods/index.mdx",sourceDirName:"Projects/Payday3Mods",slug:"/projects/payday3mods",permalink:"/projects/payday3mods",draft:!1,unlisted:!1,editUrl:"https://github.com/dukedotdev/dukedot.dev/edit/main/docs/Projects/Payday3Mods/index.mdx",tags:[{inline:!0,label:"Category",permalink:"/tags/category"},{inline:!0,label:"Project",permalink:"/tags/project"},{inline:!0,label:"PAYDAY 3",permalink:"/tags/payday-3"},{inline:!0,label:"Mods",permalink:"/tags/mods"}],version:"current",sidebarPosition:1,frontMatter:{id:"payday3mods",title:"PAYDAY 3 Mods",tags:["Category","Project","PAYDAY 3","Mods"],sidebar_position:1,slug:"/projects/payday3mods"},sidebar:"tutorialSidebar",previous:{title:"Projects",permalink:"/projects"},next:{title:"Under The Plinkphaze",permalink:"/projects/payday3mods/undertheplinkphaze"}},l={},d=[];function u(e){const t={p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"A collection of all PAYDAY 3 mods I've made."}),"\n","\n",(0,r.jsx)(s.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},2991:(e,t,n)=>{n.d(t,{Z:()=>j});n(7294);var r=n(6905),o=n(9690),s=n(3692),a=n(8824),i=n(3919),c=n(5999),l=n(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(5893);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(s.Z,{href:t,className:(0,r.Z)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:o,description:s}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(l.Z,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:o,children:[n," ",o]}),s&&(0,u.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e;const n=(0,o.LM)(t),r=function(){const{selectMessage:e}=(0,a.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.xz)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(h,{item:t});case"category":return(0,u.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,o.jA)();return(0,u.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(g,{...e});const s=(0,o.MN)(t);return(0,u.jsx)("section",{className:(0,r.Z)("row",n),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(y,{item:e})},t)))})}},8824:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(7294),o=n(2263);const s=["zero","one","two","few","many","other"];function a(e){return s.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var r=n(7294);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
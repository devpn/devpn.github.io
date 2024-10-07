"use strict";(self.webpackChunklego_front_devpn=self.webpackChunklego_front_devpn||[]).push([[9817],{1310:(e,s,n)=>{n.d(s,{Z:()=>p});n(67294);var t=n(36905),i=n(35281),a=n(99690),r=n(48596),c=n(33692),o=n(95999),l=n(44996),d=n(85893);function m(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const u={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,l.ZP)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(c.Z,{"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(m,{className:u.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function x(e){let{children:s,href:n,isLast:t}=e;const i="breadcrumbs__link";return t?(0,d.jsx)("span",{className:i,itemProp:"name",children:s}):n?(0,d.jsx)(c.Z,{className:i,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:s})}):(0,d.jsx)("span",{className:i,children:s})}function v(e){let{children:s,active:n,index:i,addMicrodata:a}=e;return(0,d.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,t.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[s,(0,d.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function p(){const e=(0,a.s1)(),s=(0,r.Ns)();return e?(0,d.jsx)("nav",{className:(0,t.Z)(i.k.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[s&&(0,d.jsx)(h,{}),e.map(((s,n)=>{const t=n===e.length-1,i="category"===s.type&&s.linkUnlisted?void 0:s.href;return(0,d.jsx)(v,{active:t,index:n,addMicrodata:!!i,children:(0,d.jsx)(x,{href:i,isLast:t,children:s.label})},n)}))]})}):null}},37893:(e,s,n)=>{n.d(s,{Z:()=>g});n(67294);var t=n(36905),i=n(99690),a=n(86010),r=n(33692),c=n(13919),o=n(92503);const l={cardContainer:"cardContainer_NjmI",cardTitle:"cardTitle_xpsc",cardDescription:"cardDescription_wblY",cardIcon:"cardIcon_Ov67"};var d=n(44996),m=n(98547),u=n(85893);function h(e){let{href:s,children:n}=e;return(0,u.jsx)(r.Z,{href:s,className:(0,a.Z)("card padding--lg",l.cardContainer),children:n})}function b(e){let{href:s,icon:n,title:t,description:i}=e;return(0,u.jsxs)(h,{href:s,children:[(0,u.jsx)("div",{className:(0,a.Z)("text--center",l.cardIcon),children:n}),(0,u.jsx)(o.Z,{as:"h2",className:(0,a.Z)("text--center","text--truncate",l.cardTitle),title:t,children:t}),i&&(0,u.jsx)("p",{className:(0,a.Z)("text--truncate",l.cardDescription),title:i,children:i})]})}function x(e){let{item:s}=e;const n=(0,i.LM)(s);return n?(0,u.jsx)(b,{href:n,icon:s.customProps?.icon?(0,u.jsx)(m.Q,{className:"icon",src:(0,d.ZP)(s.customProps.icon)}):"\ud83d\uddc3\ufe0f",title:s.label,description:s.description}):null}function v(e){let{item:s}=e;const n=s.customProps?.icon?(0,u.jsx)(m.Q,{className:"icon",src:(0,d.ZP)(s.customProps.icon)}):(0,c.Z)(s.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,i.xz)(s.docId??void 0);return(0,u.jsx)(b,{href:s.href,icon:n,title:s.label,description:s.description??t?.description})}function p(e){let{item:s}=e;switch(s.type){case"link":return(0,u.jsx)(v,{item:s});case"category":return(0,u.jsx)(x,{item:s});default:throw new Error(`unknown item type ${JSON.stringify(s)}`)}}function j(e){let{className:s}=e;const n=(0,i.jA)();return(0,u.jsx)(g,{items:n.items,className:s})}function g(e){const{items:s,className:n}=e;if(!s)return(0,u.jsx)(j,{...e});const a=(0,i.MN)(s);return(0,u.jsx)("section",{className:(0,t.Z)("row",n),children:a.map(((e,s)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(p,{item:e})},s)))})}},7859:(e,s,n)=>{n.r(s),n.d(s,{default:()=>f});n(67294);var t=n(71667),i=n(99690),a=n(44996),r=n(37893),c=n(95999),o=n(36905),l=n(33692),d=n(85893);function m(e){const{permalink:s,title:n,subLabel:t,isNext:i}=e;return(0,d.jsxs)(l.Z,{className:(0,o.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:s,children:[t&&(0,d.jsx)("div",{className:"pagination-nav__sublabel",children:t}),(0,d.jsx)("div",{className:"pagination-nav__label",children:n})]})}function u(e){const{previous:s,next:n}=e;return(0,d.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[s&&(0,d.jsx)(m,{...s,subLabel:(0,d.jsx)(c.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,d.jsx)(m,{...n,subLabel:(0,d.jsx)(c.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}var h=n(23120),b=n(44364),x=n(1310),v=n(92503);const p={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function j(e){let{categoryGeneratedIndex:s}=e;return(0,d.jsx)(t.d,{title:s.title,description:s.description,keywords:s.keywords,image:(0,a.ZP)(s.image)})}function g(e){let{categoryGeneratedIndex:s}=e;const n=(0,i.jA)();return(0,d.jsxs)("div",{className:p.generatedIndexPage,children:[(0,d.jsx)(h.Z,{}),(0,d.jsx)(x.Z,{}),(0,d.jsx)(b.Z,{}),(0,d.jsxs)("header",{children:[(0,d.jsx)(v.Z,{as:"h1",className:p.title,children:s.title}),s.description&&(0,d.jsx)("p",{children:s.description})]}),(0,d.jsx)("article",{className:"margin-top--lg",children:(0,d.jsx)(r.Z,{items:n.items,className:p.list})}),(0,d.jsx)("footer",{className:"margin-top--lg",children:(0,d.jsx)(u,{previous:s.navigation.previous,next:s.navigation.next})})]})}function f(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(j,{...e}),(0,d.jsx)(g,{...e})]})}},44364:(e,s,n)=>{n.d(s,{Z:()=>o});n(67294);var t=n(36905),i=n(95999),a=n(35281),r=n(73797),c=n(85893);function o(e){let{className:s}=e;const n=(0,r.E)();return n.badge?(0,c.jsx)("span",{className:(0,t.Z)(s,a.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,c.jsx)(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},23120:(e,s,n)=>{n.d(s,{Z:()=>v});n(67294);var t=n(36905),i=n(52263),a=n(33692),r=n(95999),c=n(80143),o=n(35281),l=n(70298),d=n(73797),m=n(85893);const u={unreleased:function(e){let{siteTitle:s,versionMetadata:n}=e;return(0,m.jsx)(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:s,versionLabel:(0,m.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:s,versionMetadata:n}=e;return(0,m.jsx)(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:s,versionLabel:(0,m.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const s=u[e.versionMetadata.banner];return(0,m.jsx)(s,{...e})}function b(e){let{versionLabel:s,to:n,onClick:t}=e;return(0,m.jsx)(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:s,latestVersionLink:(0,m.jsx)("b",{children:(0,m.jsx)(a.Z,{to:n,onClick:t,children:(0,m.jsx)(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:s,versionMetadata:n}=e;const{siteConfig:{title:a}}=(0,i.Z)(),{pluginId:r}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,l.J)(r),{latestDocSuggestion:u,latestVersionSuggestion:x}=(0,c.Jo)(r),v=u??(p=x).docs.find((e=>e.id===p.mainDocId));var p;return(0,m.jsxs)("div",{className:(0,t.Z)(s,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,m.jsx)("div",{children:(0,m.jsx)(h,{siteTitle:a,versionMetadata:n})}),(0,m.jsx)("div",{className:"margin-top--md",children:(0,m.jsx)(b,{versionLabel:x.label,to:v.path,onClick:()=>d(x.name)})})]})}function v(e){let{className:s}=e;const n=(0,d.E)();return n.banner?(0,m.jsx)(x,{className:s,versionMetadata:n}):null}}}]);
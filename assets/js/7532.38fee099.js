"use strict";(self.webpackChunklego_front_devpn=self.webpackChunklego_front_devpn||[]).push([[7532],{1400:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var s=n(204),a=n(17081),l=n(97959),i=n(74848);function o(){const{toc:e,frontMatter:t}=(0,a.u)();return(0,i.jsx)(l.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:s.G.docs.docTocDesktop})}},7860:(e,t,n)=>{n.d(t,{A:()=>b});n(96540);var s=n(18215),a=n(204),l=n(17081),i=n(50539),o=n(56289);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var c=n(74848);function d(e){let{permalink:t,label:n,count:a,description:l}=e;return(0,c.jsxs)(o.A,{href:t,title:l,className:(0,s.A)(r.tag,a?r.tagWithCount:r.tagRegular),children:[n,a&&(0,c.jsx)("span",{children:a})]})}const u={tags:"tags_jXut",tag:"tag_QGVx"};function m(e){let{tags:t}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("b",{children:(0,c.jsx)(i.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,c.jsx)("ul",{className:(0,s.A)(u.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,c.jsx)("li",{className:u.tag,children:(0,c.jsx)(d,{...e})},e.permalink)))})]})}var h=n(81708);function b(){const{metadata:e}=(0,l.u)(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:i,tags:o}=e,r=o.length>0,d=!!(t||n||i);return r||d?(0,c.jsxs)("footer",{className:(0,s.A)(a.G.docs.docFooter,"docusaurus-mt-lg"),children:[r&&(0,c.jsx)("div",{className:(0,s.A)("row margin-top--sm",a.G.docs.docFooterTagsRow),children:(0,c.jsx)("div",{className:"col",children:(0,c.jsx)(m,{tags:o})})}),d&&(0,c.jsx)(h.A,{className:(0,s.A)("margin-top--sm",a.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:i})]}):null}},15708:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var s=n(18215),a=n(204),l=n(17081),i=n(9303),o=n(57985),r=n(74848);function c(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=(0,l.u)();return t.hide_title||void 0!==n?null:e.title}();return(0,r.jsxs)("div",{className:(0,s.A)(a.G.docs.docMarkdown,"markdown"),children:[n&&(0,r.jsx)("header",{children:(0,r.jsx)(i.A,{as:"h1",children:n})}),(0,r.jsx)(o.A,{children:t})]})}},15833:(e,t,n)=>{n.d(t,{A:()=>v});n(96540);var s=n(18215),a=n(40797),l=n(56289),i=n(50539),o=n(56942),r=n(204),c=n(96351),d=n(21858),u=n(74848);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(i.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(i.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(i.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(l.A,{to:n,onClick:s,children:(0,u.jsx)(i.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function g(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,a.A)(),{pluginId:i}=(0,o.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(i),{latestDocSuggestion:m,latestVersionSuggestion:g}=(0,o.HW)(i),v=m??(p=g).docs.find((e=>e.id===p.mainDocId));var p;return(0,u.jsxs)("div",{className:(0,s.A)(t,r.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:l,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:g.label,to:v.path,onClick:()=>d(g.name)})})]})}function v(e){let{className:t}=e;const n=(0,d.r)();return n.banner?(0,u.jsx)(g,{className:t,versionMetadata:n}):null}},17081:(e,t,n)=>{n.d(t,{_:()=>o,u:()=>r});var s=n(96540),a=n(26849),l=n(74848);const i=s.createContext(null);function o(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(i.Provider,{value:a,children:t})}function r(){const e=(0,s.useContext)(i);if(null===e)throw new a.dV("DocProvider");return e}},27521:(e,t,n)=>{n.d(t,{A:()=>g});n(96540);var s=n(18215),a=n(204),l=n(17081),i=n(33535),o=n(71021),r=n(50539);const c={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};var d=n(74848);function u(e){let{collapsed:t,...n}=e;return(0,d.jsx)("button",{type:"button",...n,className:(0,s.A)("clean-btn",c.tocCollapsibleButton,!t&&c.tocCollapsibleButtonExpanded,n.className),children:(0,d.jsx)(r.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const m={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function h(e){let{toc:t,className:n,minHeadingLevel:a,maxHeadingLevel:l}=e;const{collapsed:r,toggleCollapsed:c}=(0,i.u)({initialState:!0});return(0,d.jsxs)("div",{className:(0,s.A)(m.tocCollapsible,!r&&m.tocCollapsibleExpanded,n),children:[(0,d.jsx)(u,{collapsed:r,onClick:c}),(0,d.jsx)(i.N,{lazy:!0,className:m.tocCollapsibleContent,collapsed:r,children:(0,d.jsx)(o.A,{toc:t,minHeadingLevel:a,maxHeadingLevel:l})})]})}const b={tocMobile:"tocMobile_ITEo"};function g(){const{toc:e,frontMatter:t}=(0,l.u)();return(0,d.jsx)(h,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,s.A)(a.G.docs.docTocMobile,b.tocMobile)})}},55730:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var s=n(18215),a=n(50539),l=n(204),i=n(21858),o=n(74848);function r(e){let{className:t}=e;const n=(0,i.r)();return n.badge?(0,o.jsx)("span",{className:(0,s.A)(t,l.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(a.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},55920:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});n(96540);var s=n(68207),a=n(17081),l=n(74848);function i(){const{metadata:e,frontMatter:t,assets:n}=(0,a.u)();return(0,l.jsx)(s.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var o=n(60703);function r(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,l.jsx)(a._,{content:e.content,children:(0,l.jsxs)(s.e3,{className:t,children:[(0,l.jsx)(i,{}),(0,l.jsx)(o.A,{children:(0,l.jsx)(n,{})})]})})}},57519:(e,t,n)=>{n.d(t,{A:()=>p});n(96540);var s=n(18215),a=n(204),l=n(93751),i=n(30214),o=n(56289),r=n(50539),c=n(29030),d=n(74848);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.Ay)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(o.A,{"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function g(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,d.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,d.jsx)(o.A,{className:a,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:a,children:t})}function v(e){let{children:t,active:n,index:a,addMicrodata:l}=e;return(0,d.jsxs)("li",{...l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function p(){const e=(0,l.OF)(),t=(0,i.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(a.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(v,{active:s,index:n,addMicrodata:!!a,children:(0,d.jsx)(g,{href:a,isLast:s,children:t.label})},n)}))]})}):null}}}]);
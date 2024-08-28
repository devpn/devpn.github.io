"use strict";(self.webpackChunklego_front_devpn=self.webpackChunklego_front_devpn||[]).push([[7271],{1310:(e,t,a)=>{a.d(t,{Z:()=>g});a(67294);var s=a(36905),n=a(35281),l=a(53438),i=a(48596),o=a(33692),r=a(95999),d=a(44996),c=a(85893);function u(e){return(0,c.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,c.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,d.Z)("/");return(0,c.jsx)("li",{className:"breadcrumbs__item",children:(0,c.jsx)(o.Z,{"aria-label":(0,r.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,c.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function p(e){let{children:t,href:a,isLast:s}=e;const n="breadcrumbs__link";return s?(0,c.jsx)("span",{className:n,itemProp:"name",children:t}):a?(0,c.jsx)(o.Z,{className:n,href:a,itemProp:"item",children:(0,c.jsx)("span",{itemProp:"name",children:t})}):(0,c.jsx)("span",{className:n,children:t})}function x(e){let{children:t,active:a,index:n,addMicrodata:l}=e;return(0,c.jsxs)("li",{...l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a}),children:[t,(0,c.jsx)("meta",{itemProp:"position",content:String(n+1)})]})}function g(){const e=(0,l.s1)(),t=(0,i.Ns)();return e?(0,c.jsx)("nav",{className:(0,s.Z)(n.k.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,r.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,c.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,c.jsx)(h,{}),e.map(((t,a)=>{const s=a===e.length-1,n="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,c.jsx)(x,{active:s,index:a,addMicrodata:!!n,children:(0,c.jsx)(p,{href:n,isLast:s,children:t.label})},a)}))]})}):null}},91419:(e,t,a)=>{a.d(t,{Z:()=>d});a(67294);var s=a(36905),n=a(35281),l=a(65130),i=a(92503),o=a(45042),r=a(85893);function d(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=(0,l.k)();return t.hide_title||void 0!==a?null:e.title}();return(0,r.jsxs)("div",{className:(0,s.Z)(n.k.docs.docMarkdown,"markdown"),children:[a&&(0,r.jsx)("header",{children:(0,r.jsx)(i.Z,{as:"h1",children:a})}),(0,r.jsx)(o.Z,{children:t})]})}},97887:(e,t,a)=>{a.d(t,{Z:()=>k});a(67294);var s=a(36905),n=a(35281),l=a(65130),i=a(95999),o=a(85893);function r(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return(0,o.jsx)(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,o.jsx)("b",{children:(0,o.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:a})})},children:" on {date}"})}function d(e){let{lastUpdatedBy:t}=e;return(0,o.jsx)(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,o.jsx)("b",{children:t})},children:" by {user}"})}function c(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:s}=e;return(0,o.jsxs)("span",{className:n.k.common.lastUpdated,children:[(0,o.jsx)(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?(0,o.jsx)(r,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:s?(0,o.jsx)(d,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var u=a(33692);const m={iconEdit:"iconEdit_Z9Sw"};function h(e){let{className:t,...a}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(m.iconEdit,t),"aria-hidden":"true",...a,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function b(e){let{editUrl:t}=e;return(0,o.jsxs)(u.Z,{to:t,className:n.k.common.editThisPage,children:[(0,o.jsx)(h,{}),(0,o.jsx)(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}const p={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function x(e){let{permalink:t,label:a,count:n}=e;return(0,o.jsxs)(u.Z,{href:t,className:(0,s.Z)(p.tag,n?p.tagWithCount:p.tagRegular),children:[a,n&&(0,o.jsx)("span",{children:n})]})}const g={tags:"tags_jXut",tag:"tag_QGVx"};function v(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,s.Z)(g.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:a}=e;return(0,o.jsx)("li",{className:g.tag,children:(0,o.jsx)(x,{label:t,permalink:a})},a)}))})]})}const j={lastUpdated:"lastUpdated_vwxv"};function f(e){return(0,o.jsx)("div",{className:(0,s.Z)(n.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(v,{...e})})})}function Z(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:i}=e;return(0,o.jsxs)("div",{className:(0,s.Z)(n.k.docs.docFooterEditMetaRow,"row"),children:[(0,o.jsx)("div",{className:"col",children:t&&(0,o.jsx)(b,{editUrl:t})}),(0,o.jsx)("div",{className:(0,s.Z)("col",j.lastUpdated),children:(a||l)&&(0,o.jsx)(c,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:l})})]})}function k(){const{metadata:e}=(0,l.k)(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:r,tags:d}=e,c=d.length>0,u=!!(t||a||r);return c||u?(0,o.jsxs)("footer",{className:(0,s.Z)(n.k.docs.docFooter,"docusaurus-mt-lg"),children:[c&&(0,o.jsx)(f,{tags:d}),u&&(0,o.jsx)(Z,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:i})]}):null}},55938:(e,t,a)=>{a.d(t,{Z:()=>o});a(67294);var s=a(35281),n=a(65130),l=a(39407),i=a(85893);function o(){const{toc:e,frontMatter:t}=(0,n.k)();return(0,i.jsx)(l.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:s.k.docs.docTocDesktop})}},6781:(e,t,a)=>{a.d(t,{Z:()=>p});a(67294);var s=a(36905),n=a(35281),l=a(65130),i=a(86043),o=a(93743),r=a(95999);const d={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};var c=a(85893);function u(e){let{collapsed:t,...a}=e;return(0,c.jsx)("button",{type:"button",...a,className:(0,s.Z)("clean-btn",d.tocCollapsibleButton,!t&&d.tocCollapsibleButtonExpanded,a.className),children:(0,c.jsx)(r.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const m={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function h(e){let{toc:t,className:a,minHeadingLevel:n,maxHeadingLevel:l}=e;const{collapsed:r,toggleCollapsed:d}=(0,i.u)({initialState:!0});return(0,c.jsxs)("div",{className:(0,s.Z)(m.tocCollapsible,!r&&m.tocCollapsibleExpanded,a),children:[(0,c.jsx)(u,{collapsed:r,onClick:d}),(0,c.jsx)(i.z,{lazy:!0,className:m.tocCollapsibleContent,collapsed:r,children:(0,c.jsx)(o.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:l})})]})}const b={tocMobile:"tocMobile_ITEo"};function p(){const{toc:e,frontMatter:t}=(0,l.k)();return(0,c.jsx)(h,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,s.Z)(n.k.docs.docTocMobile,b.tocMobile)})}},86176:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});a(67294);var s=a(10833),n=a(65130),l=a(85893);function i(){const{metadata:e,frontMatter:t,assets:a}=(0,n.k)();return(0,l.jsx)(s.d,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var o=a(37226);function r(e){const t=`docs-doc-id-${e.content.metadata.id}`,a=e.content;return(0,l.jsx)(n.b,{content:e.content,children:(0,l.jsxs)(s.FG,{className:t,children:[(0,l.jsx)(i,{}),(0,l.jsx)(o.Z,{children:(0,l.jsx)(a,{})})]})})}},44364:(e,t,a)=>{a.d(t,{Z:()=>r});a(67294);var s=a(36905),n=a(95999),l=a(35281),i=a(74477),o=a(85893);function r(e){let{className:t}=e;const a=(0,i.E)();return a.badge?(0,o.jsx)("span",{className:(0,s.Z)(t,l.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(n.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label},children:"Version: {versionLabel}"})}):null}},23120:(e,t,a)=>{a.d(t,{Z:()=>x});a(67294);var s=a(36905),n=a(52263),l=a(33692),i=a(95999),o=a(80143),r=a(35281),d=a(60373),c=a(74477),u=a(85893);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return(0,u.jsx)(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:a.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return(0,u.jsx)(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:a.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:a,onClick:s}=e;return(0,u.jsx)(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(l.Z,{to:a,onClick:s,children:(0,u.jsx)(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function p(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:l}}=(0,n.Z)(),{pluginId:i}=(0,o.gA)({failfast:!0}),{savePreferredVersionName:c}=(0,d.J)(i),{latestDocSuggestion:m,latestVersionSuggestion:p}=(0,o.Jo)(i),x=m??(g=p).docs.find((e=>e.id===g.mainDocId));var g;return(0,u.jsxs)("div",{className:(0,s.Z)(t,r.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:l,versionMetadata:a})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:p.label,to:x.path,onClick:()=>c(p.name)})})]})}function x(e){let{className:t}=e;const a=(0,c.E)();return a.banner?(0,u.jsx)(p,{className:t,versionMetadata:a}):null}},65130:(e,t,a)=>{a.d(t,{b:()=>o,k:()=>r});var s=a(67294),n=a(902),l=a(85893);const i=s.createContext(null);function o(e){let{children:t,content:a}=e;const n=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return(0,l.jsx)(i.Provider,{value:n,children:t})}function r(){const e=(0,s.useContext)(i);if(null===e)throw new n.i6("DocProvider");return e}}}]);
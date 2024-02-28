"use strict";(self.webpackChunklego_front_devpn=self.webpackChunklego_front_devpn||[]).push([[7918],{5121:(e,t,s)=>{s.r(t),s.d(t,{default:()=>ue});var n=s(67294),a=s(10833),l=s(902),i=s(85893);const o=n.createContext(null);function r(e){let{children:t,content:s}=e;const a=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(s);return(0,i.jsx)(o.Provider,{value:a,children:t})}function c(){const e=(0,n.useContext)(o);if(null===e)throw new l.i6("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:s}=c();return(0,i.jsx)(a.d,{title:e.title,description:e.description,keywords:t.keywords,image:s.image??t.image})}var h=s(86010),m=s(87524),u=s(36905),x=s(52263),p=s(33692),j=s(95999),b=s(80143),g=s(35281),v=s(60373),f=s(74477);const Z={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,i.jsx)(j.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,i.jsx)(j.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function C(e){const t=Z[e.versionMetadata.banner];return(0,i.jsx)(t,{...e})}function _(e){let{versionLabel:t,to:s,onClick:n}=e;return(0,i.jsx)(j.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,i.jsx)("b",{children:(0,i.jsx)(p.Z,{to:s,onClick:n,children:(0,i.jsx)(j.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function L(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:n}}=(0,x.Z)(),{pluginId:a}=(0,b.gA)({failfast:!0}),{savePreferredVersionName:l}=(0,v.J)(a),{latestDocSuggestion:o,latestVersionSuggestion:r}=(0,b.Jo)(a),c=o??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,i.jsxs)("div",{className:(0,u.Z)(t,g.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,i.jsx)("div",{children:(0,i.jsx)(C,{siteTitle:n,versionMetadata:s})}),(0,i.jsx)("div",{className:"margin-top--md",children:(0,i.jsx)(_,{versionLabel:r.label,to:c.path,onClick:()=>l(r.name)})})]})}function N(e){let{className:t}=e;const s=(0,f.E)();return s.banner?(0,i.jsx)(L,{className:t,versionMetadata:s}):null}function k(e){let{className:t}=e;const s=(0,f.E)();return s.badge?(0,i.jsx)("span",{className:(0,u.Z)(t,g.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,i.jsx)(j.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}function T(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:s}=e;return(0,i.jsx)(j.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,i.jsx)("b",{children:(0,i.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:s})})},children:" on {date}"})}function w(e){let{lastUpdatedBy:t}=e;return(0,i.jsx)(j.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,i.jsx)("b",{children:t})},children:" by {user}"})}function y(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:s,lastUpdatedBy:n}=e;return(0,i.jsxs)("span",{className:g.k.common.lastUpdated,children:[(0,i.jsx)(j.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&s?(0,i.jsx)(T,{lastUpdatedAt:t,formattedLastUpdatedAt:s}):"",byUser:n?(0,i.jsx)(w,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const U={iconEdit:"iconEdit_Z9Sw"};function B(e){let{className:t,...s}=e;return(0,i.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.Z)(U.iconEdit,t),"aria-hidden":"true",...s,children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function M(e){let{editUrl:t}=e;return(0,i.jsxs)(p.Z,{to:t,className:g.k.common.editThisPage,children:[(0,i.jsx)(B,{}),(0,i.jsx)(j.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}const I={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function P(e){let{permalink:t,label:s,count:n}=e;return(0,i.jsxs)(p.Z,{href:t,className:(0,u.Z)(I.tag,n?I.tagWithCount:I.tagRegular),children:[s,n&&(0,i.jsx)("span",{children:n})]})}const S={tags:"tags_jXut",tag:"tag_QGVx"};function A(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(j.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,u.Z)(S.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:s}=e;return(0,i.jsx)("li",{className:S.tag,children:(0,i.jsx)(P,{label:t,permalink:s})},s)}))})]})}const E={lastUpdated:"lastUpdated_vwxv"};function V(e){return(0,i.jsx)("div",{className:(0,u.Z)(g.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(A,{...e})})})}function H(e){let{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n,formattedLastUpdatedAt:a}=e;return(0,i.jsxs)("div",{className:(0,u.Z)(g.k.docs.docFooterEditMetaRow,"row"),children:[(0,i.jsx)("div",{className:"col",children:t&&(0,i.jsx)(M,{editUrl:t})}),(0,i.jsx)("div",{className:(0,u.Z)("col",E.lastUpdated),children:(s||n)&&(0,i.jsx)(y,{lastUpdatedAt:s,formattedLastUpdatedAt:a,lastUpdatedBy:n})})]})}function D(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:s,formattedLastUpdatedAt:n,lastUpdatedBy:a,tags:l}=e,o=l.length>0,r=!!(t||s||a);return o||r?(0,i.jsxs)("footer",{className:(0,u.Z)(g.k.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,i.jsx)(V,{tags:l}),r&&(0,i.jsx)(H,{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:a,formattedLastUpdatedAt:n})]}):null}var O=s(86043),z=s(93743);const R={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function F(e){let{collapsed:t,...s}=e;return(0,i.jsx)("button",{type:"button",...s,className:(0,u.Z)("clean-btn",R.tocCollapsibleButton,!t&&R.tocCollapsibleButtonExpanded,s.className),children:(0,i.jsx)(j.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const $={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function G(e){let{toc:t,className:s,minHeadingLevel:n,maxHeadingLevel:a}=e;const{collapsed:l,toggleCollapsed:o}=(0,O.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,u.Z)($.tocCollapsible,!l&&$.tocCollapsibleExpanded,s),children:[(0,i.jsx)(F,{collapsed:l,onClick:o}),(0,i.jsx)(O.z,{lazy:!0,className:$.tocCollapsibleContent,collapsed:l,children:(0,i.jsx)(z.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:a})})]})}const J={tocMobile:"tocMobile_ITEo"};function Q(){const{toc:e,frontMatter:t}=c();return(0,i.jsx)(G,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(g.k.docs.docTocMobile,J.tocMobile)})}var W=s(39407);function q(){const{toc:e,frontMatter:t}=c();return(0,i.jsx)(W.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:g.k.docs.docTocDesktop})}var X=s(92503),Y=s(45042);function K(e){let{children:t}=e;const s=function(){const{metadata:e,frontMatter:t,contentTitle:s}=c();return t.hide_title||void 0!==s?null:e.title}();return(0,i.jsxs)("div",{className:(0,u.Z)(g.k.docs.docMarkdown,"markdown"),children:[s&&(0,i.jsx)("header",{children:(0,i.jsx)(X.Z,{as:"h1",children:s})}),(0,i.jsx)(Y.Z,{children:t})]})}var ee=s(52802),te=s(48596),se=s(44996);function ne(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const ae={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function le(){const e=(0,se.Z)("/");return(0,i.jsx)("li",{className:"breadcrumbs__item",children:(0,i.jsx)(p.Z,{"aria-label":(0,j.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,i.jsx)(ne,{className:ae.breadcrumbHomeIcon})})})}const ie={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function oe(e){let{children:t,href:s,isLast:n}=e;const a="breadcrumbs__link";return n?(0,i.jsx)("span",{className:a,itemProp:"name",children:t}):s?(0,i.jsx)(p.Z,{className:a,href:s,itemProp:"item",children:(0,i.jsx)("span",{itemProp:"name",children:t})}):(0,i.jsx)("span",{className:a,children:t})}function re(e){let{children:t,active:s,index:n,addMicrodata:a}=e;return(0,i.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,i.jsx)("meta",{itemProp:"position",content:String(n+1)})]})}function ce(){const e=(0,ee.s1)(),t=(0,te.Ns)();return e?(0,i.jsx)("nav",{className:(0,u.Z)(g.k.docs.docBreadcrumbs,ie.breadcrumbsContainer),"aria-label":(0,j.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,i.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,i.jsx)(le,{}),e.map(((t,s)=>{const n=s===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,i.jsx)(re,{active:n,index:s,addMicrodata:!!a,children:(0,i.jsx)(oe,{href:a,isLast:n,children:t.label})},s)}))]})}):null}var de=s(22212);const he={docItemContainer:"docItemContainer_c0TR",docItemCol:"docItemCol_z5aJ"};function me(e){let{children:t}=e;const s=function(){const{frontMatter:e,toc:t}=c(),s=(0,m.i)(),n=e.hide_table_of_contents,a=!n&&t.length>0;return{hidden:n,mobile:a?(0,i.jsx)(Q,{}):void 0,desktop:!a||"desktop"!==s&&"ssr"!==s?void 0:(0,i.jsx)(q,{})}}(),{metadata:{unlisted:n}}=c();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,h.Z)("col",!s.hidden&&he.docItemCol),children:[n&&(0,i.jsx)(de.Z,{}),(0,i.jsx)(N,{}),(0,i.jsx)("div",{className:he.docItemContainer,children:(0,i.jsxs)("article",{children:[(0,i.jsx)(ce,{}),(0,i.jsx)(k,{}),s.mobile,(0,i.jsx)(K,{children:t}),(0,i.jsx)(D,{})]})})]}),s.desktop&&(0,i.jsx)("div",{className:"col col--3",children:s.desktop})]})}function ue(e){const t=`docs-doc-id-${e.content.metadata.id}`,s=e.content;return(0,i.jsx)(r,{content:e.content,children:(0,i.jsxs)(a.FG,{className:t,children:[(0,i.jsx)(d,{}),(0,i.jsx)(me,{children:(0,i.jsx)(s,{})})]})})}},40693:(e,t,s)=>{s.d(t,{Z:()=>x});var n=s(7442),a=s(26594),l=s(83062),i=s(55241),o=s(37e3),r=s(15867),c=s(44894),d=s(77516),h=s(57132),m=s(86010),u=s(85893);function x(e){let{url:t,filename:s}=e;const{message:x}=(0,n.S)();return(0,u.jsxs)("div",{className:(0,m.Z)("space-bt",c.Z.trojanItem),children:[(0,u.jsx)(l.Z,{title:"\u70b9\u51fb\u4e0b\u8f7d\u8ba2\u9605\u914d\u7f6e\u6587\u4ef6",children:(0,u.jsx)("a",{style:{wordBreak:"break-all"},href:(0,a.pv)(t,s),download:s,children:t})}),(0,u.jsxs)("div",{className:"space",children:[(0,u.jsx)(i.Z,{overlayInnerStyle:{padding:0},content:(0,u.jsx)(o.Z,{value:t}),children:(0,u.jsx)(d.Z,{})}),(0,u.jsx)(l.Z,{title:"\u70b9\u51fb\u590d\u5236\u8ba2\u9605\u94fe\u63a5\u5230\u526a\u8d34\u677f",children:(0,u.jsx)(r.ZP,{icon:(0,u.jsx)(h.Z,{}),onClick:()=>{navigator.clipboard.writeText(t),x.success("\u590d\u5236\u8ba2\u9605\u94fe\u63a5\u6210\u529f")},children:"\u590d\u5236"})})]})]},t)}},66629:(e,t,s)=>{s.d(t,{Z:()=>l});const n={itemList:"itemList_yUgU",itemTitle:"itemTitle_SCiT"};var a=s(85893);function l(e){let{title:t,value:s}=e;return(0,a.jsxs)("div",{className:n.itemList,children:[(0,a.jsx)("div",{className:n.itemTitle,children:t},"title"),(0,a.jsx)("div",{children:s},"value")]})}},18951:(e,t,s)=>{s.d(t,{Z:()=>w});var n=s(54087),a=s(26594),l=s(42590),i=s(67506),o=s(44674),r=s(7442),c=s(85893);var d=s(85265),h=s(67294),m=s(34410),u=s(59047),x=s(33692),p=s(40693);var j=s(24599),b=s(55241),g=s(15867),v=s(2487),f=s(37e3),Z=s(83062),C=s(66629),_=s(77516),L=s(57132),N=s(98547),k=s(86010);const T="icon_sV4M";const w={...n.Z,SoftDownload:function(e){let{title:t,url:s}=e;const{userInfo:n,setOpen:d}=(0,l.Pc)(),{message:h}=(0,r.S)(),m=JSON.parse((0,o.E)(i.Z.softx)),u=m[Math.floor(Math.random()*m.length)];return(0,c.jsx)("p",{children:(0,c.jsxs)("a",{className:"button button--lg button--primary",href:n?(0,a.pv)(u,s):s,onClick:e=>{e.preventDefault(),n?(0,a.LR)((0,a.pv)(u,s)):(d(l.Lo.Login),h.warning("\u8bf7\u5148\u767b\u5f55\u6216\u8005\u6ce8\u518c\uff0c\u7136\u540e\u518d\u70b9\u51fb\u4e0b\u8f7d"))},children:[(0,c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,c.jsx)("path",{fill:"currentColor","fill-rule":"evenodd",d:"M5 16.25a.75.75 0 0 1 .75.75v2c0 .138.112.25.25.25h12a.25.25 0 0 0 .25-.25v-2a.75.75 0 0 1 1.5 0v2A1.75 1.75 0 0 1 18 20.75H6A1.75 1.75 0 0 1 4.25 19v-2a.75.75 0 0 1 .75-.75","clip-rule":"evenodd"}),(0,c.jsx)("path",{fill:"currentColor",d:"M10.738 3.75a.992.992 0 0 0-.988.906a36.618 36.618 0 0 0-.082 5.27c-.247.013-.493.03-.74.047l-1.49.109a.76.76 0 0 0-.585 1.167a15.555 15.555 0 0 0 4.032 4.258l.597.429a.888.888 0 0 0 1.036 0l.597-.429a15.556 15.556 0 0 0 4.032-4.258a.76.76 0 0 0-.585-1.167l-1.49-.109a42.274 42.274 0 0 0-.74-.047a36.62 36.62 0 0 0-.081-5.27a.992.992 0 0 0-.989-.906z"})]}),t||"\u70b9\u51fb\u4e0b\u8f7d"]})})},ClashUrl:function(){const e="trojan",{userInfo:t,setOpen:s}=(0,l.Pc)(),[n,o]=(0,h.useState)(!1),[r,j]=(0,h.useState)("");return(0,c.jsxs)("p",{children:[(0,c.jsxs)("button",{className:"button button--lg button--primary",onClick:e=>{e.preventDefault(),t?(o(!0),!r&&t?.combo&&(0,a.OA)().then((e=>{j(e)}))):s(l.Lo.Login)},children:["\u67e5\u770b ",a.P6[e]," \u8ba2\u9605\u5730\u5740"]}),(0,c.jsx)(d.Z,{open:n,size:"large",title:`${a.P6[e]} \u8ba2\u9605\u5730\u5740`,onClose:()=>{o(!1)},children:t?.combo?r?(0,c.jsxs)("div",{children:[(0,c.jsx)(p.Z,{url:(0,a.pv)(r,"clashV3",t.name,t.combo_hash),filename:i.Z.tag+"-clashV3-config.yaml"}),(0,c.jsx)("p",{style:{marginTop:24},children:"\u8bf7\u5b9a\u671f\u5728 Clash \u8f6f\u4ef6\u4e2d\u5237\u65b0\u8ba2\u9605\u94fe\u63a5\uff0c\u7279\u522b\u662f\u65b0\u8d2d\u4e70\u5957\u9910\u6216\u8005\u654f\u611f\u65f6\u671f\u3002"})]}):(0,c.jsx)(m.Z,{}):(0,c.jsx)(u.Z,{type:"warning",children:(0,c.jsxs)("p",{children:[a.P6[e]," \u8ba2\u9605\u5730\u5740\u65e0\u6548\uff0c\u8bf7\u5148"," ",(0,c.jsx)(x.Z,{to:"/combo",children:"\u8d2d\u4e70\u5957\u9910"})]})})})]})},SingBoxUrl:function(){const e="singbox",{userInfo:t,setOpen:s}=(0,l.Pc)(),[n,o]=(0,h.useState)(!1),[r,j]=(0,h.useState)("");return(0,c.jsxs)("p",{children:[(0,c.jsxs)("button",{className:"button button--lg button--primary",onClick:e=>{e.preventDefault(),t?(o(!0),!r&&t?.combo&&(0,a.OA)().then((e=>{j(e)}))):s(l.Lo.Login)},children:["\u67e5\u770b ",a.P6[e]," \u8ba2\u9605\u5730\u5740"]}),(0,c.jsx)(d.Z,{open:n,size:"large",title:`${a.P6[e]} \u8ba2\u9605\u5730\u5740`,onClose:()=>{o(!1)},children:t?.combo?r?(0,c.jsxs)("div",{children:[(0,c.jsx)(p.Z,{url:(0,a.pv)(r,"singbox/v1",t.name,t.combo_hash),filename:i.Z.tag+"-singboxV1-config.json"}),(0,c.jsx)("p",{style:{marginTop:24},children:"\u8bf7\u5b9a\u671f\u5728 Sing-Box \u8f6f\u4ef6\u4e2d\u5237\u65b0\u8ba2\u9605\u94fe\u63a5\uff0c\u7279\u522b\u662f\u65b0\u8d2d\u4e70\u5957\u9910\u6216\u8005\u654f\u611f\u65f6\u671f\u3002"})]}):(0,c.jsx)(m.Z,{}):(0,c.jsx)(u.Z,{type:"warning",children:(0,c.jsxs)("p",{children:[a.P6[e]," \u8ba2\u9605\u5730\u5740\u65e0\u6548\uff0c\u8bf7\u5148"," ",(0,c.jsx)(x.Z,{to:"/combo",children:"\u8d2d\u4e70\u5957\u9910"})]})})})]})},MdHosts:function(e){let{proto:t}=e;const{userInfo:s,setOpen:n}=(0,l.Pc)(),[i,o]=(0,h.useState)(!0),[m,p]=(0,h.useState)(!1),[w,y]=(0,h.useState)([]),{message:U}=(0,r.S)();return(0,c.jsxs)("p",{children:[(0,c.jsxs)("button",{className:"button button--lg button--primary",onClick:e=>{e.preventDefault(),(()=>{if(s)return p(!0),i&&s?.combo&&(0,j.Rf)(t).then((e=>{o(!1),y(e)})).catch((()=>{o(!1),y([])})),!1;n(l.Lo.Login)})()},children:[a.P6[t]," \u670d\u52a1\u8282\u70b9"]}),(0,c.jsx)(d.Z,{open:m,title:`${a.P6[t]} \u670d\u52a1\u8282\u70b9`,onClose:()=>{p(!1)},extra:s?.combo?(0,c.jsx)(b.Z,{placement:"bottomRight",content:(0,c.jsxs)("div",{style:{minWidth:150},children:[(0,c.jsx)(C.Z,{title:"\u7528\u6237\u540d",value:(0,c.jsx)("strong",{children:s?.name})}),(0,c.jsx)(C.Z,{title:"\u8fde\u63a5\u5bc6\u7801",value:(0,c.jsx)("strong",{children:s?.combo_pwd})})]}),trigger:"click",children:(0,c.jsx)(g.ZP,{children:"\u8fde\u63a5\u5bc6\u7801"})}):null,children:s?.combo?(0,c.jsx)(v.Z,{loading:i,itemLayout:"horizontal",dataSource:w,renderItem:e=>(0,c.jsx)(v.Z.Item,{actions:[(0,c.jsx)(b.Z,{overlayInnerStyle:{padding:0},content:(0,c.jsx)(f.Z,{value:e.domain+(e.port?":"+e.port:"")}),children:(0,c.jsx)(_.Z,{})}),(0,c.jsx)(Z.Z,{title:"\u70b9\u51fb\u590d\u5236\u5730\u5740\u5230\u526a\u8d34\u677f",children:(0,c.jsx)(g.ZP,{icon:(0,c.jsx)(L.Z,{}),onClick:()=>{navigator.clipboard.writeText(e.domain+(e.port?":"+e.port:"")),U.success("\u590d\u5236\u8ba2\u9605\u94fe\u63a5\u6210\u529f")},children:"\u590d\u5236"})})],children:(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:"space",children:[(0,c.jsx)(N.Q,{src:`/flag/${e.area}.svg`,className:(0,k.Z)("icon",T)}),(0,c.jsx)("h5",{style:{marginBottom:0},children:`${a.F9[e.area]} ${e.domain.split(".")[0].toUpperCase()}${e.rate>1?` (${e.rate}\u500d\u7387)`:""}`})]}),(0,c.jsx)("p",{style:{wordBreak:"break-all",marginBottom:"12px"},children:e.domain+(e.port?":"+e.port:"")})]})})}):(0,c.jsx)(u.Z,{type:"warning",children:(0,c.jsxs)("p",{children:[a.P6[t]," \u670d\u52a1\u8282\u70b9\u65e0\u6548\uff0c\u8bf7\u5148"," ",(0,c.jsx)(x.Z,{to:"/combo",children:"\u8d2d\u4e70\u5957\u9910"})]})})})]})}}},44894:(e,t,s)=>{s.d(t,{Z:()=>n});const n={container:"container_lAfw",trojanItem:"trojanItem_db0P",icon:"icon_QnTj",projectGrid:"projectGrid_nQkr"}}}]);
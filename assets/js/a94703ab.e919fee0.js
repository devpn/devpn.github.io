"use strict";(self.webpackChunklego_front_devpn=self.webpackChunklego_front_devpn||[]).push([[9048],{11872:(e,t,n)=>{n.r(t),n.d(t,{default:()=>xe});var a=n(96540),o=n(18215),i=n(68207),s=n(204),l=n(93751),c=n(22306),r=n(50539),d=n(65627),u=n(77685);const m={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var b=n(74848);function h(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),i=(0,a.useRef)(!1),{startScroll:s,cancelScroll:l}=(0,d.gk)();return(0,d.Mq)(((e,n)=>{let{scrollY:a}=e;const s=n?.scrollY;s&&(i.current?i.current=!1:a>=s?(l(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.$)((e=>{e.location.hash&&(i.current=!0,o(!1))})),{shown:n,scrollToTop:()=>s(0)}}({threshold:300});return(0,b.jsx)("button",{"aria-label":(0,r.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",s.G.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var p=n(84924),x=n(56347),f=n(86682),j=n(53115),_=n(12862);function v(e){return(0,b.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,b.jsxs)("g",{fill:"#7a7a7a",children:[(0,b.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,b.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const A={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function g(e){let{onClick:t}=e;return(0,b.jsx)("button",{type:"button",title:(0,r.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,r.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",A.collapseSidebarButton),onClick:t,children:(0,b.jsx)(v,{className:A.collapseSidebarButtonIcon})})}var k=n(23380),C=n(26849);const S=Symbol("EmptyContext"),T=a.createContext(S);function N(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),i=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,b.jsx)(T.Provider,{value:i,children:t})}var I=n(20053),B=n(33535),y=n(30214),w=n(56289),L=n(9136),E=n(29030),M=n(43014);function H(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,b.jsx)("button",{"aria-label":t?(0,r.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,r.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),type:"button",className:"clean-btn menu__caret",onClick:a})}function P(e){let{item:t,onItemClick:n,activePath:o,level:i,index:c,...r}=e;const{items:d,label:u,collapsible:m,className:h,href:p,customProps:x}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,j.p)(),_=function(e){const t=(0,L.A)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.Nr)(e):void 0),[e,t])}(t),v=(0,l.w8)(t,o),A=(0,y.ys)(p,o),{collapsed:g,setCollapsed:k}=(0,B.u)({initialState:()=>!!m&&(!v&&t.collapsed)}),{expandedItem:N,setExpandedItem:P}=function(){const e=(0,a.useContext)(T);if(e===S)throw new C.dV("DocSidebarItemsExpandedStateProvider");return e}(),W=function(e){void 0===e&&(e=!g),P(e?null:c),k(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const i=(0,C.ZC)(t);(0,a.useEffect)((()=>{t&&!i&&n&&o(!1)}),[t,i,n,o])}({isActive:v,collapsed:g,updateCollapsed:W}),(0,a.useEffect)((()=>{m&&null!=N&&N!==c&&f&&k(!0)}),[m,N,c,k,f]),(0,b.jsxs)("li",{className:(0,I.A)(s.G.docs.docSidebarItemCategory,s.G.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":g},h),children:[(0,b.jsxs)("div",{className:(0,I.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":A}),children:[(0,b.jsxs)(w.A,{className:(0,I.A)("menu__link",{"menu__link--sublist":m,"menu__link--sublist-caret":!p&&m,"menu__link--active":v}),onClick:m?e=>{n?.(t),p?W(!1):(e.preventDefault(),W())}:()=>{n?.(t)},"aria-current":A?"page":void 0,"aria-expanded":m?!g:void 0,href:m?_??"#":_,...r,children:[x?.icon?(0,b.jsx)(M.k,{className:"icon",src:(0,E.Ay)(x.icon)}):null,u]}),p&&m&&(0,b.jsx)(H,{collapsed:g,categoryLabel:u,onClick:e=>{e.preventDefault(),W()}})]}),(0,b.jsx)(B.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:g,children:(0,b.jsx)(z,{items:d,tabIndex:g?-1:0,onItemClick:n,activePath:o,level:i+1})})]})}var W=n(22887),G=n(15891);const R={menuExternalLink:"menuExternalLink_NnFM"};function D(e){let{item:t,onItemClick:n,activePath:a,level:o,index:i,...c}=e;const{href:r,label:d,className:u,autoAddBaseUrl:m,customProps:h}=t,p=(0,l.w8)(t,a),x=(0,W.A)(r);return(0,b.jsx)("li",{className:(0,I.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(o),"menu__list-item",u),children:(0,b.jsxs)(w.A,{className:(0,I.A)("menu__link",!x&&R.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:m,"aria-current":p?"page":void 0,to:r,...x&&{onClick:n?()=>n(t):void 0},...c,children:[h?.icon?(0,b.jsx)(M.k,{className:"icon",src:(0,E.Ay)(h.icon)}):null,d,!x&&(0,b.jsx)(G.A,{})]})},d)}const F={menuHtmlItem:"menuHtmlItem_PEWV"};function V(e){let{item:t,level:n,index:a}=e;const{value:o,defaultStyle:i,className:l}=t;return(0,b.jsx)("li",{className:(0,I.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(n),i&&[F.menuHtmlItem,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:o}},a)}function U(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,b.jsx)(P,{item:t,...n});case"html":return(0,b.jsx)(V,{item:t,...n});default:return(0,b.jsx)(D,{item:t,...n})}}function Y(e){let{items:t,...n}=e;const a=(0,l.Y)(t,n.activePath);return(0,b.jsx)(N,{children:a.map(((e,t)=>(0,b.jsx)(U,{item:e,index:t,...n},t)))})}const z=(0,a.memo)(Y),q={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function K(e){let{path:t,sidebar:n,className:i}=e;const l=function(){const{isActive:e}=(0,k.M)(),[t,n]=(0,a.useState)(e);return(0,d.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,b.jsx)("nav",{"aria-label":(0,r.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.A)("menu thin-scrollbar",q.menu,l&&q.menuWithAnnouncementBar,i),children:(0,b.jsx)("ul",{className:(0,o.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(z,{items:n,activePath:t,level:1})})})}const O="sidebar_njMd",J="sidebarWithHideableNavbar_wUlq",Q="sidebarHidden_VK0M",X="sidebarLogo_isFc";function Z(e){let{path:t,sidebar:n,onCollapse:a,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:l}}}=(0,j.p)();return(0,b.jsxs)("div",{className:(0,o.A)(O,s&&J,i&&Q),children:[s&&(0,b.jsx)(_.A,{tabIndex:-1,className:X}),(0,b.jsx)(K,{path:t,sidebar:n}),l&&(0,b.jsx)(g,{onClick:a})]})}const $=a.memo(Z);var ee=n(63065),te=n(5528);const ne=e=>{let{sidebar:t,path:n}=e;const a=(0,te.M)();return(0,b.jsx)("ul",{className:(0,o.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(z,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ae(e){return(0,b.jsx)(ee.GX,{component:ne,props:e})}const oe=a.memo(ae);function ie(e){const t=(0,f.l)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,b.jsxs)(b.Fragment,{children:[n&&(0,b.jsx)($,{...e}),a&&(0,b.jsx)(oe,{...e})]})}const se={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function le(e){let{toggleSidebar:t}=e;return(0,b.jsx)("div",{className:se.expandButton,title:(0,r.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,r.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,b.jsx)(v,{className:se.expandButtonIcon})})}const ce={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function re(e){let{children:t}=e;const n=(0,c.t)();return(0,b.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function de(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:l}=(0,x.zy)(),[c,r]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&r(!1),!c&&(0,p.O)()&&r(!0),i((e=>!e))}),[i,c]);return(0,b.jsx)("aside",{className:(0,o.A)(s.G.docs.docSidebarContainer,ce.docSidebarContainer,n&&ce.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ce.docSidebarContainer)&&n&&r(!0)},children:(0,b.jsx)(re,{children:(0,b.jsxs)("div",{className:(0,o.A)(ce.sidebarViewport,c&&ce.sidebarViewportHidden),children:[(0,b.jsx)(ie,{sidebar:t,path:l,onCollapse:d,isHidden:c}),c&&(0,b.jsx)(le,{toggleSidebar:d})]})})})}const ue={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function me(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,c.t)();return(0,b.jsx)("main",{className:(0,o.A)(ue.docMainContainer,(t||!a)&&ue.docMainContainerEnhanced),children:(0,b.jsx)("div",{className:(0,o.A)("container padding-top--md padding-bottom--lg",ue.docItemWrapper,t&&ue.docItemWrapperEnhanced),children:n})})}const be={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function he(e){let{children:t}=e;const n=(0,c.t)(),[o,i]=(0,a.useState)(!1);return(0,b.jsxs)("div",{className:be.docsWrapper,children:[(0,b.jsx)(h,{}),(0,b.jsxs)("div",{className:be.docRoot,children:[n&&(0,b.jsx)(de,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:i}),(0,b.jsx)(me,{hiddenSidebarContainer:o,children:t})]})]})}var pe=n(65932);function xe(e){const t=(0,l.B5)(e);if(!t)return(0,b.jsx)(pe.A,{});const{docElement:n,sidebarName:a,sidebarItems:r}=t;return(0,b.jsx)(i.e3,{className:(0,o.A)(s.G.page.docsDocPage),children:(0,b.jsx)(c.V,{name:a,items:r,children:(0,b.jsx)(he,{children:n})})})}},65932:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var a=n(18215),o=n(50539),i=n(9303),s=n(74848);function l(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,a.A)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(i.A,{as:"h1",className:"hero__title",children:(0,s.jsx)(o.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);
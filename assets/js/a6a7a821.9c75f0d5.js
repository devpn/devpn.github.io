"use strict";(self.webpackChunklego_front_devpn=self.webpackChunklego_front_devpn||[]).push([[4590],{64317:(e,n,t)=>{t.d(n,{Z:()=>f});var i=t(1413),r=t(45987),o=t(22270),s=t(67294),a=t(66758),l=t(48490),c=t(85893),d=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],u=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],m=function(e,n){var t=e.fieldProps,u=e.children,m=e.params,h=e.proFieldProps,p=e.mode,f=e.valueEnum,x=e.request,v=e.showSearch,g=e.options,j=(0,r.Z)(e,d),Z=(0,s.useContext)(a.Z);return(0,c.jsx)(l.Z,(0,i.Z)((0,i.Z)({valueEnum:(0,o.h)(f),request:x,params:m,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,i.Z)({options:g,mode:p,showSearch:v,getPopupContainer:Z.getPopupContainer},t),ref:n,proFieldProps:h},j),{},{children:u}))},h=s.forwardRef((function(e,n){var t=e.fieldProps,d=e.children,m=e.params,h=e.proFieldProps,p=e.mode,f=e.valueEnum,x=e.request,v=e.options,g=(0,r.Z)(e,u),j=(0,i.Z)({options:v,mode:p||"multiple",labelInValue:!0,showSearch:!0,suffixIcon:null,autoClearSearchValue:!0,optionLabelProp:"label"},t),Z=(0,s.useContext)(a.Z);return(0,c.jsx)(l.Z,(0,i.Z)((0,i.Z)({valueEnum:(0,o.h)(f),request:x,params:m,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,i.Z)({getPopupContainer:Z.getPopupContainer},j),ref:n,proFieldProps:h},g),{},{children:d}))})),p=s.forwardRef(m);p.SearchSelect=h,p.displayName="ProFormComponent";const f=p},90672:(e,n,t)=>{t.d(n,{Z:()=>d});var i=t(1413),r=t(45987),o=t(67294),s=t(48490),a=t(85893),l=["fieldProps","proFieldProps"],c=function(e,n){var t=e.fieldProps,o=e.proFieldProps,c=(0,r.Z)(e,l);return(0,a.jsx)(s.Z,(0,i.Z)({ref:n,valueType:"textarea",fieldProps:t,proFieldProps:o},c))};const d=o.forwardRef(c)},59047:(e,n,t)=>{t.d(n,{Z:()=>L});var i=t(67294),r=t(85893);function o(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=i.Children.toArray(e),t=n.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),o=n.filter((e=>e!==t)),s=t?.props.children;return{mdxAdmonitionTitle:s,rest:o.length>0?(0,r.jsx)(r.Fragment,{children:o}):null}}(e.children),o=e.title??n;return{...e,...o&&{title:o},children:t}}var s=t(36905),a=t(95999),l=t(35281);const c={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:n,className:t,children:i}=e;return(0,r.jsx)("div",{className:(0,s.Z)(l.k.common.admonition,l.k.common.admonitionType(n),c.admonition,t),children:i})}function u(e){let{icon:n,title:t}=e;return(0,r.jsxs)("div",{className:c.admonitionHeading,children:[(0,r.jsx)("span",{className:c.admonitionIcon,children:n}),t]})}function m(e){let{children:n}=e;return n?(0,r.jsx)("div",{className:c.admonitionContent,children:n}):null}function h(e){const{type:n,icon:t,title:i,children:o,className:s}=e;return(0,r.jsxs)(d,{type:n,className:s,children:[(0,r.jsx)(u,{title:i,icon:t}),(0,r.jsx)(m,{children:o})]})}function p(e){return(0,r.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,r.jsx)(p,{}),title:(0,r.jsx)(a.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,r.jsx)(h,{...f,...e,className:(0,s.Z)("alert alert--secondary",e.className),children:e.children})}function v(e){return(0,r.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const g={icon:(0,r.jsx)(v,{}),title:(0,r.jsx)(a.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function j(e){return(0,r.jsx)(h,{...g,...e,className:(0,s.Z)("alert alert--success",e.className),children:e.children})}function Z(e){return(0,r.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const y={icon:(0,r.jsx)(Z,{}),title:(0,r.jsx)(a.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function w(e){return(0,r.jsx)(h,{...y,...e,className:(0,s.Z)("alert alert--info",e.className),children:e.children})}function P(e){return(0,r.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const N={icon:(0,r.jsx)(P,{}),title:(0,r.jsx)(a.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,r.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const b={icon:(0,r.jsx)(C,{}),title:(0,r.jsx)(a.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const T={icon:(0,r.jsx)(P,{}),title:(0,r.jsx)(a.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const S={...{note:x,tip:j,info:w,warning:function(e){return(0,r.jsx)(h,{...N,...e,className:(0,s.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,r.jsx)(h,{...b,...e,className:(0,s.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,r.jsx)(x,{title:"secondary",...e}),important:e=>(0,r.jsx)(w,{title:"important",...e}),success:e=>(0,r.jsx)(j,{title:"success",...e}),caution:function(e){return(0,r.jsx)(h,{...T,...e,className:(0,s.Z)("alert alert--warning",e.className),children:e.children})}}};function L(e){const n=o(e),t=(i=n.type,S[i]||(console.warn(`No admonition component found for admonition type "${i}". Using Info as fallback.`),S.info));var i;return(0,r.jsx)(t,{...n})}},98354:(e,n,t)=>{t.d(n,{Z:()=>a});var i=t(86010);const r={card:"card_D5QJ",head:"head__dCx",body:"body_BFWu"};var o=t(34410),s=t(85893);function a(e){let{title:n,extra:t,headStyle:a,bodyStyle:l,style:c,loading:d,children:u,className:m}=e;return(0,s.jsxs)("div",{className:(0,i.Z)(r.card,m),style:c,children:[n||t?(0,s.jsxs)("div",{className:(0,i.Z)("space-bt",r.head),style:a,children:[(0,s.jsx)("h3",{children:n}),(0,s.jsx)("div",{children:t})]}):null,(0,s.jsx)("div",{className:r.body,style:l,children:d?(0,s.jsx)(o.Z,{}):u})]})}},78156:(e,n,t)=>{t.r(n),t.d(n,{default:()=>C});var i=t(62813),r=t(67294),o=t(24969),s=t(21032),a=t(26594),l=t(7442),c=t(24599),d=t(15867),u=t(2058),m=t(85576),h=t(80052),p=t(5966),f=t(64317),x=t(90672),v=t(16550),g=t(33692),j=t(42590),Z=t(98354),y=t(67506),w=t(59047),P=t(85893);function N(){const e=(0,r.useRef)(a.tO.get(a.VD.fileIds,[])),n=(0,r.useRef)(void 0),{userInfo:t,inited:i,open:N,logout:C,setOpen:b,setSuccess:T}=(0,j.Pc)(),[S,L]=(0,r.useState)(!1),[R,z]=(0,r.useState)(""),[q,k]=(0,r.useState)([]),[F,I]=(0,r.useState)(!1),{message:M}=(0,l.S)(),_=(0,v.k6)(),H=()=>{const n=s.A.conn().lasturl()||"";k(e.current.map((e=>{const[t,i,r]=e.split("|");return{uid:t,ids:e,status:"done",url:(0,a.pv)(n,`/file/${r||i}`),preview:(0,a.pv)(n,`/file/${i}`)}})))},E=async i=>{const r=s.A.conn().token();if(!r||!t)return n.current=i,void b(j.Lo.Login);const o=await s.A.conn().url();if(!o)return M.warning("\u627e\u4e0d\u5230\u670d\u52a1\u5668"),void H();n.current=void 0;const l=i.file,c=`${o}/up/image/${l.name}`,d=new XMLHttpRequest;d.open("POST",c),d.setRequestHeader("token",r),d.onreadystatechange=()=>{if(4==d.readyState){if(200==d.status){const n=d.responseText;e.current.indexOf(n)>-1?M.warning("\u56fe\u7247\u5df2\u7ecf\u5b58\u5728\u5217\u8868\u4e2d"):(e.current.push(n),a.tO.set(a.VD.fileIds,e.current))}else M.error("\u4e0a\u4f20\u56fe\u7247\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");H()}},d.send(l)};(0,r.useEffect)((()=>{t&&i&&H()}),[i]),(0,r.useEffect)((()=>{t&&n.current?E(n.current):n.current&&!t&&N==j.Lo.None&&i?(n.current=void 0,H()):!i||t||n.current||N!=j.Lo.None||(e.current.length=0,a.tO.remove(a.VD.fileIds),H())}),[t,N]);return(0,P.jsxs)(Z.Z,{title:"\u65b0\u5efa\u53cd\u9988\u95ee\u9898",extra:(0,P.jsx)(g.Z,{to:"/ticket",children:"\u8fd4\u56de\u5217\u8868"}),loading:!i,children:[t?.free?(0,P.jsxs)(w.Z,{type:"warning",children:["\u5f53\u524d\u662f\u514d\u8d39\u8bd5\u7528\u72b6\u6001\uff0c\u8be5\u8d26\u53f7\u5c06\u4f1a\u5728\u8bd5\u7528\u5957\u9910\u7ed3\u675f\u540e\u88ab\u7cfb\u7edf\u56de\u6536\uff0c\u5efa\u8bae\u4f7f\u7528\u81ea\u5df1\u7684\u8d26\u53f7\u6765\u53cd\u9988\u95ee\u9898\u3002",(0,P.jsx)(d.ZP,{onClick:()=>{C(),b(j.Lo.Login)},children:"\u91cd\u65b0\u767b\u5f55"})]}):null,(0,P.jsxs)(h.A,{loading:F,style:{margin:"auto",marginTop:8,maxWidth:600},layout:"vertical",onFinish:async n=>{if(t){I(!0),e.current.length>0&&(n.attach=e.current),n.origin=(0,a.Wd)();try{await(0,c.s6)(n),e.current.length=0,a.tO.remove(a.VD.fileIds),T({duration:60,placement:"topRight",message:"\u63d0\u4ea4\u6210\u529f",description:"\u6211\u4eec\u5c06\u4f1a\u5c3d\u5feb\u56de\u590d\u60a8\uff0c\u8bf7\u5728\u7ad9\u5185\u67e5\u770b\u5ba2\u670d\u53cd\u9988\u5185\u5bb9\u3002"}),_.push("/ticket")}catch(i){M.error("\u63d0\u4ea4\u4e0d\u6210\u529f\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}finally{I(!1)}}else b(j.Lo.Login)},children:[(0,P.jsx)(p.Z,{label:"\u6807\u9898",name:"title",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u53cd\u9988\u95ee\u9898\u6807\u9898"},{max:200,message:"\u53cd\u9988\u95ee\u9898\u6807\u9898\u8fc7\u957f\uff0c\u8bf7\u7cbe\u7b80\u95ee\u9898\u6807\u9898"}],placeholder:"\u9700\u8981\u53cd\u9988\u95ee\u9898\u7684\u6807\u9898"}),(0,P.jsx)(f.Z,{label:"\u64cd\u4f5c\u7cfb\u7edf",name:"os",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u64cd\u4f5c\u7cfb\u7edf"}],valueEnum:a.oU}),(0,P.jsx)(f.Z,{label:"\u8fde\u63a5\u534f\u8bae",name:"proto",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8fde\u63a5\u534f\u8bae"}],valueEnum:a.P6}),(0,P.jsx)(x.Z,{label:"\u53cd\u9988\u5185\u5bb9",name:"content",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u53cd\u9988\u5185\u5bb9"},{max:1e4,message:"\u5185\u5bb9\u8fc7\u957f\uff0c\u8bf7\u7cbe\u7b80\u63cf\u8ff0\u5185\u5bb9"}],placeholder:`\u8bf7\u8be6\u7ec6\u63cf\u8ff0\u53cd\u9988\u5185\u5bb9\uff0c\u6700\u597d\u80fd\u914d\u4e0a\u76f8\u5173\u7684\u622a\u56fe\uff1b\u60a8\u8fd8\u53ef\u4ee5\u76f4\u63a5\u53d1\u9001\u90ae\u4ef6\u5230 ${y.Z.info_mail}`,fieldProps:{rows:10}}),(0,P.jsx)(u.Z,{name:"attach",accept:"image/jpg,image/jpeg,image/png",listType:"picture-card",fileList:q,onRemove:n=>{const t=n.ids,i=e.current.indexOf(t);i>-1&&(e.current.splice(i,1),a.tO.set(a.VD.fileIds,e.current))},onPreview:async e=>{z(e.preview),L(!0)},onChange:e=>{let{fileList:n}=e;return k(n)},customRequest:E,children:q.length>=5?null:(0,P.jsxs)("div",{children:[(0,P.jsx)(o.Z,{}),(0,P.jsx)("div",{style:{marginTop:8},children:"\u6dfb\u52a0\u56fe\u7247"})]})})]}),(0,P.jsx)(m.Z,{open:S,footer:null,onCancel:()=>L(!1),children:(0,P.jsx)("img",{style:{width:"100%"},src:R})})]})}function C(){return(0,P.jsx)(i.Z,{title:"\u65b0\u5efa\u53cd\u9988\u95ee\u9898",children:(0,P.jsx)("main",{children:(0,P.jsx)("div",{className:"container contain-margin",children:(0,P.jsx)(N,{})})})})}}}]);
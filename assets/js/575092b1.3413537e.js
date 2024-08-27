"use strict";(self.webpackChunklego_front_devpn=self.webpackChunklego_front_devpn||[]).push([[1099],{59047:(e,t,i)=>{i.d(t,{Z:()=>R});var n=i(67294),s=i(85893);function l(e){const{mdxAdmonitionTitle:t,rest:i}=function(e){const t=n.Children.toArray(e),i=t.find((e=>n.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),l=t.filter((e=>e!==i)),c=i?.props.children;return{mdxAdmonitionTitle:c,rest:l.length>0?(0,s.jsx)(s.Fragment,{children:l}):null}}(e.children),l=e.title??t;return{...e,...l&&{title:l},children:i}}var c=i(36905),a=i(95999),r=i(35281);const o={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:t,className:i,children:n}=e;return(0,s.jsx)("div",{className:(0,c.Z)(r.k.common.admonition,r.k.common.admonitionType(t),o.admonition,i),children:n})}function h(e){let{icon:t,title:i}=e;return(0,s.jsxs)("div",{className:o.admonitionHeading,children:[(0,s.jsx)("span",{className:o.admonitionIcon,children:t}),i]})}function u(e){let{children:t}=e;return t?(0,s.jsx)("div",{className:o.admonitionContent,children:t}):null}function x(e){const{type:t,icon:i,title:n,children:l,className:c}=e;return(0,s.jsxs)(d,{type:t,className:c,children:[(0,s.jsx)(h,{title:n,icon:i}),(0,s.jsx)(u,{children:l})]})}function j(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const m={icon:(0,s.jsx)(j,{}),title:(0,s.jsx)(a.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function f(e){return(0,s.jsx)(x,{...m,...e,className:(0,c.Z)("alert alert--secondary",e.className),children:e.children})}function v(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const Z={icon:(0,s.jsx)(v,{}),title:(0,s.jsx)(a.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function p(e){return(0,s.jsx)(x,{...Z,...e,className:(0,c.Z)("alert alert--success",e.className),children:e.children})}function g(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const _={icon:(0,s.jsx)(g,{}),title:(0,s.jsx)(a.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function y(e){return(0,s.jsx)(x,{..._,...e,className:(0,c.Z)("alert alert--info",e.className),children:e.children})}function b(e){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const N={icon:(0,s.jsx)(b,{}),title:(0,s.jsx)(a.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function w(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const C={icon:(0,s.jsx)(w,{}),title:(0,s.jsx)(a.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const $={icon:(0,s.jsx)(b,{}),title:(0,s.jsx)(a.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const T={...{note:f,tip:p,info:y,warning:function(e){return(0,s.jsx)(x,{...N,...e,className:(0,c.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,s.jsx)(x,{...C,...e,className:(0,c.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,s.jsx)(f,{title:"secondary",...e}),important:e=>(0,s.jsx)(y,{title:"important",...e}),success:e=>(0,s.jsx)(p,{title:"success",...e}),caution:function(e){return(0,s.jsx)(x,{...$,...e,className:(0,c.Z)("alert alert--warning",e.className),children:e.children})}}};function R(e){const t=l(e),i=(n=t.type,T[n]||(console.warn(`No admonition component found for admonition type "${n}". Using Info as fallback.`),T.info));var n;return(0,s.jsx)(i,{...t})}},98354:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(86010);const s={card:"card_D5QJ",head:"head__dCx",body:"body_BFWu"};var l=i(34410),c=i(85893);function a(e){let{title:t,extra:i,headStyle:a,bodyStyle:r,style:o,loading:d,children:h,className:u}=e;return(0,c.jsxs)("div",{className:(0,n.Z)(s.card,u),style:o,children:[t||i?(0,c.jsxs)("div",{className:(0,n.Z)("space-bt",s.head),style:a,children:[(0,c.jsx)("h3",{children:t}),(0,c.jsx)("div",{children:i})]}):null,(0,c.jsx)("div",{className:s.body,style:r,children:d?(0,c.jsx)(l.Z,{}):h})]})}},22122:(e,t,i)=>{i.d(t,{Z:()=>b});var n=i(24599),s=i(26594),l=i(55241),c=i(40411),a=i(72269),r=i(15867),o=i(45605),d=i(21640),h=i(7442),u=i(16550);const x={comboTitle:"comboTitle_mST9",comboRow:"comboRow_nWUA",comboAction:"comboAction_Qqfx",trafficRow:"trafficRow_Kj5Q"};var j=i(59047),m=i(67294),f=i(33692),v=i(66629),Z=i(86010),p=i(42590),g=i(85893);const _=6048e5;function y(e){let{item:t}=e;if("old"==t.qname){const e=(0,s.p4)(t);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(v.Z,{title:"VPN\u6d41\u91cf",value:"\u65e0\u9650\u5236"}),(0,g.jsx)(v.Z,{title:"VPN\u540c\u65f6\u5728\u7ebf",value:`${t.num}\u53f0`}),(0,g.jsx)(v.Z,{title:(0,g.jsxs)(l.Z,{content:(0,g.jsxs)("div",{className:x.trafficRow,children:[(0,g.jsx)(v.Z,{title:"\u5957\u9910\u6d41\u91cf",value:(0,s.$j)(t.traffic)}),(0,g.jsx)(v.Z,{title:"\u7ee7\u627f\u6d41\u91cf",value:(0,s.$j)(t.traffic_from)}),(0,g.jsx)(v.Z,{title:"\u8d2d\u4e70\u6d41\u91cf",value:(0,s.$j)(t.traffic_buy)}),(0,g.jsx)(v.Z,{title:"\u8d60\u9001\u6d41\u91cf",value:(0,s.$j)(t.traffic_gift)}),(0,g.jsx)(v.Z,{title:"\u5df2\u4f7f\u7528\u6d41\u91cf",value:(0,s.$j)(t.proxy_traffic+(t.proxy_traffic_up||0))})]}),children:["\u53ef\u7528\u4ee3\u7406\u6d41\u91cf",(0,g.jsx)(o.Z,{style:{color:"rgba(0, 0, 0, 0.43)",marginLeft:4}})]}),value:e>0?(0,s.$j)(e):"\u65e0\u53ef\u7528\u6d41\u91cf"}),(0,g.jsx)(v.Z,{title:"\u4ee3\u7406\u540c\u65f6\u5728\u7ebf",value:"\u65e0\u9650\u5236"})]})}if("traffic"==t.qname){const e=(0,s.p4)(t);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(v.Z,{title:(0,g.jsxs)(l.Z,{content:(0,g.jsxs)("div",{className:x.trafficRow,children:[(0,g.jsx)(v.Z,{title:"\u5957\u9910\u6d41\u91cf",value:(0,s.$j)(t.traffic)}),(0,g.jsx)(v.Z,{title:"\u7ee7\u627f\u6d41\u91cf",value:(0,s.$j)(t.traffic_from)}),(0,g.jsx)(v.Z,{title:"\u8d2d\u4e70\u6d41\u91cf",value:(0,s.$j)(t.traffic_buy)}),(0,g.jsx)(v.Z,{title:"\u8d60\u9001\u6d41\u91cf",value:(0,s.$j)(t.traffic_gift)}),(0,g.jsx)(v.Z,{title:"\u5df2\u4f7f\u7528\u6d41\u91cf",value:(0,s.$j)((t.proxy_traffic||0)+(t.proxy_traffic_up||0)+(t.vpn_traffic||0)+(t.vpn_traffic_up||0))})]}),children:["\u53ef\u7528\u6d41\u91cf",(0,g.jsx)(o.Z,{style:{marginLeft:4}})]}),value:e>0?(0,s.$j)(e):"\u65e0\u53ef\u7528\u6d41\u91cf"}),(0,g.jsx)(v.Z,{title:"\u8fde\u63a5\u6570",value:"\u65e0\u9650\u5236"}),(0,g.jsx)(v.Z,{title:"\u6d41\u91cf\u7ee7\u627f",value:t.is_inherit?"\u662f":"\u5426"}),(0,g.jsx)(v.Z,{title:"\u6309\u6708\u8ba1\u7b97\u6d41\u91cf",value:t.is_month?"\u662f":"\u5426"})]})}return"unlimit"==t.qname?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(v.Z,{title:(0,g.jsxs)(l.Z,{content:(0,g.jsxs)("div",{className:x.trafficRow,children:[(0,g.jsx)(v.Z,{title:"\u5957\u9910\u6d41\u91cf",value:"\u65e0\u9650\u5236"}),(0,g.jsx)(v.Z,{title:"\u7ee7\u627f\u6d41\u91cf",value:(0,s.$j)(t.traffic_from)}),(0,g.jsx)(v.Z,{title:"\u8d2d\u4e70\u6d41\u91cf",value:(0,s.$j)(t.traffic_buy)}),(0,g.jsx)(v.Z,{title:"\u8d60\u9001\u6d41\u91cf",value:(0,s.$j)(t.traffic_gift)}),(0,g.jsx)(v.Z,{title:"\u5df2\u4f7f\u7528\u6d41\u91cf",value:(0,s.$j)((t.proxy_traffic||0)+(t.proxy_traffic_up||0)+(t.vpn_traffic||0)+(t.vpn_traffic_up||0))})]}),children:["\u53ef\u7528\u6d41\u91cf",(0,g.jsx)(o.Z,{style:{marginLeft:4}})]}),value:"\u65e0\u9650\u5236"}),(0,g.jsx)(v.Z,{title:"\u8fde\u63a5\u6570",value:"\u65e0\u9650\u5236"}),(0,g.jsx)(v.Z,{title:"\u6d41\u91cf\u7ee7\u627f",value:t.is_inherit?"\u662f":"\u5426"}),(0,g.jsx)(v.Z,{title:"\u6309\u6708\u8ba1\u7b97\u6d41\u91cf",value:t.is_month?"\u662f":"\u5426"})]}):null}function b(e){let{item:t,last:i,run:l}=e;const{userInfo:o,updateUserInfo:b}=(0,p.Pc)(),{modal:N,message:w}=(0,h.S)(),[C,$]=(0,m.useState)(-1),T=(0,u.k6)(),R=()=>{if(i&&t.started>0&&t.finished>0&&(!t.renew||t.sum>o.coin)){const e=+new Date;if(t.finished<e+_)return void $(Math.max(t.finished-e,0))}-1!=C&&$(-1)};(0,m.useEffect)((()=>{R();const e=setInterval(R,1e3);return()=>{clearInterval(e)}}),[t,i]);return(0,g.jsxs)(c.Z.Ribbon,{text:t.started?"\u4f7f\u7528\u4e2d":"\u8fd8\u672a\u542f\u7528",color:t.started?"green":"gray",children:[(0,g.jsx)("h3",{className:x.comboTitle,children:(0,s.rt)(t.hour)}),(0,g.jsxs)("div",{className:x.comboRow,children:[(0,g.jsx)(v.Z,{title:"\u521b\u5efa\u65f6\u95f4",value:(0,s.uq)(t.created)}),(0,g.jsx)(v.Z,{title:"\u5f00\u59cb\u65f6\u95f4",value:(0,s.uq)(t.started,"\u8fd8\u672a\u5f00\u59cb")}),(0,g.jsx)(v.Z,{title:"\u5230\u671f\u65f6\u95f4",value:(0,s.uq)(t.finished)}),(0,g.jsx)(y,{item:t}),(0,g.jsx)(v.Z,{title:"\u81ea\u52a8\u7eed\u8d39",value:(0,g.jsx)(a.Z,{disabled:t.sum<=0,defaultChecked:!!t.renew,checkedChildren:"\u5f00",unCheckedChildren:"\u5173",onChange:e=>{(0,n.vp)(t.id,e).then((()=>{t.renew=e,s.tO.remove(s.VD.comboList),R(),w.success(e?"\u8bbe\u7f6e\u81ea\u52a8\u7eed\u8d39\u6210\u529f":"\u53d6\u6d88\u81ea\u52a8\u7eed\u8d39\u6210\u529f")})).catch((()=>{w.error("\u8bbe\u7f6e\u4e0d\u6210\u529f\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}))}})})]}),(0,s.p4)(t)<0?(0,g.jsx)(j.Z,{type:"warning",children:"\u5df2\u7ecf\u6ca1\u6709\u53ef\u7528\u6d41\u91cf\uff0c\u90e8\u5206\u534f\u8bae\u53ef\u80fd\u4f1a\u8fde\u63a5\u4e0d\u6210\u529f\u3002"}):null,C>0?(0,g.jsxs)(j.Z,{type:"warning",children:["\u5957\u9910\u8ddd\u79bb\u7ed3\u675f\u8fd8\u5269 ",(0,g.jsx)("strong",{children:(0,s.WJ)(C)}),"\uff0c\u4e3a\u4e86\u907f\u514d\u670d\u52a1\u4e2d\u65ad\uff0c\u5efa\u8bae",(0,g.jsx)(f.Z,{to:"/combo",children:"\u8d2d\u4e70\u5957\u9910"}),"\u3002"]}):0==C?(0,g.jsxs)(j.Z,{type:"warning",children:["\u5957\u9910\u5df2\u7ecf\u5230\u671f\uff0c\u670d\u52a1\u5373\u5c06\u505c\u6b62\uff0c\u8d76\u5feb",(0,g.jsx)(f.Z,{to:"/combo",children:"\u8d2d\u4e70\u5957\u9910"}),"\u3002"]}):null,(0,g.jsxs)("div",{className:(0,Z.Z)("space",x.comboAction),children:[(0,g.jsx)(r.ZP,{disabled:t.sum<=0,onClick:()=>T.push(`/traffic?q=${t.id}`),children:"\u8d2d\u4e70\u6d41\u91cf"},"traffic"),(0,g.jsx)(r.ZP,{type:"dashed",danger:!0,onClick:()=>(e=>{(0,n.q1)(e.id).then((async t=>{await N.confirm({title:"\u786e\u8ba4\u53d6\u6d88\u5957\u9910\uff1f",icon:(0,g.jsx)(d.Z,{}),content:e.started>0&&e.finished>0?(t>0?`\u5927\u7ea6\u8fd8\u6709\u91d1\u989d ${t} \u8fd4\u56de\u60a8\u7684\u8d26\u53f7\u4f59\u989d\u91cc\uff0c`:"\u5df2\u7ecf\u6ca1\u6709\u4f59\u989d\u8fd4\u56de\u5230\u60a8\u7684\u8d26\u53f7\uff0c")+(i?"\u5957\u9910\u670d\u52a1\u5c06\u7ec8\u6b62\u3002":"\u5957\u9910\u5217\u8868\u91cc\u4e0b\u4e00\u4e2a\u5957\u9910\u5c06\u4f1a\u81ea\u52a8\u542f\u7528\u3002"):t>0?`\u8fd8\u6ca1\u6709\u542f\u7528\u7684\u5957\u9910\uff0c\u5957\u9910\u91d1\u989d ${t} \u5c06\u8fd4\u56de\u60a8\u7684\u8d26\u53f7\u4f59\u989d\u91cc\u3002`:"\u6ca1\u6709\u4f59\u989d\u8fd4\u56de\u5230\u60a8\u7684\u8d26\u53f7\u3002"})&&(0,n.Re)(e.id).then((()=>{w.success("\u64cd\u4f5c\u6210\u529f"),s.tO.remove(s.VD.comboList),l(e),b()})).catch((()=>{w.error("\u53d6\u6d88\u5957\u9910\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}))})).catch((()=>{w.error("\u83b7\u53d6\u5957\u9910\u6570\u636e\u5931\u8d25")}))})(t),children:"\u53d6\u6d88\u5957\u9910"},"cancel")]})]})}},66629:(e,t,i)=>{i.d(t,{Z:()=>l});const n={itemList:"itemList_yUgU",itemTitle:"itemTitle_SCiT"};var s=i(85893);function l(e){let{title:t,value:i}=e;return(0,s.jsxs)("div",{className:n.itemList,children:[(0,s.jsx)("div",{className:n.itemTitle,children:t},"title"),(0,s.jsx)("div",{children:i},"value")]})}},96749:(e,t,i)=>{i.r(t),i.d(t,{default:()=>j});var n=i(33692),s=i(16550),l=i(98354),c=i(22122),a=i(34410),r=i(42590),o=i(24599),d=i(62813),h=i(2487),u=i(67294),x=i(85893);function j(){const{userInfo:e,inited:t}=(0,r.Pc)(),[i,j]=(0,u.useState)(void 0),[m,f]=(0,u.useState)(!1),v=t=>{e&&(f(!0),(0,o.dw)().then((e=>{j(e)})).finally((()=>{f(!1)})))};return(0,u.useEffect)(v,[e]),t?e&&e.name?(0,x.jsx)(d.Z,{title:`${e.nickname??e.name} \u7684\u5957\u9910\u5217\u8868`,children:(0,x.jsx)("main",{children:(0,x.jsx)("div",{className:"container contain-margin",children:(0,x.jsxs)("div",{className:"space-vb",children:[(0,x.jsx)(l.Z,{title:"\u5957\u9910\u5217\u8868",extra:(0,x.jsxs)("div",{className:"space",children:[(0,x.jsx)(n.Z,{to:"/combo",children:"\u8d2d\u4e70\u5957\u9910"}),(0,x.jsx)(n.Z,{to:"/combo/finished",children:"\u5df2\u7ed3\u675f\u5957\u9910"})]}),loading:m,children:(0,x.jsx)(h.Z,{rowKey:"id",grid:{gutter:16,xs:1,sm:1,md:2,lg:3,xl:3,xxl:3},dataSource:i,renderItem:(e,t)=>(0,x.jsx)(h.Z.Item,{children:(0,x.jsx)(l.Z,{bodyStyle:{padding:0},children:(0,x.jsx)(c.Z,{item:e,last:i.length<=t+1,run:()=>{v()}})})},e.id)})}),(0,x.jsxs)(l.Z,{title:"\u8bf4\u660e",children:[(0,x.jsx)("h4",{children:"\u6e29\u99a8\u63d0\u793a"}),(0,x.jsx)("p",{children:"\u53ea\u663e\u793a\u6709\u6548\u671f\u5185\u7684\u5957\u9910\uff0c\u5217\u8868\u4e2d\u7b2c\u4e00\u4e2a\u5957\u9910\u5c31\u662f\u6b63\u5728\u4f7f\u7528\u7684\u5957\u9910\uff0c\u5230\u671f\u7684\u5957\u9910\u7cfb\u7edf\u4f1a\u81ea\u52a8\u5220\u9664\u3002"}),(0,x.jsx)("h4",{children:"\u81ea\u52a8\u7eed\u8d39"}),(0,x.jsx)("p",{children:"\u5982\u679c\u6b63\u5728\u4f7f\u7528\u7684\u5957\u9910\u5230\u671f\u6216\u8005\u6d41\u91cf\u4f7f\u7528\u8d85\u989d\uff0c\u800c\u53c8\u6ca1\u6709\u8d2d\u4e70\u65b0\u7684\u5957\u9910\uff0c\u5728\u8d26\u53f7\u4f59\u989d\u8db3\u591f\u652f\u4ed8\u5f53\u524d\u5957\u9910\u7684\u60c5\u51b5\u4e0b\uff0c\u5141\u8bb8\u81ea\u52a8\u7eed\u8d39\u5c06\u81ea\u52a8\u751f\u6210\u65b0\u7684\u5957\u9910\u3002\u8d60\u9001\u7684\u5957\u9910\u65e0\u6cd5\u81ea\u52a8\u7eed\u8d39\u3002"}),(0,x.jsx)("h4",{children:"\u8d2d\u4e70\u6d41\u91cf"}),(0,x.jsx)("p",{children:"\u5f53\u60a8\u7684\u5957\u9910\u6d41\u91cf\u4e0d\u8db3\u65f6\uff0c\u8bf7\u70b9\u51fb\u201d\u8d2d\u4e70\u6d41\u91cf\u201c\uff0c\u8d2d\u4e70\u7684\u6d41\u91cf\u5c06\u9644\u52a0\u5230\u5957\u9910\u4e2d\u3002\u8d60\u9001\u7684\u5957\u9910\u4e0d\u53ef\u8d2d\u4e70\u6d41\u91cf\uff0c\u8bf7\u5148\u8d2d\u4e70\u65b0\u7684\u5957\u9910\u3002"}),(0,x.jsx)("h4",{children:"\u542f\u7528\u65b0\u5957\u9910"}),(0,x.jsx)("p",{children:"\u5f53\u5957\u9910\u5230\u671f\u3001\u6d41\u91cf\u4f7f\u7528\u8d85\u989d\u6216\u8005\u624b\u52a8\u53d6\u6d88\u6b63\u5728\u4f7f\u7528\u7684\u5957\u9910\uff0c\u5957\u9910\u5217\u8868\u4e2d\u7684\u4e0b\u4e00\u4e2a\u53ef\u7528\u7684\u5957\u9910\u5c06\u81ea\u52a8\u542f\u7528\uff0c\u5982\u679c\u6ca1\u6709\u53ef\u7528\u7684\u5957\u9910\uff0c\u76f8\u5173\u670d\u52a1\u5c06\u4f1a\u7ec8\u6b62\u3002"}),(0,x.jsx)("h4",{children:"\u53d6\u6d88\u5957\u9910"}),(0,x.jsx)("p",{children:"\u53d6\u6d88\u5957\u9910\u7cfb\u7edf\u5c06\u4f1a\u8ba1\u7b97\u5e76\u6263\u9664\u90e8\u5206\u91d1\u989d\uff0c\u5269\u4f59\u7684\u8d39\u7528\u5c06\u4f1a\u8fd4\u56de\u5230\u60a8\u7684\u8d26\u53f7\u4f59\u989d\u4e2d\uff0c\u4e0d\u53ef\u63d0\u73b0\uff0c\u53ef\u4ee5\u91cd\u65b0\u8d2d\u4e70\u5957\u9910\u3002 \u53d6\u6d88\u5957\u9910\u5269\u4f59\u7684\u6d41\u91cf\u4f1a\u81ea\u52a8\u6e05\u96f6\uff0c\u4e0d\u4f1a\u7ee7\u627f\u5230\u65b0\u5957\u9910\u3002\u53d6\u6d88\u5957\u9910\u540e\u5982\u679c\u8fd8\u6709\u5957\u9910\uff0c\u65b0\u7684\u5957\u9910\u5c06\u4f1a\u81ea\u52a8\u542f\u7528\u3002"})]})]})})})}):(0,x.jsx)(s.l_,{to:"/user/login"}):(0,x.jsx)(a.Z,{})}}}]);
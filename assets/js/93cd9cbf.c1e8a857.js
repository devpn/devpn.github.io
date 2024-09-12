"use strict";(self.webpackChunklego_front_devpn=self.webpackChunklego_front_devpn||[]).push([[775],{27423:(n,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var e=s(85893),i=s(11151);const r={sidebar_position:3,sidebar_label:"PPTP",title:"PPTP for Ubuntu \u4f7f\u7528\u6559\u7a0b"},o=void 0,d={id:"start/linux/pptp/pptp",title:"PPTP for Ubuntu \u4f7f\u7528\u6559\u7a0b",description:"PPTP \u8fde\u63a5\u534f\u8bae\u5df2\u7ecf\u88ab\u56fd\u5bb6\u9632\u706b\u5899 GFW \u7cbe\u51c6\u8bc6\u522b\u5e76\u963b\u65ad\uff0c\u4e0d\u5efa\u8bae\u4f7f\u7528\u3002",source:"@site/docs/start/linux/pptp/pptp.mdx",sourceDirName:"start/linux/pptp",slug:"/start/linux/pptp/",permalink:"/docs/start/linux/pptp/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"PPTP",title:"PPTP for Ubuntu \u4f7f\u7528\u6559\u7a0b"},sidebar:"tutorialSidebar",previous:{title:"Hiddify",permalink:"/docs/start/linux/hiddify/"},next:{title:"Clash",permalink:"/docs/start/openwrt/clash/"}},c={},p=[];function a(n){const t={admonition:"admonition",img:"img",p:"p",strong:"strong",...(0,i.a)(),...n.components},{MdHosts:r}=t;return r||function(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("MdHosts",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.admonition,{type:"warning",children:(0,e.jsx)(t.p,{children:"PPTP \u8fde\u63a5\u534f\u8bae\u5df2\u7ecf\u88ab\u56fd\u5bb6\u9632\u706b\u5899 GFW \u7cbe\u51c6\u8bc6\u522b\u5e76\u963b\u65ad\uff0c\u4e0d\u5efa\u8bae\u4f7f\u7528\u3002"})}),"\n",(0,e.jsx)(t.admonition,{type:"note",children:(0,e.jsx)(t.p,{children:"\u8fd9\u91cc\u4ee5 Ubuntu \u4e3a\u4f8b\u8fdb\u884c\u8bbe\u7f6e\uff0c\u5176\u4ed6 Linux \u64cd\u4f5c\u7cfb\u7edf\u7684\u914d\u7f6e\u65b9\u6cd5\u4e5f\u662f\u7c7b\u4f3c\u7684\uff0c\u7f51\u4e0a\u6709\u76f8\u5173\u6559\u7a0b\u3002"})}),"\n",(0,e.jsxs)(t.p,{children:["\u5355\u51fb\u5c4f\u5e55\u53f3\u4e0a\u89d2\u7684\u7f51\u7edc\u8fde\u63a5\u6807\u5fd7\uff0c\u5728\u4e0b\u62c9\u9009\u9879\u91cc\u5355\u51fb ",(0,e.jsx)(t.strong,{children:"VPN \u8fde\u63a5"}),"\uff0c\u5355\u51fb ",(0,e.jsx)(t.strong,{children:"\u914d\u7f6e VPN..."})," \u8fdb\u5165 VPN \u7684\u8bbe\u7f6e"]}),"\n",(0,e.jsx)(t.p,{children:(0,e.jsx)(t.img,{alt:"\u8bbe\u7f6e\u56fe\u6807",src:s(54480).Z+"",width:"374",height:"236"})}),"\n",(0,e.jsxs)(t.p,{children:["\u70b9\u51fb ",(0,e.jsx)(t.strong,{children:"VPN"})," \u83dc\u5355\u4e0b\u53f3\u4fa7\u7684 ",(0,e.jsx)(t.strong,{children:"\u6dfb\u52a0"})," \u6309\u94ae\uff0c\u6dfb\u52a0 VPN \u670d\u52a1"]}),"\n",(0,e.jsx)(t.p,{children:(0,e.jsx)(t.img,{alt:"\u6dfb\u52a0 VPN",src:s(75578).Z+"",width:"398",height:"324"})}),"\n",(0,e.jsxs)(t.p,{children:["\u9009\u62e9 ",(0,e.jsx)(t.strong,{children:"\u70b9\u5230\u70b9\u96a7\u9053\u534f\u8bae(PPTP)"}),"\uff0c\u70b9\u51fb ",(0,e.jsx)(t.strong,{children:"\u65b0\u5efa..."})," \u6309\u94ae"]}),"\n",(0,e.jsx)(t.p,{children:(0,e.jsx)(t.img,{alt:"\u9009\u62e9 VPN \u7c7b\u578b",src:s(20062).Z+"",width:"642",height:"300"})}),"\n",(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.strong,{children:"\u8fde\u63a5\u540d\u79f0"})," \u586b\u5199 ",(0,e.jsx)(t.strong,{children:"devpn-pptp"})," \uff0c",(0,e.jsx)(t.strong,{children:"\u7f51\u5173"})," \u586b\u5199\u670d\u52a1\u5668\u57df\u540d\uff0c\u70b9\u51fb\u4e0b\u9762\u6309\u94ae\u67e5\u770b\u670d\u52a1\u8282\u70b9\u5217\u8868\uff1b",(0,e.jsx)(t.strong,{children:"\u7528\u6237\u540d"})," \u4e2d\u586b\u5165\u60a8\u7684\u7528\u6237\u540d\uff0c",(0,e.jsx)(t.strong,{children:"\u5bc6\u7801"})," \u4e2d\u586b\u5165\u60a8\u7684\u8fde\u63a5\u5bc6\u7801\uff0c\u70b9\u51fb ",(0,e.jsx)(t.strong,{children:"\u9ad8\u7ea7\u2026"})," \u6309\u94ae"]}),"\n",(0,e.jsx)(r,{proto:"pptp"}),"\n",(0,e.jsx)(t.p,{children:(0,e.jsx)(t.img,{alt:"\u5e10\u53f7\u4fe1\u606f",src:s(72375).Z+"",width:"430",height:"464"})}),"\n",(0,e.jsxs)(t.p,{children:["\u9009\u4e2d ",(0,e.jsx)(t.strong,{children:"\u4f7f\u7528\u70b9\u5230\u70b9\u52a0\u5bc6(MPPE)"})," \uff0c\u70b9\u51fb ",(0,e.jsx)(t.strong,{children:"\u786e\u5b9a"})," \u6309\u94ae"]}),"\n",(0,e.jsx)(t.p,{children:(0,e.jsx)(t.img,{alt:"PPTP \u9ad8\u7ea7\u9009\u9879",src:s(15751).Z+"",width:"296",height:"570"})}),"\n",(0,e.jsxs)(t.p,{children:["\u8fdb\u5165 ",(0,e.jsx)(t.strong,{children:"IPv4 \u8bbe\u7f6e"})," \uff0c\u586b\u5199 ",(0,e.jsx)(t.strong,{children:"\u9644\u52a0 DNS \u670d\u52a1\u5668"})," \u4e3a ",(0,e.jsx)(t.strong,{children:"8.8.8.8"})," \uff0c\u70b9\u51fb ",(0,e.jsx)(t.strong,{children:"\u4fdd\u5b58"})," \u6309\u94ae"]}),"\n",(0,e.jsx)(t.p,{children:(0,e.jsx)(t.img,{alt:"DNS\u8bbe\u7f6e",src:s(52139).Z+"",width:"432",height:"466"})}),"\n",(0,e.jsxs)(t.p,{children:["\u70b9\u51fb\u5c4f\u5e55\u53f3\u4e0a\u89d2\u7684\u7f51\u7edc\u8fde\u63a5\u56fe\u6807\uff0c\u9009\u62e9 ",(0,e.jsx)(t.strong,{children:"VPN \u8fde\u63a5"})," \u4e2d\u7684 ",(0,e.jsx)(t.strong,{children:"devpn-pptp"})," \uff0c\u5f00\u59cb\u8fde\u63a5 VPN"]}),"\n",(0,e.jsx)(t.p,{children:(0,e.jsx)(t.img,{alt:"\u8fde\u63a5",src:s(97674).Z+"",width:"350",height:"242"})})]})}function l(n={}){const{wrapper:t}={...(0,i.a)(),...n.components};return t?(0,e.jsx)(t,{...n,children:(0,e.jsx)(a,{...n})}):a(n)}},54480:(n,t,s)=>{s.d(t,{Z:()=>e});const e=s.p+"assets/images/1-e13efe18937dcc6fb90fa972c2a984be.png"},75578:(n,t,s)=>{s.d(t,{Z:()=>e});const e=s.p+"assets/images/2-e73bf9ed6a49774841084a125c3ae79a.png"},20062:(n,t,s)=>{s.d(t,{Z:()=>e});const e=s.p+"assets/images/3-faa517e8eee98d8b7b1d9497df322558.png"},72375:(n,t,s)=>{s.d(t,{Z:()=>e});const e=s.p+"assets/images/4-b2f90189c7ea7cd88d455d20e5412c96.png"},15751:(n,t,s)=>{s.d(t,{Z:()=>e});const e=s.p+"assets/images/5-5af491cd2f29bc5bd2c40d5f5baa5313.png"},52139:(n,t,s)=>{s.d(t,{Z:()=>e});const e=s.p+"assets/images/6-fbcf396c8486d316da408fed2b202e5f.png"},97674:(n,t,s)=>{s.d(t,{Z:()=>e});const e=s.p+"assets/images/7-4ce820ab75670aa1fcff567aa5f31a94.png"},11151:(n,t,s)=>{s.d(t,{Z:()=>d,a:()=>o});var e=s(67294);const i={},r=e.createContext(i);function o(n){const t=e.useContext(r);return e.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function d(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),e.createElement(r.Provider,{value:t},n.children)}}}]);
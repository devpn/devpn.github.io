"use strict";(self.webpackChunklego_front_devpn=self.webpackChunklego_front_devpn||[]).push([[8401],{32614:(e,n,s)=>{s.d(n,{A:()=>N});var t=s(25359),l=s(26771),i=s(79700),o=s(47082),a=s(16007),r=s(78954),c=s(64224),d=s(88826),h=s(75147),x=s(74848);var j=s(79791),u=s(50268),p=s(28073),m=s(86529),A=s(86048),g=s(96540),v=s(67072),y=s(56289),f=s(52362),b=s(43229),w=s(79295),C=s(43014),k=s(20053);const _="icon_sV4M";var S=s(46190);var I=s(90139);const N={...t.A,SoftDownload:function(e){let{title:n,url:s}=e;const{userInfo:t,inited:j,loading:u,setOpen:p}=(0,i.Py)(),{message:m}=(0,r.x)(),A=JSON.parse((0,a.F)(o.A.softx)),g=A[Math.floor(Math.random()*A.length)];return u||!j?(0,x.jsx)(c.A,{style:{margin:"5px"}}):(0,x.jsx)("p",{children:t?(0,x.jsx)(d.A,{title:i.Py?"\u70b9\u51fb\u4e0b\u8f7d\uff0c\u5982\u679c\u5931\u8d25\u8bf7\u9f20\u6807\u53f3\u952e\u5e76\u9009\u62e9\u201c\u53e6\u5b58\u4e3a\u201d":"\u8bf7\u767b\u5f55\u540e\u4e0b\u8f7d",children:(0,x.jsxs)("a",{className:"button button--lg button--primary",rel:"nofollow",href:t?(0,l.we)(g,s):s,onClick:e=>(e.preventDefault(),t?(0,l.RG)((0,l.we)(g,s)):(p(i.cA.Login),m.warning("\u8bf7\u5148\u767b\u5f55\u6216\u8005\u6ce8\u518c\uff0c\u7136\u540e\u518d\u70b9\u51fb\u4e0b\u8f7d")),!1),children:[(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,x.jsx)("path",{fill:"currentColor","fill-rule":"evenodd",d:"M5 16.25a.75.75 0 0 1 .75.75v2c0 .138.112.25.25.25h12a.25.25 0 0 0 .25-.25v-2a.75.75 0 0 1 1.5 0v2A1.75 1.75 0 0 1 18 20.75H6A1.75 1.75 0 0 1 4.25 19v-2a.75.75 0 0 1 .75-.75","clip-rule":"evenodd"}),(0,x.jsx)("path",{fill:"currentColor",d:"M10.738 3.75a.992.992 0 0 0-.988.906a36.618 36.618 0 0 0-.082 5.27c-.247.013-.493.03-.74.047l-1.49.109a.76.76 0 0 0-.585 1.167a15.555 15.555 0 0 0 4.032 4.258l.597.429a.888.888 0 0 0 1.036 0l.597-.429a15.556 15.556 0 0 0 4.032-4.258a.76.76 0 0 0-.585-1.167l-1.49-.109a42.274 42.274 0 0 0-.74-.047a36.62 36.62 0 0 0-.081-5.27a.992.992 0 0 0-.989-.906z"})]}),n||"\u70b9\u51fb\u4e0b\u8f7d"]})}):(0,x.jsx)(h.Ay,{type:"primary",size:"large",onClick:e=>(t?(0,l.RG)((0,l.we)(g,s)):p(i.cA.Login),!1),children:"\u8bf7\u767b\u5f55\u540e\u4e0b\u8f7d"})})},ConfigUrl:I.A,MdHosts:function(e){let{proto:n}=e;const{userInfo:s,setOpen:t}=(0,i.Py)(),[o,a]=(0,g.useState)(!0),[c,I]=(0,g.useState)(!1),[N,T]=(0,g.useState)([]),{message:$,modal:L}=(0,r.x)();return(0,x.jsxs)("p",{children:[(0,x.jsxs)("button",{className:"button button--lg button--primary",onClick:e=>{e.preventDefault(),(()=>{if(s)return I(!0),o&&s?.combo&&(0,j.pX)(n).then((e=>{a(!1),T(e)})).catch((()=>{a(!1),T([])})),!1;t(i.cA.Login)})()},children:[l.JS[n]," \u670d\u52a1\u8282\u70b9"]}),(0,x.jsx)(u.A,{open:c,title:`${l.JS[n]} \u670d\u52a1\u8282\u70b9`,onClose:()=>{I(!1)},extra:s?.combo?(0,x.jsx)(p.A,{placement:"bottomRight",content:(0,x.jsxs)("div",{style:{minWidth:150},children:[(0,x.jsx)(v.A,{title:"\u7528\u6237\u540d",value:(0,x.jsx)("strong",{children:s?.name})}),(0,x.jsx)(v.A,{title:"\u8fde\u63a5\u5bc6\u7801",value:(0,x.jsx)("strong",{children:s?.combo_pwd})})]}),trigger:"click",children:(0,x.jsx)(h.Ay,{children:"\u8fde\u63a5\u5bc6\u7801"})}):null,children:s?.combo?(0,x.jsx)(m.A,{loading:o,itemLayout:"horizontal",dataSource:N,renderItem:e=>(0,x.jsx)(m.A.Item,{actions:[(0,x.jsx)(d.A,{title:"\u70b9\u51fb\u590d\u5236\u5730\u5740\u5230\u526a\u8d34\u677f",children:(0,x.jsx)(h.Ay,{icon:(0,x.jsx)(b.A,{}),onClick:()=>{const s=(0,S.C)(n,e);(0,l.lW)(s).then((()=>{$.success("\u590d\u5236\u5730\u5740\u6210\u529f")})).catch((()=>{L.info({title:"\u590d\u5236\u4e0d\u6210\u529f\uff0c\u8bf7\u624b\u52a8\u590d\u5236\u4e0b\u9762\u7684\u5185\u5bb9",content:s})}))},children:"\u590d\u5236"})}),(0,x.jsx)(p.A,{overlayInnerStyle:{padding:0},content:(0,x.jsx)(A.A,{value:(0,S.C)(n,e)}),children:(0,x.jsx)(w.A,{})})],children:(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:"space",children:[(0,x.jsx)(C.k,{src:`/flag/${e.area}.svg`,className:(0,k.A)("icon",_)}),(0,x.jsx)("h5",{style:{marginBottom:0},children:`${l.i1[e.area]} ${e.domain.split(".")[0].toUpperCase()}${e.rate>1?` (${e.rate}\u500d\u7387)`:""}`})]}),(0,x.jsx)("p",{style:{wordBreak:"break-all",marginBottom:"12px"},children:(0,S.C)(n,e)})]})})}):(0,x.jsx)(f.A,{type:"warning",children:(0,x.jsxs)("p",{children:[l.JS[n]," \u670d\u52a1\u8282\u70b9\u65e0\u6548\uff0c\u8bf7\u5148"," ",(0,x.jsx)(y.A,{to:"/combo",children:"\u8d2d\u4e70\u5957\u9910"})]})})})]})}}},46190:(e,n,s)=>{s.d(n,{A:()=>O,C:()=>M});var t=s(56289),l=s(78954),i=s(79700),o=s(79791),a=s(26771),r=s(56952),c=s(75147),d=s(88826),h=s(28073),x=s(86048),j=s(68936),u=s(86830),p=s(96540);const m={container:"container_lAfw",trojanItem:"trojanItem_db0P",icon:"icon_QnTj",projectGrid:"projectGrid_nQkr"};var A=s(2188),g=s(43229),v=s(79295),y=s(20053),f=s(14779),b=s(38741),w=s(30412),C=s(74848);function k(e){let{style:n,onChange:s}=e;const{userInfo:t,setUserInfo:a}=(0,i.Py)(),[r,d]=(0,p.useState)(!1),[h,x]=(0,p.useState)(!1),{message:j}=(0,l.x)();return t?r?(0,C.jsxs)("div",{className:"space-bt",style:n,children:[(0,C.jsxs)(b.A,{layout:"inline",initialValues:{new_pwd:t.combo_pwd},onFinish:e=>{let{new_pwd:n}=e;t.combo_pwd!=n?(x(!0),(0,o.LZ)({new_pwd:n}).then((()=>{j.success("\u8fde\u63a5\u5bc6\u7801\u66f4\u65b0\u6210\u529f\uff0c\u8bf7\u4f7f\u7528\u65b0\u5bc6\u7801\u914d\u7f6e"),s&&s(n),a({...t,combo_pwd:n}),d(!1)})).catch((()=>{j.error("\u8fde\u63a5\u5bc6\u7801\u66f4\u65b0\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")})).finally((()=>{x(!1)}))):d(!1)},children:[(0,C.jsx)(b.A.Item,{name:"new_pwd",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8fde\u63a5\u5bc6\u7801"},{pattern:/^\w{4,24}$/,message:"\u8fde\u63a5\u5bc6\u7801\u53ea\u80fd\u662f\u5b57\u6bcd\u3001\u6570\u5b57\u548c\u4e0b\u5212\u7ebf\uff0c\u957f\u5ea6 4 \u5230 24 \u4f4d"}],children:(0,C.jsx)(w.A,{placeholder:"\u8fde\u63a5\u5bc6\u7801",style:{width:"130px"}})}),(0,C.jsx)(b.A.Item,{children:(0,C.jsx)(c.Ay,{type:"primary",htmlType:"submit",loading:h,children:"\u786e\u5b9a"})})]}),(0,C.jsx)(c.Ay,{onClick:()=>{d(!1)},children:"\u53d6\u6d88"})]}):(0,C.jsxs)("div",{className:"space-bt",style:n,children:[(0,C.jsx)("strong",{style:{fontSize:"1.5rem"},children:t.combo_pwd}),(0,C.jsx)(c.Ay,{onClick:()=>{d(!0)},children:"\u4fee\u6539"})]}):null}var _=s(43014),S=s(90139),I=s(48217),N=s(47152),T=s(16370);const{TextArea:$}=w.A;function L(e){let{open:n,onCancel:s}=e;const{userInfo:t}=(0,i.Py)(),[a,r]=(0,p.useState)(!0),[c,d]=(0,p.useState)(!1),[h,x]=(0,p.useState)({}),{message:j}=(0,l.x)();(0,p.useEffect)((()=>{t&&n?(r(!0),(0,o.HN)().then((e=>{const n={};for(const s in e){const t=e[s];if(!t||"string"!=typeof t)continue;let l;const i={};for(const e of t.split("\n"))if(/^\S+:$/.test(e))l=e.replace(":","");else if(/^\s+-\s+/.test(e)){const n=e.replace(/^\s+-\s+/,"");i[l]?i[l].push(n):i[l]=[n]}Object.keys(i).length>0&&(n[s]=i)}x(n)})).finally((()=>{r(!1)}))):x({})}),[t,n]);return(0,C.jsxs)(u.A,{title:"\u7f16\u8f91\u6211\u7684\u5206\u6d41\u89c4\u5219",open:n,onOk:()=>{d(!0);const e={};for(const n in h){const s=h[n];if(!s||0==Object.keys(s).length)continue;const t=[];for(const e in s){const n=s[e],l=[];for(const e of n){const n=e.trim().toLowerCase().replace(/^\S+:\/\//,"").replace(/^\W+/,"").replace(/\W+$/,"");n&&l.push("  - "+n)}l.length>0&&(t.push(e+":"),t.push(...l))}t.length>0&&(e[n]=t.join("\n"))}(0,o.cZ)(e).then((()=>{j.success("\u4fdd\u5b58\u5206\u6d41\u89c4\u5219\u6210\u529f\uff0c\u8bf7\u66f4\u65b0 Clash \u6216 SingBox \u8f6f\u4ef6\u7684\u8ba2\u9605\u94fe\u63a5"),s()})).catch((()=>{j.error("\u4fdd\u5b58\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")})).finally((()=>{d(!1)}))},confirmLoading:c,onCancel:s,width:800,destroyOnClose:!0,maskClosable:!1,children:[(0,C.jsxs)("p",{children:["\u8bf7\u5728 ",(0,C.jsx)("b",{children:"\u62d2\u7edd"})," \uff0c",(0,C.jsx)("b",{children:"\u76f4\u8fde"})," \u6216 ",(0,C.jsx)("b",{children:"\u4ee3\u7406"})," ","\u9009\u9879\u5361\u4e0b\u586b\u5199\u76f8\u5e94\u7684\u89c4\u5219\uff0c\u6bcf\u884c\u4e00\u6761\u89c4\u5219;",(0,C.jsx)("br",{}),"\u53ea\u9700\u8981\u586b\u5199\u5b8c\u6574\u57df\u540d\u6216\u8005\u90e8\u5206\u57df\u540d\uff0c\u5982 ",(0,C.jsx)("b",{children:"abc.com"}),(0,C.jsx)("br",{}),"\u89c4\u5219\u66f4\u6539\u540e\u9700\u8981\u5230\u8fde\u63a5\u8f6f\u4ef6\u91cc\u5237\u65b0\u8ba2\u9605\u94fe\u63a5\u624d\u4f1a\u751f\u6548\uff1b",(0,C.jsx)("br",{}),"\u6ce8\u610f\uff1a\u6211\u7684\u5206\u6d41\u89c4\u5219\u76ee\u524d\u53ea\u652f\u6301 Clash\u3001Singbox \u548c Karing\uff1b",(0,C.jsx)("br",{}),"\u90e8\u5206\u8f6f\u4ef6\u5982 Hiddify\u3001V2rayN, Shadowrocket \u7b49\u6682\u65f6\u8fd8\u4e0d\u652f\u6301\u3002"]}),a?(0,C.jsx)(f.A,{}):(0,C.jsx)(I.A,{defaultActiveKey:"reject",items:[{key:"reject",label:"\u62d2\u7edd",children:(0,C.jsxs)(N.A,{gutter:8,children:[(0,C.jsxs)(T.A,{span:8,children:[(0,C.jsx)("h4",{children:"\u5b8c\u6574\u57df\u540d"}),(0,C.jsx)($,{rows:15,value:h?.reject?.domain?.join("\n"),onChange:e=>{const n={...h.reject,domain:e.target.value.split("\n")};x({...h,reject:n})}})]}),(0,C.jsxs)(T.A,{span:8,children:[(0,C.jsx)("h4",{children:"\u57df\u540d\u540e\u7f00"}),(0,C.jsx)($,{rows:15,value:h?.reject?.domain_suffix?.join("\n"),onChange:e=>{const n={...h.reject,domain_suffix:e.target.value.split("\n")};x({...h,reject:n})}})]}),(0,C.jsxs)(T.A,{span:8,children:[(0,C.jsx)("h4",{children:"\u57df\u540d\u5173\u952e\u5b57"}),(0,C.jsx)($,{rows:15,value:h?.reject?.domain_keyword?.join("\n"),onChange:e=>{const n={...h.reject,domain_keyword:e.target.value.split("\n")};x({...h,reject:n})}})]})]})},{key:"direct",label:"\u76f4\u8fde",children:(0,C.jsxs)(N.A,{gutter:8,children:[(0,C.jsxs)(T.A,{span:8,children:[(0,C.jsx)("h4",{children:"\u5b8c\u6574\u57df\u540d"}),(0,C.jsx)($,{rows:15,value:h?.direct?.domain?.join("\n"),onChange:e=>{const n={...h.direct,domain:e.target.value.split("\n")};x({...h,direct:n})}})]}),(0,C.jsxs)(T.A,{span:8,children:[(0,C.jsx)("h4",{children:"\u57df\u540d\u540e\u7f00"}),(0,C.jsx)($,{rows:15,value:h?.direct?.domain_suffix?.join("\n"),onChange:e=>{const n={...h.direct,domain_suffix:e.target.value.split("\n")};x({...h,direct:n})}})]}),(0,C.jsxs)(T.A,{span:8,children:[(0,C.jsx)("h4",{children:"\u57df\u540d\u5173\u952e\u5b57"}),(0,C.jsx)($,{rows:15,value:h?.direct?.domain_keyword?.join("\n"),onChange:e=>{const n={...h.direct,domain_keyword:e.target.value.split("\n")};x({...h,direct:n})}})]})]})},{key:"proxy",label:"\u4ee3\u7406",children:(0,C.jsxs)(N.A,{gutter:8,children:[(0,C.jsxs)(T.A,{span:8,children:[(0,C.jsx)("h4",{children:"\u5b8c\u6574\u57df\u540d"}),(0,C.jsx)($,{rows:15,value:h?.proxy?.domain?.join("\n"),onChange:e=>{const n={...h.proxy,domain:e.target.value.split("\n")};x({...h,proxy:n})}})]}),(0,C.jsxs)(T.A,{span:8,children:[(0,C.jsx)("h4",{children:"\u57df\u540d\u540e\u7f00"}),(0,C.jsx)($,{rows:15,value:h?.proxy?.domain_suffix?.join("\n"),onChange:e=>{const n={...h.proxy,domain_suffix:e.target.value.split("\n")};x({...h,proxy:n})}})]}),(0,C.jsxs)(T.A,{span:8,children:[(0,C.jsx)("h4",{children:"\u57df\u540d\u5173\u952e\u5b57"}),(0,C.jsx)($,{rows:15,value:h?.proxy?.domain_keyword?.join("\n"),onChange:e=>{const n={...h.proxy,domain_keyword:e.target.value.split("\n")};x({...h,proxy:n})}})]})]})}]})]})}var P=s(21676),B=s(23412);const V=[{value:"clash",label:"Clash",children:[{value:"auto",label:"\u6700\u65b0\u7248\u672c"},{value:"v3",label:"V3 \u7248\u672c"},{value:"v2",label:"V2 \u7248\u672c"}]},{value:"singbox",label:"SingBox",children:[{value:"auto",label:"\u6700\u65b0\u7248\u672c"},{value:"v3",label:"V3 \u7248\u672c"},{value:"v2",label:"V2 \u7248\u672c"}]},{value:"v2ray",label:"V2ray",children:[{value:"auto",label:"\u6700\u65b0\u7248\u672c"},{value:"v1",label:"V1 \u7248\u672c"}]}];function z(){const[e,n]=(0,p.useState)(["clash","auto"]);return(0,C.jsx)(P.A,{items:[{key:"1",label:"\u56fa\u5b9a\u8ba2\u9605\u94fe\u63a5",children:(0,C.jsxs)("div",{children:[(0,C.jsx)("p",{children:"\u9488\u5bf9\u7cfb\u7edf\u65e0\u6cd5\u6b63\u786e\u5224\u65ad\u8ba2\u9605\u94fe\u63a5\u7c7b\u578b\u7684\u8fde\u63a5\u8f6f\u4ef6\uff0c\u8bf7\u9009\u62e9\u5bf9\u5e94\u7684\u8f6f\u4ef6\u548c\u8ba2\u9605\u94fe\u63a5\u7248\u672c\u53f7\uff1a"}),(0,C.jsxs)("p",{className:"space-bt",children:[(0,C.jsx)(B.A,{allowClear:!1,options:V,defaultValue:e,onChange:e=>{n([...e])}}),(0,C.jsx)(S.A,{size:"middle",type:"default",rule:e.join("/")})]}),(0,C.jsxs)("p",{children:["\u5efa\u8bae\u4f18\u5148\u9009\u62e9\u6700\u65b0\u7248\u672c\u8ba2\u9605\u94fe\u63a5\uff0c\u5982\u679c\u60a8\u4f7f\u7528\u7684\u8fde\u63a5\u8f6f\u4ef6\u8fd8\u4e0d\u652f\u6301\u67d0\u4e9b\u65b0\u7279\u5f81\uff1b",(0,C.jsx)("br",{}),"\u6709\u6761\u4ef6\u7684\u8bdd\u5148\u5347\u7ea7\u8fde\u63a5\u8f6f\u4ef6\uff0c\u5b9e\u5728\u6ca1\u6709\u529e\u6cd5\u518d\u9009\u62e9\u4f4e\u7248\u672c\u7684\u8ba2\u9605\u94fe\u63a5\u3002",(0,C.jsx)("br",{}),"v2ray \u683c\u5f0f\u7684\u8ba2\u9605\u94fe\u63a5\u53ea\u5305\u542b\u8282\u70b9\u4fe1\u606f\uff0c\u6ca1\u6709\u5206\u6d41\u89c4\u5219\u4fe1\u606f\u3002",(0,C.jsx)("br",{}),"\u6ce8\u610f\uff1a\u56fd\u5bb6\u9632\u706b\u5899 GFW \u5347\u7ea7\u4f1a\u5bfc\u81f4\u4f4e\u7248\u672c\u7684\u8ba2\u9605\u94fe\u63a5\u5931\u6548\u65e0\u6cd5\u4f7f\u7528\uff0c\u8bf7\u5b9a\u671f\u66f4\u65b0\u8ba2\u9605\u94fe\u63a5\u3002"]})]})}]})}const E=[{key:"rule",tab:"\u8ba2\u9605\u94fe\u63a5"},{key:"ocnt",tab:"AnyConnect"},{key:"pptp",tab:"PPTP"}];function M(e,n){if(!n.proto)return n.domain;const s=new RegExp(e+":(\\d+)","i"),t=n.proto.match(s);return!t||t.length<2?n.domain:"ocnt"===e?"443"!=t[1]?n.domain+":"+t[1]:n.domain:n.domain+":"+t[1]}function O(){const{userInfo:e,updateUserInfo:n}=(0,i.Py)(),[s,b]=(0,p.useState)("rule"),[w,I]=(0,p.useState)(!1),[N,T]=(0,p.useState)(!1),[$,P]=(0,p.useState)({}),{message:B,modal:V}=(0,l.x)();return(0,p.useEffect)((()=>{var e,n;"rule"===(e=s)||$[e]&&!n||(0,o.pX)(e).then((n=>{$[e]=n,P({...$})})).catch((()=>{$[e]=[],P({...$})}))}),[e,s]),e?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(r.A,{title:"\u8ba2\u9605\u94fe\u63a5\u548c\u8282\u70b9\u5217\u8868",extra:(0,C.jsxs)("div",{className:"space",children:[(0,C.jsx)(t.A,{to:"/docs/start/",children:"\u4f7f\u7528\u6559\u7a0b"}),(0,C.jsx)(c.Ay,{onClick:()=>{I(!0)},children:"\u8fde\u63a5\u5bc6\u7801"})]}),bodyStyle:{padding:0},tabList:E,activeTabKey:s,onTabChange:e=>{b(e)},children:"rule"==s?(0,C.jsxs)("div",{className:m.container,children:[(0,C.jsx)(S.A,{size:"middle"}),(0,C.jsxs)("p",{style:{marginTop:20},children:["\u5982\u679c\u4e0a\u9762\u7684\u914d\u7f6e\u8ba2\u9605\u94fe\u63a5\u65e0\u6cd5\u6b63\u5e38\u4f7f\u7528\uff0c\u6709\u4ee5\u4e0b\u539f\u56e0\uff1a",(0,C.jsx)("br",{}),"1. \u8fde\u63a5\u8f6f\u4ef6\u7248\u672c\u8fc7\u4f4e\uff0c\u8bf7",(0,C.jsx)(t.A,{to:"/docs/start/",children:"\u53c2\u8003\u6559\u7a0b"}),"\u4e0b\u8f7d\u65b0\u7684\u8f6f\u4ef6\u66ff\u6362\u5b89\u88c5\u3002",(0,C.jsx)("br",{}),"2. \u8fde\u63a5\u8f6f\u4ef6\u6211\u4eec\u8fd8\u6ca1\u6709\u9002\u914d\uff0c\u8bf7\u63d0\u4f9b\u60a8\u4f7f\u7528\u7684",(0,C.jsx)(t.A,{to:"/ticket/new",children:"\u8f6f\u4ef6\u540d\u79f0\u548c\u7248\u672c\u53f7"}),"\uff0c\u6211\u4eec\u5c06\u5c3d\u53ef\u80fd\u8fdb\u884c\u9002\u914d\u3002",(0,C.jsx)("br",{}),"3. \u7f51\u7edc\u539f\u56e0\uff0c\u8ba2\u9605\u94fe\u63a5\u65e0\u6cd5\u6b63\u5e38\u8bbf\u95ee\uff0c\u8bf7\u4f7f\u7528\u5907\u7528\u7684\u8ba2\u9605\u94fe\u63a5\u4ee3\u66ff\uff0c\u6216\u8005",(0,C.jsx)(t.A,{to:"/ticket/new",children:"\u8054\u7cfb\u6211\u4eec"}),"\u3002"]}),(0,C.jsxs)("p",{children:["\u5982\u679c\u6211\u4eec\u7684\u89c4\u5219\u96c6\u65e0\u6cd5\u6ee1\u8db3\u60a8\u7684\u8981\u6c42\uff0c\u540c\u65f6\u60a8\u6e05\u695a\u5206\u6d41\u89c4\u5219\u539f\u7406\uff0c\u8bf7"," ",(0,C.jsx)(c.Ay,{icon:(0,C.jsx)(A.A,{}),onClick:()=>{T(!0)},children:"\u7f16\u8f91\u6211\u7684\u5206\u6d41\u89c4\u5219"})]}),(0,C.jsx)(z,{})]}):$[s]?$[s].length>0?$[s].map((e=>(0,C.jsxs)(r.A.Grid,{className:m.projectGrid,children:[(0,C.jsxs)("div",{className:"space",children:[(0,C.jsx)(_.k,{className:(0,y.A)("icon",m.icon),src:`/flag/${e.area}.svg`}),(0,C.jsx)("h5",{style:{marginBottom:0},children:`${a.i1[e.area]} ${e.domain.split(".")[0].toUpperCase()}${e.rate>1?` (${e.rate}\u500d\u7387)`:""}`})]}),(0,C.jsx)("p",{style:{wordBreak:"break-all",marginBottom:"12px"},children:M(s,e)}),(0,C.jsxs)("div",{className:"space",children:[(0,C.jsx)(d.A,{title:"\u70b9\u51fb\u590d\u5236\u5730\u5740\u5230\u526a\u8d34\u677f",children:(0,C.jsx)(c.Ay,{icon:(0,C.jsx)(g.A,{}),onClick:()=>{const n=M(s,e);(0,a.lW)(n).then((()=>{B.success("\u590d\u5236\u5730\u5740\u6210\u529f")})).catch((()=>{V.info({title:"\u590d\u5236\u4e0d\u6210\u529f\uff0c\u8bf7\u624b\u52a8\u590d\u5236\u4e0b\u9762\u7684\u5185\u5bb9",content:n})}))},children:"\u590d\u5236"})}),(0,C.jsx)(h.A,{overlayInnerStyle:{padding:0},content:(0,C.jsx)(x.A,{value:M(s,e)}),children:(0,C.jsx)(v.A,{})})]})]},e.domain))):(0,C.jsx)(j.A,{image:j.A.PRESENTED_IMAGE_SIMPLE,description:"\u6ca1\u6709\u53ef\u7528\u7684\u8282\u70b9",style:{marginTop:20,marginBottom:20}}):(0,C.jsx)(f.A,{})}),(0,C.jsxs)(u.A,{title:"\u8fde\u63a5\u5bc6\u7801",open:w,footer:null,destroyOnClose:!0,maskClosable:!1,onCancel:()=>I(!1),children:[(0,C.jsx)(k,{style:{margin:"12px 0"},onChange:()=>{n(),P({})}}),(0,C.jsxs)("p",{children:["\u7528\u6237\u540d\uff1a",(0,C.jsx)("b",{children:e?.name})]}),(0,C.jsxs)("p",{children:["\u6ce8\u610f\uff1a\u4e0d\u540c\u7684\u8fde\u63a5\u534f\u8bae\u914d\u7f6e\u65b9\u5f0f\u4e0d\u4e00\u6837\uff0c\u8be6\u7ec6\u8fde\u63a5\u65b9\u6cd5\u8bf7\u53c2\u8003",(0,C.jsx)(t.A,{to:"/docs/start/",children:"\u4f7f\u7528\u6559\u7a0b"}),"\uff1b\u4fee\u6539\u8fde\u63a5\u5bc6\u7801\u540e\u6240\u6709\u8fde\u63a5\u534f\u8bae\u90fd\u8981\u4f7f\u7528\u65b0\u7684\u8fde\u63a5\u5bc6\u7801\u91cd\u65b0\u914d\u7f6e\u3002"]})]}),(0,C.jsx)(L,{open:N,onCancel:()=>T(!1)})]}):(0,C.jsx)("div",{children:"\u67e5\u770b\u8ba2\u9605\u94fe\u63a5\u548c\u8282\u70b9\u5217\u8868\uff0c\u8bf7\u5148\u767b\u5f55"})}},60703:(e,n,s)=>{s.d(n,{A:()=>m});s(96540);var t=s(20053),l=s(86682),i=s(17081),o=s(15833),a=s(55730),r=s(7860),c=s(27521),d=s(1400),h=s(15708),x=s(57519),j=s(28467);const u={docItemContainer:"docItemContainer_c0TR",docItemCol:"docItemCol_z5aJ"};var p=s(74848);function m(e){let{children:n}=e;const s=function(){const{frontMatter:e,toc:n}=(0,i.u)(),s=(0,l.l)(),t=e.hide_table_of_contents,o=!t&&n.length>0;return{hidden:t,mobile:o?(0,p.jsx)(c.A,{}):void 0,desktop:!o||"desktop"!==s&&"ssr"!==s?void 0:(0,p.jsx)(d.A,{})}}(),{metadata:m}=(0,i.u)();return(0,p.jsxs)("div",{className:"row",children:[(0,p.jsxs)("div",{className:(0,t.A)("col",!s.hidden&&u.docItemCol),children:[(0,p.jsx)(j.A,{metadata:m}),(0,p.jsx)(o.A,{}),(0,p.jsx)("div",{className:u.docItemContainer,children:(0,p.jsxs)("article",{children:[(0,p.jsx)(x.A,{}),(0,p.jsx)(a.A,{}),s.mobile,(0,p.jsx)(h.A,{children:n}),(0,p.jsx)(r.A,{})]})})]}),s.desktop&&(0,p.jsx)("div",{className:"col col--3",children:s.desktop})]})}},67072:(e,n,s)=>{s.d(n,{A:()=>i});const t={itemList:"itemList_yUgU",itemTitle:"itemTitle_SCiT"};var l=s(74848);function i(e){let{title:n,value:s}=e;return(0,l.jsxs)("div",{className:t.itemList,children:[(0,l.jsx)("div",{className:t.itemTitle,children:n},"title"),(0,l.jsx)("div",{children:s},"value")]})}},90139:(e,n,s)=>{s.d(n,{A:()=>m});var t=s(78954),l=s(79688),i=s(28073),o=s(86048),a=s(75389),r=s(43229),c=s(79295),d=s(96540),h=s(79700),x=s(26771),j=s(64224),u=s(47082),p=s(74848);function m(e){let{rule:n="auto",size:s="large",type:m="primary"}=e;const{userInfo:A,setOpen:g}=(0,h.Py)(),{modal:v,message:y}=(0,t.x)(),[f,b]=(0,d.useState)(""),[w,C]=(0,d.useState)(""),k=u.A.rule_backup.map(((e,s)=>({label:"\u590d\u5236\u5907\u7528\u8ba2\u9605\u94fe\u63a5-"+(s+1),key:s,onClick:()=>{const s=(0,x.we)(e,n,A.name,A.combo_hash);C(s),(0,x.lW)(s).then((()=>{y.success("\u590d\u5236\u8ba2\u9605\u94fe\u63a5\u6210\u529f")})).catch((()=>{v.info({title:"\u590d\u5236\u4e0d\u6210\u529f\uff0c\u8bf7\u624b\u52a8\u590d\u5236\u4e0b\u9762\u7684\u5185\u5bb9",content:s})}))}})));return(0,d.useEffect)((()=>{A&&(0,x.Up)().then((e=>{const s=(0,x.we)(e,n,A.name,A.combo_hash);b(s),w||C(s)}))}),[A,n]),A?(0,p.jsxs)("div",{className:"space",children:[(0,p.jsxs)(l.A.Button,{type:m,size:s,icon:(0,p.jsx)(a.A,{}),loading:!f,menu:{items:k},onClick:()=>{C(f),(0,x.lW)(f).then((()=>{y.success("\u590d\u5236\u8ba2\u9605\u94fe\u63a5\u6210\u529f")})).catch((()=>{v.info({title:"\u590d\u5236\u4e0d\u6210\u529f\uff0c\u8bf7\u624b\u52a8\u590d\u5236\u4e0b\u9762\u7684\u5185\u5bb9",content:f})}))},children:[f?(0,p.jsx)(r.A,{}):""," \u590d\u5236\u8ba2\u9605\u94fe\u63a5\u5230\u526a\u8d34\u677f"]}),(0,p.jsx)(i.A,{overlayInnerStyle:{padding:0},content:w?(0,p.jsx)(o.A,{value:w}):(0,p.jsx)(j.A,{}),children:(0,p.jsx)(c.A,{})})]}):(0,p.jsx)("button",{className:"button button--lg button--primary",onClick:()=>{g(h.cA.Login)},children:"\u83b7\u53d6\u8ba2\u9605\u94fe\u63a5"})}}}]);
"use strict";(self.webpackChunklego_front_devpn=self.webpackChunklego_front_devpn||[]).push([[6511],{61011:(e,s,t)=>{t.d(s,{Z:()=>a});var n=t(87462),l=t(67294);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"right-circle",theme:"outlined"};var i=t(42135),r=function(e,s){return l.createElement(i.Z,(0,n.Z)({},e,{ref:s,icon:c}))};const a=l.forwardRef(r)},98354:(e,s,t)=>{t.d(s,{Z:()=>r});var n=t(86010);const l={card:"card_D5QJ",head:"head__dCx",body:"body_BFWu"};var c=t(34410),i=t(85893);function r(e){let{title:s,extra:t,headStyle:r,bodyStyle:a,style:d,loading:o,children:h,className:x}=e;return(0,i.jsxs)("div",{className:(0,n.Z)(l.card,x),style:d,children:[s||t?(0,i.jsxs)("div",{className:(0,n.Z)("space-bt",l.head),style:r,children:[(0,i.jsx)("h3",{children:s}),(0,i.jsx)("div",{children:t})]}):null,(0,i.jsx)("div",{className:l.body,style:a,children:o?(0,i.jsx)(c.Z,{}):h})]})}},91227:(e,s,t)=>{t.d(s,{Z:()=>r});var n=t(86010);const l={result:"result_QnBQ",body:"body_WljU",content:"content_T0BG"};var c=t(85893);const i={success:(0,c.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7927",width:"84",height:"84",children:(0,c.jsx)("path",{d:"M824.533333 217.770667c-194.901333 124.714667-336.128 281.6-399.786666 360.618666l-155.221334-127.189333-68.821333 57.6 268.458667 285.269333c46.464-123.52 192.853333-365.098667 371.754666-536.746666l-16.384-39.509334zM512 1024C229.248 1024 0 794.794667 0 512S229.248 0 512 0c282.794667 0 512 229.205333 512 512s-229.205333 512-512 512z",fill:"#67C23A","p-id":"7928"})})};function r(e){let{status:s,title:t,subTitle:r,extra:a,className:d,style:o,children:h}=e;return(0,c.jsxs)("div",{className:(0,n.Z)(l.result,d),style:o,children:[(0,c.jsxs)("div",{className:l.body,children:[i[s||"success"],(0,c.jsx)("h4",{children:t}),(0,c.jsx)("p",{children:r}),a]}),h?(0,c.jsx)("div",{className:l.content,children:h}):null]})}},66629:(e,s,t)=>{t.d(s,{Z:()=>c});const n={itemList:"itemList_yUgU",itemTitle:"itemTitle_SCiT"};var l=t(85893);function c(e){let{title:s,value:t}=e;return(0,l.jsxs)("div",{className:n.itemList,children:[(0,l.jsx)("div",{className:n.itemTitle,children:s},"title"),(0,l.jsx)("div",{children:t},"value")]})}},79696:(e,s,t)=>{t.r(s),t.d(s,{default:()=>y});var n=t(62813),l=t(86435),c=t(98354),i=t(7442),r=t(42590),a=t(67294);const d={check:"check_iMrw"};var o=t(59720),h=t(21032),x=t(91227),j=t(66629),u=t(33692),m=t(57132),v=t(15867),p=t(85893);function b(){const{userInfo:e,setUserInfo:s}=(0,r.Pc)(),{modal:t,message:n}=(0,i.S)(),[b,Z]=(0,a.useState)(""),[f,g]=(0,a.useState)(!1),[y,_]=(0,a.useState)(!1),N=()=>{g(!0),h.A.conn().free({key:b}).then((e=>{e.token&&e.info&&(s(e.info),_(!0))})).catch((()=>{n.error("\u83b7\u53d6\u514d\u8d39\u8bd5\u7528\u5957\u9910\u4e0d\u6210\u529f\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")})).finally((()=>{g(!1)}))};return(0,p.jsx)(c.Z,{children:y&&e?(0,p.jsx)(x.Z,{className:d.check,status:"success",title:"\u83b7\u53d6\u514d\u8d39\u8bd5\u7528\u5957\u9910\u6210\u529f",subTitle:"\u8bf7\u8bb0\u4f4f\u4e0b\u9762\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u5957\u9910\u6709\u6548\u671f 1 \u5c0f\u65f6\uff1b\u5173\u95ed\u6b64\u7a97\u53e3\u540e\uff0c\u60a8\u5c06\u65e0\u6cd5\u518d\u6b21\u67e5\u770b\u6b64\u5bc6\u7801\uff0c\u56e0\u6b64\u8bf7\u52a1\u5fc5\u8bb0\u5f55\u4e0b\u6765\u3002",extra:(0,p.jsxs)("div",{style:{minWidth:250},children:[(0,p.jsx)(j.Z,{title:"\u7528\u6237\u540d",value:(0,p.jsxs)("div",{className:"space",children:[(0,p.jsx)("strong",{children:e.name}),(0,p.jsx)(v.ZP,{icon:(0,p.jsx)(m.Z,{}),onClick:()=>{navigator.clipboard.writeText(e.name),n.success("\u590d\u5236\u7528\u6237\u540d\u6210\u529f")}})]})}),(0,p.jsx)(j.Z,{title:"\u5bc6\u7801",value:(0,p.jsxs)("div",{className:"space",children:[(0,p.jsx)("strong",{children:e.combo_pwd}),(0,p.jsx)(v.ZP,{icon:(0,p.jsx)(m.Z,{}),onClick:()=>{navigator.clipboard.writeText(e.combo_pwd),n.success("\u590d\u5236\u5bc6\u7801\u6210\u529f")}})]})}),(0,p.jsxs)("p",{style:{marginTop:20},children:["\u6b22\u8fce\u5206\u4eab\u94fe\u63a5\u7ed9\u60a8\u7684\u670b\u53cb\uff0c\u60a8\u5c06\u5f97\u5230\u9ad8\u8fbe 35% \u7684\u8fd4\u73b0\u3002",(0,p.jsx)(u.Z,{to:"/invite",target:"_blank",children:"\u9080\u8bf7\u8fd4\u73b0"})]})]}),children:(0,p.jsxs)("div",{className:"space",children:[(0,p.jsx)(u.Z,{to:"/docs/start/",className:"button button--outline button--primary",target:"_blank",children:"\u4f7f\u7528\u6559\u7a0b"}),(0,p.jsx)(u.Z,{to:"/account",className:"button button--outline button--secondary",target:"_blank",children:"\u4e2a\u4eba\u4e2d\u5fc3"})]})}):(0,p.jsxs)("div",{className:d.check,children:[(0,p.jsx)("h1",{style:{marginBottom:"2rem"},children:"\u83b7\u53d6\u514d\u8d39\u8bd5\u7528\u5957\u9910"}),(0,p.jsx)("p",{children:"\u8fdb\u884c\u4eba\u673a\u9a8c\u8bc1\uff0c\u901a\u8fc7\u540e\u5c06\u83b7\u53d6\u5230 1 \u5c0f\u65f6 1G \u6d41\u91cf\u7684\u514d\u8d39\u8bd5\u7528\u5957\u9910\uff0c\u4e0d\u9700\u8981\u4efb\u4f55\u4e2a\u4eba\u4fe1\u606f"}),(0,p.jsx)(l.Z,{style:{width:340},onSuccess:async e=>{Z(e)}}),(0,p.jsx)("button",{className:"button button--lg button--primary",style:{marginTop:16},onClick:async s=>{if(s.preventDefault(),!f)if(b)if(e&&r.Pc.name){await t.confirm({title:"\u83b7\u53d6\u514d\u8d39\u8bd5\u7528\u5957\u9910",content:`\u5f53\u524d\u8d26\u53f7 ${e.nickname||e.name} \u5c06\u9000\u51fa\u767b\u5f55\u5e76\u81ea\u52a8\u5207\u6362\u4e3a\u8bd5\u7528\u8d26\u53f7\uff0c\u786e\u8ba4\u7ee7\u7eed\u83b7\u53d6\u514d\u8d39\u8bd5\u7528\u5957\u9910\uff1f`})&&N()}else N();else n.error("\u8bf7\u5148\u8fdb\u884c\u4eba\u673a\u9a8c\u8bc1")},children:(0,p.jsxs)("div",{className:"space",children:[f?(0,p.jsx)(o.Z,{}):null,"\u83b7\u53d6\u514d\u8d39\u8bd5\u7528\u5957\u9910"]})})]})})}var Z=t(61011);const f={exlist:"exlist_YXZ4"};function g(){return(0,p.jsx)(c.Z,{title:"\u6e29\u99a8\u63d0\u793a",children:(0,p.jsxs)("ul",{className:f.exlist,children:[(0,p.jsxs)("li",{children:[(0,p.jsx)(Z.Z,{}),(0,p.jsxs)("p",{children:["\u514d\u8d39\u670d\u52a1\u4e3b\u8981\u7528\u4e8e\u6d4b\u8bd5\uff0c\u7981\u6b62\u4efb\u4f55\u4eba\u4f7f\u7528 Devpn \u7f51\u7edc\u670d\u52a1\u4ece\u4e8b\u4efb\u4f55\u8fdd\u6cd5\u72af\u7f6a\u3001\u9ed1\u5ba2\u3001\u7f51\u7edc\u653b\u51fb\u7b49\u884c\u4e3a\uff0c\u5fc5\u987b\u9075\u5b88",(0,p.jsx)(u.Z,{to:"/terms",rel:"nofollow",target:"_blank",children:"\u670d\u52a1\u6761\u6b3e"}),"\u3002"]})]}),(0,p.jsxs)("li",{children:[(0,p.jsx)(Z.Z,{}),(0,p.jsxs)("p",{children:["\u7533\u8bf7\u514d\u8d39\u8bd5\u7528\u670d\u52a1\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u5206\u914d\u4e00\u4e2a\u5305\u542b\u8bd5\u7528\u5957\u9910\u7684\u8d26\u53f7\u7ed9\u60a8\uff0c\u8bf7\u6839\u636e",(0,p.jsx)(u.Z,{to:"/docs/start/",target:"_blank",children:"\u4f7f\u7528\u6559\u7a0b"}),"\u914d\u7f6e\u4f7f\u7528\u3002"]})]}),(0,p.jsxs)("li",{children:[(0,p.jsx)(Z.Z,{}),(0,p.jsxs)("p",{children:["\u5957\u9910\u5230\u671f\u4e4b\u540e\u8d26\u53f7\u4f1a\u81ea\u52a8\u5931\u6548\uff0c\u5efa\u8bae\u4e0d\u8981\u5728\u8bd5\u7528\u8d26\u53f7\u91cc\u5145\u503c\u6216\u8d2d\u4e70\u5957\u9910\uff1b\u5982\u679c\u9700\u8981",(0,p.jsx)(u.Z,{to:"/combo",target:"_blank",children:"\u8d2d\u4e70\u5957\u9910"}),"\u5efa\u8bae\u4f7f\u7528\u81ea\u5df1\u6ce8\u518c\u7684\u8d26\u53f7\u3002"]})]}),(0,p.jsxs)("li",{children:[(0,p.jsx)(Z.Z,{}),(0,p.jsx)("p",{children:"\u7cfb\u7edf\u81ea\u52a8\u5206\u914d\u52a8\u6001\u8d26\u53f7\uff0c\u5957\u9910\u6709\u6548\u671f 1 \u5c0f\u65f6\uff0c\u5305\u542b 1G \u6d41\u91cf\u3002"})]}),(0,p.jsxs)("li",{children:[(0,p.jsx)(Z.Z,{}),(0,p.jsx)("p",{children:"\u5957\u9910\u8fc7\u671f\u540e\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u7533\u8bf7\uff0c\u4e0d\u9650\u5236\u7533\u8bf7\u6b21\u6570\uff1b\u65b0\u7533\u8bf7\u7684\u5957\u9910\u9700\u8981\u6839\u636e\u4f7f\u7528\u6559\u7a0b\u91cd\u65b0\u914d\u7f6e\u624d\u80fd\u6b63\u5e38\u4f7f\u7528\u3002"})]})]})})}function y(){return(0,p.jsx)(n.Z,{title:"\u514d\u8d39\u8bd5\u7528",description:"\u514d\u8d39\u8bd5\u7528\uff0c\u8f93\u5165\u9a8c\u8bc1\u7801\u5c31\u53ef\u4ee5\u7acb\u5373\u83b7\u5f97 1 \u5c0f\u65f6 1G \u7684\u6d41\u91cf\u5957\u9910\uff1b\u6ce8\u518c\u7528\u6237\u5e76\u9a8c\u8bc1\u90ae\u7bb1\u518d\u8d60\u9001 7 \u5929 7G \u7684\u6d41\u91cf\u5957\u9910",children:(0,p.jsx)("main",{children:(0,p.jsx)("div",{className:"container contain-margin",children:(0,p.jsxs)("div",{className:"space-vb",children:[(0,p.jsx)(b,{}),(0,p.jsx)(g,{})]})})})})}}}]);
"use strict";(self.webpackChunklego_front_devpn=self.webpackChunklego_front_devpn||[]).push([[32],{90672:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(1413),i=n(45987),l=n(67294),s=n(48490),o=n(85893),a=["fieldProps","proFieldProps"],c=function(e,t){var n=e.fieldProps,l=e.proFieldProps,c=(0,i.Z)(e,a);return(0,o.jsx)(s.Z,(0,r.Z)({ref:t,valueType:"textarea",fieldProps:n,proFieldProps:l},c))};const d=l.forwardRef(c)},37476:(e,t,n)=>{n.d(t,{Y:()=>Z});var r=n(74165),i=n(15861),l=n(1413),s=n(97685),o=n(45987),a=n(73177),c=n(94740),d=n(85576),u=n(72378),f=n.n(u),h=n(21770),p=n(80334),v=n(67294),x=n(73935),m=n(24565),j=n(85893),g=["children","trigger","onVisibleChange","onOpenChange","modalProps","onFinish","submitTimeout","title","width","visible","open"];function Z(e){var t,n,u=e.children,Z=e.trigger,y=e.onVisibleChange,b=e.onOpenChange,C=e.modalProps,w=e.onFinish,k=e.submitTimeout,P=e.title,T=e.width,S=e.visible,I=e.open,F=(0,o.Z)(e,g);(0,p.ET)(!F.footer||!(null!=C&&C.footer),"ModalForm \u662f\u4e00\u4e2a ProForm \u7684\u7279\u6b8a\u5e03\u5c40\uff0c\u5982\u679c\u60f3\u81ea\u5b9a\u4e49\u6309\u94ae\uff0c\u8bf7\u4f7f\u7528 submit.render \u81ea\u5b9a\u4e49\u3002");var R=(0,v.useContext)(c.ZP.ConfigContext),M=(0,v.useState)([]),_=(0,s.Z)(M,2)[1],O=(0,v.useState)(!1),q=(0,s.Z)(O,2),L=q[0],E=q[1],N=(0,h.Z)(!!S,{value:I||S,onChange:b||y}),X=(0,s.Z)(N,2),D=X[0],V=X[1],z=(0,v.useRef)(null),A=(0,v.useCallback)((function(e){null===z.current&&e&&_([]),z.current=e}),[]),$=(0,v.useRef)(),K=(0,v.useCallback)((function(){var e,t,n,r=null!==(e=null!==(t=F.form)&&void 0!==t?t:null===(n=F.formRef)||void 0===n?void 0:n.current)&&void 0!==e?e:$.current;r&&null!=C&&C.destroyOnClose&&r.resetFields()}),[null==C?void 0:C.destroyOnClose,F.form,F.formRef]);(0,v.useImperativeHandle)(F.formRef,(function(){return $.current}),[$.current]),(0,v.useEffect)((function(){D&&(I||S)&&(null==b||b(!0),null==y||y(!0))}),[S,I,D]);var H=(0,v.useMemo)((function(){return Z?v.cloneElement(Z,(0,l.Z)((0,l.Z)({key:"trigger"},Z.props),{},{onClick:(e=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:V(!D),null===(n=Z.props)||void 0===n||null===(i=n.onClick)||void 0===i||i.call(n,t);case 2:case"end":return e.stop()}}),e)}))),function(t){return e.apply(this,arguments)})})):null;var e}),[V,Z,D]),U=(0,v.useMemo)((function(){var e,t,n,r,i,l;return!1!==F.submitter&&f()({searchConfig:{submitText:null!==(e=null!==(t=null==C?void 0:C.okText)&&void 0!==t?t:null===(n=R.locale)||void 0===n||null===(n=n.Modal)||void 0===n?void 0:n.okText)&&void 0!==e?e:"\u786e\u8ba4",resetText:null!==(r=null!==(i=null==C?void 0:C.cancelText)&&void 0!==i?i:null===(l=R.locale)||void 0===l||null===(l=l.Modal)||void 0===l?void 0:l.cancelText)&&void 0!==r?r:"\u53d6\u6d88"},resetButtonProps:{preventDefault:!0,disabled:k?L:void 0,onClick:function(e){var t;V(!1),null==C||null===(t=C.onCancel)||void 0===t||t.call(C,e)}}},F.submitter)}),[null===(t=R.locale)||void 0===t||null===(t=t.Modal)||void 0===t?void 0:t.cancelText,null===(n=R.locale)||void 0===n||null===(n=n.Modal)||void 0===n?void 0:n.okText,C,F.submitter,V,L,k]),B=(0,v.useCallback)((function(e,t){return(0,j.jsxs)(j.Fragment,{children:[e,z.current&&t?(0,j.jsx)(v.Fragment,{children:(0,x.createPortal)(t,z.current)},"submitter"):t]})}),[]),W=(0,v.useCallback)(function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null==w?void 0:w(t),k&&n instanceof Promise&&(E(!0),i=setTimeout((function(){return E(!1)}),k),n.finally((function(){clearTimeout(i),E(!1)}))),e.next=4,n;case 4:return(l=e.sent)&&V(!1),e.abrupt("return",l);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[w,V,k]),Y=(0,a.X)(D);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(d.Z,(0,l.Z)((0,l.Z)((0,l.Z)({title:P,width:T||800},C),Y),{},{onCancel:function(e){var t;k&&L||(V(!1),null==C||null===(t=C.onCancel)||void 0===t||t.call(C,e))},afterClose:function(){var e;K(),V(!1),null==C||null===(e=C.afterClose)||void 0===e||e.call(C)},footer:!1!==F.submitter?(0,j.jsx)("div",{ref:A,style:{display:"flex",justifyContent:"flex-end"}}):null,children:(0,j.jsx)(m.I,(0,l.Z)((0,l.Z)({formComponentType:"ModalForm",layout:"vertical"},F),{},{onInit:function(e,t){var n;F.formRef&&(F.formRef.current=t),null==F||null===(n=F.onInit)||void 0===n||n.call(F,e,t),$.current=t},formRef:$,submitter:U,onFinish:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),contentRender:B,children:u}))})),H]})}},66177:(e,t,n)=>{n.d(t,{K:()=>l});n(67294),n(52263);var r=n(91980);const i="q";function l(){return(0,r.Nc)(i)}},98354:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(86010);const i={card:"card_D5QJ",head:"head__dCx",body:"body_BFWu"};var l=n(34410),s=n(85893);function o(e){let{title:t,extra:n,headStyle:o,bodyStyle:a,style:c,loading:d,children:u,className:f}=e;return(0,s.jsxs)("div",{className:(0,r.Z)(i.card,f),style:c,children:[t||n?(0,s.jsxs)("div",{className:(0,r.Z)("space-bt",i.head),style:o,children:[(0,s.jsx)("h3",{children:t}),(0,s.jsx)("div",{children:n})]}):null,(0,s.jsx)("div",{className:i.body,style:a,children:d?(0,s.jsx)(l.Z,{}):u})]})}},73353:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var r=n(62813),i=n(7442),l=n(24599),s=n(2487),o=n(15867),a=n(40411),c=n(7134),d=n(67294),u=n(50888),f=n(87547),h=n(39960),p=n(26594),v=n(42590),x=n(98354),m=n(85893);const j=10;function g(){const{userInfo:e,inited:t,setOpen:n}=(0,v.Pc)(),[r,g]=(0,d.useState)(!0),[Z,y]=(0,d.useState)(!1),[b,C]=(0,d.useState)(!1),[w,k]=(0,d.useState)([]),{message:P}=(0,i.S)();return(0,d.useEffect)((()=>{var n;n=j,e?(0,l.zM)({num:n}).then((e=>{k(e),!e||e.length<n?C(!0):C(!1)})).catch((()=>{C(!0)})).finally((()=>{g(!1)})):!e&&t&&(g(!1),C(!0))}),[e,t]),t?(0,m.jsx)(x.Z,{title:"\u53cd\u9988\u5217\u8868",loading:r,extra:(0,m.jsx)(h.Z,{to:"/ticket/new",children:"\u65b0\u5efa\u53cd\u9988"}),children:(0,m.jsx)(s.Z,{rowKey:"id",itemLayout:"vertical",loadMore:r||b?e?null:(0,m.jsx)("div",{style:{textAlign:"center"},children:(0,m.jsx)(o.ZP,{type:"primary",onClick:()=>{n(v.Lo.Login)},children:"\u767b\u5f55\u67e5\u770b\u6570\u636e"})}):(0,m.jsx)("div",{style:{textAlign:"center",marginTop:16},children:(0,m.jsx)(o.ZP,{onClick:()=>{y(!0),(0,l.zM)({started:w[w.length-1].created,num:j}).then((e=>{e.length<j&&C(!0);const t=w.concat(e);k(t),window.dispatchEvent(new Event("resize"))})).catch((()=>{P.error("\u52a0\u8f7d\u4e0d\u6210\u529f\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")})).finally((()=>{y(!1)}))},style:{paddingLeft:48,paddingRight:48},children:Z?(0,m.jsxs)("span",{children:[(0,m.jsx)(u.Z,{})," \u52a0\u8f7d\u4e2d..."]}):"\u52a0\u8f7d\u66f4\u591a"})}),dataSource:e?w:[],renderItem:e=>(0,m.jsxs)(s.Z.Item,{children:[(0,m.jsx)(s.Z.Item.Meta,{avatar:(0,m.jsx)(a.Z,{count:e.unread,children:(0,m.jsx)(c.C,{size:64,icon:(0,m.jsx)(f.Z,{}),style:{marginTop:32},src:e.profile?(0,p.ZX)(e.profile):null})}),title:(0,m.jsx)(h.Z,{to:`/ticket?q=${e.id}`,children:e.title}),description:(0,m.jsxs)(m.Fragment,{children:["\u64cd\u4f5c\u7cfb\u7edf\uff1a",(0,m.jsx)("strong",{children:p.oU[e.os]}),(0,m.jsx)("br",{}),"\u8fde\u63a5\u534f\u8bae\uff1a",(0,m.jsx)("strong",{children:p.P6[e.proto]}),(0,m.jsx)("br",{}),(0,p.uq)(e.updated||e.created)]})}),(0,m.jsx)("pre",{children:e.content+(e.content.length>99?"...":"")})]})})}):null}var Z=n(66177),y=n(24969),b=n(21032),C=n(37476),w=n(90672),k=n(26412),P=n(98163),T=n(2058),S=n(85576),I=n(35742),F=n(82128),R=n(16550);function M(e){let{ticketId:t}=e;const n=(0,d.useRef)(p.tO.get(p.VD.fileIds,[])),{inited:r,userInfo:u,updateUserInfo:j,setSuccess:g}=(0,v.Pc)(),[Z,M]=(0,d.useState)(!1),[_,O]=(0,d.useState)(""),[q,L]=(0,d.useState)(!1),[E,N]=(0,d.useState)(void 0),[X,D]=(0,d.useState)(!1),V=e=>{D(!0),(0,l.Xf)(e).then((e=>{N(e)})).finally((()=>{D(!1)}))},{message:z}=(0,i.S)(),[A,$]=(0,d.useState)([]),K=()=>{if(E)for(const e of E.list)if(e.me&&e.do_read)return void j()};(0,d.useEffect)((()=>{V(t),H()}),[]),(0,d.useEffect)((()=>{const e=setTimeout((()=>{if(E)for(const e of E.list)if(e.me&&!e.do_read&&!e.is_read)return e.do_read=!0,void(0,l.jL)(t).then(K)}),1e4);return()=>{clearTimeout(e)}}),[E]);const H=()=>{const e=b.A.conn().lasturl()||"";$(n.current.map((t=>{const[n,r,i]=t.split("|");return{uid:n,ids:t,status:"done",url:(0,p.pv)(e,`/file/${i||r}`),preview:(0,p.pv)(e,`/file/${r}`)}})))};return r&&!u?(0,m.jsx)(R.l_,{to:"/ticket"}):(0,m.jsxs)(x.Z,{loading:X,title:E?.title,extra:(0,m.jsxs)("div",{className:"space",children:[(0,m.jsx)(h.Z,{to:"/ticket",children:"\u8fd4\u56de\u5217\u8868"}),(0,m.jsx)(o.ZP,{loading:X,onClick:()=>L(!0),children:"\u56de\u590d"})]}),children:[(0,m.jsxs)(I.Z,{children:[(0,m.jsx)("title",{children:(0,F.p)(E?.title?E.title:"")}),(0,m.jsx)("meta",{property:"robots",content:"noindex, follow"})]}),(0,m.jsx)(k.Z,{items:[{key:"1",label:"\u64cd\u4f5c\u7cfb\u7edf",children:p.oU[E?.os||""]},{key:"2",label:"\u8fde\u63a5\u534f\u8bae",children:p.P6[E?.proto||""]},{key:"3",label:"\u521b\u5efa\u65f6\u95f4",children:(0,p.uq)(E?.created)}]}),(0,m.jsx)(s.Z,{rowKey:"id",itemLayout:"vertical",dataSource:E?.list,renderItem:e=>(0,m.jsxs)(s.Z.Item,{children:[(0,m.jsx)(s.Z.Item.Meta,{avatar:(0,m.jsx)(a.Z,{dot:e.me&&!e.is_read,children:(0,m.jsx)(c.C,{size:48,icon:(0,m.jsx)(f.Z,{}),src:e.profile?(0,p.ZX)(e.profile):null})}),description:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("strong",{children:e.me?"\u5ba2\u670d":"\u6211"}),(0,m.jsx)("br",{}),(0,p.uq)(e.created)]})}),(0,m.jsx)("pre",{children:e.content}),e.attach?(0,m.jsx)("div",{style:{marginTop:20},children:(0,m.jsx)(P.Z.PreviewGroup,{children:e.attach.map((e=>(0,m.jsx)(P.Z,{style:{objectFit:"cover",padding:5},width:64,height:64,src:(0,p.ZX)(e),preview:{src:(0,p.ZX)(e,!0)}},e)))})}):null]})}),(0,m.jsxs)(C.Y,{open:q,title:"\u56de\u590d\u53cd\u9988",width:640,onFinish:async e=>{e.id=t,n.current.length>0&&(e.attach=n.current),e.origin=(0,p.Wd)();try{await(0,l.ve)(e),g({duration:60,placement:"topRight",message:"\u63d0\u4ea4\u6210\u529f",description:"\u6211\u4eec\u5c06\u4f1a\u5c3d\u5feb\u56de\u590d\u60a8\uff0c\u8bf7\u5728\u7ad9\u5185\u67e5\u770b\u5ba2\u670d\u53cd\u9988\u5185\u5bb9\u3002"}),n.current.length=0,p.tO.remove(p.VD.fileIds),L(!1),K(),V(e.id)}catch(r){z.error("\u63d0\u4ea4\u4e0d\u6210\u529f\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}},modalProps:{onCancel:()=>L(!1),destroyOnClose:!0,maskClosable:!1},children:[(0,m.jsx)(w.Z,{label:"\u53cd\u9988\u5185\u5bb9",name:"content",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u53cd\u9988\u5185\u5bb9"},{max:1e4,message:"\u5185\u5bb9\u8fc7\u957f\uff0c\u8bf7\u7cbe\u7b80\u63cf\u8ff0\u5185\u5bb9"}],placeholder:"\u8bf7\u8f93\u5165\u53cd\u9988\u5185\u5bb9",fieldProps:{rows:10}}),(0,m.jsx)(T.Z,{name:"attach",accept:"image/jpg,image/jpeg,image/png",listType:"picture-card",fileList:A,onRemove:e=>{const t=e.ids,r=n.current.indexOf(t);r>-1&&(n.current.splice(r,1),p.tO.set(p.VD.fileIds,n.current))},onPreview:async e=>{O(e.preview),M(!0)},onChange:e=>{let{fileList:t}=e;return $(t)},customRequest:async e=>{const t=b.A.conn().token();if(!t||!u)return z.warning("\u4f1a\u8bdd\u8d85\u65f6\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55"),void H();const r=e.file,i=await b.A.conn().url();if(!i)return z.warning("\u627e\u4e0d\u5230\u670d\u52a1\u5668"),void H();const l=(0,p.pv)(i,`/up/image/${r.name}`),s=new XMLHttpRequest;s.open("POST",l),s.setRequestHeader("token",t),s.onreadystatechange=()=>{if(4==s.readyState){if(200==s.status){const e=s.responseText;n.current.indexOf(e)>-1?z.warning("\u56fe\u7247\u5df2\u7ecf\u5b58\u5728\u5217\u8868\u4e2d"):(n.current.push(e),p.tO.set(p.VD.fileIds,n.current))}else z.error("\u4e0a\u4f20\u56fe\u7247\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");H()}},s.send(r)},children:A.length>=5?null:(0,m.jsxs)("div",{children:[(0,m.jsx)(y.Z,{}),(0,m.jsx)("div",{style:{marginTop:8},children:"\u6dfb\u52a0\u56fe\u7247"})]})})]}),(0,m.jsx)(S.Z,{open:Z,footer:null,onCancel:()=>M(!1),children:(0,m.jsx)("img",{style:{width:"100%"},src:_})})]})}function _(){const[e]=(0,Z.K)();return(0,m.jsx)(r.Z,{title:"\u53cd\u9988\u95ee\u9898",children:(0,m.jsx)("main",{children:(0,m.jsx)("div",{className:"container contain-margin",children:e&&/^\d+$/.test(e)?(0,m.jsx)(M,{ticketId:parseInt(e)}):(0,m.jsx)(g,{})})})})}}}]);
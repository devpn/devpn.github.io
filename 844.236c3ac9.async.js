(self.webpackChunkdevpn_web=self.webpackChunkdevpn_web||[]).push([[844],{57254:function(ne,$,s){"use strict";s.d($,{Z:function(){return N}});var D=s(28991),I=s(67294),Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},S=Z,U=s(27029),G=function(H,E){return I.createElement(U.Z,(0,D.Z)((0,D.Z)({},H),{},{ref:E,icon:S}))};G.displayName="DownOutlined";var N=I.forwardRef(G)},70844:function(ne,$,s){"use strict";s.d($,{ZP:function(){return At}});var D=s(38663),I=s(70883),Z=s(22122),S=s(96156),U=s(6610),G=s(5991),N=s(10379),W=s(44144),H=s(90484),E=s(94184),R=s.n(E),J=s(48717),oe=s(98423),i=s(67294),A=s(53124),te=s(85061),K=s(75164);function Q(n){var e,r=function(o){return function(){e=null,n.apply(void 0,(0,te.Z)(o))}},t=function(){if(e==null){for(var o=arguments.length,d=new Array(o),c=0;c<o;c++)d[c]=arguments[c];e=(0,K.Z)(r(d))}};return t.cancel=function(){K.Z.cancel(e),e=null},t}function q(){return function(e,r,t){var a=t.value,o=!1;return{configurable:!0,get:function(){if(o||this===e.prototype||this.hasOwnProperty(r))return a;var c=Q(a.bind(this));return o=!0,Object.defineProperty(this,r,{value:c,configurable:!0,writable:!0}),o=!1,c}}}}var Me=s(64019);function re(n){return n!==window?n.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function fe(n,e,r){if(r!==void 0&&e.top>n.top-r)return r+e.top}function ue(n,e,r){if(r!==void 0&&e.bottom<n.bottom+r){var t=window.innerHeight-e.bottom;return r+t}}var ve=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],X=[];function Yt(){return X}function me(n,e){if(!!n){var r=X.find(function(t){return t.target===n});r?r.affixList.push(e):(r={target:n,affixList:[e],eventHandlers:{}},X.push(r),ve.forEach(function(t){r.eventHandlers[t]=(0,Me.Z)(n,t,function(){r.affixList.forEach(function(a){a.lazyUpdatePosition()})})}))}}function he(n){var e=X.find(function(r){var t=r.affixList.some(function(a){return a===n});return t&&(r.affixList=r.affixList.filter(function(a){return a!==n})),t});e&&e.affixList.length===0&&(X=X.filter(function(r){return r!==e}),ve.forEach(function(r){var t=e.eventHandlers[r];t&&t.remove&&t.remove()}))}var ge=function(n,e,r,t){var a=arguments.length,o=a<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,d;if((typeof Reflect=="undefined"?"undefined":(0,H.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,r,t);else for(var c=n.length-1;c>=0;c--)(d=n[c])&&(o=(a<3?d(o):a>3?d(e,r,o):d(e,r))||o);return a>3&&o&&Object.defineProperty(e,r,o),o};function De(){return typeof window!="undefined"?window:null}var Y;(function(n){n[n.None=0]="None",n[n.Prepare=1]="Prepare"})(Y||(Y={}));var ae=function(n){(0,N.Z)(r,n);var e=(0,W.Z)(r);function r(){var t;return(0,U.Z)(this,r),t=e.apply(this,arguments),t.state={status:Y.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var a=t.props,o=a.offsetBottom,d=a.offsetTop;return o===void 0&&d===void 0?0:d},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(a){t.placeholderNode=a},t.saveFixedNode=function(a){t.fixedNode=a},t.measure=function(){var a=t.state,o=a.status,d=a.lastAffix,c=t.props.onChange,u=t.getTargetFunc();if(!(o!==Y.Prepare||!t.fixedNode||!t.placeholderNode||!u)){var m=t.getOffsetTop(),h=t.getOffsetBottom(),g=u();if(!!g){var l={status:Y.None},C=re(g),f=re(t.placeholderNode),b=fe(f,C,m),P=ue(f,C,h);f.top===0&&f.left===0&&f.width===0&&f.height===0||(b!==void 0?(l.affixStyle={position:"fixed",top:b,width:f.width,height:f.height},l.placeholderStyle={width:f.width,height:f.height}):P!==void 0&&(l.affixStyle={position:"fixed",bottom:P,width:f.width,height:f.height},l.placeholderStyle={width:f.width,height:f.height}),l.lastAffix=!!l.affixStyle,c&&d!==l.lastAffix&&c(l.lastAffix),t.setState(l))}}},t.prepareMeasure=function(){if(t.setState({status:Y.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var a},t}return(0,G.Z)(r,[{key:"getTargetFunc",value:function(){var a=this.context.getTargetContainer,o=this.props.target;return o!==void 0?o:a!=null?a:De}},{key:"componentDidMount",value:function(){var a=this,o=this.getTargetFunc();o&&(this.timeout=setTimeout(function(){me(o(),a),a.updatePosition()}))}},{key:"componentDidUpdate",value:function(a){var o=this.state.prevTarget,d=this.getTargetFunc(),c=(d==null?void 0:d())||null;o!==c&&(he(this),c&&(me(c,this),this.updatePosition()),this.setState({prevTarget:c})),(a.offsetTop!==this.props.offsetTop||a.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),he(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var a=this.getTargetFunc(),o=this.state.affixStyle;if(a&&o){var d=this.getOffsetTop(),c=this.getOffsetBottom(),u=a();if(u&&this.placeholderNode){var m=re(u),h=re(this.placeholderNode),g=fe(h,m,d),l=ue(h,m,c);if(g!==void 0&&o.top===g||l!==void 0&&o.bottom===l)return}}this.prepareMeasure()}},{key:"render",value:function(){var a=this,o=this.state,d=o.affixStyle,c=o.placeholderStyle,u=this.props,m=u.affixPrefixCls,h=u.children,g=R()((0,S.Z)({},m,!!d)),l=(0,oe.Z)(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls"]);return i.createElement(J.Z,{onResize:function(){a.updatePosition()}},i.createElement("div",(0,Z.Z)({},l,{ref:this.savePlaceholderNode}),d&&i.createElement("div",{style:c,"aria-hidden":"true"}),i.createElement("div",{className:g,ref:this.saveFixedNode,style:d},i.createElement(J.Z,{onResize:function(){a.updatePosition()}},h))))}}]),r}(i.Component);ae.contextType=A.E_,ge([q()],ae.prototype,"updatePosition",null),ge([q()],ae.prototype,"lazyUpdatePosition",null);var He=i.forwardRef(function(n,e){var r=n.prefixCls,t=i.useContext(A.E_),a=t.getPrefixCls,o=a("affix",r),d=(0,Z.Z)((0,Z.Z)({},n),{affixPrefixCls:o});return i.createElement(ae,(0,Z.Z)({},d,{ref:e}))}),Le=He,Vt=s(84305),ie=s(39559),Jt=s(59903),Qt=s(94233),qt=s(81262),_t=s(59250),er=s(30887),tr=s(49111),xe=s(28481),v=s(28991),Ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},ze=Ie,be=s(27029),ye=function(e,r){return i.createElement(be.Z,(0,v.Z)((0,v.Z)({},e),{},{ref:r,icon:ze}))};ye.displayName="ArrowLeftOutlined";var $e=i.forwardRef(ye),Ue={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},We=Ue,Ce=function(e,r){return i.createElement(be.Z,(0,v.Z)((0,v.Z)({},e),{},{ref:r,icon:We}))};Ce.displayName="ArrowRightOutlined";var Ke=i.forwardRef(Ce),ke=s(30470),Ge=s(51890),Xe=s(50344),Ye=s(18515),Ve=s(96159),Je=s(57254),Qe=s(81555),qe=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r},pe=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,o=e.children,d=e.menu,c=e.overlay,u=e.dropdownProps,m=qe(e,["prefixCls","separator","children","menu","overlay","dropdownProps"]),h=i.useContext(A.E_),g=h.getPrefixCls,l=g("breadcrumb",r),C=function(P){if(d||c){var x=(0,Z.Z)({},u);return"overlay"in e&&(x.overlay=c),i.createElement(Qe.Z,(0,Z.Z)({menu:d,placement:"bottom"},x),i.createElement("span",{className:"".concat(l,"-overlay-link")},P,i.createElement(Je.Z,null)))}return P},f;return"href"in m?f=i.createElement("a",(0,Z.Z)({className:"".concat(l,"-link")},m),o):f=i.createElement("span",(0,Z.Z)({className:"".concat(l,"-link")},m),o),f=C(f),o!=null?i.createElement("li",null,f,a&&i.createElement("span",{className:"".concat(l,"-separator")},a)):null};pe.__ANT_BREADCRUMB_ITEM=!0;var Pe=pe,Ze=function(e){var r=e.children,t=i.useContext(A.E_),a=t.getPrefixCls,o=a("breadcrumb");return i.createElement("span",{className:"".concat(o,"-separator")},r||"/")};Ze.__ANT_BREADCRUMB_SEPARATOR=!0;var _e=Ze,et=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r};function tt(n,e){if(!n.breadcrumbName)return null;var r=Object.keys(e).join("|"),t=n.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(a,o){return e[o]||a});return t}function rt(n,e,r,t){var a=r.indexOf(n)===r.length-1,o=tt(n,e);return a?i.createElement("span",null,o):i.createElement("a",{href:"#/".concat(t.join("/"))},o)}var Ne=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach(function(t){e=e.replace(":".concat(t),r[t])}),e},at=function(e,r,t){var a=(0,te.Z)(e),o=Ne(r||"",t);return o&&a.push(o),a},le=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,o=e.style,d=e.className,c=e.routes,u=e.children,m=e.itemRender,h=m===void 0?rt:m,g=e.params,l=g===void 0?{}:g,C=et(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),f=i.useContext(A.E_),b=f.getPrefixCls,P=f.direction,x,O=b("breadcrumb",r);if(c&&c.length>0){var T=[];x=c.map(function(p){var F=Ne(p.path,l);F&&T.push(F);var j;p.children&&p.children.length&&(j=i.createElement(Ye.Z,{items:p.children.map(function(M){return{key:M.path||M.breadcrumbName,label:h(M,l,c,at(T,M.path,l))}})}));var L={separator:a};return j&&(L.overlay=j),i.createElement(Pe,(0,Z.Z)({},L,{key:F||p.breadcrumbName}),h(p,l,c,T))})}else u&&(x=(0,Xe.Z)(u).map(function(p,F){return p&&(0,Ve.Tm)(p,{separator:a,key:F})}));var B=R()(O,(0,S.Z)({},"".concat(O,"-rtl"),P==="rtl"),d);return i.createElement("nav",(0,Z.Z)({className:B,style:o},C),i.createElement("ol",null,x))};le.Item=Pe,le.Separator=_e;var nt=le,ot=nt,it=s(42051),lt=s(19650),st=s(34952),dt=function(e,r,t){return!r||!t?null:i.createElement(it.Z,{componentName:"PageHeader"},function(a){return i.createElement("div",{className:"".concat(e,"-back")},i.createElement(st.Z,{onClick:function(d){t==null||t(d)},className:"".concat(e,"-back-button"),"aria-label":a.back},r))})},ct=function(e){return i.createElement(ot,(0,Z.Z)({},e))},ft=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:r==="rtl"?i.createElement(Ke,null):i.createElement($e,null)},ut=function(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",a=r.title,o=r.avatar,d=r.subTitle,c=r.tags,u=r.extra,m=r.onBack,h="".concat(e,"-heading"),g=a||d||c||u;if(!g)return null;var l=ft(r,t),C=dt(e,l,m),f=C||o||g;return i.createElement("div",{className:h},f&&i.createElement("div",{className:"".concat(h,"-left")},C,o&&i.createElement(Ge.C,(0,Z.Z)({},o)),a&&i.createElement("span",{className:"".concat(h,"-title"),title:typeof a=="string"?a:void 0},a),d&&i.createElement("span",{className:"".concat(h,"-sub-title"),title:typeof d=="string"?d:void 0},d),c&&i.createElement("span",{className:"".concat(h,"-tags")},c)),u&&i.createElement("span",{className:"".concat(h,"-extra")},i.createElement(lt.Z,null,u)))},vt=function(e,r){return r?i.createElement("div",{className:"".concat(e,"-footer")},r):null},mt=function(e,r){return i.createElement("div",{className:"".concat(e,"-content")},r)},ht=function(e){var r=(0,ke.Z)(!1),t=(0,xe.Z)(r,2),a=t[0],o=t[1],d=function(u){var m=u.width;o(m<768,!0)};return i.createElement(A.C,null,function(c){var u,m=c.getPrefixCls,h=c.pageHeader,g=c.direction,l,C=e.prefixCls,f=e.style,b=e.footer,P=e.children,x=e.breadcrumb,O=e.breadcrumbRender,T=e.className,B=!0;"ghost"in e?B=e.ghost:h&&"ghost"in h&&(B=h.ghost);var p=m("page-header",C),F=function(){return(x==null?void 0:x.routes)?ct(x):null},j=F(),L=x&&"props"in x,M=(l=O==null?void 0:O(e,j))!==null&&l!==void 0?l:j,w=L?x:M,V=R()(p,T,(u={"has-breadcrumb":!!w,"has-footer":!!b},(0,S.Z)(u,"".concat(p,"-ghost"),B),(0,S.Z)(u,"".concat(p,"-rtl"),g==="rtl"),(0,S.Z)(u,"".concat(p,"-compact"),a),u));return i.createElement(J.Z,{onResize:d},i.createElement("div",{className:V,style:f},w,ut(p,e,g),P&&mt(p,P),vt(p,b)))})},gt=ht,se=s(81253),rr=s(18106),Ee=s(63885),y=s(85893),de=s(64335),xt=s(97435),ar=s(56264),bt=["children","className","extra","style","renderContent"],yt=function(e){var r=e.children,t=e.className,a=e.extra,o=e.style,d=e.renderContent,c=(0,se.Z)(e,bt),u=(0,i.useContext)(ie.ZP.ConfigContext),m=u.getPrefixCls,h=e.prefixCls||m("pro"),g="".concat(h,"-footer-bar"),l=(0,i.useContext)(de.Z),C=(0,i.useMemo)(function(){var b=l.hasSiderMenu,P=l.isMobile,x=l.siderWidth;if(!!b)return x?P?"100%":"calc(100% - ".concat(x,"px)"):"100%"},[l.collapsed,l.hasSiderMenu,l.isMobile,l.siderWidth]),f=(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:"".concat(g,"-left"),children:a}),(0,y.jsx)("div",{className:"".concat(g,"-right"),children:r})]});return(0,i.useEffect)(function(){return!l||!(l==null?void 0:l.setHasFooterToolbar)?function(){}:(l==null||l.setHasFooterToolbar(!0),function(){var b;l==null||(b=l.setHasFooterToolbar)===null||b===void 0||b.call(l,!1)})},[]),(0,y.jsx)("div",(0,v.Z)((0,v.Z)({className:R()(t,"".concat(g)),style:(0,v.Z)({width:C},o)},(0,xt.Z)(c,["prefixCls"])),{},{children:d?d((0,v.Z)((0,v.Z)((0,v.Z)({},e),l),{},{leftWidth:C}),f):f}))},Ct=yt,pt=s(21349),Pt=s(83832),Zt=function(e){if(!e)return 1;var r=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/r},Nt=function(e){var r=e.children,t=e.style,a=e.className,o=e.markStyle,d=e.markClassName,c=e.zIndex,u=c===void 0?9:c,m=e.gapX,h=m===void 0?212:m,g=e.gapY,l=g===void 0?222:g,C=e.width,f=C===void 0?120:C,b=e.height,P=b===void 0?64:b,x=e.rotate,O=x===void 0?-22:x,T=e.image,B=e.content,p=e.offsetLeft,F=e.offsetTop,j=e.fontStyle,L=j===void 0?"normal":j,M=e.fontWeight,w=M===void 0?"normal":M,V=e.fontColor,ce=V===void 0?"rgba(0,0,0,.15)":V,Re=e.fontSize,Oe=Re===void 0?16:Re,Te=e.fontFamily,Se=Te===void 0?"sans-serif":Te,Ft=e.prefixCls,Mt=(0,i.useContext)(ie.ZP.ConfigContext),Dt=Mt.getPrefixCls,Be=Dt("pro-layout-watermark",Ft),Ht=R()("".concat(Be,"-wrapper"),a),Lt=R()(Be,d),It=(0,i.useState)(""),we=(0,xe.Z)(It,2),je=we[0],Ae=we[1];return(0,i.useEffect)(function(){var _=document.createElement("canvas"),z=_.getContext("2d"),k=Zt(z),zt="".concat((h+f)*k,"px"),$t="".concat((l+P)*k,"px"),Ut=p||h/2,Wt=F||l/2;if(_.setAttribute("width",zt),_.setAttribute("height",$t),z){z.translate(Ut*k,Wt*k),z.rotate(Math.PI/180*Number(O));var Kt=f*k,Fe=P*k;if(T){var ee=new Image;ee.crossOrigin="anonymous",ee.referrerPolicy="no-referrer",ee.src=T,ee.onload=function(){z.drawImage(ee,0,0,Kt,Fe),Ae(_.toDataURL())}}else if(B){var kt=Number(Oe)*k;z.font="".concat(L," normal ").concat(w," ").concat(kt,"px/").concat(Fe,"px ").concat(Se),z.fillStyle=ce,Array.isArray(B)?B==null||B.forEach(function(Gt,Xt){return z.fillText(Gt,0,Xt*50)}):z.fillText(B,0,0),Ae(_.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[h,l,p,F,O,L,w,f,P,Se,ce,T,B,Oe]),(0,y.jsxs)("div",{style:(0,v.Z)({position:"relative"},t),className:Ht,children:[r,(0,y.jsx)("div",{className:Lt,style:(0,v.Z)((0,v.Z)({zIndex:u,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(h+f,"px"),pointerEvents:"none",backgroundRepeat:"repeat"},je?{backgroundImage:"url('".concat(je,"')")}:null),o)})]})},Et=Nt,nr=s(12395),Rt=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],Ot=["children","loading","className","style","footer","affixProps","ghost","fixedHeader","breadcrumbRender"];function Tt(n){return(0,H.Z)(n)==="object"?n:{spinning:n}}var St=function(e){var r=e.tabList,t=e.tabActiveKey,a=e.onTabChange,o=e.tabBarExtraContent,d=e.tabProps,c=e.prefixedClassName;return Array.isArray(r)||o?(0,y.jsx)(Ee.Z,(0,v.Z)((0,v.Z)({className:"".concat(c,"-tabs"),activeKey:t,onChange:function(m){a&&a(m)},tabBarExtraContent:o},d),{},{children:r==null?void 0:r.map(function(u,m){return(0,i.createElement)(Ee.Z.TabPane,(0,v.Z)((0,v.Z)({},u),{},{tab:u.tab,key:u.key||m}))})})):null},Bt=function(e,r,t){return!e&&!r?null:(0,y.jsx)("div",{className:"".concat(t,"-detail"),children:(0,y.jsx)("div",{className:"".concat(t,"-main"),children:(0,y.jsxs)("div",{className:"".concat(t,"-row"),children:[e&&(0,y.jsx)("div",{className:"".concat(t,"-content"),children:e}),r&&(0,y.jsx)("div",{className:"".concat(t,"-extraContent"),children:r})]})})})},or=function(e){var r=useContext(RouteContext);return _jsx("div",{style:{height:"100%",display:"flex",alignItems:"center"},children:_jsx(_Breadcrumb,_objectSpread(_objectSpread(_objectSpread({},r==null?void 0:r.breadcrumb),r==null?void 0:r.breadcrumbProps),e))})},wt=function(e){var r,t=(0,i.useContext)(de.Z),a=e.title,o=e.content,d=e.pageHeaderRender,c=e.header,u=e.prefixedClassName,m=e.extraContent,h=e.style,g=e.prefixCls,l=e.breadcrumbRender,C=(0,se.Z)(e,Rt),f=(0,i.useMemo)(function(){if(!!l)return l},[l]);if(d===!1)return null;if(d)return(0,y.jsxs)(y.Fragment,{children:[" ",d((0,v.Z)((0,v.Z)({},e),t))]});var b=a;!a&&a!==!1&&(b=t.title);var P=(0,v.Z)((0,v.Z)((0,v.Z)({},t),{},{title:b},C),{},{footer:St((0,v.Z)((0,v.Z)({},C),{},{breadcrumbRender:l,prefixedClassName:u}))},c),x=P.breadcrumb,O=(!x||!(x==null?void 0:x.itemRender)&&!(x==null||(r=x.routes)===null||r===void 0?void 0:r.length))&&!l;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(T){return!P[T]})&&O&&!o&&!m?null:(0,y.jsx)("div",{className:"".concat(u,"-warp"),children:(0,y.jsx)(gt,(0,v.Z)((0,v.Z)({},P),{},{breadcrumb:l===!1?void 0:(0,v.Z)((0,v.Z)({},P.breadcrumb),t.breadcrumbProps),breadcrumbRender:f,prefixCls:g,children:(c==null?void 0:c.children)||Bt(o,m,u)}))})},jt=function(e){var r,t,a=e.children,o=e.loading,d=o===void 0?!1:o,c=e.className,u=e.style,m=e.footer,h=e.affixProps,g=e.ghost,l=e.fixedHeader,C=e.breadcrumbRender,f=(0,se.Z)(e,Ot),b=(0,i.useContext)(de.Z),P=(0,i.useContext)(ie.ZP.ConfigContext),x=P.getPrefixCls,O=e.prefixCls||x("pro"),T="".concat(O,"-page-container"),B=R()(T,c,(r={},(0,S.Z)(r,"".concat(O,"-page-container-ghost"),g),(0,S.Z)(r,"".concat(O,"-page-container-with-footer"),m),r)),p=(0,i.useMemo)(function(){return a?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:"".concat(T,"-children-content"),children:a}),b.hasFooterToolbar&&(0,y.jsx)("div",{style:{height:48,marginTop:24}})]}):null},[a,T,b.hasFooterToolbar]),F=(0,i.useMemo)(function(){var w;return C==!1?!1:C||(f==null||(w=f.header)===null||w===void 0?void 0:w.breadcrumbRender)},[C,f==null||(t=f.header)===null||t===void 0?void 0:t.breadcrumbRender]),j=(0,y.jsx)(wt,(0,v.Z)((0,v.Z)({},f),{},{breadcrumbRender:F,ghost:g,prefixCls:void 0,prefixedClassName:T})),L=(0,i.useMemo)(function(){if(i.isValidElement(d))return d;if(typeof d=="boolean"&&!d)return null;var w=Tt(d);return w.spinning?(0,y.jsx)(Pt.Z,(0,v.Z)({},w)):null},[d]),M=(0,i.useMemo)(function(){var w=L||p;if(e.waterMarkProps||b.waterMarkProps){var V=(0,v.Z)((0,v.Z)({},b.waterMarkProps),e.waterMarkProps);return(0,y.jsx)(Et,(0,v.Z)((0,v.Z)({},V),{},{children:w}))}return w},[e.waterMarkProps,b.waterMarkProps,L,p]);return(0,y.jsxs)("div",{style:u,className:B,children:[l&&j?(0,y.jsx)(Le,(0,v.Z)((0,v.Z)({offsetTop:b.hasHeader&&b.fixedHeader?b.headerHeight:0},h),{},{children:j})):j,M&&(0,y.jsx)(pt.Z,{children:M}),m&&(0,y.jsx)(Ct,{prefixCls:O,children:m})]})},At=jt},56264:function(){},12395:function(){},70883:function(){},81262:function(){},59903:function(){},34952:function(ne,$,s){"use strict";var D=s(22122),I=s(15105),Z=s(67294),S=function(N,W){var H={};for(var E in N)Object.prototype.hasOwnProperty.call(N,E)&&W.indexOf(E)<0&&(H[E]=N[E]);if(N!=null&&typeof Object.getOwnPropertySymbols=="function")for(var R=0,E=Object.getOwnPropertySymbols(N);R<E.length;R++)W.indexOf(E[R])<0&&Object.prototype.propertyIsEnumerable.call(N,E[R])&&(H[E[R]]=N[E[R]]);return H},U={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},G=Z.forwardRef(function(N,W){var H=function(K){var Q=K.keyCode;Q===I.Z.ENTER&&K.preventDefault()},E=function(K){var Q=K.keyCode,q=N.onClick;Q===I.Z.ENTER&&q&&q()},R=N.style,J=N.noStyle,oe=N.disabled,i=S(N,["style","noStyle","disabled"]),A={};return J||(A=(0,D.Z)({},U)),oe&&(A.pointerEvents="none"),A=(0,D.Z)((0,D.Z)({},A),R),Z.createElement("div",(0,D.Z)({role:"button",tabIndex:0,ref:W},i,{onKeyDown:H,onKeyUp:E,style:A}))});$.Z=G},97435:function(ne,$){"use strict";function s(D,I){for(var Z=Object.assign({},D),S=0;S<I.length;S+=1){var U=I[S];delete Z[U]}return Z}$.Z=s}}]);
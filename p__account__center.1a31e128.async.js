(self.webpackChunkdevpn_web=self.webpackChunkdevpn_web||[]).push([[823],{32099:function(T){T.exports={projectList:"projectList___2ogz6",cardTitle:"cardTitle___2SEe8",projectGrid:"projectGrid___3bmuQ",loading:"loading___3nNLv"}},47527:function(T){T.exports={activitiesList:"activitiesList___Uol9k",username:"username___2tcX4",event:"event___1EgMO",pageHeaderContent:"pageHeaderContent___2NF_a",avatar:"avatar___IWOfu",content:"content___nTuLw",contentTitle:"contentTitle___1yb7h",extraContent:"extraContent___T8eTd",statItem:"statItem___3DLq8",members:"members___3WQGk",member:"member___3b3RF",projectList:"projectList___28Hof",cardTitle:"cardTitle___2IHDl",projectGrid:"projectGrid___25waM",projectItemContent:"projectItemContent___2z48M",datetime:"datetime___3R4va",activeCard:"activeCard___231Mx"}},71824:function(T){T.exports={card:"card___3aJIz"}},96655:function(T,G,t){"use strict";t.r(G),t.d(G,{default:function(){return Wu}});var Cu=t(13254),Q=t(14277),vu=t(13062),q=t(71230),fu=t(58024),Z=t(91894),mu=t(89032),V=t(15746),xu=t(17462),U=t(76772),ju=t(49111),B=t(19650),Bu=t(95300),c=t(7277),Zu=t(57663),d=t(71577),yu=t(94233),J=t(51890),o=t(18446),E=t(90860),f=t(64097),uu=t(89366),K=t(70844),F=t(62305),S=t(19611),tu=t(47527),y=t.n(tu),n=t(11849),nu=t(15912),g=t(42122),X=t(59879),u=t(85893),Y=function(){var h=(0,F.tT)("@@initialState"),r=h.initialState,i=h.setInitialState,s=r||{},e=s.currentUser,A=(0,F.QT)(g.dw),j=A.data,v=A.loading,L=A.run;if(!v&&j&&e){var m=j[0];(m&&!e.combo||!m&&e.combo)&&setTimeout(function(){(0,g.gS)().then(function(l){i(function(D){return(0,n.Z)((0,n.Z)({},D),{},{currentUser:l})})})},9)}return(0,u.jsx)(Z.Z,{title:"\u6211\u7684\u5957\u9910",style:{marginBottom:24},bodyStyle:{padding:0},extra:(0,u.jsxs)(B.Z,{children:[(0,u.jsx)(d.Z,{size:"small",type:"primary",ghost:!0,onClick:function(){F.m8.push("/combo/list")},children:"\u5957\u9910\u5217\u8868"}),(0,u.jsx)(d.Z,{size:"small",loading:v,onClick:L,children:(0,u.jsx)(X.Z,{})})]}),children:!j&&v?(0,u.jsx)(E.Z,{}):j&&j[0]?(0,nu.Z)(j[0],function(){L(),(0,g.gS)().then(function(l){i(function(D){return(0,n.Z)((0,n.Z)({},D),{},{currentUser:l})})})},!1):null})},a=Y,O=t(71194),p=t(48889),b=t(402),z=t(39602),Qu=t(20228),au=t(11382),Vu=t(54421),su=t(38272),Ju=t(22385),lu=t(45777),Xu=t(34792),_=t(48086),R=t(94657),Yu=t(7359),ou=t(27279),M=t(67294),gu=t(32099),$=t.n(gu),H=t(34416),Au=ou.Z.Panel,pu=[{key:"trojan",tab:"Clash"},{key:"ocnt",tab:"AnyConnect"},{key:"pptp",tab:"PPTP"},{key:"l2tp",tab:"L2TP"}],Pu=function(){var h=(0,F.tT)("@@initialState"),r=h.initialState,i=h.setInitialState,s=r||{},e=s.currentUser,A=(0,M.useState)("trojan"),j=(0,R.Z)(A,2),v=j[0],L=j[1],m=(0,M.useState)(!1),l=(0,R.Z)(m,2),D=l[0],w=l[1],Ku=(0,M.useState)(!1),du=(0,R.Z)(Ku,2),bu=du[0],Fu=du[1],$u=(0,M.useState)(null),Eu=(0,R.Z)($u,2),eu=Eu[0],Hu=Eu[1],Nu=(0,M.useState)({}),hu=(0,R.Z)(Nu,2),P=hu[0],Du=hu[1],ru=function(x){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;switch(x){case"trojan":(!eu||I)&&(0,g.wQ)().then(function(N){Hu(N)});break;default:(!P[x]||I)&&(0,g.Rf)(x).then(function(N){P[x]=N,Du((0,n.Z)({},P))}).catch(function(){P[x]=[],Du((0,n.Z)({},P))})}},Gu=function(x){var I=x.replace(/[^\w]+/,"").replace(/^(\w{4,24}).*$/,"$1");if(I.length<4){_.ZP.error("\u8FDE\u63A5\u5BC6\u7801\u53EA\u80FD\u662F\u5B57\u6BCD\u548C\u6570\u5B57\uFF0C\u957F\u5EA6\u662F4\u523024\u4F4D");return}!e||e.combo_pwd==I||(Fu(!0),(0,g.v7)({new_pwd:I}).then(function(){_.ZP.success("\u7EBF\u8DEF\u5BC6\u7801\u66F4\u65B0\u6210\u529F\uFF0C\u8BF7\u4F7F\u7528\u65B0\u5BC6\u7801\u8FDE\u63A5\u7EBF\u8DEF"),e.combo_pwd=I,i(function(N){return(0,n.Z)((0,n.Z)({},N),{},{currentUser:e})}),ru(v,!0)}).catch(function(){_.ZP.error("\u7EBF\u8DEF\u5BC6\u7801\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}).finally(function(){Fu(!1)}))};return ru(v),(0,u.jsxs)(Z.Z,{className:$().projectList,title:"\u670D\u52A1\u7EBF\u8DEF\u5217\u8868",extra:(0,u.jsxs)(B.Z,{children:[(0,u.jsx)(d.Z,{size:"small",type:"primary",ghost:!0,onClick:function(){w(!0)},children:"\u8FDE\u63A5\u5BC6\u7801"}),(0,u.jsx)(d.Z,{size:"small",type:"primary",ghost:!0,onClick:function(){F.m8.push("/help")},children:"\u4F7F\u7528\u6559\u7A0B"})]}),bodyStyle:{padding:0},tabList:pu,activeTabKey:v,onTabChange:function(x){L(x),ru(x)},children:[v=="trojan"?eu?(0,u.jsx)(ou.Z,{accordion:!0,defaultActiveKey:["1"],children:(0,u.jsxs)(Au,{header:(0,u.jsx)("b",{children:"\u8BA2\u9605\u5730\u5740"}),children:[(0,u.jsx)(su.ZP,{dataSource:eu.main,itemLayout:"horizontal",renderItem:function(x){return(0,u.jsx)(su.ZP.Item,{actions:[(0,u.jsx)(lu.Z,{title:"\u590D\u5236\u5730\u5740\u5230\u526A\u8D34\u677F",children:(0,u.jsx)(d.Z,{type:"link",onClick:function(){navigator.clipboard.writeText(x),_.ZP.success("\u590D\u5236\u5730\u5740\u6210\u529F")},children:"\u590D\u5236\u5730\u5740"})},"copy")],children:(0,u.jsx)(lu.Z,{title:"\u4E0B\u8F7D\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6",children:(0,u.jsx)("a",{style:{wordBreak:"break-all"},href:(0,f.pv)(x,H.Z.real_name+"-clash-config.yaml"),download:H.Z.real_name+"-clash-config.yaml",children:x})})})}}),(0,u.jsxs)("p",{style:{marginTop:10},children:["\u5982\u679C\u90E8\u5206\u670D\u52A1\u8282\u70B9\u4E0D\u53EF\u7528\uFF0C\u8BF7\u5728 Clash \u8F6F\u4EF6\u4E2D\u66F4\u65B0\u8BA2\u9605\u94FE\u63A5\uFF0C\u7279\u522B\u662F\u8D2D\u4E70\u65B0\u5957\u9910\u4E4B\u540E\u6216\u8005\u654F\u611F\u65F6\u671F\u3002",(0,u.jsx)("br",{}),"\u5982\u679C\u4E0A\u9762\u7684\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u51FA\u73B0\u9519\u8BEF\uFF0C\u8BF7\u5C06URL\u4E2D\u7684 clashV3 \u4FEE\u6539\u4E3A clashV2 \u6216 clashV1\u3002"]})]},"1")}):(0,u.jsx)(au.Z,{className:$().loading}):P[v]?P[v].length>0?P[v].map(function(C){return(0,u.jsx)(Z.Z.Grid,{className:$().projectGrid,children:(0,u.jsx)(Z.Z,{bodyStyle:{padding:0},bordered:!1,children:(0,u.jsx)(Z.Z.Meta,{title:(0,u.jsxs)("div",{className:$().cardTitle,children:[(0,u.jsx)(J.C,{size:"small",src:"/flag/".concat(C.area,".svg")}),(0,u.jsx)("b",{children:"".concat(f.F9[C.area]," ").concat(C.domain.split(".")[0].toUpperCase()).concat(C.rate>1?" (".concat(C.rate,"\u500D\u7387)"):"")})]}),description:(0,u.jsx)(z.Z.Text,{copyable:!0,children:C.domain+(C.port?":"+C.port:"")})})})},C.domain)}):(0,u.jsx)(Q.Z,{description:"\u6CA1\u6709\u53EF\u7528\u7684\u7EBF\u8DEF",style:{marginTop:20,marginBottom:20}}):(0,u.jsx)(au.Z,{className:$().loading}),(0,u.jsxs)(p.Z,{title:"\u67E5\u770B\u6216\u8005\u4FEE\u6539\u8FDE\u63A5\u5BC6\u7801",visible:D,footer:null,onCancel:function(){return w(!1)},children:[bu?(0,u.jsx)(au.Z,{}):(0,u.jsx)(z.Z.Title,{editable:{tooltip:"\u70B9\u51FB\u4FEE\u6539\u8FDE\u63A5\u5BC6\u7801",onChange:Gu},level:2,children:e==null?void 0:e.combo_pwd}),(0,u.jsxs)("p",{children:["\u7528\u6237\u540D\uFF1A",(0,u.jsx)("b",{children:e==null?void 0:e.name}),"\uFF0C\u8FDE\u63A5\u5BC6\u7801\uFF1A",(0,u.jsx)("b",{children:e==null?void 0:e.combo_pwd})]}),(0,u.jsxs)("p",{children:["\u6CE8\u610F\uFF1A\u4E0D\u540C\u7684\u8FDE\u63A5\u534F\u8BAE\u914D\u7F6E\u65B9\u5F0F\u4E0D\u4E00\u6837\uFF0C\u8BE6\u7EC6\u8FDE\u63A5\u65B9\u6CD5\u8BF7\u53C2\u8003",(0,u.jsx)(S.rU,{to:"/help",children:"\u4F7F\u7528\u6559\u7A0B"}),"\uFF1B\u4FEE\u6539\u8FDE\u63A5\u5BC6\u7801\u540E\u6240\u6709\u8FDE\u63A5\u534F\u8BAE\u90FD\u8981\u4F7F\u7528\u65B0\u7684\u8FDE\u63A5\u5BC6\u7801\u91CD\u65B0\u914D\u7F6E\u3002"]})]})]})},Iu=Pu,_u=t(88983),k=t(47933),iu=t(39428),Tu=t(3182),Ou=t(96030),cu={up:"\u4E0A\u4F20\u6D41\u91CF",down:"\u4E0B\u8F7D\u6D41\u91CF"},Mu=function(h){if(!h)return[];for(var r=[],i=0,s=h.length;i<s;i++){var e=h[i];r.push({name:"down",time:e[0],traffic:e[1]}),r.push({name:"up",time:e[0],traffic:e[2]})}return r},Lu=function(){var h=(0,M.useState)("day"),r=(0,R.Z)(h,2),i=r[0],s=r[1],e=(0,F.QT)((0,Tu.Z)((0,iu.Z)().mark(function m(){return(0,iu.Z)().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.abrupt("return",(0,g.ul)(i));case 1:case"end":return D.stop()}},m)})),{manual:!0}),A=e.data,j=e.loading,v=e.run;(0,M.useEffect)(function(){v()},[i,v]);var L=function(l){var D=/0000$/.test(l);return i=="month"?D?"mm\u6708dd\u65E5":"mm\u6708dd\u65E5HH\u65F6":D?"dd\u65E5HH\u65F6":"dd\u65E5HH\u65F6MM\u5206"};return(0,u.jsx)(Z.Z,{title:"\u6D41\u91CF\u6D88\u8017\u56FE\u8868",extra:(0,u.jsxs)(B.Z,{children:[(0,u.jsxs)(k.ZP.Group,{value:i,onChange:function(l){s(l.target.value)},children:[(0,u.jsx)(k.ZP.Button,{value:"day",children:"\u65E5"}),(0,u.jsx)(k.ZP.Button,{value:"week",children:"\u5468"}),(0,u.jsx)(k.ZP.Button,{value:"month",children:"\u6708"})]}),(0,u.jsx)(d.Z,{loading:j,onClick:v,children:(0,u.jsx)(X.Z,{})})]}),children:(0,u.jsx)(Ou.Z,{loading:j,data:Mu(A),isGroup:!0,xField:"time",yField:"traffic",seriesField:"name",dodgePadding:2,columnStyle:{radius:[5,5,0,0]},maxColumnWidth:20,color:H.Z.colors,legend:{itemName:{formatter:function(l){return cu[l]}},itemValue:{formatter:function(l){return(0,f.$j)(A.map(function(D){return D[l=="down"?1:2]}).reduce(function(D,w){return D+w}))}}},xAxis:{label:{formatter:function(l){return(0,f.uq)(Number(l),"-",L(l.toString()))}}},yAxis:{label:{formatter:function(l){return(0,f.$j)(l)}}},tooltip:{title:function(l){return(0,f.uq)(Number(l),"-",L(l.toString()))},formatter:function(l){return{name:cu[l.name],value:(0,f.$j)(l.traffic)}}}})})},Uu=Lu,Su=function(h){var r=h.currentUser,i=(0,F.QT)(function(){return(0,g.GF)("urlmail|latesturl")}),s=i.data,e=r&&Object.keys(r).length;return e?(0,u.jsxs)("div",{className:y().pageHeaderContent,children:[(0,u.jsx)("div",{className:y().avatar,children:(0,u.jsx)(J.C,{size:64,icon:(0,u.jsx)(uu.Z,{}),src:(0,f.Fq)(r)})}),(0,u.jsxs)("div",{className:y().content,children:[(0,u.jsx)("div",{className:y().contentTitle,children:(0,u.jsx)("strong",{children:r.nickname||r.name})}),(0,u.jsxs)("div",{children:[(0,u.jsx)(d.Z,{size:"small",type:"primary",ghost:!0,onClick:function(){F.m8.push("/account/settings")},children:"\u4E2A\u4EBA\u8BBE\u7F6E"}),(0,u.jsx)(d.Z,{size:"small",type:"primary",ghost:!0,style:{marginLeft:12},onClick:function(){F.m8.push("/account/orderList")},children:"\u6211\u7684\u8BA2\u5355"})]}),(0,u.jsxs)("p",{style:{marginTop:16},children:["\u8BF7\u8BB0\u4F4F\u6211\u4EEC\u7684\u6C38\u4E45\u57DF\u540D ",(0,u.jsx)("b",{children:H.Z.fixed_domain})," \u6700\u65B0\u7F51\u5740"," ",s&&s.latesturl?(0,u.jsx)("a",{href:s.latesturl.replace(/[\/#]+$/,"/"),children:s.latesturl.replace(/^[^\/]*\/+/,"").replace(/[\/#]+$/,"")}):H.Z.fixed_domain]}),s&&s.urlmail?(0,u.jsxs)("p",{children:["\u53D1\u9001\u4EFB\u4F55\u5185\u5BB9\u5230 ",(0,u.jsx)("a",{href:"mailto:".concat(s.urlmail),children:s.urlmail})," ","\u5C06\u4F1A\u83B7\u53D6\u5230\u6211\u4EEC\u7684\u7F51\u5740\u5217\u8868"]}):null]})]}):(0,u.jsx)(E.Z,{avatar:!0,paragraph:{rows:1},active:!0})},zu=function(h){var r=h.currentUser;return(0,u.jsxs)("div",{className:y().extraContent,children:[(0,u.jsxs)("div",{className:y().statItem,children:[(0,u.jsx)(c.Z,{title:"\u8D26\u53F7\u4F59\u989D",value:(0,f.zF)(r==null?void 0:r.coin)}),(0,u.jsxs)(B.Z,{direction:"vertical",size:5,style:{display:"flex"},children:[(0,u.jsx)(d.Z,{size:"small",type:"primary",ghost:!0,onClick:function(){F.m8.push("/account/coinDetail")},children:"\u4F59\u989D\u660E\u7EC6"}),(0,u.jsx)(d.Z,{size:"small",type:"primary",onClick:function(){F.m8.push("/account/coinShop")},children:"\u6211\u8981\u5145\u503C"})]})]}),(0,u.jsxs)("div",{className:y().statItem,children:[(0,u.jsx)(c.Z,{title:"\u53EF\u63D0\u8FD4\u73B0",value:(0,f.zF)(r==null?void 0:r.excash)}),(0,u.jsxs)(B.Z,{direction:"vertical",size:5,style:{display:"flex"},children:[(0,u.jsx)(d.Z,{size:"small",type:"primary",ghost:!0,onClick:function(){F.m8.push("/account/excashDetail")},children:"\u8FD4\u73B0\u660E\u7EC6"}),(0,u.jsx)(d.Z,{size:"small",type:"primary",onClick:function(){F.m8.push("/account/excashOut")},children:"\u6211\u8981\u63D0\u73B0"})]})]}),(0,u.jsxs)("div",{className:y().statItem,children:[(0,u.jsx)(c.Z,{title:"\u9080\u8BF7\u6D88\u8D39\u603B\u989D",value:(0,f.zF)(r==null?void 0:r.exsum)}),(0,u.jsxs)(B.Z,{direction:"vertical",size:5,style:{display:"flex"},children:[(0,u.jsx)(d.Z,{size:"small",type:"primary",ghost:!0,onClick:function(){F.m8.push("/account/inviteList")},children:"\u6D88\u8D39\u660E\u7EC6"}),(0,u.jsx)(d.Z,{size:"small",type:"primary",onClick:function(){F.m8.push("/excash")},children:"\u6211\u8981\u9080\u8BF7"})]})]})]})},Ru=function(){var h=(0,F.tT)("@@initialState"),r=h.initialState,i=r||{},s=i.currentUser;return(0,u.jsxs)(K.ZP,{loading:!s,breadcrumb:void 0,content:(0,u.jsx)(Su,{currentUser:s}),extraContent:(0,u.jsx)(zu,{currentUser:s}),children:[s!=null&&s.waitpay?(0,u.jsx)(U.Z,{message:"\u60A8\u8FD8\u6709\u672A\u652F\u4ED8\u7684\u8BA2\u5355\uFF0C\u8BF7\u53CA\u65F6\u652F\u4ED8\u3002",showIcon:!0,type:"warning",style:{marginBottom:16},action:(0,u.jsx)(d.Z,{size:"small",onClick:function(){return F.m8.push("/account/orderList")},children:"\u67E5\u770B"})}):null,s!=null&&s.combo?(0,u.jsxs)(B.Z,{direction:"vertical",size:"middle",style:{display:"flex"},children:[(0,u.jsx)(Uu,{}),(0,u.jsxs)(q.Z,{gutter:16,children:[(0,u.jsxs)(V.Z,{lg:8,md:24,xs:24,children:[s.combo_label&&s.combo_label.substring(0,3)=="try"?(0,u.jsx)(U.Z,{message:(0,u.jsxs)(u.Fragment,{children:["\u514D\u8D39\u8BD5\u7528\u5957\u9910\u7684\u670D\u52A1\u8282\u70B9\u8F83\u5C11\uFF0C\u66F4\u591A\u7684\u670D\u52A1\u8282\u70B9\uFF0C\u8BF7 ",(0,u.jsx)(S.rU,{to:"/combo/shop",children:"\u8D2D\u4E70\u5957\u9910"})," \u5E76\u542F\u7528\u65B0\u5957\u9910\u3002"]}),type:"warning",showIcon:!0,style:{marginBottom:16}}):null,(0,u.jsx)(a,{})]}),(0,u.jsxs)(V.Z,{lg:16,md:24,children:[(0,u.jsx)(Iu,{}),(0,u.jsxs)(Z.Z,{style:{marginTop:16},children:[(0,u.jsx)("p",{children:"\u5EFA\u8BAE\u4F18\u5148\u4F7F\u7528 Clash \u5BA2\u6237\u7AEF\u914D\u7F6E\u8BA2\u9605\u5730\u5740\u6765\u8FDE\u63A5\u3002\u4E0D\u8FC7 iPhone \u548C iPad \u8BBE\u5907\u7684\u7528\u6237\u5B89\u88C5 Clash APP \u4E0D\u65B9\u4FBF\uFF0C\u9700\u8981\u6709\u7F8E\u56FD\u7684 APPLE ID \u4E0B\u8F7D Surge \u6765\u914D\u7F6E\u4F7F\u7528\u3002"}),(0,u.jsx)("p",{children:"\u65F6\u4EE3\u5728\u53D8\uFF0C\u540C\u65F6\u56FD\u5BB6\u9632\u706B\u5899 GFW \u4E5F\u5728\u4E0D\u65AD\u5730\u8FDB\u6B65\u3002\u56E0\u4E0D\u53EF\u6297\u529B\u56E0\u7D20\uFF0C\u670D\u52A1\u7EBF\u8DEF\u4F1A\u88AB\u548C\u8C10\uFF0C\u670D\u52A1\u5668\u5217\u8868\u4E5F\u4F1A\u56E0\u88AB\u548C\u8C10\u800C\u53D8\u5316\uFF0C\u66F4\u6362\u670D\u52A1\u5668\u8282\u70B9\u4E0D\u4F1A\u7279\u522B\u901A\u77E5\u3002\u5982\u679C\u60A8\u8FDE\u63A5\u4E0D\u4E0A\uFF0C\u8BF7\u83B7\u53D6\u6700\u65B0\u7684\u670D\u52A1\u7EBF\u8DEF\u5217\u8868\u5E76\u66F4\u6362\u670D\u52A1\u8282\u70B9\u6D4B\u8BD5\u3002\u5728\u653F\u6CBB\u654F\u611F\u65F6\u671F\u53EF\u80FD\u4F1A\u8FDE\u63A5\u4E0D\u7A33\u5B9A\uFF0C\u5EFA\u8BAE\u66F4\u6362\u670D\u52A1\u8282\u70B9\u6216\u534F\u8BAE\u91CD\u8FDE\uFF0C\u4E0D\u4FBF\u4E4B\u5904\u656C\u8BF7\u539F\u8C05\uFF01"}),(0,u.jsx)("p",{children:"* \u6D41\u91CF\u6D88\u8017\u548C\u8BBE\u5907\u5728\u7EBF\u6570\u636E\u4F1A\u5B58\u572810\u5206\u949F\u5DE6\u53F3\u7684\u5EF6\u65F6\u3002"})]})]})]})]}):(0,u.jsx)(Z.Z,{children:(0,u.jsx)(Q.Z,{description:"\u8BF7\u5148\u8D2D\u4E70\u5957\u9910\uFF0C\u624D\u80FD\u67E5\u770B\u5957\u9910\u4FE1\u606F",children:(0,u.jsx)(S.rU,{to:"/combo/shop",children:"\u8D2D\u4E70\u5957\u9910"})})})]})},Wu=Ru},15912:function(T,G,t){"use strict";var Cu=t(54029),Q=t(79166),vu=t(58024),q=t(91894),fu=t(17462),Z=t(76772),mu=t(77576),V=t(12028),xu=t(57663),U=t(71577),ju=t(20136),B=t(19181),Bu=t(98858),c=t(4914),Zu=t(34792),d=t(48086),yu=t(71194),J=t(48889),o=t(64097),E=t(87336),f=t(42122),uu=t(68855),K=t(68628),F=t(62305),S=t(92900),tu=t(71824),y=t.n(tu),n=t(85893),nu=J.Z.confirm,g=function(a,O){(0,f.q1)(a.id).then(function(p){nu({title:"\u60A8\u771F\u7684\u8981\u53D6\u6D88\u8FD9\u4E2A\u5957\u9910\u5417\uFF1F",icon:(0,n.jsx)(uu.Z,{}),content:p>0?"\u5957\u9910\u53D6\u6D88\u540E\u5C06\u4E0D\u53EF\u6062\u590D\uFF0C\u5927\u7EA6\u8FD8\u6709 ".concat(p," \u8FD4\u56DE\u60A8\u7684\u8D26\u53F7\u4F59\u989D\u91CC"):"\u5957\u9910\u53D6\u6D88\u540E\u5C06\u4E0D\u53EF\u6062\u590D\uFF0C\u5DF2\u7ECF\u6CA1\u6709\u4F59\u989D\u8FD4\u56DE\u5230\u60A8\u7684\u8D26\u53F7\u4E2D",onOk:function(){(0,f.Re)(a.id).then(function(){d.ZP.success("\u64CD\u4F5C\u6210\u529F"),o.tO.remove(o.VD.comboList),O()}).catch(function(){d.ZP.error("\u53D6\u6D88\u5957\u9910\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")})}})}).catch(function(){d.ZP.error("\u83B7\u53D6\u5957\u9910\u6570\u636E\u5931\u8D25")})},X=function(a){if(a.qname=="old"){var O=(0,o.p4)(a);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(E.Z,{title:"VPN\u6D41\u91CF",value:"\u65E0\u9650\u5236",layout:"horizontal"}),(0,n.jsx)(E.Z,{title:"VPN\u540C\u65F6\u5728\u7EBF",value:"".concat(a.num,"\u53F0"),layout:"horizontal"}),(0,n.jsx)(E.Z,{title:(0,n.jsxs)(B.Z,{content:(0,n.jsxs)(c.Z,{column:1,style:{maxWidth:"350px"},bordered:!0,children:[(0,n.jsx)(c.Z.Item,{label:"\u5957\u9910\u6D41\u91CF",children:(0,o.$j)(a.traffic)}),(0,n.jsx)(c.Z.Item,{label:"\u7EE7\u627F\u6D41\u91CF",children:(0,o.$j)(a.traffic_from)}),(0,n.jsx)(c.Z.Item,{label:"\u5145\u503C\u6D41\u91CF",children:(0,o.$j)(a.traffic_buy)}),(0,n.jsx)(c.Z.Item,{label:"\u8D60\u9001\u6D41\u91CF",children:(0,o.$j)(a.traffic_gift)}),(0,n.jsx)(c.Z.Item,{label:"\u5DF2\u4F7F\u7528\u6D41\u91CF",children:(0,o.$j)(a.proxy_traffic)})]}),children:["\u53EF\u7528\u4EE3\u7406\u6D41\u91CF",(0,n.jsx)(K.Z,{style:{color:"rgba(0, 0, 0, 0.43)",marginLeft:4}})]}),value:O>0?(0,o.$j)(O):"\u65E0\u53EF\u7528\u6D41\u91CF",layout:"horizontal"}),(0,n.jsx)(E.Z,{title:"\u4EE3\u7406\u540C\u65F6\u5728\u7EBF",value:"\u65E0\u9650\u5236",layout:"horizontal"})]})}else if(a.qname=="traffic"){var p=(0,o.p4)(a);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(E.Z,{title:(0,n.jsxs)(B.Z,{content:(0,n.jsxs)(c.Z,{column:1,style:{maxWidth:"350px"},bordered:!0,children:[(0,n.jsx)(c.Z.Item,{label:"\u5957\u9910\u6D41\u91CF",children:(0,o.$j)(a.traffic)}),(0,n.jsx)(c.Z.Item,{label:"\u7EE7\u627F\u6D41\u91CF",children:(0,o.$j)(a.traffic_from)}),(0,n.jsx)(c.Z.Item,{label:"\u5145\u503C\u6D41\u91CF",children:(0,o.$j)(a.traffic_buy)}),(0,n.jsx)(c.Z.Item,{label:"\u8D60\u9001\u6D41\u91CF",children:(0,o.$j)(a.traffic_gift)}),(0,n.jsx)(c.Z.Item,{label:"\u5DF2\u4F7F\u7528\u6D41\u91CF",children:(0,o.$j)(a.proxy_traffic+a.vpn_traffic)})]}),children:["\u53EF\u7528\u6D41\u91CF",(0,n.jsx)(K.Z,{style:{color:"rgba(0, 0, 0, 0.43)",marginLeft:4}})]}),value:p>0?(0,o.$j)(p):"\u65E0\u53EF\u7528\u6D41\u91CF",layout:"horizontal"}),(0,n.jsx)(E.Z,{title:"\u8FDE\u63A5\u6570\u9650\u5236",value:"\u65E0",layout:"horizontal"}),(0,n.jsx)(E.Z,{title:"\u6D41\u91CF\u7EE7\u627F",value:a.is_inherit?"\u662F":"\u5426",layout:"horizontal"}),(0,n.jsx)(E.Z,{title:"\u6309\u6708\u8BA1\u7B97\u6D41\u91CF",value:a.is_month?"\u662F":"\u5426",layout:"horizontal"})]})}else if(a.qname=="unlimit")return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(E.Z,{title:(0,n.jsxs)(B.Z,{content:(0,n.jsxs)(c.Z,{column:1,style:{maxWidth:"350px"},bordered:!0,children:[(0,n.jsx)(c.Z.Item,{label:"\u5957\u9910\u6D41\u91CF",children:"\u65E0\u9650\u5236"}),(0,n.jsx)(c.Z.Item,{label:"\u7EE7\u627F\u6D41\u91CF",children:(0,o.$j)(a.traffic_from)}),(0,n.jsx)(c.Z.Item,{label:"\u5145\u503C\u6D41\u91CF",children:(0,o.$j)(a.traffic_buy)}),(0,n.jsx)(c.Z.Item,{label:"\u8D60\u9001\u6D41\u91CF",children:(0,o.$j)(a.traffic_gift)}),(0,n.jsx)(c.Z.Item,{label:"\u5DF2\u4F7F\u7528\u6D41\u91CF",children:(0,o.$j)(a.proxy_traffic+a.vpn_traffic)})]}),children:["\u53EF\u7528\u6D41\u91CF",(0,n.jsx)(K.Z,{style:{color:"rgba(0, 0, 0, 0.43)",marginLeft:4}})]}),value:"\u65E0\u9650\u5236",layout:"horizontal"}),(0,n.jsx)(E.Z,{title:"\u8FDE\u63A5\u6570\u9650\u5236",value:"\u65E0",layout:"horizontal"}),(0,n.jsx)(E.Z,{title:"\u6D41\u91CF\u7EE7\u627F",value:a.is_inherit?"\u662F":"\u5426",layout:"horizontal"}),(0,n.jsx)(E.Z,{title:"\u6309\u6708\u8BA1\u7B97\u6D41\u91CF",value:a.is_month?"\u662F":"\u5426",layout:"horizontal"})]});return null},u=function(a,O){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return(0,n.jsx)(Q.Z.Ribbon,{text:a.started?"\u6B63\u5728\u8FD0\u884C":"\u8FD8\u672A\u542F\u7528",color:a.started?"green":"gray",children:(0,n.jsxs)(q.Z,{className:y().card,title:(0,o.rt)(a.hour),type:"inner",actions:p?[(0,n.jsx)(U.Z,{disabled:a.sum<=0,onClick:function(){return F.m8.push("/traffic/shop/"+a.id)},type:"primary",ghost:!0,children:"\u8865\u5145\u6D41\u91CF"},"traffic"),(0,n.jsx)(U.Z,{type:"dashed",danger:!0,onClick:function(){return g(a,O)},children:"\u53D6\u6D88\u5957\u9910"},"cancel")]:[(0,n.jsx)(U.Z,{disabled:a.sum<=0,onClick:function(){return F.m8.push("/traffic/shop/"+a.id)},type:"primary",ghost:!0,children:"\u8865\u5145\u6D41\u91CF"},"traffic")],children:[(0,n.jsx)(E.Z,{title:"\u521B\u5EFA\u65F6\u95F4",value:(0,o.uq)(a.created),layout:"horizontal"}),(0,n.jsx)(E.Z,{title:"\u5F00\u59CB\u65F6\u95F4",value:(0,o.uq)(a.started,"\u8FD8\u672A\u5F00\u59CB"),layout:"horizontal"}),(0,n.jsx)(E.Z,{title:"\u5230\u671F\u65F6\u95F4",value:(0,o.uq)(a.finished),layout:"horizontal"}),X(a),(0,n.jsx)(E.Z,{title:"\u81EA\u52A8\u7EED\u8D39",suffix:(0,n.jsx)(V.Z,{disabled:a.sum<=0,defaultChecked:!!a.renew,checkedChildren:"\u5F00",unCheckedChildren:"\u5173",onChange:function(z){S.A.conn().req("/combo/renew",S.x.POST,{id:a.id,renew:z}).then(function(){a.renew=z,d.ZP.success(z?"\u6210\u529F\u8BBE\u7F6E\u81EA\u52A8\u7EED\u8D39":"\u6210\u529F\u53D6\u6D88\u81EA\u52A8\u7EED\u8D39")}).catch(function(){d.ZP.error("\u8BBE\u7F6E\u4E0D\u6210\u529F\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")})}}),value:" ",layout:"horizontal"}),(0,o.p4)(a)<0?(0,n.jsx)(Z.Z,{style:{marginTop:16},message:"\u5957\u9910\u6D41\u91CF\u5DF2\u7ECF\u8017\u5149\uFF0C\u670D\u52A1\u5C06\u4F1A\u53D7\u5230\u9650\u5236",type:"warning",showIcon:!0}):null]})})};G.Z=u}}]);

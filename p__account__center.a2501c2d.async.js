(self.webpackChunkdevpn_web=self.webpackChunkdevpn_web||[]).push([[823],{32099:function(O){O.exports={projectList:"projectList___2ogz6",cardTitle:"cardTitle___2SEe8",projectGrid:"projectGrid___3bmuQ",loading:"loading___3nNLv"}},47527:function(O){O.exports={activitiesList:"activitiesList___Uol9k",username:"username___2tcX4",event:"event___1EgMO",pageHeaderContent:"pageHeaderContent___2NF_a",avatar:"avatar___IWOfu",content:"content___nTuLw",contentTitle:"contentTitle___1yb7h",extraContent:"extraContent___T8eTd",statItem:"statItem___3DLq8",members:"members___3WQGk",member:"member___3b3RF",projectList:"projectList___28Hof",cardTitle:"cardTitle___2IHDl",projectGrid:"projectGrid___25waM",projectItemContent:"projectItemContent___2z48M",datetime:"datetime___3R4va",activeCard:"activeCard___231Mx"}},71824:function(O){O.exports={card:"card___3aJIz"}},96655:function(O,$,t){"use strict";t.r($),t.d($,{default:function(){return Ru}});var vu=t(13254),H=t(14277),Cu=t(13062),k=t(71230),fu=t(58024),B=t(91894),mu=t(89032),N=t(15746),xu=t(17462),b=t(76772),ju=t(49111),Z=t(19650),Zu=t(95300),i=t(7277),yu=t(57663),c=t(71577),Bu=t(94233),G=t(51890),l=t(18446),d=t(90860),f=t(64097),w=t(89366),S=t(70844),F=t(62305),z=t(73727),q=t(47527),A=t.n(q),n=t(11849),uu=t(15912),g=t(42122),Q=t(59879),u=t(85893),V=function(){var m=(0,F.tT)("@@initialState"),s=m.initialState,E=m.setInitialState,r=s||{},o=r.currentUser,y=(0,F.QT)(g.dw),j=y.data,x=y.loading,L=y.run;if(!x&&j&&o){var C=j[0];(C&&!o.combo||!C&&o.combo)&&setTimeout(function(){(0,g.gS)().then(function(e){E(function(h){return(0,n.Z)((0,n.Z)({},h),{},{currentUser:e})})})},9)}return(0,u.jsx)(B.Z,{title:"\u6211\u7684\u5957\u9910",style:{marginBottom:24},bodyStyle:{padding:0},extra:(0,u.jsxs)(Z.Z,{children:[(0,u.jsx)(c.Z,{size:"small",type:"primary",ghost:!0,onClick:function(){F.m8.push("/combo/list")},children:"\u5957\u9910\u5217\u8868"}),(0,u.jsx)(c.Z,{size:"small",loading:x,onClick:L,children:(0,u.jsx)(Q.Z,{})})]}),children:!j&&x?(0,u.jsx)(d.Z,{}):j&&j[0]?(0,uu.Z)(j[0],function(){L(),(0,g.gS)().then(function(e){E(function(h){return(0,n.Z)((0,n.Z)({},h),{},{currentUser:e})})})}):null})},a=V,M=t(71194),P=t(48889),R=t(402),lu=t(39602),Qu=t(20228),tu=t(11382),Vu=t(54421),su=t(38272),Ju=t(22385),nu=t(45777),Xu=t(34792),J=t(48086),U=t(94657),Yu=t(7359),ru=t(27279),T=t(67294),Au=t(32099),W=t.n(Au),X=t(34416),gu=ru.Z.Panel,Pu=[{key:"trojan",tab:"Clash"},{key:"ocnt",tab:"AnyConnect"},{key:"pptp",tab:"PPTP"},{key:"l2tp",tab:"L2TP"}],au=!1,pu=function(){var m=(0,F.tT)("@@initialState"),s=m.initialState,E=m.setInitialState,r=s||{},o=r.currentUser,y=(0,T.useState)("trojan"),j=(0,U.Z)(y,2),x=j[0],L=j[1],C=(0,T.useState)(!1),e=(0,U.Z)(C,2),h=e[0],_=e[1],Wu=(0,T.useState)(!1),cu=(0,U.Z)(Wu,2),Ku=cu[0],du=cu[1],$u=(0,T.useState)(null),Fu=(0,U.Z)($u,2),eu=Fu[0],Hu=Fu[1],Nu=(0,T.useState)({}),Eu=(0,U.Z)(Nu,2),I=Eu[0],hu=Eu[1],bu=function(v){var p=v.replace(/[^\w]+/,"").replace(/^(\w{4,24}).*$/,"$1");if(p.length<4){J.ZP.error("\u8FDE\u63A5\u5BC6\u7801\u53EA\u80FD\u662F\u5B57\u6BCD\u548C\u6570\u5B57\uFF0C\u957F\u5EA6\u662F4\u523024\u4F4D");return}!o||o.combo_pwd==p||(du(!0),(0,g.v7)({new_pwd:p}).then(function(){J.ZP.success("\u7EBF\u8DEF\u5BC6\u7801\u66F4\u65B0\u6210\u529F\uFF0C\u8BF7\u4F7F\u7528\u65B0\u5BC6\u7801\u8FDE\u63A5\u7EBF\u8DEF"),o.combo_pwd=p,E(function(Gu){return(0,n.Z)((0,n.Z)({},Gu),{},{currentUser:o})})}).catch(function(){J.ZP.error("\u7EBF\u8DEF\u5BC6\u7801\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}).finally(function(){du(!1)}))},Du=function(v){switch(v){case"trojan":!au&&!eu&&(au=!0,(0,g.wQ)().then(function(p){Hu(p)}).finally(function(){au=!1}));break;default:I[v]||(0,g.Rf)(v).then(function(p){I[v]=p,hu((0,n.Z)({},I))}).catch(function(){I[v]=[],hu((0,n.Z)({},I))})}};return Du("trojan"),(0,u.jsxs)(B.Z,{className:W().projectList,title:"\u670D\u52A1\u7EBF\u8DEF\u5217\u8868",extra:(0,u.jsxs)(Z.Z,{children:[(0,u.jsx)(c.Z,{size:"small",type:"primary",ghost:!0,onClick:function(){_(!0)},children:"\u8FDE\u63A5\u5BC6\u7801"}),(0,u.jsx)(c.Z,{size:"small",type:"primary",ghost:!0,onClick:function(){F.m8.push("/help")},children:"\u4F7F\u7528\u6559\u7A0B"})]}),bodyStyle:{padding:0},tabList:Pu,activeTabKey:x,onTabChange:function(v){L(v),Du(v)},children:[x=="trojan"?eu?(0,u.jsx)(ru.Z,{accordion:!0,defaultActiveKey:["1"],children:(0,u.jsx)(gu,{header:(0,u.jsx)("b",{children:"\u8BA2\u9605\u5730\u5740"}),children:(0,u.jsx)(su.ZP,{dataSource:eu.main,itemLayout:"horizontal",renderItem:function(v){return(0,u.jsx)(su.ZP.Item,{actions:[(0,u.jsx)(nu.Z,{title:"\u9700\u8981 Clash \u5BA2\u6237\u7AEF\u5B89\u88C5\u597D\u5E76\u8FD0\u884C",children:(0,u.jsx)(c.Z,{type:"link",onClick:function(){window.open("clash://install-config?url="+encodeURIComponent(v))},children:"Clash \u8BA2\u9605"})},"add"),(0,u.jsx)(nu.Z,{title:"\u590D\u5236\u5730\u5740\u5230\u526A\u8D34\u677F",children:(0,u.jsx)(c.Z,{type:"link",onClick:function(){navigator.clipboard.writeText(v),J.ZP.success("\u590D\u5236\u5730\u5740\u6210\u529F")},children:"\u590D\u5236\u5730\u5740"})},"copy")],children:(0,u.jsx)(nu.Z,{title:"\u4E0B\u8F7D\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6",children:(0,u.jsx)("a",{style:{wordBreak:"break-all"},href:v,download:X.Z.real_name+"-clash-config.yaml",children:v})})})}})},"1")}):(0,u.jsx)(tu.Z,{className:W().loading}):I[x]?I[x].length>0?I[x].map(function(D){return(0,u.jsx)(B.Z.Grid,{className:W().projectGrid,children:(0,u.jsx)(B.Z,{bodyStyle:{padding:0},bordered:!1,children:(0,u.jsx)(B.Z.Meta,{title:(0,u.jsxs)("div",{className:W().cardTitle,children:[(0,u.jsx)(G.C,{size:"small",src:"/flag/".concat(D.area,".svg")}),(0,u.jsx)("b",{children:"".concat(f.F9[D.area]," ").concat(D.domain.split(".")[0].toUpperCase()).concat(D.rate>1?" (".concat(D.rate,"\u500D\u7387)"):"")})]}),description:(0,u.jsx)(lu.Z.Text,{copyable:!0,children:D.domain+(D.port?":"+D.port:"")})})})},D.domain)}):(0,u.jsx)(H.Z,{description:"\u6CA1\u6709\u53EF\u7528\u7684\u7EBF\u8DEF",style:{marginTop:20,marginBottom:20}}):(0,u.jsx)(tu.Z,{className:W().loading}),(0,u.jsxs)(P.Z,{title:"\u67E5\u770B\u6216\u8005\u4FEE\u6539\u8FDE\u63A5\u5BC6\u7801",visible:h,footer:null,onCancel:function(){return _(!1)},children:[Ku?(0,u.jsx)(tu.Z,{}):(0,u.jsx)(lu.Z.Title,{editable:{tooltip:"\u70B9\u51FB\u4FEE\u6539\u8FDE\u63A5\u5BC6\u7801",onChange:bu},level:2,children:o==null?void 0:o.combo_pwd}),(0,u.jsxs)("p",{children:["\u7528\u6237\u540D\uFF1A",(0,u.jsx)("b",{children:o==null?void 0:o.name}),"\uFF0C\u8FDE\u63A5\u5BC6\u7801\uFF1A",(0,u.jsx)("b",{children:o==null?void 0:o.combo_pwd})]}),(0,u.jsxs)("p",{children:["\u6CE8\u610F\uFF1A\u4E0D\u540C\u7684\u8FDE\u63A5\u534F\u8BAE\u914D\u7F6E\u65B9\u5F0F\u4E0D\u4E00\u6837\uFF0C\u8BE6\u7EC6\u8FDE\u63A5\u65B9\u6CD5\u8BF7\u53C2\u8003",(0,u.jsx)(z.rU,{to:"/help",children:"\u4F7F\u7528\u6559\u7A0B"}),"\uFF1B\u4FEE\u6539\u8FDE\u63A5\u5BC6\u7801\u540E\u6240\u6709\u8FDE\u63A5\u534F\u8BAE\u90FD\u8981\u4F7F\u7528\u65B0\u7684\u8FDE\u63A5\u5BC6\u7801\u91CD\u65B0\u914D\u7F6E\u3002"]})]})]})},Iu=pu,_u=t(88983),Y=t(47933),ou=t(39428),Ou=t(3182),Mu=t(96030),iu={up:"\u4E0A\u4F20\u6D41\u91CF",down:"\u4E0B\u8F7D\u6D41\u91CF"},Tu=function(){var m=(0,T.useState)("day"),s=(0,U.Z)(m,2),E=s[0],r=s[1],o=(0,F.QT)((0,Ou.Z)((0,ou.Z)().mark(function C(){return(0,ou.Z)().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,g.ul)(E));case 1:case"end":return h.stop()}},C)})),{manual:!0}),y=o.data,j=o.loading,x=o.run;(0,T.useEffect)(function(){x()},[E,x]);var L=function(e){var h=/0000$/.test(e);return E=="month"?h?"mm\u6708dd\u65E5":"mm\u6708dd\u65E5HH\u65F6":h?"dd\u65E5HH\u65F6":"dd\u65E5HH\u65F6MM\u5206"};return(0,u.jsx)(B.Z,{title:"\u6D41\u91CF\u6D88\u8017\u56FE\u8868",extra:(0,u.jsxs)(Z.Z,{children:[(0,u.jsxs)(Y.ZP.Group,{value:E,onChange:function(e){r(e.target.value)},children:[(0,u.jsx)(Y.ZP.Button,{value:"day",children:"\u65E5"}),(0,u.jsx)(Y.ZP.Button,{value:"week",children:"\u5468"}),(0,u.jsx)(Y.ZP.Button,{value:"month",children:"\u6708"})]}),(0,u.jsx)(c.Z,{loading:j,onClick:x,children:(0,u.jsx)(Q.Z,{})})]}),children:(0,u.jsx)(Mu.Z,{loading:j,data:y||[],isGroup:!0,xField:"time",yField:"traffic",seriesField:"name",dodgePadding:2,columnStyle:{radius:[5,5,0,0]},maxColumnWidth:20,color:X.Z.colors,legend:{itemName:{formatter:function(e){return iu[e]}},itemValue:{formatter:function(e){return(0,f.$j)(y?y.filter(function(h){return h.name==e}).map(function(h){return h.traffic}).reduce(function(h,_){return h+_}):0)}}},xAxis:{label:{formatter:function(e){return(0,f.uq)(Number(e),"-",L(e))}}},yAxis:{label:{formatter:function(e){return(0,f.$j)(e)}}},tooltip:{title:function(e){return(0,f.uq)(Number(e),"-",L(e))},formatter:function(e){return{name:iu[e.name],value:(0,f.$j)(e.traffic)}}}})})},Lu=Tu,Uu=function(m){var s=m.currentUser,E=(0,F.QT)(function(){return(0,g.GF)("urlmail|latesturl")}),r=E.data,o=s&&Object.keys(s).length;return o?(0,u.jsxs)("div",{className:A().pageHeaderContent,children:[(0,u.jsx)("div",{className:A().avatar,children:(0,u.jsx)(G.C,{size:64,icon:(0,u.jsx)(w.Z,{}),src:(0,f.Fq)(s)})}),(0,u.jsxs)("div",{className:A().content,children:[(0,u.jsx)("div",{className:A().contentTitle,children:(0,u.jsx)("strong",{children:s.nickname||s.name})}),(0,u.jsxs)("div",{children:[(0,u.jsx)(c.Z,{size:"small",type:"primary",ghost:!0,onClick:function(){F.m8.push("/account/settings")},children:"\u4E2A\u4EBA\u8BBE\u7F6E"}),(0,u.jsx)(c.Z,{size:"small",type:"primary",ghost:!0,style:{marginLeft:12},onClick:function(){F.m8.push("/account/orderList")},children:"\u6211\u7684\u8BA2\u5355"})]}),(0,u.jsxs)("p",{style:{marginTop:16},children:["\u8BF7\u8BB0\u4F4F\u6211\u4EEC\u7684\u6C38\u4E45\u57DF\u540D ",(0,u.jsx)("b",{children:X.Z.fixed_domain})," \u6700\u65B0\u7F51\u5740"," ",r&&r.latesturl?(0,u.jsx)("a",{href:r.latesturl.replace(/[\/#]+$/,"/"),children:r.latesturl.replace(/^[^\/]*\/+/,"").replace(/[\/#]+$/,"")}):X.Z.fixed_domain]}),r&&r.urlmail?(0,u.jsxs)("p",{children:["\u53D1\u9001\u4EFB\u4F55\u5185\u5BB9\u5230 ",(0,u.jsx)("a",{href:"mailto:".concat(r.urlmail),children:r.urlmail})," ","\u5C06\u4F1A\u83B7\u53D6\u5230\u6211\u4EEC\u7684\u7F51\u5740\u5217\u8868"]}):null]})]}):(0,u.jsx)(d.Z,{avatar:!0,paragraph:{rows:1},active:!0})},Su=function(m){var s=m.currentUser;return(0,u.jsxs)("div",{className:A().extraContent,children:[(0,u.jsxs)("div",{className:A().statItem,children:[(0,u.jsx)(i.Z,{title:"\u8D26\u53F7\u4F59\u989D",value:(0,f.zF)(s==null?void 0:s.coin)}),(0,u.jsxs)(Z.Z,{direction:"vertical",size:5,style:{display:"flex"},children:[(0,u.jsx)(c.Z,{size:"small",type:"primary",ghost:!0,onClick:function(){F.m8.push("/account/coinDetail")},children:"\u4F59\u989D\u660E\u7EC6"}),(0,u.jsx)(c.Z,{size:"small",type:"primary",onClick:function(){F.m8.push("/account/coinShop")},children:"\u6211\u8981\u5145\u503C"})]})]}),(0,u.jsxs)("div",{className:A().statItem,children:[(0,u.jsx)(i.Z,{title:"\u53EF\u63D0\u8FD4\u73B0",value:(0,f.zF)(s==null?void 0:s.excash)}),(0,u.jsxs)(Z.Z,{direction:"vertical",size:5,style:{display:"flex"},children:[(0,u.jsx)(c.Z,{size:"small",type:"primary",ghost:!0,onClick:function(){F.m8.push("/account/excashDetail")},children:"\u8FD4\u73B0\u660E\u7EC6"}),(0,u.jsx)(c.Z,{size:"small",type:"primary",onClick:function(){F.m8.push("/account/excashOut")},children:"\u6211\u8981\u63D0\u73B0"})]})]}),(0,u.jsxs)("div",{className:A().statItem,children:[(0,u.jsx)(i.Z,{title:"\u9080\u8BF7\u6D88\u8D39\u603B\u989D",value:(0,f.zF)(s==null?void 0:s.exsum)}),(0,u.jsxs)(Z.Z,{direction:"vertical",size:5,style:{display:"flex"},children:[(0,u.jsx)(c.Z,{size:"small",type:"primary",ghost:!0,onClick:function(){F.m8.push("/account/inviteList")},children:"\u6D88\u8D39\u660E\u7EC6"}),(0,u.jsx)(c.Z,{size:"small",type:"primary",onClick:function(){F.m8.push("/excash")},children:"\u6211\u8981\u9080\u8BF7"})]})]})]})},zu=function(){var m=(0,F.tT)("@@initialState"),s=m.initialState,E=s||{},r=E.currentUser;return(0,u.jsxs)(S.ZP,{loading:!r,breadcrumb:void 0,content:(0,u.jsx)(Uu,{currentUser:r}),extraContent:(0,u.jsx)(Su,{currentUser:r}),children:[r!=null&&r.waitpay?(0,u.jsx)(b.Z,{message:"\u60A8\u8FD8\u6709\u672A\u652F\u4ED8\u7684\u8BA2\u5355\uFF0C\u8BF7\u53CA\u65F6\u652F\u4ED8\u3002",showIcon:!0,type:"warning",style:{marginBottom:16},action:(0,u.jsx)(c.Z,{size:"small",onClick:function(){return F.m8.push("/account/orderList")},children:"\u67E5\u770B"})}):null,r!=null&&r.combo?(0,u.jsxs)(Z.Z,{direction:"vertical",size:"middle",style:{display:"flex"},children:[(0,u.jsx)(Lu,{}),(0,u.jsxs)(k.Z,{gutter:16,children:[(0,u.jsx)(N.Z,{lg:8,md:24,xs:24,children:(0,u.jsx)(a,{})}),(0,u.jsxs)(N.Z,{lg:16,md:24,children:[(0,u.jsx)(Iu,{}),(0,u.jsxs)(B.Z,{style:{marginTop:16},children:[(0,u.jsx)("p",{children:"\u5EFA\u8BAE\u4F18\u5148\u4F7F\u7528 Clash \u5BA2\u6237\u7AEF\u914D\u7F6E\u8BA2\u9605\u5730\u5740\u6765\u8FDE\u63A5\u3002\u4E0D\u8FC7 iPhone \u548C iPad \u8BBE\u5907\u7684\u7528\u6237\u5B89\u88C5 Clash APP \u4E0D\u65B9\u4FBF\uFF0C\u9700\u8981\u6709\u7F8E\u56FD\u7684 APPLE ID \u4E0B\u8F7D Surge \u6765\u914D\u7F6E\u4F7F\u7528\u3002"}),(0,u.jsx)("p",{children:"\u65F6\u4EE3\u5728\u53D8\uFF0C\u540C\u65F6\u56FD\u5BB6\u9632\u706B\u5899 GFW \u4E5F\u5728\u4E0D\u65AD\u5730\u8FDB\u6B65\u3002\u56E0\u4E0D\u53EF\u6297\u529B\u56E0\u7D20\uFF0C\u670D\u52A1\u7EBF\u8DEF\u4F1A\u88AB\u548C\u8C10\uFF0C\u670D\u52A1\u5668\u5217\u8868\u4E5F\u4F1A\u56E0\u88AB\u548C\u8C10\u800C\u53D8\u5316\uFF0C\u66F4\u6362\u670D\u52A1\u5668\u8282\u70B9\u4E0D\u4F1A\u7279\u522B\u901A\u77E5\u3002\u5982\u679C\u60A8\u8FDE\u63A5\u4E0D\u4E0A\uFF0C\u8BF7\u83B7\u53D6\u6700\u65B0\u7684\u670D\u52A1\u7EBF\u8DEF\u5217\u8868\u5E76\u66F4\u6362\u670D\u52A1\u8282\u70B9\u6D4B\u8BD5\u3002\u5728\u653F\u6CBB\u654F\u611F\u65F6\u671F\u53EF\u80FD\u4F1A\u8FDE\u63A5\u4E0D\u7A33\u5B9A\uFF0C\u5EFA\u8BAE\u66F4\u6362\u670D\u52A1\u8282\u70B9\u6216\u534F\u8BAE\u91CD\u8FDE\uFF0C\u4E0D\u4FBF\u4E4B\u5904\u656C\u8BF7\u539F\u8C05\uFF01"}),(0,u.jsx)("p",{children:"* \u6D41\u91CF\u6D88\u8017\u548C\u8BBE\u5907\u5728\u7EBF\u6570\u636E\u4F1A\u5B58\u572810\u5206\u949F\u5DE6\u53F3\u7684\u5EF6\u65F6\u3002"})]})]})]})]}):(0,u.jsx)(B.Z,{children:(0,u.jsx)(H.Z,{description:"\u60A8\u8FD8\u6CA1\u6709\u5F00\u901A\u5957\u9910\uFF0C\u60F3\u8981\u67E5\u770B\u66F4\u591A\u4FE1\u606F\u8BF7\u5148\u8D2D\u4E70\u5957\u9910",children:(0,u.jsx)(z.rU,{to:"/combo/shop",children:"\u8D2D\u4E70\u5957\u9910"})})})]})},Ru=zu},15912:function(O,$,t){"use strict";var vu=t(54029),H=t(79166),Cu=t(58024),k=t(91894),fu=t(17462),B=t(76772),mu=t(77576),N=t(12028),xu=t(57663),b=t(71577),ju=t(20136),Z=t(19181),Zu=t(98858),i=t(4914),yu=t(34792),c=t(48086),Bu=t(71194),G=t(48889),l=t(64097),d=t(87336),f=t(42122),w=t(68855),S=t(68628),F=t(62305),z=t(92900),q=t(71824),A=t.n(q),n=t(85893),uu=G.Z.confirm,g=function(a,M){(0,f.q1)(a.id).then(function(P){uu({title:"\u60A8\u771F\u7684\u8981\u53D6\u6D88\u8FD9\u4E2A\u5957\u9910\u5417\uFF1F",icon:(0,n.jsx)(w.Z,{}),content:P>0?"\u5957\u9910\u53D6\u6D88\u540E\u5C06\u4E0D\u53EF\u6062\u590D\uFF0C\u5927\u7EA6\u8FD8\u6709 ".concat(P," \u8FD4\u56DE\u60A8\u7684\u8D26\u53F7\u4F59\u989D\u91CC"):"\u5957\u9910\u53D6\u6D88\u540E\u5C06\u4E0D\u53EF\u6062\u590D\uFF0C\u5DF2\u7ECF\u6CA1\u6709\u4F59\u989D\u8FD4\u56DE\u5230\u60A8\u7684\u8D26\u53F7\u4E2D",onOk:function(){(0,f.Re)(a.id).then(function(){c.ZP.success("\u64CD\u4F5C\u6210\u529F"),l.tO.remove(l.VD.comboList),M()}).catch(function(){c.ZP.error("\u53D6\u6D88\u5957\u9910\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")})}})}).catch(function(){c.ZP.error("\u83B7\u53D6\u5957\u9910\u6570\u636E\u5931\u8D25")})},Q=function(a){if(a.qname=="old"){var M=(0,l.p4)(a);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Z,{title:"VPN\u6D41\u91CF",value:"\u65E0\u9650\u5236",layout:"horizontal"}),(0,n.jsx)(d.Z,{title:"VPN\u540C\u65F6\u5728\u7EBF",value:"".concat(a.num,"\u53F0"),layout:"horizontal"}),(0,n.jsx)(d.Z,{title:(0,n.jsxs)(Z.Z,{content:(0,n.jsxs)(i.Z,{column:1,style:{maxWidth:"350px"},bordered:!0,children:[(0,n.jsx)(i.Z.Item,{label:"\u5957\u9910\u6D41\u91CF",children:(0,l.$j)(a.traffic)}),(0,n.jsx)(i.Z.Item,{label:"\u7EE7\u627F\u6D41\u91CF",children:(0,l.$j)(a.traffic_from)}),(0,n.jsx)(i.Z.Item,{label:"\u5145\u503C\u6D41\u91CF",children:(0,l.$j)(a.traffic_buy)}),(0,n.jsx)(i.Z.Item,{label:"\u8D60\u9001\u6D41\u91CF",children:(0,l.$j)(a.traffic_gift)}),(0,n.jsx)(i.Z.Item,{label:"\u5DF2\u4F7F\u7528\u6D41\u91CF",children:(0,l.$j)(a.proxy_traffic)})]}),children:["\u53EF\u7528\u4EE3\u7406\u6D41\u91CF",(0,n.jsx)(S.Z,{style:{color:"rgba(0, 0, 0, 0.43)",marginLeft:4}})]}),value:M>0?(0,l.$j)(M):"\u65E0\u53EF\u7528\u6D41\u91CF",layout:"horizontal"}),(0,n.jsx)(d.Z,{title:"\u4EE3\u7406\u540C\u65F6\u5728\u7EBF",value:"\u65E0\u9650\u5236",layout:"horizontal"})]})}else if(a.qname=="traffic"){var P=(0,l.p4)(a);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Z,{title:(0,n.jsxs)(Z.Z,{content:(0,n.jsxs)(i.Z,{column:1,style:{maxWidth:"350px"},bordered:!0,children:[(0,n.jsx)(i.Z.Item,{label:"\u5957\u9910\u6D41\u91CF",children:(0,l.$j)(a.traffic)}),(0,n.jsx)(i.Z.Item,{label:"\u7EE7\u627F\u6D41\u91CF",children:(0,l.$j)(a.traffic_from)}),(0,n.jsx)(i.Z.Item,{label:"\u5145\u503C\u6D41\u91CF",children:(0,l.$j)(a.traffic_buy)}),(0,n.jsx)(i.Z.Item,{label:"\u8D60\u9001\u6D41\u91CF",children:(0,l.$j)(a.traffic_gift)}),(0,n.jsx)(i.Z.Item,{label:"\u5DF2\u4F7F\u7528\u6D41\u91CF",children:(0,l.$j)(a.proxy_traffic+a.vpn_traffic)})]}),children:["\u53EF\u7528\u6D41\u91CF",(0,n.jsx)(S.Z,{style:{color:"rgba(0, 0, 0, 0.43)",marginLeft:4}})]}),value:P>0?(0,l.$j)(P):"\u65E0\u53EF\u7528\u6D41\u91CF",layout:"horizontal"}),(0,n.jsx)(d.Z,{title:"\u8FDE\u63A5\u6570\u9650\u5236",value:"\u65E0",layout:"horizontal"}),(0,n.jsx)(d.Z,{title:"\u6D41\u91CF\u7EE7\u627F",value:a.is_inherit?"\u662F":"\u5426",layout:"horizontal"}),(0,n.jsx)(d.Z,{title:"\u6309\u6708\u8BA1\u7B97\u5468\u671F",value:a.is_month?"\u662F":"\u5426",layout:"horizontal"})]})}else if(a.qname=="unlimit")return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Z,{title:(0,n.jsxs)(Z.Z,{content:(0,n.jsxs)(i.Z,{column:1,style:{maxWidth:"350px"},bordered:!0,children:[(0,n.jsx)(i.Z.Item,{label:"\u5957\u9910\u6D41\u91CF",children:"\u65E0\u9650\u5236"}),(0,n.jsx)(i.Z.Item,{label:"\u7EE7\u627F\u6D41\u91CF",children:(0,l.$j)(a.traffic_from)}),(0,n.jsx)(i.Z.Item,{label:"\u5145\u503C\u6D41\u91CF",children:(0,l.$j)(a.traffic_buy)}),(0,n.jsx)(i.Z.Item,{label:"\u8D60\u9001\u6D41\u91CF",children:(0,l.$j)(a.traffic_gift)}),(0,n.jsx)(i.Z.Item,{label:"\u5DF2\u4F7F\u7528\u6D41\u91CF",children:(0,l.$j)(a.proxy_traffic+a.vpn_traffic)})]}),children:["\u53EF\u7528\u6D41\u91CF",(0,n.jsx)(S.Z,{style:{color:"rgba(0, 0, 0, 0.43)",marginLeft:4}})]}),value:"\u65E0\u9650\u5236",layout:"horizontal"}),(0,n.jsx)(d.Z,{title:"\u8FDE\u63A5\u6570\u9650\u5236",value:"\u65E0",layout:"horizontal"}),(0,n.jsx)(d.Z,{title:"\u6D41\u91CF\u7EE7\u627F",value:a.is_inherit?"\u662F":"\u5426",layout:"horizontal"}),(0,n.jsx)(d.Z,{title:"\u6309\u6708\u8BA1\u7B97\u5468\u671F",value:a.is_month?"\u662F":"\u5426",layout:"horizontal"})]});return null},u=function(a,M){return(0,n.jsx)(H.Z.Ribbon,{text:a.started?"\u6B63\u5728\u8FD0\u884C":"\u8FD8\u672A\u542F\u7528",color:a.started?"green":"gray",children:(0,n.jsxs)(k.Z,{className:A().card,title:(0,l.rt)(a.hour),type:"inner",actions:[(0,n.jsx)(b.Z,{disabled:a.sum<=0,onClick:function(){return F.m8.push("/traffic/shop/"+a.id)},type:"primary",ghost:!0,children:"\u8865\u5145\u6D41\u91CF"},"option1"),(0,n.jsx)(b.Z,{type:"dashed",danger:!0,onClick:function(){return g(a,M)},children:"\u53D6\u6D88\u5957\u9910"},"option2")],children:[(0,n.jsx)(d.Z,{title:"\u521B\u5EFA\u65F6\u95F4",value:(0,l.uq)(a.created),layout:"horizontal"}),(0,n.jsx)(d.Z,{title:"\u5F00\u59CB\u65F6\u95F4",value:(0,l.uq)(a.started,"\u8FD8\u672A\u5F00\u59CB"),layout:"horizontal"}),(0,n.jsx)(d.Z,{title:"\u5230\u671F\u65F6\u95F4",value:(0,l.uq)(a.finished),layout:"horizontal"}),Q(a),(0,n.jsx)(d.Z,{title:"\u81EA\u52A8\u7EED\u8D39",suffix:(0,n.jsx)(N.Z,{disabled:a.sum<=0,defaultChecked:!!a.renew,checkedChildren:"\u5F00",unCheckedChildren:"\u5173",onChange:function(R){z.A.conn().req("/combo/renew",z.x.POST,{id:a.id,renew:R}).then(function(){a.renew=R,c.ZP.success(R?"\u6210\u529F\u8BBE\u7F6E\u81EA\u52A8\u7EED\u8D39":"\u6210\u529F\u53D6\u6D88\u81EA\u52A8\u7EED\u8D39")}).catch(function(){c.ZP.error("\u8BBE\u7F6E\u4E0D\u6210\u529F\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")})}}),value:" ",layout:"horizontal"}),(0,l.p4)(a)<0?(0,n.jsx)(B.Z,{style:{marginTop:16},message:"\u5957\u9910\u6D41\u91CF\u5DF2\u7ECF\u8017\u5149\uFF0C\u670D\u52A1\u5C06\u4F1A\u53D7\u5230\u9650\u5236",type:"warning",showIcon:!0}):null]})})};$.Z=u}}]);

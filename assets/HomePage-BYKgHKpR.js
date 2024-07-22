import{j as x,N as be,R as ht,r as $,u as br}from"./index-CV6OrdaP.js";import{A as vr}from"./AdvantagesSection-Pamw1_DT.js";import{L as xr}from"./Logo-CpUGwG0R.js";const $r="_mainWrapper_1o8oc_1",wr="_sectionWrap_1o8oc_10",Sr="_subtitle_1o8oc_13",kr="_title_1o8oc_23",Er="_button_1o8oc_32",Cr="_tryButton_1o8oc_43",_r="_signButton_1o8oc_57",Y={mainWrapper:$r,sectionWrap:wr,subtitle:Sr,title:kr,button:Er,tryButton:Cr,signButton:_r},Ar=()=>x.jsxs("div",{className:Y.mainWrapper,children:[x.jsx(xr,{}),x.jsxs("div",{className:Y.sectionWrap,children:[x.jsx("h2",{className:Y.subtitle,children:"Record daily water intake and track"}),x.jsx("h1",{className:Y.title,children:"Water consumption tracker"}),x.jsx(be,{to:"/signup",className:`${Y.button} ${Y.tryButton}`,children:"Try tracker"}),x.jsx(be,{to:"/signin",className:`${Y.button} ${Y.signButton}`,children:"Sign In"})]})]}),Ir="_homePageWrapper_ld58r_1",jr={homePageWrapper:Ir};var j=function(){return j=Object.assign||function(e){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},j.apply(this,arguments)};function gt(t,e,r){if(r||arguments.length===2)for(var n=0,a=e.length,s;n<a;n++)(s||!(n in e))&&(s||(s=Array.prototype.slice.call(e,0,n)),s[n]=e[n]);return t.concat(s||Array.prototype.slice.call(e))}var v="-ms-",ft="-moz-",m="-webkit-",De="comm",Lt="rule",de="decl",Nr="@import",Te="@keyframes",Pr="@layer",ze=Math.abs,le=String.fromCharCode,Xt=Object.assign;function Or(t,e){return I(t,0)^45?(((e<<2^I(t,0))<<2^I(t,1))<<2^I(t,2))<<2^I(t,3):0}function Fe(t){return t.trim()}function M(t,e){return(t=e.exec(t))?t[0]:t}function p(t,e,r){return t.replace(e,r)}function _t(t,e,r){return t.indexOf(e,r)}function I(t,e){return t.charCodeAt(e)|0}function rt(t,e,r){return t.slice(e,r)}function z(t){return t.length}function Le(t){return t.length}function pt(t,e){return e.push(t),t}function Rr(t,e){return t.map(e).join("")}function ve(t,e){return t.filter(function(r){return!M(r,e)})}var Mt=1,nt=1,Me=0,R=0,_=0,it="";function Bt(t,e,r,n,a,s,o,i){return{value:t,root:e,parent:r,type:n,props:a,children:s,line:Mt,column:nt,length:o,return:"",siblings:i}}function H(t,e){return Xt(Bt("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function tt(t){for(;t.root;)t=H(t.root,{children:[t]});pt(t,t.siblings)}function Dr(){return _}function Tr(){return _=R>0?I(it,--R):0,nt--,_===10&&(nt=1,Mt--),_}function T(){return _=R<Me?I(it,R++):0,nt++,_===10&&(nt=1,Mt++),_}function V(){return I(it,R)}function At(){return R}function Wt(t,e){return rt(it,t,e)}function te(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function zr(t){return Mt=nt=1,Me=z(it=t),R=0,[]}function Fr(t){return it="",t}function Kt(t){return Fe(Wt(R-1,ee(t===91?t+2:t===40?t+1:t)))}function Lr(t){for(;(_=V())&&_<33;)T();return te(t)>2||te(_)>3?"":" "}function Mr(t,e){for(;--e&&T()&&!(_<48||_>102||_>57&&_<65||_>70&&_<97););return Wt(t,At()+(e<6&&V()==32&&T()==32))}function ee(t){for(;T();)switch(_){case t:return R;case 34:case 39:t!==34&&t!==39&&ee(_);break;case 40:t===41&&ee(t);break;case 92:T();break}return R}function Br(t,e){for(;T()&&t+_!==57;)if(t+_===84&&V()===47)break;return"/*"+Wt(e,R-1)+"*"+le(t===47?t:T())}function Wr(t){for(;!te(V());)T();return Wt(t,R)}function Gr(t){return Fr(It("",null,null,null,[""],t=zr(t),0,[0],t))}function It(t,e,r,n,a,s,o,i,c){for(var u=0,d=0,f=o,h=0,l=0,y=0,E=1,N=1,C=1,S=0,w="",k=a,A=s,b=n,g=w;N;)switch(y=S,S=T()){case 40:if(y!=108&&I(g,f-1)==58){_t(g+=p(Kt(S),"&","&\f"),"&\f",ze(u?i[u-1]:0))!=-1&&(C=-1);break}case 34:case 39:case 91:g+=Kt(S);break;case 9:case 10:case 13:case 32:g+=Lr(y);break;case 92:g+=Mr(At()-1,7);continue;case 47:switch(V()){case 42:case 47:pt(Yr(Br(T(),At()),e,r,c),c);break;default:g+="/"}break;case 123*E:i[u++]=z(g)*C;case 125*E:case 59:case 0:switch(S){case 0:case 125:N=0;case 59+d:C==-1&&(g=p(g,/\f/g,"")),l>0&&z(g)-f&&pt(l>32?$e(g+";",n,r,f-1,c):$e(p(g," ","")+";",n,r,f-2,c),c);break;case 59:g+=";";default:if(pt(b=xe(g,e,r,u,d,a,i,w,k=[],A=[],f,s),s),S===123)if(d===0)It(g,e,b,b,k,s,f,i,A);else switch(h===99&&I(g,3)===110?100:h){case 100:case 108:case 109:case 115:It(t,b,b,n&&pt(xe(t,b,b,0,0,a,i,w,a,k=[],f,A),A),a,A,f,i,n?k:A);break;default:It(g,b,b,b,[""],A,0,i,A)}}u=d=l=0,E=C=1,w=g="",f=o;break;case 58:f=1+z(g),l=y;default:if(E<1){if(S==123)--E;else if(S==125&&E++==0&&Tr()==125)continue}switch(g+=le(S),S*E){case 38:C=d>0?1:(g+="\f",-1);break;case 44:i[u++]=(z(g)-1)*C,C=1;break;case 64:V()===45&&(g+=Kt(T())),h=V(),d=f=z(w=g+=Wr(At())),S++;break;case 45:y===45&&z(g)==2&&(E=0)}}return s}function xe(t,e,r,n,a,s,o,i,c,u,d,f){for(var h=a-1,l=a===0?s:[""],y=Le(l),E=0,N=0,C=0;E<n;++E)for(var S=0,w=rt(t,h+1,h=ze(N=o[E])),k=t;S<y;++S)(k=Fe(N>0?l[S]+" "+w:p(w,/&\f/g,l[S])))&&(c[C++]=k);return Bt(t,e,r,a===0?Lt:i,c,u,d,f)}function Yr(t,e,r,n){return Bt(t,e,r,De,le(Dr()),rt(t,2,-2),0,n)}function $e(t,e,r,n,a){return Bt(t,e,r,de,rt(t,0,n),rt(t,n+1,-1),n,a)}function Be(t,e,r){switch(Or(t,e)){case 5103:return m+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return m+t+t;case 4789:return ft+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return m+t+ft+t+v+t+t;case 5936:switch(I(t,e+11)){case 114:return m+t+v+p(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return m+t+v+p(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return m+t+v+p(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return m+t+v+t+t;case 6165:return m+t+v+"flex-"+t+t;case 5187:return m+t+p(t,/(\w+).+(:[^]+)/,m+"box-$1$2"+v+"flex-$1$2")+t;case 5443:return m+t+v+"flex-item-"+p(t,/flex-|-self/g,"")+(M(t,/flex-|baseline/)?"":v+"grid-row-"+p(t,/flex-|-self/g,""))+t;case 4675:return m+t+v+"flex-line-pack"+p(t,/align-content|flex-|-self/g,"")+t;case 5548:return m+t+v+p(t,"shrink","negative")+t;case 5292:return m+t+v+p(t,"basis","preferred-size")+t;case 6060:return m+"box-"+p(t,"-grow","")+m+t+v+p(t,"grow","positive")+t;case 4554:return m+p(t,/([^-])(transform)/g,"$1"+m+"$2")+t;case 6187:return p(p(p(t,/(zoom-|grab)/,m+"$1"),/(image-set)/,m+"$1"),t,"")+t;case 5495:case 3959:return p(t,/(image-set\([^]*)/,m+"$1$`$1");case 4968:return p(p(t,/(.+:)(flex-)?(.*)/,m+"box-pack:$3"+v+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+m+t+t;case 4200:if(!M(t,/flex-|baseline/))return v+"grid-column-align"+rt(t,e)+t;break;case 2592:case 3360:return v+p(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(n,a){return e=a,M(n.props,/grid-\w+-end/)})?~_t(t+(r=r[e].value),"span",0)?t:v+p(t,"-start","")+t+v+"grid-row-span:"+(~_t(r,"span",0)?M(r,/\d+/):+M(r,/\d+/)-+M(t,/\d+/))+";":v+p(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(n){return M(n.props,/grid-\w+-start/)})?t:v+p(p(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return p(t,/(.+)-inline(.+)/,m+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(z(t)-1-e>6)switch(I(t,e+1)){case 109:if(I(t,e+4)!==45)break;case 102:return p(t,/(.+:)(.+)-([^]+)/,"$1"+m+"$2-$3$1"+ft+(I(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~_t(t,"stretch",0)?Be(p(t,"stretch","fill-available"),e,r)+t:t}break;case 5152:case 5920:return p(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,a,s,o,i,c,u){return v+a+":"+s+u+(o?v+a+"-span:"+(i?c:+c-+s)+u:"")+t});case 4949:if(I(t,e+6)===121)return p(t,":",":"+m)+t;break;case 6444:switch(I(t,I(t,14)===45?18:11)){case 120:return p(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+m+(I(t,14)===45?"inline-":"")+"box$3$1"+m+"$2$3$1"+v+"$2box$3")+t;case 100:return p(t,":",":"+v)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return p(t,"scroll-","scroll-snap-")+t}return t}function Dt(t,e){for(var r="",n=0;n<t.length;n++)r+=e(t[n],n,t,e)||"";return r}function Hr(t,e,r,n){switch(t.type){case Pr:if(t.children.length)break;case Nr:case de:return t.return=t.return||t.value;case De:return"";case Te:return t.return=t.value+"{"+Dt(t.children,n)+"}";case Lt:if(!z(t.value=t.props.join(",")))return""}return z(r=Dt(t.children,n))?t.return=t.value+"{"+r+"}":""}function Ur(t){var e=Le(t);return function(r,n,a,s){for(var o="",i=0;i<e;i++)o+=t[i](r,n,a,s)||"";return o}}function qr(t){return function(e){e.root||(e=e.return)&&t(e)}}function Zr(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case de:t.return=Be(t.value,t.length,r);return;case Te:return Dt([H(t,{value:p(t.value,"@","@"+m)})],n);case Lt:if(t.length)return Rr(r=t.props,function(a){switch(M(a,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":tt(H(t,{props:[p(a,/:(read-\w+)/,":"+ft+"$1")]})),tt(H(t,{props:[a]})),Xt(t,{props:ve(r,n)});break;case"::placeholder":tt(H(t,{props:[p(a,/:(plac\w+)/,":"+m+"input-$1")]})),tt(H(t,{props:[p(a,/:(plac\w+)/,":"+ft+"$1")]})),tt(H(t,{props:[p(a,/:(plac\w+)/,v+"input-$1")]})),tt(H(t,{props:[a]})),Xt(t,{props:ve(r,n)});break}return""})}}var Kr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},P={},at=typeof process<"u"&&P!==void 0&&(P.REACT_APP_SC_ATTR||P.SC_ATTR)||"data-styled",We="active",Ge="data-styled-version",Gt="6.1.12",pe=`/*!sc*/
`,Tt=typeof window<"u"&&"HTMLElement"in window,Vr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&P!==void 0&&P.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&P.REACT_APP_SC_DISABLE_SPEEDY!==""?P.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&P.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&P!==void 0&&P.SC_DISABLE_SPEEDY!==void 0&&P.SC_DISABLE_SPEEDY!==""&&P.SC_DISABLE_SPEEDY!=="false"&&P.SC_DISABLE_SPEEDY),Yt=Object.freeze([]),st=Object.freeze({});function Jr(t,e,r){return r===void 0&&(r=st),t.theme!==r.theme&&t.theme||e||r.theme}var Ye=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Qr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xr=/(^-|-$)/g;function we(t){return t.replace(Qr,"-").replace(Xr,"")}var tn=/(a)(d)/gi,kt=52,Se=function(t){return String.fromCharCode(t+(t>25?39:97))};function re(t){var e,r="";for(e=Math.abs(t);e>kt;e=e/kt|0)r=Se(e%kt)+r;return(Se(e%kt)+r).replace(tn,"$1-$2")}var Vt,He=5381,et=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},Ue=function(t){return et(He,t)};function qe(t){return re(Ue(t)>>>0)}function en(t){return t.displayName||t.name||"Component"}function Jt(t){return typeof t=="string"&&!0}var Ze=typeof Symbol=="function"&&Symbol.for,Ke=Ze?Symbol.for("react.memo"):60115,rn=Ze?Symbol.for("react.forward_ref"):60112,nn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},an={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ve={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sn=((Vt={})[rn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vt[Ke]=Ve,Vt);function ke(t){return("type"in(e=t)&&e.type.$$typeof)===Ke?Ve:"$$typeof"in t?sn[t.$$typeof]:nn;var e}var on=Object.defineProperty,cn=Object.getOwnPropertyNames,Ee=Object.getOwnPropertySymbols,un=Object.getOwnPropertyDescriptor,dn=Object.getPrototypeOf,Ce=Object.prototype;function Je(t,e,r){if(typeof e!="string"){if(Ce){var n=dn(e);n&&n!==Ce&&Je(t,n,r)}var a=cn(e);Ee&&(a=a.concat(Ee(e)));for(var s=ke(t),o=ke(e),i=0;i<a.length;++i){var c=a[i];if(!(c in an||r&&r[c]||o&&c in o||s&&c in s)){var u=un(e,c);try{on(t,c,u)}catch{}}}}return t}function ot(t){return typeof t=="function"}function fe(t){return typeof t=="object"&&"styledComponentId"in t}function K(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function ne(t,e){if(t.length===0)return"";for(var r=t[0],n=1;n<t.length;n++)r+=t[n];return r}function mt(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function ae(t,e,r){if(r===void 0&&(r=!1),!r&&!mt(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=ae(t[n],e[n]);else if(mt(e))for(var n in e)t[n]=ae(t[n],e[n]);return t}function he(t,e){Object.defineProperty(t,"toString",{value:e})}function yt(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var ln=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var r=0,n=0;n<e;n++)r+=this.groupSizes[n];return r},t.prototype.insertRules=function(e,r){if(e>=this.groupSizes.length){for(var n=this.groupSizes,a=n.length,s=a;e>=s;)if((s<<=1)<0)throw yt(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var o=a;o<s;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),c=(o=0,r.length);o<c;o++)this.tag.insertRule(i,r[o])&&(this.groupSizes[e]++,i++)},t.prototype.clearGroup=function(e){if(e<this.length){var r=this.groupSizes[e],n=this.indexOfGroup(e),a=n+r;this.groupSizes[e]=0;for(var s=n;s<a;s++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var r="";if(e>=this.length||this.groupSizes[e]===0)return r;for(var n=this.groupSizes[e],a=this.indexOfGroup(e),s=a+n,o=a;o<s;o++)r+="".concat(this.tag.getRule(o)).concat(pe);return r},t}(),jt=new Map,zt=new Map,Nt=1,Et=function(t){if(jt.has(t))return jt.get(t);for(;zt.has(Nt);)Nt++;var e=Nt++;return jt.set(t,e),zt.set(e,t),e},pn=function(t,e){Nt=e+1,jt.set(t,e),zt.set(e,t)},fn="style[".concat(at,"][").concat(Ge,'="').concat(Gt,'"]'),hn=new RegExp("^".concat(at,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),gn=function(t,e,r){for(var n,a=r.split(","),s=0,o=a.length;s<o;s++)(n=a[s])&&t.registerName(e,n)},mn=function(t,e){for(var r,n=((r=e.textContent)!==null&&r!==void 0?r:"").split(pe),a=[],s=0,o=n.length;s<o;s++){var i=n[s].trim();if(i){var c=i.match(hn);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(pn(d,u),gn(t,d,c[3]),t.getTag().insertRules(u,a)),a.length=0}else a.push(i)}}},_e=function(t){for(var e=document.querySelectorAll(fn),r=0,n=e.length;r<n;r++){var a=e[r];a&&a.getAttribute(at)!==We&&(mn(t,a),a.parentNode&&a.parentNode.removeChild(a))}};function yn(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Qe=function(t){var e=document.head,r=t||e,n=document.createElement("style"),a=function(i){var c=Array.from(i.querySelectorAll("style[".concat(at,"]")));return c[c.length-1]}(r),s=a!==void 0?a.nextSibling:null;n.setAttribute(at,We),n.setAttribute(Ge,Gt);var o=yn();return o&&n.setAttribute("nonce",o),r.insertBefore(n,s),n},bn=function(){function t(e){this.element=Qe(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,a=0,s=n.length;a<s;a++){var o=n[a];if(o.ownerNode===r)return o}throw yt(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""},t}(),vn=function(){function t(e){this.element=Qe(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,r){if(e<=this.length&&e>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),xn=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,r){return e<=this.length&&(this.rules.splice(e,0,r),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Ae=Tt,$n={isServer:!Tt,useCSSOMInjection:!Vr},Xe=function(){function t(e,r,n){e===void 0&&(e=st),r===void 0&&(r={});var a=this;this.options=j(j({},$n),e),this.gs=r,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Tt&&Ae&&(Ae=!1,_e(this)),he(this,function(){return function(s){for(var o=s.getTag(),i=o.length,c="",u=function(f){var h=function(C){return zt.get(C)}(f);if(h===void 0)return"continue";var l=s.names.get(h),y=o.getGroup(f);if(l===void 0||!l.size||y.length===0)return"continue";var E="".concat(at,".g").concat(f,'[id="').concat(h,'"]'),N="";l!==void 0&&l.forEach(function(C){C.length>0&&(N+="".concat(C,","))}),c+="".concat(y).concat(E,'{content:"').concat(N,'"}').concat(pe)},d=0;d<i;d++)u(d);return c}(a)})}return t.registerId=function(e){return Et(e)},t.prototype.rehydrate=function(){!this.server&&Tt&&_e(this)},t.prototype.reconstructWithOptions=function(e,r){return r===void 0&&(r=!0),new t(j(j({},this.options),e),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(r){var n=r.useCSSOMInjection,a=r.target;return r.isServer?new xn(a):n?new bn(a):new vn(a)}(this.options),new ln(e)));var e},t.prototype.hasNameForId=function(e,r){return this.names.has(e)&&this.names.get(e).has(r)},t.prototype.registerName=function(e,r){if(Et(e),this.names.has(e))this.names.get(e).add(r);else{var n=new Set;n.add(r),this.names.set(e,n)}},t.prototype.insertRules=function(e,r,n){this.registerName(e,r),this.getTag().insertRules(Et(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Et(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),wn=/&/g,Sn=/^\s*\/\/.*$/gm;function tr(t,e){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(e," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(e," ")),r.props=r.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=tr(r.children,e)),r})}function kn(t){var e,r,n,a=st,s=a.options,o=s===void 0?st:s,i=a.plugins,c=i===void 0?Yt:i,u=function(h,l,y){return y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?".".concat(e):h},d=c.slice();d.push(function(h){h.type===Lt&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(wn,r).replace(n,u))}),o.prefix&&d.push(Zr),d.push(Hr);var f=function(h,l,y,E){l===void 0&&(l=""),y===void 0&&(y=""),E===void 0&&(E="&"),e=E,r=l,n=new RegExp("\\".concat(r,"\\b"),"g");var N=h.replace(Sn,""),C=Gr(y||l?"".concat(y," ").concat(l," { ").concat(N," }"):N);o.namespace&&(C=tr(C,o.namespace));var S=[];return Dt(C,Ur(d.concat(qr(function(w){return S.push(w)})))),S};return f.hash=c.length?c.reduce(function(h,l){return l.name||yt(15),et(h,l.name)},He).toString():"",f}var En=new Xe,se=kn(),er=ht.createContext({shouldForwardProp:void 0,styleSheet:En,stylis:se});er.Consumer;ht.createContext(void 0);function Ie(){return $.useContext(er)}var rr=function(){function t(e,r){var n=this;this.inject=function(a,s){s===void 0&&(s=se);var o=n.name+s.hash;a.hasNameForId(n.id,o)||a.insertRules(n.id,o,s(n.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=r,he(this,function(){throw yt(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=se),this.name+e.hash},t}(),Cn=function(t){return t>="A"&&t<="Z"};function je(t){for(var e="",r=0;r<t.length;r++){var n=t[r];if(r===1&&n==="-"&&t[0]==="-")return t;Cn(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var nr=function(t){return t==null||t===!1||t===""},ar=function(t){var e,r,n=[];for(var a in t){var s=t[a];t.hasOwnProperty(a)&&!nr(s)&&(Array.isArray(s)&&s.isCss||ot(s)?n.push("".concat(je(a),":"),s,";"):mt(s)?n.push.apply(n,gt(gt(["".concat(a," {")],ar(s),!1),["}"],!1)):n.push("".concat(je(a),": ").concat((e=a,(r=s)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in Kr||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function J(t,e,r,n){if(nr(t))return[];if(fe(t))return[".".concat(t.styledComponentId)];if(ot(t)){if(!ot(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var a=t(e);return J(a,e,r,n)}var s;return t instanceof rr?r?(t.inject(r,n),[t.getName(n)]):[t]:mt(t)?ar(t):Array.isArray(t)?Array.prototype.concat.apply(Yt,t.map(function(o){return J(o,e,r,n)})):[t.toString()]}function _n(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(ot(r)&&!fe(r))return!1}return!0}var An=Ue(Gt),In=function(){function t(e,r,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&_n(e),this.componentId=r,this.baseHash=et(An,r),this.baseStyle=n,Xe.registerId(r)}return t.prototype.generateAndInjectStyles=function(e,r,n){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))a=K(a,this.staticRulesId);else{var s=ne(J(this.rules,e,r,n)),o=re(et(this.baseHash,s)>>>0);if(!r.hasNameForId(this.componentId,o)){var i=n(s,".".concat(o),void 0,this.componentId);r.insertRules(this.componentId,o,i)}a=K(a,o),this.staticRulesId=o}else{for(var c=et(this.baseHash,n.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var h=ne(J(f,e,r,n));c=et(c,h+d),u+=h}}if(u){var l=re(c>>>0);r.hasNameForId(this.componentId,l)||r.insertRules(this.componentId,l,n(u,".".concat(l),void 0,this.componentId)),a=K(a,l)}}return a},t}(),sr=ht.createContext(void 0);sr.Consumer;var Qt={};function jn(t,e,r){var n=fe(t),a=t,s=!Jt(t),o=e.attrs,i=o===void 0?Yt:o,c=e.componentId,u=c===void 0?function(k,A){var b=typeof k!="string"?"sc":we(k);Qt[b]=(Qt[b]||0)+1;var g="".concat(b,"-").concat(qe(Gt+b+Qt[b]));return A?"".concat(A,"-").concat(g):g}(e.displayName,e.parentComponentId):c,d=e.displayName,f=d===void 0?function(k){return Jt(k)?"styled.".concat(k):"Styled(".concat(en(k),")")}(t):d,h=e.displayName&&e.componentId?"".concat(we(e.displayName),"-").concat(e.componentId):e.componentId||u,l=n&&a.attrs?a.attrs.concat(i).filter(Boolean):i,y=e.shouldForwardProp;if(n&&a.shouldForwardProp){var E=a.shouldForwardProp;if(e.shouldForwardProp){var N=e.shouldForwardProp;y=function(k,A){return E(k,A)&&N(k,A)}}else y=E}var C=new In(r,h,n?a.componentStyle:void 0);function S(k,A){return function(b,g,ct){var vt=b.attrs,lr=b.componentStyle,pr=b.defaultProps,fr=b.foldedComponentIds,hr=b.styledComponentId,gr=b.target,mr=ht.useContext(sr),yr=Ie(),Ut=b.shouldForwardProp||yr.shouldForwardProp,me=Jr(g,mr,pr)||st,F=function($t,dt,wt){for(var lt,Z=j(j({},dt),{className:void 0,theme:wt}),Zt=0;Zt<$t.length;Zt+=1){var St=ot(lt=$t[Zt])?lt(Z):lt;for(var G in St)Z[G]=G==="className"?K(Z[G],St[G]):G==="style"?j(j({},Z[G]),St[G]):St[G]}return dt.className&&(Z.className=K(Z.className,dt.className)),Z}(vt,g,me),xt=F.as||gr,ut={};for(var W in F)F[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&F.theme===me||(W==="forwardedAs"?ut.as=F.forwardedAs:Ut&&!Ut(W,xt)||(ut[W]=F[W]));var ye=function($t,dt){var wt=Ie(),lt=$t.generateAndInjectStyles(dt,wt.styleSheet,wt.stylis);return lt}(lr,F),qt=K(fr,hr);return ye&&(qt+=" "+ye),F.className&&(qt+=" "+F.className),ut[Jt(xt)&&!Ye.has(xt)?"class":"className"]=qt,ut.ref=ct,$.createElement(xt,ut)}(w,k,A)}S.displayName=f;var w=ht.forwardRef(S);return w.attrs=l,w.componentStyle=C,w.displayName=f,w.shouldForwardProp=y,w.foldedComponentIds=n?K(a.foldedComponentIds,a.styledComponentId):"",w.styledComponentId=h,w.target=n?a.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=n?function(A){for(var b=[],g=1;g<arguments.length;g++)b[g-1]=arguments[g];for(var ct=0,vt=b;ct<vt.length;ct++)ae(A,vt[ct],!0);return A}({},a.defaultProps,k):k}}),he(w,function(){return".".concat(w.styledComponentId)}),s&&Je(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Ne(t,e){for(var r=[t[0]],n=0,a=e.length;n<a;n+=1)r.push(e[n],t[n+1]);return r}var Pe=function(t){return Object.assign(t,{isCss:!0})};function or(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(ot(t)||mt(t))return Pe(J(Ne(Yt,gt([t],e,!0))));var n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?J(n):Pe(J(Ne(n,e)))}function oe(t,e,r){if(r===void 0&&(r=st),!e)throw yt(1,e);var n=function(a){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,r,or.apply(void 0,gt([a],s,!1)))};return n.attrs=function(a){return oe(t,e,j(j({},r),{attrs:Array.prototype.concat(r.attrs,a).filter(Boolean)}))},n.withConfig=function(a){return oe(t,e,j(j({},r),a))},n}var ir=function(t){return oe(jn,t)},Q=ir;Ye.forEach(function(t){Q[t]=ir(t)});function ge(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=ne(or.apply(void 0,gt([t],e,!1))),a=qe(n);return new rr(a,n)}const Nn="#4fa94d",Pn={"aria-busy":!0,role:"progressbar"},On=Q.div`
  display: ${t=>t.$visible?"flex":"none"};
`,Rn="http://www.w3.org/2000/svg",Dn=({height:t="100",width:e="100",color:r=Nn,ariaLabel:n="audio-loading",wrapperStyle:a={},wrapperClass:s,visible:o=!0})=>x.jsx(On,{$visible:o,style:{...a},className:s,"data-testid":"audio-loading","aria-label":n,...Pn,children:x.jsxs("svg",{height:`${t}`,width:`${e}`,fill:r,viewBox:"0 0 55 80",xmlns:Rn,"data-testid":"audio-svg",children:[x.jsx("title",{children:"Audio Visualization"}),x.jsx("desc",{children:"Animated representation of audio data"}),x.jsxs("g",{transform:"matrix(1 0 0 -1 0 80)",children:[x.jsx("rect",{width:"10",height:"20",rx:"3",children:x.jsx("animate",{attributeName:"height",begin:"0s",dur:"4.3s",values:"20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",calcMode:"linear",repeatCount:"indefinite"})}),x.jsx("rect",{x:"15",width:"10",height:"80",rx:"3",children:x.jsx("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"80;55;33;5;75;23;73;33;12;14;60;80",calcMode:"linear",repeatCount:"indefinite"})}),x.jsx("rect",{x:"30",width:"10",height:"50",rx:"3",children:x.jsx("animate",{attributeName:"height",begin:"0s",dur:"1.4s",values:"50;34;78;23;56;23;34;76;80;54;21;50",calcMode:"linear",repeatCount:"indefinite"})}),x.jsx("rect",{x:"45",width:"10",height:"30",rx:"3",children:x.jsx("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"30;45;13;80;56;72;45;76;34;23;67;30",calcMode:"linear",repeatCount:"indefinite"})})]})]})}),D=242.776657104492,Tn=1.6,zn=ge`
12.5% {
  stroke-dasharray: ${D*.14}px, ${D}px;
  stroke-dashoffset: -${D*.11}px;
}
43.75% {
  stroke-dasharray: ${D*.35}px, ${D}px;
  stroke-dashoffset: -${D*.35}px;
}
100% {
  stroke-dasharray: ${D*.01}px, ${D}px;
  stroke-dashoffset: -${D*.99}px;
}
`;Q.path`
  stroke-dasharray: ${D*.01}px, ${D};
  stroke-dashoffset: 0;
  animation: ${zn} ${Tn}s linear infinite;
`;const Fn=ge`
to {
   transform: rotate(360deg);
 }
`;Q.svg`
  animation: ${Fn} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;Q.polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const Ln=ge`
to {
   stroke-dashoffset: 136;
 }
`;Q.polygon`
  stroke-dasharray: 17;
  animation: ${Ln} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;Q.svg`
  transform-origin: 50% 65%;
`;const Mn=t=>t.water.loading;let Bn={data:""},Wn=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||Bn,Gn=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Yn=/\/\*[^]*?\*\/|  +/g,Oe=/\n+/g,U=(t,e)=>{let r="",n="",a="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?r=s+" "+o+";":n+=s[1]=="f"?U(o,s):s+"{"+U(o,s[1]=="k"?"":e)+"}":typeof o=="object"?n+=U(o,e?e.replace(/([^,])+/g,i=>s.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,i):i?i+" "+c:c)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=U.p?U.p(s,o):s+":"+o+";")}return r+(e&&a?e+"{"+a+"}":a)+n},L={},cr=t=>{if(typeof t=="object"){let e="";for(let r in t)e+=r+cr(t[r]);return e}return t},Hn=(t,e,r,n,a)=>{let s=cr(t),o=L[s]||(L[s]=(c=>{let u=0,d=11;for(;u<c.length;)d=101*d+c.charCodeAt(u++)>>>0;return"go"+d})(s));if(!L[o]){let c=s!==t?t:(u=>{let d,f,h=[{}];for(;d=Gn.exec(u.replace(Yn,""));)d[4]?h.shift():d[3]?(f=d[3].replace(Oe," ").trim(),h.unshift(h[0][f]=h[0][f]||{})):h[0][d[1]]=d[2].replace(Oe," ").trim();return h[0]})(t);L[o]=U(a?{["@keyframes "+o]:c}:c,r?"":"."+o)}let i=r&&L.g?L.g:null;return r&&(L.g=L[o]),((c,u,d,f)=>{f?u.data=u.data.replace(f,c):u.data.indexOf(c)===-1&&(u.data=d?c+u.data:u.data+c)})(L[o],e,n,i),o},Un=(t,e,r)=>t.reduce((n,a,s)=>{let o=e[s];if(o&&o.call){let i=o(r),c=i&&i.props&&i.props.className||/^go/.test(i)&&i;o=c?"."+c:i&&typeof i=="object"?i.props?"":U(i,""):i===!1?"":i}return n+a+(o??"")},"");function Ht(t){let e=this||{},r=t.call?t(e.p):t;return Hn(r.unshift?r.raw?Un(r,[].slice.call(arguments,1),e.p):r.reduce((n,a)=>Object.assign(n,a&&a.call?a(e.p):a),{}):r,Wn(e.target),e.g,e.o,e.k)}let ur,ie,ce;Ht.bind({g:1});let B=Ht.bind({k:1});function qn(t,e,r,n){U.p=e,ur=t,ie=r,ce=n}function q(t,e){let r=this||{};return function(){let n=arguments;function a(s,o){let i=Object.assign({},s),c=i.className||a.className;r.p=Object.assign({theme:ie&&ie()},i),r.o=/ *go\d+/.test(c),i.className=Ht.apply(r,n)+(c?" "+c:"");let u=t;return t[0]&&(u=i.as||t,delete i.as),ce&&u[0]&&ce(i),ur(u,i)}return a}}var Zn=t=>typeof t=="function",Ft=(t,e)=>Zn(t)?t(e):t,Kn=(()=>{let t=0;return()=>(++t).toString()})(),dr=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),Vn=20,Pt=new Map,Jn=1e3,Re=t=>{if(Pt.has(t))return;let e=setTimeout(()=>{Pt.delete(t),X({type:4,toastId:t})},Jn);Pt.set(t,e)},Qn=t=>{let e=Pt.get(t);e&&clearTimeout(e)},ue=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,Vn)};case 1:return e.toast.id&&Qn(e.toast.id),{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:r}=e;return t.toasts.find(s=>s.id===r.id)?ue(t,{type:1,toast:r}):ue(t,{type:0,toast:r});case 3:let{toastId:n}=e;return n?Re(n):t.toasts.forEach(s=>{Re(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===n||n===void 0?{...s,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let a=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+a}))}}},Ot=[],Rt={toasts:[],pausedAt:void 0},X=t=>{Rt=ue(Rt,t),Ot.forEach(e=>{e(Rt)})},Xn={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ta=(t={})=>{let[e,r]=$.useState(Rt);$.useEffect(()=>(Ot.push(r),()=>{let a=Ot.indexOf(r);a>-1&&Ot.splice(a,1)}),[e]);let n=e.toasts.map(a=>{var s,o;return{...t,...t[a.type],...a,duration:a.duration||((s=t[a.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||Xn[a.type],style:{...t.style,...(o=t[a.type])==null?void 0:o.style,...a.style}}});return{...e,toasts:n}},ea=(t,e="blank",r)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...r,id:(r==null?void 0:r.id)||Kn()}),bt=t=>(e,r)=>{let n=ea(e,t,r);return X({type:2,toast:n}),n.id},O=(t,e)=>bt("blank")(t,e);O.error=bt("error");O.success=bt("success");O.loading=bt("loading");O.custom=bt("custom");O.dismiss=t=>{X({type:3,toastId:t})};O.remove=t=>X({type:4,toastId:t});O.promise=(t,e,r)=>{let n=O.loading(e.loading,{...r,...r==null?void 0:r.loading});return t.then(a=>(O.success(Ft(e.success,a),{id:n,...r,...r==null?void 0:r.success}),a)).catch(a=>{O.error(Ft(e.error,a),{id:n,...r,...r==null?void 0:r.error})}),t};var ra=(t,e)=>{X({type:1,toast:{id:t,height:e}})},na=()=>{X({type:5,time:Date.now()})},aa=t=>{let{toasts:e,pausedAt:r}=ta(t);$.useEffect(()=>{if(r)return;let s=Date.now(),o=e.map(i=>{if(i.duration===1/0)return;let c=(i.duration||0)+i.pauseDuration-(s-i.createdAt);if(c<0){i.visible&&O.dismiss(i.id);return}return setTimeout(()=>O.dismiss(i.id),c)});return()=>{o.forEach(i=>i&&clearTimeout(i))}},[e,r]);let n=$.useCallback(()=>{r&&X({type:6,time:Date.now()})},[r]),a=$.useCallback((s,o)=>{let{reverseOrder:i=!1,gutter:c=8,defaultPosition:u}=o||{},d=e.filter(l=>(l.position||u)===(s.position||u)&&l.height),f=d.findIndex(l=>l.id===s.id),h=d.filter((l,y)=>y<f&&l.visible).length;return d.filter(l=>l.visible).slice(...i?[h+1]:[0,h]).reduce((l,y)=>l+(y.height||0)+c,0)},[e]);return{toasts:e,handlers:{updateHeight:ra,startPause:na,endPause:n,calculateOffset:a}}},sa=B`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,oa=B`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ia=B`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ca=q("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${sa} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${oa} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ia} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ua=B`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,da=q("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${ua} 1s linear infinite;
`,la=B`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,pa=B`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,fa=q("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${la} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${pa} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ha=q("div")`
  position: absolute;
`,ga=q("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ma=B`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ya=q("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ma} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ba=({toast:t})=>{let{icon:e,type:r,iconTheme:n}=t;return e!==void 0?typeof e=="string"?$.createElement(ya,null,e):e:r==="blank"?null:$.createElement(ga,null,$.createElement(da,{...n}),r!=="loading"&&$.createElement(ha,null,r==="error"?$.createElement(ca,{...n}):$.createElement(fa,{...n})))},va=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,xa=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,$a="0%{opacity:0;} 100%{opacity:1;}",wa="0%{opacity:1;} 100%{opacity:0;}",Sa=q("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ka=q("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ea=(t,e)=>{let r=t.includes("top")?1:-1,[n,a]=dr()?[$a,wa]:[va(r),xa(r)];return{animation:e?`${B(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${B(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ca=$.memo(({toast:t,position:e,style:r,children:n})=>{let a=t.height?Ea(t.position||e||"top-center",t.visible):{opacity:0},s=$.createElement(ba,{toast:t}),o=$.createElement(ka,{...t.ariaProps},Ft(t.message,t));return $.createElement(Sa,{className:t.className,style:{...a,...r,...t.style}},typeof n=="function"?n({icon:s,message:o}):$.createElement($.Fragment,null,s,o))});qn($.createElement);var _a=({id:t,className:e,style:r,onHeightUpdate:n,children:a})=>{let s=$.useCallback(o=>{if(o){let i=()=>{let c=o.getBoundingClientRect().height;n(t,c)};i(),new MutationObserver(i).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,n]);return $.createElement("div",{ref:s,className:e,style:r},a)},Aa=(t,e)=>{let r=t.includes("top"),n=r?{top:0}:{bottom:0},a=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:dr()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(r?1:-1)}px)`,...n,...a}},Ia=Ht`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ct=16,ja=({reverseOrder:t,position:e="top-center",toastOptions:r,gutter:n,children:a,containerStyle:s,containerClassName:o})=>{let{toasts:i,handlers:c}=aa(r);return $.createElement("div",{style:{position:"fixed",zIndex:9999,top:Ct,left:Ct,right:Ct,bottom:Ct,pointerEvents:"none",...s},className:o,onMouseEnter:c.startPause,onMouseLeave:c.endPause},i.map(u=>{let d=u.position||e,f=c.calculateOffset(u,{reverseOrder:t,gutter:n,defaultPosition:e}),h=Aa(d,f);return $.createElement(_a,{id:u.id,key:u.id,onHeightUpdate:c.updateHeight,className:u.visible?Ia:"",style:h},u.type==="custom"?Ft(u.message,u):a?a(u):$.createElement(Ca,{toast:u,position:d}))}))};const Ra=()=>{const t=br(Mn);return x.jsxs("div",{className:jr.homePageWrapper,children:[x.jsx(Ar,{}),x.jsx(vr,{}),t&&x.jsx(Dn,{height:"80",width:"80",radius:"9",color:"green",ariaLabel:"loading",wrapperStyle:!0,wrapperClass:!0}),x.jsx(ja,{position:"top-right",reverseOrder:!1})]})};export{Ra as default};

import{j as u,g as mn,r as s,a as hn}from"./index-CUsnnIhm.js";import{I as pe}from"./Icon-D-0h53JH.js";import{L as gn}from"./Logo-Bbwazig_.js";const yn="_container_90evo_1",bn="_waterCalendarcontainer_90evo_10",Ft={container:yn,waterCalendarcontainer:bn},_n="_calendar_1e871_1",Sn="_btn_1e871_17",En="_calendarday_1e871_27",Cn="_currentday_1e871_41",Mn="_percent_1e871_57",Nn="_disabledStyle_1e871_64",xn="_hidden_1e871_68",Be={calendar:_n,btn:Sn,calendarday:En,currentday:Cn,percent:Mn,disabledStyle:Nn,hidden:xn},pn=({year:e,month:t,currentDay:n,waterQuantity:r})=>{const o=new Date(e,t+1,0).getDate(),a=Array.from({length:o},(c,f)=>f+1);return console.log(r),console.log(n),u.jsx("ul",{className:Be.calendar,children:a.map(c=>u.jsxs("li",{children:[u.jsx("button",{className:c===n?Be.currentday:Be.calendarday,disabled:c>n,children:c}),u.jsxs("p",{className:c<n?Be.percent:Be.hidden,children:[r,"%"]})]},c))})},Rn="_container_1ahj4_1",jn="_title_1ahj4_8",On="_blockcalendar_1ahj4_14",wn="_btn_1ahj4_20",An="_schedule_1ahj4_30",Me={container:Rn,title:jn,blockcalendar:On,btn:wn,schedule:An},Pn=({waterQuantity:e,currentDate:t,monthNames:n,handlePreviousMonth:r,handleNextMonth:o})=>u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:Me.title,children:[u.jsx("h2",{children:"Month"}),u.jsxs("div",{className:Me.blockcalendar,children:[u.jsx("button",{className:Me.btn,onClick:r,children:u.jsx(pe,{iconName:"left",width:4.5,height:9,styles:Me.btn})}),u.jsxs("p",{children:[n[t.month],", ",t.year]}),u.jsx("button",{className:Me.btn,onClick:o,children:u.jsx(pe,{iconName:"right",width:4.5,height:9,styles:Me.btn})}),u.jsx("button",{className:Me.btn,children:u.jsx(pe,{iconName:"schedule",styles:Me.schedule,height:24,width:24})})]})]}),t.year!==null&&t.month!==null?u.jsx(pn,{year:t.year,month:t.month,currentDay:t.day,waterQuantity:e}):u.jsx("p",{children:"Loading..."})]}),kn="_dailyNorma_1qvbx_1",Tn="_waterDailyNorma_1qvbx_15",Dn="_highlight_1qvbx_29",ft={dailyNorma:kn,waterDailyNorma:Tn,highlight:Dn},In=({dailyNorma:e})=>u.jsx("div",{className:ft.dailyNorma,children:u.jsxs("div",{className:ft.waterDailyNorma,children:[u.jsxs("span",{className:ft.highlight,children:[e," L"]}),u.jsx("p",{children:"My daily norma"})]})});function Re(e){"@babel/helpers - typeof";return Re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Re(e)}function Fn(e,t){if(Re(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Re(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $n(e){var t=Fn(e,"string");return Re(t)=="symbol"?t:t+""}function J(e,t,n){return(t=$n(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$t(Object(n),!0).forEach(function(r){J(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$t(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ht(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Ln(e){if(Array.isArray(e))return ht(e)}function Un(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qt(e,t){if(e){if(typeof e=="string")return ht(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ht(e,t):void 0}}function Hn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ge(e){return Ln(e)||Un(e)||qt(e)||Hn()}function Wn(e){if(Array.isArray(e))return e}function Kn(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,a,c,f=[],S=!0,v=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;S=!1}else for(;!(S=(r=a.call(n)).done)&&(f.push(r.value),f.length!==t);S=!0);}catch(y){v=!0,o=y}finally{try{if(!S&&n.return!=null&&(c=n.return(),Object(c)!==c))return}finally{if(v)throw o}}return f}}function Bn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(e,t){return Wn(e)||Kn(e,t)||qt(e,t)||Bn()}var Xt={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var a="",c=0;c<arguments.length;c++){var f=arguments[c];f&&(a=o(a,r(f)))}return a}function r(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return n.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var c="";for(var f in a)t.call(a,f)&&a[f]&&(c=o(c,f));return c}function o(a,c){return c?a?a+" "+c:a+c:a}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Xt);var Yn=Xt.exports;const Ae=mn(Yn);function $e(e){var t=s.useRef();t.current=e;var n=s.useCallback(function(){for(var r,o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(r=t.current)===null||r===void 0?void 0:r.call.apply(r,[t].concat(a))},[]);return n}function Gn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var Lt=Gn()?s.useLayoutEffect:s.useEffect,qn=function(t,n){var r=s.useRef(!0);Lt(function(){return t(r.current)},n),Lt(function(){return r.current=!1,function(){r.current=!0}},[])},Ut=function(t,n){qn(function(r){if(!r)return t()},n)};function Ht(e){var t=s.useRef(!1),n=s.useState(e),r=B(n,2),o=r[0],a=r[1];s.useEffect(function(){return t.current=!1,function(){t.current=!0}},[]);function c(f,S){S&&t.current||a(f)}return[o,c]}function dt(e){return e!==void 0}function Xn(e,t){var n=t||{},r=n.defaultValue,o=n.value,a=n.onChange,c=n.postState,f=Ht(function(){return dt(o)?o:dt(r)?typeof r=="function"?r():r:typeof e=="function"?e():e}),S=B(f,2),v=S[0],y=S[1],_=o!==void 0?o:v,N=c?c(_):_,E=$e(a),M=Ht([_]),m=B(M,2),d=m[0],g=m[1];Ut(function(){var b=d[0];v!==b&&E(v,b)},[d]),Ut(function(){dt(o)||y(o)},[o]);var l=$e(function(b,x){y(b,x),g([_],x)});return[N,l]}var Vt={exports:{}},R={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bt=Symbol.for("react.element"),_t=Symbol.for("react.portal"),Je=Symbol.for("react.fragment"),et=Symbol.for("react.strict_mode"),tt=Symbol.for("react.profiler"),nt=Symbol.for("react.provider"),rt=Symbol.for("react.context"),Vn=Symbol.for("react.server_context"),at=Symbol.for("react.forward_ref"),ot=Symbol.for("react.suspense"),st=Symbol.for("react.suspense_list"),ct=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),zn=Symbol.for("react.offscreen"),zt;zt=Symbol.for("react.module.reference");function ee(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case bt:switch(e=e.type,e){case Je:case tt:case et:case ot:case st:return e;default:switch(e=e&&e.$$typeof,e){case Vn:case rt:case at:case lt:case ct:case nt:return e;default:return t}}case _t:return t}}}R.ContextConsumer=rt;R.ContextProvider=nt;R.Element=bt;R.ForwardRef=at;R.Fragment=Je;R.Lazy=lt;R.Memo=ct;R.Portal=_t;R.Profiler=tt;R.StrictMode=et;R.Suspense=ot;R.SuspenseList=st;R.isAsyncMode=function(){return!1};R.isConcurrentMode=function(){return!1};R.isContextConsumer=function(e){return ee(e)===rt};R.isContextProvider=function(e){return ee(e)===nt};R.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===bt};R.isForwardRef=function(e){return ee(e)===at};R.isFragment=function(e){return ee(e)===Je};R.isLazy=function(e){return ee(e)===lt};R.isMemo=function(e){return ee(e)===ct};R.isPortal=function(e){return ee(e)===_t};R.isProfiler=function(e){return ee(e)===tt};R.isStrictMode=function(e){return ee(e)===et};R.isSuspense=function(e){return ee(e)===ot};R.isSuspenseList=function(e){return ee(e)===st};R.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Je||e===tt||e===et||e===ot||e===st||e===zn||typeof e=="object"&&e!==null&&(e.$$typeof===lt||e.$$typeof===ct||e.$$typeof===nt||e.$$typeof===rt||e.$$typeof===at||e.$$typeof===zt||e.getModuleId!==void 0)};R.typeOf=ee;Vt.exports=R;var Qn=Vt.exports;function Wt(e){return s.isValidElement(e)&&!Qn.isFragment(e)}Number(s.version.split(".")[0])>=19;var gt={},Zn=function(t){};function Jn(e,t){}function er(e,t){}function tr(){gt={}}function Qt(e,t,n){!t&&!gt[n]&&(e(!1,n),gt[n]=!0)}function Ge(e,t){Qt(Jn,e,t)}function nr(e,t){Qt(er,e,t)}Ge.preMessage=Zn;Ge.resetWarned=tr;Ge.noteOnce=nr;function rr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=new Set;function o(a,c){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,S=r.has(a);if(Ge(!S,"Warning: There may be circular references"),S)return!1;if(a===c)return!0;if(n&&f>1)return!1;r.add(a);var v=f+1;if(Array.isArray(a)){if(!Array.isArray(c)||a.length!==c.length)return!1;for(var y=0;y<a.length;y++)if(!o(a[y],c[y],v))return!1;return!0}if(a&&c&&Re(a)==="object"&&Re(c)==="object"){var _=Object.keys(a);return _.length!==Object.keys(c).length?!1:_.every(function(N){return o(a[N],c[N],v)})}return!1}return o(e,t)}function Ye(){return Ye=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ye.apply(null,arguments)}function ar(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}function Zt(e,t){if(e==null)return{};var n,r,o=ar(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function yt(e,t,n){return(e-t)/(n-t)}function St(e,t,n,r){var o=yt(t,n,r),a={};switch(e){case"rtl":a.right="".concat(o*100,"%"),a.transform="translateX(50%)";break;case"btt":a.bottom="".concat(o*100,"%"),a.transform="translateY(50%)";break;case"ttb":a.top="".concat(o*100,"%"),a.transform="translateY(-50%)";break;default:a.left="".concat(o*100,"%"),a.transform="translateX(-50%)";break}return a}function Fe(e,t){return Array.isArray(e)?e[t]:e}var i={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(t){var n=t.keyCode;if(t.altKey&&!t.ctrlKey||t.metaKey||n>=i.F1&&n<=i.F12)return!1;switch(n){case i.ALT:case i.CAPS_LOCK:case i.CONTEXT_MENU:case i.CTRL:case i.DOWN:case i.END:case i.ESC:case i.HOME:case i.INSERT:case i.LEFT:case i.MAC_FF_META:case i.META:case i.NUMLOCK:case i.NUM_CENTER:case i.PAGE_DOWN:case i.PAGE_UP:case i.PAUSE:case i.PRINT_SCREEN:case i.RIGHT:case i.SHIFT:case i.UP:case i.WIN_KEY:case i.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(t){if(t>=i.ZERO&&t<=i.NINE||t>=i.NUM_ZERO&&t<=i.NUM_MULTIPLY||t>=i.A&&t<=i.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&t===0)return!0;switch(t){case i.SPACE:case i.QUESTION_MARK:case i.NUM_PLUS:case i.NUM_MINUS:case i.NUM_PERIOD:case i.NUM_DIVISION:case i.SEMICOLON:case i.DASH:case i.EQUALS:case i.COMMA:case i.PERIOD:case i.SLASH:case i.APOSTROPHE:case i.SINGLE_QUOTE:case i.OPEN_SQUARE_BRACKET:case i.BACKSLASH:case i.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},Pe=s.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0,styles:{},classNames:{}}),or=["prefixCls","value","valueIndex","onStartMove","onDelete","style","render","dragging","draggingDelete","onOffsetChange","onChangeComplete","onFocus","onMouseEnter"],Kt=s.forwardRef(function(e,t){var n=e.prefixCls,r=e.value,o=e.valueIndex,a=e.onStartMove,c=e.onDelete,f=e.style,S=e.render,v=e.dragging,y=e.draggingDelete,_=e.onOffsetChange,N=e.onChangeComplete,E=e.onFocus,M=e.onMouseEnter,m=Zt(e,or),d=s.useContext(Pe),g=d.min,l=d.max,b=d.direction,x=d.disabled,P=d.keyboard,I=d.range,q=d.tabIndex,L=d.ariaLabelForHandle,k=d.ariaLabelledByForHandle,C=d.ariaValueTextFormatterForHandle,j=d.styles,w=d.classNames,K="".concat(n,"-handle"),Q=function(A){x||a(A,o)},Y=function(A){E==null||E(A,o)},X=function(A){M(A,o)},te=function(A){if(!x&&P){var T=null;switch(A.which||A.keyCode){case i.LEFT:T=b==="ltr"||b==="btt"?-1:1;break;case i.RIGHT:T=b==="ltr"||b==="btt"?1:-1;break;case i.UP:T=b!=="ttb"?1:-1;break;case i.DOWN:T=b!=="ttb"?-1:1;break;case i.HOME:T="min";break;case i.END:T="max";break;case i.PAGE_UP:T=2;break;case i.PAGE_DOWN:T=-2;break;case i.BACKSPACE:case i.DELETE:c(o);break}T!==null&&(A.preventDefault(),_(T,o))}},ye=function(A){switch(A.which||A.keyCode){case i.LEFT:case i.RIGHT:case i.UP:case i.DOWN:case i.HOME:case i.END:case i.PAGE_UP:case i.PAGE_DOWN:N==null||N();break}},ke=St(b,r,g,l),je={};if(o!==null){var z;je={tabIndex:x?null:Fe(q,o),role:"slider","aria-valuemin":g,"aria-valuemax":l,"aria-valuenow":r,"aria-disabled":x,"aria-label":Fe(L,o),"aria-labelledby":Fe(k,o),"aria-valuetext":(z=Fe(C,o))===null||z===void 0?void 0:z(r),"aria-orientation":b==="ltr"||b==="rtl"?"horizontal":"vertical",onMouseDown:Q,onTouchStart:Q,onFocus:Y,onMouseEnter:X,onKeyDown:te,onKeyUp:ye}}var U=s.createElement("div",Ye({ref:t,className:Ae(K,J(J(J({},"".concat(K,"-").concat(o+1),o!==null&&I),"".concat(K,"-dragging"),v),"".concat(K,"-dragging-delete"),y),w.handle),style:G(G(G({},ke),f),j.handle)},je,m));return S&&(U=S(U,{index:o,prefixCls:n,value:r,dragging:v,draggingDelete:y})),U}),sr=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","activeHandleRender","draggingIndex","draggingDelete","onFocus"],cr=s.forwardRef(function(e,t){var n=e.prefixCls,r=e.style,o=e.onStartMove,a=e.onOffsetChange,c=e.values,f=e.handleRender,S=e.activeHandleRender,v=e.draggingIndex,y=e.draggingDelete,_=e.onFocus,N=Zt(e,sr),E=s.useRef({}),M=s.useState(!1),m=B(M,2),d=m[0],g=m[1],l=s.useState(-1),b=B(l,2),x=b[0],P=b[1],I=function(j){P(j),g(!0)},q=function(j,w){I(w),_==null||_(j)},L=function(j,w){I(w)};s.useImperativeHandle(t,function(){return{focus:function(j){var w;(w=E.current[j])===null||w===void 0||w.focus()},hideHelp:function(){hn.flushSync(function(){g(!1)})}}});var k=G({prefixCls:n,onStartMove:o,onOffsetChange:a,render:f,onFocus:q,onMouseEnter:L},N);return s.createElement(s.Fragment,null,c.map(function(C,j){var w=v===j;return s.createElement(Kt,Ye({ref:function(Q){Q?E.current[j]=Q:delete E.current[j]},dragging:w,draggingDelete:w&&y,style:Fe(r,j),key:j,value:C,valueIndex:j},k))}),S&&d&&s.createElement(Kt,Ye({key:"a11y"},k,{value:c[x],valueIndex:null,dragging:v!==-1,draggingDelete:y,render:S,style:{pointerEvents:"none"},tabIndex:null,"aria-hidden":!0})))}),lr=function(t){var n=t.prefixCls,r=t.style,o=t.children,a=t.value,c=t.onClick,f=s.useContext(Pe),S=f.min,v=f.max,y=f.direction,_=f.includedStart,N=f.includedEnd,E=f.included,M="".concat(n,"-text"),m=St(y,a,S,v);return s.createElement("span",{className:Ae(M,J({},"".concat(M,"-active"),E&&_<=a&&a<=N)),style:G(G({},m),r),onMouseDown:function(g){g.stopPropagation()},onClick:function(){c(a)}},o)},ir=function(t){var n=t.prefixCls,r=t.marks,o=t.onClick,a="".concat(n,"-mark");return r.length?s.createElement("div",{className:a},r.map(function(c){var f=c.value,S=c.style,v=c.label;return s.createElement(lr,{key:f,prefixCls:a,style:S,value:f,onClick:o},v)})):null},ur=function(t){var n=t.prefixCls,r=t.value,o=t.style,a=t.activeStyle,c=s.useContext(Pe),f=c.min,S=c.max,v=c.direction,y=c.included,_=c.includedStart,N=c.includedEnd,E="".concat(n,"-dot"),M=y&&_<=r&&r<=N,m=G(G({},St(v,r,f,S)),typeof o=="function"?o(r):o);return M&&(m=G(G({},m),typeof a=="function"?a(r):a)),s.createElement("span",{className:Ae(E,J({},"".concat(E,"-active"),M)),style:m})},fr=function(t){var n=t.prefixCls,r=t.marks,o=t.dots,a=t.style,c=t.activeStyle,f=s.useContext(Pe),S=f.min,v=f.max,y=f.step,_=s.useMemo(function(){var N=new Set;if(r.forEach(function(M){N.add(M.value)}),o&&y!==null)for(var E=S;E<=v;)N.add(E),E+=y;return Array.from(N)},[S,v,y,o,r]);return s.createElement("div",{className:"".concat(n,"-step")},_.map(function(N){return s.createElement(ur,{prefixCls:n,key:N,value:N,style:a,activeStyle:c})}))},Bt=function(t){var n=t.prefixCls,r=t.style,o=t.start,a=t.end,c=t.index,f=t.onStartMove,S=t.replaceCls,v=s.useContext(Pe),y=v.direction,_=v.min,N=v.max,E=v.disabled,M=v.range,m=v.classNames,d="".concat(n,"-track"),g=yt(o,_,N),l=yt(a,_,N),b=function(q){!E&&f&&f(q,-1)},x={};switch(y){case"rtl":x.right="".concat(g*100,"%"),x.width="".concat(l*100-g*100,"%");break;case"btt":x.bottom="".concat(g*100,"%"),x.height="".concat(l*100-g*100,"%");break;case"ttb":x.top="".concat(g*100,"%"),x.height="".concat(l*100-g*100,"%");break;default:x.left="".concat(g*100,"%"),x.width="".concat(l*100-g*100,"%")}var P=S||Ae(d,J(J({},"".concat(d,"-").concat(c+1),c!==null&&M),"".concat(n,"-track-draggable"),f),m.track);return s.createElement("div",{className:P,style:G(G({},x),r),onMouseDown:b,onTouchStart:b})},dr=function(t){var n=t.prefixCls,r=t.style,o=t.values,a=t.startPoint,c=t.onStartMove,f=s.useContext(Pe),S=f.included,v=f.range,y=f.min,_=f.styles,N=f.classNames,E=s.useMemo(function(){if(!v){if(o.length===0)return[];var m=a??y,d=o[0];return[{start:Math.min(m,d),end:Math.max(m,d)}]}for(var g=[],l=0;l<o.length-1;l+=1)g.push({start:o[l],end:o[l+1]});return g},[o,v,a,y]);if(!S)return null;var M=N.tracks||_.tracks?s.createElement(Bt,{index:null,prefixCls:n,start:E[0].start,end:E[E.length-1].end,replaceCls:Ae(N.tracks,"".concat(n,"-tracks")),style:_.tracks}):null;return s.createElement(s.Fragment,null,M,E.map(function(m,d){var g=m.start,l=m.end;return s.createElement(Bt,{index:d,prefixCls:n,style:G(G({},Fe(r,d)),_.track),start:g,end:l,key:d,onStartMove:c})}))},vr=130;function Yt(e){var t="touches"in e?e.touches[0]:e;return{pageX:t.pageX,pageY:t.pageY}}function mr(e,t,n,r,o,a,c,f,S,v,y){var _=s.useState(null),N=B(_,2),E=N[0],M=N[1],m=s.useState(-1),d=B(m,2),g=d[0],l=d[1],b=s.useState(!1),x=B(b,2),P=x[0],I=x[1],q=s.useState(n),L=B(q,2),k=L[0],C=L[1],j=s.useState(n),w=B(j,2),K=w[0],Q=w[1],Y=s.useRef(null),X=s.useRef(null);s.useLayoutEffect(function(){g===-1&&C(n)},[n,g]),s.useEffect(function(){return function(){document.removeEventListener("mousemove",Y.current),document.removeEventListener("mouseup",X.current),document.removeEventListener("touchmove",Y.current),document.removeEventListener("touchend",X.current)}},[]);var te=function(U,F,A){if(k.some(function($,H){return $!==U[H]})||A){F!==void 0&&M(F),C(U);var T=U;A&&(T=U.filter(function($,H){return H!==g})),c(T)}},ye=$e(function(z,U,F){if(z===-1){var A=K[0],T=K[K.length-1],$=r-A,H=o-T,ne=U*(o-r);ne=Math.max(ne,$),ne=Math.min(ne,H);var Le=a(A+ne);ne=Le-A;var be=K.map(function(ue){return ue+ne});te(be)}else{var ce=(o-r)*U,le=ge(k);le[z]=K[z];var ie=S(le,ce,z,"dist");te(ie.values,ie.value,F)}}),ke=function(U,F,A){U.stopPropagation();var T=A||n,$=T[F];l(F),M($),Q(T),C(T),I(!1);var H=Yt(U),ne=H.pageX,Le=H.pageY,be=!1,ce=function(ue){ue.preventDefault();var Ue=Yt(ue),qe=Ue.pageX,re=Ue.pageY,fe=qe-ne,de=re-Le,Xe=e.current.getBoundingClientRect(),_e=Xe.width,ae=Xe.height,oe,ve;switch(t){case"btt":oe=-de/ae,ve=fe;break;case"ttb":oe=de/ae,ve=fe;break;case"rtl":oe=-fe/_e,ve=de;break;default:oe=fe/_e,ve=de}be=v?Math.abs(ve)>vr&&y<k.length:!1,I(be),ye(F,oe,be)},le=function ie(ue){ue.preventDefault(),document.removeEventListener("mouseup",ie),document.removeEventListener("mousemove",ce),document.removeEventListener("touchend",ie),document.removeEventListener("touchmove",ce),Y.current=null,X.current=null,f(be),l(-1),I(!1)};document.addEventListener("mouseup",le),document.addEventListener("mousemove",ce),document.addEventListener("touchend",le),document.addEventListener("touchmove",ce),Y.current=ce,X.current=le},je=s.useMemo(function(){var z=ge(n).sort(function($,H){return $-H}),U=ge(k).sort(function($,H){return $-H}),F={};U.forEach(function($){F[$]=(F[$]||0)+1}),z.forEach(function($){F[$]=(F[$]||0)-1});var A=v?1:0,T=Object.values(F).reduce(function($,H){return $+H},0);return T<=A?k:n},[n,k,v]);return[g,E,P,je,ke]}function hr(e,t,n,r,o,a){var c=s.useCallback(function(E){return Math.max(e,Math.min(t,E))},[e,t]),f=s.useCallback(function(E){if(n!==null){var M=e+Math.round((c(E)-e)/n)*n,m=function(b){return(String(b).split(".")[1]||"").length},d=Math.max(m(n),m(t),m(e)),g=Number(M.toFixed(d));return e<=g&&g<=t?g:null}return null},[n,e,t,c]),S=s.useCallback(function(E){var M=c(E),m=r.map(function(l){return l.value});n!==null&&m.push(f(E)),m.push(e,t);var d=m[0],g=t-e;return m.forEach(function(l){var b=Math.abs(M-l);b<=g&&(d=l,g=b)}),d},[e,t,r,n,c,f]),v=function E(M,m,d){var g=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit";if(typeof m=="number"){var l,b=M[d],x=b+m,P=[];r.forEach(function(C){P.push(C.value)}),P.push(e,t),P.push(f(b));var I=m>0?1:-1;g==="unit"?P.push(f(b+I*n)):P.push(f(x)),P=P.filter(function(C){return C!==null}).filter(function(C){return m<0?C<=b:C>=b}),g==="unit"&&(P=P.filter(function(C){return C!==b}));var q=g==="unit"?b:x;l=P[0];var L=Math.abs(l-q);if(P.forEach(function(C){var j=Math.abs(C-q);j<L&&(l=C,L=j)}),l===void 0)return m<0?e:t;if(g==="dist")return l;if(Math.abs(m)>1){var k=ge(M);return k[d]=l,E(k,m-I,d,g)}return l}else{if(m==="min")return e;if(m==="max")return t}},y=function(M,m,d){var g=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",l=M[d],b=v(M,m,d,g);return{value:b,changed:b!==l}},_=function(M){return a===null&&M===0||typeof a=="number"&&M<a},N=function(M,m,d){var g=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",l=M.map(S),b=l[d],x=v(l,m,d,g);if(l[d]=x,o===!1){var P=a||0;d>0&&l[d-1]!==b&&(l[d]=Math.max(l[d],l[d-1]+P)),d<l.length-1&&l[d+1]!==b&&(l[d]=Math.min(l[d],l[d+1]-P))}else if(typeof a=="number"||a===null){for(var I=d+1;I<l.length;I+=1)for(var q=!0;_(l[I]-l[I-1])&&q;){var L=y(l,1,I);l[I]=L.value,q=L.changed}for(var k=d;k>0;k-=1)for(var C=!0;_(l[k]-l[k-1])&&C;){var j=y(l,-1,k-1);l[k-1]=j.value,C=j.changed}for(var w=l.length-1;w>0;w-=1)for(var K=!0;_(l[w]-l[w-1])&&K;){var Q=y(l,-1,w-1);l[w-1]=Q.value,K=Q.changed}for(var Y=0;Y<l.length-1;Y+=1)for(var X=!0;_(l[Y+1]-l[Y])&&X;){var te=y(l,1,Y+1);l[Y+1]=te.value,X=te.changed}}return{value:l[d],values:l}};return[S,N]}function gr(e){return s.useMemo(function(){if(e===!0||!e)return[!!e,!1,!1,0];var t=e.editable,n=e.draggableTrack,r=e.minCount,o=e.maxCount;return[!0,t,!t&&n,r||0,o]},[e])}var yr=s.forwardRef(function(e,t){var n=e.prefixCls,r=n===void 0?"rc-slider":n,o=e.className,a=e.style,c=e.classNames,f=e.styles,S=e.disabled,v=S===void 0?!1:S,y=e.keyboard,_=y===void 0?!0:y,N=e.autoFocus,E=e.onFocus,M=e.onBlur,m=e.min,d=m===void 0?0:m,g=e.max,l=g===void 0?100:g,b=e.step,x=b===void 0?1:b,P=e.value,I=e.defaultValue,q=e.range,L=e.count,k=e.onChange,C=e.onBeforeChange,j=e.onAfterChange,w=e.onChangeComplete,K=e.allowCross,Q=K===void 0?!0:K,Y=e.pushable,X=Y===void 0?!1:Y,te=e.reverse,ye=e.vertical,ke=e.included,je=ke===void 0?!0:ke,z=e.startPoint,U=e.trackStyle,F=e.handleStyle,A=e.railStyle,T=e.dotStyle,$=e.activeDotStyle,H=e.marks,ne=e.dots,Le=e.handleRender,be=e.activeHandleRender,ce=e.track,le=e.tabIndex,ie=le===void 0?0:le,ue=e.ariaLabelForHandle,Ue=e.ariaLabelledByForHandle,qe=e.ariaValueTextFormatterForHandle,re=s.useRef(null),fe=s.useRef(null),de=s.useMemo(function(){return ye?te?"ttb":"btt":te?"rtl":"ltr"},[te,ye]),Xe=gr(q),_e=B(Xe,5),ae=_e[0],oe=_e[1],ve=_e[2],Et=_e[3],Ct=_e[4],Z=s.useMemo(function(){return isFinite(d)?d:0},[d]),Te=s.useMemo(function(){return isFinite(l)?l:100},[l]),Oe=s.useMemo(function(){return x!==null&&x<=0?1:x},[x]),Jt=s.useMemo(function(){return typeof X=="boolean"?X?Oe:!1:X>=0?X:!1},[X,Oe]),Ve=s.useMemo(function(){return Object.keys(H||{}).map(function(p){var h=H[p],O={value:Number(p)};return h&&Re(h)==="object"&&!s.isValidElement(h)&&("label"in h||"style"in h)?(O.style=h.style,O.label=h.label):O.label=h,O}).filter(function(p){var h=p.label;return h||typeof h=="number"}).sort(function(p,h){return p.value-h.value})},[H]),en=hr(Z,Te,Oe,Ve,Q,Jt),Mt=B(en,2),ze=Mt[0],Nt=Mt[1],tn=Xn(I,{value:P}),xt=B(tn,2),Se=xt[0],nn=xt[1],V=s.useMemo(function(){var p=Se==null?[]:Array.isArray(Se)?Se:[Se],h=B(p,1),O=h[0],D=O===void 0?Z:O,W=Se===null?[]:[D];if(ae){if(W=ge(p),L||Se===void 0){var Ee=L>=0?L+1:2;for(W=W.slice(0,Ee);W.length<Ee;){var me;W.push((me=W[W.length-1])!==null&&me!==void 0?me:Z)}}W.sort(function(he,se){return he-se})}return W.forEach(function(he,se){W[se]=ze(he)}),W},[Se,ae,Z,L,ze]),De=function(h){return ae?h:h[0]},Qe=$e(function(p){var h=ge(p).sort(function(O,D){return O-D});k&&!rr(h,V,!0)&&k(De(h)),nn(h)}),pt=$e(function(p){p&&re.current.hideHelp();var h=De(V);j==null||j(h),Ge(!j,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),w==null||w(h)}),rn=function(h){if(!(v||!oe||V.length<=Et)){var O=ge(V);O.splice(h,1),C==null||C(De(O)),Qe(O);var D=Math.max(0,h-1);re.current.hideHelp(),re.current.focus(D)}},an=mr(fe,de,V,Z,Te,ze,Qe,pt,Nt,oe,Et),He=B(an,5),Rt=He[0],on=He[1],sn=He[2],it=He[3],jt=He[4],Ot=function(h,O){if(!v){var D=ge(V),W=0,Ee=0,me=Te-Z;V.forEach(function(Ke,Ce){var Ze=Math.abs(h-Ke);Ze<=me&&(me=Ze,W=Ce),Ke<h&&(Ee=Ce)});var he=W;if(oe&&me!==0&&(!Ct||V.length<Ct)?(D.splice(Ee+1,0,h),he=Ee+1):D[W]=h,ae&&!V.length&&L===void 0&&D.push(h),C==null||C(De(D)),Qe(D),O){var se,Ie;(se=document.activeElement)===null||se===void 0||(Ie=se.blur)===null||Ie===void 0||Ie.call(se),re.current.focus(he),jt(O,he,D)}}},cn=function(h){h.preventDefault();var O=fe.current.getBoundingClientRect(),D=O.width,W=O.height,Ee=O.left,me=O.top,he=O.bottom,se=O.right,Ie=h.clientX,Ke=h.clientY,Ce;switch(de){case"btt":Ce=(he-Ke)/W;break;case"ttb":Ce=(Ke-me)/W;break;case"rtl":Ce=(se-Ie)/D;break;default:Ce=(Ie-Ee)/D}var Ze=Z+Ce*(Te-Z);Ot(ze(Ze),h)},ln=s.useState(null),wt=B(ln,2),ut=wt[0],At=wt[1],un=function(h,O){if(!v){var D=Nt(V,h,O);C==null||C(De(V)),Qe(D.values),At(D.value)}};s.useEffect(function(){if(ut!==null){var p=V.indexOf(ut);p>=0&&re.current.focus(p)}At(null)},[ut]);var fn=s.useMemo(function(){return ve&&Oe===null?!1:ve},[ve,Oe]),Pt=$e(function(p,h){jt(p,h),C==null||C(De(V))}),kt=Rt!==-1;s.useEffect(function(){if(!kt){var p=V.lastIndexOf(on);re.current.focus(p)}},[kt]);var We=s.useMemo(function(){return ge(it).sort(function(p,h){return p-h})},[it]),dn=s.useMemo(function(){return ae?[We[0],We[We.length-1]]:[Z,We[0]]},[We,ae,Z]),Tt=B(dn,2),Dt=Tt[0],It=Tt[1];s.useImperativeHandle(t,function(){return{focus:function(){re.current.focus(0)},blur:function(){var h,O=document,D=O.activeElement;(h=fe.current)!==null&&h!==void 0&&h.contains(D)&&(D==null||D.blur())}}}),s.useEffect(function(){N&&re.current.focus(0)},[]);var vn=s.useMemo(function(){return{min:Z,max:Te,direction:de,disabled:v,keyboard:_,step:Oe,included:je,includedStart:Dt,includedEnd:It,range:ae,tabIndex:ie,ariaLabelForHandle:ue,ariaLabelledByForHandle:Ue,ariaValueTextFormatterForHandle:qe,styles:f||{},classNames:c||{}}},[Z,Te,de,v,_,Oe,je,Dt,It,ae,ie,ue,Ue,qe,f,c]);return s.createElement(Pe.Provider,{value:vn},s.createElement("div",{ref:fe,className:Ae(r,o,J(J(J(J({},"".concat(r,"-disabled"),v),"".concat(r,"-vertical"),ye),"".concat(r,"-horizontal"),!ye),"".concat(r,"-with-marks"),Ve.length)),style:a,onMouseDown:cn},s.createElement("div",{className:Ae("".concat(r,"-rail"),c==null?void 0:c.rail),style:G(G({},A),f==null?void 0:f.rail)}),ce!==!1&&s.createElement(dr,{prefixCls:r,style:U,values:V,startPoint:z,onStartMove:fn?Pt:void 0}),s.createElement(fr,{prefixCls:r,marks:Ve,dots:ne,style:T,activeStyle:$}),s.createElement(cr,{ref:re,prefixCls:r,style:F,values:it,draggingIndex:Rt,draggingDelete:sn,onStartMove:Pt,onOffsetChange:un,onFocus:E,onBlur:M,handleRender:Le,activeHandleRender:be,onChangeComplete:pt,onDelete:oe?rn:void 0}),s.createElement(ir,{prefixCls:r,marks:Ve,onClick:Ot})))});const br="_waterProgressBar_1csq1_1",_r="_today_1csq1_17",Sr="_progressContainer_1csq1_25",Er="_labels_1csq1_36",Cr="_label_1csq1_36",we={waterProgressBar:br,today:_r,progressContainer:Sr,labels:Er,label:Cr},Mr=({consumed:e,dailyNorma:t})=>{const n=e/t*100,r={margin:"0",padding:"0",height:"8px",width:"100%"},o={backgroundColor:"#9be1a0",height:8,borderRadius:9,padding:0},a={backgroundColor:"#f0eff4",height:8,borderRadius:9},c={borderColor:"#9be1a0",backgroundColor:"#fff",height:16,width:16,marginLeft:0,marginTop:-4,borderRadius:"100%",zIndex:2,boxShadow:"none"};return u.jsxs("div",{className:we.waterProgressBar,children:[u.jsx("div",{className:we.today,children:"Today"}),u.jsx("div",{className:we.progressContainer,children:u.jsx(yr,{value:n,trackStyle:o,railStyle:a,handleStyle:c,style:r,disabled:!0})}),u.jsxs("div",{className:we.labels,children:[u.jsx("span",{className:we.label,children:"0%"}),u.jsx("span",{className:we.label,children:"50%"}),u.jsx("span",{className:we.label,children:"100%"})]})]})},Nr="_buttonContainer_13hnd_1",xr="_addWaterBtn_13hnd_7",pr="_icon_13hnd_37",vt={buttonContainer:Nr,addWaterBtn:xr,icon:pr},Rr=({onAddWater:e})=>u.jsx("div",{className:vt.buttonContainer,children:u.jsxs("button",{className:vt.addWaterBtn,onClick:e,children:[u.jsx(pe,{width:16,height:16,iconName:"add-water",styles:vt.icon}),"Add water"]})}),jr="_mainWaterInfo_79l9f_1",Or="_waterImage_79l9f_11",wr="_content_79l9f_22",mt={mainWaterInfo:jr,waterImage:Or,content:wr},Gt="/assets/bottle1-DEGKjTPv.png",Ar="/assets/bottle2-BkYmbBZ8.png",Pr="/assets/bottle1t-DejS7cEh.png",kr="/assets/bottle2t-B6ZrhihS.png",Tr="/assets/bottle1d-DUYjShSL.png",Dr="/assets/bottle2d-NtYYJDFS.png",Ir=()=>{const[e,t]=s.useState(0),n=1.5,r=()=>{t(o=>Math.min(o+.1*n,n))};return u.jsxs("div",{className:mt.mainWaterInfo,children:[u.jsx("img",{src:Gt,srcSet:`${Gt} 1x, ${Ar} 2x, ${Pr} 1x, ${kr} 2x, ${Tr} 1x, ${Dr} 2x`,alt:"Water",className:mt.waterImage,loading:"lazy"}),u.jsx(gn,{}),u.jsxs("div",{className:mt.content,children:[u.jsx(In,{dailyNorma:n}),u.jsx(Mr,{consumed:e,dailyNorma:n}),u.jsx(Rr,{onAddWater:r})]})]})},Fr="_container_zq1f2_1",$r="_data_zq1f2_14",Lr="_btns_zq1f2_19",Ur="_btn_zq1f2_19",Hr="_svg_zq1f2_36",Wr="_text_zq1f2_41",Ne={container:Fr,data:$r,btns:Lr,btn:Ur,svg:Hr,text:Wr},Kr=({waterItem:e})=>(console.log(e),u.jsxs("div",{className:Ne.container,children:[u.jsx(pe,{iconName:"water-glass",styles:Ne.svg}),u.jsxs("div",{className:Ne.data,children:[u.jsxs("p",{className:Ne.text,children:[e.volume," ml"]}),u.jsx("p",{className:Ne.text,children:u.jsxs("span",{children:[e.time," AM"]})})]}),u.jsxs("div",{className:Ne.btns,children:[u.jsx("button",{className:Ne.btn,children:u.jsx(pe,{iconName:"pencil"})}),u.jsx("button",{className:Ne.btn,children:u.jsx(pe,{iconName:"trash"})})]})]})),Br="_topcontainer_1iw1h_1",Yr="_title_1iw1h_8",Gr="_btncontainer_1iw1h_15",qr="_btn_1iw1h_15",Xr="_text_1iw1h_44",Vr="_list_1iw1h_52",xe={topcontainer:Br,title:Yr,btncontainer:Gr,btn:qr,text:Xr,list:Vr},zr=({waterlist:e,currentDate:t,monthNames:n})=>u.jsxs("div",{className:xe.container,children:[u.jsxs("div",{className:xe.topcontainer,children:[u.jsxs("h2",{className:xe.title,children:[t.day,", ",n[t.month]]}),u.jsxs("div",{className:xe.btncontainer,children:[u.jsx("button",{className:xe.btn,children:u.jsx(pe,{iconName:"add-water"})}),u.jsx("p",{className:xe.text,children:"Add water"})]})]}),u.jsx("ul",{className:xe.list,children:e.map((r,o)=>u.jsx("li",{className:xe.item,children:u.jsx(Kr,{waterItem:r})},o))})]}),ea=()=>{const t=[{volume:250,time:"7-00"},{volume:250,time:"11-00"}],n=["January","February","March","April","May","June","July","August","September","October","November","December"],[r,o]=s.useState({year:null,month:null,day:null}),[a,c]=s.useState({year:null,month:null,day:null});s.useEffect(()=>{const v=new Date,y={year:v.getFullYear(),month:v.getMonth(),day:v.getDate()};o(y),c(y)},[]);const f=()=>{o(v=>{const y=(v.month+1)%12,_=v.year+Math.floor((v.month+1)/12);return _===a.year&&y===a.month?{...a}:{year:_,month:y,day:1}})},S=()=>{o(v=>{const y=(v.month-1+12)%12,_=v.year+Math.floor((v.month-1)/12);return _===a.year&&y===a.month?{...a}:{year:_,month:y,day:1}})};return u.jsxs("div",{className:Ft.container,children:[u.jsx(Ir,{}),u.jsxs("div",{className:Ft.waterCalendarcontainer,children:[u.jsx(zr,{waterlist:t,currentDate:r,monthNames:n}),u.jsx(Pn,{waterQuantity:50,currentDate:r,monthNames:n,handleNextMonth:f,handlePreviousMonth:S})]})]})};export{ea as default};

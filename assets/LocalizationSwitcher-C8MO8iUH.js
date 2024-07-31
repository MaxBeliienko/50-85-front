var P=Object.defineProperty;var U=(e,t,s)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var z=(e,t,s)=>U(e,typeof t!="symbol"?t+"":t,s);import{r as f,A as q,B,j as C,N as G}from"./index-DeLcdh_2.js";const J=(...e)=>{console!=null&&console.warn&&(m(e[0])&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e))},M={},L=(...e)=>{m(e[0])&&M[e[0]]||(m(e[0])&&(M[e[0]]=new Date),J(...e))},A=(e,t)=>()=>{if(e.isInitialized)t();else{const s=()=>{setTimeout(()=>{e.off("initialized",s)},0),t()};e.on("initialized",s)}},R=(e,t,s)=>{e.loadNamespaces(t,A(e,s))},$=(e,t,s,a)=>{m(s)&&(s=[s]),s.forEach(c=>{e.options.ns.indexOf(c)<0&&e.options.ns.push(c)}),e.loadLanguages(t,A(e,a))},W=(e,t,s={})=>!t.languages||!t.languages.length?(L("i18n.languages were undefined or empty",t.languages),!0):t.hasLoadedNamespace(e,{lng:s.lng,precheck:(a,c)=>{var n;if(((n=s.bindI18n)==null?void 0:n.indexOf("languageChanging"))>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!c(a.isLanguageChangingTo,e))return!1}}),m=e=>typeof e=="string",Y=e=>typeof e=="object"&&e!==null,H=f.createContext();class K{constructor(){z(this,"getUsedNamespaces",()=>Object.keys(this.usedNamespaces));this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(s=>{var a;(a=this.usedNamespaces)[s]??(a[s]=!0)})}}const Q=(e,t)=>{const s=f.useRef();return f.useEffect(()=>{s.current=e},[e,t]),s.current},F=(e,t,s,a)=>e.getFixedT(t,s,a),X=(e,t,s,a)=>f.useCallback(F(e,t,s,a),[e,t,s,a]),Z=(e,t={})=>{var j,E,_,k;const{i18n:s}=t,{i18n:a,defaultNS:c}=f.useContext(H)||{},n=s||a||B();if(n&&!n.reportNamespaces&&(n.reportNamespaces=new K),!n){L("You will need to pass in an i18next instance by using initReactI18next");const i=(l,u)=>m(u)?u:Y(u)&&m(u.defaultValue)?u.defaultValue:Array.isArray(l)?l[l.length-1]:l,r=[i,{},!1];return r.t=i,r.i18n={},r.ready=!1,r}(j=n.options.react)!=null&&j.wait&&L("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const h={...q(),...n.options.react,...t},{useSuspense:T,keyPrefix:w}=h;let o=c||((E=n.options)==null?void 0:E.defaultNS);o=m(o)?[o]:o||["translation"],(k=(_=n.reportNamespaces).addUsedNamespaces)==null||k.call(_,o);const d=(n.isInitialized||n.initializedStoreOnce)&&o.every(i=>W(i,n,h)),O=X(n,t.lng||null,h.nsMode==="fallback"?o:o[0],w),b=()=>O,x=()=>F(n,t.lng||null,h.nsMode==="fallback"?o:o[0],w),[S,N]=f.useState(b);let y=o.join();t.lng&&(y=`${t.lng}${y}`);const v=Q(y),g=f.useRef(!0);f.useEffect(()=>{const{bindI18n:i,bindI18nStore:r}=h;g.current=!0,!d&&!T&&(t.lng?$(n,t.lng,o,()=>{g.current&&N(x)}):R(n,o,()=>{g.current&&N(x)})),d&&v&&v!==y&&g.current&&N(x);const l=()=>{g.current&&N(x)};return i&&(n==null||n.on(i,l)),r&&(n==null||n.store.on(r,l)),()=>{g.current=!1,n&&(i==null||i.split(" ").forEach(u=>n.off(u,l))),r&&n&&r.split(" ").forEach(u=>n.store.off(u,l))}},[n,y]),f.useEffect(()=>{g.current&&d&&N(b)},[n,w,d]);const p=[S,n,d];if(p.t=S,p.i18n=n,p.ready=d,d||!d&&!T)return p;throw new Promise(i=>{t.lng?$(n,t.lng,o,()=>i()):R(n,o,()=>i())})},D="_logo_2l2e0_1",V={logo:D},ae=()=>C.jsx(G,{to:"/",className:V.logo,children:"AquaTrack"}),ee="_select_y0cne_1",te="_noMargin_y0cne_15",I={select:ee,noMargin:te},oe=({isSettings:e})=>{const t={en:{nativeName:"English"},ukr:{nativeName:"Українська"}},{i18n:s}=Z(),a=c=>{const n=c.target.value;s.changeLanguage(n)};return C.jsx("select",{value:s.resolvedLanguage,onChange:a,className:`${I.select} ${e?I.noMargin:""}`,children:Object.keys(t).map(c=>C.jsx("option",{value:c,children:t[c].nativeName},c))})};export{ae as L,oe as a,Z as u};

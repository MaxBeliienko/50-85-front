import{b as r,n,r as c,C as i,j as m}from"./index-DBX1TcIx.js";import{u as p}from"./useTranslation-BH44Ncer.js";const g=()=>{const e=r(),o=n(),s=new URLSearchParams(window.location.search).get("code"),{t:a}=p();return c.useEffect(()=>{s&&e(i({token:s})).unwrap().then(()=>{o("/tracker")}).catch(t=>{console.error("Помилка під час авторизації через Google",t)})},[s,e,o]),m.jsx("div",{children:a("description.useTerms.message")})};export{g as default};
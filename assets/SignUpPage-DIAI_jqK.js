import{r as o,u as N,j as e,N as S,h as F,_ as h}from"./index-BtX0FpUI.js";import{A as I}from"./AdvantagesSection-m1OggXLT.js";import{c as k,b as n,d as C,u as P,I as g,o as U}from"./index.esm-Adtv06hA.js";import{L as W}from"./Logo-BpR09hU5.js";const T="_signUpWrapper_1ouyr_1",$="_mainText_1ouyr_7",E="_labelText_1ouyr_17",A="_formGroup_1ouyr_26",R="_inputField_1ouyr_33",q="_error_1ouyr_47",G="_submitBtn_1ouyr_58",B="_dontHaveAcc_1ouyr_78",H="_navigate_1ouyr_87",L="_eyeIcon_1ouyr_94",s={signUpWrapper:T,mainText:$,labelText:E,formGroup:A,inputField:R,error:q,submitBtn:G,dontHaveAcc:B,navigate:H,eyeIcon:L},V=k().shape({email:n().email("Must be a valid email!").required("Required"),password:n().min(6,"Too short!").required("Required"),passwordCheck:n().oneOf([C("password"),null],"Passwords must match").required("Required")}),D=()=>{const[c,x]=o.useState(!1),[d,_]=o.useState(!1),p=o.useId(),m=o.useId(),u=o.useId(),w=N(),y=()=>{x(a=>!a)},b=()=>{_(a=>!a)},{register:t,handleSubmit:j,formState:{errors:r}}=P({mode:"onChange",defaultValues:{email:"",password:"",passwordCheck:""},resolver:U(V)}),f=async({email:a,password:v})=>{try{const i=await w(F({email:a,password:v}));i.error&&h.error(i.payload.response.data.message||"Registration failed")}catch{h.error("Something went wrong")}};return e.jsxs(e.Fragment,{children:[e.jsx(W,{}),e.jsxs("div",{className:s.signUpWrapper,children:[e.jsx("p",{className:s.mainText,children:"Sign Up"}),e.jsxs("form",{className:s.form,onSubmit:j(f),children:[e.jsxs("div",{className:s.formGroup,children:[e.jsx("label",{htmlFor:p,className:s.labelText,children:"Email"}),e.jsx("input",{id:p,...t("email"),type:"email",placeholder:"Enter your email",className:`${s.inputField} ${r.email?"loginError":""}`}),r.email&&e.jsx("div",{className:s.error,children:r.email.message})]}),e.jsxs("div",{className:s.formGroup,children:[e.jsx("label",{htmlFor:m,className:s.labelText,children:"Password"}),e.jsx("input",{id:m,...t("password"),type:c?"text":"password",placeholder:"Enter your password",className:`${s.inputField} ${r.password?"loginError":""}`}),e.jsx(g,{width:20,height:20,iconName:c?"eye-on":"eye-off",styles:s.eyeIcon,onClick:y}),r.password&&e.jsx("div",{className:s.error,children:r.password.message})]}),e.jsxs("div",{className:s.formGroup,children:[e.jsx("label",{htmlFor:u,className:s.labelText,children:"Repeat password"}),e.jsx("input",{id:u,...t("passwordCheck"),type:d?"text":"password",placeholder:"Repeat password",className:`${s.inputField} ${r.passwordCheck?"loginError":""}`}),e.jsx(g,{width:20,height:20,iconName:d?"eye-on":"eye-off",styles:s.eyeIcon,onClick:b}),r.passwordCheck&&e.jsx("div",{className:s.error,children:r.passwordCheck.message})]}),e.jsx("button",{type:"submit",className:s.submitBtn,children:"Sign Up"})]}),e.jsxs("p",{className:s.dontHaveAcc,children:["Already have an account?"," ",e.jsx(S,{to:"/signin",className:s.navigate,children:"Sign In"})]})]})]})},M="_signUpPageWrapper_mb8od_1",O="_formWrapper_mb8od_7",z="_disabled_mb8od_16",l={signUpPageWrapper:M,formWrapper:O,disabled:z},Y=()=>e.jsxs("div",{className:l.signUpPageWrapper,children:[e.jsx("div",{className:l.formWrapper,children:e.jsx(D,{})}),e.jsx("div",{className:l.disabled,children:e.jsx(I,{})})]});export{Y as default};

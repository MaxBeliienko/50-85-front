import{j as t,r as u}from"./index-XmHa4bu3.js";import{I as x}from"./Icon-BGr5aBzY.js";import{L as f}from"./Logo-BxXin-Fb.js";const $="_container_uw18t_1",W={container:$},C="_calendar_1e871_1",M="_btn_1e871_17",B="_calendarday_1e871_27",I="_currentday_1e871_41",k="_percent_1e871_57",S="_disabledStyle_1e871_64",q="_hidden_1e871_68",j={calendar:C,btn:M,calendarday:B,currentday:I,percent:k,disabledStyle:S,hidden:q},A=({year:s,month:e,currentDay:n,waterQuantity:a})=>{const o=new Date(s,e+1,0).getDate(),r=Array.from({length:o},(l,N)=>N+1);return console.log(a),console.log(n),t.jsx("ul",{className:j.calendar,children:r.map(l=>t.jsxs("li",{children:[t.jsx("button",{className:l===n?j.currentday:j.calendarday,disabled:l>n,children:l}),t.jsxs("p",{className:l<n?j.percent:j.hidden,children:[a,"%"]})]},l))})},D="_container_1ahj4_1",P="_title_1ahj4_8",z="_blockcalendar_1ahj4_14",Y="_btn_1ahj4_20",L="_schedule_1ahj4_30",d={container:D,title:P,blockcalendar:z,btn:Y,schedule:L},E=({waterQuantity:s,currentDate:e,monthNames:n,handlePreviousMonth:a,handleNextMonth:o})=>t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:d.title,children:[t.jsx("h2",{children:"Month"}),t.jsxs("div",{className:d.blockcalendar,children:[t.jsx("button",{className:d.btn,onClick:a,children:t.jsx(x,{iconName:"left",width:4.5,height:9,styles:d.btn})}),t.jsxs("p",{children:[n[e.month],", ",e.year]}),t.jsx("button",{className:d.btn,onClick:o,children:t.jsx(x,{iconName:"right",width:4.5,height:9,styles:d.btn})}),t.jsx("button",{className:d.btn,children:t.jsx(x,{iconName:"schedule",styles:d.schedule,height:24,width:24})})]})]}),e.year!==null&&e.month!==null?t.jsx(A,{year:e.year,month:e.month,currentDay:e.day,waterQuantity:s}):t.jsx("p",{children:"Loading..."})]}),F="_dailyNorma_1qvbx_1",J="_waterDailyNorma_1qvbx_15",T="_highlight_1qvbx_29",g={dailyNorma:F,waterDailyNorma:J,highlight:T},Z=({dailyNorma:s})=>t.jsx("div",{className:g.dailyNorma,children:t.jsxs("div",{className:g.waterDailyNorma,children:[t.jsxs("span",{className:g.highlight,children:[s," L"]}),t.jsx("p",{children:"My daily norma"})]})}),G="_waterProgressBar_miuat_1",K="_today_miuat_17",O="_progressContainer_miuat_25",R="_progress_miuat_25",U="_labels_miuat_39",H="_label_miuat_39",h={waterProgressBar:G,today:K,progressContainer:O,progress:R,labels:U,label:H},Q=({consumed:s,dailyNorma:e})=>{const n=s/e*100;return t.jsxs("div",{className:h.waterProgressBar,children:[t.jsx("div",{className:h.today,children:"Today"}),t.jsx("div",{className:h.progressContainer,children:t.jsx("div",{className:h.progress,style:{width:`${n}%`}})}),t.jsxs("div",{className:h.labels,children:[t.jsx("span",{className:h.label,children:"0%"}),t.jsx("span",{className:h.label,children:"50%"}),t.jsx("span",{className:h.label,children:"100%"})]})]})},V="_buttonContainer_13hnd_1",X="_addWaterBtn_13hnd_7",tt="_icon_13hnd_37",y={buttonContainer:V,addWaterBtn:X,icon:tt},st=({onAddWater:s})=>t.jsx("div",{className:y.buttonContainer,children:t.jsxs("button",{className:y.addWaterBtn,onClick:s,children:[t.jsx(x,{width:16,height:16,iconName:"add-water",styles:y.icon}),"Add water"]})}),et="_mainWaterInfo_jmmsm_1",nt="_waterImage_jmmsm_12",at="_content_jmmsm_23",p={mainWaterInfo:et,waterImage:nt,content:at},v="/assets/bottle1-DEGKjTPv.png",ot="/assets/bottle2-BkYmbBZ8.png",ct="/assets/bottle1t-DejS7cEh.png",rt="/assets/bottle2t-B6ZrhihS.png",lt="/assets/bottle1d-DUYjShSL.png",it="/assets/bottle2d-NtYYJDFS.png",dt=()=>{const[s,e]=u.useState(0),n=1.5,a=()=>{e(o=>o+250)};return t.jsxs("div",{className:p.mainWaterInfo,children:[t.jsx("img",{src:v,srcSet:`${v} 1x, ${ot} 2x, ${ct} 1x, ${rt} 2x, ${lt} 1x, ${it} 2x`,alt:"Water",className:p.waterImage,loading:"lazy"}),t.jsx(f,{}),t.jsxs("div",{className:p.content,children:[t.jsx(Z,{dailyNorma:n}),t.jsx(Q,{consumed:s,dailyNorma:n}),t.jsx(st,{onAddWater:a})]})]})},ht="_container_zq1f2_1",mt="_data_zq1f2_14",_t="_btns_zq1f2_19",xt="_btn_zq1f2_19",bt="_svg_zq1f2_36",jt="_text_zq1f2_41",m={container:ht,data:mt,btns:_t,btn:xt,svg:bt,text:jt},ut=({waterItem:s})=>(console.log(s),t.jsxs("div",{className:m.container,children:[t.jsx(x,{iconName:"water-glass",styles:m.svg}),t.jsxs("div",{className:m.data,children:[t.jsxs("p",{className:m.text,children:[s.volume," ml"]}),t.jsx("p",{className:m.text,children:t.jsxs("span",{children:[s.time," AM"]})})]}),t.jsxs("div",{className:m.btns,children:[t.jsx("button",{className:m.btn,children:t.jsx(x,{iconName:"pencil"})}),t.jsx("button",{className:m.btn,children:t.jsx(x,{iconName:"trash"})})]})]})),Nt="_topcontainer_1iw1h_1",gt="_title_1iw1h_8",yt="_btncontainer_1iw1h_15",pt="_btn_1iw1h_15",vt="_text_1iw1h_44",wt="_list_1iw1h_52",_={topcontainer:Nt,title:gt,btncontainer:yt,btn:pt,text:vt,list:wt},ft=({waterlist:s,currentDate:e,monthNames:n})=>t.jsxs("div",{className:_.container,children:[t.jsxs("div",{className:_.topcontainer,children:[t.jsxs("h2",{className:_.title,children:[e.day,", ",n[e.month]]}),t.jsxs("div",{className:_.btncontainer,children:[t.jsx("button",{className:_.btn,children:t.jsx(x,{iconName:"add-water"})}),t.jsx("p",{className:_.text,children:"Add water"})]})]}),t.jsx("ul",{className:_.list,children:s.map((a,o)=>t.jsx("li",{className:_.item,children:t.jsx(ut,{waterItem:a})},o))})]}),Mt=()=>{const e=[{volume:250,time:"7-00"},{volume:250,time:"11-00"}],n=["January","February","March","April","May","June","July","August","September","October","November","December"],[a,o]=u.useState({year:null,month:null,day:null}),[r,l]=u.useState({year:null,month:null,day:null});u.useEffect(()=>{const c=new Date,i={year:c.getFullYear(),month:c.getMonth(),day:c.getDate()};o(i),l(i)},[]);const N=()=>{o(c=>{const i=(c.month+1)%12,b=c.year+Math.floor((c.month+1)/12);return b===r.year&&i===r.month?{...r}:{year:b,month:i,day:1}})},w=()=>{o(c=>{const i=(c.month-1+12)%12,b=c.year+Math.floor((c.month-1)/12);return b===r.year&&i===r.month?{...r}:{year:b,month:i,day:1}})};return t.jsxs("div",{className:W.container,children:["Tracker Page",t.jsx(dt,{}),t.jsx(ft,{waterlist:e,currentDate:a,monthNames:n}),t.jsx(E,{waterQuantity:50,currentDate:a,monthNames:n,handleNextMonth:N,handlePreviousMonth:w})]})};export{Mt as default};
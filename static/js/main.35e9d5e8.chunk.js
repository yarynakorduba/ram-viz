(this.webpackJsonpram=this.webpackJsonpram||[]).push([[0],{39:function(e,t,a){e.exports=a(58)},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(26),l=a.n(r),i=a(2),s=a(14),o=function(e,t,a){var n=""!==t?[e,t].join("__"):e;return"".concat(n," ").concat(a.reduce((function(e,t){return"".concat(e," ").concat(n).concat("_").concat(t)}),""))},u=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return a="string"===typeof t?a:t||[],o(e,"string"===typeof t?t:"",Array.isArray(a)?a.filter(Boolean):Object.entries(a).filter((function(e){var t=Object(s.a)(e,2)[1];return Boolean(t)})).map((function(e){return Object(s.a)(e,1)[0]})))}},b=u,d=u("Hello");d(),d(["men","women"]),d({men:!0,women:!1}),d("world"),d("world",["mars","venera"]),d("world",{mars:!0,venera:!1});a(50);var m,O=a(4),E=function(e,t){return{type:"SET_PINS",payload:{type:e,value:t}}},f=function(e){return{type:"SET_CLOCK_PIN",payload:e}},j=function(e){return{type:"SET_SELECTED_ROW_IN_MEMORY",payload:e}},p=function(e){return{type:"SET_SELECTED_COL_IN_MEMORY",payload:e}},y=function(e){return{type:"SET_SELECTED_ADDRESS_IN_MEMORY",payload:e}},v=function(e,t){return{type:"SET_PINS_WIDTH",payload:{type:e,width:t}}},h=function(e){return{type:"SET_IS_PIN_NOTATION_CLASSICAL",payload:{isClassical:e}}},N=function(e){return{type:"SET_MEMORY_DISPLAY_TYPE",payload:{displayType:e}}},S=function(e){return{type:"SET_IS_TACTING_ENABLED",payload:{isEnabled:e}}},_=function(e){return{type:"SET_IS_RAS_CAS_ENABLED",payload:{isEnabled:e}}},T=function(e,t){return{type:"WRITE_DATUM_IN_MEMORY",payload:{datum:e,address:t}}},g=function(e){return{type:"SET_MEMORY",payload:{data:e}}},x=function(e){return{type:"SET_TACTS",payload:e}},C=function(e){return{type:"SET_CURRENT_TACTS",payload:e}},w=function(){return{type:"TOGGLE_RAS_CAS"}},A=a(61),M=a(62),I={memoryArray:new Array(16).fill({datum:"0000",isDirty:!1}),selectedAddress:{address:void 0,row:void 0,col:void 0}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_SELECTED_ADDRESS_IN_MEMORY":return Object(O.a)(Object(O.a)({},e),{},{selectedAddress:Object(O.a)(Object(O.a)({},e.selectedAddress),{},{address:n})});case"SET_SELECTED_ROW_IN_MEMORY":return Object(O.a)(Object(O.a)({},e),{},{selectedAddress:Object(O.a)(Object(O.a)({},e.selectedAddress),{},{row:n})});case"SET_SELECTED_COL_IN_MEMORY":return Object(O.a)(Object(O.a)({},e),{},{selectedAddress:Object(O.a)(Object(O.a)({},e.selectedAddress),{},{col:n})});case"WRITE_DATUM_IN_MEMORY":var c=n.address,r=n.datum;return Object(O.a)(Object(O.a)({},e),{},{memoryArray:Object(A.a)(parseInt(c,2),{datum:r,isDirty:!0})(e.memoryArray)});case"SET_MEMORY":return Object(O.a)(Object(O.a)({},e),{},{memoryArray:n.data});default:return e}},R=function(e){return Object(M.a)(["memory","memoryArray"],e)},L=function(e){return Object(M.a)(["memory","selectedAddress","address"],e)},k=function(e){return Object(M.a)(["memory","selectedAddress","row"],e)},W=a(10),B=a(59),F=a(65),Y=a(63),P="1",z="0",H="1",V="0",G="RAS",X="CAS",U="clock",K="data",J="address",$="enabled",q="readWrite",Q={ON:"1",OFF:"0"},Z=[{value:"table",label:"Table View"},{value:"matrix",label:"Matrix View"}],ee=(m={address:Q.OFF.repeat(4)},Object(W.a)(m,G,Q.OFF),Object(W.a)(m,X,Q.OFF),Object(W.a)(m,"addressWidth",4),Object(W.a)(m,"data",Q.OFF.repeat(4)),Object(W.a)(m,"dataWidth",4),Object(W.a)(m,"enabled",H),Object(W.a)(m,"readWrite",z),Object(W.a)(m,"clock",Q.OFF),Object(W.a)(m,"tacts",4),Object(W.a)(m,"currentTacts",0),m),te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0,a=t.payload;switch(t.type){case"SET_ADDRESS_ROW":return Object(O.a)(Object(O.a)({},e),{},Object(W.a)({},G,a));case"SET_ADDRESS_COLUMN":return Object(O.a)(Object(O.a)({},e),{},Object(W.a)({},X,a));case"SET_CLOCK_PIN":return Object(O.a)(Object(O.a)({},e),{},Object(W.a)({},U,a));case"SET_PINS":return Object(O.a)(Object(O.a)({},e),{},Object(W.a)({},a.type,a.value));case"TOGGLE_RAS_CAS":var n;return Object(O.a)(Object(O.a)({},e),{},(n={},Object(W.a)(n,G,e[G]===Q.ON?Q.OFF:Q.ON),Object(W.a)(n,X,e[X]===Q.ON?Q.OFF:Q.ON),n));case"SET_TACTS":return Object(O.a)(Object(O.a)({},e),{},{tacts:a.tacts,currentTacts:a});case"SET_CURRENT_TACTS":return Object(O.a)(Object(O.a)({},e),{},{currentTacts:a});case"SET_PINS_WIDTH":var c,r=a.type,l=a.width,i=e[r].padStart(l,"0").slice(-l);return Object(O.a)(Object(O.a)({},e),{},(c={},Object(W.a)(c,r,i),Object(W.a)(c,"".concat(r,"Width"),l),c));default:return e}},ae=function(e){return Object(M.a)(["pinsInfo","address"],e)},ne=function(e){return Object(M.a)(["pinsInfo","data"],e)},ce=function(e){return Object(M.a)(["pinsInfo","dataWidth"],e)},re=function(e){return Object(M.a)(["pinsInfo","addressWidth"],e)},le=function(e){return Object(M.a)(["pinsInfo","enabled"],e)},ie=function(e){return Object(M.a)(["pinsInfo","readWrite"],e)},se=function(e){return Object(M.a)(["pinsInfo","clock"],e)},oe=function(e){return Object(M.a)(["pinsInfo","tacts"],e)},ue=function(e){return Object(M.a)(["pinsInfo","currentTacts"],e)},be=function(e){return Object(M.a)(["pinsInfo",G],e)},de=function(e){return Object(M.a)(["pinsInfo",X],e)},me=function(e){return Object(B.a)((function(e){return Object(F.a)(Math.ceil(e.length/2),e)}),Object(M.a)(["pinsInfo","address"]))(e)},Oe=function(e){return Object(B.a)((function(e){return Object(Y.a)(Math.floor(e.length/2),e)}),Object(M.a)(["pinsInfo","address"]))(e)},Ee=function(e){var t=Object(i.b)(),a=Object(n.useMemo)((function(){return e}),[e]);return Object(n.useCallback)((function(){t(a.apply(null,arguments))}),[t,a])},fe={isPinsNotationClassical:!1,isTactingEnabled:!1,isRasCasEnabled:!1,memoryDisplayType:"matrix"},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0,a=t.payload,n=t.type;switch(n){case"SET_IS_PIN_NOTATION_CLASSICAL":return Object(O.a)(Object(O.a)({},e),{},{isPinsNotationClassical:a.isClassical});case"SET_IS_TACTING_ENABLED":return Object(O.a)(Object(O.a)({},e),{},{isTactingEnabled:a.isEnabled,isRasCasEnabled:!!a.isEnabled&&e.isRasCasEnabled});case"SET_IS_RAS_CAS_ENABLED":return Object(O.a)(Object(O.a)({},e),{},{isTactingEnabled:a.isEnabled?a.isEnabled:e.isTactingEnabled,isRasCasEnabled:a.isEnabled});case"SET_MEMORY_DISPLAY_TYPE":return Object(O.a)(Object(O.a)({},e),{},{memoryDisplayType:a.displayType});default:return e}},pe=function(e){return Object(M.a)(["visualizationSettings","isPinsNotationClassical"],e)},ye=function(e){return Object(M.a)(["visualizationSettings","isTactingEnabled"],e)},ve=function(e){return Object(M.a)(["visualizationSettings","memoryDisplayType"],e)},he=function(e){return Object(M.a)(["visualizationSettings","isRasCasEnabled"],e)},Ne=a(12),Se=a(60),_e=function(){var e=Object(i.c)(re),t=Math.pow(2,Math.floor(e/2));return[function(t){return{column:t%Math.pow(2,Math.floor(e/2)),row:Math.floor(t/Math.pow(2,Math.floor(e/2)))}},{totalRows:Math.floor(Math.pow(2,e)/Math.pow(2,Math.floor(e/2))),totalColumns:t}]},Te=(a(51),b("ToggleButtons")),ge=function(e){var t=e.options,a=e.handleSelect,n=void 0===a?function(){}:a,r=e.selectedValue,l=e.containerClassName,i=function(e){return function(){return n(e)}};return c.a.createElement("div",{className:"".concat(Te()," ").concat(l)},Object(Se.a)((function(e){var t=e.value,a=e.label;return console.log(r,t)||c.a.createElement("button",{className:Te("option",[r===t&&"selected"]),onClick:i(t)},a)}),t))},xe=b("Memory"),Ce=function(){var e=Ee(N),t=Object(i.c)(R),a=Object(i.c)(ve),n=Object(i.c)(ae),r=Object(i.c)(me),l=Object(i.c)(Oe),o=Object(i.c)(re),u=Object(i.c)(ve),b=function(){var e=Object(i.c)(ve),t=Object(i.c)(re),a=Object(i.c)(ce),n=_e(),c=Object(s.a)(n,1)[0],r="table"===e?100:70,l="table"===e?20:33,o="table"===e?2*r+2:(r+2)*Math.pow(2,Math.floor(t/2)),u="table"===e?Math.pow(2,t)*(l+2):Math.pow(2,Math.ceil(t/2))*(l+2),b=r/a;return[function(t){if("table"===e){var a=22+t*(l+2);return{cellX:r+2,cellY:a,textX:2*r,textY:a+(l+2)/2}}var n=c(t),i=n.row,s=n.column;return{cellX:s*(r+2),cellY:i*(l+2),textX:s*(r+2)+r-4,textY:i*(l+2)+(l+2)/2}},function(e){return{x:e*(r+2),y:0}},function(e){return{x:0,y:e*(l+2)}},{cellWidth:r,cellHeight:l,cellMargin:2,verticalOffset:22,containerWidth:o,containerHeight:u,fontSize:b>20?20:b<13?13:r/a},{rowWidth:o-2,rowHeight:l},{colWidth:r,colHeight:u-2}]}(),d=Object(s.a)(b,6),m=d[0],O=d[1],E=d[2],f=d[3],j=f.cellWidth,p=f.cellHeight,y=f.cellMargin,v=f.verticalOffset,h=f.containerWidth,S=f.containerHeight,_=f.fontSize,T=d[4],g=T.rowWidth,x=T.rowHeight,C=d[5],w=C.colWidth,A=C.colHeight,M=_e(),I=Object(s.a)(M,2)[1],D=I.totalRows,L=I.totalColumns;return c.a.createElement("div",{className:xe()},c.a.createElement(ge,{containerClassName:xe("viewOptions"),options:Z,selectedValue:u,handleSelect:e}),c.a.createElement("div",{className:xe("memoryContainer")},c.a.createElement("svg",{x:0,y:0,style:{minHeight:S,width:h}},c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("text",{className:xe("header"),x:j-y,y:v/2},"Address"),c.a.createElement("text",{className:xe("header"),x:2*j,y:v/2},"Data")),t.map((function(e,t){var r=m(t),l=r.cellX,i=r.cellY,s=r.textX,u=r.textY,b=parseInt(n,2)===t&&n.length===o?"selected":"",d=e.isDirty?"dirty":"";return c.a.createElement("g",{key:t},"table"===a&&c.a.createElement("g",null,c.a.createElement("rect",{x:0,y:i,width:j,height:p,className:xe("cellAddress",[b,d])}),c.a.createElement("text",{className:xe("addressLabel"),x:l-y,y:i+(p+y)/2},t)),c.a.createElement("g",{id:t},c.a.createElement("rect",{x:l,y:i,width:j,height:p,className:xe("cell",[b,d])}),c.a.createElement("text",{className:xe("dataLabel"),x:s,y:u,"font-size":"".concat(_,"px")},e.datum)))})),new Array(D).fill("").map((function(e,t){var n=E(t),l=n.x,i=n.y,s="matrix"===a&&t===parseInt(r,2);return c.a.createElement("rect",{x:l,y:i,width:g,height:x,className:xe("row",[s&&"selected"])})})),new Array(L).fill("").map((function(e,t){var n=O(t),r=n.x,i=n.y,s="matrix"===a&&t===parseInt(l,2);return c.a.createElement("rect",{x:r,y:i,width:w,height:A,className:xe("column",[s&&"selected"])})}))))))},we=(a(52),a(64)),Ae=(a(53),b("PinsBlock")),Me=function(e){var t=e.binaryData,a=e.setBinaryData,r=e.isDisabled,l=void 0!==r&&r,o=Object(n.useState)("".concat(t).split("")),u=Object(s.a)(o,2),b=u[0],d=u[1],m=Object(i.c)(pe);Object(n.useEffect)((function(){t&&d("".concat(t).split(""))}),[t]);var O=m?25:125,E=20*b.length/2+10;return c.a.createElement("div",{className:Ae()},c.a.createElement("svg",{className:Ae("list"),width:125,height:20*(b.length+1)},b.map((function(e,t){return c.a.createElement("g",{key:t,onClick:(n=t,function(){if(!l&&a){var e=0===Number(b[n])?Q.ON:Q.OFF,t=Object(A.a)(n,e,b);d(t),a(t.join(""))}})},b.length>1&&Object(we.a)(t,[0,b.length-1])&&c.a.createElement("text",{x:"0",y:20*t+20-3,className:Ae("pinSignificance")},0===t?"MSB":"LSB"),c.a.createElement("text",{x:0,y:20*t+20-3,className:Ae("pinLabel",[e===Q.ON&&"selected",l&&"disabled"])},e),c.a.createElement("rect",{x:0,y:20*t,height:20,width:O,className:Ae("pinArea")}),c.a.createElement("line",{x1:0,y1:20*t+20,x2:125,y2:20*t+20,className:Ae("pin",[m?"short":"long"])}));var n})),c.a.createElement("line",{x1:O,y1:20,x2:O,y2:20*b.length,className:Ae("pinsDivider",[m?"visible":"invisible"])}),c.a.createElement("text",{x:64,y:E-3,className:Ae("pinsNumber",[m?"visible":"invisible"])},b.length),c.a.createElement("line",{x1:m?70:125,y1:E+1,x2:m?90:125,y2:E+1,className:Ae("crossNotation",[m?"visible":"invisible"])}),c.a.createElement("line",{x1:O,y1:E,x2:125,y2:E,className:Ae("pinsNotation",[m?"visible":"invisible"])})))},Ie=b("MemoryControls"),De=function(){var e=Object(i.c)(ie),t=Object(i.c)(ne),a=Ee(E),n=Ee(v),r=Object(i.c)(ce);return c.a.createElement("div",{className:Ie("dataBlock")},c.a.createElement("label",{className:Ie("dataLabel")},c.a.createElement("div",{className:Ie("dataMode")},c.a.createElement("span",{className:Ie("dataModeLabel")},e===z?"Input: ":"Output: "),c.a.createElement("span",null,t," (",parseInt(t,2),")")),c.a.createElement("div",{className:Ie("bitsWidth")},"width: ",r," bits"),c.a.createElement("input",{name:"dataLength",type:"range",min:1,max:8,defaultValue:r,onInput:function(e){return t=+e.target.value,n(K,t);var t}})),c.a.createElement(Me,{binaryData:t,setBinaryData:function(e){return a(K,e)},isDisabled:e===P}))},Re=b("MemoryControls"),Le=function(){var e=Object(i.c)(ae),t=Object(i.c)(re),a=Object(i.c)(he),n=Object(i.c)(be),r=Object(i.c)(de),l=Ee(E),s=Ee(v);return c.a.createElement("div",{className:Re("addressBlock")},c.a.createElement("label",{className:Re("addressLabel")},c.a.createElement("div",null,"Address: ",e,"_".repeat(t-e.length)," (",parseInt(e,2),")"),c.a.createElement("div",{className:Re("bitsWidth")},"width: ",t," bits"),c.a.createElement("input",{name:"addressLength",type:"range",min:2,max:8,defaultValue:t,onInput:function(e){return t=+e.target.value,s(J,t);var t}})),c.a.createElement("div",{className:Re("addressPins")},c.a.createElement(Me,{binaryData:e,setBinaryData:function(e){return l(J,e)}}),a&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:Re("ras")},c.a.createElement("span",{className:Re("rasLabel",[n===Q.ON&&"active"])},"ras"),c.a.createElement(Me,{binaryData:n,isDisabled:!0})),c.a.createElement("div",{className:Re("cas")},c.a.createElement("span",{className:Re("casLabel",[r===Q.ON&&"active"])},"cas"),c.a.createElement(Me,{binaryData:r,isDisabled:!0})))))},ke=b("MemoryControls"),We=function(){var e=Object(i.c)(ie),t=Object(i.c)(le),a=Ee(E),n=function(e){return a(q,e)},r=function(){a($,t===H?V:H)};return c.a.createElement("div",null,c.a.createElement("div",{className:ke("enabledBlock")},c.a.createElement("label",{onClick:r,className:ke("enabledLabel",[t===H&&"enabled"])},"Enable"),c.a.createElement(Me,{binaryData:t,setBinaryData:r})),c.a.createElement("div",{className:ke("readWriteBlock")},c.a.createElement("label",{className:ke("readWriteLabel")},c.a.createElement("span",{className:ke("read",[e===P&&"enabled"]),onClick:function(){return n(P)}},"Read"),"/",c.a.createElement("span",{className:ke("write",[e===z&&"enabled"]),onClick:function(){return n(z)}},"Write")),c.a.createElement(Me,{binaryData:e,setBinaryData:n})))},Be=b("MemoryControls"),Fe=function(){var e=Object(i.c)(ye),t=Object(i.c)(se),a=Object(i.c)(oe),r=Object(i.c)(ue),l=Ee(x),o=function(){var e=Ee(w),t=Ee(f),a=Object(i.c)(se),c=Object(i.c)(ue),r=Object(n.useRef)(null);Object(n.useEffect)((function(){return a===Q.ON&&(r.current=setTimeout((function(){t(Q.OFF)}),500)),function(){return clearTimeout(r.current)}}),[a,c,t,e]);return[function(){c>0&&t(Q.ON)}]}(),u=Object(s.a)(o,1)[0];return c.a.createElement("div",{className:Be("clockPinBlock",[e?"visible":"hidden"])},c.a.createElement("label",{className:Be("clockLabel")},c.a.createElement("div",{onClick:u,className:Be("clock",[t===Q.ON&&"enabled"])},"Clock ",c.a.createElement("span",{className:Be("currentTacts")},"(",r," tacts left)")),c.a.createElement("div",{className:Be("tacts")},c.a.createElement("input",{type:"number",className:Be("tactsNumber"),value:a,onChange:function(e){return l(e.target.value)}})," ","Tacts ",c.a.createElement("span",{className:Be("tactsNote")},"determined by the hardware producer"))),c.a.createElement(Me,{binaryData:t,setBinaryData:u}))},Ye=(a(54),b("MemoryControls")),Pe=[{value:!1,label:"Default"},{value:!0,label:"Classical"}],ze=function(){var e=Ee(h),t=Object(i.c)(pe);return function(){var e=Ee(g),t=Object(i.c)(ce),a=Object(i.c)(re),c=Object(i.c)(R);Object(n.useEffect)((function(){a&&Object(Ne.compose)(e,(function(e){return e.map((function(e,t){return c[t]||e}))}),(function(e){return e.fill({isDirty:!1,datum:Q.OFF.repeat(t)})}))(new Array(Math.pow(2,a)))}),[a,t,e])}(),function(){var e=Ee(g),t=Object(i.c)(ce),a=Object(i.c)(R);Object(n.useEffect)((function(){Object(Ne.compose)(e,Object(Se.a)((function(e){return Object(O.a)(Object(O.a)({},e),{},{datum:e.datum.padStart(t,Q.OFF).slice(-t)})})))(a)}),[t,e])}(),function(){var e=Ee(E),t=Ee(y),a=Ee(j),c=Ee(p),r=Object(i.c)(R),l=Ee(T),s=Object(i.c)(ae),o=Object(i.c)(re),u=Object(i.c)(ce),b=Object(i.c)(L),d=Object(i.c)(le),m=Object(i.c)(ne),O=Object(i.c)(ie),f=Object(i.c)(ue),v=Object(i.c)(he),h=Object(i.c)(be),N=function(t){return e(K,t)};Object(n.useEffect)((function(){O&&0!==f&&N(Q.OFF.repeat(u))}),[O]),Object(n.useEffect)((function(){b&&O===z&&(l(m,b),t(""))}),[b,m,l,c,a]),Object(n.useEffect)((function(){b&&O===P&&(N(r[parseInt(s,2)].datum),t(""))}),[O,r,s,b,m]),Object(n.useEffect)((function(){d===H&&0===f&&(v?h===Q.ON?a(Object(F.a)(Math.ceil(o/2),s)):c(Object(Y.a)(Math.floor(o/2),s)):O===z?t(s):N(r[parseInt(s,2)].datum))}),[d,O,s,m,f,o,l])}(),c.a.createElement("span",{className:Ye()},c.a.createElement(ge,{containerClassName:Ye("viewOptions"),options:Pe,selectedValue:t,handleSelect:e}),c.a.createElement(De,null),c.a.createElement(Le,null),c.a.createElement(We,null),c.a.createElement(Fe,null))},He=(a(55),b("VisualizationSettings")),Ve=function(){var e=Object(i.c)(ye),t=Object(i.c)(he),a=Ee(S),r=Ee(C),l=Ee(_);return Object(n.useEffect)((function(){e||r(0)}),[e,r]),c.a.createElement("div",{className:He()},c.a.createElement("label",{className:He("tacting")},c.a.createElement("input",{className:He("tactingInput"),type:"checkbox",checked:e,onChange:function(){return a(!e)}}),"Tacting"),c.a.createElement("label",{className:He("rasCas")},c.a.createElement("input",{className:He("rasCasInput"),type:"checkbox",checked:t,onChange:function(){return l(!t)}}),"RAS / CAS"))},Ge=b("RamVisualization");var Xe=function(){return c.a.createElement("div",{className:Ge()},c.a.createElement("div",{className:Ge("caption")},c.a.createElement("h1",{className:Ge("header")},"RAM Visualization"),c.a.createElement(Ve,null)),c.a.createElement("div",{className:Ge("visualization")},c.a.createElement("div",{className:Ge("pins")},c.a.createElement(ze,null)),c.a.createElement("div",{className:Ge("memory")},c.a.createElement(Ce,null))),c.a.createElement("div",{className:Ge("notes")},c.a.createElement("div",null,"\uff0a LSB - Least Significant Bit (right-most bit)"),c.a.createElement("div",null,"\uff0a MSB - Most Significant Bit (left-most bit)")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(56);var Ue=a(38),Ke=a(37),Je=Object(Ne.combineReducers)({memory:D,pinsInfo:te,visualizationSettings:je}),$e=a(13),qe=a.n($e),Qe=a(9),Ze=a(66),et=qe.a.mark(lt),tt=qe.a.mark(it),at=qe.a.mark(st),nt=qe.a.mark(ot),ct=qe.a.mark(ut),rt=qe.a.mark(bt);function lt(e){return qe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.payload){t.next=5;break}return t.next=3,Object(Qe.b)(j(""));case 3:return t.next=5,Object(Qe.b)(p(""));case 5:case"end":return t.stop()}}),et)}function it(e){var t;return qe.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e.payload.isEnabled){a.next=8;break}return a.next=3,Object(Qe.c)(oe);case 3:return t=a.sent,a.next=6,Object(Qe.b)(E(G,Q.ON));case 6:return a.next=8,Object(Qe.b)(C(t));case 8:case"end":return a.stop()}}),tt)}function st(e){var t;return qe.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e.payload.isEnabled){a.next=6;break}return a.next=3,Object(Qe.c)(oe);case 3:return t=a.sent,a.next=6,Object(Qe.b)(C(t));case 6:case"end":return a.stop()}}),at)}function ot(e){var t,a;return qe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.next=3,Object(Qe.c)(k);case 3:if(a=n.sent,Object(Ze.a)(t)||Object(Ze.a)(a)){n.next=7;break}return n.next=7,Object(Qe.b)(y("".concat(a).concat(t)));case 7:case"end":return n.stop()}}),nt)}function ut(e){var t,a,n,c;return qe.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(Qe.c)(ue);case 2:return t=r.sent,a=e.payload,r.next=6,Object(Qe.c)(he);case 6:return n=r.sent,r.next=9,Object(Qe.c)(oe);case 9:if(c=r.sent,a!==Q.ON){r.next=13;break}return r.next=13,Object(Qe.b)(C(t-1));case 13:if(0!==t||a!==Q.OFF){r.next=19;break}return r.next=16,Object(Qe.b)(C(c));case 16:if(!n){r.next=19;break}return r.next=19,Object(Qe.b)({type:"TOGGLE_RAS_CAS"});case 19:case"end":return r.stop()}}),ct)}function bt(){return qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Qe.a)([Object(Qe.d)("SET_SELECTED_ADDRESS_IN_MEMORY",lt),Object(Qe.d)("SET_IS_RAS_CAS_ENABLED",it),Object(Qe.d)("SET_IS_TACTING_ENABLED",st),Object(Qe.d)("SET_SELECTED_COL_IN_MEMORY",ot),Object(Qe.d)("SET_CLOCK_PIN",ut)]);case 2:case"end":return e.stop()}}),rt)}var dt=Object(Ue.a)(),mt=Object(Ke.composeWithDevTools)({}),Ot=function(){var e=Object(Ne.createStore)(Je,mt(Object(Ne.applyMiddleware)(dt)));return dt.run(bt),e}();l.a.render(c.a.createElement(i.a,{store:Ot},c.a.createElement(Xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.35e9d5e8.chunk.js.map
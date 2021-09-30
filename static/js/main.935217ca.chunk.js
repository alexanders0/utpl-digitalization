(this["webpackJsonputpl-digitalization"]=this["webpackJsonputpl-digitalization"]||[]).push([[0],{67:function(e,a,t){},90:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(16),c=t.n(r),s=(t(67),t(7)),i=t(2),o=l.a.createContext();function u(e){var a=l.a.useState([]),t=Object(s.a)(a,2),n=t[0],r=t[1],c=l.a.useState(!1),u=Object(s.a)(c,2),b=u[0],j=u[1];return Object(i.jsx)(o.Provider,{value:{scannedDocuments:n,setScannedDocuments:r,isScanning:b,setScanning:j},children:e.children})}t(48);var b=t(26),j=(t(28),t(18)),d=t(32),p=t(14),m=t(33),O=t(21),h=t(61),x=t(60),g=t(58),f=t(59);function v(e){var a=l.a.useContext(o),t=a.setScannedDocuments,n=a.isScanning,r=a.setScanning,c=l.a.useState([]),u=Object(s.a)(c,2),v=u[0],S=u[1],P=l.a.useState([]),y=Object(s.a)(P,2),_=y[0],k=y[1],C=function(e){var a=e.src.split(",")[1],t=function(e){for(var a=e.length,t=new ArrayBuffer(a),n=new Uint8Array(t),l=0;l<a;l++)n[l]=e.charCodeAt(l);return t}(window.atob(a)),n=new Blob([t],{type:"application/pdf"});return new File([n],"document.pdf",{type:"application/pdf"})},V=function(e,a,t){if(!e)return console.error("Failed: "+a),void r(!1);if(e&&null!=a&&a.toLowerCase().indexOf("user cancel")>=0)return console.info("User cancelled"),void r(!1);for(var n=scanner.getScannedImages(t,!0,!1),l=0;n instanceof Array&&l<n.length;l++){var c=n[l];T(c)}for(var s=scanner.getScannedImages(t,!1,!0),i=0;s instanceof Array&&i<s.length;i++){var o=s[i];N(o)}r(!1)},T=function(e){!function(e){S((function(a){return[].concat(Object(b.a)(a),[e])}))}(e),function(e){t((function(a){return[].concat(Object(b.a)(a),[e])}))}(C(e))},N=function(e){!function(e){k((function(a){return[].concat(Object(b.a)(a),[e])}))}(e)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(p.a,{children:[Object(i.jsxs)(j.a,{className:"m-1",variant:"primary",size:"sm",type:"submit",disabled:n,onClick:function(){r(!0),scanner.scan(V,{use_asprise_dialog:!1,prompt_scan_more:!0,twain_cap_setting:{ICAP_PIXELTYPE:e.colorMode,ICAP_XRESOLUTION:e.resolution,ICAP_YRESOLUTION:e.resolution,ICAP_SUPPORTEDSIZES:e.paperSize},detect_blank_pages:e.detectBlankPages,blank_page_threshold:"0.0001",blank_page_margin_percent:"8",blank_page_policy:e.keepBlankPages,doc_separators:[e.blankPageSeparator],output_settings:[{type:"return-base64",format:"pdf"},{type:"return-base64-thumbnail",format:"jpg",thumbnail_height:400}]})},children:[n?Object(i.jsx)(d.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):Object(i.jsx)(g.a,{}),n?" Scanning\u2026":"Scan"]}),Object(i.jsxs)(j.a,{className:"m-1",variant:"primary",size:"sm",type:"submit",onClick:function(){S([]),k([]),t([])},children:[Object(i.jsx)(f.a,{}),"Clear"]})]}),Object(i.jsx)(p.a,{children:Object(i.jsxs)(m.a,{children:[Object(i.jsxs)("p",{children:["Longitud imagesScanned: ",v.length]}),Object(i.jsxs)("p",{children:["Longitud Thumbnails: ",_.length]}),_.map((function(e,a){return Object(i.jsxs)(O.a,{xs:6,md:4,children:[Object(i.jsx)(x.a,{pill:!0,bg:"primary",children:a+1}),Object(i.jsx)(h.a,{id:"sampleImg",src:e.src,thumbnail:!0})]},a)}))]})})]})}var S=t(23),P=t(10);function y(e){var a=l.a.useContext(o).isScanning;return Object(i.jsx)(S.a,{controlId:"floatingSelect",label:e.label,className:"mb-2",children:Object(i.jsx)(P.a.Select,{disabled:a?"true":"","aria-label":"Floating label select example",value:e.parameterValue,onChange:function(a){e.setParameterValue(a.target.value)},children:e.options.map((function(e){return Object(i.jsx)("option",{value:e.value,children:e.label},e.value)}))})})}function _(){var e=l.a.useState("TWPT_RGB"),a=Object(s.a)(e,2),t=a[0],n=a[1],r=l.a.useState("200"),c=Object(s.a)(r,2),o=c[0],u=c[1],b=l.a.useState("TWSS_A4"),j=Object(s.a)(b,2),d=j[0],h=j[1],x=l.a.useState("false"),g=Object(s.a)(x,2),f=g[0],S=g[1],_=l.a.useState("keep"),k=Object(s.a)(_,2),C=k[0],V=k[1],T=l.a.useState(""),N=Object(s.a)(T,2),D=N[0],F=N[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(p.a,{className:"mt-3",children:Object(i.jsx)(P.a,{children:Object(i.jsxs)(m.a,{children:[Object(i.jsxs)(O.a,{xs:6,md:3,children:[Object(i.jsx)("h4",{children:"Scan Parameters"}),Object(i.jsx)(y,{label:"Color mode",parameterValue:t,setParameterValue:n,options:[{value:"TWPT_RGB",label:"Color"},{value:"TWPT_GRAY",label:"Gris"},{value:"TWPT_BW",label:"Blanco/Negro"}]}),Object(i.jsx)(y,{label:"Resolution (DPI)",parameterValue:o,setParameterValue:u,options:[{value:"100",label:"100"},{value:"150",label:"150"},{value:"200",label:"200"},{value:"250",label:"250"},{value:"300",label:"300"},{value:"350",label:"350"},{value:"400",label:"400"}]}),Object(i.jsx)(y,{label:"Paper Size",parameterValue:d,setParameterValue:h,options:[{value:"TWSS_A4",label:"A4"},{value:"TWSS_USLETTER",label:"Carta"}]}),Object(i.jsx)(y,{label:"Detect Blank Pages",parameterValue:f,setParameterValue:S,options:[{value:"true",label:"Yes"},{value:"false",label:"No"}]}),"true"===f?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(y,{label:"Keep Blank Pages",parameterValue:C,setParameterValue:V,options:[{value:"keep",label:"Yes"},{value:"remove",label:"No"}]}),Object(i.jsx)(y,{label:"Document Separator (Blank Page)",parameterValue:D,setParameterValue:F,options:[{value:"blank:DOC_SEP",label:"Yes"},{value:"",label:"No"}]})]}):null]}),Object(i.jsx)(O.a,{xs:12,md:8,children:Object(i.jsx)(v,{colorMode:t,resolution:o,paperSize:d,detectBlankPages:f,keepBlankPages:C,blankPageSeparator:D})})]})})})})}function k(e){return Object(i.jsxs)(P.a.Group,{className:"mb-3",children:[Object(i.jsx)(P.a.Label,{children:e.labelName}),Object(i.jsx)(P.a.Control,{required:!0,size:"sm",type:"text",placeholder:"Enter a value",value:e.propertyValue,onChange:function(a){e.setPropertyValue(a.target.value)}})]})}var C=t(35),V=t.n(C);function T(e){return Object(i.jsx)(S.a,{controlId:"floatingSelect",label:e.labelName,className:"mb-2",children:Object(i.jsx)(P.a.Select,{"aria-label":"Floating label select example",value:e.propertyValue,onChange:function(a){e.setPropertyValue(a.target.value)},required:!0,children:e.scannedDocuments.map((function(e,a){return Object(i.jsx)("option",{value:a,children:a+1},a)}))})})}var N=t(3),D=t(27),F=t(40);function B(e){return Object(i.jsxs)(D.a,Object(N.a)(Object(N.a)({},e),{},{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(i.jsx)(D.a.Header,{closeButton:!0,children:Object(i.jsx)(D.a.Title,{id:"contained-modal-title-vcenter",children:"Upload Status"})}),Object(i.jsx)(D.a.Body,{children:e.error?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("p",{children:[Object(i.jsx)(F.b,{color:"red"})," There was an error :("]}),Object(i.jsx)("p",{children:"Please try again."})]}):Object(i.jsxs)("p",{children:[Object(i.jsx)(F.a,{color:"green"})," File uploaded successfully!"]})}),Object(i.jsx)(D.a.Footer,{children:Object(i.jsx)(j.a,{size:"sm",onClick:e.onHide,children:"Close"})})]}))}var I=t(62);function w(){var e=l.a.useContext(o).scannedDocuments,a=l.a.useState("RQ00"),t=Object(s.a)(a,2),n=t[0],r=t[1],c=l.a.useState("Sample Desc"),u=Object(s.a)(c,2),b=u[0],m=u[1],O=l.a.useState("scannedDocument.pdf"),h=Object(s.a)(O,2),x=h[0],g=h[1],f=l.a.useState(0),v=Object(s.a)(f,2),S=v[0],y=v[1],_=l.a.useState(!1),C=Object(s.a)(_,2),N=C[0],D=C[1],F=l.a.useState(!1),w=Object(s.a)(F,2),z=w[0],A=w[1],E=l.a.useState(!1),R=Object(s.a)(E,2),L=R[0],U=R[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(p.a,{children:Object(i.jsxs)(P.a,{onSubmit:function(a){a.preventDefault();var t=function(e,a){return new File([e],a,{type:"application/pdf"})}(e[S],x),l=new FormData;l.append("name",n),l.append("description",b),l.append("attachment",t),console.log(t),A(!0),V.a.post("https://attachments-test.xyz/requirements/",l,{headers:{"Content-type":"multipart/form-data"}}).then((function(e){A(!1),201===e.status&&(U(!1),D(!0),console.log("Todo OK"),console.log(e.data))})).catch((function(e){A(!1),U(!0),D(!0),console.log(e)}))},className:"col-md-4 mx-auto",children:[Object(i.jsx)("h4",{children:"Upload Scanned File"}),Object(i.jsx)(k,{labelName:"Requirement Name: ",propertyValue:n,setPropertyValue:r}),Object(i.jsx)(k,{labelName:"Requirement Description: ",propertyValue:b,setPropertyValue:m}),Object(i.jsx)(k,{labelName:"Document Name: ",propertyValue:x,setPropertyValue:g}),Object(i.jsx)(T,{labelName:"Scanned Document: ",scannedDocuments:e,propertyValue:S,setPropertyValue:y}),Object(i.jsxs)(j.a,{variant:"primary",size:"sm",type:"submit",disabled:z,children:[z?Object(i.jsx)(d.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):Object(i.jsx)(I.a,{}),z?" Uploading file...":" Upload file"]})]})}),Object(i.jsx)(B,{show:N,onHide:function(){return D(!1)},error:L?1:0})]})}var z=t(47),A=t.p+"static/media/utpl_logo.92719d4e.png";function E(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(z.a,{bg:"dark",variant:"dark",sticky:"top",children:Object(i.jsx)(p.a,{children:Object(i.jsxs)(z.a.Brand,{href:"#home",children:[Object(i.jsx)("img",{alt:"",src:A,width:"15",height:"30",className:"d-inline-block align-top"})," ","Scan App"]})})}),Object(i.jsx)(_,{}),Object(i.jsx)(w,{})]})}var R=function(){return Object(i.jsx)(u,{children:Object(i.jsx)(E,{})})},L=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,92)).then((function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)}))};c.a.render(Object(i.jsx)(l.a.StrictMode,{children:Object(i.jsx)(R,{})}),document.getElementById("root")),L()}},[[90,1,2]]]);
//# sourceMappingURL=main.935217ca.chunk.js.map
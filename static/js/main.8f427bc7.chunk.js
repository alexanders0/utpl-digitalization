(this["webpackJsonputpl-digitalization"]=this["webpackJsonputpl-digitalization"]||[]).push([[0],{66:function(e,a,t){},89:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(16),l=t.n(c),s=(t(66),t(7)),o=t(2),i=r.a.createContext();function u(e){var a=r.a.useState([]),t=Object(s.a)(a,2),n=t[0],c=t[1];return Object(o.jsx)(i.Provider,{value:{scannedDocuments:n,setScannedDocuments:c},children:e.children})}t(48);var j=t(26),b=(t(28),t(20)),d=t(32),p=t(14),m=t(33),O=t(21),h=t(60),x=t(59),f=t(58);function g(e){var a=r.a.useContext(i),t=a.scannedDocuments,n=a.setScannedDocuments,c=r.a.useState([]),l=Object(s.a)(c,2),u=l[0],g=l[1],v=r.a.useState([]),S=Object(s.a)(v,2),y=S[0],P=S[1],_=r.a.useState(!1),C=Object(s.a)(_,2),T=C[0],V=C[1],D=function(e){var a=e.src.split(",")[1],t=function(e){for(var a=e.length,t=new ArrayBuffer(a),n=new Uint8Array(t),r=0;r<a;r++)n[r]=e.charCodeAt(r);return t}(window.atob(a)),n=new Blob([t],{type:"application/pdf"});return new File([n],"document.pdf",{type:"application/pdf"})},F=function(e,a,t){if(!e)return console.error("Failed: "+a),void V(!1);if(e&&null!=a&&a.toLowerCase().indexOf("user cancel")>=0)return console.info("User cancelled"),void V(!1);for(var n=scanner.getScannedImages(t,!0,!1),r=0;n instanceof Array&&r<n.length;r++){var c=n[r];I(c)}for(var l=scanner.getScannedImages(t,!1,!0),s=0;l instanceof Array&&s<l.length;s++){var o=l[s];N(o)}V(!1)},I=function(e){!function(e){g([].concat(Object(j.a)(u),[e]))}(e),function(e){n([].concat(Object(j.a)(t),[e]))}(D(e))},N=function(e){!function(e){P([].concat(Object(j.a)(y),[e]))}(e)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(p.a,{children:Object(o.jsxs)(b.a,{variant:"primary",size:"sm",type:"submit",disabled:T,onClick:function(){V(!0),scanner.scan(F,{use_asprise_dialog:!1,twain_cap_setting:{ICAP_PIXELTYPE:e.colorMode,ICAP_XRESOLUTION:e.resolution,ICAP_YRESOLUTION:e.resolution,ICAP_SUPPORTEDSIZES:e.paperSize},detect_blank_pages:"true",blank_page_threshold:"0.0001",blank_page_margin_percent:"8",blank_page_policy:"remove",doc_separators:["blank:DOC_SEP"],output_settings:[{type:"return-base64",format:"pdf"},{type:"return-base64-thumbnail",format:"jpg",thumbnail_height:400}]})},children:[T?Object(o.jsx)(d.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):Object(o.jsx)(f.a,{}),T?" Scanning\u2026":"Scan"]})}),Object(o.jsx)(p.a,{children:Object(o.jsx)(m.a,{children:y.map((function(e,a){return Object(o.jsxs)(O.a,{xs:6,md:4,children:[Object(o.jsx)(x.a,{pill:!0,bg:"primary",children:a+1}),Object(o.jsx)(h.a,{id:"sampleImg",src:e.src,thumbnail:!0})]},a)}))})})]})}var v=t(23),S=t(10);function y(e){return Object(o.jsx)(v.a,{controlId:"floatingSelect",label:e.label,className:"mb-2",children:Object(o.jsx)(S.a.Select,{"aria-label":"Floating label select example",value:e.parameterValue,onChange:function(a){e.setParameterValue(a.target.value)},children:e.options.map((function(e){return Object(o.jsx)("option",{value:e.value,children:e.label},e.value)}))})})}function P(){var e=r.a.useState("TWPT_RGB"),a=Object(s.a)(e,2),t=a[0],n=a[1],c=r.a.useState("200"),l=Object(s.a)(c,2),i=l[0],u=l[1],j=r.a.useState("TWSS_A4"),b=Object(s.a)(j,2),d=b[0],h=b[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(p.a,{children:Object(o.jsx)(S.a,{children:Object(o.jsxs)(m.a,{children:[Object(o.jsxs)(O.a,{xs:6,md:3,children:[Object(o.jsx)("h4",{children:"Scan Parameters"}),Object(o.jsx)(y,{label:"Color mode",parameterValue:t,setParameterValue:n,options:[{value:"TWPT_RGB",label:"Color"},{value:"TWPT_GRAY",label:"Gris"},{value:"TWPT_BW",label:"Blanco/Negro"}]}),Object(o.jsx)(y,{label:"Resolution (DPI)",parameterValue:i,setParameterValue:u,options:[{value:"100",label:"100"},{value:"150",label:"150"},{value:"200",label:"200"},{value:"250",label:"250"},{value:"300",label:"300"},{value:"350",label:"350"},{value:"400",label:"400"}]}),Object(o.jsx)(y,{label:"Paper Size",parameterValue:d,setParameterValue:h,options:[{value:"TWSS_A4",label:"A4"},{value:"TWSS_USLETTER",label:"Carta"}]})]}),Object(o.jsx)(O.a,{xs:12,md:8,children:Object(o.jsx)(g,{colorMode:t,resolution:i,paperSize:d})})]})})})})}function _(e){return Object(o.jsxs)(S.a.Group,{className:"mb-3",children:[Object(o.jsx)(S.a.Label,{children:e.labelName}),Object(o.jsx)(S.a.Control,{required:!0,size:"sm",type:"text",placeholder:"Enter a value",value:e.propertyValue,onChange:function(a){e.setPropertyValue(a.target.value)}})]})}var C=t(35),T=t.n(C);function V(e){return Object(o.jsx)(v.a,{controlId:"floatingSelect",label:e.labelName,className:"mb-2",children:Object(o.jsx)(S.a.Select,{"aria-label":"Floating label select example",value:e.propertyValue,onChange:function(a){e.setPropertyValue(a.target.value)},required:!0,children:e.scannedDocuments.map((function(e,a){return Object(o.jsx)("option",{value:a,children:a+1},a)}))})})}var D=t(3),F=t(27),I=t(40);function N(e){return Object(o.jsxs)(F.a,Object(D.a)(Object(D.a)({},e),{},{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(o.jsx)(F.a.Header,{closeButton:!0,children:Object(o.jsx)(F.a.Title,{id:"contained-modal-title-vcenter",children:"Upload Status"})}),Object(o.jsx)(F.a.Body,{children:e.error?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("p",{children:[Object(o.jsx)(I.b,{color:"red"})," There was an error :("]}),Object(o.jsx)("p",{children:"Please try again."})]}):Object(o.jsxs)("p",{children:[Object(o.jsx)(I.a,{color:"green"})," File uploaded successfully!"]})}),Object(o.jsx)(F.a.Footer,{children:Object(o.jsx)(b.a,{size:"sm",onClick:e.onHide,children:"Close"})})]}))}var w=t(61);function A(){var e=r.a.useContext(i).scannedDocuments,a=r.a.useState("RQ00"),t=Object(s.a)(a,2),n=t[0],c=t[1],l=r.a.useState("Sample Desc"),u=Object(s.a)(l,2),j=u[0],m=u[1],O=r.a.useState("scannedDocument.pdf"),h=Object(s.a)(O,2),x=h[0],f=h[1],g=r.a.useState(0),v=Object(s.a)(g,2),y=v[0],P=v[1],C=r.a.useState(!1),D=Object(s.a)(C,2),F=D[0],I=D[1],A=r.a.useState(!1),k=Object(s.a)(A,2),z=k[0],B=k[1],E=r.a.useState(!1),R=Object(s.a)(E,2),U=R[0],L=R[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(p.a,{children:Object(o.jsxs)(S.a,{onSubmit:function(a){a.preventDefault();var t=function(e,a){return new File([e],a,{type:"application/pdf"})}(e[y],x),r=new FormData;r.append("name",n),r.append("description",j),r.append("attachment",t),console.log(t),B(!0),T.a.post("https://attachments-test.xyz/requirements/",r,{headers:{"Content-type":"multipart/form-data"}}).then((function(e){B(!1),201===e.status&&(L(!1),I(!0),console.log("Todo OK"),console.log(e.data))})).catch((function(e){B(!1),L(!0),I(!0),console.log(e)}))},className:"col-md-4 mx-auto",children:[Object(o.jsx)("h4",{children:"Upload Scanned File"}),Object(o.jsx)(_,{labelName:"Requirement Name: ",propertyValue:n,setPropertyValue:c}),Object(o.jsx)(_,{labelName:"Requirement Description: ",propertyValue:j,setPropertyValue:m}),Object(o.jsx)(_,{labelName:"Document Name: ",propertyValue:x,setPropertyValue:f}),Object(o.jsx)(V,{labelName:"Scanned Document: ",scannedDocuments:e,propertyValue:y,setPropertyValue:P}),Object(o.jsxs)(b.a,{variant:"primary",size:"sm",type:"submit",disabled:z,children:[z?Object(o.jsx)(d.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):Object(o.jsx)(w.a,{}),z?" Uploading file...":" Upload file"]})]})}),Object(o.jsx)(N,{show:F,onHide:function(){return I(!1)},error:U?1:0})]})}var k=t(47),z=t.p+"static/media/utpl_logo.92719d4e.png";function B(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(k.a,{bg:"dark",variant:"dark",sticky:"top",children:Object(o.jsx)(p.a,{children:Object(o.jsxs)(k.a.Brand,{href:"#home",children:[Object(o.jsx)("img",{alt:"",src:z,width:"15",height:"30",className:"d-inline-block align-top"})," ","Scan App"]})})}),Object(o.jsx)(P,{}),Object(o.jsx)(A,{})]})}var E=function(){return Object(o.jsx)(u,{children:Object(o.jsx)(B,{})})},R=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,91)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,l=a.getTTFB;t(e),n(e),r(e),c(e),l(e)}))};l.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(E,{})}),document.getElementById("root")),R()}},[[89,1,2]]]);
//# sourceMappingURL=main.8f427bc7.chunk.js.map
(this["webpackJsonpimage-approval-app"]=this["webpackJsonpimage-approval-app"]||[]).push([[0],{84:function(e,n,t){"use strict";t.r(n);t(0);var r,a,i,o,c,s,d,l,p,g,u,b,j,m,f=t(14),x=t.n(f),h=t(6),O=t(3),I=t(4),v=I.b.div(r||(r=Object(O.a)(["\n    position: relative;\n    margin: auto;\n    width: 300px;\n    height: 380px;\n    border-radius: 5px;\n    background: ","};\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    overflow: hidden;\n"])),(function(e){var n=e.background;return n||null})),y=t(21),S=t.n(y),k=t(37),w=t(38),E=t.n(w),_="MAIN_IMAGE_FETCH_LOADING",A="MAIN_IMAGE_FETCH_SUCCESS",C="MAIN_IMAGE_FETCH_FAILED",M="MAIN_IMAGE_REMOVE",z="APPROVED_IMAGES_ADD_IMAGE",N="APPROVED_IMAGES_REMOVE_IMAGE",G="REJECTED_IMAGES_ADD_IMAGE",J=t(15),D=t(39),F=t(22),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case _:return Object(F.a)(Object(F.a)({},e),{},{loading:!0});case A:return{loading:!1,image:n.payload,error:null};case C:return{image:{},loading:!1,error:n.payload};case M:return{image:{},loading:!1,error:null};default:return e}},T=t(12),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case z:var t=e.find((function(e){return e.id===n.payload.id}));if(!t){var r=[].concat(Object(T.a)(e),[n.payload]);return sessionStorage.setItem("approvedImages",JSON.stringify(r)),r}return e;case N:var a=e.findIndex((function(e){return e.id===n.payload.id})),i=[].concat(Object(T.a)(e.slice(0,a)),Object(T.a)(e.slice(a+1)));return sessionStorage.setItem("approvedImages",JSON.stringify(i)),i;default:return e}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(n.type===G){var t=[].concat(Object(T.a)(e),[n.payload]);return sessionStorage.setItem("rejectedImages",JSON.stringify(t)),t}return e},V=[D.a],H=Object(J.b)({mainImage:P,approvedImages:R,rejectedImages:L}),U={mainImage:{loading:!1,image:sessionStorage.getItem("mainImage")?JSON.parse(sessionStorage.getItem("mainImage")):{},error:null},approvedImages:sessionStorage.getItem("approvedImages")?JSON.parse(sessionStorage.getItem("approvedImages")):[],rejectedImages:sessionStorage.getItem("rejectedImages")?JSON.parse(sessionStorage.getItem("rejectedImages")):[]},B=Object(J.c)(H,U,J.a.apply(void 0,V)),W=function(){return function(){var e=Object(k.a)(S.a.mark((function e(n){var t,r,a,i,o,c,s,d;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:_}),e.next=4,E.a.get("https://api.unsplash.com/photos/random/?client_id=G1leH2R7_Ep6W99UUwh2I_Mn46hM2AT8Vw0Lf2dwI4E");case 4:t=e.sent,r=t.data,a=r.id,i=r.urls,o=i.thumb,c=i.full,s=r.alt_description,d={id:a,url:{smallSize:o,fullSize:c},description:s},sessionStorage.setItem("mainImage",JSON.stringify(d)),n({type:A,payload:d}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),n({type:C,payload:e.t0.response.data});case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(n){return e.apply(this,arguments)}}()},q=function(e){return void 0!==B.getState().rejectedImages.find((function(n){return n===e}))},K=t(7),Q=t(8),X=t(40),Y=t.n(X),Z=t(1),$=function(){var e=Object(h.b)(),n=Object(h.c)((function(e){return e.mainImage})),t=n.image,r=t.id,a=t.url,i=t.description,o=n.loading;return Object(Z.jsx)(v,{background:r?null:"#cfcfcf",children:o?Object(Z.jsx)(Y.a,{"data-testid":"loader-div",type:"spin",color:"gray",height:75,width:75}):r?Object(Z.jsx)("a",{href:a.fullSize,target:"_blank",rel:"noreferrer",children:Object(Z.jsx)("img",{"data-testid":"main-img",src:a.smallSize,alt:i,width:"300",height:"380"})}):Object(Z.jsx)(K.a,{"data-testid":"plus-icon",onClick:function(){return e(W())},icon:Q.b,color:"gray",size:"5x"})})},ee=Object(I.a)(a||(a=Object(O.a)(["\n    * {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n        font-family: 'Source Sans Pro', sans-serif;\n    }\n\n    body {\n        background-color: #3953e1;\n    }\n"]))),ne=I.b.button(i||(i=Object(O.a)(["\n    border-radius: 25px;\n    padding: 15px 50px;\n    margin: 0 5px;\n    background: ",";\n    color: white;\n    border: none;\n    cursor: pointer;\n    transition: transform .2s;\n\n    &:hover {\n        transform: scale(1.1);\n    }\n"])),(function(e){return e.backgroundColor})),te=I.b.hr(o||(o=Object(O.a)(["\n    width: 90%;\n    opacity: 0.5;\n    text-align: center;\n    margin: 10px auto;\n"]))),re=ee,ae=I.b.div(c||(c=Object(O.a)(["\n    height: 150px;\n"]))),ie=I.b.p(s||(s=Object(O.a)(["\n    opacity: 0.6;\n    font-size: 12px;\n    font-weight: bold;\n    text-align: center;\n    margin: 10px 0;\n"]))),oe=I.b.p(d||(d=Object(O.a)(["\n    color: red;\n    opacity: 0.8;\n    font-size: 14px;\n    font-weight: bold;\n    text-align: center;\n    margin: 10px 0;\n"]))),ce=I.b.div(l||(l=Object(O.a)(["\n    margin: 10px 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),se=function(){var e=Object(h.b)(),n=Object(h.c)((function(e){return e.mainImage})),t=n.image,r=n.error;return Object(Z.jsx)(ae,{children:r?Object(Z.jsx)(oe,{"data-testid":"error-text",children:r}):t.id?Object(Z.jsxs)(ce,{children:[Object(Z.jsx)(ne,{onClick:function(){return e((n=t.id,function(e){for(e({type:G,payload:n}),e({type:M}),e(W());q(B.getState().mainImage.id);)e(W())}));var n},backgroundColor:"#454545",children:Object(Z.jsx)(K.a,{icon:Q.c,color:"white",size:"lg"})}),Object(Z.jsx)(ne,{onClick:function(){return e(function(e){return function(n){n({type:z,payload:e}),sessionStorage.setItem("mainImage",JSON.stringify({})),n({type:M})}}(t))},backgroundColor:"#3b55e6",children:Object(Z.jsx)(K.a,{icon:Q.a,color:"white",size:"lg"})})]}):Object(Z.jsx)(ie,{children:"Click on the + in order to get image recommendations"})})},de=I.b.div(p||(p=Object(O.a)(["\n    margin: auto;\n    margin-top: 50px;\n    width: 370px;\n    height: 630px;\n    background-color: white;\n    border-radius: 5px;\n"]))),le=I.b.p(g||(g=Object(O.a)(["\n    text-align: left;\n    margin-left 20px;\n    color: #3953e1;\n    text-transform: uppercase;\n    font-size: 12px;\n    font-weight: 700;\n    padding: 10px 0px;\n"]))),pe=(t(71),t(41)),ge=t.n(pe),ue=Object(I.b)(ge.a)(u||(u=Object(O.a)(["\n    margin-left: 10px;\n"]))),be=I.b.p(b||(b=Object(O.a)(["\n    text-align: left;\n    margin-left: 20px;\n    color: #3953e1;\n    text-transform: uppercase;\n    font-size: 12px;\n    font-weight: 700;\n    padding: 10px 0px;\n"]))),je=I.b.div(j||(j=Object(O.a)(["\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n    margin-left: 10px;\n    width: 75px;\n    height: 50px;\n    overflow: hidden;\n    background: ",";\n"])),(function(e){return e.background})),me=I.b.span(m||(m=Object(O.a)(['\n    position: absolute;\n    content: "";\n    top: 0px;\n    right: 2px;\n    cursor: pointer;\n']))),fe={desktop:{breakpoint:{max:3e3,min:1024},items:4},tablet:{breakpoint:{max:1024,min:464},items:4},mobile:{breakpoint:{max:464,min:0},items:3}},xe=function(){var e=Object(h.c)((function(e){return e.approvedImages})),n=Object(h.b)();return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsxs)(be,{children:["approved images (",e.length,")"]}),Object(Z.jsx)(ue,{responsive:fe,containerClass:"carousel-container",children:e.length>0?e.map((function(e){var t=e.id,r=e.url.smallSize,a=e.description;return Object(Z.jsxs)(je,{children:[Object(Z.jsx)("img",{src:r,alt:a,width:"75",height:"50"}),Object(Z.jsx)(me,{onClick:function(){return n({type:N,payload:{id:t}})},children:Object(Z.jsx)(K.a,{icon:Q.c,color:"white",size:"xs"})})]},t)})):Object(Z.jsx)(je,{background:"#cfcfcf",children:Object(Z.jsx)(K.a,{icon:Q.b,color:"gray",size:"1x"})})})]})},he=function(){return Object(Z.jsxs)(de,{children:[Object(Z.jsx)(le,{children:"image approval application"}),Object(Z.jsx)(xe,{}),Object(Z.jsx)(te,{}),Object(Z.jsx)($,{}),Object(Z.jsx)(te,{}),Object(Z.jsx)(se,{})]})};var Oe=function(){return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(re,{}),Object(Z.jsx)(he,{})]})},Ie=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,85)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),r(e),a(e),i(e),o(e)}))};x.a.render(Object(Z.jsx)(h.a,{store:B,children:Object(Z.jsx)(Oe,{})}),document.getElementById("root")),Ie()}},[[84,1,2]]]);
//# sourceMappingURL=main.ce280ab7.chunk.js.map
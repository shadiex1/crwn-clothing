(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{52:function(e,t,n){e.exports=n(86)},57:function(e,t,n){},59:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),i=n.n(c),l=(n(57),n(10)),o=n.n(l),s=n(5),u=n(15),m=n(22),p=n(23),d=n(25),b=n(24),h=n(26),g=n(27),f=(n(59),n(17)),v=Object(f.g)((function(e){var t=e.title,n=e.imageUrl,a=e.size,c=e.history,i=e.linkUrl;return r.a.createElement("div",{className:"".concat(a," menu-item"),onClick:function(){return c.push("".concat("/crwn-clothing/shop").concat(i))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"shop now")))})),E=(n(64),n(4)),w=n(3),y=Object(w.a)([function(e){return e.directory}],(function(e){return e.sections})),O=Object(w.b)({sections:y}),k=Object(E.b)(O)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,n=Object(g.a)(e,["id"]);return r.a.createElement(v,Object.assign({key:t},n))})))})),j=n(7),N=n(8);function x(){var e=Object(j.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px 80px;\n  "]);return x=function(){return e},e}var C=N.c.div(x()),U=function(e){return r.a.createElement(C,null,r.a.createElement(k,null))};function I(){var e=Object(j.a)(["\n\tbody {\n\t\tfont-family: 'Open Sans Condensed';\n\t\tpadding: 20px 40px;\n\t\t@media screen and (max-width: 800px) {\n\t\t\tpadding: 10px;\n\t\t}\n\t}\n\ta {\n\t\ttext-decoration: none;\n\t\tcolor: black;\n\t}\n\t* {\n\t\tbox-sizing: border-box;\n\t}\n"]);return I=function(){return e},e}var S=Object(N.a)(I());n(66),n(67),n(68);function T(){var e=Object(j.a)(["\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: 'Open Sans Condensed';\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  ","\n"]);return T=function(){return e},e}function A(){var e=Object(j.a)(["\n  background-color: #4285f4;\n  color: white;\n\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]);return A=function(){return e},e}function R(){var e=Object(j.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]);return R=function(){return e},e}function M(){var e=Object(j.a)(["\n  background-color: black;\n  color: white;\n  border: none;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]);return M=function(){return e},e}var B=Object(N.b)(M()),P=Object(N.b)(R()),_=Object(N.b)(A()),D=N.c.button(T(),(function(e){return e.isGoogleSignIn?_:e.inverted?P:B})),W=function(e){return r.a.createElement(D,e,e.children)},G={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",REMOVE_ITEM:"REMOVE_ITEM"},L=function(){return{type:G.TOGGLE_CART_HIDDEN}},V=function(e){return{type:G.ADD_ITEM,payload:e}},q=Object(E.b)(null,(function(e){return{addItem:function(t){return e(V(t))}}}))((function(e){var t=e.item,n=e.addItem,a=t.name,c=t.price,i=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},c)),r.a.createElement(W,{className:"custom-button",onClick:function(){return n(t)},inverted:!0},"Add to cart"))})),z=function(e){var t=e.title,n=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},n.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(q,{key:e.id,item:e})}))))},H=Object(w.a)([function(e){return e.shop}],(function(e){return e.collections})),J=Object(w.a)([H],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),F=Object(w.b)({collections:J}),K=Object(E.b)(F)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,n=Object(g.a)(e,["id"]);return r.a.createElement(z,Object.assign({key:t},n))})))})),Y=(n(69),Object(E.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(w.a)([H],(function(e){return e[n]})))(e)};var n}))((function(e){var t=e.collection,n=t.title,a=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},n),r.a.createElement("div",{className:"items"},a.map((function(e){return r.a.createElement(q,{key:e.id,item:e})}))))}))),Q=function(e){var t=e.match;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(f.b,{exact:!0,path:"".concat(t.path),component:K}),r.a.createElement(f.b,{path:"".concat(t.path,"/:collectionId"),component:Y}))},X=n(28),Z=n.n(X),$=(n(70),n(73),function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,r,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=te.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,a.set(Object(s.a)({displayName:r,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());Z.a.initializeApp({apiKey:"AIzaSyAyX-K6Z0jGBI0jP4Ad8MtdvDUFwUU52VA",authDomain:"crwn-database-1d74e.firebaseapp.com",databaseURL:"https://crwn-database-1d74e.firebaseio.com",projectId:"crwn-database-1d74e",storageBucket:"crwn-database-1d74e.appspot.com",messagingSenderId:"191706251460",appId:"1:191706251460:web:6a8cae347e72330d910991",measurementId:"G-S894E6YTGP"});var ee=Z.a.auth(),te=Z.a.firestore(),ne=new Z.a.auth.GoogleAuthProvider;ne.setCustomParameters({prompt:"select_account"});var ae=function(){return ee.signInWithPopup(ne)};Z.a,n(75);function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ce(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ie=r.a.createElement("g",null),le=r.a.createElement("g",null),oe=r.a.createElement("g",null),se=r.a.createElement("g",null),ue=r.a.createElement("g",null),me=r.a.createElement("g",null),pe=r.a.createElement("g",null),de=r.a.createElement("g",null),be=r.a.createElement("g",null),he=r.a.createElement("g",null),ge=r.a.createElement("g",null),fe=r.a.createElement("g",null),ve=r.a.createElement("g",null),Ee=r.a.createElement("g",null),we=r.a.createElement("g",null),ye=function(e){var t=e.svgRef,n=e.title,a=ce(e,["svgRef","title"]);return r.a.createElement("svg",re({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),ie,le,oe,se,ue,me,pe,de,be,he,ge,fe,ve,Ee,we)},Oe=r.a.forwardRef((function(e,t){return r.a.createElement(ye,re({svgRef:t},e))})),ke=(n.p,function(e){return e.cart}),je=Object(w.a)([ke],(function(e){return e.cartItems})),Ne=Object(w.a)([je],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),xe=Object(w.a)([ke],(function(e){return e.hidden})),Ce=Object(w.a)([je],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),Ue=Object(w.b)({itemCount:Ne}),Ie=Object(E.b)(Ue,(function(e){return{toggleCartHidden:function(){return e(L())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(Oe,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},n))})),Se=(n(76),n(77),function(e){var t=e.item,n=t.imageUrl,a=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:n,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i," x $",a)))}),Te=Object(w.b)({cartItems:je}),Ae=Object(f.g)(Object(E.b)(Te)((function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(Se,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(W,{onClick:function(){n.push("".concat("/crwn-clothing/checkout")),a(L())}},"GO TO CHECKOUT"))}))),Re=Object(w.a)([function(e){return e.user}],(function(e){return e.currentUser}));function Me(){return(Me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Be(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Pe=r.a.createElement("title",null,"Group"),_e=r.a.createElement("desc",null,"Created with Sketch."),De=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),We=function(e){var t=e.svgRef,n=e.title,a=Be(e,["svgRef","title"]);return r.a.createElement("svg",Me({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},a),void 0===n?Pe:n?r.a.createElement("title",null,n):null,_e,De)},Ge=r.a.forwardRef((function(e,t){return r.a.createElement(We,Me({svgRef:t},e))})),Le=(n.p,n(14));function Ve(){var e=Object(j.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n"]);return Ve=function(){return e},e}function qe(){var e=Object(j.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  @media screen and (max-width: 800px) {\n    width: 80%;\n  }\n"]);return qe=function(){return e},e}function ze(){var e=Object(j.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n  @media screen and (max-width: 800px) {\n    width: 50px;\n    padding: 0;\n  }\n"]);return ze=function(){return e},e}function He(){var e=Object(j.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n  @media screen and (max-width: 800px) {\n    height: 60px;\n    padding: 10px;\n    margin-bottom: 20px;\n  }\n"]);return He=function(){return e},e}var Je=N.c.div(He()),Fe=Object(N.c)(Le.b)(ze()),Ke=N.c.div(qe()),Ye=Object(N.c)(Le.b)(Ve()),Qe=Object(w.b)({currentUser:Re,hidden:xe}),Xe=Object(E.b)(Qe)((function(e){var t=e.currentUser,n=e.hidden;return r.a.createElement(Je,null,r.a.createElement(Fe,{to:"/crwn-clothing/"},r.a.createElement(Ge,{className:"logo"})),r.a.createElement(Ke,null,r.a.createElement(Ye,{to:"/crwn-clothing/shop"},"SHOP"),t?r.a.createElement(Ye,{as:"div",onClick:function(){return ee.signOut()}},"SIGN OUT"):r.a.createElement(Ye,{to:"/crwn-clothing/signin"},"SIGN IN"),r.a.createElement(Ie,null)),n?null:r.a.createElement(Ae,null))})),Ze=(n(78),n(21)),$e=(n(79),function(e){var t=e.handleChange,n=e.label,a=Object(g.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},a)),n?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")}," ",n):null)}),et=(n(80),function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},n.handleSubmit=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.email,c=a.password,e.prev=2,e.next=5,ee.signInWithEmailAndPassword(r,c);case 5:n.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(Ze.a)({},r,a))},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement($e,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),r.a.createElement($e,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(W,{type:"submit"}," Sign in "),r.a.createElement(W,{onClick:ae,isGoogleSignIn:!0},"Sign in with Google"))))}}]),t}(r.a.Component)),tt=(n(81),function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={displayName:"",email:"",password:"",confirmPassword:""},n.handleSubmit=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,r,c,i,l,s,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=n.state,r=a.displayName,c=a.email,i=a.password,l=a.confirmPassword,i===l){e.next=5;break}return alert("passwords don't match"),e.abrupt("return");case 5:return e.prev=5,e.next=8,ee.createUserWithEmailAndPassword(c,i);case 8:return s=e.sent,u=s.user,e.next=12,$(u,{displayName:r});case 12:n.setState({displayName:"",email:"",password:"",confirmPassword:""}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(Ze.a)({},a,r))},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement($e,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement($e,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"email",required:!0}),r.a.createElement($e,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"password",required:!0}),r.a.createElement($e,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(W,{type:"submit"},"SIGN UP")))}}]),t}(a.Component)),nt=function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(et,null),r.a.createElement(tt,null))},at=(n(82),n(83),Object(E.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:G.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(V(t))},removeItem:function(t){return e(function(e){return{type:G.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,a=e.addItem,c=e.removeItem,i=t.name,l=t.imageUrl,o=t.price,s=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:l,alt:"item"})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{onClick:function(){return c(t)},className:"arrow"},"\u276e"),r.a.createElement("span",{className:"value"},s),r.a.createElement("div",{onClick:function(){return a(t)},className:"arrow"},"\u276f")),r.a.createElement("span",{className:"price"},o),r.a.createElement("div",{onClick:function(){return n(t)},className:"remove-button"},"\u2715"))}))),rt=n(46),ct=n.n(rt),it=function(e){var t=e.price,n=100*t;return r.a.createElement(ct.a,{laebl:"pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your Total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){alert("payment Succesful"),console.log(e)},stripeKey:"pk_test_AVVgZkraeaDFnfUm28yp5leT00Eq5nZPXy"})},lt=Object(w.b)({cartItems:je,total:Ce}),ot=Object(E.b)(lt)((function(e){var t=e.cartItems,n=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null," Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description ")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null," Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null," Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(at,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"TOTAL: $",n," ")),r.a.createElement("div",{className:"test-warning"},"*Please use the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/20 - CVV:123"),r.a.createElement(it,{price:n}))})),st="SET_CURRENT_USER",ut=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).unSubscribeFromAuth=null,n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=ee.onAuthStateChanged(function(){var t=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,$(n);case 3:t.sent.onSnapshot((function(t){e(Object(s.a)({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(Xe,null),r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/crwn-clothing/",component:U}),r.a.createElement(f.b,{path:"/crwn-clothing/shop",component:Q}),r.a.createElement(f.b,{exact:!0,path:"/crwn-clothing/checkout",component:ot}),r.a.createElement(f.b,{exact:!0,path:"/crwn-clothing/signin",render:function(){return e.props.currentUser?r.a.createElement(f.a,{to:"/crwn-clothing/"}):r.a.createElement(nt,null)}})))}}]),t}(a.Component),mt=Object(w.b)({currentUser:Re}),pt=Object(E.b)(mt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:st,payload:e}}(t))}}}))(ut),dt=n(47),bt=n(12),ht=n(31),gt=n(48),ft=n.n(gt),vt={currentUser:null},Et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case st:return Object(s.a)({},e,{currentUser:t.payload});default:return e}},wt=n(50),yt=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(s.a)({},e,{quantity:e.quantity+1}):e})):[].concat(Object(wt.a)(e),[Object(s.a)({},t,{quantity:1})])},Ot=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(s.a)({},e,{quantity:e.quantity-1}):e}))},kt={hidden:!0,cartItems:[]},jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G.TOGGLE_CART_HIDDEN:return Object(s.a)({},e,{hidden:!e.hidden});case G.ADD_ITEM:return Object(s.a)({},e,{cartItems:yt(e.cartItems,t.payload)});case G.REMOVE_ITEM:return Object(s.a)({},e,{cartItems:Ot(e.cartItems,t.payload)});case G.CLEAR_ITEM_FROM_CART:return Object(s.a)({},e,{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},Nt=n(49),xt={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"/mens"}]},Ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Ut={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},It=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ut,t=arguments.length>1?arguments[1]:void 0;return t.type,e},St={key:"root",storage:n.n(Nt).a,whitelist:["cart"]},Tt=Object(bt.c)({user:Et,cart:jt,directory:Ct,shop:It}),At=Object(ht.a)(St,Tt),Rt=[ft.a];var Mt=Object(bt.d)(At,bt.a.apply(void 0,Rt)),Bt=Object(ht.b)(Mt),Pt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _t(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(E.a,{store:Mt},r.a.createElement(Le.a,null,r.a.createElement(dt.a,{persistor:Bt},r.a.createElement(pt,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/crwn-clothing",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/crwn-clothing","/service-worker.js");Pt?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_t(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):_t(t,e)}))}}()}},[[52,1,2]]]);
//# sourceMappingURL=main.1a6381ed.chunk.js.map
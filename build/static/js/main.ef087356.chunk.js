(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e,n,t){e.exports=t(97)},96:function(e,n,t){},97:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(0),o=t.n(a),c=t(41),i=t.n(c),u=t(2);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=t(13),s=t(14),d=t(4),m=t.n(d),p=t(7),f=t(5),b=t(20),h=t(12);var g=function(e,n,t){var r=o.a.useState(e),a=Object(f.a)(r,2),c=a[0],i=a[1],u=o.a.useState({}),l=Object(f.a)(u,2),s=l[0],d=l[1],m=o.a.useState(!1),p=Object(f.a)(m,2),g=p[0],v=p[1];return o.a.useEffect(function(){g&&(0===Object.keys(s).length?(t(),v(!1)):v(!1))},[s,g,c]),{values:c,errors:s,isSubmitting:g,handleChange:function(e){e.persist();var n=e.target,t=n.name,r=n.value;i(function(e){return Object(h.a)({},e,Object(b.a)({},t,r))})},handleSubmit:function(e){e.preventDefault();var t=n(c);d(t),v(!0)},handleBlur:function(){var e=n(c);d(e)}}},v=9,x=function(e){return e.replace(/^https?:\/\//i,"")},w=new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$","i"),E=new RegExp('^(ftp|http|https)://[^ "]+$');function y(e){var n={};return e.email?w.test(e.email)||(console.log("errors"),n.email="Invalid email address"):n.email="Email required",e.password?e.password.length<6&&(n.password="Password must be at least 6 characters"):n.password="Password required",n}var j=t(42),k=t(43),O=t(23),C=t.n(O),S=(t(57),t(59),{apiKey:"AIzaSyD21BAJYGFc8K8peP83TSBU2VftZW4AYDs",authDomain:"hacker-news-clone-d96d7.firebaseapp.com",databaseURL:"https://hacker-news-clone-d96d7.firebaseio.com",projectId:"hacker-news-clone-d96d7",storageBucket:"",messagingSenderId:"808581885830",appId:"1:808581885830:web:2735b592d47331a2"}),B=new(function(){function e(){Object(j.a)(this,e),C.a.initializeApp(S),this.auth=C.a.auth(),this.db=C.a.firestore()}return Object(k.a)(e,[{key:"register",value:function(){var e=Object(p.a)(m.a.mark(function e(n,t,r){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.createUserWithEmailAndPassword(t,r);case 2:return a=e.sent,e.next=5,a.user.updateProfile({displayName:n});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,this)}));return function(n,t,r){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(p.a)(m.a.mark(function e(n,t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.signInWithEmailAndPassword(n,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(n,t){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(p.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.signOut();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"resetPassword",value:function(){var e=Object(p.a)(m.a.mark(function e(n){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.sendPasswordResetEmail(n);case 2:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()}]),e}()),A=o.a.createContext(null),P=B;function L(){var e=Object(r.a)(["\n  padding: 1em 0;\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n"]);return L=function(){return e},e}function z(){var e=Object(r.a)(["\n  background: ",";\n"]);return z=function(){return e},e}function D(){var e=Object(r.a)(["\n  margin: 0.25em 0 0.5em 0;\n  padding: 0;\n  color: red;\n  font-style: bold;\n"]);return D=function(){return e},e}function F(){var e=Object(r.a)(["\n  border: ",";\n  border-radius: ",";\n"]);return F=function(){return e},e}function I(){var e=Object(r.a)(["\n  display: flex;\n  margin-top: 1rem;\n"]);return I=function(){return e},e}function N(){var e=Object(r.a)(["\n  font-family: monospace;\n  font-size: 10pt;\n  color: black;\n  background-color: buttonface;\n  text-align: center;\n  padding: 2px 6px 3px;\n  border-width: 2px;\n  border-style: outset;\n  border-color: buttonface;\n  cursor: pointer;\n  max-width: 250px;\n  margin-right: 0.5rem;\n"]);return N=function(){return e},e}function R(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return R=function(){return e},e}function U(){var e=Object(r.a)(["\n  margin: 1rem 0;\n"]);return U=function(){return e},e}var W={name:"",email:"",password:""};var q=u.b.h2(U()),Y=u.b.form(R()),Z=u.b.button(N()),J=u.b.div(I()),K=u.b.input(F(),function(e){return e.errors&&"1.5px solid rgba(255, 0, 0, 0.6)"},function(e){return e.errors&&"3px"}),$=u.b.p(D()),G=Object(u.b)(Z)(z(),function(e){return e.isSubmitting?"grey":"orange"}),H=Object(u.b)(l.b)(L()),T=function(e){var n=g(W,y,function(){return E.apply(this,arguments)}),t=n.values,r=n.errors,a=n.isSubmitting,c=n.handleChange,i=n.handleSubmit,u=n.handleBlur,l=o.a.useState(!0),s=Object(f.a)(l,2),d=s[0],b=s[1],h=o.a.useState(null),v=Object(f.a)(h,2),x=v[0],w=v[1];function E(){return(E=Object(p.a)(m.a.mark(function n(){var r,a,o;return m.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.name,a=t.email,o=t.password,n.prev=1,!d){n.next=8;break}return n.next=5,P.login(a,o);case 5:n.t0=n.sent,n.next=11;break;case 8:return n.next=10,P.register(r,a,o);case 10:n.t0=n.sent;case 11:n.t0,e.history.push("/"),n.next=19;break;case 15:n.prev=15,n.t1=n.catch(1),console.log(n.t1),w(n.t1.message);case 19:case"end":return n.stop()}},n,null,[[1,15]])}))).apply(this,arguments)}return o.a.createElement(o.a.Fragment,null,o.a.createElement(q,null,d?"Login":"Create Account"),o.a.createElement(Y,{onSubmit:i},!d&&o.a.createElement("input",{type:"text",name:"name",value:t.name,onChange:c,placeholder:"Your name",autoComplete:"off"}),o.a.createElement(K,{type:"email",name:"email",value:t.email,onChange:c,placeholder:"Your email",autoComplete:"off",errors:r.email}),r.email&&o.a.createElement($,null,r.email),o.a.createElement(K,{type:"password",name:"password",value:t.password,onChange:c,onBlur:u,placeholder:"Choose a secure password",autoComplete:"off",errors:r.password}),r.password&&o.a.createElement($,null,r.password),x&&o.a.createElement($,null,x),o.a.createElement(J,null,o.a.createElement(G,{type:"submit",disabled:a,isSubmitting:a},"Submit"),o.a.createElement(Z,{type:"button",onClick:function(){return b(function(e){return!e})}},d?"Need to create an account":"Already have an account?"))),o.a.createElement(H,{to:"/forgot"},"Forgot Password?"))};function V(){var e=Object(r.a)(["\n  margin: 0.25em 0 0.5em 0;\n  padding: 0;\n  color: red;\n  font-style: bold;\n"]);return V=function(){return e},e}function _(){var e=Object(r.a)(["\n  font-family: monospace;\n  font-size: 10pt;\n  color: black;\n  background-color: buttonface;\n  text-align: center;\n  padding: 2px 6px 3px;\n  border-width: 2px;\n  border-style: outset;\n  border-color: buttonface;\n  cursor: pointer;\n  max-width: 250px;\n"]);return _=function(){return e},e}function M(){var e=Object(r.a)(["\n  display: block\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  border-color: rgba(0, 0, 0, 0.2);\n  border-style: solid;\n  border-width: 1px;\n  padding: 0.2rem;\n  margin: 0.5rem 0;\n  width: 100%;\n  margin-bottom: 0.2em;\n  max-width: 500px;\n"]);return M=function(){return e},e}var Q=u.b.input(M()),X=u.b.button(_()),ee=u.b.p(V()),ne=function(){var e=o.a.useState(""),n=Object(f.a)(e,2),t=n[0],r=n[1],a=o.a.useState(!1),c=Object(f.a)(a,2),i=c[0],u=c[1],l=o.a.useState(null),s=Object(f.a)(l,2),d=s[0],b=s[1],h=o.a.useContext(A).firebase;function g(){return(g=Object(p.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.resetPassword(t);case 3:u(!0),b(null),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error sending email",e.t0),b(e.t0.message),u(!1);case 12:case"end":return e.stop()}},e,null,[[0,7]])}))).apply(this,arguments)}return o.a.createElement(o.a.Fragment,null,o.a.createElement(Q,{type:"email",placeholder:"Provide your account email",onChange:function(e){return r(e.target.value)}}),o.a.createElement(X,{onClick:function(){return g.apply(this,arguments)}},"Reset Password"),i&&o.a.createElement("p",null,"Check email to reset password"),d&&o.a.createElement(ee,null,d))};function te(e){var n={};return e.description?e.description.length<10&&(n.description="Description must be at least 10 characters"):n.description="Description required",e.url?E.test(e.url)||(n.password="URL must be valid"):n.url="URL required",n}function re(){var e=Object(r.a)(["\n  margin: 0.25em 0 0.5em 0;\n  padding: 0;\n  color: red;\n  font-style: bold;\n"]);return re=function(){return e},e}function ae(){var e=Object(r.a)(["\n  border: ",";\n  border-radius: ",";\n"]);return ae=function(){return e},e}function oe(){var e=Object(r.a)(["\n  font-family: monospace;\n  font-size: 10pt;\n  color: black;\n  background-color: buttonface;\n  text-align: center;\n  padding: 2px 6px 3px;\n  border-width: 2px;\n  border-style: outset;\n  border-color: buttonface;\n  cursor: pointer;\n  max-width: 250px;\n"]);return oe=function(){return e},e}function ce(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 1rem;\n"]);return ce=function(){return e},e}var ie={description:"",url:""};var ue=u.b.form(ce()),le=u.b.button(oe()),se=u.b.input(ae(),function(e){return e.errors&&"1.5px solid rgba(255, 0, 0, 0.6)"},function(e){return e.errors&&"3px"}),de=u.b.p(re()),me=function(e){var n=o.a.useContext(A),t=n.firebase,r=n.user,a=g(ie,te,function(){if(r){var n=u.url,a=u.description,o={url:n,description:a,postedBy:{id:r.uid,name:r.displayName},votes:[],voteCount:0,comments:[],created:Date.now()};t.db.collection("links").add(o),e.history.push("/")}else e.history.push("/login")}),c=a.handleSubmit,i=a.handleChange,u=a.values,l=a.errors;return o.a.createElement(ue,{onSubmit:c},o.a.createElement(se,{name:"description",placeholder:"A description for your link",autocomplete:"off",type:"text",value:u.description,onChange:i,errors:l.description}),l.description&&o.a.createElement(de,null,l.description),o.a.createElement(se,{name:"url",placeholder:"A URL for your link",autocomplete:"off",type:"text",value:u.url,onChange:i,errors:l.url}),l.url&&o.a.createElement(de,null,l.url),o.a.createElement(le,{type:"submit"},"Submit"))},pe=t(22),fe=t(21),be=t.n(fe);function he(){var e=Object(r.a)(["\n  color: red;\n  cursor: pointer;\n"]);return he=function(){return e},e}function ge(){var e=Object(r.a)(["\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #828282;\n"]);return ge=function(){return e},e}function ve(){var e=Object(r.a)(["\n  color: #828282;\n"]);return ve=function(){return e},e}function xe(){var e=Object(r.a)(["\n  font-size: 11px;\n  color: #828282;\n  margin-left: 0.25rem;\n  cursor: pointer;\n"]);return xe=function(){return e},e}function we(){var e=Object(r.a)(["\n  text-decoration: none;\n  color: black;\n"]);return we=function(){return e},e}function Ee(){var e=Object(r.a)(["\n  color: #828282;\n"]);return Ee=function(){return e},e}function ye(){var e=Object(r.a)(["\n  margin-left: 1rem;\n"]);return ye=function(){return e},e}function je(){var e=Object(r.a)(["\n  display: flex;\n  align-items: center;\n"]);return je=function(){return e},e}function ke(){var e=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  margin-top: 1rem;\n"]);return ke=function(){return e},e}var Oe=u.b.div(ke()),Ce=u.b.div(je()),Se=u.b.div(ye()),Be=u.b.span(Ee()),Ae=u.b.a(we()),Pe=u.b.div(xe()),Le=u.b.span(ve()),ze=u.b.div(ge()),De=u.b.span(he()),Fe=Object(s.g)(function(e){var n=e.link,t=e.index,r=e.showCount,a=e.history,c=o.a.useContext(A),i=c.firebase,u=c.user;function s(){return(s=Object(p.a)(m.a.mark(function e(){var t,r,o,c,l,s;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=4;break}a.push("/login"),e.next=9;break;case 4:return t=i.db.collection("links").doc(n.id),e.next=7,t.get();case 7:(r=e.sent).exists&&(o=r.data().votes,c={votedBy:{id:u.uid,name:u.displayName}},l=[].concat(Object(pe.a)(o),[c]),s=l.length,t.update({votes:l,voteCount:s}));case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}var d=u&&u.uid===n.postedBy.id;return o.a.createElement(Oe,null,o.a.createElement(Ce,null,r&&o.a.createElement(Be,null,t,"."),o.a.createElement(Pe,{onClick:function(){return s.apply(this,arguments)}},"\u25b2")),o.a.createElement(Se,null,o.a.createElement(Ae,{href:n.url},n.description," "),o.a.createElement(Le,null,"(",x(n.url),")"),o.a.createElement(ze,null,n.voteCount," votes by ",n.postedBy.name," ",be()(n.created)," | ",o.a.createElement(l.b,{to:"/link/".concat(n.id)},n.comments.length>0?"".concat(n.comments.length):"discuss"),d&&o.a.createElement(o.a.Fragment,null," | ",o.a.createElement(De,{onClick:function(){i.db.collection("links").doc(n.id).delete().then(function(){console.log("Document with ID ".concat(n.id," deleted"))}).catch(function(e){console.error("Error deleting document:",e)})}},"delete")))))});var Ie=function(){var e=o.a.useState(""),n=Object(f.a)(e,2),t=n[0],r=n[1],a=o.a.useState([]),c=Object(f.a)(a,2),i=c[0],u=c[1],l=o.a.useState([]),s=Object(f.a)(l,2),d=s[0],b=s[1],g=o.a.useContext(A).firebase;function v(){return(v=Object(p.a)(m.a.mark(function e(){var n,t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.db.collection("links").get();case 2:n=e.sent,t=n.docs.map(function(e){return Object(h.a)({id:e.id},e.data())}),u(t);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}return o.a.useEffect(function(){!function(){v.apply(this,arguments)}()},[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=t.toLowerCase(),r=i.filter(function(e){return e.description.toLowerCase().includes(n)||e.url.toLowerCase().includes(n)||e.postedBy.name.toLowerCase().includes(n)});b(r)}},o.a.createElement(o.a.Fragment,null,"Search ",o.a.createElement("input",{onChange:function(e){return r(e.target.value)}}),o.a.createElement("button",null,"OK"))),d.map(function(e,n){return o.a.createElement(Fe,{key:e.id,showCount:!1,link:e,index:n})}))},Ne=t(31),Re=t.n(Ne);function Ue(){var e=Object(r.a)(["\n  opacity: ",";\n  transition-duration: 0.3s;\n"]);return Ue=function(){return e},e}function We(){var e=Object(r.a)(["\n  margin-left: 1rem;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return We=function(){return e},e}function qe(){var e=Object(r.a)(["\n  margin-top: 1re;\n  margin-bottom: 1rem;\n  margin-left: 2rem;\n  color: #000;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n"]);return qe=function(){return e},e}var Ye=u.b.div(qe()),Ze=u.b.div(We()),Je=u.b.div(Ue(),function(e){return e.loading}),Ke=function(e){var n=o.a.useContext(A).firebase,t=o.a.useState([]),r=Object(f.a)(t,2),a=r[0],c=r[1],i=o.a.useState(null),u=Object(f.a)(i,2),l=u[0],s=u[1],d=o.a.useState(!1),m=Object(f.a)(d,2),p=m[0],b=m[1],g=o.a.useState(0),x=Object(f.a)(g,2),w=x[0],E=x[1],y=e.location.pathname.includes("new"),j=e.location.pathname.includes("top"),k=Number(e.match.params.page),O=n.db.collection("links");o.a.useEffect(function(){S()},[]),o.a.useEffect(function(){var e=C();return function(){return e()}},[j,k]);var C=function(){var e=Boolean(l);if(b(!0),j)return O.orderBy("voteCount","desc").limit(v).onSnapshot(B);if(1===k)return O.orderBy("created","desc").limit(v).onSnapshot(B);if(e&&2!==k)return O.orderBy("created","desc").startAfter(l.created).limit(v).onSnapshot(B);var n=k*v-v;return Re.a.get("https://us-central1-hacker-news-clone-d96d7.cloudfunctions.net/linkPagination?offset=".concat(n)).then(function(e){var n=e.data,t=n[n.length-1];c(n),s(t),b(!1)}),function(){}},S=function(){Re.a.get("https://us-central1-hacker-news-clone-d96d7.cloudfunctions.net/getTotalLinks").then(function(e){E(e.data.length)})},B=function(e){var n=e.docs.map(function(e){return Object(h.a)({id:e.id},e.data())}),t=n[n.length-1];c(n),s(t),b(!1)},P=k?(k-1)*v+1:0;return o.a.createElement(Je,{loading:p?.25:1},a.map(function(e,n){return o.a.createElement(Fe,{key:e.id,showCount:!0,link:e,index:n+P})}),y&&o.a.createElement(Ye,null,o.a.createElement(Ze,{onClick:function(){k>1&&e.history.push("/new/".concat(k-1))}},"Previous"),o.a.createElement(Ze,{onClick:function(){k<=w/v&&e.history.push("/new/".concat(k+1))}},"Next")))};function $e(){var e=Object(r.a)(["\n  color: #828282;\n"]);return $e=function(){return e},e}function Ge(){var e=Object(r.a)(["\n  font-family: monospace;\n  font-size: 10pt;\n  color: black;\n  background-color: buttonface;\n  text-align: center;\n  padding: 2px 6px 3px;\n  border-width: 2px;\n  border-style: outset;\n  border-color: buttonface;\n  cursor: pointer;\n  max-width: 250px;\n  display: block;\n  margin-top: 0.5rem;\n"]);return Ge=function(){return e},e}var He=u.b.button(Ge()),Te=u.b.p($e()),Ve=function(e){var n=e.match.params.linkId,t=o.a.useState(null),r=Object(f.a)(t,2),a=r[0],c=r[1],i=o.a.useState(""),u=Object(f.a)(i,2),l=u[0],s=u[1],d=o.a.useContext(A),b=d.firebase,g=d.user,v=b.db.collection("links").doc(n);function x(){return(x=Object(p.a)(m.a.mark(function n(){var t,r,a,o;return m.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(g||e.history.push("/login"),l){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,v.get();case 5:(t=n.sent).exists&&(r=t.data().comments,a={postedBy:{id:g.uid,name:g.displayName},created:Date.now(),text:l},o=[].concat(Object(pe.a)(r),[a]),v.update({comments:o}),c(function(e){return Object(h.a)({},e,{comments:o})}),s(""));case 7:case"end":return n.stop()}},n)}))).apply(this,arguments)}function w(){return E.apply(this,arguments)}function E(){return(E=Object(p.a)(m.a.mark(function e(){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get();case 2:n=e.sent,c(Object(h.a)({},n.data(),{id:n.id}));case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}return o.a.useEffect(function(){w()},[w]),a?o.a.createElement(o.a.Fragment,null,o.a.createElement(Fe,{showCount:!1,link:a}),o.a.createElement("textarea",{onChange:function(e){return s(e.target.value)},value:l,rows:"10",cols:"60"}),o.a.createElement(He,{onClick:function(){return x.apply(this,arguments)}},"Add Comment"),a.comments.map(function(e,n){return o.a.createElement("div",{key:n},o.a.createElement(Te,null,e.postedBy.name," | ",be()(e.created)),o.a.createElement("p",null,e.text))})):o.a.createElement("div",null,"Loading...")};function _e(){var e=Object(r.a)(["\n  margin-left: 0.25rem;\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n  @media (max-width: 500px) {\n    margin-right: 1rem;\n  }\n"]);return _e=function(){return e},e}function Me(){var e=Object(r.a)(["\n  color: black;\n  text-decoration: none;\n  @media (max-width: 500px) {\n    position: absolute;\n    margin-top: -1rem;\n    margin-left: 1rem;\n  }\n"]);return Me=function(){return e},e}function Qe(){var e=Object(r.a)(["\n  margin-left: 0.25rem;\n  color: black;\n  @media (max-width: 350px) {\n    display: none;\n  }\n"]);return Qe=function(){return e},e}function Xe(){var e=Object(r.a)(["\n  display: flex;\n  @media (max-width: 500px) {\n    margin-top: 1rem;\n  }\n"]);return Xe=function(){return e},e}function en(){var e=Object(r.a)(["\n  margin-left: 0.2rem;\n  color: black;\n  text-decoration: none;\n"]);return en=function(){return e},e}function nn(){var e=Object(r.a)(["\n  display: flex;\n  @media (max-width: 500px) {\n    position: relative;\n    margin-left: 0.1rem;\n    margin-top: 1rem;\n  }\n"]);return nn=function(){return e},e}function tn(){var e=Object(r.a)(["\n  font-weight: 700;\n  margin-left: 0.25rem;\n  margin-right: 5px;\n  color: black;\n  text-decoration: none;\n  @media (max-width: 500px) {\n    position: absolute;\n    margin-left: 1.62rem;\n  }\n"]);return tn=function(){return e},e}function rn(){var e=Object(r.a)(["\n  width: 20px;\n  height: 18px;\n  border: 1px solid white;\n  margin: 0;\n  @media (max-width: 500px) {\n    margin-top: 7px;\n  }\n"]);return rn=function(){return e},e}function an(){var e=Object(r.a)(["\n  display: flex;\n"]);return an=function(){return e},e}function on(){var e=Object(r.a)(["\n  background-color: #ff6600;\n  white-space: nowrap;\n  padding: 0.25rem;\n  color: black;\n  justify-content: space-between;\n  display: flex;\n"]);return on=function(){return e},e}var cn=u.b.div(on()),un=u.b.div(an()),ln=u.b.img(rn()),sn=Object(u.b)(l.c)(tn()),dn=u.b.div(nn()),mn=Object(u.b)(l.c)(en()),pn=u.b.div(Xe()),fn=u.b.div(Qe()),bn=u.b.div(Me()),hn=u.b.div(_e()),gn=function(){var e=o.a.useContext(A),n=e.user,t=e.firebase;return o.a.createElement(cn,null,o.a.createElement(un,null,o.a.createElement(ln,{src:"/logo.png",alt:"Hacker News Logo"}),o.a.createElement(sn,{to:"/"},"Hacker News"),o.a.createElement(dn,null,o.a.createElement(mn,{to:"/"},"new"),o.a.createElement(fn,null,"|"),o.a.createElement(mn,{to:"/top"},"top"),o.a.createElement(fn,null,"|"),o.a.createElement(mn,{to:"/search"},"search"),n&&o.a.createElement(o.a.Fragment,null,o.a.createElement(fn,null,"|"),o.a.createElement(mn,{to:"/create"},"submit")))),o.a.createElement(pn,null,n?o.a.createElement(o.a.Fragment,null,o.a.createElement(bn,null,n.displayName),o.a.createElement(fn,null,"|"),o.a.createElement(hn,{onClick:function(){return t.logout()}},"logout")):o.a.createElement(mn,{to:"/login"},"login")))};var vn=function(){var e=o.a.useState(null),n=Object(f.a)(e,2),t=n[0],r=n[1];return o.a.useEffect(function(){var e=P.auth.onAuthStateChanged(function(e){r(e||null)});return function(){return e()}},[]),t};function xn(){var e=Object(r.a)(["\n  background-color: rgb(246, 246, 239);\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n"]);return xn=function(){return e},e}function wn(){var e=Object(r.a)(["\n  width: 85%;\n  margin-right: auto;\n  margin-left: auto;\n"]);return wn=function(){return e},e}var En=u.b.div(wn()),yn=u.b.div(xn()),jn=function(){var e=vn();return o.a.createElement(l.a,null,o.a.createElement(A.Provider,{value:{user:e,firebase:P}},o.a.createElement(En,null,o.a.createElement(gn,null),o.a.createElement(yn,null,o.a.createElement(s.d,null,o.a.createElement(s.b,{exact:!0,path:"/",render:function(){return o.a.createElement(s.a,{to:"/new/1"})}}),o.a.createElement(s.b,{path:"/create",component:me}),o.a.createElement(s.b,{path:"/login",component:T}),o.a.createElement(s.b,{path:"/forgot",component:ne}),o.a.createElement(s.b,{path:"/search",component:Ie}),o.a.createElement(s.b,{path:"/top",component:Ke}),o.a.createElement(s.b,{path:"/new/:page",component:Ke}),o.a.createElement(s.b,{path:"/link/:linkId",component:Ve}))))))};t(96);function kn(){var e=Object(r.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: Verdana, Geneva, sans-serif;\n  }\n  input {\n    max-width: 500px;\n  }\n  .gray {\n    color: #828282;\n  }\n  .orange {\n    background-color: #ff6600;\n  }\n  .background-gray {\n    background-color: rgb(246, 246, 239);\n  }\n  .f11 {\n    font-size: 11px;\n  }\n  .w85 {\n    width: 85%;\n  }\n"]);return kn=function(){return e},e}var On=Object(u.a)(kn());i.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(On,null),o.a.createElement(jn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,1,2]]]);
//# sourceMappingURL=main.ef087356.chunk.js.map
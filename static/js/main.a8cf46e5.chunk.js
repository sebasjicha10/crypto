(this.webpackJsonpcryptocurrencies=this.webpackJsonpcryptocurrencies||[]).push([[0],{27:function(n,e,t){},52:function(n,e,t){},53:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t(1),c=t.n(a),i=t(19),o=t.n(i),s=(t(27),t(7)),u=t.n(s),l=t(8),p=t(5),d=t(2),b=t(3),j=t(9),f=t.n(j),m=t.p+"static/media/cryptocurrencies.51f1d2ed.png",O=t(4),x=t.n(O);function h(){var n=Object(d.a)(['\n    background-color: #b7322c;\n    padding: 1rem;\n    color: #FFF;\n    font-size: 30px;\n    text-transform: uppercase;\n    font-weight: bold;\n    text-align: center;\n    font-family: "Bebas Neue", cursive;\n']);return h=function(){return n},n}var v=b.a.p(h()),g=function(n){var e=n.message;return Object(r.jsx)(v,{children:e})};g.prototype={message:x.a.string.isRequired};var y=g;function C(){var n=Object(d.a)(["\n    width: 100%;\n    display: block;\n    padding: 1rem;\n    -webkit-appearance: none;\n    border-radius: 10px;\n    border: none;\n    font-size: 1.2rem;\n"]);return C=function(){return n},n}function F(){var n=Object(d.a)(['\n    font-family: "Bebas Neue", cursive;\n    color: #FFF;\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 2.4rem;\n    margin-top: 2rem;\n    display: block;\n']);return F=function(){return n},n}var w=b.a.label(F()),S=b.a.select(C()),k=function(n,e,t){var c=Object(a.useState)(e),i=Object(p.a)(c,2),o=i[0],s=i[1];return[o,function(){return Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)(w,{children:n}),Object(r.jsxs)(S,{onChange:function(n){return s(n.target.value)},value:o,children:[Object(r.jsx)("option",{value:"",children:"- Select -"}),t.map((function(n){return Object(r.jsx)("option",{value:n.code,children:n.name},n.code)}))]})]})},s]};k.prototype={label:x.a.string.isRequired,initialState:x.a.string.isRequired,options:x.a.array.isRequired};var R=k;function N(){var n=Object(d.a)(["\n    width: 100%;\n    display: block;\n    padding: 1rem;\n    -webkit-appearance: none;\n    border-radius: 10px;\n    border: none;\n    font-size: 1.2rem;\n"]);return N=function(){return n},n}function D(){var n=Object(d.a)(['\n    font-family: "Bebas Neue", cursive;\n    color: #FFF;\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 2.4rem;\n    margin-top: 2rem;\n    display: block;\n']);return D=function(){return n},n}var q=b.a.label(D()),A=b.a.select(N()),I=function(n,e,t){var c=Object(a.useState)(e),i=Object(p.a)(c,2),o=i[0],s=i[1];return[o,function(){return Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)(q,{children:n}),Object(r.jsxs)(A,{onChange:function(n){return s(n.target.value)},value:o,children:[Object(r.jsx)("option",{value:"MXN",children:"- Select -"}),t.map((function(n){return Object(r.jsx)("option",{value:n.CoinInfo.Name,children:n.CoinInfo.FullName},n.CoinInfo.Id)}))]})]})},s]};I.prototype={label:x.a.string.isRequired,initialState:x.a.string.isRequired,options:x.a.object.isRequired};var P=I;function z(){var n=Object(d.a)(["\n    margin-top: 20px;\n    font-weight: bold;\n    font-size: 20px;\n    padding: 10px;\n    background-color: #66a2fe;\n    border: none;\n    width: 100%;\n    border-radius: 10px;\n    color: #FFF;\n    transition: background-color .3s ease;\n\n    &:hover {\n        background-color: #326AC0;\n        cursor: pointer;\n    }\n"]);return z=function(){return n},n}var E=b.a.input(z()),B=function(n){var e=n.setCurrency,t=n.setCrypto,c=Object(a.useState)([]),i=Object(p.a)(c,2),o=i[0],s=i[1],d=Object(a.useState)(!1),b=Object(p.a)(d,2),j=b[0],m=b[1],O=R("Choose your Currency","",[{code:"USD",name:"United States Dollar"},{code:"MXN",name:"Mexican Peso"},{code:"EUR",name:"Euro"},{code:"GBP",name:"Pound Sterling"},{code:"CRC",name:"Costa Rican Colon"}]),x=Object(p.a)(O,2),h=x[0],v=x[1],g=P("Choose your Crypto","",o),C=Object(p.a)(g,2),F=C[0],w=C[1];Object(a.useEffect)((function(){(function(){var n=Object(l.a)(u.a.mark((function n(){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD",n.next=3,f.a.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD");case 3:e=n.sent,s(e.data.Data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]);return Object(r.jsxs)("form",{onSubmit:function(n){n.preventDefault(),""!==h&&""!==F?(m(!1),e(h),t(F)):m(!0)},children:[j?Object(r.jsx)(y,{message:"All fields are mandatory"}):null,Object(r.jsx)(v,{}),Object(r.jsx)(w,{}),Object(r.jsx)(E,{type:"submit",value:"Calculate"})]})};B.prototype={setCurrency:x.a.func.isRequired,setCrypto:x.a.func.isRequired};var T=B;function U(){var n=Object(d.a)(["\n    font-size: 30px;\n    span {\n        font-weight: bold;\n    }\n"]);return U=function(){return n},n}function H(){var n=Object(d.a)(["\n    font-size: 18px;\n    span {\n        font-weight: bold;\n    }\n"]);return H=function(){return n},n}function L(){var n=Object(d.a)(["\n    color: #FFF;\n    font-family: Arial, Helvetica, sans-serif;\n"]);return L=function(){return n},n}var M=b.a.div(L()),G=b.a.p(H()),Y=b.a.p(U()),J=function(n){var e=n.result;return 0===Object.keys(e).length?null:Object(r.jsxs)(M,{children:[Object(r.jsxs)(Y,{children:["The price is: ",Object(r.jsx)("span",{children:e.PRICE})]}),Object(r.jsxs)(G,{children:["Max day: ",Object(r.jsx)("span",{children:e.HIGHDAY})]}),Object(r.jsxs)(G,{children:["Min day: ",Object(r.jsx)("span",{children:e.LOWDAY})]}),Object(r.jsxs)(G,{children:["24 Hour Variation: ",Object(r.jsx)("span",{children:e.CHANGEPCT24HOUR})]}),Object(r.jsxs)(G,{children:["Last updated: ",Object(r.jsx)("span",{children:e.LASTUPDATE})]})]})};J.prototype={result:x.a.object.isRequired};var X=J,V=(t(52),function(){return Object(r.jsxs)("div",{className:"spinner",children:[Object(r.jsx)("div",{className:"cube1"}),Object(r.jsx)("div",{className:"cube2"})]})});function W(){var n=Object(d.a)(['\n  font-family: "Bebas Neue", cursive;\n  color: #FFF;\n  text-align: left;\n  font-weight: 700;\n  font-size: 50px;\n  margin-bottom: 50px;\n  margin-top: 80px;\n\n  &&::after {\n    content: "";\n    width: 100px;\n    height: 6px;\n    background-color: #66A2FE;\n    display: block;\n  }\n']);return W=function(){return n},n}function K(){var n=Object(d.a)(["\n  max-width: 100%;\n  margin-top: 5rem;\n"]);return K=function(){return n},n}function Q(){var n=Object(d.a)(["\n  max-width: 900px;\n  margin: 0 auto;\n  @media(min-width: 992px) {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    column-gap: 2rem;\n  }\n"]);return Q=function(){return n},n}var Z=b.a.div(Q()),$=b.a.img(K()),_=b.a.h1(W()),nn=function(){var n=Object(a.useState)(""),e=Object(p.a)(n,2),t=e[0],c=e[1],i=Object(a.useState)(""),o=Object(p.a)(i,2),s=o[0],d=o[1],b=Object(a.useState)({}),j=Object(p.a)(b,2),O=j[0],x=j[1],h=Object(a.useState)(!1),v=Object(p.a)(h,2),g=v[0],y=v[1];Object(a.useEffect)((function(){(function(){var n=Object(l.a)(u.a.mark((function n(){var e,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==t){n.next=2;break}return n.abrupt("return");case 2:return e="https://min-api.cryptocompare.com/data/pricemultifull?fsyms=".concat(s,"&tsyms=").concat(t),n.next=5,f.a.get(e);case 5:r=n.sent,y(!0),setTimeout((function(){y(!1),x(r.data.DISPLAY[s][t])}),2e3);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[t,s]);var C=g?Object(r.jsx)(V,{}):Object(r.jsx)(X,{result:O});return Object(r.jsxs)(Z,{children:[Object(r.jsx)("div",{children:Object(r.jsx)($,{src:m,alt:"Crypto Image"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(_,{children:"Cryto Prices"}),Object(r.jsx)(T,{setCurrency:c,setCrypto:d}),C]})]})},en=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,54)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),a(n),c(n),i(n)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(nn,{})}),document.getElementById("root")),en()}},[[53,1,2]]]);
//# sourceMappingURL=main.a8cf46e5.chunk.js.map
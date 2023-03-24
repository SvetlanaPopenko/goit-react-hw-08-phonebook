/*! For license information please see 640.24770f9b.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[640],{4640:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ke}});var r,o,i,a,c=n(9434),u=n(8724),s=n(9974),f=n(5705),l=n(168),p=n(4193),d=(0,p.Z)(f.l0)(r||(r=(0,l.Z)(["\nwidth: 500px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n"]))),y=p.Z.label(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),h=(0,p.Z)(f.gN)(i||(i=(0,l.Z)(["\n  height: 40px;\n  border-radius: 15px;\n  font-size: 30px;\n  color: blueviolet;\n"]))),m=(0,p.Z)(f.Bc)(a||(a=(0,l.Z)(["\n  font-size: 24px;\n  width: fit-content;\n  color: red;\n"]))),b=n(5282),g=n(184),T=b.object().shape({email:b.string().email().required(),password:b.string().required().min(6)}),v={email:"",password:""},w=function(){var e=(0,c.I0)();return(0,g.jsx)(f.J9,{onSubmit:function(t,n){e((0,u.Ib)(t)),n.resetForm()},initialValues:v,validationSchema:T,children:(0,g.jsxs)(d,{autoComplete:"off",children:[(0,g.jsxs)(y,{children:["Email",(0,g.jsx)(h,{type:"email",name:"email"}),(0,g.jsx)(m,{name:"email",component:"div"})]}),(0,g.jsxs)(y,{children:["Password",(0,g.jsx)(h,{type:"password",name:"password"}),(0,g.jsx)(m,{name:"password",component:"div"})]}),(0,g.jsx)(s.Z,{type:"submit",variant:"contained",children:"Log In"})]})})},O=n(2007),C=n.n(O),j=n(9475),A=n.n(j),S=n(3967),E=n.n(S),x=n(2791),P=n(1725),k=n.n(P),I="bodyAttributes",L="htmlAttributes",_="titleAttributes",N={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},M=(Object.keys(N).map((function(e){return N[e]})),"charset"),R="cssText",q="href",B="http-equiv",D="innerHTML",H="itemprop",F="name",Y="property",U="rel",Z="src",z="target",K={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},W="defaultTitle",V="defer",$="encodeSpecialCharacters",J="onChangeClientState",G="titleTemplate",Q=Object.keys(K).reduce((function(e,t){return e[K[t]]=t,e}),{}),X=[N.NOSCRIPT,N.SCRIPT,N.STYLE],ee="data-react-helmet",te="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ne=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},re=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ie=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},ae=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},ce=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ue=function(e){var t=de(e,N.TITLE),n=de(e,G);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=de(e,W);return t||r||void 0},se=function(e){return de(e,J)||function(){}},fe=function(e,t){return t.filter((function(t){return"undefined"!==typeof t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return oe({},e,t)}),{})},le=function(e,t){return t.filter((function(e){return"undefined"!==typeof e[N.BASE]})).map((function(e){return e[N.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},pe=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&ge("Helmet: "+e+' should be of type "Array". Instead found type "'+te(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===U&&"canonical"===e[n].toLowerCase()||u===U&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==D&&c!==R&&c!==H||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=k()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},de=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ye=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout((function(){ye(t)}),0)}}(),he=function(e){return clearTimeout(e)},me="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ye:n.g.requestAnimationFrame||ye,be="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||he:n.g.cancelAnimationFrame||he,ge=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},Te=null,ve=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,l=e.title,p=e.titleAttributes;Ce(N.BODY,r),Ce(N.HTML,o),Oe(l,p);var d={baseTag:je(N.BASE,n),linkTags:je(N.LINK,i),metaTags:je(N.META,a),noscriptTags:je(N.NOSCRIPT,c),scriptTags:je(N.SCRIPT,s),styleTags:je(N.STYLE,f)},y={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,y,h)},we=function(e){return Array.isArray(e)?e.join(""):e},Oe=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=we(e)),Ce(N.TITLE,t)},Ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(ee),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var f=i.indexOf(u);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)n.removeAttribute(i[l]);o.length===i.length?n.removeAttribute(ee):n.getAttribute(ee)!==a.join(",")&&n.setAttribute(ee,a.join(","))}},je=function(e,t){var n=document.head||document.querySelector(N.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===D)n.innerHTML=t.innerHTML;else if(r===R)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c="undefined"===typeof t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(ee,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},Ae=function(e){return Object.keys(e).reduce((function(t,n){var r="undefined"!==typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},Se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[K[n]||n]=e[n],t}),t)},Ee=function(e,t,n){switch(e){case N.TITLE:return{toComponent:function(){return function(e,t,n){var r,o=((r={key:t})[ee]=!0,r),i=Se(n,o);return[x.createElement(N.TITLE,i,t)]}(0,t.title,t.titleAttributes)},toString:function(){return function(e,t,n,r){var o=Ae(n),i=we(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+ce(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+ce(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case I:case L:return{toComponent:function(){return Se(t)},toString:function(){return Ae(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[ee]=!0,r);return Object.keys(t).forEach((function(e){var n=K[e]||e;if(n===D||n===R){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),x.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===D||e===R)})).reduce((function(e,t){var o="undefined"===typeof r[t]?t:t+'="'+ce(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===X.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},xe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,f=e.title,l=void 0===f?"":f,p=e.titleAttributes;return{base:Ee(N.BASE,t,r),bodyAttributes:Ee(I,n,r),htmlAttributes:Ee(L,o,r),link:Ee(N.LINK,i,r),meta:Ee(N.META,a,r),noscript:Ee(N.NOSCRIPT,c,r),script:Ee(N.SCRIPT,u,r),style:Ee(N.STYLE,s,r),title:Ee(N.TITLE,{title:l,titleAttributes:p},r)}},Pe=function(e){var t,n;return n=t=function(t){function n(){return ne(this,n),ae(this,t.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),n.prototype.shouldComponentUpdate=function(e){return!E()(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case N.SCRIPT:case N.NOSCRIPT:return{innerHTML:t};case N.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return oe({},r,((t={})[n.type]=[].concat(r[n.type]||[],[oe({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case N.TITLE:return oe({},o,((t={})[r.type]=a,t.titleAttributes=oe({},i),t));case N.BODY:return oe({},o,{bodyAttributes:oe({},i)});case N.HTML:return oe({},o,{htmlAttributes:oe({},i)})}return oe({},o,((n={})[r.type]=oe({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=oe({},t);return Object.keys(e).forEach((function(t){var r;n=oe({},n,((r={})[t]=e[t],r))})),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return x.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Q[n]||n]=e[n],t}),t)}(ie(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case N.LINK:case N.META:case N.NOSCRIPT:case N.SCRIPT:case N.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=ie(t,["children"]),o=oe({},r);return n&&(o=this.mapChildrenToProps(n,o)),x.createElement(e,o)},re(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(x.Component),t.propTypes={base:C().object,bodyAttributes:C().object,children:C().oneOfType([C().arrayOf(C().node),C().node]),defaultTitle:C().string,defer:C().bool,encodeSpecialCharacters:C().bool,htmlAttributes:C().object,link:C().arrayOf(C().object),meta:C().arrayOf(C().object),noscript:C().arrayOf(C().object),onChangeClientState:C().func,script:C().arrayOf(C().object),style:C().arrayOf(C().object),title:C().string,titleAttributes:C().object,titleTemplate:C().string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=xe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n}(A()((function(e){return{baseTag:le([q,z],e),bodyAttributes:fe(I,e),defer:de(e,V),encode:de(e,$),htmlAttributes:fe(L,e),linkTags:pe(N.LINK,[U,q],e),metaTags:pe(N.META,[F,M,B,Y,H],e),noscriptTags:pe(N.NOSCRIPT,[D],e),onChangeClientState:se(e),scriptTags:pe(N.SCRIPT,[Z,D],e),styleTags:pe(N.STYLE,[R],e),title:ue(e),titleAttributes:fe(_,e)}}),(function(e){Te&&be(Te),e.defer?Te=me((function(){ve(e,(function(){Te=null}))})):(ve(e),Te=null)}),xe)((function(){return null})));Pe.renderStatic=Pe.rewind;var ke=function(){return(0,g.jsxs)("div",{children:[(0,g.jsx)(Pe,{children:(0,g.jsx)("title",{children:"Login"})}),(0,g.jsx)(w,{})]})}},1725:function(e){"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,c,u=o(e),s=1;s<arguments.length;s++){for(var f in a=Object(arguments[s]))n.call(a,f)&&(u[f]=a[f]);if(t){c=t(a);for(var l=0;l<c.length;l++)r.call(a,c[l])&&(u[c[l]]=a[c[l]])}}return u}},888:function(e,t,n){"use strict";var r=n(9047);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3967:function(e){var t="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,f;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!==u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(f=e.entries();!(u=f.next()).done;)if(!a.has(u.value[0]))return!1;for(f=e.entries();!(u=f.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(f=e.entries();!(u=f.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!==u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"===typeof e.valueOf&&"function"===typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"===typeof e.toString&&"function"===typeof a.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!==u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!==u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},9475:function(e,t,n){"use strict";var r,o=n(2791),i=(r=o)&&"object"===typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!==typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function f(){u=e(s.map((function(e){return e.props}))),l.canUseDOM?t(u):n&&(u=n(u))}var l=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),f()},a.componentDidUpdate=function(){f()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(l,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(l,"canUseDOM",c),l}}}}]);
//# sourceMappingURL=640.24770f9b.chunk.js.map
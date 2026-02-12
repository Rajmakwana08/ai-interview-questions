(function(){const ml=document.createElement("link").relList;if(ml&&ml.supports&&ml.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))y(C);new MutationObserver(C=>{for(const W of C)if(W.type==="childList")for(const rl of W.addedNodes)rl.tagName==="LINK"&&rl.rel==="modulepreload"&&y(rl)}).observe(document,{childList:!0,subtree:!0});function F(C){const W={};return C.integrity&&(W.integrity=C.integrity),C.referrerPolicy&&(W.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?W.credentials="include":C.crossOrigin==="anonymous"?W.credentials="omit":W.credentials="same-origin",W}function y(C){if(C.ep)return;C.ep=!0;const W=F(C);fetch(C.href,W)}})();var af={exports:{}},Su={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh;function wr(){if(dh)return Su;dh=1;var O=Symbol.for("react.transitional.element"),ml=Symbol.for("react.fragment");function F(y,C,W){var rl=null;if(W!==void 0&&(rl=""+W),C.key!==void 0&&(rl=""+C.key),"key"in C){W={};for(var Cl in C)Cl!=="key"&&(W[Cl]=C[Cl])}else W=C;return C=W.ref,{$$typeof:O,type:y,key:rl,ref:C!==void 0?C:null,props:W}}return Su.Fragment=ml,Su.jsx=F,Su.jsxs=F,Su}var rh;function Wr(){return rh||(rh=1,af.exports=wr()),af.exports}var Bl=Wr(),uf={exports:{}},x={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yh;function kr(){if(yh)return x;yh=1;var O=Symbol.for("react.transitional.element"),ml=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),rl=Symbol.for("react.context"),Cl=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),sl=Symbol.iterator;function Wl(o){return o===null||typeof o!="object"?null:(o=sl&&o[sl]||o["@@iterator"],typeof o=="function"?o:null)}var Gl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rl=Object.assign,Dt={};function kl(o,E,z){this.props=o,this.context=E,this.refs=Dt,this.updater=z||Gl}kl.prototype.isReactComponent={},kl.prototype.setState=function(o,E){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,E,"setState")},kl.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function Wt(){}Wt.prototype=kl.prototype;function Hl(o,E,z){this.props=o,this.context=E,this.refs=Dt,this.updater=z||Gl}var it=Hl.prototype=new Wt;it.constructor=Hl,Rl(it,kl.prototype),it.isPureReactComponent=!0;var Et=Array.isArray;function Yl(){}var V={H:null,A:null,T:null,S:null},Ql=Object.prototype.hasOwnProperty;function pt(o,E,z){var _=z.ref;return{$$typeof:O,type:o,key:E,ref:_!==void 0?_:null,props:z}}function je(o,E){return pt(o.type,E,o.props)}function Tt(o){return typeof o=="object"&&o!==null&&o.$$typeof===O}function jl(o){var E={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(z){return E[z]})}var Ae=/\/+/g;function Ut(o,E){return typeof o=="object"&&o!==null&&o.key!=null?jl(""+o.key):E.toString(36)}function gt(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(Yl,Yl):(o.status="pending",o.then(function(E){o.status==="pending"&&(o.status="fulfilled",o.value=E)},function(E){o.status==="pending"&&(o.status="rejected",o.reason=E)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function S(o,E,z,_,B){var Q=typeof o;(Q==="undefined"||Q==="boolean")&&(o=null);var I=!1;if(o===null)I=!0;else switch(Q){case"bigint":case"string":case"number":I=!0;break;case"object":switch(o.$$typeof){case O:case ml:I=!0;break;case $:return I=o._init,S(I(o._payload),E,z,_,B)}}if(I)return B=B(o),I=_===""?"."+Ut(o,0):_,Et(B)?(z="",I!=null&&(z=I.replace(Ae,"$&/")+"/"),S(B,E,z,"",function(Ma){return Ma})):B!=null&&(Tt(B)&&(B=je(B,z+(B.key==null||o&&o.key===B.key?"":(""+B.key).replace(Ae,"$&/")+"/")+I)),E.push(B)),1;I=0;var ql=_===""?".":_+":";if(Et(o))for(var yl=0;yl<o.length;yl++)_=o[yl],Q=ql+Ut(_,yl),I+=S(_,E,z,Q,B);else if(yl=Wl(o),typeof yl=="function")for(o=yl.call(o),yl=0;!(_=o.next()).done;)_=_.value,Q=ql+Ut(_,yl++),I+=S(_,E,z,Q,B);else if(Q==="object"){if(typeof o.then=="function")return S(gt(o),E,z,_,B);throw E=String(o),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return I}function T(o,E,z){if(o==null)return o;var _=[],B=0;return S(o,_,"","",function(Q){return E.call(z,Q,B++)}),_}function q(o){if(o._status===-1){var E=o._result;E=E(),E.then(function(z){(o._status===0||o._status===-1)&&(o._status=1,o._result=z)},function(z){(o._status===0||o._status===-1)&&(o._status=2,o._result=z)}),o._status===-1&&(o._status=0,o._result=E)}if(o._status===1)return o._result.default;throw o._result}var tl=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)},nl={map:T,forEach:function(o,E,z){T(o,function(){E.apply(this,arguments)},z)},count:function(o){var E=0;return T(o,function(){E++}),E},toArray:function(o){return T(o,function(E){return E})||[]},only:function(o){if(!Tt(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};return x.Activity=R,x.Children=nl,x.Component=kl,x.Fragment=F,x.Profiler=C,x.PureComponent=Hl,x.StrictMode=y,x.Suspense=H,x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,x.__COMPILER_RUNTIME={__proto__:null,c:function(o){return V.H.useMemoCache(o)}},x.cache=function(o){return function(){return o.apply(null,arguments)}},x.cacheSignal=function(){return null},x.cloneElement=function(o,E,z){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var _=Rl({},o.props),B=o.key;if(E!=null)for(Q in E.key!==void 0&&(B=""+E.key),E)!Ql.call(E,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&E.ref===void 0||(_[Q]=E[Q]);var Q=arguments.length-2;if(Q===1)_.children=z;else if(1<Q){for(var I=Array(Q),ql=0;ql<Q;ql++)I[ql]=arguments[ql+2];_.children=I}return pt(o.type,B,_)},x.createContext=function(o){return o={$$typeof:rl,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:W,_context:o},o},x.createElement=function(o,E,z){var _,B={},Q=null;if(E!=null)for(_ in E.key!==void 0&&(Q=""+E.key),E)Ql.call(E,_)&&_!=="key"&&_!=="__self"&&_!=="__source"&&(B[_]=E[_]);var I=arguments.length-2;if(I===1)B.children=z;else if(1<I){for(var ql=Array(I),yl=0;yl<I;yl++)ql[yl]=arguments[yl+2];B.children=ql}if(o&&o.defaultProps)for(_ in I=o.defaultProps,I)B[_]===void 0&&(B[_]=I[_]);return pt(o,Q,B)},x.createRef=function(){return{current:null}},x.forwardRef=function(o){return{$$typeof:Cl,render:o}},x.isValidElement=Tt,x.lazy=function(o){return{$$typeof:$,_payload:{_status:-1,_result:o},_init:q}},x.memo=function(o,E){return{$$typeof:p,type:o,compare:E===void 0?null:E}},x.startTransition=function(o){var E=V.T,z={};V.T=z;try{var _=o(),B=V.S;B!==null&&B(z,_),typeof _=="object"&&_!==null&&typeof _.then=="function"&&_.then(Yl,tl)}catch(Q){tl(Q)}finally{E!==null&&z.types!==null&&(E.types=z.types),V.T=E}},x.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},x.use=function(o){return V.H.use(o)},x.useActionState=function(o,E,z){return V.H.useActionState(o,E,z)},x.useCallback=function(o,E){return V.H.useCallback(o,E)},x.useContext=function(o){return V.H.useContext(o)},x.useDebugValue=function(){},x.useDeferredValue=function(o,E){return V.H.useDeferredValue(o,E)},x.useEffect=function(o,E){return V.H.useEffect(o,E)},x.useEffectEvent=function(o){return V.H.useEffectEvent(o)},x.useId=function(){return V.H.useId()},x.useImperativeHandle=function(o,E,z){return V.H.useImperativeHandle(o,E,z)},x.useInsertionEffect=function(o,E){return V.H.useInsertionEffect(o,E)},x.useLayoutEffect=function(o,E){return V.H.useLayoutEffect(o,E)},x.useMemo=function(o,E){return V.H.useMemo(o,E)},x.useOptimistic=function(o,E){return V.H.useOptimistic(o,E)},x.useReducer=function(o,E,z){return V.H.useReducer(o,E,z)},x.useRef=function(o){return V.H.useRef(o)},x.useState=function(o){return V.H.useState(o)},x.useSyncExternalStore=function(o,E,z){return V.H.useSyncExternalStore(o,E,z)},x.useTransition=function(){return V.H.useTransition()},x.version="19.2.4",x}var vh;function of(){return vh||(vh=1,uf.exports=kr()),uf.exports}var Th=of(),nf={exports:{}},bu={},cf={exports:{}},ff={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gh;function Fr(){return gh||(gh=1,(function(O){function ml(S,T){var q=S.length;S.push(T);l:for(;0<q;){var tl=q-1>>>1,nl=S[tl];if(0<C(nl,T))S[tl]=T,S[q]=nl,q=tl;else break l}}function F(S){return S.length===0?null:S[0]}function y(S){if(S.length===0)return null;var T=S[0],q=S.pop();if(q!==T){S[0]=q;l:for(var tl=0,nl=S.length,o=nl>>>1;tl<o;){var E=2*(tl+1)-1,z=S[E],_=E+1,B=S[_];if(0>C(z,q))_<nl&&0>C(B,z)?(S[tl]=B,S[_]=q,tl=_):(S[tl]=z,S[E]=q,tl=E);else if(_<nl&&0>C(B,q))S[tl]=B,S[_]=q,tl=_;else break l}}return T}function C(S,T){var q=S.sortIndex-T.sortIndex;return q!==0?q:S.id-T.id}if(O.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var W=performance;O.unstable_now=function(){return W.now()}}else{var rl=Date,Cl=rl.now();O.unstable_now=function(){return rl.now()-Cl}}var H=[],p=[],$=1,R=null,sl=3,Wl=!1,Gl=!1,Rl=!1,Dt=!1,kl=typeof setTimeout=="function"?setTimeout:null,Wt=typeof clearTimeout=="function"?clearTimeout:null,Hl=typeof setImmediate<"u"?setImmediate:null;function it(S){for(var T=F(p);T!==null;){if(T.callback===null)y(p);else if(T.startTime<=S)y(p),T.sortIndex=T.expirationTime,ml(H,T);else break;T=F(p)}}function Et(S){if(Rl=!1,it(S),!Gl)if(F(H)!==null)Gl=!0,Yl||(Yl=!0,jl());else{var T=F(p);T!==null&&gt(Et,T.startTime-S)}}var Yl=!1,V=-1,Ql=5,pt=-1;function je(){return Dt?!0:!(O.unstable_now()-pt<Ql)}function Tt(){if(Dt=!1,Yl){var S=O.unstable_now();pt=S;var T=!0;try{l:{Gl=!1,Rl&&(Rl=!1,Wt(V),V=-1),Wl=!0;var q=sl;try{t:{for(it(S),R=F(H);R!==null&&!(R.expirationTime>S&&je());){var tl=R.callback;if(typeof tl=="function"){R.callback=null,sl=R.priorityLevel;var nl=tl(R.expirationTime<=S);if(S=O.unstable_now(),typeof nl=="function"){R.callback=nl,it(S),T=!0;break t}R===F(H)&&y(H),it(S)}else y(H);R=F(H)}if(R!==null)T=!0;else{var o=F(p);o!==null&&gt(Et,o.startTime-S),T=!1}}break l}finally{R=null,sl=q,Wl=!1}T=void 0}}finally{T?jl():Yl=!1}}}var jl;if(typeof Hl=="function")jl=function(){Hl(Tt)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,Ut=Ae.port2;Ae.port1.onmessage=Tt,jl=function(){Ut.postMessage(null)}}else jl=function(){kl(Tt,0)};function gt(S,T){V=kl(function(){S(O.unstable_now())},T)}O.unstable_IdlePriority=5,O.unstable_ImmediatePriority=1,O.unstable_LowPriority=4,O.unstable_NormalPriority=3,O.unstable_Profiling=null,O.unstable_UserBlockingPriority=2,O.unstable_cancelCallback=function(S){S.callback=null},O.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ql=0<S?Math.floor(1e3/S):5},O.unstable_getCurrentPriorityLevel=function(){return sl},O.unstable_next=function(S){switch(sl){case 1:case 2:case 3:var T=3;break;default:T=sl}var q=sl;sl=T;try{return S()}finally{sl=q}},O.unstable_requestPaint=function(){Dt=!0},O.unstable_runWithPriority=function(S,T){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var q=sl;sl=S;try{return T()}finally{sl=q}},O.unstable_scheduleCallback=function(S,T,q){var tl=O.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?tl+q:tl):q=tl,S){case 1:var nl=-1;break;case 2:nl=250;break;case 5:nl=1073741823;break;case 4:nl=1e4;break;default:nl=5e3}return nl=q+nl,S={id:$++,callback:T,priorityLevel:S,startTime:q,expirationTime:nl,sortIndex:-1},q>tl?(S.sortIndex=q,ml(p,S),F(H)===null&&S===F(p)&&(Rl?(Wt(V),V=-1):Rl=!0,gt(Et,q-tl))):(S.sortIndex=nl,ml(H,S),Gl||Wl||(Gl=!0,Yl||(Yl=!0,jl()))),S},O.unstable_shouldYield=je,O.unstable_wrapCallback=function(S){var T=sl;return function(){var q=sl;sl=T;try{return S.apply(this,arguments)}finally{sl=q}}}})(ff)),ff}var Sh;function $r(){return Sh||(Sh=1,cf.exports=Fr()),cf.exports}var sf={exports:{}},Nl={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bh;function Ir(){if(bh)return Nl;bh=1;var O=of();function ml(H){var p="https://react.dev/errors/"+H;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var $=2;$<arguments.length;$++)p+="&args[]="+encodeURIComponent(arguments[$])}return"Minified React error #"+H+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function F(){}var y={d:{f:F,r:function(){throw Error(ml(522))},D:F,C:F,L:F,m:F,X:F,S:F,M:F},p:0,findDOMNode:null},C=Symbol.for("react.portal");function W(H,p,$){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:R==null?null:""+R,children:H,containerInfo:p,implementation:$}}var rl=O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Cl(H,p){if(H==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=y,Nl.createPortal=function(H,p){var $=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(ml(299));return W(H,p,null,$)},Nl.flushSync=function(H){var p=rl.T,$=y.p;try{if(rl.T=null,y.p=2,H)return H()}finally{rl.T=p,y.p=$,y.d.f()}},Nl.preconnect=function(H,p){typeof H=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,y.d.C(H,p))},Nl.prefetchDNS=function(H){typeof H=="string"&&y.d.D(H)},Nl.preinit=function(H,p){if(typeof H=="string"&&p&&typeof p.as=="string"){var $=p.as,R=Cl($,p.crossOrigin),sl=typeof p.integrity=="string"?p.integrity:void 0,Wl=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;$==="style"?y.d.S(H,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:R,integrity:sl,fetchPriority:Wl}):$==="script"&&y.d.X(H,{crossOrigin:R,integrity:sl,fetchPriority:Wl,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nl.preinitModule=function(H,p){if(typeof H=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var $=Cl(p.as,p.crossOrigin);y.d.M(H,{crossOrigin:$,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&y.d.M(H)},Nl.preload=function(H,p){if(typeof H=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var $=p.as,R=Cl($,p.crossOrigin);y.d.L(H,$,{crossOrigin:R,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nl.preloadModule=function(H,p){if(typeof H=="string")if(p){var $=Cl(p.as,p.crossOrigin);y.d.m(H,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:$,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else y.d.m(H)},Nl.requestFormReset=function(H){y.d.r(H)},Nl.unstable_batchedUpdates=function(H,p){return H(p)},Nl.useFormState=function(H,p,$){return rl.H.useFormState(H,p,$)},Nl.useFormStatus=function(){return rl.H.useHostTransitionStatus()},Nl.version="19.2.4",Nl}var Ah;function Pr(){if(Ah)return sf.exports;Ah=1;function O(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O)}catch(ml){console.error(ml)}}return O(),sf.exports=Ir(),sf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eh;function ly(){if(Eh)return bu;Eh=1;var O=$r(),ml=of(),F=Pr();function y(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function C(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function W(l){var t=l,e=l;if(l.alternate)for(;t.return;)t=t.return;else{l=t;do t=l,(t.flags&4098)!==0&&(e=t.return),l=t.return;while(l)}return t.tag===3?e:null}function rl(l){if(l.tag===13){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function Cl(l){if(l.tag===31){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function H(l){if(W(l)!==l)throw Error(y(188))}function p(l){var t=l.alternate;if(!t){if(t=W(l),t===null)throw Error(y(188));return t!==l?null:l}for(var e=l,a=t;;){var u=e.return;if(u===null)break;var n=u.alternate;if(n===null){if(a=u.return,a!==null){e=a;continue}break}if(u.child===n.child){for(n=u.child;n;){if(n===e)return H(u),l;if(n===a)return H(u),t;n=n.sibling}throw Error(y(188))}if(e.return!==a.return)e=u,a=n;else{for(var i=!1,c=u.child;c;){if(c===e){i=!0,e=u,a=n;break}if(c===a){i=!0,a=u,e=n;break}c=c.sibling}if(!i){for(c=n.child;c;){if(c===e){i=!0,e=n,a=u;break}if(c===a){i=!0,a=n,e=u;break}c=c.sibling}if(!i)throw Error(y(189))}}if(e.alternate!==a)throw Error(y(190))}if(e.tag!==3)throw Error(y(188));return e.stateNode.current===e?l:t}function $(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l;for(l=l.child;l!==null;){if(t=$(l),t!==null)return t;l=l.sibling}return null}var R=Object.assign,sl=Symbol.for("react.element"),Wl=Symbol.for("react.transitional.element"),Gl=Symbol.for("react.portal"),Rl=Symbol.for("react.fragment"),Dt=Symbol.for("react.strict_mode"),kl=Symbol.for("react.profiler"),Wt=Symbol.for("react.consumer"),Hl=Symbol.for("react.context"),it=Symbol.for("react.forward_ref"),Et=Symbol.for("react.suspense"),Yl=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),Ql=Symbol.for("react.lazy"),pt=Symbol.for("react.activity"),je=Symbol.for("react.memo_cache_sentinel"),Tt=Symbol.iterator;function jl(l){return l===null||typeof l!="object"?null:(l=Tt&&l[Tt]||l["@@iterator"],typeof l=="function"?l:null)}var Ae=Symbol.for("react.client.reference");function Ut(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===Ae?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case Rl:return"Fragment";case kl:return"Profiler";case Dt:return"StrictMode";case Et:return"Suspense";case Yl:return"SuspenseList";case pt:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case Gl:return"Portal";case Hl:return l.displayName||"Context";case Wt:return(l._context.displayName||"Context")+".Consumer";case it:var t=l.render;return l=l.displayName,l||(l=t.displayName||t.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case V:return t=l.displayName||null,t!==null?t:Ut(l.type)||"Memo";case Ql:t=l._payload,l=l._init;try{return Ut(l(t))}catch{}}return null}var gt=Array.isArray,S=ml.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=F.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},tl=[],nl=-1;function o(l){return{current:l}}function E(l){0>nl||(l.current=tl[nl],tl[nl]=null,nl--)}function z(l,t){nl++,tl[nl]=l.current,l.current=t}var _=o(null),B=o(null),Q=o(null),I=o(null);function ql(l,t){switch(z(Q,t),z(B,l),z(_,null),t.nodeType){case 9:case 11:l=(l=t.documentElement)&&(l=l.namespaceURI)?Bm(l):0;break;default:if(l=t.tagName,t=t.namespaceURI)t=Bm(t),l=Gm(t,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}E(_),z(_,l)}function yl(){E(_),E(B),E(Q)}function Ma(l){l.memoizedState!==null&&z(I,l);var t=_.current,e=Gm(t,l.type);t!==e&&(z(B,l),z(_,e))}function Au(l){B.current===l&&(E(_),E(B)),I.current===l&&(E(I),ru._currentValue=q)}var Qn,mf;function Ee(l){if(Qn===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Qn=t&&t[1]||"",mf=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qn+l+mf}var jn=!1;function Xn(l,t){if(!l||jn)return"";jn=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(v){var r=v}Reflect.construct(l,[],A)}else{try{A.call()}catch(v){r=v}l.call(A.prototype)}}else{try{throw Error()}catch(v){r=v}(A=l())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(v){if(v&&r&&typeof v.stack=="string")return[v.stack,r.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=a.DetermineComponentFrameRoot(),i=n[0],c=n[1];if(i&&c){var f=i.split(`
`),d=c.split(`
`);for(u=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;u<d.length&&!d[u].includes("DetermineComponentFrameRoot");)u++;if(a===f.length||u===d.length)for(a=f.length-1,u=d.length-1;1<=a&&0<=u&&f[a]!==d[u];)u--;for(;1<=a&&0<=u;a--,u--)if(f[a]!==d[u]){if(a!==1||u!==1)do if(a--,u--,0>u||f[a]!==d[u]){var g=`
`+f[a].replace(" at new "," at ");return l.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",l.displayName)),g}while(1<=a&&0<=u);break}}}finally{jn=!1,Error.prepareStackTrace=e}return(e=l?l.displayName||l.name:"")?Ee(e):""}function zh(l,t){switch(l.tag){case 26:case 27:case 5:return Ee(l.type);case 16:return Ee("Lazy");case 13:return l.child!==t&&t!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return Xn(l.type,!1);case 11:return Xn(l.type.render,!1);case 1:return Xn(l.type,!0);case 31:return Ee("Activity");default:return""}}function hf(l){try{var t="",e=null;do t+=zh(l,e),e=l,l=l.return;while(l);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ln=Object.prototype.hasOwnProperty,Zn=O.unstable_scheduleCallback,Vn=O.unstable_cancelCallback,Mh=O.unstable_shouldYield,Oh=O.unstable_requestPaint,Fl=O.unstable_now,_h=O.unstable_getCurrentPriorityLevel,df=O.unstable_ImmediatePriority,rf=O.unstable_UserBlockingPriority,Eu=O.unstable_NormalPriority,Dh=O.unstable_LowPriority,yf=O.unstable_IdlePriority,Uh=O.log,Hh=O.unstable_setDisableYieldValue,Oa=null,$l=null;function kt(l){if(typeof Uh=="function"&&Hh(l),$l&&typeof $l.setStrictMode=="function")try{$l.setStrictMode(Oa,l)}catch{}}var Il=Math.clz32?Math.clz32:Rh,Nh=Math.log,Ch=Math.LN2;function Rh(l){return l>>>=0,l===0?32:31-(Nh(l)/Ch|0)|0}var pu=256,Tu=262144,zu=4194304;function pe(l){var t=l&42;if(t!==0)return t;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return l&261888;case 262144:case 524288:case 1048576:case 2097152:return l&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function Mu(l,t,e){var a=l.pendingLanes;if(a===0)return 0;var u=0,n=l.suspendedLanes,i=l.pingedLanes;l=l.warmLanes;var c=a&134217727;return c!==0?(a=c&~n,a!==0?u=pe(a):(i&=c,i!==0?u=pe(i):e||(e=c&~l,e!==0&&(u=pe(e))))):(c=a&~n,c!==0?u=pe(c):i!==0?u=pe(i):e||(e=a&~l,e!==0&&(u=pe(e)))),u===0?0:t!==0&&t!==u&&(t&n)===0&&(n=u&-u,e=t&-t,n>=e||n===32&&(e&4194048)!==0)?t:u}function _a(l,t){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&t)===0}function qh(l,t){switch(l){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vf(){var l=zu;return zu<<=1,(zu&62914560)===0&&(zu=4194304),l}function Kn(l){for(var t=[],e=0;31>e;e++)t.push(l);return t}function Da(l,t){l.pendingLanes|=t,t!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function xh(l,t,e,a,u,n){var i=l.pendingLanes;l.pendingLanes=e,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=e,l.entangledLanes&=e,l.errorRecoveryDisabledLanes&=e,l.shellSuspendCounter=0;var c=l.entanglements,f=l.expirationTimes,d=l.hiddenUpdates;for(e=i&~e;0<e;){var g=31-Il(e),A=1<<g;c[g]=0,f[g]=-1;var r=d[g];if(r!==null)for(d[g]=null,g=0;g<r.length;g++){var v=r[g];v!==null&&(v.lane&=-536870913)}e&=~A}a!==0&&gf(l,a,0),n!==0&&u===0&&l.tag!==0&&(l.suspendedLanes|=n&~(i&~t))}function gf(l,t,e){l.pendingLanes|=t,l.suspendedLanes&=~t;var a=31-Il(t);l.entangledLanes|=t,l.entanglements[a]=l.entanglements[a]|1073741824|e&261930}function Sf(l,t){var e=l.entangledLanes|=t;for(l=l.entanglements;e;){var a=31-Il(e),u=1<<a;u&t|l[a]&t&&(l[a]|=t),e&=~u}}function bf(l,t){var e=t&-t;return e=(e&42)!==0?1:Jn(e),(e&(l.suspendedLanes|t))!==0?0:e}function Jn(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function wn(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function Af(){var l=T.p;return l!==0?l:(l=window.event,l===void 0?32:ih(l.type))}function Ef(l,t){var e=T.p;try{return T.p=l,t()}finally{T.p=e}}var Ft=Math.random().toString(36).slice(2),Ml="__reactFiber$"+Ft,Xl="__reactProps$"+Ft,Xe="__reactContainer$"+Ft,Wn="__reactEvents$"+Ft,Bh="__reactListeners$"+Ft,Gh="__reactHandles$"+Ft,pf="__reactResources$"+Ft,Ua="__reactMarker$"+Ft;function kn(l){delete l[Ml],delete l[Xl],delete l[Wn],delete l[Bh],delete l[Gh]}function Le(l){var t=l[Ml];if(t)return t;for(var e=l.parentNode;e;){if(t=e[Xe]||e[Ml]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(l=Vm(l);l!==null;){if(e=l[Ml])return e;l=Vm(l)}return t}l=e,e=l.parentNode}return null}function Ze(l){if(l=l[Ml]||l[Xe]){var t=l.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return l}return null}function Ha(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l.stateNode;throw Error(y(33))}function Ve(l){var t=l[pf];return t||(t=l[pf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Tl(l){l[Ua]=!0}var Tf=new Set,zf={};function Te(l,t){Ke(l,t),Ke(l+"Capture",t)}function Ke(l,t){for(zf[l]=t,l=0;l<t.length;l++)Tf.add(t[l])}var Yh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mf={},Of={};function Qh(l){return Ln.call(Of,l)?!0:Ln.call(Mf,l)?!1:Yh.test(l)?Of[l]=!0:(Mf[l]=!0,!1)}function Ou(l,t,e){if(Qh(t))if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":l.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){l.removeAttribute(t);return}}l.setAttribute(t,""+e)}}function _u(l,t,e){if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(t);return}l.setAttribute(t,""+e)}}function Ht(l,t,e,a){if(a===null)l.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(e);return}l.setAttributeNS(t,e,""+a)}}function ct(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function _f(l){var t=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jh(l,t,e){var a=Object.getOwnPropertyDescriptor(l.constructor.prototype,t);if(!l.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,n=a.set;return Object.defineProperty(l,t,{configurable:!0,get:function(){return u.call(this)},set:function(i){e=""+i,n.call(this,i)}}),Object.defineProperty(l,t,{enumerable:a.enumerable}),{getValue:function(){return e},setValue:function(i){e=""+i},stopTracking:function(){l._valueTracker=null,delete l[t]}}}}function Fn(l){if(!l._valueTracker){var t=_f(l)?"checked":"value";l._valueTracker=jh(l,t,""+l[t])}}function Df(l){if(!l)return!1;var t=l._valueTracker;if(!t)return!0;var e=t.getValue(),a="";return l&&(a=_f(l)?l.checked?"true":"false":l.value),l=a,l!==e?(t.setValue(l),!0):!1}function Du(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var Xh=/[\n"\\]/g;function ft(l){return l.replace(Xh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function $n(l,t,e,a,u,n,i,c){l.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?l.type=i:l.removeAttribute("type"),t!=null?i==="number"?(t===0&&l.value===""||l.value!=t)&&(l.value=""+ct(t)):l.value!==""+ct(t)&&(l.value=""+ct(t)):i!=="submit"&&i!=="reset"||l.removeAttribute("value"),t!=null?In(l,i,ct(t)):e!=null?In(l,i,ct(e)):a!=null&&l.removeAttribute("value"),u==null&&n!=null&&(l.defaultChecked=!!n),u!=null&&(l.checked=u&&typeof u!="function"&&typeof u!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?l.name=""+ct(c):l.removeAttribute("name")}function Uf(l,t,e,a,u,n,i,c){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(l.type=n),t!=null||e!=null){if(!(n!=="submit"&&n!=="reset"||t!=null)){Fn(l);return}e=e!=null?""+ct(e):"",t=t!=null?""+ct(t):e,c||t===l.value||(l.value=t),l.defaultValue=t}a=a??u,a=typeof a!="function"&&typeof a!="symbol"&&!!a,l.checked=c?l.checked:!!a,l.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(l.name=i),Fn(l)}function In(l,t,e){t==="number"&&Du(l.ownerDocument)===l||l.defaultValue===""+e||(l.defaultValue=""+e)}function Je(l,t,e,a){if(l=l.options,t){t={};for(var u=0;u<e.length;u++)t["$"+e[u]]=!0;for(e=0;e<l.length;e++)u=t.hasOwnProperty("$"+l[e].value),l[e].selected!==u&&(l[e].selected=u),u&&a&&(l[e].defaultSelected=!0)}else{for(e=""+ct(e),t=null,u=0;u<l.length;u++){if(l[u].value===e){l[u].selected=!0,a&&(l[u].defaultSelected=!0);return}t!==null||l[u].disabled||(t=l[u])}t!==null&&(t.selected=!0)}}function Hf(l,t,e){if(t!=null&&(t=""+ct(t),t!==l.value&&(l.value=t),e==null)){l.defaultValue!==t&&(l.defaultValue=t);return}l.defaultValue=e!=null?""+ct(e):""}function Nf(l,t,e,a){if(t==null){if(a!=null){if(e!=null)throw Error(y(92));if(gt(a)){if(1<a.length)throw Error(y(93));a=a[0]}e=a}e==null&&(e=""),t=e}e=ct(t),l.defaultValue=e,a=l.textContent,a===e&&a!==""&&a!==null&&(l.value=a),Fn(l)}function we(l,t){if(t){var e=l.firstChild;if(e&&e===l.lastChild&&e.nodeType===3){e.nodeValue=t;return}}l.textContent=t}var Lh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cf(l,t,e){var a=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="":a?l.setProperty(t,e):typeof e!="number"||e===0||Lh.has(t)?t==="float"?l.cssFloat=e:l[t]=(""+e).trim():l[t]=e+"px"}function Rf(l,t,e){if(t!=null&&typeof t!="object")throw Error(y(62));if(l=l.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?l.setProperty(a,""):a==="float"?l.cssFloat="":l[a]="");for(var u in t)a=t[u],t.hasOwnProperty(u)&&e[u]!==a&&Cf(l,u,a)}else for(var n in t)t.hasOwnProperty(n)&&Cf(l,n,t[n])}function Pn(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Uu(l){return Vh.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}function Nt(){}var li=null;function ti(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var We=null,ke=null;function qf(l){var t=Ze(l);if(t&&(l=t.stateNode)){var e=l[Xl]||null;l:switch(l=t.stateNode,t.type){case"input":if($n(l,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=l;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+ft(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var a=e[t];if(a!==l&&a.form===l.form){var u=a[Xl]||null;if(!u)throw Error(y(90));$n(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<e.length;t++)a=e[t],a.form===l.form&&Df(a)}break l;case"textarea":Hf(l,e.value,e.defaultValue);break l;case"select":t=e.value,t!=null&&Je(l,!!e.multiple,t,!1)}}}var ei=!1;function xf(l,t,e){if(ei)return l(t,e);ei=!0;try{var a=l(t);return a}finally{if(ei=!1,(We!==null||ke!==null)&&(gn(),We&&(t=We,l=ke,ke=We=null,qf(t),l)))for(t=0;t<l.length;t++)qf(l[t])}}function Na(l,t){var e=l.stateNode;if(e===null)return null;var a=e[Xl]||null;if(a===null)return null;e=a[t];l:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(l=l.type,a=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!a;break l;default:l=!1}if(l)return null;if(e&&typeof e!="function")throw Error(y(231,t,typeof e));return e}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ai=!1;if(Ct)try{var Ca={};Object.defineProperty(Ca,"passive",{get:function(){ai=!0}}),window.addEventListener("test",Ca,Ca),window.removeEventListener("test",Ca,Ca)}catch{ai=!1}var $t=null,ui=null,Hu=null;function Bf(){if(Hu)return Hu;var l,t=ui,e=t.length,a,u="value"in $t?$t.value:$t.textContent,n=u.length;for(l=0;l<e&&t[l]===u[l];l++);var i=e-l;for(a=1;a<=i&&t[e-a]===u[n-a];a++);return Hu=u.slice(l,1<a?1-a:void 0)}function Nu(l){var t=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&t===13&&(l=13)):l=t,l===10&&(l=13),32<=l||l===13?l:0}function Cu(){return!0}function Gf(){return!1}function Ll(l){function t(e,a,u,n,i){this._reactName=e,this._targetInst=u,this.type=a,this.nativeEvent=n,this.target=i,this.currentTarget=null;for(var c in l)l.hasOwnProperty(c)&&(e=l[c],this[c]=e?e(n):n[c]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Cu:Gf,this.isPropagationStopped=Gf,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Cu)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Cu)},persist:function(){},isPersistent:Cu}),t}var ze={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ru=Ll(ze),Ra=R({},ze,{view:0,detail:0}),Kh=Ll(Ra),ni,ii,qa,qu=R({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fi,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==qa&&(qa&&l.type==="mousemove"?(ni=l.screenX-qa.screenX,ii=l.screenY-qa.screenY):ii=ni=0,qa=l),ni)},movementY:function(l){return"movementY"in l?l.movementY:ii}}),Yf=Ll(qu),Jh=R({},qu,{dataTransfer:0}),wh=Ll(Jh),Wh=R({},Ra,{relatedTarget:0}),ci=Ll(Wh),kh=R({},ze,{animationName:0,elapsedTime:0,pseudoElement:0}),Fh=Ll(kh),$h=R({},ze,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),Ih=Ll($h),Ph=R({},ze,{data:0}),Qf=Ll(Ph),ld={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},td={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ed={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ad(l){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(l):(l=ed[l])?!!t[l]:!1}function fi(){return ad}var ud=R({},Ra,{key:function(l){if(l.key){var t=ld[l.key]||l.key;if(t!=="Unidentified")return t}return l.type==="keypress"?(l=Nu(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?td[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fi,charCode:function(l){return l.type==="keypress"?Nu(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?Nu(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),nd=Ll(ud),id=R({},qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jf=Ll(id),cd=R({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fi}),fd=Ll(cd),sd=R({},ze,{propertyName:0,elapsedTime:0,pseudoElement:0}),od=Ll(sd),md=R({},qu,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),hd=Ll(md),dd=R({},ze,{newState:0,oldState:0}),rd=Ll(dd),yd=[9,13,27,32],si=Ct&&"CompositionEvent"in window,xa=null;Ct&&"documentMode"in document&&(xa=document.documentMode);var vd=Ct&&"TextEvent"in window&&!xa,Xf=Ct&&(!si||xa&&8<xa&&11>=xa),Lf=" ",Zf=!1;function Vf(l,t){switch(l){case"keyup":return yd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kf(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var Fe=!1;function gd(l,t){switch(l){case"compositionend":return Kf(t);case"keypress":return t.which!==32?null:(Zf=!0,Lf);case"textInput":return l=t.data,l===Lf&&Zf?null:l;default:return null}}function Sd(l,t){if(Fe)return l==="compositionend"||!si&&Vf(l,t)?(l=Bf(),Hu=ui=$t=null,Fe=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xf&&t.locale!=="ko"?null:t.data;default:return null}}var bd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jf(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t==="input"?!!bd[l.type]:t==="textarea"}function wf(l,t,e,a){We?ke?ke.push(a):ke=[a]:We=a,t=zn(t,"onChange"),0<t.length&&(e=new Ru("onChange","change",null,e,a),l.push({event:e,listeners:t}))}var Ba=null,Ga=null;function Ad(l){Hm(l,0)}function xu(l){var t=Ha(l);if(Df(t))return l}function Wf(l,t){if(l==="change")return t}var kf=!1;if(Ct){var oi;if(Ct){var mi="oninput"in document;if(!mi){var Ff=document.createElement("div");Ff.setAttribute("oninput","return;"),mi=typeof Ff.oninput=="function"}oi=mi}else oi=!1;kf=oi&&(!document.documentMode||9<document.documentMode)}function $f(){Ba&&(Ba.detachEvent("onpropertychange",If),Ga=Ba=null)}function If(l){if(l.propertyName==="value"&&xu(Ga)){var t=[];wf(t,Ga,l,ti(l)),xf(Ad,t)}}function Ed(l,t,e){l==="focusin"?($f(),Ba=t,Ga=e,Ba.attachEvent("onpropertychange",If)):l==="focusout"&&$f()}function pd(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return xu(Ga)}function Td(l,t){if(l==="click")return xu(t)}function zd(l,t){if(l==="input"||l==="change")return xu(t)}function Md(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var Pl=typeof Object.is=="function"?Object.is:Md;function Ya(l,t){if(Pl(l,t))return!0;if(typeof l!="object"||l===null||typeof t!="object"||t===null)return!1;var e=Object.keys(l),a=Object.keys(t);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var u=e[a];if(!Ln.call(t,u)||!Pl(l[u],t[u]))return!1}return!0}function Pf(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function ls(l,t){var e=Pf(l);l=0;for(var a;e;){if(e.nodeType===3){if(a=l+e.textContent.length,l<=t&&a>=t)return{node:e,offset:t-l};l=a}l:{for(;e;){if(e.nextSibling){e=e.nextSibling;break l}e=e.parentNode}e=void 0}e=Pf(e)}}function ts(l,t){return l&&t?l===t?!0:l&&l.nodeType===3?!1:t&&t.nodeType===3?ts(l,t.parentNode):"contains"in l?l.contains(t):l.compareDocumentPosition?!!(l.compareDocumentPosition(t)&16):!1:!1}function es(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var t=Du(l.document);t instanceof l.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)l=t.contentWindow;else break;t=Du(l.document)}return t}function hi(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t&&(t==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||t==="textarea"||l.contentEditable==="true")}var Od=Ct&&"documentMode"in document&&11>=document.documentMode,$e=null,di=null,Qa=null,ri=!1;function as(l,t,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;ri||$e==null||$e!==Du(a)||(a=$e,"selectionStart"in a&&hi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Qa&&Ya(Qa,a)||(Qa=a,a=zn(di,"onSelect"),0<a.length&&(t=new Ru("onSelect","select",null,t,e),l.push({event:t,listeners:a}),t.target=$e)))}function Me(l,t){var e={};return e[l.toLowerCase()]=t.toLowerCase(),e["Webkit"+l]="webkit"+t,e["Moz"+l]="moz"+t,e}var Ie={animationend:Me("Animation","AnimationEnd"),animationiteration:Me("Animation","AnimationIteration"),animationstart:Me("Animation","AnimationStart"),transitionrun:Me("Transition","TransitionRun"),transitionstart:Me("Transition","TransitionStart"),transitioncancel:Me("Transition","TransitionCancel"),transitionend:Me("Transition","TransitionEnd")},yi={},us={};Ct&&(us=document.createElement("div").style,"AnimationEvent"in window||(delete Ie.animationend.animation,delete Ie.animationiteration.animation,delete Ie.animationstart.animation),"TransitionEvent"in window||delete Ie.transitionend.transition);function Oe(l){if(yi[l])return yi[l];if(!Ie[l])return l;var t=Ie[l],e;for(e in t)if(t.hasOwnProperty(e)&&e in us)return yi[l]=t[e];return l}var ns=Oe("animationend"),is=Oe("animationiteration"),cs=Oe("animationstart"),_d=Oe("transitionrun"),Dd=Oe("transitionstart"),Ud=Oe("transitioncancel"),fs=Oe("transitionend"),ss=new Map,vi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vi.push("scrollEnd");function St(l,t){ss.set(l,t),Te(t,[l])}var Bu=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},st=[],Pe=0,gi=0;function Gu(){for(var l=Pe,t=gi=Pe=0;t<l;){var e=st[t];st[t++]=null;var a=st[t];st[t++]=null;var u=st[t];st[t++]=null;var n=st[t];if(st[t++]=null,a!==null&&u!==null){var i=a.pending;i===null?u.next=u:(u.next=i.next,i.next=u),a.pending=u}n!==0&&os(e,u,n)}}function Yu(l,t,e,a){st[Pe++]=l,st[Pe++]=t,st[Pe++]=e,st[Pe++]=a,gi|=a,l.lanes|=a,l=l.alternate,l!==null&&(l.lanes|=a)}function Si(l,t,e,a){return Yu(l,t,e,a),Qu(l)}function _e(l,t){return Yu(l,null,null,t),Qu(l)}function os(l,t,e){l.lanes|=e;var a=l.alternate;a!==null&&(a.lanes|=e);for(var u=!1,n=l.return;n!==null;)n.childLanes|=e,a=n.alternate,a!==null&&(a.childLanes|=e),n.tag===22&&(l=n.stateNode,l===null||l._visibility&1||(u=!0)),l=n,n=n.return;return l.tag===3?(n=l.stateNode,u&&t!==null&&(u=31-Il(e),l=n.hiddenUpdates,a=l[u],a===null?l[u]=[t]:a.push(t),t.lane=e|536870912),n):null}function Qu(l){if(50<cu)throw cu=0,_c=null,Error(y(185));for(var t=l.return;t!==null;)l=t,t=l.return;return l.tag===3?l.stateNode:null}var la={};function Hd(l,t,e,a){this.tag=l,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(l,t,e,a){return new Hd(l,t,e,a)}function bi(l){return l=l.prototype,!(!l||!l.isReactComponent)}function Rt(l,t){var e=l.alternate;return e===null?(e=lt(l.tag,t,l.key,l.mode),e.elementType=l.elementType,e.type=l.type,e.stateNode=l.stateNode,e.alternate=l,l.alternate=e):(e.pendingProps=t,e.type=l.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=l.flags&65011712,e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=l.sibling,e.index=l.index,e.ref=l.ref,e.refCleanup=l.refCleanup,e}function ms(l,t){l.flags&=65011714;var e=l.alternate;return e===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,l.type=e.type,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l}function ju(l,t,e,a,u,n){var i=0;if(a=l,typeof l=="function")bi(l)&&(i=1);else if(typeof l=="string")i=xr(l,e,_.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case pt:return l=lt(31,e,t,u),l.elementType=pt,l.lanes=n,l;case Rl:return De(e.children,u,n,t);case Dt:i=8,u|=24;break;case kl:return l=lt(12,e,t,u|2),l.elementType=kl,l.lanes=n,l;case Et:return l=lt(13,e,t,u),l.elementType=Et,l.lanes=n,l;case Yl:return l=lt(19,e,t,u),l.elementType=Yl,l.lanes=n,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case Hl:i=10;break l;case Wt:i=9;break l;case it:i=11;break l;case V:i=14;break l;case Ql:i=16,a=null;break l}i=29,e=Error(y(130,l===null?"null":typeof l,"")),a=null}return t=lt(i,e,t,u),t.elementType=l,t.type=a,t.lanes=n,t}function De(l,t,e,a){return l=lt(7,l,a,t),l.lanes=e,l}function Ai(l,t,e){return l=lt(6,l,null,t),l.lanes=e,l}function hs(l){var t=lt(18,null,null,0);return t.stateNode=l,t}function Ei(l,t,e){return t=lt(4,l.children!==null?l.children:[],l.key,t),t.lanes=e,t.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},t}var ds=new WeakMap;function ot(l,t){if(typeof l=="object"&&l!==null){var e=ds.get(l);return e!==void 0?e:(t={value:l,source:t,stack:hf(t)},ds.set(l,t),t)}return{value:l,source:t,stack:hf(t)}}var ta=[],ea=0,Xu=null,ja=0,mt=[],ht=0,It=null,zt=1,Mt="";function qt(l,t){ta[ea++]=ja,ta[ea++]=Xu,Xu=l,ja=t}function rs(l,t,e){mt[ht++]=zt,mt[ht++]=Mt,mt[ht++]=It,It=l;var a=zt;l=Mt;var u=32-Il(a)-1;a&=~(1<<u),e+=1;var n=32-Il(t)+u;if(30<n){var i=u-u%5;n=(a&(1<<i)-1).toString(32),a>>=i,u-=i,zt=1<<32-Il(t)+u|e<<u|a,Mt=n+l}else zt=1<<n|e<<u|a,Mt=l}function pi(l){l.return!==null&&(qt(l,1),rs(l,1,0))}function Ti(l){for(;l===Xu;)Xu=ta[--ea],ta[ea]=null,ja=ta[--ea],ta[ea]=null;for(;l===It;)It=mt[--ht],mt[ht]=null,Mt=mt[--ht],mt[ht]=null,zt=mt[--ht],mt[ht]=null}function ys(l,t){mt[ht++]=zt,mt[ht++]=Mt,mt[ht++]=It,zt=t.id,Mt=t.overflow,It=l}var Ol=null,cl=null,K=!1,Pt=null,dt=!1,zi=Error(y(519));function le(l){var t=Error(y(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xa(ot(t,l)),zi}function vs(l){var t=l.stateNode,e=l.type,a=l.memoizedProps;switch(t[Ml]=l,t[Xl]=a,e){case"dialog":X("cancel",t),X("close",t);break;case"iframe":case"object":case"embed":X("load",t);break;case"video":case"audio":for(e=0;e<su.length;e++)X(su[e],t);break;case"source":X("error",t);break;case"img":case"image":case"link":X("error",t),X("load",t);break;case"details":X("toggle",t);break;case"input":X("invalid",t),Uf(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":X("invalid",t);break;case"textarea":X("invalid",t),Nf(t,a.value,a.defaultValue,a.children)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||a.suppressHydrationWarning===!0||qm(t.textContent,e)?(a.popover!=null&&(X("beforetoggle",t),X("toggle",t)),a.onScroll!=null&&X("scroll",t),a.onScrollEnd!=null&&X("scrollend",t),a.onClick!=null&&(t.onclick=Nt),t=!0):t=!1,t||le(l,!0)}function gs(l){for(Ol=l.return;Ol;)switch(Ol.tag){case 5:case 31:case 13:dt=!1;return;case 27:case 3:dt=!0;return;default:Ol=Ol.return}}function aa(l){if(l!==Ol)return!1;if(!K)return gs(l),K=!0,!1;var t=l.tag,e;if((e=t!==3&&t!==27)&&((e=t===5)&&(e=l.type,e=!(e!=="form"&&e!=="button")||Lc(l.type,l.memoizedProps)),e=!e),e&&cl&&le(l),gs(l),t===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(y(317));cl=Zm(l)}else if(t===31){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(y(317));cl=Zm(l)}else t===27?(t=cl,re(l.type)?(l=wc,wc=null,cl=l):cl=t):cl=Ol?yt(l.stateNode.nextSibling):null;return!0}function Ue(){cl=Ol=null,K=!1}function Mi(){var l=Pt;return l!==null&&(Jl===null?Jl=l:Jl.push.apply(Jl,l),Pt=null),l}function Xa(l){Pt===null?Pt=[l]:Pt.push(l)}var Oi=o(null),He=null,xt=null;function te(l,t,e){z(Oi,t._currentValue),t._currentValue=e}function Bt(l){l._currentValue=Oi.current,E(Oi)}function _i(l,t,e){for(;l!==null;){var a=l.alternate;if((l.childLanes&t)!==t?(l.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),l===e)break;l=l.return}}function Di(l,t,e,a){var u=l.child;for(u!==null&&(u.return=l);u!==null;){var n=u.dependencies;if(n!==null){var i=u.child;n=n.firstContext;l:for(;n!==null;){var c=n;n=u;for(var f=0;f<t.length;f++)if(c.context===t[f]){n.lanes|=e,c=n.alternate,c!==null&&(c.lanes|=e),_i(n.return,e,l),a||(i=null);break l}n=c.next}}else if(u.tag===18){if(i=u.return,i===null)throw Error(y(341));i.lanes|=e,n=i.alternate,n!==null&&(n.lanes|=e),_i(i,e,l),i=null}else i=u.child;if(i!==null)i.return=u;else for(i=u;i!==null;){if(i===l){i=null;break}if(u=i.sibling,u!==null){u.return=i.return,i=u;break}i=i.return}u=i}}function ua(l,t,e,a){l=null;for(var u=t,n=!1;u!==null;){if(!n){if((u.flags&524288)!==0)n=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var i=u.alternate;if(i===null)throw Error(y(387));if(i=i.memoizedProps,i!==null){var c=u.type;Pl(u.pendingProps.value,i.value)||(l!==null?l.push(c):l=[c])}}else if(u===I.current){if(i=u.alternate,i===null)throw Error(y(387));i.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(l!==null?l.push(ru):l=[ru])}u=u.return}l!==null&&Di(t,l,e,a),t.flags|=262144}function Lu(l){for(l=l.firstContext;l!==null;){if(!Pl(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function Ne(l){He=l,xt=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function _l(l){return Ss(He,l)}function Zu(l,t){return He===null&&Ne(l),Ss(l,t)}function Ss(l,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},xt===null){if(l===null)throw Error(y(308));xt=t,l.dependencies={lanes:0,firstContext:t},l.flags|=524288}else xt=xt.next=t;return e}var Nd=typeof AbortController<"u"?AbortController:function(){var l=[],t=this.signal={aborted:!1,addEventListener:function(e,a){l.push(a)}};this.abort=function(){t.aborted=!0,l.forEach(function(e){return e()})}},Cd=O.unstable_scheduleCallback,Rd=O.unstable_NormalPriority,Sl={$$typeof:Hl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ui(){return{controller:new Nd,data:new Map,refCount:0}}function La(l){l.refCount--,l.refCount===0&&Cd(Rd,function(){l.controller.abort()})}var Za=null,Hi=0,na=0,ia=null;function qd(l,t){if(Za===null){var e=Za=[];Hi=0,na=Rc(),ia={status:"pending",value:void 0,then:function(a){e.push(a)}}}return Hi++,t.then(bs,bs),t}function bs(){if(--Hi===0&&Za!==null){ia!==null&&(ia.status="fulfilled");var l=Za;Za=null,na=0,ia=null;for(var t=0;t<l.length;t++)(0,l[t])()}}function xd(l,t){var e=[],a={status:"pending",value:null,reason:null,then:function(u){e.push(u)}};return l.then(function(){a.status="fulfilled",a.value=t;for(var u=0;u<e.length;u++)(0,e[u])(t)},function(u){for(a.status="rejected",a.reason=u,u=0;u<e.length;u++)(0,e[u])(void 0)}),a}var As=S.S;S.S=function(l,t){um=Fl(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&qd(l,t),As!==null&&As(l,t)};var Ce=o(null);function Ni(){var l=Ce.current;return l!==null?l:il.pooledCache}function Vu(l,t){t===null?z(Ce,Ce.current):z(Ce,t.pool)}function Es(){var l=Ni();return l===null?null:{parent:Sl._currentValue,pool:l}}var ca=Error(y(460)),Ci=Error(y(474)),Ku=Error(y(542)),Ju={then:function(){}};function ps(l){return l=l.status,l==="fulfilled"||l==="rejected"}function Ts(l,t,e){switch(e=l[e],e===void 0?l.push(t):e!==t&&(t.then(Nt,Nt),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Ms(l),l;default:if(typeof t.status=="string")t.then(Nt,Nt);else{if(l=il,l!==null&&100<l.shellSuspendCounter)throw Error(y(482));l=t,l.status="pending",l.then(function(a){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=a}},function(a){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Ms(l),l}throw qe=t,ca}}function Re(l){try{var t=l._init;return t(l._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(qe=e,ca):e}}var qe=null;function zs(){if(qe===null)throw Error(y(459));var l=qe;return qe=null,l}function Ms(l){if(l===ca||l===Ku)throw Error(y(483))}var fa=null,Va=0;function wu(l){var t=Va;return Va+=1,fa===null&&(fa=[]),Ts(fa,l,t)}function Ka(l,t){t=t.props.ref,l.ref=t!==void 0?t:null}function Wu(l,t){throw t.$$typeof===sl?Error(y(525)):(l=Object.prototype.toString.call(t),Error(y(31,l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)))}function Os(l){function t(m,s){if(l){var h=m.deletions;h===null?(m.deletions=[s],m.flags|=16):h.push(s)}}function e(m,s){if(!l)return null;for(;s!==null;)t(m,s),s=s.sibling;return null}function a(m){for(var s=new Map;m!==null;)m.key!==null?s.set(m.key,m):s.set(m.index,m),m=m.sibling;return s}function u(m,s){return m=Rt(m,s),m.index=0,m.sibling=null,m}function n(m,s,h){return m.index=h,l?(h=m.alternate,h!==null?(h=h.index,h<s?(m.flags|=67108866,s):h):(m.flags|=67108866,s)):(m.flags|=1048576,s)}function i(m){return l&&m.alternate===null&&(m.flags|=67108866),m}function c(m,s,h,b){return s===null||s.tag!==6?(s=Ai(h,m.mode,b),s.return=m,s):(s=u(s,h),s.return=m,s)}function f(m,s,h,b){var U=h.type;return U===Rl?g(m,s,h.props.children,b,h.key):s!==null&&(s.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Ql&&Re(U)===s.type)?(s=u(s,h.props),Ka(s,h),s.return=m,s):(s=ju(h.type,h.key,h.props,null,m.mode,b),Ka(s,h),s.return=m,s)}function d(m,s,h,b){return s===null||s.tag!==4||s.stateNode.containerInfo!==h.containerInfo||s.stateNode.implementation!==h.implementation?(s=Ei(h,m.mode,b),s.return=m,s):(s=u(s,h.children||[]),s.return=m,s)}function g(m,s,h,b,U){return s===null||s.tag!==7?(s=De(h,m.mode,b,U),s.return=m,s):(s=u(s,h),s.return=m,s)}function A(m,s,h){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=Ai(""+s,m.mode,h),s.return=m,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Wl:return h=ju(s.type,s.key,s.props,null,m.mode,h),Ka(h,s),h.return=m,h;case Gl:return s=Ei(s,m.mode,h),s.return=m,s;case Ql:return s=Re(s),A(m,s,h)}if(gt(s)||jl(s))return s=De(s,m.mode,h,null),s.return=m,s;if(typeof s.then=="function")return A(m,wu(s),h);if(s.$$typeof===Hl)return A(m,Zu(m,s),h);Wu(m,s)}return null}function r(m,s,h,b){var U=s!==null?s.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return U!==null?null:c(m,s,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Wl:return h.key===U?f(m,s,h,b):null;case Gl:return h.key===U?d(m,s,h,b):null;case Ql:return h=Re(h),r(m,s,h,b)}if(gt(h)||jl(h))return U!==null?null:g(m,s,h,b,null);if(typeof h.then=="function")return r(m,s,wu(h),b);if(h.$$typeof===Hl)return r(m,s,Zu(m,h),b);Wu(m,h)}return null}function v(m,s,h,b,U){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return m=m.get(h)||null,c(s,m,""+b,U);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Wl:return m=m.get(b.key===null?h:b.key)||null,f(s,m,b,U);case Gl:return m=m.get(b.key===null?h:b.key)||null,d(s,m,b,U);case Ql:return b=Re(b),v(m,s,h,b,U)}if(gt(b)||jl(b))return m=m.get(h)||null,g(s,m,b,U,null);if(typeof b.then=="function")return v(m,s,h,wu(b),U);if(b.$$typeof===Hl)return v(m,s,h,Zu(s,b),U);Wu(s,b)}return null}function M(m,s,h,b){for(var U=null,J=null,D=s,Y=s=0,Z=null;D!==null&&Y<h.length;Y++){D.index>Y?(Z=D,D=null):Z=D.sibling;var w=r(m,D,h[Y],b);if(w===null){D===null&&(D=Z);break}l&&D&&w.alternate===null&&t(m,D),s=n(w,s,Y),J===null?U=w:J.sibling=w,J=w,D=Z}if(Y===h.length)return e(m,D),K&&qt(m,Y),U;if(D===null){for(;Y<h.length;Y++)D=A(m,h[Y],b),D!==null&&(s=n(D,s,Y),J===null?U=D:J.sibling=D,J=D);return K&&qt(m,Y),U}for(D=a(D);Y<h.length;Y++)Z=v(D,m,Y,h[Y],b),Z!==null&&(l&&Z.alternate!==null&&D.delete(Z.key===null?Y:Z.key),s=n(Z,s,Y),J===null?U=Z:J.sibling=Z,J=Z);return l&&D.forEach(function(be){return t(m,be)}),K&&qt(m,Y),U}function N(m,s,h,b){if(h==null)throw Error(y(151));for(var U=null,J=null,D=s,Y=s=0,Z=null,w=h.next();D!==null&&!w.done;Y++,w=h.next()){D.index>Y?(Z=D,D=null):Z=D.sibling;var be=r(m,D,w.value,b);if(be===null){D===null&&(D=Z);break}l&&D&&be.alternate===null&&t(m,D),s=n(be,s,Y),J===null?U=be:J.sibling=be,J=be,D=Z}if(w.done)return e(m,D),K&&qt(m,Y),U;if(D===null){for(;!w.done;Y++,w=h.next())w=A(m,w.value,b),w!==null&&(s=n(w,s,Y),J===null?U=w:J.sibling=w,J=w);return K&&qt(m,Y),U}for(D=a(D);!w.done;Y++,w=h.next())w=v(D,m,Y,w.value,b),w!==null&&(l&&w.alternate!==null&&D.delete(w.key===null?Y:w.key),s=n(w,s,Y),J===null?U=w:J.sibling=w,J=w);return l&&D.forEach(function(Jr){return t(m,Jr)}),K&&qt(m,Y),U}function ul(m,s,h,b){if(typeof h=="object"&&h!==null&&h.type===Rl&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Wl:l:{for(var U=h.key;s!==null;){if(s.key===U){if(U=h.type,U===Rl){if(s.tag===7){e(m,s.sibling),b=u(s,h.props.children),b.return=m,m=b;break l}}else if(s.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Ql&&Re(U)===s.type){e(m,s.sibling),b=u(s,h.props),Ka(b,h),b.return=m,m=b;break l}e(m,s);break}else t(m,s);s=s.sibling}h.type===Rl?(b=De(h.props.children,m.mode,b,h.key),b.return=m,m=b):(b=ju(h.type,h.key,h.props,null,m.mode,b),Ka(b,h),b.return=m,m=b)}return i(m);case Gl:l:{for(U=h.key;s!==null;){if(s.key===U)if(s.tag===4&&s.stateNode.containerInfo===h.containerInfo&&s.stateNode.implementation===h.implementation){e(m,s.sibling),b=u(s,h.children||[]),b.return=m,m=b;break l}else{e(m,s);break}else t(m,s);s=s.sibling}b=Ei(h,m.mode,b),b.return=m,m=b}return i(m);case Ql:return h=Re(h),ul(m,s,h,b)}if(gt(h))return M(m,s,h,b);if(jl(h)){if(U=jl(h),typeof U!="function")throw Error(y(150));return h=U.call(h),N(m,s,h,b)}if(typeof h.then=="function")return ul(m,s,wu(h),b);if(h.$$typeof===Hl)return ul(m,s,Zu(m,h),b);Wu(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,s!==null&&s.tag===6?(e(m,s.sibling),b=u(s,h),b.return=m,m=b):(e(m,s),b=Ai(h,m.mode,b),b.return=m,m=b),i(m)):e(m,s)}return function(m,s,h,b){try{Va=0;var U=ul(m,s,h,b);return fa=null,U}catch(D){if(D===ca||D===Ku)throw D;var J=lt(29,D,null,m.mode);return J.lanes=b,J.return=m,J}finally{}}}var xe=Os(!0),_s=Os(!1),ee=!1;function Ri(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qi(l,t){l=l.updateQueue,t.updateQueue===l&&(t.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function ae(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function ue(l,t,e){var a=l.updateQueue;if(a===null)return null;if(a=a.shared,(k&2)!==0){var u=a.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),a.pending=t,t=Qu(l),os(l,null,e),t}return Yu(l,a,t,e),Qu(l)}function Ja(l,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194048)!==0)){var a=t.lanes;a&=l.pendingLanes,e|=a,t.lanes=e,Sf(l,e)}}function xi(l,t){var e=l.updateQueue,a=l.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var u=null,n=null;if(e=e.firstBaseUpdate,e!==null){do{var i={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};n===null?u=n=i:n=n.next=i,e=e.next}while(e!==null);n===null?u=n=t:n=n.next=t}else u=n=t;e={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:n,shared:a.shared,callbacks:a.callbacks},l.updateQueue=e;return}l=e.lastBaseUpdate,l===null?e.firstBaseUpdate=t:l.next=t,e.lastBaseUpdate=t}var Bi=!1;function wa(){if(Bi){var l=ia;if(l!==null)throw l}}function Wa(l,t,e,a){Bi=!1;var u=l.updateQueue;ee=!1;var n=u.firstBaseUpdate,i=u.lastBaseUpdate,c=u.shared.pending;if(c!==null){u.shared.pending=null;var f=c,d=f.next;f.next=null,i===null?n=d:i.next=d,i=f;var g=l.alternate;g!==null&&(g=g.updateQueue,c=g.lastBaseUpdate,c!==i&&(c===null?g.firstBaseUpdate=d:c.next=d,g.lastBaseUpdate=f))}if(n!==null){var A=u.baseState;i=0,g=d=f=null,c=n;do{var r=c.lane&-536870913,v=r!==c.lane;if(v?(L&r)===r:(a&r)===r){r!==0&&r===na&&(Bi=!0),g!==null&&(g=g.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});l:{var M=l,N=c;r=t;var ul=e;switch(N.tag){case 1:if(M=N.payload,typeof M=="function"){A=M.call(ul,A,r);break l}A=M;break l;case 3:M.flags=M.flags&-65537|128;case 0:if(M=N.payload,r=typeof M=="function"?M.call(ul,A,r):M,r==null)break l;A=R({},A,r);break l;case 2:ee=!0}}r=c.callback,r!==null&&(l.flags|=64,v&&(l.flags|=8192),v=u.callbacks,v===null?u.callbacks=[r]:v.push(r))}else v={lane:r,tag:c.tag,payload:c.payload,callback:c.callback,next:null},g===null?(d=g=v,f=A):g=g.next=v,i|=r;if(c=c.next,c===null){if(c=u.shared.pending,c===null)break;v=c,c=v.next,v.next=null,u.lastBaseUpdate=v,u.shared.pending=null}}while(!0);g===null&&(f=A),u.baseState=f,u.firstBaseUpdate=d,u.lastBaseUpdate=g,n===null&&(u.shared.lanes=0),se|=i,l.lanes=i,l.memoizedState=A}}function Ds(l,t){if(typeof l!="function")throw Error(y(191,l));l.call(t)}function Us(l,t){var e=l.callbacks;if(e!==null)for(l.callbacks=null,l=0;l<e.length;l++)Ds(e[l],t)}var sa=o(null),ku=o(0);function Hs(l,t){l=Kt,z(ku,l),z(sa,t),Kt=l|t.baseLanes}function Gi(){z(ku,Kt),z(sa,sa.current)}function Yi(){Kt=ku.current,E(sa),E(ku)}var tt=o(null),rt=null;function ne(l){var t=l.alternate;z(vl,vl.current&1),z(tt,l),rt===null&&(t===null||sa.current!==null||t.memoizedState!==null)&&(rt=l)}function Qi(l){z(vl,vl.current),z(tt,l),rt===null&&(rt=l)}function Ns(l){l.tag===22?(z(vl,vl.current),z(tt,l),rt===null&&(rt=l)):ie()}function ie(){z(vl,vl.current),z(tt,tt.current)}function et(l){E(tt),rt===l&&(rt=null),E(vl)}var vl=o(0);function Fu(l){for(var t=l;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||Kc(e)||Jc(e)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gt=0,G=null,el=null,bl=null,$u=!1,oa=!1,Be=!1,Iu=0,ka=0,ma=null,Bd=0;function hl(){throw Error(y(321))}function ji(l,t){if(t===null)return!1;for(var e=0;e<t.length&&e<l.length;e++)if(!Pl(l[e],t[e]))return!1;return!0}function Xi(l,t,e,a,u,n){return Gt=n,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,S.H=l===null||l.memoizedState===null?yo:ec,Be=!1,n=e(a,u),Be=!1,oa&&(n=Rs(t,e,a,u)),Cs(l),n}function Cs(l){S.H=Ia;var t=el!==null&&el.next!==null;if(Gt=0,bl=el=G=null,$u=!1,ka=0,ma=null,t)throw Error(y(300));l===null||Al||(l=l.dependencies,l!==null&&Lu(l)&&(Al=!0))}function Rs(l,t,e,a){G=l;var u=0;do{if(oa&&(ma=null),ka=0,oa=!1,25<=u)throw Error(y(301));if(u+=1,bl=el=null,l.updateQueue!=null){var n=l.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}S.H=vo,n=t(e,a)}while(oa);return n}function Gd(){var l=S.H,t=l.useState()[0];return t=typeof t.then=="function"?Fa(t):t,l=l.useState()[0],(el!==null?el.memoizedState:null)!==l&&(G.flags|=1024),t}function Li(){var l=Iu!==0;return Iu=0,l}function Zi(l,t,e){t.updateQueue=l.updateQueue,t.flags&=-2053,l.lanes&=~e}function Vi(l){if($u){for(l=l.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}$u=!1}Gt=0,bl=el=G=null,oa=!1,ka=Iu=0,ma=null}function xl(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bl===null?G.memoizedState=bl=l:bl=bl.next=l,bl}function gl(){if(el===null){var l=G.alternate;l=l!==null?l.memoizedState:null}else l=el.next;var t=bl===null?G.memoizedState:bl.next;if(t!==null)bl=t,el=l;else{if(l===null)throw G.alternate===null?Error(y(467)):Error(y(310));el=l,l={memoizedState:el.memoizedState,baseState:el.baseState,baseQueue:el.baseQueue,queue:el.queue,next:null},bl===null?G.memoizedState=bl=l:bl=bl.next=l}return bl}function Pu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fa(l){var t=ka;return ka+=1,ma===null&&(ma=[]),l=Ts(ma,l,t),t=G,(bl===null?t.memoizedState:bl.next)===null&&(t=t.alternate,S.H=t===null||t.memoizedState===null?yo:ec),l}function ln(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return Fa(l);if(l.$$typeof===Hl)return _l(l)}throw Error(y(438,String(l)))}function Ki(l){var t=null,e=G.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var a=G.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=Pu(),G.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(l),a=0;a<l;a++)e[a]=je;return t.index++,e}function Yt(l,t){return typeof t=="function"?t(l):t}function tn(l){var t=gl();return Ji(t,el,l)}function Ji(l,t,e){var a=l.queue;if(a===null)throw Error(y(311));a.lastRenderedReducer=e;var u=l.baseQueue,n=a.pending;if(n!==null){if(u!==null){var i=u.next;u.next=n.next,n.next=i}t.baseQueue=u=n,a.pending=null}if(n=l.baseState,u===null)l.memoizedState=n;else{t=u.next;var c=i=null,f=null,d=t,g=!1;do{var A=d.lane&-536870913;if(A!==d.lane?(L&A)===A:(Gt&A)===A){var r=d.revertLane;if(r===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),A===na&&(g=!0);else if((Gt&r)===r){d=d.next,r===na&&(g=!0);continue}else A={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},f===null?(c=f=A,i=n):f=f.next=A,G.lanes|=r,se|=r;A=d.action,Be&&e(n,A),n=d.hasEagerState?d.eagerState:e(n,A)}else r={lane:A,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},f===null?(c=f=r,i=n):f=f.next=r,G.lanes|=A,se|=A;d=d.next}while(d!==null&&d!==t);if(f===null?i=n:f.next=c,!Pl(n,l.memoizedState)&&(Al=!0,g&&(e=ia,e!==null)))throw e;l.memoizedState=n,l.baseState=i,l.baseQueue=f,a.lastRenderedState=n}return u===null&&(a.lanes=0),[l.memoizedState,a.dispatch]}function wi(l){var t=gl(),e=t.queue;if(e===null)throw Error(y(311));e.lastRenderedReducer=l;var a=e.dispatch,u=e.pending,n=t.memoizedState;if(u!==null){e.pending=null;var i=u=u.next;do n=l(n,i.action),i=i.next;while(i!==u);Pl(n,t.memoizedState)||(Al=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),e.lastRenderedState=n}return[n,a]}function qs(l,t,e){var a=G,u=gl(),n=K;if(n){if(e===void 0)throw Error(y(407));e=e()}else e=t();var i=!Pl((el||u).memoizedState,e);if(i&&(u.memoizedState=e,Al=!0),u=u.queue,Fi(Gs.bind(null,a,u,l),[l]),u.getSnapshot!==t||i||bl!==null&&bl.memoizedState.tag&1){if(a.flags|=2048,ha(9,{destroy:void 0},Bs.bind(null,a,u,e,t),null),il===null)throw Error(y(349));n||(Gt&127)!==0||xs(a,t,e)}return e}function xs(l,t,e){l.flags|=16384,l={getSnapshot:t,value:e},t=G.updateQueue,t===null?(t=Pu(),G.updateQueue=t,t.stores=[l]):(e=t.stores,e===null?t.stores=[l]:e.push(l))}function Bs(l,t,e,a){t.value=e,t.getSnapshot=a,Ys(t)&&Qs(l)}function Gs(l,t,e){return e(function(){Ys(t)&&Qs(l)})}function Ys(l){var t=l.getSnapshot;l=l.value;try{var e=t();return!Pl(l,e)}catch{return!0}}function Qs(l){var t=_e(l,2);t!==null&&wl(t,l,2)}function Wi(l){var t=xl();if(typeof l=="function"){var e=l;if(l=e(),Be){kt(!0);try{e()}finally{kt(!1)}}}return t.memoizedState=t.baseState=l,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:l},t}function js(l,t,e,a){return l.baseState=e,Ji(l,el,typeof a=="function"?a:Yt)}function Yd(l,t,e,a,u){if(un(l))throw Error(y(485));if(l=t.action,l!==null){var n={payload:u,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){n.listeners.push(i)}};S.T!==null?e(!0):n.isTransition=!1,a(n),e=t.pending,e===null?(n.next=t.pending=n,Xs(t,n)):(n.next=e.next,t.pending=e.next=n)}}function Xs(l,t){var e=t.action,a=t.payload,u=l.state;if(t.isTransition){var n=S.T,i={};S.T=i;try{var c=e(u,a),f=S.S;f!==null&&f(i,c),Ls(l,t,c)}catch(d){ki(l,t,d)}finally{n!==null&&i.types!==null&&(n.types=i.types),S.T=n}}else try{n=e(u,a),Ls(l,t,n)}catch(d){ki(l,t,d)}}function Ls(l,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){Zs(l,t,a)},function(a){return ki(l,t,a)}):Zs(l,t,e)}function Zs(l,t,e){t.status="fulfilled",t.value=e,Vs(t),l.state=e,t=l.pending,t!==null&&(e=t.next,e===t?l.pending=null:(e=e.next,t.next=e,Xs(l,e)))}function ki(l,t,e){var a=l.pending;if(l.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=e,Vs(t),t=t.next;while(t!==a)}l.action=null}function Vs(l){l=l.listeners;for(var t=0;t<l.length;t++)(0,l[t])()}function Ks(l,t){return t}function Js(l,t){if(K){var e=il.formState;if(e!==null){l:{var a=G;if(K){if(cl){t:{for(var u=cl,n=dt;u.nodeType!==8;){if(!n){u=null;break t}if(u=yt(u.nextSibling),u===null){u=null;break t}}n=u.data,u=n==="F!"||n==="F"?u:null}if(u){cl=yt(u.nextSibling),a=u.data==="F!";break l}}le(a)}a=!1}a&&(t=e[0])}}return e=xl(),e.memoizedState=e.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ks,lastRenderedState:t},e.queue=a,e=mo.bind(null,G,a),a.dispatch=e,a=Wi(!1),n=tc.bind(null,G,!1,a.queue),a=xl(),u={state:t,dispatch:null,action:l,pending:null},a.queue=u,e=Yd.bind(null,G,u,n,e),u.dispatch=e,a.memoizedState=l,[t,e,!1]}function ws(l){var t=gl();return Ws(t,el,l)}function Ws(l,t,e){if(t=Ji(l,t,Ks)[0],l=tn(Yt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Fa(t)}catch(i){throw i===ca?Ku:i}else a=t;t=gl();var u=t.queue,n=u.dispatch;return e!==t.memoizedState&&(G.flags|=2048,ha(9,{destroy:void 0},Qd.bind(null,u,e),null)),[a,n,l]}function Qd(l,t){l.action=t}function ks(l){var t=gl(),e=el;if(e!==null)return Ws(t,e,l);gl(),t=t.memoizedState,e=gl();var a=e.queue.dispatch;return e.memoizedState=l,[t,a,!1]}function ha(l,t,e,a){return l={tag:l,create:e,deps:a,inst:t,next:null},t=G.updateQueue,t===null&&(t=Pu(),G.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=l.next=l:(a=e.next,e.next=l,l.next=a,t.lastEffect=l),l}function Fs(){return gl().memoizedState}function en(l,t,e,a){var u=xl();G.flags|=l,u.memoizedState=ha(1|t,{destroy:void 0},e,a===void 0?null:a)}function an(l,t,e,a){var u=gl();a=a===void 0?null:a;var n=u.memoizedState.inst;el!==null&&a!==null&&ji(a,el.memoizedState.deps)?u.memoizedState=ha(t,n,e,a):(G.flags|=l,u.memoizedState=ha(1|t,n,e,a))}function $s(l,t){en(8390656,8,l,t)}function Fi(l,t){an(2048,8,l,t)}function jd(l){G.flags|=4;var t=G.updateQueue;if(t===null)t=Pu(),G.updateQueue=t,t.events=[l];else{var e=t.events;e===null?t.events=[l]:e.push(l)}}function Is(l){var t=gl().memoizedState;return jd({ref:t,nextImpl:l}),function(){if((k&2)!==0)throw Error(y(440));return t.impl.apply(void 0,arguments)}}function Ps(l,t){return an(4,2,l,t)}function lo(l,t){return an(4,4,l,t)}function to(l,t){if(typeof t=="function"){l=l();var e=t(l);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return l=l(),t.current=l,function(){t.current=null}}function eo(l,t,e){e=e!=null?e.concat([l]):null,an(4,4,to.bind(null,t,l),e)}function $i(){}function ao(l,t){var e=gl();t=t===void 0?null:t;var a=e.memoizedState;return t!==null&&ji(t,a[1])?a[0]:(e.memoizedState=[l,t],l)}function uo(l,t){var e=gl();t=t===void 0?null:t;var a=e.memoizedState;if(t!==null&&ji(t,a[1]))return a[0];if(a=l(),Be){kt(!0);try{l()}finally{kt(!1)}}return e.memoizedState=[a,t],a}function Ii(l,t,e){return e===void 0||(Gt&1073741824)!==0&&(L&261930)===0?l.memoizedState=t:(l.memoizedState=e,l=im(),G.lanes|=l,se|=l,e)}function no(l,t,e,a){return Pl(e,t)?e:sa.current!==null?(l=Ii(l,e,a),Pl(l,t)||(Al=!0),l):(Gt&42)===0||(Gt&1073741824)!==0&&(L&261930)===0?(Al=!0,l.memoizedState=e):(l=im(),G.lanes|=l,se|=l,t)}function io(l,t,e,a,u){var n=T.p;T.p=n!==0&&8>n?n:8;var i=S.T,c={};S.T=c,tc(l,!1,t,e);try{var f=u(),d=S.S;if(d!==null&&d(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var g=xd(f,a);$a(l,t,g,nt(l))}else $a(l,t,a,nt(l))}catch(A){$a(l,t,{then:function(){},status:"rejected",reason:A},nt())}finally{T.p=n,i!==null&&c.types!==null&&(i.types=c.types),S.T=i}}function Xd(){}function Pi(l,t,e,a){if(l.tag!==5)throw Error(y(476));var u=co(l).queue;io(l,u,t,q,e===null?Xd:function(){return fo(l),e(a)})}function co(l){var t=l.memoizedState;if(t!==null)return t;t={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:q},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:e},next:null},l.memoizedState=t,l=l.alternate,l!==null&&(l.memoizedState=t),t}function fo(l){var t=co(l);t.next===null&&(t=l.alternate.memoizedState),$a(l,t.next.queue,{},nt())}function lc(){return _l(ru)}function so(){return gl().memoizedState}function oo(){return gl().memoizedState}function Ld(l){for(var t=l.return;t!==null;){switch(t.tag){case 24:case 3:var e=nt();l=ae(e);var a=ue(t,l,e);a!==null&&(wl(a,t,e),Ja(a,t,e)),t={cache:Ui()},l.payload=t;return}t=t.return}}function Zd(l,t,e){var a=nt();e={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},un(l)?ho(t,e):(e=Si(l,t,e,a),e!==null&&(wl(e,l,a),ro(e,t,a)))}function mo(l,t,e){var a=nt();$a(l,t,e,a)}function $a(l,t,e,a){var u={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(un(l))ho(t,u);else{var n=l.alternate;if(l.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var i=t.lastRenderedState,c=n(i,e);if(u.hasEagerState=!0,u.eagerState=c,Pl(c,i))return Yu(l,t,u,0),il===null&&Gu(),!1}catch{}finally{}if(e=Si(l,t,u,a),e!==null)return wl(e,l,a),ro(e,t,a),!0}return!1}function tc(l,t,e,a){if(a={lane:2,revertLane:Rc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},un(l)){if(t)throw Error(y(479))}else t=Si(l,e,a,2),t!==null&&wl(t,l,2)}function un(l){var t=l.alternate;return l===G||t!==null&&t===G}function ho(l,t){oa=$u=!0;var e=l.pending;e===null?t.next=t:(t.next=e.next,e.next=t),l.pending=t}function ro(l,t,e){if((e&4194048)!==0){var a=t.lanes;a&=l.pendingLanes,e|=a,t.lanes=e,Sf(l,e)}}var Ia={readContext:_l,use:ln,useCallback:hl,useContext:hl,useEffect:hl,useImperativeHandle:hl,useLayoutEffect:hl,useInsertionEffect:hl,useMemo:hl,useReducer:hl,useRef:hl,useState:hl,useDebugValue:hl,useDeferredValue:hl,useTransition:hl,useSyncExternalStore:hl,useId:hl,useHostTransitionStatus:hl,useFormState:hl,useActionState:hl,useOptimistic:hl,useMemoCache:hl,useCacheRefresh:hl};Ia.useEffectEvent=hl;var yo={readContext:_l,use:ln,useCallback:function(l,t){return xl().memoizedState=[l,t===void 0?null:t],l},useContext:_l,useEffect:$s,useImperativeHandle:function(l,t,e){e=e!=null?e.concat([l]):null,en(4194308,4,to.bind(null,t,l),e)},useLayoutEffect:function(l,t){return en(4194308,4,l,t)},useInsertionEffect:function(l,t){en(4,2,l,t)},useMemo:function(l,t){var e=xl();t=t===void 0?null:t;var a=l();if(Be){kt(!0);try{l()}finally{kt(!1)}}return e.memoizedState=[a,t],a},useReducer:function(l,t,e){var a=xl();if(e!==void 0){var u=e(t);if(Be){kt(!0);try{e(t)}finally{kt(!1)}}}else u=t;return a.memoizedState=a.baseState=u,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:u},a.queue=l,l=l.dispatch=Zd.bind(null,G,l),[a.memoizedState,l]},useRef:function(l){var t=xl();return l={current:l},t.memoizedState=l},useState:function(l){l=Wi(l);var t=l.queue,e=mo.bind(null,G,t);return t.dispatch=e,[l.memoizedState,e]},useDebugValue:$i,useDeferredValue:function(l,t){var e=xl();return Ii(e,l,t)},useTransition:function(){var l=Wi(!1);return l=io.bind(null,G,l.queue,!0,!1),xl().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,t,e){var a=G,u=xl();if(K){if(e===void 0)throw Error(y(407));e=e()}else{if(e=t(),il===null)throw Error(y(349));(L&127)!==0||xs(a,t,e)}u.memoizedState=e;var n={value:e,getSnapshot:t};return u.queue=n,$s(Gs.bind(null,a,n,l),[l]),a.flags|=2048,ha(9,{destroy:void 0},Bs.bind(null,a,n,e,t),null),e},useId:function(){var l=xl(),t=il.identifierPrefix;if(K){var e=Mt,a=zt;e=(a&~(1<<32-Il(a)-1)).toString(32)+e,t="_"+t+"R_"+e,e=Iu++,0<e&&(t+="H"+e.toString(32)),t+="_"}else e=Bd++,t="_"+t+"r_"+e.toString(32)+"_";return l.memoizedState=t},useHostTransitionStatus:lc,useFormState:Js,useActionState:Js,useOptimistic:function(l){var t=xl();t.memoizedState=t.baseState=l;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=tc.bind(null,G,!0,e),e.dispatch=t,[l,t]},useMemoCache:Ki,useCacheRefresh:function(){return xl().memoizedState=Ld.bind(null,G)},useEffectEvent:function(l){var t=xl(),e={impl:l};return t.memoizedState=e,function(){if((k&2)!==0)throw Error(y(440));return e.impl.apply(void 0,arguments)}}},ec={readContext:_l,use:ln,useCallback:ao,useContext:_l,useEffect:Fi,useImperativeHandle:eo,useInsertionEffect:Ps,useLayoutEffect:lo,useMemo:uo,useReducer:tn,useRef:Fs,useState:function(){return tn(Yt)},useDebugValue:$i,useDeferredValue:function(l,t){var e=gl();return no(e,el.memoizedState,l,t)},useTransition:function(){var l=tn(Yt)[0],t=gl().memoizedState;return[typeof l=="boolean"?l:Fa(l),t]},useSyncExternalStore:qs,useId:so,useHostTransitionStatus:lc,useFormState:ws,useActionState:ws,useOptimistic:function(l,t){var e=gl();return js(e,el,l,t)},useMemoCache:Ki,useCacheRefresh:oo};ec.useEffectEvent=Is;var vo={readContext:_l,use:ln,useCallback:ao,useContext:_l,useEffect:Fi,useImperativeHandle:eo,useInsertionEffect:Ps,useLayoutEffect:lo,useMemo:uo,useReducer:wi,useRef:Fs,useState:function(){return wi(Yt)},useDebugValue:$i,useDeferredValue:function(l,t){var e=gl();return el===null?Ii(e,l,t):no(e,el.memoizedState,l,t)},useTransition:function(){var l=wi(Yt)[0],t=gl().memoizedState;return[typeof l=="boolean"?l:Fa(l),t]},useSyncExternalStore:qs,useId:so,useHostTransitionStatus:lc,useFormState:ks,useActionState:ks,useOptimistic:function(l,t){var e=gl();return el!==null?js(e,el,l,t):(e.baseState=l,[l,e.queue.dispatch])},useMemoCache:Ki,useCacheRefresh:oo};vo.useEffectEvent=Is;function ac(l,t,e,a){t=l.memoizedState,e=e(a,t),e=e==null?t:R({},t,e),l.memoizedState=e,l.lanes===0&&(l.updateQueue.baseState=e)}var uc={enqueueSetState:function(l,t,e){l=l._reactInternals;var a=nt(),u=ae(a);u.payload=t,e!=null&&(u.callback=e),t=ue(l,u,a),t!==null&&(wl(t,l,a),Ja(t,l,a))},enqueueReplaceState:function(l,t,e){l=l._reactInternals;var a=nt(),u=ae(a);u.tag=1,u.payload=t,e!=null&&(u.callback=e),t=ue(l,u,a),t!==null&&(wl(t,l,a),Ja(t,l,a))},enqueueForceUpdate:function(l,t){l=l._reactInternals;var e=nt(),a=ae(e);a.tag=2,t!=null&&(a.callback=t),t=ue(l,a,e),t!==null&&(wl(t,l,e),Ja(t,l,e))}};function go(l,t,e,a,u,n,i){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(a,n,i):t.prototype&&t.prototype.isPureReactComponent?!Ya(e,a)||!Ya(u,n):!0}function So(l,t,e,a){l=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,a),t.state!==l&&uc.enqueueReplaceState(t,t.state,null)}function Ge(l,t){var e=t;if("ref"in t){e={};for(var a in t)a!=="ref"&&(e[a]=t[a])}if(l=l.defaultProps){e===t&&(e=R({},e));for(var u in l)e[u]===void 0&&(e[u]=l[u])}return e}function bo(l){Bu(l)}function Ao(l){console.error(l)}function Eo(l){Bu(l)}function nn(l,t){try{var e=l.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function po(l,t,e){try{var a=l.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function nc(l,t,e){return e=ae(e),e.tag=3,e.payload={element:null},e.callback=function(){nn(l,t)},e}function To(l){return l=ae(l),l.tag=3,l}function zo(l,t,e,a){var u=e.type.getDerivedStateFromError;if(typeof u=="function"){var n=a.value;l.payload=function(){return u(n)},l.callback=function(){po(t,e,a)}}var i=e.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(l.callback=function(){po(t,e,a),typeof u!="function"&&(oe===null?oe=new Set([this]):oe.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Vd(l,t,e,a,u){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=e.alternate,t!==null&&ua(t,e,u,!0),e=tt.current,e!==null){switch(e.tag){case 31:case 13:return rt===null?Sn():e.alternate===null&&dl===0&&(dl=3),e.flags&=-257,e.flags|=65536,e.lanes=u,a===Ju?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([a]):t.add(a),Hc(l,a,u)),!1;case 22:return e.flags|=65536,a===Ju?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([a]):e.add(a)),Hc(l,a,u)),!1}throw Error(y(435,e.tag))}return Hc(l,a,u),Sn(),!1}if(K)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,a!==zi&&(l=Error(y(422),{cause:a}),Xa(ot(l,e)))):(a!==zi&&(t=Error(y(423),{cause:a}),Xa(ot(t,e))),l=l.current.alternate,l.flags|=65536,u&=-u,l.lanes|=u,a=ot(a,e),u=nc(l.stateNode,a,u),xi(l,u),dl!==4&&(dl=2)),!1;var n=Error(y(520),{cause:a});if(n=ot(n,e),iu===null?iu=[n]:iu.push(n),dl!==4&&(dl=2),t===null)return!0;a=ot(a,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,l=u&-u,e.lanes|=l,l=nc(e.stateNode,a,l),xi(e,l),!1;case 1:if(t=e.type,n=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(oe===null||!oe.has(n))))return e.flags|=65536,u&=-u,e.lanes|=u,u=To(u),zo(u,l,e,a),xi(e,u),!1}e=e.return}while(e!==null);return!1}var ic=Error(y(461)),Al=!1;function Dl(l,t,e,a){t.child=l===null?_s(t,null,e,a):xe(t,l.child,e,a)}function Mo(l,t,e,a,u){e=e.render;var n=t.ref;if("ref"in a){var i={};for(var c in a)c!=="ref"&&(i[c]=a[c])}else i=a;return Ne(t),a=Xi(l,t,e,i,n,u),c=Li(),l!==null&&!Al?(Zi(l,t,u),Qt(l,t,u)):(K&&c&&pi(t),t.flags|=1,Dl(l,t,a,u),t.child)}function Oo(l,t,e,a,u){if(l===null){var n=e.type;return typeof n=="function"&&!bi(n)&&n.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=n,_o(l,t,n,a,u)):(l=ju(e.type,null,a,t,t.mode,u),l.ref=t.ref,l.return=t,t.child=l)}if(n=l.child,!rc(l,u)){var i=n.memoizedProps;if(e=e.compare,e=e!==null?e:Ya,e(i,a)&&l.ref===t.ref)return Qt(l,t,u)}return t.flags|=1,l=Rt(n,a),l.ref=t.ref,l.return=t,t.child=l}function _o(l,t,e,a,u){if(l!==null){var n=l.memoizedProps;if(Ya(n,a)&&l.ref===t.ref)if(Al=!1,t.pendingProps=a=n,rc(l,u))(l.flags&131072)!==0&&(Al=!0);else return t.lanes=l.lanes,Qt(l,t,u)}return cc(l,t,e,a,u)}function Do(l,t,e,a){var u=a.children,n=l!==null?l.memoizedState:null;if(l===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(n=n!==null?n.baseLanes|e:e,l!==null){for(a=t.child=l.child,u=0;a!==null;)u=u|a.lanes|a.childLanes,a=a.sibling;a=u&~n}else a=0,t.child=null;return Uo(l,t,n,e,a)}if((e&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},l!==null&&Vu(t,n!==null?n.cachePool:null),n!==null?Hs(t,n):Gi(),Ns(t);else return a=t.lanes=536870912,Uo(l,t,n!==null?n.baseLanes|e:e,e,a)}else n!==null?(Vu(t,n.cachePool),Hs(t,n),ie(),t.memoizedState=null):(l!==null&&Vu(t,null),Gi(),ie());return Dl(l,t,u,e),t.child}function Pa(l,t){return l!==null&&l.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uo(l,t,e,a,u){var n=Ni();return n=n===null?null:{parent:Sl._currentValue,pool:n},t.memoizedState={baseLanes:e,cachePool:n},l!==null&&Vu(t,null),Gi(),Ns(t),l!==null&&ua(l,t,a,!0),t.childLanes=u,null}function cn(l,t){return t=sn({mode:t.mode,children:t.children},l.mode),t.ref=l.ref,l.child=t,t.return=l,t}function Ho(l,t,e){return xe(t,l.child,null,e),l=cn(t,t.pendingProps),l.flags|=2,et(t),t.memoizedState=null,l}function Kd(l,t,e){var a=t.pendingProps,u=(t.flags&128)!==0;if(t.flags&=-129,l===null){if(K){if(a.mode==="hidden")return l=cn(t,a),t.lanes=536870912,Pa(null,l);if(Qi(t),(l=cl)?(l=Lm(l,dt),l=l!==null&&l.data==="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:It!==null?{id:zt,overflow:Mt}:null,retryLane:536870912,hydrationErrors:null},e=hs(l),e.return=t,t.child=e,Ol=t,cl=null)):l=null,l===null)throw le(t);return t.lanes=536870912,null}return cn(t,a)}var n=l.memoizedState;if(n!==null){var i=n.dehydrated;if(Qi(t),u)if(t.flags&256)t.flags&=-257,t=Ho(l,t,e);else if(t.memoizedState!==null)t.child=l.child,t.flags|=128,t=null;else throw Error(y(558));else if(Al||ua(l,t,e,!1),u=(e&l.childLanes)!==0,Al||u){if(a=il,a!==null&&(i=bf(a,e),i!==0&&i!==n.retryLane))throw n.retryLane=i,_e(l,i),wl(a,l,i),ic;Sn(),t=Ho(l,t,e)}else l=n.treeContext,cl=yt(i.nextSibling),Ol=t,K=!0,Pt=null,dt=!1,l!==null&&ys(t,l),t=cn(t,a),t.flags|=4096;return t}return l=Rt(l.child,{mode:a.mode,children:a.children}),l.ref=t.ref,t.child=l,l.return=t,l}function fn(l,t){var e=t.ref;if(e===null)l!==null&&l.ref!==null&&(t.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(y(284));(l===null||l.ref!==e)&&(t.flags|=4194816)}}function cc(l,t,e,a,u){return Ne(t),e=Xi(l,t,e,a,void 0,u),a=Li(),l!==null&&!Al?(Zi(l,t,u),Qt(l,t,u)):(K&&a&&pi(t),t.flags|=1,Dl(l,t,e,u),t.child)}function No(l,t,e,a,u,n){return Ne(t),t.updateQueue=null,e=Rs(t,a,e,u),Cs(l),a=Li(),l!==null&&!Al?(Zi(l,t,n),Qt(l,t,n)):(K&&a&&pi(t),t.flags|=1,Dl(l,t,e,n),t.child)}function Co(l,t,e,a,u){if(Ne(t),t.stateNode===null){var n=la,i=e.contextType;typeof i=="object"&&i!==null&&(n=_l(i)),n=new e(a,n),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=uc,t.stateNode=n,n._reactInternals=t,n=t.stateNode,n.props=a,n.state=t.memoizedState,n.refs={},Ri(t),i=e.contextType,n.context=typeof i=="object"&&i!==null?_l(i):la,n.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(ac(t,e,i,a),n.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(i=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),i!==n.state&&uc.enqueueReplaceState(n,n.state,null),Wa(t,a,n,u),wa(),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(l===null){n=t.stateNode;var c=t.memoizedProps,f=Ge(e,c);n.props=f;var d=n.context,g=e.contextType;i=la,typeof g=="object"&&g!==null&&(i=_l(g));var A=e.getDerivedStateFromProps;g=typeof A=="function"||typeof n.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,g||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c||d!==i)&&So(t,n,a,i),ee=!1;var r=t.memoizedState;n.state=r,Wa(t,a,n,u),wa(),d=t.memoizedState,c||r!==d||ee?(typeof A=="function"&&(ac(t,e,A,a),d=t.memoizedState),(f=ee||go(t,e,f,a,r,d,i))?(g||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=d),n.props=a,n.state=d,n.context=i,a=f):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{n=t.stateNode,qi(l,t),i=t.memoizedProps,g=Ge(e,i),n.props=g,A=t.pendingProps,r=n.context,d=e.contextType,f=la,typeof d=="object"&&d!==null&&(f=_l(d)),c=e.getDerivedStateFromProps,(d=typeof c=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(i!==A||r!==f)&&So(t,n,a,f),ee=!1,r=t.memoizedState,n.state=r,Wa(t,a,n,u),wa();var v=t.memoizedState;i!==A||r!==v||ee||l!==null&&l.dependencies!==null&&Lu(l.dependencies)?(typeof c=="function"&&(ac(t,e,c,a),v=t.memoizedState),(g=ee||go(t,e,g,a,r,v,f)||l!==null&&l.dependencies!==null&&Lu(l.dependencies))?(d||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(a,v,f),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(a,v,f)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||i===l.memoizedProps&&r===l.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&r===l.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=v),n.props=a,n.state=v,n.context=f,a=g):(typeof n.componentDidUpdate!="function"||i===l.memoizedProps&&r===l.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&r===l.memoizedState||(t.flags|=1024),a=!1)}return n=a,fn(l,t),a=(t.flags&128)!==0,n||a?(n=t.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:n.render(),t.flags|=1,l!==null&&a?(t.child=xe(t,l.child,null,u),t.child=xe(t,null,e,u)):Dl(l,t,e,u),t.memoizedState=n.state,l=t.child):l=Qt(l,t,u),l}function Ro(l,t,e,a){return Ue(),t.flags|=256,Dl(l,t,e,a),t.child}var fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sc(l){return{baseLanes:l,cachePool:Es()}}function oc(l,t,e){return l=l!==null?l.childLanes&~e:0,t&&(l|=ut),l}function qo(l,t,e){var a=t.pendingProps,u=!1,n=(t.flags&128)!==0,i;if((i=n)||(i=l!==null&&l.memoizedState===null?!1:(vl.current&2)!==0),i&&(u=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,l===null){if(K){if(u?ne(t):ie(),(l=cl)?(l=Lm(l,dt),l=l!==null&&l.data!=="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:It!==null?{id:zt,overflow:Mt}:null,retryLane:536870912,hydrationErrors:null},e=hs(l),e.return=t,t.child=e,Ol=t,cl=null)):l=null,l===null)throw le(t);return Jc(l)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,u?(ie(),u=t.mode,c=sn({mode:"hidden",children:c},u),a=De(a,u,e,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=sc(e),a.childLanes=oc(l,i,e),t.memoizedState=fc,Pa(null,a)):(ne(t),mc(t,c))}var f=l.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(n)t.flags&256?(ne(t),t.flags&=-257,t=hc(l,t,e)):t.memoizedState!==null?(ie(),t.child=l.child,t.flags|=128,t=null):(ie(),c=a.fallback,u=t.mode,a=sn({mode:"visible",children:a.children},u),c=De(c,u,e,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,xe(t,l.child,null,e),a=t.child,a.memoizedState=sc(e),a.childLanes=oc(l,i,e),t.memoizedState=fc,t=Pa(null,a));else if(ne(t),Jc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var d=i.dgst;i=d,a=Error(y(419)),a.stack="",a.digest=i,Xa({value:a,source:null,stack:null}),t=hc(l,t,e)}else if(Al||ua(l,t,e,!1),i=(e&l.childLanes)!==0,Al||i){if(i=il,i!==null&&(a=bf(i,e),a!==0&&a!==f.retryLane))throw f.retryLane=a,_e(l,a),wl(i,l,a),ic;Kc(c)||Sn(),t=hc(l,t,e)}else Kc(c)?(t.flags|=192,t.child=l.child,t=null):(l=f.treeContext,cl=yt(c.nextSibling),Ol=t,K=!0,Pt=null,dt=!1,l!==null&&ys(t,l),t=mc(t,a.children),t.flags|=4096);return t}return u?(ie(),c=a.fallback,u=t.mode,f=l.child,d=f.sibling,a=Rt(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&65011712,d!==null?c=Rt(d,c):(c=De(c,u,e,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,Pa(null,a),a=t.child,c=l.child.memoizedState,c===null?c=sc(e):(u=c.cachePool,u!==null?(f=Sl._currentValue,u=u.parent!==f?{parent:f,pool:f}:u):u=Es(),c={baseLanes:c.baseLanes|e,cachePool:u}),a.memoizedState=c,a.childLanes=oc(l,i,e),t.memoizedState=fc,Pa(l.child,a)):(ne(t),e=l.child,l=e.sibling,e=Rt(e,{mode:"visible",children:a.children}),e.return=t,e.sibling=null,l!==null&&(i=t.deletions,i===null?(t.deletions=[l],t.flags|=16):i.push(l)),t.child=e,t.memoizedState=null,e)}function mc(l,t){return t=sn({mode:"visible",children:t},l.mode),t.return=l,l.child=t}function sn(l,t){return l=lt(22,l,null,t),l.lanes=0,l}function hc(l,t,e){return xe(t,l.child,null,e),l=mc(t,t.pendingProps.children),l.flags|=2,t.memoizedState=null,l}function xo(l,t,e){l.lanes|=t;var a=l.alternate;a!==null&&(a.lanes|=t),_i(l.return,t,e)}function dc(l,t,e,a,u,n){var i=l.memoizedState;i===null?l.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:e,tailMode:u,treeForkCount:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=e,i.tailMode=u,i.treeForkCount=n)}function Bo(l,t,e){var a=t.pendingProps,u=a.revealOrder,n=a.tail;a=a.children;var i=vl.current,c=(i&2)!==0;if(c?(i=i&1|2,t.flags|=128):i&=1,z(vl,i),Dl(l,t,a,e),a=K?ja:0,!c&&l!==null&&(l.flags&128)!==0)l:for(l=t.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&xo(l,e,t);else if(l.tag===19)xo(l,e,t);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break l;for(;l.sibling===null;){if(l.return===null||l.return===t)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}switch(u){case"forwards":for(e=t.child,u=null;e!==null;)l=e.alternate,l!==null&&Fu(l)===null&&(u=e),e=e.sibling;e=u,e===null?(u=t.child,t.child=null):(u=e.sibling,e.sibling=null),dc(t,!1,u,e,n,a);break;case"backwards":case"unstable_legacy-backwards":for(e=null,u=t.child,t.child=null;u!==null;){if(l=u.alternate,l!==null&&Fu(l)===null){t.child=u;break}l=u.sibling,u.sibling=e,e=u,u=l}dc(t,!0,e,null,n,a);break;case"together":dc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Qt(l,t,e){if(l!==null&&(t.dependencies=l.dependencies),se|=t.lanes,(e&t.childLanes)===0)if(l!==null){if(ua(l,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(l!==null&&t.child!==l.child)throw Error(y(153));if(t.child!==null){for(l=t.child,e=Rt(l,l.pendingProps),t.child=e,e.return=t;l.sibling!==null;)l=l.sibling,e=e.sibling=Rt(l,l.pendingProps),e.return=t;e.sibling=null}return t.child}function rc(l,t){return(l.lanes&t)!==0?!0:(l=l.dependencies,!!(l!==null&&Lu(l)))}function Jd(l,t,e){switch(t.tag){case 3:ql(t,t.stateNode.containerInfo),te(t,Sl,l.memoizedState.cache),Ue();break;case 27:case 5:Ma(t);break;case 4:ql(t,t.stateNode.containerInfo);break;case 10:te(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Qi(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ne(t),t.flags|=128,null):(e&t.child.childLanes)!==0?qo(l,t,e):(ne(t),l=Qt(l,t,e),l!==null?l.sibling:null);ne(t);break;case 19:var u=(l.flags&128)!==0;if(a=(e&t.childLanes)!==0,a||(ua(l,t,e,!1),a=(e&t.childLanes)!==0),u){if(a)return Bo(l,t,e);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),z(vl,vl.current),a)break;return null;case 22:return t.lanes=0,Do(l,t,e,t.pendingProps);case 24:te(t,Sl,l.memoizedState.cache)}return Qt(l,t,e)}function Go(l,t,e){if(l!==null)if(l.memoizedProps!==t.pendingProps)Al=!0;else{if(!rc(l,e)&&(t.flags&128)===0)return Al=!1,Jd(l,t,e);Al=(l.flags&131072)!==0}else Al=!1,K&&(t.flags&1048576)!==0&&rs(t,ja,t.index);switch(t.lanes=0,t.tag){case 16:l:{var a=t.pendingProps;if(l=Re(t.elementType),t.type=l,typeof l=="function")bi(l)?(a=Ge(l,a),t.tag=1,t=Co(null,t,l,a,e)):(t.tag=0,t=cc(null,t,l,a,e));else{if(l!=null){var u=l.$$typeof;if(u===it){t.tag=11,t=Mo(null,t,l,a,e);break l}else if(u===V){t.tag=14,t=Oo(null,t,l,a,e);break l}}throw t=Ut(l)||l,Error(y(306,t,""))}}return t;case 0:return cc(l,t,t.type,t.pendingProps,e);case 1:return a=t.type,u=Ge(a,t.pendingProps),Co(l,t,a,u,e);case 3:l:{if(ql(t,t.stateNode.containerInfo),l===null)throw Error(y(387));a=t.pendingProps;var n=t.memoizedState;u=n.element,qi(l,t),Wa(t,a,null,e);var i=t.memoizedState;if(a=i.cache,te(t,Sl,a),a!==n.cache&&Di(t,[Sl],e,!0),wa(),a=i.element,n.isDehydrated)if(n={element:a,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){t=Ro(l,t,a,e);break l}else if(a!==u){u=ot(Error(y(424)),t),Xa(u),t=Ro(l,t,a,e);break l}else{switch(l=t.stateNode.containerInfo,l.nodeType){case 9:l=l.body;break;default:l=l.nodeName==="HTML"?l.ownerDocument.body:l}for(cl=yt(l.firstChild),Ol=t,K=!0,Pt=null,dt=!0,e=_s(t,null,a,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(Ue(),a===u){t=Qt(l,t,e);break l}Dl(l,t,a,e)}t=t.child}return t;case 26:return fn(l,t),l===null?(e=Wm(t.type,null,t.pendingProps,null))?t.memoizedState=e:K||(e=t.type,l=t.pendingProps,a=Mn(Q.current).createElement(e),a[Ml]=t,a[Xl]=l,Ul(a,e,l),Tl(a),t.stateNode=a):t.memoizedState=Wm(t.type,l.memoizedProps,t.pendingProps,l.memoizedState),null;case 27:return Ma(t),l===null&&K&&(a=t.stateNode=Km(t.type,t.pendingProps,Q.current),Ol=t,dt=!0,u=cl,re(t.type)?(wc=u,cl=yt(a.firstChild)):cl=u),Dl(l,t,t.pendingProps.children,e),fn(l,t),l===null&&(t.flags|=4194304),t.child;case 5:return l===null&&K&&((u=a=cl)&&(a=pr(a,t.type,t.pendingProps,dt),a!==null?(t.stateNode=a,Ol=t,cl=yt(a.firstChild),dt=!1,u=!0):u=!1),u||le(t)),Ma(t),u=t.type,n=t.pendingProps,i=l!==null?l.memoizedProps:null,a=n.children,Lc(u,n)?a=null:i!==null&&Lc(u,i)&&(t.flags|=32),t.memoizedState!==null&&(u=Xi(l,t,Gd,null,null,e),ru._currentValue=u),fn(l,t),Dl(l,t,a,e),t.child;case 6:return l===null&&K&&((l=e=cl)&&(e=Tr(e,t.pendingProps,dt),e!==null?(t.stateNode=e,Ol=t,cl=null,l=!0):l=!1),l||le(t)),null;case 13:return qo(l,t,e);case 4:return ql(t,t.stateNode.containerInfo),a=t.pendingProps,l===null?t.child=xe(t,null,a,e):Dl(l,t,a,e),t.child;case 11:return Mo(l,t,t.type,t.pendingProps,e);case 7:return Dl(l,t,t.pendingProps,e),t.child;case 8:return Dl(l,t,t.pendingProps.children,e),t.child;case 12:return Dl(l,t,t.pendingProps.children,e),t.child;case 10:return a=t.pendingProps,te(t,t.type,a.value),Dl(l,t,a.children,e),t.child;case 9:return u=t.type._context,a=t.pendingProps.children,Ne(t),u=_l(u),a=a(u),t.flags|=1,Dl(l,t,a,e),t.child;case 14:return Oo(l,t,t.type,t.pendingProps,e);case 15:return _o(l,t,t.type,t.pendingProps,e);case 19:return Bo(l,t,e);case 31:return Kd(l,t,e);case 22:return Do(l,t,e,t.pendingProps);case 24:return Ne(t),a=_l(Sl),l===null?(u=Ni(),u===null&&(u=il,n=Ui(),u.pooledCache=n,n.refCount++,n!==null&&(u.pooledCacheLanes|=e),u=n),t.memoizedState={parent:a,cache:u},Ri(t),te(t,Sl,u)):((l.lanes&e)!==0&&(qi(l,t),Wa(t,null,null,e),wa()),u=l.memoizedState,n=t.memoizedState,u.parent!==a?(u={parent:a,cache:a},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),te(t,Sl,a)):(a=n.cache,te(t,Sl,a),a!==u.cache&&Di(t,[Sl],e,!0))),Dl(l,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(y(156,t.tag))}function jt(l){l.flags|=4}function yc(l,t,e,a,u){if((t=(l.mode&32)!==0)&&(t=!1),t){if(l.flags|=16777216,(u&335544128)===u)if(l.stateNode.complete)l.flags|=8192;else if(om())l.flags|=8192;else throw qe=Ju,Ci}else l.flags&=-16777217}function Yo(l,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!Pm(t))if(om())l.flags|=8192;else throw qe=Ju,Ci}function on(l,t){t!==null&&(l.flags|=4),l.flags&16384&&(t=l.tag!==22?vf():536870912,l.lanes|=t,va|=t)}function lu(l,t){if(!K)switch(l.tailMode){case"hidden":t=l.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?l.tail=null:e.sibling=null;break;case"collapsed":e=l.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t||l.tail===null?l.tail=null:l.tail.sibling=null:a.sibling=null}}function fl(l){var t=l.alternate!==null&&l.alternate.child===l.child,e=0,a=0;if(t)for(var u=l.child;u!==null;)e|=u.lanes|u.childLanes,a|=u.subtreeFlags&65011712,a|=u.flags&65011712,u.return=l,u=u.sibling;else for(u=l.child;u!==null;)e|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=l,u=u.sibling;return l.subtreeFlags|=a,l.childLanes=e,t}function wd(l,t,e){var a=t.pendingProps;switch(Ti(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fl(t),null;case 1:return fl(t),null;case 3:return e=t.stateNode,a=null,l!==null&&(a=l.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Bt(Sl),yl(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(l===null||l.child===null)&&(aa(t)?jt(t):l===null||l.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Mi())),fl(t),null;case 26:var u=t.type,n=t.memoizedState;return l===null?(jt(t),n!==null?(fl(t),Yo(t,n)):(fl(t),yc(t,u,null,a,e))):n?n!==l.memoizedState?(jt(t),fl(t),Yo(t,n)):(fl(t),t.flags&=-16777217):(l=l.memoizedProps,l!==a&&jt(t),fl(t),yc(t,u,l,a,e)),null;case 27:if(Au(t),e=Q.current,u=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==a&&jt(t);else{if(!a){if(t.stateNode===null)throw Error(y(166));return fl(t),null}l=_.current,aa(t)?vs(t):(l=Km(u,a,e),t.stateNode=l,jt(t))}return fl(t),null;case 5:if(Au(t),u=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==a&&jt(t);else{if(!a){if(t.stateNode===null)throw Error(y(166));return fl(t),null}if(n=_.current,aa(t))vs(t);else{var i=Mn(Q.current);switch(n){case 1:n=i.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:n=i.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":n=i.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":n=i.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":n=i.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?n.multiple=!0:a.size&&(n.size=a.size);break;default:n=typeof a.is=="string"?i.createElement(u,{is:a.is}):i.createElement(u)}}n[Ml]=t,n[Xl]=a;l:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)n.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break l;for(;i.sibling===null;){if(i.return===null||i.return===t)break l;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=n;l:switch(Ul(n,u,a),u){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break l;case"img":a=!0;break l;default:a=!1}a&&jt(t)}}return fl(t),yc(t,t.type,l===null?null:l.memoizedProps,t.pendingProps,e),null;case 6:if(l&&t.stateNode!=null)l.memoizedProps!==a&&jt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(y(166));if(l=Q.current,aa(t)){if(l=t.stateNode,e=t.memoizedProps,a=null,u=Ol,u!==null)switch(u.tag){case 27:case 5:a=u.memoizedProps}l[Ml]=t,l=!!(l.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||qm(l.nodeValue,e)),l||le(t,!0)}else l=Mn(l).createTextNode(a),l[Ml]=t,t.stateNode=l}return fl(t),null;case 31:if(e=t.memoizedState,l===null||l.memoizedState!==null){if(a=aa(t),e!==null){if(l===null){if(!a)throw Error(y(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(y(557));l[Ml]=t}else Ue(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;fl(t),l=!1}else e=Mi(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=e),l=!0;if(!l)return t.flags&256?(et(t),t):(et(t),null);if((t.flags&128)!==0)throw Error(y(558))}return fl(t),null;case 13:if(a=t.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(u=aa(t),a!==null&&a.dehydrated!==null){if(l===null){if(!u)throw Error(y(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(y(317));u[Ml]=t}else Ue(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;fl(t),u=!1}else u=Mi(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(et(t),t):(et(t),null)}return et(t),(t.flags&128)!==0?(t.lanes=e,t):(e=a!==null,l=l!==null&&l.memoizedState!==null,e&&(a=t.child,u=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(u=a.alternate.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==u&&(a.flags|=2048)),e!==l&&e&&(t.child.flags|=8192),on(t,t.updateQueue),fl(t),null);case 4:return yl(),l===null&&Gc(t.stateNode.containerInfo),fl(t),null;case 10:return Bt(t.type),fl(t),null;case 19:if(E(vl),a=t.memoizedState,a===null)return fl(t),null;if(u=(t.flags&128)!==0,n=a.rendering,n===null)if(u)lu(a,!1);else{if(dl!==0||l!==null&&(l.flags&128)!==0)for(l=t.child;l!==null;){if(n=Fu(l),n!==null){for(t.flags|=128,lu(a,!1),l=n.updateQueue,t.updateQueue=l,on(t,l),t.subtreeFlags=0,l=e,e=t.child;e!==null;)ms(e,l),e=e.sibling;return z(vl,vl.current&1|2),K&&qt(t,a.treeForkCount),t.child}l=l.sibling}a.tail!==null&&Fl()>yn&&(t.flags|=128,u=!0,lu(a,!1),t.lanes=4194304)}else{if(!u)if(l=Fu(n),l!==null){if(t.flags|=128,u=!0,l=l.updateQueue,t.updateQueue=l,on(t,l),lu(a,!0),a.tail===null&&a.tailMode==="hidden"&&!n.alternate&&!K)return fl(t),null}else 2*Fl()-a.renderingStartTime>yn&&e!==536870912&&(t.flags|=128,u=!0,lu(a,!1),t.lanes=4194304);a.isBackwards?(n.sibling=t.child,t.child=n):(l=a.last,l!==null?l.sibling=n:t.child=n,a.last=n)}return a.tail!==null?(l=a.tail,a.rendering=l,a.tail=l.sibling,a.renderingStartTime=Fl(),l.sibling=null,e=vl.current,z(vl,u?e&1|2:e&1),K&&qt(t,a.treeForkCount),l):(fl(t),null);case 22:case 23:return et(t),Yi(),a=t.memoizedState!==null,l!==null?l.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(e&536870912)!==0&&(t.flags&128)===0&&(fl(t),t.subtreeFlags&6&&(t.flags|=8192)):fl(t),e=t.updateQueue,e!==null&&on(t,e.retryQueue),e=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==e&&(t.flags|=2048),l!==null&&E(Ce),null;case 24:return e=null,l!==null&&(e=l.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),Bt(Sl),fl(t),null;case 25:return null;case 30:return null}throw Error(y(156,t.tag))}function Wd(l,t){switch(Ti(t),t.tag){case 1:return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 3:return Bt(Sl),yl(),l=t.flags,(l&65536)!==0&&(l&128)===0?(t.flags=l&-65537|128,t):null;case 26:case 27:case 5:return Au(t),null;case 31:if(t.memoizedState!==null){if(et(t),t.alternate===null)throw Error(y(340));Ue()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 13:if(et(t),l=t.memoizedState,l!==null&&l.dehydrated!==null){if(t.alternate===null)throw Error(y(340));Ue()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 19:return E(vl),null;case 4:return yl(),null;case 10:return Bt(t.type),null;case 22:case 23:return et(t),Yi(),l!==null&&E(Ce),l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 24:return Bt(Sl),null;case 25:return null;default:return null}}function Qo(l,t){switch(Ti(t),t.tag){case 3:Bt(Sl),yl();break;case 26:case 27:case 5:Au(t);break;case 4:yl();break;case 31:t.memoizedState!==null&&et(t);break;case 13:et(t);break;case 19:E(vl);break;case 10:Bt(t.type);break;case 22:case 23:et(t),Yi(),l!==null&&E(Ce);break;case 24:Bt(Sl)}}function tu(l,t){try{var e=t.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var u=a.next;e=u;do{if((e.tag&l)===l){a=void 0;var n=e.create,i=e.inst;a=n(),i.destroy=a}e=e.next}while(e!==u)}}catch(c){ll(t,t.return,c)}}function ce(l,t,e){try{var a=t.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var n=u.next;a=n;do{if((a.tag&l)===l){var i=a.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,u=t;var f=e,d=c;try{d()}catch(g){ll(u,f,g)}}}a=a.next}while(a!==n)}}catch(g){ll(t,t.return,g)}}function jo(l){var t=l.updateQueue;if(t!==null){var e=l.stateNode;try{Us(t,e)}catch(a){ll(l,l.return,a)}}}function Xo(l,t,e){e.props=Ge(l.type,l.memoizedProps),e.state=l.memoizedState;try{e.componentWillUnmount()}catch(a){ll(l,t,a)}}function eu(l,t){try{var e=l.ref;if(e!==null){switch(l.tag){case 26:case 27:case 5:var a=l.stateNode;break;case 30:a=l.stateNode;break;default:a=l.stateNode}typeof e=="function"?l.refCleanup=e(a):e.current=a}}catch(u){ll(l,t,u)}}function Ot(l,t){var e=l.ref,a=l.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(u){ll(l,t,u)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(u){ll(l,t,u)}else e.current=null}function Lo(l){var t=l.type,e=l.memoizedProps,a=l.stateNode;try{l:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break l;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(u){ll(l,l.return,u)}}function vc(l,t,e){try{var a=l.stateNode;vr(a,l.type,e,t),a[Xl]=t}catch(u){ll(l,l.return,u)}}function Zo(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&re(l.type)||l.tag===4}function gc(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||Zo(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&re(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function Sc(l,t,e){var a=l.tag;if(a===5||a===6)l=l.stateNode,t?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(l,t):(t=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.appendChild(l),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=Nt));else if(a!==4&&(a===27&&re(l.type)&&(e=l.stateNode,t=null),l=l.child,l!==null))for(Sc(l,t,e),l=l.sibling;l!==null;)Sc(l,t,e),l=l.sibling}function mn(l,t,e){var a=l.tag;if(a===5||a===6)l=l.stateNode,t?e.insertBefore(l,t):e.appendChild(l);else if(a!==4&&(a===27&&re(l.type)&&(e=l.stateNode),l=l.child,l!==null))for(mn(l,t,e),l=l.sibling;l!==null;)mn(l,t,e),l=l.sibling}function Vo(l){var t=l.stateNode,e=l.memoizedProps;try{for(var a=l.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);Ul(t,a,e),t[Ml]=l,t[Xl]=e}catch(n){ll(l,l.return,n)}}var Xt=!1,El=!1,bc=!1,Ko=typeof WeakSet=="function"?WeakSet:Set,zl=null;function kd(l,t){if(l=l.containerInfo,jc=Cn,l=es(l),hi(l)){if("selectionStart"in l)var e={start:l.selectionStart,end:l.selectionEnd};else l:{e=(e=l.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var u=a.anchorOffset,n=a.focusNode;a=a.focusOffset;try{e.nodeType,n.nodeType}catch{e=null;break l}var i=0,c=-1,f=-1,d=0,g=0,A=l,r=null;t:for(;;){for(var v;A!==e||u!==0&&A.nodeType!==3||(c=i+u),A!==n||a!==0&&A.nodeType!==3||(f=i+a),A.nodeType===3&&(i+=A.nodeValue.length),(v=A.firstChild)!==null;)r=A,A=v;for(;;){if(A===l)break t;if(r===e&&++d===u&&(c=i),r===n&&++g===a&&(f=i),(v=A.nextSibling)!==null)break;A=r,r=A.parentNode}A=v}e=c===-1||f===-1?null:{start:c,end:f}}else e=null}e=e||{start:0,end:0}}else e=null;for(Xc={focusedElem:l,selectionRange:e},Cn=!1,zl=t;zl!==null;)if(t=zl,l=t.child,(t.subtreeFlags&1028)!==0&&l!==null)l.return=t,zl=l;else for(;zl!==null;){switch(t=zl,n=t.alternate,l=t.flags,t.tag){case 0:if((l&4)!==0&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(e=0;e<l.length;e++)u=l[e],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((l&1024)!==0&&n!==null){l=void 0,e=t,u=n.memoizedProps,n=n.memoizedState,a=e.stateNode;try{var M=Ge(e.type,u);l=a.getSnapshotBeforeUpdate(M,n),a.__reactInternalSnapshotBeforeUpdate=l}catch(N){ll(e,e.return,N)}}break;case 3:if((l&1024)!==0){if(l=t.stateNode.containerInfo,e=l.nodeType,e===9)Vc(l);else if(e===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":Vc(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error(y(163))}if(l=t.sibling,l!==null){l.return=t.return,zl=l;break}zl=t.return}}function Jo(l,t,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Zt(l,e),a&4&&tu(5,e);break;case 1:if(Zt(l,e),a&4)if(l=e.stateNode,t===null)try{l.componentDidMount()}catch(i){ll(e,e.return,i)}else{var u=Ge(e.type,t.memoizedProps);t=t.memoizedState;try{l.componentDidUpdate(u,t,l.__reactInternalSnapshotBeforeUpdate)}catch(i){ll(e,e.return,i)}}a&64&&jo(e),a&512&&eu(e,e.return);break;case 3:if(Zt(l,e),a&64&&(l=e.updateQueue,l!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{Us(l,t)}catch(i){ll(e,e.return,i)}}break;case 27:t===null&&a&4&&Vo(e);case 26:case 5:Zt(l,e),t===null&&a&4&&Lo(e),a&512&&eu(e,e.return);break;case 12:Zt(l,e);break;case 31:Zt(l,e),a&4&&ko(l,e);break;case 13:Zt(l,e),a&4&&Fo(l,e),a&64&&(l=e.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(e=ur.bind(null,e),zr(l,e))));break;case 22:if(a=e.memoizedState!==null||Xt,!a){t=t!==null&&t.memoizedState!==null||El,u=Xt;var n=El;Xt=a,(El=t)&&!n?Vt(l,e,(e.subtreeFlags&8772)!==0):Zt(l,e),Xt=u,El=n}break;case 30:break;default:Zt(l,e)}}function wo(l){var t=l.alternate;t!==null&&(l.alternate=null,wo(t)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(t=l.stateNode,t!==null&&kn(t)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var ol=null,Zl=!1;function Lt(l,t,e){for(e=e.child;e!==null;)Wo(l,t,e),e=e.sibling}function Wo(l,t,e){if($l&&typeof $l.onCommitFiberUnmount=="function")try{$l.onCommitFiberUnmount(Oa,e)}catch{}switch(e.tag){case 26:El||Ot(e,t),Lt(l,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:El||Ot(e,t);var a=ol,u=Zl;re(e.type)&&(ol=e.stateNode,Zl=!1),Lt(l,t,e),mu(e.stateNode),ol=a,Zl=u;break;case 5:El||Ot(e,t);case 6:if(a=ol,u=Zl,ol=null,Lt(l,t,e),ol=a,Zl=u,ol!==null)if(Zl)try{(ol.nodeType===9?ol.body:ol.nodeName==="HTML"?ol.ownerDocument.body:ol).removeChild(e.stateNode)}catch(n){ll(e,t,n)}else try{ol.removeChild(e.stateNode)}catch(n){ll(e,t,n)}break;case 18:ol!==null&&(Zl?(l=ol,jm(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.stateNode),za(l)):jm(ol,e.stateNode));break;case 4:a=ol,u=Zl,ol=e.stateNode.containerInfo,Zl=!0,Lt(l,t,e),ol=a,Zl=u;break;case 0:case 11:case 14:case 15:ce(2,e,t),El||ce(4,e,t),Lt(l,t,e);break;case 1:El||(Ot(e,t),a=e.stateNode,typeof a.componentWillUnmount=="function"&&Xo(e,t,a)),Lt(l,t,e);break;case 21:Lt(l,t,e);break;case 22:El=(a=El)||e.memoizedState!==null,Lt(l,t,e),El=a;break;default:Lt(l,t,e)}}function ko(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null))){l=l.dehydrated;try{za(l)}catch(e){ll(t,t.return,e)}}}function Fo(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{za(l)}catch(e){ll(t,t.return,e)}}function Fd(l){switch(l.tag){case 31:case 13:case 19:var t=l.stateNode;return t===null&&(t=l.stateNode=new Ko),t;case 22:return l=l.stateNode,t=l._retryCache,t===null&&(t=l._retryCache=new Ko),t;default:throw Error(y(435,l.tag))}}function hn(l,t){var e=Fd(l);t.forEach(function(a){if(!e.has(a)){e.add(a);var u=nr.bind(null,l,a);a.then(u,u)}})}function Vl(l,t){var e=t.deletions;if(e!==null)for(var a=0;a<e.length;a++){var u=e[a],n=l,i=t,c=i;l:for(;c!==null;){switch(c.tag){case 27:if(re(c.type)){ol=c.stateNode,Zl=!1;break l}break;case 5:ol=c.stateNode,Zl=!1;break l;case 3:case 4:ol=c.stateNode.containerInfo,Zl=!0;break l}c=c.return}if(ol===null)throw Error(y(160));Wo(n,i,u),ol=null,Zl=!1,n=u.alternate,n!==null&&(n.return=null),u.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)$o(t,l),t=t.sibling}var bt=null;function $o(l,t){var e=l.alternate,a=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:Vl(t,l),Kl(l),a&4&&(ce(3,l,l.return),tu(3,l),ce(5,l,l.return));break;case 1:Vl(t,l),Kl(l),a&512&&(El||e===null||Ot(e,e.return)),a&64&&Xt&&(l=l.updateQueue,l!==null&&(a=l.callbacks,a!==null&&(e=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var u=bt;if(Vl(t,l),Kl(l),a&512&&(El||e===null||Ot(e,e.return)),a&4){var n=e!==null?e.memoizedState:null;if(a=l.memoizedState,e===null)if(a===null)if(l.stateNode===null){l:{a=l.type,e=l.memoizedProps,u=u.ownerDocument||u;t:switch(a){case"title":n=u.getElementsByTagName("title")[0],(!n||n[Ua]||n[Ml]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=u.createElement(a),u.head.insertBefore(n,u.querySelector("head > title"))),Ul(n,a,e),n[Ml]=l,Tl(n),a=n;break l;case"link":var i=$m("link","href",u).get(a+(e.href||""));if(i){for(var c=0;c<i.length;c++)if(n=i[c],n.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&n.getAttribute("rel")===(e.rel==null?null:e.rel)&&n.getAttribute("title")===(e.title==null?null:e.title)&&n.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){i.splice(c,1);break t}}n=u.createElement(a),Ul(n,a,e),u.head.appendChild(n);break;case"meta":if(i=$m("meta","content",u).get(a+(e.content||""))){for(c=0;c<i.length;c++)if(n=i[c],n.getAttribute("content")===(e.content==null?null:""+e.content)&&n.getAttribute("name")===(e.name==null?null:e.name)&&n.getAttribute("property")===(e.property==null?null:e.property)&&n.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&n.getAttribute("charset")===(e.charSet==null?null:e.charSet)){i.splice(c,1);break t}}n=u.createElement(a),Ul(n,a,e),u.head.appendChild(n);break;default:throw Error(y(468,a))}n[Ml]=l,Tl(n),a=n}l.stateNode=a}else Im(u,l.type,l.stateNode);else l.stateNode=Fm(u,a,l.memoizedProps);else n!==a?(n===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):n.count--,a===null?Im(u,l.type,l.stateNode):Fm(u,a,l.memoizedProps)):a===null&&l.stateNode!==null&&vc(l,l.memoizedProps,e.memoizedProps)}break;case 27:Vl(t,l),Kl(l),a&512&&(El||e===null||Ot(e,e.return)),e!==null&&a&4&&vc(l,l.memoizedProps,e.memoizedProps);break;case 5:if(Vl(t,l),Kl(l),a&512&&(El||e===null||Ot(e,e.return)),l.flags&32){u=l.stateNode;try{we(u,"")}catch(M){ll(l,l.return,M)}}a&4&&l.stateNode!=null&&(u=l.memoizedProps,vc(l,u,e!==null?e.memoizedProps:u)),a&1024&&(bc=!0);break;case 6:if(Vl(t,l),Kl(l),a&4){if(l.stateNode===null)throw Error(y(162));a=l.memoizedProps,e=l.stateNode;try{e.nodeValue=a}catch(M){ll(l,l.return,M)}}break;case 3:if(Dn=null,u=bt,bt=On(t.containerInfo),Vl(t,l),bt=u,Kl(l),a&4&&e!==null&&e.memoizedState.isDehydrated)try{za(t.containerInfo)}catch(M){ll(l,l.return,M)}bc&&(bc=!1,Io(l));break;case 4:a=bt,bt=On(l.stateNode.containerInfo),Vl(t,l),Kl(l),bt=a;break;case 12:Vl(t,l),Kl(l);break;case 31:Vl(t,l),Kl(l),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,hn(l,a)));break;case 13:Vl(t,l),Kl(l),l.child.flags&8192&&l.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(rn=Fl()),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,hn(l,a)));break;case 22:u=l.memoizedState!==null;var f=e!==null&&e.memoizedState!==null,d=Xt,g=El;if(Xt=d||u,El=g||f,Vl(t,l),El=g,Xt=d,Kl(l),a&8192)l:for(t=l.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,u&&(e===null||f||Xt||El||Ye(l)),e=null,t=l;;){if(t.tag===5||t.tag===26){if(e===null){f=e=t;try{if(n=f.stateNode,u)i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=f.stateNode;var A=f.memoizedProps.style,r=A!=null&&A.hasOwnProperty("display")?A.display:null;c.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(M){ll(f,f.return,M)}}}else if(t.tag===6){if(e===null){f=t;try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(M){ll(f,f.return,M)}}}else if(t.tag===18){if(e===null){f=t;try{var v=f.stateNode;u?Xm(v,!0):Xm(f.stateNode,!1)}catch(M){ll(f,f.return,M)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===l)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break l;for(;t.sibling===null;){if(t.return===null||t.return===l)break l;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=l.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,hn(l,e))));break;case 19:Vl(t,l),Kl(l),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,hn(l,a)));break;case 30:break;case 21:break;default:Vl(t,l),Kl(l)}}function Kl(l){var t=l.flags;if(t&2){try{for(var e,a=l.return;a!==null;){if(Zo(a)){e=a;break}a=a.return}if(e==null)throw Error(y(160));switch(e.tag){case 27:var u=e.stateNode,n=gc(l);mn(l,n,u);break;case 5:var i=e.stateNode;e.flags&32&&(we(i,""),e.flags&=-33);var c=gc(l);mn(l,c,i);break;case 3:case 4:var f=e.stateNode.containerInfo,d=gc(l);Sc(l,d,f);break;default:throw Error(y(161))}}catch(g){ll(l,l.return,g)}l.flags&=-3}t&4096&&(l.flags&=-4097)}function Io(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var t=l;Io(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),l=l.sibling}}function Zt(l,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Jo(l,t.alternate,t),t=t.sibling}function Ye(l){for(l=l.child;l!==null;){var t=l;switch(t.tag){case 0:case 11:case 14:case 15:ce(4,t,t.return),Ye(t);break;case 1:Ot(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&Xo(t,t.return,e),Ye(t);break;case 27:mu(t.stateNode);case 26:case 5:Ot(t,t.return),Ye(t);break;case 22:t.memoizedState===null&&Ye(t);break;case 30:Ye(t);break;default:Ye(t)}l=l.sibling}}function Vt(l,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,u=l,n=t,i=n.flags;switch(n.tag){case 0:case 11:case 15:Vt(u,n,e),tu(4,n);break;case 1:if(Vt(u,n,e),a=n,u=a.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(d){ll(a,a.return,d)}if(a=n,u=a.updateQueue,u!==null){var c=a.stateNode;try{var f=u.shared.hiddenCallbacks;if(f!==null)for(u.shared.hiddenCallbacks=null,u=0;u<f.length;u++)Ds(f[u],c)}catch(d){ll(a,a.return,d)}}e&&i&64&&jo(n),eu(n,n.return);break;case 27:Vo(n);case 26:case 5:Vt(u,n,e),e&&a===null&&i&4&&Lo(n),eu(n,n.return);break;case 12:Vt(u,n,e);break;case 31:Vt(u,n,e),e&&i&4&&ko(u,n);break;case 13:Vt(u,n,e),e&&i&4&&Fo(u,n);break;case 22:n.memoizedState===null&&Vt(u,n,e),eu(n,n.return);break;case 30:break;default:Vt(u,n,e)}t=t.sibling}}function Ac(l,t){var e=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==e&&(l!=null&&l.refCount++,e!=null&&La(e))}function Ec(l,t){l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&La(l))}function At(l,t,e,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Po(l,t,e,a),t=t.sibling}function Po(l,t,e,a){var u=t.flags;switch(t.tag){case 0:case 11:case 15:At(l,t,e,a),u&2048&&tu(9,t);break;case 1:At(l,t,e,a);break;case 3:At(l,t,e,a),u&2048&&(l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&La(l)));break;case 12:if(u&2048){At(l,t,e,a),l=t.stateNode;try{var n=t.memoizedProps,i=n.id,c=n.onPostCommit;typeof c=="function"&&c(i,t.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(f){ll(t,t.return,f)}}else At(l,t,e,a);break;case 31:At(l,t,e,a);break;case 13:At(l,t,e,a);break;case 23:break;case 22:n=t.stateNode,i=t.alternate,t.memoizedState!==null?n._visibility&2?At(l,t,e,a):au(l,t):n._visibility&2?At(l,t,e,a):(n._visibility|=2,da(l,t,e,a,(t.subtreeFlags&10256)!==0||!1)),u&2048&&Ac(i,t);break;case 24:At(l,t,e,a),u&2048&&Ec(t.alternate,t);break;default:At(l,t,e,a)}}function da(l,t,e,a,u){for(u=u&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var n=l,i=t,c=e,f=a,d=i.flags;switch(i.tag){case 0:case 11:case 15:da(n,i,c,f,u),tu(8,i);break;case 23:break;case 22:var g=i.stateNode;i.memoizedState!==null?g._visibility&2?da(n,i,c,f,u):au(n,i):(g._visibility|=2,da(n,i,c,f,u)),u&&d&2048&&Ac(i.alternate,i);break;case 24:da(n,i,c,f,u),u&&d&2048&&Ec(i.alternate,i);break;default:da(n,i,c,f,u)}t=t.sibling}}function au(l,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=l,a=t,u=a.flags;switch(a.tag){case 22:au(e,a),u&2048&&Ac(a.alternate,a);break;case 24:au(e,a),u&2048&&Ec(a.alternate,a);break;default:au(e,a)}t=t.sibling}}var uu=8192;function ra(l,t,e){if(l.subtreeFlags&uu)for(l=l.child;l!==null;)lm(l,t,e),l=l.sibling}function lm(l,t,e){switch(l.tag){case 26:ra(l,t,e),l.flags&uu&&l.memoizedState!==null&&Br(e,bt,l.memoizedState,l.memoizedProps);break;case 5:ra(l,t,e);break;case 3:case 4:var a=bt;bt=On(l.stateNode.containerInfo),ra(l,t,e),bt=a;break;case 22:l.memoizedState===null&&(a=l.alternate,a!==null&&a.memoizedState!==null?(a=uu,uu=16777216,ra(l,t,e),uu=a):ra(l,t,e));break;default:ra(l,t,e)}}function tm(l){var t=l.alternate;if(t!==null&&(l=t.child,l!==null)){t.child=null;do t=l.sibling,l.sibling=null,l=t;while(l!==null)}}function nu(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var a=t[e];zl=a,am(a,l)}tm(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)em(l),l=l.sibling}function em(l){switch(l.tag){case 0:case 11:case 15:nu(l),l.flags&2048&&ce(9,l,l.return);break;case 3:nu(l);break;case 12:nu(l);break;case 22:var t=l.stateNode;l.memoizedState!==null&&t._visibility&2&&(l.return===null||l.return.tag!==13)?(t._visibility&=-3,dn(l)):nu(l);break;default:nu(l)}}function dn(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var a=t[e];zl=a,am(a,l)}tm(l)}for(l=l.child;l!==null;){switch(t=l,t.tag){case 0:case 11:case 15:ce(8,t,t.return),dn(t);break;case 22:e=t.stateNode,e._visibility&2&&(e._visibility&=-3,dn(t));break;default:dn(t)}l=l.sibling}}function am(l,t){for(;zl!==null;){var e=zl;switch(e.tag){case 0:case 11:case 15:ce(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:La(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,zl=a;else l:for(e=l;zl!==null;){a=zl;var u=a.sibling,n=a.return;if(wo(a),a===e){zl=null;break l}if(u!==null){u.return=n,zl=u;break l}zl=n}}}var $d={getCacheForType:function(l){var t=_l(Sl),e=t.data.get(l);return e===void 0&&(e=l(),t.data.set(l,e)),e},cacheSignal:function(){return _l(Sl).controller.signal}},Id=typeof WeakMap=="function"?WeakMap:Map,k=0,il=null,j=null,L=0,P=0,at=null,fe=!1,ya=!1,pc=!1,Kt=0,dl=0,se=0,Qe=0,Tc=0,ut=0,va=0,iu=null,Jl=null,zc=!1,rn=0,um=0,yn=1/0,vn=null,oe=null,pl=0,me=null,ga=null,Jt=0,Mc=0,Oc=null,nm=null,cu=0,_c=null;function nt(){return(k&2)!==0&&L!==0?L&-L:S.T!==null?Rc():Af()}function im(){if(ut===0)if((L&536870912)===0||K){var l=Tu;Tu<<=1,(Tu&3932160)===0&&(Tu=262144),ut=l}else ut=536870912;return l=tt.current,l!==null&&(l.flags|=32),ut}function wl(l,t,e){(l===il&&(P===2||P===9)||l.cancelPendingCommit!==null)&&(Sa(l,0),he(l,L,ut,!1)),Da(l,e),((k&2)===0||l!==il)&&(l===il&&((k&2)===0&&(Qe|=e),dl===4&&he(l,L,ut,!1)),_t(l))}function cm(l,t,e){if((k&6)!==0)throw Error(y(327));var a=!e&&(t&127)===0&&(t&l.expiredLanes)===0||_a(l,t),u=a?tr(l,t):Uc(l,t,!0),n=a;do{if(u===0){ya&&!a&&he(l,t,0,!1);break}else{if(e=l.current.alternate,n&&!Pd(e)){u=Uc(l,t,!1),n=!1;continue}if(u===2){if(n=t,l.errorRecoveryDisabledLanes&n)var i=0;else i=l.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;l:{var c=l;u=iu;var f=c.current.memoizedState.isDehydrated;if(f&&(Sa(c,i).flags|=256),i=Uc(c,i,!1),i!==2){if(pc&&!f){c.errorRecoveryDisabledLanes|=n,Qe|=n,u=4;break l}n=Jl,Jl=u,n!==null&&(Jl===null?Jl=n:Jl.push.apply(Jl,n))}u=i}if(n=!1,u!==2)continue}}if(u===1){Sa(l,0),he(l,t,0,!0);break}l:{switch(a=l,n=u,n){case 0:case 1:throw Error(y(345));case 4:if((t&4194048)!==t)break;case 6:he(a,t,ut,!fe);break l;case 2:Jl=null;break;case 3:case 5:break;default:throw Error(y(329))}if((t&62914560)===t&&(u=rn+300-Fl(),10<u)){if(he(a,t,ut,!fe),Mu(a,0,!0)!==0)break l;Jt=t,a.timeoutHandle=Ym(fm.bind(null,a,e,Jl,vn,zc,t,ut,Qe,va,fe,n,"Throttled",-0,0),u);break l}fm(a,e,Jl,vn,zc,t,ut,Qe,va,fe,n,null,-0,0)}}break}while(!0);_t(l)}function fm(l,t,e,a,u,n,i,c,f,d,g,A,r,v){if(l.timeoutHandle=-1,A=t.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Nt},lm(t,n,A);var M=(n&62914560)===n?rn-Fl():(n&4194048)===n?um-Fl():0;if(M=Gr(A,M),M!==null){Jt=n,l.cancelPendingCommit=M(vm.bind(null,l,t,n,e,a,u,i,c,f,g,A,null,r,v)),he(l,n,i,!d);return}}vm(l,t,n,e,a,u,i,c,f)}function Pd(l){for(var t=l;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var u=e[a],n=u.getSnapshot;u=u.value;try{if(!Pl(n(),u))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function he(l,t,e,a){t&=~Tc,t&=~Qe,l.suspendedLanes|=t,l.pingedLanes&=~t,a&&(l.warmLanes|=t),a=l.expirationTimes;for(var u=t;0<u;){var n=31-Il(u),i=1<<n;a[n]=-1,u&=~i}e!==0&&gf(l,e,t)}function gn(){return(k&6)===0?(fu(0),!1):!0}function Dc(){if(j!==null){if(P===0)var l=j.return;else l=j,xt=He=null,Vi(l),fa=null,Va=0,l=j;for(;l!==null;)Qo(l.alternate,l),l=l.return;j=null}}function Sa(l,t){var e=l.timeoutHandle;e!==-1&&(l.timeoutHandle=-1,br(e)),e=l.cancelPendingCommit,e!==null&&(l.cancelPendingCommit=null,e()),Jt=0,Dc(),il=l,j=e=Rt(l.current,null),L=t,P=0,at=null,fe=!1,ya=_a(l,t),pc=!1,va=ut=Tc=Qe=se=dl=0,Jl=iu=null,zc=!1,(t&8)!==0&&(t|=t&32);var a=l.entangledLanes;if(a!==0)for(l=l.entanglements,a&=t;0<a;){var u=31-Il(a),n=1<<u;t|=l[u],a&=~n}return Kt=t,Gu(),e}function sm(l,t){G=null,S.H=Ia,t===ca||t===Ku?(t=zs(),P=3):t===Ci?(t=zs(),P=4):P=t===ic?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,at=t,j===null&&(dl=1,nn(l,ot(t,l.current)))}function om(){var l=tt.current;return l===null?!0:(L&4194048)===L?rt===null:(L&62914560)===L||(L&536870912)!==0?l===rt:!1}function mm(){var l=S.H;return S.H=Ia,l===null?Ia:l}function hm(){var l=S.A;return S.A=$d,l}function Sn(){dl=4,fe||(L&4194048)!==L&&tt.current!==null||(ya=!0),(se&134217727)===0&&(Qe&134217727)===0||il===null||he(il,L,ut,!1)}function Uc(l,t,e){var a=k;k|=2;var u=mm(),n=hm();(il!==l||L!==t)&&(vn=null,Sa(l,t)),t=!1;var i=dl;l:do try{if(P!==0&&j!==null){var c=j,f=at;switch(P){case 8:Dc(),i=6;break l;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var d=P;if(P=0,at=null,ba(l,c,f,d),e&&ya){i=0;break l}break;default:d=P,P=0,at=null,ba(l,c,f,d)}}lr(),i=dl;break}catch(g){sm(l,g)}while(!0);return t&&l.shellSuspendCounter++,xt=He=null,k=a,S.H=u,S.A=n,j===null&&(il=null,L=0,Gu()),i}function lr(){for(;j!==null;)dm(j)}function tr(l,t){var e=k;k|=2;var a=mm(),u=hm();il!==l||L!==t?(vn=null,yn=Fl()+500,Sa(l,t)):ya=_a(l,t);l:do try{if(P!==0&&j!==null){t=j;var n=at;t:switch(P){case 1:P=0,at=null,ba(l,t,n,1);break;case 2:case 9:if(ps(n)){P=0,at=null,rm(t);break}t=function(){P!==2&&P!==9||il!==l||(P=7),_t(l)},n.then(t,t);break l;case 3:P=7;break l;case 4:P=5;break l;case 7:ps(n)?(P=0,at=null,rm(t)):(P=0,at=null,ba(l,t,n,7));break;case 5:var i=null;switch(j.tag){case 26:i=j.memoizedState;case 5:case 27:var c=j;if(i?Pm(i):c.stateNode.complete){P=0,at=null;var f=c.sibling;if(f!==null)j=f;else{var d=c.return;d!==null?(j=d,bn(d)):j=null}break t}}P=0,at=null,ba(l,t,n,5);break;case 6:P=0,at=null,ba(l,t,n,6);break;case 8:Dc(),dl=6;break l;default:throw Error(y(462))}}er();break}catch(g){sm(l,g)}while(!0);return xt=He=null,S.H=a,S.A=u,k=e,j!==null?0:(il=null,L=0,Gu(),dl)}function er(){for(;j!==null&&!Mh();)dm(j)}function dm(l){var t=Go(l.alternate,l,Kt);l.memoizedProps=l.pendingProps,t===null?bn(l):j=t}function rm(l){var t=l,e=t.alternate;switch(t.tag){case 15:case 0:t=No(e,t,t.pendingProps,t.type,void 0,L);break;case 11:t=No(e,t,t.pendingProps,t.type.render,t.ref,L);break;case 5:Vi(t);default:Qo(e,t),t=j=ms(t,Kt),t=Go(e,t,Kt)}l.memoizedProps=l.pendingProps,t===null?bn(l):j=t}function ba(l,t,e,a){xt=He=null,Vi(t),fa=null,Va=0;var u=t.return;try{if(Vd(l,u,t,e,L)){dl=1,nn(l,ot(e,l.current)),j=null;return}}catch(n){if(u!==null)throw j=u,n;dl=1,nn(l,ot(e,l.current)),j=null;return}t.flags&32768?(K||a===1?l=!0:ya||(L&536870912)!==0?l=!1:(fe=l=!0,(a===2||a===9||a===3||a===6)&&(a=tt.current,a!==null&&a.tag===13&&(a.flags|=16384))),ym(t,l)):bn(t)}function bn(l){var t=l;do{if((t.flags&32768)!==0){ym(t,fe);return}l=t.return;var e=wd(t.alternate,t,Kt);if(e!==null){j=e;return}if(t=t.sibling,t!==null){j=t;return}j=t=l}while(t!==null);dl===0&&(dl=5)}function ym(l,t){do{var e=Wd(l.alternate,l);if(e!==null){e.flags&=32767,j=e;return}if(e=l.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(l=l.sibling,l!==null)){j=l;return}j=l=e}while(l!==null);dl=6,j=null}function vm(l,t,e,a,u,n,i,c,f){l.cancelPendingCommit=null;do An();while(pl!==0);if((k&6)!==0)throw Error(y(327));if(t!==null){if(t===l.current)throw Error(y(177));if(n=t.lanes|t.childLanes,n|=gi,xh(l,e,n,i,c,f),l===il&&(j=il=null,L=0),ga=t,me=l,Jt=e,Mc=n,Oc=u,nm=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(l.callbackNode=null,l.callbackPriority=0,ir(Eu,function(){return Em(),null})):(l.callbackNode=null,l.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=S.T,S.T=null,u=T.p,T.p=2,i=k,k|=4;try{kd(l,t,e)}finally{k=i,T.p=u,S.T=a}}pl=1,gm(),Sm(),bm()}}function gm(){if(pl===1){pl=0;var l=me,t=ga,e=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||e){e=S.T,S.T=null;var a=T.p;T.p=2;var u=k;k|=4;try{$o(t,l);var n=Xc,i=es(l.containerInfo),c=n.focusedElem,f=n.selectionRange;if(i!==c&&c&&c.ownerDocument&&ts(c.ownerDocument.documentElement,c)){if(f!==null&&hi(c)){var d=f.start,g=f.end;if(g===void 0&&(g=d),"selectionStart"in c)c.selectionStart=d,c.selectionEnd=Math.min(g,c.value.length);else{var A=c.ownerDocument||document,r=A&&A.defaultView||window;if(r.getSelection){var v=r.getSelection(),M=c.textContent.length,N=Math.min(f.start,M),ul=f.end===void 0?N:Math.min(f.end,M);!v.extend&&N>ul&&(i=ul,ul=N,N=i);var m=ls(c,N),s=ls(c,ul);if(m&&s&&(v.rangeCount!==1||v.anchorNode!==m.node||v.anchorOffset!==m.offset||v.focusNode!==s.node||v.focusOffset!==s.offset)){var h=A.createRange();h.setStart(m.node,m.offset),v.removeAllRanges(),N>ul?(v.addRange(h),v.extend(s.node,s.offset)):(h.setEnd(s.node,s.offset),v.addRange(h))}}}}for(A=[],v=c;v=v.parentNode;)v.nodeType===1&&A.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<A.length;c++){var b=A[c];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Cn=!!jc,Xc=jc=null}finally{k=u,T.p=a,S.T=e}}l.current=t,pl=2}}function Sm(){if(pl===2){pl=0;var l=me,t=ga,e=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||e){e=S.T,S.T=null;var a=T.p;T.p=2;var u=k;k|=4;try{Jo(l,t.alternate,t)}finally{k=u,T.p=a,S.T=e}}pl=3}}function bm(){if(pl===4||pl===3){pl=0,Oh();var l=me,t=ga,e=Jt,a=nm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?pl=5:(pl=0,ga=me=null,Am(l,l.pendingLanes));var u=l.pendingLanes;if(u===0&&(oe=null),wn(e),t=t.stateNode,$l&&typeof $l.onCommitFiberRoot=="function")try{$l.onCommitFiberRoot(Oa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=S.T,u=T.p,T.p=2,S.T=null;try{for(var n=l.onRecoverableError,i=0;i<a.length;i++){var c=a[i];n(c.value,{componentStack:c.stack})}}finally{S.T=t,T.p=u}}(Jt&3)!==0&&An(),_t(l),u=l.pendingLanes,(e&261930)!==0&&(u&42)!==0?l===_c?cu++:(cu=0,_c=l):cu=0,fu(0)}}function Am(l,t){(l.pooledCacheLanes&=t)===0&&(t=l.pooledCache,t!=null&&(l.pooledCache=null,La(t)))}function An(){return gm(),Sm(),bm(),Em()}function Em(){if(pl!==5)return!1;var l=me,t=Mc;Mc=0;var e=wn(Jt),a=S.T,u=T.p;try{T.p=32>e?32:e,S.T=null,e=Oc,Oc=null;var n=me,i=Jt;if(pl=0,ga=me=null,Jt=0,(k&6)!==0)throw Error(y(331));var c=k;if(k|=4,em(n.current),Po(n,n.current,i,e),k=c,fu(0,!1),$l&&typeof $l.onPostCommitFiberRoot=="function")try{$l.onPostCommitFiberRoot(Oa,n)}catch{}return!0}finally{T.p=u,S.T=a,Am(l,t)}}function pm(l,t,e){t=ot(e,t),t=nc(l.stateNode,t,2),l=ue(l,t,2),l!==null&&(Da(l,2),_t(l))}function ll(l,t,e){if(l.tag===3)pm(l,l,e);else for(;t!==null;){if(t.tag===3){pm(t,l,e);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(oe===null||!oe.has(a))){l=ot(e,l),e=To(2),a=ue(t,e,2),a!==null&&(zo(e,a,t,l),Da(a,2),_t(a));break}}t=t.return}}function Hc(l,t,e){var a=l.pingCache;if(a===null){a=l.pingCache=new Id;var u=new Set;a.set(t,u)}else u=a.get(t),u===void 0&&(u=new Set,a.set(t,u));u.has(e)||(pc=!0,u.add(e),l=ar.bind(null,l,t,e),t.then(l,l))}function ar(l,t,e){var a=l.pingCache;a!==null&&a.delete(t),l.pingedLanes|=l.suspendedLanes&e,l.warmLanes&=~e,il===l&&(L&e)===e&&(dl===4||dl===3&&(L&62914560)===L&&300>Fl()-rn?(k&2)===0&&Sa(l,0):Tc|=e,va===L&&(va=0)),_t(l)}function Tm(l,t){t===0&&(t=vf()),l=_e(l,t),l!==null&&(Da(l,t),_t(l))}function ur(l){var t=l.memoizedState,e=0;t!==null&&(e=t.retryLane),Tm(l,e)}function nr(l,t){var e=0;switch(l.tag){case 31:case 13:var a=l.stateNode,u=l.memoizedState;u!==null&&(e=u.retryLane);break;case 19:a=l.stateNode;break;case 22:a=l.stateNode._retryCache;break;default:throw Error(y(314))}a!==null&&a.delete(t),Tm(l,e)}function ir(l,t){return Zn(l,t)}var En=null,Aa=null,Nc=!1,pn=!1,Cc=!1,de=0;function _t(l){l!==Aa&&l.next===null&&(Aa===null?En=Aa=l:Aa=Aa.next=l),pn=!0,Nc||(Nc=!0,fr())}function fu(l,t){if(!Cc&&pn){Cc=!0;do for(var e=!1,a=En;a!==null;){if(l!==0){var u=a.pendingLanes;if(u===0)var n=0;else{var i=a.suspendedLanes,c=a.pingedLanes;n=(1<<31-Il(42|l)+1)-1,n&=u&~(i&~c),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(e=!0,_m(a,n))}else n=L,n=Mu(a,a===il?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(n&3)===0||_a(a,n)||(e=!0,_m(a,n));a=a.next}while(e);Cc=!1}}function cr(){zm()}function zm(){pn=Nc=!1;var l=0;de!==0&&Sr()&&(l=de);for(var t=Fl(),e=null,a=En;a!==null;){var u=a.next,n=Mm(a,t);n===0?(a.next=null,e===null?En=u:e.next=u,u===null&&(Aa=e)):(e=a,(l!==0||(n&3)!==0)&&(pn=!0)),a=u}pl!==0&&pl!==5||fu(l),de!==0&&(de=0)}function Mm(l,t){for(var e=l.suspendedLanes,a=l.pingedLanes,u=l.expirationTimes,n=l.pendingLanes&-62914561;0<n;){var i=31-Il(n),c=1<<i,f=u[i];f===-1?((c&e)===0||(c&a)!==0)&&(u[i]=qh(c,t)):f<=t&&(l.expiredLanes|=c),n&=~c}if(t=il,e=L,e=Mu(l,l===t?e:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),a=l.callbackNode,e===0||l===t&&(P===2||P===9)||l.cancelPendingCommit!==null)return a!==null&&a!==null&&Vn(a),l.callbackNode=null,l.callbackPriority=0;if((e&3)===0||_a(l,e)){if(t=e&-e,t===l.callbackPriority)return t;switch(a!==null&&Vn(a),wn(e)){case 2:case 8:e=rf;break;case 32:e=Eu;break;case 268435456:e=yf;break;default:e=Eu}return a=Om.bind(null,l),e=Zn(e,a),l.callbackPriority=t,l.callbackNode=e,t}return a!==null&&a!==null&&Vn(a),l.callbackPriority=2,l.callbackNode=null,2}function Om(l,t){if(pl!==0&&pl!==5)return l.callbackNode=null,l.callbackPriority=0,null;var e=l.callbackNode;if(An()&&l.callbackNode!==e)return null;var a=L;return a=Mu(l,l===il?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),a===0?null:(cm(l,a,t),Mm(l,Fl()),l.callbackNode!=null&&l.callbackNode===e?Om.bind(null,l):null)}function _m(l,t){if(An())return null;cm(l,t,!0)}function fr(){Ar(function(){(k&6)!==0?Zn(df,cr):zm()})}function Rc(){if(de===0){var l=na;l===0&&(l=pu,pu<<=1,(pu&261888)===0&&(pu=256)),de=l}return de}function Dm(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:Uu(""+l)}function Um(l,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,l.id&&e.setAttribute("form",l.id),t.parentNode.insertBefore(e,t),l=new FormData(l),e.parentNode.removeChild(e),l}function sr(l,t,e,a,u){if(t==="submit"&&e&&e.stateNode===u){var n=Dm((u[Xl]||null).action),i=a.submitter;i&&(t=(t=i[Xl]||null)?Dm(t.formAction):i.getAttribute("formAction"),t!==null&&(n=t,i=null));var c=new Ru("action","action",null,a,u);l.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(de!==0){var f=i?Um(u,i):new FormData(u);Pi(e,{pending:!0,data:f,method:u.method,action:n},null,f)}}else typeof n=="function"&&(c.preventDefault(),f=i?Um(u,i):new FormData(u),Pi(e,{pending:!0,data:f,method:u.method,action:n},n,f))},currentTarget:u}]})}}for(var qc=0;qc<vi.length;qc++){var xc=vi[qc],or=xc.toLowerCase(),mr=xc[0].toUpperCase()+xc.slice(1);St(or,"on"+mr)}St(ns,"onAnimationEnd"),St(is,"onAnimationIteration"),St(cs,"onAnimationStart"),St("dblclick","onDoubleClick"),St("focusin","onFocus"),St("focusout","onBlur"),St(_d,"onTransitionRun"),St(Dd,"onTransitionStart"),St(Ud,"onTransitionCancel"),St(fs,"onTransitionEnd"),Ke("onMouseEnter",["mouseout","mouseover"]),Ke("onMouseLeave",["mouseout","mouseover"]),Ke("onPointerEnter",["pointerout","pointerover"]),Ke("onPointerLeave",["pointerout","pointerover"]),Te("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Te("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Te("onBeforeInput",["compositionend","keypress","textInput","paste"]),Te("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Te("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Te("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var su="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hr=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(su));function Hm(l,t){t=(t&4)!==0;for(var e=0;e<l.length;e++){var a=l[e],u=a.event;a=a.listeners;l:{var n=void 0;if(t)for(var i=a.length-1;0<=i;i--){var c=a[i],f=c.instance,d=c.currentTarget;if(c=c.listener,f!==n&&u.isPropagationStopped())break l;n=c,u.currentTarget=d;try{n(u)}catch(g){Bu(g)}u.currentTarget=null,n=f}else for(i=0;i<a.length;i++){if(c=a[i],f=c.instance,d=c.currentTarget,c=c.listener,f!==n&&u.isPropagationStopped())break l;n=c,u.currentTarget=d;try{n(u)}catch(g){Bu(g)}u.currentTarget=null,n=f}}}}function X(l,t){var e=t[Wn];e===void 0&&(e=t[Wn]=new Set);var a=l+"__bubble";e.has(a)||(Nm(t,l,2,!1),e.add(a))}function Bc(l,t,e){var a=0;t&&(a|=4),Nm(e,l,a,t)}var Tn="_reactListening"+Math.random().toString(36).slice(2);function Gc(l){if(!l[Tn]){l[Tn]=!0,Tf.forEach(function(e){e!=="selectionchange"&&(hr.has(e)||Bc(e,!1,l),Bc(e,!0,l))});var t=l.nodeType===9?l:l.ownerDocument;t===null||t[Tn]||(t[Tn]=!0,Bc("selectionchange",!1,t))}}function Nm(l,t,e,a){switch(ih(t)){case 2:var u=jr;break;case 8:u=Xr;break;default:u=Ic}e=u.bind(null,t,e,l),u=void 0,!ai||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),a?u!==void 0?l.addEventListener(t,e,{capture:!0,passive:u}):l.addEventListener(t,e,!0):u!==void 0?l.addEventListener(t,e,{passive:u}):l.addEventListener(t,e,!1)}function Yc(l,t,e,a,u){var n=a;if((t&1)===0&&(t&2)===0&&a!==null)l:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var c=a.stateNode.containerInfo;if(c===u)break;if(i===4)for(i=a.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===u)return;i=i.return}for(;c!==null;){if(i=Le(c),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){a=n=i;continue l}c=c.parentNode}}a=a.return}xf(function(){var d=n,g=ti(e),A=[];l:{var r=ss.get(l);if(r!==void 0){var v=Ru,M=l;switch(l){case"keypress":if(Nu(e)===0)break l;case"keydown":case"keyup":v=nd;break;case"focusin":M="focus",v=ci;break;case"focusout":M="blur",v=ci;break;case"beforeblur":case"afterblur":v=ci;break;case"click":if(e.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Yf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=wh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=fd;break;case ns:case is:case cs:v=Fh;break;case fs:v=od;break;case"scroll":case"scrollend":v=Kh;break;case"wheel":v=hd;break;case"copy":case"cut":case"paste":v=Ih;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=jf;break;case"toggle":case"beforetoggle":v=rd}var N=(t&4)!==0,ul=!N&&(l==="scroll"||l==="scrollend"),m=N?r!==null?r+"Capture":null:r;N=[];for(var s=d,h;s!==null;){var b=s;if(h=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||h===null||m===null||(b=Na(s,m),b!=null&&N.push(ou(s,b,h))),ul)break;s=s.return}0<N.length&&(r=new v(r,M,null,e,g),A.push({event:r,listeners:N}))}}if((t&7)===0){l:{if(r=l==="mouseover"||l==="pointerover",v=l==="mouseout"||l==="pointerout",r&&e!==li&&(M=e.relatedTarget||e.fromElement)&&(Le(M)||M[Xe]))break l;if((v||r)&&(r=g.window===g?g:(r=g.ownerDocument)?r.defaultView||r.parentWindow:window,v?(M=e.relatedTarget||e.toElement,v=d,M=M?Le(M):null,M!==null&&(ul=W(M),N=M.tag,M!==ul||N!==5&&N!==27&&N!==6)&&(M=null)):(v=null,M=d),v!==M)){if(N=Yf,b="onMouseLeave",m="onMouseEnter",s="mouse",(l==="pointerout"||l==="pointerover")&&(N=jf,b="onPointerLeave",m="onPointerEnter",s="pointer"),ul=v==null?r:Ha(v),h=M==null?r:Ha(M),r=new N(b,s+"leave",v,e,g),r.target=ul,r.relatedTarget=h,b=null,Le(g)===d&&(N=new N(m,s+"enter",M,e,g),N.target=h,N.relatedTarget=ul,b=N),ul=b,v&&M)t:{for(N=dr,m=v,s=M,h=0,b=m;b;b=N(b))h++;b=0;for(var U=s;U;U=N(U))b++;for(;0<h-b;)m=N(m),h--;for(;0<b-h;)s=N(s),b--;for(;h--;){if(m===s||s!==null&&m===s.alternate){N=m;break t}m=N(m),s=N(s)}N=null}else N=null;v!==null&&Cm(A,r,v,N,!1),M!==null&&ul!==null&&Cm(A,ul,M,N,!0)}}l:{if(r=d?Ha(d):window,v=r.nodeName&&r.nodeName.toLowerCase(),v==="select"||v==="input"&&r.type==="file")var J=Wf;else if(Jf(r))if(kf)J=zd;else{J=pd;var D=Ed}else v=r.nodeName,!v||v.toLowerCase()!=="input"||r.type!=="checkbox"&&r.type!=="radio"?d&&Pn(d.elementType)&&(J=Wf):J=Td;if(J&&(J=J(l,d))){wf(A,J,e,g);break l}D&&D(l,r,d),l==="focusout"&&d&&r.type==="number"&&d.memoizedProps.value!=null&&In(r,"number",r.value)}switch(D=d?Ha(d):window,l){case"focusin":(Jf(D)||D.contentEditable==="true")&&($e=D,di=d,Qa=null);break;case"focusout":Qa=di=$e=null;break;case"mousedown":ri=!0;break;case"contextmenu":case"mouseup":case"dragend":ri=!1,as(A,e,g);break;case"selectionchange":if(Od)break;case"keydown":case"keyup":as(A,e,g)}var Y;if(si)l:{switch(l){case"compositionstart":var Z="onCompositionStart";break l;case"compositionend":Z="onCompositionEnd";break l;case"compositionupdate":Z="onCompositionUpdate";break l}Z=void 0}else Fe?Vf(l,e)&&(Z="onCompositionEnd"):l==="keydown"&&e.keyCode===229&&(Z="onCompositionStart");Z&&(Xf&&e.locale!=="ko"&&(Fe||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&Fe&&(Y=Bf()):($t=g,ui="value"in $t?$t.value:$t.textContent,Fe=!0)),D=zn(d,Z),0<D.length&&(Z=new Qf(Z,l,null,e,g),A.push({event:Z,listeners:D}),Y?Z.data=Y:(Y=Kf(e),Y!==null&&(Z.data=Y)))),(Y=vd?gd(l,e):Sd(l,e))&&(Z=zn(d,"onBeforeInput"),0<Z.length&&(D=new Qf("onBeforeInput","beforeinput",null,e,g),A.push({event:D,listeners:Z}),D.data=Y)),sr(A,l,d,e,g)}Hm(A,t)})}function ou(l,t,e){return{instance:l,listener:t,currentTarget:e}}function zn(l,t){for(var e=t+"Capture",a=[];l!==null;){var u=l,n=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||n===null||(u=Na(l,e),u!=null&&a.unshift(ou(l,u,n)),u=Na(l,t),u!=null&&a.push(ou(l,u,n))),l.tag===3)return a;l=l.return}return[]}function dr(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function Cm(l,t,e,a,u){for(var n=t._reactName,i=[];e!==null&&e!==a;){var c=e,f=c.alternate,d=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||d===null||(f=d,u?(d=Na(e,n),d!=null&&i.unshift(ou(e,d,f))):u||(d=Na(e,n),d!=null&&i.push(ou(e,d,f)))),e=e.return}i.length!==0&&l.push({event:t,listeners:i})}var rr=/\r\n?/g,yr=/\u0000|\uFFFD/g;function Rm(l){return(typeof l=="string"?l:""+l).replace(rr,`
`).replace(yr,"")}function qm(l,t){return t=Rm(t),Rm(l)===t}function al(l,t,e,a,u,n){switch(e){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||we(l,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&we(l,""+a);break;case"className":_u(l,"class",a);break;case"tabIndex":_u(l,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":_u(l,e,a);break;case"style":Rf(l,a,n);break;case"data":if(t!=="object"){_u(l,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||e!=="href")){l.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){l.removeAttribute(e);break}a=Uu(""+a),l.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){l.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(e==="formAction"?(t!=="input"&&al(l,t,"name",u.name,u,null),al(l,t,"formEncType",u.formEncType,u,null),al(l,t,"formMethod",u.formMethod,u,null),al(l,t,"formTarget",u.formTarget,u,null)):(al(l,t,"encType",u.encType,u,null),al(l,t,"method",u.method,u,null),al(l,t,"target",u.target,u,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){l.removeAttribute(e);break}a=Uu(""+a),l.setAttribute(e,a);break;case"onClick":a!=null&&(l.onclick=Nt);break;case"onScroll":a!=null&&X("scroll",l);break;case"onScrollEnd":a!=null&&X("scrollend",l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(y(61));if(e=a.__html,e!=null){if(u.children!=null)throw Error(y(60));l.innerHTML=e}}break;case"multiple":l.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":l.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){l.removeAttribute("xlink:href");break}e=Uu(""+a),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,""+a):l.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,""):l.removeAttribute(e);break;case"capture":case"download":a===!0?l.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,a):l.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?l.setAttribute(e,a):l.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?l.removeAttribute(e):l.setAttribute(e,a);break;case"popover":X("beforetoggle",l),X("toggle",l),Ou(l,"popover",a);break;case"xlinkActuate":Ht(l,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ht(l,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ht(l,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ht(l,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ht(l,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ht(l,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ht(l,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ht(l,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ht(l,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ou(l,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Zh.get(e)||e,Ou(l,e,a))}}function Qc(l,t,e,a,u,n){switch(e){case"style":Rf(l,a,n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(y(61));if(e=a.__html,e!=null){if(u.children!=null)throw Error(y(60));l.innerHTML=e}}break;case"children":typeof a=="string"?we(l,a):(typeof a=="number"||typeof a=="bigint")&&we(l,""+a);break;case"onScroll":a!=null&&X("scroll",l);break;case"onScrollEnd":a!=null&&X("scrollend",l);break;case"onClick":a!=null&&(l.onclick=Nt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zf.hasOwnProperty(e))l:{if(e[0]==="o"&&e[1]==="n"&&(u=e.endsWith("Capture"),t=e.slice(2,u?e.length-7:void 0),n=l[Xl]||null,n=n!=null?n[e]:null,typeof n=="function"&&l.removeEventListener(t,n,u),typeof a=="function")){typeof n!="function"&&n!==null&&(e in l?l[e]=null:l.hasAttribute(e)&&l.removeAttribute(e)),l.addEventListener(t,a,u);break l}e in l?l[e]=a:a===!0?l.setAttribute(e,""):Ou(l,e,a)}}}function Ul(l,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":X("error",l),X("load",l);var a=!1,u=!1,n;for(n in e)if(e.hasOwnProperty(n)){var i=e[n];if(i!=null)switch(n){case"src":a=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(y(137,t));default:al(l,t,n,i,e,null)}}u&&al(l,t,"srcSet",e.srcSet,e,null),a&&al(l,t,"src",e.src,e,null);return;case"input":X("invalid",l);var c=n=i=u=null,f=null,d=null;for(a in e)if(e.hasOwnProperty(a)){var g=e[a];if(g!=null)switch(a){case"name":u=g;break;case"type":i=g;break;case"checked":f=g;break;case"defaultChecked":d=g;break;case"value":n=g;break;case"defaultValue":c=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(y(137,t));break;default:al(l,t,a,g,e,null)}}Uf(l,n,c,f,d,i,u,!1);return;case"select":X("invalid",l),a=i=n=null;for(u in e)if(e.hasOwnProperty(u)&&(c=e[u],c!=null))switch(u){case"value":n=c;break;case"defaultValue":i=c;break;case"multiple":a=c;default:al(l,t,u,c,e,null)}t=n,e=i,l.multiple=!!a,t!=null?Je(l,!!a,t,!1):e!=null&&Je(l,!!a,e,!0);return;case"textarea":X("invalid",l),n=u=a=null;for(i in e)if(e.hasOwnProperty(i)&&(c=e[i],c!=null))switch(i){case"value":a=c;break;case"defaultValue":u=c;break;case"children":n=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(y(91));break;default:al(l,t,i,c,e,null)}Nf(l,a,u,n);return;case"option":for(f in e)if(e.hasOwnProperty(f)&&(a=e[f],a!=null))switch(f){case"selected":l.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:al(l,t,f,a,e,null)}return;case"dialog":X("beforetoggle",l),X("toggle",l),X("cancel",l),X("close",l);break;case"iframe":case"object":X("load",l);break;case"video":case"audio":for(a=0;a<su.length;a++)X(su[a],l);break;case"image":X("error",l),X("load",l);break;case"details":X("toggle",l);break;case"embed":case"source":case"link":X("error",l),X("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in e)if(e.hasOwnProperty(d)&&(a=e[d],a!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(y(137,t));default:al(l,t,d,a,e,null)}return;default:if(Pn(t)){for(g in e)e.hasOwnProperty(g)&&(a=e[g],a!==void 0&&Qc(l,t,g,a,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(a=e[c],a!=null&&al(l,t,c,a,e,null))}function vr(l,t,e,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,n=null,i=null,c=null,f=null,d=null,g=null;for(v in e){var A=e[v];if(e.hasOwnProperty(v)&&A!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":f=A;default:a.hasOwnProperty(v)||al(l,t,v,null,a,A)}}for(var r in a){var v=a[r];if(A=e[r],a.hasOwnProperty(r)&&(v!=null||A!=null))switch(r){case"type":n=v;break;case"name":u=v;break;case"checked":d=v;break;case"defaultChecked":g=v;break;case"value":i=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(y(137,t));break;default:v!==A&&al(l,t,r,v,a,A)}}$n(l,i,c,f,d,g,n,u);return;case"select":v=i=c=r=null;for(n in e)if(f=e[n],e.hasOwnProperty(n)&&f!=null)switch(n){case"value":break;case"multiple":v=f;default:a.hasOwnProperty(n)||al(l,t,n,null,a,f)}for(u in a)if(n=a[u],f=e[u],a.hasOwnProperty(u)&&(n!=null||f!=null))switch(u){case"value":r=n;break;case"defaultValue":c=n;break;case"multiple":i=n;default:n!==f&&al(l,t,u,n,a,f)}t=c,e=i,a=v,r!=null?Je(l,!!e,r,!1):!!a!=!!e&&(t!=null?Je(l,!!e,t,!0):Je(l,!!e,e?[]:"",!1));return;case"textarea":v=r=null;for(c in e)if(u=e[c],e.hasOwnProperty(c)&&u!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:al(l,t,c,null,a,u)}for(i in a)if(u=a[i],n=e[i],a.hasOwnProperty(i)&&(u!=null||n!=null))switch(i){case"value":r=u;break;case"defaultValue":v=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(y(91));break;default:u!==n&&al(l,t,i,u,a,n)}Hf(l,r,v);return;case"option":for(var M in e)if(r=e[M],e.hasOwnProperty(M)&&r!=null&&!a.hasOwnProperty(M))switch(M){case"selected":l.selected=!1;break;default:al(l,t,M,null,a,r)}for(f in a)if(r=a[f],v=e[f],a.hasOwnProperty(f)&&r!==v&&(r!=null||v!=null))switch(f){case"selected":l.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:al(l,t,f,r,a,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var N in e)r=e[N],e.hasOwnProperty(N)&&r!=null&&!a.hasOwnProperty(N)&&al(l,t,N,null,a,r);for(d in a)if(r=a[d],v=e[d],a.hasOwnProperty(d)&&r!==v&&(r!=null||v!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(r!=null)throw Error(y(137,t));break;default:al(l,t,d,r,a,v)}return;default:if(Pn(t)){for(var ul in e)r=e[ul],e.hasOwnProperty(ul)&&r!==void 0&&!a.hasOwnProperty(ul)&&Qc(l,t,ul,void 0,a,r);for(g in a)r=a[g],v=e[g],!a.hasOwnProperty(g)||r===v||r===void 0&&v===void 0||Qc(l,t,g,r,a,v);return}}for(var m in e)r=e[m],e.hasOwnProperty(m)&&r!=null&&!a.hasOwnProperty(m)&&al(l,t,m,null,a,r);for(A in a)r=a[A],v=e[A],!a.hasOwnProperty(A)||r===v||r==null&&v==null||al(l,t,A,r,a,v)}function xm(l){switch(l){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gr(){if(typeof performance.getEntriesByType=="function"){for(var l=0,t=0,e=performance.getEntriesByType("resource"),a=0;a<e.length;a++){var u=e[a],n=u.transferSize,i=u.initiatorType,c=u.duration;if(n&&c&&xm(i)){for(i=0,c=u.responseEnd,a+=1;a<e.length;a++){var f=e[a],d=f.startTime;if(d>c)break;var g=f.transferSize,A=f.initiatorType;g&&xm(A)&&(f=f.responseEnd,i+=g*(f<c?1:(c-d)/(f-d)))}if(--a,t+=8*(n+i)/(u.duration/1e3),l++,10<l)break}}if(0<l)return t/l/1e6}return navigator.connection&&(l=navigator.connection.downlink,typeof l=="number")?l:5}var jc=null,Xc=null;function Mn(l){return l.nodeType===9?l:l.ownerDocument}function Bm(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gm(l,t){if(l===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&t==="foreignObject"?0:l}function Lc(l,t){return l==="textarea"||l==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zc=null;function Sr(){var l=window.event;return l&&l.type==="popstate"?l===Zc?!1:(Zc=l,!0):(Zc=null,!1)}var Ym=typeof setTimeout=="function"?setTimeout:void 0,br=typeof clearTimeout=="function"?clearTimeout:void 0,Qm=typeof Promise=="function"?Promise:void 0,Ar=typeof queueMicrotask=="function"?queueMicrotask:typeof Qm<"u"?function(l){return Qm.resolve(null).then(l).catch(Er)}:Ym;function Er(l){setTimeout(function(){throw l})}function re(l){return l==="head"}function jm(l,t){var e=t,a=0;do{var u=e.nextSibling;if(l.removeChild(e),u&&u.nodeType===8)if(e=u.data,e==="/$"||e==="/&"){if(a===0){l.removeChild(u),za(t);return}a--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")a++;else if(e==="html")mu(l.ownerDocument.documentElement);else if(e==="head"){e=l.ownerDocument.head,mu(e);for(var n=e.firstChild;n;){var i=n.nextSibling,c=n.nodeName;n[Ua]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&n.rel.toLowerCase()==="stylesheet"||e.removeChild(n),n=i}}else e==="body"&&mu(l.ownerDocument.body);e=u}while(e);za(t)}function Xm(l,t){var e=l;l=0;do{var a=e.nextSibling;if(e.nodeType===1?t?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(t?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),a&&a.nodeType===8)if(e=a.data,e==="/$"){if(l===0)break;l--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||l++;e=a}while(e)}function Vc(l){var t=l.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Vc(e),kn(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}l.removeChild(e)}}function pr(l,t,e,a){for(;l.nodeType===1;){var u=e;if(l.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(a){if(!l[Ua])switch(t){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(n=l.getAttribute("rel"),n==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(n!==u.rel||l.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||l.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||l.getAttribute("title")!==(u.title==null?null:u.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(n=l.getAttribute("src"),(n!==(u.src==null?null:u.src)||l.getAttribute("type")!==(u.type==null?null:u.type)||l.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&n&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(t==="input"&&l.type==="hidden"){var n=u.name==null?null:""+u.name;if(u.type==="hidden"&&l.getAttribute("name")===n)return l}else return l;if(l=yt(l.nextSibling),l===null)break}return null}function Tr(l,t,e){if(t==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!e||(l=yt(l.nextSibling),l===null))return null;return l}function Lm(l,t){for(;l.nodeType!==8;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!t||(l=yt(l.nextSibling),l===null))return null;return l}function Kc(l){return l.data==="$?"||l.data==="$~"}function Jc(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState!=="loading"}function zr(l,t){var e=l.ownerDocument;if(l.data==="$~")l._reactRetry=t;else if(l.data!=="$?"||e.readyState!=="loading")t();else{var a=function(){t(),e.removeEventListener("DOMContentLoaded",a)};e.addEventListener("DOMContentLoaded",a),l._reactRetry=a}}function yt(l){for(;l!=null;l=l.nextSibling){var t=l.nodeType;if(t===1||t===3)break;if(t===8){if(t=l.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return l}var wc=null;function Zm(l){l=l.nextSibling;for(var t=0;l;){if(l.nodeType===8){var e=l.data;if(e==="/$"||e==="/&"){if(t===0)return yt(l.nextSibling);t--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||t++}l=l.nextSibling}return null}function Vm(l){l=l.previousSibling;for(var t=0;l;){if(l.nodeType===8){var e=l.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(t===0)return l;t--}else e!=="/$"&&e!=="/&"||t++}l=l.previousSibling}return null}function Km(l,t,e){switch(t=Mn(e),l){case"html":if(l=t.documentElement,!l)throw Error(y(452));return l;case"head":if(l=t.head,!l)throw Error(y(453));return l;case"body":if(l=t.body,!l)throw Error(y(454));return l;default:throw Error(y(451))}}function mu(l){for(var t=l.attributes;t.length;)l.removeAttributeNode(t[0]);kn(l)}var vt=new Map,Jm=new Set;function On(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var wt=T.d;T.d={f:Mr,r:Or,D:_r,C:Dr,L:Ur,m:Hr,X:Cr,S:Nr,M:Rr};function Mr(){var l=wt.f(),t=gn();return l||t}function Or(l){var t=Ze(l);t!==null&&t.tag===5&&t.type==="form"?fo(t):wt.r(l)}var Ea=typeof document>"u"?null:document;function wm(l,t,e){var a=Ea;if(a&&typeof t=="string"&&t){var u=ft(t);u='link[rel="'+l+'"][href="'+u+'"]',typeof e=="string"&&(u+='[crossorigin="'+e+'"]'),Jm.has(u)||(Jm.add(u),l={rel:l,crossOrigin:e,href:t},a.querySelector(u)===null&&(t=a.createElement("link"),Ul(t,"link",l),Tl(t),a.head.appendChild(t)))}}function _r(l){wt.D(l),wm("dns-prefetch",l,null)}function Dr(l,t){wt.C(l,t),wm("preconnect",l,t)}function Ur(l,t,e){wt.L(l,t,e);var a=Ea;if(a&&l&&t){var u='link[rel="preload"][as="'+ft(t)+'"]';t==="image"&&e&&e.imageSrcSet?(u+='[imagesrcset="'+ft(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(u+='[imagesizes="'+ft(e.imageSizes)+'"]')):u+='[href="'+ft(l)+'"]';var n=u;switch(t){case"style":n=pa(l);break;case"script":n=Ta(l)}vt.has(n)||(l=R({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:l,as:t},e),vt.set(n,l),a.querySelector(u)!==null||t==="style"&&a.querySelector(hu(n))||t==="script"&&a.querySelector(du(n))||(t=a.createElement("link"),Ul(t,"link",l),Tl(t),a.head.appendChild(t)))}}function Hr(l,t){wt.m(l,t);var e=Ea;if(e&&l){var a=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+ft(a)+'"][href="'+ft(l)+'"]',n=u;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Ta(l)}if(!vt.has(n)&&(l=R({rel:"modulepreload",href:l},t),vt.set(n,l),e.querySelector(u)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(du(n)))return}a=e.createElement("link"),Ul(a,"link",l),Tl(a),e.head.appendChild(a)}}}function Nr(l,t,e){wt.S(l,t,e);var a=Ea;if(a&&l){var u=Ve(a).hoistableStyles,n=pa(l);t=t||"default";var i=u.get(n);if(!i){var c={loading:0,preload:null};if(i=a.querySelector(hu(n)))c.loading=5;else{l=R({rel:"stylesheet",href:l,"data-precedence":t},e),(e=vt.get(n))&&Wc(l,e);var f=i=a.createElement("link");Tl(f),Ul(f,"link",l),f._p=new Promise(function(d,g){f.onload=d,f.onerror=g}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,_n(i,t,a)}i={type:"stylesheet",instance:i,count:1,state:c},u.set(n,i)}}}function Cr(l,t){wt.X(l,t);var e=Ea;if(e&&l){var a=Ve(e).hoistableScripts,u=Ta(l),n=a.get(u);n||(n=e.querySelector(du(u)),n||(l=R({src:l,async:!0},t),(t=vt.get(u))&&kc(l,t),n=e.createElement("script"),Tl(n),Ul(n,"link",l),e.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(u,n))}}function Rr(l,t){wt.M(l,t);var e=Ea;if(e&&l){var a=Ve(e).hoistableScripts,u=Ta(l),n=a.get(u);n||(n=e.querySelector(du(u)),n||(l=R({src:l,async:!0,type:"module"},t),(t=vt.get(u))&&kc(l,t),n=e.createElement("script"),Tl(n),Ul(n,"link",l),e.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(u,n))}}function Wm(l,t,e,a){var u=(u=Q.current)?On(u):null;if(!u)throw Error(y(446));switch(l){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=pa(e.href),e=Ve(u).hoistableStyles,a=e.get(t),a||(a={type:"style",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){l=pa(e.href);var n=Ve(u).hoistableStyles,i=n.get(l);if(i||(u=u.ownerDocument||u,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(l,i),(n=u.querySelector(hu(l)))&&!n._p&&(i.instance=n,i.state.loading=5),vt.has(l)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},vt.set(l,e),n||qr(u,l,e,i.state))),t&&a===null)throw Error(y(528,""));return i}if(t&&a!==null)throw Error(y(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ta(e),e=Ve(u).hoistableScripts,a=e.get(t),a||(a={type:"script",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(y(444,l))}}function pa(l){return'href="'+ft(l)+'"'}function hu(l){return'link[rel="stylesheet"]['+l+"]"}function km(l){return R({},l,{"data-precedence":l.precedence,precedence:null})}function qr(l,t,e,a){l.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=l.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ul(t,"link",e),Tl(t),l.head.appendChild(t))}function Ta(l){return'[src="'+ft(l)+'"]'}function du(l){return"script[async]"+l}function Fm(l,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var a=l.querySelector('style[data-href~="'+ft(e.href)+'"]');if(a)return t.instance=a,Tl(a),a;var u=R({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(l.ownerDocument||l).createElement("style"),Tl(a),Ul(a,"style",u),_n(a,e.precedence,l),t.instance=a;case"stylesheet":u=pa(e.href);var n=l.querySelector(hu(u));if(n)return t.state.loading|=4,t.instance=n,Tl(n),n;a=km(e),(u=vt.get(u))&&Wc(a,u),n=(l.ownerDocument||l).createElement("link"),Tl(n);var i=n;return i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Ul(n,"link",a),t.state.loading|=4,_n(n,e.precedence,l),t.instance=n;case"script":return n=Ta(e.src),(u=l.querySelector(du(n)))?(t.instance=u,Tl(u),u):(a=e,(u=vt.get(n))&&(a=R({},e),kc(a,u)),l=l.ownerDocument||l,u=l.createElement("script"),Tl(u),Ul(u,"link",a),l.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(y(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,_n(a,e.precedence,l));return t.instance}function _n(l,t,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=a.length?a[a.length-1]:null,n=u,i=0;i<a.length;i++){var c=a[i];if(c.dataset.precedence===t)n=c;else if(n!==u)break}n?n.parentNode.insertBefore(l,n.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(l,t.firstChild))}function Wc(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.title==null&&(l.title=t.title)}function kc(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.integrity==null&&(l.integrity=t.integrity)}var Dn=null;function $m(l,t,e){if(Dn===null){var a=new Map,u=Dn=new Map;u.set(e,a)}else u=Dn,a=u.get(e),a||(a=new Map,u.set(e,a));if(a.has(l))return a;for(a.set(l,null),e=e.getElementsByTagName(l),u=0;u<e.length;u++){var n=e[u];if(!(n[Ua]||n[Ml]||l==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var i=n.getAttribute(t)||"";i=l+i;var c=a.get(i);c?c.push(n):a.set(i,[n])}}return a}function Im(l,t,e){l=l.ownerDocument||l,l.head.insertBefore(e,t==="title"?l.querySelector("head > title"):null)}function xr(l,t,e){if(e===1||t.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return l=t.disabled,typeof t.precedence=="string"&&l==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Pm(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}function Br(l,t,e,a){if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var u=pa(a.href),n=t.querySelector(hu(u));if(n){t=n._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Un.bind(l),t.then(l,l)),e.state.loading|=4,e.instance=n,Tl(n);return}n=t.ownerDocument||t,a=km(a),(u=vt.get(u))&&Wc(a,u),n=n.createElement("link"),Tl(n);var i=n;i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Ul(n,"link",a),e.instance=n}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(l.count++,e=Un.bind(l),t.addEventListener("load",e),t.addEventListener("error",e))}}var Fc=0;function Gr(l,t){return l.stylesheets&&l.count===0&&Nn(l,l.stylesheets),0<l.count||0<l.imgCount?function(e){var a=setTimeout(function(){if(l.stylesheets&&Nn(l,l.stylesheets),l.unsuspend){var n=l.unsuspend;l.unsuspend=null,n()}},6e4+t);0<l.imgBytes&&Fc===0&&(Fc=62500*gr());var u=setTimeout(function(){if(l.waitingForImages=!1,l.count===0&&(l.stylesheets&&Nn(l,l.stylesheets),l.unsuspend)){var n=l.unsuspend;l.unsuspend=null,n()}},(l.imgBytes>Fc?50:800)+t);return l.unsuspend=e,function(){l.unsuspend=null,clearTimeout(a),clearTimeout(u)}}:null}function Un(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Nn(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var Hn=null;function Nn(l,t){l.stylesheets=null,l.unsuspend!==null&&(l.count++,Hn=new Map,t.forEach(Yr,l),Hn=null,Un.call(l))}function Yr(l,t){if(!(t.state.loading&4)){var e=Hn.get(l);if(e)var a=e.get(null);else{e=new Map,Hn.set(l,e);for(var u=l.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<u.length;n++){var i=u[n];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(e.set(i.dataset.precedence,i),a=i)}a&&e.set(null,a)}u=t.instance,i=u.getAttribute("data-precedence"),n=e.get(i)||a,n===a&&e.set(null,u),e.set(i,u),this.count++,a=Un.bind(this),u.addEventListener("load",a),u.addEventListener("error",a),n?n.parentNode.insertBefore(u,n.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(u,l.firstChild)),t.state.loading|=4}}var ru={$$typeof:Hl,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Qr(l,t,e,a,u,n,i,c,f){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Kn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kn(0),this.hiddenUpdates=Kn(null),this.identifierPrefix=a,this.onUncaughtError=u,this.onCaughtError=n,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function lh(l,t,e,a,u,n,i,c,f,d,g,A){return l=new Qr(l,t,e,i,f,d,g,A,c),t=1,n===!0&&(t|=24),n=lt(3,null,null,t),l.current=n,n.stateNode=l,t=Ui(),t.refCount++,l.pooledCache=t,t.refCount++,n.memoizedState={element:a,isDehydrated:e,cache:t},Ri(n),l}function th(l){return l?(l=la,l):la}function eh(l,t,e,a,u,n){u=th(u),a.context===null?a.context=u:a.pendingContext=u,a=ae(t),a.payload={element:e},n=n===void 0?null:n,n!==null&&(a.callback=n),e=ue(l,a,t),e!==null&&(wl(e,l,t),Ja(e,l,t))}function ah(l,t){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var e=l.retryLane;l.retryLane=e!==0&&e<t?e:t}}function $c(l,t){ah(l,t),(l=l.alternate)&&ah(l,t)}function uh(l){if(l.tag===13||l.tag===31){var t=_e(l,67108864);t!==null&&wl(t,l,67108864),$c(l,67108864)}}function nh(l){if(l.tag===13||l.tag===31){var t=nt();t=Jn(t);var e=_e(l,t);e!==null&&wl(e,l,t),$c(l,t)}}var Cn=!0;function jr(l,t,e,a){var u=S.T;S.T=null;var n=T.p;try{T.p=2,Ic(l,t,e,a)}finally{T.p=n,S.T=u}}function Xr(l,t,e,a){var u=S.T;S.T=null;var n=T.p;try{T.p=8,Ic(l,t,e,a)}finally{T.p=n,S.T=u}}function Ic(l,t,e,a){if(Cn){var u=Pc(a);if(u===null)Yc(l,t,a,Rn,e),ch(l,a);else if(Zr(u,l,t,e,a))a.stopPropagation();else if(ch(l,a),t&4&&-1<Lr.indexOf(l)){for(;u!==null;){var n=Ze(u);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var i=pe(n.pendingLanes);if(i!==0){var c=n;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var f=1<<31-Il(i);c.entanglements[1]|=f,i&=~f}_t(n),(k&6)===0&&(yn=Fl()+500,fu(0))}}break;case 31:case 13:c=_e(n,2),c!==null&&wl(c,n,2),gn(),$c(n,2)}if(n=Pc(a),n===null&&Yc(l,t,a,Rn,e),n===u)break;u=n}u!==null&&a.stopPropagation()}else Yc(l,t,a,null,e)}}function Pc(l){return l=ti(l),lf(l)}var Rn=null;function lf(l){if(Rn=null,l=Le(l),l!==null){var t=W(l);if(t===null)l=null;else{var e=t.tag;if(e===13){if(l=rl(t),l!==null)return l;l=null}else if(e===31){if(l=Cl(t),l!==null)return l;l=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;l=null}else t!==l&&(l=null)}}return Rn=l,null}function ih(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_h()){case df:return 2;case rf:return 8;case Eu:case Dh:return 32;case yf:return 268435456;default:return 32}default:return 32}}var tf=!1,ye=null,ve=null,ge=null,yu=new Map,vu=new Map,Se=[],Lr="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ch(l,t){switch(l){case"focusin":case"focusout":ye=null;break;case"dragenter":case"dragleave":ve=null;break;case"mouseover":case"mouseout":ge=null;break;case"pointerover":case"pointerout":yu.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vu.delete(t.pointerId)}}function gu(l,t,e,a,u,n){return l===null||l.nativeEvent!==n?(l={blockedOn:t,domEventName:e,eventSystemFlags:a,nativeEvent:n,targetContainers:[u]},t!==null&&(t=Ze(t),t!==null&&uh(t)),l):(l.eventSystemFlags|=a,t=l.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),l)}function Zr(l,t,e,a,u){switch(t){case"focusin":return ye=gu(ye,l,t,e,a,u),!0;case"dragenter":return ve=gu(ve,l,t,e,a,u),!0;case"mouseover":return ge=gu(ge,l,t,e,a,u),!0;case"pointerover":var n=u.pointerId;return yu.set(n,gu(yu.get(n)||null,l,t,e,a,u)),!0;case"gotpointercapture":return n=u.pointerId,vu.set(n,gu(vu.get(n)||null,l,t,e,a,u)),!0}return!1}function fh(l){var t=Le(l.target);if(t!==null){var e=W(t);if(e!==null){if(t=e.tag,t===13){if(t=rl(e),t!==null){l.blockedOn=t,Ef(l.priority,function(){nh(e)});return}}else if(t===31){if(t=Cl(e),t!==null){l.blockedOn=t,Ef(l.priority,function(){nh(e)});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){l.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}l.blockedOn=null}function qn(l){if(l.blockedOn!==null)return!1;for(var t=l.targetContainers;0<t.length;){var e=Pc(l.nativeEvent);if(e===null){e=l.nativeEvent;var a=new e.constructor(e.type,e);li=a,e.target.dispatchEvent(a),li=null}else return t=Ze(e),t!==null&&uh(t),l.blockedOn=e,!1;t.shift()}return!0}function sh(l,t,e){qn(l)&&e.delete(t)}function Vr(){tf=!1,ye!==null&&qn(ye)&&(ye=null),ve!==null&&qn(ve)&&(ve=null),ge!==null&&qn(ge)&&(ge=null),yu.forEach(sh),vu.forEach(sh)}function xn(l,t){l.blockedOn===t&&(l.blockedOn=null,tf||(tf=!0,O.unstable_scheduleCallback(O.unstable_NormalPriority,Vr)))}var Bn=null;function oh(l){Bn!==l&&(Bn=l,O.unstable_scheduleCallback(O.unstable_NormalPriority,function(){Bn===l&&(Bn=null);for(var t=0;t<l.length;t+=3){var e=l[t],a=l[t+1],u=l[t+2];if(typeof a!="function"){if(lf(a||e)===null)continue;break}var n=Ze(e);n!==null&&(l.splice(t,3),t-=3,Pi(n,{pending:!0,data:u,method:e.method,action:a},a,u))}}))}function za(l){function t(f){return xn(f,l)}ye!==null&&xn(ye,l),ve!==null&&xn(ve,l),ge!==null&&xn(ge,l),yu.forEach(t),vu.forEach(t);for(var e=0;e<Se.length;e++){var a=Se[e];a.blockedOn===l&&(a.blockedOn=null)}for(;0<Se.length&&(e=Se[0],e.blockedOn===null);)fh(e),e.blockedOn===null&&Se.shift();if(e=(l.ownerDocument||l).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var u=e[a],n=e[a+1],i=u[Xl]||null;if(typeof n=="function")i||oh(e);else if(i){var c=null;if(n&&n.hasAttribute("formAction")){if(u=n,i=n[Xl]||null)c=i.formAction;else if(lf(u)!==null)continue}else c=i.action;typeof c=="function"?e[a+1]=c:(e.splice(a,3),a-=3),oh(e)}}}function mh(){function l(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(i){return u=i})},focusReset:"manual",scroll:"manual"})}function t(){u!==null&&(u(),u=null),a||setTimeout(e,20)}function e(){if(!a&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,u=null;return navigation.addEventListener("navigate",l),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(e,100),function(){a=!0,navigation.removeEventListener("navigate",l),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),u!==null&&(u(),u=null)}}}function ef(l){this._internalRoot=l}Gn.prototype.render=ef.prototype.render=function(l){var t=this._internalRoot;if(t===null)throw Error(y(409));var e=t.current,a=nt();eh(e,a,l,t,null,null)},Gn.prototype.unmount=ef.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var t=l.containerInfo;eh(l.current,2,null,l,null,null),gn(),t[Xe]=null}};function Gn(l){this._internalRoot=l}Gn.prototype.unstable_scheduleHydration=function(l){if(l){var t=Af();l={blockedOn:null,target:l,priority:t};for(var e=0;e<Se.length&&t!==0&&t<Se[e].priority;e++);Se.splice(e,0,l),e===0&&fh(l)}};var hh=ml.version;if(hh!=="19.2.4")throw Error(y(527,hh,"19.2.4"));T.findDOMNode=function(l){var t=l._reactInternals;if(t===void 0)throw typeof l.render=="function"?Error(y(188)):(l=Object.keys(l).join(","),Error(y(268,l)));return l=p(t),l=l!==null?$(l):null,l=l===null?null:l.stateNode,l};var Kr={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yn.isDisabled&&Yn.supportsFiber)try{Oa=Yn.inject(Kr),$l=Yn}catch{}}return bu.createRoot=function(l,t){if(!C(l))throw Error(y(299));var e=!1,a="",u=bo,n=Ao,i=Eo;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(n=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=lh(l,1,!1,null,null,e,a,null,u,n,i,mh),l[Xe]=t.current,Gc(l),new ef(t)},bu.hydrateRoot=function(l,t,e){if(!C(l))throw Error(y(299));var a=!1,u="",n=bo,i=Ao,c=Eo,f=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(u=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.formState!==void 0&&(f=e.formState)),t=lh(l,1,!0,t,e??null,a,u,f,n,i,c,mh),t.context=th(null),e=t.current,a=nt(),a=Jn(a),u=ae(a),u.callback=null,ue(e,u,a),e=a,t.current.lanes=e,Da(t,e),_t(t),l[Xe]=t.current,Gc(l),new Gn(t)},bu.version="19.2.4",bu}var ph;function ty(){if(ph)return nf.exports;ph=1;function O(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O)}catch(ml){console.error(ml)}}return O(),nf.exports=ly(),nf.exports}var ey=ty();function ay(){const[O,ml]=Th.useState(null),F=[{id:1,question:"1. Define Artificial Intelligence and explain its elements. (Reasoning, Learning, Problem Solving, Perception, Linguistic Intelligence)",answer:"",codeExample:`
⭐ Define Artificial Intelligence (AI)

Artificial Intelligence (AI) is a branch of computer science that deals with creating intelligent machines 
which can think, learn, and act like humans.

👉 In simple words:
AI makes computers smart so they can do work like humans (thinking, decision making, learning).


John McCarthy (1956) defined AI as:
  “The science and engineering of making intelligent machines.”


⭐ Elements of Artificial Intelligence

AI has five main elements:


1️⃣ Reasoning

Reasoning means thinking logically and taking correct decisions using available information.

👉 In AI:

Machines analyze facts
Draw conclusions
Predict results

Example:
Chess-playing AI decides the best next move.


2️⃣ Learning

Learning means improving performance using experience.

👉 In AI:

Machines learn from data
Improve over time
Do not need repeated programming

Example:
YouTube recommendations improve based on what you watch.


3️⃣ Problem Solving

Problem solving is the ability to find a solution from a given situation by choosing the best path.

👉 In AI:

Break problems into steps
Choose best solution
Includes decision making

Example:
Google Maps finding the shortest route.


4️⃣ Perception

Perception means understanding information from senses like seeing, hearing, etc.

👉 In AI:

Uses sensors, cameras, microphones
Understands images, sound, and data

Example:
Face recognition systems, voice assistants.


5️⃣ Linguistic Intelligence

Linguistic Intelligence is the ability to understand, speak, read, and write language.

👉 In AI:

Understand human language
Communicate naturally

Example:
Chatbots, Google Assistant, Alexa.


✨ One-line Memory Trick (Exam Tip)

R-L-P-P-L

➡️ Reasoning – Learning – Problem Solving – Perception – Linguistic Intelligence




⭐ Elements of Artificial Intelligence (ASCII Diagram)


                +----------------------+
                |  ARTIFICIAL          |
                |  INTELLIGENCE (AI)   |
                +----------+-----------+
                           |
      -------------------------------------------------
      |           |            |            |         |
+-----------+ +-----------+ +--------------+ +-----------+ +------------------+
| Reasoning | | Learning  | | Problem      | | Perception| | Linguistic       |
|           | |           | | Solving      | |           | | Intelligence     |
+-----------+ +-----------+ +--------------+ +-----------+ +------------------+


✏️ How to draw in exam (quick tip):

Draw one big box → Artificial Intelligence
Draw five small boxes below it
Connect using straight lines



🔁 Quick recall line:

AI = Reasoning + Learning + Problem Solving + Perception + Language
      
      `},{id:2,question:"2. Explain Types of AI based on Capabilities.->  Narrow (Weak) AI, General AI, Super AI",answer:"Very common exam question",codeExample:`
⭐ Types of Artificial Intelligence (Based on Capabilities)

AI is classified based on how intelligent the machine is compared to humans.



1️⃣ Narrow AI (Weak AI) — Explained in Detail

Narrow AI is an AI system that is trained to perform only one specific task.

👉 It works only within fixed limits and cannot think or act beyond its programming.

Characteristics:

Performs single or limited task
Cannot reason like humans
No self-awareness
Needs human-defined rules or data
Why it is called Weak AI?
Because it does not have real intelligence, it only appears intelligent.

Examples:

Google Search
Siri / Alexa
Face recognition
Recommendation systems (Netflix, Amazon)

Chess-playing programs

📌 Important point:
All AI systems we use today are Narrow AI.



2️⃣ General AI — Explained in Detail

General AI is an AI system that can think, learn, understand, and perform tasks like a human.


👉 It can:

Learn any subject
Solve different types of problems
Apply knowledge in new situations


Characteristics:

Human-like intelligence
Can reason and learn independently
Flexible and adaptable
Can perform multiple tasks
Current Status:

❌ Does not exist yet
It is still in the research and development stage.

📌 Example (theoretical):
A robot that can cook, teach, drive, talk, and solve problems like a human.



3️⃣ Super AI — Explained in Detail

Super AI is an AI system that is more intelligent than humans in every way.

👉 It can:

Think faster than humans
Make better decisions
Improve itself
Have emotions and self-awareness


Characteristics:

Intelligence beyond human level
Self-conscious and creative
Can outperform humans in all fields


Current Status:

❌ Purely hypothetical (future concept)

📌 Example (fictional):
AI shown in movies like Iron Man (Jarvis) or Ex Machina.



⭐ Difference Between Narrow AI, General AI and Super AI

| Feature          | Narrow AI (Weak AI) | General AI     | Super AI                     |
| ---------------- | ------------------- | -------------- | ---------------------------- |
| Intelligence     | Limited             | Human-level    | Above human                  |
| Task Ability     | Single task         | Multiple tasks | All tasks better than humans |
| Learning Ability | Limited             | High           | Extremely high               |
| Self-awareness   | No                  | No             | Yes                          |
| Flexibility      | Very low            | High           | Very high                    |
| Exists Today?    | ✅ Yes              | ❌ No         | ❌ No                       |
| Example          | Siri, Alexa         | None           | Fictional AI                 |

      


⭐ One-line Exam Summary (Very Useful)

Narrow AI works for one specific task only
General AI works like a human brain
Super AI works better than human brain

🧠 Memory Trick

N → G → S = Weak → Human → Super
      `},{id:3,question:"3. Explain Types of AI based on Functionality. -> Reactive Machines, Limited Memory, Theory of Mind, Self Awareness",answer:"High probability for long answer",codeExample:`
⭐ Types of Artificial Intelligence (Based on Functionality)

This classification is based on how AI systems work and respond to situations.

There are four types:

1️⃣ Reactive Machines

Reactive Machines are the most basic type of AI.

👉 They:

Do not store past experiences
React only to the current situation
Cannot learn from past data


Characteristics:

No memory
No learning
Only follows predefined rules


Example:

IBM Deep Blue (Chess computer)
Simple game-playing AI

📌 Explanation:
Reactive machines always respond in the same way for the same input.



2️⃣ Limited Memory

Limited Memory AI can store past data for a short period of time and use it to make decisions.

👉 They:

Learn from recent experiences
Do not store data permanently


Characteristics:

Short-term memory
Limited learning ability
Better decision making than reactive machines


Example:

Self-driving cars
Chatbots with conversation history
📌 Explanation:
These systems use recent information like speed, distance, or past actions.



3️⃣ Theory of Mind

Theory of Mind AI can understand human emotions, thoughts, and intentions.

👉 They:

Understand feelings
Interact socially
Predict human behavior


Characteristics:

Emotional intelligence
Social interaction ability
Understand beliefs and intentions


Current Status:

❌ Does not exist yet

📌 Example (future):
AI that understands if a person is happy, sad, or angry and reacts accordingly.



4️⃣ Self Awareness

Self-Aware AI is the most advanced form of AI.

👉 It:

Has self-consciousness
Understands its own existence
Can make independent decisions


Characteristics:

Self-awareness
Emotions and consciousness
Independent thinking


Current Status:

❌ Purely hypothetical

📌 Example:
AI shown in science fiction movies.



⭐ Difference Between Types of AI (Based on Functionality)

| Feature               | Reactive Machines | Limited Memory    | Theory of Mind | Self Awareness |
| --------------------- | ----------------- | ----------------- | -------------- | -------------- |
| Memory                | No                | Short-term        | Yes            | Yes            |
| Learning              | No                | Limited           | High           | Very High      |
| Emotion Understanding | No                | No                | Yes            | Yes            |
| Self-awareness        | No                | No                | No             | Yes            |
| Exists Today?         | ✅ Yes           | ✅ Yes            | ❌ No         | ❌ No          |
| Example               | Deep Blue         | Self-driving cars | Future AI      | Fictional AI   |




⭐ Easy Memory Trick 🧠

R → L → T → S

➡️ Reactive → Limited → Theory → Self

(From simple to advanced)

⭐ One-line Exam Summary

Reactive Machines react only to current input
Limited Memory use past data for decisions
Theory of Mind understands human emotions
Self-Aware AI understands itself
      
      `},{id:4,question:"4. Write a note on Applications of Artificial Intelligence. (Healthcare, Finance, Education, Robotics)",answer:"",codeExample:`
⭐ Applications of Artificial Intelligence (AI)

Artificial Intelligence is used in many areas to make work faster, smarter, and more accurate.
Some important applications are explained below:

1️⃣ AI in Healthcare

AI helps doctors in diagnosis, treatment, and patient care.

Uses:

Disease detection (cancer, heart disease)
Medical image analysis (X-ray, MRI)
Virtual health assistants

Example:
AI systems that detect cancer from X-ray images.



2️⃣ AI in Finance

AI improves security, speed, and decision making in finance.

Uses:

Fraud detection
Credit scoring
Algorithmic trading
Chatbots for customer support

Example:
Banks use AI to detect fraudulent transactions.



3️⃣ AI in Education

AI makes learning personalized and smart.

Uses:

Online tutors
Automatic grading
Student performance analysis

Example:
AI chatbots help students with doubts anytime.



4️⃣ AI in Robotics

AI enables robots to think, learn, and act independently.

Uses:

Industrial robots
Medical robots
Space exploration

Example:
Robots used in factories for assembling products.



5️⃣ AI in Gaming

AI creates smart opponents in games.

Uses:

Strategic decision making
Learning player behavior

Example:
Chess and video games use AI to challenge players.



6️⃣ AI in Transportation

AI helps in safe and efficient travel.

Uses:

Self-driving cars
Traffic control systems
Route optimization

Example:
Google Maps suggests the fastest route.



7️⃣ AI in Social Media

AI manages large data and improves user experience.

Uses:

Content recommendation
Face recognition
Fake account detection

Example:
Instagram suggesting posts based on your interest.



8️⃣ AI in E-Commerce

AI improves shopping experience.

Uses:

Product recommendations
Chatbots
Price prediction

Example:
Amazon recommending products you may like.



⭐ Short Conclusion (Exam Friendly)

Artificial Intelligence is widely used in healthcare, finance, education, robotics, and many other fields to reduce human effort, increase accuracy, and improve efficiency.


⭐ 5-Mark Short Version (If needed)

AI in Healthcare – disease detection
AI in Finance – fraud detection
AI in Education – smart learning
AI in Robotics – intelligent robots
AI in E-Commerce – product recommendation
      `},{id:5,question:"5. one line questions",answer:"",codeExample:`
🧠 ONE-LINE MEMORY POINTS (MCQ / 2 MARKS)

Father of AI → John McCarthy
AI term introduced in → 1956
Alexa → Narrow AI
Self-driving car → Limited Memory AI
AI Winter → Low funding & low interest period
      
      `},{id:11,question:"11. What is Heuristic Search? Explain Heuristic Function (h(n)).",answer:"",codeExample:`
⭐ What is Heuristic Search?

🔹 Meaning

Heuristic Search is a search technique in AI that uses extra knowledge (rules of thumb) to find a solution 
faster.

👉 Instead of trying all paths, it chooses the best-looking path first.

📌 In simple words:
Heuristic search = Smart search


🔹 Why Heuristic Search is needed?

Normal search is slow
Heuristic search:
  Saves time
  Reduces search space
  Finds solution faster

🔹 Example

Finding a route on Google Maps:
It does not try all roads — it selects the shortest or fastest path.




⭐ Heuristic Function (h(n))

🔹 Meaning

A Heuristic Function, written as h(n), is a function that estimates how close a state (n) is to the goal.

➡️ A heuristic function in AI is a rule that gives an estimated score of how close you are to the goal from 
a current state, helping the AI choose the best next step without checking everything.


📌 In simple words:
h(n) tells how far we are from the goal


🔹 Role of Heuristic Function

The heuristic function helps AI to:
  Decide which node to explore next
  Choose the most promising path
  Improve search efficiency

👉 Smaller value of h(n) = closer to goal



🔹 Example of h(n)

📍 Path Finding Example

  Problem: Reach destination city
  h(n) = Straight-line distance to destination

City A ---- City B ---- City C (Goal)

h(A) = 20 km
h(B) = 10 km
h(C) = 0 km


📍 Example (Path finding)

Imagine you want to travel from City A to the Goal City C:
  h(A) = 20 km — straight-line guess from City A to City C
  h(B) = 10 km — straight-line guess from City B to City C
  h(C) = 0 km — because City C is the goal itself

Even though City C has the best value (0), the AI can’t go there directly from City A if there is no direct road. 
So it looks at the reachable next cities (like B), compares their heuristic values, and picks the one with the 
smallest h(n). In this case, that’s City B (10 km), because it’s estimated to be closer to the goal than A.



🔹 Another Simple Example

In 8-puzzle problem:

  h(n) = Number of misplaced tiles
  Goal state → h(n) = 0




⭐ One-Line Exam Answers (Very Important)

Heuristic Search:
  A search technique that uses heuristic information to find solutions efficiently.

Heuristic Function (h(n)):
  A function that estimates the cost from current state to the goal state.


🧠 Memory Trick

h(n) = how near to goal
      


⭐ Difference between Heuristic Search and Heuristic Function (h(n))

| Heuristic Search                    | Heuristic Function (h(n))          |
| ----------------------------------- | ---------------------------------- |
| It is a search technique            | It is a function (formula)         |
| Used to find solution faster        | Used to guide the search           |
| It decides which path to follow     | It estimates how close to goal     |
| Uses heuristic information          | Provides heuristic information     |
| Works on many nodes and paths       | Gives value for one node           |
| Example: Best First Search          | Example: Straight-line distance    |



⭐ One-line Easy Summary (Exam Use)

Heuristic Search uses smart rules to search efficiently
Heuristic Function (h(n)) gives an estimate of distance to the goal


🧠 Memory Tip

Search = Process
Function = Value



Type of Heuristic Search:

All are varieties of Heuristic Search:


Generate and test
Hill Climbing
Best First Search
Problem Reduction
Constraint Satisfaction
Means-ends analysis



      `},{id:12,question:"12. Explain Generate and Test Algorithm with example.",answer:"",codeExample:`
⭐ Generate and Test Algorithm

🔹 Meaning

Generate and Test is a problem-solving algorithm in AI where:

👉 The system

1. Generates a possible solution
2. Tests whether it solves the problem
3. Repeats until a correct solution is found

📌 In simple words:
Try → Check → Repeat


🔹 Simple Steps of Generate and Test Algorithm

1️⃣ Generate a possible solution
2️⃣ Test whether it is correct
3️⃣ If correct → Stop
4️⃣ If not correct → Generate another solution
5️⃣ Repeat until solution is found or all options are tried



🔹 ASCII Diagram (Easy to Draw in Exam)

+--------------------+
| Generate Solution  |
+--------------------+
           |
           v
+--------------------+
| Test Solution ?    |
+--------------------+
     |         |
   Yes        No
     |         |
     v         v
+-----------+  +--------------------+
| Solution  |  | Generate Next One  |
| Found     |  +--------------------+
+-----------+           |
                         |
                         +----> (Back to Test)




🔹 Example of Generate and Test

🔸 Example: Finding a Number

Problem: Find a number whose square is 25

Steps:

Generate 1 → Test → 1² = 1 ❌
Generate 3 → Test → 3² = 9 ❌
Generate 5 → Test → 5² = 25 ✅

👉 Solution found: 5



🔹 Another AI Example

8-Puzzle Problem
  Generate a board arrangement
  Test if it matches goal state
  Repeat until goal is reached


🔹 Advantages

Simple to understand
Easy to implement


🔹 Disadvantages

Slow for large problems
Tries many wrong solutions


⭐ One-Line Exam Answer

Generate and Test algorithm generates possible solutions and tests each one until a correct solution is 
found.



🧠 Memory Trick

Generate → Test → Repeat
      
      `},{id:13,question:"13. Explain Hill Climbing Algorithm.",answer:"👉 EXAM FAVORITE",codeExample:`
⭐ Hill Climbing Algorithm

🔹 Meaning

Hill Climbing is a heuristic search technique that:

👉 Starts from an initial state
👉 Moves to the neighbor with better value
👉 Continues until no better state is found


📌 In simple words:
Always move upward toward better solution



🔹 Why called Hill Climbing?

Imagine you are climbing a hill ⛰
You always move upward, never downward.


🔹 Basic Steps of Hill Climbing

1️⃣ Start from initial state
2️⃣ Generate neighboring states
3️⃣ Select the best neighbor
4️⃣ If better than current → move there
5️⃣ Repeat until goal is reached or no better neighbor exists



⭐ Types of Hill Climbing

1️⃣ Simple Hill Climbing

👉 Checks neighbors one by one
👉 Moves to the first better state found

Characteristics:

Fast
Does not check all neighbors
May miss best solution

📌 Simple but not optimal



2️⃣ Steepest Ascent Hill Climbing

👉 Checks all neighbors first
👉 Selects the best among all

Characteristics:

Better than simple version
More accurate
Slower than simple hill climbing

📌 Also called Best Improvement


⭐ Diagram (Easy to Draw in Exam)
        Goal
         /\\
        /  \\        ← Global Maximum
       /    \\
      /      \\
     /\\              ← Local Maximum
    /  \\
   /    \\
 Start


AI tries to climb up,
but may stop at local maximum instead of global maximum.



⭐ Problems in Hill Climbing ⭐⭐

1️⃣ Local Maximum

👉 A point where all neighbors are lower
👉 But it is NOT the highest solution

📌 AI stops early thinking it reached goal


2️⃣ Plateau

👉 Flat area where all neighbors have same value
👉 No direction to move

📌 AI gets stuck


3️⃣ Ridge (Extra for exam safety)

👉 Narrow path with higher values
👉 Algorithm moves slowly or fails



⭐ Advantages

✔ Simple
✔ Uses less memory
✔ Fast in small problems


⭐ Disadvantages

❌ Can get stuck in local maxima
❌ Not guaranteed to find global solution
❌ Cannot backtrack


⭐ One-Line Exam Definition

Hill Climbing is a heuristic search algorithm that continuously moves towards increasing value states until 
no better state is available.


🧠 Memory Trick

Hill Climbing =
Move Up Only 🚀
No Backtracking ❌
      `},{id:14,question:"14. Explain Best First Search Algorithm.",answer:"📌 High probability long answer",codeExample:`
⭐ Best First Search Algorithm

🔹 Meaning

Best First Search is a search algorithm that:

👉 Selects the best node first
👉 Uses heuristic function h(n) to decide
👉 Moves toward goal faster

📌 In simple words:
Always choose the most promising path first



🔹 Why use Best First Search?

Normal search checks many nodes.
Best First Search checks only best-looking nodes using heuristic value.

👉 Saves time
👉 Reduces search space


⭐ Working of Best First Search

Steps:

1️⃣ Start from initial node
2️⃣ Put node in OPEN list
3️⃣ Select node with lowest heuristic value h(n)
4️⃣ Expand that node (generate children)
5️⃣ Add children to OPEN list
6️⃣ Repeat until goal is found



⭐ Role of Heuristic Function (h(n))

👉 h(n) = Estimated distance from node to goal

✔ Smaller h(n) → closer to goal
✔ Larger h(n) → farther from goal

📌 Algorithm always selects node with smallest h(n)



⭐ Example

Suppose we want to reach Goal node G

| Node | h(n) |
| ---- | ---- |
| A    | 10   |
| B    | 6    |
| C    | 3    |
| G    | 0    |


👉 Algorithm chooses:

Start → C → G
(because smallest h(n))


⭐ Simple Diagram (ASCII)

        Start
       /  |  \\
      A   B   C
    h=10 h=6 h=3
              |
              G
            h=0


Algorithm selects C first → then Goal.


⭐ Advantages

✔ Fast search
✔ Efficient for large problems
✔ Uses heuristic knowledge


⭐ Disadvantages

❌ May not give optimal solution
❌ Depends on heuristic accuracy



⭐ One-Line Exam Answer

Best First Search is a heuristic search algorithm that selects the node with the lowest heuristic value to 
reach the goal faster.


🧠 Memory Trick

Best First = Choose Best h(n) First
      
      `},{id:15,question:"15. Explain A (A Star) Algorithm*. Evaluation function: f(n) = g(n) + h(n) ⭐⭐⭐, Why A* is optimal",answer:"👉 MOST IMPORTANT QUESTION OF THIS UNIT 🔥🔥",codeExample:`
⭐ A* (A Star) Algorithm


🔹 Meaning

A* is a best-first search algorithm that finds the shortest path to the goal.

👉 It combines:

Actual cost from start → g(n)
Estimated cost to goal → h(n)

📌 In simple words:
A* = Smart + Accurate Path Finder



⭐ Evaluation Function

The main formula of A* is:

          f(n)=g(n)+h(n)



🔹 What each term means?

1️⃣ g(n)

Actual cost from start node to current node

👉 Real distance travelled


2️⃣ h(n)

Heuristic cost (estimated distance from current node to goal)

👉 Estimated remaining distance


3️⃣ f(n)

Total estimated cost of solution path

👉 A* selects node with smallest f(n)


⭐ Working of A* Algorithm
Steps:

1️⃣ Start from initial node
2️⃣ Calculate f(n) = g(n) + h(n)
3️⃣ Select node with lowest f(n)
4️⃣ Expand it
5️⃣ Repeat until goal is reached


⭐ Example

Suppose we want to reach Goal (G)

| Node | g(n) | h(n) | f(n) = g+h |
| ---- | ---- | ---- | ---------- |
| A    | 1    | 6    | 7          |
| B    | 3    | 4    | 7          |
| C    | 2    | 2    | 4          |
| G    | 4    | 0    | 4          |


👉 Node with smallest f(n) = C
Then → G

So A* finds shortest path.



⭐ Simple Diagram

Start
  |
  A (g=1, h=6, f=7)
  |
  C (g=2, h=2, f=4)
  |
  G (g=4, h=0, f=4)


A* chooses lowest f(n) every time.



⭐ Why A* is Optimal ⭐⭐⭐

A* gives optimal (shortest) solution if:

👉 The heuristic function h(n) is admissible


🔹 What is Admissible Heuristic?

A heuristic is admissible if:

        h(n)≤actualcosttogoal

👉 It never overestimates the real cost.



Why this makes A* optimal?

Because:

It considers real cost g(n)
It considers estimated cost h(n)
It never ignores cheaper path
It guarantees shortest path if heuristic is correct


⭐ Advantages

✔ Finds shortest path
✔ More accurate than Best First Search
✔ Complete and optimal (with admissible h(n))


⭐ Disadvantages

❌ Uses more memory
❌ Slower than simple heuristic methods



⭐ One-Line Exam Answer

A* is a heuristic search algorithm that uses evaluation function f(n) = g(n) + h(n) to find the optimal path 
to the goal.



🧠 Memory Trick

A* =
Actual cost + Heuristic cost
g(n) + h(n)
      
      `},{id:16,question:"16. 🧠 JUST-REMEMBER POINTS (MCQ / 2 MARKS)",answer:"",codeExample:`
Heuristic means → Rule of thumb

h(n) → Estimated cost to goal
g(n) → Cost from start to node
A* uses → Best First Search + cost
Hill climbing is a → Local search technique
Local maxima → Algorithm gets stuck
      
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""}],y=C=>{ml(O===C?null:C)};return Bl.jsxs("div",{className:"app-container",children:[Bl.jsx("h1",{children:"AI Interview Questions"}),Bl.jsx("div",{className:"questions-container",children:F.map(C=>Bl.jsxs("div",{className:"question-item",children:[Bl.jsx("button",{className:`question-button ${O===C.id?"active":""}`,onClick:()=>y(C.id),children:C.question}),O===C.id&&Bl.jsxs("div",{className:"answer-container",children:[Bl.jsxs("div",{className:"answer",children:[Bl.jsx("h3",{children:"Answer:"}),Bl.jsx("p",{children:C.answer})]}),C.codeExample&&Bl.jsxs("div",{className:"code-example",children:[Bl.jsx("h3",{children:"Code Example:"}),Bl.jsx("pre",{children:Bl.jsx("code",{children:C.codeExample})})]})]})]},C.id))})]})}ey.createRoot(document.getElementById("root")).render(Bl.jsx(Th.StrictMode,{children:Bl.jsx(ay,{})}));

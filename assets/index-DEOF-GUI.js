(function(){const rl=document.createElement("link").relList;if(rl&&rl.supports&&rl.supports("modulepreload"))return;for(const H of document.querySelectorAll('link[rel="modulepreload"]'))y(H);new MutationObserver(H=>{for(const k of H)if(k.type==="childList")for(const hl of k.addedNodes)hl.tagName==="LINK"&&hl.rel==="modulepreload"&&y(hl)}).observe(document,{childList:!0,subtree:!0});function F(H){const k={};return H.integrity&&(k.integrity=H.integrity),H.referrerPolicy&&(k.referrerPolicy=H.referrerPolicy),H.crossOrigin==="use-credentials"?k.credentials="include":H.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function y(H){if(H.ep)return;H.ep=!0;const k=F(H);fetch(H.href,k)}})();var af={exports:{}},Su={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function Kh(){if(dm)return Su;dm=1;var _=Symbol.for("react.transitional.element"),rl=Symbol.for("react.fragment");function F(y,H,k){var hl=null;if(k!==void 0&&(hl=""+k),H.key!==void 0&&(hl=""+H.key),"key"in H){k={};for(var Hl in H)Hl!=="key"&&(k[Hl]=H[Hl])}else k=H;return H=k.ref,{$$typeof:_,type:y,key:hl,ref:H!==void 0?H:null,props:k}}return Su.Fragment=rl,Su.jsx=F,Su.jsxs=F,Su}var hm;function kh(){return hm||(hm=1,af.exports=Kh()),af.exports}var Bl=kh(),uf={exports:{}},q={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function Wh(){if(ym)return q;ym=1;var _=Symbol.for("react.transitional.element"),rl=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),hl=Symbol.for("react.context"),Hl=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),sl=Symbol.iterator;function kl(o){return o===null||typeof o!="object"?null:(o=sl&&o[sl]||o["@@iterator"],typeof o=="function"?o:null)}var Yl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rl=Object.assign,Dt={};function Wl(o,A,z){this.props=o,this.context=A,this.refs=Dt,this.updater=z||Yl}Wl.prototype.isReactComponent={},Wl.prototype.setState=function(o,A){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,A,"setState")},Wl.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function kt(){}kt.prototype=Wl.prototype;function Cl(o,A,z){this.props=o,this.context=A,this.refs=Dt,this.updater=z||Yl}var it=Cl.prototype=new kt;it.constructor=Cl,Rl(it,Wl.prototype),it.isPureReactComponent=!0;var At=Array.isArray;function Gl(){}var V={H:null,A:null,T:null,S:null},jl=Object.prototype.hasOwnProperty;function Et(o,A,z){var O=z.ref;return{$$typeof:_,type:o,key:A,ref:O!==void 0?O:null,props:z}}function Xe(o,A){return Et(o.type,A,o.props)}function Tt(o){return typeof o=="object"&&o!==null&&o.$$typeof===_}function Xl(o){var A={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(z){return A[z]})}var pe=/\/+/g;function Ut(o,A){return typeof o=="object"&&o!==null&&o.key!=null?Xl(""+o.key):A.toString(36)}function gt(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(Gl,Gl):(o.status="pending",o.then(function(A){o.status==="pending"&&(o.status="fulfilled",o.value=A)},function(A){o.status==="pending"&&(o.status="rejected",o.reason=A)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function S(o,A,z,O,B){var j=typeof o;(j==="undefined"||j==="boolean")&&(o=null);var I=!1;if(o===null)I=!0;else switch(j){case"bigint":case"string":case"number":I=!0;break;case"object":switch(o.$$typeof){case _:case rl:I=!0;break;case $:return I=o._init,S(I(o._payload),A,z,O,B)}}if(I)return B=B(o),I=O===""?"."+Ut(o,0):O,At(B)?(z="",I!=null&&(z=I.replace(pe,"$&/")+"/"),S(B,A,z,"",function(Ma){return Ma})):B!=null&&(Tt(B)&&(B=Xe(B,z+(B.key==null||o&&o.key===B.key?"":(""+B.key).replace(pe,"$&/")+"/")+I)),A.push(B)),1;I=0;var xl=O===""?".":O+":";if(At(o))for(var yl=0;yl<o.length;yl++)O=o[yl],j=xl+Ut(O,yl),I+=S(O,A,z,j,B);else if(yl=kl(o),typeof yl=="function")for(o=yl.call(o),yl=0;!(O=o.next()).done;)O=O.value,j=xl+Ut(O,yl++),I+=S(O,A,z,j,B);else if(j==="object"){if(typeof o.then=="function")return S(gt(o),A,z,O,B);throw A=String(o),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return I}function T(o,A,z){if(o==null)return o;var O=[],B=0;return S(o,O,"","",function(j){return A.call(z,j,B++)}),O}function x(o){if(o._status===-1){var A=o._result;A=A(),A.then(function(z){(o._status===0||o._status===-1)&&(o._status=1,o._result=z)},function(z){(o._status===0||o._status===-1)&&(o._status=2,o._result=z)}),o._status===-1&&(o._status=0,o._result=A)}if(o._status===1)return o._result.default;throw o._result}var tl=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)},nl={map:T,forEach:function(o,A,z){T(o,function(){A.apply(this,arguments)},z)},count:function(o){var A=0;return T(o,function(){A++}),A},toArray:function(o){return T(o,function(A){return A})||[]},only:function(o){if(!Tt(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};return q.Activity=R,q.Children=nl,q.Component=Wl,q.Fragment=F,q.Profiler=H,q.PureComponent=Cl,q.StrictMode=y,q.Suspense=C,q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,q.__COMPILER_RUNTIME={__proto__:null,c:function(o){return V.H.useMemoCache(o)}},q.cache=function(o){return function(){return o.apply(null,arguments)}},q.cacheSignal=function(){return null},q.cloneElement=function(o,A,z){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var O=Rl({},o.props),B=o.key;if(A!=null)for(j in A.key!==void 0&&(B=""+A.key),A)!jl.call(A,j)||j==="key"||j==="__self"||j==="__source"||j==="ref"&&A.ref===void 0||(O[j]=A[j]);var j=arguments.length-2;if(j===1)O.children=z;else if(1<j){for(var I=Array(j),xl=0;xl<j;xl++)I[xl]=arguments[xl+2];O.children=I}return Et(o.type,B,O)},q.createContext=function(o){return o={$$typeof:hl,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:k,_context:o},o},q.createElement=function(o,A,z){var O,B={},j=null;if(A!=null)for(O in A.key!==void 0&&(j=""+A.key),A)jl.call(A,O)&&O!=="key"&&O!=="__self"&&O!=="__source"&&(B[O]=A[O]);var I=arguments.length-2;if(I===1)B.children=z;else if(1<I){for(var xl=Array(I),yl=0;yl<I;yl++)xl[yl]=arguments[yl+2];B.children=xl}if(o&&o.defaultProps)for(O in I=o.defaultProps,I)B[O]===void 0&&(B[O]=I[O]);return Et(o,j,B)},q.createRef=function(){return{current:null}},q.forwardRef=function(o){return{$$typeof:Hl,render:o}},q.isValidElement=Tt,q.lazy=function(o){return{$$typeof:$,_payload:{_status:-1,_result:o},_init:x}},q.memo=function(o,A){return{$$typeof:E,type:o,compare:A===void 0?null:A}},q.startTransition=function(o){var A=V.T,z={};V.T=z;try{var O=o(),B=V.S;B!==null&&B(z,O),typeof O=="object"&&O!==null&&typeof O.then=="function"&&O.then(Gl,tl)}catch(j){tl(j)}finally{A!==null&&z.types!==null&&(A.types=z.types),V.T=A}},q.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},q.use=function(o){return V.H.use(o)},q.useActionState=function(o,A,z){return V.H.useActionState(o,A,z)},q.useCallback=function(o,A){return V.H.useCallback(o,A)},q.useContext=function(o){return V.H.useContext(o)},q.useDebugValue=function(){},q.useDeferredValue=function(o,A){return V.H.useDeferredValue(o,A)},q.useEffect=function(o,A){return V.H.useEffect(o,A)},q.useEffectEvent=function(o){return V.H.useEffectEvent(o)},q.useId=function(){return V.H.useId()},q.useImperativeHandle=function(o,A,z){return V.H.useImperativeHandle(o,A,z)},q.useInsertionEffect=function(o,A){return V.H.useInsertionEffect(o,A)},q.useLayoutEffect=function(o,A){return V.H.useLayoutEffect(o,A)},q.useMemo=function(o,A){return V.H.useMemo(o,A)},q.useOptimistic=function(o,A){return V.H.useOptimistic(o,A)},q.useReducer=function(o,A,z){return V.H.useReducer(o,A,z)},q.useRef=function(o){return V.H.useRef(o)},q.useState=function(o){return V.H.useState(o)},q.useSyncExternalStore=function(o,A,z){return V.H.useSyncExternalStore(o,A,z)},q.useTransition=function(){return V.H.useTransition()},q.version="19.2.4",q}var vm;function of(){return vm||(vm=1,uf.exports=Wh()),uf.exports}var Tm=of(),nf={exports:{}},bu={},cf={exports:{}},ff={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function Fh(){return gm||(gm=1,(function(_){function rl(S,T){var x=S.length;S.push(T);l:for(;0<x;){var tl=x-1>>>1,nl=S[tl];if(0<H(nl,T))S[tl]=T,S[x]=nl,x=tl;else break l}}function F(S){return S.length===0?null:S[0]}function y(S){if(S.length===0)return null;var T=S[0],x=S.pop();if(x!==T){S[0]=x;l:for(var tl=0,nl=S.length,o=nl>>>1;tl<o;){var A=2*(tl+1)-1,z=S[A],O=A+1,B=S[O];if(0>H(z,x))O<nl&&0>H(B,z)?(S[tl]=B,S[O]=x,tl=O):(S[tl]=z,S[A]=x,tl=A);else if(O<nl&&0>H(B,x))S[tl]=B,S[O]=x,tl=O;else break l}}return T}function H(S,T){var x=S.sortIndex-T.sortIndex;return x!==0?x:S.id-T.id}if(_.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var k=performance;_.unstable_now=function(){return k.now()}}else{var hl=Date,Hl=hl.now();_.unstable_now=function(){return hl.now()-Hl}}var C=[],E=[],$=1,R=null,sl=3,kl=!1,Yl=!1,Rl=!1,Dt=!1,Wl=typeof setTimeout=="function"?setTimeout:null,kt=typeof clearTimeout=="function"?clearTimeout:null,Cl=typeof setImmediate<"u"?setImmediate:null;function it(S){for(var T=F(E);T!==null;){if(T.callback===null)y(E);else if(T.startTime<=S)y(E),T.sortIndex=T.expirationTime,rl(C,T);else break;T=F(E)}}function At(S){if(Rl=!1,it(S),!Yl)if(F(C)!==null)Yl=!0,Gl||(Gl=!0,Xl());else{var T=F(E);T!==null&&gt(At,T.startTime-S)}}var Gl=!1,V=-1,jl=5,Et=-1;function Xe(){return Dt?!0:!(_.unstable_now()-Et<jl)}function Tt(){if(Dt=!1,Gl){var S=_.unstable_now();Et=S;var T=!0;try{l:{Yl=!1,Rl&&(Rl=!1,kt(V),V=-1),kl=!0;var x=sl;try{t:{for(it(S),R=F(C);R!==null&&!(R.expirationTime>S&&Xe());){var tl=R.callback;if(typeof tl=="function"){R.callback=null,sl=R.priorityLevel;var nl=tl(R.expirationTime<=S);if(S=_.unstable_now(),typeof nl=="function"){R.callback=nl,it(S),T=!0;break t}R===F(C)&&y(C),it(S)}else y(C);R=F(C)}if(R!==null)T=!0;else{var o=F(E);o!==null&&gt(At,o.startTime-S),T=!1}}break l}finally{R=null,sl=x,kl=!1}T=void 0}}finally{T?Xl():Gl=!1}}}var Xl;if(typeof Cl=="function")Xl=function(){Cl(Tt)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,Ut=pe.port2;pe.port1.onmessage=Tt,Xl=function(){Ut.postMessage(null)}}else Xl=function(){Wl(Tt,0)};function gt(S,T){V=Wl(function(){S(_.unstable_now())},T)}_.unstable_IdlePriority=5,_.unstable_ImmediatePriority=1,_.unstable_LowPriority=4,_.unstable_NormalPriority=3,_.unstable_Profiling=null,_.unstable_UserBlockingPriority=2,_.unstable_cancelCallback=function(S){S.callback=null},_.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):jl=0<S?Math.floor(1e3/S):5},_.unstable_getCurrentPriorityLevel=function(){return sl},_.unstable_next=function(S){switch(sl){case 1:case 2:case 3:var T=3;break;default:T=sl}var x=sl;sl=T;try{return S()}finally{sl=x}},_.unstable_requestPaint=function(){Dt=!0},_.unstable_runWithPriority=function(S,T){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var x=sl;sl=S;try{return T()}finally{sl=x}},_.unstable_scheduleCallback=function(S,T,x){var tl=_.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?tl+x:tl):x=tl,S){case 1:var nl=-1;break;case 2:nl=250;break;case 5:nl=1073741823;break;case 4:nl=1e4;break;default:nl=5e3}return nl=x+nl,S={id:$++,callback:T,priorityLevel:S,startTime:x,expirationTime:nl,sortIndex:-1},x>tl?(S.sortIndex=x,rl(E,S),F(C)===null&&S===F(E)&&(Rl?(kt(V),V=-1):Rl=!0,gt(At,x-tl))):(S.sortIndex=nl,rl(C,S),Yl||kl||(Yl=!0,Gl||(Gl=!0,Xl()))),S},_.unstable_shouldYield=Xe,_.unstable_wrapCallback=function(S){var T=sl;return function(){var x=sl;sl=T;try{return S.apply(this,arguments)}finally{sl=x}}}})(ff)),ff}var Sm;function $h(){return Sm||(Sm=1,cf.exports=Fh()),cf.exports}var sf={exports:{}},Nl={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function Ih(){if(bm)return Nl;bm=1;var _=of();function rl(C){var E="https://react.dev/errors/"+C;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var $=2;$<arguments.length;$++)E+="&args[]="+encodeURIComponent(arguments[$])}return"Minified React error #"+C+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function F(){}var y={d:{f:F,r:function(){throw Error(rl(522))},D:F,C:F,L:F,m:F,X:F,S:F,M:F},p:0,findDOMNode:null},H=Symbol.for("react.portal");function k(C,E,$){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:R==null?null:""+R,children:C,containerInfo:E,implementation:$}}var hl=_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Hl(C,E){if(C==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return Nl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=y,Nl.createPortal=function(C,E){var $=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(rl(299));return k(C,E,null,$)},Nl.flushSync=function(C){var E=hl.T,$=y.p;try{if(hl.T=null,y.p=2,C)return C()}finally{hl.T=E,y.p=$,y.d.f()}},Nl.preconnect=function(C,E){typeof C=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,y.d.C(C,E))},Nl.prefetchDNS=function(C){typeof C=="string"&&y.d.D(C)},Nl.preinit=function(C,E){if(typeof C=="string"&&E&&typeof E.as=="string"){var $=E.as,R=Hl($,E.crossOrigin),sl=typeof E.integrity=="string"?E.integrity:void 0,kl=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;$==="style"?y.d.S(C,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:R,integrity:sl,fetchPriority:kl}):$==="script"&&y.d.X(C,{crossOrigin:R,integrity:sl,fetchPriority:kl,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},Nl.preinitModule=function(C,E){if(typeof C=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var $=Hl(E.as,E.crossOrigin);y.d.M(C,{crossOrigin:$,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0})}}else E==null&&y.d.M(C)},Nl.preload=function(C,E){if(typeof C=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var $=E.as,R=Hl($,E.crossOrigin);y.d.L(C,$,{crossOrigin:R,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},Nl.preloadModule=function(C,E){if(typeof C=="string")if(E){var $=Hl(E.as,E.crossOrigin);y.d.m(C,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:$,integrity:typeof E.integrity=="string"?E.integrity:void 0})}else y.d.m(C)},Nl.requestFormReset=function(C){y.d.r(C)},Nl.unstable_batchedUpdates=function(C,E){return C(E)},Nl.useFormState=function(C,E,$){return hl.H.useFormState(C,E,$)},Nl.useFormStatus=function(){return hl.H.useHostTransitionStatus()},Nl.version="19.2.4",Nl}var pm;function Ph(){if(pm)return sf.exports;pm=1;function _(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_)}catch(rl){console.error(rl)}}return _(),sf.exports=Ih(),sf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function ly(){if(Am)return bu;Am=1;var _=$h(),rl=of(),F=Ph();function y(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function H(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function k(l){var t=l,e=l;if(l.alternate)for(;t.return;)t=t.return;else{l=t;do t=l,(t.flags&4098)!==0&&(e=t.return),l=t.return;while(l)}return t.tag===3?e:null}function hl(l){if(l.tag===13){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function Hl(l){if(l.tag===31){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function C(l){if(k(l)!==l)throw Error(y(188))}function E(l){var t=l.alternate;if(!t){if(t=k(l),t===null)throw Error(y(188));return t!==l?null:l}for(var e=l,a=t;;){var u=e.return;if(u===null)break;var n=u.alternate;if(n===null){if(a=u.return,a!==null){e=a;continue}break}if(u.child===n.child){for(n=u.child;n;){if(n===e)return C(u),l;if(n===a)return C(u),t;n=n.sibling}throw Error(y(188))}if(e.return!==a.return)e=u,a=n;else{for(var i=!1,c=u.child;c;){if(c===e){i=!0,e=u,a=n;break}if(c===a){i=!0,a=u,e=n;break}c=c.sibling}if(!i){for(c=n.child;c;){if(c===e){i=!0,e=n,a=u;break}if(c===a){i=!0,a=n,e=u;break}c=c.sibling}if(!i)throw Error(y(189))}}if(e.alternate!==a)throw Error(y(190))}if(e.tag!==3)throw Error(y(188));return e.stateNode.current===e?l:t}function $(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l;for(l=l.child;l!==null;){if(t=$(l),t!==null)return t;l=l.sibling}return null}var R=Object.assign,sl=Symbol.for("react.element"),kl=Symbol.for("react.transitional.element"),Yl=Symbol.for("react.portal"),Rl=Symbol.for("react.fragment"),Dt=Symbol.for("react.strict_mode"),Wl=Symbol.for("react.profiler"),kt=Symbol.for("react.consumer"),Cl=Symbol.for("react.context"),it=Symbol.for("react.forward_ref"),At=Symbol.for("react.suspense"),Gl=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),jl=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),Xe=Symbol.for("react.memo_cache_sentinel"),Tt=Symbol.iterator;function Xl(l){return l===null||typeof l!="object"?null:(l=Tt&&l[Tt]||l["@@iterator"],typeof l=="function"?l:null)}var pe=Symbol.for("react.client.reference");function Ut(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===pe?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case Rl:return"Fragment";case Wl:return"Profiler";case Dt:return"StrictMode";case At:return"Suspense";case Gl:return"SuspenseList";case Et:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case Yl:return"Portal";case Cl:return l.displayName||"Context";case kt:return(l._context.displayName||"Context")+".Consumer";case it:var t=l.render;return l=l.displayName,l||(l=t.displayName||t.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case V:return t=l.displayName||null,t!==null?t:Ut(l.type)||"Memo";case jl:t=l._payload,l=l._init;try{return Ut(l(t))}catch{}}return null}var gt=Array.isArray,S=rl.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=F.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x={pending:!1,data:null,method:null,action:null},tl=[],nl=-1;function o(l){return{current:l}}function A(l){0>nl||(l.current=tl[nl],tl[nl]=null,nl--)}function z(l,t){nl++,tl[nl]=l.current,l.current=t}var O=o(null),B=o(null),j=o(null),I=o(null);function xl(l,t){switch(z(j,t),z(B,l),z(O,null),t.nodeType){case 9:case 11:l=(l=t.documentElement)&&(l=l.namespaceURI)?Br(l):0;break;default:if(l=t.tagName,t=t.namespaceURI)t=Br(t),l=Yr(t,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}A(O),z(O,l)}function yl(){A(O),A(B),A(j)}function Ma(l){l.memoizedState!==null&&z(I,l);var t=O.current,e=Yr(t,l.type);t!==e&&(z(B,l),z(O,e))}function pu(l){B.current===l&&(A(O),A(B)),I.current===l&&(A(I),hu._currentValue=x)}var jn,rf;function Ae(l){if(jn===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);jn=t&&t[1]||"",rf=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jn+l+rf}var Xn=!1;function Qn(l,t){if(!l||Xn)return"";Xn=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(v){var h=v}Reflect.construct(l,[],p)}else{try{p.call()}catch(v){h=v}l.call(p.prototype)}}else{try{throw Error()}catch(v){h=v}(p=l())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(v){if(v&&h&&typeof v.stack=="string")return[v.stack,h.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=a.DetermineComponentFrameRoot(),i=n[0],c=n[1];if(i&&c){var f=i.split(`
`),d=c.split(`
`);for(u=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;u<d.length&&!d[u].includes("DetermineComponentFrameRoot");)u++;if(a===f.length||u===d.length)for(a=f.length-1,u=d.length-1;1<=a&&0<=u&&f[a]!==d[u];)u--;for(;1<=a&&0<=u;a--,u--)if(f[a]!==d[u]){if(a!==1||u!==1)do if(a--,u--,0>u||f[a]!==d[u]){var g=`
`+f[a].replace(" at new "," at ");return l.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",l.displayName)),g}while(1<=a&&0<=u);break}}}finally{Xn=!1,Error.prepareStackTrace=e}return(e=l?l.displayName||l.name:"")?Ae(e):""}function zm(l,t){switch(l.tag){case 26:case 27:case 5:return Ae(l.type);case 16:return Ae("Lazy");case 13:return l.child!==t&&t!==null?Ae("Suspense Fallback"):Ae("Suspense");case 19:return Ae("SuspenseList");case 0:case 15:return Qn(l.type,!1);case 11:return Qn(l.type.render,!1);case 1:return Qn(l.type,!0);case 31:return Ae("Activity");default:return""}}function mf(l){try{var t="",e=null;do t+=zm(l,e),e=l,l=l.return;while(l);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ln=Object.prototype.hasOwnProperty,Zn=_.unstable_scheduleCallback,Vn=_.unstable_cancelCallback,Mm=_.unstable_shouldYield,_m=_.unstable_requestPaint,Fl=_.unstable_now,Om=_.unstable_getCurrentPriorityLevel,df=_.unstable_ImmediatePriority,hf=_.unstable_UserBlockingPriority,Au=_.unstable_NormalPriority,Dm=_.unstable_LowPriority,yf=_.unstable_IdlePriority,Um=_.log,Cm=_.unstable_setDisableYieldValue,_a=null,$l=null;function Wt(l){if(typeof Um=="function"&&Cm(l),$l&&typeof $l.setStrictMode=="function")try{$l.setStrictMode(_a,l)}catch{}}var Il=Math.clz32?Math.clz32:Rm,Nm=Math.log,Hm=Math.LN2;function Rm(l){return l>>>=0,l===0?32:31-(Nm(l)/Hm|0)|0}var Eu=256,Tu=262144,zu=4194304;function Ee(l){var t=l&42;if(t!==0)return t;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return l&261888;case 262144:case 524288:case 1048576:case 2097152:return l&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function Mu(l,t,e){var a=l.pendingLanes;if(a===0)return 0;var u=0,n=l.suspendedLanes,i=l.pingedLanes;l=l.warmLanes;var c=a&134217727;return c!==0?(a=c&~n,a!==0?u=Ee(a):(i&=c,i!==0?u=Ee(i):e||(e=c&~l,e!==0&&(u=Ee(e))))):(c=a&~n,c!==0?u=Ee(c):i!==0?u=Ee(i):e||(e=a&~l,e!==0&&(u=Ee(e)))),u===0?0:t!==0&&t!==u&&(t&n)===0&&(n=u&-u,e=t&-t,n>=e||n===32&&(e&4194048)!==0)?t:u}function Oa(l,t){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&t)===0}function xm(l,t){switch(l){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vf(){var l=zu;return zu<<=1,(zu&62914560)===0&&(zu=4194304),l}function wn(l){for(var t=[],e=0;31>e;e++)t.push(l);return t}function Da(l,t){l.pendingLanes|=t,t!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function qm(l,t,e,a,u,n){var i=l.pendingLanes;l.pendingLanes=e,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=e,l.entangledLanes&=e,l.errorRecoveryDisabledLanes&=e,l.shellSuspendCounter=0;var c=l.entanglements,f=l.expirationTimes,d=l.hiddenUpdates;for(e=i&~e;0<e;){var g=31-Il(e),p=1<<g;c[g]=0,f[g]=-1;var h=d[g];if(h!==null)for(d[g]=null,g=0;g<h.length;g++){var v=h[g];v!==null&&(v.lane&=-536870913)}e&=~p}a!==0&&gf(l,a,0),n!==0&&u===0&&l.tag!==0&&(l.suspendedLanes|=n&~(i&~t))}function gf(l,t,e){l.pendingLanes|=t,l.suspendedLanes&=~t;var a=31-Il(t);l.entangledLanes|=t,l.entanglements[a]=l.entanglements[a]|1073741824|e&261930}function Sf(l,t){var e=l.entangledLanes|=t;for(l=l.entanglements;e;){var a=31-Il(e),u=1<<a;u&t|l[a]&t&&(l[a]|=t),e&=~u}}function bf(l,t){var e=t&-t;return e=(e&42)!==0?1:Jn(e),(e&(l.suspendedLanes|t))!==0?0:e}function Jn(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function Kn(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function pf(){var l=T.p;return l!==0?l:(l=window.event,l===void 0?32:im(l.type))}function Af(l,t){var e=T.p;try{return T.p=l,t()}finally{T.p=e}}var Ft=Math.random().toString(36).slice(2),Ml="__reactFiber$"+Ft,Ql="__reactProps$"+Ft,Qe="__reactContainer$"+Ft,kn="__reactEvents$"+Ft,Bm="__reactListeners$"+Ft,Ym="__reactHandles$"+Ft,Ef="__reactResources$"+Ft,Ua="__reactMarker$"+Ft;function Wn(l){delete l[Ml],delete l[Ql],delete l[kn],delete l[Bm],delete l[Ym]}function Le(l){var t=l[Ml];if(t)return t;for(var e=l.parentNode;e;){if(t=e[Qe]||e[Ml]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(l=Vr(l);l!==null;){if(e=l[Ml])return e;l=Vr(l)}return t}l=e,e=l.parentNode}return null}function Ze(l){if(l=l[Ml]||l[Qe]){var t=l.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return l}return null}function Ca(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l.stateNode;throw Error(y(33))}function Ve(l){var t=l[Ef];return t||(t=l[Ef]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Tl(l){l[Ua]=!0}var Tf=new Set,zf={};function Te(l,t){we(l,t),we(l+"Capture",t)}function we(l,t){for(zf[l]=t,l=0;l<t.length;l++)Tf.add(t[l])}var Gm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mf={},_f={};function jm(l){return Ln.call(_f,l)?!0:Ln.call(Mf,l)?!1:Gm.test(l)?_f[l]=!0:(Mf[l]=!0,!1)}function _u(l,t,e){if(jm(t))if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":l.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){l.removeAttribute(t);return}}l.setAttribute(t,""+e)}}function Ou(l,t,e){if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(t);return}l.setAttribute(t,""+e)}}function Ct(l,t,e,a){if(a===null)l.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(e);return}l.setAttributeNS(t,e,""+a)}}function ct(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function Of(l){var t=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xm(l,t,e){var a=Object.getOwnPropertyDescriptor(l.constructor.prototype,t);if(!l.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,n=a.set;return Object.defineProperty(l,t,{configurable:!0,get:function(){return u.call(this)},set:function(i){e=""+i,n.call(this,i)}}),Object.defineProperty(l,t,{enumerable:a.enumerable}),{getValue:function(){return e},setValue:function(i){e=""+i},stopTracking:function(){l._valueTracker=null,delete l[t]}}}}function Fn(l){if(!l._valueTracker){var t=Of(l)?"checked":"value";l._valueTracker=Xm(l,t,""+l[t])}}function Df(l){if(!l)return!1;var t=l._valueTracker;if(!t)return!0;var e=t.getValue(),a="";return l&&(a=Of(l)?l.checked?"true":"false":l.value),l=a,l!==e?(t.setValue(l),!0):!1}function Du(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var Qm=/[\n"\\]/g;function ft(l){return l.replace(Qm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function $n(l,t,e,a,u,n,i,c){l.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?l.type=i:l.removeAttribute("type"),t!=null?i==="number"?(t===0&&l.value===""||l.value!=t)&&(l.value=""+ct(t)):l.value!==""+ct(t)&&(l.value=""+ct(t)):i!=="submit"&&i!=="reset"||l.removeAttribute("value"),t!=null?In(l,i,ct(t)):e!=null?In(l,i,ct(e)):a!=null&&l.removeAttribute("value"),u==null&&n!=null&&(l.defaultChecked=!!n),u!=null&&(l.checked=u&&typeof u!="function"&&typeof u!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?l.name=""+ct(c):l.removeAttribute("name")}function Uf(l,t,e,a,u,n,i,c){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(l.type=n),t!=null||e!=null){if(!(n!=="submit"&&n!=="reset"||t!=null)){Fn(l);return}e=e!=null?""+ct(e):"",t=t!=null?""+ct(t):e,c||t===l.value||(l.value=t),l.defaultValue=t}a=a??u,a=typeof a!="function"&&typeof a!="symbol"&&!!a,l.checked=c?l.checked:!!a,l.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(l.name=i),Fn(l)}function In(l,t,e){t==="number"&&Du(l.ownerDocument)===l||l.defaultValue===""+e||(l.defaultValue=""+e)}function Je(l,t,e,a){if(l=l.options,t){t={};for(var u=0;u<e.length;u++)t["$"+e[u]]=!0;for(e=0;e<l.length;e++)u=t.hasOwnProperty("$"+l[e].value),l[e].selected!==u&&(l[e].selected=u),u&&a&&(l[e].defaultSelected=!0)}else{for(e=""+ct(e),t=null,u=0;u<l.length;u++){if(l[u].value===e){l[u].selected=!0,a&&(l[u].defaultSelected=!0);return}t!==null||l[u].disabled||(t=l[u])}t!==null&&(t.selected=!0)}}function Cf(l,t,e){if(t!=null&&(t=""+ct(t),t!==l.value&&(l.value=t),e==null)){l.defaultValue!==t&&(l.defaultValue=t);return}l.defaultValue=e!=null?""+ct(e):""}function Nf(l,t,e,a){if(t==null){if(a!=null){if(e!=null)throw Error(y(92));if(gt(a)){if(1<a.length)throw Error(y(93));a=a[0]}e=a}e==null&&(e=""),t=e}e=ct(t),l.defaultValue=e,a=l.textContent,a===e&&a!==""&&a!==null&&(l.value=a),Fn(l)}function Ke(l,t){if(t){var e=l.firstChild;if(e&&e===l.lastChild&&e.nodeType===3){e.nodeValue=t;return}}l.textContent=t}var Lm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hf(l,t,e){var a=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="":a?l.setProperty(t,e):typeof e!="number"||e===0||Lm.has(t)?t==="float"?l.cssFloat=e:l[t]=(""+e).trim():l[t]=e+"px"}function Rf(l,t,e){if(t!=null&&typeof t!="object")throw Error(y(62));if(l=l.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?l.setProperty(a,""):a==="float"?l.cssFloat="":l[a]="");for(var u in t)a=t[u],t.hasOwnProperty(u)&&e[u]!==a&&Hf(l,u,a)}else for(var n in t)t.hasOwnProperty(n)&&Hf(l,n,t[n])}function Pn(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Uu(l){return Vm.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}function Nt(){}var li=null;function ti(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var ke=null,We=null;function xf(l){var t=Ze(l);if(t&&(l=t.stateNode)){var e=l[Ql]||null;l:switch(l=t.stateNode,t.type){case"input":if($n(l,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=l;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+ft(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var a=e[t];if(a!==l&&a.form===l.form){var u=a[Ql]||null;if(!u)throw Error(y(90));$n(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<e.length;t++)a=e[t],a.form===l.form&&Df(a)}break l;case"textarea":Cf(l,e.value,e.defaultValue);break l;case"select":t=e.value,t!=null&&Je(l,!!e.multiple,t,!1)}}}var ei=!1;function qf(l,t,e){if(ei)return l(t,e);ei=!0;try{var a=l(t);return a}finally{if(ei=!1,(ke!==null||We!==null)&&(gn(),ke&&(t=ke,l=We,We=ke=null,xf(t),l)))for(t=0;t<l.length;t++)xf(l[t])}}function Na(l,t){var e=l.stateNode;if(e===null)return null;var a=e[Ql]||null;if(a===null)return null;e=a[t];l:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(l=l.type,a=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!a;break l;default:l=!1}if(l)return null;if(e&&typeof e!="function")throw Error(y(231,t,typeof e));return e}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ai=!1;if(Ht)try{var Ha={};Object.defineProperty(Ha,"passive",{get:function(){ai=!0}}),window.addEventListener("test",Ha,Ha),window.removeEventListener("test",Ha,Ha)}catch{ai=!1}var $t=null,ui=null,Cu=null;function Bf(){if(Cu)return Cu;var l,t=ui,e=t.length,a,u="value"in $t?$t.value:$t.textContent,n=u.length;for(l=0;l<e&&t[l]===u[l];l++);var i=e-l;for(a=1;a<=i&&t[e-a]===u[n-a];a++);return Cu=u.slice(l,1<a?1-a:void 0)}function Nu(l){var t=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&t===13&&(l=13)):l=t,l===10&&(l=13),32<=l||l===13?l:0}function Hu(){return!0}function Yf(){return!1}function Ll(l){function t(e,a,u,n,i){this._reactName=e,this._targetInst=u,this.type=a,this.nativeEvent=n,this.target=i,this.currentTarget=null;for(var c in l)l.hasOwnProperty(c)&&(e=l[c],this[c]=e?e(n):n[c]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Hu:Yf,this.isPropagationStopped=Yf,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Hu)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Hu)},persist:function(){},isPersistent:Hu}),t}var ze={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ru=Ll(ze),Ra=R({},ze,{view:0,detail:0}),wm=Ll(Ra),ni,ii,xa,xu=R({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fi,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==xa&&(xa&&l.type==="mousemove"?(ni=l.screenX-xa.screenX,ii=l.screenY-xa.screenY):ii=ni=0,xa=l),ni)},movementY:function(l){return"movementY"in l?l.movementY:ii}}),Gf=Ll(xu),Jm=R({},xu,{dataTransfer:0}),Km=Ll(Jm),km=R({},Ra,{relatedTarget:0}),ci=Ll(km),Wm=R({},ze,{animationName:0,elapsedTime:0,pseudoElement:0}),Fm=Ll(Wm),$m=R({},ze,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),Im=Ll($m),Pm=R({},ze,{data:0}),jf=Ll(Pm),ld={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},td={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ed={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ad(l){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(l):(l=ed[l])?!!t[l]:!1}function fi(){return ad}var ud=R({},Ra,{key:function(l){if(l.key){var t=ld[l.key]||l.key;if(t!=="Unidentified")return t}return l.type==="keypress"?(l=Nu(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?td[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fi,charCode:function(l){return l.type==="keypress"?Nu(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?Nu(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),nd=Ll(ud),id=R({},xu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xf=Ll(id),cd=R({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fi}),fd=Ll(cd),sd=R({},ze,{propertyName:0,elapsedTime:0,pseudoElement:0}),od=Ll(sd),rd=R({},xu,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),md=Ll(rd),dd=R({},ze,{newState:0,oldState:0}),hd=Ll(dd),yd=[9,13,27,32],si=Ht&&"CompositionEvent"in window,qa=null;Ht&&"documentMode"in document&&(qa=document.documentMode);var vd=Ht&&"TextEvent"in window&&!qa,Qf=Ht&&(!si||qa&&8<qa&&11>=qa),Lf=" ",Zf=!1;function Vf(l,t){switch(l){case"keyup":return yd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wf(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var Fe=!1;function gd(l,t){switch(l){case"compositionend":return wf(t);case"keypress":return t.which!==32?null:(Zf=!0,Lf);case"textInput":return l=t.data,l===Lf&&Zf?null:l;default:return null}}function Sd(l,t){if(Fe)return l==="compositionend"||!si&&Vf(l,t)?(l=Bf(),Cu=ui=$t=null,Fe=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qf&&t.locale!=="ko"?null:t.data;default:return null}}var bd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jf(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t==="input"?!!bd[l.type]:t==="textarea"}function Kf(l,t,e,a){ke?We?We.push(a):We=[a]:ke=a,t=zn(t,"onChange"),0<t.length&&(e=new Ru("onChange","change",null,e,a),l.push({event:e,listeners:t}))}var Ba=null,Ya=null;function pd(l){Cr(l,0)}function qu(l){var t=Ca(l);if(Df(t))return l}function kf(l,t){if(l==="change")return t}var Wf=!1;if(Ht){var oi;if(Ht){var ri="oninput"in document;if(!ri){var Ff=document.createElement("div");Ff.setAttribute("oninput","return;"),ri=typeof Ff.oninput=="function"}oi=ri}else oi=!1;Wf=oi&&(!document.documentMode||9<document.documentMode)}function $f(){Ba&&(Ba.detachEvent("onpropertychange",If),Ya=Ba=null)}function If(l){if(l.propertyName==="value"&&qu(Ya)){var t=[];Kf(t,Ya,l,ti(l)),qf(pd,t)}}function Ad(l,t,e){l==="focusin"?($f(),Ba=t,Ya=e,Ba.attachEvent("onpropertychange",If)):l==="focusout"&&$f()}function Ed(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return qu(Ya)}function Td(l,t){if(l==="click")return qu(t)}function zd(l,t){if(l==="input"||l==="change")return qu(t)}function Md(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var Pl=typeof Object.is=="function"?Object.is:Md;function Ga(l,t){if(Pl(l,t))return!0;if(typeof l!="object"||l===null||typeof t!="object"||t===null)return!1;var e=Object.keys(l),a=Object.keys(t);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var u=e[a];if(!Ln.call(t,u)||!Pl(l[u],t[u]))return!1}return!0}function Pf(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function ls(l,t){var e=Pf(l);l=0;for(var a;e;){if(e.nodeType===3){if(a=l+e.textContent.length,l<=t&&a>=t)return{node:e,offset:t-l};l=a}l:{for(;e;){if(e.nextSibling){e=e.nextSibling;break l}e=e.parentNode}e=void 0}e=Pf(e)}}function ts(l,t){return l&&t?l===t?!0:l&&l.nodeType===3?!1:t&&t.nodeType===3?ts(l,t.parentNode):"contains"in l?l.contains(t):l.compareDocumentPosition?!!(l.compareDocumentPosition(t)&16):!1:!1}function es(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var t=Du(l.document);t instanceof l.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)l=t.contentWindow;else break;t=Du(l.document)}return t}function mi(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t&&(t==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||t==="textarea"||l.contentEditable==="true")}var _d=Ht&&"documentMode"in document&&11>=document.documentMode,$e=null,di=null,ja=null,hi=!1;function as(l,t,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;hi||$e==null||$e!==Du(a)||(a=$e,"selectionStart"in a&&mi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ja&&Ga(ja,a)||(ja=a,a=zn(di,"onSelect"),0<a.length&&(t=new Ru("onSelect","select",null,t,e),l.push({event:t,listeners:a}),t.target=$e)))}function Me(l,t){var e={};return e[l.toLowerCase()]=t.toLowerCase(),e["Webkit"+l]="webkit"+t,e["Moz"+l]="moz"+t,e}var Ie={animationend:Me("Animation","AnimationEnd"),animationiteration:Me("Animation","AnimationIteration"),animationstart:Me("Animation","AnimationStart"),transitionrun:Me("Transition","TransitionRun"),transitionstart:Me("Transition","TransitionStart"),transitioncancel:Me("Transition","TransitionCancel"),transitionend:Me("Transition","TransitionEnd")},yi={},us={};Ht&&(us=document.createElement("div").style,"AnimationEvent"in window||(delete Ie.animationend.animation,delete Ie.animationiteration.animation,delete Ie.animationstart.animation),"TransitionEvent"in window||delete Ie.transitionend.transition);function _e(l){if(yi[l])return yi[l];if(!Ie[l])return l;var t=Ie[l],e;for(e in t)if(t.hasOwnProperty(e)&&e in us)return yi[l]=t[e];return l}var ns=_e("animationend"),is=_e("animationiteration"),cs=_e("animationstart"),Od=_e("transitionrun"),Dd=_e("transitionstart"),Ud=_e("transitioncancel"),fs=_e("transitionend"),ss=new Map,vi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vi.push("scrollEnd");function St(l,t){ss.set(l,t),Te(t,[l])}var Bu=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},st=[],Pe=0,gi=0;function Yu(){for(var l=Pe,t=gi=Pe=0;t<l;){var e=st[t];st[t++]=null;var a=st[t];st[t++]=null;var u=st[t];st[t++]=null;var n=st[t];if(st[t++]=null,a!==null&&u!==null){var i=a.pending;i===null?u.next=u:(u.next=i.next,i.next=u),a.pending=u}n!==0&&os(e,u,n)}}function Gu(l,t,e,a){st[Pe++]=l,st[Pe++]=t,st[Pe++]=e,st[Pe++]=a,gi|=a,l.lanes|=a,l=l.alternate,l!==null&&(l.lanes|=a)}function Si(l,t,e,a){return Gu(l,t,e,a),ju(l)}function Oe(l,t){return Gu(l,null,null,t),ju(l)}function os(l,t,e){l.lanes|=e;var a=l.alternate;a!==null&&(a.lanes|=e);for(var u=!1,n=l.return;n!==null;)n.childLanes|=e,a=n.alternate,a!==null&&(a.childLanes|=e),n.tag===22&&(l=n.stateNode,l===null||l._visibility&1||(u=!0)),l=n,n=n.return;return l.tag===3?(n=l.stateNode,u&&t!==null&&(u=31-Il(e),l=n.hiddenUpdates,a=l[u],a===null?l[u]=[t]:a.push(t),t.lane=e|536870912),n):null}function ju(l){if(50<cu)throw cu=0,Oc=null,Error(y(185));for(var t=l.return;t!==null;)l=t,t=l.return;return l.tag===3?l.stateNode:null}var la={};function Cd(l,t,e,a){this.tag=l,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(l,t,e,a){return new Cd(l,t,e,a)}function bi(l){return l=l.prototype,!(!l||!l.isReactComponent)}function Rt(l,t){var e=l.alternate;return e===null?(e=lt(l.tag,t,l.key,l.mode),e.elementType=l.elementType,e.type=l.type,e.stateNode=l.stateNode,e.alternate=l,l.alternate=e):(e.pendingProps=t,e.type=l.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=l.flags&65011712,e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=l.sibling,e.index=l.index,e.ref=l.ref,e.refCleanup=l.refCleanup,e}function rs(l,t){l.flags&=65011714;var e=l.alternate;return e===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,l.type=e.type,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l}function Xu(l,t,e,a,u,n){var i=0;if(a=l,typeof l=="function")bi(l)&&(i=1);else if(typeof l=="string")i=qh(l,e,O.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case Et:return l=lt(31,e,t,u),l.elementType=Et,l.lanes=n,l;case Rl:return De(e.children,u,n,t);case Dt:i=8,u|=24;break;case Wl:return l=lt(12,e,t,u|2),l.elementType=Wl,l.lanes=n,l;case At:return l=lt(13,e,t,u),l.elementType=At,l.lanes=n,l;case Gl:return l=lt(19,e,t,u),l.elementType=Gl,l.lanes=n,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case Cl:i=10;break l;case kt:i=9;break l;case it:i=11;break l;case V:i=14;break l;case jl:i=16,a=null;break l}i=29,e=Error(y(130,l===null?"null":typeof l,"")),a=null}return t=lt(i,e,t,u),t.elementType=l,t.type=a,t.lanes=n,t}function De(l,t,e,a){return l=lt(7,l,a,t),l.lanes=e,l}function pi(l,t,e){return l=lt(6,l,null,t),l.lanes=e,l}function ms(l){var t=lt(18,null,null,0);return t.stateNode=l,t}function Ai(l,t,e){return t=lt(4,l.children!==null?l.children:[],l.key,t),t.lanes=e,t.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},t}var ds=new WeakMap;function ot(l,t){if(typeof l=="object"&&l!==null){var e=ds.get(l);return e!==void 0?e:(t={value:l,source:t,stack:mf(t)},ds.set(l,t),t)}return{value:l,source:t,stack:mf(t)}}var ta=[],ea=0,Qu=null,Xa=0,rt=[],mt=0,It=null,zt=1,Mt="";function xt(l,t){ta[ea++]=Xa,ta[ea++]=Qu,Qu=l,Xa=t}function hs(l,t,e){rt[mt++]=zt,rt[mt++]=Mt,rt[mt++]=It,It=l;var a=zt;l=Mt;var u=32-Il(a)-1;a&=~(1<<u),e+=1;var n=32-Il(t)+u;if(30<n){var i=u-u%5;n=(a&(1<<i)-1).toString(32),a>>=i,u-=i,zt=1<<32-Il(t)+u|e<<u|a,Mt=n+l}else zt=1<<n|e<<u|a,Mt=l}function Ei(l){l.return!==null&&(xt(l,1),hs(l,1,0))}function Ti(l){for(;l===Qu;)Qu=ta[--ea],ta[ea]=null,Xa=ta[--ea],ta[ea]=null;for(;l===It;)It=rt[--mt],rt[mt]=null,Mt=rt[--mt],rt[mt]=null,zt=rt[--mt],rt[mt]=null}function ys(l,t){rt[mt++]=zt,rt[mt++]=Mt,rt[mt++]=It,zt=t.id,Mt=t.overflow,It=l}var _l=null,cl=null,w=!1,Pt=null,dt=!1,zi=Error(y(519));function le(l){var t=Error(y(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qa(ot(t,l)),zi}function vs(l){var t=l.stateNode,e=l.type,a=l.memoizedProps;switch(t[Ml]=l,t[Ql]=a,e){case"dialog":Q("cancel",t),Q("close",t);break;case"iframe":case"object":case"embed":Q("load",t);break;case"video":case"audio":for(e=0;e<su.length;e++)Q(su[e],t);break;case"source":Q("error",t);break;case"img":case"image":case"link":Q("error",t),Q("load",t);break;case"details":Q("toggle",t);break;case"input":Q("invalid",t),Uf(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Q("invalid",t);break;case"textarea":Q("invalid",t),Nf(t,a.value,a.defaultValue,a.children)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||a.suppressHydrationWarning===!0||xr(t.textContent,e)?(a.popover!=null&&(Q("beforetoggle",t),Q("toggle",t)),a.onScroll!=null&&Q("scroll",t),a.onScrollEnd!=null&&Q("scrollend",t),a.onClick!=null&&(t.onclick=Nt),t=!0):t=!1,t||le(l,!0)}function gs(l){for(_l=l.return;_l;)switch(_l.tag){case 5:case 31:case 13:dt=!1;return;case 27:case 3:dt=!0;return;default:_l=_l.return}}function aa(l){if(l!==_l)return!1;if(!w)return gs(l),w=!0,!1;var t=l.tag,e;if((e=t!==3&&t!==27)&&((e=t===5)&&(e=l.type,e=!(e!=="form"&&e!=="button")||Lc(l.type,l.memoizedProps)),e=!e),e&&cl&&le(l),gs(l),t===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(y(317));cl=Zr(l)}else if(t===31){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(y(317));cl=Zr(l)}else t===27?(t=cl,he(l.type)?(l=Kc,Kc=null,cl=l):cl=t):cl=_l?yt(l.stateNode.nextSibling):null;return!0}function Ue(){cl=_l=null,w=!1}function Mi(){var l=Pt;return l!==null&&(Jl===null?Jl=l:Jl.push.apply(Jl,l),Pt=null),l}function Qa(l){Pt===null?Pt=[l]:Pt.push(l)}var _i=o(null),Ce=null,qt=null;function te(l,t,e){z(_i,t._currentValue),t._currentValue=e}function Bt(l){l._currentValue=_i.current,A(_i)}function Oi(l,t,e){for(;l!==null;){var a=l.alternate;if((l.childLanes&t)!==t?(l.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),l===e)break;l=l.return}}function Di(l,t,e,a){var u=l.child;for(u!==null&&(u.return=l);u!==null;){var n=u.dependencies;if(n!==null){var i=u.child;n=n.firstContext;l:for(;n!==null;){var c=n;n=u;for(var f=0;f<t.length;f++)if(c.context===t[f]){n.lanes|=e,c=n.alternate,c!==null&&(c.lanes|=e),Oi(n.return,e,l),a||(i=null);break l}n=c.next}}else if(u.tag===18){if(i=u.return,i===null)throw Error(y(341));i.lanes|=e,n=i.alternate,n!==null&&(n.lanes|=e),Oi(i,e,l),i=null}else i=u.child;if(i!==null)i.return=u;else for(i=u;i!==null;){if(i===l){i=null;break}if(u=i.sibling,u!==null){u.return=i.return,i=u;break}i=i.return}u=i}}function ua(l,t,e,a){l=null;for(var u=t,n=!1;u!==null;){if(!n){if((u.flags&524288)!==0)n=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var i=u.alternate;if(i===null)throw Error(y(387));if(i=i.memoizedProps,i!==null){var c=u.type;Pl(u.pendingProps.value,i.value)||(l!==null?l.push(c):l=[c])}}else if(u===I.current){if(i=u.alternate,i===null)throw Error(y(387));i.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(l!==null?l.push(hu):l=[hu])}u=u.return}l!==null&&Di(t,l,e,a),t.flags|=262144}function Lu(l){for(l=l.firstContext;l!==null;){if(!Pl(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function Ne(l){Ce=l,qt=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function Ol(l){return Ss(Ce,l)}function Zu(l,t){return Ce===null&&Ne(l),Ss(l,t)}function Ss(l,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},qt===null){if(l===null)throw Error(y(308));qt=t,l.dependencies={lanes:0,firstContext:t},l.flags|=524288}else qt=qt.next=t;return e}var Nd=typeof AbortController<"u"?AbortController:function(){var l=[],t=this.signal={aborted:!1,addEventListener:function(e,a){l.push(a)}};this.abort=function(){t.aborted=!0,l.forEach(function(e){return e()})}},Hd=_.unstable_scheduleCallback,Rd=_.unstable_NormalPriority,Sl={$$typeof:Cl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ui(){return{controller:new Nd,data:new Map,refCount:0}}function La(l){l.refCount--,l.refCount===0&&Hd(Rd,function(){l.controller.abort()})}var Za=null,Ci=0,na=0,ia=null;function xd(l,t){if(Za===null){var e=Za=[];Ci=0,na=Rc(),ia={status:"pending",value:void 0,then:function(a){e.push(a)}}}return Ci++,t.then(bs,bs),t}function bs(){if(--Ci===0&&Za!==null){ia!==null&&(ia.status="fulfilled");var l=Za;Za=null,na=0,ia=null;for(var t=0;t<l.length;t++)(0,l[t])()}}function qd(l,t){var e=[],a={status:"pending",value:null,reason:null,then:function(u){e.push(u)}};return l.then(function(){a.status="fulfilled",a.value=t;for(var u=0;u<e.length;u++)(0,e[u])(t)},function(u){for(a.status="rejected",a.reason=u,u=0;u<e.length;u++)(0,e[u])(void 0)}),a}var ps=S.S;S.S=function(l,t){ur=Fl(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&xd(l,t),ps!==null&&ps(l,t)};var He=o(null);function Ni(){var l=He.current;return l!==null?l:il.pooledCache}function Vu(l,t){t===null?z(He,He.current):z(He,t.pool)}function As(){var l=Ni();return l===null?null:{parent:Sl._currentValue,pool:l}}var ca=Error(y(460)),Hi=Error(y(474)),wu=Error(y(542)),Ju={then:function(){}};function Es(l){return l=l.status,l==="fulfilled"||l==="rejected"}function Ts(l,t,e){switch(e=l[e],e===void 0?l.push(t):e!==t&&(t.then(Nt,Nt),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Ms(l),l;default:if(typeof t.status=="string")t.then(Nt,Nt);else{if(l=il,l!==null&&100<l.shellSuspendCounter)throw Error(y(482));l=t,l.status="pending",l.then(function(a){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=a}},function(a){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Ms(l),l}throw xe=t,ca}}function Re(l){try{var t=l._init;return t(l._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(xe=e,ca):e}}var xe=null;function zs(){if(xe===null)throw Error(y(459));var l=xe;return xe=null,l}function Ms(l){if(l===ca||l===wu)throw Error(y(483))}var fa=null,Va=0;function Ku(l){var t=Va;return Va+=1,fa===null&&(fa=[]),Ts(fa,l,t)}function wa(l,t){t=t.props.ref,l.ref=t!==void 0?t:null}function ku(l,t){throw t.$$typeof===sl?Error(y(525)):(l=Object.prototype.toString.call(t),Error(y(31,l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)))}function _s(l){function t(r,s){if(l){var m=r.deletions;m===null?(r.deletions=[s],r.flags|=16):m.push(s)}}function e(r,s){if(!l)return null;for(;s!==null;)t(r,s),s=s.sibling;return null}function a(r){for(var s=new Map;r!==null;)r.key!==null?s.set(r.key,r):s.set(r.index,r),r=r.sibling;return s}function u(r,s){return r=Rt(r,s),r.index=0,r.sibling=null,r}function n(r,s,m){return r.index=m,l?(m=r.alternate,m!==null?(m=m.index,m<s?(r.flags|=67108866,s):m):(r.flags|=67108866,s)):(r.flags|=1048576,s)}function i(r){return l&&r.alternate===null&&(r.flags|=67108866),r}function c(r,s,m,b){return s===null||s.tag!==6?(s=pi(m,r.mode,b),s.return=r,s):(s=u(s,m),s.return=r,s)}function f(r,s,m,b){var U=m.type;return U===Rl?g(r,s,m.props.children,b,m.key):s!==null&&(s.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===jl&&Re(U)===s.type)?(s=u(s,m.props),wa(s,m),s.return=r,s):(s=Xu(m.type,m.key,m.props,null,r.mode,b),wa(s,m),s.return=r,s)}function d(r,s,m,b){return s===null||s.tag!==4||s.stateNode.containerInfo!==m.containerInfo||s.stateNode.implementation!==m.implementation?(s=Ai(m,r.mode,b),s.return=r,s):(s=u(s,m.children||[]),s.return=r,s)}function g(r,s,m,b,U){return s===null||s.tag!==7?(s=De(m,r.mode,b,U),s.return=r,s):(s=u(s,m),s.return=r,s)}function p(r,s,m){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=pi(""+s,r.mode,m),s.return=r,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case kl:return m=Xu(s.type,s.key,s.props,null,r.mode,m),wa(m,s),m.return=r,m;case Yl:return s=Ai(s,r.mode,m),s.return=r,s;case jl:return s=Re(s),p(r,s,m)}if(gt(s)||Xl(s))return s=De(s,r.mode,m,null),s.return=r,s;if(typeof s.then=="function")return p(r,Ku(s),m);if(s.$$typeof===Cl)return p(r,Zu(r,s),m);ku(r,s)}return null}function h(r,s,m,b){var U=s!==null?s.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return U!==null?null:c(r,s,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case kl:return m.key===U?f(r,s,m,b):null;case Yl:return m.key===U?d(r,s,m,b):null;case jl:return m=Re(m),h(r,s,m,b)}if(gt(m)||Xl(m))return U!==null?null:g(r,s,m,b,null);if(typeof m.then=="function")return h(r,s,Ku(m),b);if(m.$$typeof===Cl)return h(r,s,Zu(r,m),b);ku(r,m)}return null}function v(r,s,m,b,U){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return r=r.get(m)||null,c(s,r,""+b,U);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case kl:return r=r.get(b.key===null?m:b.key)||null,f(s,r,b,U);case Yl:return r=r.get(b.key===null?m:b.key)||null,d(s,r,b,U);case jl:return b=Re(b),v(r,s,m,b,U)}if(gt(b)||Xl(b))return r=r.get(m)||null,g(s,r,b,U,null);if(typeof b.then=="function")return v(r,s,m,Ku(b),U);if(b.$$typeof===Cl)return v(r,s,m,Zu(s,b),U);ku(s,b)}return null}function M(r,s,m,b){for(var U=null,J=null,D=s,G=s=0,Z=null;D!==null&&G<m.length;G++){D.index>G?(Z=D,D=null):Z=D.sibling;var K=h(r,D,m[G],b);if(K===null){D===null&&(D=Z);break}l&&D&&K.alternate===null&&t(r,D),s=n(K,s,G),J===null?U=K:J.sibling=K,J=K,D=Z}if(G===m.length)return e(r,D),w&&xt(r,G),U;if(D===null){for(;G<m.length;G++)D=p(r,m[G],b),D!==null&&(s=n(D,s,G),J===null?U=D:J.sibling=D,J=D);return w&&xt(r,G),U}for(D=a(D);G<m.length;G++)Z=v(D,r,G,m[G],b),Z!==null&&(l&&Z.alternate!==null&&D.delete(Z.key===null?G:Z.key),s=n(Z,s,G),J===null?U=Z:J.sibling=Z,J=Z);return l&&D.forEach(function(be){return t(r,be)}),w&&xt(r,G),U}function N(r,s,m,b){if(m==null)throw Error(y(151));for(var U=null,J=null,D=s,G=s=0,Z=null,K=m.next();D!==null&&!K.done;G++,K=m.next()){D.index>G?(Z=D,D=null):Z=D.sibling;var be=h(r,D,K.value,b);if(be===null){D===null&&(D=Z);break}l&&D&&be.alternate===null&&t(r,D),s=n(be,s,G),J===null?U=be:J.sibling=be,J=be,D=Z}if(K.done)return e(r,D),w&&xt(r,G),U;if(D===null){for(;!K.done;G++,K=m.next())K=p(r,K.value,b),K!==null&&(s=n(K,s,G),J===null?U=K:J.sibling=K,J=K);return w&&xt(r,G),U}for(D=a(D);!K.done;G++,K=m.next())K=v(D,r,G,K.value,b),K!==null&&(l&&K.alternate!==null&&D.delete(K.key===null?G:K.key),s=n(K,s,G),J===null?U=K:J.sibling=K,J=K);return l&&D.forEach(function(Jh){return t(r,Jh)}),w&&xt(r,G),U}function ul(r,s,m,b){if(typeof m=="object"&&m!==null&&m.type===Rl&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case kl:l:{for(var U=m.key;s!==null;){if(s.key===U){if(U=m.type,U===Rl){if(s.tag===7){e(r,s.sibling),b=u(s,m.props.children),b.return=r,r=b;break l}}else if(s.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===jl&&Re(U)===s.type){e(r,s.sibling),b=u(s,m.props),wa(b,m),b.return=r,r=b;break l}e(r,s);break}else t(r,s);s=s.sibling}m.type===Rl?(b=De(m.props.children,r.mode,b,m.key),b.return=r,r=b):(b=Xu(m.type,m.key,m.props,null,r.mode,b),wa(b,m),b.return=r,r=b)}return i(r);case Yl:l:{for(U=m.key;s!==null;){if(s.key===U)if(s.tag===4&&s.stateNode.containerInfo===m.containerInfo&&s.stateNode.implementation===m.implementation){e(r,s.sibling),b=u(s,m.children||[]),b.return=r,r=b;break l}else{e(r,s);break}else t(r,s);s=s.sibling}b=Ai(m,r.mode,b),b.return=r,r=b}return i(r);case jl:return m=Re(m),ul(r,s,m,b)}if(gt(m))return M(r,s,m,b);if(Xl(m)){if(U=Xl(m),typeof U!="function")throw Error(y(150));return m=U.call(m),N(r,s,m,b)}if(typeof m.then=="function")return ul(r,s,Ku(m),b);if(m.$$typeof===Cl)return ul(r,s,Zu(r,m),b);ku(r,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,s!==null&&s.tag===6?(e(r,s.sibling),b=u(s,m),b.return=r,r=b):(e(r,s),b=pi(m,r.mode,b),b.return=r,r=b),i(r)):e(r,s)}return function(r,s,m,b){try{Va=0;var U=ul(r,s,m,b);return fa=null,U}catch(D){if(D===ca||D===wu)throw D;var J=lt(29,D,null,r.mode);return J.lanes=b,J.return=r,J}finally{}}}var qe=_s(!0),Os=_s(!1),ee=!1;function Ri(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xi(l,t){l=l.updateQueue,t.updateQueue===l&&(t.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function ae(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function ue(l,t,e){var a=l.updateQueue;if(a===null)return null;if(a=a.shared,(W&2)!==0){var u=a.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),a.pending=t,t=ju(l),os(l,null,e),t}return Gu(l,a,t,e),ju(l)}function Ja(l,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194048)!==0)){var a=t.lanes;a&=l.pendingLanes,e|=a,t.lanes=e,Sf(l,e)}}function qi(l,t){var e=l.updateQueue,a=l.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var u=null,n=null;if(e=e.firstBaseUpdate,e!==null){do{var i={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};n===null?u=n=i:n=n.next=i,e=e.next}while(e!==null);n===null?u=n=t:n=n.next=t}else u=n=t;e={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:n,shared:a.shared,callbacks:a.callbacks},l.updateQueue=e;return}l=e.lastBaseUpdate,l===null?e.firstBaseUpdate=t:l.next=t,e.lastBaseUpdate=t}var Bi=!1;function Ka(){if(Bi){var l=ia;if(l!==null)throw l}}function ka(l,t,e,a){Bi=!1;var u=l.updateQueue;ee=!1;var n=u.firstBaseUpdate,i=u.lastBaseUpdate,c=u.shared.pending;if(c!==null){u.shared.pending=null;var f=c,d=f.next;f.next=null,i===null?n=d:i.next=d,i=f;var g=l.alternate;g!==null&&(g=g.updateQueue,c=g.lastBaseUpdate,c!==i&&(c===null?g.firstBaseUpdate=d:c.next=d,g.lastBaseUpdate=f))}if(n!==null){var p=u.baseState;i=0,g=d=f=null,c=n;do{var h=c.lane&-536870913,v=h!==c.lane;if(v?(L&h)===h:(a&h)===h){h!==0&&h===na&&(Bi=!0),g!==null&&(g=g.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});l:{var M=l,N=c;h=t;var ul=e;switch(N.tag){case 1:if(M=N.payload,typeof M=="function"){p=M.call(ul,p,h);break l}p=M;break l;case 3:M.flags=M.flags&-65537|128;case 0:if(M=N.payload,h=typeof M=="function"?M.call(ul,p,h):M,h==null)break l;p=R({},p,h);break l;case 2:ee=!0}}h=c.callback,h!==null&&(l.flags|=64,v&&(l.flags|=8192),v=u.callbacks,v===null?u.callbacks=[h]:v.push(h))}else v={lane:h,tag:c.tag,payload:c.payload,callback:c.callback,next:null},g===null?(d=g=v,f=p):g=g.next=v,i|=h;if(c=c.next,c===null){if(c=u.shared.pending,c===null)break;v=c,c=v.next,v.next=null,u.lastBaseUpdate=v,u.shared.pending=null}}while(!0);g===null&&(f=p),u.baseState=f,u.firstBaseUpdate=d,u.lastBaseUpdate=g,n===null&&(u.shared.lanes=0),se|=i,l.lanes=i,l.memoizedState=p}}function Ds(l,t){if(typeof l!="function")throw Error(y(191,l));l.call(t)}function Us(l,t){var e=l.callbacks;if(e!==null)for(l.callbacks=null,l=0;l<e.length;l++)Ds(e[l],t)}var sa=o(null),Wu=o(0);function Cs(l,t){l=wt,z(Wu,l),z(sa,t),wt=l|t.baseLanes}function Yi(){z(Wu,wt),z(sa,sa.current)}function Gi(){wt=Wu.current,A(sa),A(Wu)}var tt=o(null),ht=null;function ne(l){var t=l.alternate;z(vl,vl.current&1),z(tt,l),ht===null&&(t===null||sa.current!==null||t.memoizedState!==null)&&(ht=l)}function ji(l){z(vl,vl.current),z(tt,l),ht===null&&(ht=l)}function Ns(l){l.tag===22?(z(vl,vl.current),z(tt,l),ht===null&&(ht=l)):ie()}function ie(){z(vl,vl.current),z(tt,tt.current)}function et(l){A(tt),ht===l&&(ht=null),A(vl)}var vl=o(0);function Fu(l){for(var t=l;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||wc(e)||Jc(e)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yt=0,Y=null,el=null,bl=null,$u=!1,oa=!1,Be=!1,Iu=0,Wa=0,ra=null,Bd=0;function ml(){throw Error(y(321))}function Xi(l,t){if(t===null)return!1;for(var e=0;e<t.length&&e<l.length;e++)if(!Pl(l[e],t[e]))return!1;return!0}function Qi(l,t,e,a,u,n){return Yt=n,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,S.H=l===null||l.memoizedState===null?yo:ec,Be=!1,n=e(a,u),Be=!1,oa&&(n=Rs(t,e,a,u)),Hs(l),n}function Hs(l){S.H=Ia;var t=el!==null&&el.next!==null;if(Yt=0,bl=el=Y=null,$u=!1,Wa=0,ra=null,t)throw Error(y(300));l===null||pl||(l=l.dependencies,l!==null&&Lu(l)&&(pl=!0))}function Rs(l,t,e,a){Y=l;var u=0;do{if(oa&&(ra=null),Wa=0,oa=!1,25<=u)throw Error(y(301));if(u+=1,bl=el=null,l.updateQueue!=null){var n=l.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}S.H=vo,n=t(e,a)}while(oa);return n}function Yd(){var l=S.H,t=l.useState()[0];return t=typeof t.then=="function"?Fa(t):t,l=l.useState()[0],(el!==null?el.memoizedState:null)!==l&&(Y.flags|=1024),t}function Li(){var l=Iu!==0;return Iu=0,l}function Zi(l,t,e){t.updateQueue=l.updateQueue,t.flags&=-2053,l.lanes&=~e}function Vi(l){if($u){for(l=l.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}$u=!1}Yt=0,bl=el=Y=null,oa=!1,Wa=Iu=0,ra=null}function ql(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bl===null?Y.memoizedState=bl=l:bl=bl.next=l,bl}function gl(){if(el===null){var l=Y.alternate;l=l!==null?l.memoizedState:null}else l=el.next;var t=bl===null?Y.memoizedState:bl.next;if(t!==null)bl=t,el=l;else{if(l===null)throw Y.alternate===null?Error(y(467)):Error(y(310));el=l,l={memoizedState:el.memoizedState,baseState:el.baseState,baseQueue:el.baseQueue,queue:el.queue,next:null},bl===null?Y.memoizedState=bl=l:bl=bl.next=l}return bl}function Pu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fa(l){var t=Wa;return Wa+=1,ra===null&&(ra=[]),l=Ts(ra,l,t),t=Y,(bl===null?t.memoizedState:bl.next)===null&&(t=t.alternate,S.H=t===null||t.memoizedState===null?yo:ec),l}function ln(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return Fa(l);if(l.$$typeof===Cl)return Ol(l)}throw Error(y(438,String(l)))}function wi(l){var t=null,e=Y.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var a=Y.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=Pu(),Y.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(l),a=0;a<l;a++)e[a]=Xe;return t.index++,e}function Gt(l,t){return typeof t=="function"?t(l):t}function tn(l){var t=gl();return Ji(t,el,l)}function Ji(l,t,e){var a=l.queue;if(a===null)throw Error(y(311));a.lastRenderedReducer=e;var u=l.baseQueue,n=a.pending;if(n!==null){if(u!==null){var i=u.next;u.next=n.next,n.next=i}t.baseQueue=u=n,a.pending=null}if(n=l.baseState,u===null)l.memoizedState=n;else{t=u.next;var c=i=null,f=null,d=t,g=!1;do{var p=d.lane&-536870913;if(p!==d.lane?(L&p)===p:(Yt&p)===p){var h=d.revertLane;if(h===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),p===na&&(g=!0);else if((Yt&h)===h){d=d.next,h===na&&(g=!0);continue}else p={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},f===null?(c=f=p,i=n):f=f.next=p,Y.lanes|=h,se|=h;p=d.action,Be&&e(n,p),n=d.hasEagerState?d.eagerState:e(n,p)}else h={lane:p,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},f===null?(c=f=h,i=n):f=f.next=h,Y.lanes|=p,se|=p;d=d.next}while(d!==null&&d!==t);if(f===null?i=n:f.next=c,!Pl(n,l.memoizedState)&&(pl=!0,g&&(e=ia,e!==null)))throw e;l.memoizedState=n,l.baseState=i,l.baseQueue=f,a.lastRenderedState=n}return u===null&&(a.lanes=0),[l.memoizedState,a.dispatch]}function Ki(l){var t=gl(),e=t.queue;if(e===null)throw Error(y(311));e.lastRenderedReducer=l;var a=e.dispatch,u=e.pending,n=t.memoizedState;if(u!==null){e.pending=null;var i=u=u.next;do n=l(n,i.action),i=i.next;while(i!==u);Pl(n,t.memoizedState)||(pl=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),e.lastRenderedState=n}return[n,a]}function xs(l,t,e){var a=Y,u=gl(),n=w;if(n){if(e===void 0)throw Error(y(407));e=e()}else e=t();var i=!Pl((el||u).memoizedState,e);if(i&&(u.memoizedState=e,pl=!0),u=u.queue,Fi(Ys.bind(null,a,u,l),[l]),u.getSnapshot!==t||i||bl!==null&&bl.memoizedState.tag&1){if(a.flags|=2048,ma(9,{destroy:void 0},Bs.bind(null,a,u,e,t),null),il===null)throw Error(y(349));n||(Yt&127)!==0||qs(a,t,e)}return e}function qs(l,t,e){l.flags|=16384,l={getSnapshot:t,value:e},t=Y.updateQueue,t===null?(t=Pu(),Y.updateQueue=t,t.stores=[l]):(e=t.stores,e===null?t.stores=[l]:e.push(l))}function Bs(l,t,e,a){t.value=e,t.getSnapshot=a,Gs(t)&&js(l)}function Ys(l,t,e){return e(function(){Gs(t)&&js(l)})}function Gs(l){var t=l.getSnapshot;l=l.value;try{var e=t();return!Pl(l,e)}catch{return!0}}function js(l){var t=Oe(l,2);t!==null&&Kl(t,l,2)}function ki(l){var t=ql();if(typeof l=="function"){var e=l;if(l=e(),Be){Wt(!0);try{e()}finally{Wt(!1)}}}return t.memoizedState=t.baseState=l,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:l},t}function Xs(l,t,e,a){return l.baseState=e,Ji(l,el,typeof a=="function"?a:Gt)}function Gd(l,t,e,a,u){if(un(l))throw Error(y(485));if(l=t.action,l!==null){var n={payload:u,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){n.listeners.push(i)}};S.T!==null?e(!0):n.isTransition=!1,a(n),e=t.pending,e===null?(n.next=t.pending=n,Qs(t,n)):(n.next=e.next,t.pending=e.next=n)}}function Qs(l,t){var e=t.action,a=t.payload,u=l.state;if(t.isTransition){var n=S.T,i={};S.T=i;try{var c=e(u,a),f=S.S;f!==null&&f(i,c),Ls(l,t,c)}catch(d){Wi(l,t,d)}finally{n!==null&&i.types!==null&&(n.types=i.types),S.T=n}}else try{n=e(u,a),Ls(l,t,n)}catch(d){Wi(l,t,d)}}function Ls(l,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){Zs(l,t,a)},function(a){return Wi(l,t,a)}):Zs(l,t,e)}function Zs(l,t,e){t.status="fulfilled",t.value=e,Vs(t),l.state=e,t=l.pending,t!==null&&(e=t.next,e===t?l.pending=null:(e=e.next,t.next=e,Qs(l,e)))}function Wi(l,t,e){var a=l.pending;if(l.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=e,Vs(t),t=t.next;while(t!==a)}l.action=null}function Vs(l){l=l.listeners;for(var t=0;t<l.length;t++)(0,l[t])()}function ws(l,t){return t}function Js(l,t){if(w){var e=il.formState;if(e!==null){l:{var a=Y;if(w){if(cl){t:{for(var u=cl,n=dt;u.nodeType!==8;){if(!n){u=null;break t}if(u=yt(u.nextSibling),u===null){u=null;break t}}n=u.data,u=n==="F!"||n==="F"?u:null}if(u){cl=yt(u.nextSibling),a=u.data==="F!";break l}}le(a)}a=!1}a&&(t=e[0])}}return e=ql(),e.memoizedState=e.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ws,lastRenderedState:t},e.queue=a,e=ro.bind(null,Y,a),a.dispatch=e,a=ki(!1),n=tc.bind(null,Y,!1,a.queue),a=ql(),u={state:t,dispatch:null,action:l,pending:null},a.queue=u,e=Gd.bind(null,Y,u,n,e),u.dispatch=e,a.memoizedState=l,[t,e,!1]}function Ks(l){var t=gl();return ks(t,el,l)}function ks(l,t,e){if(t=Ji(l,t,ws)[0],l=tn(Gt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Fa(t)}catch(i){throw i===ca?wu:i}else a=t;t=gl();var u=t.queue,n=u.dispatch;return e!==t.memoizedState&&(Y.flags|=2048,ma(9,{destroy:void 0},jd.bind(null,u,e),null)),[a,n,l]}function jd(l,t){l.action=t}function Ws(l){var t=gl(),e=el;if(e!==null)return ks(t,e,l);gl(),t=t.memoizedState,e=gl();var a=e.queue.dispatch;return e.memoizedState=l,[t,a,!1]}function ma(l,t,e,a){return l={tag:l,create:e,deps:a,inst:t,next:null},t=Y.updateQueue,t===null&&(t=Pu(),Y.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=l.next=l:(a=e.next,e.next=l,l.next=a,t.lastEffect=l),l}function Fs(){return gl().memoizedState}function en(l,t,e,a){var u=ql();Y.flags|=l,u.memoizedState=ma(1|t,{destroy:void 0},e,a===void 0?null:a)}function an(l,t,e,a){var u=gl();a=a===void 0?null:a;var n=u.memoizedState.inst;el!==null&&a!==null&&Xi(a,el.memoizedState.deps)?u.memoizedState=ma(t,n,e,a):(Y.flags|=l,u.memoizedState=ma(1|t,n,e,a))}function $s(l,t){en(8390656,8,l,t)}function Fi(l,t){an(2048,8,l,t)}function Xd(l){Y.flags|=4;var t=Y.updateQueue;if(t===null)t=Pu(),Y.updateQueue=t,t.events=[l];else{var e=t.events;e===null?t.events=[l]:e.push(l)}}function Is(l){var t=gl().memoizedState;return Xd({ref:t,nextImpl:l}),function(){if((W&2)!==0)throw Error(y(440));return t.impl.apply(void 0,arguments)}}function Ps(l,t){return an(4,2,l,t)}function lo(l,t){return an(4,4,l,t)}function to(l,t){if(typeof t=="function"){l=l();var e=t(l);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return l=l(),t.current=l,function(){t.current=null}}function eo(l,t,e){e=e!=null?e.concat([l]):null,an(4,4,to.bind(null,t,l),e)}function $i(){}function ao(l,t){var e=gl();t=t===void 0?null:t;var a=e.memoizedState;return t!==null&&Xi(t,a[1])?a[0]:(e.memoizedState=[l,t],l)}function uo(l,t){var e=gl();t=t===void 0?null:t;var a=e.memoizedState;if(t!==null&&Xi(t,a[1]))return a[0];if(a=l(),Be){Wt(!0);try{l()}finally{Wt(!1)}}return e.memoizedState=[a,t],a}function Ii(l,t,e){return e===void 0||(Yt&1073741824)!==0&&(L&261930)===0?l.memoizedState=t:(l.memoizedState=e,l=ir(),Y.lanes|=l,se|=l,e)}function no(l,t,e,a){return Pl(e,t)?e:sa.current!==null?(l=Ii(l,e,a),Pl(l,t)||(pl=!0),l):(Yt&42)===0||(Yt&1073741824)!==0&&(L&261930)===0?(pl=!0,l.memoizedState=e):(l=ir(),Y.lanes|=l,se|=l,t)}function io(l,t,e,a,u){var n=T.p;T.p=n!==0&&8>n?n:8;var i=S.T,c={};S.T=c,tc(l,!1,t,e);try{var f=u(),d=S.S;if(d!==null&&d(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var g=qd(f,a);$a(l,t,g,nt(l))}else $a(l,t,a,nt(l))}catch(p){$a(l,t,{then:function(){},status:"rejected",reason:p},nt())}finally{T.p=n,i!==null&&c.types!==null&&(i.types=c.types),S.T=i}}function Qd(){}function Pi(l,t,e,a){if(l.tag!==5)throw Error(y(476));var u=co(l).queue;io(l,u,t,x,e===null?Qd:function(){return fo(l),e(a)})}function co(l){var t=l.memoizedState;if(t!==null)return t;t={memoizedState:x,baseState:x,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:x},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:e},next:null},l.memoizedState=t,l=l.alternate,l!==null&&(l.memoizedState=t),t}function fo(l){var t=co(l);t.next===null&&(t=l.alternate.memoizedState),$a(l,t.next.queue,{},nt())}function lc(){return Ol(hu)}function so(){return gl().memoizedState}function oo(){return gl().memoizedState}function Ld(l){for(var t=l.return;t!==null;){switch(t.tag){case 24:case 3:var e=nt();l=ae(e);var a=ue(t,l,e);a!==null&&(Kl(a,t,e),Ja(a,t,e)),t={cache:Ui()},l.payload=t;return}t=t.return}}function Zd(l,t,e){var a=nt();e={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},un(l)?mo(t,e):(e=Si(l,t,e,a),e!==null&&(Kl(e,l,a),ho(e,t,a)))}function ro(l,t,e){var a=nt();$a(l,t,e,a)}function $a(l,t,e,a){var u={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(un(l))mo(t,u);else{var n=l.alternate;if(l.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var i=t.lastRenderedState,c=n(i,e);if(u.hasEagerState=!0,u.eagerState=c,Pl(c,i))return Gu(l,t,u,0),il===null&&Yu(),!1}catch{}finally{}if(e=Si(l,t,u,a),e!==null)return Kl(e,l,a),ho(e,t,a),!0}return!1}function tc(l,t,e,a){if(a={lane:2,revertLane:Rc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},un(l)){if(t)throw Error(y(479))}else t=Si(l,e,a,2),t!==null&&Kl(t,l,2)}function un(l){var t=l.alternate;return l===Y||t!==null&&t===Y}function mo(l,t){oa=$u=!0;var e=l.pending;e===null?t.next=t:(t.next=e.next,e.next=t),l.pending=t}function ho(l,t,e){if((e&4194048)!==0){var a=t.lanes;a&=l.pendingLanes,e|=a,t.lanes=e,Sf(l,e)}}var Ia={readContext:Ol,use:ln,useCallback:ml,useContext:ml,useEffect:ml,useImperativeHandle:ml,useLayoutEffect:ml,useInsertionEffect:ml,useMemo:ml,useReducer:ml,useRef:ml,useState:ml,useDebugValue:ml,useDeferredValue:ml,useTransition:ml,useSyncExternalStore:ml,useId:ml,useHostTransitionStatus:ml,useFormState:ml,useActionState:ml,useOptimistic:ml,useMemoCache:ml,useCacheRefresh:ml};Ia.useEffectEvent=ml;var yo={readContext:Ol,use:ln,useCallback:function(l,t){return ql().memoizedState=[l,t===void 0?null:t],l},useContext:Ol,useEffect:$s,useImperativeHandle:function(l,t,e){e=e!=null?e.concat([l]):null,en(4194308,4,to.bind(null,t,l),e)},useLayoutEffect:function(l,t){return en(4194308,4,l,t)},useInsertionEffect:function(l,t){en(4,2,l,t)},useMemo:function(l,t){var e=ql();t=t===void 0?null:t;var a=l();if(Be){Wt(!0);try{l()}finally{Wt(!1)}}return e.memoizedState=[a,t],a},useReducer:function(l,t,e){var a=ql();if(e!==void 0){var u=e(t);if(Be){Wt(!0);try{e(t)}finally{Wt(!1)}}}else u=t;return a.memoizedState=a.baseState=u,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:u},a.queue=l,l=l.dispatch=Zd.bind(null,Y,l),[a.memoizedState,l]},useRef:function(l){var t=ql();return l={current:l},t.memoizedState=l},useState:function(l){l=ki(l);var t=l.queue,e=ro.bind(null,Y,t);return t.dispatch=e,[l.memoizedState,e]},useDebugValue:$i,useDeferredValue:function(l,t){var e=ql();return Ii(e,l,t)},useTransition:function(){var l=ki(!1);return l=io.bind(null,Y,l.queue,!0,!1),ql().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,t,e){var a=Y,u=ql();if(w){if(e===void 0)throw Error(y(407));e=e()}else{if(e=t(),il===null)throw Error(y(349));(L&127)!==0||qs(a,t,e)}u.memoizedState=e;var n={value:e,getSnapshot:t};return u.queue=n,$s(Ys.bind(null,a,n,l),[l]),a.flags|=2048,ma(9,{destroy:void 0},Bs.bind(null,a,n,e,t),null),e},useId:function(){var l=ql(),t=il.identifierPrefix;if(w){var e=Mt,a=zt;e=(a&~(1<<32-Il(a)-1)).toString(32)+e,t="_"+t+"R_"+e,e=Iu++,0<e&&(t+="H"+e.toString(32)),t+="_"}else e=Bd++,t="_"+t+"r_"+e.toString(32)+"_";return l.memoizedState=t},useHostTransitionStatus:lc,useFormState:Js,useActionState:Js,useOptimistic:function(l){var t=ql();t.memoizedState=t.baseState=l;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=tc.bind(null,Y,!0,e),e.dispatch=t,[l,t]},useMemoCache:wi,useCacheRefresh:function(){return ql().memoizedState=Ld.bind(null,Y)},useEffectEvent:function(l){var t=ql(),e={impl:l};return t.memoizedState=e,function(){if((W&2)!==0)throw Error(y(440));return e.impl.apply(void 0,arguments)}}},ec={readContext:Ol,use:ln,useCallback:ao,useContext:Ol,useEffect:Fi,useImperativeHandle:eo,useInsertionEffect:Ps,useLayoutEffect:lo,useMemo:uo,useReducer:tn,useRef:Fs,useState:function(){return tn(Gt)},useDebugValue:$i,useDeferredValue:function(l,t){var e=gl();return no(e,el.memoizedState,l,t)},useTransition:function(){var l=tn(Gt)[0],t=gl().memoizedState;return[typeof l=="boolean"?l:Fa(l),t]},useSyncExternalStore:xs,useId:so,useHostTransitionStatus:lc,useFormState:Ks,useActionState:Ks,useOptimistic:function(l,t){var e=gl();return Xs(e,el,l,t)},useMemoCache:wi,useCacheRefresh:oo};ec.useEffectEvent=Is;var vo={readContext:Ol,use:ln,useCallback:ao,useContext:Ol,useEffect:Fi,useImperativeHandle:eo,useInsertionEffect:Ps,useLayoutEffect:lo,useMemo:uo,useReducer:Ki,useRef:Fs,useState:function(){return Ki(Gt)},useDebugValue:$i,useDeferredValue:function(l,t){var e=gl();return el===null?Ii(e,l,t):no(e,el.memoizedState,l,t)},useTransition:function(){var l=Ki(Gt)[0],t=gl().memoizedState;return[typeof l=="boolean"?l:Fa(l),t]},useSyncExternalStore:xs,useId:so,useHostTransitionStatus:lc,useFormState:Ws,useActionState:Ws,useOptimistic:function(l,t){var e=gl();return el!==null?Xs(e,el,l,t):(e.baseState=l,[l,e.queue.dispatch])},useMemoCache:wi,useCacheRefresh:oo};vo.useEffectEvent=Is;function ac(l,t,e,a){t=l.memoizedState,e=e(a,t),e=e==null?t:R({},t,e),l.memoizedState=e,l.lanes===0&&(l.updateQueue.baseState=e)}var uc={enqueueSetState:function(l,t,e){l=l._reactInternals;var a=nt(),u=ae(a);u.payload=t,e!=null&&(u.callback=e),t=ue(l,u,a),t!==null&&(Kl(t,l,a),Ja(t,l,a))},enqueueReplaceState:function(l,t,e){l=l._reactInternals;var a=nt(),u=ae(a);u.tag=1,u.payload=t,e!=null&&(u.callback=e),t=ue(l,u,a),t!==null&&(Kl(t,l,a),Ja(t,l,a))},enqueueForceUpdate:function(l,t){l=l._reactInternals;var e=nt(),a=ae(e);a.tag=2,t!=null&&(a.callback=t),t=ue(l,a,e),t!==null&&(Kl(t,l,e),Ja(t,l,e))}};function go(l,t,e,a,u,n,i){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(a,n,i):t.prototype&&t.prototype.isPureReactComponent?!Ga(e,a)||!Ga(u,n):!0}function So(l,t,e,a){l=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,a),t.state!==l&&uc.enqueueReplaceState(t,t.state,null)}function Ye(l,t){var e=t;if("ref"in t){e={};for(var a in t)a!=="ref"&&(e[a]=t[a])}if(l=l.defaultProps){e===t&&(e=R({},e));for(var u in l)e[u]===void 0&&(e[u]=l[u])}return e}function bo(l){Bu(l)}function po(l){console.error(l)}function Ao(l){Bu(l)}function nn(l,t){try{var e=l.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Eo(l,t,e){try{var a=l.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function nc(l,t,e){return e=ae(e),e.tag=3,e.payload={element:null},e.callback=function(){nn(l,t)},e}function To(l){return l=ae(l),l.tag=3,l}function zo(l,t,e,a){var u=e.type.getDerivedStateFromError;if(typeof u=="function"){var n=a.value;l.payload=function(){return u(n)},l.callback=function(){Eo(t,e,a)}}var i=e.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(l.callback=function(){Eo(t,e,a),typeof u!="function"&&(oe===null?oe=new Set([this]):oe.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Vd(l,t,e,a,u){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=e.alternate,t!==null&&ua(t,e,u,!0),e=tt.current,e!==null){switch(e.tag){case 31:case 13:return ht===null?Sn():e.alternate===null&&dl===0&&(dl=3),e.flags&=-257,e.flags|=65536,e.lanes=u,a===Ju?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([a]):t.add(a),Cc(l,a,u)),!1;case 22:return e.flags|=65536,a===Ju?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([a]):e.add(a)),Cc(l,a,u)),!1}throw Error(y(435,e.tag))}return Cc(l,a,u),Sn(),!1}if(w)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,a!==zi&&(l=Error(y(422),{cause:a}),Qa(ot(l,e)))):(a!==zi&&(t=Error(y(423),{cause:a}),Qa(ot(t,e))),l=l.current.alternate,l.flags|=65536,u&=-u,l.lanes|=u,a=ot(a,e),u=nc(l.stateNode,a,u),qi(l,u),dl!==4&&(dl=2)),!1;var n=Error(y(520),{cause:a});if(n=ot(n,e),iu===null?iu=[n]:iu.push(n),dl!==4&&(dl=2),t===null)return!0;a=ot(a,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,l=u&-u,e.lanes|=l,l=nc(e.stateNode,a,l),qi(e,l),!1;case 1:if(t=e.type,n=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(oe===null||!oe.has(n))))return e.flags|=65536,u&=-u,e.lanes|=u,u=To(u),zo(u,l,e,a),qi(e,u),!1}e=e.return}while(e!==null);return!1}var ic=Error(y(461)),pl=!1;function Dl(l,t,e,a){t.child=l===null?Os(t,null,e,a):qe(t,l.child,e,a)}function Mo(l,t,e,a,u){e=e.render;var n=t.ref;if("ref"in a){var i={};for(var c in a)c!=="ref"&&(i[c]=a[c])}else i=a;return Ne(t),a=Qi(l,t,e,i,n,u),c=Li(),l!==null&&!pl?(Zi(l,t,u),jt(l,t,u)):(w&&c&&Ei(t),t.flags|=1,Dl(l,t,a,u),t.child)}function _o(l,t,e,a,u){if(l===null){var n=e.type;return typeof n=="function"&&!bi(n)&&n.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=n,Oo(l,t,n,a,u)):(l=Xu(e.type,null,a,t,t.mode,u),l.ref=t.ref,l.return=t,t.child=l)}if(n=l.child,!hc(l,u)){var i=n.memoizedProps;if(e=e.compare,e=e!==null?e:Ga,e(i,a)&&l.ref===t.ref)return jt(l,t,u)}return t.flags|=1,l=Rt(n,a),l.ref=t.ref,l.return=t,t.child=l}function Oo(l,t,e,a,u){if(l!==null){var n=l.memoizedProps;if(Ga(n,a)&&l.ref===t.ref)if(pl=!1,t.pendingProps=a=n,hc(l,u))(l.flags&131072)!==0&&(pl=!0);else return t.lanes=l.lanes,jt(l,t,u)}return cc(l,t,e,a,u)}function Do(l,t,e,a){var u=a.children,n=l!==null?l.memoizedState:null;if(l===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(n=n!==null?n.baseLanes|e:e,l!==null){for(a=t.child=l.child,u=0;a!==null;)u=u|a.lanes|a.childLanes,a=a.sibling;a=u&~n}else a=0,t.child=null;return Uo(l,t,n,e,a)}if((e&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},l!==null&&Vu(t,n!==null?n.cachePool:null),n!==null?Cs(t,n):Yi(),Ns(t);else return a=t.lanes=536870912,Uo(l,t,n!==null?n.baseLanes|e:e,e,a)}else n!==null?(Vu(t,n.cachePool),Cs(t,n),ie(),t.memoizedState=null):(l!==null&&Vu(t,null),Yi(),ie());return Dl(l,t,u,e),t.child}function Pa(l,t){return l!==null&&l.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uo(l,t,e,a,u){var n=Ni();return n=n===null?null:{parent:Sl._currentValue,pool:n},t.memoizedState={baseLanes:e,cachePool:n},l!==null&&Vu(t,null),Yi(),Ns(t),l!==null&&ua(l,t,a,!0),t.childLanes=u,null}function cn(l,t){return t=sn({mode:t.mode,children:t.children},l.mode),t.ref=l.ref,l.child=t,t.return=l,t}function Co(l,t,e){return qe(t,l.child,null,e),l=cn(t,t.pendingProps),l.flags|=2,et(t),t.memoizedState=null,l}function wd(l,t,e){var a=t.pendingProps,u=(t.flags&128)!==0;if(t.flags&=-129,l===null){if(w){if(a.mode==="hidden")return l=cn(t,a),t.lanes=536870912,Pa(null,l);if(ji(t),(l=cl)?(l=Lr(l,dt),l=l!==null&&l.data==="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:It!==null?{id:zt,overflow:Mt}:null,retryLane:536870912,hydrationErrors:null},e=ms(l),e.return=t,t.child=e,_l=t,cl=null)):l=null,l===null)throw le(t);return t.lanes=536870912,null}return cn(t,a)}var n=l.memoizedState;if(n!==null){var i=n.dehydrated;if(ji(t),u)if(t.flags&256)t.flags&=-257,t=Co(l,t,e);else if(t.memoizedState!==null)t.child=l.child,t.flags|=128,t=null;else throw Error(y(558));else if(pl||ua(l,t,e,!1),u=(e&l.childLanes)!==0,pl||u){if(a=il,a!==null&&(i=bf(a,e),i!==0&&i!==n.retryLane))throw n.retryLane=i,Oe(l,i),Kl(a,l,i),ic;Sn(),t=Co(l,t,e)}else l=n.treeContext,cl=yt(i.nextSibling),_l=t,w=!0,Pt=null,dt=!1,l!==null&&ys(t,l),t=cn(t,a),t.flags|=4096;return t}return l=Rt(l.child,{mode:a.mode,children:a.children}),l.ref=t.ref,t.child=l,l.return=t,l}function fn(l,t){var e=t.ref;if(e===null)l!==null&&l.ref!==null&&(t.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(y(284));(l===null||l.ref!==e)&&(t.flags|=4194816)}}function cc(l,t,e,a,u){return Ne(t),e=Qi(l,t,e,a,void 0,u),a=Li(),l!==null&&!pl?(Zi(l,t,u),jt(l,t,u)):(w&&a&&Ei(t),t.flags|=1,Dl(l,t,e,u),t.child)}function No(l,t,e,a,u,n){return Ne(t),t.updateQueue=null,e=Rs(t,a,e,u),Hs(l),a=Li(),l!==null&&!pl?(Zi(l,t,n),jt(l,t,n)):(w&&a&&Ei(t),t.flags|=1,Dl(l,t,e,n),t.child)}function Ho(l,t,e,a,u){if(Ne(t),t.stateNode===null){var n=la,i=e.contextType;typeof i=="object"&&i!==null&&(n=Ol(i)),n=new e(a,n),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=uc,t.stateNode=n,n._reactInternals=t,n=t.stateNode,n.props=a,n.state=t.memoizedState,n.refs={},Ri(t),i=e.contextType,n.context=typeof i=="object"&&i!==null?Ol(i):la,n.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(ac(t,e,i,a),n.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(i=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),i!==n.state&&uc.enqueueReplaceState(n,n.state,null),ka(t,a,n,u),Ka(),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(l===null){n=t.stateNode;var c=t.memoizedProps,f=Ye(e,c);n.props=f;var d=n.context,g=e.contextType;i=la,typeof g=="object"&&g!==null&&(i=Ol(g));var p=e.getDerivedStateFromProps;g=typeof p=="function"||typeof n.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,g||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c||d!==i)&&So(t,n,a,i),ee=!1;var h=t.memoizedState;n.state=h,ka(t,a,n,u),Ka(),d=t.memoizedState,c||h!==d||ee?(typeof p=="function"&&(ac(t,e,p,a),d=t.memoizedState),(f=ee||go(t,e,f,a,h,d,i))?(g||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=d),n.props=a,n.state=d,n.context=i,a=f):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{n=t.stateNode,xi(l,t),i=t.memoizedProps,g=Ye(e,i),n.props=g,p=t.pendingProps,h=n.context,d=e.contextType,f=la,typeof d=="object"&&d!==null&&(f=Ol(d)),c=e.getDerivedStateFromProps,(d=typeof c=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(i!==p||h!==f)&&So(t,n,a,f),ee=!1,h=t.memoizedState,n.state=h,ka(t,a,n,u),Ka();var v=t.memoizedState;i!==p||h!==v||ee||l!==null&&l.dependencies!==null&&Lu(l.dependencies)?(typeof c=="function"&&(ac(t,e,c,a),v=t.memoizedState),(g=ee||go(t,e,g,a,h,v,f)||l!==null&&l.dependencies!==null&&Lu(l.dependencies))?(d||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(a,v,f),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(a,v,f)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||i===l.memoizedProps&&h===l.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&h===l.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=v),n.props=a,n.state=v,n.context=f,a=g):(typeof n.componentDidUpdate!="function"||i===l.memoizedProps&&h===l.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&h===l.memoizedState||(t.flags|=1024),a=!1)}return n=a,fn(l,t),a=(t.flags&128)!==0,n||a?(n=t.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:n.render(),t.flags|=1,l!==null&&a?(t.child=qe(t,l.child,null,u),t.child=qe(t,null,e,u)):Dl(l,t,e,u),t.memoizedState=n.state,l=t.child):l=jt(l,t,u),l}function Ro(l,t,e,a){return Ue(),t.flags|=256,Dl(l,t,e,a),t.child}var fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sc(l){return{baseLanes:l,cachePool:As()}}function oc(l,t,e){return l=l!==null?l.childLanes&~e:0,t&&(l|=ut),l}function xo(l,t,e){var a=t.pendingProps,u=!1,n=(t.flags&128)!==0,i;if((i=n)||(i=l!==null&&l.memoizedState===null?!1:(vl.current&2)!==0),i&&(u=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,l===null){if(w){if(u?ne(t):ie(),(l=cl)?(l=Lr(l,dt),l=l!==null&&l.data!=="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:It!==null?{id:zt,overflow:Mt}:null,retryLane:536870912,hydrationErrors:null},e=ms(l),e.return=t,t.child=e,_l=t,cl=null)):l=null,l===null)throw le(t);return Jc(l)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,u?(ie(),u=t.mode,c=sn({mode:"hidden",children:c},u),a=De(a,u,e,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=sc(e),a.childLanes=oc(l,i,e),t.memoizedState=fc,Pa(null,a)):(ne(t),rc(t,c))}var f=l.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(n)t.flags&256?(ne(t),t.flags&=-257,t=mc(l,t,e)):t.memoizedState!==null?(ie(),t.child=l.child,t.flags|=128,t=null):(ie(),c=a.fallback,u=t.mode,a=sn({mode:"visible",children:a.children},u),c=De(c,u,e,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,qe(t,l.child,null,e),a=t.child,a.memoizedState=sc(e),a.childLanes=oc(l,i,e),t.memoizedState=fc,t=Pa(null,a));else if(ne(t),Jc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var d=i.dgst;i=d,a=Error(y(419)),a.stack="",a.digest=i,Qa({value:a,source:null,stack:null}),t=mc(l,t,e)}else if(pl||ua(l,t,e,!1),i=(e&l.childLanes)!==0,pl||i){if(i=il,i!==null&&(a=bf(i,e),a!==0&&a!==f.retryLane))throw f.retryLane=a,Oe(l,a),Kl(i,l,a),ic;wc(c)||Sn(),t=mc(l,t,e)}else wc(c)?(t.flags|=192,t.child=l.child,t=null):(l=f.treeContext,cl=yt(c.nextSibling),_l=t,w=!0,Pt=null,dt=!1,l!==null&&ys(t,l),t=rc(t,a.children),t.flags|=4096);return t}return u?(ie(),c=a.fallback,u=t.mode,f=l.child,d=f.sibling,a=Rt(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&65011712,d!==null?c=Rt(d,c):(c=De(c,u,e,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,Pa(null,a),a=t.child,c=l.child.memoizedState,c===null?c=sc(e):(u=c.cachePool,u!==null?(f=Sl._currentValue,u=u.parent!==f?{parent:f,pool:f}:u):u=As(),c={baseLanes:c.baseLanes|e,cachePool:u}),a.memoizedState=c,a.childLanes=oc(l,i,e),t.memoizedState=fc,Pa(l.child,a)):(ne(t),e=l.child,l=e.sibling,e=Rt(e,{mode:"visible",children:a.children}),e.return=t,e.sibling=null,l!==null&&(i=t.deletions,i===null?(t.deletions=[l],t.flags|=16):i.push(l)),t.child=e,t.memoizedState=null,e)}function rc(l,t){return t=sn({mode:"visible",children:t},l.mode),t.return=l,l.child=t}function sn(l,t){return l=lt(22,l,null,t),l.lanes=0,l}function mc(l,t,e){return qe(t,l.child,null,e),l=rc(t,t.pendingProps.children),l.flags|=2,t.memoizedState=null,l}function qo(l,t,e){l.lanes|=t;var a=l.alternate;a!==null&&(a.lanes|=t),Oi(l.return,t,e)}function dc(l,t,e,a,u,n){var i=l.memoizedState;i===null?l.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:e,tailMode:u,treeForkCount:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=e,i.tailMode=u,i.treeForkCount=n)}function Bo(l,t,e){var a=t.pendingProps,u=a.revealOrder,n=a.tail;a=a.children;var i=vl.current,c=(i&2)!==0;if(c?(i=i&1|2,t.flags|=128):i&=1,z(vl,i),Dl(l,t,a,e),a=w?Xa:0,!c&&l!==null&&(l.flags&128)!==0)l:for(l=t.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&qo(l,e,t);else if(l.tag===19)qo(l,e,t);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break l;for(;l.sibling===null;){if(l.return===null||l.return===t)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}switch(u){case"forwards":for(e=t.child,u=null;e!==null;)l=e.alternate,l!==null&&Fu(l)===null&&(u=e),e=e.sibling;e=u,e===null?(u=t.child,t.child=null):(u=e.sibling,e.sibling=null),dc(t,!1,u,e,n,a);break;case"backwards":case"unstable_legacy-backwards":for(e=null,u=t.child,t.child=null;u!==null;){if(l=u.alternate,l!==null&&Fu(l)===null){t.child=u;break}l=u.sibling,u.sibling=e,e=u,u=l}dc(t,!0,e,null,n,a);break;case"together":dc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function jt(l,t,e){if(l!==null&&(t.dependencies=l.dependencies),se|=t.lanes,(e&t.childLanes)===0)if(l!==null){if(ua(l,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(l!==null&&t.child!==l.child)throw Error(y(153));if(t.child!==null){for(l=t.child,e=Rt(l,l.pendingProps),t.child=e,e.return=t;l.sibling!==null;)l=l.sibling,e=e.sibling=Rt(l,l.pendingProps),e.return=t;e.sibling=null}return t.child}function hc(l,t){return(l.lanes&t)!==0?!0:(l=l.dependencies,!!(l!==null&&Lu(l)))}function Jd(l,t,e){switch(t.tag){case 3:xl(t,t.stateNode.containerInfo),te(t,Sl,l.memoizedState.cache),Ue();break;case 27:case 5:Ma(t);break;case 4:xl(t,t.stateNode.containerInfo);break;case 10:te(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ji(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ne(t),t.flags|=128,null):(e&t.child.childLanes)!==0?xo(l,t,e):(ne(t),l=jt(l,t,e),l!==null?l.sibling:null);ne(t);break;case 19:var u=(l.flags&128)!==0;if(a=(e&t.childLanes)!==0,a||(ua(l,t,e,!1),a=(e&t.childLanes)!==0),u){if(a)return Bo(l,t,e);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),z(vl,vl.current),a)break;return null;case 22:return t.lanes=0,Do(l,t,e,t.pendingProps);case 24:te(t,Sl,l.memoizedState.cache)}return jt(l,t,e)}function Yo(l,t,e){if(l!==null)if(l.memoizedProps!==t.pendingProps)pl=!0;else{if(!hc(l,e)&&(t.flags&128)===0)return pl=!1,Jd(l,t,e);pl=(l.flags&131072)!==0}else pl=!1,w&&(t.flags&1048576)!==0&&hs(t,Xa,t.index);switch(t.lanes=0,t.tag){case 16:l:{var a=t.pendingProps;if(l=Re(t.elementType),t.type=l,typeof l=="function")bi(l)?(a=Ye(l,a),t.tag=1,t=Ho(null,t,l,a,e)):(t.tag=0,t=cc(null,t,l,a,e));else{if(l!=null){var u=l.$$typeof;if(u===it){t.tag=11,t=Mo(null,t,l,a,e);break l}else if(u===V){t.tag=14,t=_o(null,t,l,a,e);break l}}throw t=Ut(l)||l,Error(y(306,t,""))}}return t;case 0:return cc(l,t,t.type,t.pendingProps,e);case 1:return a=t.type,u=Ye(a,t.pendingProps),Ho(l,t,a,u,e);case 3:l:{if(xl(t,t.stateNode.containerInfo),l===null)throw Error(y(387));a=t.pendingProps;var n=t.memoizedState;u=n.element,xi(l,t),ka(t,a,null,e);var i=t.memoizedState;if(a=i.cache,te(t,Sl,a),a!==n.cache&&Di(t,[Sl],e,!0),Ka(),a=i.element,n.isDehydrated)if(n={element:a,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){t=Ro(l,t,a,e);break l}else if(a!==u){u=ot(Error(y(424)),t),Qa(u),t=Ro(l,t,a,e);break l}else{switch(l=t.stateNode.containerInfo,l.nodeType){case 9:l=l.body;break;default:l=l.nodeName==="HTML"?l.ownerDocument.body:l}for(cl=yt(l.firstChild),_l=t,w=!0,Pt=null,dt=!0,e=Os(t,null,a,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(Ue(),a===u){t=jt(l,t,e);break l}Dl(l,t,a,e)}t=t.child}return t;case 26:return fn(l,t),l===null?(e=kr(t.type,null,t.pendingProps,null))?t.memoizedState=e:w||(e=t.type,l=t.pendingProps,a=Mn(j.current).createElement(e),a[Ml]=t,a[Ql]=l,Ul(a,e,l),Tl(a),t.stateNode=a):t.memoizedState=kr(t.type,l.memoizedProps,t.pendingProps,l.memoizedState),null;case 27:return Ma(t),l===null&&w&&(a=t.stateNode=wr(t.type,t.pendingProps,j.current),_l=t,dt=!0,u=cl,he(t.type)?(Kc=u,cl=yt(a.firstChild)):cl=u),Dl(l,t,t.pendingProps.children,e),fn(l,t),l===null&&(t.flags|=4194304),t.child;case 5:return l===null&&w&&((u=a=cl)&&(a=Eh(a,t.type,t.pendingProps,dt),a!==null?(t.stateNode=a,_l=t,cl=yt(a.firstChild),dt=!1,u=!0):u=!1),u||le(t)),Ma(t),u=t.type,n=t.pendingProps,i=l!==null?l.memoizedProps:null,a=n.children,Lc(u,n)?a=null:i!==null&&Lc(u,i)&&(t.flags|=32),t.memoizedState!==null&&(u=Qi(l,t,Yd,null,null,e),hu._currentValue=u),fn(l,t),Dl(l,t,a,e),t.child;case 6:return l===null&&w&&((l=e=cl)&&(e=Th(e,t.pendingProps,dt),e!==null?(t.stateNode=e,_l=t,cl=null,l=!0):l=!1),l||le(t)),null;case 13:return xo(l,t,e);case 4:return xl(t,t.stateNode.containerInfo),a=t.pendingProps,l===null?t.child=qe(t,null,a,e):Dl(l,t,a,e),t.child;case 11:return Mo(l,t,t.type,t.pendingProps,e);case 7:return Dl(l,t,t.pendingProps,e),t.child;case 8:return Dl(l,t,t.pendingProps.children,e),t.child;case 12:return Dl(l,t,t.pendingProps.children,e),t.child;case 10:return a=t.pendingProps,te(t,t.type,a.value),Dl(l,t,a.children,e),t.child;case 9:return u=t.type._context,a=t.pendingProps.children,Ne(t),u=Ol(u),a=a(u),t.flags|=1,Dl(l,t,a,e),t.child;case 14:return _o(l,t,t.type,t.pendingProps,e);case 15:return Oo(l,t,t.type,t.pendingProps,e);case 19:return Bo(l,t,e);case 31:return wd(l,t,e);case 22:return Do(l,t,e,t.pendingProps);case 24:return Ne(t),a=Ol(Sl),l===null?(u=Ni(),u===null&&(u=il,n=Ui(),u.pooledCache=n,n.refCount++,n!==null&&(u.pooledCacheLanes|=e),u=n),t.memoizedState={parent:a,cache:u},Ri(t),te(t,Sl,u)):((l.lanes&e)!==0&&(xi(l,t),ka(t,null,null,e),Ka()),u=l.memoizedState,n=t.memoizedState,u.parent!==a?(u={parent:a,cache:a},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),te(t,Sl,a)):(a=n.cache,te(t,Sl,a),a!==u.cache&&Di(t,[Sl],e,!0))),Dl(l,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(y(156,t.tag))}function Xt(l){l.flags|=4}function yc(l,t,e,a,u){if((t=(l.mode&32)!==0)&&(t=!1),t){if(l.flags|=16777216,(u&335544128)===u)if(l.stateNode.complete)l.flags|=8192;else if(or())l.flags|=8192;else throw xe=Ju,Hi}else l.flags&=-16777217}function Go(l,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!Pr(t))if(or())l.flags|=8192;else throw xe=Ju,Hi}function on(l,t){t!==null&&(l.flags|=4),l.flags&16384&&(t=l.tag!==22?vf():536870912,l.lanes|=t,va|=t)}function lu(l,t){if(!w)switch(l.tailMode){case"hidden":t=l.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?l.tail=null:e.sibling=null;break;case"collapsed":e=l.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t||l.tail===null?l.tail=null:l.tail.sibling=null:a.sibling=null}}function fl(l){var t=l.alternate!==null&&l.alternate.child===l.child,e=0,a=0;if(t)for(var u=l.child;u!==null;)e|=u.lanes|u.childLanes,a|=u.subtreeFlags&65011712,a|=u.flags&65011712,u.return=l,u=u.sibling;else for(u=l.child;u!==null;)e|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=l,u=u.sibling;return l.subtreeFlags|=a,l.childLanes=e,t}function Kd(l,t,e){var a=t.pendingProps;switch(Ti(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fl(t),null;case 1:return fl(t),null;case 3:return e=t.stateNode,a=null,l!==null&&(a=l.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Bt(Sl),yl(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(l===null||l.child===null)&&(aa(t)?Xt(t):l===null||l.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Mi())),fl(t),null;case 26:var u=t.type,n=t.memoizedState;return l===null?(Xt(t),n!==null?(fl(t),Go(t,n)):(fl(t),yc(t,u,null,a,e))):n?n!==l.memoizedState?(Xt(t),fl(t),Go(t,n)):(fl(t),t.flags&=-16777217):(l=l.memoizedProps,l!==a&&Xt(t),fl(t),yc(t,u,l,a,e)),null;case 27:if(pu(t),e=j.current,u=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==a&&Xt(t);else{if(!a){if(t.stateNode===null)throw Error(y(166));return fl(t),null}l=O.current,aa(t)?vs(t):(l=wr(u,a,e),t.stateNode=l,Xt(t))}return fl(t),null;case 5:if(pu(t),u=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==a&&Xt(t);else{if(!a){if(t.stateNode===null)throw Error(y(166));return fl(t),null}if(n=O.current,aa(t))vs(t);else{var i=Mn(j.current);switch(n){case 1:n=i.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:n=i.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":n=i.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":n=i.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":n=i.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?n.multiple=!0:a.size&&(n.size=a.size);break;default:n=typeof a.is=="string"?i.createElement(u,{is:a.is}):i.createElement(u)}}n[Ml]=t,n[Ql]=a;l:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)n.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break l;for(;i.sibling===null;){if(i.return===null||i.return===t)break l;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=n;l:switch(Ul(n,u,a),u){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break l;case"img":a=!0;break l;default:a=!1}a&&Xt(t)}}return fl(t),yc(t,t.type,l===null?null:l.memoizedProps,t.pendingProps,e),null;case 6:if(l&&t.stateNode!=null)l.memoizedProps!==a&&Xt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(y(166));if(l=j.current,aa(t)){if(l=t.stateNode,e=t.memoizedProps,a=null,u=_l,u!==null)switch(u.tag){case 27:case 5:a=u.memoizedProps}l[Ml]=t,l=!!(l.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||xr(l.nodeValue,e)),l||le(t,!0)}else l=Mn(l).createTextNode(a),l[Ml]=t,t.stateNode=l}return fl(t),null;case 31:if(e=t.memoizedState,l===null||l.memoizedState!==null){if(a=aa(t),e!==null){if(l===null){if(!a)throw Error(y(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(y(557));l[Ml]=t}else Ue(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;fl(t),l=!1}else e=Mi(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=e),l=!0;if(!l)return t.flags&256?(et(t),t):(et(t),null);if((t.flags&128)!==0)throw Error(y(558))}return fl(t),null;case 13:if(a=t.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(u=aa(t),a!==null&&a.dehydrated!==null){if(l===null){if(!u)throw Error(y(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(y(317));u[Ml]=t}else Ue(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;fl(t),u=!1}else u=Mi(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(et(t),t):(et(t),null)}return et(t),(t.flags&128)!==0?(t.lanes=e,t):(e=a!==null,l=l!==null&&l.memoizedState!==null,e&&(a=t.child,u=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(u=a.alternate.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==u&&(a.flags|=2048)),e!==l&&e&&(t.child.flags|=8192),on(t,t.updateQueue),fl(t),null);case 4:return yl(),l===null&&Yc(t.stateNode.containerInfo),fl(t),null;case 10:return Bt(t.type),fl(t),null;case 19:if(A(vl),a=t.memoizedState,a===null)return fl(t),null;if(u=(t.flags&128)!==0,n=a.rendering,n===null)if(u)lu(a,!1);else{if(dl!==0||l!==null&&(l.flags&128)!==0)for(l=t.child;l!==null;){if(n=Fu(l),n!==null){for(t.flags|=128,lu(a,!1),l=n.updateQueue,t.updateQueue=l,on(t,l),t.subtreeFlags=0,l=e,e=t.child;e!==null;)rs(e,l),e=e.sibling;return z(vl,vl.current&1|2),w&&xt(t,a.treeForkCount),t.child}l=l.sibling}a.tail!==null&&Fl()>yn&&(t.flags|=128,u=!0,lu(a,!1),t.lanes=4194304)}else{if(!u)if(l=Fu(n),l!==null){if(t.flags|=128,u=!0,l=l.updateQueue,t.updateQueue=l,on(t,l),lu(a,!0),a.tail===null&&a.tailMode==="hidden"&&!n.alternate&&!w)return fl(t),null}else 2*Fl()-a.renderingStartTime>yn&&e!==536870912&&(t.flags|=128,u=!0,lu(a,!1),t.lanes=4194304);a.isBackwards?(n.sibling=t.child,t.child=n):(l=a.last,l!==null?l.sibling=n:t.child=n,a.last=n)}return a.tail!==null?(l=a.tail,a.rendering=l,a.tail=l.sibling,a.renderingStartTime=Fl(),l.sibling=null,e=vl.current,z(vl,u?e&1|2:e&1),w&&xt(t,a.treeForkCount),l):(fl(t),null);case 22:case 23:return et(t),Gi(),a=t.memoizedState!==null,l!==null?l.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(e&536870912)!==0&&(t.flags&128)===0&&(fl(t),t.subtreeFlags&6&&(t.flags|=8192)):fl(t),e=t.updateQueue,e!==null&&on(t,e.retryQueue),e=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==e&&(t.flags|=2048),l!==null&&A(He),null;case 24:return e=null,l!==null&&(e=l.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),Bt(Sl),fl(t),null;case 25:return null;case 30:return null}throw Error(y(156,t.tag))}function kd(l,t){switch(Ti(t),t.tag){case 1:return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 3:return Bt(Sl),yl(),l=t.flags,(l&65536)!==0&&(l&128)===0?(t.flags=l&-65537|128,t):null;case 26:case 27:case 5:return pu(t),null;case 31:if(t.memoizedState!==null){if(et(t),t.alternate===null)throw Error(y(340));Ue()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 13:if(et(t),l=t.memoizedState,l!==null&&l.dehydrated!==null){if(t.alternate===null)throw Error(y(340));Ue()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 19:return A(vl),null;case 4:return yl(),null;case 10:return Bt(t.type),null;case 22:case 23:return et(t),Gi(),l!==null&&A(He),l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 24:return Bt(Sl),null;case 25:return null;default:return null}}function jo(l,t){switch(Ti(t),t.tag){case 3:Bt(Sl),yl();break;case 26:case 27:case 5:pu(t);break;case 4:yl();break;case 31:t.memoizedState!==null&&et(t);break;case 13:et(t);break;case 19:A(vl);break;case 10:Bt(t.type);break;case 22:case 23:et(t),Gi(),l!==null&&A(He);break;case 24:Bt(Sl)}}function tu(l,t){try{var e=t.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var u=a.next;e=u;do{if((e.tag&l)===l){a=void 0;var n=e.create,i=e.inst;a=n(),i.destroy=a}e=e.next}while(e!==u)}}catch(c){ll(t,t.return,c)}}function ce(l,t,e){try{var a=t.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var n=u.next;a=n;do{if((a.tag&l)===l){var i=a.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,u=t;var f=e,d=c;try{d()}catch(g){ll(u,f,g)}}}a=a.next}while(a!==n)}}catch(g){ll(t,t.return,g)}}function Xo(l){var t=l.updateQueue;if(t!==null){var e=l.stateNode;try{Us(t,e)}catch(a){ll(l,l.return,a)}}}function Qo(l,t,e){e.props=Ye(l.type,l.memoizedProps),e.state=l.memoizedState;try{e.componentWillUnmount()}catch(a){ll(l,t,a)}}function eu(l,t){try{var e=l.ref;if(e!==null){switch(l.tag){case 26:case 27:case 5:var a=l.stateNode;break;case 30:a=l.stateNode;break;default:a=l.stateNode}typeof e=="function"?l.refCleanup=e(a):e.current=a}}catch(u){ll(l,t,u)}}function _t(l,t){var e=l.ref,a=l.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(u){ll(l,t,u)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(u){ll(l,t,u)}else e.current=null}function Lo(l){var t=l.type,e=l.memoizedProps,a=l.stateNode;try{l:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break l;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(u){ll(l,l.return,u)}}function vc(l,t,e){try{var a=l.stateNode;vh(a,l.type,e,t),a[Ql]=t}catch(u){ll(l,l.return,u)}}function Zo(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&he(l.type)||l.tag===4}function gc(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||Zo(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&he(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function Sc(l,t,e){var a=l.tag;if(a===5||a===6)l=l.stateNode,t?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(l,t):(t=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.appendChild(l),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=Nt));else if(a!==4&&(a===27&&he(l.type)&&(e=l.stateNode,t=null),l=l.child,l!==null))for(Sc(l,t,e),l=l.sibling;l!==null;)Sc(l,t,e),l=l.sibling}function rn(l,t,e){var a=l.tag;if(a===5||a===6)l=l.stateNode,t?e.insertBefore(l,t):e.appendChild(l);else if(a!==4&&(a===27&&he(l.type)&&(e=l.stateNode),l=l.child,l!==null))for(rn(l,t,e),l=l.sibling;l!==null;)rn(l,t,e),l=l.sibling}function Vo(l){var t=l.stateNode,e=l.memoizedProps;try{for(var a=l.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);Ul(t,a,e),t[Ml]=l,t[Ql]=e}catch(n){ll(l,l.return,n)}}var Qt=!1,Al=!1,bc=!1,wo=typeof WeakSet=="function"?WeakSet:Set,zl=null;function Wd(l,t){if(l=l.containerInfo,Xc=Hn,l=es(l),mi(l)){if("selectionStart"in l)var e={start:l.selectionStart,end:l.selectionEnd};else l:{e=(e=l.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var u=a.anchorOffset,n=a.focusNode;a=a.focusOffset;try{e.nodeType,n.nodeType}catch{e=null;break l}var i=0,c=-1,f=-1,d=0,g=0,p=l,h=null;t:for(;;){for(var v;p!==e||u!==0&&p.nodeType!==3||(c=i+u),p!==n||a!==0&&p.nodeType!==3||(f=i+a),p.nodeType===3&&(i+=p.nodeValue.length),(v=p.firstChild)!==null;)h=p,p=v;for(;;){if(p===l)break t;if(h===e&&++d===u&&(c=i),h===n&&++g===a&&(f=i),(v=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=v}e=c===-1||f===-1?null:{start:c,end:f}}else e=null}e=e||{start:0,end:0}}else e=null;for(Qc={focusedElem:l,selectionRange:e},Hn=!1,zl=t;zl!==null;)if(t=zl,l=t.child,(t.subtreeFlags&1028)!==0&&l!==null)l.return=t,zl=l;else for(;zl!==null;){switch(t=zl,n=t.alternate,l=t.flags,t.tag){case 0:if((l&4)!==0&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(e=0;e<l.length;e++)u=l[e],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((l&1024)!==0&&n!==null){l=void 0,e=t,u=n.memoizedProps,n=n.memoizedState,a=e.stateNode;try{var M=Ye(e.type,u);l=a.getSnapshotBeforeUpdate(M,n),a.__reactInternalSnapshotBeforeUpdate=l}catch(N){ll(e,e.return,N)}}break;case 3:if((l&1024)!==0){if(l=t.stateNode.containerInfo,e=l.nodeType,e===9)Vc(l);else if(e===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":Vc(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error(y(163))}if(l=t.sibling,l!==null){l.return=t.return,zl=l;break}zl=t.return}}function Jo(l,t,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Zt(l,e),a&4&&tu(5,e);break;case 1:if(Zt(l,e),a&4)if(l=e.stateNode,t===null)try{l.componentDidMount()}catch(i){ll(e,e.return,i)}else{var u=Ye(e.type,t.memoizedProps);t=t.memoizedState;try{l.componentDidUpdate(u,t,l.__reactInternalSnapshotBeforeUpdate)}catch(i){ll(e,e.return,i)}}a&64&&Xo(e),a&512&&eu(e,e.return);break;case 3:if(Zt(l,e),a&64&&(l=e.updateQueue,l!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{Us(l,t)}catch(i){ll(e,e.return,i)}}break;case 27:t===null&&a&4&&Vo(e);case 26:case 5:Zt(l,e),t===null&&a&4&&Lo(e),a&512&&eu(e,e.return);break;case 12:Zt(l,e);break;case 31:Zt(l,e),a&4&&Wo(l,e);break;case 13:Zt(l,e),a&4&&Fo(l,e),a&64&&(l=e.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(e=uh.bind(null,e),zh(l,e))));break;case 22:if(a=e.memoizedState!==null||Qt,!a){t=t!==null&&t.memoizedState!==null||Al,u=Qt;var n=Al;Qt=a,(Al=t)&&!n?Vt(l,e,(e.subtreeFlags&8772)!==0):Zt(l,e),Qt=u,Al=n}break;case 30:break;default:Zt(l,e)}}function Ko(l){var t=l.alternate;t!==null&&(l.alternate=null,Ko(t)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(t=l.stateNode,t!==null&&Wn(t)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var ol=null,Zl=!1;function Lt(l,t,e){for(e=e.child;e!==null;)ko(l,t,e),e=e.sibling}function ko(l,t,e){if($l&&typeof $l.onCommitFiberUnmount=="function")try{$l.onCommitFiberUnmount(_a,e)}catch{}switch(e.tag){case 26:Al||_t(e,t),Lt(l,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Al||_t(e,t);var a=ol,u=Zl;he(e.type)&&(ol=e.stateNode,Zl=!1),Lt(l,t,e),ru(e.stateNode),ol=a,Zl=u;break;case 5:Al||_t(e,t);case 6:if(a=ol,u=Zl,ol=null,Lt(l,t,e),ol=a,Zl=u,ol!==null)if(Zl)try{(ol.nodeType===9?ol.body:ol.nodeName==="HTML"?ol.ownerDocument.body:ol).removeChild(e.stateNode)}catch(n){ll(e,t,n)}else try{ol.removeChild(e.stateNode)}catch(n){ll(e,t,n)}break;case 18:ol!==null&&(Zl?(l=ol,Xr(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.stateNode),za(l)):Xr(ol,e.stateNode));break;case 4:a=ol,u=Zl,ol=e.stateNode.containerInfo,Zl=!0,Lt(l,t,e),ol=a,Zl=u;break;case 0:case 11:case 14:case 15:ce(2,e,t),Al||ce(4,e,t),Lt(l,t,e);break;case 1:Al||(_t(e,t),a=e.stateNode,typeof a.componentWillUnmount=="function"&&Qo(e,t,a)),Lt(l,t,e);break;case 21:Lt(l,t,e);break;case 22:Al=(a=Al)||e.memoizedState!==null,Lt(l,t,e),Al=a;break;default:Lt(l,t,e)}}function Wo(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null))){l=l.dehydrated;try{za(l)}catch(e){ll(t,t.return,e)}}}function Fo(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{za(l)}catch(e){ll(t,t.return,e)}}function Fd(l){switch(l.tag){case 31:case 13:case 19:var t=l.stateNode;return t===null&&(t=l.stateNode=new wo),t;case 22:return l=l.stateNode,t=l._retryCache,t===null&&(t=l._retryCache=new wo),t;default:throw Error(y(435,l.tag))}}function mn(l,t){var e=Fd(l);t.forEach(function(a){if(!e.has(a)){e.add(a);var u=nh.bind(null,l,a);a.then(u,u)}})}function Vl(l,t){var e=t.deletions;if(e!==null)for(var a=0;a<e.length;a++){var u=e[a],n=l,i=t,c=i;l:for(;c!==null;){switch(c.tag){case 27:if(he(c.type)){ol=c.stateNode,Zl=!1;break l}break;case 5:ol=c.stateNode,Zl=!1;break l;case 3:case 4:ol=c.stateNode.containerInfo,Zl=!0;break l}c=c.return}if(ol===null)throw Error(y(160));ko(n,i,u),ol=null,Zl=!1,n=u.alternate,n!==null&&(n.return=null),u.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)$o(t,l),t=t.sibling}var bt=null;function $o(l,t){var e=l.alternate,a=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:Vl(t,l),wl(l),a&4&&(ce(3,l,l.return),tu(3,l),ce(5,l,l.return));break;case 1:Vl(t,l),wl(l),a&512&&(Al||e===null||_t(e,e.return)),a&64&&Qt&&(l=l.updateQueue,l!==null&&(a=l.callbacks,a!==null&&(e=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var u=bt;if(Vl(t,l),wl(l),a&512&&(Al||e===null||_t(e,e.return)),a&4){var n=e!==null?e.memoizedState:null;if(a=l.memoizedState,e===null)if(a===null)if(l.stateNode===null){l:{a=l.type,e=l.memoizedProps,u=u.ownerDocument||u;t:switch(a){case"title":n=u.getElementsByTagName("title")[0],(!n||n[Ua]||n[Ml]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=u.createElement(a),u.head.insertBefore(n,u.querySelector("head > title"))),Ul(n,a,e),n[Ml]=l,Tl(n),a=n;break l;case"link":var i=$r("link","href",u).get(a+(e.href||""));if(i){for(var c=0;c<i.length;c++)if(n=i[c],n.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&n.getAttribute("rel")===(e.rel==null?null:e.rel)&&n.getAttribute("title")===(e.title==null?null:e.title)&&n.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){i.splice(c,1);break t}}n=u.createElement(a),Ul(n,a,e),u.head.appendChild(n);break;case"meta":if(i=$r("meta","content",u).get(a+(e.content||""))){for(c=0;c<i.length;c++)if(n=i[c],n.getAttribute("content")===(e.content==null?null:""+e.content)&&n.getAttribute("name")===(e.name==null?null:e.name)&&n.getAttribute("property")===(e.property==null?null:e.property)&&n.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&n.getAttribute("charset")===(e.charSet==null?null:e.charSet)){i.splice(c,1);break t}}n=u.createElement(a),Ul(n,a,e),u.head.appendChild(n);break;default:throw Error(y(468,a))}n[Ml]=l,Tl(n),a=n}l.stateNode=a}else Ir(u,l.type,l.stateNode);else l.stateNode=Fr(u,a,l.memoizedProps);else n!==a?(n===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):n.count--,a===null?Ir(u,l.type,l.stateNode):Fr(u,a,l.memoizedProps)):a===null&&l.stateNode!==null&&vc(l,l.memoizedProps,e.memoizedProps)}break;case 27:Vl(t,l),wl(l),a&512&&(Al||e===null||_t(e,e.return)),e!==null&&a&4&&vc(l,l.memoizedProps,e.memoizedProps);break;case 5:if(Vl(t,l),wl(l),a&512&&(Al||e===null||_t(e,e.return)),l.flags&32){u=l.stateNode;try{Ke(u,"")}catch(M){ll(l,l.return,M)}}a&4&&l.stateNode!=null&&(u=l.memoizedProps,vc(l,u,e!==null?e.memoizedProps:u)),a&1024&&(bc=!0);break;case 6:if(Vl(t,l),wl(l),a&4){if(l.stateNode===null)throw Error(y(162));a=l.memoizedProps,e=l.stateNode;try{e.nodeValue=a}catch(M){ll(l,l.return,M)}}break;case 3:if(Dn=null,u=bt,bt=_n(t.containerInfo),Vl(t,l),bt=u,wl(l),a&4&&e!==null&&e.memoizedState.isDehydrated)try{za(t.containerInfo)}catch(M){ll(l,l.return,M)}bc&&(bc=!1,Io(l));break;case 4:a=bt,bt=_n(l.stateNode.containerInfo),Vl(t,l),wl(l),bt=a;break;case 12:Vl(t,l),wl(l);break;case 31:Vl(t,l),wl(l),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,mn(l,a)));break;case 13:Vl(t,l),wl(l),l.child.flags&8192&&l.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(hn=Fl()),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,mn(l,a)));break;case 22:u=l.memoizedState!==null;var f=e!==null&&e.memoizedState!==null,d=Qt,g=Al;if(Qt=d||u,Al=g||f,Vl(t,l),Al=g,Qt=d,wl(l),a&8192)l:for(t=l.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,u&&(e===null||f||Qt||Al||Ge(l)),e=null,t=l;;){if(t.tag===5||t.tag===26){if(e===null){f=e=t;try{if(n=f.stateNode,u)i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=f.stateNode;var p=f.memoizedProps.style,h=p!=null&&p.hasOwnProperty("display")?p.display:null;c.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(M){ll(f,f.return,M)}}}else if(t.tag===6){if(e===null){f=t;try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(M){ll(f,f.return,M)}}}else if(t.tag===18){if(e===null){f=t;try{var v=f.stateNode;u?Qr(v,!0):Qr(f.stateNode,!1)}catch(M){ll(f,f.return,M)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===l)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break l;for(;t.sibling===null;){if(t.return===null||t.return===l)break l;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=l.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,mn(l,e))));break;case 19:Vl(t,l),wl(l),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,mn(l,a)));break;case 30:break;case 21:break;default:Vl(t,l),wl(l)}}function wl(l){var t=l.flags;if(t&2){try{for(var e,a=l.return;a!==null;){if(Zo(a)){e=a;break}a=a.return}if(e==null)throw Error(y(160));switch(e.tag){case 27:var u=e.stateNode,n=gc(l);rn(l,n,u);break;case 5:var i=e.stateNode;e.flags&32&&(Ke(i,""),e.flags&=-33);var c=gc(l);rn(l,c,i);break;case 3:case 4:var f=e.stateNode.containerInfo,d=gc(l);Sc(l,d,f);break;default:throw Error(y(161))}}catch(g){ll(l,l.return,g)}l.flags&=-3}t&4096&&(l.flags&=-4097)}function Io(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var t=l;Io(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),l=l.sibling}}function Zt(l,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Jo(l,t.alternate,t),t=t.sibling}function Ge(l){for(l=l.child;l!==null;){var t=l;switch(t.tag){case 0:case 11:case 14:case 15:ce(4,t,t.return),Ge(t);break;case 1:_t(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&Qo(t,t.return,e),Ge(t);break;case 27:ru(t.stateNode);case 26:case 5:_t(t,t.return),Ge(t);break;case 22:t.memoizedState===null&&Ge(t);break;case 30:Ge(t);break;default:Ge(t)}l=l.sibling}}function Vt(l,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,u=l,n=t,i=n.flags;switch(n.tag){case 0:case 11:case 15:Vt(u,n,e),tu(4,n);break;case 1:if(Vt(u,n,e),a=n,u=a.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(d){ll(a,a.return,d)}if(a=n,u=a.updateQueue,u!==null){var c=a.stateNode;try{var f=u.shared.hiddenCallbacks;if(f!==null)for(u.shared.hiddenCallbacks=null,u=0;u<f.length;u++)Ds(f[u],c)}catch(d){ll(a,a.return,d)}}e&&i&64&&Xo(n),eu(n,n.return);break;case 27:Vo(n);case 26:case 5:Vt(u,n,e),e&&a===null&&i&4&&Lo(n),eu(n,n.return);break;case 12:Vt(u,n,e);break;case 31:Vt(u,n,e),e&&i&4&&Wo(u,n);break;case 13:Vt(u,n,e),e&&i&4&&Fo(u,n);break;case 22:n.memoizedState===null&&Vt(u,n,e),eu(n,n.return);break;case 30:break;default:Vt(u,n,e)}t=t.sibling}}function pc(l,t){var e=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==e&&(l!=null&&l.refCount++,e!=null&&La(e))}function Ac(l,t){l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&La(l))}function pt(l,t,e,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Po(l,t,e,a),t=t.sibling}function Po(l,t,e,a){var u=t.flags;switch(t.tag){case 0:case 11:case 15:pt(l,t,e,a),u&2048&&tu(9,t);break;case 1:pt(l,t,e,a);break;case 3:pt(l,t,e,a),u&2048&&(l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&La(l)));break;case 12:if(u&2048){pt(l,t,e,a),l=t.stateNode;try{var n=t.memoizedProps,i=n.id,c=n.onPostCommit;typeof c=="function"&&c(i,t.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(f){ll(t,t.return,f)}}else pt(l,t,e,a);break;case 31:pt(l,t,e,a);break;case 13:pt(l,t,e,a);break;case 23:break;case 22:n=t.stateNode,i=t.alternate,t.memoizedState!==null?n._visibility&2?pt(l,t,e,a):au(l,t):n._visibility&2?pt(l,t,e,a):(n._visibility|=2,da(l,t,e,a,(t.subtreeFlags&10256)!==0||!1)),u&2048&&pc(i,t);break;case 24:pt(l,t,e,a),u&2048&&Ac(t.alternate,t);break;default:pt(l,t,e,a)}}function da(l,t,e,a,u){for(u=u&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var n=l,i=t,c=e,f=a,d=i.flags;switch(i.tag){case 0:case 11:case 15:da(n,i,c,f,u),tu(8,i);break;case 23:break;case 22:var g=i.stateNode;i.memoizedState!==null?g._visibility&2?da(n,i,c,f,u):au(n,i):(g._visibility|=2,da(n,i,c,f,u)),u&&d&2048&&pc(i.alternate,i);break;case 24:da(n,i,c,f,u),u&&d&2048&&Ac(i.alternate,i);break;default:da(n,i,c,f,u)}t=t.sibling}}function au(l,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=l,a=t,u=a.flags;switch(a.tag){case 22:au(e,a),u&2048&&pc(a.alternate,a);break;case 24:au(e,a),u&2048&&Ac(a.alternate,a);break;default:au(e,a)}t=t.sibling}}var uu=8192;function ha(l,t,e){if(l.subtreeFlags&uu)for(l=l.child;l!==null;)lr(l,t,e),l=l.sibling}function lr(l,t,e){switch(l.tag){case 26:ha(l,t,e),l.flags&uu&&l.memoizedState!==null&&Bh(e,bt,l.memoizedState,l.memoizedProps);break;case 5:ha(l,t,e);break;case 3:case 4:var a=bt;bt=_n(l.stateNode.containerInfo),ha(l,t,e),bt=a;break;case 22:l.memoizedState===null&&(a=l.alternate,a!==null&&a.memoizedState!==null?(a=uu,uu=16777216,ha(l,t,e),uu=a):ha(l,t,e));break;default:ha(l,t,e)}}function tr(l){var t=l.alternate;if(t!==null&&(l=t.child,l!==null)){t.child=null;do t=l.sibling,l.sibling=null,l=t;while(l!==null)}}function nu(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var a=t[e];zl=a,ar(a,l)}tr(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)er(l),l=l.sibling}function er(l){switch(l.tag){case 0:case 11:case 15:nu(l),l.flags&2048&&ce(9,l,l.return);break;case 3:nu(l);break;case 12:nu(l);break;case 22:var t=l.stateNode;l.memoizedState!==null&&t._visibility&2&&(l.return===null||l.return.tag!==13)?(t._visibility&=-3,dn(l)):nu(l);break;default:nu(l)}}function dn(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var a=t[e];zl=a,ar(a,l)}tr(l)}for(l=l.child;l!==null;){switch(t=l,t.tag){case 0:case 11:case 15:ce(8,t,t.return),dn(t);break;case 22:e=t.stateNode,e._visibility&2&&(e._visibility&=-3,dn(t));break;default:dn(t)}l=l.sibling}}function ar(l,t){for(;zl!==null;){var e=zl;switch(e.tag){case 0:case 11:case 15:ce(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:La(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,zl=a;else l:for(e=l;zl!==null;){a=zl;var u=a.sibling,n=a.return;if(Ko(a),a===e){zl=null;break l}if(u!==null){u.return=n,zl=u;break l}zl=n}}}var $d={getCacheForType:function(l){var t=Ol(Sl),e=t.data.get(l);return e===void 0&&(e=l(),t.data.set(l,e)),e},cacheSignal:function(){return Ol(Sl).controller.signal}},Id=typeof WeakMap=="function"?WeakMap:Map,W=0,il=null,X=null,L=0,P=0,at=null,fe=!1,ya=!1,Ec=!1,wt=0,dl=0,se=0,je=0,Tc=0,ut=0,va=0,iu=null,Jl=null,zc=!1,hn=0,ur=0,yn=1/0,vn=null,oe=null,El=0,re=null,ga=null,Jt=0,Mc=0,_c=null,nr=null,cu=0,Oc=null;function nt(){return(W&2)!==0&&L!==0?L&-L:S.T!==null?Rc():pf()}function ir(){if(ut===0)if((L&536870912)===0||w){var l=Tu;Tu<<=1,(Tu&3932160)===0&&(Tu=262144),ut=l}else ut=536870912;return l=tt.current,l!==null&&(l.flags|=32),ut}function Kl(l,t,e){(l===il&&(P===2||P===9)||l.cancelPendingCommit!==null)&&(Sa(l,0),me(l,L,ut,!1)),Da(l,e),((W&2)===0||l!==il)&&(l===il&&((W&2)===0&&(je|=e),dl===4&&me(l,L,ut,!1)),Ot(l))}function cr(l,t,e){if((W&6)!==0)throw Error(y(327));var a=!e&&(t&127)===0&&(t&l.expiredLanes)===0||Oa(l,t),u=a?th(l,t):Uc(l,t,!0),n=a;do{if(u===0){ya&&!a&&me(l,t,0,!1);break}else{if(e=l.current.alternate,n&&!Pd(e)){u=Uc(l,t,!1),n=!1;continue}if(u===2){if(n=t,l.errorRecoveryDisabledLanes&n)var i=0;else i=l.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;l:{var c=l;u=iu;var f=c.current.memoizedState.isDehydrated;if(f&&(Sa(c,i).flags|=256),i=Uc(c,i,!1),i!==2){if(Ec&&!f){c.errorRecoveryDisabledLanes|=n,je|=n,u=4;break l}n=Jl,Jl=u,n!==null&&(Jl===null?Jl=n:Jl.push.apply(Jl,n))}u=i}if(n=!1,u!==2)continue}}if(u===1){Sa(l,0),me(l,t,0,!0);break}l:{switch(a=l,n=u,n){case 0:case 1:throw Error(y(345));case 4:if((t&4194048)!==t)break;case 6:me(a,t,ut,!fe);break l;case 2:Jl=null;break;case 3:case 5:break;default:throw Error(y(329))}if((t&62914560)===t&&(u=hn+300-Fl(),10<u)){if(me(a,t,ut,!fe),Mu(a,0,!0)!==0)break l;Jt=t,a.timeoutHandle=Gr(fr.bind(null,a,e,Jl,vn,zc,t,ut,je,va,fe,n,"Throttled",-0,0),u);break l}fr(a,e,Jl,vn,zc,t,ut,je,va,fe,n,null,-0,0)}}break}while(!0);Ot(l)}function fr(l,t,e,a,u,n,i,c,f,d,g,p,h,v){if(l.timeoutHandle=-1,p=t.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Nt},lr(t,n,p);var M=(n&62914560)===n?hn-Fl():(n&4194048)===n?ur-Fl():0;if(M=Yh(p,M),M!==null){Jt=n,l.cancelPendingCommit=M(vr.bind(null,l,t,n,e,a,u,i,c,f,g,p,null,h,v)),me(l,n,i,!d);return}}vr(l,t,n,e,a,u,i,c,f)}function Pd(l){for(var t=l;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var u=e[a],n=u.getSnapshot;u=u.value;try{if(!Pl(n(),u))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function me(l,t,e,a){t&=~Tc,t&=~je,l.suspendedLanes|=t,l.pingedLanes&=~t,a&&(l.warmLanes|=t),a=l.expirationTimes;for(var u=t;0<u;){var n=31-Il(u),i=1<<n;a[n]=-1,u&=~i}e!==0&&gf(l,e,t)}function gn(){return(W&6)===0?(fu(0),!1):!0}function Dc(){if(X!==null){if(P===0)var l=X.return;else l=X,qt=Ce=null,Vi(l),fa=null,Va=0,l=X;for(;l!==null;)jo(l.alternate,l),l=l.return;X=null}}function Sa(l,t){var e=l.timeoutHandle;e!==-1&&(l.timeoutHandle=-1,bh(e)),e=l.cancelPendingCommit,e!==null&&(l.cancelPendingCommit=null,e()),Jt=0,Dc(),il=l,X=e=Rt(l.current,null),L=t,P=0,at=null,fe=!1,ya=Oa(l,t),Ec=!1,va=ut=Tc=je=se=dl=0,Jl=iu=null,zc=!1,(t&8)!==0&&(t|=t&32);var a=l.entangledLanes;if(a!==0)for(l=l.entanglements,a&=t;0<a;){var u=31-Il(a),n=1<<u;t|=l[u],a&=~n}return wt=t,Yu(),e}function sr(l,t){Y=null,S.H=Ia,t===ca||t===wu?(t=zs(),P=3):t===Hi?(t=zs(),P=4):P=t===ic?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,at=t,X===null&&(dl=1,nn(l,ot(t,l.current)))}function or(){var l=tt.current;return l===null?!0:(L&4194048)===L?ht===null:(L&62914560)===L||(L&536870912)!==0?l===ht:!1}function rr(){var l=S.H;return S.H=Ia,l===null?Ia:l}function mr(){var l=S.A;return S.A=$d,l}function Sn(){dl=4,fe||(L&4194048)!==L&&tt.current!==null||(ya=!0),(se&134217727)===0&&(je&134217727)===0||il===null||me(il,L,ut,!1)}function Uc(l,t,e){var a=W;W|=2;var u=rr(),n=mr();(il!==l||L!==t)&&(vn=null,Sa(l,t)),t=!1;var i=dl;l:do try{if(P!==0&&X!==null){var c=X,f=at;switch(P){case 8:Dc(),i=6;break l;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var d=P;if(P=0,at=null,ba(l,c,f,d),e&&ya){i=0;break l}break;default:d=P,P=0,at=null,ba(l,c,f,d)}}lh(),i=dl;break}catch(g){sr(l,g)}while(!0);return t&&l.shellSuspendCounter++,qt=Ce=null,W=a,S.H=u,S.A=n,X===null&&(il=null,L=0,Yu()),i}function lh(){for(;X!==null;)dr(X)}function th(l,t){var e=W;W|=2;var a=rr(),u=mr();il!==l||L!==t?(vn=null,yn=Fl()+500,Sa(l,t)):ya=Oa(l,t);l:do try{if(P!==0&&X!==null){t=X;var n=at;t:switch(P){case 1:P=0,at=null,ba(l,t,n,1);break;case 2:case 9:if(Es(n)){P=0,at=null,hr(t);break}t=function(){P!==2&&P!==9||il!==l||(P=7),Ot(l)},n.then(t,t);break l;case 3:P=7;break l;case 4:P=5;break l;case 7:Es(n)?(P=0,at=null,hr(t)):(P=0,at=null,ba(l,t,n,7));break;case 5:var i=null;switch(X.tag){case 26:i=X.memoizedState;case 5:case 27:var c=X;if(i?Pr(i):c.stateNode.complete){P=0,at=null;var f=c.sibling;if(f!==null)X=f;else{var d=c.return;d!==null?(X=d,bn(d)):X=null}break t}}P=0,at=null,ba(l,t,n,5);break;case 6:P=0,at=null,ba(l,t,n,6);break;case 8:Dc(),dl=6;break l;default:throw Error(y(462))}}eh();break}catch(g){sr(l,g)}while(!0);return qt=Ce=null,S.H=a,S.A=u,W=e,X!==null?0:(il=null,L=0,Yu(),dl)}function eh(){for(;X!==null&&!Mm();)dr(X)}function dr(l){var t=Yo(l.alternate,l,wt);l.memoizedProps=l.pendingProps,t===null?bn(l):X=t}function hr(l){var t=l,e=t.alternate;switch(t.tag){case 15:case 0:t=No(e,t,t.pendingProps,t.type,void 0,L);break;case 11:t=No(e,t,t.pendingProps,t.type.render,t.ref,L);break;case 5:Vi(t);default:jo(e,t),t=X=rs(t,wt),t=Yo(e,t,wt)}l.memoizedProps=l.pendingProps,t===null?bn(l):X=t}function ba(l,t,e,a){qt=Ce=null,Vi(t),fa=null,Va=0;var u=t.return;try{if(Vd(l,u,t,e,L)){dl=1,nn(l,ot(e,l.current)),X=null;return}}catch(n){if(u!==null)throw X=u,n;dl=1,nn(l,ot(e,l.current)),X=null;return}t.flags&32768?(w||a===1?l=!0:ya||(L&536870912)!==0?l=!1:(fe=l=!0,(a===2||a===9||a===3||a===6)&&(a=tt.current,a!==null&&a.tag===13&&(a.flags|=16384))),yr(t,l)):bn(t)}function bn(l){var t=l;do{if((t.flags&32768)!==0){yr(t,fe);return}l=t.return;var e=Kd(t.alternate,t,wt);if(e!==null){X=e;return}if(t=t.sibling,t!==null){X=t;return}X=t=l}while(t!==null);dl===0&&(dl=5)}function yr(l,t){do{var e=kd(l.alternate,l);if(e!==null){e.flags&=32767,X=e;return}if(e=l.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(l=l.sibling,l!==null)){X=l;return}X=l=e}while(l!==null);dl=6,X=null}function vr(l,t,e,a,u,n,i,c,f){l.cancelPendingCommit=null;do pn();while(El!==0);if((W&6)!==0)throw Error(y(327));if(t!==null){if(t===l.current)throw Error(y(177));if(n=t.lanes|t.childLanes,n|=gi,qm(l,e,n,i,c,f),l===il&&(X=il=null,L=0),ga=t,re=l,Jt=e,Mc=n,_c=u,nr=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(l.callbackNode=null,l.callbackPriority=0,ih(Au,function(){return Ar(),null})):(l.callbackNode=null,l.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=S.T,S.T=null,u=T.p,T.p=2,i=W,W|=4;try{Wd(l,t,e)}finally{W=i,T.p=u,S.T=a}}El=1,gr(),Sr(),br()}}function gr(){if(El===1){El=0;var l=re,t=ga,e=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||e){e=S.T,S.T=null;var a=T.p;T.p=2;var u=W;W|=4;try{$o(t,l);var n=Qc,i=es(l.containerInfo),c=n.focusedElem,f=n.selectionRange;if(i!==c&&c&&c.ownerDocument&&ts(c.ownerDocument.documentElement,c)){if(f!==null&&mi(c)){var d=f.start,g=f.end;if(g===void 0&&(g=d),"selectionStart"in c)c.selectionStart=d,c.selectionEnd=Math.min(g,c.value.length);else{var p=c.ownerDocument||document,h=p&&p.defaultView||window;if(h.getSelection){var v=h.getSelection(),M=c.textContent.length,N=Math.min(f.start,M),ul=f.end===void 0?N:Math.min(f.end,M);!v.extend&&N>ul&&(i=ul,ul=N,N=i);var r=ls(c,N),s=ls(c,ul);if(r&&s&&(v.rangeCount!==1||v.anchorNode!==r.node||v.anchorOffset!==r.offset||v.focusNode!==s.node||v.focusOffset!==s.offset)){var m=p.createRange();m.setStart(r.node,r.offset),v.removeAllRanges(),N>ul?(v.addRange(m),v.extend(s.node,s.offset)):(m.setEnd(s.node,s.offset),v.addRange(m))}}}}for(p=[],v=c;v=v.parentNode;)v.nodeType===1&&p.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<p.length;c++){var b=p[c];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Hn=!!Xc,Qc=Xc=null}finally{W=u,T.p=a,S.T=e}}l.current=t,El=2}}function Sr(){if(El===2){El=0;var l=re,t=ga,e=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||e){e=S.T,S.T=null;var a=T.p;T.p=2;var u=W;W|=4;try{Jo(l,t.alternate,t)}finally{W=u,T.p=a,S.T=e}}El=3}}function br(){if(El===4||El===3){El=0,_m();var l=re,t=ga,e=Jt,a=nr;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?El=5:(El=0,ga=re=null,pr(l,l.pendingLanes));var u=l.pendingLanes;if(u===0&&(oe=null),Kn(e),t=t.stateNode,$l&&typeof $l.onCommitFiberRoot=="function")try{$l.onCommitFiberRoot(_a,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=S.T,u=T.p,T.p=2,S.T=null;try{for(var n=l.onRecoverableError,i=0;i<a.length;i++){var c=a[i];n(c.value,{componentStack:c.stack})}}finally{S.T=t,T.p=u}}(Jt&3)!==0&&pn(),Ot(l),u=l.pendingLanes,(e&261930)!==0&&(u&42)!==0?l===Oc?cu++:(cu=0,Oc=l):cu=0,fu(0)}}function pr(l,t){(l.pooledCacheLanes&=t)===0&&(t=l.pooledCache,t!=null&&(l.pooledCache=null,La(t)))}function pn(){return gr(),Sr(),br(),Ar()}function Ar(){if(El!==5)return!1;var l=re,t=Mc;Mc=0;var e=Kn(Jt),a=S.T,u=T.p;try{T.p=32>e?32:e,S.T=null,e=_c,_c=null;var n=re,i=Jt;if(El=0,ga=re=null,Jt=0,(W&6)!==0)throw Error(y(331));var c=W;if(W|=4,er(n.current),Po(n,n.current,i,e),W=c,fu(0,!1),$l&&typeof $l.onPostCommitFiberRoot=="function")try{$l.onPostCommitFiberRoot(_a,n)}catch{}return!0}finally{T.p=u,S.T=a,pr(l,t)}}function Er(l,t,e){t=ot(e,t),t=nc(l.stateNode,t,2),l=ue(l,t,2),l!==null&&(Da(l,2),Ot(l))}function ll(l,t,e){if(l.tag===3)Er(l,l,e);else for(;t!==null;){if(t.tag===3){Er(t,l,e);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(oe===null||!oe.has(a))){l=ot(e,l),e=To(2),a=ue(t,e,2),a!==null&&(zo(e,a,t,l),Da(a,2),Ot(a));break}}t=t.return}}function Cc(l,t,e){var a=l.pingCache;if(a===null){a=l.pingCache=new Id;var u=new Set;a.set(t,u)}else u=a.get(t),u===void 0&&(u=new Set,a.set(t,u));u.has(e)||(Ec=!0,u.add(e),l=ah.bind(null,l,t,e),t.then(l,l))}function ah(l,t,e){var a=l.pingCache;a!==null&&a.delete(t),l.pingedLanes|=l.suspendedLanes&e,l.warmLanes&=~e,il===l&&(L&e)===e&&(dl===4||dl===3&&(L&62914560)===L&&300>Fl()-hn?(W&2)===0&&Sa(l,0):Tc|=e,va===L&&(va=0)),Ot(l)}function Tr(l,t){t===0&&(t=vf()),l=Oe(l,t),l!==null&&(Da(l,t),Ot(l))}function uh(l){var t=l.memoizedState,e=0;t!==null&&(e=t.retryLane),Tr(l,e)}function nh(l,t){var e=0;switch(l.tag){case 31:case 13:var a=l.stateNode,u=l.memoizedState;u!==null&&(e=u.retryLane);break;case 19:a=l.stateNode;break;case 22:a=l.stateNode._retryCache;break;default:throw Error(y(314))}a!==null&&a.delete(t),Tr(l,e)}function ih(l,t){return Zn(l,t)}var An=null,pa=null,Nc=!1,En=!1,Hc=!1,de=0;function Ot(l){l!==pa&&l.next===null&&(pa===null?An=pa=l:pa=pa.next=l),En=!0,Nc||(Nc=!0,fh())}function fu(l,t){if(!Hc&&En){Hc=!0;do for(var e=!1,a=An;a!==null;){if(l!==0){var u=a.pendingLanes;if(u===0)var n=0;else{var i=a.suspendedLanes,c=a.pingedLanes;n=(1<<31-Il(42|l)+1)-1,n&=u&~(i&~c),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(e=!0,Or(a,n))}else n=L,n=Mu(a,a===il?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(n&3)===0||Oa(a,n)||(e=!0,Or(a,n));a=a.next}while(e);Hc=!1}}function ch(){zr()}function zr(){En=Nc=!1;var l=0;de!==0&&Sh()&&(l=de);for(var t=Fl(),e=null,a=An;a!==null;){var u=a.next,n=Mr(a,t);n===0?(a.next=null,e===null?An=u:e.next=u,u===null&&(pa=e)):(e=a,(l!==0||(n&3)!==0)&&(En=!0)),a=u}El!==0&&El!==5||fu(l),de!==0&&(de=0)}function Mr(l,t){for(var e=l.suspendedLanes,a=l.pingedLanes,u=l.expirationTimes,n=l.pendingLanes&-62914561;0<n;){var i=31-Il(n),c=1<<i,f=u[i];f===-1?((c&e)===0||(c&a)!==0)&&(u[i]=xm(c,t)):f<=t&&(l.expiredLanes|=c),n&=~c}if(t=il,e=L,e=Mu(l,l===t?e:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),a=l.callbackNode,e===0||l===t&&(P===2||P===9)||l.cancelPendingCommit!==null)return a!==null&&a!==null&&Vn(a),l.callbackNode=null,l.callbackPriority=0;if((e&3)===0||Oa(l,e)){if(t=e&-e,t===l.callbackPriority)return t;switch(a!==null&&Vn(a),Kn(e)){case 2:case 8:e=hf;break;case 32:e=Au;break;case 268435456:e=yf;break;default:e=Au}return a=_r.bind(null,l),e=Zn(e,a),l.callbackPriority=t,l.callbackNode=e,t}return a!==null&&a!==null&&Vn(a),l.callbackPriority=2,l.callbackNode=null,2}function _r(l,t){if(El!==0&&El!==5)return l.callbackNode=null,l.callbackPriority=0,null;var e=l.callbackNode;if(pn()&&l.callbackNode!==e)return null;var a=L;return a=Mu(l,l===il?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),a===0?null:(cr(l,a,t),Mr(l,Fl()),l.callbackNode!=null&&l.callbackNode===e?_r.bind(null,l):null)}function Or(l,t){if(pn())return null;cr(l,t,!0)}function fh(){ph(function(){(W&6)!==0?Zn(df,ch):zr()})}function Rc(){if(de===0){var l=na;l===0&&(l=Eu,Eu<<=1,(Eu&261888)===0&&(Eu=256)),de=l}return de}function Dr(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:Uu(""+l)}function Ur(l,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,l.id&&e.setAttribute("form",l.id),t.parentNode.insertBefore(e,t),l=new FormData(l),e.parentNode.removeChild(e),l}function sh(l,t,e,a,u){if(t==="submit"&&e&&e.stateNode===u){var n=Dr((u[Ql]||null).action),i=a.submitter;i&&(t=(t=i[Ql]||null)?Dr(t.formAction):i.getAttribute("formAction"),t!==null&&(n=t,i=null));var c=new Ru("action","action",null,a,u);l.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(de!==0){var f=i?Ur(u,i):new FormData(u);Pi(e,{pending:!0,data:f,method:u.method,action:n},null,f)}}else typeof n=="function"&&(c.preventDefault(),f=i?Ur(u,i):new FormData(u),Pi(e,{pending:!0,data:f,method:u.method,action:n},n,f))},currentTarget:u}]})}}for(var xc=0;xc<vi.length;xc++){var qc=vi[xc],oh=qc.toLowerCase(),rh=qc[0].toUpperCase()+qc.slice(1);St(oh,"on"+rh)}St(ns,"onAnimationEnd"),St(is,"onAnimationIteration"),St(cs,"onAnimationStart"),St("dblclick","onDoubleClick"),St("focusin","onFocus"),St("focusout","onBlur"),St(Od,"onTransitionRun"),St(Dd,"onTransitionStart"),St(Ud,"onTransitionCancel"),St(fs,"onTransitionEnd"),we("onMouseEnter",["mouseout","mouseover"]),we("onMouseLeave",["mouseout","mouseover"]),we("onPointerEnter",["pointerout","pointerover"]),we("onPointerLeave",["pointerout","pointerover"]),Te("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Te("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Te("onBeforeInput",["compositionend","keypress","textInput","paste"]),Te("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Te("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Te("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var su="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(su));function Cr(l,t){t=(t&4)!==0;for(var e=0;e<l.length;e++){var a=l[e],u=a.event;a=a.listeners;l:{var n=void 0;if(t)for(var i=a.length-1;0<=i;i--){var c=a[i],f=c.instance,d=c.currentTarget;if(c=c.listener,f!==n&&u.isPropagationStopped())break l;n=c,u.currentTarget=d;try{n(u)}catch(g){Bu(g)}u.currentTarget=null,n=f}else for(i=0;i<a.length;i++){if(c=a[i],f=c.instance,d=c.currentTarget,c=c.listener,f!==n&&u.isPropagationStopped())break l;n=c,u.currentTarget=d;try{n(u)}catch(g){Bu(g)}u.currentTarget=null,n=f}}}}function Q(l,t){var e=t[kn];e===void 0&&(e=t[kn]=new Set);var a=l+"__bubble";e.has(a)||(Nr(t,l,2,!1),e.add(a))}function Bc(l,t,e){var a=0;t&&(a|=4),Nr(e,l,a,t)}var Tn="_reactListening"+Math.random().toString(36).slice(2);function Yc(l){if(!l[Tn]){l[Tn]=!0,Tf.forEach(function(e){e!=="selectionchange"&&(mh.has(e)||Bc(e,!1,l),Bc(e,!0,l))});var t=l.nodeType===9?l:l.ownerDocument;t===null||t[Tn]||(t[Tn]=!0,Bc("selectionchange",!1,t))}}function Nr(l,t,e,a){switch(im(t)){case 2:var u=Xh;break;case 8:u=Qh;break;default:u=Ic}e=u.bind(null,t,e,l),u=void 0,!ai||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),a?u!==void 0?l.addEventListener(t,e,{capture:!0,passive:u}):l.addEventListener(t,e,!0):u!==void 0?l.addEventListener(t,e,{passive:u}):l.addEventListener(t,e,!1)}function Gc(l,t,e,a,u){var n=a;if((t&1)===0&&(t&2)===0&&a!==null)l:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var c=a.stateNode.containerInfo;if(c===u)break;if(i===4)for(i=a.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===u)return;i=i.return}for(;c!==null;){if(i=Le(c),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){a=n=i;continue l}c=c.parentNode}}a=a.return}qf(function(){var d=n,g=ti(e),p=[];l:{var h=ss.get(l);if(h!==void 0){var v=Ru,M=l;switch(l){case"keypress":if(Nu(e)===0)break l;case"keydown":case"keyup":v=nd;break;case"focusin":M="focus",v=ci;break;case"focusout":M="blur",v=ci;break;case"beforeblur":case"afterblur":v=ci;break;case"click":if(e.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Km;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=fd;break;case ns:case is:case cs:v=Fm;break;case fs:v=od;break;case"scroll":case"scrollend":v=wm;break;case"wheel":v=md;break;case"copy":case"cut":case"paste":v=Im;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Xf;break;case"toggle":case"beforetoggle":v=hd}var N=(t&4)!==0,ul=!N&&(l==="scroll"||l==="scrollend"),r=N?h!==null?h+"Capture":null:h;N=[];for(var s=d,m;s!==null;){var b=s;if(m=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||m===null||r===null||(b=Na(s,r),b!=null&&N.push(ou(s,b,m))),ul)break;s=s.return}0<N.length&&(h=new v(h,M,null,e,g),p.push({event:h,listeners:N}))}}if((t&7)===0){l:{if(h=l==="mouseover"||l==="pointerover",v=l==="mouseout"||l==="pointerout",h&&e!==li&&(M=e.relatedTarget||e.fromElement)&&(Le(M)||M[Qe]))break l;if((v||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,v?(M=e.relatedTarget||e.toElement,v=d,M=M?Le(M):null,M!==null&&(ul=k(M),N=M.tag,M!==ul||N!==5&&N!==27&&N!==6)&&(M=null)):(v=null,M=d),v!==M)){if(N=Gf,b="onMouseLeave",r="onMouseEnter",s="mouse",(l==="pointerout"||l==="pointerover")&&(N=Xf,b="onPointerLeave",r="onPointerEnter",s="pointer"),ul=v==null?h:Ca(v),m=M==null?h:Ca(M),h=new N(b,s+"leave",v,e,g),h.target=ul,h.relatedTarget=m,b=null,Le(g)===d&&(N=new N(r,s+"enter",M,e,g),N.target=m,N.relatedTarget=ul,b=N),ul=b,v&&M)t:{for(N=dh,r=v,s=M,m=0,b=r;b;b=N(b))m++;b=0;for(var U=s;U;U=N(U))b++;for(;0<m-b;)r=N(r),m--;for(;0<b-m;)s=N(s),b--;for(;m--;){if(r===s||s!==null&&r===s.alternate){N=r;break t}r=N(r),s=N(s)}N=null}else N=null;v!==null&&Hr(p,h,v,N,!1),M!==null&&ul!==null&&Hr(p,ul,M,N,!0)}}l:{if(h=d?Ca(d):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var J=kf;else if(Jf(h))if(Wf)J=zd;else{J=Ed;var D=Ad}else v=h.nodeName,!v||v.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?d&&Pn(d.elementType)&&(J=kf):J=Td;if(J&&(J=J(l,d))){Kf(p,J,e,g);break l}D&&D(l,h,d),l==="focusout"&&d&&h.type==="number"&&d.memoizedProps.value!=null&&In(h,"number",h.value)}switch(D=d?Ca(d):window,l){case"focusin":(Jf(D)||D.contentEditable==="true")&&($e=D,di=d,ja=null);break;case"focusout":ja=di=$e=null;break;case"mousedown":hi=!0;break;case"contextmenu":case"mouseup":case"dragend":hi=!1,as(p,e,g);break;case"selectionchange":if(_d)break;case"keydown":case"keyup":as(p,e,g)}var G;if(si)l:{switch(l){case"compositionstart":var Z="onCompositionStart";break l;case"compositionend":Z="onCompositionEnd";break l;case"compositionupdate":Z="onCompositionUpdate";break l}Z=void 0}else Fe?Vf(l,e)&&(Z="onCompositionEnd"):l==="keydown"&&e.keyCode===229&&(Z="onCompositionStart");Z&&(Qf&&e.locale!=="ko"&&(Fe||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&Fe&&(G=Bf()):($t=g,ui="value"in $t?$t.value:$t.textContent,Fe=!0)),D=zn(d,Z),0<D.length&&(Z=new jf(Z,l,null,e,g),p.push({event:Z,listeners:D}),G?Z.data=G:(G=wf(e),G!==null&&(Z.data=G)))),(G=vd?gd(l,e):Sd(l,e))&&(Z=zn(d,"onBeforeInput"),0<Z.length&&(D=new jf("onBeforeInput","beforeinput",null,e,g),p.push({event:D,listeners:Z}),D.data=G)),sh(p,l,d,e,g)}Cr(p,t)})}function ou(l,t,e){return{instance:l,listener:t,currentTarget:e}}function zn(l,t){for(var e=t+"Capture",a=[];l!==null;){var u=l,n=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||n===null||(u=Na(l,e),u!=null&&a.unshift(ou(l,u,n)),u=Na(l,t),u!=null&&a.push(ou(l,u,n))),l.tag===3)return a;l=l.return}return[]}function dh(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function Hr(l,t,e,a,u){for(var n=t._reactName,i=[];e!==null&&e!==a;){var c=e,f=c.alternate,d=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||d===null||(f=d,u?(d=Na(e,n),d!=null&&i.unshift(ou(e,d,f))):u||(d=Na(e,n),d!=null&&i.push(ou(e,d,f)))),e=e.return}i.length!==0&&l.push({event:t,listeners:i})}var hh=/\r\n?/g,yh=/\u0000|\uFFFD/g;function Rr(l){return(typeof l=="string"?l:""+l).replace(hh,`
`).replace(yh,"")}function xr(l,t){return t=Rr(t),Rr(l)===t}function al(l,t,e,a,u,n){switch(e){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ke(l,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ke(l,""+a);break;case"className":Ou(l,"class",a);break;case"tabIndex":Ou(l,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ou(l,e,a);break;case"style":Rf(l,a,n);break;case"data":if(t!=="object"){Ou(l,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||e!=="href")){l.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){l.removeAttribute(e);break}a=Uu(""+a),l.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){l.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(e==="formAction"?(t!=="input"&&al(l,t,"name",u.name,u,null),al(l,t,"formEncType",u.formEncType,u,null),al(l,t,"formMethod",u.formMethod,u,null),al(l,t,"formTarget",u.formTarget,u,null)):(al(l,t,"encType",u.encType,u,null),al(l,t,"method",u.method,u,null),al(l,t,"target",u.target,u,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){l.removeAttribute(e);break}a=Uu(""+a),l.setAttribute(e,a);break;case"onClick":a!=null&&(l.onclick=Nt);break;case"onScroll":a!=null&&Q("scroll",l);break;case"onScrollEnd":a!=null&&Q("scrollend",l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(y(61));if(e=a.__html,e!=null){if(u.children!=null)throw Error(y(60));l.innerHTML=e}}break;case"multiple":l.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":l.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){l.removeAttribute("xlink:href");break}e=Uu(""+a),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,""+a):l.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,""):l.removeAttribute(e);break;case"capture":case"download":a===!0?l.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,a):l.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?l.setAttribute(e,a):l.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?l.removeAttribute(e):l.setAttribute(e,a);break;case"popover":Q("beforetoggle",l),Q("toggle",l),_u(l,"popover",a);break;case"xlinkActuate":Ct(l,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ct(l,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ct(l,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ct(l,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ct(l,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ct(l,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ct(l,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ct(l,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ct(l,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":_u(l,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Zm.get(e)||e,_u(l,e,a))}}function jc(l,t,e,a,u,n){switch(e){case"style":Rf(l,a,n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(y(61));if(e=a.__html,e!=null){if(u.children!=null)throw Error(y(60));l.innerHTML=e}}break;case"children":typeof a=="string"?Ke(l,a):(typeof a=="number"||typeof a=="bigint")&&Ke(l,""+a);break;case"onScroll":a!=null&&Q("scroll",l);break;case"onScrollEnd":a!=null&&Q("scrollend",l);break;case"onClick":a!=null&&(l.onclick=Nt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zf.hasOwnProperty(e))l:{if(e[0]==="o"&&e[1]==="n"&&(u=e.endsWith("Capture"),t=e.slice(2,u?e.length-7:void 0),n=l[Ql]||null,n=n!=null?n[e]:null,typeof n=="function"&&l.removeEventListener(t,n,u),typeof a=="function")){typeof n!="function"&&n!==null&&(e in l?l[e]=null:l.hasAttribute(e)&&l.removeAttribute(e)),l.addEventListener(t,a,u);break l}e in l?l[e]=a:a===!0?l.setAttribute(e,""):_u(l,e,a)}}}function Ul(l,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Q("error",l),Q("load",l);var a=!1,u=!1,n;for(n in e)if(e.hasOwnProperty(n)){var i=e[n];if(i!=null)switch(n){case"src":a=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(y(137,t));default:al(l,t,n,i,e,null)}}u&&al(l,t,"srcSet",e.srcSet,e,null),a&&al(l,t,"src",e.src,e,null);return;case"input":Q("invalid",l);var c=n=i=u=null,f=null,d=null;for(a in e)if(e.hasOwnProperty(a)){var g=e[a];if(g!=null)switch(a){case"name":u=g;break;case"type":i=g;break;case"checked":f=g;break;case"defaultChecked":d=g;break;case"value":n=g;break;case"defaultValue":c=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(y(137,t));break;default:al(l,t,a,g,e,null)}}Uf(l,n,c,f,d,i,u,!1);return;case"select":Q("invalid",l),a=i=n=null;for(u in e)if(e.hasOwnProperty(u)&&(c=e[u],c!=null))switch(u){case"value":n=c;break;case"defaultValue":i=c;break;case"multiple":a=c;default:al(l,t,u,c,e,null)}t=n,e=i,l.multiple=!!a,t!=null?Je(l,!!a,t,!1):e!=null&&Je(l,!!a,e,!0);return;case"textarea":Q("invalid",l),n=u=a=null;for(i in e)if(e.hasOwnProperty(i)&&(c=e[i],c!=null))switch(i){case"value":a=c;break;case"defaultValue":u=c;break;case"children":n=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(y(91));break;default:al(l,t,i,c,e,null)}Nf(l,a,u,n);return;case"option":for(f in e)if(e.hasOwnProperty(f)&&(a=e[f],a!=null))switch(f){case"selected":l.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:al(l,t,f,a,e,null)}return;case"dialog":Q("beforetoggle",l),Q("toggle",l),Q("cancel",l),Q("close",l);break;case"iframe":case"object":Q("load",l);break;case"video":case"audio":for(a=0;a<su.length;a++)Q(su[a],l);break;case"image":Q("error",l),Q("load",l);break;case"details":Q("toggle",l);break;case"embed":case"source":case"link":Q("error",l),Q("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in e)if(e.hasOwnProperty(d)&&(a=e[d],a!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(y(137,t));default:al(l,t,d,a,e,null)}return;default:if(Pn(t)){for(g in e)e.hasOwnProperty(g)&&(a=e[g],a!==void 0&&jc(l,t,g,a,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(a=e[c],a!=null&&al(l,t,c,a,e,null))}function vh(l,t,e,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,n=null,i=null,c=null,f=null,d=null,g=null;for(v in e){var p=e[v];if(e.hasOwnProperty(v)&&p!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":f=p;default:a.hasOwnProperty(v)||al(l,t,v,null,a,p)}}for(var h in a){var v=a[h];if(p=e[h],a.hasOwnProperty(h)&&(v!=null||p!=null))switch(h){case"type":n=v;break;case"name":u=v;break;case"checked":d=v;break;case"defaultChecked":g=v;break;case"value":i=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(y(137,t));break;default:v!==p&&al(l,t,h,v,a,p)}}$n(l,i,c,f,d,g,n,u);return;case"select":v=i=c=h=null;for(n in e)if(f=e[n],e.hasOwnProperty(n)&&f!=null)switch(n){case"value":break;case"multiple":v=f;default:a.hasOwnProperty(n)||al(l,t,n,null,a,f)}for(u in a)if(n=a[u],f=e[u],a.hasOwnProperty(u)&&(n!=null||f!=null))switch(u){case"value":h=n;break;case"defaultValue":c=n;break;case"multiple":i=n;default:n!==f&&al(l,t,u,n,a,f)}t=c,e=i,a=v,h!=null?Je(l,!!e,h,!1):!!a!=!!e&&(t!=null?Je(l,!!e,t,!0):Je(l,!!e,e?[]:"",!1));return;case"textarea":v=h=null;for(c in e)if(u=e[c],e.hasOwnProperty(c)&&u!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:al(l,t,c,null,a,u)}for(i in a)if(u=a[i],n=e[i],a.hasOwnProperty(i)&&(u!=null||n!=null))switch(i){case"value":h=u;break;case"defaultValue":v=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(y(91));break;default:u!==n&&al(l,t,i,u,a,n)}Cf(l,h,v);return;case"option":for(var M in e)if(h=e[M],e.hasOwnProperty(M)&&h!=null&&!a.hasOwnProperty(M))switch(M){case"selected":l.selected=!1;break;default:al(l,t,M,null,a,h)}for(f in a)if(h=a[f],v=e[f],a.hasOwnProperty(f)&&h!==v&&(h!=null||v!=null))switch(f){case"selected":l.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:al(l,t,f,h,a,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var N in e)h=e[N],e.hasOwnProperty(N)&&h!=null&&!a.hasOwnProperty(N)&&al(l,t,N,null,a,h);for(d in a)if(h=a[d],v=e[d],a.hasOwnProperty(d)&&h!==v&&(h!=null||v!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(y(137,t));break;default:al(l,t,d,h,a,v)}return;default:if(Pn(t)){for(var ul in e)h=e[ul],e.hasOwnProperty(ul)&&h!==void 0&&!a.hasOwnProperty(ul)&&jc(l,t,ul,void 0,a,h);for(g in a)h=a[g],v=e[g],!a.hasOwnProperty(g)||h===v||h===void 0&&v===void 0||jc(l,t,g,h,a,v);return}}for(var r in e)h=e[r],e.hasOwnProperty(r)&&h!=null&&!a.hasOwnProperty(r)&&al(l,t,r,null,a,h);for(p in a)h=a[p],v=e[p],!a.hasOwnProperty(p)||h===v||h==null&&v==null||al(l,t,p,h,a,v)}function qr(l){switch(l){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gh(){if(typeof performance.getEntriesByType=="function"){for(var l=0,t=0,e=performance.getEntriesByType("resource"),a=0;a<e.length;a++){var u=e[a],n=u.transferSize,i=u.initiatorType,c=u.duration;if(n&&c&&qr(i)){for(i=0,c=u.responseEnd,a+=1;a<e.length;a++){var f=e[a],d=f.startTime;if(d>c)break;var g=f.transferSize,p=f.initiatorType;g&&qr(p)&&(f=f.responseEnd,i+=g*(f<c?1:(c-d)/(f-d)))}if(--a,t+=8*(n+i)/(u.duration/1e3),l++,10<l)break}}if(0<l)return t/l/1e6}return navigator.connection&&(l=navigator.connection.downlink,typeof l=="number")?l:5}var Xc=null,Qc=null;function Mn(l){return l.nodeType===9?l:l.ownerDocument}function Br(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Yr(l,t){if(l===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&t==="foreignObject"?0:l}function Lc(l,t){return l==="textarea"||l==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zc=null;function Sh(){var l=window.event;return l&&l.type==="popstate"?l===Zc?!1:(Zc=l,!0):(Zc=null,!1)}var Gr=typeof setTimeout=="function"?setTimeout:void 0,bh=typeof clearTimeout=="function"?clearTimeout:void 0,jr=typeof Promise=="function"?Promise:void 0,ph=typeof queueMicrotask=="function"?queueMicrotask:typeof jr<"u"?function(l){return jr.resolve(null).then(l).catch(Ah)}:Gr;function Ah(l){setTimeout(function(){throw l})}function he(l){return l==="head"}function Xr(l,t){var e=t,a=0;do{var u=e.nextSibling;if(l.removeChild(e),u&&u.nodeType===8)if(e=u.data,e==="/$"||e==="/&"){if(a===0){l.removeChild(u),za(t);return}a--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")a++;else if(e==="html")ru(l.ownerDocument.documentElement);else if(e==="head"){e=l.ownerDocument.head,ru(e);for(var n=e.firstChild;n;){var i=n.nextSibling,c=n.nodeName;n[Ua]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&n.rel.toLowerCase()==="stylesheet"||e.removeChild(n),n=i}}else e==="body"&&ru(l.ownerDocument.body);e=u}while(e);za(t)}function Qr(l,t){var e=l;l=0;do{var a=e.nextSibling;if(e.nodeType===1?t?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(t?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),a&&a.nodeType===8)if(e=a.data,e==="/$"){if(l===0)break;l--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||l++;e=a}while(e)}function Vc(l){var t=l.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Vc(e),Wn(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}l.removeChild(e)}}function Eh(l,t,e,a){for(;l.nodeType===1;){var u=e;if(l.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(a){if(!l[Ua])switch(t){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(n=l.getAttribute("rel"),n==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(n!==u.rel||l.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||l.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||l.getAttribute("title")!==(u.title==null?null:u.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(n=l.getAttribute("src"),(n!==(u.src==null?null:u.src)||l.getAttribute("type")!==(u.type==null?null:u.type)||l.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&n&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(t==="input"&&l.type==="hidden"){var n=u.name==null?null:""+u.name;if(u.type==="hidden"&&l.getAttribute("name")===n)return l}else return l;if(l=yt(l.nextSibling),l===null)break}return null}function Th(l,t,e){if(t==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!e||(l=yt(l.nextSibling),l===null))return null;return l}function Lr(l,t){for(;l.nodeType!==8;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!t||(l=yt(l.nextSibling),l===null))return null;return l}function wc(l){return l.data==="$?"||l.data==="$~"}function Jc(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState!=="loading"}function zh(l,t){var e=l.ownerDocument;if(l.data==="$~")l._reactRetry=t;else if(l.data!=="$?"||e.readyState!=="loading")t();else{var a=function(){t(),e.removeEventListener("DOMContentLoaded",a)};e.addEventListener("DOMContentLoaded",a),l._reactRetry=a}}function yt(l){for(;l!=null;l=l.nextSibling){var t=l.nodeType;if(t===1||t===3)break;if(t===8){if(t=l.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return l}var Kc=null;function Zr(l){l=l.nextSibling;for(var t=0;l;){if(l.nodeType===8){var e=l.data;if(e==="/$"||e==="/&"){if(t===0)return yt(l.nextSibling);t--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||t++}l=l.nextSibling}return null}function Vr(l){l=l.previousSibling;for(var t=0;l;){if(l.nodeType===8){var e=l.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(t===0)return l;t--}else e!=="/$"&&e!=="/&"||t++}l=l.previousSibling}return null}function wr(l,t,e){switch(t=Mn(e),l){case"html":if(l=t.documentElement,!l)throw Error(y(452));return l;case"head":if(l=t.head,!l)throw Error(y(453));return l;case"body":if(l=t.body,!l)throw Error(y(454));return l;default:throw Error(y(451))}}function ru(l){for(var t=l.attributes;t.length;)l.removeAttributeNode(t[0]);Wn(l)}var vt=new Map,Jr=new Set;function _n(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var Kt=T.d;T.d={f:Mh,r:_h,D:Oh,C:Dh,L:Uh,m:Ch,X:Hh,S:Nh,M:Rh};function Mh(){var l=Kt.f(),t=gn();return l||t}function _h(l){var t=Ze(l);t!==null&&t.tag===5&&t.type==="form"?fo(t):Kt.r(l)}var Aa=typeof document>"u"?null:document;function Kr(l,t,e){var a=Aa;if(a&&typeof t=="string"&&t){var u=ft(t);u='link[rel="'+l+'"][href="'+u+'"]',typeof e=="string"&&(u+='[crossorigin="'+e+'"]'),Jr.has(u)||(Jr.add(u),l={rel:l,crossOrigin:e,href:t},a.querySelector(u)===null&&(t=a.createElement("link"),Ul(t,"link",l),Tl(t),a.head.appendChild(t)))}}function Oh(l){Kt.D(l),Kr("dns-prefetch",l,null)}function Dh(l,t){Kt.C(l,t),Kr("preconnect",l,t)}function Uh(l,t,e){Kt.L(l,t,e);var a=Aa;if(a&&l&&t){var u='link[rel="preload"][as="'+ft(t)+'"]';t==="image"&&e&&e.imageSrcSet?(u+='[imagesrcset="'+ft(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(u+='[imagesizes="'+ft(e.imageSizes)+'"]')):u+='[href="'+ft(l)+'"]';var n=u;switch(t){case"style":n=Ea(l);break;case"script":n=Ta(l)}vt.has(n)||(l=R({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:l,as:t},e),vt.set(n,l),a.querySelector(u)!==null||t==="style"&&a.querySelector(mu(n))||t==="script"&&a.querySelector(du(n))||(t=a.createElement("link"),Ul(t,"link",l),Tl(t),a.head.appendChild(t)))}}function Ch(l,t){Kt.m(l,t);var e=Aa;if(e&&l){var a=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+ft(a)+'"][href="'+ft(l)+'"]',n=u;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Ta(l)}if(!vt.has(n)&&(l=R({rel:"modulepreload",href:l},t),vt.set(n,l),e.querySelector(u)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(du(n)))return}a=e.createElement("link"),Ul(a,"link",l),Tl(a),e.head.appendChild(a)}}}function Nh(l,t,e){Kt.S(l,t,e);var a=Aa;if(a&&l){var u=Ve(a).hoistableStyles,n=Ea(l);t=t||"default";var i=u.get(n);if(!i){var c={loading:0,preload:null};if(i=a.querySelector(mu(n)))c.loading=5;else{l=R({rel:"stylesheet",href:l,"data-precedence":t},e),(e=vt.get(n))&&kc(l,e);var f=i=a.createElement("link");Tl(f),Ul(f,"link",l),f._p=new Promise(function(d,g){f.onload=d,f.onerror=g}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,On(i,t,a)}i={type:"stylesheet",instance:i,count:1,state:c},u.set(n,i)}}}function Hh(l,t){Kt.X(l,t);var e=Aa;if(e&&l){var a=Ve(e).hoistableScripts,u=Ta(l),n=a.get(u);n||(n=e.querySelector(du(u)),n||(l=R({src:l,async:!0},t),(t=vt.get(u))&&Wc(l,t),n=e.createElement("script"),Tl(n),Ul(n,"link",l),e.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(u,n))}}function Rh(l,t){Kt.M(l,t);var e=Aa;if(e&&l){var a=Ve(e).hoistableScripts,u=Ta(l),n=a.get(u);n||(n=e.querySelector(du(u)),n||(l=R({src:l,async:!0,type:"module"},t),(t=vt.get(u))&&Wc(l,t),n=e.createElement("script"),Tl(n),Ul(n,"link",l),e.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(u,n))}}function kr(l,t,e,a){var u=(u=j.current)?_n(u):null;if(!u)throw Error(y(446));switch(l){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=Ea(e.href),e=Ve(u).hoistableStyles,a=e.get(t),a||(a={type:"style",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){l=Ea(e.href);var n=Ve(u).hoistableStyles,i=n.get(l);if(i||(u=u.ownerDocument||u,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(l,i),(n=u.querySelector(mu(l)))&&!n._p&&(i.instance=n,i.state.loading=5),vt.has(l)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},vt.set(l,e),n||xh(u,l,e,i.state))),t&&a===null)throw Error(y(528,""));return i}if(t&&a!==null)throw Error(y(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ta(e),e=Ve(u).hoistableScripts,a=e.get(t),a||(a={type:"script",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(y(444,l))}}function Ea(l){return'href="'+ft(l)+'"'}function mu(l){return'link[rel="stylesheet"]['+l+"]"}function Wr(l){return R({},l,{"data-precedence":l.precedence,precedence:null})}function xh(l,t,e,a){l.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=l.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ul(t,"link",e),Tl(t),l.head.appendChild(t))}function Ta(l){return'[src="'+ft(l)+'"]'}function du(l){return"script[async]"+l}function Fr(l,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var a=l.querySelector('style[data-href~="'+ft(e.href)+'"]');if(a)return t.instance=a,Tl(a),a;var u=R({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(l.ownerDocument||l).createElement("style"),Tl(a),Ul(a,"style",u),On(a,e.precedence,l),t.instance=a;case"stylesheet":u=Ea(e.href);var n=l.querySelector(mu(u));if(n)return t.state.loading|=4,t.instance=n,Tl(n),n;a=Wr(e),(u=vt.get(u))&&kc(a,u),n=(l.ownerDocument||l).createElement("link"),Tl(n);var i=n;return i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Ul(n,"link",a),t.state.loading|=4,On(n,e.precedence,l),t.instance=n;case"script":return n=Ta(e.src),(u=l.querySelector(du(n)))?(t.instance=u,Tl(u),u):(a=e,(u=vt.get(n))&&(a=R({},e),Wc(a,u)),l=l.ownerDocument||l,u=l.createElement("script"),Tl(u),Ul(u,"link",a),l.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(y(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,On(a,e.precedence,l));return t.instance}function On(l,t,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=a.length?a[a.length-1]:null,n=u,i=0;i<a.length;i++){var c=a[i];if(c.dataset.precedence===t)n=c;else if(n!==u)break}n?n.parentNode.insertBefore(l,n.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(l,t.firstChild))}function kc(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.title==null&&(l.title=t.title)}function Wc(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.integrity==null&&(l.integrity=t.integrity)}var Dn=null;function $r(l,t,e){if(Dn===null){var a=new Map,u=Dn=new Map;u.set(e,a)}else u=Dn,a=u.get(e),a||(a=new Map,u.set(e,a));if(a.has(l))return a;for(a.set(l,null),e=e.getElementsByTagName(l),u=0;u<e.length;u++){var n=e[u];if(!(n[Ua]||n[Ml]||l==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var i=n.getAttribute(t)||"";i=l+i;var c=a.get(i);c?c.push(n):a.set(i,[n])}}return a}function Ir(l,t,e){l=l.ownerDocument||l,l.head.insertBefore(e,t==="title"?l.querySelector("head > title"):null)}function qh(l,t,e){if(e===1||t.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return l=t.disabled,typeof t.precedence=="string"&&l==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Pr(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}function Bh(l,t,e,a){if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var u=Ea(a.href),n=t.querySelector(mu(u));if(n){t=n._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Un.bind(l),t.then(l,l)),e.state.loading|=4,e.instance=n,Tl(n);return}n=t.ownerDocument||t,a=Wr(a),(u=vt.get(u))&&kc(a,u),n=n.createElement("link"),Tl(n);var i=n;i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Ul(n,"link",a),e.instance=n}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(l.count++,e=Un.bind(l),t.addEventListener("load",e),t.addEventListener("error",e))}}var Fc=0;function Yh(l,t){return l.stylesheets&&l.count===0&&Nn(l,l.stylesheets),0<l.count||0<l.imgCount?function(e){var a=setTimeout(function(){if(l.stylesheets&&Nn(l,l.stylesheets),l.unsuspend){var n=l.unsuspend;l.unsuspend=null,n()}},6e4+t);0<l.imgBytes&&Fc===0&&(Fc=62500*gh());var u=setTimeout(function(){if(l.waitingForImages=!1,l.count===0&&(l.stylesheets&&Nn(l,l.stylesheets),l.unsuspend)){var n=l.unsuspend;l.unsuspend=null,n()}},(l.imgBytes>Fc?50:800)+t);return l.unsuspend=e,function(){l.unsuspend=null,clearTimeout(a),clearTimeout(u)}}:null}function Un(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Nn(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var Cn=null;function Nn(l,t){l.stylesheets=null,l.unsuspend!==null&&(l.count++,Cn=new Map,t.forEach(Gh,l),Cn=null,Un.call(l))}function Gh(l,t){if(!(t.state.loading&4)){var e=Cn.get(l);if(e)var a=e.get(null);else{e=new Map,Cn.set(l,e);for(var u=l.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<u.length;n++){var i=u[n];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(e.set(i.dataset.precedence,i),a=i)}a&&e.set(null,a)}u=t.instance,i=u.getAttribute("data-precedence"),n=e.get(i)||a,n===a&&e.set(null,u),e.set(i,u),this.count++,a=Un.bind(this),u.addEventListener("load",a),u.addEventListener("error",a),n?n.parentNode.insertBefore(u,n.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(u,l.firstChild)),t.state.loading|=4}}var hu={$$typeof:Cl,Provider:null,Consumer:null,_currentValue:x,_currentValue2:x,_threadCount:0};function jh(l,t,e,a,u,n,i,c,f){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wn(0),this.hiddenUpdates=wn(null),this.identifierPrefix=a,this.onUncaughtError=u,this.onCaughtError=n,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function lm(l,t,e,a,u,n,i,c,f,d,g,p){return l=new jh(l,t,e,i,f,d,g,p,c),t=1,n===!0&&(t|=24),n=lt(3,null,null,t),l.current=n,n.stateNode=l,t=Ui(),t.refCount++,l.pooledCache=t,t.refCount++,n.memoizedState={element:a,isDehydrated:e,cache:t},Ri(n),l}function tm(l){return l?(l=la,l):la}function em(l,t,e,a,u,n){u=tm(u),a.context===null?a.context=u:a.pendingContext=u,a=ae(t),a.payload={element:e},n=n===void 0?null:n,n!==null&&(a.callback=n),e=ue(l,a,t),e!==null&&(Kl(e,l,t),Ja(e,l,t))}function am(l,t){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var e=l.retryLane;l.retryLane=e!==0&&e<t?e:t}}function $c(l,t){am(l,t),(l=l.alternate)&&am(l,t)}function um(l){if(l.tag===13||l.tag===31){var t=Oe(l,67108864);t!==null&&Kl(t,l,67108864),$c(l,67108864)}}function nm(l){if(l.tag===13||l.tag===31){var t=nt();t=Jn(t);var e=Oe(l,t);e!==null&&Kl(e,l,t),$c(l,t)}}var Hn=!0;function Xh(l,t,e,a){var u=S.T;S.T=null;var n=T.p;try{T.p=2,Ic(l,t,e,a)}finally{T.p=n,S.T=u}}function Qh(l,t,e,a){var u=S.T;S.T=null;var n=T.p;try{T.p=8,Ic(l,t,e,a)}finally{T.p=n,S.T=u}}function Ic(l,t,e,a){if(Hn){var u=Pc(a);if(u===null)Gc(l,t,a,Rn,e),cm(l,a);else if(Zh(u,l,t,e,a))a.stopPropagation();else if(cm(l,a),t&4&&-1<Lh.indexOf(l)){for(;u!==null;){var n=Ze(u);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var i=Ee(n.pendingLanes);if(i!==0){var c=n;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var f=1<<31-Il(i);c.entanglements[1]|=f,i&=~f}Ot(n),(W&6)===0&&(yn=Fl()+500,fu(0))}}break;case 31:case 13:c=Oe(n,2),c!==null&&Kl(c,n,2),gn(),$c(n,2)}if(n=Pc(a),n===null&&Gc(l,t,a,Rn,e),n===u)break;u=n}u!==null&&a.stopPropagation()}else Gc(l,t,a,null,e)}}function Pc(l){return l=ti(l),lf(l)}var Rn=null;function lf(l){if(Rn=null,l=Le(l),l!==null){var t=k(l);if(t===null)l=null;else{var e=t.tag;if(e===13){if(l=hl(t),l!==null)return l;l=null}else if(e===31){if(l=Hl(t),l!==null)return l;l=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;l=null}else t!==l&&(l=null)}}return Rn=l,null}function im(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Om()){case df:return 2;case hf:return 8;case Au:case Dm:return 32;case yf:return 268435456;default:return 32}default:return 32}}var tf=!1,ye=null,ve=null,ge=null,yu=new Map,vu=new Map,Se=[],Lh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cm(l,t){switch(l){case"focusin":case"focusout":ye=null;break;case"dragenter":case"dragleave":ve=null;break;case"mouseover":case"mouseout":ge=null;break;case"pointerover":case"pointerout":yu.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vu.delete(t.pointerId)}}function gu(l,t,e,a,u,n){return l===null||l.nativeEvent!==n?(l={blockedOn:t,domEventName:e,eventSystemFlags:a,nativeEvent:n,targetContainers:[u]},t!==null&&(t=Ze(t),t!==null&&um(t)),l):(l.eventSystemFlags|=a,t=l.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),l)}function Zh(l,t,e,a,u){switch(t){case"focusin":return ye=gu(ye,l,t,e,a,u),!0;case"dragenter":return ve=gu(ve,l,t,e,a,u),!0;case"mouseover":return ge=gu(ge,l,t,e,a,u),!0;case"pointerover":var n=u.pointerId;return yu.set(n,gu(yu.get(n)||null,l,t,e,a,u)),!0;case"gotpointercapture":return n=u.pointerId,vu.set(n,gu(vu.get(n)||null,l,t,e,a,u)),!0}return!1}function fm(l){var t=Le(l.target);if(t!==null){var e=k(t);if(e!==null){if(t=e.tag,t===13){if(t=hl(e),t!==null){l.blockedOn=t,Af(l.priority,function(){nm(e)});return}}else if(t===31){if(t=Hl(e),t!==null){l.blockedOn=t,Af(l.priority,function(){nm(e)});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){l.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}l.blockedOn=null}function xn(l){if(l.blockedOn!==null)return!1;for(var t=l.targetContainers;0<t.length;){var e=Pc(l.nativeEvent);if(e===null){e=l.nativeEvent;var a=new e.constructor(e.type,e);li=a,e.target.dispatchEvent(a),li=null}else return t=Ze(e),t!==null&&um(t),l.blockedOn=e,!1;t.shift()}return!0}function sm(l,t,e){xn(l)&&e.delete(t)}function Vh(){tf=!1,ye!==null&&xn(ye)&&(ye=null),ve!==null&&xn(ve)&&(ve=null),ge!==null&&xn(ge)&&(ge=null),yu.forEach(sm),vu.forEach(sm)}function qn(l,t){l.blockedOn===t&&(l.blockedOn=null,tf||(tf=!0,_.unstable_scheduleCallback(_.unstable_NormalPriority,Vh)))}var Bn=null;function om(l){Bn!==l&&(Bn=l,_.unstable_scheduleCallback(_.unstable_NormalPriority,function(){Bn===l&&(Bn=null);for(var t=0;t<l.length;t+=3){var e=l[t],a=l[t+1],u=l[t+2];if(typeof a!="function"){if(lf(a||e)===null)continue;break}var n=Ze(e);n!==null&&(l.splice(t,3),t-=3,Pi(n,{pending:!0,data:u,method:e.method,action:a},a,u))}}))}function za(l){function t(f){return qn(f,l)}ye!==null&&qn(ye,l),ve!==null&&qn(ve,l),ge!==null&&qn(ge,l),yu.forEach(t),vu.forEach(t);for(var e=0;e<Se.length;e++){var a=Se[e];a.blockedOn===l&&(a.blockedOn=null)}for(;0<Se.length&&(e=Se[0],e.blockedOn===null);)fm(e),e.blockedOn===null&&Se.shift();if(e=(l.ownerDocument||l).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var u=e[a],n=e[a+1],i=u[Ql]||null;if(typeof n=="function")i||om(e);else if(i){var c=null;if(n&&n.hasAttribute("formAction")){if(u=n,i=n[Ql]||null)c=i.formAction;else if(lf(u)!==null)continue}else c=i.action;typeof c=="function"?e[a+1]=c:(e.splice(a,3),a-=3),om(e)}}}function rm(){function l(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(i){return u=i})},focusReset:"manual",scroll:"manual"})}function t(){u!==null&&(u(),u=null),a||setTimeout(e,20)}function e(){if(!a&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,u=null;return navigation.addEventListener("navigate",l),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(e,100),function(){a=!0,navigation.removeEventListener("navigate",l),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),u!==null&&(u(),u=null)}}}function ef(l){this._internalRoot=l}Yn.prototype.render=ef.prototype.render=function(l){var t=this._internalRoot;if(t===null)throw Error(y(409));var e=t.current,a=nt();em(e,a,l,t,null,null)},Yn.prototype.unmount=ef.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var t=l.containerInfo;em(l.current,2,null,l,null,null),gn(),t[Qe]=null}};function Yn(l){this._internalRoot=l}Yn.prototype.unstable_scheduleHydration=function(l){if(l){var t=pf();l={blockedOn:null,target:l,priority:t};for(var e=0;e<Se.length&&t!==0&&t<Se[e].priority;e++);Se.splice(e,0,l),e===0&&fm(l)}};var mm=rl.version;if(mm!=="19.2.4")throw Error(y(527,mm,"19.2.4"));T.findDOMNode=function(l){var t=l._reactInternals;if(t===void 0)throw typeof l.render=="function"?Error(y(188)):(l=Object.keys(l).join(","),Error(y(268,l)));return l=E(t),l=l!==null?$(l):null,l=l===null?null:l.stateNode,l};var wh={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gn.isDisabled&&Gn.supportsFiber)try{_a=Gn.inject(wh),$l=Gn}catch{}}return bu.createRoot=function(l,t){if(!H(l))throw Error(y(299));var e=!1,a="",u=bo,n=po,i=Ao;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(n=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=lm(l,1,!1,null,null,e,a,null,u,n,i,rm),l[Qe]=t.current,Yc(l),new ef(t)},bu.hydrateRoot=function(l,t,e){if(!H(l))throw Error(y(299));var a=!1,u="",n=bo,i=po,c=Ao,f=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(u=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.formState!==void 0&&(f=e.formState)),t=lm(l,1,!0,t,e??null,a,u,f,n,i,c,rm),t.context=tm(null),e=t.current,a=nt(),a=Jn(a),u=ae(a),u.callback=null,ue(e,u,a),e=a,t.current.lanes=e,Da(t,e),Ot(t),l[Qe]=t.current,Yc(l),new Yn(t)},bu.version="19.2.4",bu}var Em;function ty(){if(Em)return nf.exports;Em=1;function _(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_)}catch(rl){console.error(rl)}}return _(),nf.exports=ly(),nf.exports}var ey=ty();function ay(){const[_,rl]=Tm.useState(null),F=[{id:1,question:"1. Define Artificial Intelligence and explain its elements. (Reasoning, Learning, Problem Solving, Perception, Linguistic Intelligence)",answer:"",codeExample:`
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
      
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1111,question:"1. Write a program to implement Tic Tac Toe game.",answer:"",codeExample:`
# Tic Tac Toe Player vs AI (Minimax AI)

import math

# Create board
board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
]

PLAYER = 'X'
AI = 'O'


# Print board
def print_board():
    print("-------------")
    for i in range(3):
        print("|", board[i][0], "|", board[i][1], "|", board[i][2], "|")
        print("-------------")


# Check winner
def check_winner(player):

    # Rows
    for i in range(3):
        if board[i][0] == board[i][1] == board[i][2] == player:
            return True

    # Columns
    for j in range(3):
        if board[0][j] == board[1][j] == board[2][j] == player:
            return True

    # Diagonals
    if board[0][0] == board[1][1] == board[2][2] == player:
        return True

    if board[0][2] == board[1][1] == board[2][0] == player:
        return True

    return False


# Check draw
def is_full():
    for i in range(3):
        for j in range(3):
            if board[i][j] == ' ':
                return False
    return True


# Minimax Algorithm
def minimax(is_max):

    # If AI wins → +1
    if check_winner(AI):
        return 1

    # If Player wins → -1
    if check_winner(PLAYER):
        return -1

    # Draw → 0
    if is_full():
        return 0

    if is_max:  # AI turn (maximize score)
        best = -math.inf

        for i in range(3):
            for j in range(3):
                if board[i][j] == ' ':
                    board[i][j] = AI
                    score = minimax(False)
                    board[i][j] = ' '
                    best = max(best, score)

        return best

    else:  # Player turn (minimize score)
        best = math.inf

        for i in range(3):
            for j in range(3):
                if board[i][j] == ' ':
                    board[i][j] = PLAYER
                    score = minimax(True)
                    board[i][j] = ' '
                    best = min(best, score)

        return best


# AI Move
def ai_move():

    best_score = -math.inf
    move = (0, 0)

    for i in range(3):
        for j in range(3):
            if board[i][j] == ' ':
                board[i][j] = AI
                score = minimax(False)
                board[i][j] = ' '

                if score > best_score:
                    best_score = score
                    move = (i, j)

    board[move[0]][move[1]] = AI


# Game Loop
while True:

    print_board()

    # Player Move
    row = int(input("Enter row (0-2): "))
    col = int(input("Enter column (0-2): "))

    if board[row][col] != ' ':
        print("Invalid Move")
        continue

    board[row][col] = PLAYER

    if check_winner(PLAYER):
        print_board()
        print("🎉 You Win!")
        break

    if is_full():
        print_board()
        print("Game Draw")
        break

    # AI Move
    print("AI is thinking...")
    ai_move()

    if check_winner(AI):
        print_board()
        print("AI Wins 🤖")
        break

    if is_full():
        print_board()
        print("Game Draw")
        break



OUTPUT:

-------------
|   |   |   |    
-------------    
|   |   |   |    
-------------    
|   |   |   |    
-------------    
Enter row (0-2): 1
Enter column (0-2): 1
AI is thinking...
-------------
| O |   |   |
-------------
|   | X |   |
-------------
|   |   |   |
-------------
Enter row (0-2): 




------------------------------------------------------------------------


if you not used AI only two User are perform to used this code:


# Tic Tac Toe - 2 Player

# Create board
board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
]

# Print board
def print_board():
    print("-------------")
    for i in range(3):
        print("|", board[i][0], "|", board[i][1], "|", board[i][2], "|")
        print("-------------")

# Check winner
def check_winner(player):

    # Rows
    for i in range(3):
        if board[i][0] == board[i][1] == board[i][2] == player:
            return True

    # Columns
    for j in range(3):
        if board[0][j] == board[1][j] == board[2][j] == player:
            return True

    # Diagonals
    if board[0][0] == board[1][1] == board[2][2] == player:
        return True

    if board[0][2] == board[1][1] == board[2][0] == player:
        return True

    return False

# Check draw
def is_full():
    for i in range(3):
        for j in range(3):
            if board[i][j] == ' ':
                return False
    return True


# Game Loop (2 Players)
current_player = 'X'

while True:

    print_board()
    print("Player", current_player, "turn")

    row = int(input("Enter row (0-2): "))
    col = int(input("Enter column (0-2): "))

    if board[row][col] != ' ':
        print("Invalid Move")
        continue

    board[row][col] = current_player

    if check_winner(current_player):
        print_board()
        print("🎉 Player", current_player, "Wins!")
        break

    if is_full():
        print_board()
        print("Game Draw")
        break

    # Switch player
    if current_player == 'X':
        current_player = 'O'
    else:
        current_player = 'X'



OUTPUT:

-------------
|   |   |   |
-------------
|   |   |   |
-------------
|   |   |   |
-------------

Player X turn
Enter row (0-2): 0 
Enter column (0-2): 1
-------------
|   | X |   |
-------------
|   |   |   |
-------------
|   |   |   |
-------------

Player O turn
Enter row (0-2): 1
Enter column (0-2): 1
-------------
|   | X |   |
-------------
|   | O |   |
-------------
|   |   |   |
-------------

Player X turn
      `},{id:2.2,question:"2. Write a program to implement BFS 8 Puzzle problem.",answer:"",codeExample:`
from collections import deque

goal = (1,2,3,4,5,6,7,8,0)

def print_grid(state):
    for i in range(0, 9, 3):
        print(state[i:i+3]) 
    print()


def bfs(start):
    q = deque([(start, start.index(0), [])])
    visited = set()

    while q:
        state, blank, path = q.popleft()

        if state == goal:
            return path + [state]

        if state in visited:
            continue
        visited.add(state)

        moves = []
        r, c = divmod(blank, 3)

        if r > 0: moves.append(blank - 3)   # Up
        if r < 2: moves.append(blank + 3)   # Down
        if c > 0: moves.append(blank - 1)   # Left
        if c < 2: moves.append(blank + 1)   # Right

        for m in moves:
            new = list(state)
            new[blank], new[m] = new[m], new[blank]
            q.append((tuple(new), m, path + [state]))

    return None


# Example start state
start = (1,2,3,
         4,0,6,
         7,5,8)

solution = bfs(start)

if solution:
    for step in solution:
        print_grid(step)
else:
    print("No solution found.")



OUTPUT:

(1, 2, 3)
(4, 0, 6)
(7, 5, 8)

(1, 2, 3)
(4, 5, 6)
(7, 0, 8)

(1, 2, 3)
(4, 5, 6)
(7, 8, 0)

      
      `},{id:3.3,question:"3. Write a program to implement DFS Water Jug Problem.",answer:"",codeExample:`
def water_jug_manual():
    cap1 = int(input("Enter capacity of Jug 1: "))
    cap2 = int(input("Enter capacity of Jug 2: "))

    print("Enter target amounts for both jugs:")
    target1 = int(input("Target for Jug 1: "))
    target2 = int(input("Target for Jug 2: "))

    x, y = 0, 0   # Initial state

    while True:
        print("
Current State: ({}, {})".format(x, y))

        # Check if BOTH targets reached
        if x == target1 and y == target2:
            print("Congratulations! You reached the target state.")
            break

        print("
Choose an operation:")
        print("1. Fill Jug 1")
        print("2. Fill Jug 2")
        print("3. Empty Jug 1")
        print("4. Empty Jug 2")
        print("5. Pour Jug 1 -> Jug 2")
        print("6. Pour Jug 2 -> Jug 1")
        print("7. Exit")

        choice = int(input("Enter your choice: "))

        if choice == 1:
            x = cap1
        elif choice == 2:
            y = cap2
        elif choice == 3:
            x = 0
        elif choice == 4:
            y = 0
        elif choice == 5:
            transfer = min(x, cap2 - y)
            x -= transfer
            y += transfer
        elif choice == 6:
            transfer = min(y, cap1 - x)
            y -= transfer
            x += transfer
        elif choice == 7:
            print("Exiting...")
            break
        else:
            print("Invalid choice. Try again.")

# Run program
water_jug_manual()



OUTPUT:

Enter capacity of Jug 1: 5
Enter capacity of Jug 2: 3
Enter target amounts for both jugs:
Target for Jug 1: 3
Target for Jug 2: 0

Current State: (0, 0)

Choose an operation:
1. Fill Jug 1
2. Fill Jug 2
3. Empty Jug 1
4. Empty Jug 2
5. Pour Jug 1 -> Jug 2
6. Pour Jug 2 -> Jug 1
7. Exit
Enter your choice: 2

Current State: (0, 3)

Choose an operation:
1. Fill Jug 1
2. Fill Jug 2
3. Empty Jug 1
4. Empty Jug 2
5. Pour Jug 1 -> Jug 2
6. Pour Jug 2 -> Jug 1
7. Exit
Enter your choice: 6

Current State: (3, 0)
Congratulations! You reached the target state.
      
      `},{id:4.4,question:"4. Write a program to implement N Queens Problem.",answer:"",codeExample:`
n = int(input("Enter value of n: "))

board = [[0 for i in range(n)] for j in range(n)]


def printBoard():
    for row in board:
        print(*row)


def isSafe(row, col):

    # Check column
    for i in range(row):
        if board[i][col] == 1:
            return False

    # Check upper left diagonal
    i = row - 1
    j = col - 1
    while i >= 0 and j >= 0:
        if board[i][j] == 1:
            return False
        i -= 1
        j -= 1

    # Check upper right diagonal
    i = row - 1
    j = col + 1
    while i >= 0 and j < n:
        if board[i][j] == 1:
            return False
        i -= 1
        j += 1

    return True


def solve(row):
    if row == n:
        return True

    for col in range(n):

        if isSafe(row, col):
            board[row][col] = 1

            if solve(row + 1):
                return True

            board[row][col] = 0   # Backtrack

    return False


# Run
if solve(0):
    printBoard()
else:
    print("No Solution")



OUTPUT:

Enter value of n: 4
0 1 0 0
0 0 0 1
0 0 0 1
1 0 0 0
0 0 1 0



Enter value of n: 3
No Solution
      `},{id:6.6,question:"6. Write a prolog program for the family tree.",answer:"",codeExample:`
/* SIMPLE FAMILY CHATBOT */

% -------- FACTS --------
male(john).
male(paul).
male(david).

female(mary).
female(lisa).

parent(john, paul).
parent(john, mary).
parent(lisa, paul).
parent(lisa, mary).
parent(paul, david).

% -------- RULES --------
father(X, Y) :- parent(X, Y), male(X).
mother(X, Y) :- parent(X, Y), female(X).
sibling(X, Y) :- parent(Z, X), parent(Z, Y), X = Y.
grandparent(X, Y) :- parent(X, Z), parent(Z, Y).

% -------- START --------
:- initialization(main).

main :-
    write('FAMILY CHATBOT STARTED'), nl,
    write('Type a query like father(john,paul).'), nl,
    write('Type stop. to exit.'), nl,
    chat.

chat :-
    read(Q),
    ( Q = stop ->
        write('Goodbye!'), nl
    ;
        answer(Q),
        chat
    ).

% -------- RESPONSES --------
answer(father(X,Y)) :-
    ( father(X,Y) ->
        write('Yes, correct.'), nl
    ;
        write('No, wrong.'), nl
    ).

answer(mother(X,Y)) :-
    ( mother(X,Y) ->
        write('Yes, correct.'), nl
    ;
        write('No, wrong.'), nl
    ).

answer(sibling(X,Y)) :-
    ( sibling(X,Y) ->
        write('Yes, they are siblings.'), nl
    ;
        write('No, they are not siblings.'), nl
    ).

answer(grandparent(X,Y)) :-
    ( grandparent(X,Y) ->
        write('Yes, correct.'), nl
    ;
        write('No, wrong.'), nl
    ).

answer(_) :-
    write('I do not understand.'), nl.




They must be typed in console like this:

father(john,paul).
mother(lisa,mary).
sibling(paul,mary).
grandparent(john,david).
stop.


OUTPUT:

FAMILY CHATBOT STARTED
Type a query like father(john,paul).
Type stop. to exit.
Yes, correct.
Yes, correct.
Yes, correct.
Yes, correct.
GoodBye!
      
      `},{id:1,question:"1. ",answer:"",codeExample:""}],y=H=>{rl(_===H?null:H)};return Bl.jsxs("div",{className:"app-container",children:[Bl.jsx("h1",{children:"AI Interview Questions"}),Bl.jsx("div",{className:"questions-container",children:F.map(H=>Bl.jsxs("div",{className:"question-item",children:[Bl.jsx("button",{className:`question-button ${_===H.id?"active":""}`,onClick:()=>y(H.id),children:H.question}),_===H.id&&Bl.jsxs("div",{className:"answer-container",children:[Bl.jsxs("div",{className:"answer",children:[Bl.jsx("h3",{children:"Answer:"}),Bl.jsx("p",{children:H.answer})]}),H.codeExample&&Bl.jsxs("div",{className:"code-example",children:[Bl.jsx("h3",{children:"Code Example:"}),Bl.jsx("pre",{children:Bl.jsx("code",{children:H.codeExample})})]})]})]},H.id))})]})}ey.createRoot(document.getElementById("root")).render(Bl.jsx(Tm.StrictMode,{children:Bl.jsx(ay,{})}));

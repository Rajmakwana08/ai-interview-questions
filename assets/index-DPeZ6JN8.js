(function(){const re=document.createElement("link").relList;if(re&&re.supports&&re.supports("modulepreload"))return;for(const R of document.querySelectorAll('link[rel="modulepreload"]'))g(R);new MutationObserver(R=>{for(const K of R)if(K.type==="childList")for(const he of K.addedNodes)he.tagName==="LINK"&&he.rel==="modulepreload"&&g(he)}).observe(document,{childList:!0,subtree:!0});function F(R){const K={};return R.integrity&&(K.integrity=R.integrity),R.referrerPolicy&&(K.referrerPolicy=R.referrerPolicy),R.crossOrigin==="use-credentials"?K.credentials="include":R.crossOrigin==="anonymous"?K.credentials="omit":K.credentials="same-origin",K}function g(R){if(R.ep)return;R.ep=!0;const K=F(R);fetch(R.href,K)}})();var ls={exports:{}},Sn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function Jh(){if(dm)return Sn;dm=1;var x=Symbol.for("react.transitional.element"),re=Symbol.for("react.fragment");function F(g,R,K){var he=null;if(K!==void 0&&(he=""+K),R.key!==void 0&&(he=""+R.key),"key"in R){K={};for(var Re in R)Re!=="key"&&(K[Re]=R[Re])}else K=R;return R=K.ref,{$$typeof:x,type:g,key:he,ref:R!==void 0?R:null,props:K}}return Sn.Fragment=re,Sn.jsx=F,Sn.jsxs=F,Sn}var hm;function Kh(){return hm||(hm=1,ls.exports=Jh()),ls.exports}var Be=Kh(),ns={exports:{}},U={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function Ih(){if(gm)return U;gm=1;var x=Symbol.for("react.transitional.element"),re=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),he=Symbol.for("react.context"),Re=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),oe=Symbol.iterator;function Ke(f){return f===null||typeof f!="object"?null:(f=oe&&f[oe]||f["@@iterator"],typeof f=="function"?f:null)}var je={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ne=Object.assign,Dt={};function Ie(f,A,M){this.props=f,this.context=A,this.refs=Dt,this.updater=M||je}Ie.prototype.isReactComponent={},Ie.prototype.setState=function(f,A){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,A,"setState")},Ie.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function Kt(){}Kt.prototype=Ie.prototype;function Oe(f,A,M){this.props=f,this.context=A,this.refs=Dt,this.updater=M||je}var ut=Oe.prototype=new Kt;ut.constructor=Oe,Ne(ut,Ie.prototype),ut.isPureReactComponent=!0;var At=Array.isArray;function qe(){}var k={H:null,A:null,T:null,S:null},Ye=Object.prototype.hasOwnProperty;function Et(f,A,M){var C=M.ref;return{$$typeof:x,type:f,key:A,ref:C!==void 0?C:null,props:M}}function Xa(f,A){return Et(f.type,A,f.props)}function Tt(f){return typeof f=="object"&&f!==null&&f.$$typeof===x}function Xe(f){var A={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(M){return A[M]})}var ba=/\/+/g;function _t(f,A){return typeof f=="object"&&f!==null&&f.key!=null?Xe(""+f.key):A.toString(36)}function pt(f){switch(f.status){case"fulfilled":return f.value;case"rejected":throw f.reason;default:switch(typeof f.status=="string"?f.then(qe,qe):(f.status="pending",f.then(function(A){f.status==="pending"&&(f.status="fulfilled",f.value=A)},function(A){f.status==="pending"&&(f.status="rejected",f.reason=A)})),f.status){case"fulfilled":return f.value;case"rejected":throw f.reason}}throw f}function v(f,A,M,C,B){var Y=typeof f;(Y==="undefined"||Y==="boolean")&&(f=null);var $=!1;if(f===null)$=!0;else switch(Y){case"bigint":case"string":case"number":$=!0;break;case"object":switch(f.$$typeof){case x:case re:$=!0;break;case W:return $=f._init,v($(f._payload),A,M,C,B)}}if($)return B=B(f),$=C===""?"."+_t(f,0):C,At(B)?(M="",$!=null&&(M=$.replace(ba,"$&/")+"/"),v(B,A,M,"",function(zl){return zl})):B!=null&&(Tt(B)&&(B=Xa(B,M+(B.key==null||f&&f.key===B.key?"":(""+B.key).replace(ba,"$&/")+"/")+$)),A.push(B)),1;$=0;var He=C===""?".":C+":";if(At(f))for(var ge=0;ge<f.length;ge++)C=f[ge],Y=He+_t(C,ge),$+=v(C,A,M,Y,B);else if(ge=Ke(f),typeof ge=="function")for(f=ge.call(f),ge=0;!(C=f.next()).done;)C=C.value,Y=He+_t(C,ge++),$+=v(C,A,M,Y,B);else if(Y==="object"){if(typeof f.then=="function")return v(pt(f),A,M,C,B);throw A=String(f),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return $}function T(f,A,M){if(f==null)return f;var C=[],B=0;return v(f,C,"","",function(Y){return A.call(M,Y,B++)}),C}function H(f){if(f._status===-1){var A=f._result;A=A(),A.then(function(M){(f._status===0||f._status===-1)&&(f._status=1,f._result=M)},function(M){(f._status===0||f._status===-1)&&(f._status=2,f._result=M)}),f._status===-1&&(f._status=0,f._result=A)}if(f._status===1)return f._result.default;throw f._result}var te=typeof reportError=="function"?reportError:function(f){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof f=="object"&&f!==null&&typeof f.message=="string"?String(f.message):String(f),error:f});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",f);return}console.error(f)},ie={map:T,forEach:function(f,A,M){T(f,function(){A.apply(this,arguments)},M)},count:function(f){var A=0;return T(f,function(){A++}),A},toArray:function(f){return T(f,function(A){return A})||[]},only:function(f){if(!Tt(f))throw Error("React.Children.only expected to receive a single React element child.");return f}};return U.Activity=N,U.Children=ie,U.Component=Ie,U.Fragment=F,U.Profiler=R,U.PureComponent=Oe,U.StrictMode=g,U.Suspense=O,U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,U.__COMPILER_RUNTIME={__proto__:null,c:function(f){return k.H.useMemoCache(f)}},U.cache=function(f){return function(){return f.apply(null,arguments)}},U.cacheSignal=function(){return null},U.cloneElement=function(f,A,M){if(f==null)throw Error("The argument must be a React element, but you passed "+f+".");var C=Ne({},f.props),B=f.key;if(A!=null)for(Y in A.key!==void 0&&(B=""+A.key),A)!Ye.call(A,Y)||Y==="key"||Y==="__self"||Y==="__source"||Y==="ref"&&A.ref===void 0||(C[Y]=A[Y]);var Y=arguments.length-2;if(Y===1)C.children=M;else if(1<Y){for(var $=Array(Y),He=0;He<Y;He++)$[He]=arguments[He+2];C.children=$}return Et(f.type,B,C)},U.createContext=function(f){return f={$$typeof:he,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null},f.Provider=f,f.Consumer={$$typeof:K,_context:f},f},U.createElement=function(f,A,M){var C,B={},Y=null;if(A!=null)for(C in A.key!==void 0&&(Y=""+A.key),A)Ye.call(A,C)&&C!=="key"&&C!=="__self"&&C!=="__source"&&(B[C]=A[C]);var $=arguments.length-2;if($===1)B.children=M;else if(1<$){for(var He=Array($),ge=0;ge<$;ge++)He[ge]=arguments[ge+2];B.children=He}if(f&&f.defaultProps)for(C in $=f.defaultProps,$)B[C]===void 0&&(B[C]=$[C]);return Et(f,Y,B)},U.createRef=function(){return{current:null}},U.forwardRef=function(f){return{$$typeof:Re,render:f}},U.isValidElement=Tt,U.lazy=function(f){return{$$typeof:W,_payload:{_status:-1,_result:f},_init:H}},U.memo=function(f,A){return{$$typeof:E,type:f,compare:A===void 0?null:A}},U.startTransition=function(f){var A=k.T,M={};k.T=M;try{var C=f(),B=k.S;B!==null&&B(M,C),typeof C=="object"&&C!==null&&typeof C.then=="function"&&C.then(qe,te)}catch(Y){te(Y)}finally{A!==null&&M.types!==null&&(A.types=M.types),k.T=A}},U.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},U.use=function(f){return k.H.use(f)},U.useActionState=function(f,A,M){return k.H.useActionState(f,A,M)},U.useCallback=function(f,A){return k.H.useCallback(f,A)},U.useContext=function(f){return k.H.useContext(f)},U.useDebugValue=function(){},U.useDeferredValue=function(f,A){return k.H.useDeferredValue(f,A)},U.useEffect=function(f,A){return k.H.useEffect(f,A)},U.useEffectEvent=function(f){return k.H.useEffectEvent(f)},U.useId=function(){return k.H.useId()},U.useImperativeHandle=function(f,A,M){return k.H.useImperativeHandle(f,A,M)},U.useInsertionEffect=function(f,A){return k.H.useInsertionEffect(f,A)},U.useLayoutEffect=function(f,A){return k.H.useLayoutEffect(f,A)},U.useMemo=function(f,A){return k.H.useMemo(f,A)},U.useOptimistic=function(f,A){return k.H.useOptimistic(f,A)},U.useReducer=function(f,A,M){return k.H.useReducer(f,A,M)},U.useRef=function(f){return k.H.useRef(f)},U.useState=function(f){return k.H.useState(f)},U.useSyncExternalStore=function(f,A,M){return k.H.useSyncExternalStore(f,A,M)},U.useTransition=function(){return k.H.useTransition()},U.version="19.2.4",U}var ym;function os(){return ym||(ym=1,ns.exports=Ih()),ns.exports}var Tm=os(),is={exports:{}},bn={},us={exports:{}},cs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function Fh(){return pm||(pm=1,(function(x){function re(v,T){var H=v.length;v.push(T);e:for(;0<H;){var te=H-1>>>1,ie=v[te];if(0<R(ie,T))v[te]=T,v[H]=ie,H=te;else break e}}function F(v){return v.length===0?null:v[0]}function g(v){if(v.length===0)return null;var T=v[0],H=v.pop();if(H!==T){v[0]=H;e:for(var te=0,ie=v.length,f=ie>>>1;te<f;){var A=2*(te+1)-1,M=v[A],C=A+1,B=v[C];if(0>R(M,H))C<ie&&0>R(B,M)?(v[te]=B,v[C]=H,te=C):(v[te]=M,v[A]=H,te=A);else if(C<ie&&0>R(B,H))v[te]=B,v[C]=H,te=C;else break e}}return T}function R(v,T){var H=v.sortIndex-T.sortIndex;return H!==0?H:v.id-T.id}if(x.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var K=performance;x.unstable_now=function(){return K.now()}}else{var he=Date,Re=he.now();x.unstable_now=function(){return he.now()-Re}}var O=[],E=[],W=1,N=null,oe=3,Ke=!1,je=!1,Ne=!1,Dt=!1,Ie=typeof setTimeout=="function"?setTimeout:null,Kt=typeof clearTimeout=="function"?clearTimeout:null,Oe=typeof setImmediate<"u"?setImmediate:null;function ut(v){for(var T=F(E);T!==null;){if(T.callback===null)g(E);else if(T.startTime<=v)g(E),T.sortIndex=T.expirationTime,re(O,T);else break;T=F(E)}}function At(v){if(Ne=!1,ut(v),!je)if(F(O)!==null)je=!0,qe||(qe=!0,Xe());else{var T=F(E);T!==null&&pt(At,T.startTime-v)}}var qe=!1,k=-1,Ye=5,Et=-1;function Xa(){return Dt?!0:!(x.unstable_now()-Et<Ye)}function Tt(){if(Dt=!1,qe){var v=x.unstable_now();Et=v;var T=!0;try{e:{je=!1,Ne&&(Ne=!1,Kt(k),k=-1),Ke=!0;var H=oe;try{t:{for(ut(v),N=F(O);N!==null&&!(N.expirationTime>v&&Xa());){var te=N.callback;if(typeof te=="function"){N.callback=null,oe=N.priorityLevel;var ie=te(N.expirationTime<=v);if(v=x.unstable_now(),typeof ie=="function"){N.callback=ie,ut(v),T=!0;break t}N===F(O)&&g(O),ut(v)}else g(O);N=F(O)}if(N!==null)T=!0;else{var f=F(E);f!==null&&pt(At,f.startTime-v),T=!1}}break e}finally{N=null,oe=H,Ke=!1}T=void 0}}finally{T?Xe():qe=!1}}}var Xe;if(typeof Oe=="function")Xe=function(){Oe(Tt)};else if(typeof MessageChannel<"u"){var ba=new MessageChannel,_t=ba.port2;ba.port1.onmessage=Tt,Xe=function(){_t.postMessage(null)}}else Xe=function(){Ie(Tt,0)};function pt(v,T){k=Ie(function(){v(x.unstable_now())},T)}x.unstable_IdlePriority=5,x.unstable_ImmediatePriority=1,x.unstable_LowPriority=4,x.unstable_NormalPriority=3,x.unstable_Profiling=null,x.unstable_UserBlockingPriority=2,x.unstable_cancelCallback=function(v){v.callback=null},x.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ye=0<v?Math.floor(1e3/v):5},x.unstable_getCurrentPriorityLevel=function(){return oe},x.unstable_next=function(v){switch(oe){case 1:case 2:case 3:var T=3;break;default:T=oe}var H=oe;oe=T;try{return v()}finally{oe=H}},x.unstable_requestPaint=function(){Dt=!0},x.unstable_runWithPriority=function(v,T){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var H=oe;oe=v;try{return T()}finally{oe=H}},x.unstable_scheduleCallback=function(v,T,H){var te=x.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?te+H:te):H=te,v){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=H+ie,v={id:W++,callback:T,priorityLevel:v,startTime:H,expirationTime:ie,sortIndex:-1},H>te?(v.sortIndex=H,re(E,v),F(O)===null&&v===F(E)&&(Ne?(Kt(k),k=-1):Ne=!0,pt(At,H-te))):(v.sortIndex=ie,re(O,v),je||Ke||(je=!0,qe||(qe=!0,Xe()))),v},x.unstable_shouldYield=Xa,x.unstable_wrapCallback=function(v){var T=oe;return function(){var H=oe;oe=T;try{return v.apply(this,arguments)}finally{oe=H}}}})(cs)),cs}var vm;function Wh(){return vm||(vm=1,us.exports=Fh()),us.exports}var ss={exports:{}},we={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function $h(){if(Sm)return we;Sm=1;var x=os();function re(O){var E="https://react.dev/errors/"+O;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var W=2;W<arguments.length;W++)E+="&args[]="+encodeURIComponent(arguments[W])}return"Minified React error #"+O+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function F(){}var g={d:{f:F,r:function(){throw Error(re(522))},D:F,C:F,L:F,m:F,X:F,S:F,M:F},p:0,findDOMNode:null},R=Symbol.for("react.portal");function K(O,E,W){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:N==null?null:""+N,children:O,containerInfo:E,implementation:W}}var he=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Re(O,E){if(O==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return we.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=g,we.createPortal=function(O,E){var W=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(re(299));return K(O,E,null,W)},we.flushSync=function(O){var E=he.T,W=g.p;try{if(he.T=null,g.p=2,O)return O()}finally{he.T=E,g.p=W,g.d.f()}},we.preconnect=function(O,E){typeof O=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,g.d.C(O,E))},we.prefetchDNS=function(O){typeof O=="string"&&g.d.D(O)},we.preinit=function(O,E){if(typeof O=="string"&&E&&typeof E.as=="string"){var W=E.as,N=Re(W,E.crossOrigin),oe=typeof E.integrity=="string"?E.integrity:void 0,Ke=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;W==="style"?g.d.S(O,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:N,integrity:oe,fetchPriority:Ke}):W==="script"&&g.d.X(O,{crossOrigin:N,integrity:oe,fetchPriority:Ke,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},we.preinitModule=function(O,E){if(typeof O=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var W=Re(E.as,E.crossOrigin);g.d.M(O,{crossOrigin:W,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0})}}else E==null&&g.d.M(O)},we.preload=function(O,E){if(typeof O=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var W=E.as,N=Re(W,E.crossOrigin);g.d.L(O,W,{crossOrigin:N,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},we.preloadModule=function(O,E){if(typeof O=="string")if(E){var W=Re(E.as,E.crossOrigin);g.d.m(O,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:W,integrity:typeof E.integrity=="string"?E.integrity:void 0})}else g.d.m(O)},we.requestFormReset=function(O){g.d.r(O)},we.unstable_batchedUpdates=function(O,E){return O(E)},we.useFormState=function(O,E,W){return he.H.useFormState(O,E,W)},we.useFormStatus=function(){return he.H.useHostTransitionStatus()},we.version="19.2.4",we}var bm;function Ph(){if(bm)return ss.exports;bm=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(re){console.error(re)}}return x(),ss.exports=$h(),ss.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function eg(){if(Am)return bn;Am=1;var x=Wh(),re=os(),F=Ph();function g(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function R(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function K(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function he(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Re(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function O(e){if(K(e)!==e)throw Error(g(188))}function E(e){var t=e.alternate;if(!t){if(t=K(e),t===null)throw Error(g(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return O(n),e;if(i===l)return O(n),t;i=i.sibling}throw Error(g(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,c=n.child;c;){if(c===a){u=!0,a=n,l=i;break}if(c===l){u=!0,l=n,a=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===a){u=!0,a=i,l=n;break}if(c===l){u=!0,l=i,a=n;break}c=c.sibling}if(!u)throw Error(g(189))}}if(a.alternate!==l)throw Error(g(190))}if(a.tag!==3)throw Error(g(188));return a.stateNode.current===a?e:t}function W(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=W(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,oe=Symbol.for("react.element"),Ke=Symbol.for("react.transitional.element"),je=Symbol.for("react.portal"),Ne=Symbol.for("react.fragment"),Dt=Symbol.for("react.strict_mode"),Ie=Symbol.for("react.profiler"),Kt=Symbol.for("react.consumer"),Oe=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),At=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),Xa=Symbol.for("react.memo_cache_sentinel"),Tt=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=Tt&&e[Tt]||e["@@iterator"],typeof e=="function"?e:null)}var ba=Symbol.for("react.client.reference");function _t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ba?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ne:return"Fragment";case Ie:return"Profiler";case Dt:return"StrictMode";case At:return"Suspense";case qe:return"SuspenseList";case Et:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case je:return"Portal";case Oe:return e.displayName||"Context";case Kt:return(e._context.displayName||"Context")+".Consumer";case ut:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case k:return t=e.displayName||null,t!==null?t:_t(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return _t(e(t))}catch{}}return null}var pt=Array.isArray,v=re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=F.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},te=[],ie=-1;function f(e){return{current:e}}function A(e){0>ie||(e.current=te[ie],te[ie]=null,ie--)}function M(e,t){ie++,te[ie]=e.current,e.current=t}var C=f(null),B=f(null),Y=f(null),$=f(null);function He(e,t){switch(M(Y,t),M(B,e),M(C,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Br(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Br(t),e=jr(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}A(C),M(C,e)}function ge(){A(C),A(B),A(Y)}function zl(e){e.memoizedState!==null&&M($,e);var t=C.current,a=jr(t,e.type);t!==a&&(M(B,e),M(C,a))}function An(e){B.current===e&&(A(C),A(B)),$.current===e&&(A($),gn._currentValue=H)}var Yi,fs;function Aa(e){if(Yi===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Yi=t&&t[1]||"",fs=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yi+e+fs}var Xi=!1;function Gi(e,t){if(!e||Xi)return"";Xi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(y){var h=y}Reflect.construct(e,[],b)}else{try{b.call()}catch(y){h=y}e.call(b.prototype)}}else{try{throw Error()}catch(y){h=y}(b=e())&&typeof b.catch=="function"&&b.catch(function(){})}}catch(y){if(y&&h&&typeof y.stack=="string")return[y.stack,h.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var s=u.split(`
`),d=c.split(`
`);for(n=l=0;l<s.length&&!s[l].includes("DetermineComponentFrameRoot");)l++;for(;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;if(l===s.length||n===d.length)for(l=s.length-1,n=d.length-1;1<=l&&0<=n&&s[l]!==d[n];)n--;for(;1<=l&&0<=n;l--,n--)if(s[l]!==d[n]){if(l!==1||n!==1)do if(l--,n--,0>n||s[l]!==d[n]){var p=`
`+s[l].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=l&&0<=n);break}}}finally{Xi=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Aa(a):""}function Mm(e,t){switch(e.tag){case 26:case 27:case 5:return Aa(e.type);case 16:return Aa("Lazy");case 13:return e.child!==t&&t!==null?Aa("Suspense Fallback"):Aa("Suspense");case 19:return Aa("SuspenseList");case 0:case 15:return Gi(e.type,!1);case 11:return Gi(e.type.render,!1);case 1:return Gi(e.type,!0);case 31:return Aa("Activity");default:return""}}function rs(e){try{var t="",a=null;do t+=Mm(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Qi=Object.prototype.hasOwnProperty,Li=x.unstable_scheduleCallback,ki=x.unstable_cancelCallback,zm=x.unstable_shouldYield,xm=x.unstable_requestPaint,Fe=x.unstable_now,Cm=x.unstable_getCurrentPriorityLevel,ms=x.unstable_ImmediatePriority,ds=x.unstable_UserBlockingPriority,En=x.unstable_NormalPriority,Dm=x.unstable_LowPriority,hs=x.unstable_IdlePriority,_m=x.log,Om=x.unstable_setDisableYieldValue,xl=null,We=null;function It(e){if(typeof _m=="function"&&Om(e),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(xl,e)}catch{}}var $e=Math.clz32?Math.clz32:Nm,wm=Math.log,Rm=Math.LN2;function Nm(e){return e>>>=0,e===0?32:31-(wm(e)/Rm|0)|0}var Tn=256,Mn=262144,zn=4194304;function Ea(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var c=l&134217727;return c!==0?(l=c&~i,l!==0?n=Ea(l):(u&=c,u!==0?n=Ea(u):a||(a=c&~e,a!==0&&(n=Ea(a))))):(c=l&~i,c!==0?n=Ea(c):u!==0?n=Ea(u):a||(a=l&~e,a!==0&&(n=Ea(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Cl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Hm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gs(){var e=zn;return zn<<=1,(zn&62914560)===0&&(zn=4194304),e}function Zi(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Dl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Um(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,s=e.expirationTimes,d=e.hiddenUpdates;for(a=u&~a;0<a;){var p=31-$e(a),b=1<<p;c[p]=0,s[p]=-1;var h=d[p];if(h!==null)for(d[p]=null,p=0;p<h.length;p++){var y=h[p];y!==null&&(y.lane&=-536870913)}a&=~b}l!==0&&ys(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function ys(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-$e(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function ps(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-$e(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function vs(e,t){var a=t&-t;return a=(a&42)!==0?1:Vi(a),(a&(e.suspendedLanes|t))!==0?0:a}function Vi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ji(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ss(){var e=T.p;return e!==0?e:(e=window.event,e===void 0?32:um(e.type))}function bs(e,t){var a=T.p;try{return T.p=e,t()}finally{T.p=a}}var Ft=Math.random().toString(36).slice(2),ze="__reactFiber$"+Ft,Ge="__reactProps$"+Ft,Ga="__reactContainer$"+Ft,Ki="__reactEvents$"+Ft,Bm="__reactListeners$"+Ft,jm="__reactHandles$"+Ft,As="__reactResources$"+Ft,_l="__reactMarker$"+Ft;function Ii(e){delete e[ze],delete e[Ge],delete e[Ki],delete e[Bm],delete e[jm]}function Qa(e){var t=e[ze];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ga]||a[ze]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=kr(e);e!==null;){if(a=e[ze])return a;e=kr(e)}return t}e=a,a=e.parentNode}return null}function La(e){if(e=e[ze]||e[Ga]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ol(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(g(33))}function ka(e){var t=e[As];return t||(t=e[As]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Te(e){e[_l]=!0}var Es=new Set,Ts={};function Ta(e,t){Za(e,t),Za(e+"Capture",t)}function Za(e,t){for(Ts[e]=t,e=0;e<t.length;e++)Es.add(t[e])}var qm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ms={},zs={};function Ym(e){return Qi.call(zs,e)?!0:Qi.call(Ms,e)?!1:qm.test(e)?zs[e]=!0:(Ms[e]=!0,!1)}function Cn(e,t,a){if(Ym(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Dn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ot(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xm(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fi(e){if(!e._valueTracker){var t=xs(e)?"checked":"value";e._valueTracker=Xm(e,t,""+e[t])}}function Cs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=xs(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function _n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Gm=/[\n"\\]/g;function st(e){return e.replace(Gm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Wi(e,t,a,l,n,i,u,c){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?$i(e,u,ct(t)):a!=null?$i(e,u,ct(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+ct(c):e.removeAttribute("name")}function Ds(e,t,a,l,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Fi(e);return}a=a!=null?""+ct(a):"",t=t!=null?""+ct(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=c?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Fi(e)}function $i(e,t,a){t==="number"&&_n(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Va(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+ct(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function _s(e,t,a){if(t!=null&&(t=""+ct(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ct(a):""}function Os(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(g(92));if(pt(l)){if(1<l.length)throw Error(g(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=ct(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Fi(e)}function Ja(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Qm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ws(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Qm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Rs(e,t,a){if(t!=null&&typeof t!="object")throw Error(g(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&ws(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&ws(e,i,t[i])}function Pi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),km=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function On(e){return km.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function wt(){}var eu=null;function tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ka=null,Ia=null;function Ns(e){var t=La(e);if(t&&(e=t.stateNode)){var a=e[Ge]||null;e:switch(e=t.stateNode,t.type){case"input":if(Wi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+st(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Ge]||null;if(!n)throw Error(g(90));Wi(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Cs(l)}break e;case"textarea":_s(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Va(e,!!a.multiple,t,!1)}}}var au=!1;function Hs(e,t,a){if(au)return e(t,a);au=!0;try{var l=e(t);return l}finally{if(au=!1,(Ka!==null||Ia!==null)&&(pi(),Ka&&(t=Ka,e=Ia,Ia=Ka=null,Ns(t),e)))for(t=0;t<e.length;t++)Ns(e[t])}}function wl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Ge]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(g(231,t,typeof a));return a}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=!1;if(Rt)try{var Rl={};Object.defineProperty(Rl,"passive",{get:function(){lu=!0}}),window.addEventListener("test",Rl,Rl),window.removeEventListener("test",Rl,Rl)}catch{lu=!1}var Wt=null,nu=null,wn=null;function Us(){if(wn)return wn;var e,t=nu,a=t.length,l,n="value"in Wt?Wt.value:Wt.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return wn=n.slice(e,1<l?1-l:void 0)}function Rn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nn(){return!0}function Bs(){return!1}function Qe(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Nn:Bs,this.isPropagationStopped=Bs,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Nn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Nn)},persist:function(){},isPersistent:Nn}),t}var Ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hn=Qe(Ma),Nl=N({},Ma,{view:0,detail:0}),Zm=Qe(Nl),iu,uu,Hl,Un=N({},Nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hl&&(Hl&&e.type==="mousemove"?(iu=e.screenX-Hl.screenX,uu=e.screenY-Hl.screenY):uu=iu=0,Hl=e),iu)},movementY:function(e){return"movementY"in e?e.movementY:uu}}),js=Qe(Un),Vm=N({},Un,{dataTransfer:0}),Jm=Qe(Vm),Km=N({},Nl,{relatedTarget:0}),cu=Qe(Km),Im=N({},Ma,{animationName:0,elapsedTime:0,pseudoElement:0}),Fm=Qe(Im),Wm=N({},Ma,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$m=Qe(Wm),Pm=N({},Ma,{data:0}),qs=Qe(Pm),ed={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},td={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ad={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ld(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ad[e])?!!t[e]:!1}function su(){return ld}var nd=N({},Nl,{key:function(e){if(e.key){var t=ed[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?td[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?Rn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),id=Qe(nd),ud=N({},Un,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ys=Qe(ud),cd=N({},Nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),sd=Qe(cd),od=N({},Ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),fd=Qe(od),rd=N({},Un,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),md=Qe(rd),dd=N({},Ma,{newState:0,oldState:0}),hd=Qe(dd),gd=[9,13,27,32],ou=Rt&&"CompositionEvent"in window,Ul=null;Rt&&"documentMode"in document&&(Ul=document.documentMode);var yd=Rt&&"TextEvent"in window&&!Ul,Xs=Rt&&(!ou||Ul&&8<Ul&&11>=Ul),Gs=" ",Qs=!1;function Ls(e,t){switch(e){case"keyup":return gd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ks(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fa=!1;function pd(e,t){switch(e){case"compositionend":return ks(t);case"keypress":return t.which!==32?null:(Qs=!0,Gs);case"textInput":return e=t.data,e===Gs&&Qs?null:e;default:return null}}function vd(e,t){if(Fa)return e==="compositionend"||!ou&&Ls(e,t)?(e=Us(),wn=nu=Wt=null,Fa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xs&&t.locale!=="ko"?null:t.data;default:return null}}var Sd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sd[e.type]:t==="textarea"}function Vs(e,t,a,l){Ka?Ia?Ia.push(l):Ia=[l]:Ka=l,t=Mi(t,"onChange"),0<t.length&&(a=new Hn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Bl=null,jl=null;function bd(e){Or(e,0)}function Bn(e){var t=Ol(e);if(Cs(t))return e}function Js(e,t){if(e==="change")return t}var Ks=!1;if(Rt){var fu;if(Rt){var ru="oninput"in document;if(!ru){var Is=document.createElement("div");Is.setAttribute("oninput","return;"),ru=typeof Is.oninput=="function"}fu=ru}else fu=!1;Ks=fu&&(!document.documentMode||9<document.documentMode)}function Fs(){Bl&&(Bl.detachEvent("onpropertychange",Ws),jl=Bl=null)}function Ws(e){if(e.propertyName==="value"&&Bn(jl)){var t=[];Vs(t,jl,e,tu(e)),Hs(bd,t)}}function Ad(e,t,a){e==="focusin"?(Fs(),Bl=t,jl=a,Bl.attachEvent("onpropertychange",Ws)):e==="focusout"&&Fs()}function Ed(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bn(jl)}function Td(e,t){if(e==="click")return Bn(t)}function Md(e,t){if(e==="input"||e==="change")return Bn(t)}function zd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pe=typeof Object.is=="function"?Object.is:zd;function ql(e,t){if(Pe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Qi.call(t,n)||!Pe(e[n],t[n]))return!1}return!0}function $s(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ps(e,t){var a=$s(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=$s(a)}}function eo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?eo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function to(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=_n(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=_n(e.document)}return t}function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var xd=Rt&&"documentMode"in document&&11>=document.documentMode,Wa=null,du=null,Yl=null,hu=!1;function ao(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hu||Wa==null||Wa!==_n(l)||(l=Wa,"selectionStart"in l&&mu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Yl&&ql(Yl,l)||(Yl=l,l=Mi(du,"onSelect"),0<l.length&&(t=new Hn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Wa)))}function za(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var $a={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionrun:za("Transition","TransitionRun"),transitionstart:za("Transition","TransitionStart"),transitioncancel:za("Transition","TransitionCancel"),transitionend:za("Transition","TransitionEnd")},gu={},lo={};Rt&&(lo=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function xa(e){if(gu[e])return gu[e];if(!$a[e])return e;var t=$a[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in lo)return gu[e]=t[a];return e}var no=xa("animationend"),io=xa("animationiteration"),uo=xa("animationstart"),Cd=xa("transitionrun"),Dd=xa("transitionstart"),_d=xa("transitioncancel"),co=xa("transitionend"),so=new Map,yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yu.push("scrollEnd");function vt(e,t){so.set(e,t),Ta(t,[e])}var jn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ot=[],Pa=0,pu=0;function qn(){for(var e=Pa,t=pu=Pa=0;t<e;){var a=ot[t];ot[t++]=null;var l=ot[t];ot[t++]=null;var n=ot[t];ot[t++]=null;var i=ot[t];if(ot[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&oo(a,n,i)}}function Yn(e,t,a,l){ot[Pa++]=e,ot[Pa++]=t,ot[Pa++]=a,ot[Pa++]=l,pu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function vu(e,t,a,l){return Yn(e,t,a,l),Xn(e)}function Ca(e,t){return Yn(e,null,null,t),Xn(e)}function oo(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-$e(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function Xn(e){if(50<sn)throw sn=0,Cc=null,Error(g(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var el={};function Od(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,a,l){return new Od(e,t,a,l)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nt(e,t){var a=e.alternate;return a===null?(a=et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function fo(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Gn(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")Su(e)&&(u=1);else if(typeof e=="string")u=Uh(e,a,C.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Et:return e=et(31,a,t,n),e.elementType=Et,e.lanes=i,e;case Ne:return Da(a.children,n,i,t);case Dt:u=8,n|=24;break;case Ie:return e=et(12,a,t,n|2),e.elementType=Ie,e.lanes=i,e;case At:return e=et(13,a,t,n),e.elementType=At,e.lanes=i,e;case qe:return e=et(19,a,t,n),e.elementType=qe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Oe:u=10;break e;case Kt:u=9;break e;case ut:u=11;break e;case k:u=14;break e;case Ye:u=16,l=null;break e}u=29,a=Error(g(130,e===null?"null":typeof e,"")),l=null}return t=et(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Da(e,t,a,l){return e=et(7,e,l,t),e.lanes=a,e}function bu(e,t,a){return e=et(6,e,null,t),e.lanes=a,e}function ro(e){var t=et(18,null,null,0);return t.stateNode=e,t}function Au(e,t,a){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var mo=new WeakMap;function ft(e,t){if(typeof e=="object"&&e!==null){var a=mo.get(e);return a!==void 0?a:(t={value:e,source:t,stack:rs(t)},mo.set(e,t),t)}return{value:e,source:t,stack:rs(t)}}var tl=[],al=0,Qn=null,Xl=0,rt=[],mt=0,$t=null,Mt=1,zt="";function Ht(e,t){tl[al++]=Xl,tl[al++]=Qn,Qn=e,Xl=t}function ho(e,t,a){rt[mt++]=Mt,rt[mt++]=zt,rt[mt++]=$t,$t=e;var l=Mt;e=zt;var n=32-$e(l)-1;l&=~(1<<n),a+=1;var i=32-$e(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Mt=1<<32-$e(t)+n|a<<n|l,zt=i+e}else Mt=1<<i|a<<n|l,zt=e}function Eu(e){e.return!==null&&(Ht(e,1),ho(e,1,0))}function Tu(e){for(;e===Qn;)Qn=tl[--al],tl[al]=null,Xl=tl[--al],tl[al]=null;for(;e===$t;)$t=rt[--mt],rt[mt]=null,zt=rt[--mt],rt[mt]=null,Mt=rt[--mt],rt[mt]=null}function go(e,t){rt[mt++]=Mt,rt[mt++]=zt,rt[mt++]=$t,Mt=t.id,zt=t.overflow,$t=e}var xe=null,ce=null,Z=!1,Pt=null,dt=!1,Mu=Error(g(519));function ea(e){var t=Error(g(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gl(ft(t,e)),Mu}function yo(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[ze]=e,t[Ge]=l,a){case"dialog":G("cancel",t),G("close",t);break;case"iframe":case"object":case"embed":G("load",t);break;case"video":case"audio":for(a=0;a<fn.length;a++)G(fn[a],t);break;case"source":G("error",t);break;case"img":case"image":case"link":G("error",t),G("load",t);break;case"details":G("toggle",t);break;case"input":G("invalid",t),Ds(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":G("invalid",t);break;case"textarea":G("invalid",t),Os(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Hr(t.textContent,a)?(l.popover!=null&&(G("beforetoggle",t),G("toggle",t)),l.onScroll!=null&&G("scroll",t),l.onScrollEnd!=null&&G("scrollend",t),l.onClick!=null&&(t.onclick=wt),t=!0):t=!1,t||ea(e,!0)}function po(e){for(xe=e.return;xe;)switch(xe.tag){case 5:case 31:case 13:dt=!1;return;case 27:case 3:dt=!0;return;default:xe=xe.return}}function ll(e){if(e!==xe)return!1;if(!Z)return po(e),Z=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Qc(e.type,e.memoizedProps)),a=!a),a&&ce&&ea(e),po(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));ce=Lr(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));ce=Lr(e)}else t===27?(t=ce,ha(e.type)?(e=Jc,Jc=null,ce=e):ce=t):ce=xe?gt(e.stateNode.nextSibling):null;return!0}function _a(){ce=xe=null,Z=!1}function zu(){var e=Pt;return e!==null&&(Ve===null?Ve=e:Ve.push.apply(Ve,e),Pt=null),e}function Gl(e){Pt===null?Pt=[e]:Pt.push(e)}var xu=f(null),Oa=null,Ut=null;function ta(e,t,a){M(xu,t._currentValue),t._currentValue=a}function Bt(e){e._currentValue=xu.current,A(xu)}function Cu(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Du(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=n;for(var s=0;s<t.length;s++)if(c.context===t[s]){i.lanes|=a,c=i.alternate,c!==null&&(c.lanes|=a),Cu(i.return,a,e),l||(u=null);break e}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(g(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),Cu(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function nl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(g(387));if(u=u.memoizedProps,u!==null){var c=n.type;Pe(n.pendingProps.value,u.value)||(e!==null?e.push(c):e=[c])}}else if(n===$.current){if(u=n.alternate,u===null)throw Error(g(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(gn):e=[gn])}n=n.return}e!==null&&Du(t,e,a,l),t.flags|=262144}function Ln(e){for(e=e.firstContext;e!==null;){if(!Pe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wa(e){Oa=e,Ut=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ce(e){return vo(Oa,e)}function kn(e,t){return Oa===null&&wa(e),vo(e,t)}function vo(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ut===null){if(e===null)throw Error(g(308));Ut=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ut=Ut.next=t;return a}var wd=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Rd=x.unstable_scheduleCallback,Nd=x.unstable_NormalPriority,ve={$$typeof:Oe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _u(){return{controller:new wd,data:new Map,refCount:0}}function Ql(e){e.refCount--,e.refCount===0&&Rd(Nd,function(){e.controller.abort()})}var Ll=null,Ou=0,il=0,ul=null;function Hd(e,t){if(Ll===null){var a=Ll=[];Ou=0,il=Nc(),ul={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Ou++,t.then(So,So),t}function So(){if(--Ou===0&&Ll!==null){ul!==null&&(ul.status="fulfilled");var e=Ll;Ll=null,il=0,ul=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ud(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var bo=v.S;v.S=function(e,t){nr=Fe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Hd(e,t),bo!==null&&bo(e,t)};var Ra=f(null);function wu(){var e=Ra.current;return e!==null?e:ue.pooledCache}function Zn(e,t){t===null?M(Ra,Ra.current):M(Ra,t.pool)}function Ao(){var e=wu();return e===null?null:{parent:ve._currentValue,pool:e}}var cl=Error(g(460)),Ru=Error(g(474)),Vn=Error(g(542)),Jn={then:function(){}};function Eo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function To(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(wt,wt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zo(e),e;default:if(typeof t.status=="string")t.then(wt,wt);else{if(e=ue,e!==null&&100<e.shellSuspendCounter)throw Error(g(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zo(e),e}throw Ha=t,cl}}function Na(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ha=a,cl):a}}var Ha=null;function Mo(){if(Ha===null)throw Error(g(459));var e=Ha;return Ha=null,e}function zo(e){if(e===cl||e===Vn)throw Error(g(483))}var sl=null,kl=0;function Kn(e){var t=kl;return kl+=1,sl===null&&(sl=[]),To(sl,e,t)}function Zl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function In(e,t){throw t.$$typeof===oe?Error(g(525)):(e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function xo(e){function t(r,o){if(e){var m=r.deletions;m===null?(r.deletions=[o],r.flags|=16):m.push(o)}}function a(r,o){if(!e)return null;for(;o!==null;)t(r,o),o=o.sibling;return null}function l(r){for(var o=new Map;r!==null;)r.key!==null?o.set(r.key,r):o.set(r.index,r),r=r.sibling;return o}function n(r,o){return r=Nt(r,o),r.index=0,r.sibling=null,r}function i(r,o,m){return r.index=m,e?(m=r.alternate,m!==null?(m=m.index,m<o?(r.flags|=67108866,o):m):(r.flags|=67108866,o)):(r.flags|=1048576,o)}function u(r){return e&&r.alternate===null&&(r.flags|=67108866),r}function c(r,o,m,S){return o===null||o.tag!==6?(o=bu(m,r.mode,S),o.return=r,o):(o=n(o,m),o.return=r,o)}function s(r,o,m,S){var _=m.type;return _===Ne?p(r,o,m.props.children,S,m.key):o!==null&&(o.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ye&&Na(_)===o.type)?(o=n(o,m.props),Zl(o,m),o.return=r,o):(o=Gn(m.type,m.key,m.props,null,r.mode,S),Zl(o,m),o.return=r,o)}function d(r,o,m,S){return o===null||o.tag!==4||o.stateNode.containerInfo!==m.containerInfo||o.stateNode.implementation!==m.implementation?(o=Au(m,r.mode,S),o.return=r,o):(o=n(o,m.children||[]),o.return=r,o)}function p(r,o,m,S,_){return o===null||o.tag!==7?(o=Da(m,r.mode,S,_),o.return=r,o):(o=n(o,m),o.return=r,o)}function b(r,o,m){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=bu(""+o,r.mode,m),o.return=r,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Ke:return m=Gn(o.type,o.key,o.props,null,r.mode,m),Zl(m,o),m.return=r,m;case je:return o=Au(o,r.mode,m),o.return=r,o;case Ye:return o=Na(o),b(r,o,m)}if(pt(o)||Xe(o))return o=Da(o,r.mode,m,null),o.return=r,o;if(typeof o.then=="function")return b(r,Kn(o),m);if(o.$$typeof===Oe)return b(r,kn(r,o),m);In(r,o)}return null}function h(r,o,m,S){var _=o!==null?o.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return _!==null?null:c(r,o,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ke:return m.key===_?s(r,o,m,S):null;case je:return m.key===_?d(r,o,m,S):null;case Ye:return m=Na(m),h(r,o,m,S)}if(pt(m)||Xe(m))return _!==null?null:p(r,o,m,S,null);if(typeof m.then=="function")return h(r,o,Kn(m),S);if(m.$$typeof===Oe)return h(r,o,kn(r,m),S);In(r,m)}return null}function y(r,o,m,S,_){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return r=r.get(m)||null,c(o,r,""+S,_);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ke:return r=r.get(S.key===null?m:S.key)||null,s(o,r,S,_);case je:return r=r.get(S.key===null?m:S.key)||null,d(o,r,S,_);case Ye:return S=Na(S),y(r,o,m,S,_)}if(pt(S)||Xe(S))return r=r.get(m)||null,p(o,r,S,_,null);if(typeof S.then=="function")return y(r,o,m,Kn(S),_);if(S.$$typeof===Oe)return y(r,o,m,kn(o,S),_);In(o,S)}return null}function z(r,o,m,S){for(var _=null,V=null,D=o,q=o=0,L=null;D!==null&&q<m.length;q++){D.index>q?(L=D,D=null):L=D.sibling;var J=h(r,D,m[q],S);if(J===null){D===null&&(D=L);break}e&&D&&J.alternate===null&&t(r,D),o=i(J,o,q),V===null?_=J:V.sibling=J,V=J,D=L}if(q===m.length)return a(r,D),Z&&Ht(r,q),_;if(D===null){for(;q<m.length;q++)D=b(r,m[q],S),D!==null&&(o=i(D,o,q),V===null?_=D:V.sibling=D,V=D);return Z&&Ht(r,q),_}for(D=l(D);q<m.length;q++)L=y(D,r,q,m[q],S),L!==null&&(e&&L.alternate!==null&&D.delete(L.key===null?q:L.key),o=i(L,o,q),V===null?_=L:V.sibling=L,V=L);return e&&D.forEach(function(Sa){return t(r,Sa)}),Z&&Ht(r,q),_}function w(r,o,m,S){if(m==null)throw Error(g(151));for(var _=null,V=null,D=o,q=o=0,L=null,J=m.next();D!==null&&!J.done;q++,J=m.next()){D.index>q?(L=D,D=null):L=D.sibling;var Sa=h(r,D,J.value,S);if(Sa===null){D===null&&(D=L);break}e&&D&&Sa.alternate===null&&t(r,D),o=i(Sa,o,q),V===null?_=Sa:V.sibling=Sa,V=Sa,D=L}if(J.done)return a(r,D),Z&&Ht(r,q),_;if(D===null){for(;!J.done;q++,J=m.next())J=b(r,J.value,S),J!==null&&(o=i(J,o,q),V===null?_=J:V.sibling=J,V=J);return Z&&Ht(r,q),_}for(D=l(D);!J.done;q++,J=m.next())J=y(D,r,q,J.value,S),J!==null&&(e&&J.alternate!==null&&D.delete(J.key===null?q:J.key),o=i(J,o,q),V===null?_=J:V.sibling=J,V=J);return e&&D.forEach(function(Vh){return t(r,Vh)}),Z&&Ht(r,q),_}function ne(r,o,m,S){if(typeof m=="object"&&m!==null&&m.type===Ne&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ke:e:{for(var _=m.key;o!==null;){if(o.key===_){if(_=m.type,_===Ne){if(o.tag===7){a(r,o.sibling),S=n(o,m.props.children),S.return=r,r=S;break e}}else if(o.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ye&&Na(_)===o.type){a(r,o.sibling),S=n(o,m.props),Zl(S,m),S.return=r,r=S;break e}a(r,o);break}else t(r,o);o=o.sibling}m.type===Ne?(S=Da(m.props.children,r.mode,S,m.key),S.return=r,r=S):(S=Gn(m.type,m.key,m.props,null,r.mode,S),Zl(S,m),S.return=r,r=S)}return u(r);case je:e:{for(_=m.key;o!==null;){if(o.key===_)if(o.tag===4&&o.stateNode.containerInfo===m.containerInfo&&o.stateNode.implementation===m.implementation){a(r,o.sibling),S=n(o,m.children||[]),S.return=r,r=S;break e}else{a(r,o);break}else t(r,o);o=o.sibling}S=Au(m,r.mode,S),S.return=r,r=S}return u(r);case Ye:return m=Na(m),ne(r,o,m,S)}if(pt(m))return z(r,o,m,S);if(Xe(m)){if(_=Xe(m),typeof _!="function")throw Error(g(150));return m=_.call(m),w(r,o,m,S)}if(typeof m.then=="function")return ne(r,o,Kn(m),S);if(m.$$typeof===Oe)return ne(r,o,kn(r,m),S);In(r,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,o!==null&&o.tag===6?(a(r,o.sibling),S=n(o,m),S.return=r,r=S):(a(r,o),S=bu(m,r.mode,S),S.return=r,r=S),u(r)):a(r,o)}return function(r,o,m,S){try{kl=0;var _=ne(r,o,m,S);return sl=null,_}catch(D){if(D===cl||D===Vn)throw D;var V=et(29,D,null,r.mode);return V.lanes=S,V.return=r,V}finally{}}}var Ua=xo(!0),Co=xo(!1),aa=!1;function Nu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function na(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(I&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Xn(e),oo(e,null,a),t}return Yn(e,l,t,a),Xn(e)}function Vl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ps(e,a)}}function Uu(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Bu=!1;function Jl(){if(Bu){var e=ul;if(e!==null)throw e}}function Kl(e,t,a,l){Bu=!1;var n=e.updateQueue;aa=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var s=c,d=s.next;s.next=null,u===null?i=d:u.next=d,u=s;var p=e.alternate;p!==null&&(p=p.updateQueue,c=p.lastBaseUpdate,c!==u&&(c===null?p.firstBaseUpdate=d:c.next=d,p.lastBaseUpdate=s))}if(i!==null){var b=n.baseState;u=0,p=d=s=null,c=i;do{var h=c.lane&-536870913,y=h!==c.lane;if(y?(Q&h)===h:(l&h)===h){h!==0&&h===il&&(Bu=!0),p!==null&&(p=p.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var z=e,w=c;h=t;var ne=a;switch(w.tag){case 1:if(z=w.payload,typeof z=="function"){b=z.call(ne,b,h);break e}b=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=w.payload,h=typeof z=="function"?z.call(ne,b,h):z,h==null)break e;b=N({},b,h);break e;case 2:aa=!0}}h=c.callback,h!==null&&(e.flags|=64,y&&(e.flags|=8192),y=n.callbacks,y===null?n.callbacks=[h]:y.push(h))}else y={lane:h,tag:c.tag,payload:c.payload,callback:c.callback,next:null},p===null?(d=p=y,s=b):p=p.next=y,u|=h;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;y=c,c=y.next,y.next=null,n.lastBaseUpdate=y,n.shared.pending=null}}while(!0);p===null&&(s=b),n.baseState=s,n.firstBaseUpdate=d,n.lastBaseUpdate=p,i===null&&(n.shared.lanes=0),oa|=u,e.lanes=u,e.memoizedState=b}}function Do(e,t){if(typeof e!="function")throw Error(g(191,e));e.call(t)}function _o(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Do(a[e],t)}var ol=f(null),Fn=f(0);function Oo(e,t){e=Zt,M(Fn,e),M(ol,t),Zt=e|t.baseLanes}function ju(){M(Fn,Zt),M(ol,ol.current)}function qu(){Zt=Fn.current,A(ol),A(Fn)}var tt=f(null),ht=null;function ia(e){var t=e.alternate;M(ye,ye.current&1),M(tt,e),ht===null&&(t===null||ol.current!==null||t.memoizedState!==null)&&(ht=e)}function Yu(e){M(ye,ye.current),M(tt,e),ht===null&&(ht=e)}function wo(e){e.tag===22?(M(ye,ye.current),M(tt,e),ht===null&&(ht=e)):ua()}function ua(){M(ye,ye.current),M(tt,tt.current)}function at(e){A(tt),ht===e&&(ht=null),A(ye)}var ye=f(0);function Wn(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Zc(a)||Vc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var jt=0,j=null,ae=null,Se=null,$n=!1,fl=!1,Ba=!1,Pn=0,Il=0,rl=null,Bd=0;function me(){throw Error(g(321))}function Xu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Pe(e[a],t[a]))return!1;return!0}function Gu(e,t,a,l,n,i){return jt=i,j=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,v.H=e===null||e.memoizedState===null?gf:ac,Ba=!1,i=a(l,n),Ba=!1,fl&&(i=No(t,a,l,n)),Ro(e),i}function Ro(e){v.H=$l;var t=ae!==null&&ae.next!==null;if(jt=0,Se=ae=j=null,$n=!1,Il=0,rl=null,t)throw Error(g(300));e===null||be||(e=e.dependencies,e!==null&&Ln(e)&&(be=!0))}function No(e,t,a,l){j=e;var n=0;do{if(fl&&(rl=null),Il=0,fl=!1,25<=n)throw Error(g(301));if(n+=1,Se=ae=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}v.H=yf,i=t(a,l)}while(fl);return i}function jd(){var e=v.H,t=e.useState()[0];return t=typeof t.then=="function"?Fl(t):t,e=e.useState()[0],(ae!==null?ae.memoizedState:null)!==e&&(j.flags|=1024),t}function Qu(){var e=Pn!==0;return Pn=0,e}function Lu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ku(e){if($n){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}$n=!1}jt=0,Se=ae=j=null,fl=!1,Il=Pn=0,rl=null}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?j.memoizedState=Se=e:Se=Se.next=e,Se}function pe(){if(ae===null){var e=j.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=Se===null?j.memoizedState:Se.next;if(t!==null)Se=t,ae=e;else{if(e===null)throw j.alternate===null?Error(g(467)):Error(g(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},Se===null?j.memoizedState=Se=e:Se=Se.next=e}return Se}function ei(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fl(e){var t=Il;return Il+=1,rl===null&&(rl=[]),e=To(rl,e,t),t=j,(Se===null?t.memoizedState:Se.next)===null&&(t=t.alternate,v.H=t===null||t.memoizedState===null?gf:ac),e}function ti(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fl(e);if(e.$$typeof===Oe)return Ce(e)}throw Error(g(438,String(e)))}function Zu(e){var t=null,a=j.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=j.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ei(),j.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Xa;return t.index++,a}function qt(e,t){return typeof t=="function"?t(e):t}function ai(e){var t=pe();return Vu(t,ae,e)}function Vu(e,t,a){var l=e.queue;if(l===null)throw Error(g(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var c=u=null,s=null,d=t,p=!1;do{var b=d.lane&-536870913;if(b!==d.lane?(Q&b)===b:(jt&b)===b){var h=d.revertLane;if(h===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),b===il&&(p=!0);else if((jt&h)===h){d=d.next,h===il&&(p=!0);continue}else b={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},s===null?(c=s=b,u=i):s=s.next=b,j.lanes|=h,oa|=h;b=d.action,Ba&&a(i,b),i=d.hasEagerState?d.eagerState:a(i,b)}else h={lane:b,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},s===null?(c=s=h,u=i):s=s.next=h,j.lanes|=b,oa|=b;d=d.next}while(d!==null&&d!==t);if(s===null?u=i:s.next=c,!Pe(i,e.memoizedState)&&(be=!0,p&&(a=ul,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=s,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ju(e){var t=pe(),a=t.queue;if(a===null)throw Error(g(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);Pe(i,t.memoizedState)||(be=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Ho(e,t,a){var l=j,n=pe(),i=Z;if(i){if(a===void 0)throw Error(g(407));a=a()}else a=t();var u=!Pe((ae||n).memoizedState,a);if(u&&(n.memoizedState=a,be=!0),n=n.queue,Fu(jo.bind(null,l,n,e),[e]),n.getSnapshot!==t||u||Se!==null&&Se.memoizedState.tag&1){if(l.flags|=2048,ml(9,{destroy:void 0},Bo.bind(null,l,n,a,t),null),ue===null)throw Error(g(349));i||(jt&127)!==0||Uo(l,t,a)}return a}function Uo(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=j.updateQueue,t===null?(t=ei(),j.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Bo(e,t,a,l){t.value=a,t.getSnapshot=l,qo(t)&&Yo(e)}function jo(e,t,a){return a(function(){qo(t)&&Yo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Pe(e,a)}catch{return!0}}function Yo(e){var t=Ca(e,2);t!==null&&Je(t,e,2)}function Ku(e){var t=Ue();if(typeof e=="function"){var a=e;if(e=a(),Ba){It(!0);try{a()}finally{It(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:e},t}function Xo(e,t,a,l){return e.baseState=a,Vu(e,ae,typeof l=="function"?l:qt)}function qd(e,t,a,l,n){if(ii(e))throw Error(g(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};v.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Go(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Go(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=v.T,u={};v.T=u;try{var c=a(n,l),s=v.S;s!==null&&s(u,c),Qo(e,t,c)}catch(d){Iu(e,t,d)}finally{i!==null&&u.types!==null&&(i.types=u.types),v.T=i}}else try{i=a(n,l),Qo(e,t,i)}catch(d){Iu(e,t,d)}}function Qo(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Lo(e,t,l)},function(l){return Iu(e,t,l)}):Lo(e,t,a)}function Lo(e,t,a){t.status="fulfilled",t.value=a,ko(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Go(e,a)))}function Iu(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,ko(t),t=t.next;while(t!==l)}e.action=null}function ko(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zo(e,t){return t}function Vo(e,t){if(Z){var a=ue.formState;if(a!==null){e:{var l=j;if(Z){if(ce){t:{for(var n=ce,i=dt;n.nodeType!==8;){if(!i){n=null;break t}if(n=gt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ce=gt(n.nextSibling),l=n.data==="F!";break e}}ea(l)}l=!1}l&&(t=a[0])}}return a=Ue(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:t},a.queue=l,a=mf.bind(null,j,l),l.dispatch=a,l=Ku(!1),i=tc.bind(null,j,!1,l.queue),l=Ue(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=qd.bind(null,j,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Jo(e){var t=pe();return Ko(t,ae,e)}function Ko(e,t,a){if(t=Vu(e,t,Zo)[0],e=ai(qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Fl(t)}catch(u){throw u===cl?Vn:u}else l=t;t=pe();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(j.flags|=2048,ml(9,{destroy:void 0},Yd.bind(null,n,a),null)),[l,i,e]}function Yd(e,t){e.action=t}function Io(e){var t=pe(),a=ae;if(a!==null)return Ko(t,a,e);pe(),t=t.memoizedState,a=pe();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function ml(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=j.updateQueue,t===null&&(t=ei(),j.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Fo(){return pe().memoizedState}function li(e,t,a,l){var n=Ue();j.flags|=e,n.memoizedState=ml(1|t,{destroy:void 0},a,l===void 0?null:l)}function ni(e,t,a,l){var n=pe();l=l===void 0?null:l;var i=n.memoizedState.inst;ae!==null&&l!==null&&Xu(l,ae.memoizedState.deps)?n.memoizedState=ml(t,i,a,l):(j.flags|=e,n.memoizedState=ml(1|t,i,a,l))}function Wo(e,t){li(8390656,8,e,t)}function Fu(e,t){ni(2048,8,e,t)}function Xd(e){j.flags|=4;var t=j.updateQueue;if(t===null)t=ei(),j.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function $o(e){var t=pe().memoizedState;return Xd({ref:t,nextImpl:e}),function(){if((I&2)!==0)throw Error(g(440));return t.impl.apply(void 0,arguments)}}function Po(e,t){return ni(4,2,e,t)}function ef(e,t){return ni(4,4,e,t)}function tf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function af(e,t,a){a=a!=null?a.concat([e]):null,ni(4,4,tf.bind(null,t,e),a)}function Wu(){}function lf(e,t){var a=pe();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Xu(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function nf(e,t){var a=pe();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Xu(t,l[1]))return l[0];if(l=e(),Ba){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[l,t],l}function $u(e,t,a){return a===void 0||(jt&1073741824)!==0&&(Q&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=ur(),j.lanes|=e,oa|=e,a)}function uf(e,t,a,l){return Pe(a,t)?a:ol.current!==null?(e=$u(e,a,l),Pe(e,t)||(be=!0),e):(jt&42)===0||(jt&1073741824)!==0&&(Q&261930)===0?(be=!0,e.memoizedState=a):(e=ur(),j.lanes|=e,oa|=e,t)}function cf(e,t,a,l,n){var i=T.p;T.p=i!==0&&8>i?i:8;var u=v.T,c={};v.T=c,tc(e,!1,t,a);try{var s=n(),d=v.S;if(d!==null&&d(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var p=Ud(s,l);Wl(e,t,p,it(e))}else Wl(e,t,l,it(e))}catch(b){Wl(e,t,{then:function(){},status:"rejected",reason:b},it())}finally{T.p=i,u!==null&&c.types!==null&&(u.types=c.types),v.T=u}}function Gd(){}function Pu(e,t,a,l){if(e.tag!==5)throw Error(g(476));var n=sf(e).queue;cf(e,n,t,H,a===null?Gd:function(){return of(e),a(l)})}function sf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:H},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function of(e){var t=sf(e);t.next===null&&(t=e.alternate.memoizedState),Wl(e,t.next.queue,{},it())}function ec(){return Ce(gn)}function ff(){return pe().memoizedState}function rf(){return pe().memoizedState}function Qd(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=it();e=la(a);var l=na(t,e,a);l!==null&&(Je(l,t,a),Vl(l,t,a)),t={cache:_u()},e.payload=t;return}t=t.return}}function Ld(e,t,a){var l=it();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ii(e)?df(t,a):(a=vu(e,t,a,l),a!==null&&(Je(a,e,l),hf(a,t,l)))}function mf(e,t,a){var l=it();Wl(e,t,a,l)}function Wl(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ii(e))df(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,c=i(u,a);if(n.hasEagerState=!0,n.eagerState=c,Pe(c,u))return Yn(e,t,n,0),ue===null&&qn(),!1}catch{}finally{}if(a=vu(e,t,n,l),a!==null)return Je(a,e,l),hf(a,t,l),!0}return!1}function tc(e,t,a,l){if(l={lane:2,revertLane:Nc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ii(e)){if(t)throw Error(g(479))}else t=vu(e,a,l,2),t!==null&&Je(t,e,2)}function ii(e){var t=e.alternate;return e===j||t!==null&&t===j}function df(e,t){fl=$n=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function hf(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ps(e,a)}}var $l={readContext:Ce,use:ti,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useLayoutEffect:me,useInsertionEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useSyncExternalStore:me,useId:me,useHostTransitionStatus:me,useFormState:me,useActionState:me,useOptimistic:me,useMemoCache:me,useCacheRefresh:me};$l.useEffectEvent=me;var gf={readContext:Ce,use:ti,useCallback:function(e,t){return Ue().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:Wo,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,li(4194308,4,tf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return li(4194308,4,e,t)},useInsertionEffect:function(e,t){li(4,2,e,t)},useMemo:function(e,t){var a=Ue();t=t===void 0?null:t;var l=e();if(Ba){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Ue();if(a!==void 0){var n=a(t);if(Ba){It(!0);try{a(t)}finally{It(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Ld.bind(null,j,e),[l.memoizedState,e]},useRef:function(e){var t=Ue();return e={current:e},t.memoizedState=e},useState:function(e){e=Ku(e);var t=e.queue,a=mf.bind(null,j,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Wu,useDeferredValue:function(e,t){var a=Ue();return $u(a,e,t)},useTransition:function(){var e=Ku(!1);return e=cf.bind(null,j,e.queue,!0,!1),Ue().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=j,n=Ue();if(Z){if(a===void 0)throw Error(g(407));a=a()}else{if(a=t(),ue===null)throw Error(g(349));(Q&127)!==0||Uo(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Wo(jo.bind(null,l,i,e),[e]),l.flags|=2048,ml(9,{destroy:void 0},Bo.bind(null,l,i,a,t),null),a},useId:function(){var e=Ue(),t=ue.identifierPrefix;if(Z){var a=zt,l=Mt;a=(l&~(1<<32-$e(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Pn++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Bd++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ec,useFormState:Vo,useActionState:Vo,useOptimistic:function(e){var t=Ue();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=tc.bind(null,j,!0,a),a.dispatch=t,[e,t]},useMemoCache:Zu,useCacheRefresh:function(){return Ue().memoizedState=Qd.bind(null,j)},useEffectEvent:function(e){var t=Ue(),a={impl:e};return t.memoizedState=a,function(){if((I&2)!==0)throw Error(g(440));return a.impl.apply(void 0,arguments)}}},ac={readContext:Ce,use:ti,useCallback:lf,useContext:Ce,useEffect:Fu,useImperativeHandle:af,useInsertionEffect:Po,useLayoutEffect:ef,useMemo:nf,useReducer:ai,useRef:Fo,useState:function(){return ai(qt)},useDebugValue:Wu,useDeferredValue:function(e,t){var a=pe();return uf(a,ae.memoizedState,e,t)},useTransition:function(){var e=ai(qt)[0],t=pe().memoizedState;return[typeof e=="boolean"?e:Fl(e),t]},useSyncExternalStore:Ho,useId:ff,useHostTransitionStatus:ec,useFormState:Jo,useActionState:Jo,useOptimistic:function(e,t){var a=pe();return Xo(a,ae,e,t)},useMemoCache:Zu,useCacheRefresh:rf};ac.useEffectEvent=$o;var yf={readContext:Ce,use:ti,useCallback:lf,useContext:Ce,useEffect:Fu,useImperativeHandle:af,useInsertionEffect:Po,useLayoutEffect:ef,useMemo:nf,useReducer:Ju,useRef:Fo,useState:function(){return Ju(qt)},useDebugValue:Wu,useDeferredValue:function(e,t){var a=pe();return ae===null?$u(a,e,t):uf(a,ae.memoizedState,e,t)},useTransition:function(){var e=Ju(qt)[0],t=pe().memoizedState;return[typeof e=="boolean"?e:Fl(e),t]},useSyncExternalStore:Ho,useId:ff,useHostTransitionStatus:ec,useFormState:Io,useActionState:Io,useOptimistic:function(e,t){var a=pe();return ae!==null?Xo(a,ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Zu,useCacheRefresh:rf};yf.useEffectEvent=$o;function lc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:N({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var nc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=it(),n=la(l);n.payload=t,a!=null&&(n.callback=a),t=na(e,n,l),t!==null&&(Je(t,e,l),Vl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=it(),n=la(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=na(e,n,l),t!==null&&(Je(t,e,l),Vl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=it(),l=la(a);l.tag=2,t!=null&&(l.callback=t),t=na(e,l,a),t!==null&&(Je(t,e,a),Vl(t,e,a))}};function pf(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!ql(a,l)||!ql(n,i):!0}function vf(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&nc.enqueueReplaceState(t,t.state,null)}function ja(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=N({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Sf(e){jn(e)}function bf(e){console.error(e)}function Af(e){jn(e)}function ui(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Ef(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function ic(e,t,a){return a=la(a),a.tag=3,a.payload={element:null},a.callback=function(){ui(e,t)},a}function Tf(e){return e=la(e),e.tag=3,e}function Mf(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Ef(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Ef(t,a,l),typeof n!="function"&&(fa===null?fa=new Set([this]):fa.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function kd(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&nl(t,a,n,!0),a=tt.current,a!==null){switch(a.tag){case 31:case 13:return ht===null?vi():a.alternate===null&&de===0&&(de=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Jn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Oc(e,l,n)),!1;case 22:return a.flags|=65536,l===Jn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Oc(e,l,n)),!1}throw Error(g(435,a.tag))}return Oc(e,l,n),vi(),!1}if(Z)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Mu&&(e=Error(g(422),{cause:l}),Gl(ft(e,a)))):(l!==Mu&&(t=Error(g(423),{cause:l}),Gl(ft(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=ft(l,a),n=ic(e.stateNode,l,n),Uu(e,n),de!==4&&(de=2)),!1;var i=Error(g(520),{cause:l});if(i=ft(i,a),cn===null?cn=[i]:cn.push(i),de!==4&&(de=2),t===null)return!0;l=ft(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=ic(a.stateNode,l,e),Uu(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(fa===null||!fa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Tf(n),Mf(n,e,a,l),Uu(a,n),!1}a=a.return}while(a!==null);return!1}var uc=Error(g(461)),be=!1;function De(e,t,a,l){t.child=e===null?Co(t,null,a,l):Ua(t,e.child,a,l)}function zf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var c in l)c!=="ref"&&(u[c]=l[c])}else u=l;return wa(t),l=Gu(e,t,a,u,i,n),c=Qu(),e!==null&&!be?(Lu(e,t,n),Yt(e,t,n)):(Z&&c&&Eu(t),t.flags|=1,De(e,t,l,n),t.child)}function xf(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Su(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Cf(e,t,i,l,n)):(e=Gn(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!hc(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:ql,a(u,l)&&e.ref===t.ref)return Yt(e,t,n)}return t.flags|=1,e=Nt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Cf(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(ql(i,l)&&e.ref===t.ref)if(be=!1,t.pendingProps=l=i,hc(e,n))(e.flags&131072)!==0&&(be=!0);else return t.lanes=e.lanes,Yt(e,t,n)}return cc(e,t,a,l,n)}function Df(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return _f(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zn(t,i!==null?i.cachePool:null),i!==null?Oo(t,i):ju(),wo(t);else return l=t.lanes=536870912,_f(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Zn(t,i.cachePool),Oo(t,i),ua(),t.memoizedState=null):(e!==null&&Zn(t,null),ju(),ua());return De(e,t,n,a),t.child}function Pl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function _f(e,t,a,l,n){var i=wu();return i=i===null?null:{parent:ve._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Zn(t,null),ju(),wo(t),e!==null&&nl(e,t,l,!0),t.childLanes=n,null}function ci(e,t){return t=oi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Of(e,t,a){return Ua(t,e.child,null,a),e=ci(t,t.pendingProps),e.flags|=2,at(t),t.memoizedState=null,e}function Zd(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Z){if(l.mode==="hidden")return e=ci(t,l),t.lanes=536870912,Pl(null,e);if(Yu(t),(e=ce)?(e=Qr(e,dt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$t!==null?{id:Mt,overflow:zt}:null,retryLane:536870912,hydrationErrors:null},a=ro(e),a.return=t,t.child=a,xe=t,ce=null)):e=null,e===null)throw ea(t);return t.lanes=536870912,null}return ci(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Yu(t),n)if(t.flags&256)t.flags&=-257,t=Of(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(g(558));else if(be||nl(e,t,a,!1),n=(a&e.childLanes)!==0,be||n){if(l=ue,l!==null&&(u=vs(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,Ca(e,u),Je(l,e,u),uc;vi(),t=Of(e,t,a)}else e=i.treeContext,ce=gt(u.nextSibling),xe=t,Z=!0,Pt=null,dt=!1,e!==null&&go(t,e),t=ci(t,l),t.flags|=4096;return t}return e=Nt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function si(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(g(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function cc(e,t,a,l,n){return wa(t),a=Gu(e,t,a,l,void 0,n),l=Qu(),e!==null&&!be?(Lu(e,t,n),Yt(e,t,n)):(Z&&l&&Eu(t),t.flags|=1,De(e,t,a,n),t.child)}function wf(e,t,a,l,n,i){return wa(t),t.updateQueue=null,a=No(t,l,a,n),Ro(e),l=Qu(),e!==null&&!be?(Lu(e,t,i),Yt(e,t,i)):(Z&&l&&Eu(t),t.flags|=1,De(e,t,a,i),t.child)}function Rf(e,t,a,l,n){if(wa(t),t.stateNode===null){var i=el,u=a.contextType;typeof u=="object"&&u!==null&&(i=Ce(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=nc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Nu(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?Ce(u):el,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(lc(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&nc.enqueueReplaceState(i,i.state,null),Kl(t,l,i,n),Jl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,s=ja(a,c);i.props=s;var d=i.context,p=a.contextType;u=el,typeof p=="object"&&p!==null&&(u=Ce(p));var b=a.getDerivedStateFromProps;p=typeof b=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||d!==u)&&vf(t,i,l,u),aa=!1;var h=t.memoizedState;i.state=h,Kl(t,l,i,n),Jl(),d=t.memoizedState,c||h!==d||aa?(typeof b=="function"&&(lc(t,a,b,l),d=t.memoizedState),(s=aa||pf(t,a,s,l,h,d,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=d),i.props=l,i.state=d,i.context=u,l=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Hu(e,t),u=t.memoizedProps,p=ja(a,u),i.props=p,b=t.pendingProps,h=i.context,d=a.contextType,s=el,typeof d=="object"&&d!==null&&(s=Ce(d)),c=a.getDerivedStateFromProps,(d=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==b||h!==s)&&vf(t,i,l,s),aa=!1,h=t.memoizedState,i.state=h,Kl(t,l,i,n),Jl();var y=t.memoizedState;u!==b||h!==y||aa||e!==null&&e.dependencies!==null&&Ln(e.dependencies)?(typeof c=="function"&&(lc(t,a,c,l),y=t.memoizedState),(p=aa||pf(t,a,p,l,h,y,s)||e!==null&&e.dependencies!==null&&Ln(e.dependencies))?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,y,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,y,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=y),i.props=l,i.state=y,i.context=s,l=p):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,si(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Ua(t,e.child,null,n),t.child=Ua(t,null,a,n)):De(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Yt(e,t,n),e}function Nf(e,t,a,l){return _a(),t.flags|=256,De(e,t,a,l),t.child}var sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function oc(e){return{baseLanes:e,cachePool:Ao()}}function fc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=nt),e}function Hf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(ye.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(Z){if(n?ia(t):ua(),(e=ce)?(e=Qr(e,dt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$t!==null?{id:Mt,overflow:zt}:null,retryLane:536870912,hydrationErrors:null},a=ro(e),a.return=t,t.child=a,xe=t,ce=null)):e=null,e===null)throw ea(t);return Vc(e)?t.lanes=32:t.lanes=536870912,null}var c=l.children;return l=l.fallback,n?(ua(),n=t.mode,c=oi({mode:"hidden",children:c},n),l=Da(l,n,a,null),c.return=t,l.return=t,c.sibling=l,t.child=c,l=t.child,l.memoizedState=oc(a),l.childLanes=fc(e,u,a),t.memoizedState=sc,Pl(null,l)):(ia(t),rc(t,c))}var s=e.memoizedState;if(s!==null&&(c=s.dehydrated,c!==null)){if(i)t.flags&256?(ia(t),t.flags&=-257,t=mc(e,t,a)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),c=l.fallback,n=t.mode,l=oi({mode:"visible",children:l.children},n),c=Da(c,n,a,null),c.flags|=2,l.return=t,c.return=t,l.sibling=c,t.child=l,Ua(t,e.child,null,a),l=t.child,l.memoizedState=oc(a),l.childLanes=fc(e,u,a),t.memoizedState=sc,t=Pl(null,l));else if(ia(t),Vc(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var d=u.dgst;u=d,l=Error(g(419)),l.stack="",l.digest=u,Gl({value:l,source:null,stack:null}),t=mc(e,t,a)}else if(be||nl(e,t,a,!1),u=(a&e.childLanes)!==0,be||u){if(u=ue,u!==null&&(l=vs(u,a),l!==0&&l!==s.retryLane))throw s.retryLane=l,Ca(e,l),Je(u,e,l),uc;Zc(c)||vi(),t=mc(e,t,a)}else Zc(c)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,ce=gt(c.nextSibling),xe=t,Z=!0,Pt=null,dt=!1,e!==null&&go(t,e),t=rc(t,l.children),t.flags|=4096);return t}return n?(ua(),c=l.fallback,n=t.mode,s=e.child,d=s.sibling,l=Nt(s,{mode:"hidden",children:l.children}),l.subtreeFlags=s.subtreeFlags&65011712,d!==null?c=Nt(d,c):(c=Da(c,n,a,null),c.flags|=2),c.return=t,l.return=t,l.sibling=c,t.child=l,Pl(null,l),l=t.child,c=e.child.memoizedState,c===null?c=oc(a):(n=c.cachePool,n!==null?(s=ve._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Ao(),c={baseLanes:c.baseLanes|a,cachePool:n}),l.memoizedState=c,l.childLanes=fc(e,u,a),t.memoizedState=sc,Pl(e.child,l)):(ia(t),a=e.child,e=a.sibling,a=Nt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function rc(e,t){return t=oi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function oi(e,t){return e=et(22,e,null,t),e.lanes=0,e}function mc(e,t,a){return Ua(t,e.child,null,a),e=rc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Cu(e.return,t,a)}function dc(e,t,a,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function Bf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=ye.current,c=(u&2)!==0;if(c?(u=u&1|2,t.flags|=128):u&=1,M(ye,u),De(e,t,l,a),l=Z?Xl:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uf(e,a,t);else if(e.tag===19)Uf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Wn(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),dc(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Wn(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}dc(t,!0,a,null,i,l);break;case"together":dc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Yt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),oa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(nl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,a=Nt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Nt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function hc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ln(e)))}function Vd(e,t,a){switch(t.tag){case 3:He(t,t.stateNode.containerInfo),ta(t,ve,e.memoizedState.cache),_a();break;case 27:case 5:zl(t);break;case 4:He(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Yu(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ia(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Hf(e,t,a):(ia(t),e=Yt(e,t,a),e!==null?e.sibling:null);ia(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(nl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Bf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),M(ye,ye.current),l)break;return null;case 22:return t.lanes=0,Df(e,t,a,t.pendingProps);case 24:ta(t,ve,e.memoizedState.cache)}return Yt(e,t,a)}function jf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)be=!0;else{if(!hc(e,a)&&(t.flags&128)===0)return be=!1,Vd(e,t,a);be=(e.flags&131072)!==0}else be=!1,Z&&(t.flags&1048576)!==0&&ho(t,Xl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Na(t.elementType),t.type=e,typeof e=="function")Su(e)?(l=ja(e,l),t.tag=1,t=Rf(null,t,e,l,a)):(t.tag=0,t=cc(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===ut){t.tag=11,t=zf(null,t,e,l,a);break e}else if(n===k){t.tag=14,t=xf(null,t,e,l,a);break e}}throw t=_t(e)||e,Error(g(306,t,""))}}return t;case 0:return cc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=ja(l,t.pendingProps),Rf(e,t,l,n,a);case 3:e:{if(He(t,t.stateNode.containerInfo),e===null)throw Error(g(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Hu(e,t),Kl(t,l,null,a);var u=t.memoizedState;if(l=u.cache,ta(t,ve,l),l!==i.cache&&Du(t,[ve],a,!0),Jl(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Nf(e,t,l,a);break e}else if(l!==n){n=ft(Error(g(424)),t),Gl(n),t=Nf(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ce=gt(e.firstChild),xe=t,Z=!0,Pt=null,dt=!0,a=Co(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(_a(),l===n){t=Yt(e,t,a);break e}De(e,t,l,a)}t=t.child}return t;case 26:return si(e,t),e===null?(a=Kr(t.type,null,t.pendingProps,null))?t.memoizedState=a:Z||(a=t.type,e=t.pendingProps,l=zi(Y.current).createElement(a),l[ze]=t,l[Ge]=e,_e(l,a,e),Te(l),t.stateNode=l):t.memoizedState=Kr(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return zl(t),e===null&&Z&&(l=t.stateNode=Zr(t.type,t.pendingProps,Y.current),xe=t,dt=!0,n=ce,ha(t.type)?(Jc=n,ce=gt(l.firstChild)):ce=n),De(e,t,t.pendingProps.children,a),si(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Z&&((n=l=ce)&&(l=Eh(l,t.type,t.pendingProps,dt),l!==null?(t.stateNode=l,xe=t,ce=gt(l.firstChild),dt=!1,n=!0):n=!1),n||ea(t)),zl(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,Qc(n,i)?l=null:u!==null&&Qc(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=Gu(e,t,jd,null,null,a),gn._currentValue=n),si(e,t),De(e,t,l,a),t.child;case 6:return e===null&&Z&&((e=a=ce)&&(a=Th(a,t.pendingProps,dt),a!==null?(t.stateNode=a,xe=t,ce=null,e=!0):e=!1),e||ea(t)),null;case 13:return Hf(e,t,a);case 4:return He(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ua(t,null,l,a):De(e,t,l,a),t.child;case 11:return zf(e,t,t.type,t.pendingProps,a);case 7:return De(e,t,t.pendingProps,a),t.child;case 8:return De(e,t,t.pendingProps.children,a),t.child;case 12:return De(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ta(t,t.type,l.value),De(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,wa(t),n=Ce(n),l=l(n),t.flags|=1,De(e,t,l,a),t.child;case 14:return xf(e,t,t.type,t.pendingProps,a);case 15:return Cf(e,t,t.type,t.pendingProps,a);case 19:return Bf(e,t,a);case 31:return Zd(e,t,a);case 22:return Df(e,t,a,t.pendingProps);case 24:return wa(t),l=Ce(ve),e===null?(n=wu(),n===null&&(n=ue,i=_u(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},Nu(t),ta(t,ve,n)):((e.lanes&a)!==0&&(Hu(e,t),Kl(t,null,null,a),Jl()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ta(t,ve,l)):(l=i.cache,ta(t,ve,l),l!==n.cache&&Du(t,[ve],a,!0))),De(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(g(156,t.tag))}function Xt(e){e.flags|=4}function gc(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(fr())e.flags|=8192;else throw Ha=Jn,Ru}else e.flags&=-16777217}function qf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Pr(t))if(fr())e.flags|=8192;else throw Ha=Jn,Ru}function fi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?gs():536870912,e.lanes|=t,yl|=t)}function en(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Jd(e,t,a){var l=t.pendingProps;switch(Tu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return se(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Bt(ve),ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ll(t)?Xt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zu())),se(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Xt(t),i!==null?(se(t),qf(t,i)):(se(t),gc(t,n,null,l,a))):i?i!==e.memoizedState?(Xt(t),se(t),qf(t,i)):(se(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Xt(t),se(t),gc(t,n,e,l,a)),null;case 27:if(An(t),a=Y.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Xt(t);else{if(!l){if(t.stateNode===null)throw Error(g(166));return se(t),null}e=C.current,ll(t)?yo(t):(e=Zr(n,l,a),t.stateNode=e,Xt(t))}return se(t),null;case 5:if(An(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Xt(t);else{if(!l){if(t.stateNode===null)throw Error(g(166));return se(t),null}if(i=C.current,ll(t))yo(t);else{var u=zi(Y.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[ze]=t,i[Ge]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(_e(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Xt(t)}}return se(t),gc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Xt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(g(166));if(e=Y.current,ll(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=xe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[ze]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Hr(e.nodeValue,a)),e||ea(t,!0)}else e=zi(e).createTextNode(l),e[ze]=t,t.stateNode=e}return se(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=ll(t),a!==null){if(e===null){if(!l)throw Error(g(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(557));e[ze]=t}else _a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;se(t),e=!1}else a=zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(g(558))}return se(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ll(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(g(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(g(317));n[ze]=t}else _a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;se(t),n=!1}else n=zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),fi(t,t.updateQueue),se(t),null);case 4:return ge(),e===null&&jc(t.stateNode.containerInfo),se(t),null;case 10:return Bt(t.type),se(t),null;case 19:if(A(ye),l=t.memoizedState,l===null)return se(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)en(l,!1);else{if(de!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Wn(e),i!==null){for(t.flags|=128,en(l,!1),e=i.updateQueue,t.updateQueue=e,fi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)fo(a,e),a=a.sibling;return M(ye,ye.current&1|2),Z&&Ht(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Fe()>gi&&(t.flags|=128,n=!0,en(l,!1),t.lanes=4194304)}else{if(!n)if(e=Wn(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,fi(t,e),en(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Z)return se(t),null}else 2*Fe()-l.renderingStartTime>gi&&a!==536870912&&(t.flags|=128,n=!0,en(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Fe(),e.sibling=null,a=ye.current,M(ye,n?a&1|2:a&1),Z&&Ht(t,l.treeForkCount),e):(se(t),null);case 22:case 23:return at(t),qu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),a=t.updateQueue,a!==null&&fi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&A(Ra),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Bt(ve),se(t),null;case 25:return null;case 30:return null}throw Error(g(156,t.tag))}function Kd(e,t){switch(Tu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bt(ve),ge(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return An(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(g(340));_a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(at(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));_a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(ye),null;case 4:return ge(),null;case 10:return Bt(t.type),null;case 22:case 23:return at(t),qu(),e!==null&&A(Ra),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bt(ve),null;case 25:return null;default:return null}}function Yf(e,t){switch(Tu(t),t.tag){case 3:Bt(ve),ge();break;case 26:case 27:case 5:An(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:A(ye);break;case 10:Bt(t.type);break;case 22:case 23:at(t),qu(),e!==null&&A(Ra);break;case 24:Bt(ve)}}function tn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(c){ee(t,t.return,c)}}function ca(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=t;var s=a,d=c;try{d()}catch(p){ee(n,s,p)}}}l=l.next}while(l!==i)}}catch(p){ee(t,t.return,p)}}function Xf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{_o(t,a)}catch(l){ee(e,e.return,l)}}}function Gf(e,t,a){a.props=ja(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ee(e,t,l)}}function an(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ee(e,t,n)}}function xt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ee(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ee(e,t,n)}else a.current=null}function Qf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ee(e,e.return,n)}}function yc(e,t,a){try{var l=e.stateNode;yh(l,e.type,a,t),l[Ge]=t}catch(n){ee(e,e.return,n)}}function Lf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ha(e.type)||e.tag===4}function pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=wt));else if(l!==4&&(l===27&&ha(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(vc(e,t,a),e=e.sibling;e!==null;)vc(e,t,a),e=e.sibling}function ri(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ri(e,t,a),e=e.sibling;e!==null;)ri(e,t,a),e=e.sibling}function kf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);_e(t,l,a),t[ze]=e,t[Ge]=a}catch(i){ee(e,e.return,i)}}var Gt=!1,Ae=!1,Sc=!1,Zf=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Id(e,t){if(e=e.containerInfo,Xc=Ri,e=to(e),mu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,c=-1,s=-1,d=0,p=0,b=e,h=null;t:for(;;){for(var y;b!==a||n!==0&&b.nodeType!==3||(c=u+n),b!==i||l!==0&&b.nodeType!==3||(s=u+l),b.nodeType===3&&(u+=b.nodeValue.length),(y=b.firstChild)!==null;)h=b,b=y;for(;;){if(b===e)break t;if(h===a&&++d===n&&(c=u),h===i&&++p===l&&(s=u),(y=b.nextSibling)!==null)break;b=h,h=b.parentNode}b=y}a=c===-1||s===-1?null:{start:c,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gc={focusedElem:e,selectionRange:a},Ri=!1,Me=t;Me!==null;)if(t=Me,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Me=e;else for(;Me!==null;){switch(t=Me,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var z=ja(a.type,n);e=l.getSnapshotBeforeUpdate(z,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(w){ee(a,a.return,w)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)kc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":kc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(g(163))}if(e=t.sibling,e!==null){e.return=t.return,Me=e;break}Me=t.return}}function Vf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Lt(e,a),l&4&&tn(5,a);break;case 1:if(Lt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){ee(a,a.return,u)}else{var n=ja(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){ee(a,a.return,u)}}l&64&&Xf(a),l&512&&an(a,a.return);break;case 3:if(Lt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{_o(e,t)}catch(u){ee(a,a.return,u)}}break;case 27:t===null&&l&4&&kf(a);case 26:case 5:Lt(e,a),t===null&&l&4&&Qf(a),l&512&&an(a,a.return);break;case 12:Lt(e,a);break;case 31:Lt(e,a),l&4&&If(e,a);break;case 13:Lt(e,a),l&4&&Ff(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=nh.bind(null,a),Mh(e,a))));break;case 22:if(l=a.memoizedState!==null||Gt,!l){t=t!==null&&t.memoizedState!==null||Ae,n=Gt;var i=Ae;Gt=l,(Ae=t)&&!i?kt(e,a,(a.subtreeFlags&8772)!==0):Lt(e,a),Gt=n,Ae=i}break;case 30:break;default:Lt(e,a)}}function Jf(e){var t=e.alternate;t!==null&&(e.alternate=null,Jf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ii(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var fe=null,Le=!1;function Qt(e,t,a){for(a=a.child;a!==null;)Kf(e,t,a),a=a.sibling}function Kf(e,t,a){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(xl,a)}catch{}switch(a.tag){case 26:Ae||xt(a,t),Qt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ae||xt(a,t);var l=fe,n=Le;ha(a.type)&&(fe=a.stateNode,Le=!1),Qt(e,t,a),mn(a.stateNode),fe=l,Le=n;break;case 5:Ae||xt(a,t);case 6:if(l=fe,n=Le,fe=null,Qt(e,t,a),fe=l,Le=n,fe!==null)if(Le)try{(fe.nodeType===9?fe.body:fe.nodeName==="HTML"?fe.ownerDocument.body:fe).removeChild(a.stateNode)}catch(i){ee(a,t,i)}else try{fe.removeChild(a.stateNode)}catch(i){ee(a,t,i)}break;case 18:fe!==null&&(Le?(e=fe,Xr(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ml(e)):Xr(fe,a.stateNode));break;case 4:l=fe,n=Le,fe=a.stateNode.containerInfo,Le=!0,Qt(e,t,a),fe=l,Le=n;break;case 0:case 11:case 14:case 15:ca(2,a,t),Ae||ca(4,a,t),Qt(e,t,a);break;case 1:Ae||(xt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Gf(a,t,l)),Qt(e,t,a);break;case 21:Qt(e,t,a);break;case 22:Ae=(l=Ae)||a.memoizedState!==null,Qt(e,t,a),Ae=l;break;default:Qt(e,t,a)}}function If(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ml(e)}catch(a){ee(t,t.return,a)}}}function Ff(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ml(e)}catch(a){ee(t,t.return,a)}}function Fd(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Zf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Zf),t;default:throw Error(g(435,e.tag))}}function mi(e,t){var a=Fd(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=ih.bind(null,e,l);l.then(n,n)}})}function ke(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,c=u;e:for(;c!==null;){switch(c.tag){case 27:if(ha(c.type)){fe=c.stateNode,Le=!1;break e}break;case 5:fe=c.stateNode,Le=!1;break e;case 3:case 4:fe=c.stateNode.containerInfo,Le=!0;break e}c=c.return}if(fe===null)throw Error(g(160));Kf(i,u,n),fe=null,Le=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Wf(t,e),t=t.sibling}var St=null;function Wf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ke(t,e),Ze(e),l&4&&(ca(3,e,e.return),tn(3,e),ca(5,e,e.return));break;case 1:ke(t,e),Ze(e),l&512&&(Ae||a===null||xt(a,a.return)),l&64&&Gt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=St;if(ke(t,e),Ze(e),l&512&&(Ae||a===null||xt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[_l]||i[ze]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),_e(i,l,a),i[ze]=e,Te(i),l=i;break e;case"link":var u=Wr("link","href",n).get(l+(a.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(c,1);break t}}i=n.createElement(l),_e(i,l,a),n.head.appendChild(i);break;case"meta":if(u=Wr("meta","content",n).get(l+(a.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(c,1);break t}}i=n.createElement(l),_e(i,l,a),n.head.appendChild(i);break;default:throw Error(g(468,l))}i[ze]=e,Te(i),l=i}e.stateNode=l}else $r(n,e.type,e.stateNode);else e.stateNode=Fr(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?$r(n,e.type,e.stateNode):Fr(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&yc(e,e.memoizedProps,a.memoizedProps)}break;case 27:ke(t,e),Ze(e),l&512&&(Ae||a===null||xt(a,a.return)),a!==null&&l&4&&yc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ke(t,e),Ze(e),l&512&&(Ae||a===null||xt(a,a.return)),e.flags&32){n=e.stateNode;try{Ja(n,"")}catch(z){ee(e,e.return,z)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,yc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Sc=!0);break;case 6:if(ke(t,e),Ze(e),l&4){if(e.stateNode===null)throw Error(g(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(z){ee(e,e.return,z)}}break;case 3:if(Di=null,n=St,St=xi(t.containerInfo),ke(t,e),St=n,Ze(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ml(t.containerInfo)}catch(z){ee(e,e.return,z)}Sc&&(Sc=!1,$f(e));break;case 4:l=St,St=xi(e.stateNode.containerInfo),ke(t,e),Ze(e),St=l;break;case 12:ke(t,e),Ze(e);break;case 31:ke(t,e),Ze(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mi(e,l)));break;case 13:ke(t,e),Ze(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(hi=Fe()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mi(e,l)));break;case 22:n=e.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,d=Gt,p=Ae;if(Gt=d||n,Ae=p||s,ke(t,e),Ae=p,Gt=d,Ze(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||s||Gt||Ae||qa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){s=a=t;try{if(i=s.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=s.stateNode;var b=s.memoizedProps.style,h=b!=null&&b.hasOwnProperty("display")?b.display:null;c.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(z){ee(s,s.return,z)}}}else if(t.tag===6){if(a===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(z){ee(s,s.return,z)}}}else if(t.tag===18){if(a===null){s=t;try{var y=s.stateNode;n?Gr(y,!0):Gr(s.stateNode,!1)}catch(z){ee(s,s.return,z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,mi(e,a))));break;case 19:ke(t,e),Ze(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mi(e,l)));break;case 30:break;case 21:break;default:ke(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Lf(l)){a=l;break}l=l.return}if(a==null)throw Error(g(160));switch(a.tag){case 27:var n=a.stateNode,i=pc(e);ri(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(Ja(u,""),a.flags&=-33);var c=pc(e);ri(e,c,u);break;case 3:case 4:var s=a.stateNode.containerInfo,d=pc(e);vc(e,d,s);break;default:throw Error(g(161))}}catch(p){ee(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $f(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;$f(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Lt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Vf(e,t.alternate,t),t=t.sibling}function qa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ca(4,t,t.return),qa(t);break;case 1:xt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Gf(t,t.return,a),qa(t);break;case 27:mn(t.stateNode);case 26:case 5:xt(t,t.return),qa(t);break;case 22:t.memoizedState===null&&qa(t);break;case 30:qa(t);break;default:qa(t)}e=e.sibling}}function kt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:kt(n,i,a),tn(4,i);break;case 1:if(kt(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(d){ee(l,l.return,d)}if(l=i,n=l.updateQueue,n!==null){var c=l.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Do(s[n],c)}catch(d){ee(l,l.return,d)}}a&&u&64&&Xf(i),an(i,i.return);break;case 27:kf(i);case 26:case 5:kt(n,i,a),a&&l===null&&u&4&&Qf(i),an(i,i.return);break;case 12:kt(n,i,a);break;case 31:kt(n,i,a),a&&u&4&&If(n,i);break;case 13:kt(n,i,a),a&&u&4&&Ff(n,i);break;case 22:i.memoizedState===null&&kt(n,i,a),an(i,i.return);break;case 30:break;default:kt(n,i,a)}t=t.sibling}}function bc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ql(a))}function Ac(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ql(e))}function bt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Pf(e,t,a,l),t=t.sibling}function Pf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:bt(e,t,a,l),n&2048&&tn(9,t);break;case 1:bt(e,t,a,l);break;case 3:bt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ql(e)));break;case 12:if(n&2048){bt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){ee(t,t.return,s)}}else bt(e,t,a,l);break;case 31:bt(e,t,a,l);break;case 13:bt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?bt(e,t,a,l):ln(e,t):i._visibility&2?bt(e,t,a,l):(i._visibility|=2,dl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&bc(u,t);break;case 24:bt(e,t,a,l),n&2048&&Ac(t.alternate,t);break;default:bt(e,t,a,l)}}function dl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,c=a,s=l,d=u.flags;switch(u.tag){case 0:case 11:case 15:dl(i,u,c,s,n),tn(8,u);break;case 23:break;case 22:var p=u.stateNode;u.memoizedState!==null?p._visibility&2?dl(i,u,c,s,n):ln(i,u):(p._visibility|=2,dl(i,u,c,s,n)),n&&d&2048&&bc(u.alternate,u);break;case 24:dl(i,u,c,s,n),n&&d&2048&&Ac(u.alternate,u);break;default:dl(i,u,c,s,n)}t=t.sibling}}function ln(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:ln(a,l),n&2048&&bc(l.alternate,l);break;case 24:ln(a,l),n&2048&&Ac(l.alternate,l);break;default:ln(a,l)}t=t.sibling}}var nn=8192;function hl(e,t,a){if(e.subtreeFlags&nn)for(e=e.child;e!==null;)er(e,t,a),e=e.sibling}function er(e,t,a){switch(e.tag){case 26:hl(e,t,a),e.flags&nn&&e.memoizedState!==null&&Bh(a,St,e.memoizedState,e.memoizedProps);break;case 5:hl(e,t,a);break;case 3:case 4:var l=St;St=xi(e.stateNode.containerInfo),hl(e,t,a),St=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=nn,nn=16777216,hl(e,t,a),nn=l):hl(e,t,a));break;default:hl(e,t,a)}}function tr(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function un(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Me=l,lr(l,e)}tr(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ar(e),e=e.sibling}function ar(e){switch(e.tag){case 0:case 11:case 15:un(e),e.flags&2048&&ca(9,e,e.return);break;case 3:un(e);break;case 12:un(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,di(e)):un(e);break;default:un(e)}}function di(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Me=l,lr(l,e)}tr(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ca(8,t,t.return),di(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,di(t));break;default:di(t)}e=e.sibling}}function lr(e,t){for(;Me!==null;){var a=Me;switch(a.tag){case 0:case 11:case 15:ca(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ql(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Me=l;else e:for(a=e;Me!==null;){l=Me;var n=l.sibling,i=l.return;if(Jf(l),l===a){Me=null;break e}if(n!==null){n.return=i,Me=n;break e}Me=i}}}var Wd={getCacheForType:function(e){var t=Ce(ve),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ce(ve).controller.signal}},$d=typeof WeakMap=="function"?WeakMap:Map,I=0,ue=null,X=null,Q=0,P=0,lt=null,sa=!1,gl=!1,Ec=!1,Zt=0,de=0,oa=0,Ya=0,Tc=0,nt=0,yl=0,cn=null,Ve=null,Mc=!1,hi=0,nr=0,gi=1/0,yi=null,fa=null,Ee=0,ra=null,pl=null,Vt=0,zc=0,xc=null,ir=null,sn=0,Cc=null;function it(){return(I&2)!==0&&Q!==0?Q&-Q:v.T!==null?Nc():Ss()}function ur(){if(nt===0)if((Q&536870912)===0||Z){var e=Mn;Mn<<=1,(Mn&3932160)===0&&(Mn=262144),nt=e}else nt=536870912;return e=tt.current,e!==null&&(e.flags|=32),nt}function Je(e,t,a){(e===ue&&(P===2||P===9)||e.cancelPendingCommit!==null)&&(vl(e,0),ma(e,Q,nt,!1)),Dl(e,a),((I&2)===0||e!==ue)&&(e===ue&&((I&2)===0&&(Ya|=a),de===4&&ma(e,Q,nt,!1)),Ct(e))}function cr(e,t,a){if((I&6)!==0)throw Error(g(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Cl(e,t),n=l?th(e,t):_c(e,t,!0),i=l;do{if(n===0){gl&&!l&&ma(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Pd(a)){n=_c(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var c=e;n=cn;var s=c.current.memoizedState.isDehydrated;if(s&&(vl(c,u).flags|=256),u=_c(c,u,!1),u!==2){if(Ec&&!s){c.errorRecoveryDisabledLanes|=i,Ya|=i,n=4;break e}i=Ve,Ve=n,i!==null&&(Ve===null?Ve=i:Ve.push.apply(Ve,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){vl(e,0),ma(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(g(345));case 4:if((t&4194048)!==t)break;case 6:ma(l,t,nt,!sa);break e;case 2:Ve=null;break;case 3:case 5:break;default:throw Error(g(329))}if((t&62914560)===t&&(n=hi+300-Fe(),10<n)){if(ma(l,t,nt,!sa),xn(l,0,!0)!==0)break e;Vt=t,l.timeoutHandle=qr(sr.bind(null,l,a,Ve,yi,Mc,t,nt,Ya,yl,sa,i,"Throttled",-0,0),n);break e}sr(l,a,Ve,yi,Mc,t,nt,Ya,yl,sa,i,null,-0,0)}}break}while(!0);Ct(e)}function sr(e,t,a,l,n,i,u,c,s,d,p,b,h,y){if(e.timeoutHandle=-1,b=t.subtreeFlags,b&8192||(b&16785408)===16785408){b={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:wt},er(t,i,b);var z=(i&62914560)===i?hi-Fe():(i&4194048)===i?nr-Fe():0;if(z=jh(b,z),z!==null){Vt=i,e.cancelPendingCommit=z(yr.bind(null,e,t,i,a,l,n,u,c,s,p,b,null,h,y)),ma(e,i,u,!d);return}}yr(e,t,i,a,l,n,u,c,s)}function Pd(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!Pe(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ma(e,t,a,l){t&=~Tc,t&=~Ya,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-$e(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&ys(e,a,t)}function pi(){return(I&6)===0?(on(0),!1):!0}function Dc(){if(X!==null){if(P===0)var e=X.return;else e=X,Ut=Oa=null,ku(e),sl=null,kl=0,e=X;for(;e!==null;)Yf(e.alternate,e),e=e.return;X=null}}function vl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Sh(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Vt=0,Dc(),ue=e,X=a=Nt(e.current,null),Q=t,P=0,lt=null,sa=!1,gl=Cl(e,t),Ec=!1,yl=nt=Tc=Ya=oa=de=0,Ve=cn=null,Mc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-$e(l),i=1<<n;t|=e[n],l&=~i}return Zt=t,qn(),a}function or(e,t){j=null,v.H=$l,t===cl||t===Vn?(t=Mo(),P=3):t===Ru?(t=Mo(),P=4):P=t===uc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,lt=t,X===null&&(de=1,ui(e,ft(t,e.current)))}function fr(){var e=tt.current;return e===null?!0:(Q&4194048)===Q?ht===null:(Q&62914560)===Q||(Q&536870912)!==0?e===ht:!1}function rr(){var e=v.H;return v.H=$l,e===null?$l:e}function mr(){var e=v.A;return v.A=Wd,e}function vi(){de=4,sa||(Q&4194048)!==Q&&tt.current!==null||(gl=!0),(oa&134217727)===0&&(Ya&134217727)===0||ue===null||ma(ue,Q,nt,!1)}function _c(e,t,a){var l=I;I|=2;var n=rr(),i=mr();(ue!==e||Q!==t)&&(yi=null,vl(e,t)),t=!1;var u=de;e:do try{if(P!==0&&X!==null){var c=X,s=lt;switch(P){case 8:Dc(),u=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var d=P;if(P=0,lt=null,Sl(e,c,s,d),a&&gl){u=0;break e}break;default:d=P,P=0,lt=null,Sl(e,c,s,d)}}eh(),u=de;break}catch(p){or(e,p)}while(!0);return t&&e.shellSuspendCounter++,Ut=Oa=null,I=l,v.H=n,v.A=i,X===null&&(ue=null,Q=0,qn()),u}function eh(){for(;X!==null;)dr(X)}function th(e,t){var a=I;I|=2;var l=rr(),n=mr();ue!==e||Q!==t?(yi=null,gi=Fe()+500,vl(e,t)):gl=Cl(e,t);e:do try{if(P!==0&&X!==null){t=X;var i=lt;t:switch(P){case 1:P=0,lt=null,Sl(e,t,i,1);break;case 2:case 9:if(Eo(i)){P=0,lt=null,hr(t);break}t=function(){P!==2&&P!==9||ue!==e||(P=7),Ct(e)},i.then(t,t);break e;case 3:P=7;break e;case 4:P=5;break e;case 7:Eo(i)?(P=0,lt=null,hr(t)):(P=0,lt=null,Sl(e,t,i,7));break;case 5:var u=null;switch(X.tag){case 26:u=X.memoizedState;case 5:case 27:var c=X;if(u?Pr(u):c.stateNode.complete){P=0,lt=null;var s=c.sibling;if(s!==null)X=s;else{var d=c.return;d!==null?(X=d,Si(d)):X=null}break t}}P=0,lt=null,Sl(e,t,i,5);break;case 6:P=0,lt=null,Sl(e,t,i,6);break;case 8:Dc(),de=6;break e;default:throw Error(g(462))}}ah();break}catch(p){or(e,p)}while(!0);return Ut=Oa=null,v.H=l,v.A=n,I=a,X!==null?0:(ue=null,Q=0,qn(),de)}function ah(){for(;X!==null&&!zm();)dr(X)}function dr(e){var t=jf(e.alternate,e,Zt);e.memoizedProps=e.pendingProps,t===null?Si(e):X=t}function hr(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=wf(a,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=wf(a,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:ku(t);default:Yf(a,t),t=X=fo(t,Zt),t=jf(a,t,Zt)}e.memoizedProps=e.pendingProps,t===null?Si(e):X=t}function Sl(e,t,a,l){Ut=Oa=null,ku(t),sl=null,kl=0;var n=t.return;try{if(kd(e,n,t,a,Q)){de=1,ui(e,ft(a,e.current)),X=null;return}}catch(i){if(n!==null)throw X=n,i;de=1,ui(e,ft(a,e.current)),X=null;return}t.flags&32768?(Z||l===1?e=!0:gl||(Q&536870912)!==0?e=!1:(sa=e=!0,(l===2||l===9||l===3||l===6)&&(l=tt.current,l!==null&&l.tag===13&&(l.flags|=16384))),gr(t,e)):Si(t)}function Si(e){var t=e;do{if((t.flags&32768)!==0){gr(t,sa);return}e=t.return;var a=Jd(t.alternate,t,Zt);if(a!==null){X=a;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);de===0&&(de=5)}function gr(e,t){do{var a=Kd(e.alternate,e);if(a!==null){a.flags&=32767,X=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){X=e;return}X=e=a}while(e!==null);de=6,X=null}function yr(e,t,a,l,n,i,u,c,s){e.cancelPendingCommit=null;do bi();while(Ee!==0);if((I&6)!==0)throw Error(g(327));if(t!==null){if(t===e.current)throw Error(g(177));if(i=t.lanes|t.childLanes,i|=pu,Um(e,a,i,u,c,s),e===ue&&(X=ue=null,Q=0),pl=t,ra=e,Vt=a,zc=i,xc=n,ir=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,uh(En,function(){return Ar(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=v.T,v.T=null,n=T.p,T.p=2,u=I,I|=4;try{Id(e,t,a)}finally{I=u,T.p=n,v.T=l}}Ee=1,pr(),vr(),Sr()}}function pr(){if(Ee===1){Ee=0;var e=ra,t=pl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=v.T,v.T=null;var l=T.p;T.p=2;var n=I;I|=4;try{Wf(t,e);var i=Gc,u=to(e.containerInfo),c=i.focusedElem,s=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&eo(c.ownerDocument.documentElement,c)){if(s!==null&&mu(c)){var d=s.start,p=s.end;if(p===void 0&&(p=d),"selectionStart"in c)c.selectionStart=d,c.selectionEnd=Math.min(p,c.value.length);else{var b=c.ownerDocument||document,h=b&&b.defaultView||window;if(h.getSelection){var y=h.getSelection(),z=c.textContent.length,w=Math.min(s.start,z),ne=s.end===void 0?w:Math.min(s.end,z);!y.extend&&w>ne&&(u=ne,ne=w,w=u);var r=Ps(c,w),o=Ps(c,ne);if(r&&o&&(y.rangeCount!==1||y.anchorNode!==r.node||y.anchorOffset!==r.offset||y.focusNode!==o.node||y.focusOffset!==o.offset)){var m=b.createRange();m.setStart(r.node,r.offset),y.removeAllRanges(),w>ne?(y.addRange(m),y.extend(o.node,o.offset)):(m.setEnd(o.node,o.offset),y.addRange(m))}}}}for(b=[],y=c;y=y.parentNode;)y.nodeType===1&&b.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<b.length;c++){var S=b[c];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Ri=!!Xc,Gc=Xc=null}finally{I=n,T.p=l,v.T=a}}e.current=t,Ee=2}}function vr(){if(Ee===2){Ee=0;var e=ra,t=pl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=v.T,v.T=null;var l=T.p;T.p=2;var n=I;I|=4;try{Vf(e,t.alternate,t)}finally{I=n,T.p=l,v.T=a}}Ee=3}}function Sr(){if(Ee===4||Ee===3){Ee=0,xm();var e=ra,t=pl,a=Vt,l=ir;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ee=5:(Ee=0,pl=ra=null,br(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(fa=null),Ji(a),t=t.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(xl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=v.T,n=T.p,T.p=2,v.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var c=l[u];i(c.value,{componentStack:c.stack})}}finally{v.T=t,T.p=n}}(Vt&3)!==0&&bi(),Ct(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Cc?sn++:(sn=0,Cc=e):sn=0,on(0)}}function br(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ql(t)))}function bi(){return pr(),vr(),Sr(),Ar()}function Ar(){if(Ee!==5)return!1;var e=ra,t=zc;zc=0;var a=Ji(Vt),l=v.T,n=T.p;try{T.p=32>a?32:a,v.T=null,a=xc,xc=null;var i=ra,u=Vt;if(Ee=0,pl=ra=null,Vt=0,(I&6)!==0)throw Error(g(331));var c=I;if(I|=4,ar(i.current),Pf(i,i.current,u,a),I=c,on(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(xl,i)}catch{}return!0}finally{T.p=n,v.T=l,br(e,t)}}function Er(e,t,a){t=ft(a,t),t=ic(e.stateNode,t,2),e=na(e,t,2),e!==null&&(Dl(e,2),Ct(e))}function ee(e,t,a){if(e.tag===3)Er(e,e,a);else for(;t!==null;){if(t.tag===3){Er(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(fa===null||!fa.has(l))){e=ft(a,e),a=Tf(2),l=na(t,a,2),l!==null&&(Mf(a,l,t,e),Dl(l,2),Ct(l));break}}t=t.return}}function Oc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new $d;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Ec=!0,n.add(a),e=lh.bind(null,e,t,a),t.then(e,e))}function lh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ue===e&&(Q&a)===a&&(de===4||de===3&&(Q&62914560)===Q&&300>Fe()-hi?(I&2)===0&&vl(e,0):Tc|=a,yl===Q&&(yl=0)),Ct(e)}function Tr(e,t){t===0&&(t=gs()),e=Ca(e,t),e!==null&&(Dl(e,t),Ct(e))}function nh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Tr(e,a)}function ih(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(g(314))}l!==null&&l.delete(t),Tr(e,a)}function uh(e,t){return Li(e,t)}var Ai=null,bl=null,wc=!1,Ei=!1,Rc=!1,da=0;function Ct(e){e!==bl&&e.next===null&&(bl===null?Ai=bl=e:bl=bl.next=e),Ei=!0,wc||(wc=!0,sh())}function on(e,t){if(!Rc&&Ei){Rc=!0;do for(var a=!1,l=Ai;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,c=l.pingedLanes;i=(1<<31-$e(42|e)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Cr(l,i))}else i=Q,i=xn(l,l===ue?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Cl(l,i)||(a=!0,Cr(l,i));l=l.next}while(a);Rc=!1}}function ch(){Mr()}function Mr(){Ei=wc=!1;var e=0;da!==0&&vh()&&(e=da);for(var t=Fe(),a=null,l=Ai;l!==null;){var n=l.next,i=zr(l,t);i===0?(l.next=null,a===null?Ai=n:a.next=n,n===null&&(bl=a)):(a=l,(e!==0||(i&3)!==0)&&(Ei=!0)),l=n}Ee!==0&&Ee!==5||on(e),da!==0&&(da=0)}function zr(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-$e(i),c=1<<u,s=n[u];s===-1?((c&a)===0||(c&l)!==0)&&(n[u]=Hm(c,t)):s<=t&&(e.expiredLanes|=c),i&=~c}if(t=ue,a=Q,a=xn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(P===2||P===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ki(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Cl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&ki(l),Ji(a)){case 2:case 8:a=ds;break;case 32:a=En;break;case 268435456:a=hs;break;default:a=En}return l=xr.bind(null,e),a=Li(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&ki(l),e.callbackPriority=2,e.callbackNode=null,2}function xr(e,t){if(Ee!==0&&Ee!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(bi()&&e.callbackNode!==a)return null;var l=Q;return l=xn(e,e===ue?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(cr(e,l,t),zr(e,Fe()),e.callbackNode!=null&&e.callbackNode===a?xr.bind(null,e):null)}function Cr(e,t){if(bi())return null;cr(e,t,!0)}function sh(){bh(function(){(I&6)!==0?Li(ms,ch):Mr()})}function Nc(){if(da===0){var e=il;e===0&&(e=Tn,Tn<<=1,(Tn&261888)===0&&(Tn=256)),da=e}return da}function Dr(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:On(""+e)}function _r(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function oh(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Dr((n[Ge]||null).action),u=l.submitter;u&&(t=(t=u[Ge]||null)?Dr(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var c=new Hn("action","action",null,l,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(da!==0){var s=u?_r(n,u):new FormData(n);Pu(a,{pending:!0,data:s,method:n.method,action:i},null,s)}}else typeof i=="function"&&(c.preventDefault(),s=u?_r(n,u):new FormData(n),Pu(a,{pending:!0,data:s,method:n.method,action:i},i,s))},currentTarget:n}]})}}for(var Hc=0;Hc<yu.length;Hc++){var Uc=yu[Hc],fh=Uc.toLowerCase(),rh=Uc[0].toUpperCase()+Uc.slice(1);vt(fh,"on"+rh)}vt(no,"onAnimationEnd"),vt(io,"onAnimationIteration"),vt(uo,"onAnimationStart"),vt("dblclick","onDoubleClick"),vt("focusin","onFocus"),vt("focusout","onBlur"),vt(Cd,"onTransitionRun"),vt(Dd,"onTransitionStart"),vt(_d,"onTransitionCancel"),vt(co,"onTransitionEnd"),Za("onMouseEnter",["mouseout","mouseover"]),Za("onMouseLeave",["mouseout","mouseover"]),Za("onPointerEnter",["pointerout","pointerover"]),Za("onPointerLeave",["pointerout","pointerover"]),Ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ta("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fn));function Or(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var c=l[u],s=c.instance,d=c.currentTarget;if(c=c.listener,s!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=d;try{i(n)}catch(p){jn(p)}n.currentTarget=null,i=s}else for(u=0;u<l.length;u++){if(c=l[u],s=c.instance,d=c.currentTarget,c=c.listener,s!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=d;try{i(n)}catch(p){jn(p)}n.currentTarget=null,i=s}}}}function G(e,t){var a=t[Ki];a===void 0&&(a=t[Ki]=new Set);var l=e+"__bubble";a.has(l)||(wr(t,e,2,!1),a.add(l))}function Bc(e,t,a){var l=0;t&&(l|=4),wr(a,e,l,t)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function jc(e){if(!e[Ti]){e[Ti]=!0,Es.forEach(function(a){a!=="selectionchange"&&(mh.has(a)||Bc(a,!1,e),Bc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ti]||(t[Ti]=!0,Bc("selectionchange",!1,t))}}function wr(e,t,a,l){switch(um(t)){case 2:var n=Xh;break;case 8:n=Gh;break;default:n=$c}a=n.bind(null,t,a,e),n=void 0,!lu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function qc(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var c=l.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=l.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=Qa(c),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){l=i=u;continue e}c=c.parentNode}}l=l.return}Hs(function(){var d=i,p=tu(a),b=[];e:{var h=so.get(e);if(h!==void 0){var y=Hn,z=e;switch(e){case"keypress":if(Rn(a)===0)break e;case"keydown":case"keyup":y=id;break;case"focusin":z="focus",y=cu;break;case"focusout":z="blur",y=cu;break;case"beforeblur":case"afterblur":y=cu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Jm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=sd;break;case no:case io:case uo:y=Fm;break;case co:y=fd;break;case"scroll":case"scrollend":y=Zm;break;case"wheel":y=md;break;case"copy":case"cut":case"paste":y=$m;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ys;break;case"toggle":case"beforetoggle":y=hd}var w=(t&4)!==0,ne=!w&&(e==="scroll"||e==="scrollend"),r=w?h!==null?h+"Capture":null:h;w=[];for(var o=d,m;o!==null;){var S=o;if(m=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||m===null||r===null||(S=wl(o,r),S!=null&&w.push(rn(o,S,m))),ne)break;o=o.return}0<w.length&&(h=new y(h,z,null,a,p),b.push({event:h,listeners:w}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&a!==eu&&(z=a.relatedTarget||a.fromElement)&&(Qa(z)||z[Ga]))break e;if((y||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,y?(z=a.relatedTarget||a.toElement,y=d,z=z?Qa(z):null,z!==null&&(ne=K(z),w=z.tag,z!==ne||w!==5&&w!==27&&w!==6)&&(z=null)):(y=null,z=d),y!==z)){if(w=js,S="onMouseLeave",r="onMouseEnter",o="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ys,S="onPointerLeave",r="onPointerEnter",o="pointer"),ne=y==null?h:Ol(y),m=z==null?h:Ol(z),h=new w(S,o+"leave",y,a,p),h.target=ne,h.relatedTarget=m,S=null,Qa(p)===d&&(w=new w(r,o+"enter",z,a,p),w.target=m,w.relatedTarget=ne,S=w),ne=S,y&&z)t:{for(w=dh,r=y,o=z,m=0,S=r;S;S=w(S))m++;S=0;for(var _=o;_;_=w(_))S++;for(;0<m-S;)r=w(r),m--;for(;0<S-m;)o=w(o),S--;for(;m--;){if(r===o||o!==null&&r===o.alternate){w=r;break t}r=w(r),o=w(o)}w=null}else w=null;y!==null&&Rr(b,h,y,w,!1),z!==null&&ne!==null&&Rr(b,ne,z,w,!0)}}e:{if(h=d?Ol(d):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var V=Js;else if(Zs(h))if(Ks)V=Md;else{V=Ed;var D=Ad}else y=h.nodeName,!y||y.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?d&&Pi(d.elementType)&&(V=Js):V=Td;if(V&&(V=V(e,d))){Vs(b,V,a,p);break e}D&&D(e,h,d),e==="focusout"&&d&&h.type==="number"&&d.memoizedProps.value!=null&&$i(h,"number",h.value)}switch(D=d?Ol(d):window,e){case"focusin":(Zs(D)||D.contentEditable==="true")&&(Wa=D,du=d,Yl=null);break;case"focusout":Yl=du=Wa=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,ao(b,a,p);break;case"selectionchange":if(xd)break;case"keydown":case"keyup":ao(b,a,p)}var q;if(ou)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Fa?Ls(e,a)&&(L="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(L="onCompositionStart");L&&(Xs&&a.locale!=="ko"&&(Fa||L!=="onCompositionStart"?L==="onCompositionEnd"&&Fa&&(q=Us()):(Wt=p,nu="value"in Wt?Wt.value:Wt.textContent,Fa=!0)),D=Mi(d,L),0<D.length&&(L=new qs(L,e,null,a,p),b.push({event:L,listeners:D}),q?L.data=q:(q=ks(a),q!==null&&(L.data=q)))),(q=yd?pd(e,a):vd(e,a))&&(L=Mi(d,"onBeforeInput"),0<L.length&&(D=new qs("onBeforeInput","beforeinput",null,a,p),b.push({event:D,listeners:L}),D.data=q)),oh(b,e,d,a,p)}Or(b,t)})}function rn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Mi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=wl(e,a),n!=null&&l.unshift(rn(e,n,i)),n=wl(e,t),n!=null&&l.push(rn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function dh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Rr(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var c=a,s=c.alternate,d=c.stateNode;if(c=c.tag,s!==null&&s===l)break;c!==5&&c!==26&&c!==27||d===null||(s=d,n?(d=wl(a,i),d!=null&&u.unshift(rn(a,d,s))):n||(d=wl(a,i),d!=null&&u.push(rn(a,d,s)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var hh=/\r\n?/g,gh=/\u0000|\uFFFD/g;function Nr(e){return(typeof e=="string"?e:""+e).replace(hh,`
`).replace(gh,"")}function Hr(e,t){return t=Nr(t),Nr(e)===t}function le(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ja(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ja(e,""+l);break;case"className":Dn(e,"class",l);break;case"tabIndex":Dn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Dn(e,a,l);break;case"style":Rs(e,l,i);break;case"data":if(t!=="object"){Dn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=On(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&le(e,t,"name",n.name,n,null),le(e,t,"formEncType",n.formEncType,n,null),le(e,t,"formMethod",n.formMethod,n,null),le(e,t,"formTarget",n.formTarget,n,null)):(le(e,t,"encType",n.encType,n,null),le(e,t,"method",n.method,n,null),le(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=On(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=wt);break;case"onScroll":l!=null&&G("scroll",e);break;case"onScrollEnd":l!=null&&G("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(g(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(g(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=On(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":G("beforetoggle",e),G("toggle",e),Cn(e,"popover",l);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Cn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Lm.get(a)||a,Cn(e,a,l))}}function Yc(e,t,a,l,n,i){switch(a){case"style":Rs(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(g(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(g(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Ja(e,l):(typeof l=="number"||typeof l=="bigint")&&Ja(e,""+l);break;case"onScroll":l!=null&&G("scroll",e);break;case"onScrollEnd":l!=null&&G("scrollend",e);break;case"onClick":l!=null&&(e.onclick=wt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ts.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Ge]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Cn(e,a,l)}}}function _e(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":G("error",e),G("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:le(e,t,i,u,a,null)}}n&&le(e,t,"srcSet",a.srcSet,a,null),l&&le(e,t,"src",a.src,a,null);return;case"input":G("invalid",e);var c=i=u=n=null,s=null,d=null;for(l in a)if(a.hasOwnProperty(l)){var p=a[l];if(p!=null)switch(l){case"name":n=p;break;case"type":u=p;break;case"checked":s=p;break;case"defaultChecked":d=p;break;case"value":i=p;break;case"defaultValue":c=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(g(137,t));break;default:le(e,t,l,p,a,null)}}Ds(e,i,c,s,d,u,n,!1);return;case"select":G("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(c=a[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":l=c;default:le(e,t,n,c,a,null)}t=i,a=u,e.multiple=!!l,t!=null?Va(e,!!l,t,!1):a!=null&&Va(e,!!l,a,!0);return;case"textarea":G("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(c=a[u],c!=null))switch(u){case"value":l=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(g(91));break;default:le(e,t,u,c,a,null)}Os(e,l,n,i);return;case"option":for(s in a)if(a.hasOwnProperty(s)&&(l=a[s],l!=null))switch(s){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:le(e,t,s,l,a,null)}return;case"dialog":G("beforetoggle",e),G("toggle",e),G("cancel",e),G("close",e);break;case"iframe":case"object":G("load",e);break;case"video":case"audio":for(l=0;l<fn.length;l++)G(fn[l],e);break;case"image":G("error",e),G("load",e);break;case"details":G("toggle",e);break;case"embed":case"source":case"link":G("error",e),G("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in a)if(a.hasOwnProperty(d)&&(l=a[d],l!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:le(e,t,d,l,a,null)}return;default:if(Pi(t)){for(p in a)a.hasOwnProperty(p)&&(l=a[p],l!==void 0&&Yc(e,t,p,l,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(l=a[c],l!=null&&le(e,t,c,l,a,null))}function yh(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,s=null,d=null,p=null;for(y in a){var b=a[y];if(a.hasOwnProperty(y)&&b!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":s=b;default:l.hasOwnProperty(y)||le(e,t,y,null,l,b)}}for(var h in l){var y=l[h];if(b=a[h],l.hasOwnProperty(h)&&(y!=null||b!=null))switch(h){case"type":i=y;break;case"name":n=y;break;case"checked":d=y;break;case"defaultChecked":p=y;break;case"value":u=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(g(137,t));break;default:y!==b&&le(e,t,h,y,l,b)}}Wi(e,u,c,s,d,p,i,n);return;case"select":y=u=c=h=null;for(i in a)if(s=a[i],a.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":y=s;default:l.hasOwnProperty(i)||le(e,t,i,null,l,s)}for(n in l)if(i=l[n],s=a[n],l.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":h=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==s&&le(e,t,n,i,l,s)}t=c,a=u,l=y,h!=null?Va(e,!!a,h,!1):!!l!=!!a&&(t!=null?Va(e,!!a,t,!0):Va(e,!!a,a?[]:"",!1));return;case"textarea":y=h=null;for(c in a)if(n=a[c],a.hasOwnProperty(c)&&n!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:le(e,t,c,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":h=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(g(91));break;default:n!==i&&le(e,t,u,n,l,i)}_s(e,h,y);return;case"option":for(var z in a)if(h=a[z],a.hasOwnProperty(z)&&h!=null&&!l.hasOwnProperty(z))switch(z){case"selected":e.selected=!1;break;default:le(e,t,z,null,l,h)}for(s in l)if(h=l[s],y=a[s],l.hasOwnProperty(s)&&h!==y&&(h!=null||y!=null))switch(s){case"selected":e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:le(e,t,s,h,l,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var w in a)h=a[w],a.hasOwnProperty(w)&&h!=null&&!l.hasOwnProperty(w)&&le(e,t,w,null,l,h);for(d in l)if(h=l[d],y=a[d],l.hasOwnProperty(d)&&h!==y&&(h!=null||y!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(g(137,t));break;default:le(e,t,d,h,l,y)}return;default:if(Pi(t)){for(var ne in a)h=a[ne],a.hasOwnProperty(ne)&&h!==void 0&&!l.hasOwnProperty(ne)&&Yc(e,t,ne,void 0,l,h);for(p in l)h=l[p],y=a[p],!l.hasOwnProperty(p)||h===y||h===void 0&&y===void 0||Yc(e,t,p,h,l,y);return}}for(var r in a)h=a[r],a.hasOwnProperty(r)&&h!=null&&!l.hasOwnProperty(r)&&le(e,t,r,null,l,h);for(b in l)h=l[b],y=a[b],!l.hasOwnProperty(b)||h===y||h==null&&y==null||le(e,t,b,h,l,y)}function Ur(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ph(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&Ur(u)){for(u=0,c=n.responseEnd,l+=1;l<a.length;l++){var s=a[l],d=s.startTime;if(d>c)break;var p=s.transferSize,b=s.initiatorType;p&&Ur(b)&&(s=s.responseEnd,u+=p*(s<c?1:(c-d)/(s-d)))}if(--l,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Xc=null,Gc=null;function zi(e){return e.nodeType===9?e:e.ownerDocument}function Br(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jr(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Qc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Lc=null;function vh(){var e=window.event;return e&&e.type==="popstate"?e===Lc?!1:(Lc=e,!0):(Lc=null,!1)}var qr=typeof setTimeout=="function"?setTimeout:void 0,Sh=typeof clearTimeout=="function"?clearTimeout:void 0,Yr=typeof Promise=="function"?Promise:void 0,bh=typeof queueMicrotask=="function"?queueMicrotask:typeof Yr<"u"?function(e){return Yr.resolve(null).then(e).catch(Ah)}:qr;function Ah(e){setTimeout(function(){throw e})}function ha(e){return e==="head"}function Xr(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Ml(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")mn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,mn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[_l]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&mn(e.ownerDocument.body);a=n}while(a);Ml(t)}function Gr(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function kc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":kc(a),Ii(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Eh(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[_l])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=gt(e.nextSibling),e===null)break}return null}function Th(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gt(e.nextSibling),e===null))return null;return e}function Qr(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=gt(e.nextSibling),e===null))return null;return e}function Zc(e){return e.data==="$?"||e.data==="$~"}function Vc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Mh(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Jc=null;function Lr(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return gt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function kr(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Zr(e,t,a){switch(t=zi(a),e){case"html":if(e=t.documentElement,!e)throw Error(g(452));return e;case"head":if(e=t.head,!e)throw Error(g(453));return e;case"body":if(e=t.body,!e)throw Error(g(454));return e;default:throw Error(g(451))}}function mn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ii(e)}var yt=new Map,Vr=new Set;function xi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Jt=T.d;T.d={f:zh,r:xh,D:Ch,C:Dh,L:_h,m:Oh,X:Rh,S:wh,M:Nh};function zh(){var e=Jt.f(),t=pi();return e||t}function xh(e){var t=La(e);t!==null&&t.tag===5&&t.type==="form"?of(t):Jt.r(e)}var Al=typeof document>"u"?null:document;function Jr(e,t,a){var l=Al;if(l&&typeof t=="string"&&t){var n=st(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Vr.has(n)||(Vr.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),_e(t,"link",e),Te(t),l.head.appendChild(t)))}}function Ch(e){Jt.D(e),Jr("dns-prefetch",e,null)}function Dh(e,t){Jt.C(e,t),Jr("preconnect",e,t)}function _h(e,t,a){Jt.L(e,t,a);var l=Al;if(l&&e&&t){var n='link[rel="preload"][as="'+st(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+st(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+st(a.imageSizes)+'"]')):n+='[href="'+st(e)+'"]';var i=n;switch(t){case"style":i=El(e);break;case"script":i=Tl(e)}yt.has(i)||(e=N({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),yt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(dn(i))||t==="script"&&l.querySelector(hn(i))||(t=l.createElement("link"),_e(t,"link",e),Te(t),l.head.appendChild(t)))}}function Oh(e,t){Jt.m(e,t);var a=Al;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+st(l)+'"][href="'+st(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Tl(e)}if(!yt.has(i)&&(e=N({rel:"modulepreload",href:e},t),yt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hn(i)))return}l=a.createElement("link"),_e(l,"link",e),Te(l),a.head.appendChild(l)}}}function wh(e,t,a){Jt.S(e,t,a);var l=Al;if(l&&e){var n=ka(l).hoistableStyles,i=El(e);t=t||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=l.querySelector(dn(i)))c.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},a),(a=yt.get(i))&&Kc(e,a);var s=u=l.createElement("link");Te(s),_e(s,"link",e),s._p=new Promise(function(d,p){s.onload=d,s.onerror=p}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Ci(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function Rh(e,t){Jt.X(e,t);var a=Al;if(a&&e){var l=ka(a).hoistableScripts,n=Tl(e),i=l.get(n);i||(i=a.querySelector(hn(n)),i||(e=N({src:e,async:!0},t),(t=yt.get(n))&&Ic(e,t),i=a.createElement("script"),Te(i),_e(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Nh(e,t){Jt.M(e,t);var a=Al;if(a&&e){var l=ka(a).hoistableScripts,n=Tl(e),i=l.get(n);i||(i=a.querySelector(hn(n)),i||(e=N({src:e,async:!0,type:"module"},t),(t=yt.get(n))&&Ic(e,t),i=a.createElement("script"),Te(i),_e(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Kr(e,t,a,l){var n=(n=Y.current)?xi(n):null;if(!n)throw Error(g(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=El(a.href),a=ka(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=El(a.href);var i=ka(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(dn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),yt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yt.set(e,a),i||Hh(n,e,a,u.state))),t&&l===null)throw Error(g(528,""));return u}if(t&&l!==null)throw Error(g(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Tl(a),a=ka(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(g(444,e))}}function El(e){return'href="'+st(e)+'"'}function dn(e){return'link[rel="stylesheet"]['+e+"]"}function Ir(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function Hh(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),_e(t,"link",a),Te(t),e.head.appendChild(t))}function Tl(e){return'[src="'+st(e)+'"]'}function hn(e){return"script[async]"+e}function Fr(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+st(a.href)+'"]');if(l)return t.instance=l,Te(l),l;var n=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Te(l),_e(l,"style",n),Ci(l,a.precedence,e),t.instance=l;case"stylesheet":n=El(a.href);var i=e.querySelector(dn(n));if(i)return t.state.loading|=4,t.instance=i,Te(i),i;l=Ir(a),(n=yt.get(n))&&Kc(l,n),i=(e.ownerDocument||e).createElement("link"),Te(i);var u=i;return u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),_e(i,"link",l),t.state.loading|=4,Ci(i,a.precedence,e),t.instance=i;case"script":return i=Tl(a.src),(n=e.querySelector(hn(i)))?(t.instance=n,Te(n),n):(l=a,(n=yt.get(i))&&(l=N({},a),Ic(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Te(n),_e(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(g(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Ci(l,a.precedence,e));return t.instance}function Ci(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var c=l[u];if(c.dataset.precedence===t)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Kc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ic(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Di=null;function Wr(e,t,a){if(Di===null){var l=new Map,n=Di=new Map;n.set(a,l)}else n=Di,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[_l]||i[ze]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var c=l.get(u);c?c.push(i):l.set(u,[i])}}return l}function $r(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Uh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Pr(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Bh(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=El(l.href),i=t.querySelector(dn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=_i.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Te(i);return}i=t.ownerDocument||t,l=Ir(l),(n=yt.get(n))&&Kc(l,n),i=i.createElement("link"),Te(i);var u=i;u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),_e(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=_i.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Fc=0;function jh(e,t){return e.stylesheets&&e.count===0&&wi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&wi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Fc===0&&(Fc=62500*ph());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&wi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Fc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function _i(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)wi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Oi=null;function wi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Oi=new Map,t.forEach(qh,e),Oi=null,_i.call(e))}function qh(e,t){if(!(t.state.loading&4)){var a=Oi.get(e);if(a)var l=a.get(null);else{a=new Map,Oi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=_i.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var gn={$$typeof:Oe,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function Yh(e,t,a,l,n,i,u,c,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zi(0),this.hiddenUpdates=Zi(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function em(e,t,a,l,n,i,u,c,s,d,p,b){return e=new Yh(e,t,a,u,s,d,p,b,c),t=1,i===!0&&(t|=24),i=et(3,null,null,t),e.current=i,i.stateNode=e,t=_u(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Nu(i),e}function tm(e){return e?(e=el,e):el}function am(e,t,a,l,n,i){n=tm(n),l.context===null?l.context=n:l.pendingContext=n,l=la(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=na(e,l,t),a!==null&&(Je(a,e,t),Vl(a,e,t))}function lm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Wc(e,t){lm(e,t),(e=e.alternate)&&lm(e,t)}function nm(e){if(e.tag===13||e.tag===31){var t=Ca(e,67108864);t!==null&&Je(t,e,67108864),Wc(e,67108864)}}function im(e){if(e.tag===13||e.tag===31){var t=it();t=Vi(t);var a=Ca(e,t);a!==null&&Je(a,e,t),Wc(e,t)}}var Ri=!0;function Xh(e,t,a,l){var n=v.T;v.T=null;var i=T.p;try{T.p=2,$c(e,t,a,l)}finally{T.p=i,v.T=n}}function Gh(e,t,a,l){var n=v.T;v.T=null;var i=T.p;try{T.p=8,$c(e,t,a,l)}finally{T.p=i,v.T=n}}function $c(e,t,a,l){if(Ri){var n=Pc(l);if(n===null)qc(e,t,l,Ni,a),cm(e,l);else if(Lh(n,e,t,a,l))l.stopPropagation();else if(cm(e,l),t&4&&-1<Qh.indexOf(e)){for(;n!==null;){var i=La(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ea(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var s=1<<31-$e(u);c.entanglements[1]|=s,u&=~s}Ct(i),(I&6)===0&&(gi=Fe()+500,on(0))}}break;case 31:case 13:c=Ca(i,2),c!==null&&Je(c,i,2),pi(),Wc(i,2)}if(i=Pc(l),i===null&&qc(e,t,l,Ni,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else qc(e,t,l,null,a)}}function Pc(e){return e=tu(e),es(e)}var Ni=null;function es(e){if(Ni=null,e=Qa(e),e!==null){var t=K(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=he(t),e!==null)return e;e=null}else if(a===31){if(e=Re(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ni=e,null}function um(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Cm()){case ms:return 2;case ds:return 8;case En:case Dm:return 32;case hs:return 268435456;default:return 32}default:return 32}}var ts=!1,ga=null,ya=null,pa=null,yn=new Map,pn=new Map,va=[],Qh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cm(e,t){switch(e){case"focusin":case"focusout":ga=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":pa=null;break;case"pointerover":case"pointerout":yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pn.delete(t.pointerId)}}function vn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=La(t),t!==null&&nm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Lh(e,t,a,l,n){switch(t){case"focusin":return ga=vn(ga,e,t,a,l,n),!0;case"dragenter":return ya=vn(ya,e,t,a,l,n),!0;case"mouseover":return pa=vn(pa,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return yn.set(i,vn(yn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,pn.set(i,vn(pn.get(i)||null,e,t,a,l,n)),!0}return!1}function sm(e){var t=Qa(e.target);if(t!==null){var a=K(t);if(a!==null){if(t=a.tag,t===13){if(t=he(a),t!==null){e.blockedOn=t,bs(e.priority,function(){im(a)});return}}else if(t===31){if(t=Re(a),t!==null){e.blockedOn=t,bs(e.priority,function(){im(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Pc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);eu=l,a.target.dispatchEvent(l),eu=null}else return t=La(a),t!==null&&nm(t),e.blockedOn=a,!1;t.shift()}return!0}function om(e,t,a){Hi(e)&&a.delete(t)}function kh(){ts=!1,ga!==null&&Hi(ga)&&(ga=null),ya!==null&&Hi(ya)&&(ya=null),pa!==null&&Hi(pa)&&(pa=null),yn.forEach(om),pn.forEach(om)}function Ui(e,t){e.blockedOn===t&&(e.blockedOn=null,ts||(ts=!0,x.unstable_scheduleCallback(x.unstable_NormalPriority,kh)))}var Bi=null;function fm(e){Bi!==e&&(Bi=e,x.unstable_scheduleCallback(x.unstable_NormalPriority,function(){Bi===e&&(Bi=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(es(l||a)===null)continue;break}var i=La(a);i!==null&&(e.splice(t,3),t-=3,Pu(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Ml(e){function t(s){return Ui(s,e)}ga!==null&&Ui(ga,e),ya!==null&&Ui(ya,e),pa!==null&&Ui(pa,e),yn.forEach(t),pn.forEach(t);for(var a=0;a<va.length;a++){var l=va[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<va.length&&(a=va[0],a.blockedOn===null);)sm(a),a.blockedOn===null&&va.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[Ge]||null;if(typeof i=="function")u||fm(a);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Ge]||null)c=u.formAction;else if(es(n)!==null)continue}else c=u.action;typeof c=="function"?a[l+1]=c:(a.splice(l,3),l-=3),fm(a)}}}function rm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function as(e){this._internalRoot=e}ji.prototype.render=as.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));var a=t.current,l=it();am(a,l,e,t,null,null)},ji.prototype.unmount=as.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;am(e.current,2,null,e,null,null),pi(),t[Ga]=null}};function ji(e){this._internalRoot=e}ji.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ss();e={blockedOn:null,target:e,priority:t};for(var a=0;a<va.length&&t!==0&&t<va[a].priority;a++);va.splice(a,0,e),a===0&&sm(e)}};var mm=re.version;if(mm!=="19.2.4")throw Error(g(527,mm,"19.2.4"));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=E(t),e=e!==null?W(e):null,e=e===null?null:e.stateNode,e};var Zh={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qi.isDisabled&&qi.supportsFiber)try{xl=qi.inject(Zh),We=qi}catch{}}return bn.createRoot=function(e,t){if(!R(e))throw Error(g(299));var a=!1,l="",n=Sf,i=bf,u=Af;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=em(e,1,!1,null,null,a,l,null,n,i,u,rm),e[Ga]=t.current,jc(e),new as(t)},bn.hydrateRoot=function(e,t,a){if(!R(e))throw Error(g(299));var l=!1,n="",i=Sf,u=bf,c=Af,s=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(s=a.formState)),t=em(e,1,!0,t,a??null,l,n,s,i,u,c,rm),t.context=tm(null),a=t.current,l=it(),l=Vi(l),n=la(l),n.callback=null,na(a,n,l),a=l,t.current.lanes=a,Dl(t,a),Ct(t),e[Ga]=t.current,jc(e),new ji(t)},bn.version="19.2.4",bn}var Em;function tg(){if(Em)return is.exports;Em=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(re){console.error(re)}}return x(),is.exports=eg(),is.exports}var ag=tg();function lg(){const[x,re]=Tm.useState(null),F=[{id:1,question:"1. Define Artificial Intelligence and explain its elements. (Reasoning, Learning, Problem Solving, Perception, Linguistic Intelligence)",answer:"",codeExample:`
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
      
      `},{id:21,question:"21.What is a Production System in Artificial Intelligence? ",answer:"📌 Very common theory question.",codeExample:`
⭐ Production System in Artificial Intelligence

1️⃣ Definition

A Production System is a problem-solving method used in Artificial Intelligence.
It uses a set of rules to decide what action to take in a given situation.

📌 In simple words:

A Production System solves problems using IF–THEN rules.


⭐ Basic Idea

The system checks the current situation and applies a rule to perform an action.

Example rule:

IF temperature > 40
THEN turn on fan

Here:

Condition → temperature > 40
Action → turn on fan



⭐ Structure of Production System

A Production System has three main components.


1️⃣ Rule Base (Production Rules)

Collection of IF–THEN rules.

Example:

Rule 1:
IF student_marks > 40
THEN result = Pass


2️⃣ Working Memory

Stores the current state or facts.

Example:

student_marks = 75


3️⃣ Control Strategy

Decides which rule should be applied when multiple rules match.
It manages the execution of rules.



⭐ IF–THEN Rule Concept

Production systems work using IF–THEN rules.

Structure:

IF condition
THEN action

Example:

IF it is raining
THEN take umbrella

So the system checks the condition and performs the action.


⭐ Situation → Action Representation

Production systems represent knowledge as:

Situation → Action


Meaning:

Current Situation  →  Action to perform


Example:

Situation: hungry
Action: eat food


Another example:

Situation: traffic signal = red
Action: stop vehicle


⭐ Simple Diagram

          Production System
                |
     -------------------------
     |         |             |
 Rule Base  Working Memory  Control Strategy
 (IF–THEN)     (Facts)       (Rule Selection)


⭐ Example of Production System

Problem: Determine if student passes.

Rules:

Rule 1:
IF marks ≥ 40
THEN result = Pass

Rule 2:
IF marks < 40
THEN result = Fail


Working Memory:

marks = 55

System applies Rule 1 → Result = Pass.


⭐ Advantages

1️⃣ Easy to understand
2️⃣ Knowledge represented in rules
3️⃣ Flexible problem solving


⭐ One-Line Exam Answer

A Production System in Artificial Intelligence is a rule-based system that uses IF–THEN rules to represent 
knowledge and perform actions based on the current situation.
      
      `},{id:22,question:"22. Components of Production System",answer:"This is the main long answer.",codeExample:`
⭐ Components of Production System

The three main components are:

1️⃣ Global Database
2️⃣ Production Rules
3️⃣ Control System

⭐ 1️⃣ Global Database
Meaning

Global Database stores the current information or facts about the problem.
It is also called Working Memory.


📌 In simple words:

It contains the current state of the system.


Example

Suppose we check student result.

Global Database stores:

    marks = 70

The system uses this information to apply rules.


Real Life Example

    Situation : Traffic signal = RED

This information is stored in Global Database.



⭐ 2️⃣ Production Rules
Meaning

Production Rules are IF–THEN rules that define actions.

📌 In simple words:

Production rules tell the system what action to take.


Structure

IF condition
THEN action


Example

Rule 1:
IF marks ≥ 40
THEN result = PASS


Rule 2:
IF marks < 40
THEN result = FAIL

The system checks global database facts and applies the rule.



⭐ 3️⃣ Control System
Meaning

Control System decides which rule should be applied.
Sometimes many rules match the situation.
So the control system selects the correct rule.


📌 In simple words:

Control system manages the execution of rules.

Example

Suppose rules are:

Rule 1: IF marks ≥ 40 → PASS
Rule 2: IF marks ≥ 60 → FIRST CLASS


Global database:

marks = 70

Output: PASS

Note: is not check another condition in this topic ok other ways is print both.

Both rules match.
Control system decides which rule to execute first.


⭐ Simple Working Diagram

          Production System
                |
      -------------------------
      |           |           |
 Global       Production     Control
 Database       Rules        System
  (Facts)      (IF–THEN)   (Rule Selection)


⭐ Complete Example

Problem: Determine student result.


Global Database
marks = 75

Production Rules

IF marks ≥ 40
THEN PASS


Control System

Checks rule → applies rule → result = PASS.


⭐ One-Line Exam Definition

A Production System consists of Global Database (facts), Production Rules (IF–THEN rules), and 
Control System which selects and applies the rules.
      
      `},{id:23,question:"23. Characteristics of Production System",answer:"",codeExample:`
⭐ Characteristics of Production System

The main characteristics are:

1️⃣ Simplicity
2️⃣ Modularity
3️⃣ Modifiability
4️⃣ Knowledge-Intensive


⭐ 1️⃣ Simplicity
Meaning

Production systems are simple to understand and implement.
The knowledge is written in IF–THEN rules, which are easy to read.

Example

IF temperature > 35
THEN turn on AC

Anyone can easily understand the rule.

📌 So the system remains clear and simple.



⭐ 2️⃣ Modularity
Meaning

Knowledge is divided into separate independent rules.
Each rule works independently.

📌 This means one rule does not affect other rules.

Example

Rule 1:
IF marks ≥ 40
THEN PASS

Rule 2:

IF marks ≥ 75
THEN DISTINCTION

Both rules are separate modules.



⭐ 3️⃣ Modifiability
Meaning

Production systems are easy to modify or update.
You can add, delete, or change rules without affecting the whole system.

Example

Old rule:

IF marks ≥ 40
THEN PASS

If the rule changes, we simply update it:

IF marks ≥ 35
THEN PASS

No need to change the entire system.



⭐ 4️⃣ Knowledge-Intensive
Meaning

Production systems depend heavily on knowledge (rules).
More rules = more intelligent system.

📌 The system works based on expert knowledge stored as rules.


Example

Medical expert system:

IF fever AND cough
THEN possible flu

Knowledge from doctors is stored as rules.


⭐ Simple Diagram

        Production System
               |
   --------------------------------
   |        |         |            |
Simplicity  Modularity  Modifiability  Knowledge-Intensive


⭐ One-Line Exam Answer

The characteristics of a production system include simplicity, modularity, modifiability, and 
knowledge-intensive rule-based representation.
      
      
      `},{id:24,question:"24. Water Jug Problem in AI",answer:"📌 Most important example problem.",codeExample:`
⭐ Water Jug Problem in Artificial Intelligence
Problem

We have two jugs:

Jug A = 4 liters
Jug B = 3 liters


Initial condition:

Start State = (0,0)

Meaning:

Jug A = 0 liters
Jug B = 0 liters


Goal:

Goal State = (2,0)


Meaning:

Jug A = 2 liters
Jug B = 0 liters



⭐ State Representation

A state is written as:

(A , B)

Where:

A = water in Jug A
B = water in Jug B

Example:

(4,0) → Jug A full, Jug B empty
(1,3) → Jug A has 1L, Jug B full



⭐ Allowed Rules (Operations)

The system can perform three types of actions.


1️⃣ Fill Rule

Fill any jug completely.

Examples:

Fill Jug A → (4, B)
Fill Jug B → (A, 3)

Example state change:

(0,0) → (4,0)


2️⃣ Empty Rule

Empty any jug.

Examples:

Empty Jug A → (0, B)
Empty Jug B → (A, 0)

Example:

(4,2) → (0,2)


3️⃣ Transfer Rule

Pour water from one jug to another until:

    one jug becomes empty, or
    the other jug becomes full

Example:

Transfer A → B
Transfer B → A

Example state:

(4,0) → (1,3)

because jug B can hold 3 liters.



⭐ Steps to Reach Goal (2,0)

Start:

(0,0)


Step 1 — Fill Jug B

(0,3)


Step 2 — Transfer B → A

(3,0)


Step 3 — Fill Jug B again

(3,3)


Step 4 — Transfer B → A until A becomes full

(4,2)


Step 5 — Empty Jug A

(0,2)


Step 6 — Transfer B → A

(2,0)

Goal achieved.



⭐ State Diagram

(0,0)
  |
  v
(0,3)
  |
  v
(3,0)
  |
  v
(3,3)
  |
  v
(4,2)
  |
  v
(0,2)
  |
  v
(2,0)  ← Goal


⭐ Key Idea in AI

The Water Jug problem demonstrates:

State space representation
Search techniques
Production rules (Fill / Empty / Transfer)


⭐ One-Line Exam Answer

The Water Jug Problem is a classical AI problem where water is measured using two jugs by applying 
operations such as fill, empty, and transfer to reach a goal state.
      `},{id:25,question:"25. Classes of Production System",answer:"Sometimes asked as short or 5-mark question.",codeExample:`
⭐ Classes of Production System

The main classes are:

1️⃣ Monotonic Production System
2️⃣ Non-Monotonic Production System
3️⃣ Partially Commutative Production System
4️⃣ Commutative Production System

⭐ 1️⃣ Monotonic Production System
Meaning

In a monotonic system, applying a rule never prevents another rule from being applied later.
if first condition is true then run another rule run.

📌 In simple words:

Rules only add new information, they do not remove previous information.

Example

Rule 1:
IF A
THEN B

Rule 2:
IF B
THEN C

If rule 1 produces B, rule 2 can still be applied later.
So rules do not interfere with each other.



⭐ 2️⃣ Non-Monotonic Production System
Meaning

In a non-monotonic system, applying a rule may prevent other rules from being applied later.
All rules are opposite each other and also hss answer.

📌 In simple words:

Rules can change or remove previous facts.

Example

Rule 1:
IF door_open
THEN alarm_off

Rule 2:
IF door_closed
THEN alarm_on

When the door state changes, earlier rules may no longer be valid.
So rules may cancel previous results.



⭐ 3️⃣ Partially Commutative Production System
Meaning

In this system, some rules can be applied in any order, but not all.

📌 So only certain rule orders give the same result.

📌 Meaning:

Certain rules depend on order
Some rules do not depend on order

Example

Rule 1 → add sugar
Rule 2 → add milk

Order may not matter.

But:

Rule 3 → boil tea

must happen before serving.
So some rules depend on order.



⭐ 4️⃣ Commutative Production System
Meaning

In a commutative system, the order of rule application does not matter.
No matter which rule is applied first, the final result remains the same.

Example

Rule 1 → add salt
Rule 2 → add spices

Whether we add salt first or spices first, the final dish is the same.



⭐ Simple Comparison Diagram

             Production System Classes
                      |
      ----------------------------------------
      |           |            |             |
  Monotonic   Non-Monotonic  Partially     Commutative
                               Commutative


⭐ One-Line Exam Answer

Production systems are classified into monotonic, non-monotonic, partially commutative, and 
commutative systems based on how rules affect each other and the order in which they are applied.
      
      `},{id:31,question:"31. What is Knowledge Representation in AI?",answer:"📌 Basic long theory question.",codeExample:`
⭐ Knowledge Representation in Artificial Intelligence
1️⃣ Meaning of Knowledge Representation

First think about this:

AI systems must store knowledge so they can think and solve problems.
The method used to store and organize knowledge in a computer is called Knowledge Representation (KR).

📌 Simple definition:

Knowledge Representation is a way of storing information and knowledge in AI so that a computer system can use it to solve problems.

Example

Human knowledge:

All humans need food
Raj is a human


AI system stores this knowledge so it can conclude:

Raj needs food

So the system represents knowledge in a logical form.



⭐ 2️⃣ Why Knowledge Representation is Needed in AI

AI systems need knowledge representation because they must understand situations and make decisions.

Main reasons:

1️⃣ To store knowledge

AI systems must store facts and information.

Example:

Dog is an animal
Animal can move


2️⃣ To perform reasoning

The system uses stored knowledge to make decisions.

Example:

If animal can move
Dog is animal
Therefore dog can move


3️⃣ To solve problems

Knowledge representation helps AI systems find solutions.

Example:

Medical diagnosis system:

IF fever AND cough
THEN possible flu


4️⃣ To understand relationships

It helps represent connections between objects.

Example:

Car → type of vehicle
Vehicle → used for transport



⭐ 3️⃣ Advantages in Problem Solving

Knowledge representation helps AI systems solve problems more effectively.


1️⃣ Improves decision making

AI can analyze knowledge and choose the best solution.


2️⃣ Makes reasoning possible

AI can draw conclusions from stored knowledge.


3️⃣ Reduces complexity

Complex problems become easier when knowledge is organized.


4️⃣ Reusable knowledge

Stored knowledge can be used again for different problems.


⭐ Simple Diagram

Knowledge Representation
         |
         v
  Store Knowledge
         |
         v
  Reasoning / Thinking
         |
         v
  Problem Solving


⭐ One-Line Exam Answer

Knowledge Representation in AI is the method of storing and organizing knowledge in a computer so 
that the system can reason and solve problems.
      `},{id:32,question:"32. Explain Types of Knowledge in AI.",answer:"📌 Very common exam question.",codeExample:`
⭐ Types of Knowledge in Artificial Intelligence

AI systems store different types of knowledge to understand problems and make decisions.

The main types are:

1️⃣ Declarative Knowledge
2️⃣ Procedural Knowledge
3️⃣ Heuristic Knowledge
4️⃣ Meta Knowledge
5️⃣ Structural Knowledge


⭐ 1️⃣ Declarative Knowledge
Meaning

Declarative knowledge represents facts and information about the world.

It answers the question:

WHAT is true?

📌 This knowledge describes facts, objects, and relationships.

Example
Earth revolves around Sun
Dog is an animal
Water boils at 100°C

These are facts, so they are declarative knowledge.


⭐ 2️⃣ Procedural Knowledge
Meaning

Procedural knowledge describes how to perform a task or process.

It answers the question:

    HOW to do something?

Example

Steps to make tea:

1. Boil water
2. Add tea leaves
3. Add sugar
4. Serve tea

These steps represent procedural knowledge.


⭐ 3️⃣ Heuristic Knowledge
Meaning

Heuristic knowledge is experience-based knowledge or rules of thumb.
It helps AI systems solve problems faster, but the solution may not always be perfect.

Example

Chess strategy:
    Control the center of the board

This rule helps players make better decisions.


⭐ 4️⃣ Meta Knowledge
Meaning

Meta knowledge means knowledge about other knowledge.
It helps the system manage and control knowledge.

Example

An AI system knowing:
    Which rule should be used first

Real World Examples

When you open Google Maps, it has many types of knowledge:

Road data
Traffic data
Distance data

But meta knowledge decides:

If traffic is high → choose another route
If distance is short → prefer fastest route
👉 So meta knowledge decides which information is more important.


So meta knowledge helps organize other knowledge.


⭐ 5️⃣ Structural Knowledge
Meaning

Structural knowledge describes relationships between concepts.
It shows how different pieces of knowledge are connected.

Example
Car → type of Vehicle
Vehicle → used for Transport

This shows the relationship between concepts.


⭐ Simple Comparison Table

| Type        | Meaning                             |
| ----------- | ----------------------------------- |
| Declarative | Knowledge about facts               |
| Procedural  | Knowledge about how to do something |
| Heuristic   | Experience-based knowledge          |
| Meta        | Knowledge about knowledge           |
| Structural  | Knowledge about relationships       |


⭐ Simple Diagram

        Types of Knowledge
              |
-------------------------------------
| Declarative | Procedural | Heuristic |
| Meta        | Structural             |
-------------------------------------


⭐ One-Line Exam Answer

Types of knowledge in AI include declarative, procedural, heuristic, meta, and structural knowledge, which 
help represent facts, processes, experiences, and relationships.
      
      `},{id:33,question:"33. Explain Semantic Network with example.",answer:"📌 Diagram-based question (high chance).",codeExample:`
⭐ Semantic Network in Artificial Intelligence
1️⃣ Meaning

A Semantic Network is a method of representing knowledge in AI using a graph structure.
It shows objects and their relationships.

📌 Simple definition:

A Semantic Network represents knowledge using nodes (objects) and links (relationships).



⭐ 2️⃣ Nodes and Links

Nodes

Nodes represent objects, concepts, or entities.

Example:

Animal
Dog
Bird

These are nodes in the network.


Links

Links represent the relationship between nodes.

Example relationships:

IS-A
HAS-A
CAN

Example:

Dog → IS-A → Animal

This means:

Dog is an animal


⭐ 3️⃣ Representation of Relationships

Semantic networks show how different concepts are connected.

Example knowledge:

Dog is an Animal
Animal can move
Dog has tail


Representation:

Dog → IS-A → Animal
Animal → CAN → Move
Dog → HAS-A → Tail

So the AI system understands relationships between concepts.


⭐ Example

Knowledge:

Bird is an Animal
Bird can Fly
Bird has Wings

Semantic representation:

Bird → IS-A → Animal
Bird → CAN → Fly
Bird → HAS-A → Wings


⭐ Simple Semantic Network Diagram

        Animal
          |
        IS-A
          |
         Bird
        /    \\
     CAN     HAS-A
      |        |
      Fly     Wings

Meaning:

Bird is an Animal
Bird can Fly
Bird has Wings


⭐ Another Simple Example

        Animal
          |
        IS-A
          |
          Dog
        /     \\
     CAN      HAS-A
      |         |
     Bark      Tail


⭐ Advantages

1️⃣ Easy to understand
2️⃣ Clearly shows relationships
3️⃣ Helps AI systems perform reasoning



⭐ One-Line Exam Answer

A Semantic Network is a knowledge representation technique that uses nodes to represent objects and 
links to represent relationships between them.

      `},{id:34,question:"34. Explain Frames in Knowledge Representation.",answer:"📌 Important theory concept.",codeExample:`
⭐ Frames in Knowledge Representation
1️⃣ Meaning

A Frame is a structure used in AI to represent knowledge about an object or concept.
It stores information in the form of attributes and values.

📌 Simple definition:

    A Frame is a data structure used to represent knowledge using slots (attributes) and values.

You can think of a frame like a form or table describing an object.



⭐ 2️⃣ Frame Structure

A frame contains:

Frame Name (object/concept)
Slots (attributes)
Values (information of attributes)

Structure:

Frame Name
   |
   |-- Slot → Value
   |-- Slot → Value
   |-- Slot → Value

So a frame describes properties of an object.



⭐ 3️⃣ Slots and Values
Slots

Slots represent attributes or properties of the object.

Example slots:

Color
Size
Food


Values

Values store actual information of the slot.

Example:

Color → Brown
Size → Medium
Food → Grass



⭐ Example of Frame

Suppose we represent knowledge about Dog.

Frame: DOG

Slots:
Animal-Type → Mammal
Legs → 4
Sound → Bark
Food → Meat

Meaning:

Dog is a mammal
Dog has 4 legs
Dog makes bark sound



⭐ Another Example

Frame for Car:

Frame: CAR

Slots:
Type → Vehicle
Wheels → 4
Fuel → Petrol
Use → Transport

This frame stores knowledge about a car.



⭐ Simple Diagram
        Frame : Bird
        -----------------
        Type   → Animal
        Wings  → Yes
        CanFly → Yes
        Food   → Seeds

Here:

Bird = Frame
Type, Wings, CanFly = Slots
Animal, Yes, Seeds = Values



⭐ Advantages of Frames

1️⃣ Easy to organize knowledge
2️⃣ Represents objects clearly
3️⃣ Helps AI understand relationships and properties


⭐ One-Line Exam Answer

Frames are knowledge representation structures in AI that organize information using slots (attributes) 
and their values.
      
      `},{id:35,question:"35. Explain Conceptual Dependency (CD).",answer:"📌 Sometimes asked as short or medium answer.",codeExample:`
⭐ Conceptual Dependency (CD) in AI

1️⃣ Meaning

Conceptual Dependency (CD) is a method used in AI to represent the meaning of a sentence.
It focuses on the action and relationship between objects, not just the words.

📌 Simple definition:

Conceptual Dependency is a knowledge representation technique used to represent the meaning of 
natural language sentences using actions and relationships.


2️⃣ Why Conceptual Dependency is Used

CD helps AI systems to:

Understand natural language
Represent actions clearly
Remove confusion between different sentences with the same meaning

Example:

Sentence 1
👉 Ram gave a book to Shyam.

Sentence 2
👉 Ram transferred a book to Shyam.

Both sentences have same meaning, so CD represents them in the same structure.



⭐ Representation of Actions and Relationships

In CD, every sentence is represented using:

1️⃣ Actors (person or object)
2️⃣ Actions
3️⃣ Objects
4️⃣ Relationships



Example Sentence

👉 Ram gave a book to Shyam

Representation:

Actor → Ram
Action → Transfer
Object → Book
Receiver → Shyam

Meaning:

Ram = person doing action
Book = object
Shyam = receiver

⭐ Simple CD Diagram

      Ram
       |
   (Transfer)
       |
      Book
       |
     Shyam

Meaning:

Ram transfers book to Shyam.



⭐ Another Example

Sentence:

👉 Rita eats an apple

Representation:

Actor → Rita
Action → Eat
Object → Apple

Diagram:

Rita
  |
 (Eat)
  |
Apple



⭐ Important Idea of CD

CD focuses on concepts, not words.

Example:

"John ate the mango."
"John consumed the mango."

Both represent same action → Eat, so CD shows same representation.


⭐ Advantages of Conceptual Dependency

1️⃣ Helps AI understand sentence meaning
2️⃣ Removes language differences
3️⃣ Useful in Natural Language Processing (NLP)


⭐ One-Line Exam Answer

Conceptual Dependency is a knowledge representation technique used in AI to represent the meaning of 
sentences using actions and relationships.

      `},{id:41,question:"41. What is Prolog?",answer:"",codeExample:`
⭐ What is Prolog?

1️⃣ Meaning of Prolog

PROLOG stands for:

PRO → Programming
LOG → Logic

📌 Simple definition:

Prolog is a logic programming language used in Artificial Intelligence to solve problems using facts and rules.
Instead of writing step-by-step instructions, Prolog works using logical relationships.


Example Idea

Suppose we store facts:

male(john).
female(mary).
parent(john, bob).


Then we can ask a query:

    ?- parent(john, bob).

Prolog will answer:

    Yes

So Prolog works like a question–answer system.




⭐ 2️⃣ Features of Prolog

Important features of Prolog:

1️⃣ Logic Based Language

Prolog is based on mathematical logic.

Programs are written using:

Facts
Rules
Queries

Example:

father(X,Y) :- parent(X,Y), male(X).


2️⃣ Uses Facts and Rules

Facts = information

Example:

    male(john).

Rules = logical relationship

Example:

    father(X,Y) :- parent(X,Y), male(X).

Meaning:

    If X is parent of Y and X is male, then X is father of Y.


3️⃣ Automatic Backtracking

If Prolog cannot find an answer, it automatically searches another solution.
This process is called backtracking.


4️⃣ Pattern Matching

Prolog compares data using pattern matching.

Example:

likes(raj, pizza).
likes(raj, burger).

Query:

?- likes(raj, X).

Output:

X = pizza
X = burger


5️⃣ Used for AI Problems

Prolog is widely used for solving:

reasoning
knowledge representation
expert systems




⭐ 3️⃣ Applications of Prolog in AI

Prolog is used in many AI applications.


1️⃣ Expert Systems

Programs that behave like human experts.

Example:

medical diagnosis systems


2️⃣ Natural Language Processing (NLP)

Helps computers understand human language.

Example:

chatbots
language translators


3️⃣ Robotics

Used for decision making in robots.

Example:

Robot choosing path or action.


4️⃣ Problem Solving

Prolog can solve logical problems like:

Family tree problems
Tower of Hanoi
Water Jug problem


⭐ Simple Structure of Prolog Program

Prolog Program
     |
     |-- Facts
     |-- Rules
     |-- Queries


⭐ One-Line Exam Definition

Prolog is a logic programming language used in Artificial Intelligence that works using facts, rules, and 
queries.
      

-----------------------------------------------------------------


?-

is called a Query Prompt.

It means:
    “Ask Prolog a question.”

Example

Facts in program:

male(john).
female(mary).


Now we ask Prolog a question:

?- male(john).

Here:

?- → asking a question
male(john) → the question

Prolog checks the facts and answers:

Yes


Another Example

likes(raj, pizza).
likes(raj, burger).


Query:

?- likes(raj, X).


Meaning:

What does Raj like?


Output:

X = pizza
X = burger
      



The symbol

:-

is used to define a rule.

Simple meaning:
    :- means “IF” or “is true if”


⭐ Structure of Rule

Head :- Condition.

Meaning:

Head is true IF Condition is true


⭐ Example

father(X,Y) :- parent(X,Y), male(X).

Let’s break it.

father(X,Y) → result
parent(X,Y), male(X) → conditions


Meaning:

X is father of Y IF X is parent of Y AND X is male



| Symbol | Meaning                    |
| ------ | -------------------------- |
| ?-     | Ask question (query)       |
| :-     | Define rule (IF condition) |
| .      | End of statement           |

`},{id:42,question:"42. Explain Prolog Terminology.",answer:"Very common short + theory question.",codeExample:`
Atom
Predicate
Clause
Constant
Variable
Structure


⭐ Prolog Terminology

Prolog programs are made using different elements such as atoms, predicates, clauses, constants, variables, 
and structures.

⭐ 1️⃣ Atom
Meaning

An Atom is the smallest unit of data in Prolog.
It represents a name, object, or symbol.
📌 Usually written in lowercase letters.


Example

raj
apple
car
male

These are atoms.



⭐ 2️⃣ Predicate
Meaning

A Predicate represents a relationship between objects.

It is written as:

    predicate_name(argument1, argument2)

Example

    likes(raj, pizza).
    parent(john, mary).


Meaning:

    Raj likes pizza
    John is parent of Mary


Here:

likes
parent

are predicates.



⭐ 3️⃣ Clause
Meaning

A Clause is a statement in Prolog.

There are three types:

1️⃣ Facts
2️⃣ Rules
3️⃣ Queries


Example

Fact:

male(raj).


Rule:

father(X,Y) :- parent(X,Y), male(X).

These statements are called clauses.



⭐ 4️⃣ Constant
Meaning

A Constant is a fixed value that does not change.

Constants can be:

numbers
names

Example

raj
pizza
10
car

These values remain unchanged, so they are constants.



⭐ 5️⃣ Variable
Meaning

A Variable is used to store unknown values.
📌 In Prolog, variables start with a capital letter.


Example

X
Y
Person
Food

Example query:

likes(raj, X).

Here X can represent pizza, burger, etc.



⭐ 6️⃣ Structure
Meaning

A Structure is a complex data object made of multiple parts.
It is written like a predicate but used to group related data.


Example
person(raj, 21, student)

Meaning:

Name = raj
Age = 21
Status = student

Here person(...) is a structure.


⭐ Simple Summary Table

| Term      | Meaning                      |
| --------- | ---------------------------- |
| Atom      | Smallest unit of data        |
| Predicate | Relationship between objects |
| Clause    | Statement in Prolog          |
| Constant  | Fixed value                  |
| Variable  | Represents unknown value     |
| Structure | Group of related data        |



⭐ Small Program Example

male(raj).
female(seema).
parent(raj, rohan).

father(X,Y) :- parent(X,Y), male(X).

Here:

raj → constant
X,Y → variables
parent → predicate
Each statement → clause


⭐ One-Line Exam Answer

Prolog terminology includes atoms, predicates, clauses, constants, variables, and structures which are 
used to build Prolog programs.
      
      `},{id:43,question:"43. Explain Facts, Rules and Queries in Prolog with example.",answer:"",codeExample:`
⭐ Facts, Rules and Queries in Prolog

A Prolog program mainly contains three parts:

Facts
Rules
Queries

These help Prolog store knowledge and answer questions.


⭐ 1️⃣ Facts
Meaning

A Fact is a true statement about something.
It tells Prolog information that is always true.
📌 Facts end with a period (.)

Example

father(john, paul).
male(john).

Meaning:

John is the father of Paul
John is male
These are facts stored in the database.



⭐ 2️⃣ Rules
Meaning

A Rule tells Prolog how to derive new information from existing facts.

It uses:

Head :- Body.


Meaning:

IF Body is true THEN Head is true

Example

parent(X,Y) :- father(X,Y).

Meaning:

If X is father of Y, then X is also parent of Y.
So Prolog can derive new knowledge.



⭐ 3️⃣ Queries
Meaning

A Query is a question asked to Prolog.
It checks whether something is true or false based on facts and rules.

Queries start with:

?-


Example Query

    ?- father(john, paul).

Prolog checks facts and answers:

    Yes


⭐ Example Program

father(john, paul).
parent(X,Y) :- father(X,Y).

Here:

father(john, paul). → Fact
parent(X,Y) :- father(X,Y). → Rule



⭐ How Query Works

Now we ask the query:

    ?- parent(john, paul).

Step-by-step:

1️⃣ Prolog looks for parent(john, paul)


2️⃣ It finds rule:

parent(X,Y) :- father(X,Y)


3️⃣ Now Prolog checks:

father(john, paul)


4️⃣ It finds the fact:

father(john, paul).


5️⃣ Therefore result is:

Yes


⭐ Simple Flow Diagram

Query → parent(john, paul)

        ↓

Check Rule
parent(X,Y) :- father(X,Y)

        ↓

Check Fact
father(john, paul)

        ↓

Answer = TRUE


⭐ One-Line Exam Answer

In Prolog, facts store true information, rules define relationships between facts, and queries are used to 
ask questions to the Prolog system.
      
      `},{id:44,question:"44. Explain Backtracking in Prolog.",answer:"📌 Very important exam concept.",codeExample:`
⭐ Backtracking in Prolog
1️⃣ Meaning

Backtracking is the search mechanism used by Prolog to find solutions.

When Prolog tries to answer a query:

    It checks facts and rules
    If one path fails, it goes back and tries another path

📌 Simple definition:

Backtracking is the process where Prolog automatically goes back and tries another possible solution 
when the current solution fails.



⭐ 2️⃣ Search Mechanism

Prolog searches answers in this order:

1. Check facts
2. Apply rules
3. If solution fails → go back
4. Try another rule or fact

This going back and trying again is called backtracking.


⭐ Example Program
likes(raj, pizza).
likes(raj, burger).
likes(raj, pasta).


⭐ Query
?- likes(raj, X).


⭐ How Prolog Finds Solutions

Step 1

Prolog checks the first fact.

likes(raj, pizza)

Result:

X = pizza


Step 2 (Backtracking)

If user asks for more solutions, Prolog goes back and checks next fact.

likes(raj, burger)

Result:

X = burger


Step 3

Prolog backtracks again.

likes(raj, pasta)

Result:

X = pasta



⭐ Backtracking Process Diagram

Query → likes(raj, X)

        ↓
Check Fact 1
likes(raj, pizza)
X = pizza

        ↓ (Backtrack)

Check Fact 2
likes(raj, burger)
X = burger

        ↓ (Backtrack)

Check Fact 3
likes(raj, pasta)
X = pasta



⭐ Another Example

Program:

male(john).
male(paul).
female(mary).


Query:

?- male(X).


Prolog answers:

X = john
X = paul

It finds multiple answers using backtracking.



⭐ Advantages of Backtracking

1️⃣ Automatically searches all possible solutions
2️⃣ Helps solve complex logical problems
3️⃣ Useful in AI search problems


⭐ One-Line Exam Answer

Backtracking in Prolog is a search mechanism where the system goes back and tries alternative solutions 
when a previous attempt fails.
      
      `},{id:45,question:"45. Explain Pattern Matching / Unification.",answer:"",codeExample:`
⭐ Pattern Matching / Unification in Prolog

1️⃣ Meaning

Pattern Matching or Unification is the process where Prolog compares two expressions to see if they 
match.

If they match, Prolog binds variables with values.

📌 Simple definition:

Unification is the process of matching two terms and assigning values to variables so that the expressions 
become identical.



⭐ 2️⃣ Matching Two Expressions

Prolog checks whether two expressions can become equal.

Example expressions:

parent(john, mary)
parent(X, mary)

Here Prolog compares them.

Result:

X = john

So the expressions match.



⭐ 3️⃣ Variable Binding

When Prolog finds a match, it assigns a value to the variable.
This is called variable binding.

Example:

likes(raj, pizza)
likes(raj, X)

Here:

X = pizza

The variable X gets bound to pizza.


⭐ Example Program
likes(raj, pizza).
likes(raj, burger).
likes(seema, pasta).

⭐ Query

?- likes(raj, X).


⭐ How Matching Works

Step 1
Prolog compares:

likes(raj, X)
likes(raj, pizza)

Match found:

X = pizza


Step 2 (Backtracking)
Prolog checks next fact:

likes(raj, burger)

Match found:

X = burger



⭐ Matching Diagram

Query → likes(raj, X)

          ↓
Match with
likes(raj, pizza)

Result → X = pizza

          ↓
Backtracking

Match with
likes(raj, burger)

Result → X = burger



⭐ Important Rules of Unification

1️⃣ Constants must be same
2️⃣ Variables can match any value
3️⃣ Structures must have same name and number of arguments

Example:

parent(john, mary)
parent(X, Y)

Result:

X = john
Y = mary


⭐ One-Line Exam Answer

Pattern matching or unification in Prolog is the process of matching two expressions and assigning values 
to variables to make them identical.      
      
      `},{id:46,question:"46. Explain Control Structures in Prolog.",answer:"",codeExample:`
In Java you use:

if(condition){
   action
}
else{
   action
}

In Prolog, we use symbols:

->   (then)
;    (else)


⭐ Control Structures in Prolog

Control structures help Prolog choose actions based on conditions.
The main control structures are:

1️⃣ If–Then
2️⃣ If–Then–Else



⭐ 1️⃣ If – Then

Meaning

If a condition is true, then Prolog performs an action.

Syntax
(Condition -> Action)

Meaning:

IF condition is true
THEN do action

Example

Program:

check_age(Age) :-
    (Age >= 18 -> write('Adult')).

Query:

?- check_age(20).

Output:

Adult

Because 20 ≥ 18, so condition is true.



⭐ 2️⃣ If – Then – Else
Meaning

If the condition is true, perform Action1.
Otherwise perform Action2.

Syntax
(Condition -> Action1 ; Action2)

Meaning:

IF condition is true
THEN Action1
ELSE Action2


Example Program

check_number(X) :-
    (X > 0 -> write('Positive') ; write('Negative')).

Query 1

?- check_number(10).

Output:

Positive


Query 2

?- check_number(-5).

Output:

Negative



⭐ Step-by-Step Working

Query:

?- check_number(10).

Step 1
Check condition:

10 > 0


Step 2
Condition = true


Step 3
Execute:
    write('Positive')


⭐ Simple Diagram

        Condition
           |
     X > 0 ?
       /   \\
    Yes     No
     |       |
 Positive  Negative


 ⭐ One-Line Exam Answer

Control structures in Prolog are used to control program execution using conditions such as If–Then and 
If–Then–Else.
      `},{id:47,question:"47. Explain Cut Operator (!) in Prolog.",answer:"",codeExample:`
⭐ Cut Operator (!) in Prolog
1️⃣ Meaning

The Cut operator ! is used to stop Prolog from backtracking.
When Prolog reaches !, it commits to the current solution and does not try other alternatives.

📌 Simple definition:

Cut (!) is a control operator used to stop backtracking and make Prolog choose the current solution.



⭐ 2️⃣ Purpose of Cut

Cut is used to:

1️⃣ Stop unnecessary searching
2️⃣ Improve program efficiency
3️⃣ Prevent multiple answers




⭐ 3️⃣ How Cut Stops Backtracking

Normally Prolog does this:

Solution 1
Solution 2
Solution 3

But with cut !, Prolog stops after the first correct solution.

Solution 1
STOP


⭐ Example Without Cut

Program:

color(red).
color(blue).
color(green).

Query:

?- color(X).

Output:

X = red
X = blue
X = green

Because Prolog backtracks and finds all solutions.



⭐ Example With Cut

Program:

color(red) :- !.
color(blue).
color(green).

Query:

?- color(X).

Output:

X = red

Explanation:

1️⃣ Prolog finds red
2️⃣ ! executes
3️⃣ Backtracking stops
4️⃣ Other colors not checked



⭐ Another Example

Program:

max(X,Y,X) :- X >= Y, !.
max(X,Y,Y).

Meaning:

Find maximum of two numbers.


Query
?- max(10,5,M).

Step 1

10 >= 5  → true


Step 2

Cut ! executes → stop searching.


Output:

M = 10

Prolog does not check second rule.



⭐ Simple Diagram

Query → Check Rule

        ↓
Condition True

        ↓
        !
 (Cut operator)

        ↓
Stop Backtracking


⭐ One-Line Exam Answer

The Cut operator (!) in Prolog is used to stop backtracking and force Prolog to accept the current 
solution.
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:11111,question:"Mid paper",answer:"",codeExample:`
=========================================
ARTIFICIAL INTELLIGENCE - I
SOLVED PAPER
=========================================


-----------------------------------------
Q1 (a) (i)
Question: List any two applications of AI in real life.
-----------------------------------------

Answer:
1. Medical diagnosis (MRI, CT scan analysis)
2. Chatbots / Virtual assistants


-----------------------------------------
Q1 (a) (ii)
Question: What is a heuristic function in search algorithms?
-----------------------------------------

Answer:
A heuristic function is a function that estimates
the cost or distance from the current state to
the goal state to find the solution efficiently.


-----------------------------------------
Q1 (a) (iii)
Question: What is meant by knowledge representation?
-----------------------------------------

Answer:
Knowledge representation is the method of
representing knowledge in a form that a computer
can understand and use for reasoning.


-----------------------------------------
Q1 (b) (MCQs)
-----------------------------------------

1. Which technique reduces the difference between current and goal state?

Answer:
Means–Ends Analysis


2. True or False: Production systems consist of rules and control strategy.

Answer:
True


3. Which knowledge representation technique uses facts and rules?

Answer:
Production System


4. The process of breaking a problem into smaller subproblems is called:

Answer:
Problem Decomposition


5. Which symbol represents logical AND in propositional logic?

Answer:
∧


6. In predicate logic, predicates represent:

Answer:
Properties or relationships


7. Which concept represents inheritance relationships in knowledge representation?

Answer:
Is-A relationship


-----------------------------------------
Q2 (a) (i)
Question: Write predicate logic statements.
-----------------------------------------

Answer:

All humans are mortal:
∀x (Human(x) → Mortal(x))

Ram is a human:
Human(Ram)


-----------------------------------------
Q2 (a) (ii)
Question: What is Generate-and-Test method?
-----------------------------------------

Answer:
Generate-and-Test is a problem-solving method
where possible solutions are generated and tested.

Steps:
1. Generate possible solution
2. Test solution
3. If correct → stop
4. Else → generate next solution


-----------------------------------------
Q2 (b) (i)
Question: Explain Hill Climbing and mention one limitation.
-----------------------------------------

Answer:
Hill climbing is a heuristic search algorithm
that continuously moves towards a better state.

Limitation:
It may get stuck in local maxima.


-----------------------------------------
Q2 (b) (ii)
Question: Define AI and explain basic elements.
-----------------------------------------

Answer:
Artificial Intelligence is the ability of a machine
to perform tasks that require human intelligence.

Basic elements:
1. Knowledge base
2. Inference engine
3. Learning mechanism
4. User interface


-----------------------------------------
Q3 (i)
Question: Explain Production Systems in AI and its components.
-----------------------------------------

Answer:
Production system is a rule-based system.

Components:
1. Rule base (IF–THEN rules)
2. Working memory (facts)
3. Control strategy

Working:
Rules are applied on facts to derive new facts.


-----------------------------------------
Q3 (ii)
Question: Discuss approaches to knowledge representation.
-----------------------------------------

Answer:
1. Logical representation
2. Semantic networks
3. Frames
4. Production rules


-----------------------------------------
Q3 (iii)
Question: Write a Prolog program using facts and rules.
-----------------------------------------

Answer:

Facts:
student(ram).
student(rahul).

Rules:
studies(X) :- student(X).

Query:
?- studies(ram).

Explanation:
If X is a student, then X studies.


-----------------------------------------
Q4 (a)
Question: Explain role of AI in modern education.
-----------------------------------------

Answer:
1. Personalized learning
2. Intelligent tutoring systems
3. Automated grading
4. Virtual classrooms
5. Performance analysis

AI improves learning and saves time.


-----------------------------------------
Q4 (b)
Question: Map Colouring Problem as CSP.
-----------------------------------------

Answer:
Variables:
Regions

Domain:
Colors (Red, Green, Blue)

Constraints:
Adjacent regions must have different colors

Goal:
Assign colors so that no adjacent regions
have same color.


-----------------------------------------
OR
-----------------------------------------

Question: Explain Means-Ends Analysis with example.
-----------------------------------------

Answer:
Means-Ends Analysis reduces difference between
current state and goal state.

Steps:
1. Compare states
2. Find difference
3. Apply operator
4. Repeat

Example:
Home → College using steps like bus or walking.
      
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1.1,question:"1. Write a program to implement Tic Tac Toe game.",answer:"",codeExample:`
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
      `},{id:5.5,question:"5. Write a program to implement Tower of Hanoi Problem.",answer:"",codeExample:`
def tower(n, from_rod, to_rod, aux_rod):
    if n == 0:
        return
    
    tower(n-1, from_rod, aux_rod, to_rod)
    
    print(f"Move disk {n} from {from_rod} to {to_rod}")
    
    tower(n-1, aux_rod, to_rod, from_rod)


# Main
n = 3
tower(n, 'A', 'C', 'B')



📌 Output for n = 3

Move disk 1 from A to C
Move disk 2 from A to B
Move disk 1 from C to B
Move disk 3 from A to C
Move disk 1 from B to A
Move disk 2 from B to C
Move disk 1 from A to C
      
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
      
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""}],g=R=>{re(x===R?null:R)};return Be.jsxs("div",{className:"app-container",children:[Be.jsx("h1",{children:"AI Interview Questions"}),Be.jsx("div",{className:"questions-container",children:F.map(R=>Be.jsxs("div",{className:"question-item",children:[Be.jsx("button",{className:`question-button ${x===R.id?"active":""}`,onClick:()=>g(R.id),children:R.question}),x===R.id&&Be.jsxs("div",{className:"answer-container",children:[Be.jsxs("div",{className:"answer",children:[Be.jsx("h3",{children:"Answer:"}),Be.jsx("p",{children:R.answer})]}),R.codeExample&&Be.jsxs("div",{className:"code-example",children:[Be.jsx("h3",{children:"Code Example:"}),Be.jsx("pre",{children:Be.jsx("code",{children:R.codeExample})})]})]})]},R.id))})]})}ag.createRoot(document.getElementById("root")).render(Be.jsx(Tm.StrictMode,{children:Be.jsx(lg,{})}));

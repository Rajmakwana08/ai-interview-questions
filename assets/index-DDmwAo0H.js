(function(){const fe=document.createElement("link").relList;if(fe&&fe.supports&&fe.supports("modulepreload"))return;for(const N of document.querySelectorAll('link[rel="modulepreload"]'))g(N);new MutationObserver(N=>{for(const J of N)if(J.type==="childList")for(const he of J.addedNodes)he.tagName==="LINK"&&he.rel==="modulepreload"&&g(he)}).observe(document,{childList:!0,subtree:!0});function F(N){const J={};return N.integrity&&(J.integrity=N.integrity),N.referrerPolicy&&(J.referrerPolicy=N.referrerPolicy),N.crossOrigin==="use-credentials"?J.credentials="include":N.crossOrigin==="anonymous"?J.credentials="omit":J.credentials="same-origin",J}function g(N){if(N.ep)return;N.ep=!0;const J=F(N);fetch(N.href,J)}})();var ns={exports:{}},bn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function Zh(){if(dm)return bn;dm=1;var C=Symbol.for("react.transitional.element"),fe=Symbol.for("react.fragment");function F(g,N,J){var he=null;if(J!==void 0&&(he=""+J),N.key!==void 0&&(he=""+N.key),"key"in N){J={};for(var Ne in N)Ne!=="key"&&(J[Ne]=N[Ne])}else J=N;return N=J.ref,{$$typeof:C,type:g,key:he,ref:N!==void 0?N:null,props:J}}return bn.Fragment=fe,bn.jsx=F,bn.jsxs=F,bn}var hm;function Jh(){return hm||(hm=1,ns.exports=Zh()),ns.exports}var Ue=Jh(),is={exports:{}},H={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function Ih(){if(gm)return H;gm=1;var C=Symbol.for("react.transitional.element"),fe=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),he=Symbol.for("react.context"),Ne=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),ce=Symbol.iterator;function Je(r){return r===null||typeof r!="object"?null:(r=ce&&r[ce]||r["@@iterator"],typeof r=="function"?r:null)}var ke={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Be=Object.assign,Dt={};function Ie(r,A,w){this.props=r,this.context=A,this.refs=Dt,this.updater=w||ke}Ie.prototype.isReactComponent={},Ie.prototype.setState=function(r,A){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,A,"setState")},Ie.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Jt(){}Jt.prototype=Ie.prototype;function Re(r,A,w){this.props=r,this.context=A,this.refs=Dt,this.updater=w||ke}var ut=Re.prototype=new Jt;ut.constructor=Re,Be(ut,Ie.prototype),ut.isPureReactComponent=!0;var At=Array.isArray;function qe(){}var Q={H:null,A:null,T:null,S:null},Ye=Object.prototype.hasOwnProperty;function Et(r,A,w){var x=w.ref;return{$$typeof:C,type:r,key:A,ref:x!==void 0?x:null,props:w}}function ja(r,A){return Et(r.type,A,r.props)}function Tt(r){return typeof r=="object"&&r!==null&&r.$$typeof===C}function je(r){var A={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(w){return A[w]})}var Sa=/\/+/g;function zt(r,A){return typeof r=="object"&&r!==null&&r.key!=null?je(""+r.key):A.toString(36)}function yt(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(qe,qe):(r.status="pending",r.then(function(A){r.status==="pending"&&(r.status="fulfilled",r.value=A)},function(A){r.status==="pending"&&(r.status="rejected",r.reason=A)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function v(r,A,w,x,U){var Y=typeof r;(Y==="undefined"||Y==="boolean")&&(r=null);var P=!1;if(r===null)P=!0;else switch(Y){case"bigint":case"string":case"number":P=!0;break;case"object":switch(r.$$typeof){case C:case fe:P=!0;break;case W:return P=r._init,v(P(r._payload),A,w,x,U)}}if(P)return U=U(r),P=x===""?"."+zt(r,0):x,At(U)?(w="",P!=null&&(w=P.replace(Sa,"$&/")+"/"),v(U,A,w,"",function(Ml){return Ml})):U!=null&&(Tt(U)&&(U=ja(U,w+(U.key==null||r&&r.key===U.key?"":(""+U.key).replace(Sa,"$&/")+"/")+P)),A.push(U)),1;P=0;var _e=x===""?".":x+":";if(At(r))for(var ge=0;ge<r.length;ge++)x=r[ge],Y=_e+zt(x,ge),P+=v(x,A,w,Y,U);else if(ge=Je(r),typeof ge=="function")for(r=ge.call(r),ge=0;!(x=r.next()).done;)x=x.value,Y=_e+zt(x,ge++),P+=v(x,A,w,Y,U);else if(Y==="object"){if(typeof r.then=="function")return v(yt(r),A,w,x,U);throw A=String(r),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return P}function T(r,A,w){if(r==null)return r;var x=[],U=0;return v(r,x,"","",function(Y){return A.call(w,Y,U++)}),x}function _(r){if(r._status===-1){var A=r._result;A=A(),A.then(function(w){(r._status===0||r._status===-1)&&(r._status=1,r._result=w)},function(w){(r._status===0||r._status===-1)&&(r._status=2,r._result=w)}),r._status===-1&&(r._status=0,r._result=A)}if(r._status===1)return r._result.default;throw r._result}var te=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},ie={map:T,forEach:function(r,A,w){T(r,function(){A.apply(this,arguments)},w)},count:function(r){var A=0;return T(r,function(){A++}),A},toArray:function(r){return T(r,function(A){return A})||[]},only:function(r){if(!Tt(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return H.Activity=B,H.Children=ie,H.Component=Ie,H.Fragment=F,H.Profiler=N,H.PureComponent=Re,H.StrictMode=g,H.Suspense=R,H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,H.__COMPILER_RUNTIME={__proto__:null,c:function(r){return Q.H.useMemoCache(r)}},H.cache=function(r){return function(){return r.apply(null,arguments)}},H.cacheSignal=function(){return null},H.cloneElement=function(r,A,w){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var x=Be({},r.props),U=r.key;if(A!=null)for(Y in A.key!==void 0&&(U=""+A.key),A)!Ye.call(A,Y)||Y==="key"||Y==="__self"||Y==="__source"||Y==="ref"&&A.ref===void 0||(x[Y]=A[Y]);var Y=arguments.length-2;if(Y===1)x.children=w;else if(1<Y){for(var P=Array(Y),_e=0;_e<Y;_e++)P[_e]=arguments[_e+2];x.children=P}return Et(r.type,U,x)},H.createContext=function(r){return r={$$typeof:he,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:J,_context:r},r},H.createElement=function(r,A,w){var x,U={},Y=null;if(A!=null)for(x in A.key!==void 0&&(Y=""+A.key),A)Ye.call(A,x)&&x!=="key"&&x!=="__self"&&x!=="__source"&&(U[x]=A[x]);var P=arguments.length-2;if(P===1)U.children=w;else if(1<P){for(var _e=Array(P),ge=0;ge<P;ge++)_e[ge]=arguments[ge+2];U.children=_e}if(r&&r.defaultProps)for(x in P=r.defaultProps,P)U[x]===void 0&&(U[x]=P[x]);return Et(r,Y,U)},H.createRef=function(){return{current:null}},H.forwardRef=function(r){return{$$typeof:Ne,render:r}},H.isValidElement=Tt,H.lazy=function(r){return{$$typeof:W,_payload:{_status:-1,_result:r},_init:_}},H.memo=function(r,A){return{$$typeof:E,type:r,compare:A===void 0?null:A}},H.startTransition=function(r){var A=Q.T,w={};Q.T=w;try{var x=r(),U=Q.S;U!==null&&U(w,x),typeof x=="object"&&x!==null&&typeof x.then=="function"&&x.then(qe,te)}catch(Y){te(Y)}finally{A!==null&&w.types!==null&&(A.types=w.types),Q.T=A}},H.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},H.use=function(r){return Q.H.use(r)},H.useActionState=function(r,A,w){return Q.H.useActionState(r,A,w)},H.useCallback=function(r,A){return Q.H.useCallback(r,A)},H.useContext=function(r){return Q.H.useContext(r)},H.useDebugValue=function(){},H.useDeferredValue=function(r,A){return Q.H.useDeferredValue(r,A)},H.useEffect=function(r,A){return Q.H.useEffect(r,A)},H.useEffectEvent=function(r){return Q.H.useEffectEvent(r)},H.useId=function(){return Q.H.useId()},H.useImperativeHandle=function(r,A,w){return Q.H.useImperativeHandle(r,A,w)},H.useInsertionEffect=function(r,A){return Q.H.useInsertionEffect(r,A)},H.useLayoutEffect=function(r,A){return Q.H.useLayoutEffect(r,A)},H.useMemo=function(r,A){return Q.H.useMemo(r,A)},H.useOptimistic=function(r,A){return Q.H.useOptimistic(r,A)},H.useReducer=function(r,A,w){return Q.H.useReducer(r,A,w)},H.useRef=function(r){return Q.H.useRef(r)},H.useState=function(r){return Q.H.useState(r)},H.useSyncExternalStore=function(r,A,w){return Q.H.useSyncExternalStore(r,A,w)},H.useTransition=function(){return Q.H.useTransition()},H.version="19.2.4",H}var pm;function rs(){return pm||(pm=1,is.exports=Ih()),is.exports}var Tm=rs(),us={exports:{}},Sn={},os={exports:{}},ss={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function Fh(){return ym||(ym=1,(function(C){function fe(v,T){var _=v.length;v.push(T);e:for(;0<_;){var te=_-1>>>1,ie=v[te];if(0<N(ie,T))v[te]=T,v[_]=ie,_=te;else break e}}function F(v){return v.length===0?null:v[0]}function g(v){if(v.length===0)return null;var T=v[0],_=v.pop();if(_!==T){v[0]=_;e:for(var te=0,ie=v.length,r=ie>>>1;te<r;){var A=2*(te+1)-1,w=v[A],x=A+1,U=v[x];if(0>N(w,_))x<ie&&0>N(U,w)?(v[te]=U,v[x]=_,te=x):(v[te]=w,v[A]=_,te=A);else if(x<ie&&0>N(U,_))v[te]=U,v[x]=_,te=x;else break e}}return T}function N(v,T){var _=v.sortIndex-T.sortIndex;return _!==0?_:v.id-T.id}if(C.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var J=performance;C.unstable_now=function(){return J.now()}}else{var he=Date,Ne=he.now();C.unstable_now=function(){return he.now()-Ne}}var R=[],E=[],W=1,B=null,ce=3,Je=!1,ke=!1,Be=!1,Dt=!1,Ie=typeof setTimeout=="function"?setTimeout:null,Jt=typeof clearTimeout=="function"?clearTimeout:null,Re=typeof setImmediate<"u"?setImmediate:null;function ut(v){for(var T=F(E);T!==null;){if(T.callback===null)g(E);else if(T.startTime<=v)g(E),T.sortIndex=T.expirationTime,fe(R,T);else break;T=F(E)}}function At(v){if(Be=!1,ut(v),!ke)if(F(R)!==null)ke=!0,qe||(qe=!0,je());else{var T=F(E);T!==null&&yt(At,T.startTime-v)}}var qe=!1,Q=-1,Ye=5,Et=-1;function ja(){return Dt?!0:!(C.unstable_now()-Et<Ye)}function Tt(){if(Dt=!1,qe){var v=C.unstable_now();Et=v;var T=!0;try{e:{ke=!1,Be&&(Be=!1,Jt(Q),Q=-1),Je=!0;var _=ce;try{t:{for(ut(v),B=F(R);B!==null&&!(B.expirationTime>v&&ja());){var te=B.callback;if(typeof te=="function"){B.callback=null,ce=B.priorityLevel;var ie=te(B.expirationTime<=v);if(v=C.unstable_now(),typeof ie=="function"){B.callback=ie,ut(v),T=!0;break t}B===F(R)&&g(R),ut(v)}else g(R);B=F(R)}if(B!==null)T=!0;else{var r=F(E);r!==null&&yt(At,r.startTime-v),T=!1}}break e}finally{B=null,ce=_,Je=!1}T=void 0}}finally{T?je():qe=!1}}}var je;if(typeof Re=="function")je=function(){Re(Tt)};else if(typeof MessageChannel<"u"){var Sa=new MessageChannel,zt=Sa.port2;Sa.port1.onmessage=Tt,je=function(){zt.postMessage(null)}}else je=function(){Ie(Tt,0)};function yt(v,T){Q=Ie(function(){v(C.unstable_now())},T)}C.unstable_IdlePriority=5,C.unstable_ImmediatePriority=1,C.unstable_LowPriority=4,C.unstable_NormalPriority=3,C.unstable_Profiling=null,C.unstable_UserBlockingPriority=2,C.unstable_cancelCallback=function(v){v.callback=null},C.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ye=0<v?Math.floor(1e3/v):5},C.unstable_getCurrentPriorityLevel=function(){return ce},C.unstable_next=function(v){switch(ce){case 1:case 2:case 3:var T=3;break;default:T=ce}var _=ce;ce=T;try{return v()}finally{ce=_}},C.unstable_requestPaint=function(){Dt=!0},C.unstable_runWithPriority=function(v,T){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var _=ce;ce=v;try{return T()}finally{ce=_}},C.unstable_scheduleCallback=function(v,T,_){var te=C.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?te+_:te):_=te,v){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=_+ie,v={id:W++,callback:T,priorityLevel:v,startTime:_,expirationTime:ie,sortIndex:-1},_>te?(v.sortIndex=_,fe(E,v),F(R)===null&&v===F(E)&&(Be?(Jt(Q),Q=-1):Be=!0,yt(At,_-te))):(v.sortIndex=ie,fe(R,v),ke||Je||(ke=!0,qe||(qe=!0,je()))),v},C.unstable_shouldYield=ja,C.unstable_wrapCallback=function(v){var T=ce;return function(){var _=ce;ce=T;try{return v.apply(this,arguments)}finally{ce=_}}}})(ss)),ss}var vm;function Wh(){return vm||(vm=1,os.exports=Fh()),os.exports}var cs={exports:{}},Oe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function Ph(){if(bm)return Oe;bm=1;var C=rs();function fe(R){var E="https://react.dev/errors/"+R;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var W=2;W<arguments.length;W++)E+="&args[]="+encodeURIComponent(arguments[W])}return"Minified React error #"+R+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function F(){}var g={d:{f:F,r:function(){throw Error(fe(522))},D:F,C:F,L:F,m:F,X:F,S:F,M:F},p:0,findDOMNode:null},N=Symbol.for("react.portal");function J(R,E,W){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:B==null?null:""+B,children:R,containerInfo:E,implementation:W}}var he=C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ne(R,E){if(R==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return Oe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=g,Oe.createPortal=function(R,E){var W=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(fe(299));return J(R,E,null,W)},Oe.flushSync=function(R){var E=he.T,W=g.p;try{if(he.T=null,g.p=2,R)return R()}finally{he.T=E,g.p=W,g.d.f()}},Oe.preconnect=function(R,E){typeof R=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,g.d.C(R,E))},Oe.prefetchDNS=function(R){typeof R=="string"&&g.d.D(R)},Oe.preinit=function(R,E){if(typeof R=="string"&&E&&typeof E.as=="string"){var W=E.as,B=Ne(W,E.crossOrigin),ce=typeof E.integrity=="string"?E.integrity:void 0,Je=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;W==="style"?g.d.S(R,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:B,integrity:ce,fetchPriority:Je}):W==="script"&&g.d.X(R,{crossOrigin:B,integrity:ce,fetchPriority:Je,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},Oe.preinitModule=function(R,E){if(typeof R=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var W=Ne(E.as,E.crossOrigin);g.d.M(R,{crossOrigin:W,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0})}}else E==null&&g.d.M(R)},Oe.preload=function(R,E){if(typeof R=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var W=E.as,B=Ne(W,E.crossOrigin);g.d.L(R,W,{crossOrigin:B,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},Oe.preloadModule=function(R,E){if(typeof R=="string")if(E){var W=Ne(E.as,E.crossOrigin);g.d.m(R,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:W,integrity:typeof E.integrity=="string"?E.integrity:void 0})}else g.d.m(R)},Oe.requestFormReset=function(R){g.d.r(R)},Oe.unstable_batchedUpdates=function(R,E){return R(E)},Oe.useFormState=function(R,E,W){return he.H.useFormState(R,E,W)},Oe.useFormStatus=function(){return he.H.useHostTransitionStatus()},Oe.version="19.2.4",Oe}var Sm;function $h(){if(Sm)return cs.exports;Sm=1;function C(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C)}catch(fe){console.error(fe)}}return C(),cs.exports=Ph(),cs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function eg(){if(Am)return Sn;Am=1;var C=Wh(),fe=rs(),F=$h();function g(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function N(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function J(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function he(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ne(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function R(e){if(J(e)!==e)throw Error(g(188))}function E(e){var t=e.alternate;if(!t){if(t=J(e),t===null)throw Error(g(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return R(n),e;if(i===l)return R(n),t;i=i.sibling}throw Error(g(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,o=n.child;o;){if(o===a){u=!0,a=n,l=i;break}if(o===l){u=!0,l=n,a=i;break}o=o.sibling}if(!u){for(o=i.child;o;){if(o===a){u=!0,a=i,l=n;break}if(o===l){u=!0,l=i,a=n;break}o=o.sibling}if(!u)throw Error(g(189))}}if(a.alternate!==l)throw Error(g(190))}if(a.tag!==3)throw Error(g(188));return a.stateNode.current===a?e:t}function W(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=W(e),t!==null)return t;e=e.sibling}return null}var B=Object.assign,ce=Symbol.for("react.element"),Je=Symbol.for("react.transitional.element"),ke=Symbol.for("react.portal"),Be=Symbol.for("react.fragment"),Dt=Symbol.for("react.strict_mode"),Ie=Symbol.for("react.profiler"),Jt=Symbol.for("react.consumer"),Re=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),At=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),ja=Symbol.for("react.memo_cache_sentinel"),Tt=Symbol.iterator;function je(e){return e===null||typeof e!="object"?null:(e=Tt&&e[Tt]||e["@@iterator"],typeof e=="function"?e:null)}var Sa=Symbol.for("react.client.reference");function zt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Sa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Be:return"Fragment";case Ie:return"Profiler";case Dt:return"StrictMode";case At:return"Suspense";case qe:return"SuspenseList";case Et:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ke:return"Portal";case Re:return e.displayName||"Context";case Jt:return(e._context.displayName||"Context")+".Consumer";case ut:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return t=e.displayName||null,t!==null?t:zt(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return zt(e(t))}catch{}}return null}var yt=Array.isArray,v=fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=F.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_={pending:!1,data:null,method:null,action:null},te=[],ie=-1;function r(e){return{current:e}}function A(e){0>ie||(e.current=te[ie],te[ie]=null,ie--)}function w(e,t){ie++,te[ie]=e.current,e.current=t}var x=r(null),U=r(null),Y=r(null),P=r(null);function _e(e,t){switch(w(Y,t),w(U,e),w(x,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Uf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Uf(t),e=kf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}A(x),w(x,e)}function ge(){A(x),A(U),A(Y)}function Ml(e){e.memoizedState!==null&&w(P,e);var t=x.current,a=kf(t,e.type);t!==a&&(w(U,e),w(x,a))}function An(e){U.current===e&&(A(x),A(U)),P.current===e&&(A(P),gn._currentValue=_)}var Yi,fs;function Aa(e){if(Yi===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Yi=t&&t[1]||"",fs=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yi+e+fs}var ji=!1;function Gi(e,t){if(!e||ji)return"";ji=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(p){var h=p}Reflect.construct(e,[],S)}else{try{S.call()}catch(p){h=p}e.call(S.prototype)}}else{try{throw Error()}catch(p){h=p}(S=e())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(p){if(p&&h&&typeof p.stack=="string")return[p.stack,h.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],o=i[1];if(u&&o){var s=u.split(`
`),d=o.split(`
`);for(n=l=0;l<s.length&&!s[l].includes("DetermineComponentFrameRoot");)l++;for(;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;if(l===s.length||n===d.length)for(l=s.length-1,n=d.length-1;1<=l&&0<=n&&s[l]!==d[n];)n--;for(;1<=l&&0<=n;l--,n--)if(s[l]!==d[n]){if(l!==1||n!==1)do if(l--,n--,0>n||s[l]!==d[n]){var y=`
`+s[l].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=l&&0<=n);break}}}finally{ji=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Aa(a):""}function wm(e,t){switch(e.tag){case 26:case 27:case 5:return Aa(e.type);case 16:return Aa("Lazy");case 13:return e.child!==t&&t!==null?Aa("Suspense Fallback"):Aa("Suspense");case 19:return Aa("SuspenseList");case 0:case 15:return Gi(e.type,!1);case 11:return Gi(e.type.render,!1);case 1:return Gi(e.type,!0);case 31:return Aa("Activity");default:return""}}function ms(e){try{var t="",a=null;do t+=wm(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Li=Object.prototype.hasOwnProperty,Xi=C.unstable_scheduleCallback,Qi=C.unstable_cancelCallback,Mm=C.unstable_shouldYield,Cm=C.unstable_requestPaint,Fe=C.unstable_now,xm=C.unstable_getCurrentPriorityLevel,ds=C.unstable_ImmediatePriority,hs=C.unstable_UserBlockingPriority,En=C.unstable_NormalPriority,Dm=C.unstable_LowPriority,gs=C.unstable_IdlePriority,zm=C.log,Rm=C.unstable_setDisableYieldValue,Cl=null,We=null;function It(e){if(typeof zm=="function"&&Rm(e),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(Cl,e)}catch{}}var Pe=Math.clz32?Math.clz32:Bm,Om=Math.log,Nm=Math.LN2;function Bm(e){return e>>>=0,e===0?32:31-(Om(e)/Nm|0)|0}var Tn=256,wn=262144,Mn=4194304;function Ea(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Cn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var o=l&134217727;return o!==0?(l=o&~i,l!==0?n=Ea(l):(u&=o,u!==0?n=Ea(u):a||(a=o&~e,a!==0&&(n=Ea(a))))):(o=l&~i,o!==0?n=Ea(o):u!==0?n=Ea(u):a||(a=l&~e,a!==0&&(n=Ea(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function xl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function _m(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ps(){var e=Mn;return Mn<<=1,(Mn&62914560)===0&&(Mn=4194304),e}function Ki(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Dl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Hm(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var o=e.entanglements,s=e.expirationTimes,d=e.hiddenUpdates;for(a=u&~a;0<a;){var y=31-Pe(a),S=1<<y;o[y]=0,s[y]=-1;var h=d[y];if(h!==null)for(d[y]=null,y=0;y<h.length;y++){var p=h[y];p!==null&&(p.lane&=-536870913)}a&=~S}l!==0&&ys(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function ys(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Pe(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function vs(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-Pe(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function bs(e,t){var a=t&-t;return a=(a&42)!==0?1:Vi(a),(a&(e.suspendedLanes|t))!==0?0:a}function Vi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Zi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ss(){var e=T.p;return e!==0?e:(e=window.event,e===void 0?32:um(e.type))}function As(e,t){var a=T.p;try{return T.p=e,t()}finally{T.p=a}}var Ft=Math.random().toString(36).slice(2),Me="__reactFiber$"+Ft,Ge="__reactProps$"+Ft,Ga="__reactContainer$"+Ft,Ji="__reactEvents$"+Ft,Um="__reactListeners$"+Ft,km="__reactHandles$"+Ft,Es="__reactResources$"+Ft,zl="__reactMarker$"+Ft;function Ii(e){delete e[Me],delete e[Ge],delete e[Ji],delete e[Um],delete e[km]}function La(e){var t=e[Me];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ga]||a[Me]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Qf(e);e!==null;){if(a=e[Me])return a;e=Qf(e)}return t}e=a,a=e.parentNode}return null}function Xa(e){if(e=e[Me]||e[Ga]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Rl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(g(33))}function Qa(e){var t=e[Es];return t||(t=e[Es]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Te(e){e[zl]=!0}var Ts=new Set,ws={};function Ta(e,t){Ka(e,t),Ka(e+"Capture",t)}function Ka(e,t){for(ws[e]=t,e=0;e<t.length;e++)Ts.add(t[e])}var qm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ms={},Cs={};function Ym(e){return Li.call(Cs,e)?!0:Li.call(Ms,e)?!1:qm.test(e)?Cs[e]=!0:(Ms[e]=!0,!1)}function xn(e,t,a){if(Ym(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Dn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Rt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function ot(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jm(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fi(e){if(!e._valueTracker){var t=xs(e)?"checked":"value";e._valueTracker=jm(e,t,""+e[t])}}function Ds(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=xs(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function zn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Gm=/[\n"\\]/g;function st(e){return e.replace(Gm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Wi(e,t,a,l,n,i,u,o){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ot(t)):e.value!==""+ot(t)&&(e.value=""+ot(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Pi(e,u,ot(t)):a!=null?Pi(e,u,ot(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ot(o):e.removeAttribute("name")}function zs(e,t,a,l,n,i,u,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Fi(e);return}a=a!=null?""+ot(a):"",t=t!=null?""+ot(t):a,o||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=o?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Fi(e)}function Pi(e,t,a){t==="number"&&zn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Va(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+ot(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Rs(e,t,a){if(t!=null&&(t=""+ot(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ot(a):""}function Os(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(g(92));if(yt(l)){if(1<l.length)throw Error(g(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=ot(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Fi(e)}function Za(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Lm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ns(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Lm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Bs(e,t,a){if(t!=null&&typeof t!="object")throw Error(g(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Ns(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Ns(e,i,t[i])}function $i(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rn(e){return Qm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ot(){}var eu=null;function tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ja=null,Ia=null;function _s(e){var t=Xa(e);if(t&&(e=t.stateNode)){var a=e[Ge]||null;e:switch(e=t.stateNode,t.type){case"input":if(Wi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+st(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Ge]||null;if(!n)throw Error(g(90));Wi(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Ds(l)}break e;case"textarea":Rs(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Va(e,!!a.multiple,t,!1)}}}var au=!1;function Hs(e,t,a){if(au)return e(t,a);au=!0;try{var l=e(t);return l}finally{if(au=!1,(Ja!==null||Ia!==null)&&(yi(),Ja&&(t=Ja,e=Ia,Ia=Ja=null,_s(t),e)))for(t=0;t<e.length;t++)_s(e[t])}}function Ol(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Ge]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(g(231,t,typeof a));return a}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=!1;if(Nt)try{var Nl={};Object.defineProperty(Nl,"passive",{get:function(){lu=!0}}),window.addEventListener("test",Nl,Nl),window.removeEventListener("test",Nl,Nl)}catch{lu=!1}var Wt=null,nu=null,On=null;function Us(){if(On)return On;var e,t=nu,a=t.length,l,n="value"in Wt?Wt.value:Wt.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return On=n.slice(e,1<l?1-l:void 0)}function Nn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bn(){return!0}function ks(){return!1}function Le(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(a=e[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Bn:ks,this.isPropagationStopped=ks,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),t}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_n=Le(wa),Bl=B({},wa,{view:0,detail:0}),Km=Le(Bl),iu,uu,_l,Hn=B({},Bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_l&&(_l&&e.type==="mousemove"?(iu=e.screenX-_l.screenX,uu=e.screenY-_l.screenY):uu=iu=0,_l=e),iu)},movementY:function(e){return"movementY"in e?e.movementY:uu}}),qs=Le(Hn),Vm=B({},Hn,{dataTransfer:0}),Zm=Le(Vm),Jm=B({},Bl,{relatedTarget:0}),ou=Le(Jm),Im=B({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),Fm=Le(Im),Wm=B({},wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pm=Le(Wm),$m=B({},wa,{data:0}),Ys=Le($m),ed={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},td={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ad={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ld(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ad[e])?!!t[e]:!1}function su(){return ld}var nd=B({},Bl,{key:function(e){if(e.key){var t=ed[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Nn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?td[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?Nn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),id=Le(nd),ud=B({},Hn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),js=Le(ud),od=B({},Bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),sd=Le(od),cd=B({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),rd=Le(cd),fd=B({},Hn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),md=Le(fd),dd=B({},wa,{newState:0,oldState:0}),hd=Le(dd),gd=[9,13,27,32],cu=Nt&&"CompositionEvent"in window,Hl=null;Nt&&"documentMode"in document&&(Hl=document.documentMode);var pd=Nt&&"TextEvent"in window&&!Hl,Gs=Nt&&(!cu||Hl&&8<Hl&&11>=Hl),Ls=" ",Xs=!1;function Qs(e,t){switch(e){case"keyup":return gd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ks(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fa=!1;function yd(e,t){switch(e){case"compositionend":return Ks(t);case"keypress":return t.which!==32?null:(Xs=!0,Ls);case"textInput":return e=t.data,e===Ls&&Xs?null:e;default:return null}}function vd(e,t){if(Fa)return e==="compositionend"||!cu&&Qs(e,t)?(e=Us(),On=nu=Wt=null,Fa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gs&&t.locale!=="ko"?null:t.data;default:return null}}var bd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bd[e.type]:t==="textarea"}function Zs(e,t,a,l){Ja?Ia?Ia.push(l):Ia=[l]:Ja=l,t=wi(t,"onChange"),0<t.length&&(a=new _n("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Ul=null,kl=null;function Sd(e){Rf(e,0)}function Un(e){var t=Rl(e);if(Ds(t))return e}function Js(e,t){if(e==="change")return t}var Is=!1;if(Nt){var ru;if(Nt){var fu="oninput"in document;if(!fu){var Fs=document.createElement("div");Fs.setAttribute("oninput","return;"),fu=typeof Fs.oninput=="function"}ru=fu}else ru=!1;Is=ru&&(!document.documentMode||9<document.documentMode)}function Ws(){Ul&&(Ul.detachEvent("onpropertychange",Ps),kl=Ul=null)}function Ps(e){if(e.propertyName==="value"&&Un(kl)){var t=[];Zs(t,kl,e,tu(e)),Hs(Sd,t)}}function Ad(e,t,a){e==="focusin"?(Ws(),Ul=t,kl=a,Ul.attachEvent("onpropertychange",Ps)):e==="focusout"&&Ws()}function Ed(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Un(kl)}function Td(e,t){if(e==="click")return Un(t)}function wd(e,t){if(e==="input"||e==="change")return Un(t)}function Md(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:Md;function ql(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Li.call(t,n)||!$e(e[n],t[n]))return!1}return!0}function $s(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ec(e,t){var a=$s(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=$s(a)}}function tc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ac(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=zn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=zn(e.document)}return t}function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Cd=Nt&&"documentMode"in document&&11>=document.documentMode,Wa=null,du=null,Yl=null,hu=!1;function lc(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hu||Wa==null||Wa!==zn(l)||(l=Wa,"selectionStart"in l&&mu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Yl&&ql(Yl,l)||(Yl=l,l=wi(du,"onSelect"),0<l.length&&(t=new _n("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Wa)))}function Ma(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Pa={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},gu={},nc={};Nt&&(nc=document.createElement("div").style,"AnimationEvent"in window||(delete Pa.animationend.animation,delete Pa.animationiteration.animation,delete Pa.animationstart.animation),"TransitionEvent"in window||delete Pa.transitionend.transition);function Ca(e){if(gu[e])return gu[e];if(!Pa[e])return e;var t=Pa[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in nc)return gu[e]=t[a];return e}var ic=Ca("animationend"),uc=Ca("animationiteration"),oc=Ca("animationstart"),xd=Ca("transitionrun"),Dd=Ca("transitionstart"),zd=Ca("transitioncancel"),sc=Ca("transitionend"),cc=new Map,pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pu.push("scrollEnd");function vt(e,t){cc.set(e,t),Ta(t,[e])}var kn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ct=[],$a=0,yu=0;function qn(){for(var e=$a,t=yu=$a=0;t<e;){var a=ct[t];ct[t++]=null;var l=ct[t];ct[t++]=null;var n=ct[t];ct[t++]=null;var i=ct[t];if(ct[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&rc(a,n,i)}}function Yn(e,t,a,l){ct[$a++]=e,ct[$a++]=t,ct[$a++]=a,ct[$a++]=l,yu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function vu(e,t,a,l){return Yn(e,t,a,l),jn(e)}function xa(e,t){return Yn(e,null,null,t),jn(e)}function rc(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-Pe(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function jn(e){if(50<sn)throw sn=0,Do=null,Error(g(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var el={};function Rd(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,a,l){return new Rd(e,t,a,l)}function bu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bt(e,t){var a=e.alternate;return a===null?(a=et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function fc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Gn(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")bu(e)&&(u=1);else if(typeof e=="string")u=Hh(e,a,x.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Et:return e=et(31,a,t,n),e.elementType=Et,e.lanes=i,e;case Be:return Da(a.children,n,i,t);case Dt:u=8,n|=24;break;case Ie:return e=et(12,a,t,n|2),e.elementType=Ie,e.lanes=i,e;case At:return e=et(13,a,t,n),e.elementType=At,e.lanes=i,e;case qe:return e=et(19,a,t,n),e.elementType=qe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Re:u=10;break e;case Jt:u=9;break e;case ut:u=11;break e;case Q:u=14;break e;case Ye:u=16,l=null;break e}u=29,a=Error(g(130,e===null?"null":typeof e,"")),l=null}return t=et(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Da(e,t,a,l){return e=et(7,e,l,t),e.lanes=a,e}function Su(e,t,a){return e=et(6,e,null,t),e.lanes=a,e}function mc(e){var t=et(18,null,null,0);return t.stateNode=e,t}function Au(e,t,a){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var dc=new WeakMap;function rt(e,t){if(typeof e=="object"&&e!==null){var a=dc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ms(t)},dc.set(e,t),t)}return{value:e,source:t,stack:ms(t)}}var tl=[],al=0,Ln=null,jl=0,ft=[],mt=0,Pt=null,wt=1,Mt="";function _t(e,t){tl[al++]=jl,tl[al++]=Ln,Ln=e,jl=t}function hc(e,t,a){ft[mt++]=wt,ft[mt++]=Mt,ft[mt++]=Pt,Pt=e;var l=wt;e=Mt;var n=32-Pe(l)-1;l&=~(1<<n),a+=1;var i=32-Pe(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,wt=1<<32-Pe(t)+n|a<<n|l,Mt=i+e}else wt=1<<i|a<<n|l,Mt=e}function Eu(e){e.return!==null&&(_t(e,1),hc(e,1,0))}function Tu(e){for(;e===Ln;)Ln=tl[--al],tl[al]=null,jl=tl[--al],tl[al]=null;for(;e===Pt;)Pt=ft[--mt],ft[mt]=null,Mt=ft[--mt],ft[mt]=null,wt=ft[--mt],ft[mt]=null}function gc(e,t){ft[mt++]=wt,ft[mt++]=Mt,ft[mt++]=Pt,wt=t.id,Mt=t.overflow,Pt=e}var Ce=null,oe=null,K=!1,$t=null,dt=!1,wu=Error(g(519));function ea(e){var t=Error(g(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gl(rt(t,e)),wu}function pc(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Me]=e,t[Ge]=l,a){case"dialog":G("cancel",t),G("close",t);break;case"iframe":case"object":case"embed":G("load",t);break;case"video":case"audio":for(a=0;a<rn.length;a++)G(rn[a],t);break;case"source":G("error",t);break;case"img":case"image":case"link":G("error",t),G("load",t);break;case"details":G("toggle",t);break;case"input":G("invalid",t),zs(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":G("invalid",t);break;case"textarea":G("invalid",t),Os(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||_f(t.textContent,a)?(l.popover!=null&&(G("beforetoggle",t),G("toggle",t)),l.onScroll!=null&&G("scroll",t),l.onScrollEnd!=null&&G("scrollend",t),l.onClick!=null&&(t.onclick=Ot),t=!0):t=!1,t||ea(e,!0)}function yc(e){for(Ce=e.return;Ce;)switch(Ce.tag){case 5:case 31:case 13:dt=!1;return;case 27:case 3:dt=!0;return;default:Ce=Ce.return}}function ll(e){if(e!==Ce)return!1;if(!K)return yc(e),K=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Xo(e.type,e.memoizedProps)),a=!a),a&&oe&&ea(e),yc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));oe=Xf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));oe=Xf(e)}else t===27?(t=oe,ha(e.type)?(e=Jo,Jo=null,oe=e):oe=t):oe=Ce?gt(e.stateNode.nextSibling):null;return!0}function za(){oe=Ce=null,K=!1}function Mu(){var e=$t;return e!==null&&(Ve===null?Ve=e:Ve.push.apply(Ve,e),$t=null),e}function Gl(e){$t===null?$t=[e]:$t.push(e)}var Cu=r(null),Ra=null,Ht=null;function ta(e,t,a){w(Cu,t._currentValue),t._currentValue=a}function Ut(e){e._currentValue=Cu.current,A(Cu)}function xu(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Du(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var o=i;i=n;for(var s=0;s<t.length;s++)if(o.context===t[s]){i.lanes|=a,o=i.alternate,o!==null&&(o.lanes|=a),xu(i.return,a,e),l||(u=null);break e}i=o.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(g(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),xu(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function nl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(g(387));if(u=u.memoizedProps,u!==null){var o=n.type;$e(n.pendingProps.value,u.value)||(e!==null?e.push(o):e=[o])}}else if(n===P.current){if(u=n.alternate,u===null)throw Error(g(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(gn):e=[gn])}n=n.return}e!==null&&Du(t,e,a,l),t.flags|=262144}function Xn(e){for(e=e.firstContext;e!==null;){if(!$e(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Oa(e){Ra=e,Ht=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xe(e){return vc(Ra,e)}function Qn(e,t){return Ra===null&&Oa(e),vc(e,t)}function vc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ht===null){if(e===null)throw Error(g(308));Ht=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ht=Ht.next=t;return a}var Od=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Nd=C.unstable_scheduleCallback,Bd=C.unstable_NormalPriority,ve={$$typeof:Re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zu(){return{controller:new Od,data:new Map,refCount:0}}function Ll(e){e.refCount--,e.refCount===0&&Nd(Bd,function(){e.controller.abort()})}var Xl=null,Ru=0,il=0,ul=null;function _d(e,t){if(Xl===null){var a=Xl=[];Ru=0,il=_o(),ul={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Ru++,t.then(bc,bc),t}function bc(){if(--Ru===0&&Xl!==null){ul!==null&&(ul.status="fulfilled");var e=Xl;Xl=null,il=0,ul=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Hd(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Sc=v.S;v.S=function(e,t){lf=Fe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&_d(e,t),Sc!==null&&Sc(e,t)};var Na=r(null);function Ou(){var e=Na.current;return e!==null?e:ue.pooledCache}function Kn(e,t){t===null?w(Na,Na.current):w(Na,t.pool)}function Ac(){var e=Ou();return e===null?null:{parent:ve._currentValue,pool:e}}var ol=Error(g(460)),Nu=Error(g(474)),Vn=Error(g(542)),Zn={then:function(){}};function Ec(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ot,Ot),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Mc(e),e;default:if(typeof t.status=="string")t.then(Ot,Ot);else{if(e=ue,e!==null&&100<e.shellSuspendCounter)throw Error(g(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Mc(e),e}throw _a=t,ol}}function Ba(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(_a=a,ol):a}}var _a=null;function wc(){if(_a===null)throw Error(g(459));var e=_a;return _a=null,e}function Mc(e){if(e===ol||e===Vn)throw Error(g(483))}var sl=null,Ql=0;function Jn(e){var t=Ql;return Ql+=1,sl===null&&(sl=[]),Tc(sl,e,t)}function Kl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function In(e,t){throw t.$$typeof===ce?Error(g(525)):(e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Cc(e){function t(f,c){if(e){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function a(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function l(f){for(var c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function n(f,c){return f=Bt(f,c),f.index=0,f.sibling=null,f}function i(f,c,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=67108866,c):m):(f.flags|=67108866,c)):(f.flags|=1048576,c)}function u(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,c,m,b){return c===null||c.tag!==6?(c=Su(m,f.mode,b),c.return=f,c):(c=n(c,m),c.return=f,c)}function s(f,c,m,b){var z=m.type;return z===Be?y(f,c,m.props.children,b,m.key):c!==null&&(c.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ye&&Ba(z)===c.type)?(c=n(c,m.props),Kl(c,m),c.return=f,c):(c=Gn(m.type,m.key,m.props,null,f.mode,b),Kl(c,m),c.return=f,c)}function d(f,c,m,b){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=Au(m,f.mode,b),c.return=f,c):(c=n(c,m.children||[]),c.return=f,c)}function y(f,c,m,b,z){return c===null||c.tag!==7?(c=Da(m,f.mode,b,z),c.return=f,c):(c=n(c,m),c.return=f,c)}function S(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=Su(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Je:return m=Gn(c.type,c.key,c.props,null,f.mode,m),Kl(m,c),m.return=f,m;case ke:return c=Au(c,f.mode,m),c.return=f,c;case Ye:return c=Ba(c),S(f,c,m)}if(yt(c)||je(c))return c=Da(c,f.mode,m,null),c.return=f,c;if(typeof c.then=="function")return S(f,Jn(c),m);if(c.$$typeof===Re)return S(f,Qn(f,c),m);In(f,c)}return null}function h(f,c,m,b){var z=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return z!==null?null:o(f,c,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Je:return m.key===z?s(f,c,m,b):null;case ke:return m.key===z?d(f,c,m,b):null;case Ye:return m=Ba(m),h(f,c,m,b)}if(yt(m)||je(m))return z!==null?null:y(f,c,m,b,null);if(typeof m.then=="function")return h(f,c,Jn(m),b);if(m.$$typeof===Re)return h(f,c,Qn(f,m),b);In(f,m)}return null}function p(f,c,m,b,z){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return f=f.get(m)||null,o(c,f,""+b,z);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Je:return f=f.get(b.key===null?m:b.key)||null,s(c,f,b,z);case ke:return f=f.get(b.key===null?m:b.key)||null,d(c,f,b,z);case Ye:return b=Ba(b),p(f,c,m,b,z)}if(yt(b)||je(b))return f=f.get(m)||null,y(c,f,b,z,null);if(typeof b.then=="function")return p(f,c,m,Jn(b),z);if(b.$$typeof===Re)return p(f,c,m,Qn(c,b),z);In(c,b)}return null}function M(f,c,m,b){for(var z=null,V=null,D=c,q=c=0,X=null;D!==null&&q<m.length;q++){D.index>q?(X=D,D=null):X=D.sibling;var Z=h(f,D,m[q],b);if(Z===null){D===null&&(D=X);break}e&&D&&Z.alternate===null&&t(f,D),c=i(Z,c,q),V===null?z=Z:V.sibling=Z,V=Z,D=X}if(q===m.length)return a(f,D),K&&_t(f,q),z;if(D===null){for(;q<m.length;q++)D=S(f,m[q],b),D!==null&&(c=i(D,c,q),V===null?z=D:V.sibling=D,V=D);return K&&_t(f,q),z}for(D=l(D);q<m.length;q++)X=p(D,f,q,m[q],b),X!==null&&(e&&X.alternate!==null&&D.delete(X.key===null?q:X.key),c=i(X,c,q),V===null?z=X:V.sibling=X,V=X);return e&&D.forEach(function(ba){return t(f,ba)}),K&&_t(f,q),z}function O(f,c,m,b){if(m==null)throw Error(g(151));for(var z=null,V=null,D=c,q=c=0,X=null,Z=m.next();D!==null&&!Z.done;q++,Z=m.next()){D.index>q?(X=D,D=null):X=D.sibling;var ba=h(f,D,Z.value,b);if(ba===null){D===null&&(D=X);break}e&&D&&ba.alternate===null&&t(f,D),c=i(ba,c,q),V===null?z=ba:V.sibling=ba,V=ba,D=X}if(Z.done)return a(f,D),K&&_t(f,q),z;if(D===null){for(;!Z.done;q++,Z=m.next())Z=S(f,Z.value,b),Z!==null&&(c=i(Z,c,q),V===null?z=Z:V.sibling=Z,V=Z);return K&&_t(f,q),z}for(D=l(D);!Z.done;q++,Z=m.next())Z=p(D,f,q,Z.value,b),Z!==null&&(e&&Z.alternate!==null&&D.delete(Z.key===null?q:Z.key),c=i(Z,c,q),V===null?z=Z:V.sibling=Z,V=Z);return e&&D.forEach(function(Vh){return t(f,Vh)}),K&&_t(f,q),z}function ne(f,c,m,b){if(typeof m=="object"&&m!==null&&m.type===Be&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Je:e:{for(var z=m.key;c!==null;){if(c.key===z){if(z=m.type,z===Be){if(c.tag===7){a(f,c.sibling),b=n(c,m.props.children),b.return=f,f=b;break e}}else if(c.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ye&&Ba(z)===c.type){a(f,c.sibling),b=n(c,m.props),Kl(b,m),b.return=f,f=b;break e}a(f,c);break}else t(f,c);c=c.sibling}m.type===Be?(b=Da(m.props.children,f.mode,b,m.key),b.return=f,f=b):(b=Gn(m.type,m.key,m.props,null,f.mode,b),Kl(b,m),b.return=f,f=b)}return u(f);case ke:e:{for(z=m.key;c!==null;){if(c.key===z)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){a(f,c.sibling),b=n(c,m.children||[]),b.return=f,f=b;break e}else{a(f,c);break}else t(f,c);c=c.sibling}b=Au(m,f.mode,b),b.return=f,f=b}return u(f);case Ye:return m=Ba(m),ne(f,c,m,b)}if(yt(m))return M(f,c,m,b);if(je(m)){if(z=je(m),typeof z!="function")throw Error(g(150));return m=z.call(m),O(f,c,m,b)}if(typeof m.then=="function")return ne(f,c,Jn(m),b);if(m.$$typeof===Re)return ne(f,c,Qn(f,m),b);In(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,c!==null&&c.tag===6?(a(f,c.sibling),b=n(c,m),b.return=f,f=b):(a(f,c),b=Su(m,f.mode,b),b.return=f,f=b),u(f)):a(f,c)}return function(f,c,m,b){try{Ql=0;var z=ne(f,c,m,b);return sl=null,z}catch(D){if(D===ol||D===Vn)throw D;var V=et(29,D,null,f.mode);return V.lanes=b,V.return=f,V}finally{}}}var Ha=Cc(!0),xc=Cc(!1),aa=!1;function Bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _u(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function na(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(I&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=jn(e),rc(e,null,a),t}return Yn(e,l,t,a),jn(e)}function Vl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,vs(e,a)}}function Hu(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Uu=!1;function Zl(){if(Uu){var e=ul;if(e!==null)throw e}}function Jl(e,t,a,l){Uu=!1;var n=e.updateQueue;aa=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var s=o,d=s.next;s.next=null,u===null?i=d:u.next=d,u=s;var y=e.alternate;y!==null&&(y=y.updateQueue,o=y.lastBaseUpdate,o!==u&&(o===null?y.firstBaseUpdate=d:o.next=d,y.lastBaseUpdate=s))}if(i!==null){var S=n.baseState;u=0,y=d=s=null,o=i;do{var h=o.lane&-536870913,p=h!==o.lane;if(p?(L&h)===h:(l&h)===h){h!==0&&h===il&&(Uu=!0),y!==null&&(y=y.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var M=e,O=o;h=t;var ne=a;switch(O.tag){case 1:if(M=O.payload,typeof M=="function"){S=M.call(ne,S,h);break e}S=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=O.payload,h=typeof M=="function"?M.call(ne,S,h):M,h==null)break e;S=B({},S,h);break e;case 2:aa=!0}}h=o.callback,h!==null&&(e.flags|=64,p&&(e.flags|=8192),p=n.callbacks,p===null?n.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},y===null?(d=y=p,s=S):y=y.next=p,u|=h;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;p=o,o=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);y===null&&(s=S),n.baseState=s,n.firstBaseUpdate=d,n.lastBaseUpdate=y,i===null&&(n.shared.lanes=0),ca|=u,e.lanes=u,e.memoizedState=S}}function Dc(e,t){if(typeof e!="function")throw Error(g(191,e));e.call(t)}function zc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Dc(a[e],t)}var cl=r(null),Fn=r(0);function Rc(e,t){e=Kt,w(Fn,e),w(cl,t),Kt=e|t.baseLanes}function ku(){w(Fn,Kt),w(cl,cl.current)}function qu(){Kt=Fn.current,A(cl),A(Fn)}var tt=r(null),ht=null;function ia(e){var t=e.alternate;w(pe,pe.current&1),w(tt,e),ht===null&&(t===null||cl.current!==null||t.memoizedState!==null)&&(ht=e)}function Yu(e){w(pe,pe.current),w(tt,e),ht===null&&(ht=e)}function Oc(e){e.tag===22?(w(pe,pe.current),w(tt,e),ht===null&&(ht=e)):ua()}function ua(){w(pe,pe.current),w(tt,tt.current)}function at(e){A(tt),ht===e&&(ht=null),A(pe)}var pe=r(0);function Wn(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Vo(a)||Zo(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kt=0,k=null,ae=null,be=null,Pn=!1,rl=!1,Ua=!1,$n=0,Il=0,fl=null,Ud=0;function me(){throw Error(g(321))}function ju(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!$e(e[a],t[a]))return!1;return!0}function Gu(e,t,a,l,n,i){return kt=i,k=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,v.H=e===null||e.memoizedState===null?hr:ao,Ua=!1,i=a(l,n),Ua=!1,rl&&(i=Bc(t,a,l,n)),Nc(e),i}function Nc(e){v.H=Pl;var t=ae!==null&&ae.next!==null;if(kt=0,be=ae=k=null,Pn=!1,Il=0,fl=null,t)throw Error(g(300));e===null||Se||(e=e.dependencies,e!==null&&Xn(e)&&(Se=!0))}function Bc(e,t,a,l){k=e;var n=0;do{if(rl&&(fl=null),Il=0,rl=!1,25<=n)throw Error(g(301));if(n+=1,be=ae=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}v.H=gr,i=t(a,l)}while(rl);return i}function kd(){var e=v.H,t=e.useState()[0];return t=typeof t.then=="function"?Fl(t):t,e=e.useState()[0],(ae!==null?ae.memoizedState:null)!==e&&(k.flags|=1024),t}function Lu(){var e=$n!==0;return $n=0,e}function Xu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Qu(e){if(Pn){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Pn=!1}kt=0,be=ae=k=null,rl=!1,Il=$n=0,fl=null}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?k.memoizedState=be=e:be=be.next=e,be}function ye(){if(ae===null){var e=k.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=be===null?k.memoizedState:be.next;if(t!==null)be=t,ae=e;else{if(e===null)throw k.alternate===null?Error(g(467)):Error(g(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},be===null?k.memoizedState=be=e:be=be.next=e}return be}function ei(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fl(e){var t=Il;return Il+=1,fl===null&&(fl=[]),e=Tc(fl,e,t),t=k,(be===null?t.memoizedState:be.next)===null&&(t=t.alternate,v.H=t===null||t.memoizedState===null?hr:ao),e}function ti(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fl(e);if(e.$$typeof===Re)return xe(e)}throw Error(g(438,String(e)))}function Ku(e){var t=null,a=k.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=k.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ei(),k.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=ja;return t.index++,a}function qt(e,t){return typeof t=="function"?t(e):t}function ai(e){var t=ye();return Vu(t,ae,e)}function Vu(e,t,a){var l=e.queue;if(l===null)throw Error(g(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var o=u=null,s=null,d=t,y=!1;do{var S=d.lane&-536870913;if(S!==d.lane?(L&S)===S:(kt&S)===S){var h=d.revertLane;if(h===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),S===il&&(y=!0);else if((kt&h)===h){d=d.next,h===il&&(y=!0);continue}else S={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},s===null?(o=s=S,u=i):s=s.next=S,k.lanes|=h,ca|=h;S=d.action,Ua&&a(i,S),i=d.hasEagerState?d.eagerState:a(i,S)}else h={lane:S,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},s===null?(o=s=h,u=i):s=s.next=h,k.lanes|=S,ca|=S;d=d.next}while(d!==null&&d!==t);if(s===null?u=i:s.next=o,!$e(i,e.memoizedState)&&(Se=!0,y&&(a=ul,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=s,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Zu(e){var t=ye(),a=t.queue;if(a===null)throw Error(g(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);$e(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function _c(e,t,a){var l=k,n=ye(),i=K;if(i){if(a===void 0)throw Error(g(407));a=a()}else a=t();var u=!$e((ae||n).memoizedState,a);if(u&&(n.memoizedState=a,Se=!0),n=n.queue,Fu(kc.bind(null,l,n,e),[e]),n.getSnapshot!==t||u||be!==null&&be.memoizedState.tag&1){if(l.flags|=2048,ml(9,{destroy:void 0},Uc.bind(null,l,n,a,t),null),ue===null)throw Error(g(349));i||(kt&127)!==0||Hc(l,t,a)}return a}function Hc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=k.updateQueue,t===null?(t=ei(),k.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Uc(e,t,a,l){t.value=a,t.getSnapshot=l,qc(t)&&Yc(e)}function kc(e,t,a){return a(function(){qc(t)&&Yc(e)})}function qc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!$e(e,a)}catch{return!0}}function Yc(e){var t=xa(e,2);t!==null&&Ze(t,e,2)}function Ju(e){var t=He();if(typeof e=="function"){var a=e;if(e=a(),Ua){It(!0);try{a()}finally{It(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:e},t}function jc(e,t,a,l){return e.baseState=a,Vu(e,ae,typeof l=="function"?l:qt)}function qd(e,t,a,l,n){if(ii(e))throw Error(g(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};v.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Gc(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Gc(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=v.T,u={};v.T=u;try{var o=a(n,l),s=v.S;s!==null&&s(u,o),Lc(e,t,o)}catch(d){Iu(e,t,d)}finally{i!==null&&u.types!==null&&(i.types=u.types),v.T=i}}else try{i=a(n,l),Lc(e,t,i)}catch(d){Iu(e,t,d)}}function Lc(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Xc(e,t,l)},function(l){return Iu(e,t,l)}):Xc(e,t,a)}function Xc(e,t,a){t.status="fulfilled",t.value=a,Qc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Gc(e,a)))}function Iu(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Qc(t),t=t.next;while(t!==l)}e.action=null}function Qc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Kc(e,t){return t}function Vc(e,t){if(K){var a=ue.formState;if(a!==null){e:{var l=k;if(K){if(oe){t:{for(var n=oe,i=dt;n.nodeType!==8;){if(!i){n=null;break t}if(n=gt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){oe=gt(n.nextSibling),l=n.data==="F!";break e}}ea(l)}l=!1}l&&(t=a[0])}}return a=He(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kc,lastRenderedState:t},a.queue=l,a=fr.bind(null,k,l),l.dispatch=a,l=Ju(!1),i=to.bind(null,k,!1,l.queue),l=He(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=qd.bind(null,k,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Zc(e){var t=ye();return Jc(t,ae,e)}function Jc(e,t,a){if(t=Vu(e,t,Kc)[0],e=ai(qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Fl(t)}catch(u){throw u===ol?Vn:u}else l=t;t=ye();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(k.flags|=2048,ml(9,{destroy:void 0},Yd.bind(null,n,a),null)),[l,i,e]}function Yd(e,t){e.action=t}function Ic(e){var t=ye(),a=ae;if(a!==null)return Jc(t,a,e);ye(),t=t.memoizedState,a=ye();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function ml(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=k.updateQueue,t===null&&(t=ei(),k.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Fc(){return ye().memoizedState}function li(e,t,a,l){var n=He();k.flags|=e,n.memoizedState=ml(1|t,{destroy:void 0},a,l===void 0?null:l)}function ni(e,t,a,l){var n=ye();l=l===void 0?null:l;var i=n.memoizedState.inst;ae!==null&&l!==null&&ju(l,ae.memoizedState.deps)?n.memoizedState=ml(t,i,a,l):(k.flags|=e,n.memoizedState=ml(1|t,i,a,l))}function Wc(e,t){li(8390656,8,e,t)}function Fu(e,t){ni(2048,8,e,t)}function jd(e){k.flags|=4;var t=k.updateQueue;if(t===null)t=ei(),k.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Pc(e){var t=ye().memoizedState;return jd({ref:t,nextImpl:e}),function(){if((I&2)!==0)throw Error(g(440));return t.impl.apply(void 0,arguments)}}function $c(e,t){return ni(4,2,e,t)}function er(e,t){return ni(4,4,e,t)}function tr(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ar(e,t,a){a=a!=null?a.concat([e]):null,ni(4,4,tr.bind(null,t,e),a)}function Wu(){}function lr(e,t){var a=ye();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&ju(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function nr(e,t){var a=ye();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&ju(t,l[1]))return l[0];if(l=e(),Ua){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[l,t],l}function Pu(e,t,a){return a===void 0||(kt&1073741824)!==0&&(L&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=uf(),k.lanes|=e,ca|=e,a)}function ir(e,t,a,l){return $e(a,t)?a:cl.current!==null?(e=Pu(e,a,l),$e(e,t)||(Se=!0),e):(kt&42)===0||(kt&1073741824)!==0&&(L&261930)===0?(Se=!0,e.memoizedState=a):(e=uf(),k.lanes|=e,ca|=e,t)}function ur(e,t,a,l,n){var i=T.p;T.p=i!==0&&8>i?i:8;var u=v.T,o={};v.T=o,to(e,!1,t,a);try{var s=n(),d=v.S;if(d!==null&&d(o,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var y=Hd(s,l);Wl(e,t,y,it(e))}else Wl(e,t,l,it(e))}catch(S){Wl(e,t,{then:function(){},status:"rejected",reason:S},it())}finally{T.p=i,u!==null&&o.types!==null&&(u.types=o.types),v.T=u}}function Gd(){}function $u(e,t,a,l){if(e.tag!==5)throw Error(g(476));var n=or(e).queue;ur(e,n,t,_,a===null?Gd:function(){return sr(e),a(l)})}function or(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:_,baseState:_,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:_},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function sr(e){var t=or(e);t.next===null&&(t=e.alternate.memoizedState),Wl(e,t.next.queue,{},it())}function eo(){return xe(gn)}function cr(){return ye().memoizedState}function rr(){return ye().memoizedState}function Ld(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=it();e=la(a);var l=na(t,e,a);l!==null&&(Ze(l,t,a),Vl(l,t,a)),t={cache:zu()},e.payload=t;return}t=t.return}}function Xd(e,t,a){var l=it();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ii(e)?mr(t,a):(a=vu(e,t,a,l),a!==null&&(Ze(a,e,l),dr(a,t,l)))}function fr(e,t,a){var l=it();Wl(e,t,a,l)}function Wl(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ii(e))mr(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,o=i(u,a);if(n.hasEagerState=!0,n.eagerState=o,$e(o,u))return Yn(e,t,n,0),ue===null&&qn(),!1}catch{}finally{}if(a=vu(e,t,n,l),a!==null)return Ze(a,e,l),dr(a,t,l),!0}return!1}function to(e,t,a,l){if(l={lane:2,revertLane:_o(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ii(e)){if(t)throw Error(g(479))}else t=vu(e,a,l,2),t!==null&&Ze(t,e,2)}function ii(e){var t=e.alternate;return e===k||t!==null&&t===k}function mr(e,t){rl=Pn=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function dr(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,vs(e,a)}}var Pl={readContext:xe,use:ti,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useLayoutEffect:me,useInsertionEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useSyncExternalStore:me,useId:me,useHostTransitionStatus:me,useFormState:me,useActionState:me,useOptimistic:me,useMemoCache:me,useCacheRefresh:me};Pl.useEffectEvent=me;var hr={readContext:xe,use:ti,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:xe,useEffect:Wc,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,li(4194308,4,tr.bind(null,t,e),a)},useLayoutEffect:function(e,t){return li(4194308,4,e,t)},useInsertionEffect:function(e,t){li(4,2,e,t)},useMemo:function(e,t){var a=He();t=t===void 0?null:t;var l=e();if(Ua){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=He();if(a!==void 0){var n=a(t);if(Ua){It(!0);try{a(t)}finally{It(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Xd.bind(null,k,e),[l.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:function(e){e=Ju(e);var t=e.queue,a=fr.bind(null,k,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Wu,useDeferredValue:function(e,t){var a=He();return Pu(a,e,t)},useTransition:function(){var e=Ju(!1);return e=ur.bind(null,k,e.queue,!0,!1),He().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=k,n=He();if(K){if(a===void 0)throw Error(g(407));a=a()}else{if(a=t(),ue===null)throw Error(g(349));(L&127)!==0||Hc(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Wc(kc.bind(null,l,i,e),[e]),l.flags|=2048,ml(9,{destroy:void 0},Uc.bind(null,l,i,a,t),null),a},useId:function(){var e=He(),t=ue.identifierPrefix;if(K){var a=Mt,l=wt;a=(l&~(1<<32-Pe(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=$n++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Ud++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:eo,useFormState:Vc,useActionState:Vc,useOptimistic:function(e){var t=He();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=to.bind(null,k,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ku,useCacheRefresh:function(){return He().memoizedState=Ld.bind(null,k)},useEffectEvent:function(e){var t=He(),a={impl:e};return t.memoizedState=a,function(){if((I&2)!==0)throw Error(g(440));return a.impl.apply(void 0,arguments)}}},ao={readContext:xe,use:ti,useCallback:lr,useContext:xe,useEffect:Fu,useImperativeHandle:ar,useInsertionEffect:$c,useLayoutEffect:er,useMemo:nr,useReducer:ai,useRef:Fc,useState:function(){return ai(qt)},useDebugValue:Wu,useDeferredValue:function(e,t){var a=ye();return ir(a,ae.memoizedState,e,t)},useTransition:function(){var e=ai(qt)[0],t=ye().memoizedState;return[typeof e=="boolean"?e:Fl(e),t]},useSyncExternalStore:_c,useId:cr,useHostTransitionStatus:eo,useFormState:Zc,useActionState:Zc,useOptimistic:function(e,t){var a=ye();return jc(a,ae,e,t)},useMemoCache:Ku,useCacheRefresh:rr};ao.useEffectEvent=Pc;var gr={readContext:xe,use:ti,useCallback:lr,useContext:xe,useEffect:Fu,useImperativeHandle:ar,useInsertionEffect:$c,useLayoutEffect:er,useMemo:nr,useReducer:Zu,useRef:Fc,useState:function(){return Zu(qt)},useDebugValue:Wu,useDeferredValue:function(e,t){var a=ye();return ae===null?Pu(a,e,t):ir(a,ae.memoizedState,e,t)},useTransition:function(){var e=Zu(qt)[0],t=ye().memoizedState;return[typeof e=="boolean"?e:Fl(e),t]},useSyncExternalStore:_c,useId:cr,useHostTransitionStatus:eo,useFormState:Ic,useActionState:Ic,useOptimistic:function(e,t){var a=ye();return ae!==null?jc(a,ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:rr};gr.useEffectEvent=Pc;function lo(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:B({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var no={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=it(),n=la(l);n.payload=t,a!=null&&(n.callback=a),t=na(e,n,l),t!==null&&(Ze(t,e,l),Vl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=it(),n=la(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=na(e,n,l),t!==null&&(Ze(t,e,l),Vl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=it(),l=la(a);l.tag=2,t!=null&&(l.callback=t),t=na(e,l,a),t!==null&&(Ze(t,e,a),Vl(t,e,a))}};function pr(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!ql(a,l)||!ql(n,i):!0}function yr(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&no.enqueueReplaceState(t,t.state,null)}function ka(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=B({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function vr(e){kn(e)}function br(e){console.error(e)}function Sr(e){kn(e)}function ui(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Ar(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function io(e,t,a){return a=la(a),a.tag=3,a.payload={element:null},a.callback=function(){ui(e,t)},a}function Er(e){return e=la(e),e.tag=3,e}function Tr(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Ar(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Ar(t,a,l),typeof n!="function"&&(ra===null?ra=new Set([this]):ra.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function Qd(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&nl(t,a,n,!0),a=tt.current,a!==null){switch(a.tag){case 31:case 13:return ht===null?vi():a.alternate===null&&de===0&&(de=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Zn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Oo(e,l,n)),!1;case 22:return a.flags|=65536,l===Zn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Oo(e,l,n)),!1}throw Error(g(435,a.tag))}return Oo(e,l,n),vi(),!1}if(K)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==wu&&(e=Error(g(422),{cause:l}),Gl(rt(e,a)))):(l!==wu&&(t=Error(g(423),{cause:l}),Gl(rt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=rt(l,a),n=io(e.stateNode,l,n),Hu(e,n),de!==4&&(de=2)),!1;var i=Error(g(520),{cause:l});if(i=rt(i,a),on===null?on=[i]:on.push(i),de!==4&&(de=2),t===null)return!0;l=rt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=io(a.stateNode,l,e),Hu(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ra===null||!ra.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Er(n),Tr(n,e,a,l),Hu(a,n),!1}a=a.return}while(a!==null);return!1}var uo=Error(g(461)),Se=!1;function De(e,t,a,l){t.child=e===null?xc(t,null,a,l):Ha(t,e.child,a,l)}function wr(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var o in l)o!=="ref"&&(u[o]=l[o])}else u=l;return Oa(t),l=Gu(e,t,a,u,i,n),o=Lu(),e!==null&&!Se?(Xu(e,t,n),Yt(e,t,n)):(K&&o&&Eu(t),t.flags|=1,De(e,t,l,n),t.child)}function Mr(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!bu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Cr(e,t,i,l,n)):(e=Gn(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!go(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:ql,a(u,l)&&e.ref===t.ref)return Yt(e,t,n)}return t.flags|=1,e=Bt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Cr(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(ql(i,l)&&e.ref===t.ref)if(Se=!1,t.pendingProps=l=i,go(e,n))(e.flags&131072)!==0&&(Se=!0);else return t.lanes=e.lanes,Yt(e,t,n)}return oo(e,t,a,l,n)}function xr(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Dr(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Kn(t,i!==null?i.cachePool:null),i!==null?Rc(t,i):ku(),Oc(t);else return l=t.lanes=536870912,Dr(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Kn(t,i.cachePool),Rc(t,i),ua(),t.memoizedState=null):(e!==null&&Kn(t,null),ku(),ua());return De(e,t,n,a),t.child}function $l(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Dr(e,t,a,l,n){var i=Ou();return i=i===null?null:{parent:ve._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Kn(t,null),ku(),Oc(t),e!==null&&nl(e,t,l,!0),t.childLanes=n,null}function oi(e,t){return t=ci({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function zr(e,t,a){return Ha(t,e.child,null,a),e=oi(t,t.pendingProps),e.flags|=2,at(t),t.memoizedState=null,e}function Kd(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(K){if(l.mode==="hidden")return e=oi(t,l),t.lanes=536870912,$l(null,e);if(Yu(t),(e=oe)?(e=Lf(e,dt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:wt,overflow:Mt}:null,retryLane:536870912,hydrationErrors:null},a=mc(e),a.return=t,t.child=a,Ce=t,oe=null)):e=null,e===null)throw ea(t);return t.lanes=536870912,null}return oi(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Yu(t),n)if(t.flags&256)t.flags&=-257,t=zr(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(g(558));else if(Se||nl(e,t,a,!1),n=(a&e.childLanes)!==0,Se||n){if(l=ue,l!==null&&(u=bs(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,xa(e,u),Ze(l,e,u),uo;vi(),t=zr(e,t,a)}else e=i.treeContext,oe=gt(u.nextSibling),Ce=t,K=!0,$t=null,dt=!1,e!==null&&gc(t,e),t=oi(t,l),t.flags|=4096;return t}return e=Bt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function si(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(g(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function oo(e,t,a,l,n){return Oa(t),a=Gu(e,t,a,l,void 0,n),l=Lu(),e!==null&&!Se?(Xu(e,t,n),Yt(e,t,n)):(K&&l&&Eu(t),t.flags|=1,De(e,t,a,n),t.child)}function Rr(e,t,a,l,n,i){return Oa(t),t.updateQueue=null,a=Bc(t,l,a,n),Nc(e),l=Lu(),e!==null&&!Se?(Xu(e,t,i),Yt(e,t,i)):(K&&l&&Eu(t),t.flags|=1,De(e,t,a,i),t.child)}function Or(e,t,a,l,n){if(Oa(t),t.stateNode===null){var i=el,u=a.contextType;typeof u=="object"&&u!==null&&(i=xe(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=no,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Bu(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?xe(u):el,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(lo(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&no.enqueueReplaceState(i,i.state,null),Jl(t,l,i,n),Zl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var o=t.memoizedProps,s=ka(a,o);i.props=s;var d=i.context,y=a.contextType;u=el,typeof y=="object"&&y!==null&&(u=xe(y));var S=a.getDerivedStateFromProps;y=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||d!==u)&&yr(t,i,l,u),aa=!1;var h=t.memoizedState;i.state=h,Jl(t,l,i,n),Zl(),d=t.memoizedState,o||h!==d||aa?(typeof S=="function"&&(lo(t,a,S,l),d=t.memoizedState),(s=aa||pr(t,a,s,l,h,d,u))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=d),i.props=l,i.state=d,i.context=u,l=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,_u(e,t),u=t.memoizedProps,y=ka(a,u),i.props=y,S=t.pendingProps,h=i.context,d=a.contextType,s=el,typeof d=="object"&&d!==null&&(s=xe(d)),o=a.getDerivedStateFromProps,(d=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==S||h!==s)&&yr(t,i,l,s),aa=!1,h=t.memoizedState,i.state=h,Jl(t,l,i,n),Zl();var p=t.memoizedState;u!==S||h!==p||aa||e!==null&&e.dependencies!==null&&Xn(e.dependencies)?(typeof o=="function"&&(lo(t,a,o,l),p=t.memoizedState),(y=aa||pr(t,a,y,l,h,p,s)||e!==null&&e.dependencies!==null&&Xn(e.dependencies))?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,p,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,p,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=p),i.props=l,i.state=p,i.context=s,l=y):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,si(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Ha(t,e.child,null,n),t.child=Ha(t,null,a,n)):De(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Yt(e,t,n),e}function Nr(e,t,a,l){return za(),t.flags|=256,De(e,t,a,l),t.child}var so={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function co(e){return{baseLanes:e,cachePool:Ac()}}function ro(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=nt),e}function Br(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(pe.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(K){if(n?ia(t):ua(),(e=oe)?(e=Lf(e,dt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:wt,overflow:Mt}:null,retryLane:536870912,hydrationErrors:null},a=mc(e),a.return=t,t.child=a,Ce=t,oe=null)):e=null,e===null)throw ea(t);return Zo(e)?t.lanes=32:t.lanes=536870912,null}var o=l.children;return l=l.fallback,n?(ua(),n=t.mode,o=ci({mode:"hidden",children:o},n),l=Da(l,n,a,null),o.return=t,l.return=t,o.sibling=l,t.child=o,l=t.child,l.memoizedState=co(a),l.childLanes=ro(e,u,a),t.memoizedState=so,$l(null,l)):(ia(t),fo(t,o))}var s=e.memoizedState;if(s!==null&&(o=s.dehydrated,o!==null)){if(i)t.flags&256?(ia(t),t.flags&=-257,t=mo(e,t,a)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),o=l.fallback,n=t.mode,l=ci({mode:"visible",children:l.children},n),o=Da(o,n,a,null),o.flags|=2,l.return=t,o.return=t,l.sibling=o,t.child=l,Ha(t,e.child,null,a),l=t.child,l.memoizedState=co(a),l.childLanes=ro(e,u,a),t.memoizedState=so,t=$l(null,l));else if(ia(t),Zo(o)){if(u=o.nextSibling&&o.nextSibling.dataset,u)var d=u.dgst;u=d,l=Error(g(419)),l.stack="",l.digest=u,Gl({value:l,source:null,stack:null}),t=mo(e,t,a)}else if(Se||nl(e,t,a,!1),u=(a&e.childLanes)!==0,Se||u){if(u=ue,u!==null&&(l=bs(u,a),l!==0&&l!==s.retryLane))throw s.retryLane=l,xa(e,l),Ze(u,e,l),uo;Vo(o)||vi(),t=mo(e,t,a)}else Vo(o)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,oe=gt(o.nextSibling),Ce=t,K=!0,$t=null,dt=!1,e!==null&&gc(t,e),t=fo(t,l.children),t.flags|=4096);return t}return n?(ua(),o=l.fallback,n=t.mode,s=e.child,d=s.sibling,l=Bt(s,{mode:"hidden",children:l.children}),l.subtreeFlags=s.subtreeFlags&65011712,d!==null?o=Bt(d,o):(o=Da(o,n,a,null),o.flags|=2),o.return=t,l.return=t,l.sibling=o,t.child=l,$l(null,l),l=t.child,o=e.child.memoizedState,o===null?o=co(a):(n=o.cachePool,n!==null?(s=ve._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Ac(),o={baseLanes:o.baseLanes|a,cachePool:n}),l.memoizedState=o,l.childLanes=ro(e,u,a),t.memoizedState=so,$l(e.child,l)):(ia(t),a=e.child,e=a.sibling,a=Bt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function fo(e,t){return t=ci({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ci(e,t){return e=et(22,e,null,t),e.lanes=0,e}function mo(e,t,a){return Ha(t,e.child,null,a),e=fo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _r(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),xu(e.return,t,a)}function ho(e,t,a,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function Hr(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=pe.current,o=(u&2)!==0;if(o?(u=u&1|2,t.flags|=128):u&=1,w(pe,u),De(e,t,l,a),l=K?jl:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_r(e,a,t);else if(e.tag===19)_r(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Wn(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),ho(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Wn(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}ho(t,!0,a,null,i,l);break;case"together":ho(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Yt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ca|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(nl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,a=Bt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Bt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function go(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Xn(e)))}function Vd(e,t,a){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),ta(t,ve,e.memoizedState.cache),za();break;case 27:case 5:Ml(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Yu(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ia(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Br(e,t,a):(ia(t),e=Yt(e,t,a),e!==null?e.sibling:null);ia(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(nl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Hr(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),w(pe,pe.current),l)break;return null;case 22:return t.lanes=0,xr(e,t,a,t.pendingProps);case 24:ta(t,ve,e.memoizedState.cache)}return Yt(e,t,a)}function Ur(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Se=!0;else{if(!go(e,a)&&(t.flags&128)===0)return Se=!1,Vd(e,t,a);Se=(e.flags&131072)!==0}else Se=!1,K&&(t.flags&1048576)!==0&&hc(t,jl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ba(t.elementType),t.type=e,typeof e=="function")bu(e)?(l=ka(e,l),t.tag=1,t=Or(null,t,e,l,a)):(t.tag=0,t=oo(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===ut){t.tag=11,t=wr(null,t,e,l,a);break e}else if(n===Q){t.tag=14,t=Mr(null,t,e,l,a);break e}}throw t=zt(e)||e,Error(g(306,t,""))}}return t;case 0:return oo(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=ka(l,t.pendingProps),Or(e,t,l,n,a);case 3:e:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(g(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,_u(e,t),Jl(t,l,null,a);var u=t.memoizedState;if(l=u.cache,ta(t,ve,l),l!==i.cache&&Du(t,[ve],a,!0),Zl(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Nr(e,t,l,a);break e}else if(l!==n){n=rt(Error(g(424)),t),Gl(n),t=Nr(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(oe=gt(e.firstChild),Ce=t,K=!0,$t=null,dt=!0,a=xc(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(za(),l===n){t=Yt(e,t,a);break e}De(e,t,l,a)}t=t.child}return t;case 26:return si(e,t),e===null?(a=Jf(t.type,null,t.pendingProps,null))?t.memoizedState=a:K||(a=t.type,e=t.pendingProps,l=Mi(Y.current).createElement(a),l[Me]=t,l[Ge]=e,ze(l,a,e),Te(l),t.stateNode=l):t.memoizedState=Jf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ml(t),e===null&&K&&(l=t.stateNode=Kf(t.type,t.pendingProps,Y.current),Ce=t,dt=!0,n=oe,ha(t.type)?(Jo=n,oe=gt(l.firstChild)):oe=n),De(e,t,t.pendingProps.children,a),si(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&K&&((n=l=oe)&&(l=Eh(l,t.type,t.pendingProps,dt),l!==null?(t.stateNode=l,Ce=t,oe=gt(l.firstChild),dt=!1,n=!0):n=!1),n||ea(t)),Ml(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,Xo(n,i)?l=null:u!==null&&Xo(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=Gu(e,t,kd,null,null,a),gn._currentValue=n),si(e,t),De(e,t,l,a),t.child;case 6:return e===null&&K&&((e=a=oe)&&(a=Th(a,t.pendingProps,dt),a!==null?(t.stateNode=a,Ce=t,oe=null,e=!0):e=!1),e||ea(t)),null;case 13:return Br(e,t,a);case 4:return _e(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ha(t,null,l,a):De(e,t,l,a),t.child;case 11:return wr(e,t,t.type,t.pendingProps,a);case 7:return De(e,t,t.pendingProps,a),t.child;case 8:return De(e,t,t.pendingProps.children,a),t.child;case 12:return De(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ta(t,t.type,l.value),De(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Oa(t),n=xe(n),l=l(n),t.flags|=1,De(e,t,l,a),t.child;case 14:return Mr(e,t,t.type,t.pendingProps,a);case 15:return Cr(e,t,t.type,t.pendingProps,a);case 19:return Hr(e,t,a);case 31:return Kd(e,t,a);case 22:return xr(e,t,a,t.pendingProps);case 24:return Oa(t),l=xe(ve),e===null?(n=Ou(),n===null&&(n=ue,i=zu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},Bu(t),ta(t,ve,n)):((e.lanes&a)!==0&&(_u(e,t),Jl(t,null,null,a),Zl()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ta(t,ve,l)):(l=i.cache,ta(t,ve,l),l!==n.cache&&Du(t,[ve],a,!0))),De(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(g(156,t.tag))}function jt(e){e.flags|=4}function po(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(rf())e.flags|=8192;else throw _a=Zn,Nu}else e.flags&=-16777217}function kr(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$f(t))if(rf())e.flags|=8192;else throw _a=Zn,Nu}function ri(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ps():536870912,e.lanes|=t,pl|=t)}function en(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Zd(e,t,a){var l=t.pendingProps;switch(Tu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return se(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ut(ve),ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ll(t)?jt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Mu())),se(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(jt(t),i!==null?(se(t),kr(t,i)):(se(t),po(t,n,null,l,a))):i?i!==e.memoizedState?(jt(t),se(t),kr(t,i)):(se(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&jt(t),se(t),po(t,n,e,l,a)),null;case 27:if(An(t),a=Y.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&jt(t);else{if(!l){if(t.stateNode===null)throw Error(g(166));return se(t),null}e=x.current,ll(t)?pc(t):(e=Kf(n,l,a),t.stateNode=e,jt(t))}return se(t),null;case 5:if(An(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&jt(t);else{if(!l){if(t.stateNode===null)throw Error(g(166));return se(t),null}if(i=x.current,ll(t))pc(t);else{var u=Mi(Y.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[Me]=t,i[Ge]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(ze(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&jt(t)}}return se(t),po(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&jt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(g(166));if(e=Y.current,ll(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ce,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Me]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||_f(e.nodeValue,a)),e||ea(t,!0)}else e=Mi(e).createTextNode(l),e[Me]=t,t.stateNode=e}return se(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=ll(t),a!==null){if(e===null){if(!l)throw Error(g(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(557));e[Me]=t}else za(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;se(t),e=!1}else a=Mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(g(558))}return se(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ll(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(g(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(g(317));n[Me]=t}else za(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;se(t),n=!1}else n=Mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),ri(t,t.updateQueue),se(t),null);case 4:return ge(),e===null&&qo(t.stateNode.containerInfo),se(t),null;case 10:return Ut(t.type),se(t),null;case 19:if(A(pe),l=t.memoizedState,l===null)return se(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)en(l,!1);else{if(de!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Wn(e),i!==null){for(t.flags|=128,en(l,!1),e=i.updateQueue,t.updateQueue=e,ri(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)fc(a,e),a=a.sibling;return w(pe,pe.current&1|2),K&&_t(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Fe()>gi&&(t.flags|=128,n=!0,en(l,!1),t.lanes=4194304)}else{if(!n)if(e=Wn(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,ri(t,e),en(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!K)return se(t),null}else 2*Fe()-l.renderingStartTime>gi&&a!==536870912&&(t.flags|=128,n=!0,en(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Fe(),e.sibling=null,a=pe.current,w(pe,n?a&1|2:a&1),K&&_t(t,l.treeForkCount),e):(se(t),null);case 22:case 23:return at(t),qu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),a=t.updateQueue,a!==null&&ri(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&A(Na),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ut(ve),se(t),null;case 25:return null;case 30:return null}throw Error(g(156,t.tag))}function Jd(e,t){switch(Tu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ut(ve),ge(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return An(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(g(340));za()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(at(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));za()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(pe),null;case 4:return ge(),null;case 10:return Ut(t.type),null;case 22:case 23:return at(t),qu(),e!==null&&A(Na),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ut(ve),null;case 25:return null;default:return null}}function qr(e,t){switch(Tu(t),t.tag){case 3:Ut(ve),ge();break;case 26:case 27:case 5:An(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:A(pe);break;case 10:Ut(t.type);break;case 22:case 23:at(t),qu(),e!==null&&A(Na);break;case 24:Ut(ve)}}function tn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(o){ee(t,t.return,o)}}function oa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,o=u.destroy;if(o!==void 0){u.destroy=void 0,n=t;var s=a,d=o;try{d()}catch(y){ee(n,s,y)}}}l=l.next}while(l!==i)}}catch(y){ee(t,t.return,y)}}function Yr(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{zc(t,a)}catch(l){ee(e,e.return,l)}}}function jr(e,t,a){a.props=ka(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ee(e,t,l)}}function an(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ee(e,t,n)}}function Ct(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ee(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ee(e,t,n)}else a.current=null}function Gr(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ee(e,e.return,n)}}function yo(e,t,a){try{var l=e.stateNode;ph(l,e.type,a,t),l[Ge]=t}catch(n){ee(e,e.return,n)}}function Lr(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ha(e.type)||e.tag===4}function vo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lr(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bo(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ot));else if(l!==4&&(l===27&&ha(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(bo(e,t,a),e=e.sibling;e!==null;)bo(e,t,a),e=e.sibling}function fi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(fi(e,t,a),e=e.sibling;e!==null;)fi(e,t,a),e=e.sibling}function Xr(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ze(t,l,a),t[Me]=e,t[Ge]=a}catch(i){ee(e,e.return,i)}}var Gt=!1,Ae=!1,So=!1,Qr=typeof WeakSet=="function"?WeakSet:Set,we=null;function Id(e,t){if(e=e.containerInfo,Go=Ni,e=ac(e),mu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,o=-1,s=-1,d=0,y=0,S=e,h=null;t:for(;;){for(var p;S!==a||n!==0&&S.nodeType!==3||(o=u+n),S!==i||l!==0&&S.nodeType!==3||(s=u+l),S.nodeType===3&&(u+=S.nodeValue.length),(p=S.firstChild)!==null;)h=S,S=p;for(;;){if(S===e)break t;if(h===a&&++d===n&&(o=u),h===i&&++y===l&&(s=u),(p=S.nextSibling)!==null)break;S=h,h=S.parentNode}S=p}a=o===-1||s===-1?null:{start:o,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lo={focusedElem:e,selectionRange:a},Ni=!1,we=t;we!==null;)if(t=we,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,we=e;else for(;we!==null;){switch(t=we,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var M=ka(a.type,n);e=l.getSnapshotBeforeUpdate(M,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(O){ee(a,a.return,O)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Ko(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ko(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(g(163))}if(e=t.sibling,e!==null){e.return=t.return,we=e;break}we=t.return}}function Kr(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Xt(e,a),l&4&&tn(5,a);break;case 1:if(Xt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){ee(a,a.return,u)}else{var n=ka(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){ee(a,a.return,u)}}l&64&&Yr(a),l&512&&an(a,a.return);break;case 3:if(Xt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{zc(e,t)}catch(u){ee(a,a.return,u)}}break;case 27:t===null&&l&4&&Xr(a);case 26:case 5:Xt(e,a),t===null&&l&4&&Gr(a),l&512&&an(a,a.return);break;case 12:Xt(e,a);break;case 31:Xt(e,a),l&4&&Jr(e,a);break;case 13:Xt(e,a),l&4&&Ir(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=nh.bind(null,a),wh(e,a))));break;case 22:if(l=a.memoizedState!==null||Gt,!l){t=t!==null&&t.memoizedState!==null||Ae,n=Gt;var i=Ae;Gt=l,(Ae=t)&&!i?Qt(e,a,(a.subtreeFlags&8772)!==0):Xt(e,a),Gt=n,Ae=i}break;case 30:break;default:Xt(e,a)}}function Vr(e){var t=e.alternate;t!==null&&(e.alternate=null,Vr(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ii(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var re=null,Xe=!1;function Lt(e,t,a){for(a=a.child;a!==null;)Zr(e,t,a),a=a.sibling}function Zr(e,t,a){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(Cl,a)}catch{}switch(a.tag){case 26:Ae||Ct(a,t),Lt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ae||Ct(a,t);var l=re,n=Xe;ha(a.type)&&(re=a.stateNode,Xe=!1),Lt(e,t,a),mn(a.stateNode),re=l,Xe=n;break;case 5:Ae||Ct(a,t);case 6:if(l=re,n=Xe,re=null,Lt(e,t,a),re=l,Xe=n,re!==null)if(Xe)try{(re.nodeType===9?re.body:re.nodeName==="HTML"?re.ownerDocument.body:re).removeChild(a.stateNode)}catch(i){ee(a,t,i)}else try{re.removeChild(a.stateNode)}catch(i){ee(a,t,i)}break;case 18:re!==null&&(Xe?(e=re,jf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),wl(e)):jf(re,a.stateNode));break;case 4:l=re,n=Xe,re=a.stateNode.containerInfo,Xe=!0,Lt(e,t,a),re=l,Xe=n;break;case 0:case 11:case 14:case 15:oa(2,a,t),Ae||oa(4,a,t),Lt(e,t,a);break;case 1:Ae||(Ct(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&jr(a,t,l)),Lt(e,t,a);break;case 21:Lt(e,t,a);break;case 22:Ae=(l=Ae)||a.memoizedState!==null,Lt(e,t,a),Ae=l;break;default:Lt(e,t,a)}}function Jr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{wl(e)}catch(a){ee(t,t.return,a)}}}function Ir(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wl(e)}catch(a){ee(t,t.return,a)}}function Fd(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qr),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qr),t;default:throw Error(g(435,e.tag))}}function mi(e,t){var a=Fd(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=ih.bind(null,e,l);l.then(n,n)}})}function Qe(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,o=u;e:for(;o!==null;){switch(o.tag){case 27:if(ha(o.type)){re=o.stateNode,Xe=!1;break e}break;case 5:re=o.stateNode,Xe=!1;break e;case 3:case 4:re=o.stateNode.containerInfo,Xe=!0;break e}o=o.return}if(re===null)throw Error(g(160));Zr(i,u,n),re=null,Xe=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fr(t,e),t=t.sibling}var bt=null;function Fr(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qe(t,e),Ke(e),l&4&&(oa(3,e,e.return),tn(3,e),oa(5,e,e.return));break;case 1:Qe(t,e),Ke(e),l&512&&(Ae||a===null||Ct(a,a.return)),l&64&&Gt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=bt;if(Qe(t,e),Ke(e),l&512&&(Ae||a===null||Ct(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[zl]||i[Me]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),ze(i,l,a),i[Me]=e,Te(i),l=i;break e;case"link":var u=Wf("link","href",n).get(l+(a.href||""));if(u){for(var o=0;o<u.length;o++)if(i=u[o],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(o,1);break t}}i=n.createElement(l),ze(i,l,a),n.head.appendChild(i);break;case"meta":if(u=Wf("meta","content",n).get(l+(a.content||""))){for(o=0;o<u.length;o++)if(i=u[o],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(o,1);break t}}i=n.createElement(l),ze(i,l,a),n.head.appendChild(i);break;default:throw Error(g(468,l))}i[Me]=e,Te(i),l=i}e.stateNode=l}else Pf(n,e.type,e.stateNode);else e.stateNode=Ff(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Pf(n,e.type,e.stateNode):Ff(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&yo(e,e.memoizedProps,a.memoizedProps)}break;case 27:Qe(t,e),Ke(e),l&512&&(Ae||a===null||Ct(a,a.return)),a!==null&&l&4&&yo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Qe(t,e),Ke(e),l&512&&(Ae||a===null||Ct(a,a.return)),e.flags&32){n=e.stateNode;try{Za(n,"")}catch(M){ee(e,e.return,M)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,yo(e,n,a!==null?a.memoizedProps:n)),l&1024&&(So=!0);break;case 6:if(Qe(t,e),Ke(e),l&4){if(e.stateNode===null)throw Error(g(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(M){ee(e,e.return,M)}}break;case 3:if(Di=null,n=bt,bt=Ci(t.containerInfo),Qe(t,e),bt=n,Ke(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{wl(t.containerInfo)}catch(M){ee(e,e.return,M)}So&&(So=!1,Wr(e));break;case 4:l=bt,bt=Ci(e.stateNode.containerInfo),Qe(t,e),Ke(e),bt=l;break;case 12:Qe(t,e),Ke(e);break;case 31:Qe(t,e),Ke(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mi(e,l)));break;case 13:Qe(t,e),Ke(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(hi=Fe()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mi(e,l)));break;case 22:n=e.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,d=Gt,y=Ae;if(Gt=d||n,Ae=y||s,Qe(t,e),Ae=y,Gt=d,Ke(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||s||Gt||Ae||qa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){s=a=t;try{if(i=s.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{o=s.stateNode;var S=s.memoizedProps.style,h=S!=null&&S.hasOwnProperty("display")?S.display:null;o.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(M){ee(s,s.return,M)}}}else if(t.tag===6){if(a===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(M){ee(s,s.return,M)}}}else if(t.tag===18){if(a===null){s=t;try{var p=s.stateNode;n?Gf(p,!0):Gf(s.stateNode,!1)}catch(M){ee(s,s.return,M)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,mi(e,a))));break;case 19:Qe(t,e),Ke(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mi(e,l)));break;case 30:break;case 21:break;default:Qe(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Lr(l)){a=l;break}l=l.return}if(a==null)throw Error(g(160));switch(a.tag){case 27:var n=a.stateNode,i=vo(e);fi(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(Za(u,""),a.flags&=-33);var o=vo(e);fi(e,o,u);break;case 3:case 4:var s=a.stateNode.containerInfo,d=vo(e);bo(e,d,s);break;default:throw Error(g(161))}}catch(y){ee(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wr(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Wr(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Xt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Kr(e,t.alternate,t),t=t.sibling}function qa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:oa(4,t,t.return),qa(t);break;case 1:Ct(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&jr(t,t.return,a),qa(t);break;case 27:mn(t.stateNode);case 26:case 5:Ct(t,t.return),qa(t);break;case 22:t.memoizedState===null&&qa(t);break;case 30:qa(t);break;default:qa(t)}e=e.sibling}}function Qt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Qt(n,i,a),tn(4,i);break;case 1:if(Qt(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(d){ee(l,l.return,d)}if(l=i,n=l.updateQueue,n!==null){var o=l.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Dc(s[n],o)}catch(d){ee(l,l.return,d)}}a&&u&64&&Yr(i),an(i,i.return);break;case 27:Xr(i);case 26:case 5:Qt(n,i,a),a&&l===null&&u&4&&Gr(i),an(i,i.return);break;case 12:Qt(n,i,a);break;case 31:Qt(n,i,a),a&&u&4&&Jr(n,i);break;case 13:Qt(n,i,a),a&&u&4&&Ir(n,i);break;case 22:i.memoizedState===null&&Qt(n,i,a),an(i,i.return);break;case 30:break;default:Qt(n,i,a)}t=t.sibling}}function Ao(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ll(a))}function Eo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ll(e))}function St(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Pr(e,t,a,l),t=t.sibling}function Pr(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:St(e,t,a,l),n&2048&&tn(9,t);break;case 1:St(e,t,a,l);break;case 3:St(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ll(e)));break;case 12:if(n&2048){St(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,o=i.onPostCommit;typeof o=="function"&&o(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){ee(t,t.return,s)}}else St(e,t,a,l);break;case 31:St(e,t,a,l);break;case 13:St(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?St(e,t,a,l):ln(e,t):i._visibility&2?St(e,t,a,l):(i._visibility|=2,dl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Ao(u,t);break;case 24:St(e,t,a,l),n&2048&&Eo(t.alternate,t);break;default:St(e,t,a,l)}}function dl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,o=a,s=l,d=u.flags;switch(u.tag){case 0:case 11:case 15:dl(i,u,o,s,n),tn(8,u);break;case 23:break;case 22:var y=u.stateNode;u.memoizedState!==null?y._visibility&2?dl(i,u,o,s,n):ln(i,u):(y._visibility|=2,dl(i,u,o,s,n)),n&&d&2048&&Ao(u.alternate,u);break;case 24:dl(i,u,o,s,n),n&&d&2048&&Eo(u.alternate,u);break;default:dl(i,u,o,s,n)}t=t.sibling}}function ln(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:ln(a,l),n&2048&&Ao(l.alternate,l);break;case 24:ln(a,l),n&2048&&Eo(l.alternate,l);break;default:ln(a,l)}t=t.sibling}}var nn=8192;function hl(e,t,a){if(e.subtreeFlags&nn)for(e=e.child;e!==null;)$r(e,t,a),e=e.sibling}function $r(e,t,a){switch(e.tag){case 26:hl(e,t,a),e.flags&nn&&e.memoizedState!==null&&Uh(a,bt,e.memoizedState,e.memoizedProps);break;case 5:hl(e,t,a);break;case 3:case 4:var l=bt;bt=Ci(e.stateNode.containerInfo),hl(e,t,a),bt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=nn,nn=16777216,hl(e,t,a),nn=l):hl(e,t,a));break;default:hl(e,t,a)}}function ef(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function un(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];we=l,af(l,e)}ef(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tf(e),e=e.sibling}function tf(e){switch(e.tag){case 0:case 11:case 15:un(e),e.flags&2048&&oa(9,e,e.return);break;case 3:un(e);break;case 12:un(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,di(e)):un(e);break;default:un(e)}}function di(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];we=l,af(l,e)}ef(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:oa(8,t,t.return),di(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,di(t));break;default:di(t)}e=e.sibling}}function af(e,t){for(;we!==null;){var a=we;switch(a.tag){case 0:case 11:case 15:oa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ll(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,we=l;else e:for(a=e;we!==null;){l=we;var n=l.sibling,i=l.return;if(Vr(l),l===a){we=null;break e}if(n!==null){n.return=i,we=n;break e}we=i}}}var Wd={getCacheForType:function(e){var t=xe(ve),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return xe(ve).controller.signal}},Pd=typeof WeakMap=="function"?WeakMap:Map,I=0,ue=null,j=null,L=0,$=0,lt=null,sa=!1,gl=!1,To=!1,Kt=0,de=0,ca=0,Ya=0,wo=0,nt=0,pl=0,on=null,Ve=null,Mo=!1,hi=0,lf=0,gi=1/0,pi=null,ra=null,Ee=0,fa=null,yl=null,Vt=0,Co=0,xo=null,nf=null,sn=0,Do=null;function it(){return(I&2)!==0&&L!==0?L&-L:v.T!==null?_o():Ss()}function uf(){if(nt===0)if((L&536870912)===0||K){var e=wn;wn<<=1,(wn&3932160)===0&&(wn=262144),nt=e}else nt=536870912;return e=tt.current,e!==null&&(e.flags|=32),nt}function Ze(e,t,a){(e===ue&&($===2||$===9)||e.cancelPendingCommit!==null)&&(vl(e,0),ma(e,L,nt,!1)),Dl(e,a),((I&2)===0||e!==ue)&&(e===ue&&((I&2)===0&&(Ya|=a),de===4&&ma(e,L,nt,!1)),xt(e))}function of(e,t,a){if((I&6)!==0)throw Error(g(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||xl(e,t),n=l?th(e,t):Ro(e,t,!0),i=l;do{if(n===0){gl&&!l&&ma(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!$d(a)){n=Ro(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var o=e;n=on;var s=o.current.memoizedState.isDehydrated;if(s&&(vl(o,u).flags|=256),u=Ro(o,u,!1),u!==2){if(To&&!s){o.errorRecoveryDisabledLanes|=i,Ya|=i,n=4;break e}i=Ve,Ve=n,i!==null&&(Ve===null?Ve=i:Ve.push.apply(Ve,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){vl(e,0),ma(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(g(345));case 4:if((t&4194048)!==t)break;case 6:ma(l,t,nt,!sa);break e;case 2:Ve=null;break;case 3:case 5:break;default:throw Error(g(329))}if((t&62914560)===t&&(n=hi+300-Fe(),10<n)){if(ma(l,t,nt,!sa),Cn(l,0,!0)!==0)break e;Vt=t,l.timeoutHandle=qf(sf.bind(null,l,a,Ve,pi,Mo,t,nt,Ya,pl,sa,i,"Throttled",-0,0),n);break e}sf(l,a,Ve,pi,Mo,t,nt,Ya,pl,sa,i,null,-0,0)}}break}while(!0);xt(e)}function sf(e,t,a,l,n,i,u,o,s,d,y,S,h,p){if(e.timeoutHandle=-1,S=t.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ot},$r(t,i,S);var M=(i&62914560)===i?hi-Fe():(i&4194048)===i?lf-Fe():0;if(M=kh(S,M),M!==null){Vt=i,e.cancelPendingCommit=M(pf.bind(null,e,t,i,a,l,n,u,o,s,y,S,null,h,p)),ma(e,i,u,!d);return}}pf(e,t,i,a,l,n,u,o,s)}function $d(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!$e(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ma(e,t,a,l){t&=~wo,t&=~Ya,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-Pe(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&ys(e,a,t)}function yi(){return(I&6)===0?(cn(0),!1):!0}function zo(){if(j!==null){if($===0)var e=j.return;else e=j,Ht=Ra=null,Qu(e),sl=null,Ql=0,e=j;for(;e!==null;)qr(e.alternate,e),e=e.return;j=null}}function vl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,bh(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Vt=0,zo(),ue=e,j=a=Bt(e.current,null),L=t,$=0,lt=null,sa=!1,gl=xl(e,t),To=!1,pl=nt=wo=Ya=ca=de=0,Ve=on=null,Mo=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-Pe(l),i=1<<n;t|=e[n],l&=~i}return Kt=t,qn(),a}function cf(e,t){k=null,v.H=Pl,t===ol||t===Vn?(t=wc(),$=3):t===Nu?(t=wc(),$=4):$=t===uo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,lt=t,j===null&&(de=1,ui(e,rt(t,e.current)))}function rf(){var e=tt.current;return e===null?!0:(L&4194048)===L?ht===null:(L&62914560)===L||(L&536870912)!==0?e===ht:!1}function ff(){var e=v.H;return v.H=Pl,e===null?Pl:e}function mf(){var e=v.A;return v.A=Wd,e}function vi(){de=4,sa||(L&4194048)!==L&&tt.current!==null||(gl=!0),(ca&134217727)===0&&(Ya&134217727)===0||ue===null||ma(ue,L,nt,!1)}function Ro(e,t,a){var l=I;I|=2;var n=ff(),i=mf();(ue!==e||L!==t)&&(pi=null,vl(e,t)),t=!1;var u=de;e:do try{if($!==0&&j!==null){var o=j,s=lt;switch($){case 8:zo(),u=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var d=$;if($=0,lt=null,bl(e,o,s,d),a&&gl){u=0;break e}break;default:d=$,$=0,lt=null,bl(e,o,s,d)}}eh(),u=de;break}catch(y){cf(e,y)}while(!0);return t&&e.shellSuspendCounter++,Ht=Ra=null,I=l,v.H=n,v.A=i,j===null&&(ue=null,L=0,qn()),u}function eh(){for(;j!==null;)df(j)}function th(e,t){var a=I;I|=2;var l=ff(),n=mf();ue!==e||L!==t?(pi=null,gi=Fe()+500,vl(e,t)):gl=xl(e,t);e:do try{if($!==0&&j!==null){t=j;var i=lt;t:switch($){case 1:$=0,lt=null,bl(e,t,i,1);break;case 2:case 9:if(Ec(i)){$=0,lt=null,hf(t);break}t=function(){$!==2&&$!==9||ue!==e||($=7),xt(e)},i.then(t,t);break e;case 3:$=7;break e;case 4:$=5;break e;case 7:Ec(i)?($=0,lt=null,hf(t)):($=0,lt=null,bl(e,t,i,7));break;case 5:var u=null;switch(j.tag){case 26:u=j.memoizedState;case 5:case 27:var o=j;if(u?$f(u):o.stateNode.complete){$=0,lt=null;var s=o.sibling;if(s!==null)j=s;else{var d=o.return;d!==null?(j=d,bi(d)):j=null}break t}}$=0,lt=null,bl(e,t,i,5);break;case 6:$=0,lt=null,bl(e,t,i,6);break;case 8:zo(),de=6;break e;default:throw Error(g(462))}}ah();break}catch(y){cf(e,y)}while(!0);return Ht=Ra=null,v.H=l,v.A=n,I=a,j!==null?0:(ue=null,L=0,qn(),de)}function ah(){for(;j!==null&&!Mm();)df(j)}function df(e){var t=Ur(e.alternate,e,Kt);e.memoizedProps=e.pendingProps,t===null?bi(e):j=t}function hf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Rr(a,t,t.pendingProps,t.type,void 0,L);break;case 11:t=Rr(a,t,t.pendingProps,t.type.render,t.ref,L);break;case 5:Qu(t);default:qr(a,t),t=j=fc(t,Kt),t=Ur(a,t,Kt)}e.memoizedProps=e.pendingProps,t===null?bi(e):j=t}function bl(e,t,a,l){Ht=Ra=null,Qu(t),sl=null,Ql=0;var n=t.return;try{if(Qd(e,n,t,a,L)){de=1,ui(e,rt(a,e.current)),j=null;return}}catch(i){if(n!==null)throw j=n,i;de=1,ui(e,rt(a,e.current)),j=null;return}t.flags&32768?(K||l===1?e=!0:gl||(L&536870912)!==0?e=!1:(sa=e=!0,(l===2||l===9||l===3||l===6)&&(l=tt.current,l!==null&&l.tag===13&&(l.flags|=16384))),gf(t,e)):bi(t)}function bi(e){var t=e;do{if((t.flags&32768)!==0){gf(t,sa);return}e=t.return;var a=Zd(t.alternate,t,Kt);if(a!==null){j=a;return}if(t=t.sibling,t!==null){j=t;return}j=t=e}while(t!==null);de===0&&(de=5)}function gf(e,t){do{var a=Jd(e.alternate,e);if(a!==null){a.flags&=32767,j=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){j=e;return}j=e=a}while(e!==null);de=6,j=null}function pf(e,t,a,l,n,i,u,o,s){e.cancelPendingCommit=null;do Si();while(Ee!==0);if((I&6)!==0)throw Error(g(327));if(t!==null){if(t===e.current)throw Error(g(177));if(i=t.lanes|t.childLanes,i|=yu,Hm(e,a,i,u,o,s),e===ue&&(j=ue=null,L=0),yl=t,fa=e,Vt=a,Co=i,xo=n,nf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,uh(En,function(){return Af(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=v.T,v.T=null,n=T.p,T.p=2,u=I,I|=4;try{Id(e,t,a)}finally{I=u,T.p=n,v.T=l}}Ee=1,yf(),vf(),bf()}}function yf(){if(Ee===1){Ee=0;var e=fa,t=yl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=v.T,v.T=null;var l=T.p;T.p=2;var n=I;I|=4;try{Fr(t,e);var i=Lo,u=ac(e.containerInfo),o=i.focusedElem,s=i.selectionRange;if(u!==o&&o&&o.ownerDocument&&tc(o.ownerDocument.documentElement,o)){if(s!==null&&mu(o)){var d=s.start,y=s.end;if(y===void 0&&(y=d),"selectionStart"in o)o.selectionStart=d,o.selectionEnd=Math.min(y,o.value.length);else{var S=o.ownerDocument||document,h=S&&S.defaultView||window;if(h.getSelection){var p=h.getSelection(),M=o.textContent.length,O=Math.min(s.start,M),ne=s.end===void 0?O:Math.min(s.end,M);!p.extend&&O>ne&&(u=ne,ne=O,O=u);var f=ec(o,O),c=ec(o,ne);if(f&&c&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==c.node||p.focusOffset!==c.offset)){var m=S.createRange();m.setStart(f.node,f.offset),p.removeAllRanges(),O>ne?(p.addRange(m),p.extend(c.node,c.offset)):(m.setEnd(c.node,c.offset),p.addRange(m))}}}}for(S=[],p=o;p=p.parentNode;)p.nodeType===1&&S.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<S.length;o++){var b=S[o];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Ni=!!Go,Lo=Go=null}finally{I=n,T.p=l,v.T=a}}e.current=t,Ee=2}}function vf(){if(Ee===2){Ee=0;var e=fa,t=yl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=v.T,v.T=null;var l=T.p;T.p=2;var n=I;I|=4;try{Kr(e,t.alternate,t)}finally{I=n,T.p=l,v.T=a}}Ee=3}}function bf(){if(Ee===4||Ee===3){Ee=0,Cm();var e=fa,t=yl,a=Vt,l=nf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ee=5:(Ee=0,yl=fa=null,Sf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ra=null),Zi(a),t=t.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(Cl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=v.T,n=T.p,T.p=2,v.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var o=l[u];i(o.value,{componentStack:o.stack})}}finally{v.T=t,T.p=n}}(Vt&3)!==0&&Si(),xt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Do?sn++:(sn=0,Do=e):sn=0,cn(0)}}function Sf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ll(t)))}function Si(){return yf(),vf(),bf(),Af()}function Af(){if(Ee!==5)return!1;var e=fa,t=Co;Co=0;var a=Zi(Vt),l=v.T,n=T.p;try{T.p=32>a?32:a,v.T=null,a=xo,xo=null;var i=fa,u=Vt;if(Ee=0,yl=fa=null,Vt=0,(I&6)!==0)throw Error(g(331));var o=I;if(I|=4,tf(i.current),Pr(i,i.current,u,a),I=o,cn(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(Cl,i)}catch{}return!0}finally{T.p=n,v.T=l,Sf(e,t)}}function Ef(e,t,a){t=rt(a,t),t=io(e.stateNode,t,2),e=na(e,t,2),e!==null&&(Dl(e,2),xt(e))}function ee(e,t,a){if(e.tag===3)Ef(e,e,a);else for(;t!==null;){if(t.tag===3){Ef(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ra===null||!ra.has(l))){e=rt(a,e),a=Er(2),l=na(t,a,2),l!==null&&(Tr(a,l,t,e),Dl(l,2),xt(l));break}}t=t.return}}function Oo(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Pd;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(To=!0,n.add(a),e=lh.bind(null,e,t,a),t.then(e,e))}function lh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ue===e&&(L&a)===a&&(de===4||de===3&&(L&62914560)===L&&300>Fe()-hi?(I&2)===0&&vl(e,0):wo|=a,pl===L&&(pl=0)),xt(e)}function Tf(e,t){t===0&&(t=ps()),e=xa(e,t),e!==null&&(Dl(e,t),xt(e))}function nh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Tf(e,a)}function ih(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(g(314))}l!==null&&l.delete(t),Tf(e,a)}function uh(e,t){return Xi(e,t)}var Ai=null,Sl=null,No=!1,Ei=!1,Bo=!1,da=0;function xt(e){e!==Sl&&e.next===null&&(Sl===null?Ai=Sl=e:Sl=Sl.next=e),Ei=!0,No||(No=!0,sh())}function cn(e,t){if(!Bo&&Ei){Bo=!0;do for(var a=!1,l=Ai;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,o=l.pingedLanes;i=(1<<31-Pe(42|e)+1)-1,i&=n&~(u&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,xf(l,i))}else i=L,i=Cn(l,l===ue?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||xl(l,i)||(a=!0,xf(l,i));l=l.next}while(a);Bo=!1}}function oh(){wf()}function wf(){Ei=No=!1;var e=0;da!==0&&vh()&&(e=da);for(var t=Fe(),a=null,l=Ai;l!==null;){var n=l.next,i=Mf(l,t);i===0?(l.next=null,a===null?Ai=n:a.next=n,n===null&&(Sl=a)):(a=l,(e!==0||(i&3)!==0)&&(Ei=!0)),l=n}Ee!==0&&Ee!==5||cn(e),da!==0&&(da=0)}function Mf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-Pe(i),o=1<<u,s=n[u];s===-1?((o&a)===0||(o&l)!==0)&&(n[u]=_m(o,t)):s<=t&&(e.expiredLanes|=o),i&=~o}if(t=ue,a=L,a=Cn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&($===2||$===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Qi(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||xl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Qi(l),Zi(a)){case 2:case 8:a=hs;break;case 32:a=En;break;case 268435456:a=gs;break;default:a=En}return l=Cf.bind(null,e),a=Xi(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Qi(l),e.callbackPriority=2,e.callbackNode=null,2}function Cf(e,t){if(Ee!==0&&Ee!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Si()&&e.callbackNode!==a)return null;var l=L;return l=Cn(e,e===ue?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(of(e,l,t),Mf(e,Fe()),e.callbackNode!=null&&e.callbackNode===a?Cf.bind(null,e):null)}function xf(e,t){if(Si())return null;of(e,t,!0)}function sh(){Sh(function(){(I&6)!==0?Xi(ds,oh):wf()})}function _o(){if(da===0){var e=il;e===0&&(e=Tn,Tn<<=1,(Tn&261888)===0&&(Tn=256)),da=e}return da}function Df(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Rn(""+e)}function zf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function ch(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Df((n[Ge]||null).action),u=l.submitter;u&&(t=(t=u[Ge]||null)?Df(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var o=new _n("action","action",null,l,n);e.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(da!==0){var s=u?zf(n,u):new FormData(n);$u(a,{pending:!0,data:s,method:n.method,action:i},null,s)}}else typeof i=="function"&&(o.preventDefault(),s=u?zf(n,u):new FormData(n),$u(a,{pending:!0,data:s,method:n.method,action:i},i,s))},currentTarget:n}]})}}for(var Ho=0;Ho<pu.length;Ho++){var Uo=pu[Ho],rh=Uo.toLowerCase(),fh=Uo[0].toUpperCase()+Uo.slice(1);vt(rh,"on"+fh)}vt(ic,"onAnimationEnd"),vt(uc,"onAnimationIteration"),vt(oc,"onAnimationStart"),vt("dblclick","onDoubleClick"),vt("focusin","onFocus"),vt("focusout","onBlur"),vt(xd,"onTransitionRun"),vt(Dd,"onTransitionStart"),vt(zd,"onTransitionCancel"),vt(sc,"onTransitionEnd"),Ka("onMouseEnter",["mouseout","mouseover"]),Ka("onMouseLeave",["mouseout","mouseover"]),Ka("onPointerEnter",["pointerout","pointerover"]),Ka("onPointerLeave",["pointerout","pointerover"]),Ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ta("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rn));function Rf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var o=l[u],s=o.instance,d=o.currentTarget;if(o=o.listener,s!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=d;try{i(n)}catch(y){kn(y)}n.currentTarget=null,i=s}else for(u=0;u<l.length;u++){if(o=l[u],s=o.instance,d=o.currentTarget,o=o.listener,s!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=d;try{i(n)}catch(y){kn(y)}n.currentTarget=null,i=s}}}}function G(e,t){var a=t[Ji];a===void 0&&(a=t[Ji]=new Set);var l=e+"__bubble";a.has(l)||(Of(t,e,2,!1),a.add(l))}function ko(e,t,a){var l=0;t&&(l|=4),Of(a,e,l,t)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function qo(e){if(!e[Ti]){e[Ti]=!0,Ts.forEach(function(a){a!=="selectionchange"&&(mh.has(a)||ko(a,!1,e),ko(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ti]||(t[Ti]=!0,ko("selectionchange",!1,t))}}function Of(e,t,a,l){switch(um(t)){case 2:var n=jh;break;case 8:n=Gh;break;default:n=$o}a=n.bind(null,t,a,e),n=void 0,!lu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Yo(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var o=l.stateNode.containerInfo;if(o===n)break;if(u===4)for(u=l.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;o!==null;){if(u=La(o),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){l=i=u;continue e}o=o.parentNode}}l=l.return}Hs(function(){var d=i,y=tu(a),S=[];e:{var h=cc.get(e);if(h!==void 0){var p=_n,M=e;switch(e){case"keypress":if(Nn(a)===0)break e;case"keydown":case"keyup":p=id;break;case"focusin":M="focus",p=ou;break;case"focusout":M="blur",p=ou;break;case"beforeblur":case"afterblur":p=ou;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Zm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=sd;break;case ic:case uc:case oc:p=Fm;break;case sc:p=rd;break;case"scroll":case"scrollend":p=Km;break;case"wheel":p=md;break;case"copy":case"cut":case"paste":p=Pm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=js;break;case"toggle":case"beforetoggle":p=hd}var O=(t&4)!==0,ne=!O&&(e==="scroll"||e==="scrollend"),f=O?h!==null?h+"Capture":null:h;O=[];for(var c=d,m;c!==null;){var b=c;if(m=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||m===null||f===null||(b=Ol(c,f),b!=null&&O.push(fn(c,b,m))),ne)break;c=c.return}0<O.length&&(h=new p(h,M,null,a,y),S.push({event:h,listeners:O}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&a!==eu&&(M=a.relatedTarget||a.fromElement)&&(La(M)||M[Ga]))break e;if((p||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,p?(M=a.relatedTarget||a.toElement,p=d,M=M?La(M):null,M!==null&&(ne=J(M),O=M.tag,M!==ne||O!==5&&O!==27&&O!==6)&&(M=null)):(p=null,M=d),p!==M)){if(O=qs,b="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(O=js,b="onPointerLeave",f="onPointerEnter",c="pointer"),ne=p==null?h:Rl(p),m=M==null?h:Rl(M),h=new O(b,c+"leave",p,a,y),h.target=ne,h.relatedTarget=m,b=null,La(y)===d&&(O=new O(f,c+"enter",M,a,y),O.target=m,O.relatedTarget=ne,b=O),ne=b,p&&M)t:{for(O=dh,f=p,c=M,m=0,b=f;b;b=O(b))m++;b=0;for(var z=c;z;z=O(z))b++;for(;0<m-b;)f=O(f),m--;for(;0<b-m;)c=O(c),b--;for(;m--;){if(f===c||c!==null&&f===c.alternate){O=f;break t}f=O(f),c=O(c)}O=null}else O=null;p!==null&&Nf(S,h,p,O,!1),M!==null&&ne!==null&&Nf(S,ne,M,O,!0)}}e:{if(h=d?Rl(d):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var V=Js;else if(Vs(h))if(Is)V=wd;else{V=Ed;var D=Ad}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?d&&$i(d.elementType)&&(V=Js):V=Td;if(V&&(V=V(e,d))){Zs(S,V,a,y);break e}D&&D(e,h,d),e==="focusout"&&d&&h.type==="number"&&d.memoizedProps.value!=null&&Pi(h,"number",h.value)}switch(D=d?Rl(d):window,e){case"focusin":(Vs(D)||D.contentEditable==="true")&&(Wa=D,du=d,Yl=null);break;case"focusout":Yl=du=Wa=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,lc(S,a,y);break;case"selectionchange":if(Cd)break;case"keydown":case"keyup":lc(S,a,y)}var q;if(cu)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Fa?Qs(e,a)&&(X="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(X="onCompositionStart");X&&(Gs&&a.locale!=="ko"&&(Fa||X!=="onCompositionStart"?X==="onCompositionEnd"&&Fa&&(q=Us()):(Wt=y,nu="value"in Wt?Wt.value:Wt.textContent,Fa=!0)),D=wi(d,X),0<D.length&&(X=new Ys(X,e,null,a,y),S.push({event:X,listeners:D}),q?X.data=q:(q=Ks(a),q!==null&&(X.data=q)))),(q=pd?yd(e,a):vd(e,a))&&(X=wi(d,"onBeforeInput"),0<X.length&&(D=new Ys("onBeforeInput","beforeinput",null,a,y),S.push({event:D,listeners:X}),D.data=q)),ch(S,e,d,a,y)}Rf(S,t)})}function fn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function wi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ol(e,a),n!=null&&l.unshift(fn(e,n,i)),n=Ol(e,t),n!=null&&l.push(fn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function dh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Nf(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var o=a,s=o.alternate,d=o.stateNode;if(o=o.tag,s!==null&&s===l)break;o!==5&&o!==26&&o!==27||d===null||(s=d,n?(d=Ol(a,i),d!=null&&u.unshift(fn(a,d,s))):n||(d=Ol(a,i),d!=null&&u.push(fn(a,d,s)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var hh=/\r\n?/g,gh=/\u0000|\uFFFD/g;function Bf(e){return(typeof e=="string"?e:""+e).replace(hh,`
`).replace(gh,"")}function _f(e,t){return t=Bf(t),Bf(e)===t}function le(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Za(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Za(e,""+l);break;case"className":Dn(e,"class",l);break;case"tabIndex":Dn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Dn(e,a,l);break;case"style":Bs(e,l,i);break;case"data":if(t!=="object"){Dn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Rn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&le(e,t,"name",n.name,n,null),le(e,t,"formEncType",n.formEncType,n,null),le(e,t,"formMethod",n.formMethod,n,null),le(e,t,"formTarget",n.formTarget,n,null)):(le(e,t,"encType",n.encType,n,null),le(e,t,"method",n.method,n,null),le(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Rn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Ot);break;case"onScroll":l!=null&&G("scroll",e);break;case"onScrollEnd":l!=null&&G("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(g(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(g(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Rn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":G("beforetoggle",e),G("toggle",e),xn(e,"popover",l);break;case"xlinkActuate":Rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Rt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Rt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Rt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Rt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":xn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xm.get(a)||a,xn(e,a,l))}}function jo(e,t,a,l,n,i){switch(a){case"style":Bs(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(g(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(g(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Za(e,l):(typeof l=="number"||typeof l=="bigint")&&Za(e,""+l);break;case"onScroll":l!=null&&G("scroll",e);break;case"onScrollEnd":l!=null&&G("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ot);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ws.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Ge]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):xn(e,a,l)}}}function ze(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":G("error",e),G("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:le(e,t,i,u,a,null)}}n&&le(e,t,"srcSet",a.srcSet,a,null),l&&le(e,t,"src",a.src,a,null);return;case"input":G("invalid",e);var o=i=u=n=null,s=null,d=null;for(l in a)if(a.hasOwnProperty(l)){var y=a[l];if(y!=null)switch(l){case"name":n=y;break;case"type":u=y;break;case"checked":s=y;break;case"defaultChecked":d=y;break;case"value":i=y;break;case"defaultValue":o=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(g(137,t));break;default:le(e,t,l,y,a,null)}}zs(e,i,o,s,d,u,n,!1);return;case"select":G("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(o=a[n],o!=null))switch(n){case"value":i=o;break;case"defaultValue":u=o;break;case"multiple":l=o;default:le(e,t,n,o,a,null)}t=i,a=u,e.multiple=!!l,t!=null?Va(e,!!l,t,!1):a!=null&&Va(e,!!l,a,!0);return;case"textarea":G("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(o=a[u],o!=null))switch(u){case"value":l=o;break;case"defaultValue":n=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(g(91));break;default:le(e,t,u,o,a,null)}Os(e,l,n,i);return;case"option":for(s in a)if(a.hasOwnProperty(s)&&(l=a[s],l!=null))switch(s){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:le(e,t,s,l,a,null)}return;case"dialog":G("beforetoggle",e),G("toggle",e),G("cancel",e),G("close",e);break;case"iframe":case"object":G("load",e);break;case"video":case"audio":for(l=0;l<rn.length;l++)G(rn[l],e);break;case"image":G("error",e),G("load",e);break;case"details":G("toggle",e);break;case"embed":case"source":case"link":G("error",e),G("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in a)if(a.hasOwnProperty(d)&&(l=a[d],l!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:le(e,t,d,l,a,null)}return;default:if($i(t)){for(y in a)a.hasOwnProperty(y)&&(l=a[y],l!==void 0&&jo(e,t,y,l,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(l=a[o],l!=null&&le(e,t,o,l,a,null))}function ph(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,o=null,s=null,d=null,y=null;for(p in a){var S=a[p];if(a.hasOwnProperty(p)&&S!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":s=S;default:l.hasOwnProperty(p)||le(e,t,p,null,l,S)}}for(var h in l){var p=l[h];if(S=a[h],l.hasOwnProperty(h)&&(p!=null||S!=null))switch(h){case"type":i=p;break;case"name":n=p;break;case"checked":d=p;break;case"defaultChecked":y=p;break;case"value":u=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(g(137,t));break;default:p!==S&&le(e,t,h,p,l,S)}}Wi(e,u,o,s,d,y,i,n);return;case"select":p=u=o=h=null;for(i in a)if(s=a[i],a.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":p=s;default:l.hasOwnProperty(i)||le(e,t,i,null,l,s)}for(n in l)if(i=l[n],s=a[n],l.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":h=i;break;case"defaultValue":o=i;break;case"multiple":u=i;default:i!==s&&le(e,t,n,i,l,s)}t=o,a=u,l=p,h!=null?Va(e,!!a,h,!1):!!l!=!!a&&(t!=null?Va(e,!!a,t,!0):Va(e,!!a,a?[]:"",!1));return;case"textarea":p=h=null;for(o in a)if(n=a[o],a.hasOwnProperty(o)&&n!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:le(e,t,o,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":h=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(g(91));break;default:n!==i&&le(e,t,u,n,l,i)}Rs(e,h,p);return;case"option":for(var M in a)if(h=a[M],a.hasOwnProperty(M)&&h!=null&&!l.hasOwnProperty(M))switch(M){case"selected":e.selected=!1;break;default:le(e,t,M,null,l,h)}for(s in l)if(h=l[s],p=a[s],l.hasOwnProperty(s)&&h!==p&&(h!=null||p!=null))switch(s){case"selected":e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:le(e,t,s,h,l,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var O in a)h=a[O],a.hasOwnProperty(O)&&h!=null&&!l.hasOwnProperty(O)&&le(e,t,O,null,l,h);for(d in l)if(h=l[d],p=a[d],l.hasOwnProperty(d)&&h!==p&&(h!=null||p!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(g(137,t));break;default:le(e,t,d,h,l,p)}return;default:if($i(t)){for(var ne in a)h=a[ne],a.hasOwnProperty(ne)&&h!==void 0&&!l.hasOwnProperty(ne)&&jo(e,t,ne,void 0,l,h);for(y in l)h=l[y],p=a[y],!l.hasOwnProperty(y)||h===p||h===void 0&&p===void 0||jo(e,t,y,h,l,p);return}}for(var f in a)h=a[f],a.hasOwnProperty(f)&&h!=null&&!l.hasOwnProperty(f)&&le(e,t,f,null,l,h);for(S in l)h=l[S],p=a[S],!l.hasOwnProperty(S)||h===p||h==null&&p==null||le(e,t,S,h,l,p)}function Hf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,o=n.duration;if(i&&o&&Hf(u)){for(u=0,o=n.responseEnd,l+=1;l<a.length;l++){var s=a[l],d=s.startTime;if(d>o)break;var y=s.transferSize,S=s.initiatorType;y&&Hf(S)&&(s=s.responseEnd,u+=y*(s<o?1:(o-d)/(s-d)))}if(--l,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Go=null,Lo=null;function Mi(e){return e.nodeType===9?e:e.ownerDocument}function Uf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Xo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qo=null;function vh(){var e=window.event;return e&&e.type==="popstate"?e===Qo?!1:(Qo=e,!0):(Qo=null,!1)}var qf=typeof setTimeout=="function"?setTimeout:void 0,bh=typeof clearTimeout=="function"?clearTimeout:void 0,Yf=typeof Promise=="function"?Promise:void 0,Sh=typeof queueMicrotask=="function"?queueMicrotask:typeof Yf<"u"?function(e){return Yf.resolve(null).then(e).catch(Ah)}:qf;function Ah(e){setTimeout(function(){throw e})}function ha(e){return e==="head"}function jf(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),wl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")mn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,mn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,o=i.nodeName;i[zl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&mn(e.ownerDocument.body);a=n}while(a);wl(t)}function Gf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Ko(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ko(a),Ii(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Eh(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[zl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=gt(e.nextSibling),e===null)break}return null}function Th(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gt(e.nextSibling),e===null))return null;return e}function Lf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=gt(e.nextSibling),e===null))return null;return e}function Vo(e){return e.data==="$?"||e.data==="$~"}function Zo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function wh(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Jo=null;function Xf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return gt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Qf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Kf(e,t,a){switch(t=Mi(a),e){case"html":if(e=t.documentElement,!e)throw Error(g(452));return e;case"head":if(e=t.head,!e)throw Error(g(453));return e;case"body":if(e=t.body,!e)throw Error(g(454));return e;default:throw Error(g(451))}}function mn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ii(e)}var pt=new Map,Vf=new Set;function Ci(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Zt=T.d;T.d={f:Mh,r:Ch,D:xh,C:Dh,L:zh,m:Rh,X:Nh,S:Oh,M:Bh};function Mh(){var e=Zt.f(),t=yi();return e||t}function Ch(e){var t=Xa(e);t!==null&&t.tag===5&&t.type==="form"?sr(t):Zt.r(e)}var Al=typeof document>"u"?null:document;function Zf(e,t,a){var l=Al;if(l&&typeof t=="string"&&t){var n=st(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Vf.has(n)||(Vf.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),ze(t,"link",e),Te(t),l.head.appendChild(t)))}}function xh(e){Zt.D(e),Zf("dns-prefetch",e,null)}function Dh(e,t){Zt.C(e,t),Zf("preconnect",e,t)}function zh(e,t,a){Zt.L(e,t,a);var l=Al;if(l&&e&&t){var n='link[rel="preload"][as="'+st(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+st(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+st(a.imageSizes)+'"]')):n+='[href="'+st(e)+'"]';var i=n;switch(t){case"style":i=El(e);break;case"script":i=Tl(e)}pt.has(i)||(e=B({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),pt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(dn(i))||t==="script"&&l.querySelector(hn(i))||(t=l.createElement("link"),ze(t,"link",e),Te(t),l.head.appendChild(t)))}}function Rh(e,t){Zt.m(e,t);var a=Al;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+st(l)+'"][href="'+st(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Tl(e)}if(!pt.has(i)&&(e=B({rel:"modulepreload",href:e},t),pt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hn(i)))return}l=a.createElement("link"),ze(l,"link",e),Te(l),a.head.appendChild(l)}}}function Oh(e,t,a){Zt.S(e,t,a);var l=Al;if(l&&e){var n=Qa(l).hoistableStyles,i=El(e);t=t||"default";var u=n.get(i);if(!u){var o={loading:0,preload:null};if(u=l.querySelector(dn(i)))o.loading=5;else{e=B({rel:"stylesheet",href:e,"data-precedence":t},a),(a=pt.get(i))&&Io(e,a);var s=u=l.createElement("link");Te(s),ze(s,"link",e),s._p=new Promise(function(d,y){s.onload=d,s.onerror=y}),s.addEventListener("load",function(){o.loading|=1}),s.addEventListener("error",function(){o.loading|=2}),o.loading|=4,xi(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:o},n.set(i,u)}}}function Nh(e,t){Zt.X(e,t);var a=Al;if(a&&e){var l=Qa(a).hoistableScripts,n=Tl(e),i=l.get(n);i||(i=a.querySelector(hn(n)),i||(e=B({src:e,async:!0},t),(t=pt.get(n))&&Fo(e,t),i=a.createElement("script"),Te(i),ze(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Bh(e,t){Zt.M(e,t);var a=Al;if(a&&e){var l=Qa(a).hoistableScripts,n=Tl(e),i=l.get(n);i||(i=a.querySelector(hn(n)),i||(e=B({src:e,async:!0,type:"module"},t),(t=pt.get(n))&&Fo(e,t),i=a.createElement("script"),Te(i),ze(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Jf(e,t,a,l){var n=(n=Y.current)?Ci(n):null;if(!n)throw Error(g(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=El(a.href),a=Qa(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=El(a.href);var i=Qa(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(dn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),pt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pt.set(e,a),i||_h(n,e,a,u.state))),t&&l===null)throw Error(g(528,""));return u}if(t&&l!==null)throw Error(g(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Tl(a),a=Qa(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(g(444,e))}}function El(e){return'href="'+st(e)+'"'}function dn(e){return'link[rel="stylesheet"]['+e+"]"}function If(e){return B({},e,{"data-precedence":e.precedence,precedence:null})}function _h(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),ze(t,"link",a),Te(t),e.head.appendChild(t))}function Tl(e){return'[src="'+st(e)+'"]'}function hn(e){return"script[async]"+e}function Ff(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+st(a.href)+'"]');if(l)return t.instance=l,Te(l),l;var n=B({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Te(l),ze(l,"style",n),xi(l,a.precedence,e),t.instance=l;case"stylesheet":n=El(a.href);var i=e.querySelector(dn(n));if(i)return t.state.loading|=4,t.instance=i,Te(i),i;l=If(a),(n=pt.get(n))&&Io(l,n),i=(e.ownerDocument||e).createElement("link"),Te(i);var u=i;return u._p=new Promise(function(o,s){u.onload=o,u.onerror=s}),ze(i,"link",l),t.state.loading|=4,xi(i,a.precedence,e),t.instance=i;case"script":return i=Tl(a.src),(n=e.querySelector(hn(i)))?(t.instance=n,Te(n),n):(l=a,(n=pt.get(i))&&(l=B({},a),Fo(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Te(n),ze(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(g(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,xi(l,a.precedence,e));return t.instance}function xi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var o=l[u];if(o.dataset.precedence===t)i=o;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Io(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Fo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Di=null;function Wf(e,t,a){if(Di===null){var l=new Map,n=Di=new Map;n.set(a,l)}else n=Di,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[zl]||i[Me]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var o=l.get(u);o?o.push(i):l.set(u,[i])}}return l}function Pf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Hh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $f(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Uh(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=El(l.href),i=t.querySelector(dn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=zi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Te(i);return}i=t.ownerDocument||t,l=If(l),(n=pt.get(n))&&Io(l,n),i=i.createElement("link"),Te(i);var u=i;u._p=new Promise(function(o,s){u.onload=o,u.onerror=s}),ze(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=zi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Wo=0;function kh(e,t){return e.stylesheets&&e.count===0&&Oi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Oi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Wo===0&&(Wo=62500*yh());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Oi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Wo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function zi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Oi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ri=null;function Oi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ri=new Map,t.forEach(qh,e),Ri=null,zi.call(e))}function qh(e,t){if(!(t.state.loading&4)){var a=Ri.get(e);if(a)var l=a.get(null);else{a=new Map,Ri.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=zi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var gn={$$typeof:Re,Provider:null,Consumer:null,_currentValue:_,_currentValue2:_,_threadCount:0};function Yh(e,t,a,l,n,i,u,o,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ki(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ki(0),this.hiddenUpdates=Ki(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function em(e,t,a,l,n,i,u,o,s,d,y,S){return e=new Yh(e,t,a,u,s,d,y,S,o),t=1,i===!0&&(t|=24),i=et(3,null,null,t),e.current=i,i.stateNode=e,t=zu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Bu(i),e}function tm(e){return e?(e=el,e):el}function am(e,t,a,l,n,i){n=tm(n),l.context===null?l.context=n:l.pendingContext=n,l=la(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=na(e,l,t),a!==null&&(Ze(a,e,t),Vl(a,e,t))}function lm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Po(e,t){lm(e,t),(e=e.alternate)&&lm(e,t)}function nm(e){if(e.tag===13||e.tag===31){var t=xa(e,67108864);t!==null&&Ze(t,e,67108864),Po(e,67108864)}}function im(e){if(e.tag===13||e.tag===31){var t=it();t=Vi(t);var a=xa(e,t);a!==null&&Ze(a,e,t),Po(e,t)}}var Ni=!0;function jh(e,t,a,l){var n=v.T;v.T=null;var i=T.p;try{T.p=2,$o(e,t,a,l)}finally{T.p=i,v.T=n}}function Gh(e,t,a,l){var n=v.T;v.T=null;var i=T.p;try{T.p=8,$o(e,t,a,l)}finally{T.p=i,v.T=n}}function $o(e,t,a,l){if(Ni){var n=es(l);if(n===null)Yo(e,t,l,Bi,a),om(e,l);else if(Xh(n,e,t,a,l))l.stopPropagation();else if(om(e,l),t&4&&-1<Lh.indexOf(e)){for(;n!==null;){var i=Xa(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ea(i.pendingLanes);if(u!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;u;){var s=1<<31-Pe(u);o.entanglements[1]|=s,u&=~s}xt(i),(I&6)===0&&(gi=Fe()+500,cn(0))}}break;case 31:case 13:o=xa(i,2),o!==null&&Ze(o,i,2),yi(),Po(i,2)}if(i=es(l),i===null&&Yo(e,t,l,Bi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Yo(e,t,l,null,a)}}function es(e){return e=tu(e),ts(e)}var Bi=null;function ts(e){if(Bi=null,e=La(e),e!==null){var t=J(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=he(t),e!==null)return e;e=null}else if(a===31){if(e=Ne(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Bi=e,null}function um(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xm()){case ds:return 2;case hs:return 8;case En:case Dm:return 32;case gs:return 268435456;default:return 32}default:return 32}}var as=!1,ga=null,pa=null,ya=null,pn=new Map,yn=new Map,va=[],Lh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function om(e,t){switch(e){case"focusin":case"focusout":ga=null;break;case"dragenter":case"dragleave":pa=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":pn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yn.delete(t.pointerId)}}function vn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Xa(t),t!==null&&nm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Xh(e,t,a,l,n){switch(t){case"focusin":return ga=vn(ga,e,t,a,l,n),!0;case"dragenter":return pa=vn(pa,e,t,a,l,n),!0;case"mouseover":return ya=vn(ya,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return pn.set(i,vn(pn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,yn.set(i,vn(yn.get(i)||null,e,t,a,l,n)),!0}return!1}function sm(e){var t=La(e.target);if(t!==null){var a=J(t);if(a!==null){if(t=a.tag,t===13){if(t=he(a),t!==null){e.blockedOn=t,As(e.priority,function(){im(a)});return}}else if(t===31){if(t=Ne(a),t!==null){e.blockedOn=t,As(e.priority,function(){im(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=es(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);eu=l,a.target.dispatchEvent(l),eu=null}else return t=Xa(a),t!==null&&nm(t),e.blockedOn=a,!1;t.shift()}return!0}function cm(e,t,a){_i(e)&&a.delete(t)}function Qh(){as=!1,ga!==null&&_i(ga)&&(ga=null),pa!==null&&_i(pa)&&(pa=null),ya!==null&&_i(ya)&&(ya=null),pn.forEach(cm),yn.forEach(cm)}function Hi(e,t){e.blockedOn===t&&(e.blockedOn=null,as||(as=!0,C.unstable_scheduleCallback(C.unstable_NormalPriority,Qh)))}var Ui=null;function rm(e){Ui!==e&&(Ui=e,C.unstable_scheduleCallback(C.unstable_NormalPriority,function(){Ui===e&&(Ui=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(ts(l||a)===null)continue;break}var i=Xa(a);i!==null&&(e.splice(t,3),t-=3,$u(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function wl(e){function t(s){return Hi(s,e)}ga!==null&&Hi(ga,e),pa!==null&&Hi(pa,e),ya!==null&&Hi(ya,e),pn.forEach(t),yn.forEach(t);for(var a=0;a<va.length;a++){var l=va[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<va.length&&(a=va[0],a.blockedOn===null);)sm(a),a.blockedOn===null&&va.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[Ge]||null;if(typeof i=="function")u||rm(a);else if(u){var o=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Ge]||null)o=u.formAction;else if(ts(n)!==null)continue}else o=u.action;typeof o=="function"?a[l+1]=o:(a.splice(l,3),l-=3),rm(a)}}}function fm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function ls(e){this._internalRoot=e}ki.prototype.render=ls.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));var a=t.current,l=it();am(a,l,e,t,null,null)},ki.prototype.unmount=ls.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;am(e.current,2,null,e,null,null),yi(),t[Ga]=null}};function ki(e){this._internalRoot=e}ki.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ss();e={blockedOn:null,target:e,priority:t};for(var a=0;a<va.length&&t!==0&&t<va[a].priority;a++);va.splice(a,0,e),a===0&&sm(e)}};var mm=fe.version;if(mm!=="19.2.4")throw Error(g(527,mm,"19.2.4"));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=E(t),e=e!==null?W(e):null,e=e===null?null:e.stateNode,e};var Kh={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qi.isDisabled&&qi.supportsFiber)try{Cl=qi.inject(Kh),We=qi}catch{}}return Sn.createRoot=function(e,t){if(!N(e))throw Error(g(299));var a=!1,l="",n=vr,i=br,u=Sr;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=em(e,1,!1,null,null,a,l,null,n,i,u,fm),e[Ga]=t.current,qo(e),new ls(t)},Sn.hydrateRoot=function(e,t,a){if(!N(e))throw Error(g(299));var l=!1,n="",i=vr,u=br,o=Sr,s=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(s=a.formState)),t=em(e,1,!0,t,a??null,l,n,s,i,u,o,fm),t.context=tm(null),a=t.current,l=it(),l=Vi(l),n=la(l),n.callback=null,na(a,n,l),a=l,t.current.lanes=a,Dl(t,a),xt(t),e[Ga]=t.current,qo(e),new ki(t)},Sn.version="19.2.4",Sn}var Em;function tg(){if(Em)return us.exports;Em=1;function C(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C)}catch(fe){console.error(fe)}}return C(),us.exports=eg(),us.exports}var ag=tg();function lg(){const[C,fe]=Tm.useState(null),F=[{id:1,question:"1. Define Artificial Intelligence and explain its elements. (Reasoning, Learning, Problem Solving, Perception, Linguistic Intelligence)",answer:"",codeExample:`
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
      `},{id:51,question:"51. What is an Inference Engine?",answer:"",codeExample:`
⭐ What is an Inference Engine?

1️⃣ Meaning
An Inference Engine is the brain of an AI system.

It uses the Knowledge Base (facts + rules) to draw conclusions or make decisions.

📌 Simple Definition:
An Inference Engine is a component of AI that applies logical rules to the knowledge base to infer new 
information.


🔁 Connection with Concepts
You studied:
- Knowledge Base → stores facts & rules
- Production System → uses IF–THEN rules

👉 Now:
- Inference Engine → applies those rules


⭐ 2️⃣ Role in AI

The Inference Engine performs:

1️⃣ Reasoning  
   → Uses logic to find answers  

2️⃣ Decision Making  
   → Chooses the correct action  

3️⃣ Problem Solving  
   → Finds solutions using rules  


Example:
Knowledge Base:
IF fever AND cough → flu  

Inference Engine:
Check symptoms → apply rule → give result  


⭐ 3️⃣ How it Works with Knowledge Base

Flow:

Knowledge Base (Facts + Rules)
            ↓
     Inference Engine
            ↓
        Conclusion


Example:

Knowledge Base:
Fact: fever = yes  
Fact: cough = yes  

Rule:
IF fever AND cough → flu  

Working:
1️⃣ Check facts  
2️⃣ Match rule  
3️⃣ Apply rule  
4️⃣ Output → Result = flu  


⭐ 4️⃣ Modes of Inference

There are two main modes:

1️⃣ Forward Chaining  
2️⃣ Backward Chaining  



⭐ 4.1 Forward Chaining (Data Driven)

Idea:
Start from facts → reach conclusion  

📌 "Start from what we know"

Steps:
Facts → Apply Rules → New Facts → Final Answer  

Example:
Fact: It is raining  
Rule: IF raining → take umbrella  

Conclusion:
Take umbrella  

Memory Trick:
Forward = Facts → Goal  



⭐ 4.2 Backward Chaining (Goal Driven)

Idea:
Start from goal → check facts  

📌 "Start from what we want to prove"

Steps:
Goal → Check Rule → Check Facts → Answer  

Example:

Goal:
Is it flu?  

Check rule:
IF fever AND cough → flu  

Check facts:
fever = yes ✔  
cough = yes ✔  

Conclusion:
Yes, flu  

Memory Trick:
Backward = Goal → Facts  


⭐ Simple Diagram

          Knowledge Base
        (Facts + Rules)
                |
                v
        Inference Engine
         /            \\
 Forward Chaining   Backward Chaining
 (Facts → Goal)     (Goal → Facts)


⭐ One-Line Exam Answer

An Inference Engine is the reasoning component of an AI system that applies rules from the knowledge 
base to derive conclusions using forward and backward chaining.
      
      `},{id:52,question:"52. Explain Forward Chaining with example.",answer:"📌 Very important long answer.",codeExample:`
⭐ Forward Chaining in AI

1️⃣ Definition  
Forward Chaining is an inference method where we start from known facts and apply rules to reach a final 
conclusion.  

📌 Simple Definition:  
Forward Chaining is a data-driven approach that starts with facts and applies rules to generate new facts 
until a goal is reached.  


🔁 Connection with Concepts  
- Facts → stored in Knowledge Base  
- Rules → IF–THEN  
- Inference Engine → applies rules  

👉 Forward Chaining = use facts first  


⭐ 2️⃣ Data-Driven Approach  

It is called data-driven because:  

👉 Starts from available data (facts)  
👉 Moves step-by-step toward solution  

📌 Memory Trick:  
Forward = Facts → Goal  


⭐ 3️⃣ Steps of Forward Chaining  

1️⃣ Start with known facts  
2️⃣ Check rules whose conditions match facts  
3️⃣ Apply rule → generate new fact  
4️⃣ Repeat until goal is reached  


⭐ 4️⃣ Example  

Knowledge Base  

Facts:  
fever = yes  
cough = yes  

Rule:  
IF fever AND cough → flu  


Working  

Step 1:  
Start with facts → fever, cough  

Step 2:  
Check rule → IF fever AND cough → flu  

Step 3:  
Condition is true ✔  

Step 4:  
Apply rule → New fact = flu  


Final Answer:  
Result = flu  


⭐ Simple Flow Diagram  

Facts → Match Rule → Apply Rule → New Fact → Goal  



⭐ 5️⃣ Properties of Forward Chaining  

1️⃣ Data-driven  
→ Starts from facts/data  

2️⃣ Bottom-up approach  
→ Moves from basic facts → final result  

3️⃣ Automatic rule application  
→ Rules are applied automatically  

4️⃣ Finds all possible solutions  
→ Can generate multiple conclusions  


⭐ Real-Life Example  

Fact: Traffic light = RED  
Rule: IF red → stop  

Result: STOP  


⭐ One-Line Exam Answer  

Forward Chaining is a data-driven inference method that starts from known facts and applies rules to 
reach a conclusion.
      
      `},{id:53,question:"53. Explain Backward Chaining with example.",answer:"📌 Very common exam question.",codeExample:`
⭐ Backward Chaining in AI

1️⃣ Definition  
Backward Chaining is an inference method where we start from the goal (conclusion) and work backward to 
check if it is true using facts.  

📌 Simple Definition:
Backward Chaining is a goal-driven approach that starts from the goal and checks rules and facts to 
prove it.  


🔁 Basic Idea  

👉 Instead of starting from facts, we ask:  
"Is this goal true?"  

Then we check:  
- Which rule can prove it  
- Whether required facts are available  



⭐ 2️⃣ Goal-Driven Approach  

It is called goal-driven because:  

👉 Starts from the goal  
👉 Moves backward to find supporting facts  

📌 Memory Trick:  
Backward = Goal → Facts  


⭐ 3️⃣ Steps of Backward Chaining  

1️⃣ Start with a goal  
2️⃣ Find a rule that can prove the goal  
3️⃣ Check conditions of that rule  
4️⃣ Verify facts  
5️⃣ If all conditions are true → goal is true  


⭐ 4️⃣ Example  

Knowledge Base  

Facts:  
fever = yes  
cough = yes  

Rule:  
IF fever AND cough → flu  


Goal:  
Is it flu?  


Working  

Step 1:  
Start with goal → flu ?  

Step 2:  
Find rule → IF fever AND cough → flu  

Step 3:  
Check conditions:  
fever = yes ✔  
cough = yes ✔  

Step 4:  
All conditions true → Goal achieved  


Final Answer:  
Yes, flu  


⭐ Simple Flow Diagram  

Goal → Find Rule → Check Conditions → Verify Facts → Result  



⭐ 5️⃣ Properties of Backward Chaining  

1️⃣ Goal-driven  
→ Starts from goal  

2️⃣ Top-down approach  
→ Moves from goal → facts  

3️⃣ Efficient for specific problems  
→ Checks only required facts  

4️⃣ Used in expert systems  
→ Common in diagnosis systems  


⭐ Real-Life Example  

Goal: Is student passed?  
Rule: IF marks ≥ 40 → pass  
Check: marks = 50 ✔  
Result: PASS  


⭐ One-Line Exam Answer  

Backward Chaining is a goal-driven inference method that starts from the goal and works backward to 
verify it using rules and facts.
      
      `},{id:54,question:"54. Differentiate between Forward Chaining and Backward Chaining.",answer:"📌 Guaranteed short/medium question.",codeExample:`
| Point     | Forward Chaining                                              | Backward Chaining                                             |
| ----------| ------------------------------------------------------------- | ------------------------------------------------------------- |
| Direction | Bottom-up (Facts → Goal)                                      | Top-down (Goal → Facts)                                       |
| Approach  | Data-driven                                                   | Goal-driven                                                   |
| Working   | Starts from known facts and applies rules to reach conclusion | Starts from goal and checks rules to verify it                |
| Use Cases | When all data is available (e.g., monitoring systems)         | When specific goal is given (e.g., expert systems, diagnosis) |



| Forward Chaining  | Backward Chaining |
| ----------------- | ----------------- |
| Starts from facts | Starts from goal  |
| Data-driven       | Goal-driven       |
| Bottom-up         | Top-down          |

      `},{id:55,question:"55. Explain Horn Clause and Definite Clause.",answer:"📌 Often asked in theory or MCQ.",codeExample:`
⭐ 1️⃣ Horn Clause

🔹 Definition  
A Horn Clause is a logical expression that contains at most one positive literal.  

📌 Simple Meaning:  
A Horn Clause can have one or zero positive statements.  


🔹 Forms of Horn Clause  

1️⃣ Fact (only positive)  
father(john, paul).  

2️⃣ Rule (one positive + conditions)  
parent(X, Y) :- father(X, Y).  

3️⃣ Goal / Query (no positive literal)  
?- parent(john, paul).  



⭐ 2️⃣ Definite Clause

🔹 Definition  
A Definite Clause is a type of Horn Clause that has exactly one positive literal.  

📌 Simple Meaning:  
A Definite Clause always has one positive part (called the head).  


🔹 Form  
Head :- Body.  

- Head → positive literal  
- Body → conditions  


🔹 Example  
father(X, Y) :- parent(X, Y), male(X).  

Here:  
- father(X, Y) → positive (head)  
- parent(X, Y), male(X) → conditions  


⭐ 3️⃣ Difference Between Horn Clause and Definite Clause  

| Point            | Horn Clause                              | Definite Clause                          |
| -----------------| ---------------------------------------- | ---------------------------------------- |
| Definition       | Clause with at most one positive literal | Clause with exactly one positive literal |
| Positive Literal | 0 or 1                                   | Exactly 1                                |
| Types            | Fact, Rule, Query                        | Only Fact and Rule                       |
| Includes Query?  | Yes                                      | No                                       |


⭐ Simple Understanding  

Horn Clause = General case (0 or 1 positive)  
Definite Clause = Special case (exactly 1 positive)  


⭐ One-Line Exam Answer  

A Horn Clause is a clause with at most one positive literal, while a Definite Clause is a Horn Clause that 
contains exactly one positive literal.
      
      `},{id:56,question:"56. Short question and answers.",answer:"",codeExample:`
⭐ 1️⃣ Modus Ponens

🔹 Meaning  
Modus Ponens is a basic rule of logical reasoning.  

📌 Simple Definition:  
If a condition is true and a rule exists, then the conclusion is also true.  


🔹 Format  
IF P → Q  
P is true  
-------------  
Therefore Q is true  


🔹 Example  
IF it is raining → ground is wet  
It is raining  
-----------------------  
Therefore ground is wet  


⭐ 2️⃣ Data-Driven vs Goal-Driven  

🔹 Data-Driven (Forward Chaining)  
- Starts from facts (data)  
- Moves toward goal  
- Flow: Facts → Rules → Conclusion  


🔹 Goal-Driven (Backward Chaining)  
- Starts from goal  
- Checks facts  
- Flow: Goal → Rules → Facts  


🔹 Simple Difference  
Data-driven → Facts → Goal  
Goal-driven → Goal → Facts  


⭐ 3️⃣ Rule Format (IF–THEN)

🔹 Meaning  
Rules in AI are written in IF–THEN form.  

📌 Simple Definition:  
IF condition is true THEN perform action.  


🔹 Format  
IF condition  
THEN action  


🔹 Example  
IF marks ≥ 40  
THEN PASS  


⭐ 4️⃣ Knowledge Base

🔹 Meaning  
A Knowledge Base is a collection of:  
- Facts  
- Rules  

📌 Simple Definition:  
A Knowledge Base is the stored information used by AI systems to make decisions.  


🔹 Example  
Fact: fever = yes  
Fact: cough = yes  

Rule: IF fever AND cough → flu  


🔹 Working  
Knowledge Base → Inference Engine → Result  


⭐ One-Line Summary (All Topics)

Modus Ponens → Basic logic rule  
Data-driven → Facts → Goal  
Goal-driven → Goal → Facts  
IF–THEN → Rule format  
Knowledge Base → Facts + Rules storage  
      `},{id:61,question:"61. What is Non-Monotonic Reasoning?",answer:"📌 Core concept of this unit",codeExample:`
⭐ What is Non-Monotonic Reasoning?

🔹 Definition  
Non-Monotonic Reasoning is a type of reasoning where conclusions can change when new information 
is added.  


🔹 Simple Meaning  
Old conclusion → may change → when new fact comes  

👉 Unlike normal logic (monotonic), here results are not fixed  


⭐ Why is it Needed? (Real-World Uncertainty)  

In real life, information is often incomplete or uncertain  

📌 So we make assumptions, but later they may be wrong  


🔹 Example Situation  
You assume something is true → later new info changes it  

👉 AI must handle this situation  


🔹 Key Idea  
Real world ≠ always perfect knowledge  



⭐ Example (Bird → Penguin Case) ⭐  

🔹 Step 1 (Initial Knowledge)  

Rule: Birds can fly  
Fact: Penguin is a bird  
-------------------------  
Conclusion: Penguin can fly ❌  


🔹 Step 2 (New Information)  
New Fact: Penguin cannot fly  


🔹 Final Conclusion  
Penguin cannot fly ✅  

👉 Old conclusion changed  


⭐ Simple Diagram  

Bird → Fly (assumption)  

        ↓ new info  

Penguin → Cannot fly (updated conclusion)  


⭐ Key Points  

1️⃣ Conclusions can change  
2️⃣ Works with incomplete knowledge  
3️⃣ Used in real-world AI systems  


⭐ One-Line Exam Answer  

Non-Monotonic Reasoning is a reasoning method where conclusions may change when new information 
is added, useful in handling real-world uncertainty.  


🎯 Easy Memory Trick  

Non-Monotonic = Not fixed answer  
      `},{id:62,question:"62. Explain Characteristics of Non-Monotonic Reasoning",answer:"📌 Short + theory question",codeExample:`
⭐ Characteristics of Non-Monotonic Reasoning  

⭐ 1️⃣ Revisable Conclusions ⭐  

🔹 Meaning  
Conclusions can be changed or updated when new information is available.  

🔹 Simple Explanation  
Old conclusion → New information → Updated conclusion  

🔹 Example  
Birds can fly  
Penguin is a bird  
→ Penguin can fly ❌  

New info: Penguin cannot fly  
→ Conclusion changes ✅  

🔹 Key Point  
Conclusion is NOT final  


⭐ 2️⃣ Default Reasoning  

🔹 Meaning  
Making assumptions based on general rules, unless exceptions are known.  

🔹 Simple Explanation  
Assume something is true by default  

🔹 Example  
Birds usually fly  
→ Assume any bird can fly  

(But exceptions like penguin exist)  

🔹 Key Point  
Assume first, correct later  


⭐ 3️⃣ Handles Incomplete Knowledge  

🔹 Meaning  
Works even when full information is not available.  

🔹 Simple Explanation  
Decision taken even with missing data  

🔹 Example  
Doctor gives treatment without full test results  

🔹 Key Point  
Works in real-world uncertainty  


⭐ One-Line Summary  

Revisable → Can change  
Default → Assume  
Incomplete → Works with less data  


⭐ One-Line Exam Answer  

Non-monotonic reasoning is characterized by revisable conclusions, default reasoning, and the ability to 
handle incomplete knowledge.  
      `},{id:63,question:"63. Explain Default Logic",answer:`📌 Most important logic  
 Raymond Reiter`,codeExample:`
⭐ Default Logic (Very Simple)

🔹 Simple Meaning  
Default Logic means we assume something is true normally,  
until we get proof that it is wrong.  


⭐ Real-Life Example 🧠  

Think like this:  

"Birds can fly"  

👉 So if I say:  

"Parrot is a bird"  

👉 You will say:  

"Parrot can fly"  

✔️ This is default thinking (assumption)  


⭐ But Problem Comes ❗  

Penguin is a bird  

👉 By default:  
Penguin can fly ❌  

But actually:  
Penguin cannot fly ✅  

👉 So we change our assumption  


⭐ Simple Idea  

Assume first → Correct later if needed  


⭐ Default Rule Form ⭐  

Default Logic uses a special rule format:  

A : B / C  


🔹 Meaning of Symbols  

A → Condition (what we know)  
B → Justification (assumption)  
C → Conclusion  


🔹 Simple Explanation  

IF A is true  
AND B is possible (no contradiction)  
THEN conclude C  


⭐ Example (Very Important)  

🔹 Default Rule  
Bird(x) : Fly(x) / Fly(x)  


🔹 Meaning  
If x is a bird  
and it is possible that x can fly  
then conclude x can fly  


🔹 Apply Example  

Fact: Penguin is a bird  
Default: Birds fly  
----------------------  
Conclusion: Penguin can fly ❌  


🔹 New Information  

Fact: Penguin cannot fly  


🔹 Updated Conclusion  

Penguin cannot fly ✅  

👉 Default assumption is rejected  


⭐ Simple Diagram  

Bird → (default) Fly  

        ↓ exception  

Penguin → Cannot fly  


⭐ Key Points  

1️⃣ Used when knowledge is incomplete  
2️⃣ Makes assumptions (default)  
3️⃣ Can change conclusions later  


⭐ One-Line Exam Answer  

Default Logic, introduced by Raymond Reiter, is used to make assumptions using rules of the form A : B / C 
when complete information is not available.  


🎯 Easy Memory Trick  

Default Logic = Assume → Check → Update  



⭐ What if B is wrong?  

🔹 Simple Answer  

If B is wrong (contradicted) → ❌ Do NOT apply the rule → ❌ Do NOT conclude C  


⭐ Easy Understanding  

A : B / C  

👉 Means:  

If A is true  
AND B is not wrong  
THEN conclude C  


🔴 But if B becomes wrong:  

If A is true  
BUT B is false  
→ STOP → Do NOT conclude C  


⭐ Example (Penguin Case)  

🔹 Default Rule  
Bird(x) : Fly(x) / Fly(x)  


🔹 Case 1 (Normal)  

Parrot is a bird  
No problem with flying  
→ Parrot can fly ✅  


🔹 Case 2 (B becomes wrong ❗)  

Penguin is a bird  
But we KNOW penguin cannot fly  

👉 So:  

B = Fly(x) is WRONG ❌  


🔹 Final Result  

Do NOT apply rule  
→ Penguin cannot fly ✅  


⭐ Key Idea  

If assumption (B) fails → rule is cancelled  


⭐ Super Simple Rule  

B correct → apply rule → get C  
B wrong → ignore rule → no C  


⭐ One-Line Answer  

If B is false or contradicted, the default rule is not applied and the conclusion is rejected.  


🎯 Easy Memory Trick  

B wrong → Rule wrong → No conclusion  
      
      `},{id:64,question:"64. Explain Any TWO Logics of Non-Monotonic Reasoning",answer:`📌 Often asked as 'Explain any two' 
 Circumscription ⭐ 
 Autoepistemic Logic`,codeExample:`
⭐ 1️⃣ Circumscription (Super Easy)

🔹 Think Like This 🧠  
Assume everything is NORMAL  
until someone tells you it is SPECIAL  


🔹 Example  

You think:  
All birds can fly  

👉 So you assume:  
Every bird flies  


🔹 Now New Info Comes ❗  

Penguin is a bird  

👉 You still think:  
Penguin flies ❌  

But then:  
Penguin cannot fly ✅  


🔹 Final Understanding  

First → assume normal (fly)  
Later → update if exception (penguin)  


🔹 One-Line  

👉 Circumscription = "Assume normal, ignore exceptions"  



⭐ 2️⃣ Autoepistemic Logic  

🔹 Simple Meaning  

Autoepistemic Logic means reasoning based on what we know and what we don’t know.  


🔹 Easy Idea  

"If I don't know it is false → I assume it is true"  


🔹 Real-Life Example 🧠  

I don't know that Ravi is absent  

👉 So I assume:  
Ravi is present  


🔹 Key Idea  

Knowledge about knowledge  

👉 Thinking about:  
What I know  
What I don’t know  


🔹 One-Line  

Autoepistemic Logic is reasoning based on self-knowledge (what is known or unknown).  



⭐ (Optional) 3️⃣ Negation as Failure  

🔹 Simple Meaning  

If something cannot be proven true → assume it is false  


🔹 Example  

Cannot prove "Ravi is present"  
→ So assume Ravi is absent  



⭐ Quick Difference  

Circumscription → Assume normal world  
Autoepistemic → Assume based on knowledge  



⭐ Final Easy Summary  

Circumscription → No exception thinking  
Autoepistemic → What I know thinking  
Negation Failure → Not proved = false  
      
      `},{id:65,question:"65. Short questions",answer:"",codeExample:`
🧠 2 MARK / MCQ (JUST READ)

Non-monotonic → conclusions can change
Default reasoning → assume true unless false
Circumscription → minimize abnormal cases
Negation as failure → assume false if not proven
      `},{id:71,question:"71. What is Probabilistic Reasoning?",answer:"📌 Basic + very common question",codeExample:`
⭐ What is Probabilistic Reasoning?

🔹 Definition  
Probabilistic Reasoning is a method used in AI to handle uncertainty using probability (chance).  


🔹 Simple Meaning  
Instead of YES or NO → we use chances (%)  

👉 Not sure → we give probability  


⭐ Why Needed in AI?  

Real world is not always certain ❗  

AI systems often deal with:  
- Incomplete data  
- Uncertain situations  
- Guessing outcomes  


🔹 Example Situation  

Symptoms → not 100% sure disease  

👉 So AI says:  
80% chance of flu  


🔹 Key Idea  
AI works with chances, not fixed answers  


⭐ Real-Life Examples 🧠  

⭐ 1️⃣ Weather Prediction  
70% chance of rain  

👉 Not sure, but probability is used  


⭐ 2️⃣ Medical Diagnosis  
Fever + cough → 80% flu  


⭐ 3️⃣ Spam Email Detection  
Email → 90% spam  


⭐ 4️⃣ Google Search / Recommendations  
Suggested videos based on probability  


⭐ Simple Diagram  

Input Data → Probability → Decision  


⭐ Key Points  

1️⃣ Handles uncertainty  
2️⃣ Uses probability (%)  
3️⃣ Gives likely results  


⭐ One-Line Exam Answer  

Probabilistic Reasoning is a technique in AI that uses probability to make decisions under uncertainty.  


🎯 Easy Memory Trick  

Probabilistic = Based on chance  
      
      `},{id:72,question:"72. Explain Conditional Probability.",answer:"📌 Often asked short/medium question",codeExample:`
⭐ Step 1: Simple Idea  

👉 Conditional probability means:  

We already KNOW something  
→ then we find probability  


⭐ Step 2: Real-Life Example 🧠  

Imagine a class:  

Total students = 10  
Boys = 6  
Girls = 4  

👉 Question:  

"What is probability of selecting a BOY?"  

Answer:  

6 / 10 = 0.6  


⭐ Step 3: Now CONDITION comes ❗  

👉 New question:  

"IF I tell you the student is a BOY,  
what is probability that student is a BOY?"  

👉 Now think:  

You already KNOW it's a boy  

So:  

Probability = 1 (100%)  


⭐ Another Better Example (Easy)  

Students:  

Boys = 6  
Among boys, 3 play cricket  

👉 Question:  

IF student is a BOY,  
what is probability he plays cricket?  

👉 Now we only look at BOYS:  

Total boys = 6  
Cricket boys = 3  

👉 Answer:  

3 / 6 = 1/2  


⭐ Final Understanding 🔥  

Condition means → reduce sample space  

👉 We don’t look at all students  
👉 Only look at given group (boys)  


⭐ Formula (Now Easy)  

P(A | B) = A inside B / Total B
  

👉 Very simple:  

Required / Given group  


⭐ One-Line (Super Easy)  

Conditional probability means finding probability after knowing some information.  


🎯 Memory Trick  

First filter → then find probability  
      `},{id:73,question:"73. Explain Bayes’ Theorem with formula and example.",answer:"📌 MOST IMPORTANT QUESTION OF THIS UNIT 🔥",codeExample:`
⭐ Step 1: Think in Simple Words  

👉 Bayes means:  

First guess → then new information → update answer  


⭐ Step 2: Real-Life Example 🧠 (VERY EASY)  

🎯 Situation  

In a class:  

Total students = 10  
Girls = 2  
Boys = 8  

👉 Also:  

Girls wearing glasses = 2  
Boys wearing glasses = 2  


⭐ Step 3: Question  

A student is wearing glasses  
→ What is chance the student is a GIRL?  


⭐ Step 4: Think Slowly  

👉 First (before knowing glasses):  

Chance of girl = 2 / 10  

👉 This is PRIOR  


👉 Now new info:  

Student is wearing glasses  


👉 Now only look at students with glasses:  

Total glasses students = 4  
Girls with glasses = 2  


⭐ Final Answer  

Probability = 2 / 4 = 1/2  


⭐ Now Understand Terms 🔥  

🔹 Prior (Before)  
Chance of girl before knowing glasses  
= 2 / 10  

🔹 Likelihood  
Chance of wearing glasses if girl  
= 2 / 2 = 1  

🔹 Posterior ⭐ (After)  
Chance of girl AFTER knowing glasses  
= 2 / 4 = 1/2  


⭐ Super Simple Idea  

First → look at all students  
Then → look only at filtered group (glasses)  


⭐ Formula (Now Easy)  

P(A | B) = [ P(B | A) × P(A) ] / P(B)


👉 Simple meaning:  

Posterior = (Likelihood × Prior) / Total  

👉 But don’t worry about formula
👉 Just remember filtering idea


⭐ One-Line (Very Easy)  

Bayes means update your answer when new information comes.  


🎯 Easy Memory Trick  

Before → After  
Guess → Update  


🎯 Final Simple Line  

Bayes = Change answer after new info  
      
      `},{id:74,question:"74. Explain Dempster-Shafer Theory (DST).",answer:"📌 Important theory question",codeExample:`
⭐ What is Dempster–Shafer Theory (DST)?

🔹 Simple Definition  
DST is a method used in AI to handle uncertainty when we are not fully sure about information.  


🔹 Simple Meaning  
Not sure → give a range (not exact value)  

👉 Instead of one probability, we give two values  


⭐ Basic Idea  

👉 In normal probability:  
Rain chance = 70%  

👉 In DST:  
Rain chance = between 60% and 80%  

👉 So DST gives range of belief  



⭐ Belief & Plausibility ⭐  


⭐ 1️⃣ Belief (Lower Bound)  

🔹 Meaning  
Minimum confidence that something is true  

🔹 Example  
Belief(rain) = 0.6  

👉 At least 60% sure rain will happen  


⭐ 2️⃣ Plausibility (Upper Bound)  

🔹 Meaning  
Maximum possible confidence  

🔹 Example  
Plausibility(rain) = 0.8  

👉 At most 80% chance of rain  


🔹 Final Range  

0.6 ≤ Rain ≤ 0.8  


⭐ Easy Understanding  

Belief → sure part  
Plausibility → possible part  


⭐ Difference from Probability  

| Point     | Probability  | DST                |
| --------- | ------------ | ------------------ |
| Value     | Single value | Range (two values) |
| Certainty | Exact        | Uncertain          |
| Example   | 70% rain     | 60%–80% rain       |


⭐ Real-Life Example 🧠  

Doctor case:  

  Disease chance = 50% to 70%  

👉 Doctor is not fully sure → uses range  


⭐ One-Line Exam Answer  

Dempster-Shafer Theory is used to represent uncertainty using belief and plausibility instead of exact 
probability.  


🎯 Easy Memory Trick  

DST = Range, not exact  


🎯 Final Summary  

Belief → minimum  
Plausibility → maximum  
      `},{id:75,question:"75. Short question and answers.",answer:"",codeExample:`
⭐ 1️⃣ 0 ≤ P(A) ≤ 1  

🔹 Meaning  
Probability value is always between 0 and 1  

🔹 Simple Idea  
0 → Impossible  
1 → Certain  

🔹 Example  
P(rain) = 0 → no rain  
P(rain) = 1 → sure rain  
P(rain) = 0.5 → maybe rain  


⭐ 2️⃣ P(A) + P(¬A) = 1  

🔹 Meaning  
Event + Not Event = 1 (100%)  

🔹 Simple Idea  
Something will either happen OR not happen  

🔹 Example  
Rain = 0.7  
No Rain = 0.3  

Total = 1  


⭐ 3️⃣ Prior → Before Evidence  

🔹 Meaning  
Probability before knowing any new information  

🔹 Example  
Chance of disease = 10% (before test)  


⭐ 4️⃣ Posterior → After Evidence ⭐  

🔹 Meaning  
Probability after getting new information  

🔹 Example  
Test is positive → New chance = 70%  


⭐ 5️⃣ Conditional Probability → P(A | B)  

🔹 Meaning  
Probability of A when B is already known  

🔹 Simple Idea  
First condition → then find probability  

🔹 Example  
Given: student is boy  
Find: plays cricket  


⭐ 6️⃣ Bayes → Update Probability  

🔹 Meaning  
Bayes theorem is used to update probability using new information  

🔹 Simple Idea  
Old value → New info → Updated value  

🔹 Example  
Before test → 10%  
After test → 70%  


⭐ Final Easy Summary  

0 ≤ P ≤ 1 → valid range  
P(A)+P(not A)=1 → total 100%  
Prior → before  
Posterior → after  
Conditional → given condition  
Bayes → update answer  


🎯 Super Easy Memory Trick  

Before → After → Update  
      
      
      `},{id:81,question:"81. What is Machine Learning? Explain its features & need.",answer:"📌 Main theory question",codeExample:`
⭐ What is Machine Learning?

🔹 Definition  
Machine Learning is a part of AI where machines learn from data and improve automatically without 
being explicitly programmed.  


🔹 Simple Meaning  
Learning from data → making decisions → improving over time  

👉 No need to write full logic → system learns itself  


⭐ Features of Machine Learning  

⭐ 1️⃣ Data-Driven  

🔹 Meaning  
ML works based on data, not hard-coded rules  

🔹 Example  
More data → better results  


⭐ 2️⃣ Adaptability  

🔹 Meaning  
ML systems can learn and improve with new data  

🔹 Example  
YouTube recommendations improve over time  


⭐ 3️⃣ Automation  

🔹 Meaning  
ML reduces human effort by automating tasks  

🔹 Example  
Spam email detection automatically  


⭐ Need of Machine Learning  

⭐ 1️⃣ Handle Large Data  

🔹 Meaning  
Humans cannot process huge data, but ML can  

🔹 Example  
Millions of user data analyzed quickly  


⭐ 2️⃣ Real-Time Prediction  

🔹 Meaning  
ML can give instant predictions  

🔹 Example  
Weather forecast, stock prediction  


⭐ Simple Diagram  

Data → Machine Learning → Prediction  


⭐ One-Line Exam Answer  

Machine Learning is a technique where systems learn from data, with features like data-driven approach, 
adaptability, and automation, and is needed for handling large data and real-time predictions.  


🎯 Easy Memory Trick  

ML = Learn from Data  
      
      `},{id:82,question:"82. Explain Types of Machine Learning.",answer:"📌 MOST IMPORTANT QUESTION 🔥",codeExample:`
⭐ First Understand Simple Idea  

Machine Learning = How a machine learns  

👉 There are 3 ways to learn, just like students 👇  


⭐ 1️⃣ Supervised Learning ⭐ (Like Teacher)  

🔹 Think Like This 🧠  
Teacher gives question + answer  

👉 Machine already knows correct answers  


🔹 Example  
Email → Spam or Not Spam (already given)  

👉 Machine learns:  
If similar email comes → detect spam  


🔹 Super Easy Line  

👉 Learn with answer  



⭐ 2️⃣ Unsupervised Learning (No Teacher)  

🔹 Think Like This 🧠  
No teacher → student finds patterns himself  


🔹 Example  
Group students by marks automatically  

👉 Machine groups:

Top students  
Average students  
Low students  


🔹 Super Easy Line  

👉 Find patterns without answer  



⭐ 3️⃣ Reinforcement Learning (Learning by Reward)  

🔹 Think Like This 🧠  
Good work → reward  
Bad work → punishment  


🔹 Example  
Game playing (like chess)  

👉 Machine learns:  
Good move → +points  
Bad move → -points  


🔹 Super Easy Line  

👉 Learn by reward and punishment  



⭐ Final Simple Comparison 🔥  

Supervised → Teacher gives answers  
Unsupervised → No answers, find patterns  
Reinforcement → Reward & punishment  


⭐ Real-Life Memory Trick 🧠  

School:  

Supervised → Teacher teaching  
Unsupervised → Self study  
Reinforcement → Marks (reward)  


⭐ One-Line Exam Answer  

Supervised learning uses labeled data, unsupervised learning finds patterns without labels, and 
reinforcement learning learns using rewards and penalties.  
      
      `},{id:83,question:"83. Explain Applications of Machine Learning.",answer:"📌 Easy scoring question",codeExample:`
⭐ Applications of Machine Learning  

⭐ 1️⃣ Healthcare  

🔹 Use  
- Disease prediction  
- Medical diagnosis  

🔹 Example  
Detect cancer from medical reports  

🔹 Simple Line  
👉 ML helps doctors find diseases early  



⭐ 2️⃣ Finance  

🔹 Use  
- Fraud detection  
- Credit scoring  

🔹 Example  
Detect fake credit card transactions  

🔹 Simple Line  
👉 ML helps secure money and banking  



⭐ 3️⃣ Retail  

🔹 Use  
- Product recommendation  
- Customer analysis  

🔹 Example  
Amazon suggests products  

🔹 Simple Line  
👉 ML helps suggest what to buy  



⭐ 4️⃣ Transportation  

🔹 Use  
- Self-driving cars  
- Traffic prediction  

🔹 Example  
Google Maps shows fastest route  

🔹 Simple Line  
👉 ML helps smart travel and driving  



⭐ 5️⃣ Social Media  

🔹 Use  
- Content recommendation  
- Face recognition  

🔹 Example  
Instagram shows posts you like  

🔹 Simple Line  
👉 ML helps show relevant content  



⭐ One-Line Exam Answer  

Machine Learning is used in healthcare, finance, retail, transportation, and social media for prediction, 
automation, and better decision-making.  



⭐ Easy Memory Trick  

Health → Money → Shopping → Travel → Social  
      



2 MARK (JUST READ)

ML = subset of AI
Training + Prediction
Supervised → labeled data
Unsupervised → no labels
Reinforcement → reward-based
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:11111,question:"Mid paper",answer:"",codeExample:`
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
      
      `},{id:7.7,question:"7. Write a program to solve N-Queens problem using Prolog.",answer:"",codeExample:`
:- initialization(main).

main :-
    N = 4,                          
    nqueens(N, Solution),
    write('Solution = '), write(Solution), nl.

% -------- LOGIC --------

nqueens(N, Solution) :-
    length(Solution, N),
    place_queens(Solution, N).

place_queens([], _).
place_queens([Col|Rest], N) :-
    place_queens(Rest, N),
    between(1, N, Col),
    safe(Col, Rest, 1).

safe(_, [], _).
safe(Col, [C|Rest], Dist) :-
    Col =\\= C,
    abs(Col - C) =\\= Dist,
    Dist1 is Dist + 1,
    safe(Col, Rest, Dist1).


    
run this ok

?- nqueens(4, Solution).
      
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""}],g=N=>{fe(C===N?null:N)};return Ue.jsxs("div",{className:"app-container",children:[Ue.jsx("h1",{children:"AI Interview Questions"}),Ue.jsx("div",{className:"questions-container",children:F.map(N=>Ue.jsxs("div",{className:"question-item",children:[Ue.jsx("button",{className:`question-button ${C===N.id?"active":""}`,onClick:()=>g(N.id),children:N.question}),C===N.id&&Ue.jsxs("div",{className:"answer-container",children:[Ue.jsxs("div",{className:"answer",children:[Ue.jsx("h3",{children:"Answer:"}),Ue.jsx("p",{children:N.answer})]}),N.codeExample&&Ue.jsxs("div",{className:"code-example",children:[Ue.jsx("h3",{children:"Code Example:"}),Ue.jsx("pre",{children:Ue.jsx("code",{children:N.codeExample})})]})]})]},N.id))})]})}ag.createRoot(document.getElementById("root")).render(Ue.jsx(Tm.StrictMode,{children:Ue.jsx(lg,{})}));

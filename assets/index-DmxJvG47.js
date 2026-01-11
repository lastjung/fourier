(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Kf={exports:{}},Co={};var Sg;function gS(){if(Sg)return Co;Sg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Co.Fragment=e,Co.jsx=i,Co.jsxs=i,Co}var yg;function _S(){return yg||(yg=1,Kf.exports=gS()),Kf.exports}var lt=_S(),Qf={exports:{}},me={};var Mg;function vS(){if(Mg)return me;Mg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),S=Symbol.iterator;function E(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,M={};function x(N,it,_t){this.props=N,this.context=it,this.refs=M,this.updater=_t||R}x.prototype.isReactComponent={},x.prototype.setState=function(N,it){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,it,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function B(){}B.prototype=x.prototype;function F(N,it,_t){this.props=N,this.context=it,this.refs=M,this.updater=_t||R}var z=F.prototype=new B;z.constructor=F,D(z,x.prototype),z.isPureReactComponent=!0;var H=Array.isArray;function L(){}var U={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function b(N,it,_t){var Rt=_t.ref;return{$$typeof:o,type:N,key:it,ref:Rt!==void 0?Rt:null,props:_t}}function C(N,it){return b(N.type,it,N.props)}function G(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function K(N){var it={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(_t){return it[_t]})}var W=/\/+/g;function pt(N,it){return typeof N=="object"&&N!==null&&N.key!=null?K(""+N.key):it.toString(36)}function ct(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(L,L):(N.status="pending",N.then(function(it){N.status==="pending"&&(N.status="fulfilled",N.value=it)},function(it){N.status==="pending"&&(N.status="rejected",N.reason=it)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function O(N,it,_t,Rt,zt){var $=typeof N;($==="undefined"||$==="boolean")&&(N=null);var dt=!1;if(N===null)dt=!0;else switch($){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(N.$$typeof){case o:case e:dt=!0;break;case g:return dt=N._init,O(dt(N._payload),it,_t,Rt,zt)}}if(dt)return zt=zt(N),dt=Rt===""?"."+pt(N,0):Rt,H(zt)?(_t="",dt!=null&&(_t=dt.replace(W,"$&/")+"/"),O(zt,it,_t,"",function(Ot){return Ot})):zt!=null&&(G(zt)&&(zt=C(zt,_t+(zt.key==null||N&&N.key===zt.key?"":(""+zt.key).replace(W,"$&/")+"/")+dt)),it.push(zt)),1;dt=0;var Ct=Rt===""?".":Rt+":";if(H(N))for(var Ft=0;Ft<N.length;Ft++)Rt=N[Ft],$=Ct+pt(Rt,Ft),dt+=O(Rt,it,_t,$,zt);else if(Ft=E(N),typeof Ft=="function")for(N=Ft.call(N),Ft=0;!(Rt=N.next()).done;)Rt=Rt.value,$=Ct+pt(Rt,Ft++),dt+=O(Rt,it,_t,$,zt);else if($==="object"){if(typeof N.then=="function")return O(ct(N),it,_t,Rt,zt);throw it=String(N),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return dt}function P(N,it,_t){if(N==null)return N;var Rt=[],zt=0;return O(N,Rt,"","",function($){return it.call(_t,$,zt++)}),Rt}function J(N){if(N._status===-1){var it=N._result;it=it(),it.then(function(_t){(N._status===0||N._status===-1)&&(N._status=1,N._result=_t)},function(_t){(N._status===0||N._status===-1)&&(N._status=2,N._result=_t)}),N._status===-1&&(N._status=0,N._result=it)}if(N._status===1)return N._result.default;throw N._result}var bt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},yt={map:P,forEach:function(N,it,_t){P(N,function(){it.apply(this,arguments)},_t)},count:function(N){var it=0;return P(N,function(){it++}),it},toArray:function(N){return P(N,function(it){return it})||[]},only:function(N){if(!G(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return me.Activity=v,me.Children=yt,me.Component=x,me.Fragment=i,me.Profiler=l,me.PureComponent=F,me.StrictMode=r,me.Suspense=m,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,me.__COMPILER_RUNTIME={__proto__:null,c:function(N){return U.H.useMemoCache(N)}},me.cache=function(N){return function(){return N.apply(null,arguments)}},me.cacheSignal=function(){return null},me.cloneElement=function(N,it,_t){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Rt=D({},N.props),zt=N.key;if(it!=null)for($ in it.key!==void 0&&(zt=""+it.key),it)!q.call(it,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&it.ref===void 0||(Rt[$]=it[$]);var $=arguments.length-2;if($===1)Rt.children=_t;else if(1<$){for(var dt=Array($),Ct=0;Ct<$;Ct++)dt[Ct]=arguments[Ct+2];Rt.children=dt}return b(N.type,zt,Rt)},me.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},me.createElement=function(N,it,_t){var Rt,zt={},$=null;if(it!=null)for(Rt in it.key!==void 0&&($=""+it.key),it)q.call(it,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(zt[Rt]=it[Rt]);var dt=arguments.length-2;if(dt===1)zt.children=_t;else if(1<dt){for(var Ct=Array(dt),Ft=0;Ft<dt;Ft++)Ct[Ft]=arguments[Ft+2];zt.children=Ct}if(N&&N.defaultProps)for(Rt in dt=N.defaultProps,dt)zt[Rt]===void 0&&(zt[Rt]=dt[Rt]);return b(N,$,zt)},me.createRef=function(){return{current:null}},me.forwardRef=function(N){return{$$typeof:d,render:N}},me.isValidElement=G,me.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:J}},me.memo=function(N,it){return{$$typeof:p,type:N,compare:it===void 0?null:it}},me.startTransition=function(N){var it=U.T,_t={};U.T=_t;try{var Rt=N(),zt=U.S;zt!==null&&zt(_t,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(L,bt)}catch($){bt($)}finally{it!==null&&_t.types!==null&&(it.types=_t.types),U.T=it}},me.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},me.use=function(N){return U.H.use(N)},me.useActionState=function(N,it,_t){return U.H.useActionState(N,it,_t)},me.useCallback=function(N,it){return U.H.useCallback(N,it)},me.useContext=function(N){return U.H.useContext(N)},me.useDebugValue=function(){},me.useDeferredValue=function(N,it){return U.H.useDeferredValue(N,it)},me.useEffect=function(N,it){return U.H.useEffect(N,it)},me.useEffectEvent=function(N){return U.H.useEffectEvent(N)},me.useId=function(){return U.H.useId()},me.useImperativeHandle=function(N,it,_t){return U.H.useImperativeHandle(N,it,_t)},me.useInsertionEffect=function(N,it){return U.H.useInsertionEffect(N,it)},me.useLayoutEffect=function(N,it){return U.H.useLayoutEffect(N,it)},me.useMemo=function(N,it){return U.H.useMemo(N,it)},me.useOptimistic=function(N,it){return U.H.useOptimistic(N,it)},me.useReducer=function(N,it,_t){return U.H.useReducer(N,it,_t)},me.useRef=function(N){return U.H.useRef(N)},me.useState=function(N){return U.H.useState(N)},me.useSyncExternalStore=function(N,it,_t){return U.H.useSyncExternalStore(N,it,_t)},me.useTransition=function(){return U.H.useTransition()},me.version="19.2.3",me}var Eg;function Dd(){return Eg||(Eg=1,Qf.exports=vS()),Qf.exports}var de=Dd(),Jf={exports:{}},wo={},$f={exports:{}},th={};var bg;function xS(){return bg||(bg=1,(function(o){function e(O,P){var J=O.length;O.push(P);t:for(;0<J;){var bt=J-1>>>1,yt=O[bt];if(0<l(yt,P))O[bt]=P,O[J]=yt,J=bt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var P=O[0],J=O.pop();if(J!==P){O[0]=J;t:for(var bt=0,yt=O.length,N=yt>>>1;bt<N;){var it=2*(bt+1)-1,_t=O[it],Rt=it+1,zt=O[Rt];if(0>l(_t,J))Rt<yt&&0>l(zt,_t)?(O[bt]=zt,O[Rt]=J,bt=Rt):(O[bt]=_t,O[it]=J,bt=it);else if(Rt<yt&&0>l(zt,J))O[bt]=zt,O[Rt]=J,bt=Rt;else break t}}return P}function l(O,P){var J=O.sortIndex-P.sortIndex;return J!==0?J:O.id-P.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,S=3,E=!1,R=!1,D=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function z(O){for(var P=i(p);P!==null;){if(P.callback===null)r(p);else if(P.startTime<=O)r(p),P.sortIndex=P.expirationTime,e(m,P);else break;P=i(p)}}function H(O){if(D=!1,z(O),!R)if(i(m)!==null)R=!0,L||(L=!0,K());else{var P=i(p);P!==null&&ct(H,P.startTime-O)}}var L=!1,U=-1,q=5,b=-1;function C(){return M?!0:!(o.unstable_now()-b<q)}function G(){if(M=!1,L){var O=o.unstable_now();b=O;var P=!0;try{t:{R=!1,D&&(D=!1,B(U),U=-1),E=!0;var J=S;try{e:{for(z(O),v=i(m);v!==null&&!(v.expirationTime>O&&C());){var bt=v.callback;if(typeof bt=="function"){v.callback=null,S=v.priorityLevel;var yt=bt(v.expirationTime<=O);if(O=o.unstable_now(),typeof yt=="function"){v.callback=yt,z(O),P=!0;break e}v===i(m)&&r(m),z(O)}else r(m);v=i(m)}if(v!==null)P=!0;else{var N=i(p);N!==null&&ct(H,N.startTime-O),P=!1}}break t}finally{v=null,S=J,E=!1}P=void 0}}finally{P?K():L=!1}}}var K;if(typeof F=="function")K=function(){F(G)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,pt=W.port2;W.port1.onmessage=G,K=function(){pt.postMessage(null)}}else K=function(){x(G,0)};function ct(O,P){U=x(function(){O(o.unstable_now())},P)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(O){switch(S){case 1:case 2:case 3:var P=3;break;default:P=S}var J=S;S=P;try{return O()}finally{S=J}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(O,P){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var J=S;S=O;try{return P()}finally{S=J}},o.unstable_scheduleCallback=function(O,P,J){var bt=o.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?bt+J:bt):J=bt,O){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=J+yt,O={id:g++,callback:P,priorityLevel:O,startTime:J,expirationTime:yt,sortIndex:-1},J>bt?(O.sortIndex=J,e(p,O),i(m)===null&&O===i(p)&&(D?(B(U),U=-1):D=!0,ct(H,J-bt))):(O.sortIndex=yt,e(m,O),R||E||(R=!0,L||(L=!0,K()))),O},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(O){var P=S;return function(){var J=S;S=P;try{return O.apply(this,arguments)}finally{S=J}}}})(th)),th}var Tg;function SS(){return Tg||(Tg=1,$f.exports=xS()),$f.exports}var eh={exports:{}},Dn={};var Ag;function yS(){if(Ag)return Dn;Ag=1;var o=Dd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},Dn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:E}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Dn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Dn.version="19.2.3",Dn}var Rg;function MS(){if(Rg)return eh.exports;Rg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),eh.exports=yS(),eh.exports}var Cg;function ES(){if(Cg)return wo;Cg=1;var o=SS(),e=Dd(),i=MS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var _=!1,T=c.child;T;){if(T===a){_=!0,a=c,s=f;break}if(T===s){_=!0,s=c,a=f;break}T=T.sibling}if(!_){for(T=f.child;T;){if(T===a){_=!0,a=f,s=c;break}if(T===s){_=!0,s=f,a=c;break}T=T.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),F=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var W=Symbol.for("react.client.reference");function pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===W?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case H:return"Suspense";case L:return"SuspenseList";case b:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case F:return t.displayName||"Context";case B:return(t._context.displayName||"Context")+".Consumer";case z:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case U:return n=t.displayName||null,n!==null?n:pt(t.type)||"Memo";case q:n=t._payload,t=t._init;try{return pt(t(n))}catch{}}return null}var ct=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},bt=[],yt=-1;function N(t){return{current:t}}function it(t){0>yt||(t.current=bt[yt],bt[yt]=null,yt--)}function _t(t,n){yt++,bt[yt]=t.current,t.current=n}var Rt=N(null),zt=N(null),$=N(null),dt=N(null);function Ct(t,n){switch(_t($,n),_t(zt,t),_t(Rt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?X0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=X0(n),t=k0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}it(Rt),_t(Rt,t)}function Ft(){it(Rt),it(zt),it($)}function Ot(t){t.memoizedState!==null&&_t(dt,t);var n=Rt.current,a=k0(n,t.type);n!==a&&(_t(zt,t),_t(Rt,a))}function fe(t){zt.current===t&&(it(Rt),it(zt)),dt.current===t&&(it(dt),bo._currentValue=J)}var at,Mt;function Pt(t){if(at===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);at=n&&n[1]||"",Mt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+at+t+Mt}var Jt=!1;function Lt(t,n){if(!t||Jt)return"";Jt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ft){var ot=ft}Reflect.construct(t,[],xt)}else{try{xt.call()}catch(ft){ot=ft}t.call(xt.prototype)}}else{try{throw Error()}catch(ft){ot=ft}(xt=t())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ft){if(ft&&ot&&typeof ft.stack=="string")return[ft.stack,ot.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],T=f[1];if(_&&T){var V=_.split(`
`),et=T.split(`
`);for(c=s=0;s<V.length&&!V[s].includes("DetermineComponentFrameRoot");)s++;for(;c<et.length&&!et[c].includes("DetermineComponentFrameRoot");)c++;if(s===V.length||c===et.length)for(s=V.length-1,c=et.length-1;1<=s&&0<=c&&V[s]!==et[c];)c--;for(;1<=s&&0<=c;s--,c--)if(V[s]!==et[c]){if(s!==1||c!==1)do if(s--,c--,0>c||V[s]!==et[c]){var mt=`
`+V[s].replace(" at new "," at ");return t.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",t.displayName)),mt}while(1<=s&&0<=c);break}}}finally{Jt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Pt(a):""}function re(t,n){switch(t.tag){case 26:case 27:case 5:return Pt(t.type);case 16:return Pt("Lazy");case 13:return t.child!==n&&n!==null?Pt("Suspense Fallback"):Pt("Suspense");case 19:return Pt("SuspenseList");case 0:case 15:return Lt(t.type,!1);case 11:return Lt(t.type.render,!1);case 1:return Lt(t.type,!0);case 31:return Pt("Activity");default:return""}}function I(t){try{var n="",a=null;do n+=re(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var ye=Object.prototype.hasOwnProperty,le=o.unstable_scheduleCallback,Yt=o.unstable_cancelCallback,Et=o.unstable_shouldYield,w=o.unstable_requestPaint,y=o.unstable_now,X=o.unstable_getCurrentPriorityLevel,rt=o.unstable_ImmediatePriority,gt=o.unstable_UserBlockingPriority,ht=o.unstable_NormalPriority,jt=o.unstable_LowPriority,wt=o.unstable_IdlePriority,Qt=o.log,ce=o.unstable_setDisableYieldValue,At=null,Dt=null;function Wt(t){if(typeof Qt=="function"&&ce(t),Dt&&typeof Dt.setStrictMode=="function")try{Dt.setStrictMode(At,t)}catch{}}var Xt=Math.clz32?Math.clz32:Y,Bt=Math.log,_e=Math.LN2;function Y(t){return t>>>=0,t===0?32:31-(Bt(t)/_e|0)|0}var Ht=256,Ut=262144,kt=4194304;function Tt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function St(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=Tt(s):(_&=T,_!==0?c=Tt(_):a||(a=T&~t,a!==0&&(c=Tt(a))))):(T=s&~f,T!==0?c=Tt(T):_!==0?c=Tt(_):a||(a=s&~t,a!==0&&(c=Tt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Nt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ue(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var t=kt;return kt<<=1,(kt&62914560)===0&&(kt=4194304),t}function Ce(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function wn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function gi(t,n,a,s,c,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,V=t.expirationTimes,et=t.hiddenUpdates;for(a=_&~a;0<a;){var mt=31-Xt(a),xt=1<<mt;T[mt]=0,V[mt]=-1;var ot=et[mt];if(ot!==null)for(et[mt]=null,mt=0;mt<ot.length;mt++){var ft=ot[mt];ft!==null&&(ft.lane&=-536870913)}a&=~xt}s!==0&&Zo(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Zo(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Xt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Ps(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Xt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Dr(t,n){var a=n&-n;return a=(a&42)!==0?1:zs(a),(a&(t.suspendedLanes|n))!==0?0:a}function zs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ur(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Fs(){var t=P.p;return t!==0?t:(t=window.event,t===void 0?32:dg(t.type))}function Ci(t,n){var a=P.p;try{return P.p=t,n()}finally{P.p=a}}var ii=Math.random().toString(36).slice(2),sn="__reactFiber$"+ii,vn="__reactProps$"+ii,_i="__reactContainer$"+ii,Lr="__reactEvents$"+ii,Nr="__reactListeners$"+ii,Ko="__reactHandles$"+ii,Bs="__reactResources$"+ii,tr="__reactMarker$"+ii;function Is(t){delete t[sn],delete t[vn],delete t[Lr],delete t[Nr],delete t[Ko]}function xa(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[_i]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Q0(t);t!==null;){if(a=t[sn])return a;t=Q0(t)}return n}t=a,a=t.parentNode}return null}function Sa(t){if(t=t[sn]||t[_i]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function er(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ya(t){var n=t[Bs];return n||(n=t[Bs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function A(t){t[tr]=!0}var j=new Set,ut={};function st(t,n){Q(t,n),Q(t+"Capture",n)}function Q(t,n){for(ut[t]=n,t=0;t<n.length;t++)j.add(n[t])}var It=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qt={},Gt={};function Zt(t){return ye.call(Gt,t)?!0:ye.call(qt,t)?!1:It.test(t)?Gt[t]=!0:(qt[t]=!0,!1)}function $t(t,n,a){if(Zt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ae(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function te(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function se(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Oe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function je(t){if(!t._valueTracker){var n=Oe(t)?"checked":"value";t._valueTracker=Qe(t,n,""+t[n])}}function Fe(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Oe(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function ne(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Pe=/[\n"\\]/g;function he(t){return t.replace(Pe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function xn(t,n,a,s,c,f,_,T){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+se(n)):t.value!==""+se(n)&&(t.value=""+se(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?Sn(t,_,se(n)):a!=null?Sn(t,_,se(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+se(T):t.removeAttribute("name")}function Vi(t,n,a,s,c,f,_,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){je(t);return}a=a!=null?""+se(a):"",n=n!=null?""+se(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),je(t)}function Sn(t,n,a){n==="number"&&ne(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ai(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+se(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function He(t,n,a){if(n!=null&&(n=""+se(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+se(a):""}function yn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ct(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=se(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),je(t)}function hn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function En(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Mn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Or(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&En(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&En(t,f,n[f])}function vi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qo(t){return dv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Xi(){}var qc=null;function Yc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pr=null,zr=null;function Vd(t){var n=Sa(t);if(n&&(t=n.stateNode)){var a=t[vn]||null;t:switch(t=n.stateNode,n.type){case"input":if(xn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+he(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[vn]||null;if(!c)throw Error(r(90));xn(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Fe(s)}break t;case"textarea":He(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ai(t,!!a.multiple,n,!1)}}}var jc=!1;function Xd(t,n,a){if(jc)return t(n,a);jc=!0;try{var s=t(n);return s}finally{if(jc=!1,(Pr!==null||zr!==null)&&(Bl(),Pr&&(n=Pr,t=zr,zr=Pr=null,Vd(n),t)))for(n=0;n<t.length;n++)Vd(t[n])}}function Hs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[vn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=!1;if(ki)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Zc=!1}var Ma=null,Kc=null,Jo=null;function kd(){if(Jo)return Jo;var t,n=Kc,a=n.length,s,c="value"in Ma?Ma.value:Ma.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===c[f-s];s++);return Jo=c.slice(t,1<s?1-s:void 0)}function $o(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function Wd(){return!1}function Bn(t){function n(a,s,c,f,_){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tl:Wd,this.isPropagationStopped=Wd,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),n}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=Bn(nr),Vs=v({},nr,{view:0,detail:0}),pv=Bn(Vs),Qc,Jc,Xs,nl=v({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(Qc=t.screenX-Xs.screenX,Jc=t.screenY-Xs.screenY):Jc=Qc=0,Xs=t),Qc)},movementY:function(t){return"movementY"in t?t.movementY:Jc}}),qd=Bn(nl),mv=v({},nl,{dataTransfer:0}),gv=Bn(mv),_v=v({},Vs,{relatedTarget:0}),$c=Bn(_v),vv=v({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),xv=Bn(vv),Sv=v({},nr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yv=Bn(Sv),Mv=v({},nr,{data:0}),Yd=Bn(Mv),Ev={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Av(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Tv[t])?!!n[t]:!1}function tu(){return Av}var Rv=v({},Vs,{key:function(t){if(t.key){var n=Ev[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=$o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(t){return t.type==="keypress"?$o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Cv=Bn(Rv),wv=v({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=Bn(wv),Dv=v({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),Uv=Bn(Dv),Lv=v({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nv=Bn(Lv),Ov=v({},nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Pv=Bn(Ov),zv=v({},nr,{newState:0,oldState:0}),Fv=Bn(zv),Bv=[9,13,27,32],eu=ki&&"CompositionEvent"in window,ks=null;ki&&"documentMode"in document&&(ks=document.documentMode);var Iv=ki&&"TextEvent"in window&&!ks,Zd=ki&&(!eu||ks&&8<ks&&11>=ks),Kd=" ",Qd=!1;function Jd(t,n){switch(t){case"keyup":return Bv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $d(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fr=!1;function Hv(t,n){switch(t){case"compositionend":return $d(n);case"keypress":return n.which!==32?null:(Qd=!0,Kd);case"textInput":return t=n.data,t===Kd&&Qd?null:t;default:return null}}function Gv(t,n){if(Fr)return t==="compositionend"||!eu&&Jd(t,n)?(t=kd(),Jo=Kc=Ma=null,Fr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zd&&n.locale!=="ko"?null:n.data;default:return null}}var Vv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Vv[t.type]:n==="textarea"}function ep(t,n,a,s){Pr?zr?zr.push(s):zr=[s]:Pr=s,n=Wl(n,"onChange"),0<n.length&&(a=new el("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Ws=null,qs=null;function Xv(t){F0(t,0)}function il(t){var n=er(t);if(Fe(n))return t}function np(t,n){if(t==="change")return n}var ip=!1;if(ki){var nu;if(ki){var iu="oninput"in document;if(!iu){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),iu=typeof ap.oninput=="function"}nu=iu}else nu=!1;ip=nu&&(!document.documentMode||9<document.documentMode)}function rp(){Ws&&(Ws.detachEvent("onpropertychange",sp),qs=Ws=null)}function sp(t){if(t.propertyName==="value"&&il(qs)){var n=[];ep(n,qs,t,Yc(t)),Xd(Xv,n)}}function kv(t,n,a){t==="focusin"?(rp(),Ws=n,qs=a,Ws.attachEvent("onpropertychange",sp)):t==="focusout"&&rp()}function Wv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return il(qs)}function qv(t,n){if(t==="click")return il(n)}function Yv(t,n){if(t==="input"||t==="change")return il(n)}function jv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var qn=typeof Object.is=="function"?Object.is:jv;function Ys(t,n){if(qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!ye.call(n,c)||!qn(t[c],n[c]))return!1}return!0}function op(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lp(t,n){var a=op(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=op(a)}}function cp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?cp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function up(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ne(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ne(t.document)}return n}function au(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Zv=ki&&"documentMode"in document&&11>=document.documentMode,Br=null,ru=null,js=null,su=!1;function fp(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;su||Br==null||Br!==ne(s)||(s=Br,"selectionStart"in s&&au(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),js&&Ys(js,s)||(js=s,s=Wl(ru,"onSelect"),0<s.length&&(n=new el("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Br)))}function ir(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ir={animationend:ir("Animation","AnimationEnd"),animationiteration:ir("Animation","AnimationIteration"),animationstart:ir("Animation","AnimationStart"),transitionrun:ir("Transition","TransitionRun"),transitionstart:ir("Transition","TransitionStart"),transitioncancel:ir("Transition","TransitionCancel"),transitionend:ir("Transition","TransitionEnd")},ou={},hp={};ki&&(hp=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function ar(t){if(ou[t])return ou[t];if(!Ir[t])return t;var n=Ir[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in hp)return ou[t]=n[a];return t}var dp=ar("animationend"),pp=ar("animationiteration"),mp=ar("animationstart"),Kv=ar("transitionrun"),Qv=ar("transitionstart"),Jv=ar("transitioncancel"),gp=ar("transitionend"),_p=new Map,lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lu.push("scrollEnd");function xi(t,n){_p.set(t,n),st(n,[t])}var al=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ri=[],Hr=0,cu=0;function rl(){for(var t=Hr,n=cu=Hr=0;n<t;){var a=ri[n];ri[n++]=null;var s=ri[n];ri[n++]=null;var c=ri[n];ri[n++]=null;var f=ri[n];if(ri[n++]=null,s!==null&&c!==null){var _=s.pending;_===null?c.next=c:(c.next=_.next,_.next=c),s.pending=c}f!==0&&vp(a,c,f)}}function sl(t,n,a,s){ri[Hr++]=t,ri[Hr++]=n,ri[Hr++]=a,ri[Hr++]=s,cu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function uu(t,n,a,s){return sl(t,n,a,s),ol(t)}function rr(t,n){return sl(t,null,null,n),ol(t)}function vp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Xt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function ol(t){if(50<_o)throw _o=0,Sf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Gr={};function $v(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,n,a,s){return new $v(t,n,a,s)}function fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wi(t,n){var a=t.alternate;return a===null?(a=Yn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function xp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ll(t,n,a,s,c,f){var _=0;if(s=t,typeof t=="function")fu(t)&&(_=1);else if(typeof t=="string")_=aS(t,a,Rt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case b:return t=Yn(31,a,n,c),t.elementType=b,t.lanes=f,t;case D:return sr(a.children,c,f,n);case M:_=8,c|=24;break;case x:return t=Yn(12,a,n,c|2),t.elementType=x,t.lanes=f,t;case H:return t=Yn(13,a,n,c),t.elementType=H,t.lanes=f,t;case L:return t=Yn(19,a,n,c),t.elementType=L,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F:_=10;break t;case B:_=9;break t;case z:_=11;break t;case U:_=14;break t;case q:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Yn(_,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function sr(t,n,a,s){return t=Yn(7,t,s,n),t.lanes=a,t}function hu(t,n,a){return t=Yn(6,t,null,n),t.lanes=a,t}function Sp(t){var n=Yn(18,null,null,0);return n.stateNode=t,n}function du(t,n,a){return n=Yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var yp=new WeakMap;function si(t,n){if(typeof t=="object"&&t!==null){var a=yp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:I(n)},yp.set(t,n),n)}return{value:t,source:n,stack:I(n)}}var Vr=[],Xr=0,cl=null,Zs=0,oi=[],li=0,Ea=null,wi=1,Di="";function qi(t,n){Vr[Xr++]=Zs,Vr[Xr++]=cl,cl=t,Zs=n}function Mp(t,n,a){oi[li++]=wi,oi[li++]=Di,oi[li++]=Ea,Ea=t;var s=wi;t=Di;var c=32-Xt(s)-1;s&=~(1<<c),a+=1;var f=32-Xt(n)+c;if(30<f){var _=c-c%5;f=(s&(1<<_)-1).toString(32),s>>=_,c-=_,wi=1<<32-Xt(n)+c|a<<c|s,Di=f+t}else wi=1<<f|a<<c|s,Di=t}function pu(t){t.return!==null&&(qi(t,1),Mp(t,1,0))}function mu(t){for(;t===cl;)cl=Vr[--Xr],Vr[Xr]=null,Zs=Vr[--Xr],Vr[Xr]=null;for(;t===Ea;)Ea=oi[--li],oi[li]=null,Di=oi[--li],oi[li]=null,wi=oi[--li],oi[li]=null}function Ep(t,n){oi[li++]=wi,oi[li++]=Di,oi[li++]=Ea,wi=n.id,Di=n.overflow,Ea=t}var bn=null,Ze=null,Ae=!1,ba=null,ci=!1,gu=Error(r(519));function Ta(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ks(si(n,t)),gu}function bp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[sn]=t,n[vn]=s,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)Ee(xo[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),Vi(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),yn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||G0(n.textContent,a)?(s.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),s.onScroll!=null&&Ee("scroll",n),s.onScrollEnd!=null&&Ee("scrollend",n),s.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||Ta(t,!0)}function Tp(t){for(bn=t.return;bn;)switch(bn.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:bn=bn.return}}function kr(t){if(t!==bn)return!1;if(!Ae)return Tp(t),Ae=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Pf(t.type,t.memoizedProps)),a=!a),a&&Ze&&Ta(t),Tp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=K0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=K0(t)}else n===27?(n=Ze,Ia(t.type)?(t=Hf,Hf=null,Ze=t):Ze=n):Ze=bn?fi(t.stateNode.nextSibling):null;return!0}function or(){Ze=bn=null,Ae=!1}function _u(){var t=ba;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),ba=null),t}function Ks(t){ba===null?ba=[t]:ba.push(t)}var vu=N(null),lr=null,Yi=null;function Aa(t,n,a){_t(vu,n._currentValue),n._currentValue=a}function ji(t){t._currentValue=vu.current,it(vu)}function xu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Su(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var V=0;V<n.length;V++)if(T.context===n[V]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),xu(f.return,a,t),s||(_=null);break t}f=T.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),xu(_,a,t),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Wr(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var T=c.type;qn(c.pendingProps.value,_.value)||(t!==null?t.push(T):t=[T])}}else if(c===dt.current){if(_=c.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(bo):t=[bo])}c=c.return}t!==null&&Su(n,t,a,s),n.flags|=262144}function ul(t){for(t=t.firstContext;t!==null;){if(!qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function cr(t){lr=t,Yi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return Ap(lr,t)}function fl(t,n){return lr===null&&cr(t),Ap(t,n)}function Ap(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Yi===null){if(t===null)throw Error(r(308));Yi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Yi=Yi.next=n;return a}var tx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ex=o.unstable_scheduleCallback,nx=o.unstable_NormalPriority,on={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yu(){return{controller:new tx,data:new Map,refCount:0}}function Qs(t){t.refCount--,t.refCount===0&&ex(nx,function(){t.controller.abort()})}var Js=null,Mu=0,qr=0,Yr=null;function ix(t,n){if(Js===null){var a=Js=[];Mu=0,qr=Af(),Yr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Mu++,n.then(Rp,Rp),n}function Rp(){if(--Mu===0&&Js!==null){Yr!==null&&(Yr.status="fulfilled");var t=Js;Js=null,qr=0,Yr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ax(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Cp=O.S;O.S=function(t,n){f0=y(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ix(t,n),Cp!==null&&Cp(t,n)};var ur=N(null);function Eu(){var t=ur.current;return t!==null?t:Ye.pooledCache}function hl(t,n){n===null?_t(ur,ur.current):_t(ur,n.pool)}function wp(){var t=Eu();return t===null?null:{parent:on._currentValue,pool:t}}var jr=Error(r(460)),bu=Error(r(474)),dl=Error(r(542)),pl={then:function(){}};function Dp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Up(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Xi,Xi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Np(t),t;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(t=Ye,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Np(t),t}throw hr=n,jr}}function fr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(hr=a,jr):a}}var hr=null;function Lp(){if(hr===null)throw Error(r(459));var t=hr;return hr=null,t}function Np(t){if(t===jr||t===dl)throw Error(r(483))}var Zr=null,$s=0;function ml(t){var n=$s;return $s+=1,Zr===null&&(Zr=[]),Up(Zr,t,n)}function to(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function gl(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Op(t){function n(Z,k){if(t){var tt=Z.deletions;tt===null?(Z.deletions=[k],Z.flags|=16):tt.push(k)}}function a(Z,k){if(!t)return null;for(;k!==null;)n(Z,k),k=k.sibling;return null}function s(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function c(Z,k){return Z=Wi(Z,k),Z.index=0,Z.sibling=null,Z}function f(Z,k,tt){return Z.index=tt,t?(tt=Z.alternate,tt!==null?(tt=tt.index,tt<k?(Z.flags|=67108866,k):tt):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function _(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function T(Z,k,tt,vt){return k===null||k.tag!==6?(k=hu(tt,Z.mode,vt),k.return=Z,k):(k=c(k,tt),k.return=Z,k)}function V(Z,k,tt,vt){var ie=tt.type;return ie===D?mt(Z,k,tt.props.children,vt,tt.key):k!==null&&(k.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===q&&fr(ie)===k.type)?(k=c(k,tt.props),to(k,tt),k.return=Z,k):(k=ll(tt.type,tt.key,tt.props,null,Z.mode,vt),to(k,tt),k.return=Z,k)}function et(Z,k,tt,vt){return k===null||k.tag!==4||k.stateNode.containerInfo!==tt.containerInfo||k.stateNode.implementation!==tt.implementation?(k=du(tt,Z.mode,vt),k.return=Z,k):(k=c(k,tt.children||[]),k.return=Z,k)}function mt(Z,k,tt,vt,ie){return k===null||k.tag!==7?(k=sr(tt,Z.mode,vt,ie),k.return=Z,k):(k=c(k,tt),k.return=Z,k)}function xt(Z,k,tt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=hu(""+k,Z.mode,tt),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case E:return tt=ll(k.type,k.key,k.props,null,Z.mode,tt),to(tt,k),tt.return=Z,tt;case R:return k=du(k,Z.mode,tt),k.return=Z,k;case q:return k=fr(k),xt(Z,k,tt)}if(ct(k)||K(k))return k=sr(k,Z.mode,tt,null),k.return=Z,k;if(typeof k.then=="function")return xt(Z,ml(k),tt);if(k.$$typeof===F)return xt(Z,fl(Z,k),tt);gl(Z,k)}return null}function ot(Z,k,tt,vt){var ie=k!==null?k.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return ie!==null?null:T(Z,k,""+tt,vt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case E:return tt.key===ie?V(Z,k,tt,vt):null;case R:return tt.key===ie?et(Z,k,tt,vt):null;case q:return tt=fr(tt),ot(Z,k,tt,vt)}if(ct(tt)||K(tt))return ie!==null?null:mt(Z,k,tt,vt,null);if(typeof tt.then=="function")return ot(Z,k,ml(tt),vt);if(tt.$$typeof===F)return ot(Z,k,fl(Z,tt),vt);gl(Z,tt)}return null}function ft(Z,k,tt,vt,ie){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return Z=Z.get(tt)||null,T(k,Z,""+vt,ie);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case E:return Z=Z.get(vt.key===null?tt:vt.key)||null,V(k,Z,vt,ie);case R:return Z=Z.get(vt.key===null?tt:vt.key)||null,et(k,Z,vt,ie);case q:return vt=fr(vt),ft(Z,k,tt,vt,ie)}if(ct(vt)||K(vt))return Z=Z.get(tt)||null,mt(k,Z,vt,ie,null);if(typeof vt.then=="function")return ft(Z,k,tt,ml(vt),ie);if(vt.$$typeof===F)return ft(Z,k,tt,fl(k,vt),ie);gl(k,vt)}return null}function Kt(Z,k,tt,vt){for(var ie=null,Ue=null,ee=k,ve=k=0,Te=null;ee!==null&&ve<tt.length;ve++){ee.index>ve?(Te=ee,ee=null):Te=ee.sibling;var Le=ot(Z,ee,tt[ve],vt);if(Le===null){ee===null&&(ee=Te);break}t&&ee&&Le.alternate===null&&n(Z,ee),k=f(Le,k,ve),Ue===null?ie=Le:Ue.sibling=Le,Ue=Le,ee=Te}if(ve===tt.length)return a(Z,ee),Ae&&qi(Z,ve),ie;if(ee===null){for(;ve<tt.length;ve++)ee=xt(Z,tt[ve],vt),ee!==null&&(k=f(ee,k,ve),Ue===null?ie=ee:Ue.sibling=ee,Ue=ee);return Ae&&qi(Z,ve),ie}for(ee=s(ee);ve<tt.length;ve++)Te=ft(ee,Z,ve,tt[ve],vt),Te!==null&&(t&&Te.alternate!==null&&ee.delete(Te.key===null?ve:Te.key),k=f(Te,k,ve),Ue===null?ie=Te:Ue.sibling=Te,Ue=Te);return t&&ee.forEach(function(ka){return n(Z,ka)}),Ae&&qi(Z,ve),ie}function oe(Z,k,tt,vt){if(tt==null)throw Error(r(151));for(var ie=null,Ue=null,ee=k,ve=k=0,Te=null,Le=tt.next();ee!==null&&!Le.done;ve++,Le=tt.next()){ee.index>ve?(Te=ee,ee=null):Te=ee.sibling;var ka=ot(Z,ee,Le.value,vt);if(ka===null){ee===null&&(ee=Te);break}t&&ee&&ka.alternate===null&&n(Z,ee),k=f(ka,k,ve),Ue===null?ie=ka:Ue.sibling=ka,Ue=ka,ee=Te}if(Le.done)return a(Z,ee),Ae&&qi(Z,ve),ie;if(ee===null){for(;!Le.done;ve++,Le=tt.next())Le=xt(Z,Le.value,vt),Le!==null&&(k=f(Le,k,ve),Ue===null?ie=Le:Ue.sibling=Le,Ue=Le);return Ae&&qi(Z,ve),ie}for(ee=s(ee);!Le.done;ve++,Le=tt.next())Le=ft(ee,Z,ve,Le.value,vt),Le!==null&&(t&&Le.alternate!==null&&ee.delete(Le.key===null?ve:Le.key),k=f(Le,k,ve),Ue===null?ie=Le:Ue.sibling=Le,Ue=Le);return t&&ee.forEach(function(mS){return n(Z,mS)}),Ae&&qi(Z,ve),ie}function qe(Z,k,tt,vt){if(typeof tt=="object"&&tt!==null&&tt.type===D&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case E:t:{for(var ie=tt.key;k!==null;){if(k.key===ie){if(ie=tt.type,ie===D){if(k.tag===7){a(Z,k.sibling),vt=c(k,tt.props.children),vt.return=Z,Z=vt;break t}}else if(k.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===q&&fr(ie)===k.type){a(Z,k.sibling),vt=c(k,tt.props),to(vt,tt),vt.return=Z,Z=vt;break t}a(Z,k);break}else n(Z,k);k=k.sibling}tt.type===D?(vt=sr(tt.props.children,Z.mode,vt,tt.key),vt.return=Z,Z=vt):(vt=ll(tt.type,tt.key,tt.props,null,Z.mode,vt),to(vt,tt),vt.return=Z,Z=vt)}return _(Z);case R:t:{for(ie=tt.key;k!==null;){if(k.key===ie)if(k.tag===4&&k.stateNode.containerInfo===tt.containerInfo&&k.stateNode.implementation===tt.implementation){a(Z,k.sibling),vt=c(k,tt.children||[]),vt.return=Z,Z=vt;break t}else{a(Z,k);break}else n(Z,k);k=k.sibling}vt=du(tt,Z.mode,vt),vt.return=Z,Z=vt}return _(Z);case q:return tt=fr(tt),qe(Z,k,tt,vt)}if(ct(tt))return Kt(Z,k,tt,vt);if(K(tt)){if(ie=K(tt),typeof ie!="function")throw Error(r(150));return tt=ie.call(tt),oe(Z,k,tt,vt)}if(typeof tt.then=="function")return qe(Z,k,ml(tt),vt);if(tt.$$typeof===F)return qe(Z,k,fl(Z,tt),vt);gl(Z,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,k!==null&&k.tag===6?(a(Z,k.sibling),vt=c(k,tt),vt.return=Z,Z=vt):(a(Z,k),vt=hu(tt,Z.mode,vt),vt.return=Z,Z=vt),_(Z)):a(Z,k)}return function(Z,k,tt,vt){try{$s=0;var ie=qe(Z,k,tt,vt);return Zr=null,ie}catch(ee){if(ee===jr||ee===dl)throw ee;var Ue=Yn(29,ee,null,Z.mode);return Ue.lanes=vt,Ue.return=Z,Ue}}}var dr=Op(!0),Pp=Op(!1),Ra=!1;function Tu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Au(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ca(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function wa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(ze&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=ol(t),vp(t,null,a),n}return sl(t,s,n,a),ol(t)}function eo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ps(t,a)}}function Ru(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Cu=!1;function no(){if(Cu){var t=Yr;if(t!==null)throw t}}function io(t,n,a,s){Cu=!1;var c=t.updateQueue;Ra=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var V=T,et=V.next;V.next=null,_===null?f=et:_.next=et,_=V;var mt=t.alternate;mt!==null&&(mt=mt.updateQueue,T=mt.lastBaseUpdate,T!==_&&(T===null?mt.firstBaseUpdate=et:T.next=et,mt.lastBaseUpdate=V))}if(f!==null){var xt=c.baseState;_=0,mt=et=V=null,T=f;do{var ot=T.lane&-536870913,ft=ot!==T.lane;if(ft?(be&ot)===ot:(s&ot)===ot){ot!==0&&ot===qr&&(Cu=!0),mt!==null&&(mt=mt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Kt=t,oe=T;ot=n;var qe=a;switch(oe.tag){case 1:if(Kt=oe.payload,typeof Kt=="function"){xt=Kt.call(qe,xt,ot);break t}xt=Kt;break t;case 3:Kt.flags=Kt.flags&-65537|128;case 0:if(Kt=oe.payload,ot=typeof Kt=="function"?Kt.call(qe,xt,ot):Kt,ot==null)break t;xt=v({},xt,ot);break t;case 2:Ra=!0}}ot=T.callback,ot!==null&&(t.flags|=64,ft&&(t.flags|=8192),ft=c.callbacks,ft===null?c.callbacks=[ot]:ft.push(ot))}else ft={lane:ot,tag:T.tag,payload:T.payload,callback:T.callback,next:null},mt===null?(et=mt=ft,V=xt):mt=mt.next=ft,_|=ot;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ft=T,T=ft.next,ft.next=null,c.lastBaseUpdate=ft,c.shared.pending=null}}while(!0);mt===null&&(V=xt),c.baseState=V,c.firstBaseUpdate=et,c.lastBaseUpdate=mt,f===null&&(c.shared.lanes=0),Oa|=_,t.lanes=_,t.memoizedState=xt}}function zp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Fp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)zp(a[t],n)}var Kr=N(null),_l=N(0);function Bp(t,n){t=ia,_t(_l,t),_t(Kr,n),ia=t|n.baseLanes}function wu(){_t(_l,ia),_t(Kr,Kr.current)}function Du(){ia=_l.current,it(Kr),it(_l)}var jn=N(null),ui=null;function Da(t){var n=t.alternate;_t(an,an.current&1),_t(jn,t),ui===null&&(n===null||Kr.current!==null||n.memoizedState!==null)&&(ui=t)}function Uu(t){_t(an,an.current),_t(jn,t),ui===null&&(ui=t)}function Ip(t){t.tag===22?(_t(an,an.current),_t(jn,t),ui===null&&(ui=t)):Ua()}function Ua(){_t(an,an.current),_t(jn,jn.current)}function Zn(t){it(jn),ui===t&&(ui=null),it(an)}var an=N(0);function vl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Bf(a)||If(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zi=0,ge=null,ke=null,ln=null,xl=!1,Qr=!1,pr=!1,Sl=0,ao=0,Jr=null,rx=0;function tn(){throw Error(r(321))}function Lu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!qn(t[a],n[a]))return!1;return!0}function Nu(t,n,a,s,c,f){return Zi=f,ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?Mm:ju,pr=!1,f=a(s,c),pr=!1,Qr&&(f=Gp(n,a,s,c)),Hp(t),f}function Hp(t){O.H=oo;var n=ke!==null&&ke.next!==null;if(Zi=0,ln=ke=ge=null,xl=!1,ao=0,Jr=null,n)throw Error(r(300));t===null||cn||(t=t.dependencies,t!==null&&ul(t)&&(cn=!0))}function Gp(t,n,a,s){ge=t;var c=0;do{if(Qr&&(Jr=null),ao=0,Qr=!1,25<=c)throw Error(r(301));if(c+=1,ln=ke=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Em,f=n(a,s)}while(Qr);return f}function sx(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?ro(n):n,t=t.useState()[0],(ke!==null?ke.memoizedState:null)!==t&&(ge.flags|=1024),n}function Ou(){var t=Sl!==0;return Sl=0,t}function Pu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function zu(t){if(xl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}xl=!1}Zi=0,ln=ke=ge=null,Qr=!1,ao=Sl=0,Jr=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ge.memoizedState=ln=t:ln=ln.next=t,ln}function rn(){if(ke===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var n=ln===null?ge.memoizedState:ln.next;if(n!==null)ln=n,ke=t;else{if(t===null)throw ge.alternate===null?Error(r(467)):Error(r(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},ln===null?ge.memoizedState=ln=t:ln=ln.next=t}return ln}function yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(t){var n=ao;return ao+=1,Jr===null&&(Jr=[]),t=Up(Jr,t,n),n=ge,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Mm:ju),t}function Ml(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ro(t);if(t.$$typeof===F)return Tn(t)}throw Error(r(438,String(t)))}function Fu(t){var n=null,a=ge.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ge.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=yl(),ge.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function Ki(t,n){return typeof n=="function"?n(t):n}function El(t){var n=rn();return Bu(n,ke,t)}function Bu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=_=null,V=null,et=n,mt=!1;do{var xt=et.lane&-536870913;if(xt!==et.lane?(be&xt)===xt:(Zi&xt)===xt){var ot=et.revertLane;if(ot===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),xt===qr&&(mt=!0);else if((Zi&ot)===ot){et=et.next,ot===qr&&(mt=!0);continue}else xt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},V===null?(T=V=xt,_=f):V=V.next=xt,ge.lanes|=ot,Oa|=ot;xt=et.action,pr&&a(f,xt),f=et.hasEagerState?et.eagerState:a(f,xt)}else ot={lane:xt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},V===null?(T=V=ot,_=f):V=V.next=ot,ge.lanes|=xt,Oa|=xt;et=et.next}while(et!==null&&et!==n);if(V===null?_=f:V.next=T,!qn(f,t.memoizedState)&&(cn=!0,mt&&(a=Yr,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=V,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Iu(t){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);qn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Vp(t,n,a){var s=ge,c=rn(),f=Ae;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!qn((ke||c).memoizedState,a);if(_&&(c.memoizedState=a,cn=!0),c=c.queue,Vu(Wp.bind(null,s,c,t),[t]),c.getSnapshot!==n||_||ln!==null&&ln.memoizedState.tag&1){if(s.flags|=2048,$r(9,{destroy:void 0},kp.bind(null,s,c,a,n),null),Ye===null)throw Error(r(349));f||(Zi&127)!==0||Xp(s,n,a)}return a}function Xp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ge.updateQueue,n===null?(n=yl(),ge.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function kp(t,n,a,s){n.value=a,n.getSnapshot=s,qp(n)&&Yp(t)}function Wp(t,n,a){return a(function(){qp(n)&&Yp(t)})}function qp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!qn(t,a)}catch{return!0}}function Yp(t){var n=rr(t,2);n!==null&&Xn(n,t,2)}function Hu(t){var n=On();if(typeof t=="function"){var a=t;if(t=a(),pr){Wt(!0);try{a()}finally{Wt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:t},n}function jp(t,n,a,s){return t.baseState=a,Bu(t,ke,typeof s=="function"?s:Ki)}function ox(t,n,a,s,c){if(Al(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Zp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Zp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=O.T,_={};O.T=_;try{var T=a(c,s),V=O.S;V!==null&&V(_,T),Kp(t,n,T)}catch(et){Gu(t,n,et)}finally{f!==null&&_.types!==null&&(f.types=_.types),O.T=f}}else try{f=a(c,s),Kp(t,n,f)}catch(et){Gu(t,n,et)}}function Kp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Qp(t,n,s)},function(s){return Gu(t,n,s)}):Qp(t,n,a)}function Qp(t,n,a){n.status="fulfilled",n.value=a,Jp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Zp(t,a)))}function Gu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Jp(n),n=n.next;while(n!==s)}t.action=null}function Jp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function $p(t,n){return n}function tm(t,n){if(Ae){var a=Ye.formState;if(a!==null){t:{var s=ge;if(Ae){if(Ze){e:{for(var c=Ze,f=ci;c.nodeType!==8;){if(!f){c=null;break e}if(c=fi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ze=fi(c.nextSibling),s=c.data==="F!";break t}}Ta(s)}s=!1}s&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$p,lastRenderedState:n},a.queue=s,a=xm.bind(null,ge,s),s.dispatch=a,s=Hu(!1),f=Yu.bind(null,ge,!1,s.queue),s=On(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=ox.bind(null,ge,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function em(t){var n=rn();return nm(n,ke,t)}function nm(t,n,a){if(n=Bu(t,n,$p)[0],t=El(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=ro(n)}catch(_){throw _===jr?dl:_}else s=n;n=rn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ge.flags|=2048,$r(9,{destroy:void 0},lx.bind(null,c,a),null)),[s,f,t]}function lx(t,n){t.action=n}function im(t){var n=rn(),a=ke;if(a!==null)return nm(n,a,t);rn(),n=n.memoizedState,a=rn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function $r(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ge.updateQueue,n===null&&(n=yl(),ge.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function am(){return rn().memoizedState}function bl(t,n,a,s){var c=On();ge.flags|=t,c.memoizedState=$r(1|n,{destroy:void 0},a,s===void 0?null:s)}function Tl(t,n,a,s){var c=rn();s=s===void 0?null:s;var f=c.memoizedState.inst;ke!==null&&s!==null&&Lu(s,ke.memoizedState.deps)?c.memoizedState=$r(n,f,a,s):(ge.flags|=t,c.memoizedState=$r(1|n,f,a,s))}function rm(t,n){bl(8390656,8,t,n)}function Vu(t,n){Tl(2048,8,t,n)}function cx(t){ge.flags|=4;var n=ge.updateQueue;if(n===null)n=yl(),ge.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function sm(t){var n=rn().memoizedState;return cx({ref:n,nextImpl:t}),function(){if((ze&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function om(t,n){return Tl(4,2,t,n)}function lm(t,n){return Tl(4,4,t,n)}function cm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function um(t,n,a){a=a!=null?a.concat([t]):null,Tl(4,4,cm.bind(null,n,t),a)}function Xu(){}function fm(t,n){var a=rn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Lu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function hm(t,n){var a=rn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Lu(n,s[1]))return s[0];if(s=t(),pr){Wt(!0);try{t()}finally{Wt(!1)}}return a.memoizedState=[s,n],s}function ku(t,n,a){return a===void 0||(Zi&1073741824)!==0&&(be&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=d0(),ge.lanes|=t,Oa|=t,a)}function dm(t,n,a,s){return qn(a,n)?a:Kr.current!==null?(t=ku(t,a,s),qn(t,n)||(cn=!0),t):(Zi&42)===0||(Zi&1073741824)!==0&&(be&261930)===0?(cn=!0,t.memoizedState=a):(t=d0(),ge.lanes|=t,Oa|=t,n)}function pm(t,n,a,s,c){var f=P.p;P.p=f!==0&&8>f?f:8;var _=O.T,T={};O.T=T,Yu(t,!1,n,a);try{var V=c(),et=O.S;if(et!==null&&et(T,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var mt=ax(V,s);so(t,n,mt,Jn(t))}else so(t,n,s,Jn(t))}catch(xt){so(t,n,{then:function(){},status:"rejected",reason:xt},Jn())}finally{P.p=f,_!==null&&T.types!==null&&(_.types=T.types),O.T=_}}function ux(){}function Wu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=mm(t).queue;pm(t,c,n,J,a===null?ux:function(){return gm(t),a(s)})}function mm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:J},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function gm(t){var n=mm(t);n.next===null&&(n=t.alternate.memoizedState),so(t,n.next.queue,{},Jn())}function qu(){return Tn(bo)}function _m(){return rn().memoizedState}function vm(){return rn().memoizedState}function fx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();t=Ca(a);var s=wa(n,t,a);s!==null&&(Xn(s,n,a),eo(s,n,a)),n={cache:yu()},t.payload=n;return}n=n.return}}function hx(t,n,a){var s=Jn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Al(t)?Sm(n,a):(a=uu(t,n,a,s),a!==null&&(Xn(a,t,s),ym(a,n,s)))}function xm(t,n,a){var s=Jn();so(t,n,a,s)}function so(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Al(t))Sm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,T=f(_,a);if(c.hasEagerState=!0,c.eagerState=T,qn(T,_))return sl(t,n,c,0),Ye===null&&rl(),!1}catch{}if(a=uu(t,n,c,s),a!==null)return Xn(a,t,s),ym(a,n,s),!0}return!1}function Yu(t,n,a,s){if(s={lane:2,revertLane:Af(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Al(t)){if(n)throw Error(r(479))}else n=uu(t,a,s,2),n!==null&&Xn(n,t,2)}function Al(t){var n=t.alternate;return t===ge||n!==null&&n===ge}function Sm(t,n){Qr=xl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function ym(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ps(t,a)}}var oo={readContext:Tn,use:Ml,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};oo.useEffectEvent=tn;var Mm={readContext:Tn,use:Ml,useCallback:function(t,n){return On().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:rm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,bl(4194308,4,cm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return bl(4194308,4,t,n)},useInsertionEffect:function(t,n){bl(4,2,t,n)},useMemo:function(t,n){var a=On();n=n===void 0?null:n;var s=t();if(pr){Wt(!0);try{t()}finally{Wt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=On();if(a!==void 0){var c=a(n);if(pr){Wt(!0);try{a(n)}finally{Wt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=hx.bind(null,ge,t),[s.memoizedState,t]},useRef:function(t){var n=On();return t={current:t},n.memoizedState=t},useState:function(t){t=Hu(t);var n=t.queue,a=xm.bind(null,ge,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Xu,useDeferredValue:function(t,n){var a=On();return ku(a,t,n)},useTransition:function(){var t=Hu(!1);return t=pm.bind(null,ge,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ge,c=On();if(Ae){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ye===null)throw Error(r(349));(be&127)!==0||Xp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,rm(Wp.bind(null,s,f,t),[t]),s.flags|=2048,$r(9,{destroy:void 0},kp.bind(null,s,f,a,n),null),a},useId:function(){var t=On(),n=Ye.identifierPrefix;if(Ae){var a=Di,s=wi;a=(s&~(1<<32-Xt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Sl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=rx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:qu,useFormState:tm,useActionState:tm,useOptimistic:function(t){var n=On();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yu.bind(null,ge,!0,a),a.dispatch=n,[t,n]},useMemoCache:Fu,useCacheRefresh:function(){return On().memoizedState=fx.bind(null,ge)},useEffectEvent:function(t){var n=On(),a={impl:t};return n.memoizedState=a,function(){if((ze&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},ju={readContext:Tn,use:Ml,useCallback:fm,useContext:Tn,useEffect:Vu,useImperativeHandle:um,useInsertionEffect:om,useLayoutEffect:lm,useMemo:hm,useReducer:El,useRef:am,useState:function(){return El(Ki)},useDebugValue:Xu,useDeferredValue:function(t,n){var a=rn();return dm(a,ke.memoizedState,t,n)},useTransition:function(){var t=El(Ki)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:Vp,useId:_m,useHostTransitionStatus:qu,useFormState:em,useActionState:em,useOptimistic:function(t,n){var a=rn();return jp(a,ke,t,n)},useMemoCache:Fu,useCacheRefresh:vm};ju.useEffectEvent=sm;var Em={readContext:Tn,use:Ml,useCallback:fm,useContext:Tn,useEffect:Vu,useImperativeHandle:um,useInsertionEffect:om,useLayoutEffect:lm,useMemo:hm,useReducer:Iu,useRef:am,useState:function(){return Iu(Ki)},useDebugValue:Xu,useDeferredValue:function(t,n){var a=rn();return ke===null?ku(a,t,n):dm(a,ke.memoizedState,t,n)},useTransition:function(){var t=Iu(Ki)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:Vp,useId:_m,useHostTransitionStatus:qu,useFormState:im,useActionState:im,useOptimistic:function(t,n){var a=rn();return ke!==null?jp(a,ke,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Fu,useCacheRefresh:vm};Em.useEffectEvent=sm;function Zu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ku={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Jn(),c=Ca(s);c.payload=n,a!=null&&(c.callback=a),n=wa(t,c,s),n!==null&&(Xn(n,t,s),eo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Jn(),c=Ca(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=wa(t,c,s),n!==null&&(Xn(n,t,s),eo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Jn(),s=Ca(a);s.tag=2,n!=null&&(s.callback=n),n=wa(t,s,a),n!==null&&(Xn(n,t,a),eo(n,t,a))}};function bm(t,n,a,s,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!Ys(a,s)||!Ys(c,f):!0}function Tm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Ku.enqueueReplaceState(n,n.state,null)}function mr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Am(t){al(t)}function Rm(t){console.error(t)}function Cm(t){al(t)}function Rl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function wm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Qu(t,n,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){Rl(t,n)},a}function Dm(t){return t=Ca(t),t.tag=3,t}function Um(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){wm(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){wm(n,a,s),typeof c!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function dx(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Wr(n,a,c,!0),a=jn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?Il():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===pl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Ef(t,s,c)),!1;case 22:return a.flags|=65536,s===pl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Ef(t,s,c)),!1}throw Error(r(435,a.tag))}return Ef(t,s,c),Il(),!1}if(Ae)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==gu&&(t=Error(r(422),{cause:s}),Ks(si(t,a)))):(s!==gu&&(n=Error(r(423),{cause:s}),Ks(si(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=si(s,a),c=Qu(t.stateNode,s,c),Ru(t,c),en!==4&&(en=2)),!1;var f=Error(r(520),{cause:s});if(f=si(f,a),go===null?go=[f]:go.push(f),en!==4&&(en=2),n===null)return!0;s=si(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Qu(a.stateNode,s,t),Ru(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Pa===null||!Pa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Dm(c),Um(c,t,a,s),Ru(a,c),!1}a=a.return}while(a!==null);return!1}var Ju=Error(r(461)),cn=!1;function An(t,n,a,s){n.child=t===null?Pp(n,null,a,s):dr(n,t.child,a,s)}function Lm(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var T in s)T!=="ref"&&(_[T]=s[T])}else _=s;return cr(n),s=Nu(t,n,a,_,f,c),T=Ou(),t!==null&&!cn?(Pu(t,n,c),Qi(t,n,c)):(Ae&&T&&pu(n),n.flags|=1,An(t,n,s,c),n.child)}function Nm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!fu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Om(t,n,f,s,c)):(t=ll(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!of(t,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ys,a(_,s)&&t.ref===n.ref)return Qi(t,n,c)}return n.flags|=1,t=Wi(f,s),t.ref=n.ref,t.return=n,n.child=t}function Om(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Ys(f,s)&&t.ref===n.ref)if(cn=!1,n.pendingProps=s=f,of(t,c))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,Qi(t,n,c)}return $u(t,n,a,s,c)}function Pm(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return zm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&hl(n,f!==null?f.cachePool:null),f!==null?Bp(n,f):wu(),Ip(n);else return s=n.lanes=536870912,zm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(hl(n,f.cachePool),Bp(n,f),Ua(),n.memoizedState=null):(t!==null&&hl(n,null),wu(),Ua());return An(t,n,c,a),n.child}function lo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function zm(t,n,a,s,c){var f=Eu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&hl(n,null),wu(),Ip(n),t!==null&&Wr(t,n,s,!0),n.childLanes=c,null}function Cl(t,n){return n=Dl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Fm(t,n,a){return dr(n,t.child,null,a),t=Cl(n,n.pendingProps),t.flags|=2,Zn(n),n.memoizedState=null,t}function px(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ae){if(s.mode==="hidden")return t=Cl(n,s),n.lanes=536870912,lo(null,t);if(Uu(n),(t=Ze)?(t=Z0(t,ci),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=Sp(t),a.return=n,n.child=a,bn=n,Ze=null)):t=null,t===null)throw Ta(n);return n.lanes=536870912,null}return Cl(n,s)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Uu(n),c)if(n.flags&256)n.flags&=-257,n=Fm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||Wr(t,n,a,!1),c=(a&t.childLanes)!==0,cn||c){if(s=Ye,s!==null&&(_=Dr(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,rr(t,_),Xn(s,t,_),Ju;Il(),n=Fm(t,n,a)}else t=f.treeContext,Ze=fi(_.nextSibling),bn=n,Ae=!0,ba=null,ci=!1,t!==null&&Ep(n,t),n=Cl(n,s),n.flags|=4096;return n}return t=Wi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function wl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function $u(t,n,a,s,c){return cr(n),a=Nu(t,n,a,s,void 0,c),s=Ou(),t!==null&&!cn?(Pu(t,n,c),Qi(t,n,c)):(Ae&&s&&pu(n),n.flags|=1,An(t,n,a,c),n.child)}function Bm(t,n,a,s,c,f){return cr(n),n.updateQueue=null,a=Gp(n,s,a,c),Hp(t),s=Ou(),t!==null&&!cn?(Pu(t,n,f),Qi(t,n,f)):(Ae&&s&&pu(n),n.flags|=1,An(t,n,a,f),n.child)}function Im(t,n,a,s,c){if(cr(n),n.stateNode===null){var f=Gr,_=a.contextType;typeof _=="object"&&_!==null&&(f=Tn(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ku,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Tu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Tn(_):Gr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Zu(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Ku.enqueueReplaceState(f,f.state,null),io(n,s,f,c),no(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,V=mr(a,T);f.props=V;var et=f.context,mt=a.contextType;_=Gr,typeof mt=="object"&&mt!==null&&(_=Tn(mt));var xt=a.getDerivedStateFromProps;mt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,mt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||et!==_)&&Tm(n,f,s,_),Ra=!1;var ot=n.memoizedState;f.state=ot,io(n,s,f,c),no(),et=n.memoizedState,T||ot!==et||Ra?(typeof xt=="function"&&(Zu(n,a,xt,s),et=n.memoizedState),(V=Ra||bm(n,a,V,s,ot,et,_))?(mt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=et),f.props=s,f.state=et,f.context=_,s=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Au(t,n),_=n.memoizedProps,mt=mr(a,_),f.props=mt,xt=n.pendingProps,ot=f.context,et=a.contextType,V=Gr,typeof et=="object"&&et!==null&&(V=Tn(et)),T=a.getDerivedStateFromProps,(et=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==xt||ot!==V)&&Tm(n,f,s,V),Ra=!1,ot=n.memoizedState,f.state=ot,io(n,s,f,c),no();var ft=n.memoizedState;_!==xt||ot!==ft||Ra||t!==null&&t.dependencies!==null&&ul(t.dependencies)?(typeof T=="function"&&(Zu(n,a,T,s),ft=n.memoizedState),(mt=Ra||bm(n,a,mt,s,ot,ft,V)||t!==null&&t.dependencies!==null&&ul(t.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ft,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ft,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&ot===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&ot===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ft),f.props=s,f.state=ft,f.context=V,s=mt):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&ot===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&ot===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,wl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=dr(n,t.child,null,c),n.child=dr(n,null,a,c)):An(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Qi(t,n,c),t}function Hm(t,n,a,s){return or(),n.flags|=256,An(t,n,a,s),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(t){return{baseLanes:t,cachePool:wp()}}function nf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Qn),t}function Gm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(an.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ae){if(c?Da(n):Ua(),(t=Ze)?(t=Z0(t,ci),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=Sp(t),a.return=n,n.child=a,bn=n,Ze=null)):t=null,t===null)throw Ta(n);return If(t)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,c?(Ua(),c=n.mode,T=Dl({mode:"hidden",children:T},c),s=sr(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=ef(a),s.childLanes=nf(t,_,a),n.memoizedState=tf,lo(null,s)):(Da(n),af(n,T))}var V=t.memoizedState;if(V!==null&&(T=V.dehydrated,T!==null)){if(f)n.flags&256?(Da(n),n.flags&=-257,n=rf(t,n,a)):n.memoizedState!==null?(Ua(),n.child=t.child,n.flags|=128,n=null):(Ua(),T=s.fallback,c=n.mode,s=Dl({mode:"visible",children:s.children},c),T=sr(T,c,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,dr(n,t.child,null,a),s=n.child,s.memoizedState=ef(a),s.childLanes=nf(t,_,a),n.memoizedState=tf,n=lo(null,s));else if(Da(n),If(T)){if(_=T.nextSibling&&T.nextSibling.dataset,_)var et=_.dgst;_=et,s=Error(r(419)),s.stack="",s.digest=_,Ks({value:s,source:null,stack:null}),n=rf(t,n,a)}else if(cn||Wr(t,n,a,!1),_=(a&t.childLanes)!==0,cn||_){if(_=Ye,_!==null&&(s=Dr(_,a),s!==0&&s!==V.retryLane))throw V.retryLane=s,rr(t,s),Xn(_,t,s),Ju;Bf(T)||Il(),n=rf(t,n,a)}else Bf(T)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,Ze=fi(T.nextSibling),bn=n,Ae=!0,ba=null,ci=!1,t!==null&&Ep(n,t),n=af(n,s.children),n.flags|=4096);return n}return c?(Ua(),T=s.fallback,c=n.mode,V=t.child,et=V.sibling,s=Wi(V,{mode:"hidden",children:s.children}),s.subtreeFlags=V.subtreeFlags&65011712,et!==null?T=Wi(et,T):(T=sr(T,c,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,lo(null,s),s=n.child,T=t.child.memoizedState,T===null?T=ef(a):(c=T.cachePool,c!==null?(V=on._currentValue,c=c.parent!==V?{parent:V,pool:V}:c):c=wp(),T={baseLanes:T.baseLanes|a,cachePool:c}),s.memoizedState=T,s.childLanes=nf(t,_,a),n.memoizedState=tf,lo(t.child,s)):(Da(n),a=t.child,t=a.sibling,a=Wi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function af(t,n){return n=Dl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Dl(t,n){return t=Yn(22,t,null,n),t.lanes=0,t}function rf(t,n,a){return dr(n,t.child,null,a),t=af(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Vm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),xu(t.return,n,a)}function sf(t,n,a,s,c,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function Xm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var _=an.current,T=(_&2)!==0;if(T?(_=_&1|2,n.flags|=128):_&=1,_t(an,_),An(t,n,s,a),s=Ae?Zs:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vm(t,a,n);else if(t.tag===19)Vm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&vl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),sf(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&vl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}sf(n,!0,a,null,f,s);break;case"together":sf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Qi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Oa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Wr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Wi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Wi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ul(t)))}function mx(t,n,a){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),Aa(n,on,t.memoizedState.cache),or();break;case 27:case 5:Ot(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:Aa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Uu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Gm(t,n,a):(Da(n),t=Qi(t,n,a),t!==null?t.sibling:null);Da(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Wr(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Xm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),_t(an,an.current),s)break;return null;case 22:return n.lanes=0,Pm(t,n,a,n.pendingProps);case 24:Aa(n,on,t.memoizedState.cache)}return Qi(t,n,a)}function km(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!of(t,a)&&(n.flags&128)===0)return cn=!1,mx(t,n,a);cn=(t.flags&131072)!==0}else cn=!1,Ae&&(n.flags&1048576)!==0&&Mp(n,Zs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=fr(n.elementType),n.type=t,typeof t=="function")fu(t)?(s=mr(t,s),n.tag=1,n=Im(null,n,t,s,a)):(n.tag=0,n=$u(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===z){n.tag=11,n=Lm(null,n,t,s,a);break t}else if(c===U){n.tag=14,n=Nm(null,n,t,s,a);break t}}throw n=pt(t)||t,Error(r(306,n,""))}}return n;case 0:return $u(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=mr(s,n.pendingProps),Im(t,n,s,c,a);case 3:t:{if(Ct(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Au(t,n),io(n,s,null,a);var _=n.memoizedState;if(s=_.cache,Aa(n,on,s),s!==f.cache&&Su(n,[on],a,!0),no(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Hm(t,n,s,a);break t}else if(s!==c){c=si(Error(r(424)),n),Ks(c),n=Hm(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ze=fi(t.firstChild),bn=n,Ae=!0,ba=null,ci=!0,a=Pp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(or(),s===c){n=Qi(t,n,a);break t}An(t,n,s,a)}n=n.child}return n;case 26:return wl(t,n),t===null?(a=eg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,t=n.pendingProps,s=ql($.current).createElement(a),s[sn]=n,s[vn]=t,Rn(s,a,t),A(s),n.stateNode=s):n.memoizedState=eg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ot(n),t===null&&Ae&&(s=n.stateNode=J0(n.type,n.pendingProps,$.current),bn=n,ci=!0,c=Ze,Ia(n.type)?(Hf=c,Ze=fi(s.firstChild)):Ze=c),An(t,n,n.pendingProps.children,a),wl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ae&&((c=s=Ze)&&(s=Wx(s,n.type,n.pendingProps,ci),s!==null?(n.stateNode=s,bn=n,Ze=fi(s.firstChild),ci=!1,c=!0):c=!1),c||Ta(n)),Ot(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,s=f.children,Pf(c,f)?s=null:_!==null&&Pf(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Nu(t,n,sx,null,null,a),bo._currentValue=c),wl(t,n),An(t,n,s,a),n.child;case 6:return t===null&&Ae&&((t=a=Ze)&&(a=qx(a,n.pendingProps,ci),a!==null?(n.stateNode=a,bn=n,Ze=null,t=!0):t=!1),t||Ta(n)),null;case 13:return Gm(t,n,a);case 4:return Ct(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=dr(n,null,s,a):An(t,n,s,a),n.child;case 11:return Lm(t,n,n.type,n.pendingProps,a);case 7:return An(t,n,n.pendingProps,a),n.child;case 8:return An(t,n,n.pendingProps.children,a),n.child;case 12:return An(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Aa(n,n.type,s.value),An(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,cr(n),c=Tn(c),s=s(c),n.flags|=1,An(t,n,s,a),n.child;case 14:return Nm(t,n,n.type,n.pendingProps,a);case 15:return Om(t,n,n.type,n.pendingProps,a);case 19:return Xm(t,n,a);case 31:return px(t,n,a);case 22:return Pm(t,n,a,n.pendingProps);case 24:return cr(n),s=Tn(on),t===null?(c=Eu(),c===null&&(c=Ye,f=yu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Tu(n),Aa(n,on,c)):((t.lanes&a)!==0&&(Au(t,n),io(n,null,null,a),no()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Aa(n,on,s)):(s=f.cache,Aa(n,on,s),s!==c.cache&&Su(n,[on],a,!0))),An(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ji(t){t.flags|=4}function lf(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(_0())t.flags|=8192;else throw hr=pl,bu}else t.flags&=-16777217}function Wm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!sg(n))if(_0())t.flags|=8192;else throw hr=pl,bu}function Ul(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ie():536870912,t.lanes|=n,is|=n)}function co(t,n){if(!Ae)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function gx(t,n,a){var s=n.pendingProps;switch(mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ji(on),Ft(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(kr(n)?Ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_u())),Ke(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Ji(n),f!==null?(Ke(n),Wm(n,f)):(Ke(n),lf(n,c,null,s,a))):f?f!==t.memoizedState?(Ji(n),Ke(n),Wm(n,f)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Ji(n),Ke(n),lf(n,c,t,s,a)),null;case 27:if(fe(n),a=$.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}t=Rt.current,kr(n)?bp(n):(t=J0(c,s,a),n.stateNode=t,Ji(n))}return Ke(n),null;case 5:if(fe(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}if(f=Rt.current,kr(n))bp(n);else{var _=ql($.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(c,{is:s.is}):_.createElement(c)}}f[sn]=n,f[vn]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Rn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ji(n)}}return Ke(n),lf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ji(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=$.current,kr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=bn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||G0(t.nodeValue,a)),t||Ta(n,!0)}else t=ql(t).createTextNode(s),t[sn]=n,n.stateNode=t}return Ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=kr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[sn]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else a=_u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ke(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=kr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[sn]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),c=!1}else c=_u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ul(n,n.updateQueue),Ke(n),null);case 4:return Ft(),t===null&&Df(n.stateNode.containerInfo),Ke(n),null;case 10:return ji(n.type),Ke(n),null;case 19:if(it(an),s=n.memoizedState,s===null)return Ke(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)co(s,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=vl(t),f!==null){for(n.flags|=128,co(s,!1),t=f.updateQueue,n.updateQueue=t,Ul(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)xp(a,t),a=a.sibling;return _t(an,an.current&1|2),Ae&&qi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&y()>zl&&(n.flags|=128,c=!0,co(s,!1),n.lanes=4194304)}else{if(!c)if(t=vl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Ul(n,t),co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Ae)return Ke(n),null}else 2*y()-s.renderingStartTime>zl&&a!==536870912&&(n.flags|=128,c=!0,co(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=y(),t.sibling=null,a=an.current,_t(an,c?a&1|2:a&1),Ae&&qi(n,s.treeForkCount),t):(Ke(n),null);case 22:case 23:return Zn(n),Du(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Ul(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&it(ur),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ji(on),Ke(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function _x(t,n){switch(mu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ji(on),Ft(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return fe(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(r(340));or()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Zn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));or()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return it(an),null;case 4:return Ft(),null;case 10:return ji(n.type),null;case 22:case 23:return Zn(n),Du(),t!==null&&it(ur),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ji(on),null;case 25:return null;default:return null}}function qm(t,n){switch(mu(n),n.tag){case 3:ji(on),Ft();break;case 26:case 27:case 5:fe(n);break;case 4:Ft();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:it(an);break;case 10:ji(n.type);break;case 22:case 23:Zn(n),Du(),t!==null&&it(ur);break;case 24:ji(on)}}function uo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==c)}}catch(T){Ve(n,n.return,T)}}function La(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var _=s.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,c=n;var V=a,et=T;try{et()}catch(mt){Ve(c,V,mt)}}}s=s.next}while(s!==f)}}catch(mt){Ve(n,n.return,mt)}}function Ym(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Fp(n,a)}catch(s){Ve(t,t.return,s)}}}function jm(t,n,a){a.props=mr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ve(t,n,s)}}function fo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Ve(t,n,c)}}function Ui(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ve(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ve(t,n,c)}else a.current=null}function Zm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ve(t,t.return,c)}}function cf(t,n,a){try{var s=t.stateNode;Ix(s,t.type,a,n),s[vn]=n}catch(c){Ve(t,t.return,c)}}function Km(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ia(t.type)||t.tag===4}function uf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Km(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ia(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ff(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xi));else if(s!==4&&(s===27&&Ia(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(ff(t,n,a),t=t.sibling;t!==null;)ff(t,n,a),t=t.sibling}function Ll(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ia(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ll(t,n,a),t=t.sibling;t!==null;)Ll(t,n,a),t=t.sibling}function Qm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Rn(n,s,a),n[sn]=t,n[vn]=a}catch(f){Ve(t,t.return,f)}}var $i=!1,un=!1,hf=!1,Jm=typeof WeakSet=="function"?WeakSet:Set,gn=null;function vx(t,n){if(t=t.containerInfo,Nf=$l,t=up(t),au(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,T=-1,V=-1,et=0,mt=0,xt=t,ot=null;e:for(;;){for(var ft;xt!==a||c!==0&&xt.nodeType!==3||(T=_+c),xt!==f||s!==0&&xt.nodeType!==3||(V=_+s),xt.nodeType===3&&(_+=xt.nodeValue.length),(ft=xt.firstChild)!==null;)ot=xt,xt=ft;for(;;){if(xt===t)break e;if(ot===a&&++et===c&&(T=_),ot===f&&++mt===s&&(V=_),(ft=xt.nextSibling)!==null)break;xt=ot,ot=xt.parentNode}xt=ft}a=T===-1||V===-1?null:{start:T,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Of={focusedElem:t,selectionRange:a},$l=!1,gn=n;gn!==null;)if(n=gn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,gn=t;else for(;gn!==null;){switch(n=gn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Kt=mr(a.type,c);t=s.getSnapshotBeforeUpdate(Kt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(oe){Ve(a,a.return,oe)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Ff(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ff(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,gn=t;break}gn=n.return}}function $m(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ea(t,a),s&4&&uo(5,a);break;case 1:if(ea(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Ve(a,a.return,_)}else{var c=mr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Ve(a,a.return,_)}}s&64&&Ym(a),s&512&&fo(a,a.return);break;case 3:if(ea(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Fp(t,n)}catch(_){Ve(a,a.return,_)}}break;case 27:n===null&&s&4&&Qm(a);case 26:case 5:ea(t,a),n===null&&s&4&&Zm(a),s&512&&fo(a,a.return);break;case 12:ea(t,a);break;case 31:ea(t,a),s&4&&n0(t,a);break;case 13:ea(t,a),s&4&&i0(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Rx.bind(null,a),Yx(t,a))));break;case 22:if(s=a.memoizedState!==null||$i,!s){n=n!==null&&n.memoizedState!==null||un,c=$i;var f=un;$i=s,(un=n)&&!f?na(t,a,(a.subtreeFlags&8772)!==0):ea(t,a),$i=c,un=f}break;case 30:break;default:ea(t,a)}}function t0(t){var n=t.alternate;n!==null&&(t.alternate=null,t0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Is(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,In=!1;function ta(t,n,a){for(a=a.child;a!==null;)e0(t,n,a),a=a.sibling}function e0(t,n,a){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(At,a)}catch{}switch(a.tag){case 26:un||Ui(a,n),ta(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Ui(a,n);var s=Je,c=In;Ia(a.type)&&(Je=a.stateNode,In=!1),ta(t,n,a),yo(a.stateNode),Je=s,In=c;break;case 5:un||Ui(a,n);case 6:if(s=Je,c=In,Je=null,ta(t,n,a),Je=s,In=c,Je!==null)if(In)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){Ve(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){Ve(a,n,f)}break;case 18:Je!==null&&(In?(t=Je,Y0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),fs(t)):Y0(Je,a.stateNode));break;case 4:s=Je,c=In,Je=a.stateNode.containerInfo,In=!0,ta(t,n,a),Je=s,In=c;break;case 0:case 11:case 14:case 15:La(2,a,n),un||La(4,a,n),ta(t,n,a);break;case 1:un||(Ui(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&jm(a,n,s)),ta(t,n,a);break;case 21:ta(t,n,a);break;case 22:un=(s=un)||a.memoizedState!==null,ta(t,n,a),un=s;break;default:ta(t,n,a)}}function n0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{fs(t)}catch(a){Ve(n,n.return,a)}}}function i0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{fs(t)}catch(a){Ve(n,n.return,a)}}function xx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Jm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Jm),n;default:throw Error(r(435,t.tag))}}function Nl(t,n){var a=xx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=Cx.bind(null,t,s);s.then(c,c)}})}function Hn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,_=n,T=_;t:for(;T!==null;){switch(T.tag){case 27:if(Ia(T.type)){Je=T.stateNode,In=!1;break t}break;case 5:Je=T.stateNode,In=!1;break t;case 3:case 4:Je=T.stateNode.containerInfo,In=!0;break t}T=T.return}if(Je===null)throw Error(r(160));e0(f,_,c),Je=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)a0(n,t),n=n.sibling}var Si=null;function a0(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Gn(t),s&4&&(La(3,t,t.return),uo(3,t),La(5,t,t.return));break;case 1:Hn(n,t),Gn(t),s&512&&(un||a===null||Ui(a,a.return)),s&64&&$i&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=Si;if(Hn(n,t),Gn(t),s&512&&(un||a===null||Ui(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[tr]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Rn(f,s,a),f[sn]=t,A(f),s=f;break t;case"link":var _=ag("link","href",c).get(s+(a.href||""));if(_){for(var T=0;T<_.length;T++)if(f=_[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(T,1);break e}}f=c.createElement(s),Rn(f,s,a),c.head.appendChild(f);break;case"meta":if(_=ag("meta","content",c).get(s+(a.content||""))){for(T=0;T<_.length;T++)if(f=_[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(T,1);break e}}f=c.createElement(s),Rn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[sn]=t,A(f),s=f}t.stateNode=s}else rg(c,t.type,t.stateNode);else t.stateNode=ig(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?rg(c,t.type,t.stateNode):ig(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&cf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,t),Gn(t),s&512&&(un||a===null||Ui(a,a.return)),a!==null&&s&4&&cf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,t),Gn(t),s&512&&(un||a===null||Ui(a,a.return)),t.flags&32){c=t.stateNode;try{hn(c,"")}catch(Kt){Ve(t,t.return,Kt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,cf(t,c,a!==null?a.memoizedProps:c)),s&1024&&(hf=!0);break;case 6:if(Hn(n,t),Gn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Kt){Ve(t,t.return,Kt)}}break;case 3:if(Zl=null,c=Si,Si=Yl(n.containerInfo),Hn(n,t),Si=c,Gn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{fs(n.containerInfo)}catch(Kt){Ve(t,t.return,Kt)}hf&&(hf=!1,r0(t));break;case 4:s=Si,Si=Yl(t.stateNode.containerInfo),Hn(n,t),Gn(t),Si=s;break;case 12:Hn(n,t),Gn(t);break;case 31:Hn(n,t),Gn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Nl(t,s)));break;case 13:Hn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pl=y()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Nl(t,s)));break;case 22:c=t.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,et=$i,mt=un;if($i=et||c,un=mt||V,Hn(n,t),un=mt,$i=et,Gn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||V||$i||un||gr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(f=V.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{T=V.stateNode;var xt=V.memoizedProps.style,ot=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;T.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Kt){Ve(V,V.return,Kt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=c?"":V.memoizedProps}catch(Kt){Ve(V,V.return,Kt)}}}else if(n.tag===18){if(a===null){V=n;try{var ft=V.stateNode;c?j0(ft,!0):j0(V.stateNode,!1)}catch(Kt){Ve(V,V.return,Kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Nl(t,a))));break;case 19:Hn(n,t),Gn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Nl(t,s)));break;case 30:break;case 21:break;default:Hn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Km(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=uf(t);Ll(t,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(hn(_,""),a.flags&=-33);var T=uf(t);Ll(t,T,_);break;case 3:case 4:var V=a.stateNode.containerInfo,et=uf(t);ff(t,et,V);break;default:throw Error(r(161))}}catch(mt){Ve(t,t.return,mt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function r0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;r0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ea(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)$m(t,n.alternate,n),n=n.sibling}function gr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:La(4,n,n.return),gr(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&jm(n,n.return,a),gr(n);break;case 27:yo(n.stateNode);case 26:case 5:Ui(n,n.return),gr(n);break;case 22:n.memoizedState===null&&gr(n);break;case 30:gr(n);break;default:gr(n)}t=t.sibling}}function na(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:na(c,f,a),uo(4,f);break;case 1:if(na(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(et){Ve(s,s.return,et)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var V=c.shared.hiddenCallbacks;if(V!==null)for(c.shared.hiddenCallbacks=null,c=0;c<V.length;c++)zp(V[c],T)}catch(et){Ve(s,s.return,et)}}a&&_&64&&Ym(f),fo(f,f.return);break;case 27:Qm(f);case 26:case 5:na(c,f,a),a&&s===null&&_&4&&Zm(f),fo(f,f.return);break;case 12:na(c,f,a);break;case 31:na(c,f,a),a&&_&4&&n0(c,f);break;case 13:na(c,f,a),a&&_&4&&i0(c,f);break;case 22:f.memoizedState===null&&na(c,f,a),fo(f,f.return);break;case 30:break;default:na(c,f,a)}n=n.sibling}}function df(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Qs(a))}function pf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qs(t))}function yi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)s0(t,n,a,s),n=n.sibling}function s0(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(t,n,a,s),c&2048&&uo(9,n);break;case 1:yi(t,n,a,s);break;case 3:yi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qs(t)));break;case 12:if(c&2048){yi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,T=f.onPostCommit;typeof T=="function"&&T(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){Ve(n,n.return,V)}}else yi(t,n,a,s);break;case 31:yi(t,n,a,s);break;case 13:yi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?yi(t,n,a,s):ho(t,n):f._visibility&2?yi(t,n,a,s):(f._visibility|=2,ts(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&df(_,n);break;case 24:yi(t,n,a,s),c&2048&&pf(n.alternate,n);break;default:yi(t,n,a,s)}}function ts(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,T=a,V=s,et=_.flags;switch(_.tag){case 0:case 11:case 15:ts(f,_,T,V,c),uo(8,_);break;case 23:break;case 22:var mt=_.stateNode;_.memoizedState!==null?mt._visibility&2?ts(f,_,T,V,c):ho(f,_):(mt._visibility|=2,ts(f,_,T,V,c)),c&&et&2048&&df(_.alternate,_);break;case 24:ts(f,_,T,V,c),c&&et&2048&&pf(_.alternate,_);break;default:ts(f,_,T,V,c)}n=n.sibling}}function ho(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:ho(a,s),c&2048&&df(s.alternate,s);break;case 24:ho(a,s),c&2048&&pf(s.alternate,s);break;default:ho(a,s)}n=n.sibling}}var po=8192;function es(t,n,a){if(t.subtreeFlags&po)for(t=t.child;t!==null;)o0(t,n,a),t=t.sibling}function o0(t,n,a){switch(t.tag){case 26:es(t,n,a),t.flags&po&&t.memoizedState!==null&&rS(a,Si,t.memoizedState,t.memoizedProps);break;case 5:es(t,n,a);break;case 3:case 4:var s=Si;Si=Yl(t.stateNode.containerInfo),es(t,n,a),Si=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=po,po=16777216,es(t,n,a),po=s):es(t,n,a));break;default:es(t,n,a)}}function l0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,u0(s,t)}l0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)c0(t),t=t.sibling}function c0(t){switch(t.tag){case 0:case 11:case 15:mo(t),t.flags&2048&&La(9,t,t.return);break;case 3:mo(t);break;case 12:mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ol(t)):mo(t);break;default:mo(t)}}function Ol(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,u0(s,t)}l0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:La(8,n,n.return),Ol(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ol(n));break;default:Ol(n)}t=t.sibling}}function u0(t,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:La(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,gn=s;else t:for(a=t;gn!==null;){s=gn;var c=s.sibling,f=s.return;if(t0(s),s===a){gn=null;break t}if(c!==null){c.return=f,gn=c;break t}gn=f}}}var Sx={getCacheForType:function(t){var n=Tn(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Tn(on).controller.signal}},yx=typeof WeakMap=="function"?WeakMap:Map,ze=0,Ye=null,Me=null,be=0,Ge=0,Kn=null,Na=!1,ns=!1,mf=!1,ia=0,en=0,Oa=0,_r=0,gf=0,Qn=0,is=0,go=null,Vn=null,_f=!1,Pl=0,f0=0,zl=1/0,Fl=null,Pa=null,dn=0,za=null,as=null,aa=0,vf=0,xf=null,h0=null,_o=0,Sf=null;function Jn(){return(ze&2)!==0&&be!==0?be&-be:O.T!==null?Af():Fs()}function d0(){if(Qn===0)if((be&536870912)===0||Ae){var t=Ut;Ut<<=1,(Ut&3932160)===0&&(Ut=262144),Qn=t}else Qn=536870912;return t=jn.current,t!==null&&(t.flags|=32),Qn}function Xn(t,n,a){(t===Ye&&(Ge===2||Ge===9)||t.cancelPendingCommit!==null)&&(rs(t,0),Fa(t,be,Qn,!1)),wn(t,a),((ze&2)===0||t!==Ye)&&(t===Ye&&((ze&2)===0&&(_r|=a),en===4&&Fa(t,be,Qn,!1)),Li(t))}function p0(t,n,a){if((ze&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Nt(t,n),c=s?bx(t,n):Mf(t,n,!0),f=s;do{if(c===0){ns&&!s&&Fa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Mx(a)){c=Mf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var T=t;c=go;var V=T.current.memoizedState.isDehydrated;if(V&&(rs(T,_).flags|=256),_=Mf(T,_,!1),_!==2){if(mf&&!V){T.errorRecoveryDisabledLanes|=f,_r|=f,c=4;break t}f=Vn,Vn=c,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){rs(t,0),Fa(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Fa(s,n,Qn,!Na);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Pl+300-y(),10<c)){if(Fa(s,n,Qn,!Na),St(s,0,!0)!==0)break t;aa=n,s.timeoutHandle=W0(m0.bind(null,s,a,Vn,Fl,_f,n,Qn,_r,is,Na,f,"Throttled",-0,0),c);break t}m0(s,a,Vn,Fl,_f,n,Qn,_r,is,Na,f,null,-0,0)}}break}while(!0);Li(t)}function m0(t,n,a,s,c,f,_,T,V,et,mt,xt,ot,ft){if(t.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},o0(n,f,xt);var Kt=(f&62914560)===f?Pl-y():(f&4194048)===f?f0-y():0;if(Kt=sS(xt,Kt),Kt!==null){aa=f,t.cancelPendingCommit=Kt(E0.bind(null,t,n,f,a,s,c,_,T,V,mt,xt,null,ot,ft)),Fa(t,f,_,!et);return}}E0(t,n,f,a,s,c,_,T,V)}function Mx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!qn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Fa(t,n,a,s){n&=~gf,n&=~_r,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Xt(c),_=1<<f;s[f]=-1,c&=~_}a!==0&&Zo(t,a,n)}function Bl(){return(ze&6)===0?(vo(0),!1):!0}function yf(){if(Me!==null){if(Ge===0)var t=Me.return;else t=Me,Yi=lr=null,zu(t),Zr=null,$s=0,t=Me;for(;t!==null;)qm(t.alternate,t),t=t.return;Me=null}}function rs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Vx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),aa=0,yf(),Ye=t,Me=a=Wi(t.current,null),be=n,Ge=0,Kn=null,Na=!1,ns=Nt(t,n),mf=!1,is=Qn=gf=_r=Oa=en=0,Vn=go=null,_f=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Xt(s),f=1<<c;n|=t[c],s&=~f}return ia=n,rl(),a}function g0(t,n){ge=null,O.H=oo,n===jr||n===dl?(n=Lp(),Ge=3):n===bu?(n=Lp(),Ge=4):Ge=n===Ju?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,Me===null&&(en=1,Rl(t,si(n,t.current)))}function _0(){var t=jn.current;return t===null?!0:(be&4194048)===be?ui===null:(be&62914560)===be||(be&536870912)!==0?t===ui:!1}function v0(){var t=O.H;return O.H=oo,t===null?oo:t}function x0(){var t=O.A;return O.A=Sx,t}function Il(){en=4,Na||(be&4194048)!==be&&jn.current!==null||(ns=!0),(Oa&134217727)===0&&(_r&134217727)===0||Ye===null||Fa(Ye,be,Qn,!1)}function Mf(t,n,a){var s=ze;ze|=2;var c=v0(),f=x0();(Ye!==t||be!==n)&&(Fl=null,rs(t,n)),n=!1;var _=en;t:do try{if(Ge!==0&&Me!==null){var T=Me,V=Kn;switch(Ge){case 8:yf(),_=6;break t;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var et=Ge;if(Ge=0,Kn=null,ss(t,T,V,et),a&&ns){_=0;break t}break;default:et=Ge,Ge=0,Kn=null,ss(t,T,V,et)}}Ex(),_=en;break}catch(mt){g0(t,mt)}while(!0);return n&&t.shellSuspendCounter++,Yi=lr=null,ze=s,O.H=c,O.A=f,Me===null&&(Ye=null,be=0,rl()),_}function Ex(){for(;Me!==null;)S0(Me)}function bx(t,n){var a=ze;ze|=2;var s=v0(),c=x0();Ye!==t||be!==n?(Fl=null,zl=y()+500,rs(t,n)):ns=Nt(t,n);t:do try{if(Ge!==0&&Me!==null){n=Me;var f=Kn;e:switch(Ge){case 1:Ge=0,Kn=null,ss(t,n,f,1);break;case 2:case 9:if(Dp(f)){Ge=0,Kn=null,y0(n);break}n=function(){Ge!==2&&Ge!==9||Ye!==t||(Ge=7),Li(t)},f.then(n,n);break t;case 3:Ge=7;break t;case 4:Ge=5;break t;case 7:Dp(f)?(Ge=0,Kn=null,y0(n)):(Ge=0,Kn=null,ss(t,n,f,7));break;case 5:var _=null;switch(Me.tag){case 26:_=Me.memoizedState;case 5:case 27:var T=Me;if(_?sg(_):T.stateNode.complete){Ge=0,Kn=null;var V=T.sibling;if(V!==null)Me=V;else{var et=T.return;et!==null?(Me=et,Hl(et)):Me=null}break e}}Ge=0,Kn=null,ss(t,n,f,5);break;case 6:Ge=0,Kn=null,ss(t,n,f,6);break;case 8:yf(),en=6;break t;default:throw Error(r(462))}}Tx();break}catch(mt){g0(t,mt)}while(!0);return Yi=lr=null,O.H=s,O.A=c,ze=a,Me!==null?0:(Ye=null,be=0,rl(),en)}function Tx(){for(;Me!==null&&!Et();)S0(Me)}function S0(t){var n=km(t.alternate,t,ia);t.memoizedProps=t.pendingProps,n===null?Hl(t):Me=n}function y0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Bm(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=Bm(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:zu(n);default:qm(a,n),n=Me=xp(n,ia),n=km(a,n,ia)}t.memoizedProps=t.pendingProps,n===null?Hl(t):Me=n}function ss(t,n,a,s){Yi=lr=null,zu(n),Zr=null,$s=0;var c=n.return;try{if(dx(t,c,n,a,be)){en=1,Rl(t,si(a,t.current)),Me=null;return}}catch(f){if(c!==null)throw Me=c,f;en=1,Rl(t,si(a,t.current)),Me=null;return}n.flags&32768?(Ae||s===1?t=!0:ns||(be&536870912)!==0?t=!1:(Na=t=!0,(s===2||s===9||s===3||s===6)&&(s=jn.current,s!==null&&s.tag===13&&(s.flags|=16384))),M0(n,t)):Hl(n)}function Hl(t){var n=t;do{if((n.flags&32768)!==0){M0(n,Na);return}t=n.return;var a=gx(n.alternate,n,ia);if(a!==null){Me=a;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=t}while(n!==null);en===0&&(en=5)}function M0(t,n){do{var a=_x(t.alternate,t);if(a!==null){a.flags&=32767,Me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Me=t;return}Me=t=a}while(t!==null);en=6,Me=null}function E0(t,n,a,s,c,f,_,T,V){t.cancelPendingCommit=null;do Gl();while(dn!==0);if((ze&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=cu,gi(t,a,f,_,T,V),t===Ye&&(Me=Ye=null,be=0),as=n,za=t,aa=a,vf=f,xf=c,h0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,wx(ht,function(){return C0(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,c=P.p,P.p=2,_=ze,ze|=4;try{vx(t,n,a)}finally{ze=_,P.p=c,O.T=s}}dn=1,b0(),T0(),A0()}}function b0(){if(dn===1){dn=0;var t=za,n=as,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=P.p;P.p=2;var c=ze;ze|=4;try{a0(n,t);var f=Of,_=up(t.containerInfo),T=f.focusedElem,V=f.selectionRange;if(_!==T&&T&&T.ownerDocument&&cp(T.ownerDocument.documentElement,T)){if(V!==null&&au(T)){var et=V.start,mt=V.end;if(mt===void 0&&(mt=et),"selectionStart"in T)T.selectionStart=et,T.selectionEnd=Math.min(mt,T.value.length);else{var xt=T.ownerDocument||document,ot=xt&&xt.defaultView||window;if(ot.getSelection){var ft=ot.getSelection(),Kt=T.textContent.length,oe=Math.min(V.start,Kt),qe=V.end===void 0?oe:Math.min(V.end,Kt);!ft.extend&&oe>qe&&(_=qe,qe=oe,oe=_);var Z=lp(T,oe),k=lp(T,qe);if(Z&&k&&(ft.rangeCount!==1||ft.anchorNode!==Z.node||ft.anchorOffset!==Z.offset||ft.focusNode!==k.node||ft.focusOffset!==k.offset)){var tt=xt.createRange();tt.setStart(Z.node,Z.offset),ft.removeAllRanges(),oe>qe?(ft.addRange(tt),ft.extend(k.node,k.offset)):(tt.setEnd(k.node,k.offset),ft.addRange(tt))}}}}for(xt=[],ft=T;ft=ft.parentNode;)ft.nodeType===1&&xt.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<xt.length;T++){var vt=xt[T];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}$l=!!Nf,Of=Nf=null}finally{ze=c,P.p=s,O.T=a}}t.current=n,dn=2}}function T0(){if(dn===2){dn=0;var t=za,n=as,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=P.p;P.p=2;var c=ze;ze|=4;try{$m(t,n.alternate,n)}finally{ze=c,P.p=s,O.T=a}}dn=3}}function A0(){if(dn===4||dn===3){dn=0,w();var t=za,n=as,a=aa,s=h0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,as=za=null,R0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Pa=null),Ur(a),n=n.stateNode,Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(At,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,c=P.p,P.p=2,O.T=null;try{for(var f=t.onRecoverableError,_=0;_<s.length;_++){var T=s[_];f(T.value,{componentStack:T.stack})}}finally{O.T=n,P.p=c}}(aa&3)!==0&&Gl(),Li(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Sf?_o++:(_o=0,Sf=t):_o=0,vo(0)}}function R0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Qs(n)))}function Gl(){return b0(),T0(),A0(),C0()}function C0(){if(dn!==5)return!1;var t=za,n=vf;vf=0;var a=Ur(aa),s=O.T,c=P.p;try{P.p=32>a?32:a,O.T=null,a=xf,xf=null;var f=za,_=aa;if(dn=0,as=za=null,aa=0,(ze&6)!==0)throw Error(r(331));var T=ze;if(ze|=4,c0(f.current),s0(f,f.current,_,a),ze=T,vo(0,!1),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(At,f)}catch{}return!0}finally{P.p=c,O.T=s,R0(t,n)}}function w0(t,n,a){n=si(a,n),n=Qu(t.stateNode,n,2),t=wa(t,n,2),t!==null&&(wn(t,2),Li(t))}function Ve(t,n,a){if(t.tag===3)w0(t,t,a);else for(;n!==null;){if(n.tag===3){w0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Pa===null||!Pa.has(s))){t=si(a,t),a=Dm(2),s=wa(n,a,2),s!==null&&(Um(a,s,n,t),wn(s,2),Li(s));break}}n=n.return}}function Ef(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new yx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(mf=!0,c.add(a),t=Ax.bind(null,t,n,a),n.then(t,t))}function Ax(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ye===t&&(be&a)===a&&(en===4||en===3&&(be&62914560)===be&&300>y()-Pl?(ze&2)===0&&rs(t,0):gf|=a,is===be&&(is=0)),Li(t)}function D0(t,n){n===0&&(n=Ie()),t=rr(t,n),t!==null&&(wn(t,n),Li(t))}function Rx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),D0(t,a)}function Cx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),D0(t,a)}function wx(t,n){return le(t,n)}var Vl=null,os=null,bf=!1,Xl=!1,Tf=!1,Ba=0;function Li(t){t!==os&&t.next===null&&(os===null?Vl=os=t:os=os.next=t),Xl=!0,bf||(bf=!0,Ux())}function vo(t,n){if(!Tf&&Xl){Tf=!0;do for(var a=!1,s=Vl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var _=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Xt(42|t)+1)-1,f&=c&~(_&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,O0(s,f))}else f=be,f=St(s,s===Ye?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Nt(s,f)||(a=!0,O0(s,f));s=s.next}while(a);Tf=!1}}function Dx(){U0()}function U0(){Xl=bf=!1;var t=0;Ba!==0&&Gx()&&(t=Ba);for(var n=y(),a=null,s=Vl;s!==null;){var c=s.next,f=L0(s,n);f===0?(s.next=null,a===null?Vl=c:a.next=c,c===null&&(os=a)):(a=s,(t!==0||(f&3)!==0)&&(Xl=!0)),s=c}dn!==0&&dn!==5||vo(t),Ba!==0&&(Ba=0)}function L0(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Xt(f),T=1<<_,V=c[_];V===-1?((T&a)===0||(T&s)!==0)&&(c[_]=ue(T,n)):V<=n&&(t.expiredLanes|=T),f&=~T}if(n=Ye,a=be,a=St(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ge===2||Ge===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Yt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Nt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Yt(s),Ur(a)){case 2:case 8:a=gt;break;case 32:a=ht;break;case 268435456:a=wt;break;default:a=ht}return s=N0.bind(null,t),a=le(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Yt(s),t.callbackPriority=2,t.callbackNode=null,2}function N0(t,n){if(dn!==0&&dn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Gl()&&t.callbackNode!==a)return null;var s=be;return s=St(t,t===Ye?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(p0(t,s,n),L0(t,y()),t.callbackNode!=null&&t.callbackNode===a?N0.bind(null,t):null)}function O0(t,n){if(Gl())return null;p0(t,n,!0)}function Ux(){Xx(function(){(ze&6)!==0?le(rt,Dx):U0()})}function Af(){if(Ba===0){var t=qr;t===0&&(t=Ht,Ht<<=1,(Ht&261888)===0&&(Ht=256)),Ba=t}return Ba}function P0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Qo(""+t)}function z0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Lx(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=P0((c[vn]||null).action),_=s.submitter;_&&(n=(n=_[vn]||null)?P0(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var T=new el("action","action",null,s,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ba!==0){var V=_?z0(c,_):new FormData(c);Wu(a,{pending:!0,data:V,method:c.method,action:f},null,V)}}else typeof f=="function"&&(T.preventDefault(),V=_?z0(c,_):new FormData(c),Wu(a,{pending:!0,data:V,method:c.method,action:f},f,V))},currentTarget:c}]})}}for(var Rf=0;Rf<lu.length;Rf++){var Cf=lu[Rf],Nx=Cf.toLowerCase(),Ox=Cf[0].toUpperCase()+Cf.slice(1);xi(Nx,"on"+Ox)}xi(dp,"onAnimationEnd"),xi(pp,"onAnimationIteration"),xi(mp,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(Kv,"onTransitionRun"),xi(Qv,"onTransitionStart"),xi(Jv,"onTransitionCancel"),xi(gp,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Px=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function F0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var T=s[_],V=T.instance,et=T.currentTarget;if(T=T.listener,V!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=et;try{f(c)}catch(mt){al(mt)}c.currentTarget=null,f=V}else for(_=0;_<s.length;_++){if(T=s[_],V=T.instance,et=T.currentTarget,T=T.listener,V!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=et;try{f(c)}catch(mt){al(mt)}c.currentTarget=null,f=V}}}}function Ee(t,n){var a=n[Lr];a===void 0&&(a=n[Lr]=new Set);var s=t+"__bubble";a.has(s)||(B0(n,t,2,!1),a.add(s))}function wf(t,n,a){var s=0;n&&(s|=4),B0(a,t,s,n)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Df(t){if(!t[kl]){t[kl]=!0,j.forEach(function(a){a!=="selectionchange"&&(Px.has(a)||wf(a,!1,t),wf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[kl]||(n[kl]=!0,wf("selectionchange",!1,n))}}function B0(t,n,a,s){switch(dg(n)){case 2:var c=cS;break;case 8:c=uS;break;default:c=Wf}a=c.bind(null,n,a,t),c=void 0,!Zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Uf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var T=s.stateNode.containerInfo;if(T===c)break;if(_===4)for(_=s.return;_!==null;){var V=_.tag;if((V===3||V===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;T!==null;){if(_=xa(T),_===null)return;if(V=_.tag,V===5||V===6||V===26||V===27){s=f=_;continue t}T=T.parentNode}}s=s.return}Xd(function(){var et=f,mt=Yc(a),xt=[];t:{var ot=_p.get(t);if(ot!==void 0){var ft=el,Kt=t;switch(t){case"keypress":if($o(a)===0)break t;case"keydown":case"keyup":ft=Cv;break;case"focusin":Kt="focus",ft=$c;break;case"focusout":Kt="blur",ft=$c;break;case"beforeblur":case"afterblur":ft=$c;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=Uv;break;case dp:case pp:case mp:ft=xv;break;case gp:ft=Nv;break;case"scroll":case"scrollend":ft=pv;break;case"wheel":ft=Pv;break;case"copy":case"cut":case"paste":ft=yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=jd;break;case"toggle":case"beforetoggle":ft=Fv}var oe=(n&4)!==0,qe=!oe&&(t==="scroll"||t==="scrollend"),Z=oe?ot!==null?ot+"Capture":null:ot;oe=[];for(var k=et,tt;k!==null;){var vt=k;if(tt=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||tt===null||Z===null||(vt=Hs(k,Z),vt!=null&&oe.push(So(k,vt,tt))),qe)break;k=k.return}0<oe.length&&(ot=new ft(ot,Kt,null,a,mt),xt.push({event:ot,listeners:oe}))}}if((n&7)===0){t:{if(ot=t==="mouseover"||t==="pointerover",ft=t==="mouseout"||t==="pointerout",ot&&a!==qc&&(Kt=a.relatedTarget||a.fromElement)&&(xa(Kt)||Kt[_i]))break t;if((ft||ot)&&(ot=mt.window===mt?mt:(ot=mt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ft?(Kt=a.relatedTarget||a.toElement,ft=et,Kt=Kt?xa(Kt):null,Kt!==null&&(qe=u(Kt),oe=Kt.tag,Kt!==qe||oe!==5&&oe!==27&&oe!==6)&&(Kt=null)):(ft=null,Kt=et),ft!==Kt)){if(oe=qd,vt="onMouseLeave",Z="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(oe=jd,vt="onPointerLeave",Z="onPointerEnter",k="pointer"),qe=ft==null?ot:er(ft),tt=Kt==null?ot:er(Kt),ot=new oe(vt,k+"leave",ft,a,mt),ot.target=qe,ot.relatedTarget=tt,vt=null,xa(mt)===et&&(oe=new oe(Z,k+"enter",Kt,a,mt),oe.target=tt,oe.relatedTarget=qe,vt=oe),qe=vt,ft&&Kt)e:{for(oe=zx,Z=ft,k=Kt,tt=0,vt=Z;vt;vt=oe(vt))tt++;vt=0;for(var ie=k;ie;ie=oe(ie))vt++;for(;0<tt-vt;)Z=oe(Z),tt--;for(;0<vt-tt;)k=oe(k),vt--;for(;tt--;){if(Z===k||k!==null&&Z===k.alternate){oe=Z;break e}Z=oe(Z),k=oe(k)}oe=null}else oe=null;ft!==null&&I0(xt,ot,ft,oe,!1),Kt!==null&&qe!==null&&I0(xt,qe,Kt,oe,!0)}}t:{if(ot=et?er(et):window,ft=ot.nodeName&&ot.nodeName.toLowerCase(),ft==="select"||ft==="input"&&ot.type==="file")var Ue=np;else if(tp(ot))if(ip)Ue=Yv;else{Ue=Wv;var ee=kv}else ft=ot.nodeName,!ft||ft.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?et&&vi(et.elementType)&&(Ue=np):Ue=qv;if(Ue&&(Ue=Ue(t,et))){ep(xt,Ue,a,mt);break t}ee&&ee(t,ot,et),t==="focusout"&&et&&ot.type==="number"&&et.memoizedProps.value!=null&&Sn(ot,"number",ot.value)}switch(ee=et?er(et):window,t){case"focusin":(tp(ee)||ee.contentEditable==="true")&&(Br=ee,ru=et,js=null);break;case"focusout":js=ru=Br=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,fp(xt,a,mt);break;case"selectionchange":if(Zv)break;case"keydown":case"keyup":fp(xt,a,mt)}var ve;if(eu)t:{switch(t){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else Fr?Jd(t,a)&&(Te="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(Zd&&a.locale!=="ko"&&(Fr||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Fr&&(ve=kd()):(Ma=mt,Kc="value"in Ma?Ma.value:Ma.textContent,Fr=!0)),ee=Wl(et,Te),0<ee.length&&(Te=new Yd(Te,t,null,a,mt),xt.push({event:Te,listeners:ee}),ve?Te.data=ve:(ve=$d(a),ve!==null&&(Te.data=ve)))),(ve=Iv?Hv(t,a):Gv(t,a))&&(Te=Wl(et,"onBeforeInput"),0<Te.length&&(ee=new Yd("onBeforeInput","beforeinput",null,a,mt),xt.push({event:ee,listeners:Te}),ee.data=ve)),Lx(xt,t,et,a,mt)}F0(xt,n)})}function So(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Wl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Hs(t,a),c!=null&&s.unshift(So(t,c,f)),c=Hs(t,n),c!=null&&s.push(So(t,c,f))),t.tag===3)return s;t=t.return}return[]}function zx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function I0(t,n,a,s,c){for(var f=n._reactName,_=[];a!==null&&a!==s;){var T=a,V=T.alternate,et=T.stateNode;if(T=T.tag,V!==null&&V===s)break;T!==5&&T!==26&&T!==27||et===null||(V=et,c?(et=Hs(a,f),et!=null&&_.unshift(So(a,et,V))):c||(et=Hs(a,f),et!=null&&_.push(So(a,et,V)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var Fx=/\r\n?/g,Bx=/\u0000|\uFFFD/g;function H0(t){return(typeof t=="string"?t:""+t).replace(Fx,`
`).replace(Bx,"")}function G0(t,n){return n=H0(n),H0(t)===n}function We(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||hn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&hn(t,""+s);break;case"className":ae(t,"class",s);break;case"tabIndex":ae(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ae(t,a,s);break;case"style":Or(t,s,f);break;case"data":if(n!=="object"){ae(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Qo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&We(t,n,"name",c.name,c,null),We(t,n,"formEncType",c.formEncType,c,null),We(t,n,"formMethod",c.formMethod,c,null),We(t,n,"formTarget",c.formTarget,c,null)):(We(t,n,"encType",c.encType,c,null),We(t,n,"method",c.method,c,null),We(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Qo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Xi);break;case"onScroll":s!=null&&Ee("scroll",t);break;case"onScrollEnd":s!=null&&Ee("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Qo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ee("beforetoggle",t),Ee("toggle",t),$t(t,"popover",s);break;case"xlinkActuate":te(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":te(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":te(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":te(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":te(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":te(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":te(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":te(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":te(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":$t(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=hv.get(a)||a,$t(t,a,s))}}function Lf(t,n,a,s,c,f){switch(a){case"style":Or(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?hn(t,s):(typeof s=="number"||typeof s=="bigint")&&hn(t,""+s);break;case"onScroll":s!=null&&Ee("scroll",t);break;case"onScrollEnd":s!=null&&Ee("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Xi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ut.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):$t(t,a,s)}}}function Rn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",t),Ee("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:We(t,n,f,_,a,null)}}c&&We(t,n,"srcSet",a.srcSet,a,null),s&&We(t,n,"src",a.src,a,null);return;case"input":Ee("invalid",t);var T=f=_=c=null,V=null,et=null;for(s in a)if(a.hasOwnProperty(s)){var mt=a[s];if(mt!=null)switch(s){case"name":c=mt;break;case"type":_=mt;break;case"checked":V=mt;break;case"defaultChecked":et=mt;break;case"value":f=mt;break;case"defaultValue":T=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,n));break;default:We(t,n,s,mt,a,null)}}Vi(t,f,T,V,et,_,c,!1);return;case"select":Ee("invalid",t),s=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":_=T;break;case"multiple":s=T;default:We(t,n,c,T,a,null)}n=f,a=_,t.multiple=!!s,n!=null?ai(t,!!s,n,!1):a!=null&&ai(t,!!s,a,!0);return;case"textarea":Ee("invalid",t),f=c=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(T=a[_],T!=null))switch(_){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:We(t,n,_,T,a,null)}yn(t,s,c,f);return;case"option":for(V in a)a.hasOwnProperty(V)&&(s=a[V],s!=null)&&(V==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":We(t,n,V,s,a,null));return;case"dialog":Ee("beforetoggle",t),Ee("toggle",t),Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":Ee("load",t);break;case"video":case"audio":for(s=0;s<xo.length;s++)Ee(xo[s],t);break;case"image":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"embed":case"source":case"link":Ee("error",t),Ee("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(s=a[et],s!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:We(t,n,et,s,a,null)}return;default:if(vi(n)){for(mt in a)a.hasOwnProperty(mt)&&(s=a[mt],s!==void 0&&Lf(t,n,mt,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&We(t,n,T,s,a,null))}function Ix(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,T=null,V=null,et=null,mt=null;for(ft in a){var xt=a[ft];if(a.hasOwnProperty(ft)&&xt!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":V=xt;default:s.hasOwnProperty(ft)||We(t,n,ft,null,s,xt)}}for(var ot in s){var ft=s[ot];if(xt=a[ot],s.hasOwnProperty(ot)&&(ft!=null||xt!=null))switch(ot){case"type":f=ft;break;case"name":c=ft;break;case"checked":et=ft;break;case"defaultChecked":mt=ft;break;case"value":_=ft;break;case"defaultValue":T=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:ft!==xt&&We(t,n,ot,ft,s,xt)}}xn(t,_,T,V,et,mt,f,c);return;case"select":ft=_=T=ot=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":ft=V;default:s.hasOwnProperty(f)||We(t,n,f,null,s,V)}for(c in s)if(f=s[c],V=a[c],s.hasOwnProperty(c)&&(f!=null||V!=null))switch(c){case"value":ot=f;break;case"defaultValue":T=f;break;case"multiple":_=f;default:f!==V&&We(t,n,c,f,s,V)}n=T,a=_,s=ft,ot!=null?ai(t,!!a,ot,!1):!!s!=!!a&&(n!=null?ai(t,!!a,n,!0):ai(t,!!a,a?[]:"",!1));return;case"textarea":ft=ot=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:We(t,n,T,null,s,c)}for(_ in s)if(c=s[_],f=a[_],s.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":ot=c;break;case"defaultValue":ft=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&We(t,n,_,c,s,f)}He(t,ot,ft);return;case"option":for(var Kt in a)ot=a[Kt],a.hasOwnProperty(Kt)&&ot!=null&&!s.hasOwnProperty(Kt)&&(Kt==="selected"?t.selected=!1:We(t,n,Kt,null,s,ot));for(V in s)ot=s[V],ft=a[V],s.hasOwnProperty(V)&&ot!==ft&&(ot!=null||ft!=null)&&(V==="selected"?t.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":We(t,n,V,ot,s,ft));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in a)ot=a[oe],a.hasOwnProperty(oe)&&ot!=null&&!s.hasOwnProperty(oe)&&We(t,n,oe,null,s,ot);for(et in s)if(ot=s[et],ft=a[et],s.hasOwnProperty(et)&&ot!==ft&&(ot!=null||ft!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:We(t,n,et,ot,s,ft)}return;default:if(vi(n)){for(var qe in a)ot=a[qe],a.hasOwnProperty(qe)&&ot!==void 0&&!s.hasOwnProperty(qe)&&Lf(t,n,qe,void 0,s,ot);for(mt in s)ot=s[mt],ft=a[mt],!s.hasOwnProperty(mt)||ot===ft||ot===void 0&&ft===void 0||Lf(t,n,mt,ot,s,ft);return}}for(var Z in a)ot=a[Z],a.hasOwnProperty(Z)&&ot!=null&&!s.hasOwnProperty(Z)&&We(t,n,Z,null,s,ot);for(xt in s)ot=s[xt],ft=a[xt],!s.hasOwnProperty(xt)||ot===ft||ot==null&&ft==null||We(t,n,xt,ot,s,ft)}function V0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,_=c.initiatorType,T=c.duration;if(f&&T&&V0(_)){for(_=0,T=c.responseEnd,s+=1;s<a.length;s++){var V=a[s],et=V.startTime;if(et>T)break;var mt=V.transferSize,xt=V.initiatorType;mt&&V0(xt)&&(V=V.responseEnd,_+=mt*(V<T?1:(T-et)/(V-et)))}if(--s,n+=8*(f+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Nf=null,Of=null;function ql(t){return t.nodeType===9?t:t.ownerDocument}function X0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function k0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Pf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zf=null;function Gx(){var t=window.event;return t&&t.type==="popstate"?t===zf?!1:(zf=t,!0):(zf=null,!1)}var W0=typeof setTimeout=="function"?setTimeout:void 0,Vx=typeof clearTimeout=="function"?clearTimeout:void 0,q0=typeof Promise=="function"?Promise:void 0,Xx=typeof queueMicrotask=="function"?queueMicrotask:typeof q0<"u"?function(t){return q0.resolve(null).then(t).catch(kx)}:W0;function kx(t){setTimeout(function(){throw t})}function Ia(t){return t==="head"}function Y0(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),fs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")yo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,yo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,T=f.nodeName;f[tr]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&yo(t.ownerDocument.body);a=c}while(a);fs(n)}function j0(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Ff(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ff(a),Is(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Wx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[tr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=fi(t.nextSibling),t===null)break}return null}function qx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=fi(t.nextSibling),t===null))return null;return t}function Z0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=fi(t.nextSibling),t===null))return null;return t}function Bf(t){return t.data==="$?"||t.data==="$~"}function If(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Yx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function fi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Hf=null;function K0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return fi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Q0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function J0(t,n,a){switch(n=ql(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function yo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Is(t)}var hi=new Map,$0=new Set;function Yl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ra=P.d;P.d={f:jx,r:Zx,D:Kx,C:Qx,L:Jx,m:$x,X:eS,S:tS,M:nS};function jx(){var t=ra.f(),n=Bl();return t||n}function Zx(t){var n=Sa(t);n!==null&&n.tag===5&&n.type==="form"?gm(n):ra.r(t)}var ls=typeof document>"u"?null:document;function tg(t,n,a){var s=ls;if(s&&typeof n=="string"&&n){var c=he(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),$0.has(c)||($0.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Rn(n,"link",t),A(n),s.head.appendChild(n)))}}function Kx(t){ra.D(t),tg("dns-prefetch",t,null)}function Qx(t,n){ra.C(t,n),tg("preconnect",t,n)}function Jx(t,n,a){ra.L(t,n,a);var s=ls;if(s&&t&&n){var c='link[rel="preload"][as="'+he(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+he(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+he(a.imageSizes)+'"]')):c+='[href="'+he(t)+'"]';var f=c;switch(n){case"style":f=cs(t);break;case"script":f=us(t)}hi.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),hi.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(Mo(f))||n==="script"&&s.querySelector(Eo(f))||(n=s.createElement("link"),Rn(n,"link",t),A(n),s.head.appendChild(n)))}}function $x(t,n){ra.m(t,n);var a=ls;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+he(s)+'"][href="'+he(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=us(t)}if(!hi.has(f)&&(t=v({rel:"modulepreload",href:t},n),hi.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}s=a.createElement("link"),Rn(s,"link",t),A(s),a.head.appendChild(s)}}}function tS(t,n,a){ra.S(t,n,a);var s=ls;if(s&&t){var c=ya(s).hoistableStyles,f=cs(t);n=n||"default";var _=c.get(f);if(!_){var T={loading:0,preload:null};if(_=s.querySelector(Mo(f)))T.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=hi.get(f))&&Gf(t,a);var V=_=s.createElement("link");A(V),Rn(V,"link",t),V._p=new Promise(function(et,mt){V.onload=et,V.onerror=mt}),V.addEventListener("load",function(){T.loading|=1}),V.addEventListener("error",function(){T.loading|=2}),T.loading|=4,jl(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:T},c.set(f,_)}}}function eS(t,n){ra.X(t,n);var a=ls;if(a&&t){var s=ya(a).hoistableScripts,c=us(t),f=s.get(c);f||(f=a.querySelector(Eo(c)),f||(t=v({src:t,async:!0},n),(n=hi.get(c))&&Vf(t,n),f=a.createElement("script"),A(f),Rn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function nS(t,n){ra.M(t,n);var a=ls;if(a&&t){var s=ya(a).hoistableScripts,c=us(t),f=s.get(c);f||(f=a.querySelector(Eo(c)),f||(t=v({src:t,async:!0,type:"module"},n),(n=hi.get(c))&&Vf(t,n),f=a.createElement("script"),A(f),Rn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function eg(t,n,a,s){var c=(c=$.current)?Yl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=cs(a.href),a=ya(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=cs(a.href);var f=ya(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(Mo(t)))&&!f._p&&(_.instance=f,_.state.loading=5),hi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(t,a),f||iS(c,t,a,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=us(a),a=ya(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function cs(t){return'href="'+he(t)+'"'}function Mo(t){return'link[rel="stylesheet"]['+t+"]"}function ng(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function iS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Rn(n,"link",a),A(n),t.head.appendChild(n))}function us(t){return'[src="'+he(t)+'"]'}function Eo(t){return"script[async]"+t}function ig(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+he(a.href)+'"]');if(s)return n.instance=s,A(s),s;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),A(s),Rn(s,"style",c),jl(s,a.precedence,t),n.instance=s;case"stylesheet":c=cs(a.href);var f=t.querySelector(Mo(c));if(f)return n.state.loading|=4,n.instance=f,A(f),f;s=ng(a),(c=hi.get(c))&&Gf(s,c),f=(t.ownerDocument||t).createElement("link"),A(f);var _=f;return _._p=new Promise(function(T,V){_.onload=T,_.onerror=V}),Rn(f,"link",s),n.state.loading|=4,jl(f,a.precedence,t),n.instance=f;case"script":return f=us(a.src),(c=t.querySelector(Eo(f)))?(n.instance=c,A(c),c):(s=a,(c=hi.get(f))&&(s=v({},a),Vf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),A(c),Rn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,jl(s,a.precedence,t));return n.instance}function jl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,_=0;_<s.length;_++){var T=s[_];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Gf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Vf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Zl=null;function ag(t,n,a){if(Zl===null){var s=new Map,c=Zl=new Map;c.set(a,s)}else c=Zl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[tr]||f[sn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var T=s.get(_);T?T.push(f):s.set(_,[f])}}return s}function rg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function aS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function sg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function rS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=cs(s.href),f=n.querySelector(Mo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Kl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,A(f);return}f=n.ownerDocument||n,s=ng(s),(c=hi.get(c))&&Gf(s,c),f=f.createElement("link"),A(f);var _=f;_._p=new Promise(function(T,V){_.onload=T,_.onerror=V}),Rn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Kl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Xf=0;function sS(t,n){return t.stylesheets&&t.count===0&&Jl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Jl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Xf===0&&(Xf=62500*Hx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Jl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Xf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Kl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Jl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ql=null;function Jl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ql=new Map,n.forEach(oS,t),Ql=null,Kl.call(t))}function oS(t,n){if(!(n.state.loading&4)){var a=Ql.get(t);if(a)var s=a.get(null);else{a=new Map,Ql.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,c),a.set(_,c),this.count++,s=Kl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var bo={$$typeof:F,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function lS(t,n,a,s,c,f,_,T,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function og(t,n,a,s,c,f,_,T,V,et,mt,xt){return t=new lS(t,n,a,_,V,et,mt,xt,T),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),t.current=f,f.stateNode=t,n=yu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Tu(f),t}function lg(t){return t?(t=Gr,t):Gr}function cg(t,n,a,s,c,f){c=lg(c),s.context===null?s.context=c:s.pendingContext=c,s=Ca(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=wa(t,s,n),a!==null&&(Xn(a,t,n),eo(a,t,n))}function ug(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function kf(t,n){ug(t,n),(t=t.alternate)&&ug(t,n)}function fg(t){if(t.tag===13||t.tag===31){var n=rr(t,67108864);n!==null&&Xn(n,t,67108864),kf(t,67108864)}}function hg(t){if(t.tag===13||t.tag===31){var n=Jn();n=zs(n);var a=rr(t,n);a!==null&&Xn(a,t,n),kf(t,n)}}var $l=!0;function cS(t,n,a,s){var c=O.T;O.T=null;var f=P.p;try{P.p=2,Wf(t,n,a,s)}finally{P.p=f,O.T=c}}function uS(t,n,a,s){var c=O.T;O.T=null;var f=P.p;try{P.p=8,Wf(t,n,a,s)}finally{P.p=f,O.T=c}}function Wf(t,n,a,s){if($l){var c=qf(s);if(c===null)Uf(t,n,s,tc,a),pg(t,s);else if(hS(c,t,n,a,s))s.stopPropagation();else if(pg(t,s),n&4&&-1<fS.indexOf(t)){for(;c!==null;){var f=Sa(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Tt(f.pendingLanes);if(_!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var V=1<<31-Xt(_);T.entanglements[1]|=V,_&=~V}Li(f),(ze&6)===0&&(zl=y()+500,vo(0))}}break;case 31:case 13:T=rr(f,2),T!==null&&Xn(T,f,2),Bl(),kf(f,2)}if(f=qf(s),f===null&&Uf(t,n,s,tc,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Uf(t,n,s,null,a)}}function qf(t){return t=Yc(t),Yf(t)}var tc=null;function Yf(t){if(tc=null,t=xa(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return tc=t,null}function dg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(X()){case rt:return 2;case gt:return 8;case ht:case jt:return 32;case wt:return 268435456;default:return 32}default:return 32}}var jf=!1,Ha=null,Ga=null,Va=null,To=new Map,Ao=new Map,Xa=[],fS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pg(t,n){switch(t){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":To.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(n.pointerId)}}function Ro(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Sa(n),n!==null&&fg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function hS(t,n,a,s,c){switch(n){case"focusin":return Ha=Ro(Ha,t,n,a,s,c),!0;case"dragenter":return Ga=Ro(Ga,t,n,a,s,c),!0;case"mouseover":return Va=Ro(Va,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return To.set(f,Ro(To.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Ao.set(f,Ro(Ao.get(f)||null,t,n,a,s,c)),!0}return!1}function mg(t){var n=xa(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Ci(t.priority,function(){hg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Ci(t.priority,function(){hg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ec(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=qf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);qc=s,a.target.dispatchEvent(s),qc=null}else return n=Sa(a),n!==null&&fg(n),t.blockedOn=a,!1;n.shift()}return!0}function gg(t,n,a){ec(t)&&a.delete(n)}function dS(){jf=!1,Ha!==null&&ec(Ha)&&(Ha=null),Ga!==null&&ec(Ga)&&(Ga=null),Va!==null&&ec(Va)&&(Va=null),To.forEach(gg),Ao.forEach(gg)}function nc(t,n){t.blockedOn===n&&(t.blockedOn=null,jf||(jf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,dS)))}var ic=null;function _g(t){ic!==t&&(ic=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ic===t&&(ic=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Yf(s||a)===null)continue;break}var f=Sa(a);f!==null&&(t.splice(n,3),n-=3,Wu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function fs(t){function n(V){return nc(V,t)}Ha!==null&&nc(Ha,t),Ga!==null&&nc(Ga,t),Va!==null&&nc(Va,t),To.forEach(n),Ao.forEach(n);for(var a=0;a<Xa.length;a++){var s=Xa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Xa.length&&(a=Xa[0],a.blockedOn===null);)mg(a),a.blockedOn===null&&Xa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],_=c[vn]||null;if(typeof f=="function")_||_g(a);else if(_){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[vn]||null)T=_.formAction;else if(Yf(c)!==null)continue}else T=_.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),_g(a)}}}function vg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Zf(t){this._internalRoot=t}ac.prototype.render=Zf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Jn();cg(a,s,t,n,null,null)},ac.prototype.unmount=Zf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;cg(t.current,2,null,t,null,null),Bl(),n[_i]=null}};function ac(t){this._internalRoot=t}ac.prototype.unstable_scheduleHydration=function(t){if(t){var n=Fs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Xa.length&&n!==0&&n<Xa[a].priority;a++);Xa.splice(a,0,t),a===0&&mg(t)}};var xg=e.version;if(xg!=="19.2.3")throw Error(r(527,xg,"19.2.3"));P.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var pS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{At=rc.inject(pS),Dt=rc}catch{}}return wo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Am,f=Rm,_=Cm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=og(t,1,!1,null,null,a,s,null,c,f,_,vg),t[_i]=n.current,Df(t),new Zf(n)},wo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Am,_=Rm,T=Cm,V=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=og(t,1,!0,n,a??null,s,c,V,f,_,T,vg),n.context=lg(null),a=n.current,s=Jn(),s=zs(s),c=Ca(s),c.callback=null,wa(a,c,s),a=s,n.current.lanes=a,wn(n,a),Li(n),t[_i]=n.current,Df(t),new ac(n)},wo.version="19.2.3",wo}var wg;function bS(){if(wg)return Jf.exports;wg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Jf.exports=ES(),Jf.exports}var TS=bS();function wc(o){const e=[],i=o.length;for(let r=0;r<i;r++){let l=0,u=0;for(let p=0;p<i;p++){const g=2*Math.PI*r*p/i;l+=o[p].re*Math.cos(g)+o[p].im*Math.sin(g),u+=-o[p].re*Math.sin(g)+o[p].im*Math.cos(g)}l=l/i,u=u/i;const h=r,d=Math.sqrt(l*l+u*u),m=Math.atan2(u,l);e[r]={re:l,im:u,freq:h,amp:d,phase:m}}return e}const AS=()=>{const o=de.useRef(null),e=de.useRef(null),i=de.useRef(null),r=de.useRef({}),l=de.useRef([]),u=de.useRef([]),h=de.useRef({x:0,y:0}),d=de.useRef(null),m=de.useRef(null),p=de.useRef([]),g=de.useRef(null),v=de.useRef(Date.now()),S=18e4,[E,R]=de.useState(!1),[D,M]=de.useState([]),[x,B]=de.useState(null),[F,z]=de.useState({x:0,y:0}),[H,L]=de.useState([]),[U,q]=de.useState(100),[b,C]=de.useState(!1),[G,K]=de.useState(.2),[W,pt]=de.useState({speed:.08,persistence:2,weight:1.8,coreWeight:.5,intensity:.15,spread:600,scale:1.26,delay:1.2,displayDuration:1.3,waveform:"sine"}),[ct,O]=de.useState(!1);de.useEffect(()=>{m.current=W},[W]),de.useEffect(()=>{u.current=D},[D]),de.useEffect(()=>{h.current=F},[F]),de.useEffect(()=>{h.current=F},[F]);const P=2,J=at=>{const Mt=o.current;if(!Mt)return{x:0,y:0};const Pt=Mt.getBoundingClientRect();return{x:at.clientX-Pt.left,y:at.clientY-Pt.top}},bt=at=>{if(at.button!==void 0&&at.button!==0)return;at.target.setPointerCapture(at.pointerId),R(!0),z({x:0,y:0});const Mt=J(at);l.current=[Mt],M([Mt])},yt=at=>{if(!E)return;const Mt=J(at);l.current.push(Mt),M(Pt=>[...Pt,Mt])},N=at=>{if(E){R(!1);try{at.target.releasePointerCapture(at.pointerId)}catch{}_t()}},it=at=>{if(E){R(!1);try{at.target.releasePointerCapture(at.pointerId)}catch{}_t()}},_t=()=>{const at=l.current;if(at.length>0){const Mt=at.reduce((I,ye)=>I+ye.x,0)/at.length,Pt=at.reduce((I,ye)=>I+ye.y,0)/at.length,Jt=o.current,Lt={x:Mt-Jt.width/2,y:Pt-Jt.height/2},re=at.map(I=>({x:I.x-Mt,y:I.y-Pt}));g.current=re,B(re),at.length>=2&&Rt(at,"manual",Lt)}M([]),l.current=[]},Rt=de.useCallback((at,Mt=null,Pt=null)=>{if(at.length<2)return;const Jt=at.reduce((Yt,Et)=>Yt+Et.x,0)/at.length,Lt=at.reduce((Yt,Et)=>Yt+Et.y,0)/at.length,re=Mt==="manual"||at.length<100?1:P,I=at.filter((Yt,Et)=>Et%re===0).map(Yt=>({re:Yt.x-Jt,im:Yt.y-Lt})),ye=wc(I);ye.sort((Yt,Et)=>Et.amp-Yt.amp);const le={id:Date.now(),createdAt:Date.now(),fourier:ye,time:0,path:[],center:Pt||{x:(Math.random()-.5)*W.spread,y:(Math.random()-.5)*W.spread},hue:Math.random()*360,activeSeed:Mt,precision:U,isAnimating:!0,reversed:Math.random()<.5};L(Yt=>{const w=[...Yt,le].slice(-6);return p.current=w,v.current=Date.now(),w})},[U,W.spread]),zt=at=>{const Mt=[],Jt=Math.min(window.innerWidth,window.innerHeight),Lt=Jt*.3*W.scale,re=W.spread*(Jt/1e3),I={x:(Math.random()-.5)*re,y:(Math.random()-.5)*re};if(z(I),at==="custom"){if(!x)return;M([...x]),setTimeout(()=>Rt(x,"custom",I),W.delay*1e3),setTimeout(()=>{M([]),z({x:0,y:0})},W.delay*1e3+W.displayDuration*1e3);return}for(let Yt=0;Yt<512;Yt++){const Et=Yt/512*Math.PI*2;let w=0,y=0;if(at==="lissajous")w=Lt*Math.sin(3*Et+Math.PI/2),y=Lt*Math.sin(2*Et);else if(at==="hypotrochoid"){const X=Lt,rt=Lt*.4,gt=Lt*.6;w=(X-rt)*Math.cos(Et)+gt*Math.cos((X-rt)/rt*Et),y=(X-rt)*Math.sin(Et)-gt*Math.sin((X-rt)/rt*Et)}else if(at==="infinity"){const X=Lt*1.5;w=X*Math.cos(Et)/(1+Math.sin(Et)*Math.sin(Et)),y=X*Math.sin(Et)*Math.cos(Et)/(1+Math.sin(Et)*Math.sin(Et))}else if(at==="ellipse"){const X=Lt*1.2,rt=Lt*.6;w=X*Math.cos(Et),y=rt*Math.sin(Et)}else if(at==="cassini"){const X=Lt*.3,rt=Lt*.5,gt=Math.cos(2*Et),ht=Math.sqrt(rt*rt*rt*rt-X*X*X*X*Math.sin(2*Et)*Math.sin(2*Et)),jt=Math.sqrt(X*X*gt+ht);w=jt*Math.cos(Et),y=jt*Math.sin(Et)}Mt.push({x:w,y})}const le=Math.random()<.5?Mt.map(Yt=>({x:Yt.x,y:-Yt.y})):Mt;M(le.map(Yt=>({x:Yt.x,y:Yt.y}))),setTimeout(()=>Rt(le,at,I),W.delay*1e3),setTimeout(()=>{M([]),z({x:0,y:0})},W.delay*1e3+W.displayDuration*1e3)},$=(at,Mt,Pt,Jt=1)=>{const Lt=at/Mt*40-20;return`hsla(${(Pt+Lt+360)%360}, 100%, 65%, ${Jt})`},dt=(at,Mt,Pt,Jt,Lt,re,I,ye)=>{let le=Mt,Yt=Pt;for(let Et=0;Et<Math.min(Lt.length,I);Et++){const w=le,y=Yt,{freq:X,amp:rt,phase:gt}=Lt[Et],ht=X*Jt+gt;le+=rt*Math.cos(ht),Yt+=rt*Math.sin(ht);const jt=Math.max(.005,ye.intensity-Et*5e-4);at.beginPath(),at.strokeStyle=$(Et,I,re,jt),at.lineWidth=ye.coreWeight,at.arc(w,y,rt,0,Math.PI*2),at.stroke(),Et<10&&(at.beginPath(),at.strokeStyle=$(Et,I,re,jt*2),at.moveTo(w,y),at.lineTo(le,Yt),at.stroke())}return{x:le,y:Yt}};de.useEffect(()=>{const at=o.current;if(!at)return;const Mt=at.getContext("2d");let Pt;const Jt=()=>{const Lt=m.current;if(!Lt){Pt=requestAnimationFrame(Jt);return}const re=window.innerWidth,I=window.innerHeight;if(at.width!==re||at.height!==I){if(at.width>0&&at.height>0){const w=re/at.width,y=I/at.height,X=Math.min(w,y);p.current.forEach(rt=>{rt.center.x*=w,rt.center.y*=y,rt.fourier.forEach(gt=>gt.amp*=X),rt.path.forEach(gt=>{gt.x*=w,gt.y*=y})}),u.current.length>0&&(u.current.forEach(rt=>{rt.x*=w,rt.y*=y}),M([...u.current])),l.current&&l.current.length>0&&l.current.forEach(rt=>{rt.x*=w,rt.y*=y}),h.current&&(h.current.x*=w,h.current.y*=y,z({...h.current}))}at.width=re,at.height=I}const ye=Math.max(.01,.2/(Lt.persistence/2));Mt.fillStyle=`rgba(2, 2, 5, ${ye})`,Mt.fillRect(0,0,at.width,at.height),Mt.strokeStyle="rgba(255, 255, 255, 0.008)",Mt.lineWidth=.5;const le=80;for(let w=0;w<at.width;w+=le)Mt.beginPath(),Mt.moveTo(w,0),Mt.lineTo(w,at.height),Mt.stroke();for(let w=0;w<at.height;w+=le)Mt.beginPath(),Mt.moveTo(0,w),Mt.lineTo(at.width,w),Mt.stroke();const Yt=u.current,Et=h.current;Yt.length>0&&(Mt.save(),(Et.x!==0||Et.y!==0)&&Mt.translate(at.width/2+Et.x,at.height/2+Et.y),Mt.strokeStyle="rgba(0, 242, 255, 0.4)",Mt.lineWidth=1.2,Mt.setLineDash([5,5]),Mt.beginPath(),Mt.moveTo(Yt[0].x,Yt[0].y),Yt.forEach(w=>Mt.lineTo(w.x,w.y)),Mt.stroke(),Mt.restore()),p.current=p.current.map(w=>{if(!w.isAnimating)return w;const X=[dt(Mt,at.width/2+w.center.x,at.height/2+w.center.y,w.time,w.fourier,w.hue,w.precision,Lt),...w.path],rt=w.fourier.length*Lt.persistence;if(X.length>rt&&X.pop(),X.length>1){Mt.save(),Mt.lineJoin="round",Mt.lineCap="round",Mt.lineWidth=Lt.weight,Mt.beginPath(),Mt.moveTo(X[0].x,X[0].y);for(let wt=1;wt<X.length;wt++)if(Mt.globalAlpha=Math.max(.02,1-wt/X.length),Mt.lineTo(X[wt].x,X[wt].y),wt%30===0){const Qt=(w.hue+wt/X.length*30)%360;Mt.strokeStyle=`hsla(${Qt}, 100%, 65%, ${Mt.globalAlpha})`,Mt.stroke(),Mt.beginPath(),Mt.moveTo(X[wt].x,X[wt].y)}Mt.stroke(),Mt.restore()}const gt=Math.PI*2/w.fourier.length*Lt.speed,ht=w.reversed?-gt:gt,jt=(w.time+ht+Math.PI*2)%(Math.PI*2);return{...w,path:X,time:jt}}),L([...p.current]),Pt=requestAnimationFrame(Jt),Date.now()-v.current>S&&p.current.length>0&&(p.current=[],L([]),M([]),e.current&&e.current.state==="running"&&(Object.values(r.current).forEach(w=>{w.osc&&w.osc.stop()}),r.current={},d.current&&(d.current.stop(),d.current=null)))};return Jt(),()=>cancelAnimationFrame(Pt)},[]),de.useEffect(()=>{p.current=p.current.map(at=>({...at,precision:U})),L([...p.current])},[U]),de.useEffect(()=>{if(!b||!e.current){d.current&&(d.current.gain.gain.setTargetAtTime(0,e.current.currentTime,.1),setTimeout(()=>{d.current&&(d.current.oscillators.forEach(Pt=>{try{Pt.stop()}catch{}}),d.current.gain.disconnect(),d.current=null)},200)),Object.keys(r.current).forEach(Pt=>{const Jt=r.current[Pt];Jt.gain.gain.linearRampToValueAtTime(0,e.current.currentTime+.1),Jt.oscillators.forEach(Lt=>{try{Lt.stop(e.current.currentTime+.2)}catch{}}),delete r.current[Pt]});return}const at=e.current;if(!d.current&&b){const Pt=at.createGain();Pt.gain.value=0,Pt.connect(i.current);const Jt=[55,110,165].map(Lt=>{const re=at.createOscillator();re.type="sine",re.frequency.value=Lt;const I=at.createGain();return I.gain.value=.05,re.connect(I),I.connect(Pt),re.start(),re});d.current={gain:Pt,oscillators:Jt},Pt.gain.setTargetAtTime(.3,at.currentTime,2)}const Mt=new Set(H.map(Pt=>Pt.id));Object.keys(r.current).forEach(Pt=>{if(!Mt.has(Number(Pt))){const Jt=r.current[Pt];Jt.gain.gain.setTargetAtTime(0,at.currentTime,.15),setTimeout(()=>{Jt.oscillators.forEach(Lt=>{try{Lt.stop()}catch{}}),Jt.gain.disconnect(),Jt.panner&&Jt.panner.disconnect(),delete r.current[Pt]},500)}}),H.forEach(Pt=>{if(!r.current[Pt.id]){const Lt=at.createGain();Lt.gain.value=0;const re=at.createStereoPanner?at.createStereoPanner():null;re?(re.connect(i.current),Lt.connect(re)):Lt.connect(i.current);const I=Pt.fourier.slice(1,13).map((ye,le)=>{const Yt=at.createOscillator(),Et=at.createGain();return Yt.type=W.waveform,Yt.frequency.value=220*(le+1),Et.gain.value=ye.amp/Pt.fourier[0].amp*.12,Yt.connect(Et),Et.connect(Lt),Yt.start(),Yt});r.current[Pt.id]={gain:Lt,oscillators:I,panner:re},Lt.gain.setTargetAtTime(.2,at.currentTime,.4)}const Jt=r.current[Pt.id];if(Jt&&Jt.panner){const Lt=Pt.center.x/(window.innerWidth/1.5);Jt.panner.pan.setTargetAtTime(Math.max(-1,Math.min(1,Lt)),at.currentTime,.1)}})},[H,b,W.waveform]);const Ct=()=>{p.current=[],L([]),M([]),v.current=Date.now()},Ft=(at,Mt)=>pt(Pt=>({...Pt,[at]:Mt})),Ot=()=>{if(!e.current){const at=window.AudioContext||window.webkitAudioContext;e.current=new at;const Mt=e.current.createGain();Mt.gain.value=G,Mt.connect(e.current.destination),i.current=Mt}e.current.state==="suspended"&&e.current.resume(),C(!0)},fe=()=>{b?(e.current&&e.current.suspend(),C(!1)):Ot()};return de.useEffect(()=>{i.current&&i.current.gain.setTargetAtTime(G,e.current.currentTime,.1)},[G]),lt.jsxs("div",{className:"canvas-container",children:[lt.jsx("canvas",{ref:o,onPointerDown:bt,onPointerMove:yt,onPointerUp:N,onPointerCancel:it,style:{touchAction:"none"}}),H.length===0&&!E&&lt.jsx("div",{className:"instruction-overlay",children:"Summon harmonics or draw your own"}),lt.jsxs("div",{className:"ui-overlay",children:[lt.jsx("header",{className:"header",onPointerDown:at=>at.stopPropagation(),children:lt.jsx("div",{className:"header-top",children:lt.jsxs("div",{className:"header-title",children:[lt.jsx("h1",{children:"2D Fourier"}),lt.jsx("p",{children:"Multi-instance harmonic synthesis"})]})})}),lt.jsx("button",{className:"mobile-settings-toggle",onClick:()=>O(!ct),style:{display:"none",position:"absolute",top:"20px",right:"20px",background:"rgba(0, 242, 255, 0.2)",border:"1px solid rgba(0, 242, 255, 0.5)",color:"white",padding:"10px 14px",borderRadius:"8px",fontSize:"1.2rem",cursor:"pointer",zIndex:1e4},children:ct?"✕":"☰"}),lt.jsx("div",{className:"floating-dock-container",onPointerDown:at=>at.stopPropagation(),children:lt.jsxs("div",{className:"floating-dock",children:[lt.jsxs("button",{onClick:()=>{const at=["lissajous","hypotrochoid","infinity","ellipse","cassini"];x&&at.push("custom"),zt(at[Math.floor(Math.random()*at.length)])},className:"dock-btn random",title:"Random Shuffle",children:["🎲 ",lt.jsx("span",{className:"btn-label",children:"Shuffle"})]}),lt.jsx("div",{className:"dock-divider"}),lt.jsx("button",{onClick:()=>zt("lissajous"),className:"dock-btn",title:"Lissajous Curve",children:"Lissajous"}),lt.jsx("button",{onClick:()=>zt("hypotrochoid"),className:"dock-btn",title:"Spirograph",children:"Spirograph"}),lt.jsx("button",{onClick:()=>zt("infinity"),className:"dock-btn",title:"Infinity Loop",children:"Infinity"}),lt.jsx("button",{onClick:()=>zt("ellipse"),className:"dock-btn",title:"Simple Ellipse",children:"Ellipse"}),lt.jsx("button",{onClick:()=>zt("cassini"),className:"dock-btn",title:"Cassini Oval",children:"Cassini"}),lt.jsx("div",{className:"dock-divider"}),lt.jsxs("button",{onClick:()=>zt("custom"),className:`dock-btn special ${!g.current&&!x?"disabled":""}`,title:"Redraw Your Path",children:["✨ ",lt.jsx("span",{className:"btn-label",children:"My Art"})]}),lt.jsx("div",{className:"dock-divider"}),lt.jsx("button",{className:"dock-btn reset-text",onClick:Ct,title:"Clear Canvas & Restart",children:"🔄 Reset"})]})}),lt.jsxs("div",{className:`controls ${ct?"mobile-open":""}`,onPointerDown:at=>at.stopPropagation(),children:[lt.jsxs("div",{className:"panel-header",children:["Settings",lt.jsx("span",{className:"mobile-close-btn",onClick:()=>O(!1),children:"✕"})]}),lt.jsxs("div",{className:"control-section",children:[lt.jsxs("div",{className:"section-header-row",children:[lt.jsx("div",{className:"section-title",children:"Audio"}),lt.jsx("button",{className:`panel-audio-toggle ${b?"active":""}`,onClick:fe,title:b?"Disable Audio":"Enable Audio",children:b?"🔊":"🔇"})]}),lt.jsxs("div",{className:"control-group",children:[lt.jsxs("label",{children:["Volume: ",Math.round(G*100),"%"]}),lt.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:G,onChange:at=>K(parseFloat(at.target.value))})]}),lt.jsxs("div",{className:"control-group",children:[lt.jsx("label",{children:"Sound Mood"}),lt.jsx("div",{className:"mood-selector",children:["sine","triangle","square","sawtooth"].map(at=>lt.jsx("button",{className:`mood-btn ${W.waveform===at?"active":""}`,onClick:()=>Ft("waveform",at),children:at.charAt(0).toUpperCase()+at.slice(1)},at))})]})]}),lt.jsxs("div",{className:"control-section",children:[lt.jsx("div",{className:"section-title",children:"Visual"}),lt.jsxs("div",{className:"control-group",children:[lt.jsxs("label",{children:["Geometric Detail: ",U]}),lt.jsx("input",{type:"range",min:"1",max:"500",value:U,onChange:at=>q(parseInt(at.target.value))})]}),lt.jsxs("div",{className:"control-group",children:[lt.jsxs("label",{children:["Flow Speed: ",W.speed.toFixed(2),"x"]}),lt.jsx("input",{type:"range",min:"0.01",max:"0.5",step:"0.01",value:W.speed,onChange:at=>Ft("speed",parseFloat(at.target.value))})]}),lt.jsxs("div",{className:"control-group",children:[lt.jsxs("label",{children:["Persistence: ",W.persistence,"x"]}),lt.jsx("input",{type:"range",min:"1",max:"15",step:"0.5",value:W.persistence,onChange:at=>Ft("persistence",parseFloat(at.target.value))})]}),lt.jsxs("div",{className:"control-group",children:[lt.jsxs("label",{children:["Path Weight: ",W.weight.toFixed(1),"px"]}),lt.jsx("input",{type:"range",min:"0.5",max:"5",step:"0.1",value:W.weight,onChange:at=>Ft("weight",parseFloat(at.target.value))})]}),lt.jsxs("div",{className:"control-group",children:[lt.jsxs("label",{children:["Core Weight: ",W.coreWeight.toFixed(1),"px"]}),lt.jsx("input",{type:"range",min:"0.1",max:"4",step:"0.1",value:W.coreWeight,onChange:at=>Ft("coreWeight",parseFloat(at.target.value))})]}),lt.jsxs("div",{className:"control-group",children:[lt.jsxs("label",{children:["Intensity: ",Math.round(W.intensity*500),"%"]}),lt.jsx("input",{type:"range",min:"0.02",max:"0.3",step:"0.01",value:W.intensity,onChange:at=>Ft("intensity",parseFloat(at.target.value))})]}),lt.jsxs("div",{className:"control-group",children:[lt.jsxs("label",{children:["Spatial Spread: ",W.spread,"px"]}),lt.jsx("input",{type:"range",min:"0",max:"2500",step:"10",value:W.spread,onChange:at=>Ft("spread",parseInt(at.target.value))})]}),lt.jsxs("div",{className:"control-group",children:[lt.jsxs("label",{children:["Shape Scale: ",Math.round(W.scale*100),"%"]}),lt.jsx("input",{type:"range",min:"0.2",max:"1.5",step:"0.1",value:W.scale,onChange:at=>Ft("scale",parseFloat(at.target.value))})]}),lt.jsxs("div",{className:"control-group",children:[lt.jsxs("label",{children:["Sequence Delay: ",W.delay.toFixed(1),"s"]}),lt.jsx("input",{type:"range",min:"0",max:"5",step:"0.1",value:W.delay,onChange:at=>Ft("delay",parseFloat(at.target.value))})]}),lt.jsxs("div",{className:"control-group",children:[lt.jsxs("label",{children:["Seed Display Time: ",W.displayDuration,"s"]}),lt.jsx("input",{type:"range",min:"0.5",max:"30",step:"0.5",value:W.displayDuration,onChange:at=>Ft("displayDuration",parseFloat(at.target.value))})]})]})]})]})]})};const Ud="182",RS=0,Dg=1,CS=2,Dc=1,wS=2,Bo=3,$a=0,Wn=1,fa=2,da=0,As=1,Ug=2,Lg=3,Ng=4,DS=5,Tr=100,US=101,LS=102,NS=103,OS=104,PS=200,zS=201,FS=202,BS=203,Ph=204,zh=205,IS=206,HS=207,GS=208,VS=209,XS=210,kS=211,WS=212,qS=213,YS=214,Fh=0,Bh=1,Ih=2,Cs=3,Hh=4,Gh=5,Vh=6,Xh=7,w_=0,jS=1,ZS=2,Fi=0,D_=1,U_=2,L_=3,N_=4,O_=5,P_=6,z_=7,F_=300,wr=301,ws=302,kh=303,Wh=304,Gc=306,qh=1e3,ha=1001,Yh=1002,Cn=1003,KS=1004,sc=1005,Nn=1006,nh=1007,Rr=1008,ni=1009,B_=1010,I_=1011,Ho=1012,Ld=1013,Hi=1014,Pi=1015,ma=1016,Nd=1017,Od=1018,Go=1020,H_=35902,G_=35899,V_=1021,X_=1022,Ai=1023,ga=1026,Cr=1027,k_=1028,Pd=1029,Ds=1030,zd=1031,Fd=1033,Uc=33776,Lc=33777,Nc=33778,Oc=33779,jh=35840,Zh=35841,Kh=35842,Qh=35843,Jh=36196,$h=37492,td=37496,ed=37488,nd=37489,id=37490,ad=37491,rd=37808,sd=37809,od=37810,ld=37811,cd=37812,ud=37813,fd=37814,hd=37815,dd=37816,pd=37817,md=37818,gd=37819,_d=37820,vd=37821,xd=36492,Sd=36494,yd=36495,Md=36283,Ed=36284,bd=36285,Td=36286,QS=3200,JS=0,$S=1,Qa="",pi="srgb",Us="srgb-linear",zc="linear",Xe="srgb",hs=7680,Og=519,ty=512,ey=513,ny=514,Bd=515,iy=516,ay=517,Id=518,ry=519,Pg=35044,zg="300 es",zi=2e3,Fc=2001;function W_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Bc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function sy(){const o=Bc("canvas");return o.style.display="block",o}const Fg={};function Bg(...o){const e="THREE."+o.shift();console.log(e,...o)}function pe(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Ne(...o){const e="THREE."+o.shift();console.error(e,...o)}function Vo(...o){const e=o.join(" ");e in Fg||(Fg[e]=!0,pe(...o))}function oy(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class Ns{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ih=Math.PI/180,Ad=180/Math.PI;function ko(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Re(o,e,i){return Math.max(e,Math.min(i,o))}function ly(o,e){return(o%e+e)%e}function ah(o,e,i){return(1-i)*o+i*e}function Do(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function kn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,i=0){Be.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Re(this.x,e.x,i.x),this.y=Re(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Re(this.x,e,i),this.y=Re(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Re(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Re(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3],S=u[h+0],E=u[h+1],R=u[h+2],D=u[h+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(d>=1){e[i+0]=S,e[i+1]=E,e[i+2]=R,e[i+3]=D;return}if(v!==D||m!==S||p!==E||g!==R){let M=m*S+p*E+g*R+v*D;M<0&&(S=-S,E=-E,R=-R,D=-D,M=-M);let x=1-d;if(M<.9995){const B=Math.acos(M),F=Math.sin(B);x=Math.sin(x*B)/F,d=Math.sin(d*B)/F,m=m*x+S*d,p=p*x+E*d,g=g*x+R*d,v=v*x+D*d}else{m=m*x+S*d,p=p*x+E*d,g=g*x+R*d,v=v*x+D*d;const B=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=B,p*=B,g*=B,v*=B}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[h],S=u[h+1],E=u[h+2],R=u[h+3];return e[i]=d*R+g*v+m*E-p*S,e[i+1]=m*R+g*S+p*v-d*E,e[i+2]=p*R+g*E+d*S-m*v,e[i+3]=g*R-d*v-m*S-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(u/2),S=m(r/2),E=m(l/2),R=m(u/2);switch(h){case"XYZ":this._x=S*g*v+p*E*R,this._y=p*E*v-S*g*R,this._z=p*g*R+S*E*v,this._w=p*g*v-S*E*R;break;case"YXZ":this._x=S*g*v+p*E*R,this._y=p*E*v-S*g*R,this._z=p*g*R-S*E*v,this._w=p*g*v+S*E*R;break;case"ZXY":this._x=S*g*v-p*E*R,this._y=p*E*v+S*g*R,this._z=p*g*R+S*E*v,this._w=p*g*v-S*E*R;break;case"ZYX":this._x=S*g*v-p*E*R,this._y=p*E*v+S*g*R,this._z=p*g*R-S*E*v,this._w=p*g*v+S*E*R;break;case"YZX":this._x=S*g*v+p*E*R,this._y=p*E*v+S*g*R,this._z=p*g*R-S*E*v,this._w=p*g*v-S*E*R;break;case"XZY":this._x=S*g*v-p*E*R,this._y=p*E*v-S*g*R,this._z=p*g*R+S*E*v,this._w=p*g*v+S*E*R;break;default:pe("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],S=r+d+v;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(g-m)*E,this._y=(u-p)*E,this._z=(h-l)*E}else if(r>d&&r>v){const E=2*Math.sqrt(1+r-d-v);this._w=(g-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(u+p)/E}else if(d>v){const E=2*Math.sqrt(1+d-r-v);this._w=(u-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+g)/E}else{const E=2*Math.sqrt(1+v-r-d);this._w=(h-l)/E,this._x=(u+p)/E,this._y=(m+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Re(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,u=e._z,h=e._w,d=this.dot(e);d<0&&(r=-r,l=-l,u=-u,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(e=0,i=0,r=0){nt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Ig.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Ig.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),g=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+m*p+h*v-d*g,this.y=r+m*g+d*p-u*v,this.z=l+m*v+u*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Re(this.x,e.x,i.x),this.y=Re(this.y,e.y,i.y),this.z=Re(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Re(this.x,e,i),this.y=Re(this.y,e,i),this.z=Re(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Re(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return rh.copy(this).projectOnVector(e),this.sub(rh)}reflect(e){return this.sub(rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Re(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rh=new nt,Ig=new Wo;class xe{constructor(e,i,r,l,u,h,d,m,p){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],S=r[2],E=r[5],R=r[8],D=l[0],M=l[3],x=l[6],B=l[1],F=l[4],z=l[7],H=l[2],L=l[5],U=l[8];return u[0]=h*D+d*B+m*H,u[3]=h*M+d*F+m*L,u[6]=h*x+d*z+m*U,u[1]=p*D+g*B+v*H,u[4]=p*M+g*F+v*L,u[7]=p*x+g*z+v*U,u[2]=S*D+E*B+R*H,u[5]=S*M+E*F+R*L,u[8]=S*x+E*z+R*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=g*h-d*p,S=d*m-g*u,E=p*u-h*m,R=i*v+r*S+l*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/R;return e[0]=v*D,e[1]=(l*p-g*r)*D,e[2]=(d*r-l*h)*D,e[3]=S*D,e[4]=(g*i-l*m)*D,e[5]=(l*u-d*i)*D,e[6]=E*D,e[7]=(r*m-p*i)*D,e[8]=(h*i-r*u)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(sh.makeScale(e,i)),this}rotate(e){return this.premultiply(sh.makeRotation(-e)),this}translate(e,i){return this.premultiply(sh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sh=new xe,Hg=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gg=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cy(){const o={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Xe&&(l.r=pa(l.r),l.g=pa(l.g),l.b=pa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Xe&&(l.r=Rs(l.r),l.g=Rs(l.g),l.b=Rs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Qa?zc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Vo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Vo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Us]:{primaries:e,whitePoint:r,transfer:zc,toXYZ:Hg,fromXYZ:Gg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:r,transfer:Xe,toXYZ:Hg,fromXYZ:Gg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),o}const we=cy();function pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Rs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ds;class uy{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ds===void 0&&(ds=Bc("canvas")),ds.width=e.width,ds.height=e.height;const l=ds.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ds}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Bc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=pa(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(pa(i[r]/255)*255):i[r]=pa(i[r]);return{data:i,width:e.width,height:e.height}}else return pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fy=0;class Hd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=ko(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(oh(l[h].image)):u.push(oh(l[h]))}else u=oh(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function oh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?uy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(pe("Texture: Unable to serialize Texture."),{})}let hy=0;const lh=new nt;class zn extends Ns{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=ha,l=ha,u=Nn,h=Rr,d=Ai,m=ni,p=zn.DEFAULT_ANISOTROPY,g=Qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=ko(),this.name="",this.source=new Hd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lh).x}get height(){return this.source.getSize(lh).y}get depth(){return this.source.getSize(lh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){pe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){pe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==F_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qh:e.x=e.x-Math.floor(e.x);break;case ha:e.x=e.x<0?0:1;break;case Yh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qh:e.y=e.y-Math.floor(e.y);break;case ha:e.y=e.y<0?0:1;break;case Yh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=F_;zn.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,i=0,r=0,l=1){nn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],v=m[8],S=m[1],E=m[5],R=m[9],D=m[2],M=m[6],x=m[10];if(Math.abs(g-S)<.01&&Math.abs(v-D)<.01&&Math.abs(R-M)<.01){if(Math.abs(g+S)<.1&&Math.abs(v+D)<.1&&Math.abs(R+M)<.1&&Math.abs(p+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const F=(p+1)/2,z=(E+1)/2,H=(x+1)/2,L=(g+S)/4,U=(v+D)/4,q=(R+M)/4;return F>z&&F>H?F<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(F),l=L/r,u=U/r):z>H?z<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(z),r=L/l,u=q/l):H<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),r=U/u,l=q/u),this.set(r,l,u,i),this}let B=Math.sqrt((M-R)*(M-R)+(v-D)*(v-D)+(S-g)*(S-g));return Math.abs(B)<.001&&(B=1),this.x=(M-R)/B,this.y=(v-D)/B,this.z=(S-g)/B,this.w=Math.acos((p+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Re(this.x,e.x,i.x),this.y=Re(this.y,e.y,i.y),this.z=Re(this.z,e.z,i.z),this.w=Re(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Re(this.x,e,i),this.y=Re(this.y,e,i),this.z=Re(this.z,e,i),this.w=Re(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Re(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dy extends Ns{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new nn(0,0,e,i),this.scissorTest=!1,this.viewport=new nn(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new zn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Hd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends dy{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class q_ extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class py extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo{constructor(e=new nt(1/0,1/0,1/0),i=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Mi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Mi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Mi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Mi):Mi.fromBufferAttribute(u,h),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),oc.copy(r.boundingBox)),oc.applyMatrix4(e.matrixWorld),this.union(oc)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),lc.subVectors(this.max,Uo),ps.subVectors(e.a,Uo),ms.subVectors(e.b,Uo),gs.subVectors(e.c,Uo),Wa.subVectors(ms,ps),qa.subVectors(gs,ms),vr.subVectors(ps,gs);let i=[0,-Wa.z,Wa.y,0,-qa.z,qa.y,0,-vr.z,vr.y,Wa.z,0,-Wa.x,qa.z,0,-qa.x,vr.z,0,-vr.x,-Wa.y,Wa.x,0,-qa.y,qa.x,0,-vr.y,vr.x,0];return!ch(i,ps,ms,gs,lc)||(i=[1,0,0,0,1,0,0,0,1],!ch(i,ps,ms,gs,lc))?!1:(cc.crossVectors(Wa,qa),i=[cc.x,cc.y,cc.z],ch(i,ps,ms,gs,lc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const sa=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],Mi=new nt,oc=new qo,ps=new nt,ms=new nt,gs=new nt,Wa=new nt,qa=new nt,vr=new nt,Uo=new nt,lc=new nt,cc=new nt,xr=new nt;function ch(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){xr.fromArray(o,u);const d=l.x*Math.abs(xr.x)+l.y*Math.abs(xr.y)+l.z*Math.abs(xr.z),m=e.dot(xr),p=i.dot(xr),g=r.dot(xr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const my=new qo,Lo=new nt,uh=new nt;class Vc{constructor(e=new nt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):my.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Lo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(uh)),this.expandByPoint(Lo.copy(e.center).sub(uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const oa=new nt,fh=new nt,uc=new nt,Ya=new nt,hh=new nt,fc=new nt,dh=new nt;class Y_{constructor(e=new nt,i=new nt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=oa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(oa.copy(this.origin).addScaledVector(this.direction,i),oa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){fh.copy(e).add(i).multiplyScalar(.5),uc.copy(i).sub(e).normalize(),Ya.copy(this.origin).sub(fh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(uc),d=Ya.dot(this.direction),m=-Ya.dot(uc),p=Ya.lengthSq(),g=Math.abs(1-h*h);let v,S,E,R;if(g>0)if(v=h*m-d,S=h*d-m,R=u*g,v>=0)if(S>=-R)if(S<=R){const D=1/g;v*=D,S*=D,E=v*(v+h*S+2*d)+S*(h*v+S+2*m)+p}else S=u,v=Math.max(0,-(h*S+d)),E=-v*v+S*(S+2*m)+p;else S=-u,v=Math.max(0,-(h*S+d)),E=-v*v+S*(S+2*m)+p;else S<=-R?(v=Math.max(0,-(-h*u+d)),S=v>0?-u:Math.min(Math.max(-u,-m),u),E=-v*v+S*(S+2*m)+p):S<=R?(v=0,S=Math.min(Math.max(-u,-m),u),E=S*(S+2*m)+p):(v=Math.max(0,-(h*u+d)),S=v>0?u:Math.min(Math.max(-u,-m),u),E=-v*v+S*(S+2*m)+p);else S=h>0?-u:u,v=Math.max(0,-(h*S+d)),E=-v*v+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(fh).addScaledVector(uc,S),E}intersectSphere(e,i){oa.subVectors(e.center,this.origin);const r=oa.dot(this.direction),l=oa.dot(oa)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),g>=0?(u=(e.min.y-S.y)*g,h=(e.max.y-S.y)*g):(u=(e.max.y-S.y)*g,h=(e.min.y-S.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-S.z)*v,m=(e.max.z-S.z)*v):(d=(e.max.z-S.z)*v,m=(e.min.z-S.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,oa)!==null}intersectTriangle(e,i,r,l,u){hh.subVectors(i,e),fc.subVectors(r,e),dh.crossVectors(hh,fc);let h=this.direction.dot(dh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ya.subVectors(this.origin,e);const m=d*this.direction.dot(fc.crossVectors(Ya,fc));if(m<0)return null;const p=d*this.direction.dot(hh.cross(Ya));if(p<0||m+p>h)return null;const g=-d*Ya.dot(dh);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,i,r,l,u,h,d,m,p,g,v,S,E,R,D,M){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,g,v,S,E,R,D,M)}set(e,i,r,l,u,h,d,m,p,g,v,S,E,R,D,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=u,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=g,x[10]=v,x[14]=S,x[3]=E,x[7]=R,x[11]=D,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/_s.setFromMatrixColumn(e,0).length(),u=1/_s.setFromMatrixColumn(e,1).length(),h=1/_s.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const S=h*g,E=h*v,R=d*g,D=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=E+R*p,i[5]=S-D*p,i[9]=-d*m,i[2]=D-S*p,i[6]=R+E*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*g,E=m*v,R=p*g,D=p*v;i[0]=S+D*d,i[4]=R*d-E,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=E*d-R,i[6]=D+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*g,E=m*v,R=p*g,D=p*v;i[0]=S-D*d,i[4]=-h*v,i[8]=R+E*d,i[1]=E+R*d,i[5]=h*g,i[9]=D-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*g,E=h*v,R=d*g,D=d*v;i[0]=m*g,i[4]=R*p-E,i[8]=S*p+D,i[1]=m*v,i[5]=D*p+S,i[9]=E*p-R,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,E=h*p,R=d*m,D=d*p;i[0]=m*g,i[4]=D-S*v,i[8]=R*v+E,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=E*v+R,i[10]=S-D*v}else if(e.order==="XZY"){const S=h*m,E=h*p,R=d*m,D=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=S*v+D,i[5]=h*g,i[9]=E*v-R,i[2]=R*v-E,i[6]=d*g,i[10]=D*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gy,e,_y)}lookAt(e,i,r){const l=this.elements;return $n.subVectors(e,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),ja.crossVectors(r,$n),ja.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),ja.crossVectors(r,$n)),ja.normalize(),hc.crossVectors($n,ja),l[0]=ja.x,l[4]=hc.x,l[8]=$n.x,l[1]=ja.y,l[5]=hc.y,l[9]=$n.y,l[2]=ja.z,l[6]=hc.z,l[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],S=r[9],E=r[13],R=r[2],D=r[6],M=r[10],x=r[14],B=r[3],F=r[7],z=r[11],H=r[15],L=l[0],U=l[4],q=l[8],b=l[12],C=l[1],G=l[5],K=l[9],W=l[13],pt=l[2],ct=l[6],O=l[10],P=l[14],J=l[3],bt=l[7],yt=l[11],N=l[15];return u[0]=h*L+d*C+m*pt+p*J,u[4]=h*U+d*G+m*ct+p*bt,u[8]=h*q+d*K+m*O+p*yt,u[12]=h*b+d*W+m*P+p*N,u[1]=g*L+v*C+S*pt+E*J,u[5]=g*U+v*G+S*ct+E*bt,u[9]=g*q+v*K+S*O+E*yt,u[13]=g*b+v*W+S*P+E*N,u[2]=R*L+D*C+M*pt+x*J,u[6]=R*U+D*G+M*ct+x*bt,u[10]=R*q+D*K+M*O+x*yt,u[14]=R*b+D*W+M*P+x*N,u[3]=B*L+F*C+z*pt+H*J,u[7]=B*U+F*G+z*ct+H*bt,u[11]=B*q+F*K+z*O+H*yt,u[15]=B*b+F*W+z*P+H*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],v=e[6],S=e[10],E=e[14],R=e[3],D=e[7],M=e[11],x=e[15],B=m*E-p*S,F=d*E-p*v,z=d*S-m*v,H=h*E-p*g,L=h*S-m*g,U=h*v-d*g;return i*(D*B-M*F+x*z)-r*(R*B-M*H+x*L)+l*(R*F-D*H+x*U)-u*(R*z-D*L+M*U)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=e[9],S=e[10],E=e[11],R=e[12],D=e[13],M=e[14],x=e[15],B=v*M*p-D*S*p+D*m*E-d*M*E-v*m*x+d*S*x,F=R*S*p-g*M*p-R*m*E+h*M*E+g*m*x-h*S*x,z=g*D*p-R*v*p+R*d*E-h*D*E-g*d*x+h*v*x,H=R*v*m-g*D*m-R*d*S+h*D*S+g*d*M-h*v*M,L=i*B+r*F+l*z+u*H;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/L;return e[0]=B*U,e[1]=(D*S*u-v*M*u-D*l*E+r*M*E+v*l*x-r*S*x)*U,e[2]=(d*M*u-D*m*u+D*l*p-r*M*p-d*l*x+r*m*x)*U,e[3]=(v*m*u-d*S*u-v*l*p+r*S*p+d*l*E-r*m*E)*U,e[4]=F*U,e[5]=(g*M*u-R*S*u+R*l*E-i*M*E-g*l*x+i*S*x)*U,e[6]=(R*m*u-h*M*u-R*l*p+i*M*p+h*l*x-i*m*x)*U,e[7]=(h*S*u-g*m*u+g*l*p-i*S*p-h*l*E+i*m*E)*U,e[8]=z*U,e[9]=(R*v*u-g*D*u-R*r*E+i*D*E+g*r*x-i*v*x)*U,e[10]=(h*D*u-R*d*u+R*r*p-i*D*p-h*r*x+i*d*x)*U,e[11]=(g*d*u-h*v*u-g*r*p+i*v*p+h*r*E-i*d*E)*U,e[12]=H*U,e[13]=(g*D*l-R*v*l+R*r*S-i*D*S-g*r*M+i*v*M)*U,e[14]=(R*d*l-h*D*l-R*r*m+i*D*m+h*r*M-i*d*M)*U,e[15]=(h*v*l-g*d*l+g*r*m-i*v*m-h*r*S+i*d*S)*U,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,v=d+d,S=u*p,E=u*g,R=u*v,D=h*g,M=h*v,x=d*v,B=m*p,F=m*g,z=m*v,H=r.x,L=r.y,U=r.z;return l[0]=(1-(D+x))*H,l[1]=(E+z)*H,l[2]=(R-F)*H,l[3]=0,l[4]=(E-z)*L,l[5]=(1-(S+x))*L,l[6]=(M+B)*L,l[7]=0,l[8]=(R+F)*U,l[9]=(M-B)*U,l[10]=(1-(S+D))*U,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let u=_s.set(l[0],l[1],l[2]).length();const h=_s.set(l[4],l[5],l[6]).length(),d=_s.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),Ei.copy(this);const p=1/u,g=1/h,v=1/d;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=g,Ei.elements[5]*=g,Ei.elements[6]*=g,Ei.elements[8]*=v,Ei.elements[9]*=v,Ei.elements[10]*=v,i.setFromRotationMatrix(Ei),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=zi,m=!1){const p=this.elements,g=2*u/(i-e),v=2*u/(r-l),S=(i+e)/(i-e),E=(r+l)/(r-l);let R,D;if(m)R=u/(h-u),D=h*u/(h-u);else if(d===zi)R=-(h+u)/(h-u),D=-2*h*u/(h-u);else if(d===Fc)R=-h/(h-u),D=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=v,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=R,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=zi,m=!1){const p=this.elements,g=2/(i-e),v=2/(r-l),S=-(i+e)/(i-e),E=-(r+l)/(r-l);let R,D;if(m)R=1/(h-u),D=h/(h-u);else if(d===zi)R=-2/(h-u),D=-(h+u)/(h-u);else if(d===Fc)R=-1/(h-u),D=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=v,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=R,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const _s=new nt,Ei=new $e,gy=new nt(0,0,0),_y=new nt(1,1,1),ja=new nt,hc=new nt,$n=new nt,Vg=new $e,Xg=new Wo;class _a{constructor(e=0,i=0,r=0,l=_a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Re(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Re(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Re(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,E),this._y=0);break;default:pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Vg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Xg.setFromEuler(this),this.setFromQuaternion(Xg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_a.DEFAULT_ORDER="XYZ";class j_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vy=0;const kg=new nt,vs=new Wo,la=new $e,dc=new nt,No=new nt,xy=new nt,Sy=new Wo,Wg=new nt(1,0,0),qg=new nt(0,1,0),Yg=new nt(0,0,1),jg={type:"added"},yy={type:"removed"},xs={type:"childadded",child:null},ph={type:"childremoved",child:null};class Fn extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new nt,i=new _a,r=new Wo,l=new nt(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new xe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new j_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(Wg,e)}rotateY(e){return this.rotateOnAxis(qg,e)}rotateZ(e){return this.rotateOnAxis(Yg,e)}translateOnAxis(e,i){return kg.copy(e).applyQuaternion(this.quaternion),this.position.add(kg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Wg,e)}translateY(e){return this.translateOnAxis(qg,e)}translateZ(e){return this.translateOnAxis(Yg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?dc.copy(e):dc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(No,dc,this.up):la.lookAt(dc,No,this.up),this.quaternion.setFromRotationMatrix(la),l&&(la.extractRotation(l.matrixWorld),vs.setFromRotationMatrix(la),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jg),xs.child=e,this.dispatchEvent(xs),xs.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(yy),ph.child=e,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),la.multiply(e.parent.matrixWorld)),e.applyMatrix4(la),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jg),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,xy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,Sy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),v=h(e.shapes),S=h(e.skeletons),E=h(e.animations),R=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),E.length>0&&(r.animations=E),R.length>0&&(r.nodes=R)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Fn.DEFAULT_UP=new nt(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new nt,ca=new nt,mh=new nt,ua=new nt,Ss=new nt,ys=new nt,Zg=new nt,gh=new nt,_h=new nt,vh=new nt,xh=new nn,Sh=new nn,yh=new nn;class Ti{constructor(e=new nt,i=new nt,r=new nt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),bi.subVectors(e,i),l.cross(bi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){bi.subVectors(l,i),ca.subVectors(r,i),mh.subVectors(e,i);const h=bi.dot(bi),d=bi.dot(ca),m=bi.dot(mh),p=ca.dot(ca),g=ca.dot(mh),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const S=1/v,E=(p*m-d*g)*S,R=(h*g-d*m)*S;return u.set(1-E-R,R,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ua.x),m.addScaledVector(h,ua.y),m.addScaledVector(d,ua.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return xh.setScalar(0),Sh.setScalar(0),yh.setScalar(0),xh.fromBufferAttribute(e,i),Sh.fromBufferAttribute(e,r),yh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(xh,u.x),h.addScaledVector(Sh,u.y),h.addScaledVector(yh,u.z),h}static isFrontFacing(e,i,r,l){return bi.subVectors(r,i),ca.subVectors(e,i),bi.cross(ca).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),bi.cross(ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ti.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ti.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;Ss.subVectors(l,r),ys.subVectors(u,r),gh.subVectors(e,r);const m=Ss.dot(gh),p=ys.dot(gh);if(m<=0&&p<=0)return i.copy(r);_h.subVectors(e,l);const g=Ss.dot(_h),v=ys.dot(_h);if(g>=0&&v<=g)return i.copy(l);const S=m*v-g*p;if(S<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(Ss,h);vh.subVectors(e,u);const E=Ss.dot(vh),R=ys.dot(vh);if(R>=0&&E<=R)return i.copy(u);const D=E*p-m*R;if(D<=0&&p>=0&&R<=0)return d=p/(p-R),i.copy(r).addScaledVector(ys,d);const M=g*R-E*v;if(M<=0&&v-g>=0&&E-R>=0)return Zg.subVectors(u,l),d=(v-g)/(v-g+(E-R)),i.copy(l).addScaledVector(Zg,d);const x=1/(M+D+S);return h=D*x,d=S*x,i.copy(r).addScaledVector(Ss,h).addScaledVector(ys,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Z_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},pc={h:0,s:0,l:0};function Mh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class De{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=we.workingColorSpace){return this.r=e,this.g=i,this.b=r,we.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=we.workingColorSpace){if(e=ly(e,1),i=Re(i,0,1),r=Re(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=Mh(h,u,e+1/3),this.g=Mh(h,u,e),this.b=Mh(h,u,e-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(e,i=pi){function r(u){u!==void 0&&parseFloat(u)<1&&pe("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:pe("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=pi){const r=Z_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return we.workingToColorSpace(Ln.copy(this),e),Math.round(Re(Ln.r*255,0,255))*65536+Math.round(Re(Ln.g*255,0,255))*256+Math.round(Re(Ln.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=we.workingColorSpace){we.workingToColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,u=Ln.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=we.workingColorSpace){return we.workingToColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=pi){we.workingToColorSpace(Ln.copy(this),e);const i=Ln.r,r=Ln.g,l=Ln.b;return e!==pi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Za),this.setHSL(Za.h+e,Za.s+i,Za.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Za),e.getHSL(pc);const r=ah(Za.h,pc.h,i),l=ah(Za.s,pc.s,i),u=ah(Za.l,pc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new De;De.NAMES=Z_;let My=0;class Yo extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=As,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=zh,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Og,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){pe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){pe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(r.blending=this.blending),this.side!==$a&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ph&&(r.blendSrc=this.blendSrc),this.blendDst!==zh&&(r.blendDst=this.blendDst),this.blendEquation!==Tr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Og&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class K_ extends Yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=w_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new nt,mc=new Be;let Ey=0;class Ri{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ey++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Pg,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)mc.fromBufferAttribute(this,i),mc.applyMatrix3(e),this.setXY(i,mc.x,mc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Do(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=kn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Do(i,this.array)),i}setX(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Do(i,this.array)),i}setY(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Do(i,this.array)),i}setZ(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Do(i,this.array)),i}setW(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array),u=kn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pg&&(e.usage=this.usage),e}}class Q_ extends Ri{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class J_ extends Ri{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ii extends Ri{constructor(e,i,r){super(new Float32Array(e),i,r)}}let by=0;const di=new $e,Eh=new Fn,Ms=new nt,ti=new qo,Oo=new qo,_n=new nt;class mi extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(W_(e)?J_:Q_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new xe().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,i,r){return di.makeTranslation(e,i,r),this.applyMatrix4(di),this}scale(e,i,r){return di.makeScale(e,i,r),this.applyMatrix4(di),this}lookAt(e){return Eh.lookAt(e),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ii(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(e){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Oo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(ti.min,Oo.min),ti.expandByPoint(_n),_n.addVectors(ti.max,Oo.max),ti.expandByPoint(_n)):(ti.expandByPoint(Oo.min),ti.expandByPoint(Oo.max))}ti.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)_n.fromBufferAttribute(d,p),m&&(Ms.fromBufferAttribute(e,p),_n.add(Ms)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let q=0;q<r.count;q++)d[q]=new nt,m[q]=new nt;const p=new nt,g=new nt,v=new nt,S=new Be,E=new Be,R=new Be,D=new nt,M=new nt;function x(q,b,C){p.fromBufferAttribute(r,q),g.fromBufferAttribute(r,b),v.fromBufferAttribute(r,C),S.fromBufferAttribute(u,q),E.fromBufferAttribute(u,b),R.fromBufferAttribute(u,C),g.sub(p),v.sub(p),E.sub(S),R.sub(S);const G=1/(E.x*R.y-R.x*E.y);isFinite(G)&&(D.copy(g).multiplyScalar(R.y).addScaledVector(v,-E.y).multiplyScalar(G),M.copy(v).multiplyScalar(E.x).addScaledVector(g,-R.x).multiplyScalar(G),d[q].add(D),d[b].add(D),d[C].add(D),m[q].add(M),m[b].add(M),m[C].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let q=0,b=B.length;q<b;++q){const C=B[q],G=C.start,K=C.count;for(let W=G,pt=G+K;W<pt;W+=3)x(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const F=new nt,z=new nt,H=new nt,L=new nt;function U(q){H.fromBufferAttribute(l,q),L.copy(H);const b=d[q];F.copy(b),F.sub(H.multiplyScalar(H.dot(b))).normalize(),z.crossVectors(L,b);const G=z.dot(m[q])<0?-1:1;h.setXYZW(q,F.x,F.y,F.z,G)}for(let q=0,b=B.length;q<b;++q){const C=B[q],G=C.start,K=C.count;for(let W=G,pt=G+K;W<pt;W+=3)U(e.getX(W+0)),U(e.getX(W+1)),U(e.getX(W+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,E=r.count;S<E;S++)r.setXYZ(S,0,0,0);const l=new nt,u=new nt,h=new nt,d=new nt,m=new nt,p=new nt,g=new nt,v=new nt;if(e)for(let S=0,E=e.count;S<E;S+=3){const R=e.getX(S+0),D=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,D),h.fromBufferAttribute(i,M),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(r,R),m.fromBufferAttribute(r,D),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(R,d.x,d.y,d.z),r.setXYZ(D,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,v=d.normalized,S=new p.constructor(m.length*g);let E=0,R=0;for(let D=0,M=m.length;D<M;D++){d.isInterleavedBufferAttribute?E=m[D]*d.data.stride+d.offset:E=m[D]*g;for(let x=0;x<g;x++)S[R++]=p[E++]}return new Ri(S,g,v)}if(this.index===null)return pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new mi,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,v=p.length;g<v;g++){const S=p[g],E=e(S,r);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,S=p.length;v<S;v++){const E=p[v];g.push(E.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],v=u[p];for(let S=0,E=v.length;S<E;S++)g.push(v[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kg=new $e,Sr=new Y_,gc=new Vc,Qg=new nt,_c=new nt,vc=new nt,xc=new nt,bh=new nt,Sc=new nt,Jg=new nt,yc=new nt;class va extends Fn{constructor(e=new mi,i=new K_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){Sc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],v=u[m];g!==0&&(bh.fromBufferAttribute(v,e),h?Sc.addScaledVector(bh,g):Sc.addScaledVector(bh.sub(i),g))}i.add(Sc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gc.copy(r.boundingSphere),gc.applyMatrix4(u),Sr.copy(e.ray).recast(e.near),!(gc.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(gc,Qg)===null||Sr.origin.distanceToSquared(Qg)>(e.far-e.near)**2))&&(Kg.copy(u).invert(),Sr.copy(e.ray).applyMatrix4(Kg),!(r.boundingBox!==null&&Sr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Sr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,S=u.groups,E=u.drawRange;if(d!==null)if(Array.isArray(h))for(let R=0,D=S.length;R<D;R++){const M=S[R],x=h[M.materialIndex],B=Math.max(M.start,E.start),F=Math.min(d.count,Math.min(M.start+M.count,E.start+E.count));for(let z=B,H=F;z<H;z+=3){const L=d.getX(z),U=d.getX(z+1),q=d.getX(z+2);l=Mc(this,x,e,r,p,g,v,L,U,q),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),D=Math.min(d.count,E.start+E.count);for(let M=R,x=D;M<x;M+=3){const B=d.getX(M),F=d.getX(M+1),z=d.getX(M+2);l=Mc(this,h,e,r,p,g,v,B,F,z),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let R=0,D=S.length;R<D;R++){const M=S[R],x=h[M.materialIndex],B=Math.max(M.start,E.start),F=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let z=B,H=F;z<H;z+=3){const L=z,U=z+1,q=z+2;l=Mc(this,x,e,r,p,g,v,L,U,q),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),D=Math.min(m.count,E.start+E.count);for(let M=R,x=D;M<x;M+=3){const B=M,F=M+1,z=M+2;l=Mc(this,h,e,r,p,g,v,B,F,z),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Ty(o,e,i,r,l,u,h,d){let m;if(e.side===Wn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===$a,d),m===null)return null;yc.copy(d),yc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(yc);return p<i.near||p>i.far?null:{distance:p,point:yc.clone(),object:o}}function Mc(o,e,i,r,l,u,h,d,m,p){o.getVertexPosition(d,_c),o.getVertexPosition(m,vc),o.getVertexPosition(p,xc);const g=Ty(o,e,i,r,_c,vc,xc,Jg);if(g){const v=new nt;Ti.getBarycoord(Jg,_c,vc,xc,v),l&&(g.uv=Ti.getInterpolatedAttribute(l,d,m,p,v,new Be)),u&&(g.uv1=Ti.getInterpolatedAttribute(u,d,m,p,v,new Be)),h&&(g.normal=Ti.getInterpolatedAttribute(h,d,m,p,v,new nt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new nt,materialIndex:0};Ti.getNormal(_c,vc,xc,S.normal),g.face=S,g.barycoord=v}return g}class jo extends mi{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],v=[];let S=0,E=0;R("z","y","x",-1,-1,r,i,e,h,u,0),R("z","y","x",1,-1,r,i,-e,h,u,1),R("x","z","y",1,1,e,r,i,l,h,2),R("x","z","y",1,-1,e,r,-i,l,h,3),R("x","y","z",1,-1,e,i,r,l,u,4),R("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Ii(p,3)),this.setAttribute("normal",new Ii(g,3)),this.setAttribute("uv",new Ii(v,2));function R(D,M,x,B,F,z,H,L,U,q,b){const C=z/U,G=H/q,K=z/2,W=H/2,pt=L/2,ct=U+1,O=q+1;let P=0,J=0;const bt=new nt;for(let yt=0;yt<O;yt++){const N=yt*G-W;for(let it=0;it<ct;it++){const _t=it*C-K;bt[D]=_t*B,bt[M]=N*F,bt[x]=pt,p.push(bt.x,bt.y,bt.z),bt[D]=0,bt[M]=0,bt[x]=L>0?1:-1,g.push(bt.x,bt.y,bt.z),v.push(it/U),v.push(1-yt/q),P+=1}}for(let yt=0;yt<q;yt++)for(let N=0;N<U;N++){const it=S+N+ct*yt,_t=S+N+ct*(yt+1),Rt=S+(N+1)+ct*(yt+1),zt=S+(N+1)+ct*yt;m.push(it,_t,zt),m.push(_t,Rt,zt),J+=6}d.addGroup(E,J,b),E+=J,S+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Pn(o){const e={};for(let i=0;i<o.length;i++){const r=Ls(o[i]);for(const l in r)e[l]=r[l]}return e}function Ay(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function $_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:we.workingColorSpace}const Ry={clone:Ls,merge:Pn};var Cy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends Yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cy,this.fragmentShader=wy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=Ay(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class tv extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ka=new nt,$g=new Be,t_=new Be;class ei extends tv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ad*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ih*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ad*2*Math.atan(Math.tan(ih*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z),Ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z)}getViewSize(e,i){return this.getViewBounds(e,$g,t_),i.subVectors(t_,$g)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ih*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Es=-90,bs=1;class Dy extends Fn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ei(Es,bs,e,i);l.layers=this.layers,this.add(l);const u=new ei(Es,bs,e,i);u.layers=this.layers,this.add(u);const h=new ei(Es,bs,e,i);h.layers=this.layers,this.add(h);const d=new ei(Es,bs,e,i);d.layers=this.layers,this.add(d);const m=new ei(Es,bs,e,i);m.layers=this.layers,this.add(m);const p=new ei(Es,bs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Fc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=D,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,S,E),e.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class ev extends zn{constructor(e=[],i=wr,r,l,u,h,d,m,p,g){super(e,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nv extends Bi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new ev(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new jo(5,5,5),u=new Gi({name:"CubemapFromEquirect",uniforms:Ls(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:da});u.uniforms.tEquirect.value=i;const h=new va(l,u),d=i.minFilter;return i.minFilter===Rr&&(i.minFilter=Nn),new Dy(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class Ec extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uy={type:"move"};class Th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ec,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ec,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ec,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const D of e.hand.values()){const M=i.getJointPose(D,r),x=this._getHandJoint(p,D);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=g.position.distanceTo(v.position),E=.02,R=.005;p.inputState.pinching&&S>E+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=E-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Uy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ec;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Ly extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _a,this.environmentIntensity=1,this.environmentRotation=new _a,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Ny extends zn{constructor(e=null,i=1,r=1,l,u,h,d,m,p=Cn,g=Cn,v,S){super(null,h,d,m,p,g,l,u,v,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ah=new nt,Oy=new nt,Py=new xe;class br{constructor(e=new nt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Ah.subVectors(r,i).cross(Oy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Ah),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Py.getNormalMatrix(e),l=this.coplanarPoint(Ah).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new Vc,zy=new Be(.5,.5),bc=new nt;class Gd{constructor(e=new br,i=new br,r=new br,l=new br,u=new br,h=new br){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=zi,r=!1){const l=this.planes,u=e.elements,h=u[0],d=u[1],m=u[2],p=u[3],g=u[4],v=u[5],S=u[6],E=u[7],R=u[8],D=u[9],M=u[10],x=u[11],B=u[12],F=u[13],z=u[14],H=u[15];if(l[0].setComponents(p-h,E-g,x-R,H-B).normalize(),l[1].setComponents(p+h,E+g,x+R,H+B).normalize(),l[2].setComponents(p+d,E+v,x+D,H+F).normalize(),l[3].setComponents(p-d,E-v,x-D,H-F).normalize(),r)l[4].setComponents(m,S,M,z).normalize(),l[5].setComponents(p-m,E-S,x-M,H-z).normalize();else if(l[4].setComponents(p-m,E-S,x-M,H-z).normalize(),i===zi)l[5].setComponents(p+m,E+S,x+M,H+z).normalize();else if(i===Fc)l[5].setComponents(m,S,M,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){yr.center.set(0,0,0);const i=zy.distanceTo(e.center);return yr.radius=.7071067811865476+i,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(bc.x=l.normal.x>0?e.max.x:e.min.x,bc.y=l.normal.y>0?e.max.y:e.min.y,bc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(bc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rd extends Yo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ic=new nt,Hc=new nt,e_=new $e,Po=new Y_,Tc=new Vc,Rh=new nt,n_=new nt;class iv extends Fn{constructor(e=new mi,i=new Rd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Ic.fromBufferAttribute(i,l-1),Hc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Ic.distanceTo(Hc);e.setAttribute("lineDistance",new Ii(r,1))}else pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Tc.copy(r.boundingSphere),Tc.applyMatrix4(l),Tc.radius+=u,e.ray.intersectsSphere(Tc)===!1)return;e_.copy(l).invert(),Po.copy(e.ray).applyMatrix4(e_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=r.index,S=r.attributes.position;if(g!==null){const E=Math.max(0,h.start),R=Math.min(g.count,h.start+h.count);for(let D=E,M=R-1;D<M;D+=p){const x=g.getX(D),B=g.getX(D+1),F=Ac(this,e,Po,m,x,B,D);F&&i.push(F)}if(this.isLineLoop){const D=g.getX(R-1),M=g.getX(E),x=Ac(this,e,Po,m,D,M,R-1);x&&i.push(x)}}else{const E=Math.max(0,h.start),R=Math.min(S.count,h.start+h.count);for(let D=E,M=R-1;D<M;D+=p){const x=Ac(this,e,Po,m,D,D+1,D);x&&i.push(x)}if(this.isLineLoop){const D=Ac(this,e,Po,m,R-1,E,R-1);D&&i.push(D)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Ac(o,e,i,r,l,u,h){const d=o.geometry.attributes.position;if(Ic.fromBufferAttribute(d,l),Hc.fromBufferAttribute(d,u),i.distanceSqToSegment(Ic,Hc,Rh,n_)>r)return;Rh.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Rh);if(!(p<e.near||p>e.far))return{distance:p,point:n_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}class Fy extends iv{constructor(e,i){super(e,i),this.isLineLoop=!0,this.type="LineLoop"}}class Xo extends zn{constructor(e,i,r=Hi,l,u,h,d=Cn,m=Cn,p,g=ga,v=1){if(g!==ga&&g!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:v};super(S,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class By extends Xo{constructor(e,i=Hi,r=wr,l,u,h=Cn,d=Cn,m,p=ga){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,i,r,l,u,h,d,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class av extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xc extends mi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=e/d,S=i/m,E=[],R=[],D=[],M=[];for(let x=0;x<g;x++){const B=x*S-h;for(let F=0;F<p;F++){const z=F*v-u;R.push(z,-B,0),D.push(0,0,1),M.push(F/d),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let B=0;B<d;B++){const F=B+p*x,z=B+p*(x+1),H=B+1+p*(x+1),L=B+1+p*x;E.push(F,z,L),E.push(z,H,L)}this.setIndex(E),this.setAttribute("position",new Ii(R,3)),this.setAttribute("normal",new Ii(D,3)),this.setAttribute("uv",new Ii(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Iy extends Gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hy extends Yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gy extends Yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class rv extends Fn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Ch=new $e,i_=new nt,a_=new nt;class Vy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gd,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;i_.setFromMatrixPosition(e.matrixWorld),i.position.copy(i_),a_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(a_),i.updateMatrixWorld(),Ch.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ch,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Xy extends Vy{constructor(){super(new ei(90,1,.5,500)),this.isPointLightShadow=!0}}class ky extends rv{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new Xy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class sv extends tv{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Wy extends rv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class qy extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function r_(o,e,i,r){const l=Yy(r);switch(i){case V_:return o*e;case k_:return o*e/l.components*l.byteLength;case Pd:return o*e/l.components*l.byteLength;case Ds:return o*e*2/l.components*l.byteLength;case zd:return o*e*2/l.components*l.byteLength;case X_:return o*e*3/l.components*l.byteLength;case Ai:return o*e*4/l.components*l.byteLength;case Fd:return o*e*4/l.components*l.byteLength;case Uc:case Lc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Nc:case Oc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Zh:case Qh:return Math.max(o,16)*Math.max(e,8)/4;case jh:case Kh:return Math.max(o,8)*Math.max(e,8)/2;case Jh:case $h:case ed:case nd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case td:case id:case ad:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case rd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case sd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case od:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case ld:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case cd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case ud:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case fd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case hd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case dd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case pd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case md:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case gd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case _d:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case vd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case xd:case Sd:case yd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Md:case Ed:return Math.ceil(o/4)*Math.ceil(e/4)*8;case bd:case Td:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Yy(o){switch(o){case ni:case B_:return{byteLength:1,components:1};case Ho:case I_:case ma:return{byteLength:2,components:1};case Nd:case Od:return{byteLength:2,components:4};case Hi:case Ld:case Pi:return{byteLength:4,components:1};case H_:case G_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ud}}));typeof window<"u"&&(window.__THREE__?pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ud);function ov(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function jy(o){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,g),d.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,g);else{v.sort((E,R)=>E.start-R.start);let S=0;for(let E=1;E<v.length;E++){const R=v[S],D=v[E];D.start<=R.start+R.count+1?R.count=Math.max(R.count,D.start+D.count-R.start):(++S,v[S]=D)}v.length=S+1;for(let E=0,R=v.length;E<R;E++){const D=v[E];o.bufferSubData(p,D.start*g.BYTES_PER_ELEMENT,g,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var Zy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ky=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,aM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,SM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TM="gl_FragColor = linearToOutputTexel( gl_FragColor );",AM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,DM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,GM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,VM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,YM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,KM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$M=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_E=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ME=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,LE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,NE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,OE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,VE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,YE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$E=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ib=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ob=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,db=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_b=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Eb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ab=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Se={alphahash_fragment:Zy,alphahash_pars_fragment:Ky,alphamap_fragment:Qy,alphamap_pars_fragment:Jy,alphatest_fragment:$y,alphatest_pars_fragment:tM,aomap_fragment:eM,aomap_pars_fragment:nM,batching_pars_vertex:iM,batching_vertex:aM,begin_vertex:rM,beginnormal_vertex:sM,bsdfs:oM,iridescence_fragment:lM,bumpmap_pars_fragment:cM,clipping_planes_fragment:uM,clipping_planes_pars_fragment:fM,clipping_planes_pars_vertex:hM,clipping_planes_vertex:dM,color_fragment:pM,color_pars_fragment:mM,color_pars_vertex:gM,color_vertex:_M,common:vM,cube_uv_reflection_fragment:xM,defaultnormal_vertex:SM,displacementmap_pars_vertex:yM,displacementmap_vertex:MM,emissivemap_fragment:EM,emissivemap_pars_fragment:bM,colorspace_fragment:TM,colorspace_pars_fragment:AM,envmap_fragment:RM,envmap_common_pars_fragment:CM,envmap_pars_fragment:wM,envmap_pars_vertex:DM,envmap_physical_pars_fragment:GM,envmap_vertex:UM,fog_vertex:LM,fog_pars_vertex:NM,fog_fragment:OM,fog_pars_fragment:PM,gradientmap_pars_fragment:zM,lightmap_pars_fragment:FM,lights_lambert_fragment:BM,lights_lambert_pars_fragment:IM,lights_pars_begin:HM,lights_toon_fragment:VM,lights_toon_pars_fragment:XM,lights_phong_fragment:kM,lights_phong_pars_fragment:WM,lights_physical_fragment:qM,lights_physical_pars_fragment:YM,lights_fragment_begin:jM,lights_fragment_maps:ZM,lights_fragment_end:KM,logdepthbuf_fragment:QM,logdepthbuf_pars_fragment:JM,logdepthbuf_pars_vertex:$M,logdepthbuf_vertex:tE,map_fragment:eE,map_pars_fragment:nE,map_particle_fragment:iE,map_particle_pars_fragment:aE,metalnessmap_fragment:rE,metalnessmap_pars_fragment:sE,morphinstance_vertex:oE,morphcolor_vertex:lE,morphnormal_vertex:cE,morphtarget_pars_vertex:uE,morphtarget_vertex:fE,normal_fragment_begin:hE,normal_fragment_maps:dE,normal_pars_fragment:pE,normal_pars_vertex:mE,normal_vertex:gE,normalmap_pars_fragment:_E,clearcoat_normal_fragment_begin:vE,clearcoat_normal_fragment_maps:xE,clearcoat_pars_fragment:SE,iridescence_pars_fragment:yE,opaque_fragment:ME,packing:EE,premultiplied_alpha_fragment:bE,project_vertex:TE,dithering_fragment:AE,dithering_pars_fragment:RE,roughnessmap_fragment:CE,roughnessmap_pars_fragment:wE,shadowmap_pars_fragment:DE,shadowmap_pars_vertex:UE,shadowmap_vertex:LE,shadowmask_pars_fragment:NE,skinbase_vertex:OE,skinning_pars_vertex:PE,skinning_vertex:zE,skinnormal_vertex:FE,specularmap_fragment:BE,specularmap_pars_fragment:IE,tonemapping_fragment:HE,tonemapping_pars_fragment:GE,transmission_fragment:VE,transmission_pars_fragment:XE,uv_pars_fragment:kE,uv_pars_vertex:WE,uv_vertex:qE,worldpos_vertex:YE,background_vert:jE,background_frag:ZE,backgroundCube_vert:KE,backgroundCube_frag:QE,cube_vert:JE,cube_frag:$E,depth_vert:tb,depth_frag:eb,distance_vert:nb,distance_frag:ib,equirect_vert:ab,equirect_frag:rb,linedashed_vert:sb,linedashed_frag:ob,meshbasic_vert:lb,meshbasic_frag:cb,meshlambert_vert:ub,meshlambert_frag:fb,meshmatcap_vert:hb,meshmatcap_frag:db,meshnormal_vert:pb,meshnormal_frag:mb,meshphong_vert:gb,meshphong_frag:_b,meshphysical_vert:vb,meshphysical_frag:xb,meshtoon_vert:Sb,meshtoon_frag:yb,points_vert:Mb,points_frag:Eb,shadow_vert:bb,shadow_frag:Tb,sprite_vert:Ab,sprite_frag:Rb},Vt={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},Oi={basic:{uniforms:Pn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Pn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new De(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Pn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Pn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Pn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new De(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Pn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Pn([Vt.points,Vt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Pn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Pn([Vt.common,Vt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Pn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Pn([Vt.sprite,Vt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:Pn([Vt.common,Vt.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:Pn([Vt.lights,Vt.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Oi.physical={uniforms:Pn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const Rc={r:0,b:0,g:0},Mr=new _a,Cb=new $e;function wb(o,e,i,r,l,u,h){const d=new De(0);let m=u===!0?0:1,p,g,v=null,S=0,E=null;function R(F){let z=F.isScene===!0?F.background:null;return z&&z.isTexture&&(z=(F.backgroundBlurriness>0?i:e).get(z)),z}function D(F){let z=!1;const H=R(F);H===null?x(d,m):H&&H.isColor&&(x(H,1),z=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?r.buffers.color.setClear(0,0,0,1,h):L==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||z)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(F,z){const H=R(z);H&&(H.isCubeTexture||H.mapping===Gc)?(g===void 0&&(g=new va(new jo(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:Ls(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(L,U,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Mr.copy(z.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Cb.makeRotationFromEuler(Mr)),g.material.toneMapped=we.getTransfer(H.colorSpace)!==Xe,(v!==H||S!==H.version||E!==o.toneMapping)&&(g.material.needsUpdate=!0,v=H,S=H.version,E=o.toneMapping),g.layers.enableAll(),F.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new va(new Xc(2,2),new Gi({name:"BackgroundMaterial",uniforms:Ls(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.toneMapped=we.getTransfer(H.colorSpace)!==Xe,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||S!==H.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,v=H,S=H.version,E=o.toneMapping),p.layers.enableAll(),F.unshift(p,p.geometry,p.material,0,0,null))}function x(F,z){F.getRGB(Rc,$_(o)),r.buffers.color.setClear(Rc.r,Rc.g,Rc.b,z,h)}function B(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(F,z=1){d.set(F),m=z,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(F){m=F,x(d,m)},render:D,addToRenderList:M,dispose:B}}function Db(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,h=!1;function d(C,G,K,W,pt){let ct=!1;const O=v(W,K,G);u!==O&&(u=O,p(u.object)),ct=E(C,W,K,pt),ct&&R(C,W,K,pt),pt!==null&&e.update(pt,o.ELEMENT_ARRAY_BUFFER),(ct||h)&&(h=!1,z(C,G,K,W),pt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(pt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function g(C){return o.deleteVertexArray(C)}function v(C,G,K){const W=K.wireframe===!0;let pt=r[C.id];pt===void 0&&(pt={},r[C.id]=pt);let ct=pt[G.id];ct===void 0&&(ct={},pt[G.id]=ct);let O=ct[W];return O===void 0&&(O=S(m()),ct[W]=O),O}function S(C){const G=[],K=[],W=[];for(let pt=0;pt<i;pt++)G[pt]=0,K[pt]=0,W[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:K,attributeDivisors:W,object:C,attributes:{},index:null}}function E(C,G,K,W){const pt=u.attributes,ct=G.attributes;let O=0;const P=K.getAttributes();for(const J in P)if(P[J].location>=0){const yt=pt[J];let N=ct[J];if(N===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),yt===void 0||yt.attribute!==N||N&&yt.data!==N.data)return!0;O++}return u.attributesNum!==O||u.index!==W}function R(C,G,K,W){const pt={},ct=G.attributes;let O=0;const P=K.getAttributes();for(const J in P)if(P[J].location>=0){let yt=ct[J];yt===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor));const N={};N.attribute=yt,yt&&yt.data&&(N.data=yt.data),pt[J]=N,O++}u.attributes=pt,u.attributesNum=O,u.index=W}function D(){const C=u.newAttributes;for(let G=0,K=C.length;G<K;G++)C[G]=0}function M(C){x(C,0)}function x(C,G){const K=u.newAttributes,W=u.enabledAttributes,pt=u.attributeDivisors;K[C]=1,W[C]===0&&(o.enableVertexAttribArray(C),W[C]=1),pt[C]!==G&&(o.vertexAttribDivisor(C,G),pt[C]=G)}function B(){const C=u.newAttributes,G=u.enabledAttributes;for(let K=0,W=G.length;K<W;K++)G[K]!==C[K]&&(o.disableVertexAttribArray(K),G[K]=0)}function F(C,G,K,W,pt,ct,O){O===!0?o.vertexAttribIPointer(C,G,K,pt,ct):o.vertexAttribPointer(C,G,K,W,pt,ct)}function z(C,G,K,W){D();const pt=W.attributes,ct=K.getAttributes(),O=G.defaultAttributeValues;for(const P in ct){const J=ct[P];if(J.location>=0){let bt=pt[P];if(bt===void 0&&(P==="instanceMatrix"&&C.instanceMatrix&&(bt=C.instanceMatrix),P==="instanceColor"&&C.instanceColor&&(bt=C.instanceColor)),bt!==void 0){const yt=bt.normalized,N=bt.itemSize,it=e.get(bt);if(it===void 0)continue;const _t=it.buffer,Rt=it.type,zt=it.bytesPerElement,$=Rt===o.INT||Rt===o.UNSIGNED_INT||bt.gpuType===Ld;if(bt.isInterleavedBufferAttribute){const dt=bt.data,Ct=dt.stride,Ft=bt.offset;if(dt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<J.locationSize;Ot++)x(J.location+Ot,dt.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Ot=0;Ot<J.locationSize;Ot++)M(J.location+Ot);o.bindBuffer(o.ARRAY_BUFFER,_t);for(let Ot=0;Ot<J.locationSize;Ot++)F(J.location+Ot,N/J.locationSize,Rt,yt,Ct*zt,(Ft+N/J.locationSize*Ot)*zt,$)}else{if(bt.isInstancedBufferAttribute){for(let dt=0;dt<J.locationSize;dt++)x(J.location+dt,bt.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let dt=0;dt<J.locationSize;dt++)M(J.location+dt);o.bindBuffer(o.ARRAY_BUFFER,_t);for(let dt=0;dt<J.locationSize;dt++)F(J.location+dt,N/J.locationSize,Rt,yt,N*zt,N/J.locationSize*dt*zt,$)}}else if(O!==void 0){const yt=O[P];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(J.location,yt);break;case 3:o.vertexAttrib3fv(J.location,yt);break;case 4:o.vertexAttrib4fv(J.location,yt);break;default:o.vertexAttrib1fv(J.location,yt)}}}}B()}function H(){q();for(const C in r){const G=r[C];for(const K in G){const W=G[K];for(const pt in W)g(W[pt].object),delete W[pt];delete G[K]}delete r[C]}}function L(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const K in G){const W=G[K];for(const pt in W)g(W[pt].object),delete W[pt];delete G[K]}delete r[C.id]}function U(C){for(const G in r){const K=r[G];if(K[C.id]===void 0)continue;const W=K[C.id];for(const pt in W)g(W[pt].object),delete W[pt];delete K[C.id]}}function q(){b(),h=!0,u!==l&&(u=l,p(u.object))}function b(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:b,dispose:H,releaseStatesOfGeometry:L,releaseStatesOfProgram:U,initAttributes:D,enableAttribute:M,disableUnusedAttributes:B}}function Ub(o,e,i){let r;function l(p){r=p}function u(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,v){v!==0&&(o.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let E=0;for(let R=0;R<v;R++)E+=g[R];i.update(E,r,1)}function m(p,g,v,S){if(v===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let R=0;R<p.length;R++)h(p[R],g[R],S[R]);else{E.multiDrawArraysInstancedWEBGL(r,p,0,g,0,S,0,v);let R=0;for(let D=0;D<v;D++)R+=g[D]*S[D];i.update(R,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Lb(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(U){return!(U!==Ai&&r.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const q=U===ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==ni&&r.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Pi&&!q)}function m(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(pe("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),F=o.getParameter(o.MAX_VARYING_VECTORS),z=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=o.getParameter(o.MAX_SAMPLES),L=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:R,maxTextureSize:D,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:B,maxVaryings:F,maxFragmentUniforms:z,maxSamples:H,samples:L}}function Nb(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new br,d=new xe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const E=v.length!==0||S||r!==0||l;return l=S,r=v.length,E},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,S){i=g(v,S,0)},this.setState=function(v,S,E){const R=v.clippingPlanes,D=v.clipIntersection,M=v.clipShadows,x=o.get(v);if(!l||R===null||R.length===0||u&&!M)u?g(null):p();else{const B=u?0:r,F=B*4;let z=x.clippingState||null;m.value=z,z=g(R,S,F,E);for(let H=0;H!==F;++H)z[H]=i[H];x.clippingState=z,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,S,E,R){const D=v!==null?v.length:0;let M=null;if(D!==0){if(M=m.value,R!==!0||M===null){const x=E+D*4,B=S.matrixWorldInverse;d.getNormalMatrix(B),(M===null||M.length<x)&&(M=new Float32Array(x));for(let F=0,z=E;F!==D;++F,z+=4)h.copy(v[F]).applyMatrix4(B,d),h.normal.toArray(M,z),M[z+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,M}}function Ob(o){let e=new WeakMap;function i(h,d){return d===kh?h.mapping=wr:d===Wh&&(h.mapping=ws),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===kh||d===Wh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new nv(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Ja=4,s_=[.125,.215,.35,.446,.526,.582],Ar=20,Pb=256,zo=new sv,o_=new De;let wh=null,Dh=0,Uh=0,Lh=!1;const zb=new nt;class l_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=zb}=u;wh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=f_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=u_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wh,Dh,Uh),this._renderer.xr.enabled=Lh,e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===wr||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:ma,format:Ai,colorSpace:Us,depthBuffer:!1},l=c_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=c_(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Fb(u)),this._blurMaterial=Ib(u,e,i),this._ggxMaterial=Bb(u,e,i)}return l}_compileMaterial(e){const i=new va(new mi,e);this._renderer.compile(i,zo)}_sceneToCubeUV(e,i,r,l,u){const m=new ei(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,E=v.toneMapping;v.getClearColor(o_),v.toneMapping=Fi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new va(new jo,new K_({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,M=D.material;let x=!1;const B=e.background;B?B.isColor&&(M.color.copy(B),e.background=null,x=!0):(M.color.copy(o_),x=!0);for(let F=0;F<6;F++){const z=F%3;z===0?(m.up.set(0,p[F],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[F],u.y,u.z)):z===1?(m.up.set(0,0,p[F]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[F],u.z)):(m.up.set(0,p[F],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[F]));const H=this._cubeSize;Ts(l,z*H,F>2?H:0,H,H),v.setRenderTarget(l),x&&v.render(D,m),v.render(e,m)}v.toneMapping=E,v.autoClear=S,e.background=B}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===wr||e.mapping===ws;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=f_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=u_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Ts(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,zo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const m=h.uniforms,p=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-g*g),S=0+p*1.25,E=v*S,{_lodMax:R}=this,D=this._sizeLods[r],M=3*D*(r>R-Ja?r-R+Ja:0),x=4*(this._cubeSize-D);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=R-i,Ts(u,M,x,3*D,2*D),l.setRenderTarget(u),l.render(d,zo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=R-r,Ts(e,M,x,3*D,2*D),l.setRenderTarget(e),l.render(d,zo)}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ne("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[l];v.material=p;const S=p.uniforms,E=this._sizeLods[r]-1,R=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*Ar-1),D=u/R,M=isFinite(u)?1+Math.floor(g*D):Ar;M>Ar&&pe(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ar}`);const x=[];let B=0;for(let U=0;U<Ar;++U){const q=U/D,b=Math.exp(-q*q/2);x.push(b),U===0?B+=b:U<M&&(B+=2*b)}for(let U=0;U<x.length;U++)x[U]=x[U]/B;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=x,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:F}=this;S.dTheta.value=R,S.mipInt.value=F-r;const z=this._sizeLods[l],H=3*z*(l>F-Ja?l-F+Ja:0),L=4*(this._cubeSize-z);Ts(i,H,L,3*z,2*z),m.setRenderTarget(i),m.render(v,zo)}}function Fb(o){const e=[],i=[],r=[];let l=o;const u=o-Ja+1+s_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>o-Ja?m=s_[h-o+Ja-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,v=1+p,S=[g,g,v,g,v,v,g,g,v,v,g,v],E=6,R=6,D=3,M=2,x=1,B=new Float32Array(D*R*E),F=new Float32Array(M*R*E),z=new Float32Array(x*R*E);for(let L=0;L<E;L++){const U=L%3*2/3-1,q=L>2?0:-1,b=[U,q,0,U+2/3,q,0,U+2/3,q+1,0,U,q,0,U+2/3,q+1,0,U,q+1,0];B.set(b,D*R*L),F.set(S,M*R*L);const C=[L,L,L,L,L,L];z.set(C,x*R*L)}const H=new mi;H.setAttribute("position",new Ri(B,D)),H.setAttribute("uv",new Ri(F,M)),H.setAttribute("faceIndex",new Ri(z,x)),r.push(new va(H,null)),l>Ja&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function c_(o,e,i){const r=new Bi(o,e,i);return r.texture.mapping=Gc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ts(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function Bb(o,e,i){return new Gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Pb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function Ib(o,e,i){const r=new Float32Array(Ar),l=new nt(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function u_(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function f_(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hb(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===kh||m===Wh,g=m===wr||m===ws;if(p||g){let v=e.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new l_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const E=d.image;return p&&E&&E.height>0||g&&E&&l(E)?(i===null&&(i=new l_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Gb(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Vo("WebGLRenderer: "+r+" extension not supported."),l}}}function Vb(o,e,i,r){const l={},u=new WeakMap;function h(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const R in S.attributes)e.remove(S.attributes[R]);S.removeEventListener("dispose",h),delete l[S.id];const E=u.get(S);E&&(e.remove(E),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(v){const S=v.attributes;for(const E in S)e.update(S[E],o.ARRAY_BUFFER)}function p(v){const S=[],E=v.index,R=v.attributes.position;let D=0;if(E!==null){const B=E.array;D=E.version;for(let F=0,z=B.length;F<z;F+=3){const H=B[F+0],L=B[F+1],U=B[F+2];S.push(H,L,L,U,U,H)}}else if(R!==void 0){const B=R.array;D=R.version;for(let F=0,z=B.length/3-1;F<z;F+=3){const H=F+0,L=F+1,U=F+2;S.push(H,L,L,U,U,H)}}else return;const M=new(W_(S)?J_:Q_)(S,1);M.version=D;const x=u.get(v);x&&e.remove(x),u.set(v,M)}function g(v){const S=u.get(v);if(S){const E=v.index;E!==null&&S.version<E.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function Xb(o,e,i){let r;function l(S){r=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,E){o.drawElements(r,E,u,S*h),i.update(E,r,1)}function p(S,E,R){R!==0&&(o.drawElementsInstanced(r,E,u,S*h,R),i.update(E,r,R))}function g(S,E,R){if(R===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,u,S,0,R);let M=0;for(let x=0;x<R;x++)M+=E[x];i.update(M,r,1)}function v(S,E,R,D){if(R===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<S.length;x++)p(S[x]/h,E[x],D[x]);else{M.multiDrawElementsInstancedWEBGL(r,E,0,u,S,0,D,0,R);let x=0;for(let B=0;B<R;B++)x+=E[B]*D[B];i.update(x,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function kb(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:Ne("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function Wb(o,e,i){const r=new WeakMap,l=new nn;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let S=r.get(d);if(S===void 0||S.count!==v){let C=function(){q.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var E=C;S!==void 0&&S.texture.dispose();const R=d.morphAttributes.position!==void 0,D=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let z=0;R===!0&&(z=1),D===!0&&(z=2),M===!0&&(z=3);let H=d.attributes.position.count*z,L=1;H>e.maxTextureSize&&(L=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const U=new Float32Array(H*L*4*v),q=new q_(U,H,L,v);q.type=Pi,q.needsUpdate=!0;const b=z*4;for(let G=0;G<v;G++){const K=x[G],W=B[G],pt=F[G],ct=H*L*4*G;for(let O=0;O<K.count;O++){const P=O*b;R===!0&&(l.fromBufferAttribute(K,O),U[ct+P+0]=l.x,U[ct+P+1]=l.y,U[ct+P+2]=l.z,U[ct+P+3]=0),D===!0&&(l.fromBufferAttribute(W,O),U[ct+P+4]=l.x,U[ct+P+5]=l.y,U[ct+P+6]=l.z,U[ct+P+7]=0),M===!0&&(l.fromBufferAttribute(pt,O),U[ct+P+8]=l.x,U[ct+P+9]=l.y,U[ct+P+10]=l.z,U[ct+P+11]=pt.itemSize===4?l.w:1)}}S={count:v,texture:q,size:new Be(H,L)},r.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let R=0;for(let M=0;M<p.length;M++)R+=p[M];const D=d.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",D),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function qb(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const Yb={[D_]:"LINEAR_TONE_MAPPING",[U_]:"REINHARD_TONE_MAPPING",[L_]:"CINEON_TONE_MAPPING",[N_]:"ACES_FILMIC_TONE_MAPPING",[P_]:"AGX_TONE_MAPPING",[z_]:"NEUTRAL_TONE_MAPPING",[O_]:"CUSTOM_TONE_MAPPING"};function jb(o,e,i,r,l){const u=new Bi(e,i,{type:o,depthBuffer:r,stencilBuffer:l}),h=new Bi(e,i,{type:ma,depthBuffer:!1,stencilBuffer:!1}),d=new mi;d.setAttribute("position",new Ii([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ii([0,2,0,0,2,0],2));const m=new Iy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new va(d,m),g=new sv(-1,1,1,-1,0,1);let v=null,S=null,E=!1,R,D=null,M=[],x=!1;this.setSize=function(B,F){u.setSize(B,F),h.setSize(B,F);for(let z=0;z<M.length;z++){const H=M[z];H.setSize&&H.setSize(B,F)}},this.setEffects=function(B){M=B,x=M.length>0&&M[0].isRenderPass===!0;const F=u.width,z=u.height;for(let H=0;H<M.length;H++){const L=M[H];L.setSize&&L.setSize(F,z)}},this.begin=function(B,F){if(E||B.toneMapping===Fi&&M.length===0)return!1;if(D=F,F!==null){const z=F.width,H=F.height;(u.width!==z||u.height!==H)&&this.setSize(z,H)}return x===!1&&B.setRenderTarget(u),R=B.toneMapping,B.toneMapping=Fi,!0},this.hasRenderPass=function(){return x},this.end=function(B,F){B.toneMapping=R,E=!0;let z=u,H=h;for(let L=0;L<M.length;L++){const U=M[L];if(U.enabled!==!1&&(U.render(B,H,z,F),U.needsSwap!==!1)){const q=z;z=H,H=q}}if(v!==B.outputColorSpace||S!==B.toneMapping){v=B.outputColorSpace,S=B.toneMapping,m.defines={},we.getTransfer(v)===Xe&&(m.defines.SRGB_TRANSFER="");const L=Yb[S];L&&(m.defines[L]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=z.texture,B.setRenderTarget(D),B.render(p,g),D=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.dispose(),h.dispose(),d.dispose(),m.dispose()}}const lv=new zn,Cd=new Xo(1,1),cv=new q_,uv=new py,fv=new ev,h_=[],d_=[],p_=new Float32Array(16),m_=new Float32Array(9),g_=new Float32Array(4);function Os(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=h_[l];if(u===void 0&&(u=new Float32Array(l),h_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function pn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function mn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Wc(o,e){let i=d_[e];i===void 0&&(i=new Int32Array(e),d_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function Zb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function Kb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2fv(this.addr,e),mn(i,e)}}function Qb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(pn(i,e))return;o.uniform3fv(this.addr,e),mn(i,e)}}function Jb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4fv(this.addr,e),mn(i,e)}}function $b(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;g_.set(r),o.uniformMatrix2fv(this.addr,!1,g_),mn(i,r)}}function tT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;m_.set(r),o.uniformMatrix3fv(this.addr,!1,m_),mn(i,r)}}function eT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;p_.set(r),o.uniformMatrix4fv(this.addr,!1,p_),mn(i,r)}}function nT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function iT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2iv(this.addr,e),mn(i,e)}}function aT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3iv(this.addr,e),mn(i,e)}}function rT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4iv(this.addr,e),mn(i,e)}}function sT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function oT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2uiv(this.addr,e),mn(i,e)}}function lT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3uiv(this.addr,e),mn(i,e)}}function cT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4uiv(this.addr,e),mn(i,e)}}function uT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Cd.compareFunction=i.isReversedDepthBuffer()?Id:Bd,u=Cd):u=lv,i.setTexture2D(e||u,l)}function fT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||uv,l)}function hT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||fv,l)}function dT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||cv,l)}function pT(o){switch(o){case 5126:return Zb;case 35664:return Kb;case 35665:return Qb;case 35666:return Jb;case 35674:return $b;case 35675:return tT;case 35676:return eT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return aT;case 35669:case 35673:return rT;case 5125:return sT;case 36294:return oT;case 36295:return lT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return uT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return hT;case 36289:case 36303:case 36311:case 36292:return dT}}function mT(o,e){o.uniform1fv(this.addr,e)}function gT(o,e){const i=Os(e,this.size,2);o.uniform2fv(this.addr,i)}function _T(o,e){const i=Os(e,this.size,3);o.uniform3fv(this.addr,i)}function vT(o,e){const i=Os(e,this.size,4);o.uniform4fv(this.addr,i)}function xT(o,e){const i=Os(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function ST(o,e){const i=Os(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function yT(o,e){const i=Os(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function MT(o,e){o.uniform1iv(this.addr,e)}function ET(o,e){o.uniform2iv(this.addr,e)}function bT(o,e){o.uniform3iv(this.addr,e)}function TT(o,e){o.uniform4iv(this.addr,e)}function AT(o,e){o.uniform1uiv(this.addr,e)}function RT(o,e){o.uniform2uiv(this.addr,e)}function CT(o,e){o.uniform3uiv(this.addr,e)}function wT(o,e){o.uniform4uiv(this.addr,e)}function DT(o,e,i){const r=this.cache,l=e.length,u=Wc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));let h;this.type===o.SAMPLER_2D_SHADOW?h=Cd:h=lv;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,u[d])}function UT(o,e,i){const r=this.cache,l=e.length,u=Wc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||uv,u[h])}function LT(o,e,i){const r=this.cache,l=e.length,u=Wc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||fv,u[h])}function NT(o,e,i){const r=this.cache,l=e.length,u=Wc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||cv,u[h])}function OT(o){switch(o){case 5126:return mT;case 35664:return gT;case 35665:return _T;case 35666:return vT;case 35674:return xT;case 35675:return ST;case 35676:return yT;case 5124:case 35670:return MT;case 35667:case 35671:return ET;case 35668:case 35672:return bT;case 35669:case 35673:return TT;case 5125:return AT;case 36294:return RT;case 36295:return CT;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return UT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return NT}}class PT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=pT(i.type)}}class zT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=OT(i.type)}}class FT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const Nh=/(\w+)(\])?(\[|\.)?/g;function __(o,e){o.seq.push(e),o.map[e.id]=e}function BT(o,e,i){const r=o.name,l=r.length;for(Nh.lastIndex=0;;){const u=Nh.exec(r),h=Nh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){__(i,p===void 0?new PT(d,o,e):new zT(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new FT(d),__(i,v)),i=v}}}class Pc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const d=e.getActiveUniform(i,h),m=e.getUniformLocation(i,d.name);BT(d,m,this)}const l=[],u=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function v_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const IT=37297;let HT=0;function GT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const x_=new xe;function VT(o){we._getMatrix(x_,we.workingColorSpace,o);const e=`mat3( ${x_.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(o)){case zc:return[e,"LinearTransferOETF"];case Xe:return[e,"sRGBTransferOETF"];default:return pe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function S_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+GT(o.getShaderSource(e),d)}else return u}function XT(o,e){const i=VT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const kT={[D_]:"Linear",[U_]:"Reinhard",[L_]:"Cineon",[N_]:"ACESFilmic",[P_]:"AgX",[z_]:"Neutral",[O_]:"Custom"};function WT(o,e){const i=kT[e];return i===void 0?(pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Cc=new nt;function qT(){we.getLuminanceCoefficients(Cc);const o=Cc.x.toFixed(4),e=Cc.y.toFixed(4),i=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function jT(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function ZT(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Io(o){return o!==""}function y_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function M_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KT=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(o){return o.replace(KT,JT)}const QT=new Map;function JT(o,e){let i=Se[e];if(i===void 0){const r=QT.get(e);if(r!==void 0)i=Se[r],pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return wd(i)}const $T=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function E_(o){return o.replace($T,t1)}function t1(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function b_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const e1={[Dc]:"SHADOWMAP_TYPE_PCF",[Bo]:"SHADOWMAP_TYPE_VSM"};function n1(o){return e1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const i1={[wr]:"ENVMAP_TYPE_CUBE",[ws]:"ENVMAP_TYPE_CUBE",[Gc]:"ENVMAP_TYPE_CUBE_UV"};function a1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":i1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const r1={[ws]:"ENVMAP_MODE_REFRACTION"};function s1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":r1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const o1={[w_]:"ENVMAP_BLENDING_MULTIPLY",[jS]:"ENVMAP_BLENDING_MIX",[ZS]:"ENVMAP_BLENDING_ADD"};function l1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":o1[o.combine]||"ENVMAP_BLENDING_NONE"}function c1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function u1(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=n1(i),p=a1(i),g=s1(i),v=l1(i),S=c1(i),E=YT(i),R=jT(u),D=l.createProgram();let M,x,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Io).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Io).join(`
`),x.length>0&&(x+=`
`)):(M=[b_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),x=[b_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fi?"#define TONE_MAPPING":"",i.toneMapping!==Fi?Se.tonemapping_pars_fragment:"",i.toneMapping!==Fi?WT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,XT("linearToOutputTexel",i.outputColorSpace),qT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Io).join(`
`)),h=wd(h),h=y_(h,i),h=M_(h,i),d=wd(d),d=y_(d,i),d=M_(d,i),h=E_(h),d=E_(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===zg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===zg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const F=B+M+h,z=B+x+d,H=v_(l,l.VERTEX_SHADER,F),L=v_(l,l.FRAGMENT_SHADER,z);l.attachShader(D,H),l.attachShader(D,L),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function U(G){if(o.debug.checkShaderErrors){const K=l.getProgramInfoLog(D)||"",W=l.getShaderInfoLog(H)||"",pt=l.getShaderInfoLog(L)||"",ct=K.trim(),O=W.trim(),P=pt.trim();let J=!0,bt=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(J=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,D,H,L);else{const yt=S_(l,H,"vertex"),N=S_(l,L,"fragment");Ne("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ct+`
`+yt+`
`+N)}else ct!==""?pe("WebGLProgram: Program Info Log:",ct):(O===""||P==="")&&(bt=!1);bt&&(G.diagnostics={runnable:J,programLog:ct,vertexShader:{log:O,prefix:M},fragmentShader:{log:P,prefix:x}})}l.deleteShader(H),l.deleteShader(L),q=new Pc(l,D),b=ZT(l,D)}let q;this.getUniforms=function(){return q===void 0&&U(this),q};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(D,IT)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=HT++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=H,this.fragmentShader=L,this}let f1=0;class h1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new d1(e),i.set(e,r)),r}}class d1{constructor(e){this.id=f1++,this.code=e,this.usedTimes=0}}function p1(o,e,i,r,l,u,h){const d=new j_,m=new h1,p=new Set,g=[],v=new Map,S=l.logarithmicDepthBuffer;let E=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(b){return p.add(b),b===0?"uv":`uv${b}`}function M(b,C,G,K,W){const pt=K.fog,ct=W.geometry,O=b.isMeshStandardMaterial?K.environment:null,P=(b.isMeshStandardMaterial?i:e).get(b.envMap||O),J=P&&P.mapping===Gc?P.image.height:null,bt=R[b.type];b.precision!==null&&(E=l.getMaxPrecision(b.precision),E!==b.precision&&pe("WebGLProgram.getParameters:",b.precision,"not supported, using",E,"instead."));const yt=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,N=yt!==void 0?yt.length:0;let it=0;ct.morphAttributes.position!==void 0&&(it=1),ct.morphAttributes.normal!==void 0&&(it=2),ct.morphAttributes.color!==void 0&&(it=3);let _t,Rt,zt,$;if(bt){const Ce=Oi[bt];_t=Ce.vertexShader,Rt=Ce.fragmentShader}else _t=b.vertexShader,Rt=b.fragmentShader,m.update(b),zt=m.getVertexShaderID(b),$=m.getFragmentShaderID(b);const dt=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),Ft=W.isInstancedMesh===!0,Ot=W.isBatchedMesh===!0,fe=!!b.map,at=!!b.matcap,Mt=!!P,Pt=!!b.aoMap,Jt=!!b.lightMap,Lt=!!b.bumpMap,re=!!b.normalMap,I=!!b.displacementMap,ye=!!b.emissiveMap,le=!!b.metalnessMap,Yt=!!b.roughnessMap,Et=b.anisotropy>0,w=b.clearcoat>0,y=b.dispersion>0,X=b.iridescence>0,rt=b.sheen>0,gt=b.transmission>0,ht=Et&&!!b.anisotropyMap,jt=w&&!!b.clearcoatMap,wt=w&&!!b.clearcoatNormalMap,Qt=w&&!!b.clearcoatRoughnessMap,ce=X&&!!b.iridescenceMap,At=X&&!!b.iridescenceThicknessMap,Dt=rt&&!!b.sheenColorMap,Wt=rt&&!!b.sheenRoughnessMap,Xt=!!b.specularMap,Bt=!!b.specularColorMap,_e=!!b.specularIntensityMap,Y=gt&&!!b.transmissionMap,Ht=gt&&!!b.thicknessMap,Ut=!!b.gradientMap,kt=!!b.alphaMap,Tt=b.alphaTest>0,St=!!b.alphaHash,Nt=!!b.extensions;let ue=Fi;b.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(ue=o.toneMapping);const Ie={shaderID:bt,shaderType:b.type,shaderName:b.name,vertexShader:_t,fragmentShader:Rt,defines:b.defines,customVertexShaderID:zt,customFragmentShaderID:$,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:E,batching:Ot,batchingColor:Ot&&W._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&W.instanceColor!==null,instancingMorph:Ft&&W.morphTexture!==null,outputColorSpace:dt===null?o.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Us,alphaToCoverage:!!b.alphaToCoverage,map:fe,matcap:at,envMap:Mt,envMapMode:Mt&&P.mapping,envMapCubeUVHeight:J,aoMap:Pt,lightMap:Jt,bumpMap:Lt,normalMap:re,displacementMap:I,emissiveMap:ye,normalMapObjectSpace:re&&b.normalMapType===$S,normalMapTangentSpace:re&&b.normalMapType===JS,metalnessMap:le,roughnessMap:Yt,anisotropy:Et,anisotropyMap:ht,clearcoat:w,clearcoatMap:jt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Qt,dispersion:y,iridescence:X,iridescenceMap:ce,iridescenceThicknessMap:At,sheen:rt,sheenColorMap:Dt,sheenRoughnessMap:Wt,specularMap:Xt,specularColorMap:Bt,specularIntensityMap:_e,transmission:gt,transmissionMap:Y,thicknessMap:Ht,gradientMap:Ut,opaque:b.transparent===!1&&b.blending===As&&b.alphaToCoverage===!1,alphaMap:kt,alphaTest:Tt,alphaHash:St,combine:b.combine,mapUv:fe&&D(b.map.channel),aoMapUv:Pt&&D(b.aoMap.channel),lightMapUv:Jt&&D(b.lightMap.channel),bumpMapUv:Lt&&D(b.bumpMap.channel),normalMapUv:re&&D(b.normalMap.channel),displacementMapUv:I&&D(b.displacementMap.channel),emissiveMapUv:ye&&D(b.emissiveMap.channel),metalnessMapUv:le&&D(b.metalnessMap.channel),roughnessMapUv:Yt&&D(b.roughnessMap.channel),anisotropyMapUv:ht&&D(b.anisotropyMap.channel),clearcoatMapUv:jt&&D(b.clearcoatMap.channel),clearcoatNormalMapUv:wt&&D(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&D(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&D(b.iridescenceMap.channel),iridescenceThicknessMapUv:At&&D(b.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&D(b.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&D(b.sheenRoughnessMap.channel),specularMapUv:Xt&&D(b.specularMap.channel),specularColorMapUv:Bt&&D(b.specularColorMap.channel),specularIntensityMapUv:_e&&D(b.specularIntensityMap.channel),transmissionMapUv:Y&&D(b.transmissionMap.channel),thicknessMapUv:Ht&&D(b.thicknessMap.channel),alphaMapUv:kt&&D(b.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(re||Et),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ct.attributes.uv&&(fe||kt),fog:!!pt,useFog:b.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ct,skinning:W.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:it,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:ue,decodeVideoTexture:fe&&b.map.isVideoTexture===!0&&we.getTransfer(b.map.colorSpace)===Xe,decodeVideoTextureEmissive:ye&&b.emissiveMap.isVideoTexture===!0&&we.getTransfer(b.emissiveMap.colorSpace)===Xe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===fa,flipSided:b.side===Wn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Nt&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&b.extensions.multiDraw===!0||Ot)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ie.vertexUv1s=p.has(1),Ie.vertexUv2s=p.has(2),Ie.vertexUv3s=p.has(3),p.clear(),Ie}function x(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const G in b.defines)C.push(G),C.push(b.defines[G]);return b.isRawShaderMaterial===!1&&(B(C,b),F(C,b),C.push(o.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function B(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function F(b,C){d.disableAll(),C.instancing&&d.enable(0),C.instancingColor&&d.enable(1),C.instancingMorph&&d.enable(2),C.matcap&&d.enable(3),C.envMap&&d.enable(4),C.normalMapObjectSpace&&d.enable(5),C.normalMapTangentSpace&&d.enable(6),C.clearcoat&&d.enable(7),C.iridescence&&d.enable(8),C.alphaTest&&d.enable(9),C.vertexColors&&d.enable(10),C.vertexAlphas&&d.enable(11),C.vertexUv1s&&d.enable(12),C.vertexUv2s&&d.enable(13),C.vertexUv3s&&d.enable(14),C.vertexTangents&&d.enable(15),C.anisotropy&&d.enable(16),C.alphaHash&&d.enable(17),C.batching&&d.enable(18),C.dispersion&&d.enable(19),C.batchingColor&&d.enable(20),C.gradientMap&&d.enable(21),b.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),b.push(d.mask)}function z(b){const C=R[b.type];let G;if(C){const K=Oi[C];G=Ry.clone(K.uniforms)}else G=b.uniforms;return G}function H(b,C){let G=v.get(C);return G!==void 0?++G.usedTimes:(G=new u1(o,C,b,u),g.push(G),v.set(C,G)),G}function L(b){if(--b.usedTimes===0){const C=g.indexOf(b);g[C]=g[g.length-1],g.pop(),v.delete(b.cacheKey),b.destroy()}}function U(b){m.remove(b)}function q(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:z,acquireProgram:H,releaseProgram:L,releaseShaderCache:U,programs:g,dispose:q}}function m1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function g1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function T_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function A_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(v,S,E,R,D,M){let x=o[e];return x===void 0?(x={id:v.id,object:v,geometry:S,material:E,groupOrder:R,renderOrder:v.renderOrder,z:D,group:M},o[e]=x):(x.id=v.id,x.object=v,x.geometry=S,x.material=E,x.groupOrder=R,x.renderOrder=v.renderOrder,x.z=D,x.group=M),e++,x}function d(v,S,E,R,D,M){const x=h(v,S,E,R,D,M);E.transmission>0?r.push(x):E.transparent===!0?l.push(x):i.push(x)}function m(v,S,E,R,D,M){const x=h(v,S,E,R,D,M);E.transmission>0?r.unshift(x):E.transparent===!0?l.unshift(x):i.unshift(x)}function p(v,S){i.length>1&&i.sort(v||g1),r.length>1&&r.sort(S||T_),l.length>1&&l.sort(S||T_)}function g(){for(let v=e,S=o.length;v<S;v++){const E=o[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function _1(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new A_,o.set(r,[h])):l>=u.length?(h=new A_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function v1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new nt,color:new De};break;case"SpotLight":i={position:new nt,direction:new nt,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new nt,color:new De,distance:0,decay:0};break;case"HemisphereLight":i={direction:new nt,skyColor:new De,groundColor:new De};break;case"RectAreaLight":i={color:new De,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return o[e.id]=i,i}}}function x1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let S1=0;function y1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function M1(o){const e=new v1,i=x1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new nt);const l=new nt,u=new $e,h=new $e;function d(p){let g=0,v=0,S=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let E=0,R=0,D=0,M=0,x=0,B=0,F=0,z=0,H=0,L=0,U=0;p.sort(y1);for(let b=0,C=p.length;b<C;b++){const G=p[b],K=G.color,W=G.intensity,pt=G.distance;let ct=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Ds?ct=G.shadow.map.texture:ct=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=K.r*W,v+=K.g*W,S+=K.b*W;else if(G.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(G.sh.coefficients[O],W);U++}else if(G.isDirectionalLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const P=G.shadow,J=i.get(G);J.shadowIntensity=P.intensity,J.shadowBias=P.bias,J.shadowNormalBias=P.normalBias,J.shadowRadius=P.radius,J.shadowMapSize=P.mapSize,r.directionalShadow[E]=J,r.directionalShadowMap[E]=ct,r.directionalShadowMatrix[E]=G.shadow.matrix,B++}r.directional[E]=O,E++}else if(G.isSpotLight){const O=e.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(K).multiplyScalar(W),O.distance=pt,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,r.spot[D]=O;const P=G.shadow;if(G.map&&(r.spotLightMap[H]=G.map,H++,P.updateMatrices(G),G.castShadow&&L++),r.spotLightMatrix[D]=P.matrix,G.castShadow){const J=i.get(G);J.shadowIntensity=P.intensity,J.shadowBias=P.bias,J.shadowNormalBias=P.normalBias,J.shadowRadius=P.radius,J.shadowMapSize=P.mapSize,r.spotShadow[D]=J,r.spotShadowMap[D]=ct,z++}D++}else if(G.isRectAreaLight){const O=e.get(G);O.color.copy(K).multiplyScalar(W),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),r.rectArea[M]=O,M++}else if(G.isPointLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const P=G.shadow,J=i.get(G);J.shadowIntensity=P.intensity,J.shadowBias=P.bias,J.shadowNormalBias=P.normalBias,J.shadowRadius=P.radius,J.shadowMapSize=P.mapSize,J.shadowCameraNear=P.camera.near,J.shadowCameraFar=P.camera.far,r.pointShadow[R]=J,r.pointShadowMap[R]=ct,r.pointShadowMatrix[R]=G.shadow.matrix,F++}r.point[R]=O,R++}else if(G.isHemisphereLight){const O=e.get(G);O.skyColor.copy(G.color).multiplyScalar(W),O.groundColor.copy(G.groundColor).multiplyScalar(W),r.hemi[x]=O,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Vt.LTC_FLOAT_1,r.rectAreaLTC2=Vt.LTC_FLOAT_2):(r.rectAreaLTC1=Vt.LTC_HALF_1,r.rectAreaLTC2=Vt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=S;const q=r.hash;(q.directionalLength!==E||q.pointLength!==R||q.spotLength!==D||q.rectAreaLength!==M||q.hemiLength!==x||q.numDirectionalShadows!==B||q.numPointShadows!==F||q.numSpotShadows!==z||q.numSpotMaps!==H||q.numLightProbes!==U)&&(r.directional.length=E,r.spot.length=D,r.rectArea.length=M,r.point.length=R,r.hemi.length=x,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=F,r.pointShadowMap.length=F,r.spotShadow.length=z,r.spotShadowMap.length=z,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=F,r.spotLightMatrix.length=z+H-L,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=U,q.directionalLength=E,q.pointLength=R,q.spotLength=D,q.rectAreaLength=M,q.hemiLength=x,q.numDirectionalShadows=B,q.numPointShadows=F,q.numSpotShadows=z,q.numSpotMaps=H,q.numLightProbes=U,r.version=S1++)}function m(p,g){let v=0,S=0,E=0,R=0,D=0;const M=g.matrixWorldInverse;for(let x=0,B=p.length;x<B;x++){const F=p[x];if(F.isDirectionalLight){const z=r.directional[v];z.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(M),v++}else if(F.isSpotLight){const z=r.spot[E];z.position.setFromMatrixPosition(F.matrixWorld),z.position.applyMatrix4(M),z.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(M),E++}else if(F.isRectAreaLight){const z=r.rectArea[R];z.position.setFromMatrixPosition(F.matrixWorld),z.position.applyMatrix4(M),h.identity(),u.copy(F.matrixWorld),u.premultiply(M),h.extractRotation(u),z.halfWidth.set(F.width*.5,0,0),z.halfHeight.set(0,F.height*.5,0),z.halfWidth.applyMatrix4(h),z.halfHeight.applyMatrix4(h),R++}else if(F.isPointLight){const z=r.point[S];z.position.setFromMatrixPosition(F.matrixWorld),z.position.applyMatrix4(M),S++}else if(F.isHemisphereLight){const z=r.hemi[D];z.direction.setFromMatrixPosition(F.matrixWorld),z.direction.transformDirection(M),D++}}}return{setup:d,setupView:m,state:r}}function R_(o){const e=new M1(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function E1(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new R_(o),e.set(l,[d])):u>=h.length?(d=new R_(o),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const b1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,A1=[new nt(1,0,0),new nt(-1,0,0),new nt(0,1,0),new nt(0,-1,0),new nt(0,0,1),new nt(0,0,-1)],R1=[new nt(0,-1,0),new nt(0,-1,0),new nt(0,0,1),new nt(0,0,-1),new nt(0,-1,0),new nt(0,-1,0)],C_=new $e,Fo=new nt,Oh=new nt;function C1(o,e,i){let r=new Gd;const l=new Be,u=new Be,h=new nn,d=new Hy,m=new Gy,p={},g=i.maxTextureSize,v={[$a]:Wn,[Wn]:$a,[fa]:fa},S=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:b1,fragmentShader:T1}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const R=new mi;R.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new va(R,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dc;let x=this.type;this.render=function(L,U,q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;L.type===wS&&(pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),L.type=Dc);const b=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),K=o.state;K.setBlending(da),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const W=x!==this.type;W&&U.traverse(function(pt){pt.material&&(Array.isArray(pt.material)?pt.material.forEach(ct=>ct.needsUpdate=!0):pt.material.needsUpdate=!0)});for(let pt=0,ct=L.length;pt<ct;pt++){const O=L[pt],P=O.shadow;if(P===void 0){pe("WebGLShadowMap:",O,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;l.copy(P.mapSize);const J=P.getFrameExtents();if(l.multiply(J),u.copy(P.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/J.x),l.x=u.x*J.x,P.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/J.y),l.y=u.y*J.y,P.mapSize.y=u.y)),P.map===null||W===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===Bo){if(O.isPointLight){pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Bi(l.x,l.y,{format:Ds,type:ma,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),P.map.texture.name=O.name+".shadowMap",P.map.depthTexture=new Xo(l.x,l.y,Pi),P.map.depthTexture.name=O.name+".shadowMapDepth",P.map.depthTexture.format=ga,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Cn,P.map.depthTexture.magFilter=Cn}else{O.isPointLight?(P.map=new nv(l.x),P.map.depthTexture=new By(l.x,Hi)):(P.map=new Bi(l.x,l.y),P.map.depthTexture=new Xo(l.x,l.y,Hi)),P.map.depthTexture.name=O.name+".shadowMap",P.map.depthTexture.format=ga;const yt=o.state.buffers.depth.getReversed();this.type===Dc?(P.map.depthTexture.compareFunction=yt?Id:Bd,P.map.depthTexture.minFilter=Nn,P.map.depthTexture.magFilter=Nn):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Cn,P.map.depthTexture.magFilter=Cn)}P.camera.updateProjectionMatrix()}const bt=P.map.isWebGLCubeRenderTarget?6:1;for(let yt=0;yt<bt;yt++){if(P.map.isWebGLCubeRenderTarget)o.setRenderTarget(P.map,yt),o.clear();else{yt===0&&(o.setRenderTarget(P.map),o.clear());const N=P.getViewport(yt);h.set(u.x*N.x,u.y*N.y,u.x*N.z,u.y*N.w),K.viewport(h)}if(O.isPointLight){const N=P.camera,it=P.matrix,_t=O.distance||N.far;_t!==N.far&&(N.far=_t,N.updateProjectionMatrix()),Fo.setFromMatrixPosition(O.matrixWorld),N.position.copy(Fo),Oh.copy(N.position),Oh.add(A1[yt]),N.up.copy(R1[yt]),N.lookAt(Oh),N.updateMatrixWorld(),it.makeTranslation(-Fo.x,-Fo.y,-Fo.z),C_.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),P._frustum.setFromProjectionMatrix(C_,N.coordinateSystem,N.reversedDepth)}else P.updateMatrices(O);r=P.getFrustum(),z(U,q,P.camera,O,this.type)}P.isPointLightShadow!==!0&&this.type===Bo&&B(P,q),P.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(b,C,G)};function B(L,U){const q=e.update(D);S.defines.VSM_SAMPLES!==L.blurSamples&&(S.defines.VSM_SAMPLES=L.blurSamples,E.defines.VSM_SAMPLES=L.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Bi(l.x,l.y,{format:Ds,type:ma})),S.uniforms.shadow_pass.value=L.map.depthTexture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(U,null,q,S,D,null),E.uniforms.shadow_pass.value=L.mapPass.texture,E.uniforms.resolution.value=L.mapSize,E.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(U,null,q,E,D,null)}function F(L,U,q,b){let C=null;const G=q.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(G!==void 0)C=G;else if(C=q.isPointLight===!0?m:d,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const K=C.uuid,W=U.uuid;let pt=p[K];pt===void 0&&(pt={},p[K]=pt);let ct=pt[W];ct===void 0&&(ct=C.clone(),pt[W]=ct,U.addEventListener("dispose",H)),C=ct}if(C.visible=U.visible,C.wireframe=U.wireframe,b===Bo?C.side=U.shadowSide!==null?U.shadowSide:U.side:C.side=U.shadowSide!==null?U.shadowSide:v[U.side],C.alphaMap=U.alphaMap,C.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,C.map=U.map,C.clipShadows=U.clipShadows,C.clippingPlanes=U.clippingPlanes,C.clipIntersection=U.clipIntersection,C.displacementMap=U.displacementMap,C.displacementScale=U.displacementScale,C.displacementBias=U.displacementBias,C.wireframeLinewidth=U.wireframeLinewidth,C.linewidth=U.linewidth,q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const K=o.properties.get(C);K.light=q}return C}function z(L,U,q,b,C){if(L.visible===!1)return;if(L.layers.test(U.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&C===Bo)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,L.matrixWorld);const W=e.update(L),pt=L.material;if(Array.isArray(pt)){const ct=W.groups;for(let O=0,P=ct.length;O<P;O++){const J=ct[O],bt=pt[J.materialIndex];if(bt&&bt.visible){const yt=F(L,bt,b,C);L.onBeforeShadow(o,L,U,q,W,yt,J),o.renderBufferDirect(q,null,W,yt,L,J),L.onAfterShadow(o,L,U,q,W,yt,J)}}}else if(pt.visible){const ct=F(L,pt,b,C);L.onBeforeShadow(o,L,U,q,W,ct,null),o.renderBufferDirect(q,null,W,ct,L,null),L.onAfterShadow(o,L,U,q,W,ct,null)}}const K=L.children;for(let W=0,pt=K.length;W<pt;W++)z(K[W],U,q,b,C)}function H(L){L.target.removeEventListener("dispose",H);for(const q in p){const b=p[q],C=L.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}const w1={[Fh]:Bh,[Ih]:Vh,[Hh]:Xh,[Cs]:Gh,[Bh]:Fh,[Vh]:Ih,[Xh]:Hh,[Gh]:Cs};function D1(o,e){function i(){let Y=!1;const Ht=new nn;let Ut=null;const kt=new nn(0,0,0,0);return{setMask:function(Tt){Ut!==Tt&&!Y&&(o.colorMask(Tt,Tt,Tt,Tt),Ut=Tt)},setLocked:function(Tt){Y=Tt},setClear:function(Tt,St,Nt,ue,Ie){Ie===!0&&(Tt*=ue,St*=ue,Nt*=ue),Ht.set(Tt,St,Nt,ue),kt.equals(Ht)===!1&&(o.clearColor(Tt,St,Nt,ue),kt.copy(Ht))},reset:function(){Y=!1,Ut=null,kt.set(-1,0,0,0)}}}function r(){let Y=!1,Ht=!1,Ut=null,kt=null,Tt=null;return{setReversed:function(St){if(Ht!==St){const Nt=e.get("EXT_clip_control");St?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),Ht=St;const ue=Tt;Tt=null,this.setClear(ue)}},getReversed:function(){return Ht},setTest:function(St){St?dt(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(St){Ut!==St&&!Y&&(o.depthMask(St),Ut=St)},setFunc:function(St){if(Ht&&(St=w1[St]),kt!==St){switch(St){case Fh:o.depthFunc(o.NEVER);break;case Bh:o.depthFunc(o.ALWAYS);break;case Ih:o.depthFunc(o.LESS);break;case Cs:o.depthFunc(o.LEQUAL);break;case Hh:o.depthFunc(o.EQUAL);break;case Gh:o.depthFunc(o.GEQUAL);break;case Vh:o.depthFunc(o.GREATER);break;case Xh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}kt=St}},setLocked:function(St){Y=St},setClear:function(St){Tt!==St&&(Ht&&(St=1-St),o.clearDepth(St),Tt=St)},reset:function(){Y=!1,Ut=null,kt=null,Tt=null,Ht=!1}}}function l(){let Y=!1,Ht=null,Ut=null,kt=null,Tt=null,St=null,Nt=null,ue=null,Ie=null;return{setTest:function(Ce){Y||(Ce?dt(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(Ce){Ht!==Ce&&!Y&&(o.stencilMask(Ce),Ht=Ce)},setFunc:function(Ce,wn,gi){(Ut!==Ce||kt!==wn||Tt!==gi)&&(o.stencilFunc(Ce,wn,gi),Ut=Ce,kt=wn,Tt=gi)},setOp:function(Ce,wn,gi){(St!==Ce||Nt!==wn||ue!==gi)&&(o.stencilOp(Ce,wn,gi),St=Ce,Nt=wn,ue=gi)},setLocked:function(Ce){Y=Ce},setClear:function(Ce){Ie!==Ce&&(o.clearStencil(Ce),Ie=Ce)},reset:function(){Y=!1,Ht=null,Ut=null,kt=null,Tt=null,St=null,Nt=null,ue=null,Ie=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},S=new WeakMap,E=[],R=null,D=!1,M=null,x=null,B=null,F=null,z=null,H=null,L=null,U=new De(0,0,0),q=0,b=!1,C=null,G=null,K=null,W=null,pt=null;const ct=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,P=0;const J=o.getParameter(o.VERSION);J.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(J)[1]),O=P>=1):J.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),O=P>=2);let bt=null,yt={};const N=o.getParameter(o.SCISSOR_BOX),it=o.getParameter(o.VIEWPORT),_t=new nn().fromArray(N),Rt=new nn().fromArray(it);function zt(Y,Ht,Ut,kt){const Tt=new Uint8Array(4),St=o.createTexture();o.bindTexture(Y,St),o.texParameteri(Y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Nt=0;Nt<Ut;Nt++)Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY?o.texImage3D(Ht,0,o.RGBA,1,1,kt,0,o.RGBA,o.UNSIGNED_BYTE,Tt):o.texImage2D(Ht+Nt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Tt);return St}const $={};$[o.TEXTURE_2D]=zt(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=zt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=zt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=zt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),dt(o.DEPTH_TEST),h.setFunc(Cs),Lt(!1),re(Dg),dt(o.CULL_FACE),Pt(da);function dt(Y){g[Y]!==!0&&(o.enable(Y),g[Y]=!0)}function Ct(Y){g[Y]!==!1&&(o.disable(Y),g[Y]=!1)}function Ft(Y,Ht){return v[Y]!==Ht?(o.bindFramebuffer(Y,Ht),v[Y]=Ht,Y===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ht),Y===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ht),!0):!1}function Ot(Y,Ht){let Ut=E,kt=!1;if(Y){Ut=S.get(Ht),Ut===void 0&&(Ut=[],S.set(Ht,Ut));const Tt=Y.textures;if(Ut.length!==Tt.length||Ut[0]!==o.COLOR_ATTACHMENT0){for(let St=0,Nt=Tt.length;St<Nt;St++)Ut[St]=o.COLOR_ATTACHMENT0+St;Ut.length=Tt.length,kt=!0}}else Ut[0]!==o.BACK&&(Ut[0]=o.BACK,kt=!0);kt&&o.drawBuffers(Ut)}function fe(Y){return R!==Y?(o.useProgram(Y),R=Y,!0):!1}const at={[Tr]:o.FUNC_ADD,[US]:o.FUNC_SUBTRACT,[LS]:o.FUNC_REVERSE_SUBTRACT};at[NS]=o.MIN,at[OS]=o.MAX;const Mt={[PS]:o.ZERO,[zS]:o.ONE,[FS]:o.SRC_COLOR,[Ph]:o.SRC_ALPHA,[XS]:o.SRC_ALPHA_SATURATE,[GS]:o.DST_COLOR,[IS]:o.DST_ALPHA,[BS]:o.ONE_MINUS_SRC_COLOR,[zh]:o.ONE_MINUS_SRC_ALPHA,[VS]:o.ONE_MINUS_DST_COLOR,[HS]:o.ONE_MINUS_DST_ALPHA,[kS]:o.CONSTANT_COLOR,[WS]:o.ONE_MINUS_CONSTANT_COLOR,[qS]:o.CONSTANT_ALPHA,[YS]:o.ONE_MINUS_CONSTANT_ALPHA};function Pt(Y,Ht,Ut,kt,Tt,St,Nt,ue,Ie,Ce){if(Y===da){D===!0&&(Ct(o.BLEND),D=!1);return}if(D===!1&&(dt(o.BLEND),D=!0),Y!==DS){if(Y!==M||Ce!==b){if((x!==Tr||z!==Tr)&&(o.blendEquation(o.FUNC_ADD),x=Tr,z=Tr),Ce)switch(Y){case As:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ug:o.blendFunc(o.ONE,o.ONE);break;case Lg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ng:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ne("WebGLState: Invalid blending: ",Y);break}else switch(Y){case As:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ug:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Lg:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ng:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",Y);break}B=null,F=null,H=null,L=null,U.set(0,0,0),q=0,M=Y,b=Ce}return}Tt=Tt||Ht,St=St||Ut,Nt=Nt||kt,(Ht!==x||Tt!==z)&&(o.blendEquationSeparate(at[Ht],at[Tt]),x=Ht,z=Tt),(Ut!==B||kt!==F||St!==H||Nt!==L)&&(o.blendFuncSeparate(Mt[Ut],Mt[kt],Mt[St],Mt[Nt]),B=Ut,F=kt,H=St,L=Nt),(ue.equals(U)===!1||Ie!==q)&&(o.blendColor(ue.r,ue.g,ue.b,Ie),U.copy(ue),q=Ie),M=Y,b=!1}function Jt(Y,Ht){Y.side===fa?Ct(o.CULL_FACE):dt(o.CULL_FACE);let Ut=Y.side===Wn;Ht&&(Ut=!Ut),Lt(Ut),Y.blending===As&&Y.transparent===!1?Pt(da):Pt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),h.setFunc(Y.depthFunc),h.setTest(Y.depthTest),h.setMask(Y.depthWrite),u.setMask(Y.colorWrite);const kt=Y.stencilWrite;d.setTest(kt),kt&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),ye(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?dt(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(Y){C!==Y&&(Y?o.frontFace(o.CW):o.frontFace(o.CCW),C=Y)}function re(Y){Y!==RS?(dt(o.CULL_FACE),Y!==G&&(Y===Dg?o.cullFace(o.BACK):Y===CS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),G=Y}function I(Y){Y!==K&&(O&&o.lineWidth(Y),K=Y)}function ye(Y,Ht,Ut){Y?(dt(o.POLYGON_OFFSET_FILL),(W!==Ht||pt!==Ut)&&(o.polygonOffset(Ht,Ut),W=Ht,pt=Ut)):Ct(o.POLYGON_OFFSET_FILL)}function le(Y){Y?dt(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function Yt(Y){Y===void 0&&(Y=o.TEXTURE0+ct-1),bt!==Y&&(o.activeTexture(Y),bt=Y)}function Et(Y,Ht,Ut){Ut===void 0&&(bt===null?Ut=o.TEXTURE0+ct-1:Ut=bt);let kt=yt[Ut];kt===void 0&&(kt={type:void 0,texture:void 0},yt[Ut]=kt),(kt.type!==Y||kt.texture!==Ht)&&(bt!==Ut&&(o.activeTexture(Ut),bt=Ut),o.bindTexture(Y,Ht||$[Y]),kt.type=Y,kt.texture=Ht)}function w(){const Y=yt[bt];Y!==void 0&&Y.type!==void 0&&(o.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function y(){try{o.compressedTexImage2D(...arguments)}catch(Y){Ne("WebGLState:",Y)}}function X(){try{o.compressedTexImage3D(...arguments)}catch(Y){Ne("WebGLState:",Y)}}function rt(){try{o.texSubImage2D(...arguments)}catch(Y){Ne("WebGLState:",Y)}}function gt(){try{o.texSubImage3D(...arguments)}catch(Y){Ne("WebGLState:",Y)}}function ht(){try{o.compressedTexSubImage2D(...arguments)}catch(Y){Ne("WebGLState:",Y)}}function jt(){try{o.compressedTexSubImage3D(...arguments)}catch(Y){Ne("WebGLState:",Y)}}function wt(){try{o.texStorage2D(...arguments)}catch(Y){Ne("WebGLState:",Y)}}function Qt(){try{o.texStorage3D(...arguments)}catch(Y){Ne("WebGLState:",Y)}}function ce(){try{o.texImage2D(...arguments)}catch(Y){Ne("WebGLState:",Y)}}function At(){try{o.texImage3D(...arguments)}catch(Y){Ne("WebGLState:",Y)}}function Dt(Y){_t.equals(Y)===!1&&(o.scissor(Y.x,Y.y,Y.z,Y.w),_t.copy(Y))}function Wt(Y){Rt.equals(Y)===!1&&(o.viewport(Y.x,Y.y,Y.z,Y.w),Rt.copy(Y))}function Xt(Y,Ht){let Ut=p.get(Ht);Ut===void 0&&(Ut=new WeakMap,p.set(Ht,Ut));let kt=Ut.get(Y);kt===void 0&&(kt=o.getUniformBlockIndex(Ht,Y.name),Ut.set(Y,kt))}function Bt(Y,Ht){const kt=p.get(Ht).get(Y);m.get(Ht)!==kt&&(o.uniformBlockBinding(Ht,kt,Y.__bindingPointIndex),m.set(Ht,kt))}function _e(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},bt=null,yt={},v={},S=new WeakMap,E=[],R=null,D=!1,M=null,x=null,B=null,F=null,z=null,H=null,L=null,U=new De(0,0,0),q=0,b=!1,C=null,G=null,K=null,W=null,pt=null,_t.set(0,0,o.canvas.width,o.canvas.height),Rt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:dt,disable:Ct,bindFramebuffer:Ft,drawBuffers:Ot,useProgram:fe,setBlending:Pt,setMaterial:Jt,setFlipSided:Lt,setCullFace:re,setLineWidth:I,setPolygonOffset:ye,setScissorTest:le,activeTexture:Yt,bindTexture:Et,unbindTexture:w,compressedTexImage2D:y,compressedTexImage3D:X,texImage2D:ce,texImage3D:At,updateUBOMapping:Xt,uniformBlockBinding:Bt,texStorage2D:wt,texStorage3D:Qt,texSubImage2D:rt,texSubImage3D:gt,compressedTexSubImage2D:ht,compressedTexSubImage3D:jt,scissor:Dt,viewport:Wt,reset:_e}}function U1(o,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Be,g=new WeakMap;let v;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(w,y){return E?new OffscreenCanvas(w,y):Bc("canvas")}function D(w,y,X){let rt=1;const gt=Et(w);if((gt.width>X||gt.height>X)&&(rt=X/Math.max(gt.width,gt.height)),rt<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ht=Math.floor(rt*gt.width),jt=Math.floor(rt*gt.height);v===void 0&&(v=R(ht,jt));const wt=y?R(ht,jt):v;return wt.width=ht,wt.height=jt,wt.getContext("2d").drawImage(w,0,0,ht,jt),pe("WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+ht+"x"+jt+")."),wt}else return"data"in w&&pe("WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),w;return w}function M(w){return w.generateMipmaps}function x(w){o.generateMipmap(w)}function B(w){return w.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?o.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function F(w,y,X,rt,gt=!1){if(w!==null){if(o[w]!==void 0)return o[w];pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ht=y;if(y===o.RED&&(X===o.FLOAT&&(ht=o.R32F),X===o.HALF_FLOAT&&(ht=o.R16F),X===o.UNSIGNED_BYTE&&(ht=o.R8)),y===o.RED_INTEGER&&(X===o.UNSIGNED_BYTE&&(ht=o.R8UI),X===o.UNSIGNED_SHORT&&(ht=o.R16UI),X===o.UNSIGNED_INT&&(ht=o.R32UI),X===o.BYTE&&(ht=o.R8I),X===o.SHORT&&(ht=o.R16I),X===o.INT&&(ht=o.R32I)),y===o.RG&&(X===o.FLOAT&&(ht=o.RG32F),X===o.HALF_FLOAT&&(ht=o.RG16F),X===o.UNSIGNED_BYTE&&(ht=o.RG8)),y===o.RG_INTEGER&&(X===o.UNSIGNED_BYTE&&(ht=o.RG8UI),X===o.UNSIGNED_SHORT&&(ht=o.RG16UI),X===o.UNSIGNED_INT&&(ht=o.RG32UI),X===o.BYTE&&(ht=o.RG8I),X===o.SHORT&&(ht=o.RG16I),X===o.INT&&(ht=o.RG32I)),y===o.RGB_INTEGER&&(X===o.UNSIGNED_BYTE&&(ht=o.RGB8UI),X===o.UNSIGNED_SHORT&&(ht=o.RGB16UI),X===o.UNSIGNED_INT&&(ht=o.RGB32UI),X===o.BYTE&&(ht=o.RGB8I),X===o.SHORT&&(ht=o.RGB16I),X===o.INT&&(ht=o.RGB32I)),y===o.RGBA_INTEGER&&(X===o.UNSIGNED_BYTE&&(ht=o.RGBA8UI),X===o.UNSIGNED_SHORT&&(ht=o.RGBA16UI),X===o.UNSIGNED_INT&&(ht=o.RGBA32UI),X===o.BYTE&&(ht=o.RGBA8I),X===o.SHORT&&(ht=o.RGBA16I),X===o.INT&&(ht=o.RGBA32I)),y===o.RGB&&(X===o.UNSIGNED_INT_5_9_9_9_REV&&(ht=o.RGB9_E5),X===o.UNSIGNED_INT_10F_11F_11F_REV&&(ht=o.R11F_G11F_B10F)),y===o.RGBA){const jt=gt?zc:we.getTransfer(rt);X===o.FLOAT&&(ht=o.RGBA32F),X===o.HALF_FLOAT&&(ht=o.RGBA16F),X===o.UNSIGNED_BYTE&&(ht=jt===Xe?o.SRGB8_ALPHA8:o.RGBA8),X===o.UNSIGNED_SHORT_4_4_4_4&&(ht=o.RGBA4),X===o.UNSIGNED_SHORT_5_5_5_1&&(ht=o.RGB5_A1)}return(ht===o.R16F||ht===o.R32F||ht===o.RG16F||ht===o.RG32F||ht===o.RGBA16F||ht===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ht}function z(w,y){let X;return w?y===null||y===Hi||y===Go?X=o.DEPTH24_STENCIL8:y===Pi?X=o.DEPTH32F_STENCIL8:y===Ho&&(X=o.DEPTH24_STENCIL8,pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Hi||y===Go?X=o.DEPTH_COMPONENT24:y===Pi?X=o.DEPTH_COMPONENT32F:y===Ho&&(X=o.DEPTH_COMPONENT16),X}function H(w,y){return M(w)===!0||w.isFramebufferTexture&&w.minFilter!==Cn&&w.minFilter!==Nn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function L(w){const y=w.target;y.removeEventListener("dispose",L),q(y),y.isVideoTexture&&g.delete(y)}function U(w){const y=w.target;y.removeEventListener("dispose",U),C(y)}function q(w){const y=r.get(w);if(y.__webglInit===void 0)return;const X=w.source,rt=S.get(X);if(rt){const gt=rt[y.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&b(w),Object.keys(rt).length===0&&S.delete(X)}r.remove(w)}function b(w){const y=r.get(w);o.deleteTexture(y.__webglTexture);const X=w.source,rt=S.get(X);delete rt[y.__cacheKey],h.memory.textures--}function C(w){const y=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(y.__webglFramebuffer[rt]))for(let gt=0;gt<y.__webglFramebuffer[rt].length;gt++)o.deleteFramebuffer(y.__webglFramebuffer[rt][gt]);else o.deleteFramebuffer(y.__webglFramebuffer[rt]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[rt])}else{if(Array.isArray(y.__webglFramebuffer))for(let rt=0;rt<y.__webglFramebuffer.length;rt++)o.deleteFramebuffer(y.__webglFramebuffer[rt]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let rt=0;rt<y.__webglColorRenderbuffer.length;rt++)y.__webglColorRenderbuffer[rt]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[rt]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const X=w.textures;for(let rt=0,gt=X.length;rt<gt;rt++){const ht=r.get(X[rt]);ht.__webglTexture&&(o.deleteTexture(ht.__webglTexture),h.memory.textures--),r.remove(X[rt])}r.remove(w)}let G=0;function K(){G=0}function W(){const w=G;return w>=l.maxTextures&&pe("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),G+=1,w}function pt(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function ct(w,y){const X=r.get(w);if(w.isVideoTexture&&le(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&X.__version!==w.version){const rt=w.image;if(rt===null)pe("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)pe("WebGLRenderer: Texture marked for update but image is incomplete");else{$(X,w,y);return}}else w.isExternalTexture&&(X.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,X.__webglTexture,o.TEXTURE0+y)}function O(w,y){const X=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){$(X,w,y);return}else w.isExternalTexture&&(X.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,X.__webglTexture,o.TEXTURE0+y)}function P(w,y){const X=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){$(X,w,y);return}i.bindTexture(o.TEXTURE_3D,X.__webglTexture,o.TEXTURE0+y)}function J(w,y){const X=r.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&X.__version!==w.version){dt(X,w,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,X.__webglTexture,o.TEXTURE0+y)}const bt={[qh]:o.REPEAT,[ha]:o.CLAMP_TO_EDGE,[Yh]:o.MIRRORED_REPEAT},yt={[Cn]:o.NEAREST,[KS]:o.NEAREST_MIPMAP_NEAREST,[sc]:o.NEAREST_MIPMAP_LINEAR,[Nn]:o.LINEAR,[nh]:o.LINEAR_MIPMAP_NEAREST,[Rr]:o.LINEAR_MIPMAP_LINEAR},N={[ty]:o.NEVER,[ry]:o.ALWAYS,[ey]:o.LESS,[Bd]:o.LEQUAL,[ny]:o.EQUAL,[Id]:o.GEQUAL,[iy]:o.GREATER,[ay]:o.NOTEQUAL};function it(w,y){if(y.type===Pi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Nn||y.magFilter===nh||y.magFilter===sc||y.magFilter===Rr||y.minFilter===Nn||y.minFilter===nh||y.minFilter===sc||y.minFilter===Rr)&&pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(w,o.TEXTURE_WRAP_S,bt[y.wrapS]),o.texParameteri(w,o.TEXTURE_WRAP_T,bt[y.wrapT]),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,bt[y.wrapR]),o.texParameteri(w,o.TEXTURE_MAG_FILTER,yt[y.magFilter]),o.texParameteri(w,o.TEXTURE_MIN_FILTER,yt[y.minFilter]),y.compareFunction&&(o.texParameteri(w,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(w,o.TEXTURE_COMPARE_FUNC,N[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Cn||y.minFilter!==sc&&y.minFilter!==Rr||y.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");o.texParameterf(w,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function _t(w,y){let X=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",L));const rt=y.source;let gt=S.get(rt);gt===void 0&&(gt={},S.set(rt,gt));const ht=pt(y);if(ht!==w.__cacheKey){gt[ht]===void 0&&(gt[ht]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,X=!0),gt[ht].usedTimes++;const jt=gt[w.__cacheKey];jt!==void 0&&(gt[w.__cacheKey].usedTimes--,jt.usedTimes===0&&b(y)),w.__cacheKey=ht,w.__webglTexture=gt[ht].texture}return X}function Rt(w,y,X){return Math.floor(Math.floor(w/X)/y)}function zt(w,y,X,rt){const ht=w.updateRanges;if(ht.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,X,rt,y.data);else{ht.sort((At,Dt)=>At.start-Dt.start);let jt=0;for(let At=1;At<ht.length;At++){const Dt=ht[jt],Wt=ht[At],Xt=Dt.start+Dt.count,Bt=Rt(Wt.start,y.width,4),_e=Rt(Dt.start,y.width,4);Wt.start<=Xt+1&&Bt===_e&&Rt(Wt.start+Wt.count-1,y.width,4)===Bt?Dt.count=Math.max(Dt.count,Wt.start+Wt.count-Dt.start):(++jt,ht[jt]=Wt)}ht.length=jt+1;const wt=o.getParameter(o.UNPACK_ROW_LENGTH),Qt=o.getParameter(o.UNPACK_SKIP_PIXELS),ce=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let At=0,Dt=ht.length;At<Dt;At++){const Wt=ht[At],Xt=Math.floor(Wt.start/4),Bt=Math.ceil(Wt.count/4),_e=Xt%y.width,Y=Math.floor(Xt/y.width),Ht=Bt,Ut=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,_e),o.pixelStorei(o.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(o.TEXTURE_2D,0,_e,Y,Ht,Ut,X,rt,y.data)}w.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,wt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ce)}}function $(w,y,X){let rt=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(rt=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(rt=o.TEXTURE_3D);const gt=_t(w,y),ht=y.source;i.bindTexture(rt,w.__webglTexture,o.TEXTURE0+X);const jt=r.get(ht);if(ht.version!==jt.__version||gt===!0){i.activeTexture(o.TEXTURE0+X);const wt=we.getPrimaries(we.workingColorSpace),Qt=y.colorSpace===Qa?null:we.getPrimaries(y.colorSpace),ce=y.colorSpace===Qa||wt===Qt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let At=D(y.image,!1,l.maxTextureSize);At=Yt(y,At);const Dt=u.convert(y.format,y.colorSpace),Wt=u.convert(y.type);let Xt=F(y.internalFormat,Dt,Wt,y.colorSpace,y.isVideoTexture);it(rt,y);let Bt;const _e=y.mipmaps,Y=y.isVideoTexture!==!0,Ht=jt.__version===void 0||gt===!0,Ut=ht.dataReady,kt=H(y,At);if(y.isDepthTexture)Xt=z(y.format===Cr,y.type),Ht&&(Y?i.texStorage2D(o.TEXTURE_2D,1,Xt,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,Xt,At.width,At.height,0,Dt,Wt,null));else if(y.isDataTexture)if(_e.length>0){Y&&Ht&&i.texStorage2D(o.TEXTURE_2D,kt,Xt,_e[0].width,_e[0].height);for(let Tt=0,St=_e.length;Tt<St;Tt++)Bt=_e[Tt],Y?Ut&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Bt.width,Bt.height,Dt,Wt,Bt.data):i.texImage2D(o.TEXTURE_2D,Tt,Xt,Bt.width,Bt.height,0,Dt,Wt,Bt.data);y.generateMipmaps=!1}else Y?(Ht&&i.texStorage2D(o.TEXTURE_2D,kt,Xt,At.width,At.height),Ut&&zt(y,At,Dt,Wt)):i.texImage2D(o.TEXTURE_2D,0,Xt,At.width,At.height,0,Dt,Wt,At.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Y&&Ht&&i.texStorage3D(o.TEXTURE_2D_ARRAY,kt,Xt,_e[0].width,_e[0].height,At.depth);for(let Tt=0,St=_e.length;Tt<St;Tt++)if(Bt=_e[Tt],y.format!==Ai)if(Dt!==null)if(Y){if(Ut)if(y.layerUpdates.size>0){const Nt=r_(Bt.width,Bt.height,y.format,y.type);for(const ue of y.layerUpdates){const Ie=Bt.data.subarray(ue*Nt/Bt.data.BYTES_PER_ELEMENT,(ue+1)*Nt/Bt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,ue,Bt.width,Bt.height,1,Dt,Ie)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Bt.width,Bt.height,At.depth,Dt,Bt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Tt,Xt,Bt.width,Bt.height,At.depth,0,Bt.data,0,0);else pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Ut&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Bt.width,Bt.height,At.depth,Dt,Wt,Bt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Tt,Xt,Bt.width,Bt.height,At.depth,0,Dt,Wt,Bt.data)}else{Y&&Ht&&i.texStorage2D(o.TEXTURE_2D,kt,Xt,_e[0].width,_e[0].height);for(let Tt=0,St=_e.length;Tt<St;Tt++)Bt=_e[Tt],y.format!==Ai?Dt!==null?Y?Ut&&i.compressedTexSubImage2D(o.TEXTURE_2D,Tt,0,0,Bt.width,Bt.height,Dt,Bt.data):i.compressedTexImage2D(o.TEXTURE_2D,Tt,Xt,Bt.width,Bt.height,0,Bt.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Ut&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Bt.width,Bt.height,Dt,Wt,Bt.data):i.texImage2D(o.TEXTURE_2D,Tt,Xt,Bt.width,Bt.height,0,Dt,Wt,Bt.data)}else if(y.isDataArrayTexture)if(Y){if(Ht&&i.texStorage3D(o.TEXTURE_2D_ARRAY,kt,Xt,At.width,At.height,At.depth),Ut)if(y.layerUpdates.size>0){const Tt=r_(At.width,At.height,y.format,y.type);for(const St of y.layerUpdates){const Nt=At.data.subarray(St*Tt/At.data.BYTES_PER_ELEMENT,(St+1)*Tt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,St,At.width,At.height,1,Dt,Wt,Nt)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Dt,Wt,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Xt,At.width,At.height,At.depth,0,Dt,Wt,At.data);else if(y.isData3DTexture)Y?(Ht&&i.texStorage3D(o.TEXTURE_3D,kt,Xt,At.width,At.height,At.depth),Ut&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Dt,Wt,At.data)):i.texImage3D(o.TEXTURE_3D,0,Xt,At.width,At.height,At.depth,0,Dt,Wt,At.data);else if(y.isFramebufferTexture){if(Ht)if(Y)i.texStorage2D(o.TEXTURE_2D,kt,Xt,At.width,At.height);else{let Tt=At.width,St=At.height;for(let Nt=0;Nt<kt;Nt++)i.texImage2D(o.TEXTURE_2D,Nt,Xt,Tt,St,0,Dt,Wt,null),Tt>>=1,St>>=1}}else if(_e.length>0){if(Y&&Ht){const Tt=Et(_e[0]);i.texStorage2D(o.TEXTURE_2D,kt,Xt,Tt.width,Tt.height)}for(let Tt=0,St=_e.length;Tt<St;Tt++)Bt=_e[Tt],Y?Ut&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Dt,Wt,Bt):i.texImage2D(o.TEXTURE_2D,Tt,Xt,Dt,Wt,Bt);y.generateMipmaps=!1}else if(Y){if(Ht){const Tt=Et(At);i.texStorage2D(o.TEXTURE_2D,kt,Xt,Tt.width,Tt.height)}Ut&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Dt,Wt,At)}else i.texImage2D(o.TEXTURE_2D,0,Xt,Dt,Wt,At);M(y)&&x(rt),jt.__version=ht.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function dt(w,y,X){if(y.image.length!==6)return;const rt=_t(w,y),gt=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+X);const ht=r.get(gt);if(gt.version!==ht.__version||rt===!0){i.activeTexture(o.TEXTURE0+X);const jt=we.getPrimaries(we.workingColorSpace),wt=y.colorSpace===Qa?null:we.getPrimaries(y.colorSpace),Qt=y.colorSpace===Qa||jt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const ce=y.isCompressedTexture||y.image[0].isCompressedTexture,At=y.image[0]&&y.image[0].isDataTexture,Dt=[];for(let St=0;St<6;St++)!ce&&!At?Dt[St]=D(y.image[St],!0,l.maxCubemapSize):Dt[St]=At?y.image[St].image:y.image[St],Dt[St]=Yt(y,Dt[St]);const Wt=Dt[0],Xt=u.convert(y.format,y.colorSpace),Bt=u.convert(y.type),_e=F(y.internalFormat,Xt,Bt,y.colorSpace),Y=y.isVideoTexture!==!0,Ht=ht.__version===void 0||rt===!0,Ut=gt.dataReady;let kt=H(y,Wt);it(o.TEXTURE_CUBE_MAP,y);let Tt;if(ce){Y&&Ht&&i.texStorage2D(o.TEXTURE_CUBE_MAP,kt,_e,Wt.width,Wt.height);for(let St=0;St<6;St++){Tt=Dt[St].mipmaps;for(let Nt=0;Nt<Tt.length;Nt++){const ue=Tt[Nt];y.format!==Ai?Xt!==null?Y?Ut&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Nt,0,0,ue.width,ue.height,Xt,ue.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Nt,_e,ue.width,ue.height,0,ue.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Nt,0,0,ue.width,ue.height,Xt,Bt,ue.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Nt,_e,ue.width,ue.height,0,Xt,Bt,ue.data)}}}else{if(Tt=y.mipmaps,Y&&Ht){Tt.length>0&&kt++;const St=Et(Dt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,kt,_e,St.width,St.height)}for(let St=0;St<6;St++)if(At){Y?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Dt[St].width,Dt[St].height,Xt,Bt,Dt[St].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,_e,Dt[St].width,Dt[St].height,0,Xt,Bt,Dt[St].data);for(let Nt=0;Nt<Tt.length;Nt++){const Ie=Tt[Nt].image[St].image;Y?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Nt+1,0,0,Ie.width,Ie.height,Xt,Bt,Ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Nt+1,_e,Ie.width,Ie.height,0,Xt,Bt,Ie.data)}}else{Y?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Xt,Bt,Dt[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,_e,Xt,Bt,Dt[St]);for(let Nt=0;Nt<Tt.length;Nt++){const ue=Tt[Nt];Y?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Nt+1,0,0,Xt,Bt,ue.image[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Nt+1,_e,Xt,Bt,ue.image[St])}}}M(y)&&x(o.TEXTURE_CUBE_MAP),ht.__version=gt.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Ct(w,y,X,rt,gt,ht){const jt=u.convert(X.format,X.colorSpace),wt=u.convert(X.type),Qt=F(X.internalFormat,jt,wt,X.colorSpace),ce=r.get(y),At=r.get(X);if(At.__renderTarget=y,!ce.__hasExternalTextures){const Dt=Math.max(1,y.width>>ht),Wt=Math.max(1,y.height>>ht);gt===o.TEXTURE_3D||gt===o.TEXTURE_2D_ARRAY?i.texImage3D(gt,ht,Qt,Dt,Wt,y.depth,0,jt,wt,null):i.texImage2D(gt,ht,Qt,Dt,Wt,0,jt,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,w),ye(y)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,rt,gt,At.__webglTexture,0,I(y)):(gt===o.TEXTURE_2D||gt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,rt,gt,At.__webglTexture,ht),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ft(w,y,X){if(o.bindRenderbuffer(o.RENDERBUFFER,w),y.depthBuffer){const rt=y.depthTexture,gt=rt&&rt.isDepthTexture?rt.type:null,ht=z(y.stencilBuffer,gt),jt=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;ye(y)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,I(y),ht,y.width,y.height):X?o.renderbufferStorageMultisample(o.RENDERBUFFER,I(y),ht,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,ht,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,jt,o.RENDERBUFFER,w)}else{const rt=y.textures;for(let gt=0;gt<rt.length;gt++){const ht=rt[gt],jt=u.convert(ht.format,ht.colorSpace),wt=u.convert(ht.type),Qt=F(ht.internalFormat,jt,wt,ht.colorSpace);ye(y)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,I(y),Qt,y.width,y.height):X?o.renderbufferStorageMultisample(o.RENDERBUFFER,I(y),Qt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Qt,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ot(w,y,X){const rt=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=r.get(y.depthTexture);if(gt.__renderTarget=y,(!gt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),rt){if(gt.__webglInit===void 0&&(gt.__webglInit=!0,y.depthTexture.addEventListener("dispose",L)),gt.__webglTexture===void 0){gt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),it(o.TEXTURE_CUBE_MAP,y.depthTexture);const ce=u.convert(y.depthTexture.format),At=u.convert(y.depthTexture.type);let Dt;y.depthTexture.format===ga?Dt=o.DEPTH_COMPONENT24:y.depthTexture.format===Cr&&(Dt=o.DEPTH24_STENCIL8);for(let Wt=0;Wt<6;Wt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Wt,0,Dt,y.width,y.height,0,ce,At,null)}}else ct(y.depthTexture,0);const ht=gt.__webglTexture,jt=I(y),wt=rt?o.TEXTURE_CUBE_MAP_POSITIVE_X+X:o.TEXTURE_2D,Qt=y.depthTexture.format===Cr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===ga)ye(y)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Qt,wt,ht,0,jt):o.framebufferTexture2D(o.FRAMEBUFFER,Qt,wt,ht,0);else if(y.depthTexture.format===Cr)ye(y)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Qt,wt,ht,0,jt):o.framebufferTexture2D(o.FRAMEBUFFER,Qt,wt,ht,0);else throw new Error("Unknown depthTexture format")}function fe(w){const y=r.get(w),X=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const rt=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),rt){const gt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,rt.removeEventListener("dispose",gt)};rt.addEventListener("dispose",gt),y.__depthDisposeCallback=gt}y.__boundDepthTexture=rt}if(w.depthTexture&&!y.__autoAllocateDepthBuffer)if(X)for(let rt=0;rt<6;rt++)Ot(y.__webglFramebuffer[rt],w,rt);else{const rt=w.texture.mipmaps;rt&&rt.length>0?Ot(y.__webglFramebuffer[0],w,0):Ot(y.__webglFramebuffer,w,0)}else if(X){y.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[rt]),y.__webglDepthbuffer[rt]===void 0)y.__webglDepthbuffer[rt]=o.createRenderbuffer(),Ft(y.__webglDepthbuffer[rt],w,!1);else{const gt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=y.__webglDepthbuffer[rt];o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,ht)}}else{const rt=w.texture.mipmaps;if(rt&&rt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),Ft(y.__webglDepthbuffer,w,!1);else{const gt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,ht)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function at(w,y,X){const rt=r.get(w);y!==void 0&&Ct(rt.__webglFramebuffer,w,w.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),X!==void 0&&fe(w)}function Mt(w){const y=w.texture,X=r.get(w),rt=r.get(y);w.addEventListener("dispose",U);const gt=w.textures,ht=w.isWebGLCubeRenderTarget===!0,jt=gt.length>1;if(jt||(rt.__webglTexture===void 0&&(rt.__webglTexture=o.createTexture()),rt.__version=y.version,h.memory.textures++),ht){X.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[wt]=[];for(let Qt=0;Qt<y.mipmaps.length;Qt++)X.__webglFramebuffer[wt][Qt]=o.createFramebuffer()}else X.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let wt=0;wt<y.mipmaps.length;wt++)X.__webglFramebuffer[wt]=o.createFramebuffer()}else X.__webglFramebuffer=o.createFramebuffer();if(jt)for(let wt=0,Qt=gt.length;wt<Qt;wt++){const ce=r.get(gt[wt]);ce.__webglTexture===void 0&&(ce.__webglTexture=o.createTexture(),h.memory.textures++)}if(w.samples>0&&ye(w)===!1){X.__webglMultisampledFramebuffer=o.createFramebuffer(),X.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let wt=0;wt<gt.length;wt++){const Qt=gt[wt];X.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,X.__webglColorRenderbuffer[wt]);const ce=u.convert(Qt.format,Qt.colorSpace),At=u.convert(Qt.type),Dt=F(Qt.internalFormat,ce,At,Qt.colorSpace,w.isXRRenderTarget===!0),Wt=I(w);o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,Dt,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,X.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),w.depthBuffer&&(X.__webglDepthRenderbuffer=o.createRenderbuffer(),Ft(X.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ht){i.bindTexture(o.TEXTURE_CUBE_MAP,rt.__webglTexture),it(o.TEXTURE_CUBE_MAP,y);for(let wt=0;wt<6;wt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Qt=0;Qt<y.mipmaps.length;Qt++)Ct(X.__webglFramebuffer[wt][Qt],w,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Qt);else Ct(X.__webglFramebuffer[wt],w,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(y)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let wt=0,Qt=gt.length;wt<Qt;wt++){const ce=gt[wt],At=r.get(ce);let Dt=o.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Dt=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,At.__webglTexture),it(Dt,ce),Ct(X.__webglFramebuffer,w,ce,o.COLOR_ATTACHMENT0+wt,Dt,0),M(ce)&&x(Dt)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(wt=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,rt.__webglTexture),it(wt,y),y.mipmaps&&y.mipmaps.length>0)for(let Qt=0;Qt<y.mipmaps.length;Qt++)Ct(X.__webglFramebuffer[Qt],w,y,o.COLOR_ATTACHMENT0,wt,Qt);else Ct(X.__webglFramebuffer,w,y,o.COLOR_ATTACHMENT0,wt,0);M(y)&&x(wt),i.unbindTexture()}w.depthBuffer&&fe(w)}function Pt(w){const y=w.textures;for(let X=0,rt=y.length;X<rt;X++){const gt=y[X];if(M(gt)){const ht=B(w),jt=r.get(gt).__webglTexture;i.bindTexture(ht,jt),x(ht),i.unbindTexture()}}}const Jt=[],Lt=[];function re(w){if(w.samples>0){if(ye(w)===!1){const y=w.textures,X=w.width,rt=w.height;let gt=o.COLOR_BUFFER_BIT;const ht=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,jt=r.get(w),wt=y.length>1;if(wt)for(let ce=0;ce<y.length;ce++)i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ce,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ce,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const Qt=w.texture.mipmaps;Qt&&Qt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let ce=0;ce<y.length;ce++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(gt|=o.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(gt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,jt.__webglColorRenderbuffer[ce]);const At=r.get(y[ce]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,At,0)}o.blitFramebuffer(0,0,X,rt,0,0,X,rt,gt,o.NEAREST),m===!0&&(Jt.length=0,Lt.length=0,Jt.push(o.COLOR_ATTACHMENT0+ce),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Jt.push(ht),Lt.push(ht),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Lt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Jt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let ce=0;ce<y.length;ce++){i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ce,o.RENDERBUFFER,jt.__webglColorRenderbuffer[ce]);const At=r.get(y[ce]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ce,o.TEXTURE_2D,At,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const y=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function I(w){return Math.min(l.maxSamples,w.samples)}function ye(w){const y=r.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function le(w){const y=h.render.frame;g.get(w)!==y&&(g.set(w,y),w.update())}function Yt(w,y){const X=w.colorSpace,rt=w.format,gt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||X!==Us&&X!==Qa&&(we.getTransfer(X)===Xe?(rt!==Ai||gt!==ni)&&pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",X)),y}function Et(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=W,this.resetTextureUnits=K,this.setTexture2D=ct,this.setTexture2DArray=O,this.setTexture3D=P,this.setTextureCube=J,this.rebindTextures=at,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=ye,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function L1(o,e){function i(r,l=Qa){let u;const h=we.getTransfer(l);if(r===ni)return o.UNSIGNED_BYTE;if(r===Nd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Od)return o.UNSIGNED_SHORT_5_5_5_1;if(r===H_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===G_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===B_)return o.BYTE;if(r===I_)return o.SHORT;if(r===Ho)return o.UNSIGNED_SHORT;if(r===Ld)return o.INT;if(r===Hi)return o.UNSIGNED_INT;if(r===Pi)return o.FLOAT;if(r===ma)return o.HALF_FLOAT;if(r===V_)return o.ALPHA;if(r===X_)return o.RGB;if(r===Ai)return o.RGBA;if(r===ga)return o.DEPTH_COMPONENT;if(r===Cr)return o.DEPTH_STENCIL;if(r===k_)return o.RED;if(r===Pd)return o.RED_INTEGER;if(r===Ds)return o.RG;if(r===zd)return o.RG_INTEGER;if(r===Fd)return o.RGBA_INTEGER;if(r===Uc||r===Lc||r===Nc||r===Oc)if(h===Xe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Uc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Nc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Oc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Uc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Lc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Nc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Oc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jh||r===Zh||r===Kh||r===Qh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===jh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Kh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jh||r===$h||r===td||r===ed||r===nd||r===id||r===ad)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Jh||r===$h)return h===Xe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===td)return h===Xe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===ed)return u.COMPRESSED_R11_EAC;if(r===nd)return u.COMPRESSED_SIGNED_R11_EAC;if(r===id)return u.COMPRESSED_RG11_EAC;if(r===ad)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===rd||r===sd||r===od||r===ld||r===cd||r===ud||r===fd||r===hd||r===dd||r===pd||r===md||r===gd||r===_d||r===vd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===rd)return h===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sd)return h===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===od)return h===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ld)return h===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===cd)return h===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ud)return h===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fd)return h===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hd)return h===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dd)return h===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pd)return h===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===md)return h===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gd)return h===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_d)return h===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vd)return h===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xd||r===Sd||r===yd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===xd)return h===Xe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Sd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===yd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Md||r===Ed||r===bd||r===Td)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Md)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Ed)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Td)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Go?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const N1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class P1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new av(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Gi({vertexShader:N1,fragmentShader:O1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new va(new Xc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z1 extends Ns{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,S=null,E=null,R=null;const D=typeof XRWebGLBinding<"u",M=new P1,x={},B=i.getContextAttributes();let F=null,z=null;const H=[],L=[],U=new Be;let q=null;const b=new ei;b.viewport=new nn;const C=new ei;C.viewport=new nn;const G=[b,C],K=new qy;let W=null,pt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let dt=H[$];return dt===void 0&&(dt=new Th,H[$]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function($){let dt=H[$];return dt===void 0&&(dt=new Th,H[$]=dt),dt.getGripSpace()},this.getHand=function($){let dt=H[$];return dt===void 0&&(dt=new Th,H[$]=dt),dt.getHandSpace()};function ct($){const dt=L.indexOf($.inputSource);if(dt===-1)return;const Ct=H[dt];Ct!==void 0&&(Ct.update($.inputSource,$.frame,p||h),Ct.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",P);for(let $=0;$<H.length;$++){const dt=L[$];dt!==null&&(L[$]=null,H[$].disconnect(dt))}W=null,pt=null,M.reset();for(const $ in x)delete x[$];e.setRenderTarget(F),E=null,S=null,v=null,l=null,z=null,zt.stop(),r.isPresenting=!1,e.setPixelRatio(q),e.setSize(U.width,U.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){u=$,r.isPresenting===!0&&pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,r.isPresenting===!0&&pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return v===null&&D&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(F=e.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",O),l.addEventListener("inputsourceschange",P),B.xrCompatible!==!0&&await i.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(U),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Ft=null,Ot=null;B.depth&&(Ot=B.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ct=B.stencil?Cr:ga,Ft=B.stencil?Go:Hi);const fe={colorFormat:i.RGBA8,depthFormat:Ot,scaleFactor:u};v=this.getBinding(),S=v.createProjectionLayer(fe),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),z=new Bi(S.textureWidth,S.textureHeight,{format:Ai,type:ni,depthTexture:new Xo(S.textureWidth,S.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:B.stencil,colorSpace:e.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ct={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,Ct),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),z=new Bi(E.framebufferWidth,E.framebufferHeight,{format:Ai,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),zt.setContext(l),zt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function P($){for(let dt=0;dt<$.removed.length;dt++){const Ct=$.removed[dt],Ft=L.indexOf(Ct);Ft>=0&&(L[Ft]=null,H[Ft].disconnect(Ct))}for(let dt=0;dt<$.added.length;dt++){const Ct=$.added[dt];let Ft=L.indexOf(Ct);if(Ft===-1){for(let fe=0;fe<H.length;fe++)if(fe>=L.length){L.push(Ct),Ft=fe;break}else if(L[fe]===null){L[fe]=Ct,Ft=fe;break}if(Ft===-1)break}const Ot=H[Ft];Ot&&Ot.connect(Ct)}}const J=new nt,bt=new nt;function yt($,dt,Ct){J.setFromMatrixPosition(dt.matrixWorld),bt.setFromMatrixPosition(Ct.matrixWorld);const Ft=J.distanceTo(bt),Ot=dt.projectionMatrix.elements,fe=Ct.projectionMatrix.elements,at=Ot[14]/(Ot[10]-1),Mt=Ot[14]/(Ot[10]+1),Pt=(Ot[9]+1)/Ot[5],Jt=(Ot[9]-1)/Ot[5],Lt=(Ot[8]-1)/Ot[0],re=(fe[8]+1)/fe[0],I=at*Lt,ye=at*re,le=Ft/(-Lt+re),Yt=le*-Lt;if(dt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Yt),$.translateZ(le),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ot[10]===-1)$.projectionMatrix.copy(dt.projectionMatrix),$.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Et=at+le,w=Mt+le,y=I-Yt,X=ye+(Ft-Yt),rt=Pt*Mt/w*Et,gt=Jt*Mt/w*Et;$.projectionMatrix.makePerspective(y,X,rt,gt,Et,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function N($,dt){dt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(dt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let dt=$.near,Ct=$.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(Ct=M.depthFar)),K.near=C.near=b.near=dt,K.far=C.far=b.far=Ct,(W!==K.near||pt!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),W=K.near,pt=K.far),K.layers.mask=$.layers.mask|6,b.layers.mask=K.layers.mask&3,C.layers.mask=K.layers.mask&5;const Ft=$.parent,Ot=K.cameras;N(K,Ft);for(let fe=0;fe<Ot.length;fe++)N(Ot[fe],Ft);Ot.length===2?yt(K,b,C):K.projectionMatrix.copy(b.projectionMatrix),it($,K,Ft)};function it($,dt,Ct){Ct===null?$.matrix.copy(dt.matrixWorld):($.matrix.copy(Ct.matrixWorld),$.matrix.invert(),$.matrix.multiply(dt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(dt.projectionMatrix),$.projectionMatrixInverse.copy(dt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ad*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(S===null&&E===null))return m},this.setFoveation=function($){m=$,S!==null&&(S.fixedFoveation=$),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function($){return x[$]};let _t=null;function Rt($,dt){if(g=dt.getViewerPose(p||h),R=dt,g!==null){const Ct=g.views;E!==null&&(e.setRenderTargetFramebuffer(z,E.framebuffer),e.setRenderTarget(z));let Ft=!1;Ct.length!==K.cameras.length&&(K.cameras.length=0,Ft=!0);for(let Mt=0;Mt<Ct.length;Mt++){const Pt=Ct[Mt];let Jt=null;if(E!==null)Jt=E.getViewport(Pt);else{const re=v.getViewSubImage(S,Pt);Jt=re.viewport,Mt===0&&(e.setRenderTargetTextures(z,re.colorTexture,re.depthStencilTexture),e.setRenderTarget(z))}let Lt=G[Mt];Lt===void 0&&(Lt=new ei,Lt.layers.enable(Mt),Lt.viewport=new nn,G[Mt]=Lt),Lt.matrix.fromArray(Pt.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(Pt.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Mt===0&&(K.matrix.copy(Lt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ft===!0&&K.cameras.push(Lt)}const Ot=l.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){v=r.getBinding();const Mt=v.getDepthInformation(Ct[0]);Mt&&Mt.isValid&&Mt.texture&&M.init(Mt,l.renderState)}if(Ot&&Ot.includes("camera-access")&&D){e.state.unbindTexture(),v=r.getBinding();for(let Mt=0;Mt<Ct.length;Mt++){const Pt=Ct[Mt].camera;if(Pt){let Jt=x[Pt];Jt||(Jt=new av,x[Pt]=Jt);const Lt=v.getCameraImage(Pt);Jt.sourceTexture=Lt}}}}for(let Ct=0;Ct<H.length;Ct++){const Ft=L[Ct],Ot=H[Ct];Ft!==null&&Ot!==void 0&&Ot.update(Ft,dt,p||h)}_t&&_t($,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),R=null}const zt=new ov;zt.setAnimationLoop(Rt),this.setAnimationLoop=function($){_t=$},this.dispose=function(){}}}const Er=new _a,F1=new $e;function B1(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,$_(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,B,F,z){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(M,x):x.isMeshToonMaterial?(u(M,x),v(M,x)):x.isMeshPhongMaterial?(u(M,x),g(M,x)):x.isMeshStandardMaterial?(u(M,x),S(M,x),x.isMeshPhysicalMaterial&&E(M,x,z)):x.isMeshMatcapMaterial?(u(M,x),R(M,x)):x.isMeshDepthMaterial?u(M,x):x.isMeshDistanceMaterial?(u(M,x),D(M,x)):x.isMeshNormalMaterial?u(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?m(M,x,B,F):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Wn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Wn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const B=e.get(x),F=B.envMap,z=B.envMapRotation;F&&(M.envMap.value=F,Er.copy(z),Er.x*=-1,Er.y*=-1,Er.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),M.envMapRotation.value.setFromMatrix4(F1.makeRotationFromEuler(Er)),M.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,B,F){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*B,M.scale.value=F*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function v(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function S(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function E(M,x,B){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function R(M,x){x.matcap&&(M.matcap.value=x.matcap)}function D(M,x){const B=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function I1(o,e,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,F){const z=F.program;r.uniformBlockBinding(B,z)}function p(B,F){let z=l[B.id];z===void 0&&(R(B),z=g(B),l[B.id]=z,B.addEventListener("dispose",M));const H=F.program;r.updateUBOMapping(B,H);const L=e.render.frame;u[B.id]!==L&&(S(B),u[B.id]=L)}function g(B){const F=v();B.__bindingPointIndex=F;const z=o.createBuffer(),H=B.__size,L=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,z),o.bufferData(o.UNIFORM_BUFFER,H,L),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,F,z),z}function v(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(B){const F=l[B.id],z=B.uniforms,H=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,F);for(let L=0,U=z.length;L<U;L++){const q=Array.isArray(z[L])?z[L]:[z[L]];for(let b=0,C=q.length;b<C;b++){const G=q[b];if(E(G,L,b,H)===!0){const K=G.__offset,W=Array.isArray(G.value)?G.value:[G.value];let pt=0;for(let ct=0;ct<W.length;ct++){const O=W[ct],P=D(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,K+pt,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):(O.toArray(G.__data,pt),pt+=P.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,K,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(B,F,z,H){const L=B.value,U=F+"_"+z;if(H[U]===void 0)return typeof L=="number"||typeof L=="boolean"?H[U]=L:H[U]=L.clone(),!0;{const q=H[U];if(typeof L=="number"||typeof L=="boolean"){if(q!==L)return H[U]=L,!0}else if(q.equals(L)===!1)return q.copy(L),!0}return!1}function R(B){const F=B.uniforms;let z=0;const H=16;for(let U=0,q=F.length;U<q;U++){const b=Array.isArray(F[U])?F[U]:[F[U]];for(let C=0,G=b.length;C<G;C++){const K=b[C],W=Array.isArray(K.value)?K.value:[K.value];for(let pt=0,ct=W.length;pt<ct;pt++){const O=W[pt],P=D(O),J=z%H,bt=J%P.boundary,yt=J+bt;z+=bt,yt!==0&&H-yt<P.storage&&(z+=H-yt),K.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=z,z+=P.storage}}}const L=z%H;return L>0&&(z+=H-L),B.__size=z,B.__cache={},this}function D(B){const F={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(F.boundary=4,F.storage=4):B.isVector2?(F.boundary=8,F.storage=8):B.isVector3||B.isColor?(F.boundary=16,F.storage=12):B.isVector4?(F.boundary=16,F.storage=16):B.isMatrix3?(F.boundary=48,F.storage=48):B.isMatrix4?(F.boundary=64,F.storage=64):B.isTexture?pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):pe("WebGLRenderer: Unsupported uniform value type.",B),F}function M(B){const F=B.target;F.removeEventListener("dispose",M);const z=h.indexOf(F.__bindingPointIndex);h.splice(z,1),o.deleteBuffer(l[F.id]),delete l[F.id],delete u[F.id]}function x(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},u={}}return{bind:m,update:p,dispose:x}}const H1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ni=null;function G1(){return Ni===null&&(Ni=new Ny(H1,16,16,Ds,ma),Ni.name="DFG_LUT",Ni.minFilter=Nn,Ni.magFilter=Nn,Ni.wrapS=ha,Ni.wrapT=ha,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}class V1{constructor(e={}){const{canvas:i=sy(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:S=!1,outputBufferType:E=ni}=e;this.isWebGLRenderer=!0;let R;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=r.getContextAttributes().alpha}else R=h;const D=E,M=new Set([Fd,zd,Pd]),x=new Set([ni,Hi,Ho,Go,Nd,Od]),B=new Uint32Array(4),F=new Int32Array(4);let z=null,H=null;const L=[],U=[];let q=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let C=!1;this._outputColorSpace=pi;let G=0,K=0,W=null,pt=-1,ct=null;const O=new nn,P=new nn;let J=null;const bt=new De(0);let yt=0,N=i.width,it=i.height,_t=1,Rt=null,zt=null;const $=new nn(0,0,N,it),dt=new nn(0,0,N,it);let Ct=!1;const Ft=new Gd;let Ot=!1,fe=!1;const at=new $e,Mt=new nt,Pt=new nn,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function re(){return W===null?_t:1}let I=r;function ye(A,j){return i.getContext(A,j)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ud}`),i.addEventListener("webglcontextlost",ue,!1),i.addEventListener("webglcontextrestored",Ie,!1),i.addEventListener("webglcontextcreationerror",Ce,!1),I===null){const j="webgl2";if(I=ye(j,A),I===null)throw ye(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ne("WebGLRenderer: "+A.message),A}let le,Yt,Et,w,y,X,rt,gt,ht,jt,wt,Qt,ce,At,Dt,Wt,Xt,Bt,_e,Y,Ht,Ut,kt,Tt;function St(){le=new Gb(I),le.init(),Ut=new L1(I,le),Yt=new Lb(I,le,e,Ut),Et=new D1(I,le),Yt.reversedDepthBuffer&&S&&Et.buffers.depth.setReversed(!0),w=new kb(I),y=new m1,X=new U1(I,le,Et,y,Yt,Ut,w),rt=new Ob(b),gt=new Hb(b),ht=new jy(I),kt=new Db(I,ht),jt=new Vb(I,ht,w,kt),wt=new qb(I,jt,ht,w),_e=new Wb(I,Yt,X),Wt=new Nb(y),Qt=new p1(b,rt,gt,le,Yt,kt,Wt),ce=new B1(b,y),At=new _1,Dt=new E1(le),Bt=new wb(b,rt,gt,Et,wt,R,m),Xt=new C1(b,wt,Yt),Tt=new I1(I,w,Yt,Et),Y=new Ub(I,le,w),Ht=new Xb(I,le,w),w.programs=Qt.programs,b.capabilities=Yt,b.extensions=le,b.properties=y,b.renderLists=At,b.shadowMap=Xt,b.state=Et,b.info=w}St(),D!==ni&&(q=new jb(D,i.width,i.height,l,u));const Nt=new z1(b,I);this.xr=Nt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=le.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=le.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(A){A!==void 0&&(_t=A,this.setSize(N,it,!1))},this.getSize=function(A){return A.set(N,it)},this.setSize=function(A,j,ut=!0){if(Nt.isPresenting){pe("WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,it=j,i.width=Math.floor(A*_t),i.height=Math.floor(j*_t),ut===!0&&(i.style.width=A+"px",i.style.height=j+"px"),q!==null&&q.setSize(i.width,i.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(N*_t,it*_t).floor()},this.setDrawingBufferSize=function(A,j,ut){N=A,it=j,_t=ut,i.width=Math.floor(A*ut),i.height=Math.floor(j*ut),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(D===ni){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,j,ut,st){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,j,ut,st),Et.viewport(O.copy($).multiplyScalar(_t).round())},this.getScissor=function(A){return A.copy(dt)},this.setScissor=function(A,j,ut,st){A.isVector4?dt.set(A.x,A.y,A.z,A.w):dt.set(A,j,ut,st),Et.scissor(P.copy(dt).multiplyScalar(_t).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(A){Et.setScissorTest(Ct=A)},this.setOpaqueSort=function(A){Rt=A},this.setTransparentSort=function(A){zt=A},this.getClearColor=function(A){return A.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,ut=!0){let st=0;if(A){let Q=!1;if(W!==null){const It=W.texture.format;Q=M.has(It)}if(Q){const It=W.texture.type,qt=x.has(It),Gt=Bt.getClearColor(),Zt=Bt.getClearAlpha(),$t=Gt.r,ae=Gt.g,te=Gt.b;qt?(B[0]=$t,B[1]=ae,B[2]=te,B[3]=Zt,I.clearBufferuiv(I.COLOR,0,B)):(F[0]=$t,F[1]=ae,F[2]=te,F[3]=Zt,I.clearBufferiv(I.COLOR,0,F))}else st|=I.COLOR_BUFFER_BIT}j&&(st|=I.DEPTH_BUFFER_BIT),ut&&(st|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ue,!1),i.removeEventListener("webglcontextrestored",Ie,!1),i.removeEventListener("webglcontextcreationerror",Ce,!1),Bt.dispose(),At.dispose(),Dt.dispose(),y.dispose(),rt.dispose(),gt.dispose(),wt.dispose(),kt.dispose(),Tt.dispose(),Qt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",Ur),Nt.removeEventListener("sessionend",Fs),Ci.stop()};function ue(A){A.preventDefault(),Bg("WebGLRenderer: Context Lost."),C=!0}function Ie(){Bg("WebGLRenderer: Context Restored."),C=!1;const A=w.autoReset,j=Xt.enabled,ut=Xt.autoUpdate,st=Xt.needsUpdate,Q=Xt.type;St(),w.autoReset=A,Xt.enabled=j,Xt.autoUpdate=ut,Xt.needsUpdate=st,Xt.type=Q}function Ce(A){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function wn(A){const j=A.target;j.removeEventListener("dispose",wn),gi(j)}function gi(A){Zo(A),y.remove(A)}function Zo(A){const j=y.get(A).programs;j!==void 0&&(j.forEach(function(ut){Qt.releaseProgram(ut)}),A.isShaderMaterial&&Qt.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,ut,st,Q,It){j===null&&(j=Jt);const qt=Q.isMesh&&Q.matrixWorld.determinant()<0,Gt=tr(A,j,ut,st,Q);Et.setMaterial(st,qt);let Zt=ut.index,$t=1;if(st.wireframe===!0){if(Zt=jt.getWireframeAttribute(ut),Zt===void 0)return;$t=2}const ae=ut.drawRange,te=ut.attributes.position;let se=ae.start*$t,Oe=(ae.start+ae.count)*$t;It!==null&&(se=Math.max(se,It.start*$t),Oe=Math.min(Oe,(It.start+It.count)*$t)),Zt!==null?(se=Math.max(se,0),Oe=Math.min(Oe,Zt.count)):te!=null&&(se=Math.max(se,0),Oe=Math.min(Oe,te.count));const Qe=Oe-se;if(Qe<0||Qe===1/0)return;kt.setup(Q,st,Gt,ut,Zt);let je,Fe=Y;if(Zt!==null&&(je=ht.get(Zt),Fe=Ht,Fe.setIndex(je)),Q.isMesh)st.wireframe===!0?(Et.setLineWidth(st.wireframeLinewidth*re()),Fe.setMode(I.LINES)):Fe.setMode(I.TRIANGLES);else if(Q.isLine){let ne=st.linewidth;ne===void 0&&(ne=1),Et.setLineWidth(ne*re()),Q.isLineSegments?Fe.setMode(I.LINES):Q.isLineLoop?Fe.setMode(I.LINE_LOOP):Fe.setMode(I.LINE_STRIP)}else Q.isPoints?Fe.setMode(I.POINTS):Q.isSprite&&Fe.setMode(I.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Vo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Fe.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))Fe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const ne=Q._multiDrawStarts,Pe=Q._multiDrawCounts,he=Q._multiDrawCount,xn=Zt?ht.get(Zt).bytesPerElement:1,Vi=y.get(st).currentProgram.getUniforms();for(let Sn=0;Sn<he;Sn++)Vi.setValue(I,"_gl_DrawID",Sn),Fe.render(ne[Sn]/xn,Pe[Sn])}else if(Q.isInstancedMesh)Fe.renderInstances(se,Qe,Q.count);else if(ut.isInstancedBufferGeometry){const ne=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Pe=Math.min(ut.instanceCount,ne);Fe.renderInstances(se,Qe,Pe)}else Fe.render(se,Qe)};function Ps(A,j,ut){A.transparent===!0&&A.side===fa&&A.forceSinglePass===!1?(A.side=Wn,A.needsUpdate=!0,Nr(A,j,ut),A.side=$a,A.needsUpdate=!0,Nr(A,j,ut),A.side=fa):Nr(A,j,ut)}this.compile=function(A,j,ut=null){ut===null&&(ut=A),H=Dt.get(ut),H.init(j),U.push(H),ut.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(H.pushLight(Q),Q.castShadow&&H.pushShadow(Q))}),A!==ut&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(H.pushLight(Q),Q.castShadow&&H.pushShadow(Q))}),H.setupLights();const st=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const It=Q.material;if(It)if(Array.isArray(It))for(let qt=0;qt<It.length;qt++){const Gt=It[qt];Ps(Gt,ut,Q),st.add(Gt)}else Ps(It,ut,Q),st.add(It)}),H=U.pop(),st},this.compileAsync=function(A,j,ut=null){const st=this.compile(A,j,ut);return new Promise(Q=>{function It(){if(st.forEach(function(qt){y.get(qt).currentProgram.isReady()&&st.delete(qt)}),st.size===0){Q(A);return}setTimeout(It,10)}le.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Dr=null;function zs(A){Dr&&Dr(A)}function Ur(){Ci.stop()}function Fs(){Ci.start()}const Ci=new ov;Ci.setAnimationLoop(zs),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(A){Dr=A,Nt.setAnimationLoop(A),A===null?Ci.stop():Ci.start()},Nt.addEventListener("sessionstart",Ur),Nt.addEventListener("sessionend",Fs),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;const ut=Nt.enabled===!0&&Nt.isPresenting===!0,st=q!==null&&(W===null||ut)&&q.begin(b,W);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(j),j=Nt.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,j,W),H=Dt.get(A,U.length),H.init(j),U.push(H),at.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ft.setFromProjectionMatrix(at,zi,j.reversedDepth),fe=this.localClippingEnabled,Ot=Wt.init(this.clippingPlanes,fe),z=At.get(A,L.length),z.init(),L.push(z),Nt.enabled===!0&&Nt.isPresenting===!0){const qt=b.xr.getDepthSensingMesh();qt!==null&&ii(qt,j,-1/0,b.sortObjects)}ii(A,j,0,b.sortObjects),z.finish(),b.sortObjects===!0&&z.sort(Rt,zt),Lt=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,Lt&&Bt.addToRenderList(z,A),this.info.render.frame++,Ot===!0&&Wt.beginShadows();const Q=H.state.shadowsArray;if(Xt.render(Q,A,j),Ot===!0&&Wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&q.hasRenderPass())===!1){const qt=z.opaque,Gt=z.transmissive;if(H.setupLights(),j.isArrayCamera){const Zt=j.cameras;if(Gt.length>0)for(let $t=0,ae=Zt.length;$t<ae;$t++){const te=Zt[$t];vn(qt,Gt,A,te)}Lt&&Bt.render(A);for(let $t=0,ae=Zt.length;$t<ae;$t++){const te=Zt[$t];sn(z,A,te,te.viewport)}}else Gt.length>0&&vn(qt,Gt,A,j),Lt&&Bt.render(A),sn(z,A,j)}W!==null&&K===0&&(X.updateMultisampleRenderTarget(W),X.updateRenderTargetMipmap(W)),st&&q.end(b),A.isScene===!0&&A.onAfterRender(b,A,j),kt.resetDefaultState(),pt=-1,ct=null,U.pop(),U.length>0?(H=U[U.length-1],Ot===!0&&Wt.setGlobalState(b.clippingPlanes,H.state.camera)):H=null,L.pop(),L.length>0?z=L[L.length-1]:z=null};function ii(A,j,ut,st){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)ut=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)H.pushLight(A),A.castShadow&&H.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ft.intersectsSprite(A)){st&&Pt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(at);const qt=wt.update(A),Gt=A.material;Gt.visible&&z.push(A,qt,Gt,ut,Pt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ft.intersectsObject(A))){const qt=wt.update(A),Gt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pt.copy(A.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),Pt.copy(qt.boundingSphere.center)),Pt.applyMatrix4(A.matrixWorld).applyMatrix4(at)),Array.isArray(Gt)){const Zt=qt.groups;for(let $t=0,ae=Zt.length;$t<ae;$t++){const te=Zt[$t],se=Gt[te.materialIndex];se&&se.visible&&z.push(A,qt,se,ut,Pt.z,te)}}else Gt.visible&&z.push(A,qt,Gt,ut,Pt.z,null)}}const It=A.children;for(let qt=0,Gt=It.length;qt<Gt;qt++)ii(It[qt],j,ut,st)}function sn(A,j,ut,st){const{opaque:Q,transmissive:It,transparent:qt}=A;H.setupLightsView(ut),Ot===!0&&Wt.setGlobalState(b.clippingPlanes,ut),st&&Et.viewport(O.copy(st)),Q.length>0&&_i(Q,j,ut),It.length>0&&_i(It,j,ut),qt.length>0&&_i(qt,j,ut),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function vn(A,j,ut,st){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;if(H.state.transmissionRenderTarget[st.id]===void 0){const se=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");H.state.transmissionRenderTarget[st.id]=new Bi(1,1,{generateMipmaps:!0,type:se?ma:ni,minFilter:Rr,samples:Yt.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace})}const It=H.state.transmissionRenderTarget[st.id],qt=st.viewport||O;It.setSize(qt.z*b.transmissionResolutionScale,qt.w*b.transmissionResolutionScale);const Gt=b.getRenderTarget(),Zt=b.getActiveCubeFace(),$t=b.getActiveMipmapLevel();b.setRenderTarget(It),b.getClearColor(bt),yt=b.getClearAlpha(),yt<1&&b.setClearColor(16777215,.5),b.clear(),Lt&&Bt.render(ut);const ae=b.toneMapping;b.toneMapping=Fi;const te=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),H.setupLightsView(st),Ot===!0&&Wt.setGlobalState(b.clippingPlanes,st),_i(A,ut,st),X.updateMultisampleRenderTarget(It),X.updateRenderTargetMipmap(It),le.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let Oe=0,Qe=j.length;Oe<Qe;Oe++){const je=j[Oe],{object:Fe,geometry:ne,material:Pe,group:he}=je;if(Pe.side===fa&&Fe.layers.test(st.layers)){const xn=Pe.side;Pe.side=Wn,Pe.needsUpdate=!0,Lr(Fe,ut,st,ne,Pe,he),Pe.side=xn,Pe.needsUpdate=!0,se=!0}}se===!0&&(X.updateMultisampleRenderTarget(It),X.updateRenderTargetMipmap(It))}b.setRenderTarget(Gt,Zt,$t),b.setClearColor(bt,yt),te!==void 0&&(st.viewport=te),b.toneMapping=ae}function _i(A,j,ut){const st=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,It=A.length;Q<It;Q++){const qt=A[Q],{object:Gt,geometry:Zt,group:$t}=qt;let ae=qt.material;ae.allowOverride===!0&&st!==null&&(ae=st),Gt.layers.test(ut.layers)&&Lr(Gt,j,ut,Zt,ae,$t)}}function Lr(A,j,ut,st,Q,It){A.onBeforeRender(b,j,ut,st,Q,It),A.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(b,j,ut,st,A,It),Q.transparent===!0&&Q.side===fa&&Q.forceSinglePass===!1?(Q.side=Wn,Q.needsUpdate=!0,b.renderBufferDirect(ut,j,st,Q,A,It),Q.side=$a,Q.needsUpdate=!0,b.renderBufferDirect(ut,j,st,Q,A,It),Q.side=fa):b.renderBufferDirect(ut,j,st,Q,A,It),A.onAfterRender(b,j,ut,st,Q,It)}function Nr(A,j,ut){j.isScene!==!0&&(j=Jt);const st=y.get(A),Q=H.state.lights,It=H.state.shadowsArray,qt=Q.state.version,Gt=Qt.getParameters(A,Q.state,It,j,ut),Zt=Qt.getProgramCacheKey(Gt);let $t=st.programs;st.environment=A.isMeshStandardMaterial?j.environment:null,st.fog=j.fog,st.envMap=(A.isMeshStandardMaterial?gt:rt).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",wn),$t=new Map,st.programs=$t);let ae=$t.get(Zt);if(ae!==void 0){if(st.currentProgram===ae&&st.lightsStateVersion===qt)return Bs(A,Gt),ae}else Gt.uniforms=Qt.getUniforms(A),A.onBeforeCompile(Gt,b),ae=Qt.acquireProgram(Gt,Zt),$t.set(Zt,ae),st.uniforms=Gt.uniforms;const te=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(te.clippingPlanes=Wt.uniform),Bs(A,Gt),st.needsLights=xa(A),st.lightsStateVersion=qt,st.needsLights&&(te.ambientLightColor.value=Q.state.ambient,te.lightProbe.value=Q.state.probe,te.directionalLights.value=Q.state.directional,te.directionalLightShadows.value=Q.state.directionalShadow,te.spotLights.value=Q.state.spot,te.spotLightShadows.value=Q.state.spotShadow,te.rectAreaLights.value=Q.state.rectArea,te.ltc_1.value=Q.state.rectAreaLTC1,te.ltc_2.value=Q.state.rectAreaLTC2,te.pointLights.value=Q.state.point,te.pointLightShadows.value=Q.state.pointShadow,te.hemisphereLights.value=Q.state.hemi,te.directionalShadowMap.value=Q.state.directionalShadowMap,te.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,te.spotShadowMap.value=Q.state.spotShadowMap,te.spotLightMatrix.value=Q.state.spotLightMatrix,te.spotLightMap.value=Q.state.spotLightMap,te.pointShadowMap.value=Q.state.pointShadowMap,te.pointShadowMatrix.value=Q.state.pointShadowMatrix),st.currentProgram=ae,st.uniformsList=null,ae}function Ko(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Pc.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Bs(A,j){const ut=y.get(A);ut.outputColorSpace=j.outputColorSpace,ut.batching=j.batching,ut.batchingColor=j.batchingColor,ut.instancing=j.instancing,ut.instancingColor=j.instancingColor,ut.instancingMorph=j.instancingMorph,ut.skinning=j.skinning,ut.morphTargets=j.morphTargets,ut.morphNormals=j.morphNormals,ut.morphColors=j.morphColors,ut.morphTargetsCount=j.morphTargetsCount,ut.numClippingPlanes=j.numClippingPlanes,ut.numIntersection=j.numClipIntersection,ut.vertexAlphas=j.vertexAlphas,ut.vertexTangents=j.vertexTangents,ut.toneMapping=j.toneMapping}function tr(A,j,ut,st,Q){j.isScene!==!0&&(j=Jt),X.resetTextureUnits();const It=j.fog,qt=st.isMeshStandardMaterial?j.environment:null,Gt=W===null?b.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Us,Zt=(st.isMeshStandardMaterial?gt:rt).get(st.envMap||qt),$t=st.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,ae=!!ut.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),te=!!ut.morphAttributes.position,se=!!ut.morphAttributes.normal,Oe=!!ut.morphAttributes.color;let Qe=Fi;st.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Qe=b.toneMapping);const je=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Fe=je!==void 0?je.length:0,ne=y.get(st),Pe=H.state.lights;if(Ot===!0&&(fe===!0||A!==ct)){const Mn=A===ct&&st.id===pt;Wt.setState(st,A,Mn)}let he=!1;st.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Pe.state.version||ne.outputColorSpace!==Gt||Q.isBatchedMesh&&ne.batching===!1||!Q.isBatchedMesh&&ne.batching===!0||Q.isBatchedMesh&&ne.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&ne.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&ne.instancing===!1||!Q.isInstancedMesh&&ne.instancing===!0||Q.isSkinnedMesh&&ne.skinning===!1||!Q.isSkinnedMesh&&ne.skinning===!0||Q.isInstancedMesh&&ne.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ne.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&ne.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&ne.instancingMorph===!1&&Q.morphTexture!==null||ne.envMap!==Zt||st.fog===!0&&ne.fog!==It||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==Wt.numPlanes||ne.numIntersection!==Wt.numIntersection)||ne.vertexAlphas!==$t||ne.vertexTangents!==ae||ne.morphTargets!==te||ne.morphNormals!==se||ne.morphColors!==Oe||ne.toneMapping!==Qe||ne.morphTargetsCount!==Fe)&&(he=!0):(he=!0,ne.__version=st.version);let xn=ne.currentProgram;he===!0&&(xn=Nr(st,j,Q));let Vi=!1,Sn=!1,ai=!1;const He=xn.getUniforms(),yn=ne.uniforms;if(Et.useProgram(xn.program)&&(Vi=!0,Sn=!0,ai=!0),st.id!==pt&&(pt=st.id,Sn=!0),Vi||ct!==A){Et.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),He.setValue(I,"projectionMatrix",A.projectionMatrix),He.setValue(I,"viewMatrix",A.matrixWorldInverse);const En=He.map.cameraPosition;En!==void 0&&En.setValue(I,Mt.setFromMatrixPosition(A.matrixWorld)),Yt.logarithmicDepthBuffer&&He.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&He.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),ct!==A&&(ct=A,Sn=!0,ai=!0)}if(ne.needsLights&&(Pe.state.directionalShadowMap.length>0&&He.setValue(I,"directionalShadowMap",Pe.state.directionalShadowMap,X),Pe.state.spotShadowMap.length>0&&He.setValue(I,"spotShadowMap",Pe.state.spotShadowMap,X),Pe.state.pointShadowMap.length>0&&He.setValue(I,"pointShadowMap",Pe.state.pointShadowMap,X)),Q.isSkinnedMesh){He.setOptional(I,Q,"bindMatrix"),He.setOptional(I,Q,"bindMatrixInverse");const Mn=Q.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),He.setValue(I,"boneTexture",Mn.boneTexture,X))}Q.isBatchedMesh&&(He.setOptional(I,Q,"batchingTexture"),He.setValue(I,"batchingTexture",Q._matricesTexture,X),He.setOptional(I,Q,"batchingIdTexture"),He.setValue(I,"batchingIdTexture",Q._indirectTexture,X),He.setOptional(I,Q,"batchingColorTexture"),Q._colorsTexture!==null&&He.setValue(I,"batchingColorTexture",Q._colorsTexture,X));const hn=ut.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&_e.update(Q,ut,xn),(Sn||ne.receiveShadow!==Q.receiveShadow)&&(ne.receiveShadow=Q.receiveShadow,He.setValue(I,"receiveShadow",Q.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(yn.envMap.value=Zt,yn.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&j.environment!==null&&(yn.envMapIntensity.value=j.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=G1()),Sn&&(He.setValue(I,"toneMappingExposure",b.toneMappingExposure),ne.needsLights&&Is(yn,ai),It&&st.fog===!0&&ce.refreshFogUniforms(yn,It),ce.refreshMaterialUniforms(yn,st,_t,it,H.state.transmissionRenderTarget[A.id]),Pc.upload(I,Ko(ne),yn,X)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Pc.upload(I,Ko(ne),yn,X),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&He.setValue(I,"center",Q.center),He.setValue(I,"modelViewMatrix",Q.modelViewMatrix),He.setValue(I,"normalMatrix",Q.normalMatrix),He.setValue(I,"modelMatrix",Q.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Mn=st.uniformsGroups;for(let En=0,Or=Mn.length;En<Or;En++){const vi=Mn[En];Tt.update(vi,xn),Tt.bind(vi,xn)}}return xn}function Is(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function xa(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,j,ut){const st=y.get(A);st.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),y.get(A.texture).__webglTexture=j,y.get(A.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ut,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const ut=y.get(A);ut.__webglFramebuffer=j,ut.__useDefaultFramebuffer=j===void 0};const Sa=I.createFramebuffer();this.setRenderTarget=function(A,j=0,ut=0){W=A,G=j,K=ut;let st=null,Q=!1,It=!1;if(A){const Gt=y.get(A);if(Gt.__useDefaultFramebuffer!==void 0){Et.bindFramebuffer(I.FRAMEBUFFER,Gt.__webglFramebuffer),O.copy(A.viewport),P.copy(A.scissor),J=A.scissorTest,Et.viewport(O),Et.scissor(P),Et.setScissorTest(J),pt=-1;return}else if(Gt.__webglFramebuffer===void 0)X.setupRenderTarget(A);else if(Gt.__hasExternalTextures)X.rebindTextures(A,y.get(A.texture).__webglTexture,y.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ae=A.depthTexture;if(Gt.__boundDepthTexture!==ae){if(ae!==null&&y.has(ae)&&(A.width!==ae.image.width||A.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(A)}}const Zt=A.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(It=!0);const $t=y.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($t[j])?st=$t[j][ut]:st=$t[j],Q=!0):A.samples>0&&X.useMultisampledRTT(A)===!1?st=y.get(A).__webglMultisampledFramebuffer:Array.isArray($t)?st=$t[ut]:st=$t,O.copy(A.viewport),P.copy(A.scissor),J=A.scissorTest}else O.copy($).multiplyScalar(_t).floor(),P.copy(dt).multiplyScalar(_t).floor(),J=Ct;if(ut!==0&&(st=Sa),Et.bindFramebuffer(I.FRAMEBUFFER,st)&&Et.drawBuffers(A,st),Et.viewport(O),Et.scissor(P),Et.setScissorTest(J),Q){const Gt=y.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+j,Gt.__webglTexture,ut)}else if(It){const Gt=j;for(let Zt=0;Zt<A.textures.length;Zt++){const $t=y.get(A.textures[Zt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Zt,$t.__webglTexture,ut,Gt)}}else if(A!==null&&ut!==0){const Gt=y.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Gt.__webglTexture,ut)}pt=-1},this.readRenderTargetPixels=function(A,j,ut,st,Q,It,qt,Gt=0){if(!(A&&A.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qt!==void 0&&(Zt=Zt[qt]),Zt){Et.bindFramebuffer(I.FRAMEBUFFER,Zt);try{const $t=A.textures[Gt],ae=$t.format,te=$t.type;if(!Yt.textureFormatReadable(ae)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(te)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-st&&ut>=0&&ut<=A.height-Q&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Gt),I.readPixels(j,ut,st,Q,Ut.convert(ae),Ut.convert(te),It))}finally{const $t=W!==null?y.get(W).__webglFramebuffer:null;Et.bindFramebuffer(I.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(A,j,ut,st,Q,It,qt,Gt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qt!==void 0&&(Zt=Zt[qt]),Zt)if(j>=0&&j<=A.width-st&&ut>=0&&ut<=A.height-Q){Et.bindFramebuffer(I.FRAMEBUFFER,Zt);const $t=A.textures[Gt],ae=$t.format,te=$t.type;if(!Yt.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,se),I.bufferData(I.PIXEL_PACK_BUFFER,It.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Gt),I.readPixels(j,ut,st,Q,Ut.convert(ae),Ut.convert(te),0);const Oe=W!==null?y.get(W).__webglFramebuffer:null;Et.bindFramebuffer(I.FRAMEBUFFER,Oe);const Qe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await oy(I,Qe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,se),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,It),I.deleteBuffer(se),I.deleteSync(Qe),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,ut=0){const st=Math.pow(2,-ut),Q=Math.floor(A.image.width*st),It=Math.floor(A.image.height*st),qt=j!==null?j.x:0,Gt=j!==null?j.y:0;X.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,ut,0,0,qt,Gt,Q,It),Et.unbindTexture()};const er=I.createFramebuffer(),ya=I.createFramebuffer();this.copyTextureToTexture=function(A,j,ut=null,st=null,Q=0,It=null){It===null&&(Q!==0?(Vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),It=Q,Q=0):It=0);let qt,Gt,Zt,$t,ae,te,se,Oe,Qe;const je=A.isCompressedTexture?A.mipmaps[It]:A.image;if(ut!==null)qt=ut.max.x-ut.min.x,Gt=ut.max.y-ut.min.y,Zt=ut.isBox3?ut.max.z-ut.min.z:1,$t=ut.min.x,ae=ut.min.y,te=ut.isBox3?ut.min.z:0;else{const hn=Math.pow(2,-Q);qt=Math.floor(je.width*hn),Gt=Math.floor(je.height*hn),A.isDataArrayTexture?Zt=je.depth:A.isData3DTexture?Zt=Math.floor(je.depth*hn):Zt=1,$t=0,ae=0,te=0}st!==null?(se=st.x,Oe=st.y,Qe=st.z):(se=0,Oe=0,Qe=0);const Fe=Ut.convert(j.format),ne=Ut.convert(j.type);let Pe;j.isData3DTexture?(X.setTexture3D(j,0),Pe=I.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(X.setTexture2DArray(j,0),Pe=I.TEXTURE_2D_ARRAY):(X.setTexture2D(j,0),Pe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,j.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,j.unpackAlignment);const he=I.getParameter(I.UNPACK_ROW_LENGTH),xn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Vi=I.getParameter(I.UNPACK_SKIP_PIXELS),Sn=I.getParameter(I.UNPACK_SKIP_ROWS),ai=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,je.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,je.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$t),I.pixelStorei(I.UNPACK_SKIP_ROWS,ae),I.pixelStorei(I.UNPACK_SKIP_IMAGES,te);const He=A.isDataArrayTexture||A.isData3DTexture,yn=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const hn=y.get(A),Mn=y.get(j),En=y.get(hn.__renderTarget),Or=y.get(Mn.__renderTarget);Et.bindFramebuffer(I.READ_FRAMEBUFFER,En.__webglFramebuffer),Et.bindFramebuffer(I.DRAW_FRAMEBUFFER,Or.__webglFramebuffer);for(let vi=0;vi<Zt;vi++)He&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,y.get(A).__webglTexture,Q,te+vi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,y.get(j).__webglTexture,It,Qe+vi)),I.blitFramebuffer($t,ae,qt,Gt,se,Oe,qt,Gt,I.DEPTH_BUFFER_BIT,I.NEAREST);Et.bindFramebuffer(I.READ_FRAMEBUFFER,null),Et.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||y.has(A)){const hn=y.get(A),Mn=y.get(j);Et.bindFramebuffer(I.READ_FRAMEBUFFER,er),Et.bindFramebuffer(I.DRAW_FRAMEBUFFER,ya);for(let En=0;En<Zt;En++)He?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,hn.__webglTexture,Q,te+En):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,hn.__webglTexture,Q),yn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mn.__webglTexture,It,Qe+En):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Mn.__webglTexture,It),Q!==0?I.blitFramebuffer($t,ae,qt,Gt,se,Oe,qt,Gt,I.COLOR_BUFFER_BIT,I.NEAREST):yn?I.copyTexSubImage3D(Pe,It,se,Oe,Qe+En,$t,ae,qt,Gt):I.copyTexSubImage2D(Pe,It,se,Oe,$t,ae,qt,Gt);Et.bindFramebuffer(I.READ_FRAMEBUFFER,null),Et.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else yn?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Pe,It,se,Oe,Qe,qt,Gt,Zt,Fe,ne,je.data):j.isCompressedArrayTexture?I.compressedTexSubImage3D(Pe,It,se,Oe,Qe,qt,Gt,Zt,Fe,je.data):I.texSubImage3D(Pe,It,se,Oe,Qe,qt,Gt,Zt,Fe,ne,je):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,It,se,Oe,qt,Gt,Fe,ne,je.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,It,se,Oe,je.width,je.height,Fe,je.data):I.texSubImage2D(I.TEXTURE_2D,It,se,Oe,qt,Gt,Fe,ne,je);I.pixelStorei(I.UNPACK_ROW_LENGTH,he),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Vi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Sn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ai),It===0&&j.generateMipmaps&&I.generateMipmap(Pe),Et.unbindTexture()},this.initRenderTarget=function(A){y.get(A).__webglFramebuffer===void 0&&X.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?X.setTextureCube(A,0):A.isData3DTexture?X.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?X.setTexture2DArray(A,0):X.setTexture2D(A,0),Et.unbindTexture()},this.resetState=function(){G=0,K=0,W=null,Et.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(e),i.unpackColorSpace=we._getUnpackColorSpace()}}const X1=()=>{const o=de.useRef(null),e=de.useRef(null);de.useRef(0);const i=de.useRef([]);de.useRef(null);const[r,l]=de.useState(!0),[u,h]=de.useState([]),[d,m]=de.useState(!1),p={speed:.25,persistence:2,pathWeight:1.8,shapeScale:1,cameraSpeed:0,rotationSpeed:.5,epicycles:0,zoom:100,spread:600,delay:.5,displayDuration:1},[g,v]=de.useState(p),S=de.useRef(g);de.useEffect(()=>{S.current=g},[g]);const E=(L=512,U=120)=>{const q=[];for(let b=0;b<L;b++){const C=b/L*Math.PI*2,G=(Math.sin(C)+2*Math.sin(2*C))/3,K=(Math.cos(C)-2*Math.cos(2*C))/3,W=-Math.sin(3*C)/3;q.push(new nt(G*U,K*U,W*U))}return q},R=(L=512,U=120)=>{const q=[];for(let b=0;b<L;b++){const C=b/L*Math.PI*2,G=U*Math.sin(3*C+Math.PI/2),K=U*Math.sin(2*C),W=U*Math.sin(5*C);q.push(new nt(G,K,W))}return q},D=(L=512,U=120)=>{const q=[];for(let G=0;G<L;G++){const K=G/L*Math.PI*2*5,W=U*Math.cos(2*K/5)*(1+.5*Math.cos(5*K/5))/1.5,pt=U*Math.sin(2*K/5)*(1+.5*Math.cos(5*K/5))/1.5,ct=U*.5*Math.sin(5*K/5)/1.5;q.push(new nt(W,pt,ct))}return q},M=(L=512,U=120)=>{const q=[];for(let C=0;C<L;C++){const G=C/L*Math.PI*2*4,K=U*.5*Math.cos(G),W=U*.5*Math.sin(G),pt=U*(C/L-.5);q.push(new nt(K,W,pt))}return q},x=(L=512,U=120)=>{const q=[];for(let b=0;b<L;b++){const C=b/L*Math.PI*12,G=Math.exp(Math.cos(C))-2*Math.cos(4*C)-Math.pow(Math.sin(C/12),5),K=U*.3*G*Math.sin(C),W=U*.3*G*Math.cos(C),pt=U*.2*Math.sin(C*2);q.push(new nt(K,W,pt))}return q},B=(L=512,U=120)=>{const q=[];for(let C=0;C<L;C++){const G=C/L*Math.PI,K=16*Math.PI*(C/L),W=U*.5*Math.sin(G)*Math.cos(K),pt=U*.5*Math.sin(G)*Math.sin(K),ct=U*.5*Math.cos(G);q.push(new nt(W,pt,ct))}return q},F=(L,U,q=0,b=0)=>{let C=0;const G=b>0?Math.min(L.length,b):L.length;for(let K=0;K<G;K++){const{freq:W,amp:pt,phase:ct}=L[K];C+=pt*Math.cos(W*U+ct+q)}return C},z=L=>{const U=e.current;if(!U||!L.objects)return;const{trailLine:q,trailGeom:b,trailMat:C,seedLine:G,seedGeom:K,seedMat:W}=L.objects;U.remove(q),U.remove(G),b.dispose(),C.dispose(),K.dispose(),W.dispose()},H=L=>{const U=e.current;if(!U)return;const q=150*S.current.shapeScale;let b=[];L==="knot"?b=E(256,q):L==="torusknot25"?b=D(256,q):L==="helix"?b=M(256,q):L==="butterfly"?b=x(256,q):L==="spherical"?b=B(256,q):b=R(256,q);const C=b.map(Ot=>({re:Ot.x,im:0})),G=b.map(Ot=>({re:Ot.y,im:0})),K=b.map(Ot=>({re:Ot.z,im:0})),W=wc(C).sort((Ot,fe)=>fe.amp-Ot.amp),pt=wc(G).sort((Ot,fe)=>fe.amp-Ot.amp),ct=wc(K).sort((Ot,fe)=>fe.amp-Ot.amp),O=["#ffffff","#00ffff","#ff00ff","#ffff00","#00ff00"],P=(i.current.length+1)%4===0,J=Math.random()*360;let bt;P?bt=new De(O[Math.floor(Math.random()*O.length)]):bt=new De(`hsl(${J}, 100%, 65%)`);const yt=1e4,N=new mi;N.setAttribute("position",new Ri(new Float32Array(yt*3),3)),N.setDrawRange(0,0);const it=new Rd({color:bt,linewidth:1,transparent:!0,opacity:S.current.pathWeight/5}),_t=new iv(N,it);_t.frustumCulled=!1,U.add(_t);const Rt=new mi().setFromPoints(b),zt=new Rd({color:16776960,linewidth:2,transparent:!0,opacity:.5}),$=new Fy(Rt,zt),dt=S.current.spread,Ct={x:(Math.random()-.5)*dt,y:(Math.random()-.5)*dt,z:(Math.random()-.5)*dt};$.position.set(Ct.x,Ct.y,Ct.z),U.add($);const Ft={id:Date.now(),fX:W,fY:pt,fZ:ct,time:0,trail:[],center:Ct,hue:J,reversed:Math.random()<.5,objects:{trailLine:_t,trailGeom:N,trailMat:it,seedLine:$,seedGeom:Rt,seedMat:zt},delayProgress:0};if(setTimeout(()=>{$.visible=!1},S.current.displayDuration*1e3),i.current.length>=24){const Ot=i.current[0];z(Ot),i.current=i.current.slice(1)}i.current=[...i.current,Ft],h([...i.current])};return de.useEffect(()=>{if(!o.current)return;for(;o.current.firstChild;)o.current.removeChild(o.current.firstChild);i.current=[],h([]);const L=new Ly;L.background=new De(131589),e.current=L;const U=new ei(75,window.innerWidth/window.innerHeight,1,2e4);U.position.set(0,0,100),U.lookAt(0,0,0);let q=new nt(Math.random()-.5,Math.random()-.5,0).normalize(),b=0;const C=new V1({antialias:!0,alpha:!0});C.setSize(window.innerWidth,window.innerHeight),C.setPixelRatio(window.devicePixelRatio),o.current.appendChild(C.domElement),L.add(new Wy(4210752,3));const G=new ky(16777215,2);G.position.set(500,500,500),L.add(G);const K=["lissajous","knot","torusknot25","helix","butterfly","spherical"];for(let O=0;O<24;O++)H(K[Math.floor(Math.random()*K.length)]);let W;const pt=()=>{W=requestAnimationFrame(pt);const O=S.current;if(i.current.forEach(P=>{if(P.delayProgress<O.delay){P.delayProgress+=1/60;return}const J=Math.PI*2/P.fX.length,bt=(P.reversed?-1:1)*J*O.speed;P.time=(P.time+bt+Math.PI*2)%(Math.PI*2);const yt=O.epicycles>0?O.epicycles:P.fX.length,N=F(P.fX,P.time,Math.PI/2,yt),it=F(P.fY,P.time,Math.PI/2,yt),_t=F(P.fZ,P.time,Math.PI/2,yt),Rt=new nt(N+P.center.x,it+P.center.y,_t+P.center.z);P.trail.push(Rt);const zt=Math.floor(P.fX.length*O.persistence);for(;P.trail.length>zt;)P.trail.shift();const $=P.objects.trailGeom.attributes.position.array,dt=P.trail.length;for(let Ct=0;Ct<dt;Ct++){const Ft=P.trail[Ct];$[Ct*3]=Ft.x,$[Ct*3+1]=Ft.y,$[Ct*3+2]=Ft.z}P.objects.trailLine.geometry.setDrawRange(0,dt),P.objects.trailLine.geometry.attributes.position.needsUpdate=!0,P.objects.trailMat.opacity=O.pathWeight/5}),O.cameraSpeed!==0){const P=Date.now()*5e-4*O.cameraSpeed,J=O.zoom===0?.1:O.zoom;U.position.x=Math.cos(P)*J,U.position.z=Math.sin(P)*J,U.position.y=Math.sin(P*.5)*(Math.abs(J)*.3)+Math.abs(J)*.5,U.lookAt(0,0,0)}else{const P=O.zoom===0?.1:O.zoom,J=U.position.clone().normalize();U.position.copy(J.multiplyScalar(P))}if(O.rotationSpeed!==0){const P=.005*O.rotationSpeed;b+=Math.abs(P),b>=Math.PI*4&&(q=new nt(Math.random()-.5,Math.random()-.5,0).normalize(),b=0),U.rotateOnAxis(q,P)}C.render(L,U)};pt();const ct=()=>{U.aspect=window.innerWidth/window.innerHeight,U.updateProjectionMatrix(),C.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",ct),()=>{window.removeEventListener("resize",ct),cancelAnimationFrame(W),i.current.forEach(z),C.dispose()}},[]),lt.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden",background:"#000"},children:[lt.jsx("div",{ref:o,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0}}),lt.jsxs("div",{style:{position:"absolute",top:"20px",left:"20px",color:"white",zIndex:9999,pointerEvents:"none",textShadow:"0 0 10px rgba(0,0,0,0.5)"},children:[lt.jsx("h1",{style:{margin:0,fontSize:"1.5rem",fontWeight:700,letterSpacing:"2px",color:"#00f2ff"},children:"3D Fourier"}),lt.jsx("p",{style:{margin:0,opacity:.8,fontWeight:300},children:"Multi-instance harmonic synthesis"})]}),lt.jsx("button",{className:"mobile-settings-toggle",onClick:()=>m(!d),style:{display:"none",position:"absolute",top:"20px",right:"20px",background:"rgba(0, 242, 255, 0.2)",border:"1px solid rgba(0, 242, 255, 0.5)",color:"white",padding:"10px 14px",borderRadius:"8px",fontSize:"1.2rem",cursor:"pointer",zIndex:1e4},children:d?"✕":"☰"}),lt.jsxs("div",{className:`settings-panel-3d ${d?"mobile-open":""}`,style:{position:"absolute",top:"60px",right:"20px",width:"280px",background:"rgba(10, 10, 20, 0.85)",backdropFilter:"blur(12px)",borderRadius:"16px",padding:"20px",border:"1px solid rgba(255, 255, 255, 0.1)",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.5)",color:"white",zIndex:9999},children:[lt.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0 0 16px 0",borderBottom:"1px solid rgba(255,255,255,0.1)",paddingBottom:"8px"},children:[lt.jsx("h3",{style:{margin:0,fontSize:"1rem"},children:"Visual Settings"}),lt.jsx("button",{onClick:()=>v(p),style:{background:"rgba(255, 100, 100, 0.3)",border:"1px solid rgba(255, 100, 100, 0.5)",color:"white",padding:"4px 8px",borderRadius:"6px",fontSize:"0.7rem",cursor:"pointer"},children:"Reset"})]}),lt.jsxs("div",{style:{marginBottom:"16px"},children:[lt.jsxs("label",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.8rem",marginBottom:"4px"},children:[lt.jsx("span",{children:"Geometric Detail"}),lt.jsx("span",{style:{color:"#00f2ff"},children:g.epicycles})]}),lt.jsx("input",{type:"range",min:"1",max:"256",step:"1",value:g.epicycles,onChange:L=>v(U=>({...U,epicycles:parseInt(L.target.value)})),style:{width:"100%",accentColor:"#00f2ff"}})]}),lt.jsxs("div",{style:{marginBottom:"16px"},children:[lt.jsxs("label",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.8rem",marginBottom:"4px"},children:[lt.jsx("span",{children:"Flow Speed"}),lt.jsxs("span",{style:{color:"#00f2ff"},children:[g.speed.toFixed(2),"x"]})]}),lt.jsx("input",{type:"range",min:"0.01",max:"0.5",step:"0.01",value:g.speed,onChange:L=>v(U=>({...U,speed:parseFloat(L.target.value)})),style:{width:"100%",accentColor:"#00f2ff"}})]}),lt.jsxs("div",{style:{marginBottom:"16px"},children:[lt.jsxs("label",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.8rem",marginBottom:"4px"},children:[lt.jsx("span",{children:"Persistence"}),lt.jsxs("span",{style:{color:"#00f2ff"},children:[g.persistence.toFixed(1),"x"]})]}),lt.jsx("input",{type:"range",min:"0.5",max:"5",step:"0.1",value:g.persistence,onChange:L=>v(U=>({...U,persistence:parseFloat(L.target.value)})),style:{width:"100%",accentColor:"#00f2ff"}})]}),lt.jsxs("div",{style:{marginBottom:"16px"},children:[lt.jsxs("label",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.8rem",marginBottom:"4px"},children:[lt.jsx("span",{children:"Path Intensity"}),lt.jsx("span",{style:{color:"#00f2ff"},children:g.pathWeight})]}),lt.jsx("input",{type:"range",min:"1",max:"5",step:"0.5",value:g.pathWeight,onChange:L=>v(U=>({...U,pathWeight:parseFloat(L.target.value)})),style:{width:"100%",accentColor:"#00f2ff"}})]}),lt.jsxs("div",{style:{marginBottom:"16px"},children:[lt.jsxs("label",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.8rem",marginBottom:"4px"},children:[lt.jsx("span",{children:"Shape Scale"}),lt.jsxs("span",{style:{color:"#00f2ff"},children:[(g.shapeScale*100).toFixed(0),"%"]})]}),lt.jsx("input",{type:"range",min:"0.5",max:"2",step:"0.1",value:g.shapeScale,onChange:L=>v(U=>({...U,shapeScale:parseFloat(L.target.value)})),style:{width:"100%",accentColor:"#00f2ff"}})]}),lt.jsxs("div",{style:{marginBottom:"16px"},children:[lt.jsxs("label",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.8rem",marginBottom:"4px"},children:[lt.jsx("span",{children:"Spatial Spread"}),lt.jsxs("span",{style:{color:"#00f2ff"},children:[g.spread,"px"]})]}),lt.jsx("input",{type:"range",min:"0",max:"2500",step:"10",value:g.spread,onChange:L=>v(U=>({...U,spread:parseInt(L.target.value)})),style:{width:"100%",accentColor:"#00f2ff"}})]}),lt.jsxs("div",{style:{marginBottom:"16px"},children:[lt.jsxs("label",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.8rem",marginBottom:"4px"},children:[lt.jsx("span",{children:"Sequence Delay"}),lt.jsxs("span",{style:{color:"#00f2ff"},children:[g.delay.toFixed(1),"s"]})]}),lt.jsx("input",{type:"range",min:"0",max:"5",step:"0.1",value:g.delay,onChange:L=>v(U=>({...U,delay:parseFloat(L.target.value)})),style:{width:"100%",accentColor:"#00f2ff"}})]}),lt.jsxs("div",{style:{marginBottom:"16px"},children:[lt.jsxs("label",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.8rem",marginBottom:"4px"},children:[lt.jsx("span",{children:"Seed Display Time"}),lt.jsxs("span",{style:{color:"#00f2ff"},children:[g.displayDuration.toFixed(1),"s"]})]}),lt.jsx("input",{type:"range",min:"0.5",max:"10",step:"0.1",value:g.displayDuration,onChange:L=>v(U=>({...U,displayDuration:parseFloat(L.target.value)})),style:{width:"100%",accentColor:"#00f2ff"}})]}),lt.jsxs("div",{style:{marginBottom:"16px"},children:[lt.jsxs("label",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.8rem",marginBottom:"4px"},children:[lt.jsx("span",{children:"Camera Orbit Speed"}),lt.jsx("span",{style:{color:"#00f2ff"},children:g.cameraSpeed.toFixed(1)})]}),lt.jsx("input",{type:"range",min:"-3",max:"3",step:"0.1",value:g.cameraSpeed,onChange:L=>v(U=>({...U,cameraSpeed:parseFloat(L.target.value)})),style:{width:"100%",accentColor:"#00f2ff"}})]}),lt.jsxs("div",{style:{marginBottom:"16px"},children:[lt.jsxs("label",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.8rem",marginBottom:"4px"},children:[lt.jsx("span",{children:"Camera Rotation Speed"}),lt.jsx("span",{style:{color:"#00f2ff"},children:g.rotationSpeed.toFixed(1)})]}),lt.jsx("input",{type:"range",min:"-3",max:"3",step:"0.1",value:g.rotationSpeed,onChange:L=>v(U=>({...U,rotationSpeed:parseFloat(L.target.value)})),style:{width:"100%",accentColor:"#00f2ff"}})]}),lt.jsxs("div",{style:{marginBottom:"0"},children:[lt.jsxs("label",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.8rem",marginBottom:"4px"},children:[lt.jsx("span",{children:"Zoom (distance to origin)"}),lt.jsx("span",{style:{color:"#00f2ff"},children:g.zoom})]}),lt.jsx("input",{type:"range",min:"-500",max:"500",step:"10",value:g.zoom,onChange:L=>v(U=>({...U,zoom:parseFloat(L.target.value)})),style:{width:"100%",accentColor:"#00f2ff"}})]})]}),lt.jsxs("div",{style:{position:"absolute",bottom:"20px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"12px",zIndex:9999},children:[[{id:"random",name:"Shuffle",emoji:"🎲"},{id:"lissajous",name:"Lissajous",emoji:"🌀"},{id:"knot",name:"Trefoil",emoji:"🪢"},{id:"torusknot25",name:"Torus",emoji:"🔮"}].map(L=>lt.jsxs("button",{onClick:()=>{if(L.id==="random"){const U=["lissajous","knot","torusknot25","helix","butterfly","spherical"];for(let q=0;q<12;q++)H(U[Math.floor(Math.random()*U.length)])}else H(L.id)},style:{background:"rgba(0, 0, 0, 0.6)",border:"1px solid rgba(255, 255, 255, 0.2)",color:"white",padding:"12px 20px",borderRadius:"12px",fontSize:"0.9rem",cursor:"pointer",backdropFilter:"blur(10px)",transition:"all 0.2s"},children:[L.emoji," ",L.name]},L.id)),lt.jsx("button",{onClick:()=>{i.current.forEach(z),i.current=[],h([])},style:{background:"rgba(255, 100, 100, 0.3)",border:"1px solid rgba(255, 100, 100, 0.5)",color:"white",padding:"12px 20px",borderRadius:"12px",fontSize:"0.9rem",cursor:"pointer",backdropFilter:"blur(10px)",transition:"all 0.2s"},children:"🔄 Reset"})]})]})};function k1(){const[o,e]=de.useState("3D");return lt.jsxs("div",{className:"app-container",children:[lt.jsxs("div",{style:{position:"absolute",top:"1rem",right:"50%",transform:"translateX(50%)",zIndex:1e3,backgroundColor:"rgba(0, 0, 0, 0.5)",backdropFilter:"blur(10px)",padding:"4px",borderRadius:"20px",border:"1px solid rgba(255, 255, 255, 0.1)",display:"flex",gap:"4px"},children:[lt.jsx("button",{onClick:()=>e("2D"),style:{background:o==="2D"?"rgba(255, 255, 255, 0.9)":"transparent",color:o==="2D"?"black":"white",border:"none",borderRadius:"16px",padding:"4px 12px",fontSize:"0.8rem",fontWeight:"bold",cursor:"pointer",transition:"all 0.2s"},children:"2D Oracles"}),lt.jsx("button",{onClick:()=>e("3D"),style:{background:o==="3D"?"rgba(0, 242, 255, 0.8)":"transparent",color:o==="3D"?"black":"rgba(255, 255, 255, 0.6)",border:"none",borderRadius:"16px",padding:"4px 12px",fontSize:"0.8rem",fontWeight:"bold",cursor:"pointer",transition:"all 0.2s"},children:"3D Space"})]}),o==="2D"?lt.jsx(AS,{}):lt.jsx(X1,{})]})}TS.createRoot(document.getElementById("root")).render(lt.jsx(de.StrictMode,{children:lt.jsx(k1,{})}));

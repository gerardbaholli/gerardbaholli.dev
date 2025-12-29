(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function r0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var cf={exports:{}},na={},ff={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function Hv(){if(Om)return pt;Om=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,w={};function S(O,J,we){this.props=O,this.context=J,this.refs=w,this.updater=we||y}S.prototype.isReactComponent={},S.prototype.setState=function(O,J){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,J,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function v(){}v.prototype=S.prototype;function D(O,J,we){this.props=O,this.context=J,this.refs=w,this.updater=we||y}var L=D.prototype=new v;L.constructor=D,T(L,S.prototype),L.isPureReactComponent=!0;var P=Array.isArray,U=Object.prototype.hasOwnProperty,F={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function j(O,J,we){var ze,We={},Q=null,ue=null;if(J!=null)for(ze in J.ref!==void 0&&(ue=J.ref),J.key!==void 0&&(Q=""+J.key),J)U.call(J,ze)&&!I.hasOwnProperty(ze)&&(We[ze]=J[ze]);var _e=arguments.length-2;if(_e===1)We.children=we;else if(1<_e){for(var Ne=Array(_e),Pe=0;Pe<_e;Pe++)Ne[Pe]=arguments[Pe+2];We.children=Ne}if(O&&O.defaultProps)for(ze in _e=O.defaultProps,_e)We[ze]===void 0&&(We[ze]=_e[ze]);return{$$typeof:r,type:O,key:Q,ref:ue,props:We,_owner:F.current}}function C(O,J){return{$$typeof:r,type:O.type,key:J,ref:O.ref,props:O.props,_owner:O._owner}}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function V(O){var J={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(we){return J[we]})}var se=/\/+/g;function Z(O,J){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):J.toString(36)}function fe(O,J,we,ze,We){var Q=typeof O;(Q==="undefined"||Q==="boolean")&&(O=null);var ue=!1;if(O===null)ue=!0;else switch(Q){case"string":case"number":ue=!0;break;case"object":switch(O.$$typeof){case r:case e:ue=!0}}if(ue)return ue=O,We=We(ue),O=ze===""?"."+Z(ue,0):ze,P(We)?(we="",O!=null&&(we=O.replace(se,"$&/")+"/"),fe(We,J,we,"",function(Pe){return Pe})):We!=null&&(R(We)&&(We=C(We,we+(!We.key||ue&&ue.key===We.key?"":(""+We.key).replace(se,"$&/")+"/")+O)),J.push(We)),1;if(ue=0,ze=ze===""?".":ze+":",P(O))for(var _e=0;_e<O.length;_e++){Q=O[_e];var Ne=ze+Z(Q,_e);ue+=fe(Q,J,we,Ne,We)}else if(Ne=x(O),typeof Ne=="function")for(O=Ne.call(O),_e=0;!(Q=O.next()).done;)Q=Q.value,Ne=ze+Z(Q,_e++),ue+=fe(Q,J,we,Ne,We);else if(Q==="object")throw J=String(O),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return ue}function ce(O,J,we){if(O==null)return O;var ze=[],We=0;return fe(O,ze,"","",function(Q){return J.call(we,Q,We++)}),ze}function oe(O){if(O._status===-1){var J=O._result;J=J(),J.then(function(we){(O._status===0||O._status===-1)&&(O._status=1,O._result=we)},function(we){(O._status===0||O._status===-1)&&(O._status=2,O._result=we)}),O._status===-1&&(O._status=0,O._result=J)}if(O._status===1)return O._result.default;throw O._result}var q={current:null},X={transition:null},le={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:X,ReactCurrentOwner:F};function te(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:ce,forEach:function(O,J,we){ce(O,function(){J.apply(this,arguments)},we)},count:function(O){var J=0;return ce(O,function(){J++}),J},toArray:function(O){return ce(O,function(J){return J})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},pt.Component=S,pt.Fragment=n,pt.Profiler=a,pt.PureComponent=D,pt.StrictMode=s,pt.Suspense=h,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,pt.act=te,pt.cloneElement=function(O,J,we){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var ze=T({},O.props),We=O.key,Q=O.ref,ue=O._owner;if(J!=null){if(J.ref!==void 0&&(Q=J.ref,ue=F.current),J.key!==void 0&&(We=""+J.key),O.type&&O.type.defaultProps)var _e=O.type.defaultProps;for(Ne in J)U.call(J,Ne)&&!I.hasOwnProperty(Ne)&&(ze[Ne]=J[Ne]===void 0&&_e!==void 0?_e[Ne]:J[Ne])}var Ne=arguments.length-2;if(Ne===1)ze.children=we;else if(1<Ne){_e=Array(Ne);for(var Pe=0;Pe<Ne;Pe++)_e[Pe]=arguments[Pe+2];ze.children=_e}return{$$typeof:r,type:O.type,key:We,ref:Q,props:ze,_owner:ue}},pt.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},pt.createElement=j,pt.createFactory=function(O){var J=j.bind(null,O);return J.type=O,J},pt.createRef=function(){return{current:null}},pt.forwardRef=function(O){return{$$typeof:d,render:O}},pt.isValidElement=R,pt.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:oe}},pt.memo=function(O,J){return{$$typeof:m,type:O,compare:J===void 0?null:J}},pt.startTransition=function(O){var J=X.transition;X.transition={};try{O()}finally{X.transition=J}},pt.unstable_act=te,pt.useCallback=function(O,J){return q.current.useCallback(O,J)},pt.useContext=function(O){return q.current.useContext(O)},pt.useDebugValue=function(){},pt.useDeferredValue=function(O){return q.current.useDeferredValue(O)},pt.useEffect=function(O,J){return q.current.useEffect(O,J)},pt.useId=function(){return q.current.useId()},pt.useImperativeHandle=function(O,J,we){return q.current.useImperativeHandle(O,J,we)},pt.useInsertionEffect=function(O,J){return q.current.useInsertionEffect(O,J)},pt.useLayoutEffect=function(O,J){return q.current.useLayoutEffect(O,J)},pt.useMemo=function(O,J){return q.current.useMemo(O,J)},pt.useReducer=function(O,J,we){return q.current.useReducer(O,J,we)},pt.useRef=function(O){return q.current.useRef(O)},pt.useState=function(O){return q.current.useState(O)},pt.useSyncExternalStore=function(O,J,we){return q.current.useSyncExternalStore(O,J,we)},pt.useTransition=function(){return q.current.useTransition()},pt.version="18.3.1",pt}var Bm;function th(){return Bm||(Bm=1,ff.exports=Hv()),ff.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function Gv(){if(km)return na;km=1;var r=th(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,m){var g,_={},x=null,y=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(y=h.ref);for(g in h)s.call(h,g)&&!l.hasOwnProperty(g)&&(_[g]=h[g]);if(d&&d.defaultProps)for(g in h=d.defaultProps,h)_[g]===void 0&&(_[g]=h[g]);return{$$typeof:e,type:d,key:x,ref:y,props:_,_owner:a.current}}return na.Fragment=n,na.jsx=c,na.jsxs=c,na}var zm;function Wv(){return zm||(zm=1,cf.exports=Gv()),cf.exports}var mt=Wv(),Br=th();const pa=r0(Br);var Ll={},df={exports:{}},On={},hf={exports:{}},pf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function Xv(){return Vm||(Vm=1,(function(r){function e(X,le){var te=X.length;X.push(le);e:for(;0<te;){var O=te-1>>>1,J=X[O];if(0<a(J,le))X[O]=le,X[te]=J,te=O;else break e}}function n(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var le=X[0],te=X.pop();if(te!==le){X[0]=te;e:for(var O=0,J=X.length,we=J>>>1;O<we;){var ze=2*(O+1)-1,We=X[ze],Q=ze+1,ue=X[Q];if(0>a(We,te))Q<J&&0>a(ue,We)?(X[O]=ue,X[Q]=te,O=Q):(X[O]=We,X[ze]=te,O=ze);else if(Q<J&&0>a(ue,te))X[O]=ue,X[Q]=te,O=Q;else break e}}return le}function a(X,le){var te=X.sortIndex-le.sortIndex;return te!==0?te:X.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();r.unstable_now=function(){return c.now()-d}}var h=[],m=[],g=1,_=null,x=3,y=!1,T=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(X){for(var le=n(m);le!==null;){if(le.callback===null)s(m);else if(le.startTime<=X)s(m),le.sortIndex=le.expirationTime,e(h,le);else break;le=n(m)}}function P(X){if(w=!1,L(X),!T)if(n(h)!==null)T=!0,oe(U);else{var le=n(m);le!==null&&q(P,le.startTime-X)}}function U(X,le){T=!1,w&&(w=!1,v(j),j=-1),y=!0;var te=x;try{for(L(le),_=n(h);_!==null&&(!(_.expirationTime>le)||X&&!V());){var O=_.callback;if(typeof O=="function"){_.callback=null,x=_.priorityLevel;var J=O(_.expirationTime<=le);le=r.unstable_now(),typeof J=="function"?_.callback=J:_===n(h)&&s(h),L(le)}else s(h);_=n(h)}if(_!==null)var we=!0;else{var ze=n(m);ze!==null&&q(P,ze.startTime-le),we=!1}return we}finally{_=null,x=te,y=!1}}var F=!1,I=null,j=-1,C=5,R=-1;function V(){return!(r.unstable_now()-R<C)}function se(){if(I!==null){var X=r.unstable_now();R=X;var le=!0;try{le=I(!0,X)}finally{le?Z():(F=!1,I=null)}}else F=!1}var Z;if(typeof D=="function")Z=function(){D(se)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ce=fe.port2;fe.port1.onmessage=se,Z=function(){ce.postMessage(null)}}else Z=function(){S(se,0)};function oe(X){I=X,F||(F=!0,Z())}function q(X,le){j=S(function(){X(r.unstable_now())},le)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(X){X.callback=null},r.unstable_continueExecution=function(){T||y||(T=!0,oe(U))},r.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<X?Math.floor(1e3/X):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return n(h)},r.unstable_next=function(X){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var te=x;x=le;try{return X()}finally{x=te}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(X,le){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var te=x;x=X;try{return le()}finally{x=te}},r.unstable_scheduleCallback=function(X,le,te){var O=r.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?O+te:O):te=O,X){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=te+J,X={id:g++,callback:le,priorityLevel:X,startTime:te,expirationTime:J,sortIndex:-1},te>O?(X.sortIndex=te,e(m,X),n(h)===null&&X===n(m)&&(w?(v(j),j=-1):w=!0,q(P,te-O))):(X.sortIndex=J,e(h,X),T||y||(T=!0,oe(U))),X},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(X){var le=x;return function(){var te=x;x=le;try{return X.apply(this,arguments)}finally{x=te}}}})(pf)),pf}var Hm;function qv(){return Hm||(Hm=1,hf.exports=Xv()),hf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function Yv(){if(Gm)return On;Gm=1;var r=th(),e=qv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(a[t]=i,t=0;t<i.length;t++)s.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function x(t){return h.call(_,t)?!0:h.call(g,t)?!1:m.test(t)?_[t]=!0:(g[t]=!0,!1)}function y(t,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,u){if(i===null||typeof i>"u"||y(t,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(t,i,o,u,f,p,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new w(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new w(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new w(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new w(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new w(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new w(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new w(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new w(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new w(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,D);S[i]=new w(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,D);S[i]=new w(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,D);S[i]=new w(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new w(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new w(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,o,u){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,f,u)&&(o=null),u||f===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,u=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,u?t.setAttributeNS(u,i,o):t.setAttribute(i,o))))}var P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),F=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),V=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),X=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var te=Object.assign,O;function J(t){if(O===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+t}var we=!1;function ze(t,i){if(!t||we)return"";we=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var u=ne}Reflect.construct(t,[],i)}else{try{i.call()}catch(ne){u=ne}t.call(i.prototype)}else{try{throw Error()}catch(ne){u=ne}t()}}catch(ne){if(ne&&u&&typeof ne.stack=="string"){for(var f=ne.stack.split(`
`),p=u.stack.split(`
`),E=f.length-1,N=p.length-1;1<=E&&0<=N&&f[E]!==p[N];)N--;for(;1<=E&&0<=N;E--,N--)if(f[E]!==p[N]){if(E!==1||N!==1)do if(E--,N--,0>N||f[E]!==p[N]){var B=`
`+f[E].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=E&&0<=N);break}}}finally{we=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?J(t):""}function We(t){switch(t.tag){case 5:return J(t.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return t=ze(t.type,!1),t;case 11:return t=ze(t.type.render,!1),t;case 1:return t=ze(t.type,!0),t;default:return""}}function Q(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case F:return"Portal";case C:return"Profiler";case j:return"StrictMode";case Z:return"Suspense";case fe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case se:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ce:return i=t.displayName||null,i!==null?i:Q(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return Q(t(i))}catch{}}return null}function ue(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Q(i);case 8:return i===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function _e(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ne(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Pe(t){var i=Ne(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,p.call(this,E)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function at(t){t._valueTracker||(t._valueTracker=Pe(t))}function bt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return t&&(u=Ne(t)?t.checked?"true":"false":t.value),t=u,t!==o?(i.setValue(t),!0):!1}function ht(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xt(t,i){var o=i.checked;return te({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Pt(t,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=_e(i.value!=null?i.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function lt(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function Gt(t,i){lt(t,i);var o=_e(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Wt(t,i.type,o):i.hasOwnProperty("defaultValue")&&Wt(t,i.type,_e(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function k(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Wt(t,i,o){(i!=="number"||ht(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var gt=Array.isArray;function St(t,i,o,u){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&u&&(t[o].defaultSelected=!0)}else{for(o=""+_e(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,u&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Xe(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return te({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function b(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(gt(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:_e(o)}}function M(t,i){var o=_e(i.value),u=_e(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function G(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function de(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?de(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ae,je=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,u,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(ae=ae||document.createElement("div"),ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ae.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ee(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tt=["Webkit","ms","Moz","O"];Object.keys(Be).forEach(function(t){tt.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Be[i]=Be[t]})});function Se(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Be.hasOwnProperty(t)&&Be[t]?(""+i).trim():i+"px"}function Re(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,f=Se(o,i[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,f):t[o]=f}}var He=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(t,i){if(i){if(He[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ae(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ot=null;function z(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var De=null,ye=null,Le=null;function ve(t){if(t=Vo(t)){if(typeof De!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Ya(i),De(t.stateNode,t.type,i))}}function he(t){ye?Le?Le.push(t):Le=[t]:ye=t}function Ce(){if(ye){var t=ye,i=Le;if(Le=ye=null,ve(t),i)for(t=0;t<i.length;t++)ve(i[t])}}function nt(t,i){return t(i)}function It(){}var yt=!1;function Vn(t,i,o){if(yt)return t(i,o);yt=!0;try{return nt(t,i,o)}finally{yt=!1,(ye!==null||Le!==null)&&(It(),Ce())}}function An(t,i){var o=t.stateNode;if(o===null)return null;var u=Ya(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var So=!1;if(d)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){So=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{So=!1}function yo(t,i,o,u,f,p,E,N,B){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(o,ne)}catch(ge){this.onError(ge)}}var zr=!1,Vr=null,Hr=!1,ai=null,Mo={onError:function(t){zr=!0,Vr=t}};function Aa(t,i,o,u,f,p,E,N,B){zr=!1,Vr=null,yo.apply(Mo,arguments)}function Ca(t,i,o,u,f,p,E,N,B){if(Aa.apply(this,arguments),zr){if(zr){var ne=Vr;zr=!1,Vr=null}else throw Error(n(198));Hr||(Hr=!0,ai=ne)}}function Kn(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Eo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Gr(t){if(Kn(t)!==t)throw Error(n(188))}function Ra(t){var i=t.alternate;if(!i){if(i=Kn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,u=i;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return Gr(f),t;if(p===u)return Gr(f),i;p=p.sibling}throw Error(n(188))}if(o.return!==u.return)o=f,u=p;else{for(var E=!1,N=f.child;N;){if(N===o){E=!0,o=f,u=p;break}if(N===u){E=!0,u=f,o=p;break}N=N.sibling}if(!E){for(N=p.child;N;){if(N===o){E=!0,o=p,u=f;break}if(N===u){E=!0,u=p,o=f;break}N=N.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function To(t){return t=Ra(t),t!==null?ba(t):null}function ba(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ba(t);if(i!==null)return i;t=t.sibling}return null}var Pa=e.unstable_scheduleCallback,Da=e.unstable_cancelCallback,Lu=e.unstable_shouldYield,Iu=e.unstable_requestPaint,qt=e.unstable_now,A=e.unstable_getCurrentPriorityLevel,W=e.unstable_ImmediatePriority,ie=e.unstable_UserBlockingPriority,ee=e.unstable_NormalPriority,$=e.unstable_LowPriority,be=e.unstable_IdlePriority,Ue=null,Te=null;function Ve(t){if(Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:ct,et=Math.log,Ke=Math.LN2;function ct(t){return t>>>=0,t===0?32:31-(et(t)/Ke|0)|0}var Mt=64,Bt=4194304;function Ot(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wt(t,i){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,p=t.pingedLanes,E=o&268435455;if(E!==0){var N=E&~f;N!==0?u=Ot(N):(p&=E,p!==0&&(u=Ot(p)))}else E=o&~f,E!==0?u=Ot(E):p!==0&&(u=Ot(p));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)o=31-Oe(i),f=1<<o,u|=t[o],i&=~f;return u}function Ze(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rt(t,i){for(var o=t.suspendedLanes,u=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes;0<p;){var E=31-Oe(p),N=1<<E,B=f[E];B===-1?((N&o)===0||(N&u)!==0)&&(f[E]=Ze(N,i)):B<=i&&(t.expiredLanes|=N),p&=~N}}function _t(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vn(){var t=Mt;return Mt<<=1,(Mt&4194240)===0&&(Mt=64),t}function Mi(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function nn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Oe(i),t[i]=o}function Wr(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-Oe(o),p=1<<f;i[f]=0,u[f]=-1,t[f]=-1,o&=~p}}function Dt(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var u=31-Oe(o),f=1<<u;f&i|t[u]&i&&(t[u]|=i),o&=~f}}var rt=0;function Cn(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ln,un,xs,Ei,xh,Nu=!1,La=[],ur=null,cr=null,fr=null,wo=new Map,Ao=new Map,dr=[],c_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sh(t,i){switch(t){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":wo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(i.pointerId)}}function Co(t,i,o,u,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},i!==null&&(i=Vo(i),i!==null&&un(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function f_(t,i,o,u,f){switch(i){case"focusin":return ur=Co(ur,t,i,o,u,f),!0;case"dragenter":return cr=Co(cr,t,i,o,u,f),!0;case"mouseover":return fr=Co(fr,t,i,o,u,f),!0;case"pointerover":var p=f.pointerId;return wo.set(p,Co(wo.get(p)||null,t,i,o,u,f)),!0;case"gotpointercapture":return p=f.pointerId,Ao.set(p,Co(Ao.get(p)||null,t,i,o,u,f)),!0}return!1}function yh(t){var i=Xr(t.target);if(i!==null){var o=Kn(i);if(o!==null){if(i=o.tag,i===13){if(i=Eo(o),i!==null){t.blockedOn=i,xh(t.priority,function(){xs(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ia(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Fu(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);ot=u,o.target.dispatchEvent(u),ot=null}else return i=Vo(o),i!==null&&un(i),t.blockedOn=o,!1;i.shift()}return!0}function Mh(t,i,o){Ia(t)&&o.delete(i)}function d_(){Nu=!1,ur!==null&&Ia(ur)&&(ur=null),cr!==null&&Ia(cr)&&(cr=null),fr!==null&&Ia(fr)&&(fr=null),wo.forEach(Mh),Ao.forEach(Mh)}function Ro(t,i){t.blockedOn===i&&(t.blockedOn=null,Nu||(Nu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,d_)))}function bo(t){function i(f){return Ro(f,t)}if(0<La.length){Ro(La[0],t);for(var o=1;o<La.length;o++){var u=La[o];u.blockedOn===t&&(u.blockedOn=null)}}for(ur!==null&&Ro(ur,t),cr!==null&&Ro(cr,t),fr!==null&&Ro(fr,t),wo.forEach(i),Ao.forEach(i),o=0;o<dr.length;o++)u=dr[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<dr.length&&(o=dr[0],o.blockedOn===null);)yh(o),o.blockedOn===null&&dr.shift()}var Ss=P.ReactCurrentBatchConfig,Na=!0;function h_(t,i,o,u){var f=rt,p=Ss.transition;Ss.transition=null;try{rt=1,Uu(t,i,o,u)}finally{rt=f,Ss.transition=p}}function p_(t,i,o,u){var f=rt,p=Ss.transition;Ss.transition=null;try{rt=4,Uu(t,i,o,u)}finally{rt=f,Ss.transition=p}}function Uu(t,i,o,u){if(Na){var f=Fu(t,i,o,u);if(f===null)Ju(t,i,u,Ua,o),Sh(t,u);else if(f_(f,t,i,o,u))u.stopPropagation();else if(Sh(t,u),i&4&&-1<c_.indexOf(t)){for(;f!==null;){var p=Vo(f);if(p!==null&&ln(p),p=Fu(t,i,o,u),p===null&&Ju(t,i,u,Ua,o),p===f)break;f=p}f!==null&&u.stopPropagation()}else Ju(t,i,u,null,o)}}var Ua=null;function Fu(t,i,o,u){if(Ua=null,t=z(u),t=Xr(t),t!==null)if(i=Kn(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Eo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Ua=t,null}function Eh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(A()){case W:return 1;case ie:return 4;case ee:case $:return 16;case be:return 536870912;default:return 16}default:return 16}}var hr=null,Ou=null,Fa=null;function Th(){if(Fa)return Fa;var t,i=Ou,o=i.length,u,f="value"in hr?hr.value:hr.textContent,p=f.length;for(t=0;t<o&&i[t]===f[t];t++);var E=o-t;for(u=1;u<=E&&i[o-u]===f[p-u];u++);return Fa=f.slice(t,1<u?1-u:void 0)}function Oa(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Ba(){return!0}function wh(){return!1}function Hn(t){function i(o,u,f,p,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(o=t[N],this[N]=o?o(p):p[N]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Ba:wh,this.isPropagationStopped=wh,this}return te(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ba)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ba)},persist:function(){},isPersistent:Ba}),i}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bu=Hn(ys),Po=te({},ys,{view:0,detail:0}),m_=Hn(Po),ku,zu,Do,ka=te({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(ku=t.screenX-Do.screenX,zu=t.screenY-Do.screenY):zu=ku=0,Do=t),ku)},movementY:function(t){return"movementY"in t?t.movementY:zu}}),Ah=Hn(ka),g_=te({},ka,{dataTransfer:0}),__=Hn(g_),v_=te({},Po,{relatedTarget:0}),Vu=Hn(v_),x_=te({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),S_=Hn(x_),y_=te({},ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),M_=Hn(y_),E_=te({},ys,{data:0}),Ch=Hn(E_),T_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},A_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function C_(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=A_[t])?!!i[t]:!1}function Hu(){return C_}var R_=te({},Po,{key:function(t){if(t.key){var i=T_[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Oa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?w_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hu,charCode:function(t){return t.type==="keypress"?Oa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),b_=Hn(R_),P_=te({},ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rh=Hn(P_),D_=te({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hu}),L_=Hn(D_),I_=te({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),N_=Hn(I_),U_=te({},ka,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),F_=Hn(U_),O_=[9,13,27,32],Gu=d&&"CompositionEvent"in window,Lo=null;d&&"documentMode"in document&&(Lo=document.documentMode);var B_=d&&"TextEvent"in window&&!Lo,bh=d&&(!Gu||Lo&&8<Lo&&11>=Lo),Ph=" ",Dh=!1;function Lh(t,i){switch(t){case"keyup":return O_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ih(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ms=!1;function k_(t,i){switch(t){case"compositionend":return Ih(i);case"keypress":return i.which!==32?null:(Dh=!0,Ph);case"textInput":return t=i.data,t===Ph&&Dh?null:t;default:return null}}function z_(t,i){if(Ms)return t==="compositionend"||!Gu&&Lh(t,i)?(t=Th(),Fa=Ou=hr=null,Ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return bh&&i.locale!=="ko"?null:i.data;default:return null}}var V_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!V_[t.type]:i==="textarea"}function Uh(t,i,o,u){he(u),i=Wa(i,"onChange"),0<i.length&&(o=new Bu("onChange","change",null,o,u),t.push({event:o,listeners:i}))}var Io=null,No=null;function H_(t){Jh(t,0)}function za(t){var i=Cs(t);if(bt(i))return t}function G_(t,i){if(t==="change")return i}var Fh=!1;if(d){var Wu;if(d){var Xu="oninput"in document;if(!Xu){var Oh=document.createElement("div");Oh.setAttribute("oninput","return;"),Xu=typeof Oh.oninput=="function"}Wu=Xu}else Wu=!1;Fh=Wu&&(!document.documentMode||9<document.documentMode)}function Bh(){Io&&(Io.detachEvent("onpropertychange",kh),No=Io=null)}function kh(t){if(t.propertyName==="value"&&za(No)){var i=[];Uh(i,No,t,z(t)),Vn(H_,i)}}function W_(t,i,o){t==="focusin"?(Bh(),Io=i,No=o,Io.attachEvent("onpropertychange",kh)):t==="focusout"&&Bh()}function X_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return za(No)}function q_(t,i){if(t==="click")return za(i)}function Y_(t,i){if(t==="input"||t==="change")return za(i)}function j_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var li=typeof Object.is=="function"?Object.is:j_;function Uo(t,i){if(li(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!h.call(i,f)||!li(t[f],i[f]))return!1}return!0}function zh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vh(t,i){var o=zh(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=i&&u>=i)return{node:o,offset:i-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=zh(o)}}function Hh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Hh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Gh(){for(var t=window,i=ht();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=ht(t.document)}return i}function qu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function $_(t){var i=Gh(),o=t.focusedElem,u=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Hh(o.ownerDocument.documentElement,o)){if(u!==null&&qu(o)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,p=Math.min(u.start,f);u=u.end===void 0?p:Math.min(u.end,f),!t.extend&&p>u&&(f=u,u=p,p=f),f=Vh(o,p);var E=Vh(o,u);f&&E&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),p>u?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var K_=d&&"documentMode"in document&&11>=document.documentMode,Es=null,Yu=null,Fo=null,ju=!1;function Wh(t,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ju||Es==null||Es!==ht(u)||(u=Es,"selectionStart"in u&&qu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Fo&&Uo(Fo,u)||(Fo=u,u=Wa(Yu,"onSelect"),0<u.length&&(i=new Bu("onSelect","select",null,i,o),t.push({event:i,listeners:u}),i.target=Es)))}function Va(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Ts={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionend:Va("Transition","TransitionEnd")},$u={},Xh={};d&&(Xh=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function Ha(t){if($u[t])return $u[t];if(!Ts[t])return t;var i=Ts[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Xh)return $u[t]=i[o];return t}var qh=Ha("animationend"),Yh=Ha("animationiteration"),jh=Ha("animationstart"),$h=Ha("transitionend"),Kh=new Map,Zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(t,i){Kh.set(t,i),l(i,[t])}for(var Ku=0;Ku<Zh.length;Ku++){var Zu=Zh[Ku],Z_=Zu.toLowerCase(),Q_=Zu[0].toUpperCase()+Zu.slice(1);pr(Z_,"on"+Q_)}pr(qh,"onAnimationEnd"),pr(Yh,"onAnimationIteration"),pr(jh,"onAnimationStart"),pr("dblclick","onDoubleClick"),pr("focusin","onFocus"),pr("focusout","onBlur"),pr($h,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function Qh(t,i,o){var u=t.type||"unknown-event";t.currentTarget=o,Ca(u,i,void 0,t),t.currentTarget=null}function Jh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],f=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var E=u.length-1;0<=E;E--){var N=u[E],B=N.instance,ne=N.currentTarget;if(N=N.listener,B!==p&&f.isPropagationStopped())break e;Qh(f,N,ne),p=B}else for(E=0;E<u.length;E++){if(N=u[E],B=N.instance,ne=N.currentTarget,N=N.listener,B!==p&&f.isPropagationStopped())break e;Qh(f,N,ne),p=B}}}if(Hr)throw t=ai,Hr=!1,ai=null,t}function zt(t,i){var o=i[sc];o===void 0&&(o=i[sc]=new Set);var u=t+"__bubble";o.has(u)||(ep(i,t,2,!1),o.add(u))}function Qu(t,i,o){var u=0;i&&(u|=4),ep(o,t,u,i)}var Ga="_reactListening"+Math.random().toString(36).slice(2);function Bo(t){if(!t[Ga]){t[Ga]=!0,s.forEach(function(o){o!=="selectionchange"&&(J_.has(o)||Qu(o,!1,t),Qu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Ga]||(i[Ga]=!0,Qu("selectionchange",!1,i))}}function ep(t,i,o,u){switch(Eh(i)){case 1:var f=h_;break;case 4:f=p_;break;default:f=Uu}o=f.bind(null,i,o,t),f=void 0,!So||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function Ju(t,i,o,u,f){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var N=u.stateNode.containerInfo;if(N===f||N.nodeType===8&&N.parentNode===f)break;if(E===4)for(E=u.return;E!==null;){var B=E.tag;if((B===3||B===4)&&(B=E.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;E=E.return}for(;N!==null;){if(E=Xr(N),E===null)return;if(B=E.tag,B===5||B===6){u=p=E;continue e}N=N.parentNode}}u=u.return}Vn(function(){var ne=p,ge=z(o),xe=[];e:{var me=Kh.get(t);if(me!==void 0){var Fe=Bu,Ge=t;switch(t){case"keypress":if(Oa(o)===0)break e;case"keydown":case"keyup":Fe=b_;break;case"focusin":Ge="focus",Fe=Vu;break;case"focusout":Ge="blur",Fe=Vu;break;case"beforeblur":case"afterblur":Fe=Vu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=Ah;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=__;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=L_;break;case qh:case Yh:case jh:Fe=S_;break;case $h:Fe=N_;break;case"scroll":Fe=m_;break;case"wheel":Fe=F_;break;case"copy":case"cut":case"paste":Fe=M_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=Rh}var Ye=(i&4)!==0,Kt=!Ye&&t==="scroll",Y=Ye?me!==null?me+"Capture":null:me;Ye=[];for(var H=ne,K;H!==null;){K=H;var Me=K.stateNode;if(K.tag===5&&Me!==null&&(K=Me,Y!==null&&(Me=An(H,Y),Me!=null&&Ye.push(ko(H,Me,K)))),Kt)break;H=H.return}0<Ye.length&&(me=new Fe(me,Ge,null,o,ge),xe.push({event:me,listeners:Ye}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",Fe=t==="mouseout"||t==="pointerout",me&&o!==ot&&(Ge=o.relatedTarget||o.fromElement)&&(Xr(Ge)||Ge[Bi]))break e;if((Fe||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,Fe?(Ge=o.relatedTarget||o.toElement,Fe=ne,Ge=Ge?Xr(Ge):null,Ge!==null&&(Kt=Kn(Ge),Ge!==Kt||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Fe=null,Ge=ne),Fe!==Ge)){if(Ye=Ah,Me="onMouseLeave",Y="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Ye=Rh,Me="onPointerLeave",Y="onPointerEnter",H="pointer"),Kt=Fe==null?me:Cs(Fe),K=Ge==null?me:Cs(Ge),me=new Ye(Me,H+"leave",Fe,o,ge),me.target=Kt,me.relatedTarget=K,Me=null,Xr(ge)===ne&&(Ye=new Ye(Y,H+"enter",Ge,o,ge),Ye.target=K,Ye.relatedTarget=Kt,Me=Ye),Kt=Me,Fe&&Ge)t:{for(Ye=Fe,Y=Ge,H=0,K=Ye;K;K=ws(K))H++;for(K=0,Me=Y;Me;Me=ws(Me))K++;for(;0<H-K;)Ye=ws(Ye),H--;for(;0<K-H;)Y=ws(Y),K--;for(;H--;){if(Ye===Y||Y!==null&&Ye===Y.alternate)break t;Ye=ws(Ye),Y=ws(Y)}Ye=null}else Ye=null;Fe!==null&&tp(xe,me,Fe,Ye,!1),Ge!==null&&Kt!==null&&tp(xe,Kt,Ge,Ye,!0)}}e:{if(me=ne?Cs(ne):window,Fe=me.nodeName&&me.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&me.type==="file")var $e=G_;else if(Nh(me))if(Fh)$e=Y_;else{$e=X_;var Qe=W_}else(Fe=me.nodeName)&&Fe.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&($e=q_);if($e&&($e=$e(t,ne))){Uh(xe,$e,o,ge);break e}Qe&&Qe(t,me,ne),t==="focusout"&&(Qe=me._wrapperState)&&Qe.controlled&&me.type==="number"&&Wt(me,"number",me.value)}switch(Qe=ne?Cs(ne):window,t){case"focusin":(Nh(Qe)||Qe.contentEditable==="true")&&(Es=Qe,Yu=ne,Fo=null);break;case"focusout":Fo=Yu=Es=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,Wh(xe,o,ge);break;case"selectionchange":if(K_)break;case"keydown":case"keyup":Wh(xe,o,ge)}var Je;if(Gu)e:{switch(t){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else Ms?Lh(t,o)&&(it="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(it="onCompositionStart");it&&(bh&&o.locale!=="ko"&&(Ms||it!=="onCompositionStart"?it==="onCompositionEnd"&&Ms&&(Je=Th()):(hr=ge,Ou="value"in hr?hr.value:hr.textContent,Ms=!0)),Qe=Wa(ne,it),0<Qe.length&&(it=new Ch(it,t,null,o,ge),xe.push({event:it,listeners:Qe}),Je?it.data=Je:(Je=Ih(o),Je!==null&&(it.data=Je)))),(Je=B_?k_(t,o):z_(t,o))&&(ne=Wa(ne,"onBeforeInput"),0<ne.length&&(ge=new Ch("onBeforeInput","beforeinput",null,o,ge),xe.push({event:ge,listeners:ne}),ge.data=Je))}Jh(xe,i)})}function ko(t,i,o){return{instance:t,listener:i,currentTarget:o}}function Wa(t,i){for(var o=i+"Capture",u=[];t!==null;){var f=t,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=An(t,o),p!=null&&u.unshift(ko(t,p,f)),p=An(t,i),p!=null&&u.push(ko(t,p,f))),t=t.return}return u}function ws(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function tp(t,i,o,u,f){for(var p=i._reactName,E=[];o!==null&&o!==u;){var N=o,B=N.alternate,ne=N.stateNode;if(B!==null&&B===u)break;N.tag===5&&ne!==null&&(N=ne,f?(B=An(o,p),B!=null&&E.unshift(ko(o,B,N))):f||(B=An(o,p),B!=null&&E.push(ko(o,B,N)))),o=o.return}E.length!==0&&t.push({event:i,listeners:E})}var ev=/\r\n?/g,tv=/\u0000|\uFFFD/g;function np(t){return(typeof t=="string"?t:""+t).replace(ev,`
`).replace(tv,"")}function Xa(t,i,o){if(i=np(i),np(t)!==i&&o)throw Error(n(425))}function qa(){}var ec=null,tc=null;function nc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ic=typeof setTimeout=="function"?setTimeout:void 0,nv=typeof clearTimeout=="function"?clearTimeout:void 0,ip=typeof Promise=="function"?Promise:void 0,iv=typeof queueMicrotask=="function"?queueMicrotask:typeof ip<"u"?function(t){return ip.resolve(null).then(t).catch(rv)}:ic;function rv(t){setTimeout(function(){throw t})}function rc(t,i){var o=i,u=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){t.removeChild(f),bo(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);bo(i)}function mr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function rp(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var As=Math.random().toString(36).slice(2),Ti="__reactFiber$"+As,zo="__reactProps$"+As,Bi="__reactContainer$"+As,sc="__reactEvents$"+As,sv="__reactListeners$"+As,ov="__reactHandles$"+As;function Xr(t){var i=t[Ti];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Bi]||o[Ti]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=rp(t);t!==null;){if(o=t[Ti])return o;t=rp(t)}return i}t=o,o=t.parentNode}return null}function Vo(t){return t=t[Ti]||t[Bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Ya(t){return t[zo]||null}var oc=[],Rs=-1;function gr(t){return{current:t}}function Vt(t){0>Rs||(t.current=oc[Rs],oc[Rs]=null,Rs--)}function kt(t,i){Rs++,oc[Rs]=t.current,t.current=i}var _r={},xn=gr(_r),Ln=gr(!1),qr=_r;function bs(t,i){var o=t.type.contextTypes;if(!o)return _r;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in o)f[p]=i[p];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function In(t){return t=t.childContextTypes,t!=null}function ja(){Vt(Ln),Vt(xn)}function sp(t,i,o){if(xn.current!==_r)throw Error(n(168));kt(xn,i),kt(Ln,o)}function op(t,i,o){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(n(108,ue(t)||"Unknown",f));return te({},o,u)}function $a(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,qr=xn.current,kt(xn,t),kt(Ln,Ln.current),!0}function ap(t,i,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=op(t,i,qr),u.__reactInternalMemoizedMergedChildContext=t,Vt(Ln),Vt(xn),kt(xn,t)):Vt(Ln),kt(Ln,o)}var ki=null,Ka=!1,ac=!1;function lp(t){ki===null?ki=[t]:ki.push(t)}function av(t){Ka=!0,lp(t)}function vr(){if(!ac&&ki!==null){ac=!0;var t=0,i=rt;try{var o=ki;for(rt=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}ki=null,Ka=!1}catch(f){throw ki!==null&&(ki=ki.slice(t+1)),Pa(W,vr),f}finally{rt=i,ac=!1}}return null}var Ps=[],Ds=0,Za=null,Qa=0,Zn=[],Qn=0,Yr=null,zi=1,Vi="";function jr(t,i){Ps[Ds++]=Qa,Ps[Ds++]=Za,Za=t,Qa=i}function up(t,i,o){Zn[Qn++]=zi,Zn[Qn++]=Vi,Zn[Qn++]=Yr,Yr=t;var u=zi;t=Vi;var f=32-Oe(u)-1;u&=~(1<<f),o+=1;var p=32-Oe(i)+f;if(30<p){var E=f-f%5;p=(u&(1<<E)-1).toString(32),u>>=E,f-=E,zi=1<<32-Oe(i)+f|o<<f|u,Vi=p+t}else zi=1<<p|o<<f|u,Vi=t}function lc(t){t.return!==null&&(jr(t,1),up(t,1,0))}function uc(t){for(;t===Za;)Za=Ps[--Ds],Ps[Ds]=null,Qa=Ps[--Ds],Ps[Ds]=null;for(;t===Yr;)Yr=Zn[--Qn],Zn[Qn]=null,Vi=Zn[--Qn],Zn[Qn]=null,zi=Zn[--Qn],Zn[Qn]=null}var Gn=null,Wn=null,Xt=!1,ui=null;function cp(t,i){var o=ni(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function fp(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Gn=t,Wn=mr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Gn=t,Wn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Yr!==null?{id:zi,overflow:Vi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ni(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Gn=t,Wn=null,!0):!1;default:return!1}}function cc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fc(t){if(Xt){var i=Wn;if(i){var o=i;if(!fp(t,i)){if(cc(t))throw Error(n(418));i=mr(o.nextSibling);var u=Gn;i&&fp(t,i)?cp(u,o):(t.flags=t.flags&-4097|2,Xt=!1,Gn=t)}}else{if(cc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Xt=!1,Gn=t}}}function dp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gn=t}function Ja(t){if(t!==Gn)return!1;if(!Xt)return dp(t),Xt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!nc(t.type,t.memoizedProps)),i&&(i=Wn)){if(cc(t))throw hp(),Error(n(418));for(;i;)cp(t,i),i=mr(i.nextSibling)}if(dp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Wn=mr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Wn=null}}else Wn=Gn?mr(t.stateNode.nextSibling):null;return!0}function hp(){for(var t=Wn;t;)t=mr(t.nextSibling)}function Ls(){Wn=Gn=null,Xt=!1}function dc(t){ui===null?ui=[t]:ui.push(t)}var lv=P.ReactCurrentBatchConfig;function Ho(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var f=u,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(E){var N=f.refs;E===null?delete N[p]:N[p]=E},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function el(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function pp(t){var i=t._init;return i(t._payload)}function mp(t){function i(Y,H){if(t){var K=Y.deletions;K===null?(Y.deletions=[H],Y.flags|=16):K.push(H)}}function o(Y,H){if(!t)return null;for(;H!==null;)i(Y,H),H=H.sibling;return null}function u(Y,H){for(Y=new Map;H!==null;)H.key!==null?Y.set(H.key,H):Y.set(H.index,H),H=H.sibling;return Y}function f(Y,H){return Y=Ar(Y,H),Y.index=0,Y.sibling=null,Y}function p(Y,H,K){return Y.index=K,t?(K=Y.alternate,K!==null?(K=K.index,K<H?(Y.flags|=2,H):K):(Y.flags|=2,H)):(Y.flags|=1048576,H)}function E(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function N(Y,H,K,Me){return H===null||H.tag!==6?(H=rf(K,Y.mode,Me),H.return=Y,H):(H=f(H,K),H.return=Y,H)}function B(Y,H,K,Me){var $e=K.type;return $e===I?ge(Y,H,K.props.children,Me,K.key):H!==null&&(H.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===oe&&pp($e)===H.type)?(Me=f(H,K.props),Me.ref=Ho(Y,H,K),Me.return=Y,Me):(Me=Tl(K.type,K.key,K.props,null,Y.mode,Me),Me.ref=Ho(Y,H,K),Me.return=Y,Me)}function ne(Y,H,K,Me){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=sf(K,Y.mode,Me),H.return=Y,H):(H=f(H,K.children||[]),H.return=Y,H)}function ge(Y,H,K,Me,$e){return H===null||H.tag!==7?(H=ns(K,Y.mode,Me,$e),H.return=Y,H):(H=f(H,K),H.return=Y,H)}function xe(Y,H,K){if(typeof H=="string"&&H!==""||typeof H=="number")return H=rf(""+H,Y.mode,K),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case U:return K=Tl(H.type,H.key,H.props,null,Y.mode,K),K.ref=Ho(Y,null,H),K.return=Y,K;case F:return H=sf(H,Y.mode,K),H.return=Y,H;case oe:var Me=H._init;return xe(Y,Me(H._payload),K)}if(gt(H)||le(H))return H=ns(H,Y.mode,K,null),H.return=Y,H;el(Y,H)}return null}function me(Y,H,K,Me){var $e=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return $e!==null?null:N(Y,H,""+K,Me);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case U:return K.key===$e?B(Y,H,K,Me):null;case F:return K.key===$e?ne(Y,H,K,Me):null;case oe:return $e=K._init,me(Y,H,$e(K._payload),Me)}if(gt(K)||le(K))return $e!==null?null:ge(Y,H,K,Me,null);el(Y,K)}return null}function Fe(Y,H,K,Me,$e){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return Y=Y.get(K)||null,N(H,Y,""+Me,$e);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case U:return Y=Y.get(Me.key===null?K:Me.key)||null,B(H,Y,Me,$e);case F:return Y=Y.get(Me.key===null?K:Me.key)||null,ne(H,Y,Me,$e);case oe:var Qe=Me._init;return Fe(Y,H,K,Qe(Me._payload),$e)}if(gt(Me)||le(Me))return Y=Y.get(K)||null,ge(H,Y,Me,$e,null);el(H,Me)}return null}function Ge(Y,H,K,Me){for(var $e=null,Qe=null,Je=H,it=H=0,dn=null;Je!==null&&it<K.length;it++){Je.index>it?(dn=Je,Je=null):dn=Je.sibling;var At=me(Y,Je,K[it],Me);if(At===null){Je===null&&(Je=dn);break}t&&Je&&At.alternate===null&&i(Y,Je),H=p(At,H,it),Qe===null?$e=At:Qe.sibling=At,Qe=At,Je=dn}if(it===K.length)return o(Y,Je),Xt&&jr(Y,it),$e;if(Je===null){for(;it<K.length;it++)Je=xe(Y,K[it],Me),Je!==null&&(H=p(Je,H,it),Qe===null?$e=Je:Qe.sibling=Je,Qe=Je);return Xt&&jr(Y,it),$e}for(Je=u(Y,Je);it<K.length;it++)dn=Fe(Je,Y,it,K[it],Me),dn!==null&&(t&&dn.alternate!==null&&Je.delete(dn.key===null?it:dn.key),H=p(dn,H,it),Qe===null?$e=dn:Qe.sibling=dn,Qe=dn);return t&&Je.forEach(function(Cr){return i(Y,Cr)}),Xt&&jr(Y,it),$e}function Ye(Y,H,K,Me){var $e=le(K);if(typeof $e!="function")throw Error(n(150));if(K=$e.call(K),K==null)throw Error(n(151));for(var Qe=$e=null,Je=H,it=H=0,dn=null,At=K.next();Je!==null&&!At.done;it++,At=K.next()){Je.index>it?(dn=Je,Je=null):dn=Je.sibling;var Cr=me(Y,Je,At.value,Me);if(Cr===null){Je===null&&(Je=dn);break}t&&Je&&Cr.alternate===null&&i(Y,Je),H=p(Cr,H,it),Qe===null?$e=Cr:Qe.sibling=Cr,Qe=Cr,Je=dn}if(At.done)return o(Y,Je),Xt&&jr(Y,it),$e;if(Je===null){for(;!At.done;it++,At=K.next())At=xe(Y,At.value,Me),At!==null&&(H=p(At,H,it),Qe===null?$e=At:Qe.sibling=At,Qe=At);return Xt&&jr(Y,it),$e}for(Je=u(Y,Je);!At.done;it++,At=K.next())At=Fe(Je,Y,it,At.value,Me),At!==null&&(t&&At.alternate!==null&&Je.delete(At.key===null?it:At.key),H=p(At,H,it),Qe===null?$e=At:Qe.sibling=At,Qe=At);return t&&Je.forEach(function(Vv){return i(Y,Vv)}),Xt&&jr(Y,it),$e}function Kt(Y,H,K,Me){if(typeof K=="object"&&K!==null&&K.type===I&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case U:e:{for(var $e=K.key,Qe=H;Qe!==null;){if(Qe.key===$e){if($e=K.type,$e===I){if(Qe.tag===7){o(Y,Qe.sibling),H=f(Qe,K.props.children),H.return=Y,Y=H;break e}}else if(Qe.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===oe&&pp($e)===Qe.type){o(Y,Qe.sibling),H=f(Qe,K.props),H.ref=Ho(Y,Qe,K),H.return=Y,Y=H;break e}o(Y,Qe);break}else i(Y,Qe);Qe=Qe.sibling}K.type===I?(H=ns(K.props.children,Y.mode,Me,K.key),H.return=Y,Y=H):(Me=Tl(K.type,K.key,K.props,null,Y.mode,Me),Me.ref=Ho(Y,H,K),Me.return=Y,Y=Me)}return E(Y);case F:e:{for(Qe=K.key;H!==null;){if(H.key===Qe)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){o(Y,H.sibling),H=f(H,K.children||[]),H.return=Y,Y=H;break e}else{o(Y,H);break}else i(Y,H);H=H.sibling}H=sf(K,Y.mode,Me),H.return=Y,Y=H}return E(Y);case oe:return Qe=K._init,Kt(Y,H,Qe(K._payload),Me)}if(gt(K))return Ge(Y,H,K,Me);if(le(K))return Ye(Y,H,K,Me);el(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,H!==null&&H.tag===6?(o(Y,H.sibling),H=f(H,K),H.return=Y,Y=H):(o(Y,H),H=rf(K,Y.mode,Me),H.return=Y,Y=H),E(Y)):o(Y,H)}return Kt}var Is=mp(!0),gp=mp(!1),tl=gr(null),nl=null,Ns=null,hc=null;function pc(){hc=Ns=nl=null}function mc(t){var i=tl.current;Vt(tl),t._currentValue=i}function gc(t,i,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===o)break;t=t.return}}function Us(t,i){nl=t,hc=Ns=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Nn=!0),t.firstContext=null)}function Jn(t){var i=t._currentValue;if(hc!==t)if(t={context:t,memoizedValue:i,next:null},Ns===null){if(nl===null)throw Error(n(308));Ns=t,nl.dependencies={lanes:0,firstContext:t}}else Ns=Ns.next=t;return i}var $r=null;function _c(t){$r===null?$r=[t]:$r.push(t)}function _p(t,i,o,u){var f=i.interleaved;return f===null?(o.next=o,_c(i)):(o.next=f.next,f.next=o),i.interleaved=o,Hi(t,u)}function Hi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var xr=!1;function vc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vp(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Sr(t,i,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(Et&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,Hi(t,o)}return f=u.interleaved,f===null?(i.next=i,_c(u)):(i.next=f.next,f.next=i),u.interleaved=i,Hi(t,o)}function il(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,Dt(t,o)}}function xp(t,i){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?f=p=E:p=p.next=E,o=o.next}while(o!==null);p===null?f=p=i:p=p.next=i}else f=p=i;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function rl(t,i,o,u){var f=t.updateQueue;xr=!1;var p=f.firstBaseUpdate,E=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var B=N,ne=B.next;B.next=null,E===null?p=ne:E.next=ne,E=B;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,N=ge.lastBaseUpdate,N!==E&&(N===null?ge.firstBaseUpdate=ne:N.next=ne,ge.lastBaseUpdate=B))}if(p!==null){var xe=f.baseState;E=0,ge=ne=B=null,N=p;do{var me=N.lane,Fe=N.eventTime;if((u&me)===me){ge!==null&&(ge=ge.next={eventTime:Fe,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Ge=t,Ye=N;switch(me=i,Fe=o,Ye.tag){case 1:if(Ge=Ye.payload,typeof Ge=="function"){xe=Ge.call(Fe,xe,me);break e}xe=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=Ye.payload,me=typeof Ge=="function"?Ge.call(Fe,xe,me):Ge,me==null)break e;xe=te({},xe,me);break e;case 2:xr=!0}}N.callback!==null&&N.lane!==0&&(t.flags|=64,me=f.effects,me===null?f.effects=[N]:me.push(N))}else Fe={eventTime:Fe,lane:me,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ge===null?(ne=ge=Fe,B=xe):ge=ge.next=Fe,E|=me;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;me=N,N=me.next,me.next=null,f.lastBaseUpdate=me,f.shared.pending=null}}while(!0);if(ge===null&&(B=xe),f.baseState=B,f.firstBaseUpdate=ne,f.lastBaseUpdate=ge,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);Qr|=E,t.lanes=E,t.memoizedState=xe}}function Sp(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],f=u.callback;if(f!==null){if(u.callback=null,u=o,typeof f!="function")throw Error(n(191,f));f.call(u)}}}var Go={},wi=gr(Go),Wo=gr(Go),Xo=gr(Go);function Kr(t){if(t===Go)throw Error(n(174));return t}function xc(t,i){switch(kt(Xo,i),kt(Wo,t),kt(wi,Go),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:pe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=pe(i,t)}Vt(wi),kt(wi,i)}function Fs(){Vt(wi),Vt(Wo),Vt(Xo)}function yp(t){Kr(Xo.current);var i=Kr(wi.current),o=pe(i,t.type);i!==o&&(kt(Wo,t),kt(wi,o))}function Sc(t){Wo.current===t&&(Vt(wi),Vt(Wo))}var Yt=gr(0);function sl(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var yc=[];function Mc(){for(var t=0;t<yc.length;t++)yc[t]._workInProgressVersionPrimary=null;yc.length=0}var ol=P.ReactCurrentDispatcher,Ec=P.ReactCurrentBatchConfig,Zr=0,jt=null,rn=null,cn=null,al=!1,qo=!1,Yo=0,uv=0;function Sn(){throw Error(n(321))}function Tc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!li(t[o],i[o]))return!1;return!0}function wc(t,i,o,u,f,p){if(Zr=p,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ol.current=t===null||t.memoizedState===null?hv:pv,t=o(u,f),qo){p=0;do{if(qo=!1,Yo=0,25<=p)throw Error(n(301));p+=1,cn=rn=null,i.updateQueue=null,ol.current=mv,t=o(u,f)}while(qo)}if(ol.current=cl,i=rn!==null&&rn.next!==null,Zr=0,cn=rn=jt=null,al=!1,i)throw Error(n(300));return t}function Ac(){var t=Yo!==0;return Yo=0,t}function Ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?jt.memoizedState=cn=t:cn=cn.next=t,cn}function ei(){if(rn===null){var t=jt.alternate;t=t!==null?t.memoizedState:null}else t=rn.next;var i=cn===null?jt.memoizedState:cn.next;if(i!==null)cn=i,rn=t;else{if(t===null)throw Error(n(310));rn=t,t={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},cn===null?jt.memoizedState=cn=t:cn=cn.next=t}return cn}function jo(t,i){return typeof i=="function"?i(t):i}function Cc(t){var i=ei(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=rn,f=u.baseQueue,p=o.pending;if(p!==null){if(f!==null){var E=f.next;f.next=p.next,p.next=E}u.baseQueue=f=p,o.pending=null}if(f!==null){p=f.next,u=u.baseState;var N=E=null,B=null,ne=p;do{var ge=ne.lane;if((Zr&ge)===ge)B!==null&&(B=B.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),u=ne.hasEagerState?ne.eagerState:t(u,ne.action);else{var xe={lane:ge,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};B===null?(N=B=xe,E=u):B=B.next=xe,jt.lanes|=ge,Qr|=ge}ne=ne.next}while(ne!==null&&ne!==p);B===null?E=u:B.next=N,li(u,i.memoizedState)||(Nn=!0),i.memoizedState=u,i.baseState=E,i.baseQueue=B,o.lastRenderedState=u}if(t=o.interleaved,t!==null){f=t;do p=f.lane,jt.lanes|=p,Qr|=p,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Rc(t){var i=ei(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,f=o.pending,p=i.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do p=t(p,E.action),E=E.next;while(E!==f);li(p,i.memoizedState)||(Nn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,u]}function Mp(){}function Ep(t,i){var o=jt,u=ei(),f=i(),p=!li(u.memoizedState,f);if(p&&(u.memoizedState=f,Nn=!0),u=u.queue,bc(Ap.bind(null,o,u,t),[t]),u.getSnapshot!==i||p||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,$o(9,wp.bind(null,o,u,f,i),void 0,null),fn===null)throw Error(n(349));(Zr&30)!==0||Tp(o,i,f)}return f}function Tp(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function wp(t,i,o,u){i.value=o,i.getSnapshot=u,Cp(i)&&Rp(t)}function Ap(t,i,o){return o(function(){Cp(i)&&Rp(t)})}function Cp(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!li(t,o)}catch{return!0}}function Rp(t){var i=Hi(t,1);i!==null&&hi(i,t,1,-1)}function bp(t){var i=Ai();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:t},i.queue=t,t=t.dispatch=dv.bind(null,jt,t),[i.memoizedState,t]}function $o(t,i,o,u){return t={tag:t,create:i,destroy:o,deps:u,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,i.lastEffect=t)),t}function Pp(){return ei().memoizedState}function ll(t,i,o,u){var f=Ai();jt.flags|=t,f.memoizedState=$o(1|i,o,void 0,u===void 0?null:u)}function ul(t,i,o,u){var f=ei();u=u===void 0?null:u;var p=void 0;if(rn!==null){var E=rn.memoizedState;if(p=E.destroy,u!==null&&Tc(u,E.deps)){f.memoizedState=$o(i,o,p,u);return}}jt.flags|=t,f.memoizedState=$o(1|i,o,p,u)}function Dp(t,i){return ll(8390656,8,t,i)}function bc(t,i){return ul(2048,8,t,i)}function Lp(t,i){return ul(4,2,t,i)}function Ip(t,i){return ul(4,4,t,i)}function Np(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Up(t,i,o){return o=o!=null?o.concat([t]):null,ul(4,4,Np.bind(null,i,t),o)}function Pc(){}function Fp(t,i){var o=ei();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Tc(i,u[1])?u[0]:(o.memoizedState=[t,i],t)}function Op(t,i){var o=ei();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Tc(i,u[1])?u[0]:(t=t(),o.memoizedState=[t,i],t)}function Bp(t,i,o){return(Zr&21)===0?(t.baseState&&(t.baseState=!1,Nn=!0),t.memoizedState=o):(li(o,i)||(o=vn(),jt.lanes|=o,Qr|=o,t.baseState=!0),i)}function cv(t,i){var o=rt;rt=o!==0&&4>o?o:4,t(!0);var u=Ec.transition;Ec.transition={};try{t(!1),i()}finally{rt=o,Ec.transition=u}}function kp(){return ei().memoizedState}function fv(t,i,o){var u=Tr(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},zp(t))Vp(i,o);else if(o=_p(t,i,o,u),o!==null){var f=bn();hi(o,t,u,f),Hp(o,i,u)}}function dv(t,i,o){var u=Tr(t),f={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(zp(t))Vp(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var E=i.lastRenderedState,N=p(E,o);if(f.hasEagerState=!0,f.eagerState=N,li(N,E)){var B=i.interleaved;B===null?(f.next=f,_c(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}o=_p(t,i,f,u),o!==null&&(f=bn(),hi(o,t,u,f),Hp(o,i,u))}}function zp(t){var i=t.alternate;return t===jt||i!==null&&i===jt}function Vp(t,i){qo=al=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Hp(t,i,o){if((o&4194240)!==0){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,Dt(t,o)}}var cl={readContext:Jn,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},hv={readContext:Jn,useCallback:function(t,i){return Ai().memoizedState=[t,i===void 0?null:i],t},useContext:Jn,useEffect:Dp,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,ll(4194308,4,Np.bind(null,i,t),o)},useLayoutEffect:function(t,i){return ll(4194308,4,t,i)},useInsertionEffect:function(t,i){return ll(4,2,t,i)},useMemo:function(t,i){var o=Ai();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var u=Ai();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=fv.bind(null,jt,t),[u.memoizedState,t]},useRef:function(t){var i=Ai();return t={current:t},i.memoizedState=t},useState:bp,useDebugValue:Pc,useDeferredValue:function(t){return Ai().memoizedState=t},useTransition:function(){var t=bp(!1),i=t[0];return t=cv.bind(null,t[1]),Ai().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var u=jt,f=Ai();if(Xt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),fn===null)throw Error(n(349));(Zr&30)!==0||Tp(u,i,o)}f.memoizedState=o;var p={value:o,getSnapshot:i};return f.queue=p,Dp(Ap.bind(null,u,p,t),[t]),u.flags|=2048,$o(9,wp.bind(null,u,p,o,i),void 0,null),o},useId:function(){var t=Ai(),i=fn.identifierPrefix;if(Xt){var o=Vi,u=zi;o=(u&~(1<<32-Oe(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Yo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=uv++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},pv={readContext:Jn,useCallback:Fp,useContext:Jn,useEffect:bc,useImperativeHandle:Up,useInsertionEffect:Lp,useLayoutEffect:Ip,useMemo:Op,useReducer:Cc,useRef:Pp,useState:function(){return Cc(jo)},useDebugValue:Pc,useDeferredValue:function(t){var i=ei();return Bp(i,rn.memoizedState,t)},useTransition:function(){var t=Cc(jo)[0],i=ei().memoizedState;return[t,i]},useMutableSource:Mp,useSyncExternalStore:Ep,useId:kp,unstable_isNewReconciler:!1},mv={readContext:Jn,useCallback:Fp,useContext:Jn,useEffect:bc,useImperativeHandle:Up,useInsertionEffect:Lp,useLayoutEffect:Ip,useMemo:Op,useReducer:Rc,useRef:Pp,useState:function(){return Rc(jo)},useDebugValue:Pc,useDeferredValue:function(t){var i=ei();return rn===null?i.memoizedState=t:Bp(i,rn.memoizedState,t)},useTransition:function(){var t=Rc(jo)[0],i=ei().memoizedState;return[t,i]},useMutableSource:Mp,useSyncExternalStore:Ep,useId:kp,unstable_isNewReconciler:!1};function ci(t,i){if(t&&t.defaultProps){i=te({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Dc(t,i,o,u){i=t.memoizedState,o=o(u,i),o=o==null?i:te({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var fl={isMounted:function(t){return(t=t._reactInternals)?Kn(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var u=bn(),f=Tr(t),p=Gi(u,f);p.payload=i,o!=null&&(p.callback=o),i=Sr(t,p,f),i!==null&&(hi(i,t,f,u),il(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var u=bn(),f=Tr(t),p=Gi(u,f);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=Sr(t,p,f),i!==null&&(hi(i,t,f,u),il(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=bn(),u=Tr(t),f=Gi(o,u);f.tag=2,i!=null&&(f.callback=i),i=Sr(t,f,u),i!==null&&(hi(i,t,u,o),il(i,t,u))}};function Gp(t,i,o,u,f,p,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,p,E):i.prototype&&i.prototype.isPureReactComponent?!Uo(o,u)||!Uo(f,p):!0}function Wp(t,i,o){var u=!1,f=_r,p=i.contextType;return typeof p=="object"&&p!==null?p=Jn(p):(f=In(i)?qr:xn.current,u=i.contextTypes,p=(u=u!=null)?bs(t,f):_r),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=fl,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=p),i}function Xp(t,i,o,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==t&&fl.enqueueReplaceState(i,i.state,null)}function Lc(t,i,o,u){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},vc(t);var p=i.contextType;typeof p=="object"&&p!==null?f.context=Jn(p):(p=In(i)?qr:xn.current,f.context=bs(t,p)),f.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Dc(t,i,p,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&fl.enqueueReplaceState(f,f.state,null),rl(t,o,f,u),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Os(t,i){try{var o="",u=i;do o+=We(u),u=u.return;while(u);var f=o}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:f,digest:null}}function Ic(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Nc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var gv=typeof WeakMap=="function"?WeakMap:Map;function qp(t,i,o){o=Gi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){vl||(vl=!0,$c=u),Nc(t,i)},o}function Yp(t,i,o){o=Gi(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;o.payload=function(){return u(f)},o.callback=function(){Nc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Nc(t,i),typeof u!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function jp(t,i,o){var u=t.pingCache;if(u===null){u=t.pingCache=new gv;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(o)||(f.add(o),t=Pv.bind(null,t,i,o),i.then(t,t))}function $p(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Kp(t,i,o,u,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Gi(-1,1),i.tag=2,Sr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var _v=P.ReactCurrentOwner,Nn=!1;function Rn(t,i,o,u){i.child=t===null?gp(i,null,o,u):Is(i,t.child,o,u)}function Zp(t,i,o,u,f){o=o.render;var p=i.ref;return Us(i,f),u=wc(t,i,o,u,p,f),o=Ac(),t!==null&&!Nn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Wi(t,i,f)):(Xt&&o&&lc(i),i.flags|=1,Rn(t,i,u,f),i.child)}function Qp(t,i,o,u,f){if(t===null){var p=o.type;return typeof p=="function"&&!nf(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Jp(t,i,p,u,f)):(t=Tl(o.type,null,u,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&f)===0){var E=p.memoizedProps;if(o=o.compare,o=o!==null?o:Uo,o(E,u)&&t.ref===i.ref)return Wi(t,i,f)}return i.flags|=1,t=Ar(p,u),t.ref=i.ref,t.return=i,i.child=t}function Jp(t,i,o,u,f){if(t!==null){var p=t.memoizedProps;if(Uo(p,u)&&t.ref===i.ref)if(Nn=!1,i.pendingProps=u=p,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Nn=!0);else return i.lanes=t.lanes,Wi(t,i,f)}return Uc(t,i,o,u,f)}function em(t,i,o){var u=i.pendingProps,f=u.children,p=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(ks,Xn),Xn|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,kt(ks,Xn),Xn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,kt(ks,Xn),Xn|=u}else p!==null?(u=p.baseLanes|o,i.memoizedState=null):u=o,kt(ks,Xn),Xn|=u;return Rn(t,i,f,o),i.child}function tm(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Uc(t,i,o,u,f){var p=In(o)?qr:xn.current;return p=bs(i,p),Us(i,f),o=wc(t,i,o,u,p,f),u=Ac(),t!==null&&!Nn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Wi(t,i,f)):(Xt&&u&&lc(i),i.flags|=1,Rn(t,i,o,f),i.child)}function nm(t,i,o,u,f){if(In(o)){var p=!0;$a(i)}else p=!1;if(Us(i,f),i.stateNode===null)hl(t,i),Wp(i,o,u),Lc(i,o,u,f),u=!0;else if(t===null){var E=i.stateNode,N=i.memoizedProps;E.props=N;var B=E.context,ne=o.contextType;typeof ne=="object"&&ne!==null?ne=Jn(ne):(ne=In(o)?qr:xn.current,ne=bs(i,ne));var ge=o.getDerivedStateFromProps,xe=typeof ge=="function"||typeof E.getSnapshotBeforeUpdate=="function";xe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==u||B!==ne)&&Xp(i,E,u,ne),xr=!1;var me=i.memoizedState;E.state=me,rl(i,u,E,f),B=i.memoizedState,N!==u||me!==B||Ln.current||xr?(typeof ge=="function"&&(Dc(i,o,ge,u),B=i.memoizedState),(N=xr||Gp(i,o,N,u,me,B,ne))?(xe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=B),E.props=u,E.state=B,E.context=ne,u=N):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{E=i.stateNode,vp(t,i),N=i.memoizedProps,ne=i.type===i.elementType?N:ci(i.type,N),E.props=ne,xe=i.pendingProps,me=E.context,B=o.contextType,typeof B=="object"&&B!==null?B=Jn(B):(B=In(o)?qr:xn.current,B=bs(i,B));var Fe=o.getDerivedStateFromProps;(ge=typeof Fe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==xe||me!==B)&&Xp(i,E,u,B),xr=!1,me=i.memoizedState,E.state=me,rl(i,u,E,f);var Ge=i.memoizedState;N!==xe||me!==Ge||Ln.current||xr?(typeof Fe=="function"&&(Dc(i,o,Fe,u),Ge=i.memoizedState),(ne=xr||Gp(i,o,ne,u,me,Ge,B)||!1)?(ge||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,Ge,B),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,Ge,B)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||N===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ge),E.props=u,E.state=Ge,E.context=B,u=ne):(typeof E.componentDidUpdate!="function"||N===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),u=!1)}return Fc(t,i,o,u,p,f)}function Fc(t,i,o,u,f,p){tm(t,i);var E=(i.flags&128)!==0;if(!u&&!E)return f&&ap(i,o,!1),Wi(t,i,p);u=i.stateNode,_v.current=i;var N=E&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&E?(i.child=Is(i,t.child,null,p),i.child=Is(i,null,N,p)):Rn(t,i,N,p),i.memoizedState=u.state,f&&ap(i,o,!0),i.child}function im(t){var i=t.stateNode;i.pendingContext?sp(t,i.pendingContext,i.pendingContext!==i.context):i.context&&sp(t,i.context,!1),xc(t,i.containerInfo)}function rm(t,i,o,u,f){return Ls(),dc(f),i.flags|=256,Rn(t,i,o,u),i.child}var Oc={dehydrated:null,treeContext:null,retryLane:0};function Bc(t){return{baseLanes:t,cachePool:null,transitions:null}}function sm(t,i,o){var u=i.pendingProps,f=Yt.current,p=!1,E=(i.flags&128)!==0,N;if((N=E)||(N=t!==null&&t.memoizedState===null?!1:(f&2)!==0),N?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),kt(Yt,f&1),t===null)return fc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=u.children,t=u.fallback,p?(u=i.mode,p=i.child,E={mode:"hidden",children:E},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=E):p=wl(E,u,0,null),t=ns(t,u,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Bc(o),i.memoizedState=Oc,t):kc(i,E));if(f=t.memoizedState,f!==null&&(N=f.dehydrated,N!==null))return vv(t,i,E,u,N,f,o);if(p){p=u.fallback,E=i.mode,f=t.child,N=f.sibling;var B={mode:"hidden",children:u.children};return(E&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=B,i.deletions=null):(u=Ar(f,B),u.subtreeFlags=f.subtreeFlags&14680064),N!==null?p=Ar(N,p):(p=ns(p,E,o,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,E=t.child.memoizedState,E=E===null?Bc(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},p.memoizedState=E,p.childLanes=t.childLanes&~o,i.memoizedState=Oc,u}return p=t.child,t=p.sibling,u=Ar(p,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=u,i.memoizedState=null,u}function kc(t,i){return i=wl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function dl(t,i,o,u){return u!==null&&dc(u),Is(i,t.child,null,o),t=kc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function vv(t,i,o,u,f,p,E){if(o)return i.flags&256?(i.flags&=-257,u=Ic(Error(n(422))),dl(t,i,E,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=u.fallback,f=i.mode,u=wl({mode:"visible",children:u.children},f,0,null),p=ns(p,f,E,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,(i.mode&1)!==0&&Is(i,t.child,null,E),i.child.memoizedState=Bc(E),i.memoizedState=Oc,p);if((i.mode&1)===0)return dl(t,i,E,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var N=u.dgst;return u=N,p=Error(n(419)),u=Ic(p,u,void 0),dl(t,i,E,u)}if(N=(E&t.childLanes)!==0,Nn||N){if(u=fn,u!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|E))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Hi(t,f),hi(u,t,f,-1))}return tf(),u=Ic(Error(n(421))),dl(t,i,E,u)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=Dv.bind(null,t),f._reactRetry=i,null):(t=p.treeContext,Wn=mr(f.nextSibling),Gn=i,Xt=!0,ui=null,t!==null&&(Zn[Qn++]=zi,Zn[Qn++]=Vi,Zn[Qn++]=Yr,zi=t.id,Vi=t.overflow,Yr=i),i=kc(i,u.children),i.flags|=4096,i)}function om(t,i,o){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),gc(t.return,i,o)}function zc(t,i,o,u,f){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=f)}function am(t,i,o){var u=i.pendingProps,f=u.revealOrder,p=u.tail;if(Rn(t,i,u.children,o),u=Yt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&om(t,o,i);else if(t.tag===19)om(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(kt(Yt,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&sl(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),zc(i,!1,f,o,p);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&sl(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}zc(i,!0,o,null,p);break;case"together":zc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function hl(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Wi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Qr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Ar(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Ar(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function xv(t,i,o){switch(i.tag){case 3:im(i),Ls();break;case 5:yp(i);break;case 1:In(i.type)&&$a(i);break;case 4:xc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;kt(tl,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(kt(Yt,Yt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?sm(t,i,o):(kt(Yt,Yt.current&1),t=Wi(t,i,o),t!==null?t.sibling:null);kt(Yt,Yt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(t.flags&128)!==0){if(u)return am(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),kt(Yt,Yt.current),u)break;return null;case 22:case 23:return i.lanes=0,em(t,i,o)}return Wi(t,i,o)}var lm,Vc,um,cm;lm=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Vc=function(){},um=function(t,i,o,u){var f=t.memoizedProps;if(f!==u){t=i.stateNode,Kr(wi.current);var p=null;switch(o){case"input":f=xt(t,f),u=xt(t,u),p=[];break;case"select":f=te({},f,{value:void 0}),u=te({},u,{value:void 0}),p=[];break;case"textarea":f=Xe(t,f),u=Xe(t,u),p=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=qa)}qe(o,u);var E;o=null;for(ne in f)if(!u.hasOwnProperty(ne)&&f.hasOwnProperty(ne)&&f[ne]!=null)if(ne==="style"){var N=f[ne];for(E in N)N.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(a.hasOwnProperty(ne)?p||(p=[]):(p=p||[]).push(ne,null));for(ne in u){var B=u[ne];if(N=f!=null?f[ne]:void 0,u.hasOwnProperty(ne)&&B!==N&&(B!=null||N!=null))if(ne==="style")if(N){for(E in N)!N.hasOwnProperty(E)||B&&B.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in B)B.hasOwnProperty(E)&&N[E]!==B[E]&&(o||(o={}),o[E]=B[E])}else o||(p||(p=[]),p.push(ne,o)),o=B;else ne==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,N=N?N.__html:void 0,B!=null&&N!==B&&(p=p||[]).push(ne,B)):ne==="children"?typeof B!="string"&&typeof B!="number"||(p=p||[]).push(ne,""+B):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(a.hasOwnProperty(ne)?(B!=null&&ne==="onScroll"&&zt("scroll",t),p||N===B||(p=[])):(p=p||[]).push(ne,B))}o&&(p=p||[]).push("style",o);var ne=p;(i.updateQueue=ne)&&(i.flags|=4)}},cm=function(t,i,o,u){o!==u&&(i.flags|=4)};function Ko(t,i){if(!Xt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function yn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=u,t.childLanes=o,i}function Sv(t,i,o){var u=i.pendingProps;switch(uc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(i),null;case 1:return In(i.type)&&ja(),yn(i),null;case 3:return u=i.stateNode,Fs(),Vt(Ln),Vt(xn),Mc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(Ja(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ui!==null&&(Qc(ui),ui=null))),Vc(t,i),yn(i),null;case 5:Sc(i);var f=Kr(Xo.current);if(o=i.type,t!==null&&i.stateNode!=null)um(t,i,o,u,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return yn(i),null}if(t=Kr(wi.current),Ja(i)){u=i.stateNode,o=i.type;var p=i.memoizedProps;switch(u[Ti]=i,u[zo]=p,t=(i.mode&1)!==0,o){case"dialog":zt("cancel",u),zt("close",u);break;case"iframe":case"object":case"embed":zt("load",u);break;case"video":case"audio":for(f=0;f<Oo.length;f++)zt(Oo[f],u);break;case"source":zt("error",u);break;case"img":case"image":case"link":zt("error",u),zt("load",u);break;case"details":zt("toggle",u);break;case"input":Pt(u,p),zt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},zt("invalid",u);break;case"textarea":b(u,p),zt("invalid",u)}qe(o,p),f=null;for(var E in p)if(p.hasOwnProperty(E)){var N=p[E];E==="children"?typeof N=="string"?u.textContent!==N&&(p.suppressHydrationWarning!==!0&&Xa(u.textContent,N,t),f=["children",N]):typeof N=="number"&&u.textContent!==""+N&&(p.suppressHydrationWarning!==!0&&Xa(u.textContent,N,t),f=["children",""+N]):a.hasOwnProperty(E)&&N!=null&&E==="onScroll"&&zt("scroll",u)}switch(o){case"input":at(u),k(u,p,!0);break;case"textarea":at(u),G(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=qa)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=de(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=E.createElement(o,{is:u.is}):(t=E.createElement(o),o==="select"&&(E=t,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):t=E.createElementNS(t,o),t[Ti]=i,t[zo]=u,lm(t,i,!1,!1),i.stateNode=t;e:{switch(E=Ae(o,u),o){case"dialog":zt("cancel",t),zt("close",t),f=u;break;case"iframe":case"object":case"embed":zt("load",t),f=u;break;case"video":case"audio":for(f=0;f<Oo.length;f++)zt(Oo[f],t);f=u;break;case"source":zt("error",t),f=u;break;case"img":case"image":case"link":zt("error",t),zt("load",t),f=u;break;case"details":zt("toggle",t),f=u;break;case"input":Pt(t,u),f=xt(t,u),zt("invalid",t);break;case"option":f=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},f=te({},u,{value:void 0}),zt("invalid",t);break;case"textarea":b(t,u),f=Xe(t,u),zt("invalid",t);break;default:f=u}qe(o,f),N=f;for(p in N)if(N.hasOwnProperty(p)){var B=N[p];p==="style"?Re(t,B):p==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&je(t,B)):p==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&Ee(t,B):typeof B=="number"&&Ee(t,""+B):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?B!=null&&p==="onScroll"&&zt("scroll",t):B!=null&&L(t,p,B,E))}switch(o){case"input":at(t),k(t,u,!1);break;case"textarea":at(t),G(t);break;case"option":u.value!=null&&t.setAttribute("value",""+_e(u.value));break;case"select":t.multiple=!!u.multiple,p=u.value,p!=null?St(t,!!u.multiple,p,!1):u.defaultValue!=null&&St(t,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=qa)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return yn(i),null;case 6:if(t&&i.stateNode!=null)cm(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(o=Kr(Xo.current),Kr(wi.current),Ja(i)){if(u=i.stateNode,o=i.memoizedProps,u[Ti]=i,(p=u.nodeValue!==o)&&(t=Gn,t!==null))switch(t.tag){case 3:Xa(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xa(u.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Ti]=i,i.stateNode=u}return yn(i),null;case 13:if(Vt(Yt),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Xt&&Wn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)hp(),Ls(),i.flags|=98560,p=!1;else if(p=Ja(i),u!==null&&u.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[Ti]=i}else Ls(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;yn(i),p=!1}else ui!==null&&(Qc(ui),ui=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Yt.current&1)!==0?sn===0&&(sn=3):tf())),i.updateQueue!==null&&(i.flags|=4),yn(i),null);case 4:return Fs(),Vc(t,i),t===null&&Bo(i.stateNode.containerInfo),yn(i),null;case 10:return mc(i.type._context),yn(i),null;case 17:return In(i.type)&&ja(),yn(i),null;case 19:if(Vt(Yt),p=i.memoizedState,p===null)return yn(i),null;if(u=(i.flags&128)!==0,E=p.rendering,E===null)if(u)Ko(p,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=sl(t),E!==null){for(i.flags|=128,Ko(p,!1),u=E.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)p=o,t=u,p.flags&=14680066,E=p.alternate,E===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=E.childLanes,p.lanes=E.lanes,p.child=E.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=E.memoizedProps,p.memoizedState=E.memoizedState,p.updateQueue=E.updateQueue,p.type=E.type,t=E.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return kt(Yt,Yt.current&1|2),i.child}t=t.sibling}p.tail!==null&&qt()>zs&&(i.flags|=128,u=!0,Ko(p,!1),i.lanes=4194304)}else{if(!u)if(t=sl(E),t!==null){if(i.flags|=128,u=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Ko(p,!0),p.tail===null&&p.tailMode==="hidden"&&!E.alternate&&!Xt)return yn(i),null}else 2*qt()-p.renderingStartTime>zs&&o!==1073741824&&(i.flags|=128,u=!0,Ko(p,!1),i.lanes=4194304);p.isBackwards?(E.sibling=i.child,i.child=E):(o=p.last,o!==null?o.sibling=E:i.child=E,p.last=E)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=qt(),i.sibling=null,o=Yt.current,kt(Yt,u?o&1|2:o&1),i):(yn(i),null);case 22:case 23:return ef(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Xn&1073741824)!==0&&(yn(i),i.subtreeFlags&6&&(i.flags|=8192)):yn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function yv(t,i){switch(uc(i),i.tag){case 1:return In(i.type)&&ja(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Fs(),Vt(Ln),Vt(xn),Mc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Sc(i),null;case 13:if(Vt(Yt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Ls()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Vt(Yt),null;case 4:return Fs(),null;case 10:return mc(i.type._context),null;case 22:case 23:return ef(),null;case 24:return null;default:return null}}var pl=!1,Mn=!1,Mv=typeof WeakSet=="function"?WeakSet:Set,ke=null;function Bs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){$t(t,i,u)}else o.current=null}function Hc(t,i,o){try{o()}catch(u){$t(t,i,u)}}var fm=!1;function Ev(t,i){if(ec=Na,t=Gh(),qu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var E=0,N=-1,B=-1,ne=0,ge=0,xe=t,me=null;t:for(;;){for(var Fe;xe!==o||f!==0&&xe.nodeType!==3||(N=E+f),xe!==p||u!==0&&xe.nodeType!==3||(B=E+u),xe.nodeType===3&&(E+=xe.nodeValue.length),(Fe=xe.firstChild)!==null;)me=xe,xe=Fe;for(;;){if(xe===t)break t;if(me===o&&++ne===f&&(N=E),me===p&&++ge===u&&(B=E),(Fe=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=Fe}o=N===-1||B===-1?null:{start:N,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(tc={focusedElem:t,selectionRange:o},Na=!1,ke=i;ke!==null;)if(i=ke,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ke=t;else for(;ke!==null;){i=ke;try{var Ge=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var Ye=Ge.memoizedProps,Kt=Ge.memoizedState,Y=i.stateNode,H=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:ci(i.type,Ye),Kt);Y.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Me){$t(i,i.return,Me)}if(t=i.sibling,t!==null){t.return=i.return,ke=t;break}ke=i.return}return Ge=fm,fm=!1,Ge}function Zo(t,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&t)===t){var p=f.destroy;f.destroy=void 0,p!==void 0&&Hc(i,o,p)}f=f.next}while(f!==u)}}function ml(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Gc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function dm(t){var i=t.alternate;i!==null&&(t.alternate=null,dm(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Ti],delete i[zo],delete i[sc],delete i[sv],delete i[ov])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hm(t){return t.tag===5||t.tag===3||t.tag===4}function pm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wc(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=qa));else if(u!==4&&(t=t.child,t!==null))for(Wc(t,i,o),t=t.sibling;t!==null;)Wc(t,i,o),t=t.sibling}function Xc(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(Xc(t,i,o),t=t.sibling;t!==null;)Xc(t,i,o),t=t.sibling}var mn=null,fi=!1;function yr(t,i,o){for(o=o.child;o!==null;)mm(t,i,o),o=o.sibling}function mm(t,i,o){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Ue,o)}catch{}switch(o.tag){case 5:Mn||Bs(o,i);case 6:var u=mn,f=fi;mn=null,yr(t,i,o),mn=u,fi=f,mn!==null&&(fi?(t=mn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):mn.removeChild(o.stateNode));break;case 18:mn!==null&&(fi?(t=mn,o=o.stateNode,t.nodeType===8?rc(t.parentNode,o):t.nodeType===1&&rc(t,o),bo(t)):rc(mn,o.stateNode));break;case 4:u=mn,f=fi,mn=o.stateNode.containerInfo,fi=!0,yr(t,i,o),mn=u,fi=f;break;case 0:case 11:case 14:case 15:if(!Mn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var p=f,E=p.destroy;p=p.tag,E!==void 0&&((p&2)!==0||(p&4)!==0)&&Hc(o,i,E),f=f.next}while(f!==u)}yr(t,i,o);break;case 1:if(!Mn&&(Bs(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(N){$t(o,i,N)}yr(t,i,o);break;case 21:yr(t,i,o);break;case 22:o.mode&1?(Mn=(u=Mn)||o.memoizedState!==null,yr(t,i,o),Mn=u):yr(t,i,o);break;default:yr(t,i,o)}}function gm(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Mv),i.forEach(function(u){var f=Lv.bind(null,t,u);o.has(u)||(o.add(u),u.then(f,f))})}}function di(t,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u];try{var p=t,E=i,N=E;e:for(;N!==null;){switch(N.tag){case 5:mn=N.stateNode,fi=!1;break e;case 3:mn=N.stateNode.containerInfo,fi=!0;break e;case 4:mn=N.stateNode.containerInfo,fi=!0;break e}N=N.return}if(mn===null)throw Error(n(160));mm(p,E,f),mn=null,fi=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(ne){$t(f,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)_m(i,t),i=i.sibling}function _m(t,i){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(di(i,t),Ci(t),u&4){try{Zo(3,t,t.return),ml(3,t)}catch(Ye){$t(t,t.return,Ye)}try{Zo(5,t,t.return)}catch(Ye){$t(t,t.return,Ye)}}break;case 1:di(i,t),Ci(t),u&512&&o!==null&&Bs(o,o.return);break;case 5:if(di(i,t),Ci(t),u&512&&o!==null&&Bs(o,o.return),t.flags&32){var f=t.stateNode;try{Ee(f,"")}catch(Ye){$t(t,t.return,Ye)}}if(u&4&&(f=t.stateNode,f!=null)){var p=t.memoizedProps,E=o!==null?o.memoizedProps:p,N=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{N==="input"&&p.type==="radio"&&p.name!=null&&lt(f,p),Ae(N,E);var ne=Ae(N,p);for(E=0;E<B.length;E+=2){var ge=B[E],xe=B[E+1];ge==="style"?Re(f,xe):ge==="dangerouslySetInnerHTML"?je(f,xe):ge==="children"?Ee(f,xe):L(f,ge,xe,ne)}switch(N){case"input":Gt(f,p);break;case"textarea":M(f,p);break;case"select":var me=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var Fe=p.value;Fe!=null?St(f,!!p.multiple,Fe,!1):me!==!!p.multiple&&(p.defaultValue!=null?St(f,!!p.multiple,p.defaultValue,!0):St(f,!!p.multiple,p.multiple?[]:"",!1))}f[zo]=p}catch(Ye){$t(t,t.return,Ye)}}break;case 6:if(di(i,t),Ci(t),u&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,p=t.memoizedProps;try{f.nodeValue=p}catch(Ye){$t(t,t.return,Ye)}}break;case 3:if(di(i,t),Ci(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{bo(i.containerInfo)}catch(Ye){$t(t,t.return,Ye)}break;case 4:di(i,t),Ci(t);break;case 13:di(i,t),Ci(t),f=t.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(jc=qt())),u&4&&gm(t);break;case 22:if(ge=o!==null&&o.memoizedState!==null,t.mode&1?(Mn=(ne=Mn)||ge,di(i,t),Mn=ne):di(i,t),Ci(t),u&8192){if(ne=t.memoizedState!==null,(t.stateNode.isHidden=ne)&&!ge&&(t.mode&1)!==0)for(ke=t,ge=t.child;ge!==null;){for(xe=ke=ge;ke!==null;){switch(me=ke,Fe=me.child,me.tag){case 0:case 11:case 14:case 15:Zo(4,me,me.return);break;case 1:Bs(me,me.return);var Ge=me.stateNode;if(typeof Ge.componentWillUnmount=="function"){u=me,o=me.return;try{i=u,Ge.props=i.memoizedProps,Ge.state=i.memoizedState,Ge.componentWillUnmount()}catch(Ye){$t(u,o,Ye)}}break;case 5:Bs(me,me.return);break;case 22:if(me.memoizedState!==null){Sm(xe);continue}}Fe!==null?(Fe.return=me,ke=Fe):Sm(xe)}ge=ge.sibling}e:for(ge=null,xe=t;;){if(xe.tag===5){if(ge===null){ge=xe;try{f=xe.stateNode,ne?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(N=xe.stateNode,B=xe.memoizedProps.style,E=B!=null&&B.hasOwnProperty("display")?B.display:null,N.style.display=Se("display",E))}catch(Ye){$t(t,t.return,Ye)}}}else if(xe.tag===6){if(ge===null)try{xe.stateNode.nodeValue=ne?"":xe.memoizedProps}catch(Ye){$t(t,t.return,Ye)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;ge===xe&&(ge=null),xe=xe.return}ge===xe&&(ge=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:di(i,t),Ci(t),u&4&&gm(t);break;case 21:break;default:di(i,t),Ci(t)}}function Ci(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(hm(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(Ee(f,""),u.flags&=-33);var p=pm(t);Xc(t,p,f);break;case 3:case 4:var E=u.stateNode.containerInfo,N=pm(t);Wc(t,N,E);break;default:throw Error(n(161))}}catch(B){$t(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Tv(t,i,o){ke=t,vm(t)}function vm(t,i,o){for(var u=(t.mode&1)!==0;ke!==null;){var f=ke,p=f.child;if(f.tag===22&&u){var E=f.memoizedState!==null||pl;if(!E){var N=f.alternate,B=N!==null&&N.memoizedState!==null||Mn;N=pl;var ne=Mn;if(pl=E,(Mn=B)&&!ne)for(ke=f;ke!==null;)E=ke,B=E.child,E.tag===22&&E.memoizedState!==null?ym(f):B!==null?(B.return=E,ke=B):ym(f);for(;p!==null;)ke=p,vm(p),p=p.sibling;ke=f,pl=N,Mn=ne}xm(t)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,ke=p):xm(t)}}function xm(t){for(;ke!==null;){var i=ke;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mn||ml(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Mn)if(o===null)u.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:ci(i.type,o.memoizedProps);u.componentDidUpdate(f,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Sp(i,p,u);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Sp(i,E,o)}break;case 5:var N=i.stateNode;if(o===null&&i.flags&4){o=N;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var ge=ne.memoizedState;if(ge!==null){var xe=ge.dehydrated;xe!==null&&bo(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Mn||i.flags&512&&Gc(i)}catch(me){$t(i,i.return,me)}}if(i===t){ke=null;break}if(o=i.sibling,o!==null){o.return=i.return,ke=o;break}ke=i.return}}function Sm(t){for(;ke!==null;){var i=ke;if(i===t){ke=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ke=o;break}ke=i.return}}function ym(t){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{ml(4,i)}catch(B){$t(i,o,B)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(B){$t(i,f,B)}}var p=i.return;try{Gc(i)}catch(B){$t(i,p,B)}break;case 5:var E=i.return;try{Gc(i)}catch(B){$t(i,E,B)}}}catch(B){$t(i,i.return,B)}if(i===t){ke=null;break}var N=i.sibling;if(N!==null){N.return=i.return,ke=N;break}ke=i.return}}var wv=Math.ceil,gl=P.ReactCurrentDispatcher,qc=P.ReactCurrentOwner,ti=P.ReactCurrentBatchConfig,Et=0,fn=null,Qt=null,gn=0,Xn=0,ks=gr(0),sn=0,Qo=null,Qr=0,_l=0,Yc=0,Jo=null,Un=null,jc=0,zs=1/0,Xi=null,vl=!1,$c=null,Mr=null,xl=!1,Er=null,Sl=0,ea=0,Kc=null,yl=-1,Ml=0;function bn(){return(Et&6)!==0?qt():yl!==-1?yl:yl=qt()}function Tr(t){return(t.mode&1)===0?1:(Et&2)!==0&&gn!==0?gn&-gn:lv.transition!==null?(Ml===0&&(Ml=vn()),Ml):(t=rt,t!==0||(t=window.event,t=t===void 0?16:Eh(t.type)),t)}function hi(t,i,o,u){if(50<ea)throw ea=0,Kc=null,Error(n(185));nn(t,o,u),((Et&2)===0||t!==fn)&&(t===fn&&((Et&2)===0&&(_l|=o),sn===4&&wr(t,gn)),Fn(t,u),o===1&&Et===0&&(i.mode&1)===0&&(zs=qt()+500,Ka&&vr()))}function Fn(t,i){var o=t.callbackNode;Rt(t,i);var u=wt(t,t===fn?gn:0);if(u===0)o!==null&&Da(o),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(o!=null&&Da(o),i===1)t.tag===0?av(Em.bind(null,t)):lp(Em.bind(null,t)),iv(function(){(Et&6)===0&&vr()}),o=null;else{switch(Cn(u)){case 1:o=W;break;case 4:o=ie;break;case 16:o=ee;break;case 536870912:o=be;break;default:o=ee}o=Dm(o,Mm.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Mm(t,i){if(yl=-1,Ml=0,(Et&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Vs()&&t.callbackNode!==o)return null;var u=wt(t,t===fn?gn:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||i)i=El(t,u);else{i=u;var f=Et;Et|=2;var p=wm();(fn!==t||gn!==i)&&(Xi=null,zs=qt()+500,es(t,i));do try{Rv();break}catch(N){Tm(t,N)}while(!0);pc(),gl.current=p,Et=f,Qt!==null?i=0:(fn=null,gn=0,i=sn)}if(i!==0){if(i===2&&(f=_t(t),f!==0&&(u=f,i=Zc(t,f))),i===1)throw o=Qo,es(t,0),wr(t,u),Fn(t,qt()),o;if(i===6)wr(t,u);else{if(f=t.current.alternate,(u&30)===0&&!Av(f)&&(i=El(t,u),i===2&&(p=_t(t),p!==0&&(u=p,i=Zc(t,p))),i===1))throw o=Qo,es(t,0),wr(t,u),Fn(t,qt()),o;switch(t.finishedWork=f,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:ts(t,Un,Xi);break;case 3:if(wr(t,u),(u&130023424)===u&&(i=jc+500-qt(),10<i)){if(wt(t,0)!==0)break;if(f=t.suspendedLanes,(f&u)!==u){bn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=ic(ts.bind(null,t,Un,Xi),i);break}ts(t,Un,Xi);break;case 4:if(wr(t,u),(u&4194240)===u)break;for(i=t.eventTimes,f=-1;0<u;){var E=31-Oe(u);p=1<<E,E=i[E],E>f&&(f=E),u&=~p}if(u=f,u=qt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*wv(u/1960))-u,10<u){t.timeoutHandle=ic(ts.bind(null,t,Un,Xi),u);break}ts(t,Un,Xi);break;case 5:ts(t,Un,Xi);break;default:throw Error(n(329))}}}return Fn(t,qt()),t.callbackNode===o?Mm.bind(null,t):null}function Zc(t,i){var o=Jo;return t.current.memoizedState.isDehydrated&&(es(t,i).flags|=256),t=El(t,i),t!==2&&(i=Un,Un=o,i!==null&&Qc(i)),t}function Qc(t){Un===null?Un=t:Un.push.apply(Un,t)}function Av(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var f=o[u],p=f.getSnapshot;f=f.value;try{if(!li(p(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function wr(t,i){for(i&=~Yc,i&=~_l,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Oe(i),u=1<<o;t[o]=-1,i&=~u}}function Em(t){if((Et&6)!==0)throw Error(n(327));Vs();var i=wt(t,0);if((i&1)===0)return Fn(t,qt()),null;var o=El(t,i);if(t.tag!==0&&o===2){var u=_t(t);u!==0&&(i=u,o=Zc(t,u))}if(o===1)throw o=Qo,es(t,0),wr(t,i),Fn(t,qt()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,ts(t,Un,Xi),Fn(t,qt()),null}function Jc(t,i){var o=Et;Et|=1;try{return t(i)}finally{Et=o,Et===0&&(zs=qt()+500,Ka&&vr())}}function Jr(t){Er!==null&&Er.tag===0&&(Et&6)===0&&Vs();var i=Et;Et|=1;var o=ti.transition,u=rt;try{if(ti.transition=null,rt=1,t)return t()}finally{rt=u,ti.transition=o,Et=i,(Et&6)===0&&vr()}}function ef(){Xn=ks.current,Vt(ks)}function es(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,nv(o)),Qt!==null)for(o=Qt.return;o!==null;){var u=o;switch(uc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ja();break;case 3:Fs(),Vt(Ln),Vt(xn),Mc();break;case 5:Sc(u);break;case 4:Fs();break;case 13:Vt(Yt);break;case 19:Vt(Yt);break;case 10:mc(u.type._context);break;case 22:case 23:ef()}o=o.return}if(fn=t,Qt=t=Ar(t.current,null),gn=Xn=i,sn=0,Qo=null,Yc=_l=Qr=0,Un=Jo=null,$r!==null){for(i=0;i<$r.length;i++)if(o=$r[i],u=o.interleaved,u!==null){o.interleaved=null;var f=u.next,p=o.pending;if(p!==null){var E=p.next;p.next=f,u.next=E}o.pending=u}$r=null}return t}function Tm(t,i){do{var o=Qt;try{if(pc(),ol.current=cl,al){for(var u=jt.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}al=!1}if(Zr=0,cn=rn=jt=null,qo=!1,Yo=0,qc.current=null,o===null||o.return===null){sn=1,Qo=i,Qt=null;break}e:{var p=t,E=o.return,N=o,B=i;if(i=gn,N.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ne=B,ge=N,xe=ge.tag;if((ge.mode&1)===0&&(xe===0||xe===11||xe===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Fe=$p(E);if(Fe!==null){Fe.flags&=-257,Kp(Fe,E,N,p,i),Fe.mode&1&&jp(p,ne,i),i=Fe,B=ne;var Ge=i.updateQueue;if(Ge===null){var Ye=new Set;Ye.add(B),i.updateQueue=Ye}else Ge.add(B);break e}else{if((i&1)===0){jp(p,ne,i),tf();break e}B=Error(n(426))}}else if(Xt&&N.mode&1){var Kt=$p(E);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),Kp(Kt,E,N,p,i),dc(Os(B,N));break e}}p=B=Os(B,N),sn!==4&&(sn=2),Jo===null?Jo=[p]:Jo.push(p),p=E;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Y=qp(p,B,i);xp(p,Y);break e;case 1:N=B;var H=p.type,K=p.stateNode;if((p.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(Mr===null||!Mr.has(K)))){p.flags|=65536,i&=-i,p.lanes|=i;var Me=Yp(p,N,i);xp(p,Me);break e}}p=p.return}while(p!==null)}Cm(o)}catch($e){i=$e,Qt===o&&o!==null&&(Qt=o=o.return);continue}break}while(!0)}function wm(){var t=gl.current;return gl.current=cl,t===null?cl:t}function tf(){(sn===0||sn===3||sn===2)&&(sn=4),fn===null||(Qr&268435455)===0&&(_l&268435455)===0||wr(fn,gn)}function El(t,i){var o=Et;Et|=2;var u=wm();(fn!==t||gn!==i)&&(Xi=null,es(t,i));do try{Cv();break}catch(f){Tm(t,f)}while(!0);if(pc(),Et=o,gl.current=u,Qt!==null)throw Error(n(261));return fn=null,gn=0,sn}function Cv(){for(;Qt!==null;)Am(Qt)}function Rv(){for(;Qt!==null&&!Lu();)Am(Qt)}function Am(t){var i=Pm(t.alternate,t,Xn);t.memoizedProps=t.pendingProps,i===null?Cm(t):Qt=i,qc.current=null}function Cm(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=Sv(o,i,Xn),o!==null){Qt=o;return}}else{if(o=yv(o,i),o!==null){o.flags&=32767,Qt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{sn=6,Qt=null;return}}if(i=i.sibling,i!==null){Qt=i;return}Qt=i=t}while(i!==null);sn===0&&(sn=5)}function ts(t,i,o){var u=rt,f=ti.transition;try{ti.transition=null,rt=1,bv(t,i,o,u)}finally{ti.transition=f,rt=u}return null}function bv(t,i,o,u){do Vs();while(Er!==null);if((Et&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(Wr(t,p),t===fn&&(Qt=fn=null,gn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||xl||(xl=!0,Dm(ee,function(){return Vs(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=ti.transition,ti.transition=null;var E=rt;rt=1;var N=Et;Et|=4,qc.current=null,Ev(t,o),_m(o,t),$_(tc),Na=!!ec,tc=ec=null,t.current=o,Tv(o),Iu(),Et=N,rt=E,ti.transition=p}else t.current=o;if(xl&&(xl=!1,Er=t,Sl=f),p=t.pendingLanes,p===0&&(Mr=null),Ve(o.stateNode),Fn(t,qt()),i!==null)for(u=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],u(f.value,{componentStack:f.stack,digest:f.digest});if(vl)throw vl=!1,t=$c,$c=null,t;return(Sl&1)!==0&&t.tag!==0&&Vs(),p=t.pendingLanes,(p&1)!==0?t===Kc?ea++:(ea=0,Kc=t):ea=0,vr(),null}function Vs(){if(Er!==null){var t=Cn(Sl),i=ti.transition,o=rt;try{if(ti.transition=null,rt=16>t?16:t,Er===null)var u=!1;else{if(t=Er,Er=null,Sl=0,(Et&6)!==0)throw Error(n(331));var f=Et;for(Et|=4,ke=t.current;ke!==null;){var p=ke,E=p.child;if((ke.flags&16)!==0){var N=p.deletions;if(N!==null){for(var B=0;B<N.length;B++){var ne=N[B];for(ke=ne;ke!==null;){var ge=ke;switch(ge.tag){case 0:case 11:case 15:Zo(8,ge,p)}var xe=ge.child;if(xe!==null)xe.return=ge,ke=xe;else for(;ke!==null;){ge=ke;var me=ge.sibling,Fe=ge.return;if(dm(ge),ge===ne){ke=null;break}if(me!==null){me.return=Fe,ke=me;break}ke=Fe}}}var Ge=p.alternate;if(Ge!==null){var Ye=Ge.child;if(Ye!==null){Ge.child=null;do{var Kt=Ye.sibling;Ye.sibling=null,Ye=Kt}while(Ye!==null)}}ke=p}}if((p.subtreeFlags&2064)!==0&&E!==null)E.return=p,ke=E;else e:for(;ke!==null;){if(p=ke,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Zo(9,p,p.return)}var Y=p.sibling;if(Y!==null){Y.return=p.return,ke=Y;break e}ke=p.return}}var H=t.current;for(ke=H;ke!==null;){E=ke;var K=E.child;if((E.subtreeFlags&2064)!==0&&K!==null)K.return=E,ke=K;else e:for(E=H;ke!==null;){if(N=ke,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:ml(9,N)}}catch($e){$t(N,N.return,$e)}if(N===E){ke=null;break e}var Me=N.sibling;if(Me!==null){Me.return=N.return,ke=Me;break e}ke=N.return}}if(Et=f,vr(),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Ue,t)}catch{}u=!0}return u}finally{rt=o,ti.transition=i}}return!1}function Rm(t,i,o){i=Os(o,i),i=qp(t,i,1),t=Sr(t,i,1),i=bn(),t!==null&&(nn(t,1,i),Fn(t,i))}function $t(t,i,o){if(t.tag===3)Rm(t,t,o);else for(;i!==null;){if(i.tag===3){Rm(i,t,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Mr===null||!Mr.has(u))){t=Os(o,t),t=Yp(i,t,1),i=Sr(i,t,1),t=bn(),i!==null&&(nn(i,1,t),Fn(i,t));break}}i=i.return}}function Pv(t,i,o){var u=t.pingCache;u!==null&&u.delete(i),i=bn(),t.pingedLanes|=t.suspendedLanes&o,fn===t&&(gn&o)===o&&(sn===4||sn===3&&(gn&130023424)===gn&&500>qt()-jc?es(t,0):Yc|=o),Fn(t,i)}function bm(t,i){i===0&&((t.mode&1)===0?i=1:(i=Bt,Bt<<=1,(Bt&130023424)===0&&(Bt=4194304)));var o=bn();t=Hi(t,i),t!==null&&(nn(t,i,o),Fn(t,o))}function Dv(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),bm(t,o)}function Lv(t,i){var o=0;switch(t.tag){case 13:var u=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),bm(t,o)}var Pm;Pm=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Ln.current)Nn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Nn=!1,xv(t,i,o);Nn=(t.flags&131072)!==0}else Nn=!1,Xt&&(i.flags&1048576)!==0&&up(i,Qa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;hl(t,i),t=i.pendingProps;var f=bs(i,xn.current);Us(i,o),f=wc(null,i,u,t,f,o);var p=Ac();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,In(u)?(p=!0,$a(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,vc(i),f.updater=fl,i.stateNode=f,f._reactInternals=i,Lc(i,u,t,o),i=Fc(null,i,u,!0,p,o)):(i.tag=0,Xt&&p&&lc(i),Rn(null,i,f,o),i=i.child),i;case 16:u=i.elementType;e:{switch(hl(t,i),t=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=Nv(u),t=ci(u,t),f){case 0:i=Uc(null,i,u,t,o);break e;case 1:i=nm(null,i,u,t,o);break e;case 11:i=Zp(null,i,u,t,o);break e;case 14:i=Qp(null,i,u,ci(u.type,t),o);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ci(u,f),Uc(t,i,u,f,o);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ci(u,f),nm(t,i,u,f,o);case 3:e:{if(im(i),t===null)throw Error(n(387));u=i.pendingProps,p=i.memoizedState,f=p.element,vp(t,i),rl(i,u,null,o);var E=i.memoizedState;if(u=E.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=Os(Error(n(423)),i),i=rm(t,i,u,o,f);break e}else if(u!==f){f=Os(Error(n(424)),i),i=rm(t,i,u,o,f);break e}else for(Wn=mr(i.stateNode.containerInfo.firstChild),Gn=i,Xt=!0,ui=null,o=gp(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ls(),u===f){i=Wi(t,i,o);break e}Rn(t,i,u,o)}i=i.child}return i;case 5:return yp(i),t===null&&fc(i),u=i.type,f=i.pendingProps,p=t!==null?t.memoizedProps:null,E=f.children,nc(u,f)?E=null:p!==null&&nc(u,p)&&(i.flags|=32),tm(t,i),Rn(t,i,E,o),i.child;case 6:return t===null&&fc(i),null;case 13:return sm(t,i,o);case 4:return xc(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=Is(i,null,u,o):Rn(t,i,u,o),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ci(u,f),Zp(t,i,u,f,o);case 7:return Rn(t,i,i.pendingProps,o),i.child;case 8:return Rn(t,i,i.pendingProps.children,o),i.child;case 12:return Rn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,p=i.memoizedProps,E=f.value,kt(tl,u._currentValue),u._currentValue=E,p!==null)if(li(p.value,E)){if(p.children===f.children&&!Ln.current){i=Wi(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var N=p.dependencies;if(N!==null){E=p.child;for(var B=N.firstContext;B!==null;){if(B.context===u){if(p.tag===1){B=Gi(-1,o&-o),B.tag=2;var ne=p.updateQueue;if(ne!==null){ne=ne.shared;var ge=ne.pending;ge===null?B.next=B:(B.next=ge.next,ge.next=B),ne.pending=B}}p.lanes|=o,B=p.alternate,B!==null&&(B.lanes|=o),gc(p.return,o,i),N.lanes|=o;break}B=B.next}}else if(p.tag===10)E=p.type===i.type?null:p.child;else if(p.tag===18){if(E=p.return,E===null)throw Error(n(341));E.lanes|=o,N=E.alternate,N!==null&&(N.lanes|=o),gc(E,o,i),E=p.sibling}else E=p.child;if(E!==null)E.return=p;else for(E=p;E!==null;){if(E===i){E=null;break}if(p=E.sibling,p!==null){p.return=E.return,E=p;break}E=E.return}p=E}Rn(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,Us(i,o),f=Jn(f),u=u(f),i.flags|=1,Rn(t,i,u,o),i.child;case 14:return u=i.type,f=ci(u,i.pendingProps),f=ci(u.type,f),Qp(t,i,u,f,o);case 15:return Jp(t,i,i.type,i.pendingProps,o);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ci(u,f),hl(t,i),i.tag=1,In(u)?(t=!0,$a(i)):t=!1,Us(i,o),Wp(i,u,f),Lc(i,u,f,o),Fc(null,i,u,!0,t,o);case 19:return am(t,i,o);case 22:return em(t,i,o)}throw Error(n(156,i.tag))};function Dm(t,i){return Pa(t,i)}function Iv(t,i,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(t,i,o,u){return new Iv(t,i,o,u)}function nf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Nv(t){if(typeof t=="function")return nf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===se)return 11;if(t===ce)return 14}return 2}function Ar(t,i){var o=t.alternate;return o===null?(o=ni(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Tl(t,i,o,u,f,p){var E=2;if(u=t,typeof t=="function")nf(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case I:return ns(o.children,f,p,i);case j:E=8,f|=8;break;case C:return t=ni(12,o,i,f|2),t.elementType=C,t.lanes=p,t;case Z:return t=ni(13,o,i,f),t.elementType=Z,t.lanes=p,t;case fe:return t=ni(19,o,i,f),t.elementType=fe,t.lanes=p,t;case q:return wl(o,f,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:E=10;break e;case V:E=9;break e;case se:E=11;break e;case ce:E=14;break e;case oe:E=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ni(E,o,i,f),i.elementType=t,i.type=u,i.lanes=p,i}function ns(t,i,o,u){return t=ni(7,t,u,i),t.lanes=o,t}function wl(t,i,o,u){return t=ni(22,t,u,i),t.elementType=q,t.lanes=o,t.stateNode={isHidden:!1},t}function rf(t,i,o){return t=ni(6,t,null,i),t.lanes=o,t}function sf(t,i,o){return i=ni(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Uv(t,i,o,u,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mi(0),this.expirationTimes=Mi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mi(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function of(t,i,o,u,f,p,E,N,B){return t=new Uv(t,i,o,N,B),i===1?(i=1,p===!0&&(i|=8)):i=0,p=ni(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},vc(p),t}function Fv(t,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:t,containerInfo:i,implementation:o}}function Lm(t){if(!t)return _r;t=t._reactInternals;e:{if(Kn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(In(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(In(o))return op(t,o,i)}return i}function Im(t,i,o,u,f,p,E,N,B){return t=of(o,u,!0,t,f,p,E,N,B),t.context=Lm(null),o=t.current,u=bn(),f=Tr(o),p=Gi(u,f),p.callback=i??null,Sr(o,p,f),t.current.lanes=f,nn(t,f,u),Fn(t,u),t}function Al(t,i,o,u){var f=i.current,p=bn(),E=Tr(f);return o=Lm(o),i.context===null?i.context=o:i.pendingContext=o,i=Gi(p,E),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=Sr(f,i,E),t!==null&&(hi(t,f,E,p),il(t,f,E)),E}function Cl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Nm(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function af(t,i){Nm(t,i),(t=t.alternate)&&Nm(t,i)}function Ov(){return null}var Um=typeof reportError=="function"?reportError:function(t){console.error(t)};function lf(t){this._internalRoot=t}Rl.prototype.render=lf.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Al(t,i,null,null)},Rl.prototype.unmount=lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Jr(function(){Al(null,t,null,null)}),i[Bi]=null}};function Rl(t){this._internalRoot=t}Rl.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ei();t={blockedOn:null,target:t,priority:i};for(var o=0;o<dr.length&&i!==0&&i<dr[o].priority;o++);dr.splice(o,0,t),o===0&&yh(t)}};function uf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fm(){}function Bv(t,i,o,u,f){if(f){if(typeof u=="function"){var p=u;u=function(){var ne=Cl(E);p.call(ne)}}var E=Im(i,u,t,0,null,!1,!1,"",Fm);return t._reactRootContainer=E,t[Bi]=E.current,Bo(t.nodeType===8?t.parentNode:t),Jr(),E}for(;f=t.lastChild;)t.removeChild(f);if(typeof u=="function"){var N=u;u=function(){var ne=Cl(B);N.call(ne)}}var B=of(t,0,!1,null,null,!1,!1,"",Fm);return t._reactRootContainer=B,t[Bi]=B.current,Bo(t.nodeType===8?t.parentNode:t),Jr(function(){Al(i,B,o,u)}),B}function Pl(t,i,o,u,f){var p=o._reactRootContainer;if(p){var E=p;if(typeof f=="function"){var N=f;f=function(){var B=Cl(E);N.call(B)}}Al(i,E,t,f)}else E=Bv(o,i,t,f,u);return Cl(E)}ln=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Ot(i.pendingLanes);o!==0&&(Dt(i,o|1),Fn(i,qt()),(Et&6)===0&&(zs=qt()+500,vr()))}break;case 13:Jr(function(){var u=Hi(t,1);if(u!==null){var f=bn();hi(u,t,1,f)}}),af(t,1)}},un=function(t){if(t.tag===13){var i=Hi(t,134217728);if(i!==null){var o=bn();hi(i,t,134217728,o)}af(t,134217728)}},xs=function(t){if(t.tag===13){var i=Tr(t),o=Hi(t,i);if(o!==null){var u=bn();hi(o,t,i,u)}af(t,i)}},Ei=function(){return rt},xh=function(t,i){var o=rt;try{return rt=t,i()}finally{rt=o}},De=function(t,i,o){switch(i){case"input":if(Gt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==t&&u.form===t.form){var f=Ya(u);if(!f)throw Error(n(90));bt(u),Gt(u,f)}}}break;case"textarea":M(t,o);break;case"select":i=o.value,i!=null&&St(t,!!o.multiple,i,!1)}},nt=Jc,It=Jr;var kv={usingClientEntryPoint:!1,Events:[Vo,Cs,Ya,he,Ce,Jc]},ta={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zv={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=To(t),t===null?null:t.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||Ov,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dl.isDisabled&&Dl.supportsFiber)try{Ue=Dl.inject(zv),Te=Dl}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kv,On.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uf(i))throw Error(n(200));return Fv(t,i,null,o)},On.createRoot=function(t,i){if(!uf(t))throw Error(n(299));var o=!1,u="",f=Um;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=of(t,1,!1,null,null,o,!1,u,f),t[Bi]=i.current,Bo(t.nodeType===8?t.parentNode:t),new lf(i)},On.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=To(i),t=t===null?null:t.stateNode,t},On.flushSync=function(t){return Jr(t)},On.hydrate=function(t,i,o){if(!bl(i))throw Error(n(200));return Pl(null,t,i,!0,o)},On.hydrateRoot=function(t,i,o){if(!uf(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,f=!1,p="",E=Um;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Im(i,null,t,1,o??null,f,!1,p,E),t[Bi]=i.current,Bo(t),u)for(t=0;t<u.length;t++)o=u[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new Rl(i)},On.render=function(t,i,o){if(!bl(i))throw Error(n(200));return Pl(null,t,i,!1,o)},On.unmountComponentAtNode=function(t){if(!bl(t))throw Error(n(40));return t._reactRootContainer?(Jr(function(){Pl(null,null,t,!1,function(){t._reactRootContainer=null,t[Bi]=null})}),!0):!1},On.unstable_batchedUpdates=Jc,On.unstable_renderSubtreeIntoContainer=function(t,i,o,u){if(!bl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Pl(t,i,o,!1,u)},On.version="18.3.1-next-f1338f8080-20240426",On}var Wm;function jv(){if(Wm)return df.exports;Wm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),df.exports=Yv(),df.exports}var Xm;function $v(){if(Xm)return Ll;Xm=1;var r=jv();return Ll.createRoot=r.createRoot,Ll.hydrateRoot=r.hydrateRoot,Ll}var Kv=$v(),kn=function(){return kn=Object.assign||function(e){for(var n,s=1,a=arguments.length;s<a;s++){n=arguments[s];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},kn.apply(this,arguments)};function mu(r,e,n){if(n||arguments.length===2)for(var s=0,a=e.length,l;s<a;s++)(l||!(s in e))&&(l||(l=Array.prototype.slice.call(e,0,s)),l[s]=e[s]);return r.concat(l||Array.prototype.slice.call(e))}var Ht="-ms-",ha="-moz-",Lt="-webkit-",s0="comm",Mu="rule",nh="decl",Zv="@import",o0="@keyframes",Qv="@layer",a0=Math.abs,ih=String.fromCharCode,Jf=Object.assign;function Jv(r,e){return pn(r,0)^45?(((e<<2^pn(r,0))<<2^pn(r,1))<<2^pn(r,2))<<2^pn(r,3):0}function l0(r){return r.trim()}function Zi(r,e){return(r=e.exec(r))?r[0]:r}function dt(r,e,n){return r.replace(e,n)}function iu(r,e,n){return r.indexOf(e,n)}function pn(r,e){return r.charCodeAt(e)|0}function oo(r,e,n){return r.slice(e,n)}function bi(r){return r.length}function u0(r){return r.length}function ca(r,e){return e.push(r),r}function ex(r,e){return r.map(e).join("")}function qm(r,e){return r.filter(function(n){return!Zi(n,e)})}var Eu=1,ao=1,c0=0,oi=0,en=0,_o="";function Tu(r,e,n,s,a,l,c,d){return{value:r,root:e,parent:n,type:s,props:a,children:l,line:Eu,column:ao,length:c,return:"",siblings:d}}function Nr(r,e){return Jf(Tu("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},e)}function Hs(r){for(;r.root;)r=Nr(r.root,{children:[r]});ca(r,r.siblings)}function tx(){return en}function nx(){return en=oi>0?pn(_o,--oi):0,ao--,en===10&&(ao=1,Eu--),en}function Si(){return en=oi<c0?pn(_o,oi++):0,ao++,en===10&&(ao=1,Eu++),en}function ms(){return pn(_o,oi)}function ru(){return oi}function wu(r,e){return oo(_o,r,e)}function ed(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ix(r){return Eu=ao=1,c0=bi(_o=r),oi=0,[]}function rx(r){return _o="",r}function mf(r){return l0(wu(oi-1,td(r===91?r+2:r===40?r+1:r)))}function sx(r){for(;(en=ms())&&en<33;)Si();return ed(r)>2||ed(en)>3?"":" "}function ox(r,e){for(;--e&&Si()&&!(en<48||en>102||en>57&&en<65||en>70&&en<97););return wu(r,ru()+(e<6&&ms()==32&&Si()==32))}function td(r){for(;Si();)switch(en){case r:return oi;case 34:case 39:r!==34&&r!==39&&td(en);break;case 40:r===41&&td(r);break;case 92:Si();break}return oi}function ax(r,e){for(;Si()&&r+en!==57;)if(r+en===84&&ms()===47)break;return"/*"+wu(e,oi-1)+"*"+ih(r===47?r:Si())}function lx(r){for(;!ed(ms());)Si();return wu(r,oi)}function ux(r){return rx(su("",null,null,null,[""],r=ix(r),0,[0],r))}function su(r,e,n,s,a,l,c,d,h){for(var m=0,g=0,_=c,x=0,y=0,T=0,w=1,S=1,v=1,D=0,L="",P=a,U=l,F=s,I=L;S;)switch(T=D,D=Si()){case 40:if(T!=108&&pn(I,_-1)==58){iu(I+=dt(mf(D),"&","&\f"),"&\f",a0(m?d[m-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:I+=mf(D);break;case 9:case 10:case 13:case 32:I+=sx(T);break;case 92:I+=ox(ru()-1,7);continue;case 47:switch(ms()){case 42:case 47:ca(cx(ax(Si(),ru()),e,n,h),h);break;default:I+="/"}break;case 123*w:d[m++]=bi(I)*v;case 125*w:case 59:case 0:switch(D){case 0:case 125:S=0;case 59+g:v==-1&&(I=dt(I,/\f/g,"")),y>0&&bi(I)-_&&ca(y>32?jm(I+";",s,n,_-1,h):jm(dt(I," ","")+";",s,n,_-2,h),h);break;case 59:I+=";";default:if(ca(F=Ym(I,e,n,m,g,a,d,L,P=[],U=[],_,l),l),D===123)if(g===0)su(I,e,F,F,P,l,_,d,U);else switch(x===99&&pn(I,3)===110?100:x){case 100:case 108:case 109:case 115:su(r,F,F,s&&ca(Ym(r,F,F,0,0,a,d,L,a,P=[],_,U),U),a,U,_,d,s?P:U);break;default:su(I,F,F,F,[""],U,0,d,U)}}m=g=y=0,w=v=1,L=I="",_=c;break;case 58:_=1+bi(I),y=T;default:if(w<1){if(D==123)--w;else if(D==125&&w++==0&&nx()==125)continue}switch(I+=ih(D),D*w){case 38:v=g>0?1:(I+="\f",-1);break;case 44:d[m++]=(bi(I)-1)*v,v=1;break;case 64:ms()===45&&(I+=mf(Si())),x=ms(),g=_=bi(L=I+=lx(ru())),D++;break;case 45:T===45&&bi(I)==2&&(w=0)}}return l}function Ym(r,e,n,s,a,l,c,d,h,m,g,_){for(var x=a-1,y=a===0?l:[""],T=u0(y),w=0,S=0,v=0;w<s;++w)for(var D=0,L=oo(r,x+1,x=a0(S=c[w])),P=r;D<T;++D)(P=l0(S>0?y[D]+" "+L:dt(L,/&\f/g,y[D])))&&(h[v++]=P);return Tu(r,e,n,a===0?Mu:d,h,m,g,_)}function cx(r,e,n,s){return Tu(r,e,n,s0,ih(tx()),oo(r,2,-2),0,s)}function jm(r,e,n,s,a){return Tu(r,e,n,nh,oo(r,0,s),oo(r,s+1,-1),s,a)}function f0(r,e,n){switch(Jv(r,e)){case 5103:return Lt+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Lt+r+r;case 4789:return ha+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return Lt+r+ha+r+Ht+r+r;case 5936:switch(pn(r,e+11)){case 114:return Lt+r+Ht+dt(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return Lt+r+Ht+dt(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return Lt+r+Ht+dt(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return Lt+r+Ht+r+r;case 6165:return Lt+r+Ht+"flex-"+r+r;case 5187:return Lt+r+dt(r,/(\w+).+(:[^]+)/,Lt+"box-$1$2"+Ht+"flex-$1$2")+r;case 5443:return Lt+r+Ht+"flex-item-"+dt(r,/flex-|-self/g,"")+(Zi(r,/flex-|baseline/)?"":Ht+"grid-row-"+dt(r,/flex-|-self/g,""))+r;case 4675:return Lt+r+Ht+"flex-line-pack"+dt(r,/align-content|flex-|-self/g,"")+r;case 5548:return Lt+r+Ht+dt(r,"shrink","negative")+r;case 5292:return Lt+r+Ht+dt(r,"basis","preferred-size")+r;case 6060:return Lt+"box-"+dt(r,"-grow","")+Lt+r+Ht+dt(r,"grow","positive")+r;case 4554:return Lt+dt(r,/([^-])(transform)/g,"$1"+Lt+"$2")+r;case 6187:return dt(dt(dt(r,/(zoom-|grab)/,Lt+"$1"),/(image-set)/,Lt+"$1"),r,"")+r;case 5495:case 3959:return dt(r,/(image-set\([^]*)/,Lt+"$1$`$1");case 4968:return dt(dt(r,/(.+:)(flex-)?(.*)/,Lt+"box-pack:$3"+Ht+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Lt+r+r;case 4200:if(!Zi(r,/flex-|baseline/))return Ht+"grid-column-align"+oo(r,e)+r;break;case 2592:case 3360:return Ht+dt(r,"template-","")+r;case 4384:case 3616:return n&&n.some(function(s,a){return e=a,Zi(s.props,/grid-\w+-end/)})?~iu(r+(n=n[e].value),"span",0)?r:Ht+dt(r,"-start","")+r+Ht+"grid-row-span:"+(~iu(n,"span",0)?Zi(n,/\d+/):+Zi(n,/\d+/)-+Zi(r,/\d+/))+";":Ht+dt(r,"-start","")+r;case 4896:case 4128:return n&&n.some(function(s){return Zi(s.props,/grid-\w+-start/)})?r:Ht+dt(dt(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return dt(r,/(.+)-inline(.+)/,Lt+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bi(r)-1-e>6)switch(pn(r,e+1)){case 109:if(pn(r,e+4)!==45)break;case 102:return dt(r,/(.+:)(.+)-([^]+)/,"$1"+Lt+"$2-$3$1"+ha+(pn(r,e+3)==108?"$3":"$2-$3"))+r;case 115:return~iu(r,"stretch",0)?f0(dt(r,"stretch","fill-available"),e,n)+r:r}break;case 5152:case 5920:return dt(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,a,l,c,d,h,m){return Ht+a+":"+l+m+(c?Ht+a+"-span:"+(d?h:+h-+l)+m:"")+r});case 4949:if(pn(r,e+6)===121)return dt(r,":",":"+Lt)+r;break;case 6444:switch(pn(r,pn(r,14)===45?18:11)){case 120:return dt(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Lt+(pn(r,14)===45?"inline-":"")+"box$3$1"+Lt+"$2$3$1"+Ht+"$2box$3")+r;case 100:return dt(r,":",":"+Ht)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return dt(r,"scroll-","scroll-snap-")+r}return r}function gu(r,e){for(var n="",s=0;s<r.length;s++)n+=e(r[s],s,r,e)||"";return n}function fx(r,e,n,s){switch(r.type){case Qv:if(r.children.length)break;case Zv:case nh:return r.return=r.return||r.value;case s0:return"";case o0:return r.return=r.value+"{"+gu(r.children,s)+"}";case Mu:if(!bi(r.value=r.props.join(",")))return""}return bi(n=gu(r.children,s))?r.return=r.value+"{"+n+"}":""}function dx(r){var e=u0(r);return function(n,s,a,l){for(var c="",d=0;d<e;d++)c+=r[d](n,s,a,l)||"";return c}}function hx(r){return function(e){e.root||(e=e.return)&&r(e)}}function px(r,e,n,s){if(r.length>-1&&!r.return)switch(r.type){case nh:r.return=f0(r.value,r.length,n);return;case o0:return gu([Nr(r,{value:dt(r.value,"@","@"+Lt)})],s);case Mu:if(r.length)return ex(n=r.props,function(a){switch(Zi(a,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Hs(Nr(r,{props:[dt(a,/:(read-\w+)/,":"+ha+"$1")]})),Hs(Nr(r,{props:[a]})),Jf(r,{props:qm(n,s)});break;case"::placeholder":Hs(Nr(r,{props:[dt(a,/:(plac\w+)/,":"+Lt+"input-$1")]})),Hs(Nr(r,{props:[dt(a,/:(plac\w+)/,":"+ha+"$1")]})),Hs(Nr(r,{props:[dt(a,/:(plac\w+)/,Ht+"input-$1")]})),Hs(Nr(r,{props:[a]})),Jf(r,{props:qm(n,s)});break}return""})}}var mx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},jn={},lo=typeof process<"u"&&jn!==void 0&&(jn.REACT_APP_SC_ATTR||jn.SC_ATTR)||"data-styled",d0="active",h0="data-styled-version",Au="6.1.19",rh=`/*!sc*/
`,_u=typeof window<"u"&&typeof document<"u",gx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&jn!==void 0&&jn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&jn.REACT_APP_SC_DISABLE_SPEEDY!==""?jn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&jn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&jn!==void 0&&jn.SC_DISABLE_SPEEDY!==void 0&&jn.SC_DISABLE_SPEEDY!==""&&jn.SC_DISABLE_SPEEDY!=="false"&&jn.SC_DISABLE_SPEEDY),Cu=Object.freeze([]),uo=Object.freeze({});function _x(r,e,n){return n===void 0&&(n=uo),r.theme!==n.theme&&r.theme||e||n.theme}var p0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),vx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xx=/(^-|-$)/g;function $m(r){return r.replace(vx,"-").replace(xx,"")}var Sx=/(a)(d)/gi,Il=52,Km=function(r){return String.fromCharCode(r+(r>25?39:97))};function nd(r){var e,n="";for(e=Math.abs(r);e>Il;e=e/Il|0)n=Km(e%Il)+n;return(Km(e%Il)+n).replace(Sx,"$1-$2")}var gf,m0=5381,io=function(r,e){for(var n=e.length;n;)r=33*r^e.charCodeAt(--n);return r},g0=function(r){return io(m0,r)};function yx(r){return nd(g0(r)>>>0)}function Mx(r){return r.displayName||r.name||"Component"}function _f(r){return typeof r=="string"&&!0}var _0=typeof Symbol=="function"&&Symbol.for,v0=_0?Symbol.for("react.memo"):60115,Ex=_0?Symbol.for("react.forward_ref"):60112,Tx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},wx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},x0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ax=((gf={})[Ex]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gf[v0]=x0,gf);function Zm(r){return("type"in(e=r)&&e.type.$$typeof)===v0?x0:"$$typeof"in r?Ax[r.$$typeof]:Tx;var e}var Cx=Object.defineProperty,Rx=Object.getOwnPropertyNames,Qm=Object.getOwnPropertySymbols,bx=Object.getOwnPropertyDescriptor,Px=Object.getPrototypeOf,Jm=Object.prototype;function S0(r,e,n){if(typeof e!="string"){if(Jm){var s=Px(e);s&&s!==Jm&&S0(r,s,n)}var a=Rx(e);Qm&&(a=a.concat(Qm(e)));for(var l=Zm(r),c=Zm(e),d=0;d<a.length;++d){var h=a[d];if(!(h in wx||n&&n[h]||c&&h in c||l&&h in l)){var m=bx(e,h);try{Cx(r,h,m)}catch{}}}}return r}function co(r){return typeof r=="function"}function sh(r){return typeof r=="object"&&"styledComponentId"in r}function ds(r,e){return r&&e?"".concat(r," ").concat(e):r||e||""}function eg(r,e){if(r.length===0)return"";for(var n=r[0],s=1;s<r.length;s++)n+=r[s];return n}function ma(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function id(r,e,n){if(n===void 0&&(n=!1),!n&&!ma(r)&&!Array.isArray(r))return e;if(Array.isArray(e))for(var s=0;s<e.length;s++)r[s]=id(r[s],e[s]);else if(ma(e))for(var s in e)r[s]=id(r[s],e[s]);return r}function oh(r,e){Object.defineProperty(r,"toString",{value:e})}function Sa(r){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Dx=(function(){function r(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return r.prototype.indexOfGroup=function(e){for(var n=0,s=0;s<e;s++)n+=this.groupSizes[s];return n},r.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var s=this.groupSizes,a=s.length,l=a;e>=l;)if((l<<=1)<0)throw Sa(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(s),this.length=l;for(var c=a;c<l;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(e+1),h=(c=0,n.length);c<h;c++)this.tag.insertRule(d,n[c])&&(this.groupSizes[e]++,d++)},r.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],s=this.indexOfGroup(e),a=s+n;this.groupSizes[e]=0;for(var l=s;l<a;l++)this.tag.deleteRule(s)}},r.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var s=this.groupSizes[e],a=this.indexOfGroup(e),l=a+s,c=a;c<l;c++)n+="".concat(this.tag.getRule(c)).concat(rh);return n},r})(),ou=new Map,vu=new Map,au=1,Nl=function(r){if(ou.has(r))return ou.get(r);for(;vu.has(au);)au++;var e=au++;return ou.set(r,e),vu.set(e,r),e},Lx=function(r,e){au=e+1,ou.set(r,e),vu.set(e,r)},Ix="style[".concat(lo,"][").concat(h0,'="').concat(Au,'"]'),Nx=new RegExp("^".concat(lo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ux=function(r,e,n){for(var s,a=n.split(","),l=0,c=a.length;l<c;l++)(s=a[l])&&r.registerName(e,s)},Fx=function(r,e){for(var n,s=((n=e.textContent)!==null&&n!==void 0?n:"").split(rh),a=[],l=0,c=s.length;l<c;l++){var d=s[l].trim();if(d){var h=d.match(Nx);if(h){var m=0|parseInt(h[1],10),g=h[2];m!==0&&(Lx(g,m),Ux(r,g,h[3]),r.getTag().insertRules(m,a)),a.length=0}else a.push(d)}}},tg=function(r){for(var e=document.querySelectorAll(Ix),n=0,s=e.length;n<s;n++){var a=e[n];a&&a.getAttribute(lo)!==d0&&(Fx(r,a),a.parentNode&&a.parentNode.removeChild(a))}};function Ox(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var y0=function(r){var e=document.head,n=r||e,s=document.createElement("style"),a=(function(d){var h=Array.from(d.querySelectorAll("style[".concat(lo,"]")));return h[h.length-1]})(n),l=a!==void 0?a.nextSibling:null;s.setAttribute(lo,d0),s.setAttribute(h0,Au);var c=Ox();return c&&s.setAttribute("nonce",c),n.insertBefore(s,l),s},Bx=(function(){function r(e){this.element=y0(e),this.element.appendChild(document.createTextNode("")),this.sheet=(function(n){if(n.sheet)return n.sheet;for(var s=document.styleSheets,a=0,l=s.length;a<l;a++){var c=s[a];if(c.ownerNode===n)return c}throw Sa(17)})(this.element),this.length=0}return r.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},r.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},r})(),kx=(function(){function r(e){this.element=y0(e),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var s=document.createTextNode(n);return this.element.insertBefore(s,this.nodes[e]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},r.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},r})(),zx=(function(){function r(e){this.rules=[],this.length=0}return r.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},r.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},r.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},r})(),ng=_u,Vx={isServer:!_u,useCSSOMInjection:!gx},M0=(function(){function r(e,n,s){e===void 0&&(e=uo),n===void 0&&(n={});var a=this;this.options=kn(kn({},Vx),e),this.gs=n,this.names=new Map(s),this.server=!!e.isServer,!this.server&&_u&&ng&&(ng=!1,tg(this)),oh(this,function(){return(function(l){for(var c=l.getTag(),d=c.length,h="",m=function(_){var x=(function(v){return vu.get(v)})(_);if(x===void 0)return"continue";var y=l.names.get(x),T=c.getGroup(_);if(y===void 0||!y.size||T.length===0)return"continue";var w="".concat(lo,".g").concat(_,'[id="').concat(x,'"]'),S="";y!==void 0&&y.forEach(function(v){v.length>0&&(S+="".concat(v,","))}),h+="".concat(T).concat(w,'{content:"').concat(S,'"}').concat(rh)},g=0;g<d;g++)m(g);return h})(a)})}return r.registerId=function(e){return Nl(e)},r.prototype.rehydrate=function(){!this.server&&_u&&tg(this)},r.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new r(kn(kn({},this.options),e),this.gs,n&&this.names||void 0)},r.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(e=(function(n){var s=n.useCSSOMInjection,a=n.target;return n.isServer?new zx(a):s?new Bx(a):new kx(a)})(this.options),new Dx(e)));var e},r.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},r.prototype.registerName=function(e,n){if(Nl(e),this.names.has(e))this.names.get(e).add(n);else{var s=new Set;s.add(n),this.names.set(e,s)}},r.prototype.insertRules=function(e,n,s){this.registerName(e,n),this.getTag().insertRules(Nl(e),s)},r.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},r.prototype.clearRules=function(e){this.getTag().clearGroup(Nl(e)),this.clearNames(e)},r.prototype.clearTag=function(){this.tag=void 0},r})(),Hx=/&/g,Gx=/^\s*\/\/.*$/gm;function E0(r,e){return r.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(s){return"".concat(e," ").concat(s)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=E0(n.children,e)),n})}function Wx(r){var e,n,s,a=uo,l=a.options,c=l===void 0?uo:l,d=a.plugins,h=d===void 0?Cu:d,m=function(x,y,T){return T.startsWith(n)&&T.endsWith(n)&&T.replaceAll(n,"").length>0?".".concat(e):x},g=h.slice();g.push(function(x){x.type===Mu&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(Hx,n).replace(s,m))}),c.prefix&&g.push(px),g.push(fx);var _=function(x,y,T,w){y===void 0&&(y=""),T===void 0&&(T=""),w===void 0&&(w="&"),e=w,n=y,s=new RegExp("\\".concat(n,"\\b"),"g");var S=x.replace(Gx,""),v=ux(T||y?"".concat(T," ").concat(y," { ").concat(S," }"):S);c.namespace&&(v=E0(v,c.namespace));var D=[];return gu(v,dx(g.concat(hx(function(L){return D.push(L)})))),D};return _.hash=h.length?h.reduce(function(x,y){return y.name||Sa(15),io(x,y.name)},m0).toString():"",_}var Xx=new M0,rd=Wx(),T0=pa.createContext({shouldForwardProp:void 0,styleSheet:Xx,stylis:rd});T0.Consumer;pa.createContext(void 0);function ig(){return Br.useContext(T0)}var qx=(function(){function r(e,n){var s=this;this.inject=function(a,l){l===void 0&&(l=rd);var c=s.name+l.hash;a.hasNameForId(s.id,c)||a.insertRules(s.id,c,l(s.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,oh(this,function(){throw Sa(12,String(s.name))})}return r.prototype.getName=function(e){return e===void 0&&(e=rd),this.name+e.hash},r})(),Yx=function(r){return r>="A"&&r<="Z"};function rg(r){for(var e="",n=0;n<r.length;n++){var s=r[n];if(n===1&&s==="-"&&r[0]==="-")return r;Yx(s)?e+="-"+s.toLowerCase():e+=s}return e.startsWith("ms-")?"-"+e:e}var w0=function(r){return r==null||r===!1||r===""},A0=function(r){var e,n,s=[];for(var a in r){var l=r[a];r.hasOwnProperty(a)&&!w0(l)&&(Array.isArray(l)&&l.isCss||co(l)?s.push("".concat(rg(a),":"),l,";"):ma(l)?s.push.apply(s,mu(mu(["".concat(a," {")],A0(l),!1),["}"],!1)):s.push("".concat(rg(a),": ").concat((e=a,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in mx||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return s};function gs(r,e,n,s){if(w0(r))return[];if(sh(r))return[".".concat(r.styledComponentId)];if(co(r)){if(!co(l=r)||l.prototype&&l.prototype.isReactComponent||!e)return[r];var a=r(e);return gs(a,e,n,s)}var l;return r instanceof qx?n?(r.inject(n,s),[r.getName(s)]):[r]:ma(r)?A0(r):Array.isArray(r)?Array.prototype.concat.apply(Cu,r.map(function(c){return gs(c,e,n,s)})):[r.toString()]}function jx(r){for(var e=0;e<r.length;e+=1){var n=r[e];if(co(n)&&!sh(n))return!1}return!0}var $x=g0(Au),Kx=(function(){function r(e,n,s){this.rules=e,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&jx(e),this.componentId=n,this.baseHash=io($x,n),this.baseStyle=s,M0.registerId(n)}return r.prototype.generateAndInjectStyles=function(e,n,s){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))a=ds(a,this.staticRulesId);else{var l=eg(gs(this.rules,e,n,s)),c=nd(io(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,c)){var d=s(l,".".concat(c),void 0,this.componentId);n.insertRules(this.componentId,c,d)}a=ds(a,c),this.staticRulesId=c}else{for(var h=io(this.baseHash,s.hash),m="",g=0;g<this.rules.length;g++){var _=this.rules[g];if(typeof _=="string")m+=_;else if(_){var x=eg(gs(_,e,n,s));h=io(h,x+g),m+=x}}if(m){var y=nd(h>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,s(m,".".concat(y),void 0,this.componentId)),a=ds(a,y)}}return a},r})(),C0=pa.createContext(void 0);C0.Consumer;var vf={};function Zx(r,e,n){var s=sh(r),a=r,l=!_f(r),c=e.attrs,d=c===void 0?Cu:c,h=e.componentId,m=h===void 0?(function(P,U){var F=typeof P!="string"?"sc":$m(P);vf[F]=(vf[F]||0)+1;var I="".concat(F,"-").concat(yx(Au+F+vf[F]));return U?"".concat(U,"-").concat(I):I})(e.displayName,e.parentComponentId):h,g=e.displayName,_=g===void 0?(function(P){return _f(P)?"styled.".concat(P):"Styled(".concat(Mx(P),")")})(r):g,x=e.displayName&&e.componentId?"".concat($m(e.displayName),"-").concat(e.componentId):e.componentId||m,y=s&&a.attrs?a.attrs.concat(d).filter(Boolean):d,T=e.shouldForwardProp;if(s&&a.shouldForwardProp){var w=a.shouldForwardProp;if(e.shouldForwardProp){var S=e.shouldForwardProp;T=function(P,U){return w(P,U)&&S(P,U)}}else T=w}var v=new Kx(n,x,s?a.componentStyle:void 0);function D(P,U){return(function(F,I,j){var C=F.attrs,R=F.componentStyle,V=F.defaultProps,se=F.foldedComponentIds,Z=F.styledComponentId,fe=F.target,ce=pa.useContext(C0),oe=ig(),q=F.shouldForwardProp||oe.shouldForwardProp,X=_x(I,ce,V)||uo,le=(function(We,Q,ue){for(var _e,Ne=kn(kn({},Q),{className:void 0,theme:ue}),Pe=0;Pe<We.length;Pe+=1){var at=co(_e=We[Pe])?_e(Ne):_e;for(var bt in at)Ne[bt]=bt==="className"?ds(Ne[bt],at[bt]):bt==="style"?kn(kn({},Ne[bt]),at[bt]):at[bt]}return Q.className&&(Ne.className=ds(Ne.className,Q.className)),Ne})(C,I,X),te=le.as||fe,O={};for(var J in le)le[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&le.theme===X||(J==="forwardedAs"?O.as=le.forwardedAs:q&&!q(J,te)||(O[J]=le[J]));var we=(function(We,Q){var ue=ig(),_e=We.generateAndInjectStyles(Q,ue.styleSheet,ue.stylis);return _e})(R,le),ze=ds(se,Z);return we&&(ze+=" "+we),le.className&&(ze+=" "+le.className),O[_f(te)&&!p0.has(te)?"class":"className"]=ze,j&&(O.ref=j),Br.createElement(te,O)})(L,P,U)}D.displayName=_;var L=pa.forwardRef(D);return L.attrs=y,L.componentStyle=v,L.displayName=_,L.shouldForwardProp=T,L.foldedComponentIds=s?ds(a.foldedComponentIds,a.styledComponentId):"",L.styledComponentId=x,L.target=s?a.target:r,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=s?(function(U){for(var F=[],I=1;I<arguments.length;I++)F[I-1]=arguments[I];for(var j=0,C=F;j<C.length;j++)id(U,C[j],!0);return U})({},a.defaultProps,P):P}}),oh(L,function(){return".".concat(L.styledComponentId)}),l&&S0(L,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function sg(r,e){for(var n=[r[0]],s=0,a=e.length;s<a;s+=1)n.push(e[s],r[s+1]);return n}var og=function(r){return Object.assign(r,{isCss:!0})};function Qx(r){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(co(r)||ma(r))return og(gs(sg(Cu,mu([r],e,!0))));var s=r;return e.length===0&&s.length===1&&typeof s[0]=="string"?gs(s):og(gs(sg(s,e)))}function sd(r,e,n){if(n===void 0&&(n=uo),!e)throw Sa(1,e);var s=function(a){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return r(e,n,Qx.apply(void 0,mu([a],l,!1)))};return s.attrs=function(a){return sd(r,e,kn(kn({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},s.withConfig=function(a){return sd(r,e,kn(kn({},n),a))},s}var R0=function(r){return sd(Zx,r)},vs=R0;p0.forEach(function(r){vs[r]=R0(r)});const Jx=vs.h1`
  font-family: "Schibsted Grotesk", system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  letter-spacing: -1%;
  color: ${r=>r.color||"inherit"};

  @media (min-width: 800px) { font-size: 22px; }
  @media (min-width: 1280px) { font-size: 24px; }
`,eS=vs.h2`
  font-family: "Schibsted Grotesk", system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  letter-spacing: -1%;
  color: ${r=>r.color||"inherit"};

  @media (min-width: 800px) { font-size: 18px; }
  @media (min-width: 1280px) { font-size: 20px; }
`,b0=vs.h3`
  font-family: "Schibsted Grotesk", system-ui, -apple-system, sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: -1%;
  color: ${r=>r.color||"inherit"};
  margin-bottom: 12px;

  @media (min-width: 800px) { font-size: 16px; }
  @media (min-width: 1280px) { font-size: 18px; }
`,lu=vs.p`
  font-family: "Schibsted Grotesk", system-ui, -apple-system, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0;
  color: ${r=>r.color||"inherit"};
  margin-bottom: 12px;

  @media (min-width: 800px) { font-size: 14px; }
  @media (min-width: 1280px) { font-size: 16px; }
`;vs.ul`
  font-family: "Schibsted Grotesk", system-ui, -apple-system, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0;
  list-style-type: disc;
  padding-left: 20px;
  color: ${r=>r.color||"inherit"};

  li {
    margin-bottom: 0.5em;
  }

  @media (min-width: 800px) { font-size: 18px; }
  @media (min-width: 1280px) { font-size: 20px; }
`;const tS=vs.span`
  font-family: "Schibsted Grotesk", system-ui, -apple-system, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -2%;
  color: ${r=>r.color||"inherit"};

  @media (min-width: 800px) { font-size: 14px; }
  @media (min-width: 1280px) { font-size: 16px; }
`,Fr={paragraph1:"#ffffff",paragraph2:"#ababab"};function nS(){const[r,e]=Br.useState("en");return Br.useEffect(()=>{console.log("Language changed to",r)},[r]),mt.jsxs("div",{className:"header-container",children:[mt.jsxs("div",{className:"header-title",children:[mt.jsx(Jx,{color:Fr.paragraph1,children:"Gerard Baholli"}),mt.jsx(eS,{color:Fr.paragraph2,children:"Software Developer"})]}),mt.jsxs("div",{className:"header-language",children:[mt.jsx("button",{className:`language-button ${r==="it"?"active":""}`,onClick:()=>e("it"),children:"it"}),mt.jsx("button",{className:`language-button ${r==="en"?"active":""}`,onClick:()=>e("en"),children:"en"})]})]})}var xf={exports:{}},Sf,ag;function iS(){if(ag)return Sf;ag=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Sf=r,Sf}var yf,lg;function rS(){if(lg)return yf;lg=1;var r=iS();function e(){}function n(){}return n.resetWarningCache=e,yf=function(){function s(c,d,h,m,g,_){if(_!==r){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}s.isRequired=s;function a(){return s}var l={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:a,element:s,elementType:s,instanceOf:a,node:s,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:e};return l.PropTypes=l,l},yf}var ug;function sS(){return ug||(ug=1,xf.exports=rS()()),xf.exports}var oS=sS();const Ul=r0(oS),aS="/arrow_outward_16dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.svg";function Ji({href:r="#",children:e,target:n="_self",rel:s=""}){return mt.jsxs("a",{href:r,className:"link-button-container",target:n,rel:s,children:[mt.jsx(tS,{className:"link-text",children:e}),mt.jsx("img",{src:aS,alt:"Arrow icon",className:"link-arrow-icon"})]})}Ji.propTypes={children:Ul.node.isRequired,href:Ul.string,target:Ul.string,rel:Ul.string};function lS(){return mt.jsxs("div",{className:"about-container",children:[mt.jsx(b0,{color:Fr.paragraph1,children:"About"}),mt.jsx(lu,{color:Fr.paragraph1,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum tincidunt tellus et fringilla. Sed sed nibh odio. Mauris tristique ipsum eget lorem interdum, in tincidunt risus commodo. Morbi egestas faucibus diam sit amet pulvinar. Donec vehicula in felis in sagittis. Morbi eu eleifend massa. Maecenas ultrices enim quis massa rutrum gravida. Morbi eget sapien tortor."}),mt.jsx(Ji,{href:"/GerardBaholli-Curriculum-En.pdf",target:"_blank",rel:"noopener noreferrer",children:"Curriculum"}),mt.jsx(Ji,{href:"https://github.com/gerardbaholli",target:"_blank",children:"GitHub"}),mt.jsx(Ji,{href:"https://www.linkedin.com/in/gerardbaholli/",target:"_blank",children:"LinkedIn"}),mt.jsx(Ji,{href:"mailto:gerardbaholli@gmail.com",children:"Contact me"})]})}function uS(){return mt.jsxs("div",{className:"projects-container",children:[mt.jsx(b0,{color:Fr.paragraph1,children:"Projects"}),mt.jsx(lu,{color:Fr.paragraph1,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet congue turpis. Nullam tristique euismod tellus, quis tristique orci faucibus a. Donec odio ligula, mollis ut sem vitae, scelerisque rhoncus metus. Vivamus iaculis volutpat tortor, a condimentum metus efficitur id. Nulla hendrerit, justo vel congue placerat, erat massa scelerisque tellus, a suscipit turpis odio sed enim. Maecenas mi arcu, lobortis eu ornare sed, faucibus ut elit. Quisque pulvinar tellus a facilisis faucibus. Morbi mollis purus vitae malesuada molestie. Nullam tempor efficitur mi ut posuere. Sed eget nisl fermentum, congue purus quis, elementum metus. Maecenas ultrices mi eu libero fermentum mollis. In et rutrum libero, nec aliquet odio."}),mt.jsx(lu,{color:Fr.paragraph1,children:"Suspendisse non ante pretium, viverra sapien sit amet, posuere lacus. Ut eu sem gravida, scelerisque diam quis, lacinia felis. Phasellus eget porttitor quam. Nullam tortor lacus, lobortis ac enim a, finibus rutrum ligula. Morbi feugiat neque mi. Proin dapibus facilisis ipsum non suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur pellentesque dolor sit amet ipsum faucibus pretium."}),mt.jsx(lu,{color:Fr.paragraph1,children:"Fusce mollis malesuada metus, id rutrum erat sagittis et. Integer quis pulvinar diam, vel sollicitudin lectus. Vivamus blandit orci vel consectetur sollicitudin. Curabitur eu nisi enim. Suspendisse potenti. Sed at pulvinar urna. In nec augue est. Morbi pellentesque finibus enim, sed consectetur mauris ullamcorper sed. Vivamus scelerisque interdum libero aliquet maximus. Vivamus bibendum dolor sed eros suscipit, fringilla fermentum ante rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."}),mt.jsx(Ji,{href:"/GerardBaholli-Curriculum-En.pdf",target:"_blank",rel:"noopener noreferrer",children:"Curriculum"}),mt.jsx(Ji,{href:"https://github.com/gerardbaholli",target:"_blank",children:"GitHub"}),mt.jsx(Ji,{href:"https://www.linkedin.com/in/gerardbaholli/",target:"_blank",children:"LinkedIn"}),mt.jsx(Ji,{href:"mailto:gerardbaholli@gmail.com",children:"Contact me"})]})}function cS(){return mt.jsx("div",{className:"main-container",children:mt.jsx(uS,{})})}function fS(){return mt.jsxs("div",{className:"content-container",children:[mt.jsx(lS,{}),mt.jsx(cS,{})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ah="182",dS=0,cg=1,hS=2,uu=1,pS=2,fa=3,kr=0,zn=1,Qi=2,tr=0,ro=1,fg=2,dg=3,hg=4,mS=5,cs=100,gS=101,_S=102,vS=103,xS=104,SS=200,yS=201,MS=202,ES=203,od=204,ad=205,TS=206,wS=207,AS=208,CS=209,RS=210,bS=211,PS=212,DS=213,LS=214,ld=0,ud=1,cd=2,fo=3,fd=4,dd=5,hd=6,pd=7,P0=0,IS=1,NS=2,Ii=0,D0=1,L0=2,I0=3,N0=4,U0=5,F0=6,O0=7,B0=300,_s=301,ho=302,md=303,gd=304,Ru=306,_d=1e3,er=1001,vd=1002,_n=1003,US=1004,Fl=1005,wn=1006,Mf=1007,hs=1008,si=1009,k0=1010,z0=1011,ga=1012,lh=1013,Fi=1014,Di=1015,rr=1016,uh=1017,ch=1018,_a=1020,V0=35902,H0=35899,G0=1021,W0=1022,xi=1023,sr=1026,ps=1027,X0=1028,fh=1029,po=1030,dh=1031,hh=1033,cu=33776,fu=33777,du=33778,hu=33779,xd=35840,Sd=35841,yd=35842,Md=35843,Ed=36196,Td=37492,wd=37496,Ad=37488,Cd=37489,Rd=37490,bd=37491,Pd=37808,Dd=37809,Ld=37810,Id=37811,Nd=37812,Ud=37813,Fd=37814,Od=37815,Bd=37816,kd=37817,zd=37818,Vd=37819,Hd=37820,Gd=37821,Wd=36492,Xd=36494,qd=36495,Yd=36283,jd=36284,$d=36285,Kd=36286,FS=3200,OS=0,BS=1,Ur="",ri="srgb",mo="srgb-linear",xu="linear",Nt="srgb",Gs=7680,pg=519,kS=512,zS=513,VS=514,ph=515,HS=516,GS=517,mh=518,WS=519,mg=35044,Zd="300 es",Li=2e3,Su=2001;function q0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function yu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function XS(){const r=yu("canvas");return r.style.display="block",r}const gg={};function _g(...r){const e="THREE."+r.shift();console.log(e,...r)}function st(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Ct(...r){const e="THREE."+r.shift();console.error(e,...r)}function va(...r){const e=r.join(" ");e in gg||(gg[e]=!0,st(...r))}function qS(r,e,n){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:s()}}setTimeout(l,n)})}class vo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(n)===-1&&s[e].push(n)}hasEventListener(e,n){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(n)!==-1}removeEventListener(e,n){const s=this._listeners;if(s===void 0)return;const a=s[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const s=n[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ef=Math.PI/180,Qd=180/Math.PI;function ya(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[n&63|128]+En[n>>8&255]+"-"+En[n>>16&255]+En[n>>24&255]+En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]).toLowerCase()}function vt(r,e,n){return Math.max(e,Math.min(n,r))}function YS(r,e){return(r%e+e)%e}function Tf(r,e,n){return(1-n)*r+n*e}function ia(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Bn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ft{constructor(e=0,n=0){Ft.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,a=e.elements;return this.x=a[0]*n+a[3]*s+a[6],this.y=a[1]*n+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(vt(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(vt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y;return n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const s=Math.cos(n),a=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*a+e.x,this.y=l*a+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ma{constructor(e=0,n=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=s,this._w=a}static slerpFlat(e,n,s,a,l,c,d){let h=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3],x=l[c+0],y=l[c+1],T=l[c+2],w=l[c+3];if(d<=0){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=_;return}if(d>=1){e[n+0]=x,e[n+1]=y,e[n+2]=T,e[n+3]=w;return}if(_!==w||h!==x||m!==y||g!==T){let S=h*x+m*y+g*T+_*w;S<0&&(x=-x,y=-y,T=-T,w=-w,S=-S);let v=1-d;if(S<.9995){const D=Math.acos(S),L=Math.sin(D);v=Math.sin(v*D)/L,d=Math.sin(d*D)/L,h=h*v+x*d,m=m*v+y*d,g=g*v+T*d,_=_*v+w*d}else{h=h*v+x*d,m=m*v+y*d,g=g*v+T*d,_=_*v+w*d;const D=1/Math.sqrt(h*h+m*m+g*g+_*_);h*=D,m*=D,g*=D,_*=D}}e[n]=h,e[n+1]=m,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,s,a,l,c){const d=s[a],h=s[a+1],m=s[a+2],g=s[a+3],_=l[c],x=l[c+1],y=l[c+2],T=l[c+3];return e[n]=d*T+g*_+h*y-m*x,e[n+1]=h*T+g*x+m*_-d*y,e[n+2]=m*T+g*y+d*x-h*_,e[n+3]=g*T-d*_-h*x-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,s,a){return this._x=e,this._y=n,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const s=e._x,a=e._y,l=e._z,c=e._order,d=Math.cos,h=Math.sin,m=d(s/2),g=d(a/2),_=d(l/2),x=h(s/2),y=h(a/2),T=h(l/2);switch(c){case"XYZ":this._x=x*g*_+m*y*T,this._y=m*y*_-x*g*T,this._z=m*g*T+x*y*_,this._w=m*g*_-x*y*T;break;case"YXZ":this._x=x*g*_+m*y*T,this._y=m*y*_-x*g*T,this._z=m*g*T-x*y*_,this._w=m*g*_+x*y*T;break;case"ZXY":this._x=x*g*_-m*y*T,this._y=m*y*_+x*g*T,this._z=m*g*T+x*y*_,this._w=m*g*_-x*y*T;break;case"ZYX":this._x=x*g*_-m*y*T,this._y=m*y*_+x*g*T,this._z=m*g*T-x*y*_,this._w=m*g*_+x*y*T;break;case"YZX":this._x=x*g*_+m*y*T,this._y=m*y*_+x*g*T,this._z=m*g*T-x*y*_,this._w=m*g*_-x*y*T;break;case"XZY":this._x=x*g*_-m*y*T,this._y=m*y*_-x*g*T,this._z=m*g*T+x*y*_,this._w=m*g*_+x*y*T;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const s=n/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,s=n[0],a=n[4],l=n[8],c=n[1],d=n[5],h=n[9],m=n[2],g=n[6],_=n[10],x=s+d+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-h)*y,this._y=(l-m)*y,this._z=(c-a)*y}else if(s>d&&s>_){const y=2*Math.sqrt(1+s-d-_);this._w=(g-h)/y,this._x=.25*y,this._y=(a+c)/y,this._z=(l+m)/y}else if(d>_){const y=2*Math.sqrt(1+d-s-_);this._w=(l-m)/y,this._x=(a+c)/y,this._y=.25*y,this._z=(h+g)/y}else{const y=2*Math.sqrt(1+_-s-d);this._w=(c-a)/y,this._x=(l+m)/y,this._y=(h+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let s=e.dot(n)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,n){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,n/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const s=e._x,a=e._y,l=e._z,c=e._w,d=n._x,h=n._y,m=n._z,g=n._w;return this._x=s*g+c*d+a*m-l*h,this._y=a*g+c*h+l*d-s*m,this._z=l*g+c*m+s*h-a*d,this._w=c*g-s*d-a*h-l*m,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let s=e._x,a=e._y,l=e._z,c=e._w,d=this.dot(e);d<0&&(s=-s,a=-a,l=-l,c=-c,d=-d);let h=1-n;if(d<.9995){const m=Math.acos(d),g=Math.sin(m);h=Math.sin(h*m)/g,n=Math.sin(n*m)/g,this._x=this._x*h+s*n,this._y=this._y*h+a*n,this._z=this._z*h+l*n,this._w=this._w*h+c*n,this._onChangeCallback()}else this._x=this._x*h+s*n,this._y=this._y*h+a*n,this._z=this._z*h+l*n,this._w=this._w*h+c*n,this.normalize();return this}slerpQuaternions(e,n,s){return this.copy(e).slerp(n,s)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,n=0,s=0){re.prototype.isVector3=!0,this.x=e,this.y=n,this.z=s}set(e,n,s){return s===void 0&&(s=this.z),this.x=e,this.y=n,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(vg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(vg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*s+l[6]*a,this.y=l[1]*n+l[4]*s+l[7]*a,this.z=l[2]*n+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,a=this.z,l=e.elements,c=1/(l[3]*n+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*s+l[8]*a+l[12])*c,this.y=(l[1]*n+l[5]*s+l[9]*a+l[13])*c,this.z=(l[2]*n+l[6]*s+l[10]*a+l[14])*c,this}applyQuaternion(e){const n=this.x,s=this.y,a=this.z,l=e.x,c=e.y,d=e.z,h=e.w,m=2*(c*a-d*s),g=2*(d*n-l*a),_=2*(l*s-c*n);return this.x=n+h*m+c*_-d*g,this.y=s+h*g+d*m-l*_,this.z=a+h*_+l*g-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*s+l[8]*a,this.y=l[1]*n+l[5]*s+l[9]*a,this.z=l[2]*n+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(vt(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const s=e.x,a=e.y,l=e.z,c=n.x,d=n.y,h=n.z;return this.x=a*h-l*d,this.y=l*c-s*h,this.z=s*d-a*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const s=e.dot(this)/n;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return wf.copy(this).projectOnVector(e),this.sub(wf)}reflect(e){return this.sub(wf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(vt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return n*n+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,s){const a=Math.sin(n)*e;return this.x=a*Math.sin(s),this.y=Math.cos(n)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,s){return this.x=e*Math.sin(n),this.y=s,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=s,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(e),this.y=n,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wf=new re,vg=new Ma;class ut{constructor(e,n,s,a,l,c,d,h,m){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,s,a,l,c,d,h,m)}set(e,n,s,a,l,c,d,h,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=d,g[3]=n,g[4]=l,g[5]=h,g[6]=s,g[7]=c,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(e,n,s){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,a=n.elements,l=this.elements,c=s[0],d=s[3],h=s[6],m=s[1],g=s[4],_=s[7],x=s[2],y=s[5],T=s[8],w=a[0],S=a[3],v=a[6],D=a[1],L=a[4],P=a[7],U=a[2],F=a[5],I=a[8];return l[0]=c*w+d*D+h*U,l[3]=c*S+d*L+h*F,l[6]=c*v+d*P+h*I,l[1]=m*w+g*D+_*U,l[4]=m*S+g*L+_*F,l[7]=m*v+g*P+_*I,l[2]=x*w+y*D+T*U,l[5]=x*S+y*L+T*F,l[8]=x*v+y*P+T*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],g=e[8];return n*c*g-n*d*m-s*l*g+s*d*h+a*l*m-a*c*h}invert(){const e=this.elements,n=e[0],s=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],g=e[8],_=g*c-d*m,x=d*h-g*l,y=m*l-c*h,T=n*_+s*x+a*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=_*w,e[1]=(a*m-g*s)*w,e[2]=(d*s-a*c)*w,e[3]=x*w,e[4]=(g*n-a*h)*w,e[5]=(a*l-d*n)*w,e[6]=y*w,e[7]=(s*h-m*n)*w,e[8]=(c*n-s*l)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,s,a,l,c,d){const h=Math.cos(l),m=Math.sin(l);return this.set(s*h,s*m,-s*(h*c+m*d)+c+e,-a*m,a*h,-a*(-m*c+h*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Af.makeScale(e,n)),this}rotate(e){return this.premultiply(Af.makeRotation(-e)),this}translate(e,n){return this.premultiply(Af.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,s=e.elements;for(let a=0;a<9;a++)if(n[a]!==s[a])return!1;return!0}fromArray(e,n=0){for(let s=0;s<9;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Af=new ut,xg=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sg=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jS(){const r={enabled:!0,workingColorSpace:mo,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Nt&&(a.r=nr(a.r),a.g=nr(a.g),a.b=nr(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Nt&&(a.r=so(a.r),a.g=so(a.g),a.b=so(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ur?xu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return va("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return va("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[mo]:{primaries:e,whitePoint:s,transfer:xu,toXYZ:xg,fromXYZ:Sg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:s,transfer:Nt,toXYZ:xg,fromXYZ:Sg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),r}const Tt=jS();function nr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function so(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ws;class $S{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ws===void 0&&(Ws=yu("canvas")),Ws.width=e.width,Ws.height=e.height;const a=Ws.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),s=Ws}return s.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yu("canvas");n.width=e.width,n.height=e.height;const s=n.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=nr(l[c]/255)*255;return s.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(nr(n[s]/255)*255):n[s]=nr(n[s]);return{data:n,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KS=0;class gh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=ya(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?l.push(Cf(a[c].image)):l.push(Cf(a[c]))}else l=Cf(a);s.url=l}return n||(e.images[this.uuid]=s),s}}function Cf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?$S.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let ZS=0;const Rf=new re;class Dn extends vo{constructor(e=Dn.DEFAULT_IMAGE,n=Dn.DEFAULT_MAPPING,s=er,a=er,l=wn,c=hs,d=xi,h=si,m=Dn.DEFAULT_ANISOTROPY,g=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=ya(),this.name="",this.source=new gh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rf).x}get height(){return this.source.getSize(Rf).y}get depth(){return this.source.getSize(Rf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const s=e[n];if(s===void 0){st(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){st(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&s&&a.isVector2&&s.isVector2||a&&s&&a.isVector3&&s.isVector3||a&&s&&a.isMatrix3&&s.isMatrix3?a.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==B0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _d:e.x=e.x-Math.floor(e.x);break;case er:e.x=e.x<0?0:1;break;case vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _d:e.y=e.y-Math.floor(e.y);break;case er:e.y=e.y<0?0:1;break;case vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=B0;Dn.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,n=0,s=0,a=1){Zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,s,a){return this.x=e,this.y=n,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*s+c[8]*a+c[12]*l,this.y=c[1]*n+c[5]*s+c[9]*a+c[13]*l,this.z=c[2]*n+c[6]*s+c[10]*a+c[14]*l,this.w=c[3]*n+c[7]*s+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,s,a,l;const h=e.elements,m=h[0],g=h[4],_=h[8],x=h[1],y=h[5],T=h[9],w=h[2],S=h[6],v=h[10];if(Math.abs(g-x)<.01&&Math.abs(_-w)<.01&&Math.abs(T-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+w)<.1&&Math.abs(T+S)<.1&&Math.abs(m+y+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,P=(y+1)/2,U=(v+1)/2,F=(g+x)/4,I=(_+w)/4,j=(T+S)/4;return L>P&&L>U?L<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(L),a=F/s,l=I/s):P>U?P<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),s=F/a,l=j/a):U<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(U),s=I/l,a=j/l),this.set(s,a,l,n),this}let D=Math.sqrt((S-T)*(S-T)+(_-w)*(_-w)+(x-g)*(x-g));return Math.abs(D)<.001&&(D=1),this.x=(S-T)/D,this.y=(_-w)/D,this.z=(x-g)/D,this.w=Math.acos((m+y+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this.w=vt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this.w=vt(this.w,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(vt(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this.w=e.w+(n.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QS extends vo{constructor(e=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=s.depth,this.scissor=new Zt(0,0,e,n),this.scissorTest=!1,this.viewport=new Zt(0,0,e,n);const a={width:e,height:n,depth:s.depth},l=new Dn(a);this.textures=[];const c=s.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const n={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,s=1){if(this.width!==e||this.height!==n||this.depth!==s){this.width=e,this.height=n,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=s,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new gh(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends QS{constructor(e=1,n=1,s={}){super(e,n,s),this.isWebGLRenderTarget=!0}}class Y0 extends Dn{constructor(e=null,n=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:s,depth:a},this.magFilter=_n,this.minFilter=_n,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class JS extends Dn{constructor(e=null,n=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:s,depth:a},this.magFilter=_n,this.minFilter=_n,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ea{constructor(e=new re(1/0,1/0,1/0),n=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n+=3)this.expandByPoint(pi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,s=e.count;n<s;n++)this.expandByPoint(pi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const s=pi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,pi):pi.fromBufferAttribute(l,c),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ol.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ol.copy(s.boundingBox)),Ol.applyMatrix4(e.matrixWorld),this.union(Ol)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,s;return e.normal.x>0?(n=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),n<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Bl.subVectors(this.max,ra),Xs.subVectors(e.a,ra),qs.subVectors(e.b,ra),Ys.subVectors(e.c,ra),Rr.subVectors(qs,Xs),br.subVectors(Ys,qs),is.subVectors(Xs,Ys);let n=[0,-Rr.z,Rr.y,0,-br.z,br.y,0,-is.z,is.y,Rr.z,0,-Rr.x,br.z,0,-br.x,is.z,0,-is.x,-Rr.y,Rr.x,0,-br.y,br.x,0,-is.y,is.x,0];return!bf(n,Xs,qs,Ys,Bl)||(n=[1,0,0,0,1,0,0,0,1],!bf(n,Xs,qs,Ys,Bl))?!1:(kl.crossVectors(Rr,br),n=[kl.x,kl.y,kl.z],bf(n,Xs,qs,Ys,Bl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qi=[new re,new re,new re,new re,new re,new re,new re,new re],pi=new re,Ol=new Ea,Xs=new re,qs=new re,Ys=new re,Rr=new re,br=new re,is=new re,ra=new re,Bl=new re,kl=new re,rs=new re;function bf(r,e,n,s,a){for(let l=0,c=r.length-3;l<=c;l+=3){rs.fromArray(r,l);const d=a.x*Math.abs(rs.x)+a.y*Math.abs(rs.y)+a.z*Math.abs(rs.z),h=e.dot(rs),m=n.dot(rs),g=s.dot(rs);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>d)return!1}return!0}const ey=new Ea,sa=new re,Pf=new re;class _h{constructor(e=new re,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const s=this.center;n!==void 0?s.copy(n):ey.setFromPoints(e).getCenter(s);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const s=this.center.distanceToSquared(e);return n.copy(e),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const n=sa.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),a=(s-this.radius)*.5;this.center.addScaledVector(sa,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(Pf)),this.expandByPoint(sa.copy(e.center).sub(Pf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yi=new re,Df=new re,zl=new re,Pr=new re,Lf=new re,Vl=new re,If=new re;class ty{constructor(e=new re,n=new re(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Yi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,n),Yi.distanceToSquared(e))}distanceSqToSegment(e,n,s,a){Df.copy(e).add(n).multiplyScalar(.5),zl.copy(n).sub(e).normalize(),Pr.copy(this.origin).sub(Df);const l=e.distanceTo(n)*.5,c=-this.direction.dot(zl),d=Pr.dot(this.direction),h=-Pr.dot(zl),m=Pr.lengthSq(),g=Math.abs(1-c*c);let _,x,y,T;if(g>0)if(_=c*h-d,x=c*d-h,T=l*g,_>=0)if(x>=-T)if(x<=T){const w=1/g;_*=w,x*=w,y=_*(_+c*x+2*d)+x*(c*_+x+2*h)+m}else x=l,_=Math.max(0,-(c*x+d)),y=-_*_+x*(x+2*h)+m;else x=-l,_=Math.max(0,-(c*x+d)),y=-_*_+x*(x+2*h)+m;else x<=-T?(_=Math.max(0,-(-c*l+d)),x=_>0?-l:Math.min(Math.max(-l,-h),l),y=-_*_+x*(x+2*h)+m):x<=T?(_=0,x=Math.min(Math.max(-l,-h),l),y=x*(x+2*h)+m):(_=Math.max(0,-(c*l+d)),x=_>0?l:Math.min(Math.max(-l,-h),l),y=-_*_+x*(x+2*h)+m);else x=c>0?-l:l,_=Math.max(0,-(c*x+d)),y=-_*_+x*(x+2*h)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Df).addScaledVector(zl,x),y}intersectSphere(e,n){Yi.subVectors(e.center,this.origin);const s=Yi.dot(this.direction),a=Yi.dot(Yi)-s*s,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),d=s-c,h=s+c;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/n;return s>=0?s:null}intersectPlane(e,n){const s=this.distanceToPlane(e);return s===null?null:this.at(s,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let s,a,l,c,d,h;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(s=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(s=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),g>=0?(l=(e.min.y-x.y)*g,c=(e.max.y-x.y)*g):(l=(e.max.y-x.y)*g,c=(e.min.y-x.y)*g),s>c||l>a||((l>s||isNaN(s))&&(s=l),(c<a||isNaN(a))&&(a=c),_>=0?(d=(e.min.z-x.z)*_,h=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,h=(e.min.z-x.z)*_),s>h||d>a)||((d>s||s!==s)&&(s=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(s>=0?s:a,n)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,n,s,a,l){Lf.subVectors(n,e),Vl.subVectors(s,e),If.crossVectors(Lf,Vl);let c=this.direction.dot(If),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;Pr.subVectors(this.origin,e);const h=d*this.direction.dot(Vl.crossVectors(Pr,Vl));if(h<0)return null;const m=d*this.direction.dot(Lf.cross(Pr));if(m<0||h+m>c)return null;const g=-d*Pr.dot(If);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,n,s,a,l,c,d,h,m,g,_,x,y,T,w,S){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,s,a,l,c,d,h,m,g,_,x,y,T,w,S)}set(e,n,s,a,l,c,d,h,m,g,_,x,y,T,w,S){const v=this.elements;return v[0]=e,v[4]=n,v[8]=s,v[12]=a,v[1]=l,v[5]=c,v[9]=d,v[13]=h,v[2]=m,v[6]=g,v[10]=_,v[14]=x,v[3]=y,v[7]=T,v[11]=w,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(e){const n=this.elements,s=e.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,s){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,n,s){return this.set(e.x,n.x,s.x,0,e.y,n.y,s.y,0,e.z,n.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,s=e.elements,a=1/js.setFromMatrixColumn(e,0).length(),l=1/js.setFromMatrixColumn(e,1).length(),c=1/js.setFromMatrixColumn(e,2).length();return n[0]=s[0]*a,n[1]=s[1]*a,n[2]=s[2]*a,n[3]=0,n[4]=s[4]*l,n[5]=s[5]*l,n[6]=s[6]*l,n[7]=0,n[8]=s[8]*c,n[9]=s[9]*c,n[10]=s[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,s=e.x,a=e.y,l=e.z,c=Math.cos(s),d=Math.sin(s),h=Math.cos(a),m=Math.sin(a),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const x=c*g,y=c*_,T=d*g,w=d*_;n[0]=h*g,n[4]=-h*_,n[8]=m,n[1]=y+T*m,n[5]=x-w*m,n[9]=-d*h,n[2]=w-x*m,n[6]=T+y*m,n[10]=c*h}else if(e.order==="YXZ"){const x=h*g,y=h*_,T=m*g,w=m*_;n[0]=x+w*d,n[4]=T*d-y,n[8]=c*m,n[1]=c*_,n[5]=c*g,n[9]=-d,n[2]=y*d-T,n[6]=w+x*d,n[10]=c*h}else if(e.order==="ZXY"){const x=h*g,y=h*_,T=m*g,w=m*_;n[0]=x-w*d,n[4]=-c*_,n[8]=T+y*d,n[1]=y+T*d,n[5]=c*g,n[9]=w-x*d,n[2]=-c*m,n[6]=d,n[10]=c*h}else if(e.order==="ZYX"){const x=c*g,y=c*_,T=d*g,w=d*_;n[0]=h*g,n[4]=T*m-y,n[8]=x*m+w,n[1]=h*_,n[5]=w*m+x,n[9]=y*m-T,n[2]=-m,n[6]=d*h,n[10]=c*h}else if(e.order==="YZX"){const x=c*h,y=c*m,T=d*h,w=d*m;n[0]=h*g,n[4]=w-x*_,n[8]=T*_+y,n[1]=_,n[5]=c*g,n[9]=-d*g,n[2]=-m*g,n[6]=y*_+T,n[10]=x-w*_}else if(e.order==="XZY"){const x=c*h,y=c*m,T=d*h,w=d*m;n[0]=h*g,n[4]=-_,n[8]=m*g,n[1]=x*_+w,n[5]=c*g,n[9]=y*_-T,n[2]=T*_-y,n[6]=d*g,n[10]=w*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ny,e,iy)}lookAt(e,n,s){const a=this.elements;return qn.subVectors(e,n),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Dr.crossVectors(s,qn),Dr.lengthSq()===0&&(Math.abs(s.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Dr.crossVectors(s,qn)),Dr.normalize(),Hl.crossVectors(qn,Dr),a[0]=Dr.x,a[4]=Hl.x,a[8]=qn.x,a[1]=Dr.y,a[5]=Hl.y,a[9]=qn.y,a[2]=Dr.z,a[6]=Hl.z,a[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,a=n.elements,l=this.elements,c=s[0],d=s[4],h=s[8],m=s[12],g=s[1],_=s[5],x=s[9],y=s[13],T=s[2],w=s[6],S=s[10],v=s[14],D=s[3],L=s[7],P=s[11],U=s[15],F=a[0],I=a[4],j=a[8],C=a[12],R=a[1],V=a[5],se=a[9],Z=a[13],fe=a[2],ce=a[6],oe=a[10],q=a[14],X=a[3],le=a[7],te=a[11],O=a[15];return l[0]=c*F+d*R+h*fe+m*X,l[4]=c*I+d*V+h*ce+m*le,l[8]=c*j+d*se+h*oe+m*te,l[12]=c*C+d*Z+h*q+m*O,l[1]=g*F+_*R+x*fe+y*X,l[5]=g*I+_*V+x*ce+y*le,l[9]=g*j+_*se+x*oe+y*te,l[13]=g*C+_*Z+x*q+y*O,l[2]=T*F+w*R+S*fe+v*X,l[6]=T*I+w*V+S*ce+v*le,l[10]=T*j+w*se+S*oe+v*te,l[14]=T*C+w*Z+S*q+v*O,l[3]=D*F+L*R+P*fe+U*X,l[7]=D*I+L*V+P*ce+U*le,l[11]=D*j+L*se+P*oe+U*te,l[15]=D*C+L*Z+P*q+U*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[4],a=e[8],l=e[12],c=e[1],d=e[5],h=e[9],m=e[13],g=e[2],_=e[6],x=e[10],y=e[14],T=e[3],w=e[7],S=e[11],v=e[15],D=h*y-m*x,L=d*y-m*_,P=d*x-h*_,U=c*y-m*g,F=c*x-h*g,I=c*_-d*g;return n*(w*D-S*L+v*P)-s*(T*D-S*U+v*F)+a*(T*L-w*U+v*I)-l*(T*P-w*F+S*I)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=s),this}invert(){const e=this.elements,n=e[0],s=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],g=e[8],_=e[9],x=e[10],y=e[11],T=e[12],w=e[13],S=e[14],v=e[15],D=_*S*m-w*x*m+w*h*y-d*S*y-_*h*v+d*x*v,L=T*x*m-g*S*m-T*h*y+c*S*y+g*h*v-c*x*v,P=g*w*m-T*_*m+T*d*y-c*w*y-g*d*v+c*_*v,U=T*_*h-g*w*h-T*d*x+c*w*x+g*d*S-c*_*S,F=n*D+s*L+a*P+l*U;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return e[0]=D*I,e[1]=(w*x*l-_*S*l-w*a*y+s*S*y+_*a*v-s*x*v)*I,e[2]=(d*S*l-w*h*l+w*a*m-s*S*m-d*a*v+s*h*v)*I,e[3]=(_*h*l-d*x*l-_*a*m+s*x*m+d*a*y-s*h*y)*I,e[4]=L*I,e[5]=(g*S*l-T*x*l+T*a*y-n*S*y-g*a*v+n*x*v)*I,e[6]=(T*h*l-c*S*l-T*a*m+n*S*m+c*a*v-n*h*v)*I,e[7]=(c*x*l-g*h*l+g*a*m-n*x*m-c*a*y+n*h*y)*I,e[8]=P*I,e[9]=(T*_*l-g*w*l-T*s*y+n*w*y+g*s*v-n*_*v)*I,e[10]=(c*w*l-T*d*l+T*s*m-n*w*m-c*s*v+n*d*v)*I,e[11]=(g*d*l-c*_*l-g*s*m+n*_*m+c*s*y-n*d*y)*I,e[12]=U*I,e[13]=(g*w*a-T*_*a+T*s*x-n*w*x-g*s*S+n*_*S)*I,e[14]=(T*d*a-c*w*a-T*s*h+n*w*h+c*s*S-n*d*S)*I,e[15]=(c*_*a-g*d*a+g*s*h-n*_*h-c*s*x+n*d*x)*I,this}scale(e){const n=this.elements,s=e.x,a=e.y,l=e.z;return n[0]*=s,n[4]*=a,n[8]*=l,n[1]*=s,n[5]*=a,n[9]*=l,n[2]*=s,n[6]*=a,n[10]*=l,n[3]*=s,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,s,a))}makeTranslation(e,n,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const s=Math.cos(n),a=Math.sin(n),l=1-s,c=e.x,d=e.y,h=e.z,m=l*c,g=l*d;return this.set(m*c+s,m*d-a*h,m*h+a*d,0,m*d+a*h,g*d+s,g*h-a*c,0,m*h-a*d,g*h+a*c,l*h*h+s,0,0,0,0,1),this}makeScale(e,n,s){return this.set(e,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,n,s,a,l,c){return this.set(1,s,l,0,e,1,c,0,n,a,1,0,0,0,0,1),this}compose(e,n,s){const a=this.elements,l=n._x,c=n._y,d=n._z,h=n._w,m=l+l,g=c+c,_=d+d,x=l*m,y=l*g,T=l*_,w=c*g,S=c*_,v=d*_,D=h*m,L=h*g,P=h*_,U=s.x,F=s.y,I=s.z;return a[0]=(1-(w+v))*U,a[1]=(y+P)*U,a[2]=(T-L)*U,a[3]=0,a[4]=(y-P)*F,a[5]=(1-(x+v))*F,a[6]=(S+D)*F,a[7]=0,a[8]=(T+L)*I,a[9]=(S-D)*I,a[10]=(1-(x+w))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,s){const a=this.elements;if(e.x=a[12],e.y=a[13],e.z=a[14],this.determinant()===0)return s.set(1,1,1),n.identity(),this;let l=js.set(a[0],a[1],a[2]).length();const c=js.set(a[4],a[5],a[6]).length(),d=js.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),mi.copy(this);const m=1/l,g=1/c,_=1/d;return mi.elements[0]*=m,mi.elements[1]*=m,mi.elements[2]*=m,mi.elements[4]*=g,mi.elements[5]*=g,mi.elements[6]*=g,mi.elements[8]*=_,mi.elements[9]*=_,mi.elements[10]*=_,n.setFromRotationMatrix(mi),s.x=l,s.y=c,s.z=d,this}makePerspective(e,n,s,a,l,c,d=Li,h=!1){const m=this.elements,g=2*l/(n-e),_=2*l/(s-a),x=(n+e)/(n-e),y=(s+a)/(s-a);let T,w;if(h)T=l/(c-l),w=c*l/(c-l);else if(d===Li)T=-(c+l)/(c-l),w=-2*c*l/(c-l);else if(d===Su)T=-c/(c-l),w=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=_,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=w,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,s,a,l,c,d=Li,h=!1){const m=this.elements,g=2/(n-e),_=2/(s-a),x=-(n+e)/(n-e),y=-(s+a)/(s-a);let T,w;if(h)T=1/(c-l),w=c/(c-l);else if(d===Li)T=-2/(c-l),w=-(c+l)/(c-l);else if(d===Su)T=-1/(c-l),w=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=_,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=T,m[14]=w,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,s=e.elements;for(let a=0;a<16;a++)if(n[a]!==s[a])return!1;return!0}fromArray(e,n=0){for(let s=0;s<16;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e[n+9]=s[9],e[n+10]=s[10],e[n+11]=s[11],e[n+12]=s[12],e[n+13]=s[13],e[n+14]=s[14],e[n+15]=s[15],e}}const js=new re,mi=new tn,ny=new re(0,0,0),iy=new re(1,1,1),Dr=new re,Hl=new re,qn=new re,yg=new tn,Mg=new Ma;class or{constructor(e=0,n=0,s=0,a=or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,s,a=this._order){return this._x=e,this._y=n,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,s=!0){const a=e.elements,l=a[0],c=a[4],d=a[8],h=a[1],m=a[5],g=a[9],_=a[2],x=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(vt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-vt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-g,y),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,s){return yg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yg,n,s)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Mg.setFromEuler(this),this.setFromQuaternion(Mg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}or.DEFAULT_ORDER="XYZ";class j0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ry=0;const Eg=new re,$s=new Ma,ji=new tn,Gl=new re,oa=new re,sy=new re,oy=new Ma,Tg=new re(1,0,0),wg=new re(0,1,0),Ag=new re(0,0,1),Cg={type:"added"},ay={type:"removed"},Ks={type:"childadded",child:null},Nf={type:"childremoved",child:null};class $n extends vo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const e=new re,n=new or,s=new Ma,a=new re(1,1,1);function l(){s.setFromEuler(n,!1)}function c(){n.setFromQuaternion(s,void 0,!1)}n._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new tn},normalMatrix:{value:new ut}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new j0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return $s.setFromAxisAngle(e,n),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,n){return $s.setFromAxisAngle(e,n),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(Tg,e)}rotateY(e){return this.rotateOnAxis(wg,e)}rotateZ(e){return this.rotateOnAxis(Ag,e)}translateOnAxis(e,n){return Eg.copy(e).applyQuaternion(this.quaternion),this.position.add(Eg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Tg,e)}translateY(e){return this.translateOnAxis(wg,e)}translateZ(e){return this.translateOnAxis(Ag,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,n,s){e.isVector3?Gl.copy(e):Gl.set(e,n,s);const a=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(oa,Gl,this.up):ji.lookAt(Gl,oa,this.up),this.quaternion.setFromRotationMatrix(ji),a&&(ji.extractRotation(a.matrixWorld),$s.setFromRotationMatrix(ji),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cg),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ay),Nf.child=e,this.dispatchEvent(Nf),Nf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cg),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let s=0,a=this.children.length;s<a;s++){const c=this.children[s].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,s=[]){this[e]===n&&s.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,n,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,sy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,oy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateMatrixWorld(e)}updateWorldMatrix(e,n){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",s={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const _=h[m];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(l(e.materials,this.material[h]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(l(e.animations,h))}}if(n){const d=c(e.geometries),h=c(e.materials),m=c(e.textures),g=c(e.images),_=c(e.shapes),x=c(e.skeletons),y=c(e.animations),T=c(e.nodes);d.length>0&&(s.geometries=d),h.length>0&&(s.materials=h),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),T.length>0&&(s.nodes=T)}return s.object=a,s;function c(d){const h=[];for(const m in d){const g=d[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}$n.DEFAULT_UP=new re(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new re,$i=new re,Uf=new re,Ki=new re,Zs=new re,Qs=new re,Rg=new re,Ff=new re,Of=new re,Bf=new re,kf=new Zt,zf=new Zt,Vf=new Zt;class vi{constructor(e=new re,n=new re,s=new re){this.a=e,this.b=n,this.c=s}static getNormal(e,n,s,a){a.subVectors(s,n),gi.subVectors(e,n),a.cross(gi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,s,a,l){gi.subVectors(a,n),$i.subVectors(s,n),Uf.subVectors(e,n);const c=gi.dot(gi),d=gi.dot($i),h=gi.dot(Uf),m=$i.dot($i),g=$i.dot(Uf),_=c*m-d*d;if(_===0)return l.set(0,0,0),null;const x=1/_,y=(m*h-d*g)*x,T=(c*g-d*h)*x;return l.set(1-y-T,T,y)}static containsPoint(e,n,s,a){return this.getBarycoord(e,n,s,a,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,n,s,a,l,c,d,h){return this.getBarycoord(e,n,s,a,Ki)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Ki.x),h.addScaledVector(c,Ki.y),h.addScaledVector(d,Ki.z),h)}static getInterpolatedAttribute(e,n,s,a,l,c){return kf.setScalar(0),zf.setScalar(0),Vf.setScalar(0),kf.fromBufferAttribute(e,n),zf.fromBufferAttribute(e,s),Vf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(kf,l.x),c.addScaledVector(zf,l.y),c.addScaledVector(Vf,l.z),c}static isFrontFacing(e,n,s,a){return gi.subVectors(s,n),$i.subVectors(e,n),gi.cross($i).dot(a)<0}set(e,n,s){return this.a.copy(e),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(e,n,s,a){return this.a.copy(e[n]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,s,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),gi.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return vi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,s,a,l){return vi.getInterpolation(e,this.a,this.b,this.c,n,s,a,l)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const s=this.a,a=this.b,l=this.c;let c,d;Zs.subVectors(a,s),Qs.subVectors(l,s),Ff.subVectors(e,s);const h=Zs.dot(Ff),m=Qs.dot(Ff);if(h<=0&&m<=0)return n.copy(s);Of.subVectors(e,a);const g=Zs.dot(Of),_=Qs.dot(Of);if(g>=0&&_<=g)return n.copy(a);const x=h*_-g*m;if(x<=0&&h>=0&&g<=0)return c=h/(h-g),n.copy(s).addScaledVector(Zs,c);Bf.subVectors(e,l);const y=Zs.dot(Bf),T=Qs.dot(Bf);if(T>=0&&y<=T)return n.copy(l);const w=y*m-h*T;if(w<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(s).addScaledVector(Qs,d);const S=g*T-y*_;if(S<=0&&_-g>=0&&y-T>=0)return Rg.subVectors(l,a),d=(_-g)/(_-g+(y-T)),n.copy(a).addScaledVector(Rg,d);const v=1/(S+w+x);return c=w*v,d=x*v,n.copy(s).addScaledVector(Zs,c).addScaledVector(Qs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},Wl={h:0,s:0,l:0};function Hf(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class Ut{constructor(e,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,s)}set(e,n,s){if(n===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,n),this}setRGB(e,n,s,a=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=s,Tt.colorSpaceToWorking(this,a),this}setHSL(e,n,s,a=Tt.workingColorSpace){if(e=YS(e,1),n=vt(n,0,1),s=vt(s,0,1),n===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+n):s+n-s*n,c=2*s-l;this.r=Hf(c,l,e+1/3),this.g=Hf(c,l,e),this.b=Hf(c,l,e-1/3)}return Tt.colorSpaceToWorking(this,a),this}setStyle(e,n=ri){function s(l){l!==void 0&&parseFloat(l)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:st("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ri){const s=$0[e.toLowerCase()];return s!==void 0?this.setHex(s,n):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Tt.workingToColorSpace(Tn.copy(this),e),Math.round(vt(Tn.r*255,0,255))*65536+Math.round(vt(Tn.g*255,0,255))*256+Math.round(vt(Tn.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.workingToColorSpace(Tn.copy(this),n);const s=Tn.r,a=Tn.g,l=Tn.b,c=Math.max(s,a,l),d=Math.min(s,a,l);let h,m;const g=(d+c)/2;if(d===c)h=0,m=0;else{const _=c-d;switch(m=g<=.5?_/(c+d):_/(2-c-d),c){case s:h=(a-l)/_+(a<l?6:0);break;case a:h=(l-s)/_+2;break;case l:h=(s-a)/_+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,n=Tt.workingColorSpace){return Tt.workingToColorSpace(Tn.copy(this),n),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=ri){Tt.workingToColorSpace(Tn.copy(this),e);const n=Tn.r,s=Tn.g,a=Tn.b;return e!==ri?`color(${e} ${n.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,n,s){return this.getHSL(Lr),this.setHSL(Lr.h+e,Lr.s+n,Lr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,s){return this.r=e.r+(n.r-e.r)*s,this.g=e.g+(n.g-e.g)*s,this.b=e.b+(n.b-e.b)*s,this}lerpHSL(e,n){this.getHSL(Lr),e.getHSL(Wl);const s=Tf(Lr.h,Wl.h,n),a=Tf(Lr.s,Wl.s,n),l=Tf(Lr.l,Wl.l,n);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*s+l[6]*a,this.g=l[1]*n+l[4]*s+l[7]*a,this.b=l[2]*n+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Ut;Ut.NAMES=$0;let ly=0;class bu extends vo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=ya(),this.name="",this.type="Material",this.blending=ro,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=od,this.blendDst=ad,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const s=e[n];if(s===void 0){st(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){st(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ro&&(s.blending=this.blending),this.side!==kr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==od&&(s.blendSrc=this.blendSrc),this.blendDst!==ad&&(s.blendDst=this.blendDst),this.blendEquation!==cs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const c=[];for(const d in l){const h=l[d];delete h.metadata,c.push(h)}return c}if(n){const l=a(e.textures),c=a(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let s=null;if(n!==null){const a=n.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=n[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class K0 extends bu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.combine=P0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new re,Xl=new Ft;let uy=0;class Ui{constructor(e,n,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uy++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=s,this.usage=mg,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,s){e*=this.itemSize,s*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Xl.fromBufferAttribute(this,n),Xl.applyMatrix3(e),this.setXY(n,Xl.x,Xl.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix3(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let n=0,s=this.count;n<s;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix4(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let n=0,s=this.count;n<s;n++)Jt.fromBufferAttribute(this,n),Jt.applyNormalMatrix(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let n=0,s=this.count;n<s;n++)Jt.fromBufferAttribute(this,n),Jt.transformDirection(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let s=this.array[e*this.itemSize+n];return this.normalized&&(s=ia(s,this.array)),s}setComponent(e,n,s){return this.normalized&&(s=Bn(s,this.array)),this.array[e*this.itemSize+n]=s,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ia(n,this.array)),n}setX(e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ia(n,this.array)),n}setY(e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ia(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ia(n,this.array)),n}setW(e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,s){return e*=this.itemSize,this.normalized&&(n=Bn(n,this.array),s=Bn(s,this.array)),this.array[e+0]=n,this.array[e+1]=s,this}setXYZ(e,n,s,a){return e*=this.itemSize,this.normalized&&(n=Bn(n,this.array),s=Bn(s,this.array),a=Bn(a,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,n,s,a,l){return e*=this.itemSize,this.normalized&&(n=Bn(n,this.array),s=Bn(s,this.array),a=Bn(a,this.array),l=Bn(l,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mg&&(e.usage=this.usage),e}}class Z0 extends Ui{constructor(e,n,s){super(new Uint16Array(e),n,s)}}class Q0 extends Ui{constructor(e,n,s){super(new Uint32Array(e),n,s)}}class ir extends Ui{constructor(e,n,s){super(new Float32Array(e),n,s)}}let cy=0;const ii=new tn,Gf=new $n,Js=new re,Yn=new Ea,aa=new Ea,hn=new re;class ar extends vo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=ya(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(q0(e)?Q0:Z0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,s=0){this.groups.push({start:e,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ut().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,n,s){return ii.makeTranslation(e,n,s),this.applyMatrix4(ii),this}scale(e,n,s){return ii.makeScale(e,n,s),this.applyMatrix4(ii),this}lookAt(e){return Gf.lookAt(e),Gf.updateMatrix(),this.applyMatrix4(Gf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ir(s,3))}else{const s=Math.min(e.length,n.count);for(let a=0;a<s;a++){const l=e[a];n.setXYZ(a,l.x,l.y,l.z||0)}e.length>n.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ea);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const l=n[s];Yn.setFromBufferAttribute(l),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _h);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const s=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const d=n[l];aa.setFromBufferAttribute(d),this.morphTargetsRelative?(hn.addVectors(Yn.min,aa.min),Yn.expandByPoint(hn),hn.addVectors(Yn.max,aa.max),Yn.expandByPoint(hn)):(Yn.expandByPoint(aa.min),Yn.expandByPoint(aa.max))}Yn.getCenter(s);let a=0;for(let l=0,c=e.count;l<c;l++)hn.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(hn));if(n)for(let l=0,c=n.length;l<c;l++){const d=n[l],h=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)hn.fromBufferAttribute(d,m),h&&(Js.fromBufferAttribute(e,m),hn.add(Js)),a=Math.max(a,s.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),d=[],h=[];for(let j=0;j<s.count;j++)d[j]=new re,h[j]=new re;const m=new re,g=new re,_=new re,x=new Ft,y=new Ft,T=new Ft,w=new re,S=new re;function v(j,C,R){m.fromBufferAttribute(s,j),g.fromBufferAttribute(s,C),_.fromBufferAttribute(s,R),x.fromBufferAttribute(l,j),y.fromBufferAttribute(l,C),T.fromBufferAttribute(l,R),g.sub(m),_.sub(m),y.sub(x),T.sub(x);const V=1/(y.x*T.y-T.x*y.y);isFinite(V)&&(w.copy(g).multiplyScalar(T.y).addScaledVector(_,-y.y).multiplyScalar(V),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-T.x).multiplyScalar(V),d[j].add(w),d[C].add(w),d[R].add(w),h[j].add(S),h[C].add(S),h[R].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let j=0,C=D.length;j<C;++j){const R=D[j],V=R.start,se=R.count;for(let Z=V,fe=V+se;Z<fe;Z+=3)v(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const L=new re,P=new re,U=new re,F=new re;function I(j){U.fromBufferAttribute(a,j),F.copy(U);const C=d[j];L.copy(C),L.sub(U.multiplyScalar(U.dot(C))).normalize(),P.crossVectors(F,C);const V=P.dot(h[j])<0?-1:1;c.setXYZW(j,L.x,L.y,L.z,V)}for(let j=0,C=D.length;j<C;++j){const R=D[j],V=R.start,se=R.count;for(let Z=V,fe=V+se;Z<fe;Z+=3)I(e.getX(Z+0)),I(e.getX(Z+1)),I(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ui(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const a=new re,l=new re,c=new re,d=new re,h=new re,m=new re,g=new re,_=new re;if(e)for(let x=0,y=e.count;x<y;x+=3){const T=e.getX(x+0),w=e.getX(x+1),S=e.getX(x+2);a.fromBufferAttribute(n,T),l.fromBufferAttribute(n,w),c.fromBufferAttribute(n,S),g.subVectors(c,l),_.subVectors(a,l),g.cross(_),d.fromBufferAttribute(s,T),h.fromBufferAttribute(s,w),m.fromBufferAttribute(s,S),d.add(g),h.add(g),m.add(g),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(w,h.x,h.y,h.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,y=n.count;x<y;x+=3)a.fromBufferAttribute(n,x+0),l.fromBufferAttribute(n,x+1),c.fromBufferAttribute(n,x+2),g.subVectors(c,l),_.subVectors(a,l),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,s=e.count;n<s;n++)hn.fromBufferAttribute(e,n),hn.normalize(),e.setXYZ(n,hn.x,hn.y,hn.z)}toNonIndexed(){function e(d,h){const m=d.array,g=d.itemSize,_=d.normalized,x=new m.constructor(h.length*g);let y=0,T=0;for(let w=0,S=h.length;w<S;w++){d.isInterleavedBufferAttribute?y=h[w]*d.data.stride+d.offset:y=h[w]*g;for(let v=0;v<g;v++)x[T++]=m[y++]}return new Ui(x,g,_)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ar,s=this.index.array,a=this.attributes;for(const d in a){const h=a[d],m=e(h,s);n.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const h=[],m=l[d];for(let g=0,_=m.length;g<_;g++){const x=m[g],y=e(x,s);h.push(y)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,h=c.length;d<h;d++){const m=c[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const h in s){const m=s[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let _=0,x=m.length;_<x;_++){const y=m[_];g.push(y.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(n))}const l=e.morphAttributes;for(const m in l){const g=[],_=l[m];for(let x=0,y=_.length;x<y;x++)g.push(_[x].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,g=c.length;m<g;m++){const _=c[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bg=new tn,ss=new ty,ql=new _h,Pg=new re,Yl=new re,jl=new re,$l=new re,Wf=new re,Kl=new re,Dg=new re,Zl=new re;class Oi extends $n{constructor(e=new ar,n=new K0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const a=n[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,n){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){Kl.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const g=d[h],_=l[h];g!==0&&(Wf.fromBufferAttribute(_,e),c?Kl.addScaledVector(Wf,g):Kl.addScaledVector(Wf.sub(n),g))}n.add(Kl)}return n}raycast(e,n){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),ql.copy(s.boundingSphere),ql.applyMatrix4(l),ss.copy(e.ray).recast(e.near),!(ql.containsPoint(ss.origin)===!1&&(ss.intersectSphere(ql,Pg)===null||ss.origin.distanceToSquared(Pg)>(e.far-e.near)**2))&&(bg.copy(l).invert(),ss.copy(e.ray).applyMatrix4(bg),!(s.boundingBox!==null&&ss.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,n,ss)))}_computeIntersections(e,n,s){let a;const l=this.geometry,c=this.material,d=l.index,h=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,x=l.groups,y=l.drawRange;if(d!==null)if(Array.isArray(c))for(let T=0,w=x.length;T<w;T++){const S=x[T],v=c[S.materialIndex],D=Math.max(S.start,y.start),L=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let P=D,U=L;P<U;P+=3){const F=d.getX(P),I=d.getX(P+1),j=d.getX(P+2);a=Ql(this,v,e,s,m,g,_,F,I,j),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const T=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let S=T,v=w;S<v;S+=3){const D=d.getX(S),L=d.getX(S+1),P=d.getX(S+2);a=Ql(this,c,e,s,m,g,_,D,L,P),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let T=0,w=x.length;T<w;T++){const S=x[T],v=c[S.materialIndex],D=Math.max(S.start,y.start),L=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let P=D,U=L;P<U;P+=3){const F=P,I=P+1,j=P+2;a=Ql(this,v,e,s,m,g,_,F,I,j),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const T=Math.max(0,y.start),w=Math.min(h.count,y.start+y.count);for(let S=T,v=w;S<v;S+=3){const D=S,L=S+1,P=S+2;a=Ql(this,c,e,s,m,g,_,D,L,P),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}}}function fy(r,e,n,s,a,l,c,d){let h;if(e.side===zn?h=s.intersectTriangle(c,l,a,!0,d):h=s.intersectTriangle(a,l,c,e.side===kr,d),h===null)return null;Zl.copy(d),Zl.applyMatrix4(r.matrixWorld);const m=n.ray.origin.distanceTo(Zl);return m<n.near||m>n.far?null:{distance:m,point:Zl.clone(),object:r}}function Ql(r,e,n,s,a,l,c,d,h,m){r.getVertexPosition(d,Yl),r.getVertexPosition(h,jl),r.getVertexPosition(m,$l);const g=fy(r,e,n,s,Yl,jl,$l,Dg);if(g){const _=new re;vi.getBarycoord(Dg,Yl,jl,$l,_),a&&(g.uv=vi.getInterpolatedAttribute(a,d,h,m,_,new Ft)),l&&(g.uv1=vi.getInterpolatedAttribute(l,d,h,m,_,new Ft)),c&&(g.normal=vi.getInterpolatedAttribute(c,d,h,m,_,new re),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:h,c:m,normal:new re,materialIndex:0};vi.getNormal(Yl,jl,$l,x.normal),g.face=x,g.barycoord=_}return g}class Ta extends ar{constructor(e=1,n=1,s=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:s,widthSegments:a,heightSegments:l,depthSegments:c};const d=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],m=[],g=[],_=[];let x=0,y=0;T("z","y","x",-1,-1,s,n,e,c,l,0),T("z","y","x",1,-1,s,n,-e,c,l,1),T("x","z","y",1,1,e,s,n,a,c,2),T("x","z","y",1,-1,e,s,-n,a,c,3),T("x","y","z",1,-1,e,n,s,a,l,4),T("x","y","z",-1,-1,e,n,-s,a,l,5),this.setIndex(h),this.setAttribute("position",new ir(m,3)),this.setAttribute("normal",new ir(g,3)),this.setAttribute("uv",new ir(_,2));function T(w,S,v,D,L,P,U,F,I,j,C){const R=P/I,V=U/j,se=P/2,Z=U/2,fe=F/2,ce=I+1,oe=j+1;let q=0,X=0;const le=new re;for(let te=0;te<oe;te++){const O=te*V-Z;for(let J=0;J<ce;J++){const we=J*R-se;le[w]=we*D,le[S]=O*L,le[v]=fe,m.push(le.x,le.y,le.z),le[w]=0,le[S]=0,le[v]=F>0?1:-1,g.push(le.x,le.y,le.z),_.push(J/I),_.push(1-te/j),q+=1}}for(let te=0;te<j;te++)for(let O=0;O<I;O++){const J=x+O+ce*te,we=x+O+ce*(te+1),ze=x+(O+1)+ce*(te+1),We=x+(O+1)+ce*te;h.push(J,we,We),h.push(we,ze,We),X+=6}d.addGroup(y,X,C),y+=X,x+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function go(r){const e={};for(const n in r){e[n]={};for(const s in r[n]){const a=r[n][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][s]=null):e[n][s]=a.clone():Array.isArray(a)?e[n][s]=a.slice():e[n][s]=a}}return e}function Pn(r){const e={};for(let n=0;n<r.length;n++){const s=go(r[n]);for(const a in s)e[a]=s[a]}return e}function dy(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function J0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const hy={clone:go,merge:Pn};var py=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,my=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends bu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=py,this.fragmentShader=my,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=dy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?n.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[a]={type:"m4",value:c.toArray()}:n.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class e_ extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ir=new re,Lg=new Ft,Ig=new Ft;class _i extends e_{constructor(e=50,n=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Qd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ef*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qd*2*Math.atan(Math.tan(Ef*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,s){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,n){return this.getViewBounds(e,Lg,Ig),n.subVectors(Ig,Lg)}setViewOffset(e,n,s,a,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ef*.5*this.fov)/this.zoom,s=2*n,a=this.aspect*s,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,m=c.fullHeight;l+=c.offsetX*a/h,n-=c.offsetY*s/m,a*=c.width/h,s*=c.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const eo=-90,to=1;class gy extends $n{constructor(e,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new _i(eo,to,e,n);a.layers=this.layers,this.add(a);const l=new _i(eo,to,e,n);l.layers=this.layers,this.add(l);const c=new _i(eo,to,e,n);c.layers=this.layers,this.add(c);const d=new _i(eo,to,e,n);d.layers=this.layers,this.add(d);const h=new _i(eo,to,e,n);h.layers=this.layers,this.add(h);const m=new _i(eo,to,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[s,a,l,c,d,h]=n;for(const m of n)this.remove(m);if(e===Li)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Su)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,h,m,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(n,l),e.setRenderTarget(s,1,a),e.render(n,c),e.setRenderTarget(s,2,a),e.render(n,d),e.setRenderTarget(s,3,a),e.render(n,h),e.setRenderTarget(s,4,a),e.render(n,m),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,a),e.render(n,g),e.setRenderTarget(_,x,y),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class t_ extends Dn{constructor(e=[],n=_s,s,a,l,c,d,h,m,g){super(e,n,s,a,l,c,d,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class n_ extends Ni{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new t_(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ta(5,5,5),l=new yi({name:"CubemapFromEquirect",uniforms:go(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:zn,blending:tr});l.uniforms.tEquirect.value=n;const c=new Oi(a,l),d=n.minFilter;return n.minFilter===hs&&(n.minFilter=wn),new gy(1,10,this).update(e,c),n.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,s=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,s,a);e.setRenderTarget(l)}}class Jl extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _y={type:"move"};class Xf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const s of e.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,s){let a=null,l=null,c=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const w of e.hand.values()){const S=n.getJointPose(w,s),v=this._getHandJoint(m,w);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=g.position.distanceTo(_.position),y=.02,T=.005;m.inputState.pinching&&x>y+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=y-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(_y)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const s=new Jl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[n.jointName]=s,e.add(s)}return e.joints[n.jointName]}}class vy extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new or,this.environmentIntensity=1,this.environmentRotation=new or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class xy extends Dn{constructor(e=null,n=1,s=1,a,l,c,d,h,m=_n,g=_n,_,x){super(null,c,d,h,m,g,a,l,_,x),this.isDataTexture=!0,this.image={data:e,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qf=new re,Sy=new re,yy=new ut;class us{constructor(e=new re(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,s,a){return this.normal.set(e,n,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,s){const a=qf.subVectors(s,n).cross(Sy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const s=e.delta(qf),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return n<0&&s>0||s<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const s=n||yy.getNormalMatrix(e),a=this.coplanarPoint(qf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const os=new _h,My=new Ft(.5,.5),eu=new re;class i_{constructor(e=new us,n=new us,s=new us,a=new us,l=new us,c=new us){this.planes=[e,n,s,a,l,c]}set(e,n,s,a,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(s),d[3].copy(a),d[4].copy(l),d[5].copy(c),this}copy(e){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,n=Li,s=!1){const a=this.planes,l=e.elements,c=l[0],d=l[1],h=l[2],m=l[3],g=l[4],_=l[5],x=l[6],y=l[7],T=l[8],w=l[9],S=l[10],v=l[11],D=l[12],L=l[13],P=l[14],U=l[15];if(a[0].setComponents(m-c,y-g,v-T,U-D).normalize(),a[1].setComponents(m+c,y+g,v+T,U+D).normalize(),a[2].setComponents(m+d,y+_,v+w,U+L).normalize(),a[3].setComponents(m-d,y-_,v-w,U-L).normalize(),s)a[4].setComponents(h,x,S,P).normalize(),a[5].setComponents(m-h,y-x,v-S,U-P).normalize();else if(a[4].setComponents(m-h,y-x,v-S,U-P).normalize(),n===Li)a[5].setComponents(m+h,y+x,v+S,U+P).normalize();else if(n===Su)a[5].setComponents(h,x,S,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);const n=My.distanceTo(e.center);return os.radius=.7071067811865476+n,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){const n=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let s=0;s<6;s++){const a=n[s];if(eu.x=a.normal.x>0?e.max.x:e.min.x,eu.y=a.normal.y>0?e.max.y:e.min.y,eu.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(eu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xa extends Dn{constructor(e,n,s=Fi,a,l,c,d=_n,h=_n,m,g=sr,_=1){if(g!==sr&&g!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:_};super(x,a,l,c,d,h,g,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ey extends xa{constructor(e,n=Fi,s=_s,a,l,c=_n,d=_n,h,m=sr){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,n,s,a,l,c,d,h,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class r_ extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wa extends ar{constructor(e=1,n=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:s,heightSegments:a};const l=e/2,c=n/2,d=Math.floor(s),h=Math.floor(a),m=d+1,g=h+1,_=e/d,x=n/h,y=[],T=[],w=[],S=[];for(let v=0;v<g;v++){const D=v*x-c;for(let L=0;L<m;L++){const P=L*_-l;T.push(P,-D,0),w.push(0,0,1),S.push(L/d),S.push(1-v/h)}}for(let v=0;v<h;v++)for(let D=0;D<d;D++){const L=D+m*v,P=D+m*(v+1),U=D+1+m*(v+1),F=D+1+m*v;y.push(L,P,F),y.push(P,U,F)}this.setIndex(y),this.setAttribute("position",new ir(T,3)),this.setAttribute("normal",new ir(w,3)),this.setAttribute("uv",new ir(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ty extends yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wy extends bu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ay extends bu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class vh extends e_{constructor(e=-1,n=1,s=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=s,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,s,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,c=s+e,d=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,d-=g*this.view.offsetY,h=d-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Cy extends _i{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ry{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Ng(r,e,n,s){const a=by(s);switch(n){case G0:return r*e;case X0:return r*e/a.components*a.byteLength;case fh:return r*e/a.components*a.byteLength;case po:return r*e*2/a.components*a.byteLength;case dh:return r*e*2/a.components*a.byteLength;case W0:return r*e*3/a.components*a.byteLength;case xi:return r*e*4/a.components*a.byteLength;case hh:return r*e*4/a.components*a.byteLength;case cu:case fu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case du:case hu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Sd:case Md:return Math.max(r,16)*Math.max(e,8)/4;case xd:case yd:return Math.max(r,8)*Math.max(e,8)/2;case Ed:case Td:case Ad:case Cd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case wd:case Rd:case bd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Id:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Od:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Bd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case kd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case zd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Hd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Gd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Wd:case Xd:case qd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Yd:case jd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case $d:case Kd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function by(r){switch(r){case si:case k0:return{byteLength:1,components:1};case ga:case z0:case rr:return{byteLength:2,components:1};case uh:case ch:return{byteLength:2,components:4};case Fi:case lh:case Di:return{byteLength:4,components:1};case V0:case H0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ah}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ah);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function s_(){let r=null,e=!1,n=null,s=null;function a(l,c){n(l,c),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){r=l}}}function Py(r){const e=new WeakMap;function n(d,h){const m=d.array,g=d.usage,_=m.byteLength,x=r.createBuffer();r.bindBuffer(h,x),r.bufferData(h,m,g),d.onUploadCallback();let y;if(m instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=r.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=r.SHORT;else if(m instanceof Uint32Array)y=r.UNSIGNED_INT;else if(m instanceof Int32Array)y=r.INT;else if(m instanceof Int8Array)y=r.BYTE;else if(m instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,h,m){const g=h.array,_=h.updateRanges;if(r.bindBuffer(m,d),_.length===0)r.bufferSubData(m,0,g);else{_.sort((y,T)=>y.start-T.start);let x=0;for(let y=1;y<_.length;y++){const T=_[x],w=_[y];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++x,_[x]=w)}_.length=x+1;for(let y=0,T=_.length;y<T;y++){const w=_[y];r.bufferSubData(m,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(r.deleteBuffer(h.buffer),e.delete(d))}function c(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,h),m.version=d.version}}return{get:a,remove:l,update:c}}var Dy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ly=`#ifdef USE_ALPHAHASH
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
#endif`,Iy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ny=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Oy=`#ifdef USE_AOMAP
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
#endif`,By=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ky=`#ifdef USE_BATCHING
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
#endif`,zy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wy=`#ifdef USE_IRIDESCENCE
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
#endif`,Xy=`#ifdef USE_BUMPMAP
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
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,eM=`#define PI 3.141592653589793
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
} // validated`,tM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nM=`vec3 transformedNormal = objectNormal;
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
#endif`,iM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aM="gl_FragColor = linearToOutputTexel( gl_FragColor );",lM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uM=`#ifdef USE_ENVMAP
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
#endif`,cM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fM=`#ifdef USE_ENVMAP
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
#endif`,dM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
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
#endif`,pM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vM=`#ifdef USE_GRADIENTMAP
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
}`,xM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MM=`uniform bool receiveShadow;
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
#endif`,EM=`#ifdef USE_ENVMAP
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
#endif`,TM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RM=`PhysicalMaterial material;
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
#endif`,bM=`uniform sampler2D dfgLUT;
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
}`,PM=`
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
#endif`,DM=`#if defined( RE_IndirectDiffuse )
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
#endif`,LM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zM=`#if defined( USE_POINTS_UV )
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
#endif`,VM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qM=`#ifdef USE_MORPHTARGETS
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
#endif`,YM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$M=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,KM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JM=`#ifdef USE_NORMALMAP
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
#endif`,eE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mE=`float getShadowMask() {
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
}`,gE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_E=`#ifdef USE_SKINNING
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
#endif`,vE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xE=`#ifdef USE_SKINNING
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
#endif`,SE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ME=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TE=`#ifdef USE_TRANSMISSION
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
#endif`,wE=`#ifdef USE_TRANSMISSION
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
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DE=`uniform sampler2D t2D;
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
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FE=`#include <common>
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
}`,OE=`#if DEPTH_PACKING == 3200
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
}`,BE=`#define DISTANCE
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
}`,kE=`#define DISTANCE
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
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`uniform float scale;
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
}`,GE=`uniform vec3 diffuse;
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
}`,WE=`#include <common>
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
}`,XE=`uniform vec3 diffuse;
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
}`,qE=`#define LAMBERT
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
}`,YE=`#define LAMBERT
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
}`,jE=`#define MATCAP
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
}`,$E=`#define MATCAP
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
}`,KE=`#define NORMAL
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
}`,ZE=`#define NORMAL
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
}`,QE=`#define PHONG
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
}`,JE=`#define PHONG
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
}`,e1=`#define STANDARD
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
}`,t1=`#define STANDARD
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
}`,n1=`#define TOON
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
}`,i1=`#define TOON
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
}`,r1=`uniform float size;
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
}`,s1=`uniform vec3 diffuse;
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
}`,o1=`#include <common>
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
}`,a1=`uniform vec3 color;
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
}`,l1=`uniform float rotation;
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
}`,u1=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Dy,alphahash_pars_fragment:Ly,alphamap_fragment:Iy,alphamap_pars_fragment:Ny,alphatest_fragment:Uy,alphatest_pars_fragment:Fy,aomap_fragment:Oy,aomap_pars_fragment:By,batching_pars_vertex:ky,batching_vertex:zy,begin_vertex:Vy,beginnormal_vertex:Hy,bsdfs:Gy,iridescence_fragment:Wy,bumpmap_pars_fragment:Xy,clipping_planes_fragment:qy,clipping_planes_pars_fragment:Yy,clipping_planes_pars_vertex:jy,clipping_planes_vertex:$y,color_fragment:Ky,color_pars_fragment:Zy,color_pars_vertex:Qy,color_vertex:Jy,common:eM,cube_uv_reflection_fragment:tM,defaultnormal_vertex:nM,displacementmap_pars_vertex:iM,displacementmap_vertex:rM,emissivemap_fragment:sM,emissivemap_pars_fragment:oM,colorspace_fragment:aM,colorspace_pars_fragment:lM,envmap_fragment:uM,envmap_common_pars_fragment:cM,envmap_pars_fragment:fM,envmap_pars_vertex:dM,envmap_physical_pars_fragment:EM,envmap_vertex:hM,fog_vertex:pM,fog_pars_vertex:mM,fog_fragment:gM,fog_pars_fragment:_M,gradientmap_pars_fragment:vM,lightmap_pars_fragment:xM,lights_lambert_fragment:SM,lights_lambert_pars_fragment:yM,lights_pars_begin:MM,lights_toon_fragment:TM,lights_toon_pars_fragment:wM,lights_phong_fragment:AM,lights_phong_pars_fragment:CM,lights_physical_fragment:RM,lights_physical_pars_fragment:bM,lights_fragment_begin:PM,lights_fragment_maps:DM,lights_fragment_end:LM,logdepthbuf_fragment:IM,logdepthbuf_pars_fragment:NM,logdepthbuf_pars_vertex:UM,logdepthbuf_vertex:FM,map_fragment:OM,map_pars_fragment:BM,map_particle_fragment:kM,map_particle_pars_fragment:zM,metalnessmap_fragment:VM,metalnessmap_pars_fragment:HM,morphinstance_vertex:GM,morphcolor_vertex:WM,morphnormal_vertex:XM,morphtarget_pars_vertex:qM,morphtarget_vertex:YM,normal_fragment_begin:jM,normal_fragment_maps:$M,normal_pars_fragment:KM,normal_pars_vertex:ZM,normal_vertex:QM,normalmap_pars_fragment:JM,clearcoat_normal_fragment_begin:eE,clearcoat_normal_fragment_maps:tE,clearcoat_pars_fragment:nE,iridescence_pars_fragment:iE,opaque_fragment:rE,packing:sE,premultiplied_alpha_fragment:oE,project_vertex:aE,dithering_fragment:lE,dithering_pars_fragment:uE,roughnessmap_fragment:cE,roughnessmap_pars_fragment:fE,shadowmap_pars_fragment:dE,shadowmap_pars_vertex:hE,shadowmap_vertex:pE,shadowmask_pars_fragment:mE,skinbase_vertex:gE,skinning_pars_vertex:_E,skinning_vertex:vE,skinnormal_vertex:xE,specularmap_fragment:SE,specularmap_pars_fragment:yE,tonemapping_fragment:ME,tonemapping_pars_fragment:EE,transmission_fragment:TE,transmission_pars_fragment:wE,uv_pars_fragment:AE,uv_pars_vertex:CE,uv_vertex:RE,worldpos_vertex:bE,background_vert:PE,background_frag:DE,backgroundCube_vert:LE,backgroundCube_frag:IE,cube_vert:NE,cube_frag:UE,depth_vert:FE,depth_frag:OE,distance_vert:BE,distance_frag:kE,equirect_vert:zE,equirect_frag:VE,linedashed_vert:HE,linedashed_frag:GE,meshbasic_vert:WE,meshbasic_frag:XE,meshlambert_vert:qE,meshlambert_frag:YE,meshmatcap_vert:jE,meshmatcap_frag:$E,meshnormal_vert:KE,meshnormal_frag:ZE,meshphong_vert:QE,meshphong_frag:JE,meshphysical_vert:e1,meshphysical_frag:t1,meshtoon_vert:n1,meshtoon_frag:i1,points_vert:r1,points_frag:s1,shadow_vert:o1,shadow_frag:a1,sprite_vert:l1,sprite_frag:u1},Ie={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Pi={basic:{uniforms:Pn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Pn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Pn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Pn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Pn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Pn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Pn([Ie.points,Ie.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Pn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Pn([Ie.common,Ie.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Pn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Pn([Ie.sprite,Ie.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Pn([Ie.common,Ie.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Pn([Ie.lights,Ie.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Pi.physical={uniforms:Pn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const tu={r:0,b:0,g:0},as=new or,c1=new tn;function f1(r,e,n,s,a,l,c){const d=new Ut(0);let h=l===!0?0:1,m,g,_=null,x=0,y=null;function T(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?n:e).get(P)),P}function w(L){let P=!1;const U=T(L);U===null?v(d,h):U&&U.isColor&&(v(U,1),P=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(r.autoClear||P)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(L,P){const U=T(P);U&&(U.isCubeTexture||U.mapping===Ru)?(g===void 0&&(g=new Oi(new Ta(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:go(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,I,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),as.copy(P.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),g.material.uniforms.envMap.value=U,g.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(c1.makeRotationFromEuler(as)),g.material.toneMapped=Tt.getTransfer(U.colorSpace)!==Nt,(_!==U||x!==U.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=U,x=U.version,y=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Oi(new wa(2,2),new yi({name:"BackgroundMaterial",uniforms:go(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(U.colorSpace)!==Nt,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||x!==U.version||y!==r.toneMapping)&&(m.material.needsUpdate=!0,_=U,x=U.version,y=r.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function v(L,P){L.getRGB(tu,J0(r)),s.buffers.color.setClear(tu.r,tu.g,tu.b,P,c)}function D(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,P=1){d.set(L),h=P,v(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,v(d,h)},render:w,addToRenderList:S,dispose:D}}function d1(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=x(null);let l=a,c=!1;function d(R,V,se,Z,fe){let ce=!1;const oe=_(Z,se,V);l!==oe&&(l=oe,m(l.object)),ce=y(R,Z,se,fe),ce&&T(R,Z,se,fe),fe!==null&&e.update(fe,r.ELEMENT_ARRAY_BUFFER),(ce||c)&&(c=!1,P(R,V,se,Z),fe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function h(){return r.createVertexArray()}function m(R){return r.bindVertexArray(R)}function g(R){return r.deleteVertexArray(R)}function _(R,V,se){const Z=se.wireframe===!0;let fe=s[R.id];fe===void 0&&(fe={},s[R.id]=fe);let ce=fe[V.id];ce===void 0&&(ce={},fe[V.id]=ce);let oe=ce[Z];return oe===void 0&&(oe=x(h()),ce[Z]=oe),oe}function x(R){const V=[],se=[],Z=[];for(let fe=0;fe<n;fe++)V[fe]=0,se[fe]=0,Z[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:se,attributeDivisors:Z,object:R,attributes:{},index:null}}function y(R,V,se,Z){const fe=l.attributes,ce=V.attributes;let oe=0;const q=se.getAttributes();for(const X in q)if(q[X].location>=0){const te=fe[X];let O=ce[X];if(O===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(O=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(O=R.instanceColor)),te===void 0||te.attribute!==O||O&&te.data!==O.data)return!0;oe++}return l.attributesNum!==oe||l.index!==Z}function T(R,V,se,Z){const fe={},ce=V.attributes;let oe=0;const q=se.getAttributes();for(const X in q)if(q[X].location>=0){let te=ce[X];te===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(te=R.instanceColor));const O={};O.attribute=te,te&&te.data&&(O.data=te.data),fe[X]=O,oe++}l.attributes=fe,l.attributesNum=oe,l.index=Z}function w(){const R=l.newAttributes;for(let V=0,se=R.length;V<se;V++)R[V]=0}function S(R){v(R,0)}function v(R,V){const se=l.newAttributes,Z=l.enabledAttributes,fe=l.attributeDivisors;se[R]=1,Z[R]===0&&(r.enableVertexAttribArray(R),Z[R]=1),fe[R]!==V&&(r.vertexAttribDivisor(R,V),fe[R]=V)}function D(){const R=l.newAttributes,V=l.enabledAttributes;for(let se=0,Z=V.length;se<Z;se++)V[se]!==R[se]&&(r.disableVertexAttribArray(se),V[se]=0)}function L(R,V,se,Z,fe,ce,oe){oe===!0?r.vertexAttribIPointer(R,V,se,fe,ce):r.vertexAttribPointer(R,V,se,Z,fe,ce)}function P(R,V,se,Z){w();const fe=Z.attributes,ce=se.getAttributes(),oe=V.defaultAttributeValues;for(const q in ce){const X=ce[q];if(X.location>=0){let le=fe[q];if(le===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),le!==void 0){const te=le.normalized,O=le.itemSize,J=e.get(le);if(J===void 0)continue;const we=J.buffer,ze=J.type,We=J.bytesPerElement,Q=ze===r.INT||ze===r.UNSIGNED_INT||le.gpuType===lh;if(le.isInterleavedBufferAttribute){const ue=le.data,_e=ue.stride,Ne=le.offset;if(ue.isInstancedInterleavedBuffer){for(let Pe=0;Pe<X.locationSize;Pe++)v(X.location+Pe,ue.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Pe=0;Pe<X.locationSize;Pe++)S(X.location+Pe);r.bindBuffer(r.ARRAY_BUFFER,we);for(let Pe=0;Pe<X.locationSize;Pe++)L(X.location+Pe,O/X.locationSize,ze,te,_e*We,(Ne+O/X.locationSize*Pe)*We,Q)}else{if(le.isInstancedBufferAttribute){for(let ue=0;ue<X.locationSize;ue++)v(X.location+ue,le.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ue=0;ue<X.locationSize;ue++)S(X.location+ue);r.bindBuffer(r.ARRAY_BUFFER,we);for(let ue=0;ue<X.locationSize;ue++)L(X.location+ue,O/X.locationSize,ze,te,O*We,O/X.locationSize*ue*We,Q)}}else if(oe!==void 0){const te=oe[q];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(X.location,te);break;case 3:r.vertexAttrib3fv(X.location,te);break;case 4:r.vertexAttrib4fv(X.location,te);break;default:r.vertexAttrib1fv(X.location,te)}}}}D()}function U(){j();for(const R in s){const V=s[R];for(const se in V){const Z=V[se];for(const fe in Z)g(Z[fe].object),delete Z[fe];delete V[se]}delete s[R]}}function F(R){if(s[R.id]===void 0)return;const V=s[R.id];for(const se in V){const Z=V[se];for(const fe in Z)g(Z[fe].object),delete Z[fe];delete V[se]}delete s[R.id]}function I(R){for(const V in s){const se=s[V];if(se[R.id]===void 0)continue;const Z=se[R.id];for(const fe in Z)g(Z[fe].object),delete Z[fe];delete se[R.id]}}function j(){C(),c=!0,l!==a&&(l=a,m(l.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:j,resetDefaultState:C,dispose:U,releaseStatesOfGeometry:F,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:S,disableUnusedAttributes:D}}function h1(r,e,n){let s;function a(m){s=m}function l(m,g){r.drawArrays(s,m,g),n.update(g,s,1)}function c(m,g,_){_!==0&&(r.drawArraysInstanced(s,m,g,_),n.update(g,s,_))}function d(m,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,_);let y=0;for(let T=0;T<_;T++)y+=g[T];n.update(y,s,1)}function h(m,g,_,x){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<m.length;T++)c(m[T],g[T],x[T]);else{y.multiDrawArraysInstancedWEBGL(s,m,0,g,0,x,0,_);let T=0;for(let w=0;w<_;w++)T+=g[w]*x[w];n.update(T,s,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function p1(r,e,n,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(I){return!(I!==xi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const j=I===rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==si&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Di&&!j)}function h(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=h(m);g!==m&&(st("WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),U=r.getParameter(r.MAX_SAMPLES),F=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:P,maxSamples:U,samples:F}}function m1(r){const e=this;let n=null,s=0,a=!1,l=!1;const c=new us,d=new ut,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||s!==0||a;return a=x,s=_.length,y},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,x){n=g(_,x,0)},this.setState=function(_,x,y){const T=_.clippingPlanes,w=_.clipIntersection,S=_.clipShadows,v=r.get(_);if(!a||T===null||T.length===0||l&&!S)l?g(null):m();else{const D=l?0:s,L=D*4;let P=v.clippingState||null;h.value=P,P=g(T,x,L,y);for(let U=0;U!==L;++U)P[U]=n[U];v.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(_,x,y,T){const w=_!==null?_.length:0;let S=null;if(w!==0){if(S=h.value,T!==!0||S===null){const v=y+w*4,D=x.matrixWorldInverse;d.getNormalMatrix(D),(S===null||S.length<v)&&(S=new Float32Array(v));for(let L=0,P=y;L!==w;++L,P+=4)c.copy(_[L]).applyMatrix4(D,d),c.normal.toArray(S,P),S[P+3]=c.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}function g1(r){let e=new WeakMap;function n(c,d){return d===md?c.mapping=_s:d===gd&&(c.mapping=ho),c}function s(c){if(c&&c.isTexture){const d=c.mapping;if(d===md||d===gd)if(e.has(c)){const h=e.get(c).texture;return n(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const m=new n_(h.height);return m.fromEquirectangularTexture(r,c),e.set(c,m),c.addEventListener("dispose",a),n(m.texture,c.mapping)}else return null}}return c}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const Or=4,Ug=[.125,.215,.35,.446,.526,.582],fs=20,_1=256,la=new vh,Fg=new Ut;let Yf=null,jf=0,$f=0,Kf=!1;const v1=new re;class Og{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,s=.1,a=100,l={}){const{size:c=256,position:d=v1}=l;Yf=this._renderer.getRenderTarget(),jf=this._renderer.getActiveCubeFace(),$f=this._renderer.getActiveMipmapLevel(),Kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,s,a,h,d),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yf,jf,$f),this._renderer.xr.enabled=Kf,e.scissorTest=!1,no(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===_s||e.mapping===ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yf=this._renderer.getRenderTarget(),jf=this._renderer.getActiveCubeFace(),$f=this._renderer.getActiveMipmapLevel(),Kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:rr,format:xi,colorSpace:mo,depthBuffer:!1},a=Bg(e,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bg(e,n,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=x1(l)),this._blurMaterial=y1(l,e,n),this._ggxMaterial=S1(l,e,n)}return a}_compileMaterial(e){const n=new Oi(new ar,e);this._renderer.compile(n,la)}_sceneToCubeUV(e,n,s,a,l){const h=new _i(90,1,n,s),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(Fg),_.toneMapping=Ii,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oi(new Ta,new K0({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,S=w.material;let v=!1;const D=e.background;D?D.isColor&&(S.color.copy(D),e.background=null,v=!0):(S.color.copy(Fg),v=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(h.up.set(0,m[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+g[L],l.y,l.z)):P===1?(h.up.set(0,0,m[L]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+g[L],l.z)):(h.up.set(0,m[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+g[L]));const U=this._cubeSize;no(a,P*U,L>2?U:0,U,U),_.setRenderTarget(a),v&&_.render(w,h),_.render(e,h)}_.toneMapping=y,_.autoClear=x,e.background=D}_textureToCubeUV(e,n){const s=this._renderer,a=e.mapping===_s||e.mapping===ho;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=zg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kg());const l=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;no(n,0,0,3*h,2*h),s.setRenderTarget(n),s.render(c,la)}_applyPMREM(e){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=s}_applyGGXFilter(e,n,s){const a=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[s];d.material=c;const h=c.uniforms,m=s/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(m*m-g*g),x=0+m*1.25,y=_*x,{_lodMax:T}=this,w=this._sizeLods[s],S=3*w*(s>T-Or?s-T+Or:0),v=4*(this._cubeSize-w);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=T-n,no(l,S,v,3*w,2*w),a.setRenderTarget(l),a.render(d,la),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=T-s,no(e,S,v,3*w,2*w),a.setRenderTarget(e),a.render(d,la)}_blur(e,n,s,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,s,a,"latitudinal",l),this._halfBlur(c,e,s,s,a,"longitudinal",l)}_halfBlur(e,n,s,a,l,c,d){const h=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[a];_.material=m;const x=m.uniforms,y=this._sizeLods[s]-1,T=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*fs-1),w=l/T,S=isFinite(l)?1+Math.floor(g*w):fs;S>fs&&st(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${fs}`);const v=[];let D=0;for(let I=0;I<fs;++I){const j=I/w,C=Math.exp(-j*j/2);v.push(C),I===0?D+=C:I<S&&(D+=2*C)}for(let I=0;I<v.length;I++)v[I]=v[I]/D;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=c==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-s;const P=this._sizeLods[a],U=3*P*(a>L-Or?a-L+Or:0),F=4*(this._cubeSize-P);no(n,U,F,3*P,2*P),h.setRenderTarget(n),h.render(_,la)}}function x1(r){const e=[],n=[],s=[];let a=r;const l=r-Or+1+Ug.length;for(let c=0;c<l;c++){const d=Math.pow(2,a);e.push(d);let h=1/d;c>r-Or?h=Ug[c-r+Or-1]:c===0&&(h=0),n.push(h);const m=1/(d-2),g=-m,_=1+m,x=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,T=6,w=3,S=2,v=1,D=new Float32Array(w*T*y),L=new Float32Array(S*T*y),P=new Float32Array(v*T*y);for(let F=0;F<y;F++){const I=F%3*2/3-1,j=F>2?0:-1,C=[I,j,0,I+2/3,j,0,I+2/3,j+1,0,I,j,0,I+2/3,j+1,0,I,j+1,0];D.set(C,w*T*F),L.set(x,S*T*F);const R=[F,F,F,F,F,F];P.set(R,v*T*F)}const U=new ar;U.setAttribute("position",new Ui(D,w)),U.setAttribute("uv",new Ui(L,S)),U.setAttribute("faceIndex",new Ui(P,v)),s.push(new Oi(U,null)),a>Or&&a--}return{lodMeshes:s,sizeLods:e,sigmas:n}}function Bg(r,e,n){const s=new Ni(r,e,n);return s.texture.mapping=Ru,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function no(r,e,n,s,a){r.viewport.set(e,n,s,a),r.scissor.set(e,n,s,a)}function S1(r,e,n){return new yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function y1(r,e,n){const s=new Float32Array(fs),a=new re(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function kg(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function zg(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Pu(){return`

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
	`}function M1(r){let e=new WeakMap,n=null;function s(d){if(d&&d.isTexture){const h=d.mapping,m=h===md||h===gd,g=h===_s||h===ho;if(m||g){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Og(r)),_=m?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return m&&y&&y.height>0||g&&y&&a(y)?(n===null&&(n=new Og(r)),_=m?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",l),_.texture):null}}}return d}function a(d){let h=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&h++;return h===m}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:c}}function E1(r){const e={};function n(s){if(e[s]!==void 0)return e[s];const a=r.getExtension(s);return e[s]=a,a}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const a=n(s);return a===null&&va("WebGLRenderer: "+s+" extension not supported."),a}}}function T1(r,e,n,s){const a={},l=new WeakMap;function c(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",c),delete a[x.id];const y=l.get(x);y&&(e.remove(y),l.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(_,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,n.memory.geometries++),x}function h(_){const x=_.attributes;for(const y in x)e.update(x[y],r.ARRAY_BUFFER)}function m(_){const x=[],y=_.index,T=_.attributes.position;let w=0;if(y!==null){const D=y.array;w=y.version;for(let L=0,P=D.length;L<P;L+=3){const U=D[L+0],F=D[L+1],I=D[L+2];x.push(U,F,F,I,I,U)}}else if(T!==void 0){const D=T.array;w=T.version;for(let L=0,P=D.length/3-1;L<P;L+=3){const U=L+0,F=L+1,I=L+2;x.push(U,F,F,I,I,U)}}else return;const S=new(q0(x)?Q0:Z0)(x,1);S.version=w;const v=l.get(_);v&&e.remove(v),l.set(_,S)}function g(_){const x=l.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&m(_)}else m(_);return l.get(_)}return{get:d,update:h,getWireframeAttribute:g}}function w1(r,e,n){let s;function a(x){s=x}let l,c;function d(x){l=x.type,c=x.bytesPerElement}function h(x,y){r.drawElements(s,y,l,x*c),n.update(y,s,1)}function m(x,y,T){T!==0&&(r.drawElementsInstanced(s,y,l,x*c,T),n.update(y,s,T))}function g(x,y,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,l,x,0,T);let S=0;for(let v=0;v<T;v++)S+=y[v];n.update(S,s,1)}function _(x,y,T,w){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)m(x[v]/c,y[v],w[v]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,l,x,0,w,0,T);let v=0;for(let D=0;D<T;D++)v+=y[D]*w[D];n.update(v,s,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function A1(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,d){switch(n.calls++,c){case r.TRIANGLES:n.triangles+=d*(l/3);break;case r.LINES:n.lines+=d*(l/2);break;case r.LINE_STRIP:n.lines+=d*(l-1);break;case r.LINE_LOOP:n.lines+=d*l;break;case r.POINTS:n.points+=d*l;break;default:Ct("WebGLInfo: Unknown draw mode:",c);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:s}}function C1(r,e,n){const s=new WeakMap,a=new Zt;function l(c,d,h){const m=c.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==_){let R=function(){j.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var y=R;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let P=0;T===!0&&(P=1),w===!0&&(P=2),S===!0&&(P=3);let U=d.attributes.position.count*P,F=1;U>e.maxTextureSize&&(F=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const I=new Float32Array(U*F*4*_),j=new Y0(I,U,F,_);j.type=Di,j.needsUpdate=!0;const C=P*4;for(let V=0;V<_;V++){const se=v[V],Z=D[V],fe=L[V],ce=U*F*4*V;for(let oe=0;oe<se.count;oe++){const q=oe*C;T===!0&&(a.fromBufferAttribute(se,oe),I[ce+q+0]=a.x,I[ce+q+1]=a.y,I[ce+q+2]=a.z,I[ce+q+3]=0),w===!0&&(a.fromBufferAttribute(Z,oe),I[ce+q+4]=a.x,I[ce+q+5]=a.y,I[ce+q+6]=a.z,I[ce+q+7]=0),S===!0&&(a.fromBufferAttribute(fe,oe),I[ce+q+8]=a.x,I[ce+q+9]=a.y,I[ce+q+10]=a.z,I[ce+q+11]=fe.itemSize===4?a.w:1)}}x={count:_,texture:j,size:new Ft(U,F)},s.set(d,x),d.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,n);else{let T=0;for(let S=0;S<m.length;S++)T+=m[S];const w=d.morphTargetsRelative?1:1-T;h.getUniforms().setValue(r,"morphTargetBaseInfluence",w),h.getUniforms().setValue(r,"morphTargetInfluences",m)}h.getUniforms().setValue(r,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:l}}function R1(r,e,n,s){let a=new WeakMap;function l(h){const m=s.render.frame,g=h.geometry,_=e.get(h,g);if(a.get(_)!==m&&(e.update(_),a.set(_,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==m&&(n.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return _}function c(){a=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:l,dispose:c}}const b1={[D0]:"LINEAR_TONE_MAPPING",[L0]:"REINHARD_TONE_MAPPING",[I0]:"CINEON_TONE_MAPPING",[N0]:"ACES_FILMIC_TONE_MAPPING",[F0]:"AGX_TONE_MAPPING",[O0]:"NEUTRAL_TONE_MAPPING",[U0]:"CUSTOM_TONE_MAPPING"};function P1(r,e,n,s,a){const l=new Ni(e,n,{type:r,depthBuffer:s,stencilBuffer:a}),c=new Ni(e,n,{type:rr,depthBuffer:!1,stencilBuffer:!1}),d=new ar;d.setAttribute("position",new ir([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ir([0,2,0,0,2,0],2));const h=new Ty({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Oi(d,h),g=new vh(-1,1,1,-1,0,1);let _=null,x=null,y=!1,T,w=null,S=[],v=!1;this.setSize=function(D,L){l.setSize(D,L),c.setSize(D,L);for(let P=0;P<S.length;P++){const U=S[P];U.setSize&&U.setSize(D,L)}},this.setEffects=function(D){S=D,v=S.length>0&&S[0].isRenderPass===!0;const L=l.width,P=l.height;for(let U=0;U<S.length;U++){const F=S[U];F.setSize&&F.setSize(L,P)}},this.begin=function(D,L){if(y||D.toneMapping===Ii&&S.length===0)return!1;if(w=L,L!==null){const P=L.width,U=L.height;(l.width!==P||l.height!==U)&&this.setSize(P,U)}return v===!1&&D.setRenderTarget(l),T=D.toneMapping,D.toneMapping=Ii,!0},this.hasRenderPass=function(){return v},this.end=function(D,L){D.toneMapping=T,y=!0;let P=l,U=c;for(let F=0;F<S.length;F++){const I=S[F];if(I.enabled!==!1&&(I.render(D,U,P,L),I.needsSwap!==!1)){const j=P;P=U,U=j}}if(_!==D.outputColorSpace||x!==D.toneMapping){_=D.outputColorSpace,x=D.toneMapping,h.defines={},Tt.getTransfer(_)===Nt&&(h.defines.SRGB_TRANSFER="");const F=b1[x];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=P.texture,D.setRenderTarget(w),D.render(m,g),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){l.dispose(),c.dispose(),d.dispose(),h.dispose()}}const o_=new Dn,Jd=new xa(1,1),a_=new Y0,l_=new JS,u_=new t_,Vg=[],Hg=[],Gg=new Float32Array(16),Wg=new Float32Array(9),Xg=new Float32Array(4);function xo(r,e,n){const s=r[0];if(s<=0||s>0)return r;const a=e*n;let l=Vg[a];if(l===void 0&&(l=new Float32Array(a),Vg[a]=l),e!==0){s.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=n,r[c].toArray(l,d)}return l}function on(r,e){if(r.length!==e.length)return!1;for(let n=0,s=r.length;n<s;n++)if(r[n]!==e[n])return!1;return!0}function an(r,e){for(let n=0,s=e.length;n<s;n++)r[n]=e[n]}function Du(r,e){let n=Hg[e];n===void 0&&(n=new Int32Array(e),Hg[e]=n);for(let s=0;s!==e;++s)n[s]=r.allocateTextureUnit();return n}function D1(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function L1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;r.uniform2fv(this.addr,e),an(n,e)}}function I1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(on(n,e))return;r.uniform3fv(this.addr,e),an(n,e)}}function N1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;r.uniform4fv(this.addr,e),an(n,e)}}function U1(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(on(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),an(n,e)}else{if(on(n,s))return;Xg.set(s),r.uniformMatrix2fv(this.addr,!1,Xg),an(n,s)}}function F1(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(on(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),an(n,e)}else{if(on(n,s))return;Wg.set(s),r.uniformMatrix3fv(this.addr,!1,Wg),an(n,s)}}function O1(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(on(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),an(n,e)}else{if(on(n,s))return;Gg.set(s),r.uniformMatrix4fv(this.addr,!1,Gg),an(n,s)}}function B1(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function k1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;r.uniform2iv(this.addr,e),an(n,e)}}function z1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(on(n,e))return;r.uniform3iv(this.addr,e),an(n,e)}}function V1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;r.uniform4iv(this.addr,e),an(n,e)}}function H1(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function G1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;r.uniform2uiv(this.addr,e),an(n,e)}}function W1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(on(n,e))return;r.uniform3uiv(this.addr,e),an(n,e)}}function X1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;r.uniform4uiv(this.addr,e),an(n,e)}}function q1(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(Jd.compareFunction=n.isReversedDepthBuffer()?mh:ph,l=Jd):l=o_,n.setTexture2D(e||l,a)}function Y1(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),n.setTexture3D(e||l_,a)}function j1(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),n.setTextureCube(e||u_,a)}function $1(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),n.setTexture2DArray(e||a_,a)}function K1(r){switch(r){case 5126:return D1;case 35664:return L1;case 35665:return I1;case 35666:return N1;case 35674:return U1;case 35675:return F1;case 35676:return O1;case 5124:case 35670:return B1;case 35667:case 35671:return k1;case 35668:case 35672:return z1;case 35669:case 35673:return V1;case 5125:return H1;case 36294:return G1;case 36295:return W1;case 36296:return X1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return $1}}function Z1(r,e){r.uniform1fv(this.addr,e)}function Q1(r,e){const n=xo(e,this.size,2);r.uniform2fv(this.addr,n)}function J1(r,e){const n=xo(e,this.size,3);r.uniform3fv(this.addr,n)}function eT(r,e){const n=xo(e,this.size,4);r.uniform4fv(this.addr,n)}function tT(r,e){const n=xo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function nT(r,e){const n=xo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function iT(r,e){const n=xo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function rT(r,e){r.uniform1iv(this.addr,e)}function sT(r,e){r.uniform2iv(this.addr,e)}function oT(r,e){r.uniform3iv(this.addr,e)}function aT(r,e){r.uniform4iv(this.addr,e)}function lT(r,e){r.uniform1uiv(this.addr,e)}function uT(r,e){r.uniform2uiv(this.addr,e)}function cT(r,e){r.uniform3uiv(this.addr,e)}function fT(r,e){r.uniform4uiv(this.addr,e)}function dT(r,e,n){const s=this.cache,a=e.length,l=Du(n,a);on(s,l)||(r.uniform1iv(this.addr,l),an(s,l));let c;this.type===r.SAMPLER_2D_SHADOW?c=Jd:c=o_;for(let d=0;d!==a;++d)n.setTexture2D(e[d]||c,l[d])}function hT(r,e,n){const s=this.cache,a=e.length,l=Du(n,a);on(s,l)||(r.uniform1iv(this.addr,l),an(s,l));for(let c=0;c!==a;++c)n.setTexture3D(e[c]||l_,l[c])}function pT(r,e,n){const s=this.cache,a=e.length,l=Du(n,a);on(s,l)||(r.uniform1iv(this.addr,l),an(s,l));for(let c=0;c!==a;++c)n.setTextureCube(e[c]||u_,l[c])}function mT(r,e,n){const s=this.cache,a=e.length,l=Du(n,a);on(s,l)||(r.uniform1iv(this.addr,l),an(s,l));for(let c=0;c!==a;++c)n.setTexture2DArray(e[c]||a_,l[c])}function gT(r){switch(r){case 5126:return Z1;case 35664:return Q1;case 35665:return J1;case 35666:return eT;case 35674:return tT;case 35675:return nT;case 35676:return iT;case 5124:case 35670:return rT;case 35667:case 35671:return sT;case 35668:case 35672:return oT;case 35669:case 35673:return aT;case 5125:return lT;case 36294:return uT;case 36295:return cT;case 36296:return fT;case 35678:case 36198:case 36298:case 36306:case 35682:return dT;case 35679:case 36299:case 36307:return hT;case 35680:case 36300:case 36308:case 36293:return pT;case 36289:case 36303:case 36311:case 36292:return mT}}class _T{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.setValue=K1(n.type)}}class vT{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=gT(n.type)}}class xT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,s){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const d=a[l];d.setValue(e,n[d.id],s)}}}const Zf=/(\w+)(\])?(\[|\.)?/g;function qg(r,e){r.seq.push(e),r.map[e.id]=e}function ST(r,e,n){const s=r.name,a=s.length;for(Zf.lastIndex=0;;){const l=Zf.exec(s),c=Zf.lastIndex;let d=l[1];const h=l[2]==="]",m=l[3];if(h&&(d=d|0),m===void 0||m==="["&&c+2===a){qg(n,m===void 0?new _T(d,r,e):new vT(d,r,e));break}else{let _=n.map[d];_===void 0&&(_=new xT(d),qg(n,_)),n=_}}}class pu{constructor(e,n){this.seq=[],this.map={};const s=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let c=0;c<s;++c){const d=e.getActiveUniform(n,c),h=e.getUniformLocation(n,d.name);ST(d,h,this)}const a=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):l.push(c);a.length>0&&(this.seq=a.concat(l))}setValue(e,n,s,a){const l=this.map[n];l!==void 0&&l.setValue(e,s,a)}setOptional(e,n,s){const a=n[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,n,s,a){for(let l=0,c=n.length;l!==c;++l){const d=n[l],h=s[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,n){const s=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in n&&s.push(c)}return s}}function Yg(r,e,n){const s=r.createShader(e);return r.shaderSource(s,n),r.compileShader(s),s}const yT=37297;let MT=0;function ET(r,e){const n=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let c=a;c<l;c++){const d=c+1;s.push(`${d===e?">":" "} ${d}: ${n[c]}`)}return s.join(`
`)}const jg=new ut;function TT(r){Tt._getMatrix(jg,Tt.workingColorSpace,r);const e=`mat3( ${jg.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(r)){case xu:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function $g(r,e,n){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+ET(r.getShaderSource(e),d)}else return l}function wT(r,e){const n=TT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const AT={[D0]:"Linear",[L0]:"Reinhard",[I0]:"Cineon",[N0]:"ACESFilmic",[F0]:"AgX",[O0]:"Neutral",[U0]:"Custom"};function CT(r,e){const n=AT[e];return n===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const nu=new re;function RT(){Tt.getLuminanceCoefficients(nu);const r=nu.x.toFixed(4),e=nu.y.toFixed(4),n=nu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function PT(r){const e=[];for(const n in r){const s=r[n];s!==!1&&e.push("#define "+n+" "+s)}return e.join(`
`)}function DT(r,e){const n={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),c=l.name;let d=1;l.type===r.FLOAT_MAT2&&(d=2),l.type===r.FLOAT_MAT3&&(d=3),l.type===r.FLOAT_MAT4&&(d=4),n[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:d}}return n}function da(r){return r!==""}function Kg(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LT=/^[ \t]*#include +<([\w\d./]+)>/gm;function eh(r){return r.replace(LT,NT)}const IT=new Map;function NT(r,e){let n=ft[e];if(n===void 0){const s=IT.get(e);if(s!==void 0)n=ft[s],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return eh(n)}const UT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qg(r){return r.replace(UT,FT)}function FT(r,e,n,s){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Jg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const OT={[uu]:"SHADOWMAP_TYPE_PCF",[fa]:"SHADOWMAP_TYPE_VSM"};function BT(r){return OT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const kT={[_s]:"ENVMAP_TYPE_CUBE",[ho]:"ENVMAP_TYPE_CUBE",[Ru]:"ENVMAP_TYPE_CUBE_UV"};function zT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":kT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const VT={[ho]:"ENVMAP_MODE_REFRACTION"};function HT(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":VT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const GT={[P0]:"ENVMAP_BLENDING_MULTIPLY",[IS]:"ENVMAP_BLENDING_MIX",[NS]:"ENVMAP_BLENDING_ADD"};function WT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":GT[r.combine]||"ENVMAP_BLENDING_NONE"}function XT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function qT(r,e,n,s){const a=r.getContext(),l=n.defines;let c=n.vertexShader,d=n.fragmentShader;const h=BT(n),m=zT(n),g=HT(n),_=WT(n),x=XT(n),y=bT(n),T=PT(l),w=a.createProgram();let S,v,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(da).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(da).join(`
`),v.length>0&&(v+=`
`)):(S=[Jg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),v=[Jg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ii?"#define TONE_MAPPING":"",n.toneMapping!==Ii?ft.tonemapping_pars_fragment:"",n.toneMapping!==Ii?CT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,wT("linearToOutputTexel",n.outputColorSpace),RT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(da).join(`
`)),c=eh(c),c=Kg(c,n),c=Zg(c,n),d=eh(d),d=Kg(d,n),d=Zg(d,n),c=Qg(c),d=Qg(d),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",n.glslVersion===Zd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Zd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=D+S+c,P=D+v+d,U=Yg(a,a.VERTEX_SHADER,L),F=Yg(a,a.FRAGMENT_SHADER,P);a.attachShader(w,U),a.attachShader(w,F),n.index0AttributeName!==void 0?a.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function I(V){if(r.debug.checkShaderErrors){const se=a.getProgramInfoLog(w)||"",Z=a.getShaderInfoLog(U)||"",fe=a.getShaderInfoLog(F)||"",ce=se.trim(),oe=Z.trim(),q=fe.trim();let X=!0,le=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,w,U,F);else{const te=$g(a,U,"vertex"),O=$g(a,F,"fragment");Ct("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ce+`
`+te+`
`+O)}else ce!==""?st("WebGLProgram: Program Info Log:",ce):(oe===""||q==="")&&(le=!1);le&&(V.diagnostics={runnable:X,programLog:ce,vertexShader:{log:oe,prefix:S},fragmentShader:{log:q,prefix:v}})}a.deleteShader(U),a.deleteShader(F),j=new pu(a,w),C=DT(a,w)}let j;this.getUniforms=function(){return j===void 0&&I(this),j};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(w,yT)),R},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=MT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=U,this.fragmentShader=F,this}let YT=0;class jT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let s=n.get(e);return s===void 0&&(s=new Set,n.set(e,s)),s}_getShaderStage(e){const n=this.shaderCache;let s=n.get(e);return s===void 0&&(s=new $T(e),n.set(e,s)),s}}class $T{constructor(e){this.id=YT++,this.code=e,this.usedTimes=0}}function KT(r,e,n,s,a,l,c){const d=new j0,h=new jT,m=new Set,g=[],_=new Map,x=a.logarithmicDepthBuffer;let y=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return m.add(C),C===0?"uv":`uv${C}`}function S(C,R,V,se,Z){const fe=se.fog,ce=Z.geometry,oe=C.isMeshStandardMaterial?se.environment:null,q=(C.isMeshStandardMaterial?n:e).get(C.envMap||oe),X=q&&q.mapping===Ru?q.image.height:null,le=T[C.type];C.precision!==null&&(y=a.getMaxPrecision(C.precision),y!==C.precision&&st("WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const te=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,O=te!==void 0?te.length:0;let J=0;ce.morphAttributes.position!==void 0&&(J=1),ce.morphAttributes.normal!==void 0&&(J=2),ce.morphAttributes.color!==void 0&&(J=3);let we,ze,We,Q;if(le){const yt=Pi[le];we=yt.vertexShader,ze=yt.fragmentShader}else we=C.vertexShader,ze=C.fragmentShader,h.update(C),We=h.getVertexShaderID(C),Q=h.getFragmentShaderID(C);const ue=r.getRenderTarget(),_e=r.state.buffers.depth.getReversed(),Ne=Z.isInstancedMesh===!0,Pe=Z.isBatchedMesh===!0,at=!!C.map,bt=!!C.matcap,ht=!!q,xt=!!C.aoMap,Pt=!!C.lightMap,lt=!!C.bumpMap,Gt=!!C.normalMap,k=!!C.displacementMap,Wt=!!C.emissiveMap,gt=!!C.metalnessMap,St=!!C.roughnessMap,Xe=C.anisotropy>0,b=C.clearcoat>0,M=C.dispersion>0,G=C.iridescence>0,de=C.sheen>0,pe=C.transmission>0,ae=Xe&&!!C.anisotropyMap,je=b&&!!C.clearcoatMap,Ee=b&&!!C.clearcoatNormalMap,Be=b&&!!C.clearcoatRoughnessMap,tt=G&&!!C.iridescenceMap,Se=G&&!!C.iridescenceThicknessMap,Re=de&&!!C.sheenColorMap,He=de&&!!C.sheenRoughnessMap,qe=!!C.specularMap,Ae=!!C.specularColorMap,ot=!!C.specularIntensityMap,z=pe&&!!C.transmissionMap,De=pe&&!!C.thicknessMap,ye=!!C.gradientMap,Le=!!C.alphaMap,ve=C.alphaTest>0,he=!!C.alphaHash,Ce=!!C.extensions;let nt=Ii;C.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(nt=r.toneMapping);const It={shaderID:le,shaderType:C.type,shaderName:C.name,vertexShader:we,fragmentShader:ze,defines:C.defines,customVertexShaderID:We,customFragmentShaderID:Q,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Pe,batchingColor:Pe&&Z._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&Z.instanceColor!==null,instancingMorph:Ne&&Z.morphTexture!==null,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:mo,alphaToCoverage:!!C.alphaToCoverage,map:at,matcap:bt,envMap:ht,envMapMode:ht&&q.mapping,envMapCubeUVHeight:X,aoMap:xt,lightMap:Pt,bumpMap:lt,normalMap:Gt,displacementMap:k,emissiveMap:Wt,normalMapObjectSpace:Gt&&C.normalMapType===BS,normalMapTangentSpace:Gt&&C.normalMapType===OS,metalnessMap:gt,roughnessMap:St,anisotropy:Xe,anisotropyMap:ae,clearcoat:b,clearcoatMap:je,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Be,dispersion:M,iridescence:G,iridescenceMap:tt,iridescenceThicknessMap:Se,sheen:de,sheenColorMap:Re,sheenRoughnessMap:He,specularMap:qe,specularColorMap:Ae,specularIntensityMap:ot,transmission:pe,transmissionMap:z,thicknessMap:De,gradientMap:ye,opaque:C.transparent===!1&&C.blending===ro&&C.alphaToCoverage===!1,alphaMap:Le,alphaTest:ve,alphaHash:he,combine:C.combine,mapUv:at&&w(C.map.channel),aoMapUv:xt&&w(C.aoMap.channel),lightMapUv:Pt&&w(C.lightMap.channel),bumpMapUv:lt&&w(C.bumpMap.channel),normalMapUv:Gt&&w(C.normalMap.channel),displacementMapUv:k&&w(C.displacementMap.channel),emissiveMapUv:Wt&&w(C.emissiveMap.channel),metalnessMapUv:gt&&w(C.metalnessMap.channel),roughnessMapUv:St&&w(C.roughnessMap.channel),anisotropyMapUv:ae&&w(C.anisotropyMap.channel),clearcoatMapUv:je&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:He&&w(C.sheenRoughnessMap.channel),specularMapUv:qe&&w(C.specularMap.channel),specularColorMapUv:Ae&&w(C.specularColorMap.channel),specularIntensityMapUv:ot&&w(C.specularIntensityMap.channel),transmissionMapUv:z&&w(C.transmissionMap.channel),thicknessMapUv:De&&w(C.thicknessMap.channel),alphaMapUv:Le&&w(C.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(Gt||Xe),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ce.attributes.uv&&(at||Le),fog:!!fe,useFog:C.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:_e,skinning:Z.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:J,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:nt,decodeVideoTexture:at&&C.map.isVideoTexture===!0&&Tt.getTransfer(C.map.colorSpace)===Nt,decodeVideoTextureEmissive:Wt&&C.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(C.emissiveMap.colorSpace)===Nt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Qi,flipSided:C.side===zn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ce&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&C.extensions.multiDraw===!0||Pe)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return It.vertexUv1s=m.has(1),It.vertexUv2s=m.has(2),It.vertexUv3s=m.has(3),m.clear(),It}function v(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const V in C.defines)R.push(V),R.push(C.defines[V]);return C.isRawShaderMaterial===!1&&(D(R,C),L(R,C),R.push(r.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function D(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function L(C,R){d.disableAll(),R.instancing&&d.enable(0),R.instancingColor&&d.enable(1),R.instancingMorph&&d.enable(2),R.matcap&&d.enable(3),R.envMap&&d.enable(4),R.normalMapObjectSpace&&d.enable(5),R.normalMapTangentSpace&&d.enable(6),R.clearcoat&&d.enable(7),R.iridescence&&d.enable(8),R.alphaTest&&d.enable(9),R.vertexColors&&d.enable(10),R.vertexAlphas&&d.enable(11),R.vertexUv1s&&d.enable(12),R.vertexUv2s&&d.enable(13),R.vertexUv3s&&d.enable(14),R.vertexTangents&&d.enable(15),R.anisotropy&&d.enable(16),R.alphaHash&&d.enable(17),R.batching&&d.enable(18),R.dispersion&&d.enable(19),R.batchingColor&&d.enable(20),R.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),C.push(d.mask)}function P(C){const R=T[C.type];let V;if(R){const se=Pi[R];V=hy.clone(se.uniforms)}else V=C.uniforms;return V}function U(C,R){let V=_.get(R);return V!==void 0?++V.usedTimes:(V=new qT(r,R,C,l),g.push(V),_.set(R,V)),V}function F(C){if(--C.usedTimes===0){const R=g.indexOf(C);g[R]=g[g.length-1],g.pop(),_.delete(C.cacheKey),C.destroy()}}function I(C){h.remove(C)}function j(){h.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:P,acquireProgram:U,releaseProgram:F,releaseShaderCache:I,programs:g,dispose:j}}function ZT(){let r=new WeakMap;function e(c){return r.has(c)}function n(c){let d=r.get(c);return d===void 0&&(d={},r.set(c,d)),d}function s(c){r.delete(c)}function a(c,d,h){r.get(c)[d]=h}function l(){r=new WeakMap}return{has:e,get:n,remove:s,update:a,dispose:l}}function QT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function e0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function t0(){const r=[];let e=0;const n=[],s=[],a=[];function l(){e=0,n.length=0,s.length=0,a.length=0}function c(_,x,y,T,w,S){let v=r[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:y,groupOrder:T,renderOrder:_.renderOrder,z:w,group:S},r[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=y,v.groupOrder=T,v.renderOrder=_.renderOrder,v.z=w,v.group=S),e++,v}function d(_,x,y,T,w,S){const v=c(_,x,y,T,w,S);y.transmission>0?s.push(v):y.transparent===!0?a.push(v):n.push(v)}function h(_,x,y,T,w,S){const v=c(_,x,y,T,w,S);y.transmission>0?s.unshift(v):y.transparent===!0?a.unshift(v):n.unshift(v)}function m(_,x){n.length>1&&n.sort(_||QT),s.length>1&&s.sort(x||e0),a.length>1&&a.sort(x||e0)}function g(){for(let _=e,x=r.length;_<x;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:s,transparent:a,init:l,push:d,unshift:h,finish:g,sort:m}}function JT(){let r=new WeakMap;function e(s,a){const l=r.get(s);let c;return l===void 0?(c=new t0,r.set(s,[c])):a>=l.length?(c=new t0,l.push(c)):c=l[a],c}function n(){r=new WeakMap}return{get:e,dispose:n}}function ew(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new re,color:new Ut};break;case"SpotLight":n={position:new re,direction:new re,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new re,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":n={direction:new re,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":n={color:new Ut,position:new re,halfWidth:new re,halfHeight:new re};break}return r[e.id]=n,n}}}function tw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let nw=0;function iw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function rw(r){const e=new ew,n=tw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new re);const a=new re,l=new tn,c=new tn;function d(m){let g=0,_=0,x=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let y=0,T=0,w=0,S=0,v=0,D=0,L=0,P=0,U=0,F=0,I=0;m.sort(iw);for(let C=0,R=m.length;C<R;C++){const V=m[C],se=V.color,Z=V.intensity,fe=V.distance;let ce=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===po?ce=V.shadow.map.texture:ce=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=se.r*Z,_+=se.g*Z,x+=se.b*Z;else if(V.isLightProbe){for(let oe=0;oe<9;oe++)s.probe[oe].addScaledVector(V.sh.coefficients[oe],Z);I++}else if(V.isDirectionalLight){const oe=e.get(V);if(oe.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const q=V.shadow,X=n.get(V);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,s.directionalShadow[y]=X,s.directionalShadowMap[y]=ce,s.directionalShadowMatrix[y]=V.shadow.matrix,D++}s.directional[y]=oe,y++}else if(V.isSpotLight){const oe=e.get(V);oe.position.setFromMatrixPosition(V.matrixWorld),oe.color.copy(se).multiplyScalar(Z),oe.distance=fe,oe.coneCos=Math.cos(V.angle),oe.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),oe.decay=V.decay,s.spot[w]=oe;const q=V.shadow;if(V.map&&(s.spotLightMap[U]=V.map,U++,q.updateMatrices(V),V.castShadow&&F++),s.spotLightMatrix[w]=q.matrix,V.castShadow){const X=n.get(V);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,s.spotShadow[w]=X,s.spotShadowMap[w]=ce,P++}w++}else if(V.isRectAreaLight){const oe=e.get(V);oe.color.copy(se).multiplyScalar(Z),oe.halfWidth.set(V.width*.5,0,0),oe.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=oe,S++}else if(V.isPointLight){const oe=e.get(V);if(oe.color.copy(V.color).multiplyScalar(V.intensity),oe.distance=V.distance,oe.decay=V.decay,V.castShadow){const q=V.shadow,X=n.get(V);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,s.pointShadow[T]=X,s.pointShadowMap[T]=ce,s.pointShadowMatrix[T]=V.shadow.matrix,L++}s.point[T]=oe,T++}else if(V.isHemisphereLight){const oe=e.get(V);oe.skyColor.copy(V.color).multiplyScalar(Z),oe.groundColor.copy(V.groundColor).multiplyScalar(Z),s.hemi[v]=oe,v++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const j=s.hash;(j.directionalLength!==y||j.pointLength!==T||j.spotLength!==w||j.rectAreaLength!==S||j.hemiLength!==v||j.numDirectionalShadows!==D||j.numPointShadows!==L||j.numSpotShadows!==P||j.numSpotMaps!==U||j.numLightProbes!==I)&&(s.directional.length=y,s.spot.length=w,s.rectArea.length=S,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=P+U-F,s.spotLightMap.length=U,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=I,j.directionalLength=y,j.pointLength=T,j.spotLength=w,j.rectAreaLength=S,j.hemiLength=v,j.numDirectionalShadows=D,j.numPointShadows=L,j.numSpotShadows=P,j.numSpotMaps=U,j.numLightProbes=I,s.version=nw++)}function h(m,g){let _=0,x=0,y=0,T=0,w=0;const S=g.matrixWorldInverse;for(let v=0,D=m.length;v<D;v++){const L=m[v];if(L.isDirectionalLight){const P=s.directional[_];P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(S),_++}else if(L.isSpotLight){const P=s.spot[y];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(S),y++}else if(L.isRectAreaLight){const P=s.rectArea[T];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),c.identity(),l.copy(L.matrixWorld),l.premultiply(S),c.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),T++}else if(L.isPointLight){const P=s.point[x];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const P=s.hemi[w];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(S),w++}}}return{setup:d,setupView:h,state:s}}function n0(r){const e=new rw(r),n=[],s=[];function a(g){m.camera=g,n.length=0,s.length=0}function l(g){n.push(g)}function c(g){s.push(g)}function d(){e.setup(n)}function h(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:c}}function sw(r){let e=new WeakMap;function n(a,l=0){const c=e.get(a);let d;return c===void 0?(d=new n0(r),e.set(a,[d])):l>=c.length?(d=new n0(r),c.push(d)):d=c[l],d}function s(){e=new WeakMap}return{get:n,dispose:s}}const ow=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aw=`uniform sampler2D shadow_pass;
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
}`,lw=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],uw=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],i0=new tn,ua=new re,Qf=new re;function cw(r,e,n){let s=new i_;const a=new Ft,l=new Ft,c=new Zt,d=new wy,h=new Ay,m={},g=n.maxTextureSize,_={[kr]:zn,[zn]:kr,[Qi]:Qi},x=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:ow,fragmentShader:aw}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const T=new ar;T.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Oi(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uu;let v=this.type;this.render=function(F,I,j){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;F.type===pS&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=uu);const C=r.getRenderTarget(),R=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),se=r.state;se.setBlending(tr),se.buffers.depth.getReversed()===!0?se.buffers.color.setClear(0,0,0,0):se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const Z=v!==this.type;Z&&I.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(ce=>ce.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,ce=F.length;fe<ce;fe++){const oe=F[fe],q=oe.shadow;if(q===void 0){st("WebGLShadowMap:",oe,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;a.copy(q.mapSize);const X=q.getFrameExtents();if(a.multiply(X),l.copy(q.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/X.x),a.x=l.x*X.x,q.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/X.y),a.y=l.y*X.y,q.mapSize.y=l.y)),q.map===null||Z===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===fa){if(oe.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Ni(a.x,a.y,{format:po,type:rr,minFilter:wn,magFilter:wn,generateMipmaps:!1}),q.map.texture.name=oe.name+".shadowMap",q.map.depthTexture=new xa(a.x,a.y,Di),q.map.depthTexture.name=oe.name+".shadowMapDepth",q.map.depthTexture.format=sr,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=_n,q.map.depthTexture.magFilter=_n}else{oe.isPointLight?(q.map=new n_(a.x),q.map.depthTexture=new Ey(a.x,Fi)):(q.map=new Ni(a.x,a.y),q.map.depthTexture=new xa(a.x,a.y,Fi)),q.map.depthTexture.name=oe.name+".shadowMap",q.map.depthTexture.format=sr;const te=r.state.buffers.depth.getReversed();this.type===uu?(q.map.depthTexture.compareFunction=te?mh:ph,q.map.depthTexture.minFilter=wn,q.map.depthTexture.magFilter=wn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=_n,q.map.depthTexture.magFilter=_n)}q.camera.updateProjectionMatrix()}const le=q.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<le;te++){if(q.map.isWebGLCubeRenderTarget)r.setRenderTarget(q.map,te),r.clear();else{te===0&&(r.setRenderTarget(q.map),r.clear());const O=q.getViewport(te);c.set(l.x*O.x,l.y*O.y,l.x*O.z,l.y*O.w),se.viewport(c)}if(oe.isPointLight){const O=q.camera,J=q.matrix,we=oe.distance||O.far;we!==O.far&&(O.far=we,O.updateProjectionMatrix()),ua.setFromMatrixPosition(oe.matrixWorld),O.position.copy(ua),Qf.copy(O.position),Qf.add(lw[te]),O.up.copy(uw[te]),O.lookAt(Qf),O.updateMatrixWorld(),J.makeTranslation(-ua.x,-ua.y,-ua.z),i0.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q._frustum.setFromProjectionMatrix(i0,O.coordinateSystem,O.reversedDepth)}else q.updateMatrices(oe);s=q.getFrustum(),P(I,j,q.camera,oe,this.type)}q.isPointLightShadow!==!0&&this.type===fa&&D(q,j),q.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(C,R,V)};function D(F,I){const j=e.update(w);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ni(a.x,a.y,{format:po,type:rr})),x.uniforms.shadow_pass.value=F.map.depthTexture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(I,null,j,x,w,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(I,null,j,y,w,null)}function L(F,I,j,C){let R=null;const V=j.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)R=V;else if(R=j.isPointLight===!0?h:d,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const se=R.uuid,Z=I.uuid;let fe=m[se];fe===void 0&&(fe={},m[se]=fe);let ce=fe[Z];ce===void 0&&(ce=R.clone(),fe[Z]=ce,I.addEventListener("dispose",U)),R=ce}if(R.visible=I.visible,R.wireframe=I.wireframe,C===fa?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:_[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const se=r.properties.get(R);se.light=j}return R}function P(F,I,j,C,R){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===fa)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,F.matrixWorld);const Z=e.update(F),fe=F.material;if(Array.isArray(fe)){const ce=Z.groups;for(let oe=0,q=ce.length;oe<q;oe++){const X=ce[oe],le=fe[X.materialIndex];if(le&&le.visible){const te=L(F,le,C,R);F.onBeforeShadow(r,F,I,j,Z,te,X),r.renderBufferDirect(j,null,Z,te,F,X),F.onAfterShadow(r,F,I,j,Z,te,X)}}}else if(fe.visible){const ce=L(F,fe,C,R);F.onBeforeShadow(r,F,I,j,Z,ce,null),r.renderBufferDirect(j,null,Z,ce,F,null),F.onAfterShadow(r,F,I,j,Z,ce,null)}}const se=F.children;for(let Z=0,fe=se.length;Z<fe;Z++)P(se[Z],I,j,C,R)}function U(F){F.target.removeEventListener("dispose",U);for(const j in m){const C=m[j],R=F.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const fw={[ld]:ud,[cd]:hd,[fd]:pd,[fo]:dd,[ud]:ld,[hd]:cd,[pd]:fd,[dd]:fo};function dw(r,e){function n(){let z=!1;const De=new Zt;let ye=null;const Le=new Zt(0,0,0,0);return{setMask:function(ve){ye!==ve&&!z&&(r.colorMask(ve,ve,ve,ve),ye=ve)},setLocked:function(ve){z=ve},setClear:function(ve,he,Ce,nt,It){It===!0&&(ve*=nt,he*=nt,Ce*=nt),De.set(ve,he,Ce,nt),Le.equals(De)===!1&&(r.clearColor(ve,he,Ce,nt),Le.copy(De))},reset:function(){z=!1,ye=null,Le.set(-1,0,0,0)}}}function s(){let z=!1,De=!1,ye=null,Le=null,ve=null;return{setReversed:function(he){if(De!==he){const Ce=e.get("EXT_clip_control");he?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),De=he;const nt=ve;ve=null,this.setClear(nt)}},getReversed:function(){return De},setTest:function(he){he?ue(r.DEPTH_TEST):_e(r.DEPTH_TEST)},setMask:function(he){ye!==he&&!z&&(r.depthMask(he),ye=he)},setFunc:function(he){if(De&&(he=fw[he]),Le!==he){switch(he){case ld:r.depthFunc(r.NEVER);break;case ud:r.depthFunc(r.ALWAYS);break;case cd:r.depthFunc(r.LESS);break;case fo:r.depthFunc(r.LEQUAL);break;case fd:r.depthFunc(r.EQUAL);break;case dd:r.depthFunc(r.GEQUAL);break;case hd:r.depthFunc(r.GREATER);break;case pd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Le=he}},setLocked:function(he){z=he},setClear:function(he){ve!==he&&(De&&(he=1-he),r.clearDepth(he),ve=he)},reset:function(){z=!1,ye=null,Le=null,ve=null,De=!1}}}function a(){let z=!1,De=null,ye=null,Le=null,ve=null,he=null,Ce=null,nt=null,It=null;return{setTest:function(yt){z||(yt?ue(r.STENCIL_TEST):_e(r.STENCIL_TEST))},setMask:function(yt){De!==yt&&!z&&(r.stencilMask(yt),De=yt)},setFunc:function(yt,Vn,An){(ye!==yt||Le!==Vn||ve!==An)&&(r.stencilFunc(yt,Vn,An),ye=yt,Le=Vn,ve=An)},setOp:function(yt,Vn,An){(he!==yt||Ce!==Vn||nt!==An)&&(r.stencilOp(yt,Vn,An),he=yt,Ce=Vn,nt=An)},setLocked:function(yt){z=yt},setClear:function(yt){It!==yt&&(r.clearStencil(yt),It=yt)},reset:function(){z=!1,De=null,ye=null,Le=null,ve=null,he=null,Ce=null,nt=null,It=null}}}const l=new n,c=new s,d=new a,h=new WeakMap,m=new WeakMap;let g={},_={},x=new WeakMap,y=[],T=null,w=!1,S=null,v=null,D=null,L=null,P=null,U=null,F=null,I=new Ut(0,0,0),j=0,C=!1,R=null,V=null,se=null,Z=null,fe=null;const ce=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,q=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(X)[1]),oe=q>=1):X.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),oe=q>=2);let le=null,te={};const O=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),we=new Zt().fromArray(O),ze=new Zt().fromArray(J);function We(z,De,ye,Le){const ve=new Uint8Array(4),he=r.createTexture();r.bindTexture(z,he),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ce=0;Ce<ye;Ce++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(De,0,r.RGBA,1,1,Le,0,r.RGBA,r.UNSIGNED_BYTE,ve):r.texImage2D(De+Ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ve);return he}const Q={};Q[r.TEXTURE_2D]=We(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=We(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=We(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=We(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ue(r.DEPTH_TEST),c.setFunc(fo),lt(!1),Gt(cg),ue(r.CULL_FACE),xt(tr);function ue(z){g[z]!==!0&&(r.enable(z),g[z]=!0)}function _e(z){g[z]!==!1&&(r.disable(z),g[z]=!1)}function Ne(z,De){return _[z]!==De?(r.bindFramebuffer(z,De),_[z]=De,z===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=De),z===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=De),!0):!1}function Pe(z,De){let ye=y,Le=!1;if(z){ye=x.get(De),ye===void 0&&(ye=[],x.set(De,ye));const ve=z.textures;if(ye.length!==ve.length||ye[0]!==r.COLOR_ATTACHMENT0){for(let he=0,Ce=ve.length;he<Ce;he++)ye[he]=r.COLOR_ATTACHMENT0+he;ye.length=ve.length,Le=!0}}else ye[0]!==r.BACK&&(ye[0]=r.BACK,Le=!0);Le&&r.drawBuffers(ye)}function at(z){return T!==z?(r.useProgram(z),T=z,!0):!1}const bt={[cs]:r.FUNC_ADD,[gS]:r.FUNC_SUBTRACT,[_S]:r.FUNC_REVERSE_SUBTRACT};bt[vS]=r.MIN,bt[xS]=r.MAX;const ht={[SS]:r.ZERO,[yS]:r.ONE,[MS]:r.SRC_COLOR,[od]:r.SRC_ALPHA,[RS]:r.SRC_ALPHA_SATURATE,[AS]:r.DST_COLOR,[TS]:r.DST_ALPHA,[ES]:r.ONE_MINUS_SRC_COLOR,[ad]:r.ONE_MINUS_SRC_ALPHA,[CS]:r.ONE_MINUS_DST_COLOR,[wS]:r.ONE_MINUS_DST_ALPHA,[bS]:r.CONSTANT_COLOR,[PS]:r.ONE_MINUS_CONSTANT_COLOR,[DS]:r.CONSTANT_ALPHA,[LS]:r.ONE_MINUS_CONSTANT_ALPHA};function xt(z,De,ye,Le,ve,he,Ce,nt,It,yt){if(z===tr){w===!0&&(_e(r.BLEND),w=!1);return}if(w===!1&&(ue(r.BLEND),w=!0),z!==mS){if(z!==S||yt!==C){if((v!==cs||P!==cs)&&(r.blendEquation(r.FUNC_ADD),v=cs,P=cs),yt)switch(z){case ro:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case fg:r.blendFunc(r.ONE,r.ONE);break;case dg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case hg:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ct("WebGLState: Invalid blending: ",z);break}else switch(z){case ro:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case fg:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case dg:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hg:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",z);break}D=null,L=null,U=null,F=null,I.set(0,0,0),j=0,S=z,C=yt}return}ve=ve||De,he=he||ye,Ce=Ce||Le,(De!==v||ve!==P)&&(r.blendEquationSeparate(bt[De],bt[ve]),v=De,P=ve),(ye!==D||Le!==L||he!==U||Ce!==F)&&(r.blendFuncSeparate(ht[ye],ht[Le],ht[he],ht[Ce]),D=ye,L=Le,U=he,F=Ce),(nt.equals(I)===!1||It!==j)&&(r.blendColor(nt.r,nt.g,nt.b,It),I.copy(nt),j=It),S=z,C=!1}function Pt(z,De){z.side===Qi?_e(r.CULL_FACE):ue(r.CULL_FACE);let ye=z.side===zn;De&&(ye=!ye),lt(ye),z.blending===ro&&z.transparent===!1?xt(tr):xt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),l.setMask(z.colorWrite);const Le=z.stencilWrite;d.setTest(Le),Le&&(d.setMask(z.stencilWriteMask),d.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),d.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Wt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ue(r.SAMPLE_ALPHA_TO_COVERAGE):_e(r.SAMPLE_ALPHA_TO_COVERAGE)}function lt(z){R!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),R=z)}function Gt(z){z!==dS?(ue(r.CULL_FACE),z!==V&&(z===cg?r.cullFace(r.BACK):z===hS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_e(r.CULL_FACE),V=z}function k(z){z!==se&&(oe&&r.lineWidth(z),se=z)}function Wt(z,De,ye){z?(ue(r.POLYGON_OFFSET_FILL),(Z!==De||fe!==ye)&&(r.polygonOffset(De,ye),Z=De,fe=ye)):_e(r.POLYGON_OFFSET_FILL)}function gt(z){z?ue(r.SCISSOR_TEST):_e(r.SCISSOR_TEST)}function St(z){z===void 0&&(z=r.TEXTURE0+ce-1),le!==z&&(r.activeTexture(z),le=z)}function Xe(z,De,ye){ye===void 0&&(le===null?ye=r.TEXTURE0+ce-1:ye=le);let Le=te[ye];Le===void 0&&(Le={type:void 0,texture:void 0},te[ye]=Le),(Le.type!==z||Le.texture!==De)&&(le!==ye&&(r.activeTexture(ye),le=ye),r.bindTexture(z,De||Q[z]),Le.type=z,Le.texture=De)}function b(){const z=te[le];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function G(){try{r.compressedTexImage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function de(){try{r.texSubImage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function pe(){try{r.texSubImage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function ae(){try{r.compressedTexSubImage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function je(){try{r.compressedTexSubImage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function Ee(){try{r.texStorage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function Be(){try{r.texStorage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function tt(){try{r.texImage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function Se(){try{r.texImage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function Re(z){we.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),we.copy(z))}function He(z){ze.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),ze.copy(z))}function qe(z,De){let ye=m.get(De);ye===void 0&&(ye=new WeakMap,m.set(De,ye));let Le=ye.get(z);Le===void 0&&(Le=r.getUniformBlockIndex(De,z.name),ye.set(z,Le))}function Ae(z,De){const Le=m.get(De).get(z);h.get(De)!==Le&&(r.uniformBlockBinding(De,Le,z.__bindingPointIndex),h.set(De,Le))}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},le=null,te={},_={},x=new WeakMap,y=[],T=null,w=!1,S=null,v=null,D=null,L=null,P=null,U=null,F=null,I=new Ut(0,0,0),j=0,C=!1,R=null,V=null,se=null,Z=null,fe=null,we.set(0,0,r.canvas.width,r.canvas.height),ze.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:ue,disable:_e,bindFramebuffer:Ne,drawBuffers:Pe,useProgram:at,setBlending:xt,setMaterial:Pt,setFlipSided:lt,setCullFace:Gt,setLineWidth:k,setPolygonOffset:Wt,setScissorTest:gt,activeTexture:St,bindTexture:Xe,unbindTexture:b,compressedTexImage2D:M,compressedTexImage3D:G,texImage2D:tt,texImage3D:Se,updateUBOMapping:qe,uniformBlockBinding:Ae,texStorage2D:Ee,texStorage3D:Be,texSubImage2D:de,texSubImage3D:pe,compressedTexSubImage2D:ae,compressedTexSubImage3D:je,scissor:Re,viewport:He,reset:ot}}function hw(r,e,n,s,a,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ft,g=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,M){return y?new OffscreenCanvas(b,M):yu("canvas")}function w(b,M,G){let de=1;const pe=Xe(b);if((pe.width>G||pe.height>G)&&(de=G/Math.max(pe.width,pe.height)),de<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ae=Math.floor(de*pe.width),je=Math.floor(de*pe.height);_===void 0&&(_=T(ae,je));const Ee=M?T(ae,je):_;return Ee.width=ae,Ee.height=je,Ee.getContext("2d").drawImage(b,0,0,ae,je),st("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ae+"x"+je+")."),Ee}else return"data"in b&&st("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),b;return b}function S(b){return b.generateMipmaps}function v(b){r.generateMipmap(b)}function D(b){return b.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?r.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(b,M,G,de,pe=!1){if(b!==null){if(r[b]!==void 0)return r[b];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ae=M;if(M===r.RED&&(G===r.FLOAT&&(ae=r.R32F),G===r.HALF_FLOAT&&(ae=r.R16F),G===r.UNSIGNED_BYTE&&(ae=r.R8)),M===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(ae=r.R8UI),G===r.UNSIGNED_SHORT&&(ae=r.R16UI),G===r.UNSIGNED_INT&&(ae=r.R32UI),G===r.BYTE&&(ae=r.R8I),G===r.SHORT&&(ae=r.R16I),G===r.INT&&(ae=r.R32I)),M===r.RG&&(G===r.FLOAT&&(ae=r.RG32F),G===r.HALF_FLOAT&&(ae=r.RG16F),G===r.UNSIGNED_BYTE&&(ae=r.RG8)),M===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(ae=r.RG8UI),G===r.UNSIGNED_SHORT&&(ae=r.RG16UI),G===r.UNSIGNED_INT&&(ae=r.RG32UI),G===r.BYTE&&(ae=r.RG8I),G===r.SHORT&&(ae=r.RG16I),G===r.INT&&(ae=r.RG32I)),M===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(ae=r.RGB8UI),G===r.UNSIGNED_SHORT&&(ae=r.RGB16UI),G===r.UNSIGNED_INT&&(ae=r.RGB32UI),G===r.BYTE&&(ae=r.RGB8I),G===r.SHORT&&(ae=r.RGB16I),G===r.INT&&(ae=r.RGB32I)),M===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(ae=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(ae=r.RGBA16UI),G===r.UNSIGNED_INT&&(ae=r.RGBA32UI),G===r.BYTE&&(ae=r.RGBA8I),G===r.SHORT&&(ae=r.RGBA16I),G===r.INT&&(ae=r.RGBA32I)),M===r.RGB&&(G===r.UNSIGNED_INT_5_9_9_9_REV&&(ae=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(ae=r.R11F_G11F_B10F)),M===r.RGBA){const je=pe?xu:Tt.getTransfer(de);G===r.FLOAT&&(ae=r.RGBA32F),G===r.HALF_FLOAT&&(ae=r.RGBA16F),G===r.UNSIGNED_BYTE&&(ae=je===Nt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(ae=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(ae=r.RGB5_A1)}return(ae===r.R16F||ae===r.R32F||ae===r.RG16F||ae===r.RG32F||ae===r.RGBA16F||ae===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function P(b,M){let G;return b?M===null||M===Fi||M===_a?G=r.DEPTH24_STENCIL8:M===Di?G=r.DEPTH32F_STENCIL8:M===ga&&(G=r.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Fi||M===_a?G=r.DEPTH_COMPONENT24:M===Di?G=r.DEPTH_COMPONENT32F:M===ga&&(G=r.DEPTH_COMPONENT16),G}function U(b,M){return S(b)===!0||b.isFramebufferTexture&&b.minFilter!==_n&&b.minFilter!==wn?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function F(b){const M=b.target;M.removeEventListener("dispose",F),j(M),M.isVideoTexture&&g.delete(M)}function I(b){const M=b.target;M.removeEventListener("dispose",I),R(M)}function j(b){const M=s.get(b);if(M.__webglInit===void 0)return;const G=b.source,de=x.get(G);if(de){const pe=de[M.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&C(b),Object.keys(de).length===0&&x.delete(G)}s.remove(b)}function C(b){const M=s.get(b);r.deleteTexture(M.__webglTexture);const G=b.source,de=x.get(G);delete de[M.__cacheKey],c.memory.textures--}function R(b){const M=s.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),s.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(M.__webglFramebuffer[de]))for(let pe=0;pe<M.__webglFramebuffer[de].length;pe++)r.deleteFramebuffer(M.__webglFramebuffer[de][pe]);else r.deleteFramebuffer(M.__webglFramebuffer[de]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[de])}else{if(Array.isArray(M.__webglFramebuffer))for(let de=0;de<M.__webglFramebuffer.length;de++)r.deleteFramebuffer(M.__webglFramebuffer[de]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let de=0;de<M.__webglColorRenderbuffer.length;de++)M.__webglColorRenderbuffer[de]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[de]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=b.textures;for(let de=0,pe=G.length;de<pe;de++){const ae=s.get(G[de]);ae.__webglTexture&&(r.deleteTexture(ae.__webglTexture),c.memory.textures--),s.remove(G[de])}s.remove(b)}let V=0;function se(){V=0}function Z(){const b=V;return b>=a.maxTextures&&st("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),V+=1,b}function fe(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function ce(b,M){const G=s.get(b);if(b.isVideoTexture&&gt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&G.__version!==b.version){const de=b.image;if(de===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(G,b,M);return}}else b.isExternalTexture&&(G.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+M)}function oe(b,M){const G=s.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){Q(G,b,M);return}else b.isExternalTexture&&(G.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+M)}function q(b,M){const G=s.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){Q(G,b,M);return}n.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+M)}function X(b,M){const G=s.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&G.__version!==b.version){ue(G,b,M);return}n.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+M)}const le={[_d]:r.REPEAT,[er]:r.CLAMP_TO_EDGE,[vd]:r.MIRRORED_REPEAT},te={[_n]:r.NEAREST,[US]:r.NEAREST_MIPMAP_NEAREST,[Fl]:r.NEAREST_MIPMAP_LINEAR,[wn]:r.LINEAR,[Mf]:r.LINEAR_MIPMAP_NEAREST,[hs]:r.LINEAR_MIPMAP_LINEAR},O={[kS]:r.NEVER,[WS]:r.ALWAYS,[zS]:r.LESS,[ph]:r.LEQUAL,[VS]:r.EQUAL,[mh]:r.GEQUAL,[HS]:r.GREATER,[GS]:r.NOTEQUAL};function J(b,M){if(M.type===Di&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===wn||M.magFilter===Mf||M.magFilter===Fl||M.magFilter===hs||M.minFilter===wn||M.minFilter===Mf||M.minFilter===Fl||M.minFilter===hs)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(b,r.TEXTURE_WRAP_S,le[M.wrapS]),r.texParameteri(b,r.TEXTURE_WRAP_T,le[M.wrapT]),(b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY)&&r.texParameteri(b,r.TEXTURE_WRAP_R,le[M.wrapR]),r.texParameteri(b,r.TEXTURE_MAG_FILTER,te[M.magFilter]),r.texParameteri(b,r.TEXTURE_MIN_FILTER,te[M.minFilter]),M.compareFunction&&(r.texParameteri(b,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(b,r.TEXTURE_COMPARE_FUNC,O[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===_n||M.minFilter!==Fl&&M.minFilter!==hs||M.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(b,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function we(b,M){let G=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",F));const de=M.source;let pe=x.get(de);pe===void 0&&(pe={},x.set(de,pe));const ae=fe(M);if(ae!==b.__cacheKey){pe[ae]===void 0&&(pe[ae]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,G=!0),pe[ae].usedTimes++;const je=pe[b.__cacheKey];je!==void 0&&(pe[b.__cacheKey].usedTimes--,je.usedTimes===0&&C(M)),b.__cacheKey=ae,b.__webglTexture=pe[ae].texture}return G}function ze(b,M,G){return Math.floor(Math.floor(b/G)/M)}function We(b,M,G,de){const ae=b.updateRanges;if(ae.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,G,de,M.data);else{ae.sort((Se,Re)=>Se.start-Re.start);let je=0;for(let Se=1;Se<ae.length;Se++){const Re=ae[je],He=ae[Se],qe=Re.start+Re.count,Ae=ze(He.start,M.width,4),ot=ze(Re.start,M.width,4);He.start<=qe+1&&Ae===ot&&ze(He.start+He.count-1,M.width,4)===Ae?Re.count=Math.max(Re.count,He.start+He.count-Re.start):(++je,ae[je]=He)}ae.length=je+1;const Ee=r.getParameter(r.UNPACK_ROW_LENGTH),Be=r.getParameter(r.UNPACK_SKIP_PIXELS),tt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Se=0,Re=ae.length;Se<Re;Se++){const He=ae[Se],qe=Math.floor(He.start/4),Ae=Math.ceil(He.count/4),ot=qe%M.width,z=Math.floor(qe/M.width),De=Ae,ye=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ot),r.pixelStorei(r.UNPACK_SKIP_ROWS,z),n.texSubImage2D(r.TEXTURE_2D,0,ot,z,De,ye,G,de,M.data)}b.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ee),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Be),r.pixelStorei(r.UNPACK_SKIP_ROWS,tt)}}function Q(b,M,G){let de=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(de=r.TEXTURE_3D);const pe=we(b,M),ae=M.source;n.bindTexture(de,b.__webglTexture,r.TEXTURE0+G);const je=s.get(ae);if(ae.version!==je.__version||pe===!0){n.activeTexture(r.TEXTURE0+G);const Ee=Tt.getPrimaries(Tt.workingColorSpace),Be=M.colorSpace===Ur?null:Tt.getPrimaries(M.colorSpace),tt=M.colorSpace===Ur||Ee===Be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Se=w(M.image,!1,a.maxTextureSize);Se=St(M,Se);const Re=l.convert(M.format,M.colorSpace),He=l.convert(M.type);let qe=L(M.internalFormat,Re,He,M.colorSpace,M.isVideoTexture);J(de,M);let Ae;const ot=M.mipmaps,z=M.isVideoTexture!==!0,De=je.__version===void 0||pe===!0,ye=ae.dataReady,Le=U(M,Se);if(M.isDepthTexture)qe=P(M.format===ps,M.type),De&&(z?n.texStorage2D(r.TEXTURE_2D,1,qe,Se.width,Se.height):n.texImage2D(r.TEXTURE_2D,0,qe,Se.width,Se.height,0,Re,He,null));else if(M.isDataTexture)if(ot.length>0){z&&De&&n.texStorage2D(r.TEXTURE_2D,Le,qe,ot[0].width,ot[0].height);for(let ve=0,he=ot.length;ve<he;ve++)Ae=ot[ve],z?ye&&n.texSubImage2D(r.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Re,He,Ae.data):n.texImage2D(r.TEXTURE_2D,ve,qe,Ae.width,Ae.height,0,Re,He,Ae.data);M.generateMipmaps=!1}else z?(De&&n.texStorage2D(r.TEXTURE_2D,Le,qe,Se.width,Se.height),ye&&We(M,Se,Re,He)):n.texImage2D(r.TEXTURE_2D,0,qe,Se.width,Se.height,0,Re,He,Se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){z&&De&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Le,qe,ot[0].width,ot[0].height,Se.depth);for(let ve=0,he=ot.length;ve<he;ve++)if(Ae=ot[ve],M.format!==xi)if(Re!==null)if(z){if(ye)if(M.layerUpdates.size>0){const Ce=Ng(Ae.width,Ae.height,M.format,M.type);for(const nt of M.layerUpdates){const It=Ae.data.subarray(nt*Ce/Ae.data.BYTES_PER_ELEMENT,(nt+1)*Ce/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,nt,Ae.width,Ae.height,1,Re,It)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,Ae.width,Ae.height,Se.depth,Re,Ae.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ve,qe,Ae.width,Ae.height,Se.depth,0,Ae.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?ye&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,Ae.width,Ae.height,Se.depth,Re,He,Ae.data):n.texImage3D(r.TEXTURE_2D_ARRAY,ve,qe,Ae.width,Ae.height,Se.depth,0,Re,He,Ae.data)}else{z&&De&&n.texStorage2D(r.TEXTURE_2D,Le,qe,ot[0].width,ot[0].height);for(let ve=0,he=ot.length;ve<he;ve++)Ae=ot[ve],M.format!==xi?Re!==null?z?ye&&n.compressedTexSubImage2D(r.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Re,Ae.data):n.compressedTexImage2D(r.TEXTURE_2D,ve,qe,Ae.width,Ae.height,0,Ae.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?ye&&n.texSubImage2D(r.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Re,He,Ae.data):n.texImage2D(r.TEXTURE_2D,ve,qe,Ae.width,Ae.height,0,Re,He,Ae.data)}else if(M.isDataArrayTexture)if(z){if(De&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Le,qe,Se.width,Se.height,Se.depth),ye)if(M.layerUpdates.size>0){const ve=Ng(Se.width,Se.height,M.format,M.type);for(const he of M.layerUpdates){const Ce=Se.data.subarray(he*ve/Se.data.BYTES_PER_ELEMENT,(he+1)*ve/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,he,Se.width,Se.height,1,Re,He,Ce)}M.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Re,He,Se.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,qe,Se.width,Se.height,Se.depth,0,Re,He,Se.data);else if(M.isData3DTexture)z?(De&&n.texStorage3D(r.TEXTURE_3D,Le,qe,Se.width,Se.height,Se.depth),ye&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Re,He,Se.data)):n.texImage3D(r.TEXTURE_3D,0,qe,Se.width,Se.height,Se.depth,0,Re,He,Se.data);else if(M.isFramebufferTexture){if(De)if(z)n.texStorage2D(r.TEXTURE_2D,Le,qe,Se.width,Se.height);else{let ve=Se.width,he=Se.height;for(let Ce=0;Ce<Le;Ce++)n.texImage2D(r.TEXTURE_2D,Ce,qe,ve,he,0,Re,He,null),ve>>=1,he>>=1}}else if(ot.length>0){if(z&&De){const ve=Xe(ot[0]);n.texStorage2D(r.TEXTURE_2D,Le,qe,ve.width,ve.height)}for(let ve=0,he=ot.length;ve<he;ve++)Ae=ot[ve],z?ye&&n.texSubImage2D(r.TEXTURE_2D,ve,0,0,Re,He,Ae):n.texImage2D(r.TEXTURE_2D,ve,qe,Re,He,Ae);M.generateMipmaps=!1}else if(z){if(De){const ve=Xe(Se);n.texStorage2D(r.TEXTURE_2D,Le,qe,ve.width,ve.height)}ye&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Re,He,Se)}else n.texImage2D(r.TEXTURE_2D,0,qe,Re,He,Se);S(M)&&v(de),je.__version=ae.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function ue(b,M,G){if(M.image.length!==6)return;const de=we(b,M),pe=M.source;n.bindTexture(r.TEXTURE_CUBE_MAP,b.__webglTexture,r.TEXTURE0+G);const ae=s.get(pe);if(pe.version!==ae.__version||de===!0){n.activeTexture(r.TEXTURE0+G);const je=Tt.getPrimaries(Tt.workingColorSpace),Ee=M.colorSpace===Ur?null:Tt.getPrimaries(M.colorSpace),Be=M.colorSpace===Ur||je===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const tt=M.isCompressedTexture||M.image[0].isCompressedTexture,Se=M.image[0]&&M.image[0].isDataTexture,Re=[];for(let he=0;he<6;he++)!tt&&!Se?Re[he]=w(M.image[he],!0,a.maxCubemapSize):Re[he]=Se?M.image[he].image:M.image[he],Re[he]=St(M,Re[he]);const He=Re[0],qe=l.convert(M.format,M.colorSpace),Ae=l.convert(M.type),ot=L(M.internalFormat,qe,Ae,M.colorSpace),z=M.isVideoTexture!==!0,De=ae.__version===void 0||de===!0,ye=pe.dataReady;let Le=U(M,He);J(r.TEXTURE_CUBE_MAP,M);let ve;if(tt){z&&De&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Le,ot,He.width,He.height);for(let he=0;he<6;he++){ve=Re[he].mipmaps;for(let Ce=0;Ce<ve.length;Ce++){const nt=ve[Ce];M.format!==xi?qe!==null?z?ye&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,0,0,nt.width,nt.height,qe,nt.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,ot,nt.width,nt.height,0,nt.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ye&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,0,0,nt.width,nt.height,qe,Ae,nt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,ot,nt.width,nt.height,0,qe,Ae,nt.data)}}}else{if(ve=M.mipmaps,z&&De){ve.length>0&&Le++;const he=Xe(Re[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Le,ot,he.width,he.height)}for(let he=0;he<6;he++)if(Se){z?ye&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Re[he].width,Re[he].height,qe,Ae,Re[he].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ot,Re[he].width,Re[he].height,0,qe,Ae,Re[he].data);for(let Ce=0;Ce<ve.length;Ce++){const It=ve[Ce].image[he].image;z?ye&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,0,0,It.width,It.height,qe,Ae,It.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,ot,It.width,It.height,0,qe,Ae,It.data)}}else{z?ye&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,qe,Ae,Re[he]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ot,qe,Ae,Re[he]);for(let Ce=0;Ce<ve.length;Ce++){const nt=ve[Ce];z?ye&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,0,0,qe,Ae,nt.image[he]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,ot,qe,Ae,nt.image[he])}}}S(M)&&v(r.TEXTURE_CUBE_MAP),ae.__version=pe.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function _e(b,M,G,de,pe,ae){const je=l.convert(G.format,G.colorSpace),Ee=l.convert(G.type),Be=L(G.internalFormat,je,Ee,G.colorSpace),tt=s.get(M),Se=s.get(G);if(Se.__renderTarget=M,!tt.__hasExternalTextures){const Re=Math.max(1,M.width>>ae),He=Math.max(1,M.height>>ae);pe===r.TEXTURE_3D||pe===r.TEXTURE_2D_ARRAY?n.texImage3D(pe,ae,Be,Re,He,M.depth,0,je,Ee,null):n.texImage2D(pe,ae,Be,Re,He,0,je,Ee,null)}n.bindFramebuffer(r.FRAMEBUFFER,b),Wt(M)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,pe,Se.__webglTexture,0,k(M)):(pe===r.TEXTURE_2D||pe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,pe,Se.__webglTexture,ae),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(b,M,G){if(r.bindRenderbuffer(r.RENDERBUFFER,b),M.depthBuffer){const de=M.depthTexture,pe=de&&de.isDepthTexture?de.type:null,ae=P(M.stencilBuffer,pe),je=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Wt(M)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(M),ae,M.width,M.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(M),ae,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ae,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,je,r.RENDERBUFFER,b)}else{const de=M.textures;for(let pe=0;pe<de.length;pe++){const ae=de[pe],je=l.convert(ae.format,ae.colorSpace),Ee=l.convert(ae.type),Be=L(ae.internalFormat,je,Ee,ae.colorSpace);Wt(M)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(M),Be,M.width,M.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(M),Be,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Be,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(b,M,G){const de=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=s.get(M.depthTexture);if(pe.__renderTarget=M,(!pe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),de){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,M.depthTexture.addEventListener("dispose",F)),pe.__webglTexture===void 0){pe.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),J(r.TEXTURE_CUBE_MAP,M.depthTexture);const tt=l.convert(M.depthTexture.format),Se=l.convert(M.depthTexture.type);let Re;M.depthTexture.format===sr?Re=r.DEPTH_COMPONENT24:M.depthTexture.format===ps&&(Re=r.DEPTH24_STENCIL8);for(let He=0;He<6;He++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Re,M.width,M.height,0,tt,Se,null)}}else ce(M.depthTexture,0);const ae=pe.__webglTexture,je=k(M),Ee=de?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,Be=M.depthTexture.format===ps?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===sr)Wt(M)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Be,Ee,ae,0,je):r.framebufferTexture2D(r.FRAMEBUFFER,Be,Ee,ae,0);else if(M.depthTexture.format===ps)Wt(M)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Be,Ee,ae,0,je):r.framebufferTexture2D(r.FRAMEBUFFER,Be,Ee,ae,0);else throw new Error("Unknown depthTexture format")}function at(b){const M=s.get(b),G=b.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==b.depthTexture){const de=b.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),de){const pe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,de.removeEventListener("dispose",pe)};de.addEventListener("dispose",pe),M.__depthDisposeCallback=pe}M.__boundDepthTexture=de}if(b.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let de=0;de<6;de++)Pe(M.__webglFramebuffer[de],b,de);else{const de=b.texture.mipmaps;de&&de.length>0?Pe(M.__webglFramebuffer[0],b,0):Pe(M.__webglFramebuffer,b,0)}else if(G){M.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[de]),M.__webglDepthbuffer[de]===void 0)M.__webglDepthbuffer[de]=r.createRenderbuffer(),Ne(M.__webglDepthbuffer[de],b,!1);else{const pe=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer[de];r.bindRenderbuffer(r.RENDERBUFFER,ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,ae)}}else{const de=b.texture.mipmaps;if(de&&de.length>0?n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Ne(M.__webglDepthbuffer,b,!1);else{const pe=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,ae)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function bt(b,M,G){const de=s.get(b);M!==void 0&&_e(de.__webglFramebuffer,b,b.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&at(b)}function ht(b){const M=b.texture,G=s.get(b),de=s.get(M);b.addEventListener("dispose",I);const pe=b.textures,ae=b.isWebGLCubeRenderTarget===!0,je=pe.length>1;if(je||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=M.version,c.memory.textures++),ae){G.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[Ee]=[];for(let Be=0;Be<M.mipmaps.length;Be++)G.__webglFramebuffer[Ee][Be]=r.createFramebuffer()}else G.__webglFramebuffer[Ee]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let Ee=0;Ee<M.mipmaps.length;Ee++)G.__webglFramebuffer[Ee]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(je)for(let Ee=0,Be=pe.length;Ee<Be;Ee++){const tt=s.get(pe[Ee]);tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture(),c.memory.textures++)}if(b.samples>0&&Wt(b)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Ee=0;Ee<pe.length;Ee++){const Be=pe[Ee];G.__webglColorRenderbuffer[Ee]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[Ee]);const tt=l.convert(Be.format,Be.colorSpace),Se=l.convert(Be.type),Re=L(Be.internalFormat,tt,Se,Be.colorSpace,b.isXRRenderTarget===!0),He=k(b);r.renderbufferStorageMultisample(r.RENDERBUFFER,He,Re,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,G.__webglColorRenderbuffer[Ee])}r.bindRenderbuffer(r.RENDERBUFFER,null),b.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Ne(G.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ae){n.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),J(r.TEXTURE_CUBE_MAP,M);for(let Ee=0;Ee<6;Ee++)if(M.mipmaps&&M.mipmaps.length>0)for(let Be=0;Be<M.mipmaps.length;Be++)_e(G.__webglFramebuffer[Ee][Be],b,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Be);else _e(G.__webglFramebuffer[Ee],b,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);S(M)&&v(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(je){for(let Ee=0,Be=pe.length;Ee<Be;Ee++){const tt=pe[Ee],Se=s.get(tt);let Re=r.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Re=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Re,Se.__webglTexture),J(Re,tt),_e(G.__webglFramebuffer,b,tt,r.COLOR_ATTACHMENT0+Ee,Re,0),S(tt)&&v(Re)}n.unbindTexture()}else{let Ee=r.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ee=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ee,de.__webglTexture),J(Ee,M),M.mipmaps&&M.mipmaps.length>0)for(let Be=0;Be<M.mipmaps.length;Be++)_e(G.__webglFramebuffer[Be],b,M,r.COLOR_ATTACHMENT0,Ee,Be);else _e(G.__webglFramebuffer,b,M,r.COLOR_ATTACHMENT0,Ee,0);S(M)&&v(Ee),n.unbindTexture()}b.depthBuffer&&at(b)}function xt(b){const M=b.textures;for(let G=0,de=M.length;G<de;G++){const pe=M[G];if(S(pe)){const ae=D(b),je=s.get(pe).__webglTexture;n.bindTexture(ae,je),v(ae),n.unbindTexture()}}}const Pt=[],lt=[];function Gt(b){if(b.samples>0){if(Wt(b)===!1){const M=b.textures,G=b.width,de=b.height;let pe=r.COLOR_BUFFER_BIT;const ae=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,je=s.get(b),Ee=M.length>1;if(Ee)for(let tt=0;tt<M.length;tt++)n.bindFramebuffer(r.FRAMEBUFFER,je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const Be=b.texture.mipmaps;Be&&Be.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let tt=0;tt<M.length;tt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(pe|=r.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(pe|=r.STENCIL_BUFFER_BIT)),Ee){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,je.__webglColorRenderbuffer[tt]);const Se=s.get(M[tt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Se,0)}r.blitFramebuffer(0,0,G,de,0,0,G,de,pe,r.NEAREST),h===!0&&(Pt.length=0,lt.length=0,Pt.push(r.COLOR_ATTACHMENT0+tt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Pt.push(ae),lt.push(ae),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,lt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Pt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ee)for(let tt=0;tt<M.length;tt++){n.bindFramebuffer(r.FRAMEBUFFER,je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,je.__webglColorRenderbuffer[tt]);const Se=s.get(M[tt]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.TEXTURE_2D,Se,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&h){const M=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function k(b){return Math.min(a.maxSamples,b.samples)}function Wt(b){const M=s.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function gt(b){const M=c.render.frame;g.get(b)!==M&&(g.set(b,M),b.update())}function St(b,M){const G=b.colorSpace,de=b.format,pe=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||G!==mo&&G!==Ur&&(Tt.getTransfer(G)===Nt?(de!==xi||pe!==si)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",G)),M}function Xe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=Z,this.resetTextureUnits=se,this.setTexture2D=ce,this.setTexture2DArray=oe,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=bt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function pw(r,e){function n(s,a=Ur){let l;const c=Tt.getTransfer(a);if(s===si)return r.UNSIGNED_BYTE;if(s===uh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ch)return r.UNSIGNED_SHORT_5_5_5_1;if(s===V0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===H0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===k0)return r.BYTE;if(s===z0)return r.SHORT;if(s===ga)return r.UNSIGNED_SHORT;if(s===lh)return r.INT;if(s===Fi)return r.UNSIGNED_INT;if(s===Di)return r.FLOAT;if(s===rr)return r.HALF_FLOAT;if(s===G0)return r.ALPHA;if(s===W0)return r.RGB;if(s===xi)return r.RGBA;if(s===sr)return r.DEPTH_COMPONENT;if(s===ps)return r.DEPTH_STENCIL;if(s===X0)return r.RED;if(s===fh)return r.RED_INTEGER;if(s===po)return r.RG;if(s===dh)return r.RG_INTEGER;if(s===hh)return r.RGBA_INTEGER;if(s===cu||s===fu||s===du||s===hu)if(c===Nt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===cu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===du)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===cu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===du)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xd||s===Sd||s===yd||s===Md)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===xd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Md)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ed||s===Td||s===wd||s===Ad||s===Cd||s===Rd||s===bd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Ed||s===Td)return c===Nt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===wd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===Ad)return l.COMPRESSED_R11_EAC;if(s===Cd)return l.COMPRESSED_SIGNED_R11_EAC;if(s===Rd)return l.COMPRESSED_RG11_EAC;if(s===bd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Pd||s===Dd||s===Ld||s===Id||s===Nd||s===Ud||s===Fd||s===Od||s===Bd||s===kd||s===zd||s===Vd||s===Hd||s===Gd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Pd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Dd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ld)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Id)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Nd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ud)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Od)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Bd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===zd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Hd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Gd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wd||s===Xd||s===qd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Wd)return c===Nt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Xd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===qd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Yd||s===jd||s===$d||s===Kd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Yd)return l.COMPRESSED_RED_RGTC1_EXT;if(s===jd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$d)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Kd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_a?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:n}}const mw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gw=`
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

}`;class _w{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const s=new r_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,s=new yi({vertexShader:mw,fragmentShader:gw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Oi(new wa(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vw extends vo{constructor(e,n){super();const s=this;let a=null,l=1,c=null,d="local-floor",h=1,m=null,g=null,_=null,x=null,y=null,T=null;const w=typeof XRWebGLBinding<"u",S=new _w,v={},D=n.getContextAttributes();let L=null,P=null;const U=[],F=[],I=new Ft;let j=null;const C=new _i;C.viewport=new Zt;const R=new _i;R.viewport=new Zt;const V=[C,R],se=new Cy;let Z=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ue=U[Q];return ue===void 0&&(ue=new Xf,U[Q]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Q){let ue=U[Q];return ue===void 0&&(ue=new Xf,U[Q]=ue),ue.getGripSpace()},this.getHand=function(Q){let ue=U[Q];return ue===void 0&&(ue=new Xf,U[Q]=ue),ue.getHandSpace()};function ce(Q){const ue=F.indexOf(Q.inputSource);if(ue===-1)return;const _e=U[ue];_e!==void 0&&(_e.update(Q.inputSource,Q.frame,m||c),_e.dispatchEvent({type:Q.type,data:Q.inputSource}))}function oe(){a.removeEventListener("select",ce),a.removeEventListener("selectstart",ce),a.removeEventListener("selectend",ce),a.removeEventListener("squeeze",ce),a.removeEventListener("squeezestart",ce),a.removeEventListener("squeezeend",ce),a.removeEventListener("end",oe),a.removeEventListener("inputsourceschange",q);for(let Q=0;Q<U.length;Q++){const ue=F[Q];ue!==null&&(F[Q]=null,U[Q].disconnect(ue))}Z=null,fe=null,S.reset();for(const Q in v)delete v[Q];e.setRenderTarget(L),y=null,x=null,_=null,a=null,P=null,We.stop(),s.isPresenting=!1,e.setPixelRatio(j),e.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,s.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,s.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(a,n)),_},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(L=e.getRenderTarget(),a.addEventListener("select",ce),a.addEventListener("selectstart",ce),a.addEventListener("selectend",ce),a.addEventListener("squeeze",ce),a.addEventListener("squeezestart",ce),a.addEventListener("squeezeend",ce),a.addEventListener("end",oe),a.addEventListener("inputsourceschange",q),D.xrCompatible!==!0&&await n.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(I),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ne=null,Pe=null;D.depth&&(Pe=D.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_e=D.stencil?ps:sr,Ne=D.stencil?_a:Fi);const at={colorFormat:n.RGBA8,depthFormat:Pe,scaleFactor:l};_=this.getBinding(),x=_.createProjectionLayer(at),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),P=new Ni(x.textureWidth,x.textureHeight,{format:xi,type:si,depthTexture:new xa(x.textureWidth,x.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const _e={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(a,n,_e),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new Ni(y.framebufferWidth,y.framebufferHeight,{format:xi,type:si,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),m=null,c=await a.requestReferenceSpace(d),We.setContext(a),We.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function q(Q){for(let ue=0;ue<Q.removed.length;ue++){const _e=Q.removed[ue],Ne=F.indexOf(_e);Ne>=0&&(F[Ne]=null,U[Ne].disconnect(_e))}for(let ue=0;ue<Q.added.length;ue++){const _e=Q.added[ue];let Ne=F.indexOf(_e);if(Ne===-1){for(let at=0;at<U.length;at++)if(at>=F.length){F.push(_e),Ne=at;break}else if(F[at]===null){F[at]=_e,Ne=at;break}if(Ne===-1)break}const Pe=U[Ne];Pe&&Pe.connect(_e)}}const X=new re,le=new re;function te(Q,ue,_e){X.setFromMatrixPosition(ue.matrixWorld),le.setFromMatrixPosition(_e.matrixWorld);const Ne=X.distanceTo(le),Pe=ue.projectionMatrix.elements,at=_e.projectionMatrix.elements,bt=Pe[14]/(Pe[10]-1),ht=Pe[14]/(Pe[10]+1),xt=(Pe[9]+1)/Pe[5],Pt=(Pe[9]-1)/Pe[5],lt=(Pe[8]-1)/Pe[0],Gt=(at[8]+1)/at[0],k=bt*lt,Wt=bt*Gt,gt=Ne/(-lt+Gt),St=gt*-lt;if(ue.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(St),Q.translateZ(gt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Pe[10]===-1)Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Xe=bt+gt,b=ht+gt,M=k-St,G=Wt+(Ne-St),de=xt*ht/b*Xe,pe=Pt*ht/b*Xe;Q.projectionMatrix.makePerspective(M,G,de,pe,Xe,b),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function O(Q,ue){ue===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ue.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let ue=Q.near,_e=Q.far;S.texture!==null&&(S.depthNear>0&&(ue=S.depthNear),S.depthFar>0&&(_e=S.depthFar)),se.near=R.near=C.near=ue,se.far=R.far=C.far=_e,(Z!==se.near||fe!==se.far)&&(a.updateRenderState({depthNear:se.near,depthFar:se.far}),Z=se.near,fe=se.far),se.layers.mask=Q.layers.mask|6,C.layers.mask=se.layers.mask&3,R.layers.mask=se.layers.mask&5;const Ne=Q.parent,Pe=se.cameras;O(se,Ne);for(let at=0;at<Pe.length;at++)O(Pe[at],Ne);Pe.length===2?te(se,C,R):se.projectionMatrix.copy(C.projectionMatrix),J(Q,se,Ne)};function J(Q,ue,_e){_e===null?Q.matrix.copy(ue.matrixWorld):(Q.matrix.copy(_e.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ue.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Qd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(x===null&&y===null))return h},this.setFoveation=function(Q){h=Q,x!==null&&(x.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(se)},this.getCameraTexture=function(Q){return v[Q]};let we=null;function ze(Q,ue){if(g=ue.getViewerPose(m||c),T=ue,g!==null){const _e=g.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let Ne=!1;_e.length!==se.cameras.length&&(se.cameras.length=0,Ne=!0);for(let ht=0;ht<_e.length;ht++){const xt=_e[ht];let Pt=null;if(y!==null)Pt=y.getViewport(xt);else{const Gt=_.getViewSubImage(x,xt);Pt=Gt.viewport,ht===0&&(e.setRenderTargetTextures(P,Gt.colorTexture,Gt.depthStencilTexture),e.setRenderTarget(P))}let lt=V[ht];lt===void 0&&(lt=new _i,lt.layers.enable(ht),lt.viewport=new Zt,V[ht]=lt),lt.matrix.fromArray(xt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(xt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),ht===0&&(se.matrix.copy(lt.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),Ne===!0&&se.cameras.push(lt)}const Pe=a.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&w){_=s.getBinding();const ht=_.getDepthInformation(_e[0]);ht&&ht.isValid&&ht.texture&&S.init(ht,a.renderState)}if(Pe&&Pe.includes("camera-access")&&w){e.state.unbindTexture(),_=s.getBinding();for(let ht=0;ht<_e.length;ht++){const xt=_e[ht].camera;if(xt){let Pt=v[xt];Pt||(Pt=new r_,v[xt]=Pt);const lt=_.getCameraImage(xt);Pt.sourceTexture=lt}}}}for(let _e=0;_e<U.length;_e++){const Ne=F[_e],Pe=U[_e];Ne!==null&&Pe!==void 0&&Pe.update(Ne,ue,m||c)}we&&we(Q,ue),ue.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ue}),T=null}const We=new s_;We.setAnimationLoop(ze),this.setAnimationLoop=function(Q){we=Q},this.dispose=function(){}}}const ls=new or,xw=new tn;function Sw(r,e){function n(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,J0(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function a(S,v,D,L,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(S,v):v.isMeshToonMaterial?(l(S,v),_(S,v)):v.isMeshPhongMaterial?(l(S,v),g(S,v)):v.isMeshStandardMaterial?(l(S,v),x(S,v),v.isMeshPhysicalMaterial&&y(S,v,P)):v.isMeshMatcapMaterial?(l(S,v),T(S,v)):v.isMeshDepthMaterial?l(S,v):v.isMeshDistanceMaterial?(l(S,v),w(S,v)):v.isMeshNormalMaterial?l(S,v):v.isLineBasicMaterial?(c(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?h(S,v,D,L):v.isSpriteMaterial?m(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,n(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===zn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,n(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===zn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,n(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,n(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const D=e.get(v),L=D.envMap,P=D.envMapRotation;L&&(S.envMap.value=L,ls.copy(P),ls.x*=-1,ls.y*=-1,ls.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),S.envMapRotation.value.setFromMatrix4(xw.makeRotationFromEuler(ls)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,S.aoMapTransform))}function c(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function h(S,v,D,L){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*D,S.scale.value=L*.5,v.map&&(S.map.value=v.map,n(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function m(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,D){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===zn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,v){v.matcap&&(S.matcap.value=v.matcap)}function w(S,v){const D=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function yw(r,e,n,s){let a={},l={},c=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,L){const P=L.program;s.uniformBlockBinding(D,P)}function m(D,L){let P=a[D.id];P===void 0&&(T(D),P=g(D),a[D.id]=P,D.addEventListener("dispose",S));const U=L.program;s.updateUBOMapping(D,U);const F=e.render.frame;l[D.id]!==F&&(x(D),l[D.id]=F)}function g(D){const L=_();D.__bindingPointIndex=L;const P=r.createBuffer(),U=D.__size,F=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,U,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,P),P}function _(){for(let D=0;D<d;D++)if(c.indexOf(D)===-1)return c.push(D),D;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const L=a[D.id],P=D.uniforms,U=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let F=0,I=P.length;F<I;F++){const j=Array.isArray(P[F])?P[F]:[P[F]];for(let C=0,R=j.length;C<R;C++){const V=j[C];if(y(V,F,C,U)===!0){const se=V.__offset,Z=Array.isArray(V.value)?V.value:[V.value];let fe=0;for(let ce=0;ce<Z.length;ce++){const oe=Z[ce],q=w(oe);typeof oe=="number"||typeof oe=="boolean"?(V.__data[0]=oe,r.bufferSubData(r.UNIFORM_BUFFER,se+fe,V.__data)):oe.isMatrix3?(V.__data[0]=oe.elements[0],V.__data[1]=oe.elements[1],V.__data[2]=oe.elements[2],V.__data[3]=0,V.__data[4]=oe.elements[3],V.__data[5]=oe.elements[4],V.__data[6]=oe.elements[5],V.__data[7]=0,V.__data[8]=oe.elements[6],V.__data[9]=oe.elements[7],V.__data[10]=oe.elements[8],V.__data[11]=0):(oe.toArray(V.__data,fe),fe+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,se,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(D,L,P,U){const F=D.value,I=L+"_"+P;if(U[I]===void 0)return typeof F=="number"||typeof F=="boolean"?U[I]=F:U[I]=F.clone(),!0;{const j=U[I];if(typeof F=="number"||typeof F=="boolean"){if(j!==F)return U[I]=F,!0}else if(j.equals(F)===!1)return j.copy(F),!0}return!1}function T(D){const L=D.uniforms;let P=0;const U=16;for(let I=0,j=L.length;I<j;I++){const C=Array.isArray(L[I])?L[I]:[L[I]];for(let R=0,V=C.length;R<V;R++){const se=C[R],Z=Array.isArray(se.value)?se.value:[se.value];for(let fe=0,ce=Z.length;fe<ce;fe++){const oe=Z[fe],q=w(oe),X=P%U,le=X%q.boundary,te=X+le;P+=le,te!==0&&U-te<q.storage&&(P+=U-te),se.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=P,P+=q.storage}}}const F=P%U;return F>0&&(P+=U-F),D.__size=P,D.__cache={},this}function w(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",D),L}function S(D){const L=D.target;L.removeEventListener("dispose",S);const P=c.indexOf(L.__bindingPointIndex);c.splice(P,1),r.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function v(){for(const D in a)r.deleteBuffer(a[D]);c=[],a={},l={}}return{bind:h,update:m,dispose:v}}const Mw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ri=null;function Ew(){return Ri===null&&(Ri=new xy(Mw,16,16,po,rr),Ri.name="DFG_LUT",Ri.minFilter=wn,Ri.magFilter=wn,Ri.wrapS=er,Ri.wrapT=er,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}class Tw{constructor(e={}){const{canvas:n=XS(),context:s=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:y=si}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=c;const w=y,S=new Set([hh,dh,fh]),v=new Set([si,Fi,ga,_a,uh,ch]),D=new Uint32Array(4),L=new Int32Array(4);let P=null,U=null;const F=[],I=[];let j=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let R=!1;this._outputColorSpace=ri;let V=0,se=0,Z=null,fe=-1,ce=null;const oe=new Zt,q=new Zt;let X=null;const le=new Ut(0);let te=0,O=n.width,J=n.height,we=1,ze=null,We=null;const Q=new Zt(0,0,O,J),ue=new Zt(0,0,O,J);let _e=!1;const Ne=new i_;let Pe=!1,at=!1;const bt=new tn,ht=new re,xt=new Zt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Gt(){return Z===null?we:1}let k=s;function Wt(A,W){return n.getContext(A,W)}try{const A={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ah}`),n.addEventListener("webglcontextlost",nt,!1),n.addEventListener("webglcontextrestored",It,!1),n.addEventListener("webglcontextcreationerror",yt,!1),k===null){const W="webgl2";if(k=Wt(W,A),k===null)throw Wt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ct("WebGLRenderer: "+A.message),A}let gt,St,Xe,b,M,G,de,pe,ae,je,Ee,Be,tt,Se,Re,He,qe,Ae,ot,z,De,ye,Le,ve;function he(){gt=new E1(k),gt.init(),ye=new pw(k,gt),St=new p1(k,gt,e,ye),Xe=new dw(k,gt),St.reversedDepthBuffer&&x&&Xe.buffers.depth.setReversed(!0),b=new A1(k),M=new ZT,G=new hw(k,gt,Xe,M,St,ye,b),de=new g1(C),pe=new M1(C),ae=new Py(k),Le=new d1(k,ae),je=new T1(k,ae,b,Le),Ee=new R1(k,je,ae,b),ot=new C1(k,St,G),He=new m1(M),Be=new KT(C,de,pe,gt,St,Le,He),tt=new Sw(C,M),Se=new JT,Re=new sw(gt),Ae=new f1(C,de,pe,Xe,Ee,T,h),qe=new cw(C,Ee,St),ve=new yw(k,b,St,Xe),z=new h1(k,gt,b),De=new w1(k,gt,b),b.programs=Be.programs,C.capabilities=St,C.extensions=gt,C.properties=M,C.renderLists=Se,C.shadowMap=qe,C.state=Xe,C.info=b}he(),w!==si&&(j=new P1(w,n.width,n.height,a,l));const Ce=new vw(C,k);this.xr=Ce,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(A){A!==void 0&&(we=A,this.setSize(O,J,!1))},this.getSize=function(A){return A.set(O,J)},this.setSize=function(A,W,ie=!0){if(Ce.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,J=W,n.width=Math.floor(A*we),n.height=Math.floor(W*we),ie===!0&&(n.style.width=A+"px",n.style.height=W+"px"),j!==null&&j.setSize(n.width,n.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(O*we,J*we).floor()},this.setDrawingBufferSize=function(A,W,ie){O=A,J=W,we=ie,n.width=Math.floor(A*ie),n.height=Math.floor(W*ie),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(w===si){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(oe)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,W,ie,ee){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,W,ie,ee),Xe.viewport(oe.copy(Q).multiplyScalar(we).round())},this.getScissor=function(A){return A.copy(ue)},this.setScissor=function(A,W,ie,ee){A.isVector4?ue.set(A.x,A.y,A.z,A.w):ue.set(A,W,ie,ee),Xe.scissor(q.copy(ue).multiplyScalar(we).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(A){Xe.setScissorTest(_e=A)},this.setOpaqueSort=function(A){ze=A},this.setTransparentSort=function(A){We=A},this.getClearColor=function(A){return A.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,ie=!0){let ee=0;if(A){let $=!1;if(Z!==null){const be=Z.texture.format;$=S.has(be)}if($){const be=Z.texture.type,Ue=v.has(be),Te=Ae.getClearColor(),Ve=Ae.getClearAlpha(),Oe=Te.r,et=Te.g,Ke=Te.b;Ue?(D[0]=Oe,D[1]=et,D[2]=Ke,D[3]=Ve,k.clearBufferuiv(k.COLOR,0,D)):(L[0]=Oe,L[1]=et,L[2]=Ke,L[3]=Ve,k.clearBufferiv(k.COLOR,0,L))}else ee|=k.COLOR_BUFFER_BIT}W&&(ee|=k.DEPTH_BUFFER_BIT),ie&&(ee|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",nt,!1),n.removeEventListener("webglcontextrestored",It,!1),n.removeEventListener("webglcontextcreationerror",yt,!1),Ae.dispose(),Se.dispose(),Re.dispose(),M.dispose(),de.dispose(),pe.dispose(),Ee.dispose(),Le.dispose(),ve.dispose(),Be.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Vr),Ce.removeEventListener("sessionend",Hr),ai.stop()};function nt(A){A.preventDefault(),_g("WebGLRenderer: Context Lost."),R=!0}function It(){_g("WebGLRenderer: Context Restored."),R=!1;const A=b.autoReset,W=qe.enabled,ie=qe.autoUpdate,ee=qe.needsUpdate,$=qe.type;he(),b.autoReset=A,qe.enabled=W,qe.autoUpdate=ie,qe.needsUpdate=ee,qe.type=$}function yt(A){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Vn(A){const W=A.target;W.removeEventListener("dispose",Vn),An(W)}function An(A){So(A),M.remove(A)}function So(A){const W=M.get(A).programs;W!==void 0&&(W.forEach(function(ie){Be.releaseProgram(ie)}),A.isShaderMaterial&&Be.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,ie,ee,$,be){W===null&&(W=Pt);const Ue=$.isMesh&&$.matrixWorld.determinant()<0,Te=ba(A,W,ie,ee,$);Xe.setMaterial(ee,Ue);let Ve=ie.index,Oe=1;if(ee.wireframe===!0){if(Ve=je.getWireframeAttribute(ie),Ve===void 0)return;Oe=2}const et=ie.drawRange,Ke=ie.attributes.position;let ct=et.start*Oe,Mt=(et.start+et.count)*Oe;be!==null&&(ct=Math.max(ct,be.start*Oe),Mt=Math.min(Mt,(be.start+be.count)*Oe)),Ve!==null?(ct=Math.max(ct,0),Mt=Math.min(Mt,Ve.count)):Ke!=null&&(ct=Math.max(ct,0),Mt=Math.min(Mt,Ke.count));const Bt=Mt-ct;if(Bt<0||Bt===1/0)return;Le.setup($,ee,Te,ie,Ve);let Ot,wt=z;if(Ve!==null&&(Ot=ae.get(Ve),wt=De,wt.setIndex(Ot)),$.isMesh)ee.wireframe===!0?(Xe.setLineWidth(ee.wireframeLinewidth*Gt()),wt.setMode(k.LINES)):wt.setMode(k.TRIANGLES);else if($.isLine){let Ze=ee.linewidth;Ze===void 0&&(Ze=1),Xe.setLineWidth(Ze*Gt()),$.isLineSegments?wt.setMode(k.LINES):$.isLineLoop?wt.setMode(k.LINE_LOOP):wt.setMode(k.LINE_STRIP)}else $.isPoints?wt.setMode(k.POINTS):$.isSprite&&wt.setMode(k.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)va("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))wt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ze=$._multiDrawStarts,Rt=$._multiDrawCounts,_t=$._multiDrawCount,vn=Ve?ae.get(Ve).bytesPerElement:1,Mi=M.get(ee).currentProgram.getUniforms();for(let nn=0;nn<_t;nn++)Mi.setValue(k,"_gl_DrawID",nn),wt.render(Ze[nn]/vn,Rt[nn])}else if($.isInstancedMesh)wt.renderInstances(ct,Bt,$.count);else if(ie.isInstancedBufferGeometry){const Ze=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Rt=Math.min(ie.instanceCount,Ze);wt.renderInstances(ct,Bt,Rt)}else wt.render(ct,Bt)};function lr(A,W,ie){A.transparent===!0&&A.side===Qi&&A.forceSinglePass===!1?(A.side=zn,A.needsUpdate=!0,Gr(A,W,ie),A.side=kr,A.needsUpdate=!0,Gr(A,W,ie),A.side=Qi):Gr(A,W,ie)}this.compile=function(A,W,ie=null){ie===null&&(ie=A),U=Re.get(ie),U.init(W),I.push(U),ie.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(U.pushLight($),$.castShadow&&U.pushShadow($))}),A!==ie&&A.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(U.pushLight($),$.castShadow&&U.pushShadow($))}),U.setupLights();const ee=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const be=$.material;if(be)if(Array.isArray(be))for(let Ue=0;Ue<be.length;Ue++){const Te=be[Ue];lr(Te,ie,$),ee.add(Te)}else lr(be,ie,$),ee.add(be)}),U=I.pop(),ee},this.compileAsync=function(A,W,ie=null){const ee=this.compile(A,W,ie);return new Promise($=>{function be(){if(ee.forEach(function(Ue){M.get(Ue).currentProgram.isReady()&&ee.delete(Ue)}),ee.size===0){$(A);return}setTimeout(be,10)}gt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let yo=null;function zr(A){yo&&yo(A)}function Vr(){ai.stop()}function Hr(){ai.start()}const ai=new s_;ai.setAnimationLoop(zr),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(A){yo=A,Ce.setAnimationLoop(A),A===null?ai.stop():ai.start()},Ce.addEventListener("sessionstart",Vr),Ce.addEventListener("sessionend",Hr),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const ie=Ce.enabled===!0&&Ce.isPresenting===!0,ee=j!==null&&(Z===null||ie)&&j.begin(C,Z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(W),W=Ce.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,W,Z),U=Re.get(A,I.length),U.init(W),I.push(U),bt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ne.setFromProjectionMatrix(bt,Li,W.reversedDepth),at=this.localClippingEnabled,Pe=He.init(this.clippingPlanes,at),P=Se.get(A,F.length),P.init(),F.push(P),Ce.enabled===!0&&Ce.isPresenting===!0){const Ue=C.xr.getDepthSensingMesh();Ue!==null&&Mo(Ue,W,-1/0,C.sortObjects)}Mo(A,W,0,C.sortObjects),P.finish(),C.sortObjects===!0&&P.sort(ze,We),lt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,lt&&Ae.addToRenderList(P,A),this.info.render.frame++,Pe===!0&&He.beginShadows();const $=U.state.shadowsArray;if(qe.render($,A,W),Pe===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&j.hasRenderPass())===!1){const Ue=P.opaque,Te=P.transmissive;if(U.setupLights(),W.isArrayCamera){const Ve=W.cameras;if(Te.length>0)for(let Oe=0,et=Ve.length;Oe<et;Oe++){const Ke=Ve[Oe];Ca(Ue,Te,A,Ke)}lt&&Ae.render(A);for(let Oe=0,et=Ve.length;Oe<et;Oe++){const Ke=Ve[Oe];Aa(P,A,Ke,Ke.viewport)}}else Te.length>0&&Ca(Ue,Te,A,W),lt&&Ae.render(A),Aa(P,A,W)}Z!==null&&se===0&&(G.updateMultisampleRenderTarget(Z),G.updateRenderTargetMipmap(Z)),ee&&j.end(C),A.isScene===!0&&A.onAfterRender(C,A,W),Le.resetDefaultState(),fe=-1,ce=null,I.pop(),I.length>0?(U=I[I.length-1],Pe===!0&&He.setGlobalState(C.clippingPlanes,U.state.camera)):U=null,F.pop(),F.length>0?P=F[F.length-1]:P=null};function Mo(A,W,ie,ee){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ne.intersectsSprite(A)){ee&&xt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(bt);const Ue=Ee.update(A),Te=A.material;Te.visible&&P.push(A,Ue,Te,ie,xt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ne.intersectsObject(A))){const Ue=Ee.update(A),Te=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),xt.copy(A.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),xt.copy(Ue.boundingSphere.center)),xt.applyMatrix4(A.matrixWorld).applyMatrix4(bt)),Array.isArray(Te)){const Ve=Ue.groups;for(let Oe=0,et=Ve.length;Oe<et;Oe++){const Ke=Ve[Oe],ct=Te[Ke.materialIndex];ct&&ct.visible&&P.push(A,Ue,ct,ie,xt.z,Ke)}}else Te.visible&&P.push(A,Ue,Te,ie,xt.z,null)}}const be=A.children;for(let Ue=0,Te=be.length;Ue<Te;Ue++)Mo(be[Ue],W,ie,ee)}function Aa(A,W,ie,ee){const{opaque:$,transmissive:be,transparent:Ue}=A;U.setupLightsView(ie),Pe===!0&&He.setGlobalState(C.clippingPlanes,ie),ee&&Xe.viewport(oe.copy(ee)),$.length>0&&Kn($,W,ie),be.length>0&&Kn(be,W,ie),Ue.length>0&&Kn(Ue,W,ie),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Ca(A,W,ie,ee){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ee.id]===void 0){const ct=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ee.id]=new Ni(1,1,{generateMipmaps:!0,type:ct?rr:si,minFilter:hs,samples:St.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const be=U.state.transmissionRenderTarget[ee.id],Ue=ee.viewport||oe;be.setSize(Ue.z*C.transmissionResolutionScale,Ue.w*C.transmissionResolutionScale);const Te=C.getRenderTarget(),Ve=C.getActiveCubeFace(),Oe=C.getActiveMipmapLevel();C.setRenderTarget(be),C.getClearColor(le),te=C.getClearAlpha(),te<1&&C.setClearColor(16777215,.5),C.clear(),lt&&Ae.render(ie);const et=C.toneMapping;C.toneMapping=Ii;const Ke=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),U.setupLightsView(ee),Pe===!0&&He.setGlobalState(C.clippingPlanes,ee),Kn(A,ie,ee),G.updateMultisampleRenderTarget(be),G.updateRenderTargetMipmap(be),gt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Mt=0,Bt=W.length;Mt<Bt;Mt++){const Ot=W[Mt],{object:wt,geometry:Ze,material:Rt,group:_t}=Ot;if(Rt.side===Qi&&wt.layers.test(ee.layers)){const vn=Rt.side;Rt.side=zn,Rt.needsUpdate=!0,Eo(wt,ie,ee,Ze,Rt,_t),Rt.side=vn,Rt.needsUpdate=!0,ct=!0}}ct===!0&&(G.updateMultisampleRenderTarget(be),G.updateRenderTargetMipmap(be))}C.setRenderTarget(Te,Ve,Oe),C.setClearColor(le,te),Ke!==void 0&&(ee.viewport=Ke),C.toneMapping=et}function Kn(A,W,ie){const ee=W.isScene===!0?W.overrideMaterial:null;for(let $=0,be=A.length;$<be;$++){const Ue=A[$],{object:Te,geometry:Ve,group:Oe}=Ue;let et=Ue.material;et.allowOverride===!0&&ee!==null&&(et=ee),Te.layers.test(ie.layers)&&Eo(Te,W,ie,Ve,et,Oe)}}function Eo(A,W,ie,ee,$,be){A.onBeforeRender(C,W,ie,ee,$,be),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(C,W,ie,ee,A,be),$.transparent===!0&&$.side===Qi&&$.forceSinglePass===!1?($.side=zn,$.needsUpdate=!0,C.renderBufferDirect(ie,W,ee,$,A,be),$.side=kr,$.needsUpdate=!0,C.renderBufferDirect(ie,W,ee,$,A,be),$.side=Qi):C.renderBufferDirect(ie,W,ee,$,A,be),A.onAfterRender(C,W,ie,ee,$,be)}function Gr(A,W,ie){W.isScene!==!0&&(W=Pt);const ee=M.get(A),$=U.state.lights,be=U.state.shadowsArray,Ue=$.state.version,Te=Be.getParameters(A,$.state,be,W,ie),Ve=Be.getProgramCacheKey(Te);let Oe=ee.programs;ee.environment=A.isMeshStandardMaterial?W.environment:null,ee.fog=W.fog,ee.envMap=(A.isMeshStandardMaterial?pe:de).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",Vn),Oe=new Map,ee.programs=Oe);let et=Oe.get(Ve);if(et!==void 0){if(ee.currentProgram===et&&ee.lightsStateVersion===Ue)return To(A,Te),et}else Te.uniforms=Be.getUniforms(A),A.onBeforeCompile(Te,C),et=Be.acquireProgram(Te,Ve),Oe.set(Ve,et),ee.uniforms=Te.uniforms;const Ke=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=He.uniform),To(A,Te),ee.needsLights=Da(A),ee.lightsStateVersion=Ue,ee.needsLights&&(Ke.ambientLightColor.value=$.state.ambient,Ke.lightProbe.value=$.state.probe,Ke.directionalLights.value=$.state.directional,Ke.directionalLightShadows.value=$.state.directionalShadow,Ke.spotLights.value=$.state.spot,Ke.spotLightShadows.value=$.state.spotShadow,Ke.rectAreaLights.value=$.state.rectArea,Ke.ltc_1.value=$.state.rectAreaLTC1,Ke.ltc_2.value=$.state.rectAreaLTC2,Ke.pointLights.value=$.state.point,Ke.pointLightShadows.value=$.state.pointShadow,Ke.hemisphereLights.value=$.state.hemi,Ke.directionalShadowMap.value=$.state.directionalShadowMap,Ke.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ke.spotShadowMap.value=$.state.spotShadowMap,Ke.spotLightMatrix.value=$.state.spotLightMatrix,Ke.spotLightMap.value=$.state.spotLightMap,Ke.pointShadowMap.value=$.state.pointShadowMap,Ke.pointShadowMatrix.value=$.state.pointShadowMatrix),ee.currentProgram=et,ee.uniformsList=null,et}function Ra(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=pu.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function To(A,W){const ie=M.get(A);ie.outputColorSpace=W.outputColorSpace,ie.batching=W.batching,ie.batchingColor=W.batchingColor,ie.instancing=W.instancing,ie.instancingColor=W.instancingColor,ie.instancingMorph=W.instancingMorph,ie.skinning=W.skinning,ie.morphTargets=W.morphTargets,ie.morphNormals=W.morphNormals,ie.morphColors=W.morphColors,ie.morphTargetsCount=W.morphTargetsCount,ie.numClippingPlanes=W.numClippingPlanes,ie.numIntersection=W.numClipIntersection,ie.vertexAlphas=W.vertexAlphas,ie.vertexTangents=W.vertexTangents,ie.toneMapping=W.toneMapping}function ba(A,W,ie,ee,$){W.isScene!==!0&&(W=Pt),G.resetTextureUnits();const be=W.fog,Ue=ee.isMeshStandardMaterial?W.environment:null,Te=Z===null?C.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:mo,Ve=(ee.isMeshStandardMaterial?pe:de).get(ee.envMap||Ue),Oe=ee.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,et=!!ie.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ke=!!ie.morphAttributes.position,ct=!!ie.morphAttributes.normal,Mt=!!ie.morphAttributes.color;let Bt=Ii;ee.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Bt=C.toneMapping);const Ot=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,wt=Ot!==void 0?Ot.length:0,Ze=M.get(ee),Rt=U.state.lights;if(Pe===!0&&(at===!0||A!==ce)){const ln=A===ce&&ee.id===fe;He.setState(ee,A,ln)}let _t=!1;ee.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Rt.state.version||Ze.outputColorSpace!==Te||$.isBatchedMesh&&Ze.batching===!1||!$.isBatchedMesh&&Ze.batching===!0||$.isBatchedMesh&&Ze.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ze.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ze.instancing===!1||!$.isInstancedMesh&&Ze.instancing===!0||$.isSkinnedMesh&&Ze.skinning===!1||!$.isSkinnedMesh&&Ze.skinning===!0||$.isInstancedMesh&&Ze.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ze.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ze.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ze.instancingMorph===!1&&$.morphTexture!==null||Ze.envMap!==Ve||ee.fog===!0&&Ze.fog!==be||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==He.numPlanes||Ze.numIntersection!==He.numIntersection)||Ze.vertexAlphas!==Oe||Ze.vertexTangents!==et||Ze.morphTargets!==Ke||Ze.morphNormals!==ct||Ze.morphColors!==Mt||Ze.toneMapping!==Bt||Ze.morphTargetsCount!==wt)&&(_t=!0):(_t=!0,Ze.__version=ee.version);let vn=Ze.currentProgram;_t===!0&&(vn=Gr(ee,W,$));let Mi=!1,nn=!1,Wr=!1;const Dt=vn.getUniforms(),rt=Ze.uniforms;if(Xe.useProgram(vn.program)&&(Mi=!0,nn=!0,Wr=!0),ee.id!==fe&&(fe=ee.id,nn=!0),Mi||ce!==A){Xe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Dt.setValue(k,"projectionMatrix",A.projectionMatrix),Dt.setValue(k,"viewMatrix",A.matrixWorldInverse);const un=Dt.map.cameraPosition;un!==void 0&&un.setValue(k,ht.setFromMatrixPosition(A.matrixWorld)),St.logarithmicDepthBuffer&&Dt.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Dt.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),ce!==A&&(ce=A,nn=!0,Wr=!0)}if(Ze.needsLights&&(Rt.state.directionalShadowMap.length>0&&Dt.setValue(k,"directionalShadowMap",Rt.state.directionalShadowMap,G),Rt.state.spotShadowMap.length>0&&Dt.setValue(k,"spotShadowMap",Rt.state.spotShadowMap,G),Rt.state.pointShadowMap.length>0&&Dt.setValue(k,"pointShadowMap",Rt.state.pointShadowMap,G)),$.isSkinnedMesh){Dt.setOptional(k,$,"bindMatrix"),Dt.setOptional(k,$,"bindMatrixInverse");const ln=$.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Dt.setValue(k,"boneTexture",ln.boneTexture,G))}$.isBatchedMesh&&(Dt.setOptional(k,$,"batchingTexture"),Dt.setValue(k,"batchingTexture",$._matricesTexture,G),Dt.setOptional(k,$,"batchingIdTexture"),Dt.setValue(k,"batchingIdTexture",$._indirectTexture,G),Dt.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&Dt.setValue(k,"batchingColorTexture",$._colorsTexture,G));const Cn=ie.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&ot.update($,ie,vn),(nn||Ze.receiveShadow!==$.receiveShadow)&&(Ze.receiveShadow=$.receiveShadow,Dt.setValue(k,"receiveShadow",$.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(rt.envMap.value=Ve,rt.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&W.environment!==null&&(rt.envMapIntensity.value=W.environmentIntensity),rt.dfgLUT!==void 0&&(rt.dfgLUT.value=Ew()),nn&&(Dt.setValue(k,"toneMappingExposure",C.toneMappingExposure),Ze.needsLights&&Pa(rt,Wr),be&&ee.fog===!0&&tt.refreshFogUniforms(rt,be),tt.refreshMaterialUniforms(rt,ee,we,J,U.state.transmissionRenderTarget[A.id]),pu.upload(k,Ra(Ze),rt,G)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(pu.upload(k,Ra(Ze),rt,G),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Dt.setValue(k,"center",$.center),Dt.setValue(k,"modelViewMatrix",$.modelViewMatrix),Dt.setValue(k,"normalMatrix",$.normalMatrix),Dt.setValue(k,"modelMatrix",$.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const ln=ee.uniformsGroups;for(let un=0,xs=ln.length;un<xs;un++){const Ei=ln[un];ve.update(Ei,vn),ve.bind(Ei,vn)}}return vn}function Pa(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Da(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,W,ie){const ee=M.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=W,M.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:ie,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const ie=M.get(A);ie.__webglFramebuffer=W,ie.__useDefaultFramebuffer=W===void 0};const Lu=k.createFramebuffer();this.setRenderTarget=function(A,W=0,ie=0){Z=A,V=W,se=ie;let ee=null,$=!1,be=!1;if(A){const Te=M.get(A);if(Te.__useDefaultFramebuffer!==void 0){Xe.bindFramebuffer(k.FRAMEBUFFER,Te.__webglFramebuffer),oe.copy(A.viewport),q.copy(A.scissor),X=A.scissorTest,Xe.viewport(oe),Xe.scissor(q),Xe.setScissorTest(X),fe=-1;return}else if(Te.__webglFramebuffer===void 0)G.setupRenderTarget(A);else if(Te.__hasExternalTextures)G.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const et=A.depthTexture;if(Te.__boundDepthTexture!==et){if(et!==null&&M.has(et)&&(A.width!==et.image.width||A.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(A)}}const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(be=!0);const Oe=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Oe[W])?ee=Oe[W][ie]:ee=Oe[W],$=!0):A.samples>0&&G.useMultisampledRTT(A)===!1?ee=M.get(A).__webglMultisampledFramebuffer:Array.isArray(Oe)?ee=Oe[ie]:ee=Oe,oe.copy(A.viewport),q.copy(A.scissor),X=A.scissorTest}else oe.copy(Q).multiplyScalar(we).floor(),q.copy(ue).multiplyScalar(we).floor(),X=_e;if(ie!==0&&(ee=Lu),Xe.bindFramebuffer(k.FRAMEBUFFER,ee)&&Xe.drawBuffers(A,ee),Xe.viewport(oe),Xe.scissor(q),Xe.setScissorTest(X),$){const Te=M.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,Te.__webglTexture,ie)}else if(be){const Te=W;for(let Ve=0;Ve<A.textures.length;Ve++){const Oe=M.get(A.textures[Ve]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ve,Oe.__webglTexture,ie,Te)}}else if(A!==null&&ie!==0){const Te=M.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Te.__webglTexture,ie)}fe=-1},this.readRenderTargetPixels=function(A,W,ie,ee,$,be,Ue,Te=0){if(!(A&&A.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve){Xe.bindFramebuffer(k.FRAMEBUFFER,Ve);try{const Oe=A.textures[Te],et=Oe.format,Ke=Oe.type;if(!St.textureFormatReadable(et)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Ke)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-ee&&ie>=0&&ie<=A.height-$&&(A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Te),k.readPixels(W,ie,ee,$,ye.convert(et),ye.convert(Ke),be))}finally{const Oe=Z!==null?M.get(Z).__webglFramebuffer:null;Xe.bindFramebuffer(k.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,W,ie,ee,$,be,Ue,Te=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve)if(W>=0&&W<=A.width-ee&&ie>=0&&ie<=A.height-$){Xe.bindFramebuffer(k.FRAMEBUFFER,Ve);const Oe=A.textures[Te],et=Oe.format,Ke=Oe.type;if(!St.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ct),k.bufferData(k.PIXEL_PACK_BUFFER,be.byteLength,k.STREAM_READ),A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Te),k.readPixels(W,ie,ee,$,ye.convert(et),ye.convert(Ke),0);const Mt=Z!==null?M.get(Z).__webglFramebuffer:null;Xe.bindFramebuffer(k.FRAMEBUFFER,Mt);const Bt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await qS(k,Bt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ct),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,be),k.deleteBuffer(ct),k.deleteSync(Bt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,ie=0){const ee=Math.pow(2,-ie),$=Math.floor(A.image.width*ee),be=Math.floor(A.image.height*ee),Ue=W!==null?W.x:0,Te=W!==null?W.y:0;G.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,ie,0,0,Ue,Te,$,be),Xe.unbindTexture()};const Iu=k.createFramebuffer(),qt=k.createFramebuffer();this.copyTextureToTexture=function(A,W,ie=null,ee=null,$=0,be=null){be===null&&($!==0?(va("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=$,$=0):be=0);let Ue,Te,Ve,Oe,et,Ke,ct,Mt,Bt;const Ot=A.isCompressedTexture?A.mipmaps[be]:A.image;if(ie!==null)Ue=ie.max.x-ie.min.x,Te=ie.max.y-ie.min.y,Ve=ie.isBox3?ie.max.z-ie.min.z:1,Oe=ie.min.x,et=ie.min.y,Ke=ie.isBox3?ie.min.z:0;else{const Cn=Math.pow(2,-$);Ue=Math.floor(Ot.width*Cn),Te=Math.floor(Ot.height*Cn),A.isDataArrayTexture?Ve=Ot.depth:A.isData3DTexture?Ve=Math.floor(Ot.depth*Cn):Ve=1,Oe=0,et=0,Ke=0}ee!==null?(ct=ee.x,Mt=ee.y,Bt=ee.z):(ct=0,Mt=0,Bt=0);const wt=ye.convert(W.format),Ze=ye.convert(W.type);let Rt;W.isData3DTexture?(G.setTexture3D(W,0),Rt=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(G.setTexture2DArray(W,0),Rt=k.TEXTURE_2D_ARRAY):(G.setTexture2D(W,0),Rt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const _t=k.getParameter(k.UNPACK_ROW_LENGTH),vn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Mi=k.getParameter(k.UNPACK_SKIP_PIXELS),nn=k.getParameter(k.UNPACK_SKIP_ROWS),Wr=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ot.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ot.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Oe),k.pixelStorei(k.UNPACK_SKIP_ROWS,et),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ke);const Dt=A.isDataArrayTexture||A.isData3DTexture,rt=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Cn=M.get(A),ln=M.get(W),un=M.get(Cn.__renderTarget),xs=M.get(ln.__renderTarget);Xe.bindFramebuffer(k.READ_FRAMEBUFFER,un.__webglFramebuffer),Xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,xs.__webglFramebuffer);for(let Ei=0;Ei<Ve;Ei++)Dt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,M.get(A).__webglTexture,$,Ke+Ei),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,M.get(W).__webglTexture,be,Bt+Ei)),k.blitFramebuffer(Oe,et,Ue,Te,ct,Mt,Ue,Te,k.DEPTH_BUFFER_BIT,k.NEAREST);Xe.bindFramebuffer(k.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||M.has(A)){const Cn=M.get(A),ln=M.get(W);Xe.bindFramebuffer(k.READ_FRAMEBUFFER,Iu),Xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,qt);for(let un=0;un<Ve;un++)Dt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Cn.__webglTexture,$,Ke+un):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Cn.__webglTexture,$),rt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ln.__webglTexture,be,Bt+un):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ln.__webglTexture,be),$!==0?k.blitFramebuffer(Oe,et,Ue,Te,ct,Mt,Ue,Te,k.COLOR_BUFFER_BIT,k.NEAREST):rt?k.copyTexSubImage3D(Rt,be,ct,Mt,Bt+un,Oe,et,Ue,Te):k.copyTexSubImage2D(Rt,be,ct,Mt,Oe,et,Ue,Te);Xe.bindFramebuffer(k.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else rt?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Rt,be,ct,Mt,Bt,Ue,Te,Ve,wt,Ze,Ot.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(Rt,be,ct,Mt,Bt,Ue,Te,Ve,wt,Ot.data):k.texSubImage3D(Rt,be,ct,Mt,Bt,Ue,Te,Ve,wt,Ze,Ot):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,be,ct,Mt,Ue,Te,wt,Ze,Ot.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,be,ct,Mt,Ot.width,Ot.height,wt,Ot.data):k.texSubImage2D(k.TEXTURE_2D,be,ct,Mt,Ue,Te,wt,Ze,Ot);k.pixelStorei(k.UNPACK_ROW_LENGTH,_t),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,vn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Mi),k.pixelStorei(k.UNPACK_SKIP_ROWS,nn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Wr),be===0&&W.generateMipmaps&&k.generateMipmap(Rt),Xe.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&G.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?G.setTextureCube(A,0):A.isData3DTexture?G.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?G.setTexture2DArray(A,0):G.setTexture2D(A,0),Xe.unbindTexture()},this.resetState=function(){V=0,se=0,Z=null,Xe.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}const ww=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,Aw=`
precision highp float;
uniform vec3 uColor;
uniform vec2 uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform int uShapeType;

// Definizioni Forme
const int SHAPE_SQUARE = 0;
const int SHAPE_CIRCLE = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND = 3;

// --- Bayer Matrix Helpers (Dithering) ---
float Bayer2(vec2 a) {
    a = floor(a);
    return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

// --- Noise Helpers ---
#define FBM_OCTAVES 5
#define FBM_LACUNARITY 1.25
#define FBM_GAIN 1.
#define FBM_SCALE 4.0

float hash11(float n) { return fract(sin(n)*43758.5453); }

float vnoise(vec3 p) {
    vec3 ip = floor(p);
    vec3 fp = fract(p);
    float n000 = hash11(dot(ip, vec3(1.0,57.0,113.0)));
    float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
    float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
    float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
    float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
    float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
    float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
    float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
    vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
    float x00 = mix(n000, n100, w.x);
    float x10 = mix(n010, n110, w.x);
    float x01 = mix(n001, n101, w.x);
    float x11 = mix(n011, n111, w.x);
    float y0 = mix(x00, x10, w.y);
    float y1 = mix(x01, x11, w.y);
    return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t) {
    vec3 p = vec3(uv * FBM_SCALE, t);
    float amp = 1.;
    float freq = 1.;
    float sum = 1.;
    for (int i = 0; i < FBM_OCTAVES; ++i) {
        sum += amp * vnoise(p * freq);
        freq *= FBM_LACUNARITY;
        amp *= FBM_GAIN;
    }
    return sum * 0.5 + 0.5;
}

// --- Mask Functions ---
float maskCircle(vec2 p, float cov) {
    float r = sqrt(cov) * .25;
    float d = length(p - 0.5) - r;
    float aa = 0.5 * fwidth(d);
    return cov * (1.0 - smoothstep(-aa, aa, d * 2.));
}

float maskTriangle(vec2 p, vec2 id, float cov) {
    bool flip = mod(id.x + id.y, 2.0) > 0.5;
    if (flip) p.x = 1.0 - p.x;
    float r = sqrt(cov);
    float d = p.y - r*(1.0 - p.x);
    float aa = fwidth(d);
    return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov) {
    float r = sqrt(cov) * 0.564;
    return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

out vec4 fragColor;

void main() {
    // Coordinate & Bayer
    vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
    float aspectRatio = uResolution.x / uResolution.y;
    
    vec2 pixelId = floor(fragCoord / uPixelSize);
    vec2 pixelUV = fract(fragCoord / uPixelSize);
    
    float cellPixelSize = 8. * uPixelSize;
    vec2 cellId = floor(fragCoord / cellPixelSize);
    vec2 cellCoord = cellId * cellPixelSize;
    vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

    // Animazione Sfondo (Noise)
    float feed = fbm2(uv, uTime * 0.05);
    feed = feed * 0.5 - 0.65; // contrasto e luminosità base

    // Dithering
    float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
    float bw = step(0.5, feed + bayer);
    float coverage = bw;

    // Selezione Forma
    float M;
    if (uShapeType == SHAPE_CIRCLE) M = maskCircle(pixelUV, coverage);
    else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
    else if (uShapeType == SHAPE_DIAMOND) M = maskDiamond(pixelUV, coverage);
    else M = coverage; 

    fragColor = vec4(uColor, M);
}
`,Cw={square:0,circle:1,triangle:2,diamond:3},Rw=({shape:r="square",pixelSize:e=4,inkColor:n="#ff5555",bgColor:s="#001d1d"})=>{const a=Br.useRef(null);return Br.useEffect(()=>{if(!a.current)return;const l=window.innerWidth,c=window.innerHeight,d=new vy,h=new vh(-1,1,1,-1,0,1),m=new Tw({alpha:!0,antialias:!0});m.setSize(l,c),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.domElement.classList.add("shader-canvas"),a.current.innerHTML="",a.current.appendChild(m.domElement);const g={uResolution:{value:new Ft(l,c)},uTime:{value:0},uColor:{value:new Ut(n)},uShapeType:{value:Cw[r]??0},uPixelSize:{value:e}},_=new yi({vertexShader:ww,fragmentShader:Aw,uniforms:g,transparent:!0,glslVersion:Zd}),x=new Oi(new wa(2,2),_);d.add(x);const y=new Ry;let T;const w=()=>{g.uTime.value=y.getElapsedTime(),m.render(d,h),T=requestAnimationFrame(w)};w();const S=()=>{const v=window.innerWidth,D=window.innerHeight;m.setSize(v,D),g.uResolution.value.set(v,D)};return window.addEventListener("resize",S),()=>{cancelAnimationFrame(T),window.removeEventListener("resize",S),m.dispose(),_.dispose(),x.geometry.dispose(),a.current&&(a.current.innerHTML="")}},[r,e,n]),mt.jsx("div",{ref:a,className:"shader-container",style:{backgroundColor:s}})};function bw(){return mt.jsxs("div",{className:"container",children:[mt.jsx(Rw,{shape:"square",pixelSize:1,inkColor:"#999999",bgColor:"#000000"}),mt.jsx(nS,{}),mt.jsx(fS,{})]})}Kv.createRoot(document.getElementById("root")).render(mt.jsx(Br.StrictMode,{children:mt.jsx(bw,{})}));

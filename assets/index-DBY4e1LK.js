(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function l0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var df={exports:{}},ia={},hf={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function Kv(){if(Vm)return mt;Vm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,w={};function S(O,J,we){this.props=O,this.context=J,this.refs=w,this.updater=we||y}S.prototype.isReactComponent={},S.prototype.setState=function(O,J){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,J,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function v(){}v.prototype=S.prototype;function D(O,J,we){this.props=O,this.context=J,this.refs=w,this.updater=we||y}var L=D.prototype=new v;L.constructor=D,T(L,S.prototype),L.isPureReactComponent=!0;var b=Array.isArray,U=Object.prototype.hasOwnProperty,F={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function Y(O,J,we){var Ve,Xe={},Q=null,ue=null;if(J!=null)for(Ve in J.ref!==void 0&&(ue=J.ref),J.key!==void 0&&(Q=""+J.key),J)U.call(J,Ve)&&!I.hasOwnProperty(Ve)&&(Xe[Ve]=J[Ve]);var _e=arguments.length-2;if(_e===1)Xe.children=we;else if(1<_e){for(var Ue=Array(_e),Pe=0;Pe<_e;Pe++)Ue[Pe]=arguments[Pe+2];Xe.children=Ue}if(O&&O.defaultProps)for(Ve in _e=O.defaultProps,_e)Xe[Ve]===void 0&&(Xe[Ve]=_e[Ve]);return{$$typeof:r,type:O,key:Q,ref:ue,props:Xe,_owner:F.current}}function C(O,J){return{$$typeof:r,type:O.type,key:J,ref:O.ref,props:O.props,_owner:O._owner}}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function V(O){var J={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(we){return J[we]})}var se=/\/+/g;function Z(O,J){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):J.toString(36)}function fe(O,J,we,Ve,Xe){var Q=typeof O;(Q==="undefined"||Q==="boolean")&&(O=null);var ue=!1;if(O===null)ue=!0;else switch(Q){case"string":case"number":ue=!0;break;case"object":switch(O.$$typeof){case r:case e:ue=!0}}if(ue)return ue=O,Xe=Xe(ue),O=Ve===""?"."+Z(ue,0):Ve,b(Xe)?(we="",O!=null&&(we=O.replace(se,"$&/")+"/"),fe(Xe,J,we,"",function(Pe){return Pe})):Xe!=null&&(R(Xe)&&(Xe=C(Xe,we+(!Xe.key||ue&&ue.key===Xe.key?"":(""+Xe.key).replace(se,"$&/")+"/")+O)),J.push(Xe)),1;if(ue=0,Ve=Ve===""?".":Ve+":",b(O))for(var _e=0;_e<O.length;_e++){Q=O[_e];var Ue=Ve+Z(Q,_e);ue+=fe(Q,J,we,Ue,Xe)}else if(Ue=x(O),typeof Ue=="function")for(O=Ue.call(O),_e=0;!(Q=O.next()).done;)Q=Q.value,Ue=Ve+Z(Q,_e++),ue+=fe(Q,J,we,Ue,Xe);else if(Q==="object")throw J=String(O),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return ue}function ce(O,J,we){if(O==null)return O;var Ve=[],Xe=0;return fe(O,Ve,"","",function(Q){return J.call(we,Q,Xe++)}),Ve}function oe(O){if(O._status===-1){var J=O._result;J=J(),J.then(function(we){(O._status===0||O._status===-1)&&(O._status=1,O._result=we)},function(we){(O._status===0||O._status===-1)&&(O._status=2,O._result=we)}),O._status===-1&&(O._status=0,O._result=J)}if(O._status===1)return O._result.default;throw O._result}var j={current:null},X={transition:null},le={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:X,ReactCurrentOwner:F};function te(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:ce,forEach:function(O,J,we){ce(O,function(){J.apply(this,arguments)},we)},count:function(O){var J=0;return ce(O,function(){J++}),J},toArray:function(O){return ce(O,function(J){return J})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},mt.Component=S,mt.Fragment=t,mt.Profiler=a,mt.PureComponent=D,mt.StrictMode=s,mt.Suspense=h,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,mt.act=te,mt.cloneElement=function(O,J,we){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ve=T({},O.props),Xe=O.key,Q=O.ref,ue=O._owner;if(J!=null){if(J.ref!==void 0&&(Q=J.ref,ue=F.current),J.key!==void 0&&(Xe=""+J.key),O.type&&O.type.defaultProps)var _e=O.type.defaultProps;for(Ue in J)U.call(J,Ue)&&!I.hasOwnProperty(Ue)&&(Ve[Ue]=J[Ue]===void 0&&_e!==void 0?_e[Ue]:J[Ue])}var Ue=arguments.length-2;if(Ue===1)Ve.children=we;else if(1<Ue){_e=Array(Ue);for(var Pe=0;Pe<Ue;Pe++)_e[Pe]=arguments[Pe+2];Ve.children=_e}return{$$typeof:r,type:O.type,key:Xe,ref:Q,props:Ve,_owner:ue}},mt.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},mt.createElement=Y,mt.createFactory=function(O){var J=Y.bind(null,O);return J.type=O,J},mt.createRef=function(){return{current:null}},mt.forwardRef=function(O){return{$$typeof:d,render:O}},mt.isValidElement=R,mt.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:oe}},mt.memo=function(O,J){return{$$typeof:m,type:O,compare:J===void 0?null:J}},mt.startTransition=function(O){var J=X.transition;X.transition={};try{O()}finally{X.transition=J}},mt.unstable_act=te,mt.useCallback=function(O,J){return j.current.useCallback(O,J)},mt.useContext=function(O){return j.current.useContext(O)},mt.useDebugValue=function(){},mt.useDeferredValue=function(O){return j.current.useDeferredValue(O)},mt.useEffect=function(O,J){return j.current.useEffect(O,J)},mt.useId=function(){return j.current.useId()},mt.useImperativeHandle=function(O,J,we){return j.current.useImperativeHandle(O,J,we)},mt.useInsertionEffect=function(O,J){return j.current.useInsertionEffect(O,J)},mt.useLayoutEffect=function(O,J){return j.current.useLayoutEffect(O,J)},mt.useMemo=function(O,J){return j.current.useMemo(O,J)},mt.useReducer=function(O,J,we){return j.current.useReducer(O,J,we)},mt.useRef=function(O){return j.current.useRef(O)},mt.useState=function(O){return j.current.useState(O)},mt.useSyncExternalStore=function(O,J,we){return j.current.useSyncExternalStore(O,J,we)},mt.useTransition=function(){return j.current.useTransition()},mt.version="18.3.1",mt}var Gm;function rh(){return Gm||(Gm=1,hf.exports=Kv()),hf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function Zv(){if(Hm)return ia;Hm=1;var r=rh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,m){var g,_={},x=null,y=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(y=h.ref);for(g in h)s.call(h,g)&&!l.hasOwnProperty(g)&&(_[g]=h[g]);if(d&&d.defaultProps)for(g in h=d.defaultProps,h)_[g]===void 0&&(_[g]=h[g]);return{$$typeof:e,type:d,key:x,ref:y,props:_,_owner:a.current}}return ia.Fragment=t,ia.jsx=c,ia.jsxs=c,ia}var Wm;function Qv(){return Wm||(Wm=1,df.exports=Zv()),df.exports}var De=Qv(),ki=rh();const ga=l0(ki);var Nl={},pf={exports:{}},kn={},mf={exports:{}},gf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function Jv(){return Xm||(Xm=1,(function(r){function e(X,le){var te=X.length;X.push(le);e:for(;0<te;){var O=te-1>>>1,J=X[O];if(0<a(J,le))X[O]=le,X[te]=J,te=O;else break e}}function t(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var le=X[0],te=X.pop();if(te!==le){X[0]=te;e:for(var O=0,J=X.length,we=J>>>1;O<we;){var Ve=2*(O+1)-1,Xe=X[Ve],Q=Ve+1,ue=X[Q];if(0>a(Xe,te))Q<J&&0>a(ue,Xe)?(X[O]=ue,X[Q]=te,O=Q):(X[O]=Xe,X[Ve]=te,O=Ve);else if(Q<J&&0>a(ue,te))X[O]=ue,X[Q]=te,O=Q;else break e}}return le}function a(X,le){var te=X.sortIndex-le.sortIndex;return te!==0?te:X.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();r.unstable_now=function(){return c.now()-d}}var h=[],m=[],g=1,_=null,x=3,y=!1,T=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(X){for(var le=t(m);le!==null;){if(le.callback===null)s(m);else if(le.startTime<=X)s(m),le.sortIndex=le.expirationTime,e(h,le);else break;le=t(m)}}function b(X){if(w=!1,L(X),!T)if(t(h)!==null)T=!0,oe(U);else{var le=t(m);le!==null&&j(b,le.startTime-X)}}function U(X,le){T=!1,w&&(w=!1,v(Y),Y=-1),y=!0;var te=x;try{for(L(le),_=t(h);_!==null&&(!(_.expirationTime>le)||X&&!V());){var O=_.callback;if(typeof O=="function"){_.callback=null,x=_.priorityLevel;var J=O(_.expirationTime<=le);le=r.unstable_now(),typeof J=="function"?_.callback=J:_===t(h)&&s(h),L(le)}else s(h);_=t(h)}if(_!==null)var we=!0;else{var Ve=t(m);Ve!==null&&j(b,Ve.startTime-le),we=!1}return we}finally{_=null,x=te,y=!1}}var F=!1,I=null,Y=-1,C=5,R=-1;function V(){return!(r.unstable_now()-R<C)}function se(){if(I!==null){var X=r.unstable_now();R=X;var le=!0;try{le=I(!0,X)}finally{le?Z():(F=!1,I=null)}}else F=!1}var Z;if(typeof D=="function")Z=function(){D(se)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ce=fe.port2;fe.port1.onmessage=se,Z=function(){ce.postMessage(null)}}else Z=function(){S(se,0)};function oe(X){I=X,F||(F=!0,Z())}function j(X,le){Y=S(function(){X(r.unstable_now())},le)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(X){X.callback=null},r.unstable_continueExecution=function(){T||y||(T=!0,oe(U))},r.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<X?Math.floor(1e3/X):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(X){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var te=x;x=le;try{return X()}finally{x=te}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(X,le){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var te=x;x=X;try{return le()}finally{x=te}},r.unstable_scheduleCallback=function(X,le,te){var O=r.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?O+te:O):te=O,X){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=te+J,X={id:g++,callback:le,priorityLevel:X,startTime:te,expirationTime:J,sortIndex:-1},te>O?(X.sortIndex=te,e(m,X),t(h)===null&&X===t(m)&&(w?(v(Y),Y=-1):w=!0,j(b,te-O))):(X.sortIndex=J,e(h,X),T||y||(T=!0,oe(U))),X},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(X){var le=x;return function(){var te=x;x=le;try{return X.apply(this,arguments)}finally{x=te}}}})(gf)),gf}var jm;function ex(){return jm||(jm=1,mf.exports=Jv()),mf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function tx(){if(qm)return kn;qm=1;var r=rh(),e=ex();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)s.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function x(n){return h.call(_,n)?!0:h.call(g,n)?!1:m.test(n)?_[n]=!0:(g[n]=!0,!1)}function y(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,o,u){if(i===null||typeof i>"u"||y(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,o,u,f,p,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,D);S[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,D);S[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,D);S[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,o,u){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,f,u)&&(o=null),u||f===null?x(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,u=f.attributeNamespace,o===null?n.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),F=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),V=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),X=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,O;function J(n){if(O===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var we=!1;function Ve(n,i){if(!n||we)return"";we=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var u=ne}Reflect.construct(n,[],i)}else{try{i.call()}catch(ne){u=ne}n.call(i.prototype)}else{try{throw Error()}catch(ne){u=ne}n()}}catch(ne){if(ne&&u&&typeof ne.stack=="string"){for(var f=ne.stack.split(`
`),p=u.stack.split(`
`),E=f.length-1,N=p.length-1;1<=E&&0<=N&&f[E]!==p[N];)N--;for(;1<=E&&0<=N;E--,N--)if(f[E]!==p[N]){if(E!==1||N!==1)do if(E--,N--,0>N||f[E]!==p[N]){var k=`
`+f[E].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=E&&0<=N);break}}}finally{we=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?J(n):""}function Xe(n){switch(n.tag){case 5:return J(n.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return n=Ve(n.type,!1),n;case 11:return n=Ve(n.type.render,!1),n;case 1:return n=Ve(n.type,!0),n;default:return""}}function Q(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case F:return"Portal";case C:return"Profiler";case Y:return"StrictMode";case Z:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case se:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ce:return i=n.displayName||null,i!==null?i:Q(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return Q(n(i))}catch{}}return null}function ue(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Q(i);case 8:return i===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function _e(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Pe(n){var i=Ue(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,p.call(this,E)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function lt(n){n._valueTracker||(n._valueTracker=Pe(n))}function bt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Ue(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function xt(n,i){var o=i.checked;return te({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Pt(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=_e(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ut(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function Ht(n,i){ut(n,i);var o=_e(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Wt(n,i.type,o):i.hasOwnProperty("defaultValue")&&Wt(n,i.type,_e(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function B(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Wt(n,i,o){(i!=="number"||pt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var gt=Array.isArray;function St(n,i,o,u){if(n=n.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=i.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+_e(o),i=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function je(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function P(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(gt(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:_e(o)}}function M(n,i){var o=_e(i.value),u=_e(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function H(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?de(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ae,$e=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,f){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ae=ae||document.createElement("div"),ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ee(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nt=["Webkit","ms","Moz","O"];Object.keys(Be).forEach(function(n){nt.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Be[i]=Be[n]})});function Se(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Be.hasOwnProperty(n)&&Be[n]?(""+i).trim():i+"px"}function Re(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,f=Se(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,f):n[o]=f}}var He=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(n,i){if(i){if(He[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ae(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var at=null;function z(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Le=null,ye=null,Ie=null;function ve(n){if(n=Go(n)){if(typeof Le!="function")throw Error(t(280));var i=n.stateNode;i&&(i=$a(i),Le(n.stateNode,n.type,i))}}function he(n){ye?Ie?Ie.push(n):Ie=[n]:ye=n}function Ce(){if(ye){var n=ye,i=Ie;if(Ie=ye=null,ve(n),i)for(n=0;n<i.length;n++)ve(i[n])}}function it(n,i){return n(i)}function It(){}var yt=!1;function Gn(n,i,o){if(yt)return n(i,o);yt=!0;try{return it(n,i,o)}finally{yt=!1,(ye!==null||Ie!==null)&&(It(),Ce())}}function Cn(n,i){var o=n.stateNode;if(o===null)return null;var u=$a(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var yo=!1;if(d)try{var cr={};Object.defineProperty(cr,"passive",{get:function(){yo=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{yo=!1}function Mo(n,i,o,u,f,p,E,N,k){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(o,ne)}catch(ge){this.onError(ge)}}var Vr=!1,Gr=null,Hr=!1,ui=null,Eo={onError:function(n){Vr=!0,Gr=n}};function Ra(n,i,o,u,f,p,E,N,k){Vr=!1,Gr=null,Mo.apply(Eo,arguments)}function ba(n,i,o,u,f,p,E,N,k){if(Ra.apply(this,arguments),Vr){if(Vr){var ne=Gr;Vr=!1,Gr=null}else throw Error(t(198));Hr||(Hr=!0,ui=ne)}}function Qn(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function To(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Wr(n){if(Qn(n)!==n)throw Error(t(188))}function Pa(n){var i=n.alternate;if(!i){if(i=Qn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return Wr(f),n;if(p===u)return Wr(f),i;p=p.sibling}throw Error(t(188))}if(o.return!==u.return)o=f,u=p;else{for(var E=!1,N=f.child;N;){if(N===o){E=!0,o=f,u=p;break}if(N===u){E=!0,u=f,o=p;break}N=N.sibling}if(!E){for(N=p.child;N;){if(N===o){E=!0,o=p,u=f;break}if(N===u){E=!0,u=p,o=f;break}N=N.sibling}if(!E)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function wo(n){return n=Pa(n),n!==null?Da(n):null}function Da(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Da(n);if(i!==null)return i;n=n.sibling}return null}var La=e.unstable_scheduleCallback,Ia=e.unstable_cancelCallback,Nu=e.unstable_shouldYield,Uu=e.unstable_requestPaint,qt=e.unstable_now,A=e.unstable_getCurrentPriorityLevel,W=e.unstable_ImmediatePriority,ie=e.unstable_UserBlockingPriority,ee=e.unstable_NormalPriority,$=e.unstable_LowPriority,be=e.unstable_IdlePriority,Fe=null,Te=null;function Ge(n){if(Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Fe,n,void 0,(n.current.flags&128)===128)}catch{}}var ke=Math.clz32?Math.clz32:ft,tt=Math.log,Ze=Math.LN2;function ft(n){return n>>>=0,n===0?32:31-(tt(n)/Ze|0)|0}var Mt=64,kt=4194304;function Ot(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function wt(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,f=n.suspendedLanes,p=n.pingedLanes,E=o&268435455;if(E!==0){var N=E&~f;N!==0?u=Ot(N):(p&=E,p!==0&&(u=Ot(p)))}else E=o&~f,E!==0?u=Ot(E):p!==0&&(u=Ot(p));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-ke(i),f=1<<o,u|=n[o],i&=~f;return u}function Qe(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rt(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,p=n.pendingLanes;0<p;){var E=31-ke(p),N=1<<E,k=f[E];k===-1?((N&o)===0||(N&u)!==0)&&(f[E]=Qe(N,i)):k<=i&&(n.expiredLanes|=N),p&=~N}}function _t(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function xn(){var n=Mt;return Mt<<=1,(Mt&4194240)===0&&(Mt=64),n}function Ti(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function rn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ke(i),n[i]=o}function Xr(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-ke(o),p=1<<f;i[f]=0,u[f]=-1,n[f]=-1,o&=~p}}function Dt(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-ke(o),f=1<<u;f&i|n[u]&i&&(n[u]|=i),o&=~f}}var st=0;function Rn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var un,cn,Ss,wi,Eh,Fu=!1,Na=[],fr=null,dr=null,hr=null,Ao=new Map,Co=new Map,pr=[],v_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Th(n,i){switch(n){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Ao.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(i.pointerId)}}function Ro(n,i,o,u,f,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},i!==null&&(i=Go(i),i!==null&&cn(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function x_(n,i,o,u,f){switch(i){case"focusin":return fr=Ro(fr,n,i,o,u,f),!0;case"dragenter":return dr=Ro(dr,n,i,o,u,f),!0;case"mouseover":return hr=Ro(hr,n,i,o,u,f),!0;case"pointerover":var p=f.pointerId;return Ao.set(p,Ro(Ao.get(p)||null,n,i,o,u,f)),!0;case"gotpointercapture":return p=f.pointerId,Co.set(p,Ro(Co.get(p)||null,n,i,o,u,f)),!0}return!1}function wh(n){var i=jr(n.target);if(i!==null){var o=Qn(i);if(o!==null){if(i=o.tag,i===13){if(i=To(o),i!==null){n.blockedOn=i,Eh(n.priority,function(){Ss(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ua(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=ku(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);at=u,o.target.dispatchEvent(u),at=null}else return i=Go(o),i!==null&&cn(i),n.blockedOn=o,!1;i.shift()}return!0}function Ah(n,i,o){Ua(n)&&o.delete(i)}function S_(){Fu=!1,fr!==null&&Ua(fr)&&(fr=null),dr!==null&&Ua(dr)&&(dr=null),hr!==null&&Ua(hr)&&(hr=null),Ao.forEach(Ah),Co.forEach(Ah)}function bo(n,i){n.blockedOn===i&&(n.blockedOn=null,Fu||(Fu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,S_)))}function Po(n){function i(f){return bo(f,n)}if(0<Na.length){bo(Na[0],n);for(var o=1;o<Na.length;o++){var u=Na[o];u.blockedOn===n&&(u.blockedOn=null)}}for(fr!==null&&bo(fr,n),dr!==null&&bo(dr,n),hr!==null&&bo(hr,n),Ao.forEach(i),Co.forEach(i),o=0;o<pr.length;o++)u=pr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<pr.length&&(o=pr[0],o.blockedOn===null);)wh(o),o.blockedOn===null&&pr.shift()}var ys=b.ReactCurrentBatchConfig,Fa=!0;function y_(n,i,o,u){var f=st,p=ys.transition;ys.transition=null;try{st=1,Ou(n,i,o,u)}finally{st=f,ys.transition=p}}function M_(n,i,o,u){var f=st,p=ys.transition;ys.transition=null;try{st=4,Ou(n,i,o,u)}finally{st=f,ys.transition=p}}function Ou(n,i,o,u){if(Fa){var f=ku(n,i,o,u);if(f===null)tc(n,i,u,Oa,o),Th(n,u);else if(x_(f,n,i,o,u))u.stopPropagation();else if(Th(n,u),i&4&&-1<v_.indexOf(n)){for(;f!==null;){var p=Go(f);if(p!==null&&un(p),p=ku(n,i,o,u),p===null&&tc(n,i,u,Oa,o),p===f)break;f=p}f!==null&&u.stopPropagation()}else tc(n,i,u,null,o)}}var Oa=null;function ku(n,i,o,u){if(Oa=null,n=z(u),n=jr(n),n!==null)if(i=Qn(n),i===null)n=null;else if(o=i.tag,o===13){if(n=To(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Oa=n,null}function Ch(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(A()){case W:return 1;case ie:return 4;case ee:case $:return 16;case be:return 536870912;default:return 16}default:return 16}}var mr=null,Bu=null,ka=null;function Rh(){if(ka)return ka;var n,i=Bu,o=i.length,u,f="value"in mr?mr.value:mr.textContent,p=f.length;for(n=0;n<o&&i[n]===f[n];n++);var E=o-n;for(u=1;u<=E&&i[o-u]===f[p-u];u++);return ka=f.slice(n,1<u?1-u:void 0)}function Ba(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function za(){return!0}function bh(){return!1}function Hn(n){function i(o,u,f,p,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(o=n[N],this[N]=o?o(p):p[N]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?za:bh,this.isPropagationStopped=bh,this}return te(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=za)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=za)},persist:function(){},isPersistent:za}),i}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zu=Hn(Ms),Do=te({},Ms,{view:0,detail:0}),E_=Hn(Do),Vu,Gu,Lo,Va=te({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Lo&&(Lo&&n.type==="mousemove"?(Vu=n.screenX-Lo.screenX,Gu=n.screenY-Lo.screenY):Gu=Vu=0,Lo=n),Vu)},movementY:function(n){return"movementY"in n?n.movementY:Gu}}),Ph=Hn(Va),T_=te({},Va,{dataTransfer:0}),w_=Hn(T_),A_=te({},Do,{relatedTarget:0}),Hu=Hn(A_),C_=te({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),R_=Hn(C_),b_=te({},Ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),P_=Hn(b_),D_=te({},Ms,{data:0}),Dh=Hn(D_),L_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function U_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=N_[n])?!!i[n]:!1}function Wu(){return U_}var F_=te({},Do,{key:function(n){if(n.key){var i=L_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ba(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?I_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(n){return n.type==="keypress"?Ba(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ba(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),O_=Hn(F_),k_=te({},Va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lh=Hn(k_),B_=te({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),z_=Hn(B_),V_=te({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),G_=Hn(V_),H_=te({},Va,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),W_=Hn(H_),X_=[9,13,27,32],Xu=d&&"CompositionEvent"in window,Io=null;d&&"documentMode"in document&&(Io=document.documentMode);var j_=d&&"TextEvent"in window&&!Io,Ih=d&&(!Xu||Io&&8<Io&&11>=Io),Nh=" ",Uh=!1;function Fh(n,i){switch(n){case"keyup":return X_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Es=!1;function q_(n,i){switch(n){case"compositionend":return Oh(i);case"keypress":return i.which!==32?null:(Uh=!0,Nh);case"textInput":return n=i.data,n===Nh&&Uh?null:n;default:return null}}function Y_(n,i){if(Es)return n==="compositionend"||!Xu&&Fh(n,i)?(n=Rh(),ka=Bu=mr=null,Es=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ih&&i.locale!=="ko"?null:i.data;default:return null}}var $_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!$_[n.type]:i==="textarea"}function Bh(n,i,o,u){he(u),i=ja(i,"onChange"),0<i.length&&(o=new zu("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var No=null,Uo=null;function K_(n){ip(n,0)}function Ga(n){var i=Rs(n);if(bt(i))return n}function Z_(n,i){if(n==="change")return i}var zh=!1;if(d){var ju;if(d){var qu="oninput"in document;if(!qu){var Vh=document.createElement("div");Vh.setAttribute("oninput","return;"),qu=typeof Vh.oninput=="function"}ju=qu}else ju=!1;zh=ju&&(!document.documentMode||9<document.documentMode)}function Gh(){No&&(No.detachEvent("onpropertychange",Hh),Uo=No=null)}function Hh(n){if(n.propertyName==="value"&&Ga(Uo)){var i=[];Bh(i,Uo,n,z(n)),Gn(K_,i)}}function Q_(n,i,o){n==="focusin"?(Gh(),No=i,Uo=o,No.attachEvent("onpropertychange",Hh)):n==="focusout"&&Gh()}function J_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ga(Uo)}function ev(n,i){if(n==="click")return Ga(i)}function tv(n,i){if(n==="input"||n==="change")return Ga(i)}function nv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ci=typeof Object.is=="function"?Object.is:nv;function Fo(n,i){if(ci(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!h.call(i,f)||!ci(n[f],i[f]))return!1}return!0}function Wh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Xh(n,i){var o=Wh(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Wh(o)}}function jh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?jh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function qh(){for(var n=window,i=pt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=pt(n.document)}return i}function Yu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function iv(n){var i=qh(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&jh(o.ownerDocument.documentElement,o)){if(u!==null&&Yu(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,p=Math.min(u.start,f);u=u.end===void 0?p:Math.min(u.end,f),!n.extend&&p>u&&(f=u,u=p,p=f),f=Xh(o,p);var E=Xh(o,u);f&&E&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),p>u?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var rv=d&&"documentMode"in document&&11>=document.documentMode,Ts=null,$u=null,Oo=null,Ku=!1;function Yh(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ku||Ts==null||Ts!==pt(u)||(u=Ts,"selectionStart"in u&&Yu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Oo&&Fo(Oo,u)||(Oo=u,u=ja($u,"onSelect"),0<u.length&&(i=new zu("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=Ts)))}function Ha(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var ws={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionend:Ha("Transition","TransitionEnd")},Zu={},$h={};d&&($h=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function Wa(n){if(Zu[n])return Zu[n];if(!ws[n])return n;var i=ws[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in $h)return Zu[n]=i[o];return n}var Kh=Wa("animationend"),Zh=Wa("animationiteration"),Qh=Wa("animationstart"),Jh=Wa("transitionend"),ep=new Map,tp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(n,i){ep.set(n,i),l(i,[n])}for(var Qu=0;Qu<tp.length;Qu++){var Ju=tp[Qu],sv=Ju.toLowerCase(),ov=Ju[0].toUpperCase()+Ju.slice(1);gr(sv,"on"+ov)}gr(Kh,"onAnimationEnd"),gr(Zh,"onAnimationIteration"),gr(Qh,"onAnimationStart"),gr("dblclick","onDoubleClick"),gr("focusin","onFocus"),gr("focusout","onBlur"),gr(Jh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),av=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function np(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,ba(u,i,void 0,n),n.currentTarget=null}function ip(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var E=u.length-1;0<=E;E--){var N=u[E],k=N.instance,ne=N.currentTarget;if(N=N.listener,k!==p&&f.isPropagationStopped())break e;np(f,N,ne),p=k}else for(E=0;E<u.length;E++){if(N=u[E],k=N.instance,ne=N.currentTarget,N=N.listener,k!==p&&f.isPropagationStopped())break e;np(f,N,ne),p=k}}}if(Hr)throw n=ui,Hr=!1,ui=null,n}function zt(n,i){var o=i[ac];o===void 0&&(o=i[ac]=new Set);var u=n+"__bubble";o.has(u)||(rp(i,n,2,!1),o.add(u))}function ec(n,i,o){var u=0;i&&(u|=4),rp(o,n,u,i)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function Bo(n){if(!n[Xa]){n[Xa]=!0,s.forEach(function(o){o!=="selectionchange"&&(av.has(o)||ec(o,!1,n),ec(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Xa]||(i[Xa]=!0,ec("selectionchange",!1,i))}}function rp(n,i,o,u){switch(Ch(i)){case 1:var f=y_;break;case 4:f=M_;break;default:f=Ou}o=f.bind(null,i,o,n),f=void 0,!yo||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(i,o,{capture:!0,passive:f}):n.addEventListener(i,o,!0):f!==void 0?n.addEventListener(i,o,{passive:f}):n.addEventListener(i,o,!1)}function tc(n,i,o,u,f){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var N=u.stateNode.containerInfo;if(N===f||N.nodeType===8&&N.parentNode===f)break;if(E===4)for(E=u.return;E!==null;){var k=E.tag;if((k===3||k===4)&&(k=E.stateNode.containerInfo,k===f||k.nodeType===8&&k.parentNode===f))return;E=E.return}for(;N!==null;){if(E=jr(N),E===null)return;if(k=E.tag,k===5||k===6){u=p=E;continue e}N=N.parentNode}}u=u.return}Gn(function(){var ne=p,ge=z(o),xe=[];e:{var me=ep.get(n);if(me!==void 0){var Oe=zu,We=n;switch(n){case"keypress":if(Ba(o)===0)break e;case"keydown":case"keyup":Oe=O_;break;case"focusin":We="focus",Oe=Hu;break;case"focusout":We="blur",Oe=Hu;break;case"beforeblur":case"afterblur":Oe=Hu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=Ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=w_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=z_;break;case Kh:case Zh:case Qh:Oe=R_;break;case Jh:Oe=G_;break;case"scroll":Oe=E_;break;case"wheel":Oe=W_;break;case"copy":case"cut":case"paste":Oe=P_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=Lh}var Ye=(i&4)!==0,Zt=!Ye&&n==="scroll",q=Ye?me!==null?me+"Capture":null:me;Ye=[];for(var G=ne,K;G!==null;){K=G;var Me=K.stateNode;if(K.tag===5&&Me!==null&&(K=Me,q!==null&&(Me=Cn(G,q),Me!=null&&Ye.push(zo(G,Me,K)))),Zt)break;G=G.return}0<Ye.length&&(me=new Oe(me,We,null,o,ge),xe.push({event:me,listeners:Ye}))}}if((i&7)===0){e:{if(me=n==="mouseover"||n==="pointerover",Oe=n==="mouseout"||n==="pointerout",me&&o!==at&&(We=o.relatedTarget||o.fromElement)&&(jr(We)||We[Vi]))break e;if((Oe||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,Oe?(We=o.relatedTarget||o.toElement,Oe=ne,We=We?jr(We):null,We!==null&&(Zt=Qn(We),We!==Zt||We.tag!==5&&We.tag!==6)&&(We=null)):(Oe=null,We=ne),Oe!==We)){if(Ye=Ph,Me="onMouseLeave",q="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=Lh,Me="onPointerLeave",q="onPointerEnter",G="pointer"),Zt=Oe==null?me:Rs(Oe),K=We==null?me:Rs(We),me=new Ye(Me,G+"leave",Oe,o,ge),me.target=Zt,me.relatedTarget=K,Me=null,jr(ge)===ne&&(Ye=new Ye(q,G+"enter",We,o,ge),Ye.target=K,Ye.relatedTarget=Zt,Me=Ye),Zt=Me,Oe&&We)t:{for(Ye=Oe,q=We,G=0,K=Ye;K;K=As(K))G++;for(K=0,Me=q;Me;Me=As(Me))K++;for(;0<G-K;)Ye=As(Ye),G--;for(;0<K-G;)q=As(q),K--;for(;G--;){if(Ye===q||q!==null&&Ye===q.alternate)break t;Ye=As(Ye),q=As(q)}Ye=null}else Ye=null;Oe!==null&&sp(xe,me,Oe,Ye,!1),We!==null&&Zt!==null&&sp(xe,Zt,We,Ye,!0)}}e:{if(me=ne?Rs(ne):window,Oe=me.nodeName&&me.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&me.type==="file")var Ke=Z_;else if(kh(me))if(zh)Ke=tv;else{Ke=J_;var Je=Q_}else(Oe=me.nodeName)&&Oe.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Ke=ev);if(Ke&&(Ke=Ke(n,ne))){Bh(xe,Ke,o,ge);break e}Je&&Je(n,me,ne),n==="focusout"&&(Je=me._wrapperState)&&Je.controlled&&me.type==="number"&&Wt(me,"number",me.value)}switch(Je=ne?Rs(ne):window,n){case"focusin":(kh(Je)||Je.contentEditable==="true")&&(Ts=Je,$u=ne,Oo=null);break;case"focusout":Oo=$u=Ts=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,Yh(xe,o,ge);break;case"selectionchange":if(rv)break;case"keydown":case"keyup":Yh(xe,o,ge)}var et;if(Xu)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else Es?Fh(n,o)&&(rt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(rt="onCompositionStart");rt&&(Ih&&o.locale!=="ko"&&(Es||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Es&&(et=Rh()):(mr=ge,Bu="value"in mr?mr.value:mr.textContent,Es=!0)),Je=ja(ne,rt),0<Je.length&&(rt=new Dh(rt,n,null,o,ge),xe.push({event:rt,listeners:Je}),et?rt.data=et:(et=Oh(o),et!==null&&(rt.data=et)))),(et=j_?q_(n,o):Y_(n,o))&&(ne=ja(ne,"onBeforeInput"),0<ne.length&&(ge=new Dh("onBeforeInput","beforeinput",null,o,ge),xe.push({event:ge,listeners:ne}),ge.data=et))}ip(xe,i)})}function zo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function ja(n,i){for(var o=i+"Capture",u=[];n!==null;){var f=n,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=Cn(n,o),p!=null&&u.unshift(zo(n,p,f)),p=Cn(n,i),p!=null&&u.push(zo(n,p,f))),n=n.return}return u}function As(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function sp(n,i,o,u,f){for(var p=i._reactName,E=[];o!==null&&o!==u;){var N=o,k=N.alternate,ne=N.stateNode;if(k!==null&&k===u)break;N.tag===5&&ne!==null&&(N=ne,f?(k=Cn(o,p),k!=null&&E.unshift(zo(o,k,N))):f||(k=Cn(o,p),k!=null&&E.push(zo(o,k,N)))),o=o.return}E.length!==0&&n.push({event:i,listeners:E})}var lv=/\r\n?/g,uv=/\u0000|\uFFFD/g;function op(n){return(typeof n=="string"?n:""+n).replace(lv,`
`).replace(uv,"")}function qa(n,i,o){if(i=op(i),op(n)!==i&&o)throw Error(t(425))}function Ya(){}var nc=null,ic=null;function rc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var sc=typeof setTimeout=="function"?setTimeout:void 0,cv=typeof clearTimeout=="function"?clearTimeout:void 0,ap=typeof Promise=="function"?Promise:void 0,fv=typeof queueMicrotask=="function"?queueMicrotask:typeof ap<"u"?function(n){return ap.resolve(null).then(n).catch(dv)}:sc;function dv(n){setTimeout(function(){throw n})}function oc(n,i){var o=i,u=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){n.removeChild(f),Po(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);Po(i)}function _r(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function lp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),Ai="__reactFiber$"+Cs,Vo="__reactProps$"+Cs,Vi="__reactContainer$"+Cs,ac="__reactEvents$"+Cs,hv="__reactListeners$"+Cs,pv="__reactHandles$"+Cs;function jr(n){var i=n[Ai];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Vi]||o[Ai]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=lp(n);n!==null;){if(o=n[Ai])return o;n=lp(n)}return i}n=o,o=n.parentNode}return null}function Go(n){return n=n[Ai]||n[Vi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Rs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function $a(n){return n[Vo]||null}var lc=[],bs=-1;function vr(n){return{current:n}}function Vt(n){0>bs||(n.current=lc[bs],lc[bs]=null,bs--)}function Bt(n,i){bs++,lc[bs]=n.current,n.current=i}var xr={},Sn=vr(xr),In=vr(!1),qr=xr;function Ps(n,i){var o=n.type.contextTypes;if(!o)return xr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in o)f[p]=i[p];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Nn(n){return n=n.childContextTypes,n!=null}function Ka(){Vt(In),Vt(Sn)}function up(n,i,o){if(Sn.current!==xr)throw Error(t(168));Bt(Sn,i),Bt(In,o)}function cp(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(t(108,ue(n)||"Unknown",f));return te({},o,u)}function Za(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||xr,qr=Sn.current,Bt(Sn,n),Bt(In,In.current),!0}function fp(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=cp(n,i,qr),u.__reactInternalMemoizedMergedChildContext=n,Vt(In),Vt(Sn),Bt(Sn,n)):Vt(In),Bt(In,o)}var Gi=null,Qa=!1,uc=!1;function dp(n){Gi===null?Gi=[n]:Gi.push(n)}function mv(n){Qa=!0,dp(n)}function Sr(){if(!uc&&Gi!==null){uc=!0;var n=0,i=st;try{var o=Gi;for(st=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Gi=null,Qa=!1}catch(f){throw Gi!==null&&(Gi=Gi.slice(n+1)),La(W,Sr),f}finally{st=i,uc=!1}}return null}var Ds=[],Ls=0,Ja=null,el=0,Jn=[],ei=0,Yr=null,Hi=1,Wi="";function $r(n,i){Ds[Ls++]=el,Ds[Ls++]=Ja,Ja=n,el=i}function hp(n,i,o){Jn[ei++]=Hi,Jn[ei++]=Wi,Jn[ei++]=Yr,Yr=n;var u=Hi;n=Wi;var f=32-ke(u)-1;u&=~(1<<f),o+=1;var p=32-ke(i)+f;if(30<p){var E=f-f%5;p=(u&(1<<E)-1).toString(32),u>>=E,f-=E,Hi=1<<32-ke(i)+f|o<<f|u,Wi=p+n}else Hi=1<<p|o<<f|u,Wi=n}function cc(n){n.return!==null&&($r(n,1),hp(n,1,0))}function fc(n){for(;n===Ja;)Ja=Ds[--Ls],Ds[Ls]=null,el=Ds[--Ls],Ds[Ls]=null;for(;n===Yr;)Yr=Jn[--ei],Jn[ei]=null,Wi=Jn[--ei],Jn[ei]=null,Hi=Jn[--ei],Jn[ei]=null}var Wn=null,Xn=null,Xt=!1,fi=null;function pp(n,i){var o=ri(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function mp(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Wn=n,Xn=_r(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Wn=n,Xn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Yr!==null?{id:Hi,overflow:Wi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ri(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Wn=n,Xn=null,!0):!1;default:return!1}}function dc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function hc(n){if(Xt){var i=Xn;if(i){var o=i;if(!mp(n,i)){if(dc(n))throw Error(t(418));i=_r(o.nextSibling);var u=Wn;i&&mp(n,i)?pp(u,o):(n.flags=n.flags&-4097|2,Xt=!1,Wn=n)}}else{if(dc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xt=!1,Wn=n}}}function gp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Wn=n}function tl(n){if(n!==Wn)return!1;if(!Xt)return gp(n),Xt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!rc(n.type,n.memoizedProps)),i&&(i=Xn)){if(dc(n))throw _p(),Error(t(418));for(;i;)pp(n,i),i=_r(i.nextSibling)}if(gp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Xn=_r(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Xn=null}}else Xn=Wn?_r(n.stateNode.nextSibling):null;return!0}function _p(){for(var n=Xn;n;)n=_r(n.nextSibling)}function Is(){Xn=Wn=null,Xt=!1}function pc(n){fi===null?fi=[n]:fi.push(n)}var gv=b.ReactCurrentBatchConfig;function Ho(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var f=u,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(E){var N=f.refs;E===null?delete N[p]:N[p]=E},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function nl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function vp(n){var i=n._init;return i(n._payload)}function xp(n){function i(q,G){if(n){var K=q.deletions;K===null?(q.deletions=[G],q.flags|=16):K.push(G)}}function o(q,G){if(!n)return null;for(;G!==null;)i(q,G),G=G.sibling;return null}function u(q,G){for(q=new Map;G!==null;)G.key!==null?q.set(G.key,G):q.set(G.index,G),G=G.sibling;return q}function f(q,G){return q=Rr(q,G),q.index=0,q.sibling=null,q}function p(q,G,K){return q.index=K,n?(K=q.alternate,K!==null?(K=K.index,K<G?(q.flags|=2,G):K):(q.flags|=2,G)):(q.flags|=1048576,G)}function E(q){return n&&q.alternate===null&&(q.flags|=2),q}function N(q,G,K,Me){return G===null||G.tag!==6?(G=of(K,q.mode,Me),G.return=q,G):(G=f(G,K),G.return=q,G)}function k(q,G,K,Me){var Ke=K.type;return Ke===I?ge(q,G,K.props.children,Me,K.key):G!==null&&(G.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===oe&&vp(Ke)===G.type)?(Me=f(G,K.props),Me.ref=Ho(q,G,K),Me.return=q,Me):(Me=Al(K.type,K.key,K.props,null,q.mode,Me),Me.ref=Ho(q,G,K),Me.return=q,Me)}function ne(q,G,K,Me){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=af(K,q.mode,Me),G.return=q,G):(G=f(G,K.children||[]),G.return=q,G)}function ge(q,G,K,Me,Ke){return G===null||G.tag!==7?(G=is(K,q.mode,Me,Ke),G.return=q,G):(G=f(G,K),G.return=q,G)}function xe(q,G,K){if(typeof G=="string"&&G!==""||typeof G=="number")return G=of(""+G,q.mode,K),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case U:return K=Al(G.type,G.key,G.props,null,q.mode,K),K.ref=Ho(q,null,G),K.return=q,K;case F:return G=af(G,q.mode,K),G.return=q,G;case oe:var Me=G._init;return xe(q,Me(G._payload),K)}if(gt(G)||le(G))return G=is(G,q.mode,K,null),G.return=q,G;nl(q,G)}return null}function me(q,G,K,Me){var Ke=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Ke!==null?null:N(q,G,""+K,Me);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case U:return K.key===Ke?k(q,G,K,Me):null;case F:return K.key===Ke?ne(q,G,K,Me):null;case oe:return Ke=K._init,me(q,G,Ke(K._payload),Me)}if(gt(K)||le(K))return Ke!==null?null:ge(q,G,K,Me,null);nl(q,K)}return null}function Oe(q,G,K,Me,Ke){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return q=q.get(K)||null,N(G,q,""+Me,Ke);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case U:return q=q.get(Me.key===null?K:Me.key)||null,k(G,q,Me,Ke);case F:return q=q.get(Me.key===null?K:Me.key)||null,ne(G,q,Me,Ke);case oe:var Je=Me._init;return Oe(q,G,K,Je(Me._payload),Ke)}if(gt(Me)||le(Me))return q=q.get(K)||null,ge(G,q,Me,Ke,null);nl(G,Me)}return null}function We(q,G,K,Me){for(var Ke=null,Je=null,et=G,rt=G=0,hn=null;et!==null&&rt<K.length;rt++){et.index>rt?(hn=et,et=null):hn=et.sibling;var At=me(q,et,K[rt],Me);if(At===null){et===null&&(et=hn);break}n&&et&&At.alternate===null&&i(q,et),G=p(At,G,rt),Je===null?Ke=At:Je.sibling=At,Je=At,et=hn}if(rt===K.length)return o(q,et),Xt&&$r(q,rt),Ke;if(et===null){for(;rt<K.length;rt++)et=xe(q,K[rt],Me),et!==null&&(G=p(et,G,rt),Je===null?Ke=et:Je.sibling=et,Je=et);return Xt&&$r(q,rt),Ke}for(et=u(q,et);rt<K.length;rt++)hn=Oe(et,q,rt,K[rt],Me),hn!==null&&(n&&hn.alternate!==null&&et.delete(hn.key===null?rt:hn.key),G=p(hn,G,rt),Je===null?Ke=hn:Je.sibling=hn,Je=hn);return n&&et.forEach(function(br){return i(q,br)}),Xt&&$r(q,rt),Ke}function Ye(q,G,K,Me){var Ke=le(K);if(typeof Ke!="function")throw Error(t(150));if(K=Ke.call(K),K==null)throw Error(t(151));for(var Je=Ke=null,et=G,rt=G=0,hn=null,At=K.next();et!==null&&!At.done;rt++,At=K.next()){et.index>rt?(hn=et,et=null):hn=et.sibling;var br=me(q,et,At.value,Me);if(br===null){et===null&&(et=hn);break}n&&et&&br.alternate===null&&i(q,et),G=p(br,G,rt),Je===null?Ke=br:Je.sibling=br,Je=br,et=hn}if(At.done)return o(q,et),Xt&&$r(q,rt),Ke;if(et===null){for(;!At.done;rt++,At=K.next())At=xe(q,At.value,Me),At!==null&&(G=p(At,G,rt),Je===null?Ke=At:Je.sibling=At,Je=At);return Xt&&$r(q,rt),Ke}for(et=u(q,et);!At.done;rt++,At=K.next())At=Oe(et,q,rt,At.value,Me),At!==null&&(n&&At.alternate!==null&&et.delete(At.key===null?rt:At.key),G=p(At,G,rt),Je===null?Ke=At:Je.sibling=At,Je=At);return n&&et.forEach(function($v){return i(q,$v)}),Xt&&$r(q,rt),Ke}function Zt(q,G,K,Me){if(typeof K=="object"&&K!==null&&K.type===I&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case U:e:{for(var Ke=K.key,Je=G;Je!==null;){if(Je.key===Ke){if(Ke=K.type,Ke===I){if(Je.tag===7){o(q,Je.sibling),G=f(Je,K.props.children),G.return=q,q=G;break e}}else if(Je.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===oe&&vp(Ke)===Je.type){o(q,Je.sibling),G=f(Je,K.props),G.ref=Ho(q,Je,K),G.return=q,q=G;break e}o(q,Je);break}else i(q,Je);Je=Je.sibling}K.type===I?(G=is(K.props.children,q.mode,Me,K.key),G.return=q,q=G):(Me=Al(K.type,K.key,K.props,null,q.mode,Me),Me.ref=Ho(q,G,K),Me.return=q,q=Me)}return E(q);case F:e:{for(Je=K.key;G!==null;){if(G.key===Je)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){o(q,G.sibling),G=f(G,K.children||[]),G.return=q,q=G;break e}else{o(q,G);break}else i(q,G);G=G.sibling}G=af(K,q.mode,Me),G.return=q,q=G}return E(q);case oe:return Je=K._init,Zt(q,G,Je(K._payload),Me)}if(gt(K))return We(q,G,K,Me);if(le(K))return Ye(q,G,K,Me);nl(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,G!==null&&G.tag===6?(o(q,G.sibling),G=f(G,K),G.return=q,q=G):(o(q,G),G=of(K,q.mode,Me),G.return=q,q=G),E(q)):o(q,G)}return Zt}var Ns=xp(!0),Sp=xp(!1),il=vr(null),rl=null,Us=null,mc=null;function gc(){mc=Us=rl=null}function _c(n){var i=il.current;Vt(il),n._currentValue=i}function vc(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function Fs(n,i){rl=n,mc=Us=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Un=!0),n.firstContext=null)}function ti(n){var i=n._currentValue;if(mc!==n)if(n={context:n,memoizedValue:i,next:null},Us===null){if(rl===null)throw Error(t(308));Us=n,rl.dependencies={lanes:0,firstContext:n}}else Us=Us.next=n;return i}var Kr=null;function xc(n){Kr===null?Kr=[n]:Kr.push(n)}function yp(n,i,o,u){var f=i.interleaved;return f===null?(o.next=o,xc(i)):(o.next=f.next,f.next=o),i.interleaved=o,Xi(n,u)}function Xi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var yr=!1;function Sc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ji(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Mr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Et&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,Xi(n,o)}return f=u.interleaved,f===null?(i.next=i,xc(u)):(i.next=f.next,f.next=i),u.interleaved=i,Xi(n,o)}function sl(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Dt(n,o)}}function Ep(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?f=p=E:p=p.next=E,o=o.next}while(o!==null);p===null?f=p=i:p=p.next=i}else f=p=i;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function ol(n,i,o,u){var f=n.updateQueue;yr=!1;var p=f.firstBaseUpdate,E=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var k=N,ne=k.next;k.next=null,E===null?p=ne:E.next=ne,E=k;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,N=ge.lastBaseUpdate,N!==E&&(N===null?ge.firstBaseUpdate=ne:N.next=ne,ge.lastBaseUpdate=k))}if(p!==null){var xe=f.baseState;E=0,ge=ne=k=null,N=p;do{var me=N.lane,Oe=N.eventTime;if((u&me)===me){ge!==null&&(ge=ge.next={eventTime:Oe,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var We=n,Ye=N;switch(me=i,Oe=o,Ye.tag){case 1:if(We=Ye.payload,typeof We=="function"){xe=We.call(Oe,xe,me);break e}xe=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=Ye.payload,me=typeof We=="function"?We.call(Oe,xe,me):We,me==null)break e;xe=te({},xe,me);break e;case 2:yr=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,me=f.effects,me===null?f.effects=[N]:me.push(N))}else Oe={eventTime:Oe,lane:me,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ge===null?(ne=ge=Oe,k=xe):ge=ge.next=Oe,E|=me;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;me=N,N=me.next,me.next=null,f.lastBaseUpdate=me,f.shared.pending=null}}while(!0);if(ge===null&&(k=xe),f.baseState=k,f.firstBaseUpdate=ne,f.lastBaseUpdate=ge,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);Jr|=E,n.lanes=E,n.memoizedState=xe}}function Tp(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],f=u.callback;if(f!==null){if(u.callback=null,u=o,typeof f!="function")throw Error(t(191,f));f.call(u)}}}var Wo={},Ci=vr(Wo),Xo=vr(Wo),jo=vr(Wo);function Zr(n){if(n===Wo)throw Error(t(174));return n}function yc(n,i){switch(Bt(jo,i),Bt(Xo,n),Bt(Ci,Wo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:pe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=pe(i,n)}Vt(Ci),Bt(Ci,i)}function Os(){Vt(Ci),Vt(Xo),Vt(jo)}function wp(n){Zr(jo.current);var i=Zr(Ci.current),o=pe(i,n.type);i!==o&&(Bt(Xo,n),Bt(Ci,o))}function Mc(n){Xo.current===n&&(Vt(Ci),Vt(Xo))}var Yt=vr(0);function al(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ec=[];function Tc(){for(var n=0;n<Ec.length;n++)Ec[n]._workInProgressVersionPrimary=null;Ec.length=0}var ll=b.ReactCurrentDispatcher,wc=b.ReactCurrentBatchConfig,Qr=0,$t=null,sn=null,fn=null,ul=!1,qo=!1,Yo=0,_v=0;function yn(){throw Error(t(321))}function Ac(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ci(n[o],i[o]))return!1;return!0}function Cc(n,i,o,u,f,p){if(Qr=p,$t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ll.current=n===null||n.memoizedState===null?yv:Mv,n=o(u,f),qo){p=0;do{if(qo=!1,Yo=0,25<=p)throw Error(t(301));p+=1,fn=sn=null,i.updateQueue=null,ll.current=Ev,n=o(u,f)}while(qo)}if(ll.current=dl,i=sn!==null&&sn.next!==null,Qr=0,fn=sn=$t=null,ul=!1,i)throw Error(t(300));return n}function Rc(){var n=Yo!==0;return Yo=0,n}function Ri(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?$t.memoizedState=fn=n:fn=fn.next=n,fn}function ni(){if(sn===null){var n=$t.alternate;n=n!==null?n.memoizedState:null}else n=sn.next;var i=fn===null?$t.memoizedState:fn.next;if(i!==null)fn=i,sn=n;else{if(n===null)throw Error(t(310));sn=n,n={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},fn===null?$t.memoizedState=fn=n:fn=fn.next=n}return fn}function $o(n,i){return typeof i=="function"?i(n):i}function bc(n){var i=ni(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=sn,f=u.baseQueue,p=o.pending;if(p!==null){if(f!==null){var E=f.next;f.next=p.next,p.next=E}u.baseQueue=f=p,o.pending=null}if(f!==null){p=f.next,u=u.baseState;var N=E=null,k=null,ne=p;do{var ge=ne.lane;if((Qr&ge)===ge)k!==null&&(k=k.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),u=ne.hasEagerState?ne.eagerState:n(u,ne.action);else{var xe={lane:ge,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};k===null?(N=k=xe,E=u):k=k.next=xe,$t.lanes|=ge,Jr|=ge}ne=ne.next}while(ne!==null&&ne!==p);k===null?E=u:k.next=N,ci(u,i.memoizedState)||(Un=!0),i.memoizedState=u,i.baseState=E,i.baseQueue=k,o.lastRenderedState=u}if(n=o.interleaved,n!==null){f=n;do p=f.lane,$t.lanes|=p,Jr|=p,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Pc(n){var i=ni(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,p=i.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do p=n(p,E.action),E=E.next;while(E!==f);ci(p,i.memoizedState)||(Un=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,u]}function Ap(){}function Cp(n,i){var o=$t,u=ni(),f=i(),p=!ci(u.memoizedState,f);if(p&&(u.memoizedState=f,Un=!0),u=u.queue,Dc(Pp.bind(null,o,u,n),[n]),u.getSnapshot!==i||p||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,Ko(9,bp.bind(null,o,u,f,i),void 0,null),dn===null)throw Error(t(349));(Qr&30)!==0||Rp(o,i,f)}return f}function Rp(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function bp(n,i,o,u){i.value=o,i.getSnapshot=u,Dp(i)&&Lp(n)}function Pp(n,i,o){return o(function(){Dp(i)&&Lp(n)})}function Dp(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ci(n,o)}catch{return!0}}function Lp(n){var i=Xi(n,1);i!==null&&mi(i,n,1,-1)}function Ip(n){var i=Ri();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:n},i.queue=n,n=n.dispatch=Sv.bind(null,$t,n),[i.memoizedState,n]}function Ko(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function Np(){return ni().memoizedState}function cl(n,i,o,u){var f=Ri();$t.flags|=n,f.memoizedState=Ko(1|i,o,void 0,u===void 0?null:u)}function fl(n,i,o,u){var f=ni();u=u===void 0?null:u;var p=void 0;if(sn!==null){var E=sn.memoizedState;if(p=E.destroy,u!==null&&Ac(u,E.deps)){f.memoizedState=Ko(i,o,p,u);return}}$t.flags|=n,f.memoizedState=Ko(1|i,o,p,u)}function Up(n,i){return cl(8390656,8,n,i)}function Dc(n,i){return fl(2048,8,n,i)}function Fp(n,i){return fl(4,2,n,i)}function Op(n,i){return fl(4,4,n,i)}function kp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Bp(n,i,o){return o=o!=null?o.concat([n]):null,fl(4,4,kp.bind(null,i,n),o)}function Lc(){}function zp(n,i){var o=ni();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Ac(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function Vp(n,i){var o=ni();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Ac(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Gp(n,i,o){return(Qr&21)===0?(n.baseState&&(n.baseState=!1,Un=!0),n.memoizedState=o):(ci(o,i)||(o=xn(),$t.lanes|=o,Jr|=o,n.baseState=!0),i)}function vv(n,i){var o=st;st=o!==0&&4>o?o:4,n(!0);var u=wc.transition;wc.transition={};try{n(!1),i()}finally{st=o,wc.transition=u}}function Hp(){return ni().memoizedState}function xv(n,i,o){var u=Ar(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Wp(n))Xp(i,o);else if(o=yp(n,i,o,u),o!==null){var f=Pn();mi(o,n,u,f),jp(o,i,u)}}function Sv(n,i,o){var u=Ar(n),f={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Wp(n))Xp(i,f);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var E=i.lastRenderedState,N=p(E,o);if(f.hasEagerState=!0,f.eagerState=N,ci(N,E)){var k=i.interleaved;k===null?(f.next=f,xc(i)):(f.next=k.next,k.next=f),i.interleaved=f;return}}catch{}finally{}o=yp(n,i,f,u),o!==null&&(f=Pn(),mi(o,n,u,f),jp(o,i,u))}}function Wp(n){var i=n.alternate;return n===$t||i!==null&&i===$t}function Xp(n,i){qo=ul=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function jp(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Dt(n,o)}}var dl={readContext:ti,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},yv={readContext:ti,useCallback:function(n,i){return Ri().memoizedState=[n,i===void 0?null:i],n},useContext:ti,useEffect:Up,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,cl(4194308,4,kp.bind(null,i,n),o)},useLayoutEffect:function(n,i){return cl(4194308,4,n,i)},useInsertionEffect:function(n,i){return cl(4,2,n,i)},useMemo:function(n,i){var o=Ri();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=Ri();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=xv.bind(null,$t,n),[u.memoizedState,n]},useRef:function(n){var i=Ri();return n={current:n},i.memoizedState=n},useState:Ip,useDebugValue:Lc,useDeferredValue:function(n){return Ri().memoizedState=n},useTransition:function(){var n=Ip(!1),i=n[0];return n=vv.bind(null,n[1]),Ri().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=$t,f=Ri();if(Xt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),dn===null)throw Error(t(349));(Qr&30)!==0||Rp(u,i,o)}f.memoizedState=o;var p={value:o,getSnapshot:i};return f.queue=p,Up(Pp.bind(null,u,p,n),[n]),u.flags|=2048,Ko(9,bp.bind(null,u,p,o,i),void 0,null),o},useId:function(){var n=Ri(),i=dn.identifierPrefix;if(Xt){var o=Wi,u=Hi;o=(u&~(1<<32-ke(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Yo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=_v++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Mv={readContext:ti,useCallback:zp,useContext:ti,useEffect:Dc,useImperativeHandle:Bp,useInsertionEffect:Fp,useLayoutEffect:Op,useMemo:Vp,useReducer:bc,useRef:Np,useState:function(){return bc($o)},useDebugValue:Lc,useDeferredValue:function(n){var i=ni();return Gp(i,sn.memoizedState,n)},useTransition:function(){var n=bc($o)[0],i=ni().memoizedState;return[n,i]},useMutableSource:Ap,useSyncExternalStore:Cp,useId:Hp,unstable_isNewReconciler:!1},Ev={readContext:ti,useCallback:zp,useContext:ti,useEffect:Dc,useImperativeHandle:Bp,useInsertionEffect:Fp,useLayoutEffect:Op,useMemo:Vp,useReducer:Pc,useRef:Np,useState:function(){return Pc($o)},useDebugValue:Lc,useDeferredValue:function(n){var i=ni();return sn===null?i.memoizedState=n:Gp(i,sn.memoizedState,n)},useTransition:function(){var n=Pc($o)[0],i=ni().memoizedState;return[n,i]},useMutableSource:Ap,useSyncExternalStore:Cp,useId:Hp,unstable_isNewReconciler:!1};function di(n,i){if(n&&n.defaultProps){i=te({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Ic(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:te({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var hl={isMounted:function(n){return(n=n._reactInternals)?Qn(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Pn(),f=Ar(n),p=ji(u,f);p.payload=i,o!=null&&(p.callback=o),i=Mr(n,p,f),i!==null&&(mi(i,n,f,u),sl(i,n,f))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Pn(),f=Ar(n),p=ji(u,f);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=Mr(n,p,f),i!==null&&(mi(i,n,f,u),sl(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Pn(),u=Ar(n),f=ji(o,u);f.tag=2,i!=null&&(f.callback=i),i=Mr(n,f,u),i!==null&&(mi(i,n,u,o),sl(i,n,u))}};function qp(n,i,o,u,f,p,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,E):i.prototype&&i.prototype.isPureReactComponent?!Fo(o,u)||!Fo(f,p):!0}function Yp(n,i,o){var u=!1,f=xr,p=i.contextType;return typeof p=="object"&&p!==null?p=ti(p):(f=Nn(i)?qr:Sn.current,u=i.contextTypes,p=(u=u!=null)?Ps(n,f):xr),i=new i(o,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=hl,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=p),i}function $p(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&hl.enqueueReplaceState(i,i.state,null)}function Nc(n,i,o,u){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},Sc(n);var p=i.contextType;typeof p=="object"&&p!==null?f.context=ti(p):(p=Nn(i)?qr:Sn.current,f.context=Ps(n,p)),f.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Ic(n,i,p,o),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&hl.enqueueReplaceState(f,f.state,null),ol(n,o,f,u),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function ks(n,i){try{var o="",u=i;do o+=Xe(u),u=u.return;while(u);var f=o}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:f,digest:null}}function Uc(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Fc(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Tv=typeof WeakMap=="function"?WeakMap:Map;function Kp(n,i,o){o=ji(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Sl||(Sl=!0,Zc=u),Fc(n,i)},o}function Zp(n,i,o){o=ji(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;o.payload=function(){return u(f)},o.callback=function(){Fc(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Fc(n,i),typeof u!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function Qp(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new Tv;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(o)||(f.add(o),n=kv.bind(null,n,i,o),i.then(n,n))}function Jp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function em(n,i,o,u,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=ji(-1,1),i.tag=2,Mr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var wv=b.ReactCurrentOwner,Un=!1;function bn(n,i,o,u){i.child=n===null?Sp(i,null,o,u):Ns(i,n.child,o,u)}function tm(n,i,o,u,f){o=o.render;var p=i.ref;return Fs(i,f),u=Cc(n,i,o,u,p,f),o=Rc(),n!==null&&!Un?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,qi(n,i,f)):(Xt&&o&&cc(i),i.flags|=1,bn(n,i,u,f),i.child)}function nm(n,i,o,u,f){if(n===null){var p=o.type;return typeof p=="function"&&!sf(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,im(n,i,p,u,f)):(n=Al(o.type,null,u,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&f)===0){var E=p.memoizedProps;if(o=o.compare,o=o!==null?o:Fo,o(E,u)&&n.ref===i.ref)return qi(n,i,f)}return i.flags|=1,n=Rr(p,u),n.ref=i.ref,n.return=i,i.child=n}function im(n,i,o,u,f){if(n!==null){var p=n.memoizedProps;if(Fo(p,u)&&n.ref===i.ref)if(Un=!1,i.pendingProps=u=p,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Un=!0);else return i.lanes=n.lanes,qi(n,i,f)}return Oc(n,i,o,u,f)}function rm(n,i,o){var u=i.pendingProps,f=u.children,p=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(zs,jn),jn|=o;else{if((o&1073741824)===0)return n=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Bt(zs,jn),jn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,Bt(zs,jn),jn|=u}else p!==null?(u=p.baseLanes|o,i.memoizedState=null):u=o,Bt(zs,jn),jn|=u;return bn(n,i,f,o),i.child}function sm(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Oc(n,i,o,u,f){var p=Nn(o)?qr:Sn.current;return p=Ps(i,p),Fs(i,f),o=Cc(n,i,o,u,p,f),u=Rc(),n!==null&&!Un?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,qi(n,i,f)):(Xt&&u&&cc(i),i.flags|=1,bn(n,i,o,f),i.child)}function om(n,i,o,u,f){if(Nn(o)){var p=!0;Za(i)}else p=!1;if(Fs(i,f),i.stateNode===null)ml(n,i),Yp(i,o,u),Nc(i,o,u,f),u=!0;else if(n===null){var E=i.stateNode,N=i.memoizedProps;E.props=N;var k=E.context,ne=o.contextType;typeof ne=="object"&&ne!==null?ne=ti(ne):(ne=Nn(o)?qr:Sn.current,ne=Ps(i,ne));var ge=o.getDerivedStateFromProps,xe=typeof ge=="function"||typeof E.getSnapshotBeforeUpdate=="function";xe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==u||k!==ne)&&$p(i,E,u,ne),yr=!1;var me=i.memoizedState;E.state=me,ol(i,u,E,f),k=i.memoizedState,N!==u||me!==k||In.current||yr?(typeof ge=="function"&&(Ic(i,o,ge,u),k=i.memoizedState),(N=yr||qp(i,o,N,u,me,k,ne))?(xe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=k),E.props=u,E.state=k,E.context=ne,u=N):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{E=i.stateNode,Mp(n,i),N=i.memoizedProps,ne=i.type===i.elementType?N:di(i.type,N),E.props=ne,xe=i.pendingProps,me=E.context,k=o.contextType,typeof k=="object"&&k!==null?k=ti(k):(k=Nn(o)?qr:Sn.current,k=Ps(i,k));var Oe=o.getDerivedStateFromProps;(ge=typeof Oe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==xe||me!==k)&&$p(i,E,u,k),yr=!1,me=i.memoizedState,E.state=me,ol(i,u,E,f);var We=i.memoizedState;N!==xe||me!==We||In.current||yr?(typeof Oe=="function"&&(Ic(i,o,Oe,u),We=i.memoizedState),(ne=yr||qp(i,o,ne,u,me,We,k)||!1)?(ge||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,We,k),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,We,k)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||N===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=We),E.props=u,E.state=We,E.context=k,u=ne):(typeof E.componentDidUpdate!="function"||N===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),u=!1)}return kc(n,i,o,u,p,f)}function kc(n,i,o,u,f,p){sm(n,i);var E=(i.flags&128)!==0;if(!u&&!E)return f&&fp(i,o,!1),qi(n,i,p);u=i.stateNode,wv.current=i;var N=E&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&E?(i.child=Ns(i,n.child,null,p),i.child=Ns(i,null,N,p)):bn(n,i,N,p),i.memoizedState=u.state,f&&fp(i,o,!0),i.child}function am(n){var i=n.stateNode;i.pendingContext?up(n,i.pendingContext,i.pendingContext!==i.context):i.context&&up(n,i.context,!1),yc(n,i.containerInfo)}function lm(n,i,o,u,f){return Is(),pc(f),i.flags|=256,bn(n,i,o,u),i.child}var Bc={dehydrated:null,treeContext:null,retryLane:0};function zc(n){return{baseLanes:n,cachePool:null,transitions:null}}function um(n,i,o){var u=i.pendingProps,f=Yt.current,p=!1,E=(i.flags&128)!==0,N;if((N=E)||(N=n!==null&&n.memoizedState===null?!1:(f&2)!==0),N?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Bt(Yt,f&1),n===null)return hc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=u.children,n=u.fallback,p?(u=i.mode,p=i.child,E={mode:"hidden",children:E},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=E):p=Cl(E,u,0,null),n=is(n,u,o,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=zc(o),i.memoizedState=Bc,n):Vc(i,E));if(f=n.memoizedState,f!==null&&(N=f.dehydrated,N!==null))return Av(n,i,E,u,N,f,o);if(p){p=u.fallback,E=i.mode,f=n.child,N=f.sibling;var k={mode:"hidden",children:u.children};return(E&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=k,i.deletions=null):(u=Rr(f,k),u.subtreeFlags=f.subtreeFlags&14680064),N!==null?p=Rr(N,p):(p=is(p,E,o,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,E=n.child.memoizedState,E=E===null?zc(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},p.memoizedState=E,p.childLanes=n.childLanes&~o,i.memoizedState=Bc,u}return p=n.child,n=p.sibling,u=Rr(p,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function Vc(n,i){return i=Cl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function pl(n,i,o,u){return u!==null&&pc(u),Ns(i,n.child,null,o),n=Vc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Av(n,i,o,u,f,p,E){if(o)return i.flags&256?(i.flags&=-257,u=Uc(Error(t(422))),pl(n,i,E,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=u.fallback,f=i.mode,u=Cl({mode:"visible",children:u.children},f,0,null),p=is(p,f,E,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,(i.mode&1)!==0&&Ns(i,n.child,null,E),i.child.memoizedState=zc(E),i.memoizedState=Bc,p);if((i.mode&1)===0)return pl(n,i,E,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var N=u.dgst;return u=N,p=Error(t(419)),u=Uc(p,u,void 0),pl(n,i,E,u)}if(N=(E&n.childLanes)!==0,Un||N){if(u=dn,u!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|E))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Xi(n,f),mi(u,n,f,-1))}return rf(),u=Uc(Error(t(421))),pl(n,i,E,u)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=Bv.bind(null,n),f._reactRetry=i,null):(n=p.treeContext,Xn=_r(f.nextSibling),Wn=i,Xt=!0,fi=null,n!==null&&(Jn[ei++]=Hi,Jn[ei++]=Wi,Jn[ei++]=Yr,Hi=n.id,Wi=n.overflow,Yr=i),i=Vc(i,u.children),i.flags|=4096,i)}function cm(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),vc(n.return,i,o)}function Gc(n,i,o,u,f){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=f)}function fm(n,i,o){var u=i.pendingProps,f=u.revealOrder,p=u.tail;if(bn(n,i,u.children,o),u=Yt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&cm(n,o,i);else if(n.tag===19)cm(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Bt(Yt,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)n=o.alternate,n!==null&&al(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Gc(i,!1,f,o,p);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&al(n)===null){i.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}Gc(i,!0,o,null,p);break;case"together":Gc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ml(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function qi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Jr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Rr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Rr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function Cv(n,i,o){switch(i.tag){case 3:am(i),Is();break;case 5:wp(i);break;case 1:Nn(i.type)&&Za(i);break;case 4:yc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;Bt(il,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Bt(Yt,Yt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?um(n,i,o):(Bt(Yt,Yt.current&1),n=qi(n,i,o),n!==null?n.sibling:null);Bt(Yt,Yt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return fm(n,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Bt(Yt,Yt.current),u)break;return null;case 22:case 23:return i.lanes=0,rm(n,i,o)}return qi(n,i,o)}var dm,Hc,hm,pm;dm=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Hc=function(){},hm=function(n,i,o,u){var f=n.memoizedProps;if(f!==u){n=i.stateNode,Zr(Ci.current);var p=null;switch(o){case"input":f=xt(n,f),u=xt(n,u),p=[];break;case"select":f=te({},f,{value:void 0}),u=te({},u,{value:void 0}),p=[];break;case"textarea":f=je(n,f),u=je(n,u),p=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ya)}qe(o,u);var E;o=null;for(ne in f)if(!u.hasOwnProperty(ne)&&f.hasOwnProperty(ne)&&f[ne]!=null)if(ne==="style"){var N=f[ne];for(E in N)N.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(a.hasOwnProperty(ne)?p||(p=[]):(p=p||[]).push(ne,null));for(ne in u){var k=u[ne];if(N=f!=null?f[ne]:void 0,u.hasOwnProperty(ne)&&k!==N&&(k!=null||N!=null))if(ne==="style")if(N){for(E in N)!N.hasOwnProperty(E)||k&&k.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in k)k.hasOwnProperty(E)&&N[E]!==k[E]&&(o||(o={}),o[E]=k[E])}else o||(p||(p=[]),p.push(ne,o)),o=k;else ne==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,N=N?N.__html:void 0,k!=null&&N!==k&&(p=p||[]).push(ne,k)):ne==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(ne,""+k):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(a.hasOwnProperty(ne)?(k!=null&&ne==="onScroll"&&zt("scroll",n),p||N===k||(p=[])):(p=p||[]).push(ne,k))}o&&(p=p||[]).push("style",o);var ne=p;(i.updateQueue=ne)&&(i.flags|=4)}},pm=function(n,i,o,u){o!==u&&(i.flags|=4)};function Zo(n,i){if(!Xt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Mn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function Rv(n,i,o){var u=i.pendingProps;switch(fc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(i),null;case 1:return Nn(i.type)&&Ka(),Mn(i),null;case 3:return u=i.stateNode,Os(),Vt(In),Vt(Sn),Tc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(tl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,fi!==null&&(ef(fi),fi=null))),Hc(n,i),Mn(i),null;case 5:Mc(i);var f=Zr(jo.current);if(o=i.type,n!==null&&i.stateNode!=null)hm(n,i,o,u,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Mn(i),null}if(n=Zr(Ci.current),tl(i)){u=i.stateNode,o=i.type;var p=i.memoizedProps;switch(u[Ai]=i,u[Vo]=p,n=(i.mode&1)!==0,o){case"dialog":zt("cancel",u),zt("close",u);break;case"iframe":case"object":case"embed":zt("load",u);break;case"video":case"audio":for(f=0;f<ko.length;f++)zt(ko[f],u);break;case"source":zt("error",u);break;case"img":case"image":case"link":zt("error",u),zt("load",u);break;case"details":zt("toggle",u);break;case"input":Pt(u,p),zt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},zt("invalid",u);break;case"textarea":P(u,p),zt("invalid",u)}qe(o,p),f=null;for(var E in p)if(p.hasOwnProperty(E)){var N=p[E];E==="children"?typeof N=="string"?u.textContent!==N&&(p.suppressHydrationWarning!==!0&&qa(u.textContent,N,n),f=["children",N]):typeof N=="number"&&u.textContent!==""+N&&(p.suppressHydrationWarning!==!0&&qa(u.textContent,N,n),f=["children",""+N]):a.hasOwnProperty(E)&&N!=null&&E==="onScroll"&&zt("scroll",u)}switch(o){case"input":lt(u),B(u,p,!0);break;case"textarea":lt(u),H(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=Ya)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=E.createElement(o,{is:u.is}):(n=E.createElement(o),o==="select"&&(E=n,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):n=E.createElementNS(n,o),n[Ai]=i,n[Vo]=u,dm(n,i,!1,!1),i.stateNode=n;e:{switch(E=Ae(o,u),o){case"dialog":zt("cancel",n),zt("close",n),f=u;break;case"iframe":case"object":case"embed":zt("load",n),f=u;break;case"video":case"audio":for(f=0;f<ko.length;f++)zt(ko[f],n);f=u;break;case"source":zt("error",n),f=u;break;case"img":case"image":case"link":zt("error",n),zt("load",n),f=u;break;case"details":zt("toggle",n),f=u;break;case"input":Pt(n,u),f=xt(n,u),zt("invalid",n);break;case"option":f=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},f=te({},u,{value:void 0}),zt("invalid",n);break;case"textarea":P(n,u),f=je(n,u),zt("invalid",n);break;default:f=u}qe(o,f),N=f;for(p in N)if(N.hasOwnProperty(p)){var k=N[p];p==="style"?Re(n,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&$e(n,k)):p==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&Ee(n,k):typeof k=="number"&&Ee(n,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?k!=null&&p==="onScroll"&&zt("scroll",n):k!=null&&L(n,p,k,E))}switch(o){case"input":lt(n),B(n,u,!1);break;case"textarea":lt(n),H(n);break;case"option":u.value!=null&&n.setAttribute("value",""+_e(u.value));break;case"select":n.multiple=!!u.multiple,p=u.value,p!=null?St(n,!!u.multiple,p,!1):u.defaultValue!=null&&St(n,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Ya)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Mn(i),null;case 6:if(n&&i.stateNode!=null)pm(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Zr(jo.current),Zr(Ci.current),tl(i)){if(u=i.stateNode,o=i.memoizedProps,u[Ai]=i,(p=u.nodeValue!==o)&&(n=Wn,n!==null))switch(n.tag){case 3:qa(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&qa(u.nodeValue,o,(n.mode&1)!==0)}p&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Ai]=i,i.stateNode=u}return Mn(i),null;case 13:if(Vt(Yt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xt&&Xn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)_p(),Is(),i.flags|=98560,p=!1;else if(p=tl(i),u!==null&&u.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Ai]=i}else Is(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mn(i),p=!1}else fi!==null&&(ef(fi),fi=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Yt.current&1)!==0?on===0&&(on=3):rf())),i.updateQueue!==null&&(i.flags|=4),Mn(i),null);case 4:return Os(),Hc(n,i),n===null&&Bo(i.stateNode.containerInfo),Mn(i),null;case 10:return _c(i.type._context),Mn(i),null;case 17:return Nn(i.type)&&Ka(),Mn(i),null;case 19:if(Vt(Yt),p=i.memoizedState,p===null)return Mn(i),null;if(u=(i.flags&128)!==0,E=p.rendering,E===null)if(u)Zo(p,!1);else{if(on!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=al(n),E!==null){for(i.flags|=128,Zo(p,!1),u=E.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)p=o,n=u,p.flags&=14680066,E=p.alternate,E===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=E.childLanes,p.lanes=E.lanes,p.child=E.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=E.memoizedProps,p.memoizedState=E.memoizedState,p.updateQueue=E.updateQueue,p.type=E.type,n=E.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Bt(Yt,Yt.current&1|2),i.child}n=n.sibling}p.tail!==null&&qt()>Vs&&(i.flags|=128,u=!0,Zo(p,!1),i.lanes=4194304)}else{if(!u)if(n=al(E),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Zo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!E.alternate&&!Xt)return Mn(i),null}else 2*qt()-p.renderingStartTime>Vs&&o!==1073741824&&(i.flags|=128,u=!0,Zo(p,!1),i.lanes=4194304);p.isBackwards?(E.sibling=i.child,i.child=E):(o=p.last,o!==null?o.sibling=E:i.child=E,p.last=E)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=qt(),i.sibling=null,o=Yt.current,Bt(Yt,u?o&1|2:o&1),i):(Mn(i),null);case 22:case 23:return nf(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(jn&1073741824)!==0&&(Mn(i),i.subtreeFlags&6&&(i.flags|=8192)):Mn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function bv(n,i){switch(fc(i),i.tag){case 1:return Nn(i.type)&&Ka(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Os(),Vt(In),Vt(Sn),Tc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Mc(i),null;case 13:if(Vt(Yt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Is()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Vt(Yt),null;case 4:return Os(),null;case 10:return _c(i.type._context),null;case 22:case 23:return nf(),null;case 24:return null;default:return null}}var gl=!1,En=!1,Pv=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Bs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Kt(n,i,u)}else o.current=null}function Wc(n,i,o){try{o()}catch(u){Kt(n,i,u)}}var mm=!1;function Dv(n,i){if(nc=Fa,n=qh(),Yu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var E=0,N=-1,k=-1,ne=0,ge=0,xe=n,me=null;t:for(;;){for(var Oe;xe!==o||f!==0&&xe.nodeType!==3||(N=E+f),xe!==p||u!==0&&xe.nodeType!==3||(k=E+u),xe.nodeType===3&&(E+=xe.nodeValue.length),(Oe=xe.firstChild)!==null;)me=xe,xe=Oe;for(;;){if(xe===n)break t;if(me===o&&++ne===f&&(N=E),me===p&&++ge===u&&(k=E),(Oe=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=Oe}o=N===-1||k===-1?null:{start:N,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(ic={focusedElem:n,selectionRange:o},Fa=!1,ze=i;ze!==null;)if(i=ze,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ze=n;else for(;ze!==null;){i=ze;try{var We=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var Ye=We.memoizedProps,Zt=We.memoizedState,q=i.stateNode,G=q.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:di(i.type,Ye),Zt);q.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Me){Kt(i,i.return,Me)}if(n=i.sibling,n!==null){n.return=i.return,ze=n;break}ze=i.return}return We=mm,mm=!1,We}function Qo(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&n)===n){var p=f.destroy;f.destroy=void 0,p!==void 0&&Wc(i,o,p)}f=f.next}while(f!==u)}}function _l(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Xc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function gm(n){var i=n.alternate;i!==null&&(n.alternate=null,gm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ai],delete i[Vo],delete i[ac],delete i[hv],delete i[pv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function _m(n){return n.tag===5||n.tag===3||n.tag===4}function vm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||_m(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function jc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ya));else if(u!==4&&(n=n.child,n!==null))for(jc(n,i,o),n=n.sibling;n!==null;)jc(n,i,o),n=n.sibling}function qc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(qc(n,i,o),n=n.sibling;n!==null;)qc(n,i,o),n=n.sibling}var gn=null,hi=!1;function Er(n,i,o){for(o=o.child;o!==null;)xm(n,i,o),o=o.sibling}function xm(n,i,o){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Fe,o)}catch{}switch(o.tag){case 5:En||Bs(o,i);case 6:var u=gn,f=hi;gn=null,Er(n,i,o),gn=u,hi=f,gn!==null&&(hi?(n=gn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):gn.removeChild(o.stateNode));break;case 18:gn!==null&&(hi?(n=gn,o=o.stateNode,n.nodeType===8?oc(n.parentNode,o):n.nodeType===1&&oc(n,o),Po(n)):oc(gn,o.stateNode));break;case 4:u=gn,f=hi,gn=o.stateNode.containerInfo,hi=!0,Er(n,i,o),gn=u,hi=f;break;case 0:case 11:case 14:case 15:if(!En&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var p=f,E=p.destroy;p=p.tag,E!==void 0&&((p&2)!==0||(p&4)!==0)&&Wc(o,i,E),f=f.next}while(f!==u)}Er(n,i,o);break;case 1:if(!En&&(Bs(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(N){Kt(o,i,N)}Er(n,i,o);break;case 21:Er(n,i,o);break;case 22:o.mode&1?(En=(u=En)||o.memoizedState!==null,Er(n,i,o),En=u):Er(n,i,o);break;default:Er(n,i,o)}}function Sm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new Pv),i.forEach(function(u){var f=zv.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}}function pi(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u];try{var p=n,E=i,N=E;e:for(;N!==null;){switch(N.tag){case 5:gn=N.stateNode,hi=!1;break e;case 3:gn=N.stateNode.containerInfo,hi=!0;break e;case 4:gn=N.stateNode.containerInfo,hi=!0;break e}N=N.return}if(gn===null)throw Error(t(160));xm(p,E,f),gn=null,hi=!1;var k=f.alternate;k!==null&&(k.return=null),f.return=null}catch(ne){Kt(f,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ym(i,n),i=i.sibling}function ym(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(pi(i,n),bi(n),u&4){try{Qo(3,n,n.return),_l(3,n)}catch(Ye){Kt(n,n.return,Ye)}try{Qo(5,n,n.return)}catch(Ye){Kt(n,n.return,Ye)}}break;case 1:pi(i,n),bi(n),u&512&&o!==null&&Bs(o,o.return);break;case 5:if(pi(i,n),bi(n),u&512&&o!==null&&Bs(o,o.return),n.flags&32){var f=n.stateNode;try{Ee(f,"")}catch(Ye){Kt(n,n.return,Ye)}}if(u&4&&(f=n.stateNode,f!=null)){var p=n.memoizedProps,E=o!==null?o.memoizedProps:p,N=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{N==="input"&&p.type==="radio"&&p.name!=null&&ut(f,p),Ae(N,E);var ne=Ae(N,p);for(E=0;E<k.length;E+=2){var ge=k[E],xe=k[E+1];ge==="style"?Re(f,xe):ge==="dangerouslySetInnerHTML"?$e(f,xe):ge==="children"?Ee(f,xe):L(f,ge,xe,ne)}switch(N){case"input":Ht(f,p);break;case"textarea":M(f,p);break;case"select":var me=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var Oe=p.value;Oe!=null?St(f,!!p.multiple,Oe,!1):me!==!!p.multiple&&(p.defaultValue!=null?St(f,!!p.multiple,p.defaultValue,!0):St(f,!!p.multiple,p.multiple?[]:"",!1))}f[Vo]=p}catch(Ye){Kt(n,n.return,Ye)}}break;case 6:if(pi(i,n),bi(n),u&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,p=n.memoizedProps;try{f.nodeValue=p}catch(Ye){Kt(n,n.return,Ye)}}break;case 3:if(pi(i,n),bi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Po(i.containerInfo)}catch(Ye){Kt(n,n.return,Ye)}break;case 4:pi(i,n),bi(n);break;case 13:pi(i,n),bi(n),f=n.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(Kc=qt())),u&4&&Sm(n);break;case 22:if(ge=o!==null&&o.memoizedState!==null,n.mode&1?(En=(ne=En)||ge,pi(i,n),En=ne):pi(i,n),bi(n),u&8192){if(ne=n.memoizedState!==null,(n.stateNode.isHidden=ne)&&!ge&&(n.mode&1)!==0)for(ze=n,ge=n.child;ge!==null;){for(xe=ze=ge;ze!==null;){switch(me=ze,Oe=me.child,me.tag){case 0:case 11:case 14:case 15:Qo(4,me,me.return);break;case 1:Bs(me,me.return);var We=me.stateNode;if(typeof We.componentWillUnmount=="function"){u=me,o=me.return;try{i=u,We.props=i.memoizedProps,We.state=i.memoizedState,We.componentWillUnmount()}catch(Ye){Kt(u,o,Ye)}}break;case 5:Bs(me,me.return);break;case 22:if(me.memoizedState!==null){Tm(xe);continue}}Oe!==null?(Oe.return=me,ze=Oe):Tm(xe)}ge=ge.sibling}e:for(ge=null,xe=n;;){if(xe.tag===5){if(ge===null){ge=xe;try{f=xe.stateNode,ne?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(N=xe.stateNode,k=xe.memoizedProps.style,E=k!=null&&k.hasOwnProperty("display")?k.display:null,N.style.display=Se("display",E))}catch(Ye){Kt(n,n.return,Ye)}}}else if(xe.tag===6){if(ge===null)try{xe.stateNode.nodeValue=ne?"":xe.memoizedProps}catch(Ye){Kt(n,n.return,Ye)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;ge===xe&&(ge=null),xe=xe.return}ge===xe&&(ge=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:pi(i,n),bi(n),u&4&&Sm(n);break;case 21:break;default:pi(i,n),bi(n)}}function bi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(_m(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(Ee(f,""),u.flags&=-33);var p=vm(n);qc(n,p,f);break;case 3:case 4:var E=u.stateNode.containerInfo,N=vm(n);jc(n,N,E);break;default:throw Error(t(161))}}catch(k){Kt(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Lv(n,i,o){ze=n,Mm(n)}function Mm(n,i,o){for(var u=(n.mode&1)!==0;ze!==null;){var f=ze,p=f.child;if(f.tag===22&&u){var E=f.memoizedState!==null||gl;if(!E){var N=f.alternate,k=N!==null&&N.memoizedState!==null||En;N=gl;var ne=En;if(gl=E,(En=k)&&!ne)for(ze=f;ze!==null;)E=ze,k=E.child,E.tag===22&&E.memoizedState!==null?wm(f):k!==null?(k.return=E,ze=k):wm(f);for(;p!==null;)ze=p,Mm(p),p=p.sibling;ze=f,gl=N,En=ne}Em(n)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,ze=p):Em(n)}}function Em(n){for(;ze!==null;){var i=ze;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:En||_l(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!En)if(o===null)u.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:di(i.type,o.memoizedProps);u.componentDidUpdate(f,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Tp(i,p,u);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Tp(i,E,o)}break;case 5:var N=i.stateNode;if(o===null&&i.flags&4){o=N;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var ge=ne.memoizedState;if(ge!==null){var xe=ge.dehydrated;xe!==null&&Po(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}En||i.flags&512&&Xc(i)}catch(me){Kt(i,i.return,me)}}if(i===n){ze=null;break}if(o=i.sibling,o!==null){o.return=i.return,ze=o;break}ze=i.return}}function Tm(n){for(;ze!==null;){var i=ze;if(i===n){ze=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ze=o;break}ze=i.return}}function wm(n){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{_l(4,i)}catch(k){Kt(i,o,k)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(k){Kt(i,f,k)}}var p=i.return;try{Xc(i)}catch(k){Kt(i,p,k)}break;case 5:var E=i.return;try{Xc(i)}catch(k){Kt(i,E,k)}}}catch(k){Kt(i,i.return,k)}if(i===n){ze=null;break}var N=i.sibling;if(N!==null){N.return=i.return,ze=N;break}ze=i.return}}var Iv=Math.ceil,vl=b.ReactCurrentDispatcher,Yc=b.ReactCurrentOwner,ii=b.ReactCurrentBatchConfig,Et=0,dn=null,Jt=null,_n=0,jn=0,zs=vr(0),on=0,Jo=null,Jr=0,xl=0,$c=0,ea=null,Fn=null,Kc=0,Vs=1/0,Yi=null,Sl=!1,Zc=null,Tr=null,yl=!1,wr=null,Ml=0,ta=0,Qc=null,El=-1,Tl=0;function Pn(){return(Et&6)!==0?qt():El!==-1?El:El=qt()}function Ar(n){return(n.mode&1)===0?1:(Et&2)!==0&&_n!==0?_n&-_n:gv.transition!==null?(Tl===0&&(Tl=xn()),Tl):(n=st,n!==0||(n=window.event,n=n===void 0?16:Ch(n.type)),n)}function mi(n,i,o,u){if(50<ta)throw ta=0,Qc=null,Error(t(185));rn(n,o,u),((Et&2)===0||n!==dn)&&(n===dn&&((Et&2)===0&&(xl|=o),on===4&&Cr(n,_n)),On(n,u),o===1&&Et===0&&(i.mode&1)===0&&(Vs=qt()+500,Qa&&Sr()))}function On(n,i){var o=n.callbackNode;Rt(n,i);var u=wt(n,n===dn?_n:0);if(u===0)o!==null&&Ia(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&Ia(o),i===1)n.tag===0?mv(Cm.bind(null,n)):dp(Cm.bind(null,n)),fv(function(){(Et&6)===0&&Sr()}),o=null;else{switch(Rn(u)){case 1:o=W;break;case 4:o=ie;break;case 16:o=ee;break;case 536870912:o=be;break;default:o=ee}o=Um(o,Am.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Am(n,i){if(El=-1,Tl=0,(Et&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Gs()&&n.callbackNode!==o)return null;var u=wt(n,n===dn?_n:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=wl(n,u);else{i=u;var f=Et;Et|=2;var p=bm();(dn!==n||_n!==i)&&(Yi=null,Vs=qt()+500,ts(n,i));do try{Fv();break}catch(N){Rm(n,N)}while(!0);gc(),vl.current=p,Et=f,Jt!==null?i=0:(dn=null,_n=0,i=on)}if(i!==0){if(i===2&&(f=_t(n),f!==0&&(u=f,i=Jc(n,f))),i===1)throw o=Jo,ts(n,0),Cr(n,u),On(n,qt()),o;if(i===6)Cr(n,u);else{if(f=n.current.alternate,(u&30)===0&&!Nv(f)&&(i=wl(n,u),i===2&&(p=_t(n),p!==0&&(u=p,i=Jc(n,p))),i===1))throw o=Jo,ts(n,0),Cr(n,u),On(n,qt()),o;switch(n.finishedWork=f,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:ns(n,Fn,Yi);break;case 3:if(Cr(n,u),(u&130023424)===u&&(i=Kc+500-qt(),10<i)){if(wt(n,0)!==0)break;if(f=n.suspendedLanes,(f&u)!==u){Pn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=sc(ns.bind(null,n,Fn,Yi),i);break}ns(n,Fn,Yi);break;case 4:if(Cr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,f=-1;0<u;){var E=31-ke(u);p=1<<E,E=i[E],E>f&&(f=E),u&=~p}if(u=f,u=qt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Iv(u/1960))-u,10<u){n.timeoutHandle=sc(ns.bind(null,n,Fn,Yi),u);break}ns(n,Fn,Yi);break;case 5:ns(n,Fn,Yi);break;default:throw Error(t(329))}}}return On(n,qt()),n.callbackNode===o?Am.bind(null,n):null}function Jc(n,i){var o=ea;return n.current.memoizedState.isDehydrated&&(ts(n,i).flags|=256),n=wl(n,i),n!==2&&(i=Fn,Fn=o,i!==null&&ef(i)),n}function ef(n){Fn===null?Fn=n:Fn.push.apply(Fn,n)}function Nv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var f=o[u],p=f.getSnapshot;f=f.value;try{if(!ci(p(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Cr(n,i){for(i&=~$c,i&=~xl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-ke(i),u=1<<o;n[o]=-1,i&=~u}}function Cm(n){if((Et&6)!==0)throw Error(t(327));Gs();var i=wt(n,0);if((i&1)===0)return On(n,qt()),null;var o=wl(n,i);if(n.tag!==0&&o===2){var u=_t(n);u!==0&&(i=u,o=Jc(n,u))}if(o===1)throw o=Jo,ts(n,0),Cr(n,i),On(n,qt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ns(n,Fn,Yi),On(n,qt()),null}function tf(n,i){var o=Et;Et|=1;try{return n(i)}finally{Et=o,Et===0&&(Vs=qt()+500,Qa&&Sr())}}function es(n){wr!==null&&wr.tag===0&&(Et&6)===0&&Gs();var i=Et;Et|=1;var o=ii.transition,u=st;try{if(ii.transition=null,st=1,n)return n()}finally{st=u,ii.transition=o,Et=i,(Et&6)===0&&Sr()}}function nf(){jn=zs.current,Vt(zs)}function ts(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,cv(o)),Jt!==null)for(o=Jt.return;o!==null;){var u=o;switch(fc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ka();break;case 3:Os(),Vt(In),Vt(Sn),Tc();break;case 5:Mc(u);break;case 4:Os();break;case 13:Vt(Yt);break;case 19:Vt(Yt);break;case 10:_c(u.type._context);break;case 22:case 23:nf()}o=o.return}if(dn=n,Jt=n=Rr(n.current,null),_n=jn=i,on=0,Jo=null,$c=xl=Jr=0,Fn=ea=null,Kr!==null){for(i=0;i<Kr.length;i++)if(o=Kr[i],u=o.interleaved,u!==null){o.interleaved=null;var f=u.next,p=o.pending;if(p!==null){var E=p.next;p.next=f,u.next=E}o.pending=u}Kr=null}return n}function Rm(n,i){do{var o=Jt;try{if(gc(),ll.current=dl,ul){for(var u=$t.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}ul=!1}if(Qr=0,fn=sn=$t=null,qo=!1,Yo=0,Yc.current=null,o===null||o.return===null){on=1,Jo=i,Jt=null;break}e:{var p=n,E=o.return,N=o,k=i;if(i=_n,N.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var ne=k,ge=N,xe=ge.tag;if((ge.mode&1)===0&&(xe===0||xe===11||xe===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Oe=Jp(E);if(Oe!==null){Oe.flags&=-257,em(Oe,E,N,p,i),Oe.mode&1&&Qp(p,ne,i),i=Oe,k=ne;var We=i.updateQueue;if(We===null){var Ye=new Set;Ye.add(k),i.updateQueue=Ye}else We.add(k);break e}else{if((i&1)===0){Qp(p,ne,i),rf();break e}k=Error(t(426))}}else if(Xt&&N.mode&1){var Zt=Jp(E);if(Zt!==null){(Zt.flags&65536)===0&&(Zt.flags|=256),em(Zt,E,N,p,i),pc(ks(k,N));break e}}p=k=ks(k,N),on!==4&&(on=2),ea===null?ea=[p]:ea.push(p),p=E;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var q=Kp(p,k,i);Ep(p,q);break e;case 1:N=k;var G=p.type,K=p.stateNode;if((p.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(Tr===null||!Tr.has(K)))){p.flags|=65536,i&=-i,p.lanes|=i;var Me=Zp(p,N,i);Ep(p,Me);break e}}p=p.return}while(p!==null)}Dm(o)}catch(Ke){i=Ke,Jt===o&&o!==null&&(Jt=o=o.return);continue}break}while(!0)}function bm(){var n=vl.current;return vl.current=dl,n===null?dl:n}function rf(){(on===0||on===3||on===2)&&(on=4),dn===null||(Jr&268435455)===0&&(xl&268435455)===0||Cr(dn,_n)}function wl(n,i){var o=Et;Et|=2;var u=bm();(dn!==n||_n!==i)&&(Yi=null,ts(n,i));do try{Uv();break}catch(f){Rm(n,f)}while(!0);if(gc(),Et=o,vl.current=u,Jt!==null)throw Error(t(261));return dn=null,_n=0,on}function Uv(){for(;Jt!==null;)Pm(Jt)}function Fv(){for(;Jt!==null&&!Nu();)Pm(Jt)}function Pm(n){var i=Nm(n.alternate,n,jn);n.memoizedProps=n.pendingProps,i===null?Dm(n):Jt=i,Yc.current=null}function Dm(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=Rv(o,i,jn),o!==null){Jt=o;return}}else{if(o=bv(o,i),o!==null){o.flags&=32767,Jt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{on=6,Jt=null;return}}if(i=i.sibling,i!==null){Jt=i;return}Jt=i=n}while(i!==null);on===0&&(on=5)}function ns(n,i,o){var u=st,f=ii.transition;try{ii.transition=null,st=1,Ov(n,i,o,u)}finally{ii.transition=f,st=u}return null}function Ov(n,i,o,u){do Gs();while(wr!==null);if((Et&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=o.lanes|o.childLanes;if(Xr(n,p),n===dn&&(Jt=dn=null,_n=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||yl||(yl=!0,Um(ee,function(){return Gs(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=ii.transition,ii.transition=null;var E=st;st=1;var N=Et;Et|=4,Yc.current=null,Dv(n,o),ym(o,n),iv(ic),Fa=!!nc,ic=nc=null,n.current=o,Lv(o),Uu(),Et=N,st=E,ii.transition=p}else n.current=o;if(yl&&(yl=!1,wr=n,Ml=f),p=n.pendingLanes,p===0&&(Tr=null),Ge(o.stateNode),On(n,qt()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)f=i[o],u(f.value,{componentStack:f.stack,digest:f.digest});if(Sl)throw Sl=!1,n=Zc,Zc=null,n;return(Ml&1)!==0&&n.tag!==0&&Gs(),p=n.pendingLanes,(p&1)!==0?n===Qc?ta++:(ta=0,Qc=n):ta=0,Sr(),null}function Gs(){if(wr!==null){var n=Rn(Ml),i=ii.transition,o=st;try{if(ii.transition=null,st=16>n?16:n,wr===null)var u=!1;else{if(n=wr,wr=null,Ml=0,(Et&6)!==0)throw Error(t(331));var f=Et;for(Et|=4,ze=n.current;ze!==null;){var p=ze,E=p.child;if((ze.flags&16)!==0){var N=p.deletions;if(N!==null){for(var k=0;k<N.length;k++){var ne=N[k];for(ze=ne;ze!==null;){var ge=ze;switch(ge.tag){case 0:case 11:case 15:Qo(8,ge,p)}var xe=ge.child;if(xe!==null)xe.return=ge,ze=xe;else for(;ze!==null;){ge=ze;var me=ge.sibling,Oe=ge.return;if(gm(ge),ge===ne){ze=null;break}if(me!==null){me.return=Oe,ze=me;break}ze=Oe}}}var We=p.alternate;if(We!==null){var Ye=We.child;if(Ye!==null){We.child=null;do{var Zt=Ye.sibling;Ye.sibling=null,Ye=Zt}while(Ye!==null)}}ze=p}}if((p.subtreeFlags&2064)!==0&&E!==null)E.return=p,ze=E;else e:for(;ze!==null;){if(p=ze,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Qo(9,p,p.return)}var q=p.sibling;if(q!==null){q.return=p.return,ze=q;break e}ze=p.return}}var G=n.current;for(ze=G;ze!==null;){E=ze;var K=E.child;if((E.subtreeFlags&2064)!==0&&K!==null)K.return=E,ze=K;else e:for(E=G;ze!==null;){if(N=ze,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:_l(9,N)}}catch(Ke){Kt(N,N.return,Ke)}if(N===E){ze=null;break e}var Me=N.sibling;if(Me!==null){Me.return=N.return,ze=Me;break e}ze=N.return}}if(Et=f,Sr(),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Fe,n)}catch{}u=!0}return u}finally{st=o,ii.transition=i}}return!1}function Lm(n,i,o){i=ks(o,i),i=Kp(n,i,1),n=Mr(n,i,1),i=Pn(),n!==null&&(rn(n,1,i),On(n,i))}function Kt(n,i,o){if(n.tag===3)Lm(n,n,o);else for(;i!==null;){if(i.tag===3){Lm(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Tr===null||!Tr.has(u))){n=ks(o,n),n=Zp(i,n,1),i=Mr(i,n,1),n=Pn(),i!==null&&(rn(i,1,n),On(i,n));break}}i=i.return}}function kv(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Pn(),n.pingedLanes|=n.suspendedLanes&o,dn===n&&(_n&o)===o&&(on===4||on===3&&(_n&130023424)===_n&&500>qt()-Kc?ts(n,0):$c|=o),On(n,i)}function Im(n,i){i===0&&((n.mode&1)===0?i=1:(i=kt,kt<<=1,(kt&130023424)===0&&(kt=4194304)));var o=Pn();n=Xi(n,i),n!==null&&(rn(n,i,o),On(n,o))}function Bv(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Im(n,o)}function zv(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Im(n,o)}var Nm;Nm=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||In.current)Un=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Un=!1,Cv(n,i,o);Un=(n.flags&131072)!==0}else Un=!1,Xt&&(i.flags&1048576)!==0&&hp(i,el,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;ml(n,i),n=i.pendingProps;var f=Ps(i,Sn.current);Fs(i,o),f=Cc(null,i,u,n,f,o);var p=Rc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Nn(u)?(p=!0,Za(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Sc(i),f.updater=hl,i.stateNode=f,f._reactInternals=i,Nc(i,u,n,o),i=kc(null,i,u,!0,p,o)):(i.tag=0,Xt&&p&&cc(i),bn(null,i,f,o),i=i.child),i;case 16:u=i.elementType;e:{switch(ml(n,i),n=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=Gv(u),n=di(u,n),f){case 0:i=Oc(null,i,u,n,o);break e;case 1:i=om(null,i,u,n,o);break e;case 11:i=tm(null,i,u,n,o);break e;case 14:i=nm(null,i,u,di(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:di(u,f),Oc(n,i,u,f,o);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:di(u,f),om(n,i,u,f,o);case 3:e:{if(am(i),n===null)throw Error(t(387));u=i.pendingProps,p=i.memoizedState,f=p.element,Mp(n,i),ol(i,u,null,o);var E=i.memoizedState;if(u=E.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=ks(Error(t(423)),i),i=lm(n,i,u,o,f);break e}else if(u!==f){f=ks(Error(t(424)),i),i=lm(n,i,u,o,f);break e}else for(Xn=_r(i.stateNode.containerInfo.firstChild),Wn=i,Xt=!0,fi=null,o=Sp(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Is(),u===f){i=qi(n,i,o);break e}bn(n,i,u,o)}i=i.child}return i;case 5:return wp(i),n===null&&hc(i),u=i.type,f=i.pendingProps,p=n!==null?n.memoizedProps:null,E=f.children,rc(u,f)?E=null:p!==null&&rc(u,p)&&(i.flags|=32),sm(n,i),bn(n,i,E,o),i.child;case 6:return n===null&&hc(i),null;case 13:return um(n,i,o);case 4:return yc(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Ns(i,null,u,o):bn(n,i,u,o),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:di(u,f),tm(n,i,u,f,o);case 7:return bn(n,i,i.pendingProps,o),i.child;case 8:return bn(n,i,i.pendingProps.children,o),i.child;case 12:return bn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,p=i.memoizedProps,E=f.value,Bt(il,u._currentValue),u._currentValue=E,p!==null)if(ci(p.value,E)){if(p.children===f.children&&!In.current){i=qi(n,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var N=p.dependencies;if(N!==null){E=p.child;for(var k=N.firstContext;k!==null;){if(k.context===u){if(p.tag===1){k=ji(-1,o&-o),k.tag=2;var ne=p.updateQueue;if(ne!==null){ne=ne.shared;var ge=ne.pending;ge===null?k.next=k:(k.next=ge.next,ge.next=k),ne.pending=k}}p.lanes|=o,k=p.alternate,k!==null&&(k.lanes|=o),vc(p.return,o,i),N.lanes|=o;break}k=k.next}}else if(p.tag===10)E=p.type===i.type?null:p.child;else if(p.tag===18){if(E=p.return,E===null)throw Error(t(341));E.lanes|=o,N=E.alternate,N!==null&&(N.lanes|=o),vc(E,o,i),E=p.sibling}else E=p.child;if(E!==null)E.return=p;else for(E=p;E!==null;){if(E===i){E=null;break}if(p=E.sibling,p!==null){p.return=E.return,E=p;break}E=E.return}p=E}bn(n,i,f.children,o),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,Fs(i,o),f=ti(f),u=u(f),i.flags|=1,bn(n,i,u,o),i.child;case 14:return u=i.type,f=di(u,i.pendingProps),f=di(u.type,f),nm(n,i,u,f,o);case 15:return im(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:di(u,f),ml(n,i),i.tag=1,Nn(u)?(n=!0,Za(i)):n=!1,Fs(i,o),Yp(i,u,f),Nc(i,u,f,o),kc(null,i,u,!0,n,o);case 19:return fm(n,i,o);case 22:return rm(n,i,o)}throw Error(t(156,i.tag))};function Um(n,i){return La(n,i)}function Vv(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(n,i,o,u){return new Vv(n,i,o,u)}function sf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Gv(n){if(typeof n=="function")return sf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===se)return 11;if(n===ce)return 14}return 2}function Rr(n,i){var o=n.alternate;return o===null?(o=ri(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Al(n,i,o,u,f,p){var E=2;if(u=n,typeof n=="function")sf(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case I:return is(o.children,f,p,i);case Y:E=8,f|=8;break;case C:return n=ri(12,o,i,f|2),n.elementType=C,n.lanes=p,n;case Z:return n=ri(13,o,i,f),n.elementType=Z,n.lanes=p,n;case fe:return n=ri(19,o,i,f),n.elementType=fe,n.lanes=p,n;case j:return Cl(o,f,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:E=10;break e;case V:E=9;break e;case se:E=11;break e;case ce:E=14;break e;case oe:E=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ri(E,o,i,f),i.elementType=n,i.type=u,i.lanes=p,i}function is(n,i,o,u){return n=ri(7,n,u,i),n.lanes=o,n}function Cl(n,i,o,u){return n=ri(22,n,u,i),n.elementType=j,n.lanes=o,n.stateNode={isHidden:!1},n}function of(n,i,o){return n=ri(6,n,null,i),n.lanes=o,n}function af(n,i,o){return i=ri(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Hv(n,i,o,u,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ti(0),this.expirationTimes=Ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ti(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function lf(n,i,o,u,f,p,E,N,k){return n=new Hv(n,i,o,N,k),i===1?(i=1,p===!0&&(i|=8)):i=0,p=ri(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sc(p),n}function Wv(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Fm(n){if(!n)return xr;n=n._reactInternals;e:{if(Qn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Nn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Nn(o))return cp(n,o,i)}return i}function Om(n,i,o,u,f,p,E,N,k){return n=lf(o,u,!0,n,f,p,E,N,k),n.context=Fm(null),o=n.current,u=Pn(),f=Ar(o),p=ji(u,f),p.callback=i??null,Mr(o,p,f),n.current.lanes=f,rn(n,f,u),On(n,u),n}function Rl(n,i,o,u){var f=i.current,p=Pn(),E=Ar(f);return o=Fm(o),i.context===null?i.context=o:i.pendingContext=o,i=ji(p,E),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Mr(f,i,E),n!==null&&(mi(n,f,E,p),sl(n,f,E)),E}function bl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function km(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function uf(n,i){km(n,i),(n=n.alternate)&&km(n,i)}function Xv(){return null}var Bm=typeof reportError=="function"?reportError:function(n){console.error(n)};function cf(n){this._internalRoot=n}Pl.prototype.render=cf.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Rl(n,i,null,null)},Pl.prototype.unmount=cf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;es(function(){Rl(null,n,null,null)}),i[Vi]=null}};function Pl(n){this._internalRoot=n}Pl.prototype.unstable_scheduleHydration=function(n){if(n){var i=wi();n={blockedOn:null,target:n,priority:i};for(var o=0;o<pr.length&&i!==0&&i<pr[o].priority;o++);pr.splice(o,0,n),o===0&&wh(n)}};function ff(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Dl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function zm(){}function jv(n,i,o,u,f){if(f){if(typeof u=="function"){var p=u;u=function(){var ne=bl(E);p.call(ne)}}var E=Om(i,u,n,0,null,!1,!1,"",zm);return n._reactRootContainer=E,n[Vi]=E.current,Bo(n.nodeType===8?n.parentNode:n),es(),E}for(;f=n.lastChild;)n.removeChild(f);if(typeof u=="function"){var N=u;u=function(){var ne=bl(k);N.call(ne)}}var k=lf(n,0,!1,null,null,!1,!1,"",zm);return n._reactRootContainer=k,n[Vi]=k.current,Bo(n.nodeType===8?n.parentNode:n),es(function(){Rl(i,k,o,u)}),k}function Ll(n,i,o,u,f){var p=o._reactRootContainer;if(p){var E=p;if(typeof f=="function"){var N=f;f=function(){var k=bl(E);N.call(k)}}Rl(i,E,n,f)}else E=jv(o,i,n,f,u);return bl(E)}un=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Ot(i.pendingLanes);o!==0&&(Dt(i,o|1),On(i,qt()),(Et&6)===0&&(Vs=qt()+500,Sr()))}break;case 13:es(function(){var u=Xi(n,1);if(u!==null){var f=Pn();mi(u,n,1,f)}}),uf(n,1)}},cn=function(n){if(n.tag===13){var i=Xi(n,134217728);if(i!==null){var o=Pn();mi(i,n,134217728,o)}uf(n,134217728)}},Ss=function(n){if(n.tag===13){var i=Ar(n),o=Xi(n,i);if(o!==null){var u=Pn();mi(o,n,i,u)}uf(n,i)}},wi=function(){return st},Eh=function(n,i){var o=st;try{return st=n,i()}finally{st=o}},Le=function(n,i,o){switch(i){case"input":if(Ht(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var f=$a(u);if(!f)throw Error(t(90));bt(u),Ht(u,f)}}}break;case"textarea":M(n,o);break;case"select":i=o.value,i!=null&&St(n,!!o.multiple,i,!1)}},it=tf,It=es;var qv={usingClientEntryPoint:!1,Events:[Go,Rs,$a,he,Ce,tf]},na={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yv={bundleType:na.bundleType,version:na.version,rendererPackageName:na.rendererPackageName,rendererConfig:na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=wo(n),n===null?null:n.stateNode},findFiberByHostInstance:na.findFiberByHostInstance||Xv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Il.isDisabled&&Il.supportsFiber)try{Fe=Il.inject(Yv),Te=Il}catch{}}return kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qv,kn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ff(i))throw Error(t(200));return Wv(n,i,null,o)},kn.createRoot=function(n,i){if(!ff(n))throw Error(t(299));var o=!1,u="",f=Bm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=lf(n,1,!1,null,null,o,!1,u,f),n[Vi]=i.current,Bo(n.nodeType===8?n.parentNode:n),new cf(i)},kn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=wo(i),n=n===null?null:n.stateNode,n},kn.flushSync=function(n){return es(n)},kn.hydrate=function(n,i,o){if(!Dl(i))throw Error(t(200));return Ll(null,n,i,!0,o)},kn.hydrateRoot=function(n,i,o){if(!ff(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,f=!1,p="",E=Bm;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Om(i,null,n,1,o??null,f,!1,p,E),n[Vi]=i.current,Bo(n),u)for(n=0;n<u.length;n++)o=u[n],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new Pl(i)},kn.render=function(n,i,o){if(!Dl(i))throw Error(t(200));return Ll(null,n,i,!1,o)},kn.unmountComponentAtNode=function(n){if(!Dl(n))throw Error(t(40));return n._reactRootContainer?(es(function(){Ll(null,null,n,!1,function(){n._reactRootContainer=null,n[Vi]=null})}),!0):!1},kn.unstable_batchedUpdates=tf,kn.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!Dl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ll(n,i,o,!1,u)},kn.version="18.3.1-next-f1338f8080-20240426",kn}var Ym;function nx(){if(Ym)return pf.exports;Ym=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),pf.exports=tx(),pf.exports}var $m;function ix(){if($m)return Nl;$m=1;var r=nx();return Nl.createRoot=r.createRoot,Nl.hydrateRoot=r.hydrateRoot,Nl}var rx=ix(),zn=function(){return zn=Object.assign||function(e){for(var t,s=1,a=arguments.length;s<a;s++){t=arguments[s];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},zn.apply(this,arguments)};function gu(r,e,t){if(t||arguments.length===2)for(var s=0,a=e.length,l;s<a;s++)(l||!(s in e))&&(l||(l=Array.prototype.slice.call(e,0,s)),l[s]=e[s]);return r.concat(l||Array.prototype.slice.call(e))}var Gt="-ms-",ma="-moz-",Lt="-webkit-",u0="comm",Eu="rule",sh="decl",sx="@import",c0="@keyframes",ox="@layer",f0=Math.abs,oh=String.fromCharCode,td=Object.assign;function ax(r,e){return mn(r,0)^45?(((e<<2^mn(r,0))<<2^mn(r,1))<<2^mn(r,2))<<2^mn(r,3):0}function d0(r){return r.trim()}function er(r,e){return(r=e.exec(r))?r[0]:r}function ht(r,e,t){return r.replace(e,t)}function ru(r,e,t){return r.indexOf(e,t)}function mn(r,e){return r.charCodeAt(e)|0}function ao(r,e,t){return r.slice(e,t)}function Di(r){return r.length}function h0(r){return r.length}function fa(r,e){return e.push(r),r}function lx(r,e){return r.map(e).join("")}function Km(r,e){return r.filter(function(t){return!er(t,e)})}var Tu=1,lo=1,p0=0,li=0,tn=0,vo="";function wu(r,e,t,s,a,l,c,d){return{value:r,root:e,parent:t,type:s,props:a,children:l,line:Tu,column:lo,length:c,return:"",siblings:d}}function Fr(r,e){return td(wu("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},e)}function Hs(r){for(;r.root;)r=Fr(r.root,{children:[r]});fa(r,r.siblings)}function ux(){return tn}function cx(){return tn=li>0?mn(vo,--li):0,lo--,tn===10&&(lo=1,Tu--),tn}function Mi(){return tn=li<p0?mn(vo,li++):0,lo++,tn===10&&(lo=1,Tu++),tn}function gs(){return mn(vo,li)}function su(){return li}function Au(r,e){return ao(vo,r,e)}function nd(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fx(r){return Tu=lo=1,p0=Di(vo=r),li=0,[]}function dx(r){return vo="",r}function _f(r){return d0(Au(li-1,id(r===91?r+2:r===40?r+1:r)))}function hx(r){for(;(tn=gs())&&tn<33;)Mi();return nd(r)>2||nd(tn)>3?"":" "}function px(r,e){for(;--e&&Mi()&&!(tn<48||tn>102||tn>57&&tn<65||tn>70&&tn<97););return Au(r,su()+(e<6&&gs()==32&&Mi()==32))}function id(r){for(;Mi();)switch(tn){case r:return li;case 34:case 39:r!==34&&r!==39&&id(tn);break;case 40:r===41&&id(r);break;case 92:Mi();break}return li}function mx(r,e){for(;Mi()&&r+tn!==57;)if(r+tn===84&&gs()===47)break;return"/*"+Au(e,li-1)+"*"+oh(r===47?r:Mi())}function gx(r){for(;!nd(gs());)Mi();return Au(r,li)}function _x(r){return dx(ou("",null,null,null,[""],r=fx(r),0,[0],r))}function ou(r,e,t,s,a,l,c,d,h){for(var m=0,g=0,_=c,x=0,y=0,T=0,w=1,S=1,v=1,D=0,L="",b=a,U=l,F=s,I=L;S;)switch(T=D,D=Mi()){case 40:if(T!=108&&mn(I,_-1)==58){ru(I+=ht(_f(D),"&","&\f"),"&\f",f0(m?d[m-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:I+=_f(D);break;case 9:case 10:case 13:case 32:I+=hx(T);break;case 92:I+=px(su()-1,7);continue;case 47:switch(gs()){case 42:case 47:fa(vx(mx(Mi(),su()),e,t,h),h);break;default:I+="/"}break;case 123*w:d[m++]=Di(I)*v;case 125*w:case 59:case 0:switch(D){case 0:case 125:S=0;case 59+g:v==-1&&(I=ht(I,/\f/g,"")),y>0&&Di(I)-_&&fa(y>32?Qm(I+";",s,t,_-1,h):Qm(ht(I," ","")+";",s,t,_-2,h),h);break;case 59:I+=";";default:if(fa(F=Zm(I,e,t,m,g,a,d,L,b=[],U=[],_,l),l),D===123)if(g===0)ou(I,e,F,F,b,l,_,d,U);else switch(x===99&&mn(I,3)===110?100:x){case 100:case 108:case 109:case 115:ou(r,F,F,s&&fa(Zm(r,F,F,0,0,a,d,L,a,b=[],_,U),U),a,U,_,d,s?b:U);break;default:ou(I,F,F,F,[""],U,0,d,U)}}m=g=y=0,w=v=1,L=I="",_=c;break;case 58:_=1+Di(I),y=T;default:if(w<1){if(D==123)--w;else if(D==125&&w++==0&&cx()==125)continue}switch(I+=oh(D),D*w){case 38:v=g>0?1:(I+="\f",-1);break;case 44:d[m++]=(Di(I)-1)*v,v=1;break;case 64:gs()===45&&(I+=_f(Mi())),x=gs(),g=_=Di(L=I+=gx(su())),D++;break;case 45:T===45&&Di(I)==2&&(w=0)}}return l}function Zm(r,e,t,s,a,l,c,d,h,m,g,_){for(var x=a-1,y=a===0?l:[""],T=h0(y),w=0,S=0,v=0;w<s;++w)for(var D=0,L=ao(r,x+1,x=f0(S=c[w])),b=r;D<T;++D)(b=d0(S>0?y[D]+" "+L:ht(L,/&\f/g,y[D])))&&(h[v++]=b);return wu(r,e,t,a===0?Eu:d,h,m,g,_)}function vx(r,e,t,s){return wu(r,e,t,u0,oh(ux()),ao(r,2,-2),0,s)}function Qm(r,e,t,s,a){return wu(r,e,t,sh,ao(r,0,s),ao(r,s+1,-1),s,a)}function m0(r,e,t){switch(ax(r,e)){case 5103:return Lt+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Lt+r+r;case 4789:return ma+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return Lt+r+ma+r+Gt+r+r;case 5936:switch(mn(r,e+11)){case 114:return Lt+r+Gt+ht(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return Lt+r+Gt+ht(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return Lt+r+Gt+ht(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return Lt+r+Gt+r+r;case 6165:return Lt+r+Gt+"flex-"+r+r;case 5187:return Lt+r+ht(r,/(\w+).+(:[^]+)/,Lt+"box-$1$2"+Gt+"flex-$1$2")+r;case 5443:return Lt+r+Gt+"flex-item-"+ht(r,/flex-|-self/g,"")+(er(r,/flex-|baseline/)?"":Gt+"grid-row-"+ht(r,/flex-|-self/g,""))+r;case 4675:return Lt+r+Gt+"flex-line-pack"+ht(r,/align-content|flex-|-self/g,"")+r;case 5548:return Lt+r+Gt+ht(r,"shrink","negative")+r;case 5292:return Lt+r+Gt+ht(r,"basis","preferred-size")+r;case 6060:return Lt+"box-"+ht(r,"-grow","")+Lt+r+Gt+ht(r,"grow","positive")+r;case 4554:return Lt+ht(r,/([^-])(transform)/g,"$1"+Lt+"$2")+r;case 6187:return ht(ht(ht(r,/(zoom-|grab)/,Lt+"$1"),/(image-set)/,Lt+"$1"),r,"")+r;case 5495:case 3959:return ht(r,/(image-set\([^]*)/,Lt+"$1$`$1");case 4968:return ht(ht(r,/(.+:)(flex-)?(.*)/,Lt+"box-pack:$3"+Gt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Lt+r+r;case 4200:if(!er(r,/flex-|baseline/))return Gt+"grid-column-align"+ao(r,e)+r;break;case 2592:case 3360:return Gt+ht(r,"template-","")+r;case 4384:case 3616:return t&&t.some(function(s,a){return e=a,er(s.props,/grid-\w+-end/)})?~ru(r+(t=t[e].value),"span",0)?r:Gt+ht(r,"-start","")+r+Gt+"grid-row-span:"+(~ru(t,"span",0)?er(t,/\d+/):+er(t,/\d+/)-+er(r,/\d+/))+";":Gt+ht(r,"-start","")+r;case 4896:case 4128:return t&&t.some(function(s){return er(s.props,/grid-\w+-start/)})?r:Gt+ht(ht(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return ht(r,/(.+)-inline(.+)/,Lt+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Di(r)-1-e>6)switch(mn(r,e+1)){case 109:if(mn(r,e+4)!==45)break;case 102:return ht(r,/(.+:)(.+)-([^]+)/,"$1"+Lt+"$2-$3$1"+ma+(mn(r,e+3)==108?"$3":"$2-$3"))+r;case 115:return~ru(r,"stretch",0)?m0(ht(r,"stretch","fill-available"),e,t)+r:r}break;case 5152:case 5920:return ht(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,a,l,c,d,h,m){return Gt+a+":"+l+m+(c?Gt+a+"-span:"+(d?h:+h-+l)+m:"")+r});case 4949:if(mn(r,e+6)===121)return ht(r,":",":"+Lt)+r;break;case 6444:switch(mn(r,mn(r,14)===45?18:11)){case 120:return ht(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Lt+(mn(r,14)===45?"inline-":"")+"box$3$1"+Lt+"$2$3$1"+Gt+"$2box$3")+r;case 100:return ht(r,":",":"+Gt)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ht(r,"scroll-","scroll-snap-")+r}return r}function _u(r,e){for(var t="",s=0;s<r.length;s++)t+=e(r[s],s,r,e)||"";return t}function xx(r,e,t,s){switch(r.type){case ox:if(r.children.length)break;case sx:case sh:return r.return=r.return||r.value;case u0:return"";case c0:return r.return=r.value+"{"+_u(r.children,s)+"}";case Eu:if(!Di(r.value=r.props.join(",")))return""}return Di(t=_u(r.children,s))?r.return=r.value+"{"+t+"}":""}function Sx(r){var e=h0(r);return function(t,s,a,l){for(var c="",d=0;d<e;d++)c+=r[d](t,s,a,l)||"";return c}}function yx(r){return function(e){e.root||(e=e.return)&&r(e)}}function Mx(r,e,t,s){if(r.length>-1&&!r.return)switch(r.type){case sh:r.return=m0(r.value,r.length,t);return;case c0:return _u([Fr(r,{value:ht(r.value,"@","@"+Lt)})],s);case Eu:if(r.length)return lx(t=r.props,function(a){switch(er(a,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Hs(Fr(r,{props:[ht(a,/:(read-\w+)/,":"+ma+"$1")]})),Hs(Fr(r,{props:[a]})),td(r,{props:Km(t,s)});break;case"::placeholder":Hs(Fr(r,{props:[ht(a,/:(plac\w+)/,":"+Lt+"input-$1")]})),Hs(Fr(r,{props:[ht(a,/:(plac\w+)/,":"+ma+"$1")]})),Hs(Fr(r,{props:[ht(a,/:(plac\w+)/,Gt+"input-$1")]})),Hs(Fr(r,{props:[a]})),td(r,{props:Km(t,s)});break}return""})}}var Ex={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$n={},uo=typeof process<"u"&&$n!==void 0&&($n.REACT_APP_SC_ATTR||$n.SC_ATTR)||"data-styled",g0="active",_0="data-styled-version",Cu="6.1.19",ah=`/*!sc*/
`,vu=typeof window<"u"&&typeof document<"u",Tx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$n!==void 0&&$n.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$n.REACT_APP_SC_DISABLE_SPEEDY!==""?$n.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$n.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$n!==void 0&&$n.SC_DISABLE_SPEEDY!==void 0&&$n.SC_DISABLE_SPEEDY!==""&&$n.SC_DISABLE_SPEEDY!=="false"&&$n.SC_DISABLE_SPEEDY),Ru=Object.freeze([]),co=Object.freeze({});function wx(r,e,t){return t===void 0&&(t=co),r.theme!==t.theme&&r.theme||e||t.theme}var v0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ax=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Cx=/(^-|-$)/g;function Jm(r){return r.replace(Ax,"-").replace(Cx,"")}var Rx=/(a)(d)/gi,Ul=52,eg=function(r){return String.fromCharCode(r+(r>25?39:97))};function rd(r){var e,t="";for(e=Math.abs(r);e>Ul;e=e/Ul|0)t=eg(e%Ul)+t;return(eg(e%Ul)+t).replace(Rx,"$1-$2")}var vf,x0=5381,ro=function(r,e){for(var t=e.length;t;)r=33*r^e.charCodeAt(--t);return r},S0=function(r){return ro(x0,r)};function bx(r){return rd(S0(r)>>>0)}function Px(r){return r.displayName||r.name||"Component"}function xf(r){return typeof r=="string"&&!0}var y0=typeof Symbol=="function"&&Symbol.for,M0=y0?Symbol.for("react.memo"):60115,Dx=y0?Symbol.for("react.forward_ref"):60112,Lx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ix={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},E0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Nx=((vf={})[Dx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vf[M0]=E0,vf);function tg(r){return("type"in(e=r)&&e.type.$$typeof)===M0?E0:"$$typeof"in r?Nx[r.$$typeof]:Lx;var e}var Ux=Object.defineProperty,Fx=Object.getOwnPropertyNames,ng=Object.getOwnPropertySymbols,Ox=Object.getOwnPropertyDescriptor,kx=Object.getPrototypeOf,ig=Object.prototype;function T0(r,e,t){if(typeof e!="string"){if(ig){var s=kx(e);s&&s!==ig&&T0(r,s,t)}var a=Fx(e);ng&&(a=a.concat(ng(e)));for(var l=tg(r),c=tg(e),d=0;d<a.length;++d){var h=a[d];if(!(h in Ix||t&&t[h]||c&&h in c||l&&h in l)){var m=Ox(e,h);try{Ux(r,h,m)}catch{}}}}return r}function fo(r){return typeof r=="function"}function lh(r){return typeof r=="object"&&"styledComponentId"in r}function hs(r,e){return r&&e?"".concat(r," ").concat(e):r||e||""}function rg(r,e){if(r.length===0)return"";for(var t=r[0],s=1;s<r.length;s++)t+=r[s];return t}function _a(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function sd(r,e,t){if(t===void 0&&(t=!1),!t&&!_a(r)&&!Array.isArray(r))return e;if(Array.isArray(e))for(var s=0;s<e.length;s++)r[s]=sd(r[s],e[s]);else if(_a(e))for(var s in e)r[s]=sd(r[s],e[s]);return r}function uh(r,e){Object.defineProperty(r,"toString",{value:e})}function Ma(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Bx=(function(){function r(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return r.prototype.indexOfGroup=function(e){for(var t=0,s=0;s<e;s++)t+=this.groupSizes[s];return t},r.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var s=this.groupSizes,a=s.length,l=a;e>=l;)if((l<<=1)<0)throw Ma(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(s),this.length=l;for(var c=a;c<l;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(e+1),h=(c=0,t.length);c<h;c++)this.tag.insertRule(d,t[c])&&(this.groupSizes[e]++,d++)},r.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],s=this.indexOfGroup(e),a=s+t;this.groupSizes[e]=0;for(var l=s;l<a;l++)this.tag.deleteRule(s)}},r.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var s=this.groupSizes[e],a=this.indexOfGroup(e),l=a+s,c=a;c<l;c++)t+="".concat(this.tag.getRule(c)).concat(ah);return t},r})(),au=new Map,xu=new Map,lu=1,Fl=function(r){if(au.has(r))return au.get(r);for(;xu.has(lu);)lu++;var e=lu++;return au.set(r,e),xu.set(e,r),e},zx=function(r,e){lu=e+1,au.set(r,e),xu.set(e,r)},Vx="style[".concat(uo,"][").concat(_0,'="').concat(Cu,'"]'),Gx=new RegExp("^".concat(uo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Hx=function(r,e,t){for(var s,a=t.split(","),l=0,c=a.length;l<c;l++)(s=a[l])&&r.registerName(e,s)},Wx=function(r,e){for(var t,s=((t=e.textContent)!==null&&t!==void 0?t:"").split(ah),a=[],l=0,c=s.length;l<c;l++){var d=s[l].trim();if(d){var h=d.match(Gx);if(h){var m=0|parseInt(h[1],10),g=h[2];m!==0&&(zx(g,m),Hx(r,g,h[3]),r.getTag().insertRules(m,a)),a.length=0}else a.push(d)}}},sg=function(r){for(var e=document.querySelectorAll(Vx),t=0,s=e.length;t<s;t++){var a=e[t];a&&a.getAttribute(uo)!==g0&&(Wx(r,a),a.parentNode&&a.parentNode.removeChild(a))}};function Xx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var w0=function(r){var e=document.head,t=r||e,s=document.createElement("style"),a=(function(d){var h=Array.from(d.querySelectorAll("style[".concat(uo,"]")));return h[h.length-1]})(t),l=a!==void 0?a.nextSibling:null;s.setAttribute(uo,g0),s.setAttribute(_0,Cu);var c=Xx();return c&&s.setAttribute("nonce",c),t.insertBefore(s,l),s},jx=(function(){function r(e){this.element=w0(e),this.element.appendChild(document.createTextNode("")),this.sheet=(function(t){if(t.sheet)return t.sheet;for(var s=document.styleSheets,a=0,l=s.length;a<l;a++){var c=s[a];if(c.ownerNode===t)return c}throw Ma(17)})(this.element),this.length=0}return r.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},r.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},r})(),qx=(function(){function r(e){this.element=w0(e),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var s=document.createTextNode(t);return this.element.insertBefore(s,this.nodes[e]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},r.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},r})(),Yx=(function(){function r(e){this.rules=[],this.length=0}return r.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},r.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},r.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},r})(),og=vu,$x={isServer:!vu,useCSSOMInjection:!Tx},A0=(function(){function r(e,t,s){e===void 0&&(e=co),t===void 0&&(t={});var a=this;this.options=zn(zn({},$x),e),this.gs=t,this.names=new Map(s),this.server=!!e.isServer,!this.server&&vu&&og&&(og=!1,sg(this)),uh(this,function(){return(function(l){for(var c=l.getTag(),d=c.length,h="",m=function(_){var x=(function(v){return xu.get(v)})(_);if(x===void 0)return"continue";var y=l.names.get(x),T=c.getGroup(_);if(y===void 0||!y.size||T.length===0)return"continue";var w="".concat(uo,".g").concat(_,'[id="').concat(x,'"]'),S="";y!==void 0&&y.forEach(function(v){v.length>0&&(S+="".concat(v,","))}),h+="".concat(T).concat(w,'{content:"').concat(S,'"}').concat(ah)},g=0;g<d;g++)m(g);return h})(a)})}return r.registerId=function(e){return Fl(e)},r.prototype.rehydrate=function(){!this.server&&vu&&sg(this)},r.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new r(zn(zn({},this.options),e),this.gs,t&&this.names||void 0)},r.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(e=(function(t){var s=t.useCSSOMInjection,a=t.target;return t.isServer?new Yx(a):s?new jx(a):new qx(a)})(this.options),new Bx(e)));var e},r.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},r.prototype.registerName=function(e,t){if(Fl(e),this.names.has(e))this.names.get(e).add(t);else{var s=new Set;s.add(t),this.names.set(e,s)}},r.prototype.insertRules=function(e,t,s){this.registerName(e,t),this.getTag().insertRules(Fl(e),s)},r.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},r.prototype.clearRules=function(e){this.getTag().clearGroup(Fl(e)),this.clearNames(e)},r.prototype.clearTag=function(){this.tag=void 0},r})(),Kx=/&/g,Zx=/^\s*\/\/.*$/gm;function C0(r,e){return r.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(s){return"".concat(e," ").concat(s)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=C0(t.children,e)),t})}function Qx(r){var e,t,s,a=co,l=a.options,c=l===void 0?co:l,d=a.plugins,h=d===void 0?Ru:d,m=function(x,y,T){return T.startsWith(t)&&T.endsWith(t)&&T.replaceAll(t,"").length>0?".".concat(e):x},g=h.slice();g.push(function(x){x.type===Eu&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(Kx,t).replace(s,m))}),c.prefix&&g.push(Mx),g.push(xx);var _=function(x,y,T,w){y===void 0&&(y=""),T===void 0&&(T=""),w===void 0&&(w="&"),e=w,t=y,s=new RegExp("\\".concat(t,"\\b"),"g");var S=x.replace(Zx,""),v=_x(T||y?"".concat(T," ").concat(y," { ").concat(S," }"):S);c.namespace&&(v=C0(v,c.namespace));var D=[];return _u(v,Sx(g.concat(yx(function(L){return D.push(L)})))),D};return _.hash=h.length?h.reduce(function(x,y){return y.name||Ma(15),ro(x,y.name)},x0).toString():"",_}var Jx=new A0,od=Qx(),R0=ga.createContext({shouldForwardProp:void 0,styleSheet:Jx,stylis:od});R0.Consumer;ga.createContext(void 0);function ag(){return ki.useContext(R0)}var eS=(function(){function r(e,t){var s=this;this.inject=function(a,l){l===void 0&&(l=od);var c=s.name+l.hash;a.hasNameForId(s.id,c)||a.insertRules(s.id,c,l(s.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,uh(this,function(){throw Ma(12,String(s.name))})}return r.prototype.getName=function(e){return e===void 0&&(e=od),this.name+e.hash},r})(),tS=function(r){return r>="A"&&r<="Z"};function lg(r){for(var e="",t=0;t<r.length;t++){var s=r[t];if(t===1&&s==="-"&&r[0]==="-")return r;tS(s)?e+="-"+s.toLowerCase():e+=s}return e.startsWith("ms-")?"-"+e:e}var b0=function(r){return r==null||r===!1||r===""},P0=function(r){var e,t,s=[];for(var a in r){var l=r[a];r.hasOwnProperty(a)&&!b0(l)&&(Array.isArray(l)&&l.isCss||fo(l)?s.push("".concat(lg(a),":"),l,";"):_a(l)?s.push.apply(s,gu(gu(["".concat(a," {")],P0(l),!1),["}"],!1)):s.push("".concat(lg(a),": ").concat((e=a,(t=l)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Ex||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return s};function _s(r,e,t,s){if(b0(r))return[];if(lh(r))return[".".concat(r.styledComponentId)];if(fo(r)){if(!fo(l=r)||l.prototype&&l.prototype.isReactComponent||!e)return[r];var a=r(e);return _s(a,e,t,s)}var l;return r instanceof eS?t?(r.inject(t,s),[r.getName(s)]):[r]:_a(r)?P0(r):Array.isArray(r)?Array.prototype.concat.apply(Ru,r.map(function(c){return _s(c,e,t,s)})):[r.toString()]}function nS(r){for(var e=0;e<r.length;e+=1){var t=r[e];if(fo(t)&&!lh(t))return!1}return!0}var iS=S0(Cu),rS=(function(){function r(e,t,s){this.rules=e,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&nS(e),this.componentId=t,this.baseHash=ro(iS,t),this.baseStyle=s,A0.registerId(t)}return r.prototype.generateAndInjectStyles=function(e,t,s){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))a=hs(a,this.staticRulesId);else{var l=rg(_s(this.rules,e,t,s)),c=rd(ro(this.baseHash,l)>>>0);if(!t.hasNameForId(this.componentId,c)){var d=s(l,".".concat(c),void 0,this.componentId);t.insertRules(this.componentId,c,d)}a=hs(a,c),this.staticRulesId=c}else{for(var h=ro(this.baseHash,s.hash),m="",g=0;g<this.rules.length;g++){var _=this.rules[g];if(typeof _=="string")m+=_;else if(_){var x=rg(_s(_,e,t,s));h=ro(h,x+g),m+=x}}if(m){var y=rd(h>>>0);t.hasNameForId(this.componentId,y)||t.insertRules(this.componentId,y,s(m,".".concat(y),void 0,this.componentId)),a=hs(a,y)}}return a},r})(),D0=ga.createContext(void 0);D0.Consumer;var Sf={};function sS(r,e,t){var s=lh(r),a=r,l=!xf(r),c=e.attrs,d=c===void 0?Ru:c,h=e.componentId,m=h===void 0?(function(b,U){var F=typeof b!="string"?"sc":Jm(b);Sf[F]=(Sf[F]||0)+1;var I="".concat(F,"-").concat(bx(Cu+F+Sf[F]));return U?"".concat(U,"-").concat(I):I})(e.displayName,e.parentComponentId):h,g=e.displayName,_=g===void 0?(function(b){return xf(b)?"styled.".concat(b):"Styled(".concat(Px(b),")")})(r):g,x=e.displayName&&e.componentId?"".concat(Jm(e.displayName),"-").concat(e.componentId):e.componentId||m,y=s&&a.attrs?a.attrs.concat(d).filter(Boolean):d,T=e.shouldForwardProp;if(s&&a.shouldForwardProp){var w=a.shouldForwardProp;if(e.shouldForwardProp){var S=e.shouldForwardProp;T=function(b,U){return w(b,U)&&S(b,U)}}else T=w}var v=new rS(t,x,s?a.componentStyle:void 0);function D(b,U){return(function(F,I,Y){var C=F.attrs,R=F.componentStyle,V=F.defaultProps,se=F.foldedComponentIds,Z=F.styledComponentId,fe=F.target,ce=ga.useContext(D0),oe=ag(),j=F.shouldForwardProp||oe.shouldForwardProp,X=wx(I,ce,V)||co,le=(function(Xe,Q,ue){for(var _e,Ue=zn(zn({},Q),{className:void 0,theme:ue}),Pe=0;Pe<Xe.length;Pe+=1){var lt=fo(_e=Xe[Pe])?_e(Ue):_e;for(var bt in lt)Ue[bt]=bt==="className"?hs(Ue[bt],lt[bt]):bt==="style"?zn(zn({},Ue[bt]),lt[bt]):lt[bt]}return Q.className&&(Ue.className=hs(Ue.className,Q.className)),Ue})(C,I,X),te=le.as||fe,O={};for(var J in le)le[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&le.theme===X||(J==="forwardedAs"?O.as=le.forwardedAs:j&&!j(J,te)||(O[J]=le[J]));var we=(function(Xe,Q){var ue=ag(),_e=Xe.generateAndInjectStyles(Q,ue.styleSheet,ue.stylis);return _e})(R,le),Ve=hs(se,Z);return we&&(Ve+=" "+we),le.className&&(Ve+=" "+le.className),O[xf(te)&&!v0.has(te)?"class":"className"]=Ve,Y&&(O.ref=Y),ki.createElement(te,O)})(L,b,U)}D.displayName=_;var L=ga.forwardRef(D);return L.attrs=y,L.componentStyle=v,L.displayName=_,L.shouldForwardProp=T,L.foldedComponentIds=s?hs(a.foldedComponentIds,a.styledComponentId):"",L.styledComponentId=x,L.target=s?a.target:r,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=s?(function(U){for(var F=[],I=1;I<arguments.length;I++)F[I-1]=arguments[I];for(var Y=0,C=F;Y<C.length;Y++)sd(U,C[Y],!0);return U})({},a.defaultProps,b):b}}),uh(L,function(){return".".concat(L.styledComponentId)}),l&&T0(L,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function ug(r,e){for(var t=[r[0]],s=0,a=e.length;s<a;s+=1)t.push(e[s],r[s+1]);return t}var cg=function(r){return Object.assign(r,{isCss:!0})};function oS(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(fo(r)||_a(r))return cg(_s(ug(Ru,gu([r],e,!0))));var s=r;return e.length===0&&s.length===1&&typeof s[0]=="string"?_s(s):cg(_s(ug(s,e)))}function ad(r,e,t){if(t===void 0&&(t=co),!e)throw Ma(1,e);var s=function(a){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return r(e,t,oS.apply(void 0,gu([a],l,!1)))};return s.attrs=function(a){return ad(r,e,zn(zn({},t),{attrs:Array.prototype.concat(t.attrs,a).filter(Boolean)}))},s.withConfig=function(a){return ad(r,e,zn(zn({},t),a))},s}var L0=function(r){return ad(sS,r)},zr=L0;v0.forEach(function(r){zr[r]=L0(r)});const aS=zr.h1`
  font-family: "Schibsted Grotesk", system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  letter-spacing: -1%;
  color: ${r=>r.color||"inherit"};

  @media (min-width: 800px) { font-size: 22px; }
  @media (min-width: 1280px) { font-size: 24px; }
`,lS=zr.h2`
  font-family: "Schibsted Grotesk", system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  letter-spacing: -1%;
  color: ${r=>r.color||"inherit"};

  @media (min-width: 800px) { font-size: 18px; }
  @media (min-width: 1280px) { font-size: 20px; }
`,bu=zr.h3`
  font-family: "Schibsted Grotesk", system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: -1%;
  color: ${r=>r.color||"inherit"};
  margin-bottom: 30px;

  @media (min-width: 800px) { font-size: 16px; }
  @media (min-width: 1280px) { font-size: 18px; }
`,vs=zr.p`
  font-family: "Schibsted Grotesk", system-ui, -apple-system, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0;
  color: ${r=>r.color||"inherit"};

  @media (min-width: 800px) { font-size: 14px; }
  @media (min-width: 1280px) { font-size: 16px; }
`;zr.ul`
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
`;const uS=zr.span`
  font-family: "Schibsted Grotesk", system-ui, -apple-system, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -2%;
  color: ${r=>r.color||"inherit"};

  @media (min-width: 800px) { font-size: 14px; }
  @media (min-width: 1280px) { font-size: 16px; }
`,uu=zr.a`
  font-family: "Schibsted Grotesk", system-ui, -apple-system, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -2%;
  
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-decoration: none;
  
  color: ${r=>r.color||"#ababab"};
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }

  @media (min-width: 800px) { font-size: 14px; }
  @media (min-width: 1280px) { font-size: 16px; }
`,Kn={paragraph1:"#ffffff",paragraph2:"#ababab"};var yf={exports:{}},Mf,fg;function cS(){if(fg)return Mf;fg=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Mf=r,Mf}var Ef,dg;function fS(){if(dg)return Ef;dg=1;var r=cS();function e(){}function t(){}return t.resetWarningCache=e,Ef=function(){function s(c,d,h,m,g,_){if(_!==r){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}s.isRequired=s;function a(){return s}var l={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:a,element:s,elementType:s,instanceOf:a,node:s,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},Ef}var hg;function dS(){return hg||(hg=1,yf.exports=fS()()),yf.exports}var hS=dS();const jt=l0(hS),pS={it:{job_title:"Sviluppatore Software",education_title:"Istruzione",experience_title:"Esperienza",skills_title:"Competenze",projects_title:"Progetti",about_title:"Chi sono",about_description:"Sono un full-stack developer con base a Trieste. Appassionato di grafica 3D e web visualization, lavoro principalmente con React, Three.js e TypeScript. Mi piace esplorare nuove tecnologie e contribuire all'open source.",curriculum_button:"Curriculum",contact_button:"Contattami"},en:{job_title:"Software Developer",education_title:"Education",experience_title:"Experience",skills_title:"Skills",projects_title:"Projects",about_title:"About",about_description:"I'm a full-stack developer based in Trieste, Italy. Passionate about 3D graphics and web visualization, I mainly work with React, Three.js, and TypeScript. I love exploring new technologies and contributing to open source.",curriculum_button:"Resume",contact_button:"Contact me"}},I0=ki.createContext();function N0({children:r}){const[e,t]=ki.useState(()=>localStorage.getItem("language")||"en"),s=l=>{t(l),localStorage.setItem("language",l)},a=l=>pS[e][l]||l;return De.jsx(I0.Provider,{value:{lang:e,setLang:s,t:a},children:r})}N0.propTypes={children:jt.node.isRequired};const ch=()=>{const r=ki.useContext(I0);if(!r)throw new Error("useLanguage must be used within a LanguageProvider");return r};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fh="182",mS=0,pg=1,gS=2,cu=1,_S=2,da=3,Br=0,Vn=1,tr=2,ir=0,so=1,mg=2,gg=3,_g=4,vS=5,fs=100,xS=101,SS=102,yS=103,MS=104,ES=200,TS=201,wS=202,AS=203,ld=204,ud=205,CS=206,RS=207,bS=208,PS=209,DS=210,LS=211,IS=212,NS=213,US=214,cd=0,fd=1,dd=2,ho=3,hd=4,pd=5,md=6,gd=7,U0=0,FS=1,OS=2,Ui=0,F0=1,O0=2,k0=3,B0=4,z0=5,V0=6,G0=7,H0=300,xs=301,po=302,_d=303,vd=304,Pu=306,xd=1e3,nr=1001,Sd=1002,vn=1003,kS=1004,Ol=1005,An=1006,Tf=1007,ps=1008,ai=1009,W0=1010,X0=1011,va=1012,dh=1013,Bi=1014,Ii=1015,or=1016,hh=1017,ph=1018,xa=1020,j0=35902,q0=35899,Y0=1021,$0=1022,yi=1023,ar=1026,ms=1027,K0=1028,mh=1029,mo=1030,gh=1031,_h=1033,fu=33776,du=33777,hu=33778,pu=33779,yd=35840,Md=35841,Ed=35842,Td=35843,wd=36196,Ad=37492,Cd=37496,Rd=37488,bd=37489,Pd=37490,Dd=37491,Ld=37808,Id=37809,Nd=37810,Ud=37811,Fd=37812,Od=37813,kd=37814,Bd=37815,zd=37816,Vd=37817,Gd=37818,Hd=37819,Wd=37820,Xd=37821,jd=36492,qd=36494,Yd=36495,$d=36283,Kd=36284,Zd=36285,Qd=36286,BS=3200,zS=0,VS=1,Or="",oi="srgb",go="srgb-linear",Su="linear",Nt="srgb",Ws=7680,vg=519,GS=512,HS=513,WS=514,vh=515,XS=516,jS=517,xh=518,qS=519,xg=35044,Jd="300 es",Ni=2e3,yu=2001;function Z0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Mu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function YS(){const r=Mu("canvas");return r.style.display="block",r}const Sg={};function yg(...r){const e="THREE."+r.shift();console.log(e,...r)}function ot(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Ct(...r){const e="THREE."+r.shift();console.error(e,...r)}function Sa(...r){const e=r.join(" ");e in Sg||(Sg[e]=!0,ot(...r))}function $S(r,e,t){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}class xo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const a=s[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wf=Math.PI/180,eh=180/Math.PI;function Ea(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[s&255]+Tn[s>>8&255]+Tn[s>>16&255]+Tn[s>>24&255]).toLowerCase()}function vt(r,e,t){return Math.max(e,Math.min(t,r))}function KS(r,e){return(r%e+e)%e}function Af(r,e,t){return(1-t)*r+t*e}function ra(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Bn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ft{constructor(e=0,t=0){Ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(vt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(vt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*a+e.x,this.y=l*a+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ta{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,c,d){let h=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3],x=l[c+0],y=l[c+1],T=l[c+2],w=l[c+3];if(d<=0){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d>=1){e[t+0]=x,e[t+1]=y,e[t+2]=T,e[t+3]=w;return}if(_!==w||h!==x||m!==y||g!==T){let S=h*x+m*y+g*T+_*w;S<0&&(x=-x,y=-y,T=-T,w=-w,S=-S);let v=1-d;if(S<.9995){const D=Math.acos(S),L=Math.sin(D);v=Math.sin(v*D)/L,d=Math.sin(d*D)/L,h=h*v+x*d,m=m*v+y*d,g=g*v+T*d,_=_*v+w*d}else{h=h*v+x*d,m=m*v+y*d,g=g*v+T*d,_=_*v+w*d;const D=1/Math.sqrt(h*h+m*m+g*g+_*_);h*=D,m*=D,g*=D,_*=D}}e[t]=h,e[t+1]=m,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,s,a,l,c){const d=s[a],h=s[a+1],m=s[a+2],g=s[a+3],_=l[c],x=l[c+1],y=l[c+2],T=l[c+3];return e[t]=d*T+g*_+h*y-m*x,e[t+1]=h*T+g*x+m*_-d*y,e[t+2]=m*T+g*y+d*x-h*_,e[t+3]=g*T-d*_-h*x-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,c=e._order,d=Math.cos,h=Math.sin,m=d(s/2),g=d(a/2),_=d(l/2),x=h(s/2),y=h(a/2),T=h(l/2);switch(c){case"XYZ":this._x=x*g*_+m*y*T,this._y=m*y*_-x*g*T,this._z=m*g*T+x*y*_,this._w=m*g*_-x*y*T;break;case"YXZ":this._x=x*g*_+m*y*T,this._y=m*y*_-x*g*T,this._z=m*g*T-x*y*_,this._w=m*g*_+x*y*T;break;case"ZXY":this._x=x*g*_-m*y*T,this._y=m*y*_+x*g*T,this._z=m*g*T+x*y*_,this._w=m*g*_-x*y*T;break;case"ZYX":this._x=x*g*_-m*y*T,this._y=m*y*_+x*g*T,this._z=m*g*T-x*y*_,this._w=m*g*_+x*y*T;break;case"YZX":this._x=x*g*_+m*y*T,this._y=m*y*_+x*g*T,this._z=m*g*T-x*y*_,this._w=m*g*_-x*y*T;break;case"XZY":this._x=x*g*_-m*y*T,this._y=m*y*_-x*g*T,this._z=m*g*T+x*y*_,this._w=m*g*_+x*y*T;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],c=t[1],d=t[5],h=t[9],m=t[2],g=t[6],_=t[10],x=s+d+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-h)*y,this._y=(l-m)*y,this._z=(c-a)*y}else if(s>d&&s>_){const y=2*Math.sqrt(1+s-d-_);this._w=(g-h)/y,this._x=.25*y,this._y=(a+c)/y,this._z=(l+m)/y}else if(d>_){const y=2*Math.sqrt(1+d-s-_);this._w=(l-m)/y,this._x=(a+c)/y,this._y=.25*y,this._z=(h+g)/y}else{const y=2*Math.sqrt(1+_-s-d);this._w=(c-a)/y,this._x=(l+m)/y,this._y=(h+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,c=e._w,d=t._x,h=t._y,m=t._z,g=t._w;return this._x=s*g+c*d+a*m-l*h,this._y=a*g+c*h+l*d-s*m,this._z=l*g+c*m+s*h-a*d,this._w=c*g-s*d-a*h-l*m,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let s=e._x,a=e._y,l=e._z,c=e._w,d=this.dot(e);d<0&&(s=-s,a=-a,l=-l,c=-c,d=-d);let h=1-t;if(d<.9995){const m=Math.acos(d),g=Math.sin(m);h=Math.sin(h*m)/g,t=Math.sin(t*m)/g,this._x=this._x*h+s*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+s*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,t=0,s=0){re.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,c=e.y,d=e.z,h=e.w,m=2*(c*a-d*s),g=2*(d*t-l*a),_=2*(l*s-c*t);return this.x=t+h*m+c*_-d*g,this.y=s+h*g+d*m-l*_,this.z=a+h*_+l*g-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(vt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,c=t.x,d=t.y,h=t.z;return this.x=a*h-l*d,this.y=l*c-s*h,this.z=s*d-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Cf.copy(this).projectOnVector(e),this.sub(Cf)}reflect(e){return this.sub(Cf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(vt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cf=new re,Mg=new Ta;class ct{constructor(e,t,s,a,l,c,d,h,m){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,d,h,m)}set(e,t,s,a,l,c,d,h,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=d,g[3]=t,g[4]=l,g[5]=h,g[6]=s,g[7]=c,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],d=s[3],h=s[6],m=s[1],g=s[4],_=s[7],x=s[2],y=s[5],T=s[8],w=a[0],S=a[3],v=a[6],D=a[1],L=a[4],b=a[7],U=a[2],F=a[5],I=a[8];return l[0]=c*w+d*D+h*U,l[3]=c*S+d*L+h*F,l[6]=c*v+d*b+h*I,l[1]=m*w+g*D+_*U,l[4]=m*S+g*L+_*F,l[7]=m*v+g*b+_*I,l[2]=x*w+y*D+T*U,l[5]=x*S+y*L+T*F,l[8]=x*v+y*b+T*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],g=e[8];return t*c*g-t*d*m-s*l*g+s*d*h+a*l*m-a*c*h}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],g=e[8],_=g*c-d*m,x=d*h-g*l,y=m*l-c*h,T=t*_+s*x+a*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=_*w,e[1]=(a*m-g*s)*w,e[2]=(d*s-a*c)*w,e[3]=x*w,e[4]=(g*t-a*h)*w,e[5]=(a*l-d*t)*w,e[6]=y*w,e[7]=(s*h-m*t)*w,e[8]=(c*t-s*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,c,d){const h=Math.cos(l),m=Math.sin(l);return this.set(s*h,s*m,-s*(h*c+m*d)+c+e,-a*m,a*h,-a*(-m*c+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Rf.makeScale(e,t)),this}rotate(e){return this.premultiply(Rf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rf=new ct,Eg=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tg=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ZS(){const r={enabled:!0,workingColorSpace:go,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Nt&&(a.r=rr(a.r),a.g=rr(a.g),a.b=rr(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Nt&&(a.r=oo(a.r),a.g=oo(a.g),a.b=oo(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Or?Su:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Sa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Sa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[go]:{primaries:e,whitePoint:s,transfer:Su,toXYZ:Eg,fromXYZ:Tg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:s,transfer:Nt,toXYZ:Eg,fromXYZ:Tg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),r}const Tt=ZS();function rr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function oo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Xs;class QS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Xs===void 0&&(Xs=Mu("canvas")),Xs.width=e.width,Xs.height=e.height;const a=Xs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),s=Xs}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mu("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=rr(l[c]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(rr(t[s]/255)*255):t[s]=rr(t[s]);return{data:t,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JS=0;class Sh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Ea(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?l.push(bf(a[c].image)):l.push(bf(a[c]))}else l=bf(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function bf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?QS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let ey=0;const Pf=new re;class Ln extends xo{constructor(e=Ln.DEFAULT_IMAGE,t=Ln.DEFAULT_MAPPING,s=nr,a=nr,l=An,c=ps,d=yi,h=ai,m=Ln.DEFAULT_ANISOTROPY,g=Or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=Ea(),this.name="",this.source=new Sh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pf).x}get height(){return this.source.getSize(Pf).y}get depth(){return this.source.getSize(Pf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ot(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&s&&a.isVector2&&s.isVector2||a&&s&&a.isVector3&&s.isVector3||a&&s&&a.isMatrix3&&s.isMatrix3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==H0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xd:e.x=e.x-Math.floor(e.x);break;case nr:e.x=e.x<0?0:1;break;case Sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xd:e.y=e.y-Math.floor(e.y);break;case nr:e.y=e.y<0?0:1;break;case Sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=H0;Ln.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,t=0,s=0,a=1){Qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const h=e.elements,m=h[0],g=h[4],_=h[8],x=h[1],y=h[5],T=h[9],w=h[2],S=h[6],v=h[10];if(Math.abs(g-x)<.01&&Math.abs(_-w)<.01&&Math.abs(T-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+w)<.1&&Math.abs(T+S)<.1&&Math.abs(m+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(m+1)/2,b=(y+1)/2,U=(v+1)/2,F=(g+x)/4,I=(_+w)/4,Y=(T+S)/4;return L>b&&L>U?L<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(L),a=F/s,l=I/s):b>U?b<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),s=F/a,l=Y/a):U<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(U),s=I/l,a=Y/l),this.set(s,a,l,t),this}let D=Math.sqrt((S-T)*(S-T)+(_-w)*(_-w)+(x-g)*(x-g));return Math.abs(D)<.001&&(D=1),this.x=(S-T)/D,this.y=(_-w)/D,this.z=(x-g)/D,this.w=Math.acos((m+y+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(vt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ty extends xo{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t);const a={width:e,height:t,depth:s.depth},l=new Ln(a);this.textures=[];const c=s.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Sh(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends ty{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Q0 extends Ln{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=vn,this.minFilter=vn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ny extends Ln{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=vn,this.minFilter=vn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wa{constructor(e=new re(1/0,1/0,1/0),t=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,gi):gi.fromBufferAttribute(l,c),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),kl.copy(s.boundingBox)),kl.applyMatrix4(e.matrixWorld),this.union(kl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),Bl.subVectors(this.max,sa),js.subVectors(e.a,sa),qs.subVectors(e.b,sa),Ys.subVectors(e.c,sa),Pr.subVectors(qs,js),Dr.subVectors(Ys,qs),rs.subVectors(js,Ys);let t=[0,-Pr.z,Pr.y,0,-Dr.z,Dr.y,0,-rs.z,rs.y,Pr.z,0,-Pr.x,Dr.z,0,-Dr.x,rs.z,0,-rs.x,-Pr.y,Pr.x,0,-Dr.y,Dr.x,0,-rs.y,rs.x,0];return!Df(t,js,qs,Ys,Bl)||(t=[1,0,0,0,1,0,0,0,1],!Df(t,js,qs,Ys,Bl))?!1:(zl.crossVectors(Pr,Dr),t=[zl.x,zl.y,zl.z],Df(t,js,qs,Ys,Bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $i=[new re,new re,new re,new re,new re,new re,new re,new re],gi=new re,kl=new wa,js=new re,qs=new re,Ys=new re,Pr=new re,Dr=new re,rs=new re,sa=new re,Bl=new re,zl=new re,ss=new re;function Df(r,e,t,s,a){for(let l=0,c=r.length-3;l<=c;l+=3){ss.fromArray(r,l);const d=a.x*Math.abs(ss.x)+a.y*Math.abs(ss.y)+a.z*Math.abs(ss.z),h=e.dot(ss),m=t.dot(ss),g=s.dot(ss);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>d)return!1}return!0}const iy=new wa,oa=new re,Lf=new re;class yh{constructor(e=new re,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):iy.setFromPoints(e).getCenter(s);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);const t=oa.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(oa,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(Lf)),this.expandByPoint(oa.copy(e.center).sub(Lf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ki=new re,If=new re,Vl=new re,Lr=new re,Nf=new re,Gl=new re,Uf=new re;class ry{constructor(e=new re,t=new re(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){If.copy(e).add(t).multiplyScalar(.5),Vl.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(If);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Vl),d=Lr.dot(this.direction),h=-Lr.dot(Vl),m=Lr.lengthSq(),g=Math.abs(1-c*c);let _,x,y,T;if(g>0)if(_=c*h-d,x=c*d-h,T=l*g,_>=0)if(x>=-T)if(x<=T){const w=1/g;_*=w,x*=w,y=_*(_+c*x+2*d)+x*(c*_+x+2*h)+m}else x=l,_=Math.max(0,-(c*x+d)),y=-_*_+x*(x+2*h)+m;else x=-l,_=Math.max(0,-(c*x+d)),y=-_*_+x*(x+2*h)+m;else x<=-T?(_=Math.max(0,-(-c*l+d)),x=_>0?-l:Math.min(Math.max(-l,-h),l),y=-_*_+x*(x+2*h)+m):x<=T?(_=0,x=Math.min(Math.max(-l,-h),l),y=x*(x+2*h)+m):(_=Math.max(0,-(c*l+d)),x=_>0?l:Math.min(Math.max(-l,-h),l),y=-_*_+x*(x+2*h)+m);else x=c>0?-l:l,_=Math.max(0,-(c*x+d)),y=-_*_+x*(x+2*h)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(If).addScaledVector(Vl,x),y}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);const s=Ki.dot(this.direction),a=Ki.dot(Ki)-s*s,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),d=s-c,h=s+c;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,c,d,h;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(s=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(s=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),g>=0?(l=(e.min.y-x.y)*g,c=(e.max.y-x.y)*g):(l=(e.max.y-x.y)*g,c=(e.min.y-x.y)*g),s>c||l>a||((l>s||isNaN(s))&&(s=l),(c<a||isNaN(a))&&(a=c),_>=0?(d=(e.min.z-x.z)*_,h=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,h=(e.min.z-x.z)*_),s>h||d>a)||((d>s||s!==s)&&(s=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,s,a,l){Nf.subVectors(t,e),Gl.subVectors(s,e),Uf.crossVectors(Nf,Gl);let c=this.direction.dot(Uf),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;Lr.subVectors(this.origin,e);const h=d*this.direction.dot(Gl.crossVectors(Lr,Gl));if(h<0)return null;const m=d*this.direction.dot(Nf.cross(Lr));if(m<0||h+m>c)return null;const g=-d*Lr.dot(Uf);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(e,t,s,a,l,c,d,h,m,g,_,x,y,T,w,S){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,d,h,m,g,_,x,y,T,w,S)}set(e,t,s,a,l,c,d,h,m,g,_,x,y,T,w,S){const v=this.elements;return v[0]=e,v[4]=t,v[8]=s,v[12]=a,v[1]=l,v[5]=c,v[9]=d,v[13]=h,v[2]=m,v[6]=g,v[10]=_,v[14]=x,v[3]=y,v[7]=T,v[11]=w,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,s=e.elements,a=1/$s.setFromMatrixColumn(e,0).length(),l=1/$s.setFromMatrixColumn(e,1).length(),c=1/$s.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,c=Math.cos(s),d=Math.sin(s),h=Math.cos(a),m=Math.sin(a),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const x=c*g,y=c*_,T=d*g,w=d*_;t[0]=h*g,t[4]=-h*_,t[8]=m,t[1]=y+T*m,t[5]=x-w*m,t[9]=-d*h,t[2]=w-x*m,t[6]=T+y*m,t[10]=c*h}else if(e.order==="YXZ"){const x=h*g,y=h*_,T=m*g,w=m*_;t[0]=x+w*d,t[4]=T*d-y,t[8]=c*m,t[1]=c*_,t[5]=c*g,t[9]=-d,t[2]=y*d-T,t[6]=w+x*d,t[10]=c*h}else if(e.order==="ZXY"){const x=h*g,y=h*_,T=m*g,w=m*_;t[0]=x-w*d,t[4]=-c*_,t[8]=T+y*d,t[1]=y+T*d,t[5]=c*g,t[9]=w-x*d,t[2]=-c*m,t[6]=d,t[10]=c*h}else if(e.order==="ZYX"){const x=c*g,y=c*_,T=d*g,w=d*_;t[0]=h*g,t[4]=T*m-y,t[8]=x*m+w,t[1]=h*_,t[5]=w*m+x,t[9]=y*m-T,t[2]=-m,t[6]=d*h,t[10]=c*h}else if(e.order==="YZX"){const x=c*h,y=c*m,T=d*h,w=d*m;t[0]=h*g,t[4]=w-x*_,t[8]=T*_+y,t[1]=_,t[5]=c*g,t[9]=-d*g,t[2]=-m*g,t[6]=y*_+T,t[10]=x-w*_}else if(e.order==="XZY"){const x=c*h,y=c*m,T=d*h,w=d*m;t[0]=h*g,t[4]=-_,t[8]=m*g,t[1]=x*_+w,t[5]=c*g,t[9]=y*_-T,t[2]=T*_-y,t[6]=d*g,t[10]=w*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sy,e,oy)}lookAt(e,t,s){const a=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Ir.crossVectors(s,qn),Ir.lengthSq()===0&&(Math.abs(s.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Ir.crossVectors(s,qn)),Ir.normalize(),Hl.crossVectors(qn,Ir),a[0]=Ir.x,a[4]=Hl.x,a[8]=qn.x,a[1]=Ir.y,a[5]=Hl.y,a[9]=qn.y,a[2]=Ir.z,a[6]=Hl.z,a[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],d=s[4],h=s[8],m=s[12],g=s[1],_=s[5],x=s[9],y=s[13],T=s[2],w=s[6],S=s[10],v=s[14],D=s[3],L=s[7],b=s[11],U=s[15],F=a[0],I=a[4],Y=a[8],C=a[12],R=a[1],V=a[5],se=a[9],Z=a[13],fe=a[2],ce=a[6],oe=a[10],j=a[14],X=a[3],le=a[7],te=a[11],O=a[15];return l[0]=c*F+d*R+h*fe+m*X,l[4]=c*I+d*V+h*ce+m*le,l[8]=c*Y+d*se+h*oe+m*te,l[12]=c*C+d*Z+h*j+m*O,l[1]=g*F+_*R+x*fe+y*X,l[5]=g*I+_*V+x*ce+y*le,l[9]=g*Y+_*se+x*oe+y*te,l[13]=g*C+_*Z+x*j+y*O,l[2]=T*F+w*R+S*fe+v*X,l[6]=T*I+w*V+S*ce+v*le,l[10]=T*Y+w*se+S*oe+v*te,l[14]=T*C+w*Z+S*j+v*O,l[3]=D*F+L*R+b*fe+U*X,l[7]=D*I+L*V+b*ce+U*le,l[11]=D*Y+L*se+b*oe+U*te,l[15]=D*C+L*Z+b*j+U*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],c=e[1],d=e[5],h=e[9],m=e[13],g=e[2],_=e[6],x=e[10],y=e[14],T=e[3],w=e[7],S=e[11],v=e[15],D=h*y-m*x,L=d*y-m*_,b=d*x-h*_,U=c*y-m*g,F=c*x-h*g,I=c*_-d*g;return t*(w*D-S*L+v*b)-s*(T*D-S*U+v*F)+a*(T*L-w*U+v*I)-l*(T*b-w*F+S*I)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],g=e[8],_=e[9],x=e[10],y=e[11],T=e[12],w=e[13],S=e[14],v=e[15],D=_*S*m-w*x*m+w*h*y-d*S*y-_*h*v+d*x*v,L=T*x*m-g*S*m-T*h*y+c*S*y+g*h*v-c*x*v,b=g*w*m-T*_*m+T*d*y-c*w*y-g*d*v+c*_*v,U=T*_*h-g*w*h-T*d*x+c*w*x+g*d*S-c*_*S,F=t*D+s*L+a*b+l*U;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return e[0]=D*I,e[1]=(w*x*l-_*S*l-w*a*y+s*S*y+_*a*v-s*x*v)*I,e[2]=(d*S*l-w*h*l+w*a*m-s*S*m-d*a*v+s*h*v)*I,e[3]=(_*h*l-d*x*l-_*a*m+s*x*m+d*a*y-s*h*y)*I,e[4]=L*I,e[5]=(g*S*l-T*x*l+T*a*y-t*S*y-g*a*v+t*x*v)*I,e[6]=(T*h*l-c*S*l-T*a*m+t*S*m+c*a*v-t*h*v)*I,e[7]=(c*x*l-g*h*l+g*a*m-t*x*m-c*a*y+t*h*y)*I,e[8]=b*I,e[9]=(T*_*l-g*w*l-T*s*y+t*w*y+g*s*v-t*_*v)*I,e[10]=(c*w*l-T*d*l+T*s*m-t*w*m-c*s*v+t*d*v)*I,e[11]=(g*d*l-c*_*l-g*s*m+t*_*m+c*s*y-t*d*y)*I,e[12]=U*I,e[13]=(g*w*a-T*_*a+T*s*x-t*w*x-g*s*S+t*_*S)*I,e[14]=(T*d*a-c*w*a-T*s*h+t*w*h+c*s*S-t*d*S)*I,e[15]=(c*_*a-g*d*a+g*s*h-t*_*h-c*s*x+t*d*x)*I,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,c=e.x,d=e.y,h=e.z,m=l*c,g=l*d;return this.set(m*c+s,m*d-a*h,m*h+a*d,0,m*d+a*h,g*d+s,g*h-a*c,0,m*h-a*d,g*h+a*c,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,c){return this.set(1,s,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,c=t._y,d=t._z,h=t._w,m=l+l,g=c+c,_=d+d,x=l*m,y=l*g,T=l*_,w=c*g,S=c*_,v=d*_,D=h*m,L=h*g,b=h*_,U=s.x,F=s.y,I=s.z;return a[0]=(1-(w+v))*U,a[1]=(y+b)*U,a[2]=(T-L)*U,a[3]=0,a[4]=(y-b)*F,a[5]=(1-(x+v))*F,a[6]=(S+D)*F,a[7]=0,a[8]=(T+L)*I,a[9]=(S-D)*I,a[10]=(1-(x+w))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;if(e.x=a[12],e.y=a[13],e.z=a[14],this.determinant()===0)return s.set(1,1,1),t.identity(),this;let l=$s.set(a[0],a[1],a[2]).length();const c=$s.set(a[4],a[5],a[6]).length(),d=$s.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),_i.copy(this);const m=1/l,g=1/c,_=1/d;return _i.elements[0]*=m,_i.elements[1]*=m,_i.elements[2]*=m,_i.elements[4]*=g,_i.elements[5]*=g,_i.elements[6]*=g,_i.elements[8]*=_,_i.elements[9]*=_,_i.elements[10]*=_,t.setFromRotationMatrix(_i),s.x=l,s.y=c,s.z=d,this}makePerspective(e,t,s,a,l,c,d=Ni,h=!1){const m=this.elements,g=2*l/(t-e),_=2*l/(s-a),x=(t+e)/(t-e),y=(s+a)/(s-a);let T,w;if(h)T=l/(c-l),w=c*l/(c-l);else if(d===Ni)T=-(c+l)/(c-l),w=-2*c*l/(c-l);else if(d===yu)T=-c/(c-l),w=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=_,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=w,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,s,a,l,c,d=Ni,h=!1){const m=this.elements,g=2/(t-e),_=2/(s-a),x=-(t+e)/(t-e),y=-(s+a)/(s-a);let T,w;if(h)T=1/(c-l),w=c/(c-l);else if(d===Ni)T=-2/(c-l),w=-(c+l)/(c-l);else if(d===yu)T=-1/(c-l),w=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=_,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=T,m[14]=w,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const $s=new re,_i=new nn,sy=new re(0,0,0),oy=new re(1,1,1),Ir=new re,Hl=new re,qn=new re,wg=new nn,Ag=new Ta;class lr{constructor(e=0,t=0,s=0,a=lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],c=a[4],d=a[8],h=a[1],m=a[5],g=a[9],_=a[2],x=a[6],y=a[10];switch(t){case"XYZ":this._y=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(vt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-vt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-g,y),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return wg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wg,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ag.setFromEuler(this),this.setFromQuaternion(Ag,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lr.DEFAULT_ORDER="XYZ";class J0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ay=0;const Cg=new re,Ks=new Ta,Zi=new nn,Wl=new re,aa=new re,ly=new re,uy=new Ta,Rg=new re(1,0,0),bg=new re(0,1,0),Pg=new re(0,0,1),Dg={type:"added"},cy={type:"removed"},Zs={type:"childadded",child:null},Ff={type:"childremoved",child:null};class Zn extends xo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zn.DEFAULT_UP.clone();const e=new re,t=new lr,s=new Ta,a=new re(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new nn},normalMatrix:{value:new ct}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new J0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(Rg,e)}rotateY(e){return this.rotateOnAxis(bg,e)}rotateZ(e){return this.rotateOnAxis(Pg,e)}translateOnAxis(e,t){return Cg.copy(e).applyQuaternion(this.quaternion),this.position.add(Cg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rg,e)}translateY(e){return this.translateOnAxis(bg,e)}translateZ(e){return this.translateOnAxis(Pg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Wl.copy(e):Wl.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(aa,Wl,this.up):Zi.lookAt(Wl,aa,this.up),this.quaternion.setFromRotationMatrix(Zi),a&&(Zi.extractRotation(a.matrixWorld),Ks.setFromRotationMatrix(Zi),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dg),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cy),Ff.child=e,this.dispatchEvent(Ff),Ff.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dg),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,ly),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,uy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const _=h[m];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(l(e.materials,this.material[h]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(l(e.animations,h))}}if(t){const d=c(e.geometries),h=c(e.materials),m=c(e.textures),g=c(e.images),_=c(e.shapes),x=c(e.skeletons),y=c(e.animations),T=c(e.nodes);d.length>0&&(s.geometries=d),h.length>0&&(s.materials=h),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),T.length>0&&(s.nodes=T)}return s.object=a,s;function c(d){const h=[];for(const m in d){const g=d[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}Zn.DEFAULT_UP=new re(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new re,Qi=new re,Of=new re,Ji=new re,Qs=new re,Js=new re,Lg=new re,kf=new re,Bf=new re,zf=new re,Vf=new Qt,Gf=new Qt,Hf=new Qt;class Si{constructor(e=new re,t=new re,s=new re){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),vi.subVectors(e,t),a.cross(vi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){vi.subVectors(a,t),Qi.subVectors(s,t),Of.subVectors(e,t);const c=vi.dot(vi),d=vi.dot(Qi),h=vi.dot(Of),m=Qi.dot(Qi),g=Qi.dot(Of),_=c*m-d*d;if(_===0)return l.set(0,0,0),null;const x=1/_,y=(m*h-d*g)*x,T=(c*g-d*h)*x;return l.set(1-y-T,T,y)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,s,a,l,c,d,h){return this.getBarycoord(e,t,s,a,Ji)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Ji.x),h.addScaledVector(c,Ji.y),h.addScaledVector(d,Ji.z),h)}static getInterpolatedAttribute(e,t,s,a,l,c){return Vf.setScalar(0),Gf.setScalar(0),Hf.setScalar(0),Vf.fromBufferAttribute(e,t),Gf.fromBufferAttribute(e,s),Hf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Vf,l.x),c.addScaledVector(Gf,l.y),c.addScaledVector(Hf,l.z),c}static isFrontFacing(e,t,s,a){return vi.subVectors(s,t),Qi.subVectors(e,t),vi.cross(Qi).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),vi.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return Si.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let c,d;Qs.subVectors(a,s),Js.subVectors(l,s),kf.subVectors(e,s);const h=Qs.dot(kf),m=Js.dot(kf);if(h<=0&&m<=0)return t.copy(s);Bf.subVectors(e,a);const g=Qs.dot(Bf),_=Js.dot(Bf);if(g>=0&&_<=g)return t.copy(a);const x=h*_-g*m;if(x<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(s).addScaledVector(Qs,c);zf.subVectors(e,l);const y=Qs.dot(zf),T=Js.dot(zf);if(T>=0&&y<=T)return t.copy(l);const w=y*m-h*T;if(w<=0&&m>=0&&T<=0)return d=m/(m-T),t.copy(s).addScaledVector(Js,d);const S=g*T-y*_;if(S<=0&&_-g>=0&&y-T>=0)return Lg.subVectors(l,a),d=(_-g)/(_-g+(y-T)),t.copy(a).addScaledVector(Lg,d);const v=1/(S+w+x);return c=w*v,d=x*v,t.copy(s).addScaledVector(Qs,c).addScaledVector(Js,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const e_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nr={h:0,s:0,l:0},Xl={h:0,s:0,l:0};function Wf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ut{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,a=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Tt.colorSpaceToWorking(this,a),this}setHSL(e,t,s,a=Tt.workingColorSpace){if(e=KS(e,1),t=vt(t,0,1),s=vt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Wf(c,l,e+1/3),this.g=Wf(c,l,e),this.b=Wf(c,l,e-1/3)}return Tt.colorSpaceToWorking(this,a),this}setStyle(e,t=oi){function s(l){l!==void 0&&parseFloat(l)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ot("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=oi){const s=e_[e.toLowerCase()];return s!==void 0?this.setHex(s,t):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return Tt.workingToColorSpace(wn.copy(this),e),Math.round(vt(wn.r*255,0,255))*65536+Math.round(vt(wn.g*255,0,255))*256+Math.round(vt(wn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(wn.copy(this),t);const s=wn.r,a=wn.g,l=wn.b,c=Math.max(s,a,l),d=Math.min(s,a,l);let h,m;const g=(d+c)/2;if(d===c)h=0,m=0;else{const _=c-d;switch(m=g<=.5?_/(c+d):_/(2-c-d),c){case s:h=(a-l)/_+(a<l?6:0);break;case a:h=(l-s)/_+2;break;case l:h=(s-a)/_+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=oi){Tt.workingToColorSpace(wn.copy(this),e);const t=wn.r,s=wn.g,a=wn.b;return e!==oi?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(Nr),this.setHSL(Nr.h+e,Nr.s+t,Nr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Nr),e.getHSL(Xl);const s=Af(Nr.h,Xl.h,t),a=Af(Nr.s,Xl.s,t),l=Af(Nr.l,Xl.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Ut;Ut.NAMES=e_;let fy=0;class Du extends xo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=Ea(),this.name="",this.type="Material",this.blending=so,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ld,this.blendDst=ud,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){ot(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==so&&(s.blending=this.blending),this.side!==Br&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ld&&(s.blendSrc=this.blendSrc),this.blendDst!==ud&&(s.blendDst=this.blendDst),this.blendEquation!==fs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const c=[];for(const d in l){const h=l[d];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class t_ extends Du{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.combine=U0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new re,jl=new Ft;let dy=0;class Oi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=xg,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)jl.fromBufferAttribute(this,t),jl.applyMatrix3(e),this.setXY(t,jl.x,jl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=ra(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Bn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ra(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ra(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ra(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ra(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),s=Bn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),s=Bn(s,this.array),a=Bn(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),s=Bn(s,this.array),a=Bn(a,this.array),l=Bn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xg&&(e.usage=this.usage),e}}class n_ extends Oi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class i_ extends Oi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class sr extends Oi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let hy=0;const si=new nn,Xf=new Zn,eo=new re,Yn=new wa,la=new wa,pn=new re;class ur extends xo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Ea(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Z0(e)?i_:n_)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ct().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,s){return si.makeTranslation(e,t,s),this.applyMatrix4(si),this}scale(e,t,s){return si.makeScale(e,t,s),this.applyMatrix4(si),this}lookAt(e){return Xf.lookAt(e),Xf.updateMatrix(),this.applyMatrix4(Xf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new sr(s,3))}else{const s=Math.min(e.length,t.count);for(let a=0;a<s;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Yn.setFromBufferAttribute(l),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const s=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];la.setFromBufferAttribute(d),this.morphTargetsRelative?(pn.addVectors(Yn.min,la.min),Yn.expandByPoint(pn),pn.addVectors(Yn.max,la.max),Yn.expandByPoint(pn)):(Yn.expandByPoint(la.min),Yn.expandByPoint(la.max))}Yn.getCenter(s);let a=0;for(let l=0,c=e.count;l<c;l++)pn.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(pn));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],h=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)pn.fromBufferAttribute(d,m),h&&(eo.fromBufferAttribute(e,m),pn.add(eo)),a=Math.max(a,s.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),d=[],h=[];for(let Y=0;Y<s.count;Y++)d[Y]=new re,h[Y]=new re;const m=new re,g=new re,_=new re,x=new Ft,y=new Ft,T=new Ft,w=new re,S=new re;function v(Y,C,R){m.fromBufferAttribute(s,Y),g.fromBufferAttribute(s,C),_.fromBufferAttribute(s,R),x.fromBufferAttribute(l,Y),y.fromBufferAttribute(l,C),T.fromBufferAttribute(l,R),g.sub(m),_.sub(m),y.sub(x),T.sub(x);const V=1/(y.x*T.y-T.x*y.y);isFinite(V)&&(w.copy(g).multiplyScalar(T.y).addScaledVector(_,-y.y).multiplyScalar(V),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-T.x).multiplyScalar(V),d[Y].add(w),d[C].add(w),d[R].add(w),h[Y].add(S),h[C].add(S),h[R].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let Y=0,C=D.length;Y<C;++Y){const R=D[Y],V=R.start,se=R.count;for(let Z=V,fe=V+se;Z<fe;Z+=3)v(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const L=new re,b=new re,U=new re,F=new re;function I(Y){U.fromBufferAttribute(a,Y),F.copy(U);const C=d[Y];L.copy(C),L.sub(U.multiplyScalar(U.dot(C))).normalize(),b.crossVectors(F,C);const V=b.dot(h[Y])<0?-1:1;c.setXYZW(Y,L.x,L.y,L.z,V)}for(let Y=0,C=D.length;Y<C;++Y){const R=D[Y],V=R.start,se=R.count;for(let Z=V,fe=V+se;Z<fe;Z+=3)I(e.getX(Z+0)),I(e.getX(Z+1)),I(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Oi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const a=new re,l=new re,c=new re,d=new re,h=new re,m=new re,g=new re,_=new re;if(e)for(let x=0,y=e.count;x<y;x+=3){const T=e.getX(x+0),w=e.getX(x+1),S=e.getX(x+2);a.fromBufferAttribute(t,T),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,S),g.subVectors(c,l),_.subVectors(a,l),g.cross(_),d.fromBufferAttribute(s,T),h.fromBufferAttribute(s,w),m.fromBufferAttribute(s,S),d.add(g),h.add(g),m.add(g),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(w,h.x,h.y,h.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,y=t.count;x<y;x+=3)a.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),g.subVectors(c,l),_.subVectors(a,l),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(d,h){const m=d.array,g=d.itemSize,_=d.normalized,x=new m.constructor(h.length*g);let y=0,T=0;for(let w=0,S=h.length;w<S;w++){d.isInterleavedBufferAttribute?y=h[w]*d.data.stride+d.offset:y=h[w]*g;for(let v=0;v<g;v++)x[T++]=m[y++]}return new Oi(x,g,_)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ur,s=this.index.array,a=this.attributes;for(const d in a){const h=a[d],m=e(h,s);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const h=[],m=l[d];for(let g=0,_=m.length;g<_;g++){const x=m[g],y=e(x,s);h.push(y)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,h=c.length;d<h;d++){const m=c[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const m=s[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let _=0,x=m.length;_<x;_++){const y=m[_];g.push(y.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(t))}const l=e.morphAttributes;for(const m in l){const g=[],_=l[m];for(let x=0,y=_.length;x<y;x++)g.push(_[x].clone(t));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,g=c.length;m<g;m++){const _=c[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ig=new nn,os=new ry,ql=new yh,Ng=new re,Yl=new re,$l=new re,Kl=new re,jf=new re,Zl=new re,Ug=new re,Ql=new re;class zi extends Zn{constructor(e=new ur,t=new t_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){Zl.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const g=d[h],_=l[h];g!==0&&(jf.fromBufferAttribute(_,e),c?Zl.addScaledVector(jf,g):Zl.addScaledVector(jf.sub(t),g))}t.add(Zl)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),ql.copy(s.boundingSphere),ql.applyMatrix4(l),os.copy(e.ray).recast(e.near),!(ql.containsPoint(os.origin)===!1&&(os.intersectSphere(ql,Ng)===null||os.origin.distanceToSquared(Ng)>(e.far-e.near)**2))&&(Ig.copy(l).invert(),os.copy(e.ray).applyMatrix4(Ig),!(s.boundingBox!==null&&os.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,s){let a;const l=this.geometry,c=this.material,d=l.index,h=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,x=l.groups,y=l.drawRange;if(d!==null)if(Array.isArray(c))for(let T=0,w=x.length;T<w;T++){const S=x[T],v=c[S.materialIndex],D=Math.max(S.start,y.start),L=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let b=D,U=L;b<U;b+=3){const F=d.getX(b),I=d.getX(b+1),Y=d.getX(b+2);a=Jl(this,v,e,s,m,g,_,F,I,Y),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const T=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let S=T,v=w;S<v;S+=3){const D=d.getX(S),L=d.getX(S+1),b=d.getX(S+2);a=Jl(this,c,e,s,m,g,_,D,L,b),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let T=0,w=x.length;T<w;T++){const S=x[T],v=c[S.materialIndex],D=Math.max(S.start,y.start),L=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let b=D,U=L;b<U;b+=3){const F=b,I=b+1,Y=b+2;a=Jl(this,v,e,s,m,g,_,F,I,Y),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const T=Math.max(0,y.start),w=Math.min(h.count,y.start+y.count);for(let S=T,v=w;S<v;S+=3){const D=S,L=S+1,b=S+2;a=Jl(this,c,e,s,m,g,_,D,L,b),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function py(r,e,t,s,a,l,c,d){let h;if(e.side===Vn?h=s.intersectTriangle(c,l,a,!0,d):h=s.intersectTriangle(a,l,c,e.side===Br,d),h===null)return null;Ql.copy(d),Ql.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(Ql);return m<t.near||m>t.far?null:{distance:m,point:Ql.clone(),object:r}}function Jl(r,e,t,s,a,l,c,d,h,m){r.getVertexPosition(d,Yl),r.getVertexPosition(h,$l),r.getVertexPosition(m,Kl);const g=py(r,e,t,s,Yl,$l,Kl,Ug);if(g){const _=new re;Si.getBarycoord(Ug,Yl,$l,Kl,_),a&&(g.uv=Si.getInterpolatedAttribute(a,d,h,m,_,new Ft)),l&&(g.uv1=Si.getInterpolatedAttribute(l,d,h,m,_,new Ft)),c&&(g.normal=Si.getInterpolatedAttribute(c,d,h,m,_,new re),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:h,c:m,normal:new re,materialIndex:0};Si.getNormal(Yl,$l,Kl,x.normal),g.face=x,g.barycoord=_}return g}class Aa extends ur{constructor(e=1,t=1,s=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:c};const d=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],m=[],g=[],_=[];let x=0,y=0;T("z","y","x",-1,-1,s,t,e,c,l,0),T("z","y","x",1,-1,s,t,-e,c,l,1),T("x","z","y",1,1,e,s,t,a,c,2),T("x","z","y",1,-1,e,s,-t,a,c,3),T("x","y","z",1,-1,e,t,s,a,l,4),T("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(h),this.setAttribute("position",new sr(m,3)),this.setAttribute("normal",new sr(g,3)),this.setAttribute("uv",new sr(_,2));function T(w,S,v,D,L,b,U,F,I,Y,C){const R=b/I,V=U/Y,se=b/2,Z=U/2,fe=F/2,ce=I+1,oe=Y+1;let j=0,X=0;const le=new re;for(let te=0;te<oe;te++){const O=te*V-Z;for(let J=0;J<ce;J++){const we=J*R-se;le[w]=we*D,le[S]=O*L,le[v]=fe,m.push(le.x,le.y,le.z),le[w]=0,le[S]=0,le[v]=F>0?1:-1,g.push(le.x,le.y,le.z),_.push(J/I),_.push(1-te/Y),j+=1}}for(let te=0;te<Y;te++)for(let O=0;O<I;O++){const J=x+O+ce*te,we=x+O+ce*(te+1),Ve=x+(O+1)+ce*(te+1),Xe=x+(O+1)+ce*te;h.push(J,we,Xe),h.push(we,Ve,Xe),X+=6}d.addGroup(y,X,C),y+=X,x+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _o(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const a=r[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function Dn(r){const e={};for(let t=0;t<r.length;t++){const s=_o(r[t]);for(const a in s)e[a]=s[a]}return e}function my(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function r_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const gy={clone:_o,merge:Dn};var _y=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends Du{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_y,this.fragmentShader=vy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_o(e.uniforms),this.uniformsGroups=my(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class s_ extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ur=new re,Fg=new Ft,Og=new Ft;class xi extends s_{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=eh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eh*2*Math.atan(Math.tan(wf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z)}getViewSize(e,t){return this.getViewBounds(e,Fg,Og),t.subVectors(Og,Fg)}setViewOffset(e,t,s,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wf*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,m=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*s/m,a*=c.width/h,s*=c.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const to=-90,no=1;class xy extends Zn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new xi(to,no,e,t);a.layers=this.layers,this.add(a);const l=new xi(to,no,e,t);l.layers=this.layers,this.add(l);const c=new xi(to,no,e,t);c.layers=this.layers,this.add(c);const d=new xi(to,no,e,t);d.layers=this.layers,this.add(d);const h=new xi(to,no,e,t);h.layers=this.layers,this.add(h);const m=new xi(to,no,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,c,d,h]=t;for(const m of t)this.remove(m);if(e===Ni)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===yu)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,h,m,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,c),e.setRenderTarget(s,2,a),e.render(t,d),e.setRenderTarget(s,3,a),e.render(t,h),e.setRenderTarget(s,4,a),e.render(t,m),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,a),e.render(t,g),e.setRenderTarget(_,x,y),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class o_ extends Ln{constructor(e=[],t=xs,s,a,l,c,d,h,m,g){super(e,t,s,a,l,c,d,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class a_ extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new o_(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Aa(5,5,5),l=new Ei({name:"CubemapFromEquirect",uniforms:_o(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Vn,blending:ir});l.uniforms.tEquirect.value=t;const c=new zi(a,l),d=t.minFilter;return t.minFilter===ps&&(t.minFilter=An),new xy(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,s=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,a);e.setRenderTarget(l)}}class eu extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sy={type:"move"};class qf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new eu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new eu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new eu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,c=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const w of e.hand.values()){const S=t.getJointPose(w,s),v=this._getHandJoint(m,w);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=g.position.distanceTo(_.position),y=.02,T=.005;m.inputState.pinching&&x>y+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=y-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Sy)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new eu;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class yy extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new lr,this.environmentIntensity=1,this.environmentRotation=new lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class My extends Ln{constructor(e=null,t=1,s=1,a,l,c,d,h,m=vn,g=vn,_,x){super(null,c,d,h,m,g,a,l,_,x),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yf=new re,Ey=new re,Ty=new ct;class cs{constructor(e=new re(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=Yf.subVectors(s,t).cross(Ey.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Yf),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Ty.getNormalMatrix(e),a=this.coplanarPoint(Yf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new yh,wy=new Ft(.5,.5),tu=new re;class l_{constructor(e=new cs,t=new cs,s=new cs,a=new cs,l=new cs,c=new cs){this.planes=[e,t,s,a,l,c]}set(e,t,s,a,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(a),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Ni,s=!1){const a=this.planes,l=e.elements,c=l[0],d=l[1],h=l[2],m=l[3],g=l[4],_=l[5],x=l[6],y=l[7],T=l[8],w=l[9],S=l[10],v=l[11],D=l[12],L=l[13],b=l[14],U=l[15];if(a[0].setComponents(m-c,y-g,v-T,U-D).normalize(),a[1].setComponents(m+c,y+g,v+T,U+D).normalize(),a[2].setComponents(m+d,y+_,v+w,U+L).normalize(),a[3].setComponents(m-d,y-_,v-w,U-L).normalize(),s)a[4].setComponents(h,x,S,b).normalize(),a[5].setComponents(m-h,y-x,v-S,U-b).normalize();else if(a[4].setComponents(m-h,y-x,v-S,U-b).normalize(),t===Ni)a[5].setComponents(m+h,y+x,v+S,U+b).normalize();else if(t===yu)a[5].setComponents(h,x,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);const t=wy.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(tu.x=a.normal.x>0?e.max.x:e.min.x,tu.y=a.normal.y>0?e.max.y:e.min.y,tu.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(tu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ya extends Ln{constructor(e,t,s=Bi,a,l,c,d=vn,h=vn,m,g=ar,_=1){if(g!==ar&&g!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:_};super(x,a,l,c,d,h,g,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ay extends ya{constructor(e,t=Bi,s=xs,a,l,c=vn,d=vn,h,m=ar){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,t,s,a,l,c,d,h,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class u_ extends Ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ca extends ur{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,c=t/2,d=Math.floor(s),h=Math.floor(a),m=d+1,g=h+1,_=e/d,x=t/h,y=[],T=[],w=[],S=[];for(let v=0;v<g;v++){const D=v*x-c;for(let L=0;L<m;L++){const b=L*_-l;T.push(b,-D,0),w.push(0,0,1),S.push(L/d),S.push(1-v/h)}}for(let v=0;v<h;v++)for(let D=0;D<d;D++){const L=D+m*v,b=D+m*(v+1),U=D+1+m*(v+1),F=D+1+m*v;y.push(L,b,F),y.push(b,U,F)}this.setIndex(y),this.setAttribute("position",new sr(T,3)),this.setAttribute("normal",new sr(w,3)),this.setAttribute("uv",new sr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.width,e.height,e.widthSegments,e.heightSegments)}}class Cy extends Ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ry extends Du{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class by extends Du{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Mh extends s_{constructor(e=-1,t=1,s=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,c=s+e,d=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,d-=g*this.view.offsetY,h=d-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Py extends xi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Dy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function kg(r,e,t,s){const a=Ly(s);switch(t){case Y0:return r*e;case K0:return r*e/a.components*a.byteLength;case mh:return r*e/a.components*a.byteLength;case mo:return r*e*2/a.components*a.byteLength;case gh:return r*e*2/a.components*a.byteLength;case $0:return r*e*3/a.components*a.byteLength;case yi:return r*e*4/a.components*a.byteLength;case _h:return r*e*4/a.components*a.byteLength;case fu:case du:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case hu:case pu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Md:case Td:return Math.max(r,16)*Math.max(e,8)/4;case yd:case Ed:return Math.max(r,8)*Math.max(e,8)/2;case wd:case Ad:case Rd:case bd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Cd:case Pd:case Dd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Od:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case kd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case zd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Hd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Wd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Xd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case jd:case qd:case Yd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case $d:case Kd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Zd:case Qd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ly(r){switch(r){case ai:case W0:return{byteLength:1,components:1};case va:case X0:case or:return{byteLength:2,components:1};case hh:case ph:return{byteLength:2,components:4};case Bi:case dh:case Ii:return{byteLength:4,components:1};case j0:case q0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fh}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function c_(){let r=null,e=!1,t=null,s=null;function a(l,c){t(l,c),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function Iy(r){const e=new WeakMap;function t(d,h){const m=d.array,g=d.usage,_=m.byteLength,x=r.createBuffer();r.bindBuffer(h,x),r.bufferData(h,m,g),d.onUploadCallback();let y;if(m instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=r.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=r.SHORT;else if(m instanceof Uint32Array)y=r.UNSIGNED_INT;else if(m instanceof Int32Array)y=r.INT;else if(m instanceof Int8Array)y=r.BYTE;else if(m instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,h,m){const g=h.array,_=h.updateRanges;if(r.bindBuffer(m,d),_.length===0)r.bufferSubData(m,0,g);else{_.sort((y,T)=>y.start-T.start);let x=0;for(let y=1;y<_.length;y++){const T=_[x],w=_[y];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++x,_[x]=w)}_.length=x+1;for(let y=0,T=_.length;y<T;y++){const w=_[y];r.bufferSubData(m,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(r.deleteBuffer(h.buffer),e.delete(d))}function c(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,h),m.version=d.version}}return{get:a,remove:l,update:c}}var Ny=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uy=`#ifdef USE_ALPHAHASH
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
#endif`,Fy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Oy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,By=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zy=`#ifdef USE_AOMAP
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
#endif`,Vy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gy=`#ifdef USE_BATCHING
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
#endif`,Hy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qy=`#ifdef USE_IRIDESCENCE
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
#endif`,Yy=`#ifdef USE_BUMPMAP
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
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,iM=`#define PI 3.141592653589793
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
} // validated`,rM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sM=`vec3 transformedNormal = objectNormal;
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
#endif`,oM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cM="gl_FragColor = linearToOutputTexel( gl_FragColor );",fM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dM=`#ifdef USE_ENVMAP
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
#endif`,hM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
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
#endif`,mM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gM=`#ifdef USE_ENVMAP
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
#endif`,_M=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yM=`#ifdef USE_GRADIENTMAP
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
}`,MM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,EM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wM=`uniform bool receiveShadow;
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
#endif`,AM=`#ifdef USE_ENVMAP
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
#endif`,CM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DM=`PhysicalMaterial material;
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
#endif`,LM=`uniform sampler2D dfgLUT;
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
}`,IM=`
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
#endif`,NM=`#if defined( RE_IndirectDiffuse )
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
#endif`,UM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,HM=`#if defined( USE_POINTS_UV )
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
#endif`,WM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$M=`#ifdef USE_MORPHTARGETS
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
#endif`,KM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,QM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,JM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nE=`#ifdef USE_NORMALMAP
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
#endif`,iE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_E=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vE=`float getShadowMask() {
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
}`,xE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SE=`#ifdef USE_SKINNING
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
#endif`,yE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ME=`#ifdef USE_SKINNING
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
#endif`,EE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,CE=`#ifdef USE_TRANSMISSION
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
#endif`,RE=`#ifdef USE_TRANSMISSION
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
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NE=`uniform sampler2D t2D;
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
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`#include <common>
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
}`,zE=`#if DEPTH_PACKING == 3200
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
}`,VE=`#define DISTANCE
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
}`,GE=`#define DISTANCE
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
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`uniform float scale;
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
}`,jE=`uniform vec3 diffuse;
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
}`,qE=`#include <common>
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
}`,YE=`uniform vec3 diffuse;
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
}`,$E=`#define LAMBERT
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
}`,KE=`#define LAMBERT
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
}`,ZE=`#define MATCAP
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
}`,QE=`#define MATCAP
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
}`,JE=`#define NORMAL
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
}`,e1=`#define NORMAL
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
}`,t1=`#define PHONG
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
}`,n1=`#define PHONG
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
}`,i1=`#define STANDARD
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
}`,r1=`#define STANDARD
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
}`,s1=`#define TOON
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
}`,o1=`#define TOON
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
}`,a1=`uniform float size;
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
}`,l1=`uniform vec3 diffuse;
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
}`,u1=`#include <common>
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
}`,c1=`uniform vec3 color;
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
}`,f1=`uniform float rotation;
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
}`,d1=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:Ny,alphahash_pars_fragment:Uy,alphamap_fragment:Fy,alphamap_pars_fragment:Oy,alphatest_fragment:ky,alphatest_pars_fragment:By,aomap_fragment:zy,aomap_pars_fragment:Vy,batching_pars_vertex:Gy,batching_vertex:Hy,begin_vertex:Wy,beginnormal_vertex:Xy,bsdfs:jy,iridescence_fragment:qy,bumpmap_pars_fragment:Yy,clipping_planes_fragment:$y,clipping_planes_pars_fragment:Ky,clipping_planes_pars_vertex:Zy,clipping_planes_vertex:Qy,color_fragment:Jy,color_pars_fragment:eM,color_pars_vertex:tM,color_vertex:nM,common:iM,cube_uv_reflection_fragment:rM,defaultnormal_vertex:sM,displacementmap_pars_vertex:oM,displacementmap_vertex:aM,emissivemap_fragment:lM,emissivemap_pars_fragment:uM,colorspace_fragment:cM,colorspace_pars_fragment:fM,envmap_fragment:dM,envmap_common_pars_fragment:hM,envmap_pars_fragment:pM,envmap_pars_vertex:mM,envmap_physical_pars_fragment:AM,envmap_vertex:gM,fog_vertex:_M,fog_pars_vertex:vM,fog_fragment:xM,fog_pars_fragment:SM,gradientmap_pars_fragment:yM,lightmap_pars_fragment:MM,lights_lambert_fragment:EM,lights_lambert_pars_fragment:TM,lights_pars_begin:wM,lights_toon_fragment:CM,lights_toon_pars_fragment:RM,lights_phong_fragment:bM,lights_phong_pars_fragment:PM,lights_physical_fragment:DM,lights_physical_pars_fragment:LM,lights_fragment_begin:IM,lights_fragment_maps:NM,lights_fragment_end:UM,logdepthbuf_fragment:FM,logdepthbuf_pars_fragment:OM,logdepthbuf_pars_vertex:kM,logdepthbuf_vertex:BM,map_fragment:zM,map_pars_fragment:VM,map_particle_fragment:GM,map_particle_pars_fragment:HM,metalnessmap_fragment:WM,metalnessmap_pars_fragment:XM,morphinstance_vertex:jM,morphcolor_vertex:qM,morphnormal_vertex:YM,morphtarget_pars_vertex:$M,morphtarget_vertex:KM,normal_fragment_begin:ZM,normal_fragment_maps:QM,normal_pars_fragment:JM,normal_pars_vertex:eE,normal_vertex:tE,normalmap_pars_fragment:nE,clearcoat_normal_fragment_begin:iE,clearcoat_normal_fragment_maps:rE,clearcoat_pars_fragment:sE,iridescence_pars_fragment:oE,opaque_fragment:aE,packing:lE,premultiplied_alpha_fragment:uE,project_vertex:cE,dithering_fragment:fE,dithering_pars_fragment:dE,roughnessmap_fragment:hE,roughnessmap_pars_fragment:pE,shadowmap_pars_fragment:mE,shadowmap_pars_vertex:gE,shadowmap_vertex:_E,shadowmask_pars_fragment:vE,skinbase_vertex:xE,skinning_pars_vertex:SE,skinning_vertex:yE,skinnormal_vertex:ME,specularmap_fragment:EE,specularmap_pars_fragment:TE,tonemapping_fragment:wE,tonemapping_pars_fragment:AE,transmission_fragment:CE,transmission_pars_fragment:RE,uv_pars_fragment:bE,uv_pars_vertex:PE,uv_vertex:DE,worldpos_vertex:LE,background_vert:IE,background_frag:NE,backgroundCube_vert:UE,backgroundCube_frag:FE,cube_vert:OE,cube_frag:kE,depth_vert:BE,depth_frag:zE,distance_vert:VE,distance_frag:GE,equirect_vert:HE,equirect_frag:WE,linedashed_vert:XE,linedashed_frag:jE,meshbasic_vert:qE,meshbasic_frag:YE,meshlambert_vert:$E,meshlambert_frag:KE,meshmatcap_vert:ZE,meshmatcap_frag:QE,meshnormal_vert:JE,meshnormal_frag:e1,meshphong_vert:t1,meshphong_frag:n1,meshphysical_vert:i1,meshphysical_frag:r1,meshtoon_vert:s1,meshtoon_frag:o1,points_vert:a1,points_frag:l1,shadow_vert:u1,shadow_frag:c1,sprite_vert:f1,sprite_frag:d1},Ne={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Li={basic:{uniforms:Dn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Dn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ut(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Dn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Dn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Dn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Ut(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Dn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Dn([Ne.points,Ne.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Dn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Dn([Ne.common,Ne.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Dn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Dn([Ne.sprite,Ne.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Dn([Ne.common,Ne.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Dn([Ne.lights,Ne.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Li.physical={uniforms:Dn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const nu={r:0,b:0,g:0},ls=new lr,h1=new nn;function p1(r,e,t,s,a,l,c){const d=new Ut(0);let h=l===!0?0:1,m,g,_=null,x=0,y=null;function T(L){let b=L.isScene===!0?L.background:null;return b&&b.isTexture&&(b=(L.backgroundBlurriness>0?t:e).get(b)),b}function w(L){let b=!1;const U=T(L);U===null?v(d,h):U&&U.isColor&&(v(U,1),b=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(r.autoClear||b)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(L,b){const U=T(b);U&&(U.isCubeTexture||U.mapping===Pu)?(g===void 0&&(g=new zi(new Aa(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:_o(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,I,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),ls.copy(b.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),g.material.uniforms.envMap.value=U,g.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(h1.makeRotationFromEuler(ls)),g.material.toneMapped=Tt.getTransfer(U.colorSpace)!==Nt,(_!==U||x!==U.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=U,x=U.version,y=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new zi(new Ca(2,2),new Ei({name:"BackgroundMaterial",uniforms:_o(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(U.colorSpace)!==Nt,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||x!==U.version||y!==r.toneMapping)&&(m.material.needsUpdate=!0,_=U,x=U.version,y=r.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function v(L,b){L.getRGB(nu,r_(r)),s.buffers.color.setClear(nu.r,nu.g,nu.b,b,c)}function D(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,b=1){d.set(L),h=b,v(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,v(d,h)},render:w,addToRenderList:S,dispose:D}}function m1(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=x(null);let l=a,c=!1;function d(R,V,se,Z,fe){let ce=!1;const oe=_(Z,se,V);l!==oe&&(l=oe,m(l.object)),ce=y(R,Z,se,fe),ce&&T(R,Z,se,fe),fe!==null&&e.update(fe,r.ELEMENT_ARRAY_BUFFER),(ce||c)&&(c=!1,b(R,V,se,Z),fe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function h(){return r.createVertexArray()}function m(R){return r.bindVertexArray(R)}function g(R){return r.deleteVertexArray(R)}function _(R,V,se){const Z=se.wireframe===!0;let fe=s[R.id];fe===void 0&&(fe={},s[R.id]=fe);let ce=fe[V.id];ce===void 0&&(ce={},fe[V.id]=ce);let oe=ce[Z];return oe===void 0&&(oe=x(h()),ce[Z]=oe),oe}function x(R){const V=[],se=[],Z=[];for(let fe=0;fe<t;fe++)V[fe]=0,se[fe]=0,Z[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:se,attributeDivisors:Z,object:R,attributes:{},index:null}}function y(R,V,se,Z){const fe=l.attributes,ce=V.attributes;let oe=0;const j=se.getAttributes();for(const X in j)if(j[X].location>=0){const te=fe[X];let O=ce[X];if(O===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(O=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(O=R.instanceColor)),te===void 0||te.attribute!==O||O&&te.data!==O.data)return!0;oe++}return l.attributesNum!==oe||l.index!==Z}function T(R,V,se,Z){const fe={},ce=V.attributes;let oe=0;const j=se.getAttributes();for(const X in j)if(j[X].location>=0){let te=ce[X];te===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(te=R.instanceColor));const O={};O.attribute=te,te&&te.data&&(O.data=te.data),fe[X]=O,oe++}l.attributes=fe,l.attributesNum=oe,l.index=Z}function w(){const R=l.newAttributes;for(let V=0,se=R.length;V<se;V++)R[V]=0}function S(R){v(R,0)}function v(R,V){const se=l.newAttributes,Z=l.enabledAttributes,fe=l.attributeDivisors;se[R]=1,Z[R]===0&&(r.enableVertexAttribArray(R),Z[R]=1),fe[R]!==V&&(r.vertexAttribDivisor(R,V),fe[R]=V)}function D(){const R=l.newAttributes,V=l.enabledAttributes;for(let se=0,Z=V.length;se<Z;se++)V[se]!==R[se]&&(r.disableVertexAttribArray(se),V[se]=0)}function L(R,V,se,Z,fe,ce,oe){oe===!0?r.vertexAttribIPointer(R,V,se,fe,ce):r.vertexAttribPointer(R,V,se,Z,fe,ce)}function b(R,V,se,Z){w();const fe=Z.attributes,ce=se.getAttributes(),oe=V.defaultAttributeValues;for(const j in ce){const X=ce[j];if(X.location>=0){let le=fe[j];if(le===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),le!==void 0){const te=le.normalized,O=le.itemSize,J=e.get(le);if(J===void 0)continue;const we=J.buffer,Ve=J.type,Xe=J.bytesPerElement,Q=Ve===r.INT||Ve===r.UNSIGNED_INT||le.gpuType===dh;if(le.isInterleavedBufferAttribute){const ue=le.data,_e=ue.stride,Ue=le.offset;if(ue.isInstancedInterleavedBuffer){for(let Pe=0;Pe<X.locationSize;Pe++)v(X.location+Pe,ue.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Pe=0;Pe<X.locationSize;Pe++)S(X.location+Pe);r.bindBuffer(r.ARRAY_BUFFER,we);for(let Pe=0;Pe<X.locationSize;Pe++)L(X.location+Pe,O/X.locationSize,Ve,te,_e*Xe,(Ue+O/X.locationSize*Pe)*Xe,Q)}else{if(le.isInstancedBufferAttribute){for(let ue=0;ue<X.locationSize;ue++)v(X.location+ue,le.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ue=0;ue<X.locationSize;ue++)S(X.location+ue);r.bindBuffer(r.ARRAY_BUFFER,we);for(let ue=0;ue<X.locationSize;ue++)L(X.location+ue,O/X.locationSize,Ve,te,O*Xe,O/X.locationSize*ue*Xe,Q)}}else if(oe!==void 0){const te=oe[j];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(X.location,te);break;case 3:r.vertexAttrib3fv(X.location,te);break;case 4:r.vertexAttrib4fv(X.location,te);break;default:r.vertexAttrib1fv(X.location,te)}}}}D()}function U(){Y();for(const R in s){const V=s[R];for(const se in V){const Z=V[se];for(const fe in Z)g(Z[fe].object),delete Z[fe];delete V[se]}delete s[R]}}function F(R){if(s[R.id]===void 0)return;const V=s[R.id];for(const se in V){const Z=V[se];for(const fe in Z)g(Z[fe].object),delete Z[fe];delete V[se]}delete s[R.id]}function I(R){for(const V in s){const se=s[V];if(se[R.id]===void 0)continue;const Z=se[R.id];for(const fe in Z)g(Z[fe].object),delete Z[fe];delete se[R.id]}}function Y(){C(),c=!0,l!==a&&(l=a,m(l.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:C,dispose:U,releaseStatesOfGeometry:F,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:S,disableUnusedAttributes:D}}function g1(r,e,t){let s;function a(m){s=m}function l(m,g){r.drawArrays(s,m,g),t.update(g,s,1)}function c(m,g,_){_!==0&&(r.drawArraysInstanced(s,m,g,_),t.update(g,s,_))}function d(m,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,_);let y=0;for(let T=0;T<_;T++)y+=g[T];t.update(y,s,1)}function h(m,g,_,x){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<m.length;T++)c(m[T],g[T],x[T]);else{y.multiDrawArraysInstancedWEBGL(s,m,0,g,0,x,0,_);let T=0;for(let w=0;w<_;w++)T+=g[w]*x[w];t.update(T,s,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function _1(r,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(I){return!(I!==yi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const Y=I===or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ai&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ii&&!Y)}function h(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const g=h(m);g!==m&&(ot("WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),U=r.getParameter(r.MAX_SAMPLES),F=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:b,maxSamples:U,samples:F}}function v1(r){const e=this;let t=null,s=0,a=!1,l=!1;const c=new cs,d=new ct,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||s!==0||a;return a=x,s=_.length,y},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,x){t=g(_,x,0)},this.setState=function(_,x,y){const T=_.clippingPlanes,w=_.clipIntersection,S=_.clipShadows,v=r.get(_);if(!a||T===null||T.length===0||l&&!S)l?g(null):m();else{const D=l?0:s,L=D*4;let b=v.clippingState||null;h.value=b,b=g(T,x,L,y);for(let U=0;U!==L;++U)b[U]=t[U];v.clippingState=b,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(_,x,y,T){const w=_!==null?_.length:0;let S=null;if(w!==0){if(S=h.value,T!==!0||S===null){const v=y+w*4,D=x.matrixWorldInverse;d.getNormalMatrix(D),(S===null||S.length<v)&&(S=new Float32Array(v));for(let L=0,b=y;L!==w;++L,b+=4)c.copy(_[L]).applyMatrix4(D,d),c.normal.toArray(S,b),S[b+3]=c.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}function x1(r){let e=new WeakMap;function t(c,d){return d===_d?c.mapping=xs:d===vd&&(c.mapping=po),c}function s(c){if(c&&c.isTexture){const d=c.mapping;if(d===_d||d===vd)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const m=new a_(h.height);return m.fromEquirectangularTexture(r,c),e.set(c,m),c.addEventListener("dispose",a),t(m.texture,c.mapping)}else return null}}return c}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const kr=4,Bg=[.125,.215,.35,.446,.526,.582],ds=20,S1=256,ua=new Mh,zg=new Ut;let $f=null,Kf=0,Zf=0,Qf=!1;const y1=new re;class Vg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,a=100,l={}){const{size:c=256,position:d=y1}=l;$f=this._renderer.getRenderTarget(),Kf=this._renderer.getActiveCubeFace(),Zf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,s,a,h,d),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($f,Kf,Zf),this._renderer.xr.enabled=Qf,e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xs||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$f=this._renderer.getRenderTarget(),Kf=this._renderer.getActiveCubeFace(),Zf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:An,minFilter:An,generateMipmaps:!1,type:or,format:yi,colorSpace:go,depthBuffer:!1},a=Gg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gg(e,t,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=M1(l)),this._blurMaterial=T1(l,e,t),this._ggxMaterial=E1(l,e,t)}return a}_compileMaterial(e){const t=new zi(new ur,e);this._renderer.compile(t,ua)}_sceneToCubeUV(e,t,s,a,l){const h=new xi(90,1,t,s),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(zg),_.toneMapping=Ui,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zi(new Aa,new t_({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,S=w.material;let v=!1;const D=e.background;D?D.isColor&&(S.color.copy(D),e.background=null,v=!0):(S.color.copy(zg),v=!0);for(let L=0;L<6;L++){const b=L%3;b===0?(h.up.set(0,m[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+g[L],l.y,l.z)):b===1?(h.up.set(0,0,m[L]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+g[L],l.z)):(h.up.set(0,m[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+g[L]));const U=this._cubeSize;io(a,b*U,L>2?U:0,U,U),_.setRenderTarget(a),v&&_.render(w,h),_.render(e,h)}_.toneMapping=y,_.autoClear=x,e.background=D}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===xs||e.mapping===po;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hg());const l=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;io(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(c,ua)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=s}_applyGGXFilter(e,t,s){const a=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[s];d.material=c;const h=c.uniforms,m=s/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),_=Math.sqrt(m*m-g*g),x=0+m*1.25,y=_*x,{_lodMax:T}=this,w=this._sizeLods[s],S=3*w*(s>T-kr?s-T+kr:0),v=4*(this._cubeSize-w);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=T-t,io(l,S,v,3*w,2*w),a.setRenderTarget(l),a.render(d,ua),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=T-s,io(e,S,v,3*w,2*w),a.setRenderTarget(e),a.render(d,ua)}_blur(e,t,s,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,a,"latitudinal",l),this._halfBlur(c,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,c,d){const h=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[a];_.material=m;const x=m.uniforms,y=this._sizeLods[s]-1,T=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*ds-1),w=l/T,S=isFinite(l)?1+Math.floor(g*w):ds;S>ds&&ot(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ds}`);const v=[];let D=0;for(let I=0;I<ds;++I){const Y=I/w,C=Math.exp(-Y*Y/2);v.push(C),I===0?D+=C:I<S&&(D+=2*C)}for(let I=0;I<v.length;I++)v[I]=v[I]/D;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=c==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-s;const b=this._sizeLods[a],U=3*b*(a>L-kr?a-L+kr:0),F=4*(this._cubeSize-b);io(t,U,F,3*b,2*b),h.setRenderTarget(t),h.render(_,ua)}}function M1(r){const e=[],t=[],s=[];let a=r;const l=r-kr+1+Bg.length;for(let c=0;c<l;c++){const d=Math.pow(2,a);e.push(d);let h=1/d;c>r-kr?h=Bg[c-r+kr-1]:c===0&&(h=0),t.push(h);const m=1/(d-2),g=-m,_=1+m,x=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,T=6,w=3,S=2,v=1,D=new Float32Array(w*T*y),L=new Float32Array(S*T*y),b=new Float32Array(v*T*y);for(let F=0;F<y;F++){const I=F%3*2/3-1,Y=F>2?0:-1,C=[I,Y,0,I+2/3,Y,0,I+2/3,Y+1,0,I,Y,0,I+2/3,Y+1,0,I,Y+1,0];D.set(C,w*T*F),L.set(x,S*T*F);const R=[F,F,F,F,F,F];b.set(R,v*T*F)}const U=new ur;U.setAttribute("position",new Oi(D,w)),U.setAttribute("uv",new Oi(L,S)),U.setAttribute("faceIndex",new Oi(b,v)),s.push(new zi(U,null)),a>kr&&a--}return{lodMeshes:s,sizeLods:e,sigmas:t}}function Gg(r,e,t){const s=new Fi(r,e,t);return s.texture.mapping=Pu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function io(r,e,t,s,a){r.viewport.set(e,t,s,a),r.scissor.set(e,t,s,a)}function E1(r,e,t){return new Ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:S1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function T1(r,e,t){const s=new Float32Array(ds),a=new re(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Hg(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Wg(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Lu(){return`

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
	`}function w1(r){let e=new WeakMap,t=null;function s(d){if(d&&d.isTexture){const h=d.mapping,m=h===_d||h===vd,g=h===xs||h===po;if(m||g){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return t===null&&(t=new Vg(r)),_=m?t.fromEquirectangular(d,_):t.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return m&&y&&y.height>0||g&&y&&a(y)?(t===null&&(t=new Vg(r)),_=m?t.fromEquirectangular(d):t.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",l),_.texture):null}}}return d}function a(d){let h=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&h++;return h===m}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function A1(r){const e={};function t(s){if(e[s]!==void 0)return e[s];const a=r.getExtension(s);return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&Sa("WebGLRenderer: "+s+" extension not supported."),a}}}function C1(r,e,t,s){const a={},l=new WeakMap;function c(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",c),delete a[x.id];const y=l.get(x);y&&(e.remove(y),l.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function d(_,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,t.memory.geometries++),x}function h(_){const x=_.attributes;for(const y in x)e.update(x[y],r.ARRAY_BUFFER)}function m(_){const x=[],y=_.index,T=_.attributes.position;let w=0;if(y!==null){const D=y.array;w=y.version;for(let L=0,b=D.length;L<b;L+=3){const U=D[L+0],F=D[L+1],I=D[L+2];x.push(U,F,F,I,I,U)}}else if(T!==void 0){const D=T.array;w=T.version;for(let L=0,b=D.length/3-1;L<b;L+=3){const U=L+0,F=L+1,I=L+2;x.push(U,F,F,I,I,U)}}else return;const S=new(Z0(x)?i_:n_)(x,1);S.version=w;const v=l.get(_);v&&e.remove(v),l.set(_,S)}function g(_){const x=l.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&m(_)}else m(_);return l.get(_)}return{get:d,update:h,getWireframeAttribute:g}}function R1(r,e,t){let s;function a(x){s=x}let l,c;function d(x){l=x.type,c=x.bytesPerElement}function h(x,y){r.drawElements(s,y,l,x*c),t.update(y,s,1)}function m(x,y,T){T!==0&&(r.drawElementsInstanced(s,y,l,x*c,T),t.update(y,s,T))}function g(x,y,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,l,x,0,T);let S=0;for(let v=0;v<T;v++)S+=y[v];t.update(S,s,1)}function _(x,y,T,w){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)m(x[v]/c,y[v],w[v]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,l,x,0,w,0,T);let v=0;for(let D=0;D<T;D++)v+=y[D]*w[D];t.update(v,s,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function b1(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,d){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=d*(l/3);break;case r.LINES:t.lines+=d*(l/2);break;case r.LINE_STRIP:t.lines+=d*(l-1);break;case r.LINE_LOOP:t.lines+=d*l;break;case r.POINTS:t.points+=d*l;break;default:Ct("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function P1(r,e,t){const s=new WeakMap,a=new Qt;function l(c,d,h){const m=c.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==_){let R=function(){Y.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var y=R;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let b=0;T===!0&&(b=1),w===!0&&(b=2),S===!0&&(b=3);let U=d.attributes.position.count*b,F=1;U>e.maxTextureSize&&(F=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const I=new Float32Array(U*F*4*_),Y=new Q0(I,U,F,_);Y.type=Ii,Y.needsUpdate=!0;const C=b*4;for(let V=0;V<_;V++){const se=v[V],Z=D[V],fe=L[V],ce=U*F*4*V;for(let oe=0;oe<se.count;oe++){const j=oe*C;T===!0&&(a.fromBufferAttribute(se,oe),I[ce+j+0]=a.x,I[ce+j+1]=a.y,I[ce+j+2]=a.z,I[ce+j+3]=0),w===!0&&(a.fromBufferAttribute(Z,oe),I[ce+j+4]=a.x,I[ce+j+5]=a.y,I[ce+j+6]=a.z,I[ce+j+7]=0),S===!0&&(a.fromBufferAttribute(fe,oe),I[ce+j+8]=a.x,I[ce+j+9]=a.y,I[ce+j+10]=a.z,I[ce+j+11]=fe.itemSize===4?a.w:1)}}x={count:_,texture:Y,size:new Ft(U,F)},s.set(d,x),d.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let T=0;for(let S=0;S<m.length;S++)T+=m[S];const w=d.morphTargetsRelative?1:1-T;h.getUniforms().setValue(r,"morphTargetBaseInfluence",w),h.getUniforms().setValue(r,"morphTargetInfluences",m)}h.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:l}}function D1(r,e,t,s){let a=new WeakMap;function l(h){const m=s.render.frame,g=h.geometry,_=e.get(h,g);if(a.get(_)!==m&&(e.update(_),a.set(_,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==m&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return _}function c(){a=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:c}}const L1={[F0]:"LINEAR_TONE_MAPPING",[O0]:"REINHARD_TONE_MAPPING",[k0]:"CINEON_TONE_MAPPING",[B0]:"ACES_FILMIC_TONE_MAPPING",[V0]:"AGX_TONE_MAPPING",[G0]:"NEUTRAL_TONE_MAPPING",[z0]:"CUSTOM_TONE_MAPPING"};function I1(r,e,t,s,a){const l=new Fi(e,t,{type:r,depthBuffer:s,stencilBuffer:a}),c=new Fi(e,t,{type:or,depthBuffer:!1,stencilBuffer:!1}),d=new ur;d.setAttribute("position",new sr([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new sr([0,2,0,0,2,0],2));const h=new Cy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new zi(d,h),g=new Mh(-1,1,1,-1,0,1);let _=null,x=null,y=!1,T,w=null,S=[],v=!1;this.setSize=function(D,L){l.setSize(D,L),c.setSize(D,L);for(let b=0;b<S.length;b++){const U=S[b];U.setSize&&U.setSize(D,L)}},this.setEffects=function(D){S=D,v=S.length>0&&S[0].isRenderPass===!0;const L=l.width,b=l.height;for(let U=0;U<S.length;U++){const F=S[U];F.setSize&&F.setSize(L,b)}},this.begin=function(D,L){if(y||D.toneMapping===Ui&&S.length===0)return!1;if(w=L,L!==null){const b=L.width,U=L.height;(l.width!==b||l.height!==U)&&this.setSize(b,U)}return v===!1&&D.setRenderTarget(l),T=D.toneMapping,D.toneMapping=Ui,!0},this.hasRenderPass=function(){return v},this.end=function(D,L){D.toneMapping=T,y=!0;let b=l,U=c;for(let F=0;F<S.length;F++){const I=S[F];if(I.enabled!==!1&&(I.render(D,U,b,L),I.needsSwap!==!1)){const Y=b;b=U,U=Y}}if(_!==D.outputColorSpace||x!==D.toneMapping){_=D.outputColorSpace,x=D.toneMapping,h.defines={},Tt.getTransfer(_)===Nt&&(h.defines.SRGB_TRANSFER="");const F=L1[x];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,D.setRenderTarget(w),D.render(m,g),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){l.dispose(),c.dispose(),d.dispose(),h.dispose()}}const f_=new Ln,th=new ya(1,1),d_=new Q0,h_=new ny,p_=new o_,Xg=[],jg=[],qg=new Float32Array(16),Yg=new Float32Array(9),$g=new Float32Array(4);function So(r,e,t){const s=r[0];if(s<=0||s>0)return r;const a=e*t;let l=Xg[a];if(l===void 0&&(l=new Float32Array(a),Xg[a]=l),e!==0){s.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,r[c].toArray(l,d)}return l}function an(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function ln(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function Iu(r,e){let t=jg[e];t===void 0&&(t=new Int32Array(e),jg[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function N1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function U1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2fv(this.addr,e),ln(t,e)}}function F1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;r.uniform3fv(this.addr,e),ln(t,e)}}function O1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4fv(this.addr,e),ln(t,e)}}function k1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(an(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,s))return;$g.set(s),r.uniformMatrix2fv(this.addr,!1,$g),ln(t,s)}}function B1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(an(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,s))return;Yg.set(s),r.uniformMatrix3fv(this.addr,!1,Yg),ln(t,s)}}function z1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(an(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,s))return;qg.set(s),r.uniformMatrix4fv(this.addr,!1,qg),ln(t,s)}}function V1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function G1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2iv(this.addr,e),ln(t,e)}}function H1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3iv(this.addr,e),ln(t,e)}}function W1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4iv(this.addr,e),ln(t,e)}}function X1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function j1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2uiv(this.addr,e),ln(t,e)}}function q1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3uiv(this.addr,e),ln(t,e)}}function Y1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4uiv(this.addr,e),ln(t,e)}}function $1(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(th.compareFunction=t.isReversedDepthBuffer()?xh:vh,l=th):l=f_,t.setTexture2D(e||l,a)}function K1(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||h_,a)}function Z1(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||p_,a)}function Q1(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||d_,a)}function J1(r){switch(r){case 5126:return N1;case 35664:return U1;case 35665:return F1;case 35666:return O1;case 35674:return k1;case 35675:return B1;case 35676:return z1;case 5124:case 35670:return V1;case 35667:case 35671:return G1;case 35668:case 35672:return H1;case 35669:case 35673:return W1;case 5125:return X1;case 36294:return j1;case 36295:return q1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return K1;case 35680:case 36300:case 36308:case 36293:return Z1;case 36289:case 36303:case 36311:case 36292:return Q1}}function eT(r,e){r.uniform1fv(this.addr,e)}function tT(r,e){const t=So(e,this.size,2);r.uniform2fv(this.addr,t)}function nT(r,e){const t=So(e,this.size,3);r.uniform3fv(this.addr,t)}function iT(r,e){const t=So(e,this.size,4);r.uniform4fv(this.addr,t)}function rT(r,e){const t=So(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function sT(r,e){const t=So(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function oT(r,e){const t=So(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function aT(r,e){r.uniform1iv(this.addr,e)}function lT(r,e){r.uniform2iv(this.addr,e)}function uT(r,e){r.uniform3iv(this.addr,e)}function cT(r,e){r.uniform4iv(this.addr,e)}function fT(r,e){r.uniform1uiv(this.addr,e)}function dT(r,e){r.uniform2uiv(this.addr,e)}function hT(r,e){r.uniform3uiv(this.addr,e)}function pT(r,e){r.uniform4uiv(this.addr,e)}function mT(r,e,t){const s=this.cache,a=e.length,l=Iu(t,a);an(s,l)||(r.uniform1iv(this.addr,l),ln(s,l));let c;this.type===r.SAMPLER_2D_SHADOW?c=th:c=f_;for(let d=0;d!==a;++d)t.setTexture2D(e[d]||c,l[d])}function gT(r,e,t){const s=this.cache,a=e.length,l=Iu(t,a);an(s,l)||(r.uniform1iv(this.addr,l),ln(s,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||h_,l[c])}function _T(r,e,t){const s=this.cache,a=e.length,l=Iu(t,a);an(s,l)||(r.uniform1iv(this.addr,l),ln(s,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||p_,l[c])}function vT(r,e,t){const s=this.cache,a=e.length,l=Iu(t,a);an(s,l)||(r.uniform1iv(this.addr,l),ln(s,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||d_,l[c])}function xT(r){switch(r){case 5126:return eT;case 35664:return tT;case 35665:return nT;case 35666:return iT;case 35674:return rT;case 35675:return sT;case 35676:return oT;case 5124:case 35670:return aT;case 35667:case 35671:return lT;case 35668:case 35672:return uT;case 35669:case 35673:return cT;case 5125:return fT;case 36294:return dT;case 36295:return hT;case 36296:return pT;case 35678:case 36198:case 36298:case 36306:case 35682:return mT;case 35679:case 36299:case 36307:return gT;case 35680:case 36300:case 36308:case 36293:return _T;case 36289:case 36303:case 36311:case 36292:return vT}}class ST{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=J1(t.type)}}class yT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xT(t.type)}}class MT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const d=a[l];d.setValue(e,t[d.id],s)}}}const Jf=/(\w+)(\])?(\[|\.)?/g;function Kg(r,e){r.seq.push(e),r.map[e.id]=e}function ET(r,e,t){const s=r.name,a=s.length;for(Jf.lastIndex=0;;){const l=Jf.exec(s),c=Jf.lastIndex;let d=l[1];const h=l[2]==="]",m=l[3];if(h&&(d=d|0),m===void 0||m==="["&&c+2===a){Kg(t,m===void 0?new ST(d,r,e):new yT(d,r,e));break}else{let _=t.map[d];_===void 0&&(_=new MT(d),Kg(t,_)),t=_}}}class mu{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<s;++c){const d=e.getActiveUniform(t,c),h=e.getUniformLocation(t,d.name);ET(d,h,this)}const a=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):l.push(c);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,c=t.length;l!==c;++l){const d=t[l],h=s[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&s.push(c)}return s}}function Zg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const TT=37297;let wT=0;function AT(r,e){const t=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const d=c+1;s.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return s.join(`
`)}const Qg=new ct;function CT(r){Tt._getMatrix(Qg,Tt.workingColorSpace,r);const e=`mat3( ${Qg.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(r)){case Su:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Jg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+AT(r.getShaderSource(e),d)}else return l}function RT(r,e){const t=CT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const bT={[F0]:"Linear",[O0]:"Reinhard",[k0]:"Cineon",[B0]:"ACESFilmic",[V0]:"AgX",[G0]:"Neutral",[z0]:"Custom"};function PT(r,e){const t=bT[e];return t===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const iu=new re;function DT(){Tt.getLuminanceCoefficients(iu);const r=iu.x.toFixed(4),e=iu.y.toFixed(4),t=iu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function IT(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function NT(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),c=l.name;let d=1;l.type===r.FLOAT_MAT2&&(d=2),l.type===r.FLOAT_MAT3&&(d=3),l.type===r.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:d}}return t}function ha(r){return r!==""}function e0(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function t0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UT=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(r){return r.replace(UT,OT)}const FT=new Map;function OT(r,e){let t=dt[e];if(t===void 0){const s=FT.get(e);if(s!==void 0)t=dt[s],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return nh(t)}const kT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n0(r){return r.replace(kT,BT)}function BT(r,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function i0(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const zT={[cu]:"SHADOWMAP_TYPE_PCF",[da]:"SHADOWMAP_TYPE_VSM"};function VT(r){return zT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const GT={[xs]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE",[Pu]:"ENVMAP_TYPE_CUBE_UV"};function HT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":GT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const WT={[po]:"ENVMAP_MODE_REFRACTION"};function XT(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":WT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jT={[U0]:"ENVMAP_BLENDING_MULTIPLY",[FS]:"ENVMAP_BLENDING_MIX",[OS]:"ENVMAP_BLENDING_ADD"};function qT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":jT[r.combine]||"ENVMAP_BLENDING_NONE"}function YT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function $T(r,e,t,s){const a=r.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const h=VT(t),m=HT(t),g=XT(t),_=qT(t),x=YT(t),y=LT(t),T=IT(l),w=a.createProgram();let S,v,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(ha).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(ha).join(`
`),v.length>0&&(v+=`
`)):(S=[i0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),v=[i0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?dt.tonemapping_pars_fragment:"",t.toneMapping!==Ui?PT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,RT("linearToOutputTexel",t.outputColorSpace),DT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ha).join(`
`)),c=nh(c),c=e0(c,t),c=t0(c,t),d=nh(d),d=e0(d,t),d=t0(d,t),c=n0(c),d=n0(d),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",t.glslVersion===Jd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=D+S+c,b=D+v+d,U=Zg(a,a.VERTEX_SHADER,L),F=Zg(a,a.FRAGMENT_SHADER,b);a.attachShader(w,U),a.attachShader(w,F),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function I(V){if(r.debug.checkShaderErrors){const se=a.getProgramInfoLog(w)||"",Z=a.getShaderInfoLog(U)||"",fe=a.getShaderInfoLog(F)||"",ce=se.trim(),oe=Z.trim(),j=fe.trim();let X=!0,le=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,w,U,F);else{const te=Jg(a,U,"vertex"),O=Jg(a,F,"fragment");Ct("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ce+`
`+te+`
`+O)}else ce!==""?ot("WebGLProgram: Program Info Log:",ce):(oe===""||j==="")&&(le=!1);le&&(V.diagnostics={runnable:X,programLog:ce,vertexShader:{log:oe,prefix:S},fragmentShader:{log:j,prefix:v}})}a.deleteShader(U),a.deleteShader(F),Y=new mu(a,w),C=NT(a,w)}let Y;this.getUniforms=function(){return Y===void 0&&I(this),Y};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(w,TT)),R},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=U,this.fragmentShader=F,this}let KT=0;class ZT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new QT(e),t.set(e,s)),s}}class QT{constructor(e){this.id=KT++,this.code=e,this.usedTimes=0}}function JT(r,e,t,s,a,l,c){const d=new J0,h=new ZT,m=new Set,g=[],_=new Map,x=a.logarithmicDepthBuffer;let y=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return m.add(C),C===0?"uv":`uv${C}`}function S(C,R,V,se,Z){const fe=se.fog,ce=Z.geometry,oe=C.isMeshStandardMaterial?se.environment:null,j=(C.isMeshStandardMaterial?t:e).get(C.envMap||oe),X=j&&j.mapping===Pu?j.image.height:null,le=T[C.type];C.precision!==null&&(y=a.getMaxPrecision(C.precision),y!==C.precision&&ot("WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const te=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,O=te!==void 0?te.length:0;let J=0;ce.morphAttributes.position!==void 0&&(J=1),ce.morphAttributes.normal!==void 0&&(J=2),ce.morphAttributes.color!==void 0&&(J=3);let we,Ve,Xe,Q;if(le){const yt=Li[le];we=yt.vertexShader,Ve=yt.fragmentShader}else we=C.vertexShader,Ve=C.fragmentShader,h.update(C),Xe=h.getVertexShaderID(C),Q=h.getFragmentShaderID(C);const ue=r.getRenderTarget(),_e=r.state.buffers.depth.getReversed(),Ue=Z.isInstancedMesh===!0,Pe=Z.isBatchedMesh===!0,lt=!!C.map,bt=!!C.matcap,pt=!!j,xt=!!C.aoMap,Pt=!!C.lightMap,ut=!!C.bumpMap,Ht=!!C.normalMap,B=!!C.displacementMap,Wt=!!C.emissiveMap,gt=!!C.metalnessMap,St=!!C.roughnessMap,je=C.anisotropy>0,P=C.clearcoat>0,M=C.dispersion>0,H=C.iridescence>0,de=C.sheen>0,pe=C.transmission>0,ae=je&&!!C.anisotropyMap,$e=P&&!!C.clearcoatMap,Ee=P&&!!C.clearcoatNormalMap,Be=P&&!!C.clearcoatRoughnessMap,nt=H&&!!C.iridescenceMap,Se=H&&!!C.iridescenceThicknessMap,Re=de&&!!C.sheenColorMap,He=de&&!!C.sheenRoughnessMap,qe=!!C.specularMap,Ae=!!C.specularColorMap,at=!!C.specularIntensityMap,z=pe&&!!C.transmissionMap,Le=pe&&!!C.thicknessMap,ye=!!C.gradientMap,Ie=!!C.alphaMap,ve=C.alphaTest>0,he=!!C.alphaHash,Ce=!!C.extensions;let it=Ui;C.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(it=r.toneMapping);const It={shaderID:le,shaderType:C.type,shaderName:C.name,vertexShader:we,fragmentShader:Ve,defines:C.defines,customVertexShaderID:Xe,customFragmentShaderID:Q,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Pe,batchingColor:Pe&&Z._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&Z.instanceColor!==null,instancingMorph:Ue&&Z.morphTexture!==null,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:go,alphaToCoverage:!!C.alphaToCoverage,map:lt,matcap:bt,envMap:pt,envMapMode:pt&&j.mapping,envMapCubeUVHeight:X,aoMap:xt,lightMap:Pt,bumpMap:ut,normalMap:Ht,displacementMap:B,emissiveMap:Wt,normalMapObjectSpace:Ht&&C.normalMapType===VS,normalMapTangentSpace:Ht&&C.normalMapType===zS,metalnessMap:gt,roughnessMap:St,anisotropy:je,anisotropyMap:ae,clearcoat:P,clearcoatMap:$e,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Be,dispersion:M,iridescence:H,iridescenceMap:nt,iridescenceThicknessMap:Se,sheen:de,sheenColorMap:Re,sheenRoughnessMap:He,specularMap:qe,specularColorMap:Ae,specularIntensityMap:at,transmission:pe,transmissionMap:z,thicknessMap:Le,gradientMap:ye,opaque:C.transparent===!1&&C.blending===so&&C.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ve,alphaHash:he,combine:C.combine,mapUv:lt&&w(C.map.channel),aoMapUv:xt&&w(C.aoMap.channel),lightMapUv:Pt&&w(C.lightMap.channel),bumpMapUv:ut&&w(C.bumpMap.channel),normalMapUv:Ht&&w(C.normalMap.channel),displacementMapUv:B&&w(C.displacementMap.channel),emissiveMapUv:Wt&&w(C.emissiveMap.channel),metalnessMapUv:gt&&w(C.metalnessMap.channel),roughnessMapUv:St&&w(C.roughnessMap.channel),anisotropyMapUv:ae&&w(C.anisotropyMap.channel),clearcoatMapUv:$e&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:He&&w(C.sheenRoughnessMap.channel),specularMapUv:qe&&w(C.specularMap.channel),specularColorMapUv:Ae&&w(C.specularColorMap.channel),specularIntensityMapUv:at&&w(C.specularIntensityMap.channel),transmissionMapUv:z&&w(C.transmissionMap.channel),thicknessMapUv:Le&&w(C.thicknessMap.channel),alphaMapUv:Ie&&w(C.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(Ht||je),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ce.attributes.uv&&(lt||Ie),fog:!!fe,useFog:C.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:_e,skinning:Z.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:J,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:it,decodeVideoTexture:lt&&C.map.isVideoTexture===!0&&Tt.getTransfer(C.map.colorSpace)===Nt,decodeVideoTextureEmissive:Wt&&C.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(C.emissiveMap.colorSpace)===Nt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===tr,flipSided:C.side===Vn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ce&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&C.extensions.multiDraw===!0||Pe)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return It.vertexUv1s=m.has(1),It.vertexUv2s=m.has(2),It.vertexUv3s=m.has(3),m.clear(),It}function v(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const V in C.defines)R.push(V),R.push(C.defines[V]);return C.isRawShaderMaterial===!1&&(D(R,C),L(R,C),R.push(r.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function D(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function L(C,R){d.disableAll(),R.instancing&&d.enable(0),R.instancingColor&&d.enable(1),R.instancingMorph&&d.enable(2),R.matcap&&d.enable(3),R.envMap&&d.enable(4),R.normalMapObjectSpace&&d.enable(5),R.normalMapTangentSpace&&d.enable(6),R.clearcoat&&d.enable(7),R.iridescence&&d.enable(8),R.alphaTest&&d.enable(9),R.vertexColors&&d.enable(10),R.vertexAlphas&&d.enable(11),R.vertexUv1s&&d.enable(12),R.vertexUv2s&&d.enable(13),R.vertexUv3s&&d.enable(14),R.vertexTangents&&d.enable(15),R.anisotropy&&d.enable(16),R.alphaHash&&d.enable(17),R.batching&&d.enable(18),R.dispersion&&d.enable(19),R.batchingColor&&d.enable(20),R.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),C.push(d.mask)}function b(C){const R=T[C.type];let V;if(R){const se=Li[R];V=gy.clone(se.uniforms)}else V=C.uniforms;return V}function U(C,R){let V=_.get(R);return V!==void 0?++V.usedTimes:(V=new $T(r,R,C,l),g.push(V),_.set(R,V)),V}function F(C){if(--C.usedTimes===0){const R=g.indexOf(C);g[R]=g[g.length-1],g.pop(),_.delete(C.cacheKey),C.destroy()}}function I(C){h.remove(C)}function Y(){h.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:b,acquireProgram:U,releaseProgram:F,releaseShaderCache:I,programs:g,dispose:Y}}function ew(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let d=r.get(c);return d===void 0&&(d={},r.set(c,d)),d}function s(c){r.delete(c)}function a(c,d,h){r.get(c)[d]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function tw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function r0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function s0(){const r=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function c(_,x,y,T,w,S){let v=r[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:y,groupOrder:T,renderOrder:_.renderOrder,z:w,group:S},r[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=y,v.groupOrder=T,v.renderOrder=_.renderOrder,v.z=w,v.group=S),e++,v}function d(_,x,y,T,w,S){const v=c(_,x,y,T,w,S);y.transmission>0?s.push(v):y.transparent===!0?a.push(v):t.push(v)}function h(_,x,y,T,w,S){const v=c(_,x,y,T,w,S);y.transmission>0?s.unshift(v):y.transparent===!0?a.unshift(v):t.unshift(v)}function m(_,x){t.length>1&&t.sort(_||tw),s.length>1&&s.sort(x||r0),a.length>1&&a.sort(x||r0)}function g(){for(let _=e,x=r.length;_<x;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:d,unshift:h,finish:g,sort:m}}function nw(){let r=new WeakMap;function e(s,a){const l=r.get(s);let c;return l===void 0?(c=new s0,r.set(s,[c])):a>=l.length?(c=new s0,l.push(c)):c=l[a],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function iw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new re,color:new Ut};break;case"SpotLight":t={position:new re,direction:new re,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new re,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new re,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":t={color:new Ut,position:new re,halfWidth:new re,halfHeight:new re};break}return r[e.id]=t,t}}}function rw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let sw=0;function ow(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function aw(r){const e=new iw,t=rw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new re);const a=new re,l=new nn,c=new nn;function d(m){let g=0,_=0,x=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let y=0,T=0,w=0,S=0,v=0,D=0,L=0,b=0,U=0,F=0,I=0;m.sort(ow);for(let C=0,R=m.length;C<R;C++){const V=m[C],se=V.color,Z=V.intensity,fe=V.distance;let ce=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===mo?ce=V.shadow.map.texture:ce=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=se.r*Z,_+=se.g*Z,x+=se.b*Z;else if(V.isLightProbe){for(let oe=0;oe<9;oe++)s.probe[oe].addScaledVector(V.sh.coefficients[oe],Z);I++}else if(V.isDirectionalLight){const oe=e.get(V);if(oe.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const j=V.shadow,X=t.get(V);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,s.directionalShadow[y]=X,s.directionalShadowMap[y]=ce,s.directionalShadowMatrix[y]=V.shadow.matrix,D++}s.directional[y]=oe,y++}else if(V.isSpotLight){const oe=e.get(V);oe.position.setFromMatrixPosition(V.matrixWorld),oe.color.copy(se).multiplyScalar(Z),oe.distance=fe,oe.coneCos=Math.cos(V.angle),oe.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),oe.decay=V.decay,s.spot[w]=oe;const j=V.shadow;if(V.map&&(s.spotLightMap[U]=V.map,U++,j.updateMatrices(V),V.castShadow&&F++),s.spotLightMatrix[w]=j.matrix,V.castShadow){const X=t.get(V);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,s.spotShadow[w]=X,s.spotShadowMap[w]=ce,b++}w++}else if(V.isRectAreaLight){const oe=e.get(V);oe.color.copy(se).multiplyScalar(Z),oe.halfWidth.set(V.width*.5,0,0),oe.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=oe,S++}else if(V.isPointLight){const oe=e.get(V);if(oe.color.copy(V.color).multiplyScalar(V.intensity),oe.distance=V.distance,oe.decay=V.decay,V.castShadow){const j=V.shadow,X=t.get(V);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,X.shadowCameraNear=j.camera.near,X.shadowCameraFar=j.camera.far,s.pointShadow[T]=X,s.pointShadowMap[T]=ce,s.pointShadowMatrix[T]=V.shadow.matrix,L++}s.point[T]=oe,T++}else if(V.isHemisphereLight){const oe=e.get(V);oe.skyColor.copy(V.color).multiplyScalar(Z),oe.groundColor.copy(V.groundColor).multiplyScalar(Z),s.hemi[v]=oe,v++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ne.LTC_FLOAT_1,s.rectAreaLTC2=Ne.LTC_FLOAT_2):(s.rectAreaLTC1=Ne.LTC_HALF_1,s.rectAreaLTC2=Ne.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const Y=s.hash;(Y.directionalLength!==y||Y.pointLength!==T||Y.spotLength!==w||Y.rectAreaLength!==S||Y.hemiLength!==v||Y.numDirectionalShadows!==D||Y.numPointShadows!==L||Y.numSpotShadows!==b||Y.numSpotMaps!==U||Y.numLightProbes!==I)&&(s.directional.length=y,s.spot.length=w,s.rectArea.length=S,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=b+U-F,s.spotLightMap.length=U,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=I,Y.directionalLength=y,Y.pointLength=T,Y.spotLength=w,Y.rectAreaLength=S,Y.hemiLength=v,Y.numDirectionalShadows=D,Y.numPointShadows=L,Y.numSpotShadows=b,Y.numSpotMaps=U,Y.numLightProbes=I,s.version=sw++)}function h(m,g){let _=0,x=0,y=0,T=0,w=0;const S=g.matrixWorldInverse;for(let v=0,D=m.length;v<D;v++){const L=m[v];if(L.isDirectionalLight){const b=s.directional[_];b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(S),_++}else if(L.isSpotLight){const b=s.spot[y];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(S),b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(S),y++}else if(L.isRectAreaLight){const b=s.rectArea[T];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(S),c.identity(),l.copy(L.matrixWorld),l.premultiply(S),c.extractRotation(l),b.halfWidth.set(L.width*.5,0,0),b.halfHeight.set(0,L.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),T++}else if(L.isPointLight){const b=s.point[x];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const b=s.hemi[w];b.direction.setFromMatrixPosition(L.matrixWorld),b.direction.transformDirection(S),w++}}}return{setup:d,setupView:h,state:s}}function o0(r){const e=new aw(r),t=[],s=[];function a(g){m.camera=g,t.length=0,s.length=0}function l(g){t.push(g)}function c(g){s.push(g)}function d(){e.setup(t)}function h(g){e.setupView(t,g)}const m={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:c}}function lw(r){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let d;return c===void 0?(d=new o0(r),e.set(a,[d])):l>=c.length?(d=new o0(r),c.push(d)):d=c[l],d}function s(){e=new WeakMap}return{get:t,dispose:s}}const uw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cw=`uniform sampler2D shadow_pass;
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
}`,fw=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],dw=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],a0=new nn,ca=new re,ed=new re;function hw(r,e,t){let s=new l_;const a=new Ft,l=new Ft,c=new Qt,d=new Ry,h=new by,m={},g=t.maxTextureSize,_={[Br]:Vn,[Vn]:Br,[tr]:tr},x=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:uw,fragmentShader:cw}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const T=new ur;T.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new zi(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu;let v=this.type;this.render=function(F,I,Y){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;F.type===_S&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=cu);const C=r.getRenderTarget(),R=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),se=r.state;se.setBlending(ir),se.buffers.depth.getReversed()===!0?se.buffers.color.setClear(0,0,0,0):se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const Z=v!==this.type;Z&&I.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(ce=>ce.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,ce=F.length;fe<ce;fe++){const oe=F[fe],j=oe.shadow;if(j===void 0){ot("WebGLShadowMap:",oe,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;a.copy(j.mapSize);const X=j.getFrameExtents();if(a.multiply(X),l.copy(j.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/X.x),a.x=l.x*X.x,j.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/X.y),a.y=l.y*X.y,j.mapSize.y=l.y)),j.map===null||Z===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===da){if(oe.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Fi(a.x,a.y,{format:mo,type:or,minFilter:An,magFilter:An,generateMipmaps:!1}),j.map.texture.name=oe.name+".shadowMap",j.map.depthTexture=new ya(a.x,a.y,Ii),j.map.depthTexture.name=oe.name+".shadowMapDepth",j.map.depthTexture.format=ar,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=vn,j.map.depthTexture.magFilter=vn}else{oe.isPointLight?(j.map=new a_(a.x),j.map.depthTexture=new Ay(a.x,Bi)):(j.map=new Fi(a.x,a.y),j.map.depthTexture=new ya(a.x,a.y,Bi)),j.map.depthTexture.name=oe.name+".shadowMap",j.map.depthTexture.format=ar;const te=r.state.buffers.depth.getReversed();this.type===cu?(j.map.depthTexture.compareFunction=te?xh:vh,j.map.depthTexture.minFilter=An,j.map.depthTexture.magFilter=An):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=vn,j.map.depthTexture.magFilter=vn)}j.camera.updateProjectionMatrix()}const le=j.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<le;te++){if(j.map.isWebGLCubeRenderTarget)r.setRenderTarget(j.map,te),r.clear();else{te===0&&(r.setRenderTarget(j.map),r.clear());const O=j.getViewport(te);c.set(l.x*O.x,l.y*O.y,l.x*O.z,l.y*O.w),se.viewport(c)}if(oe.isPointLight){const O=j.camera,J=j.matrix,we=oe.distance||O.far;we!==O.far&&(O.far=we,O.updateProjectionMatrix()),ca.setFromMatrixPosition(oe.matrixWorld),O.position.copy(ca),ed.copy(O.position),ed.add(fw[te]),O.up.copy(dw[te]),O.lookAt(ed),O.updateMatrixWorld(),J.makeTranslation(-ca.x,-ca.y,-ca.z),a0.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),j._frustum.setFromProjectionMatrix(a0,O.coordinateSystem,O.reversedDepth)}else j.updateMatrices(oe);s=j.getFrustum(),b(I,Y,j.camera,oe,this.type)}j.isPointLightShadow!==!0&&this.type===da&&D(j,Y),j.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(C,R,V)};function D(F,I){const Y=e.update(w);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Fi(a.x,a.y,{format:mo,type:or})),x.uniforms.shadow_pass.value=F.map.depthTexture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(I,null,Y,x,w,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(I,null,Y,y,w,null)}function L(F,I,Y,C){let R=null;const V=Y.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)R=V;else if(R=Y.isPointLight===!0?h:d,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const se=R.uuid,Z=I.uuid;let fe=m[se];fe===void 0&&(fe={},m[se]=fe);let ce=fe[Z];ce===void 0&&(ce=R.clone(),fe[Z]=ce,I.addEventListener("dispose",U)),R=ce}if(R.visible=I.visible,R.wireframe=I.wireframe,C===da?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:_[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,Y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const se=r.properties.get(R);se.light=Y}return R}function b(F,I,Y,C,R){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===da)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,F.matrixWorld);const Z=e.update(F),fe=F.material;if(Array.isArray(fe)){const ce=Z.groups;for(let oe=0,j=ce.length;oe<j;oe++){const X=ce[oe],le=fe[X.materialIndex];if(le&&le.visible){const te=L(F,le,C,R);F.onBeforeShadow(r,F,I,Y,Z,te,X),r.renderBufferDirect(Y,null,Z,te,F,X),F.onAfterShadow(r,F,I,Y,Z,te,X)}}}else if(fe.visible){const ce=L(F,fe,C,R);F.onBeforeShadow(r,F,I,Y,Z,ce,null),r.renderBufferDirect(Y,null,Z,ce,F,null),F.onAfterShadow(r,F,I,Y,Z,ce,null)}}const se=F.children;for(let Z=0,fe=se.length;Z<fe;Z++)b(se[Z],I,Y,C,R)}function U(F){F.target.removeEventListener("dispose",U);for(const Y in m){const C=m[Y],R=F.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const pw={[cd]:fd,[dd]:md,[hd]:gd,[ho]:pd,[fd]:cd,[md]:dd,[gd]:hd,[pd]:ho};function mw(r,e){function t(){let z=!1;const Le=new Qt;let ye=null;const Ie=new Qt(0,0,0,0);return{setMask:function(ve){ye!==ve&&!z&&(r.colorMask(ve,ve,ve,ve),ye=ve)},setLocked:function(ve){z=ve},setClear:function(ve,he,Ce,it,It){It===!0&&(ve*=it,he*=it,Ce*=it),Le.set(ve,he,Ce,it),Ie.equals(Le)===!1&&(r.clearColor(ve,he,Ce,it),Ie.copy(Le))},reset:function(){z=!1,ye=null,Ie.set(-1,0,0,0)}}}function s(){let z=!1,Le=!1,ye=null,Ie=null,ve=null;return{setReversed:function(he){if(Le!==he){const Ce=e.get("EXT_clip_control");he?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),Le=he;const it=ve;ve=null,this.setClear(it)}},getReversed:function(){return Le},setTest:function(he){he?ue(r.DEPTH_TEST):_e(r.DEPTH_TEST)},setMask:function(he){ye!==he&&!z&&(r.depthMask(he),ye=he)},setFunc:function(he){if(Le&&(he=pw[he]),Ie!==he){switch(he){case cd:r.depthFunc(r.NEVER);break;case fd:r.depthFunc(r.ALWAYS);break;case dd:r.depthFunc(r.LESS);break;case ho:r.depthFunc(r.LEQUAL);break;case hd:r.depthFunc(r.EQUAL);break;case pd:r.depthFunc(r.GEQUAL);break;case md:r.depthFunc(r.GREATER);break;case gd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=he}},setLocked:function(he){z=he},setClear:function(he){ve!==he&&(Le&&(he=1-he),r.clearDepth(he),ve=he)},reset:function(){z=!1,ye=null,Ie=null,ve=null,Le=!1}}}function a(){let z=!1,Le=null,ye=null,Ie=null,ve=null,he=null,Ce=null,it=null,It=null;return{setTest:function(yt){z||(yt?ue(r.STENCIL_TEST):_e(r.STENCIL_TEST))},setMask:function(yt){Le!==yt&&!z&&(r.stencilMask(yt),Le=yt)},setFunc:function(yt,Gn,Cn){(ye!==yt||Ie!==Gn||ve!==Cn)&&(r.stencilFunc(yt,Gn,Cn),ye=yt,Ie=Gn,ve=Cn)},setOp:function(yt,Gn,Cn){(he!==yt||Ce!==Gn||it!==Cn)&&(r.stencilOp(yt,Gn,Cn),he=yt,Ce=Gn,it=Cn)},setLocked:function(yt){z=yt},setClear:function(yt){It!==yt&&(r.clearStencil(yt),It=yt)},reset:function(){z=!1,Le=null,ye=null,Ie=null,ve=null,he=null,Ce=null,it=null,It=null}}}const l=new t,c=new s,d=new a,h=new WeakMap,m=new WeakMap;let g={},_={},x=new WeakMap,y=[],T=null,w=!1,S=null,v=null,D=null,L=null,b=null,U=null,F=null,I=new Ut(0,0,0),Y=0,C=!1,R=null,V=null,se=null,Z=null,fe=null;const ce=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,j=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),oe=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),oe=j>=2);let le=null,te={};const O=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),we=new Qt().fromArray(O),Ve=new Qt().fromArray(J);function Xe(z,Le,ye,Ie){const ve=new Uint8Array(4),he=r.createTexture();r.bindTexture(z,he),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ce=0;Ce<ye;Ce++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,ve):r.texImage2D(Le+Ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ve);return he}const Q={};Q[r.TEXTURE_2D]=Xe(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=Xe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=Xe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=Xe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ue(r.DEPTH_TEST),c.setFunc(ho),ut(!1),Ht(pg),ue(r.CULL_FACE),xt(ir);function ue(z){g[z]!==!0&&(r.enable(z),g[z]=!0)}function _e(z){g[z]!==!1&&(r.disable(z),g[z]=!1)}function Ue(z,Le){return _[z]!==Le?(r.bindFramebuffer(z,Le),_[z]=Le,z===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Le),z===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function Pe(z,Le){let ye=y,Ie=!1;if(z){ye=x.get(Le),ye===void 0&&(ye=[],x.set(Le,ye));const ve=z.textures;if(ye.length!==ve.length||ye[0]!==r.COLOR_ATTACHMENT0){for(let he=0,Ce=ve.length;he<Ce;he++)ye[he]=r.COLOR_ATTACHMENT0+he;ye.length=ve.length,Ie=!0}}else ye[0]!==r.BACK&&(ye[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(ye)}function lt(z){return T!==z?(r.useProgram(z),T=z,!0):!1}const bt={[fs]:r.FUNC_ADD,[xS]:r.FUNC_SUBTRACT,[SS]:r.FUNC_REVERSE_SUBTRACT};bt[yS]=r.MIN,bt[MS]=r.MAX;const pt={[ES]:r.ZERO,[TS]:r.ONE,[wS]:r.SRC_COLOR,[ld]:r.SRC_ALPHA,[DS]:r.SRC_ALPHA_SATURATE,[bS]:r.DST_COLOR,[CS]:r.DST_ALPHA,[AS]:r.ONE_MINUS_SRC_COLOR,[ud]:r.ONE_MINUS_SRC_ALPHA,[PS]:r.ONE_MINUS_DST_COLOR,[RS]:r.ONE_MINUS_DST_ALPHA,[LS]:r.CONSTANT_COLOR,[IS]:r.ONE_MINUS_CONSTANT_COLOR,[NS]:r.CONSTANT_ALPHA,[US]:r.ONE_MINUS_CONSTANT_ALPHA};function xt(z,Le,ye,Ie,ve,he,Ce,it,It,yt){if(z===ir){w===!0&&(_e(r.BLEND),w=!1);return}if(w===!1&&(ue(r.BLEND),w=!0),z!==vS){if(z!==S||yt!==C){if((v!==fs||b!==fs)&&(r.blendEquation(r.FUNC_ADD),v=fs,b=fs),yt)switch(z){case so:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mg:r.blendFunc(r.ONE,r.ONE);break;case gg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _g:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ct("WebGLState: Invalid blending: ",z);break}else switch(z){case so:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mg:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case gg:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _g:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",z);break}D=null,L=null,U=null,F=null,I.set(0,0,0),Y=0,S=z,C=yt}return}ve=ve||Le,he=he||ye,Ce=Ce||Ie,(Le!==v||ve!==b)&&(r.blendEquationSeparate(bt[Le],bt[ve]),v=Le,b=ve),(ye!==D||Ie!==L||he!==U||Ce!==F)&&(r.blendFuncSeparate(pt[ye],pt[Ie],pt[he],pt[Ce]),D=ye,L=Ie,U=he,F=Ce),(it.equals(I)===!1||It!==Y)&&(r.blendColor(it.r,it.g,it.b,It),I.copy(it),Y=It),S=z,C=!1}function Pt(z,Le){z.side===tr?_e(r.CULL_FACE):ue(r.CULL_FACE);let ye=z.side===Vn;Le&&(ye=!ye),ut(ye),z.blending===so&&z.transparent===!1?xt(ir):xt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),l.setMask(z.colorWrite);const Ie=z.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(z.stencilWriteMask),d.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),d.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Wt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ue(r.SAMPLE_ALPHA_TO_COVERAGE):_e(r.SAMPLE_ALPHA_TO_COVERAGE)}function ut(z){R!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),R=z)}function Ht(z){z!==mS?(ue(r.CULL_FACE),z!==V&&(z===pg?r.cullFace(r.BACK):z===gS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_e(r.CULL_FACE),V=z}function B(z){z!==se&&(oe&&r.lineWidth(z),se=z)}function Wt(z,Le,ye){z?(ue(r.POLYGON_OFFSET_FILL),(Z!==Le||fe!==ye)&&(r.polygonOffset(Le,ye),Z=Le,fe=ye)):_e(r.POLYGON_OFFSET_FILL)}function gt(z){z?ue(r.SCISSOR_TEST):_e(r.SCISSOR_TEST)}function St(z){z===void 0&&(z=r.TEXTURE0+ce-1),le!==z&&(r.activeTexture(z),le=z)}function je(z,Le,ye){ye===void 0&&(le===null?ye=r.TEXTURE0+ce-1:ye=le);let Ie=te[ye];Ie===void 0&&(Ie={type:void 0,texture:void 0},te[ye]=Ie),(Ie.type!==z||Ie.texture!==Le)&&(le!==ye&&(r.activeTexture(ye),le=ye),r.bindTexture(z,Le||Q[z]),Ie.type=z,Ie.texture=Le)}function P(){const z=te[le];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function H(){try{r.compressedTexImage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function de(){try{r.texSubImage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function pe(){try{r.texSubImage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function ae(){try{r.compressedTexSubImage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function $e(){try{r.compressedTexSubImage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function Ee(){try{r.texStorage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function Be(){try{r.texStorage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function nt(){try{r.texImage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function Se(){try{r.texImage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function Re(z){we.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),we.copy(z))}function He(z){Ve.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),Ve.copy(z))}function qe(z,Le){let ye=m.get(Le);ye===void 0&&(ye=new WeakMap,m.set(Le,ye));let Ie=ye.get(z);Ie===void 0&&(Ie=r.getUniformBlockIndex(Le,z.name),ye.set(z,Ie))}function Ae(z,Le){const Ie=m.get(Le).get(z);h.get(Le)!==Ie&&(r.uniformBlockBinding(Le,Ie,z.__bindingPointIndex),h.set(Le,Ie))}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},le=null,te={},_={},x=new WeakMap,y=[],T=null,w=!1,S=null,v=null,D=null,L=null,b=null,U=null,F=null,I=new Ut(0,0,0),Y=0,C=!1,R=null,V=null,se=null,Z=null,fe=null,we.set(0,0,r.canvas.width,r.canvas.height),Ve.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:ue,disable:_e,bindFramebuffer:Ue,drawBuffers:Pe,useProgram:lt,setBlending:xt,setMaterial:Pt,setFlipSided:ut,setCullFace:Ht,setLineWidth:B,setPolygonOffset:Wt,setScissorTest:gt,activeTexture:St,bindTexture:je,unbindTexture:P,compressedTexImage2D:M,compressedTexImage3D:H,texImage2D:nt,texImage3D:Se,updateUBOMapping:qe,uniformBlockBinding:Ae,texStorage2D:Ee,texStorage3D:Be,texSubImage2D:de,texSubImage3D:pe,compressedTexSubImage2D:ae,compressedTexSubImage3D:$e,scissor:Re,viewport:He,reset:at}}function gw(r,e,t,s,a,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ft,g=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,M){return y?new OffscreenCanvas(P,M):Mu("canvas")}function w(P,M,H){let de=1;const pe=je(P);if((pe.width>H||pe.height>H)&&(de=H/Math.max(pe.width,pe.height)),de<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ae=Math.floor(de*pe.width),$e=Math.floor(de*pe.height);_===void 0&&(_=T(ae,$e));const Ee=M?T(ae,$e):_;return Ee.width=ae,Ee.height=$e,Ee.getContext("2d").drawImage(P,0,0,ae,$e),ot("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ae+"x"+$e+")."),Ee}else return"data"in P&&ot("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),P;return P}function S(P){return P.generateMipmaps}function v(P){r.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(P,M,H,de,pe=!1){if(P!==null){if(r[P]!==void 0)return r[P];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ae=M;if(M===r.RED&&(H===r.FLOAT&&(ae=r.R32F),H===r.HALF_FLOAT&&(ae=r.R16F),H===r.UNSIGNED_BYTE&&(ae=r.R8)),M===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(ae=r.R8UI),H===r.UNSIGNED_SHORT&&(ae=r.R16UI),H===r.UNSIGNED_INT&&(ae=r.R32UI),H===r.BYTE&&(ae=r.R8I),H===r.SHORT&&(ae=r.R16I),H===r.INT&&(ae=r.R32I)),M===r.RG&&(H===r.FLOAT&&(ae=r.RG32F),H===r.HALF_FLOAT&&(ae=r.RG16F),H===r.UNSIGNED_BYTE&&(ae=r.RG8)),M===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(ae=r.RG8UI),H===r.UNSIGNED_SHORT&&(ae=r.RG16UI),H===r.UNSIGNED_INT&&(ae=r.RG32UI),H===r.BYTE&&(ae=r.RG8I),H===r.SHORT&&(ae=r.RG16I),H===r.INT&&(ae=r.RG32I)),M===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(ae=r.RGB8UI),H===r.UNSIGNED_SHORT&&(ae=r.RGB16UI),H===r.UNSIGNED_INT&&(ae=r.RGB32UI),H===r.BYTE&&(ae=r.RGB8I),H===r.SHORT&&(ae=r.RGB16I),H===r.INT&&(ae=r.RGB32I)),M===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(ae=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(ae=r.RGBA16UI),H===r.UNSIGNED_INT&&(ae=r.RGBA32UI),H===r.BYTE&&(ae=r.RGBA8I),H===r.SHORT&&(ae=r.RGBA16I),H===r.INT&&(ae=r.RGBA32I)),M===r.RGB&&(H===r.UNSIGNED_INT_5_9_9_9_REV&&(ae=r.RGB9_E5),H===r.UNSIGNED_INT_10F_11F_11F_REV&&(ae=r.R11F_G11F_B10F)),M===r.RGBA){const $e=pe?Su:Tt.getTransfer(de);H===r.FLOAT&&(ae=r.RGBA32F),H===r.HALF_FLOAT&&(ae=r.RGBA16F),H===r.UNSIGNED_BYTE&&(ae=$e===Nt?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(ae=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(ae=r.RGB5_A1)}return(ae===r.R16F||ae===r.R32F||ae===r.RG16F||ae===r.RG32F||ae===r.RGBA16F||ae===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function b(P,M){let H;return P?M===null||M===Bi||M===xa?H=r.DEPTH24_STENCIL8:M===Ii?H=r.DEPTH32F_STENCIL8:M===va&&(H=r.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Bi||M===xa?H=r.DEPTH_COMPONENT24:M===Ii?H=r.DEPTH_COMPONENT32F:M===va&&(H=r.DEPTH_COMPONENT16),H}function U(P,M){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==vn&&P.minFilter!==An?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function F(P){const M=P.target;M.removeEventListener("dispose",F),Y(M),M.isVideoTexture&&g.delete(M)}function I(P){const M=P.target;M.removeEventListener("dispose",I),R(M)}function Y(P){const M=s.get(P);if(M.__webglInit===void 0)return;const H=P.source,de=x.get(H);if(de){const pe=de[M.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&C(P),Object.keys(de).length===0&&x.delete(H)}s.remove(P)}function C(P){const M=s.get(P);r.deleteTexture(M.__webglTexture);const H=P.source,de=x.get(H);delete de[M.__cacheKey],c.memory.textures--}function R(P){const M=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(M.__webglFramebuffer[de]))for(let pe=0;pe<M.__webglFramebuffer[de].length;pe++)r.deleteFramebuffer(M.__webglFramebuffer[de][pe]);else r.deleteFramebuffer(M.__webglFramebuffer[de]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[de])}else{if(Array.isArray(M.__webglFramebuffer))for(let de=0;de<M.__webglFramebuffer.length;de++)r.deleteFramebuffer(M.__webglFramebuffer[de]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let de=0;de<M.__webglColorRenderbuffer.length;de++)M.__webglColorRenderbuffer[de]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[de]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=P.textures;for(let de=0,pe=H.length;de<pe;de++){const ae=s.get(H[de]);ae.__webglTexture&&(r.deleteTexture(ae.__webglTexture),c.memory.textures--),s.remove(H[de])}s.remove(P)}let V=0;function se(){V=0}function Z(){const P=V;return P>=a.maxTextures&&ot("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),V+=1,P}function fe(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function ce(P,M){const H=s.get(P);if(P.isVideoTexture&&gt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){const de=P.image;if(de===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(H,P,M);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+M)}function oe(P,M){const H=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){Q(H,P,M);return}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+M)}function j(P,M){const H=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){Q(H,P,M);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+M)}function X(P,M){const H=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&H.__version!==P.version){ue(H,P,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+M)}const le={[xd]:r.REPEAT,[nr]:r.CLAMP_TO_EDGE,[Sd]:r.MIRRORED_REPEAT},te={[vn]:r.NEAREST,[kS]:r.NEAREST_MIPMAP_NEAREST,[Ol]:r.NEAREST_MIPMAP_LINEAR,[An]:r.LINEAR,[Tf]:r.LINEAR_MIPMAP_NEAREST,[ps]:r.LINEAR_MIPMAP_LINEAR},O={[GS]:r.NEVER,[qS]:r.ALWAYS,[HS]:r.LESS,[vh]:r.LEQUAL,[WS]:r.EQUAL,[xh]:r.GEQUAL,[XS]:r.GREATER,[jS]:r.NOTEQUAL};function J(P,M){if(M.type===Ii&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===An||M.magFilter===Tf||M.magFilter===Ol||M.magFilter===ps||M.minFilter===An||M.minFilter===Tf||M.minFilter===Ol||M.minFilter===ps)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,le[M.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,le[M.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,le[M.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,te[M.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,te[M.minFilter]),M.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,O[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===vn||M.minFilter!==Ol&&M.minFilter!==ps||M.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function we(P,M){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",F));const de=M.source;let pe=x.get(de);pe===void 0&&(pe={},x.set(de,pe));const ae=fe(M);if(ae!==P.__cacheKey){pe[ae]===void 0&&(pe[ae]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,H=!0),pe[ae].usedTimes++;const $e=pe[P.__cacheKey];$e!==void 0&&(pe[P.__cacheKey].usedTimes--,$e.usedTimes===0&&C(M)),P.__cacheKey=ae,P.__webglTexture=pe[ae].texture}return H}function Ve(P,M,H){return Math.floor(Math.floor(P/H)/M)}function Xe(P,M,H,de){const ae=P.updateRanges;if(ae.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,H,de,M.data);else{ae.sort((Se,Re)=>Se.start-Re.start);let $e=0;for(let Se=1;Se<ae.length;Se++){const Re=ae[$e],He=ae[Se],qe=Re.start+Re.count,Ae=Ve(He.start,M.width,4),at=Ve(Re.start,M.width,4);He.start<=qe+1&&Ae===at&&Ve(He.start+He.count-1,M.width,4)===Ae?Re.count=Math.max(Re.count,He.start+He.count-Re.start):(++$e,ae[$e]=He)}ae.length=$e+1;const Ee=r.getParameter(r.UNPACK_ROW_LENGTH),Be=r.getParameter(r.UNPACK_SKIP_PIXELS),nt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Se=0,Re=ae.length;Se<Re;Se++){const He=ae[Se],qe=Math.floor(He.start/4),Ae=Math.ceil(He.count/4),at=qe%M.width,z=Math.floor(qe/M.width),Le=Ae,ye=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,at),r.pixelStorei(r.UNPACK_SKIP_ROWS,z),t.texSubImage2D(r.TEXTURE_2D,0,at,z,Le,ye,H,de,M.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ee),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Be),r.pixelStorei(r.UNPACK_SKIP_ROWS,nt)}}function Q(P,M,H){let de=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(de=r.TEXTURE_3D);const pe=we(P,M),ae=M.source;t.bindTexture(de,P.__webglTexture,r.TEXTURE0+H);const $e=s.get(ae);if(ae.version!==$e.__version||pe===!0){t.activeTexture(r.TEXTURE0+H);const Ee=Tt.getPrimaries(Tt.workingColorSpace),Be=M.colorSpace===Or?null:Tt.getPrimaries(M.colorSpace),nt=M.colorSpace===Or||Ee===Be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Se=w(M.image,!1,a.maxTextureSize);Se=St(M,Se);const Re=l.convert(M.format,M.colorSpace),He=l.convert(M.type);let qe=L(M.internalFormat,Re,He,M.colorSpace,M.isVideoTexture);J(de,M);let Ae;const at=M.mipmaps,z=M.isVideoTexture!==!0,Le=$e.__version===void 0||pe===!0,ye=ae.dataReady,Ie=U(M,Se);if(M.isDepthTexture)qe=b(M.format===ms,M.type),Le&&(z?t.texStorage2D(r.TEXTURE_2D,1,qe,Se.width,Se.height):t.texImage2D(r.TEXTURE_2D,0,qe,Se.width,Se.height,0,Re,He,null));else if(M.isDataTexture)if(at.length>0){z&&Le&&t.texStorage2D(r.TEXTURE_2D,Ie,qe,at[0].width,at[0].height);for(let ve=0,he=at.length;ve<he;ve++)Ae=at[ve],z?ye&&t.texSubImage2D(r.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Re,He,Ae.data):t.texImage2D(r.TEXTURE_2D,ve,qe,Ae.width,Ae.height,0,Re,He,Ae.data);M.generateMipmaps=!1}else z?(Le&&t.texStorage2D(r.TEXTURE_2D,Ie,qe,Se.width,Se.height),ye&&Xe(M,Se,Re,He)):t.texImage2D(r.TEXTURE_2D,0,qe,Se.width,Se.height,0,Re,He,Se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){z&&Le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,qe,at[0].width,at[0].height,Se.depth);for(let ve=0,he=at.length;ve<he;ve++)if(Ae=at[ve],M.format!==yi)if(Re!==null)if(z){if(ye)if(M.layerUpdates.size>0){const Ce=kg(Ae.width,Ae.height,M.format,M.type);for(const it of M.layerUpdates){const It=Ae.data.subarray(it*Ce/Ae.data.BYTES_PER_ELEMENT,(it+1)*Ce/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,it,Ae.width,Ae.height,1,Re,It)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,Ae.width,Ae.height,Se.depth,Re,Ae.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ve,qe,Ae.width,Ae.height,Se.depth,0,Ae.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?ye&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,Ae.width,Ae.height,Se.depth,Re,He,Ae.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ve,qe,Ae.width,Ae.height,Se.depth,0,Re,He,Ae.data)}else{z&&Le&&t.texStorage2D(r.TEXTURE_2D,Ie,qe,at[0].width,at[0].height);for(let ve=0,he=at.length;ve<he;ve++)Ae=at[ve],M.format!==yi?Re!==null?z?ye&&t.compressedTexSubImage2D(r.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Re,Ae.data):t.compressedTexImage2D(r.TEXTURE_2D,ve,qe,Ae.width,Ae.height,0,Ae.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?ye&&t.texSubImage2D(r.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Re,He,Ae.data):t.texImage2D(r.TEXTURE_2D,ve,qe,Ae.width,Ae.height,0,Re,He,Ae.data)}else if(M.isDataArrayTexture)if(z){if(Le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,qe,Se.width,Se.height,Se.depth),ye)if(M.layerUpdates.size>0){const ve=kg(Se.width,Se.height,M.format,M.type);for(const he of M.layerUpdates){const Ce=Se.data.subarray(he*ve/Se.data.BYTES_PER_ELEMENT,(he+1)*ve/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,he,Se.width,Se.height,1,Re,He,Ce)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Re,He,Se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,qe,Se.width,Se.height,Se.depth,0,Re,He,Se.data);else if(M.isData3DTexture)z?(Le&&t.texStorage3D(r.TEXTURE_3D,Ie,qe,Se.width,Se.height,Se.depth),ye&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Re,He,Se.data)):t.texImage3D(r.TEXTURE_3D,0,qe,Se.width,Se.height,Se.depth,0,Re,He,Se.data);else if(M.isFramebufferTexture){if(Le)if(z)t.texStorage2D(r.TEXTURE_2D,Ie,qe,Se.width,Se.height);else{let ve=Se.width,he=Se.height;for(let Ce=0;Ce<Ie;Ce++)t.texImage2D(r.TEXTURE_2D,Ce,qe,ve,he,0,Re,He,null),ve>>=1,he>>=1}}else if(at.length>0){if(z&&Le){const ve=je(at[0]);t.texStorage2D(r.TEXTURE_2D,Ie,qe,ve.width,ve.height)}for(let ve=0,he=at.length;ve<he;ve++)Ae=at[ve],z?ye&&t.texSubImage2D(r.TEXTURE_2D,ve,0,0,Re,He,Ae):t.texImage2D(r.TEXTURE_2D,ve,qe,Re,He,Ae);M.generateMipmaps=!1}else if(z){if(Le){const ve=je(Se);t.texStorage2D(r.TEXTURE_2D,Ie,qe,ve.width,ve.height)}ye&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Re,He,Se)}else t.texImage2D(r.TEXTURE_2D,0,qe,Re,He,Se);S(M)&&v(de),$e.__version=ae.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ue(P,M,H){if(M.image.length!==6)return;const de=we(P,M),pe=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+H);const ae=s.get(pe);if(pe.version!==ae.__version||de===!0){t.activeTexture(r.TEXTURE0+H);const $e=Tt.getPrimaries(Tt.workingColorSpace),Ee=M.colorSpace===Or?null:Tt.getPrimaries(M.colorSpace),Be=M.colorSpace===Or||$e===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const nt=M.isCompressedTexture||M.image[0].isCompressedTexture,Se=M.image[0]&&M.image[0].isDataTexture,Re=[];for(let he=0;he<6;he++)!nt&&!Se?Re[he]=w(M.image[he],!0,a.maxCubemapSize):Re[he]=Se?M.image[he].image:M.image[he],Re[he]=St(M,Re[he]);const He=Re[0],qe=l.convert(M.format,M.colorSpace),Ae=l.convert(M.type),at=L(M.internalFormat,qe,Ae,M.colorSpace),z=M.isVideoTexture!==!0,Le=ae.__version===void 0||de===!0,ye=pe.dataReady;let Ie=U(M,He);J(r.TEXTURE_CUBE_MAP,M);let ve;if(nt){z&&Le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,at,He.width,He.height);for(let he=0;he<6;he++){ve=Re[he].mipmaps;for(let Ce=0;Ce<ve.length;Ce++){const it=ve[Ce];M.format!==yi?qe!==null?z?ye&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,0,0,it.width,it.height,qe,it.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,at,it.width,it.height,0,it.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,0,0,it.width,it.height,qe,Ae,it.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,at,it.width,it.height,0,qe,Ae,it.data)}}}else{if(ve=M.mipmaps,z&&Le){ve.length>0&&Ie++;const he=je(Re[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,at,he.width,he.height)}for(let he=0;he<6;he++)if(Se){z?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Re[he].width,Re[he].height,qe,Ae,Re[he].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,at,Re[he].width,Re[he].height,0,qe,Ae,Re[he].data);for(let Ce=0;Ce<ve.length;Ce++){const It=ve[Ce].image[he].image;z?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,0,0,It.width,It.height,qe,Ae,It.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,at,It.width,It.height,0,qe,Ae,It.data)}}else{z?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,qe,Ae,Re[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,at,qe,Ae,Re[he]);for(let Ce=0;Ce<ve.length;Ce++){const it=ve[Ce];z?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,0,0,qe,Ae,it.image[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,at,qe,Ae,it.image[he])}}}S(M)&&v(r.TEXTURE_CUBE_MAP),ae.__version=pe.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function _e(P,M,H,de,pe,ae){const $e=l.convert(H.format,H.colorSpace),Ee=l.convert(H.type),Be=L(H.internalFormat,$e,Ee,H.colorSpace),nt=s.get(M),Se=s.get(H);if(Se.__renderTarget=M,!nt.__hasExternalTextures){const Re=Math.max(1,M.width>>ae),He=Math.max(1,M.height>>ae);pe===r.TEXTURE_3D||pe===r.TEXTURE_2D_ARRAY?t.texImage3D(pe,ae,Be,Re,He,M.depth,0,$e,Ee,null):t.texImage2D(pe,ae,Be,Re,He,0,$e,Ee,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),Wt(M)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,pe,Se.__webglTexture,0,B(M)):(pe===r.TEXTURE_2D||pe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,pe,Se.__webglTexture,ae),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(P,M,H){if(r.bindRenderbuffer(r.RENDERBUFFER,P),M.depthBuffer){const de=M.depthTexture,pe=de&&de.isDepthTexture?de.type:null,ae=b(M.stencilBuffer,pe),$e=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Wt(M)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,B(M),ae,M.width,M.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,B(M),ae,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ae,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,$e,r.RENDERBUFFER,P)}else{const de=M.textures;for(let pe=0;pe<de.length;pe++){const ae=de[pe],$e=l.convert(ae.format,ae.colorSpace),Ee=l.convert(ae.type),Be=L(ae.internalFormat,$e,Ee,ae.colorSpace);Wt(M)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,B(M),Be,M.width,M.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,B(M),Be,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Be,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(P,M,H){const de=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=s.get(M.depthTexture);if(pe.__renderTarget=M,(!pe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),de){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,M.depthTexture.addEventListener("dispose",F)),pe.__webglTexture===void 0){pe.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),J(r.TEXTURE_CUBE_MAP,M.depthTexture);const nt=l.convert(M.depthTexture.format),Se=l.convert(M.depthTexture.type);let Re;M.depthTexture.format===ar?Re=r.DEPTH_COMPONENT24:M.depthTexture.format===ms&&(Re=r.DEPTH24_STENCIL8);for(let He=0;He<6;He++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Re,M.width,M.height,0,nt,Se,null)}}else ce(M.depthTexture,0);const ae=pe.__webglTexture,$e=B(M),Ee=de?r.TEXTURE_CUBE_MAP_POSITIVE_X+H:r.TEXTURE_2D,Be=M.depthTexture.format===ms?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===ar)Wt(M)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Be,Ee,ae,0,$e):r.framebufferTexture2D(r.FRAMEBUFFER,Be,Ee,ae,0);else if(M.depthTexture.format===ms)Wt(M)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Be,Ee,ae,0,$e):r.framebufferTexture2D(r.FRAMEBUFFER,Be,Ee,ae,0);else throw new Error("Unknown depthTexture format")}function lt(P){const M=s.get(P),H=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const de=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),de){const pe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,de.removeEventListener("dispose",pe)};de.addEventListener("dispose",pe),M.__depthDisposeCallback=pe}M.__boundDepthTexture=de}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let de=0;de<6;de++)Pe(M.__webglFramebuffer[de],P,de);else{const de=P.texture.mipmaps;de&&de.length>0?Pe(M.__webglFramebuffer[0],P,0):Pe(M.__webglFramebuffer,P,0)}else if(H){M.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[de]),M.__webglDepthbuffer[de]===void 0)M.__webglDepthbuffer[de]=r.createRenderbuffer(),Ue(M.__webglDepthbuffer[de],P,!1);else{const pe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer[de];r.bindRenderbuffer(r.RENDERBUFFER,ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,ae)}}else{const de=P.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Ue(M.__webglDepthbuffer,P,!1);else{const pe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,ae)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function bt(P,M,H){const de=s.get(P);M!==void 0&&_e(de.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&lt(P)}function pt(P){const M=P.texture,H=s.get(P),de=s.get(M);P.addEventListener("dispose",I);const pe=P.textures,ae=P.isWebGLCubeRenderTarget===!0,$e=pe.length>1;if($e||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=M.version,c.memory.textures++),ae){H.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[Ee]=[];for(let Be=0;Be<M.mipmaps.length;Be++)H.__webglFramebuffer[Ee][Be]=r.createFramebuffer()}else H.__webglFramebuffer[Ee]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let Ee=0;Ee<M.mipmaps.length;Ee++)H.__webglFramebuffer[Ee]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if($e)for(let Ee=0,Be=pe.length;Ee<Be;Ee++){const nt=s.get(pe[Ee]);nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture(),c.memory.textures++)}if(P.samples>0&&Wt(P)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Ee=0;Ee<pe.length;Ee++){const Be=pe[Ee];H.__webglColorRenderbuffer[Ee]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[Ee]);const nt=l.convert(Be.format,Be.colorSpace),Se=l.convert(Be.type),Re=L(Be.internalFormat,nt,Se,Be.colorSpace,P.isXRRenderTarget===!0),He=B(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,He,Re,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,H.__webglColorRenderbuffer[Ee])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Ue(H.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ae){t.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),J(r.TEXTURE_CUBE_MAP,M);for(let Ee=0;Ee<6;Ee++)if(M.mipmaps&&M.mipmaps.length>0)for(let Be=0;Be<M.mipmaps.length;Be++)_e(H.__webglFramebuffer[Ee][Be],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Be);else _e(H.__webglFramebuffer[Ee],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);S(M)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let Ee=0,Be=pe.length;Ee<Be;Ee++){const nt=pe[Ee],Se=s.get(nt);let Re=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Re=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Re,Se.__webglTexture),J(Re,nt),_e(H.__webglFramebuffer,P,nt,r.COLOR_ATTACHMENT0+Ee,Re,0),S(nt)&&v(Re)}t.unbindTexture()}else{let Ee=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ee=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ee,de.__webglTexture),J(Ee,M),M.mipmaps&&M.mipmaps.length>0)for(let Be=0;Be<M.mipmaps.length;Be++)_e(H.__webglFramebuffer[Be],P,M,r.COLOR_ATTACHMENT0,Ee,Be);else _e(H.__webglFramebuffer,P,M,r.COLOR_ATTACHMENT0,Ee,0);S(M)&&v(Ee),t.unbindTexture()}P.depthBuffer&&lt(P)}function xt(P){const M=P.textures;for(let H=0,de=M.length;H<de;H++){const pe=M[H];if(S(pe)){const ae=D(P),$e=s.get(pe).__webglTexture;t.bindTexture(ae,$e),v(ae),t.unbindTexture()}}}const Pt=[],ut=[];function Ht(P){if(P.samples>0){if(Wt(P)===!1){const M=P.textures,H=P.width,de=P.height;let pe=r.COLOR_BUFFER_BIT;const ae=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$e=s.get(P),Ee=M.length>1;if(Ee)for(let nt=0;nt<M.length;nt++)t.bindFramebuffer(r.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,$e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const Be=P.texture.mipmaps;Be&&Be.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let nt=0;nt<M.length;nt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(pe|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(pe|=r.STENCIL_BUFFER_BIT)),Ee){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,$e.__webglColorRenderbuffer[nt]);const Se=s.get(M[nt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Se,0)}r.blitFramebuffer(0,0,H,de,0,0,H,de,pe,r.NEAREST),h===!0&&(Pt.length=0,ut.length=0,Pt.push(r.COLOR_ATTACHMENT0+nt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Pt.push(ae),ut.push(ae),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ut)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Pt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ee)for(let nt=0;nt<M.length;nt++){t.bindFramebuffer(r.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.RENDERBUFFER,$e.__webglColorRenderbuffer[nt]);const Se=s.get(M[nt]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,$e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.TEXTURE_2D,Se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const M=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function B(P){return Math.min(a.maxSamples,P.samples)}function Wt(P){const M=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function gt(P){const M=c.render.frame;g.get(P)!==M&&(g.set(P,M),P.update())}function St(P,M){const H=P.colorSpace,de=P.format,pe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==go&&H!==Or&&(Tt.getTransfer(H)===Nt?(de!==yi||pe!==ai)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",H)),M}function je(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=Z,this.resetTextureUnits=se,this.setTexture2D=ce,this.setTexture2DArray=oe,this.setTexture3D=j,this.setTextureCube=X,this.rebindTextures=bt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function _w(r,e){function t(s,a=Or){let l;const c=Tt.getTransfer(a);if(s===ai)return r.UNSIGNED_BYTE;if(s===hh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ph)return r.UNSIGNED_SHORT_5_5_5_1;if(s===j0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===q0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===W0)return r.BYTE;if(s===X0)return r.SHORT;if(s===va)return r.UNSIGNED_SHORT;if(s===dh)return r.INT;if(s===Bi)return r.UNSIGNED_INT;if(s===Ii)return r.FLOAT;if(s===or)return r.HALF_FLOAT;if(s===Y0)return r.ALPHA;if(s===$0)return r.RGB;if(s===yi)return r.RGBA;if(s===ar)return r.DEPTH_COMPONENT;if(s===ms)return r.DEPTH_STENCIL;if(s===K0)return r.RED;if(s===mh)return r.RED_INTEGER;if(s===mo)return r.RG;if(s===gh)return r.RG_INTEGER;if(s===_h)return r.RGBA_INTEGER;if(s===fu||s===du||s===hu||s===pu)if(c===Nt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===fu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===du)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===hu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===pu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===fu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===du)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===hu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===pu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yd||s===Md||s===Ed||s===Td)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===yd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Md)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ed)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Td)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===wd||s===Ad||s===Cd||s===Rd||s===bd||s===Pd||s===Dd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===wd||s===Ad)return c===Nt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Cd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===Rd)return l.COMPRESSED_R11_EAC;if(s===bd)return l.COMPRESSED_SIGNED_R11_EAC;if(s===Pd)return l.COMPRESSED_RG11_EAC;if(s===Dd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ld||s===Id||s===Nd||s===Ud||s===Fd||s===Od||s===kd||s===Bd||s===zd||s===Vd||s===Gd||s===Hd||s===Wd||s===Xd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Ld)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Id)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Nd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ud)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Od)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===kd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Bd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Vd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Hd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jd||s===qd||s===Yd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===jd)return c===Nt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===qd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Yd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===$d||s===Kd||s===Zd||s===Qd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===$d)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Kd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Zd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xa?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const vw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xw=`
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

}`;class Sw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new u_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Ei({vertexShader:vw,fragmentShader:xw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zi(new Ca(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yw extends xo{constructor(e,t){super();const s=this;let a=null,l=1,c=null,d="local-floor",h=1,m=null,g=null,_=null,x=null,y=null,T=null;const w=typeof XRWebGLBinding<"u",S=new Sw,v={},D=t.getContextAttributes();let L=null,b=null;const U=[],F=[],I=new Ft;let Y=null;const C=new xi;C.viewport=new Qt;const R=new xi;R.viewport=new Qt;const V=[C,R],se=new Py;let Z=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ue=U[Q];return ue===void 0&&(ue=new qf,U[Q]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Q){let ue=U[Q];return ue===void 0&&(ue=new qf,U[Q]=ue),ue.getGripSpace()},this.getHand=function(Q){let ue=U[Q];return ue===void 0&&(ue=new qf,U[Q]=ue),ue.getHandSpace()};function ce(Q){const ue=F.indexOf(Q.inputSource);if(ue===-1)return;const _e=U[ue];_e!==void 0&&(_e.update(Q.inputSource,Q.frame,m||c),_e.dispatchEvent({type:Q.type,data:Q.inputSource}))}function oe(){a.removeEventListener("select",ce),a.removeEventListener("selectstart",ce),a.removeEventListener("selectend",ce),a.removeEventListener("squeeze",ce),a.removeEventListener("squeezestart",ce),a.removeEventListener("squeezeend",ce),a.removeEventListener("end",oe),a.removeEventListener("inputsourceschange",j);for(let Q=0;Q<U.length;Q++){const ue=F[Q];ue!==null&&(F[Q]=null,U[Q].disconnect(ue))}Z=null,fe=null,S.reset();for(const Q in v)delete v[Q];e.setRenderTarget(L),y=null,x=null,_=null,a=null,b=null,Xe.stop(),s.isPresenting=!1,e.setPixelRatio(Y),e.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,s.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,s.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(a,t)),_},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(L=e.getRenderTarget(),a.addEventListener("select",ce),a.addEventListener("selectstart",ce),a.addEventListener("selectend",ce),a.addEventListener("squeeze",ce),a.addEventListener("squeezestart",ce),a.addEventListener("squeezeend",ce),a.addEventListener("end",oe),a.addEventListener("inputsourceschange",j),D.xrCompatible!==!0&&await t.makeXRCompatible(),Y=e.getPixelRatio(),e.getSize(I),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ue=null,Pe=null;D.depth&&(Pe=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=D.stencil?ms:ar,Ue=D.stencil?xa:Bi);const lt={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:l};_=this.getBinding(),x=_.createProjectionLayer(lt),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),b=new Fi(x.textureWidth,x.textureHeight,{format:yi,type:ai,depthTexture:new ya(x.textureWidth,x.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const _e={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(a,t,_e),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),b=new Fi(y.framebufferWidth,y.framebufferHeight,{format:yi,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(h),m=null,c=await a.requestReferenceSpace(d),Xe.setContext(a),Xe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function j(Q){for(let ue=0;ue<Q.removed.length;ue++){const _e=Q.removed[ue],Ue=F.indexOf(_e);Ue>=0&&(F[Ue]=null,U[Ue].disconnect(_e))}for(let ue=0;ue<Q.added.length;ue++){const _e=Q.added[ue];let Ue=F.indexOf(_e);if(Ue===-1){for(let lt=0;lt<U.length;lt++)if(lt>=F.length){F.push(_e),Ue=lt;break}else if(F[lt]===null){F[lt]=_e,Ue=lt;break}if(Ue===-1)break}const Pe=U[Ue];Pe&&Pe.connect(_e)}}const X=new re,le=new re;function te(Q,ue,_e){X.setFromMatrixPosition(ue.matrixWorld),le.setFromMatrixPosition(_e.matrixWorld);const Ue=X.distanceTo(le),Pe=ue.projectionMatrix.elements,lt=_e.projectionMatrix.elements,bt=Pe[14]/(Pe[10]-1),pt=Pe[14]/(Pe[10]+1),xt=(Pe[9]+1)/Pe[5],Pt=(Pe[9]-1)/Pe[5],ut=(Pe[8]-1)/Pe[0],Ht=(lt[8]+1)/lt[0],B=bt*ut,Wt=bt*Ht,gt=Ue/(-ut+Ht),St=gt*-ut;if(ue.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(St),Q.translateZ(gt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Pe[10]===-1)Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const je=bt+gt,P=pt+gt,M=B-St,H=Wt+(Ue-St),de=xt*pt/P*je,pe=Pt*pt/P*je;Q.projectionMatrix.makePerspective(M,H,de,pe,je,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function O(Q,ue){ue===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ue.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let ue=Q.near,_e=Q.far;S.texture!==null&&(S.depthNear>0&&(ue=S.depthNear),S.depthFar>0&&(_e=S.depthFar)),se.near=R.near=C.near=ue,se.far=R.far=C.far=_e,(Z!==se.near||fe!==se.far)&&(a.updateRenderState({depthNear:se.near,depthFar:se.far}),Z=se.near,fe=se.far),se.layers.mask=Q.layers.mask|6,C.layers.mask=se.layers.mask&3,R.layers.mask=se.layers.mask&5;const Ue=Q.parent,Pe=se.cameras;O(se,Ue);for(let lt=0;lt<Pe.length;lt++)O(Pe[lt],Ue);Pe.length===2?te(se,C,R):se.projectionMatrix.copy(C.projectionMatrix),J(Q,se,Ue)};function J(Q,ue,_e){_e===null?Q.matrix.copy(ue.matrixWorld):(Q.matrix.copy(_e.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ue.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=eh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(x===null&&y===null))return h},this.setFoveation=function(Q){h=Q,x!==null&&(x.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(se)},this.getCameraTexture=function(Q){return v[Q]};let we=null;function Ve(Q,ue){if(g=ue.getViewerPose(m||c),T=ue,g!==null){const _e=g.views;y!==null&&(e.setRenderTargetFramebuffer(b,y.framebuffer),e.setRenderTarget(b));let Ue=!1;_e.length!==se.cameras.length&&(se.cameras.length=0,Ue=!0);for(let pt=0;pt<_e.length;pt++){const xt=_e[pt];let Pt=null;if(y!==null)Pt=y.getViewport(xt);else{const Ht=_.getViewSubImage(x,xt);Pt=Ht.viewport,pt===0&&(e.setRenderTargetTextures(b,Ht.colorTexture,Ht.depthStencilTexture),e.setRenderTarget(b))}let ut=V[pt];ut===void 0&&(ut=new xi,ut.layers.enable(pt),ut.viewport=new Qt,V[pt]=ut),ut.matrix.fromArray(xt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(xt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),pt===0&&(se.matrix.copy(ut.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),Ue===!0&&se.cameras.push(ut)}const Pe=a.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&w){_=s.getBinding();const pt=_.getDepthInformation(_e[0]);pt&&pt.isValid&&pt.texture&&S.init(pt,a.renderState)}if(Pe&&Pe.includes("camera-access")&&w){e.state.unbindTexture(),_=s.getBinding();for(let pt=0;pt<_e.length;pt++){const xt=_e[pt].camera;if(xt){let Pt=v[xt];Pt||(Pt=new u_,v[xt]=Pt);const ut=_.getCameraImage(xt);Pt.sourceTexture=ut}}}}for(let _e=0;_e<U.length;_e++){const Ue=F[_e],Pe=U[_e];Ue!==null&&Pe!==void 0&&Pe.update(Ue,ue,m||c)}we&&we(Q,ue),ue.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ue}),T=null}const Xe=new c_;Xe.setAnimationLoop(Ve),this.setAnimationLoop=function(Q){we=Q},this.dispose=function(){}}}const us=new lr,Mw=new nn;function Ew(r,e){function t(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,r_(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function a(S,v,D,L,b){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(S,v):v.isMeshToonMaterial?(l(S,v),_(S,v)):v.isMeshPhongMaterial?(l(S,v),g(S,v)):v.isMeshStandardMaterial?(l(S,v),x(S,v),v.isMeshPhysicalMaterial&&y(S,v,b)):v.isMeshMatcapMaterial?(l(S,v),T(S,v)):v.isMeshDepthMaterial?l(S,v):v.isMeshDistanceMaterial?(l(S,v),w(S,v)):v.isMeshNormalMaterial?l(S,v):v.isLineBasicMaterial?(c(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?h(S,v,D,L):v.isSpriteMaterial?m(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,t(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Vn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,t(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Vn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,t(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,t(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const D=e.get(v),L=D.envMap,b=D.envMapRotation;L&&(S.envMap.value=L,us.copy(b),us.x*=-1,us.y*=-1,us.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),S.envMapRotation.value.setFromMatrix4(Mw.makeRotationFromEuler(us)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,S.aoMapTransform))}function c(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function h(S,v,D,L){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*D,S.scale.value=L*.5,v.map&&(S.map.value=v.map,t(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function m(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,D){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Vn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,v){v.matcap&&(S.matcap.value=v.matcap)}function w(S,v){const D=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function Tw(r,e,t,s){let a={},l={},c=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,L){const b=L.program;s.uniformBlockBinding(D,b)}function m(D,L){let b=a[D.id];b===void 0&&(T(D),b=g(D),a[D.id]=b,D.addEventListener("dispose",S));const U=L.program;s.updateUBOMapping(D,U);const F=e.render.frame;l[D.id]!==F&&(x(D),l[D.id]=F)}function g(D){const L=_();D.__bindingPointIndex=L;const b=r.createBuffer(),U=D.__size,F=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,U,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,b),b}function _(){for(let D=0;D<d;D++)if(c.indexOf(D)===-1)return c.push(D),D;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const L=a[D.id],b=D.uniforms,U=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let F=0,I=b.length;F<I;F++){const Y=Array.isArray(b[F])?b[F]:[b[F]];for(let C=0,R=Y.length;C<R;C++){const V=Y[C];if(y(V,F,C,U)===!0){const se=V.__offset,Z=Array.isArray(V.value)?V.value:[V.value];let fe=0;for(let ce=0;ce<Z.length;ce++){const oe=Z[ce],j=w(oe);typeof oe=="number"||typeof oe=="boolean"?(V.__data[0]=oe,r.bufferSubData(r.UNIFORM_BUFFER,se+fe,V.__data)):oe.isMatrix3?(V.__data[0]=oe.elements[0],V.__data[1]=oe.elements[1],V.__data[2]=oe.elements[2],V.__data[3]=0,V.__data[4]=oe.elements[3],V.__data[5]=oe.elements[4],V.__data[6]=oe.elements[5],V.__data[7]=0,V.__data[8]=oe.elements[6],V.__data[9]=oe.elements[7],V.__data[10]=oe.elements[8],V.__data[11]=0):(oe.toArray(V.__data,fe),fe+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,se,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(D,L,b,U){const F=D.value,I=L+"_"+b;if(U[I]===void 0)return typeof F=="number"||typeof F=="boolean"?U[I]=F:U[I]=F.clone(),!0;{const Y=U[I];if(typeof F=="number"||typeof F=="boolean"){if(Y!==F)return U[I]=F,!0}else if(Y.equals(F)===!1)return Y.copy(F),!0}return!1}function T(D){const L=D.uniforms;let b=0;const U=16;for(let I=0,Y=L.length;I<Y;I++){const C=Array.isArray(L[I])?L[I]:[L[I]];for(let R=0,V=C.length;R<V;R++){const se=C[R],Z=Array.isArray(se.value)?se.value:[se.value];for(let fe=0,ce=Z.length;fe<ce;fe++){const oe=Z[fe],j=w(oe),X=b%U,le=X%j.boundary,te=X+le;b+=le,te!==0&&U-te<j.storage&&(b+=U-te),se.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=b,b+=j.storage}}}const F=b%U;return F>0&&(b+=U-F),D.__size=b,D.__cache={},this}function w(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",D),L}function S(D){const L=D.target;L.removeEventListener("dispose",S);const b=c.indexOf(L.__bindingPointIndex);c.splice(b,1),r.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function v(){for(const D in a)r.deleteBuffer(a[D]);c=[],a={},l={}}return{bind:h,update:m,dispose:v}}const ww=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function Aw(){return Pi===null&&(Pi=new My(ww,16,16,mo,or),Pi.name="DFG_LUT",Pi.minFilter=An,Pi.magFilter=An,Pi.wrapS=nr,Pi.wrapT=nr,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class Cw{constructor(e={}){const{canvas:t=YS(),context:s=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:y=ai}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=c;const w=y,S=new Set([_h,gh,mh]),v=new Set([ai,Bi,va,xa,hh,ph]),D=new Uint32Array(4),L=new Int32Array(4);let b=null,U=null;const F=[],I=[];let Y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let R=!1;this._outputColorSpace=oi;let V=0,se=0,Z=null,fe=-1,ce=null;const oe=new Qt,j=new Qt;let X=null;const le=new Ut(0);let te=0,O=t.width,J=t.height,we=1,Ve=null,Xe=null;const Q=new Qt(0,0,O,J),ue=new Qt(0,0,O,J);let _e=!1;const Ue=new l_;let Pe=!1,lt=!1;const bt=new nn,pt=new re,xt=new Qt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Ht(){return Z===null?we:1}let B=s;function Wt(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fh}`),t.addEventListener("webglcontextlost",it,!1),t.addEventListener("webglcontextrestored",It,!1),t.addEventListener("webglcontextcreationerror",yt,!1),B===null){const W="webgl2";if(B=Wt(W,A),B===null)throw Wt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ct("WebGLRenderer: "+A.message),A}let gt,St,je,P,M,H,de,pe,ae,$e,Ee,Be,nt,Se,Re,He,qe,Ae,at,z,Le,ye,Ie,ve;function he(){gt=new A1(B),gt.init(),ye=new _w(B,gt),St=new _1(B,gt,e,ye),je=new mw(B,gt),St.reversedDepthBuffer&&x&&je.buffers.depth.setReversed(!0),P=new b1(B),M=new ew,H=new gw(B,gt,je,M,St,ye,P),de=new x1(C),pe=new w1(C),ae=new Iy(B),Ie=new m1(B,ae),$e=new C1(B,ae,P,Ie),Ee=new D1(B,$e,ae,P),at=new P1(B,St,H),He=new v1(M),Be=new JT(C,de,pe,gt,St,Ie,He),nt=new Ew(C,M),Se=new nw,Re=new lw(gt),Ae=new p1(C,de,pe,je,Ee,T,h),qe=new hw(C,Ee,St),ve=new Tw(B,P,St,je),z=new g1(B,gt,P),Le=new R1(B,gt,P),P.programs=Be.programs,C.capabilities=St,C.extensions=gt,C.properties=M,C.renderLists=Se,C.shadowMap=qe,C.state=je,C.info=P}he(),w!==ai&&(Y=new I1(w,t.width,t.height,a,l));const Ce=new yw(C,B);this.xr=Ce,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(A){A!==void 0&&(we=A,this.setSize(O,J,!1))},this.getSize=function(A){return A.set(O,J)},this.setSize=function(A,W,ie=!0){if(Ce.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,J=W,t.width=Math.floor(A*we),t.height=Math.floor(W*we),ie===!0&&(t.style.width=A+"px",t.style.height=W+"px"),Y!==null&&Y.setSize(t.width,t.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(O*we,J*we).floor()},this.setDrawingBufferSize=function(A,W,ie){O=A,J=W,we=ie,t.width=Math.floor(A*ie),t.height=Math.floor(W*ie),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(w===ai){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Y.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(oe)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,W,ie,ee){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,W,ie,ee),je.viewport(oe.copy(Q).multiplyScalar(we).round())},this.getScissor=function(A){return A.copy(ue)},this.setScissor=function(A,W,ie,ee){A.isVector4?ue.set(A.x,A.y,A.z,A.w):ue.set(A,W,ie,ee),je.scissor(j.copy(ue).multiplyScalar(we).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(A){je.setScissorTest(_e=A)},this.setOpaqueSort=function(A){Ve=A},this.setTransparentSort=function(A){Xe=A},this.getClearColor=function(A){return A.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,ie=!0){let ee=0;if(A){let $=!1;if(Z!==null){const be=Z.texture.format;$=S.has(be)}if($){const be=Z.texture.type,Fe=v.has(be),Te=Ae.getClearColor(),Ge=Ae.getClearAlpha(),ke=Te.r,tt=Te.g,Ze=Te.b;Fe?(D[0]=ke,D[1]=tt,D[2]=Ze,D[3]=Ge,B.clearBufferuiv(B.COLOR,0,D)):(L[0]=ke,L[1]=tt,L[2]=Ze,L[3]=Ge,B.clearBufferiv(B.COLOR,0,L))}else ee|=B.COLOR_BUFFER_BIT}W&&(ee|=B.DEPTH_BUFFER_BIT),ie&&(ee|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",It,!1),t.removeEventListener("webglcontextcreationerror",yt,!1),Ae.dispose(),Se.dispose(),Re.dispose(),M.dispose(),de.dispose(),pe.dispose(),Ee.dispose(),Ie.dispose(),ve.dispose(),Be.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Gr),Ce.removeEventListener("sessionend",Hr),ui.stop()};function it(A){A.preventDefault(),yg("WebGLRenderer: Context Lost."),R=!0}function It(){yg("WebGLRenderer: Context Restored."),R=!1;const A=P.autoReset,W=qe.enabled,ie=qe.autoUpdate,ee=qe.needsUpdate,$=qe.type;he(),P.autoReset=A,qe.enabled=W,qe.autoUpdate=ie,qe.needsUpdate=ee,qe.type=$}function yt(A){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Gn(A){const W=A.target;W.removeEventListener("dispose",Gn),Cn(W)}function Cn(A){yo(A),M.remove(A)}function yo(A){const W=M.get(A).programs;W!==void 0&&(W.forEach(function(ie){Be.releaseProgram(ie)}),A.isShaderMaterial&&Be.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,ie,ee,$,be){W===null&&(W=Pt);const Fe=$.isMesh&&$.matrixWorld.determinant()<0,Te=Da(A,W,ie,ee,$);je.setMaterial(ee,Fe);let Ge=ie.index,ke=1;if(ee.wireframe===!0){if(Ge=$e.getWireframeAttribute(ie),Ge===void 0)return;ke=2}const tt=ie.drawRange,Ze=ie.attributes.position;let ft=tt.start*ke,Mt=(tt.start+tt.count)*ke;be!==null&&(ft=Math.max(ft,be.start*ke),Mt=Math.min(Mt,(be.start+be.count)*ke)),Ge!==null?(ft=Math.max(ft,0),Mt=Math.min(Mt,Ge.count)):Ze!=null&&(ft=Math.max(ft,0),Mt=Math.min(Mt,Ze.count));const kt=Mt-ft;if(kt<0||kt===1/0)return;Ie.setup($,ee,Te,ie,Ge);let Ot,wt=z;if(Ge!==null&&(Ot=ae.get(Ge),wt=Le,wt.setIndex(Ot)),$.isMesh)ee.wireframe===!0?(je.setLineWidth(ee.wireframeLinewidth*Ht()),wt.setMode(B.LINES)):wt.setMode(B.TRIANGLES);else if($.isLine){let Qe=ee.linewidth;Qe===void 0&&(Qe=1),je.setLineWidth(Qe*Ht()),$.isLineSegments?wt.setMode(B.LINES):$.isLineLoop?wt.setMode(B.LINE_LOOP):wt.setMode(B.LINE_STRIP)}else $.isPoints?wt.setMode(B.POINTS):$.isSprite&&wt.setMode(B.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Sa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))wt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Qe=$._multiDrawStarts,Rt=$._multiDrawCounts,_t=$._multiDrawCount,xn=Ge?ae.get(Ge).bytesPerElement:1,Ti=M.get(ee).currentProgram.getUniforms();for(let rn=0;rn<_t;rn++)Ti.setValue(B,"_gl_DrawID",rn),wt.render(Qe[rn]/xn,Rt[rn])}else if($.isInstancedMesh)wt.renderInstances(ft,kt,$.count);else if(ie.isInstancedBufferGeometry){const Qe=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Rt=Math.min(ie.instanceCount,Qe);wt.renderInstances(ft,kt,Rt)}else wt.render(ft,kt)};function cr(A,W,ie){A.transparent===!0&&A.side===tr&&A.forceSinglePass===!1?(A.side=Vn,A.needsUpdate=!0,Wr(A,W,ie),A.side=Br,A.needsUpdate=!0,Wr(A,W,ie),A.side=tr):Wr(A,W,ie)}this.compile=function(A,W,ie=null){ie===null&&(ie=A),U=Re.get(ie),U.init(W),I.push(U),ie.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(U.pushLight($),$.castShadow&&U.pushShadow($))}),A!==ie&&A.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(U.pushLight($),$.castShadow&&U.pushShadow($))}),U.setupLights();const ee=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const be=$.material;if(be)if(Array.isArray(be))for(let Fe=0;Fe<be.length;Fe++){const Te=be[Fe];cr(Te,ie,$),ee.add(Te)}else cr(be,ie,$),ee.add(be)}),U=I.pop(),ee},this.compileAsync=function(A,W,ie=null){const ee=this.compile(A,W,ie);return new Promise($=>{function be(){if(ee.forEach(function(Fe){M.get(Fe).currentProgram.isReady()&&ee.delete(Fe)}),ee.size===0){$(A);return}setTimeout(be,10)}gt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Mo=null;function Vr(A){Mo&&Mo(A)}function Gr(){ui.stop()}function Hr(){ui.start()}const ui=new c_;ui.setAnimationLoop(Vr),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(A){Mo=A,Ce.setAnimationLoop(A),A===null?ui.stop():ui.start()},Ce.addEventListener("sessionstart",Gr),Ce.addEventListener("sessionend",Hr),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const ie=Ce.enabled===!0&&Ce.isPresenting===!0,ee=Y!==null&&(Z===null||ie)&&Y.begin(C,Z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Y===null||Y.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(W),W=Ce.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,W,Z),U=Re.get(A,I.length),U.init(W),I.push(U),bt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ue.setFromProjectionMatrix(bt,Ni,W.reversedDepth),lt=this.localClippingEnabled,Pe=He.init(this.clippingPlanes,lt),b=Se.get(A,F.length),b.init(),F.push(b),Ce.enabled===!0&&Ce.isPresenting===!0){const Fe=C.xr.getDepthSensingMesh();Fe!==null&&Eo(Fe,W,-1/0,C.sortObjects)}Eo(A,W,0,C.sortObjects),b.finish(),C.sortObjects===!0&&b.sort(Ve,Xe),ut=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ut&&Ae.addToRenderList(b,A),this.info.render.frame++,Pe===!0&&He.beginShadows();const $=U.state.shadowsArray;if(qe.render($,A,W),Pe===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&Y.hasRenderPass())===!1){const Fe=b.opaque,Te=b.transmissive;if(U.setupLights(),W.isArrayCamera){const Ge=W.cameras;if(Te.length>0)for(let ke=0,tt=Ge.length;ke<tt;ke++){const Ze=Ge[ke];ba(Fe,Te,A,Ze)}ut&&Ae.render(A);for(let ke=0,tt=Ge.length;ke<tt;ke++){const Ze=Ge[ke];Ra(b,A,Ze,Ze.viewport)}}else Te.length>0&&ba(Fe,Te,A,W),ut&&Ae.render(A),Ra(b,A,W)}Z!==null&&se===0&&(H.updateMultisampleRenderTarget(Z),H.updateRenderTargetMipmap(Z)),ee&&Y.end(C),A.isScene===!0&&A.onAfterRender(C,A,W),Ie.resetDefaultState(),fe=-1,ce=null,I.pop(),I.length>0?(U=I[I.length-1],Pe===!0&&He.setGlobalState(C.clippingPlanes,U.state.camera)):U=null,F.pop(),F.length>0?b=F[F.length-1]:b=null};function Eo(A,W,ie,ee){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ue.intersectsSprite(A)){ee&&xt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(bt);const Fe=Ee.update(A),Te=A.material;Te.visible&&b.push(A,Fe,Te,ie,xt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ue.intersectsObject(A))){const Fe=Ee.update(A),Te=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),xt.copy(A.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),xt.copy(Fe.boundingSphere.center)),xt.applyMatrix4(A.matrixWorld).applyMatrix4(bt)),Array.isArray(Te)){const Ge=Fe.groups;for(let ke=0,tt=Ge.length;ke<tt;ke++){const Ze=Ge[ke],ft=Te[Ze.materialIndex];ft&&ft.visible&&b.push(A,Fe,ft,ie,xt.z,Ze)}}else Te.visible&&b.push(A,Fe,Te,ie,xt.z,null)}}const be=A.children;for(let Fe=0,Te=be.length;Fe<Te;Fe++)Eo(be[Fe],W,ie,ee)}function Ra(A,W,ie,ee){const{opaque:$,transmissive:be,transparent:Fe}=A;U.setupLightsView(ie),Pe===!0&&He.setGlobalState(C.clippingPlanes,ie),ee&&je.viewport(oe.copy(ee)),$.length>0&&Qn($,W,ie),be.length>0&&Qn(be,W,ie),Fe.length>0&&Qn(Fe,W,ie),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function ba(A,W,ie,ee){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ee.id]===void 0){const ft=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ee.id]=new Fi(1,1,{generateMipmaps:!0,type:ft?or:ai,minFilter:ps,samples:St.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const be=U.state.transmissionRenderTarget[ee.id],Fe=ee.viewport||oe;be.setSize(Fe.z*C.transmissionResolutionScale,Fe.w*C.transmissionResolutionScale);const Te=C.getRenderTarget(),Ge=C.getActiveCubeFace(),ke=C.getActiveMipmapLevel();C.setRenderTarget(be),C.getClearColor(le),te=C.getClearAlpha(),te<1&&C.setClearColor(16777215,.5),C.clear(),ut&&Ae.render(ie);const tt=C.toneMapping;C.toneMapping=Ui;const Ze=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),U.setupLightsView(ee),Pe===!0&&He.setGlobalState(C.clippingPlanes,ee),Qn(A,ie,ee),H.updateMultisampleRenderTarget(be),H.updateRenderTargetMipmap(be),gt.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let Mt=0,kt=W.length;Mt<kt;Mt++){const Ot=W[Mt],{object:wt,geometry:Qe,material:Rt,group:_t}=Ot;if(Rt.side===tr&&wt.layers.test(ee.layers)){const xn=Rt.side;Rt.side=Vn,Rt.needsUpdate=!0,To(wt,ie,ee,Qe,Rt,_t),Rt.side=xn,Rt.needsUpdate=!0,ft=!0}}ft===!0&&(H.updateMultisampleRenderTarget(be),H.updateRenderTargetMipmap(be))}C.setRenderTarget(Te,Ge,ke),C.setClearColor(le,te),Ze!==void 0&&(ee.viewport=Ze),C.toneMapping=tt}function Qn(A,W,ie){const ee=W.isScene===!0?W.overrideMaterial:null;for(let $=0,be=A.length;$<be;$++){const Fe=A[$],{object:Te,geometry:Ge,group:ke}=Fe;let tt=Fe.material;tt.allowOverride===!0&&ee!==null&&(tt=ee),Te.layers.test(ie.layers)&&To(Te,W,ie,Ge,tt,ke)}}function To(A,W,ie,ee,$,be){A.onBeforeRender(C,W,ie,ee,$,be),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(C,W,ie,ee,A,be),$.transparent===!0&&$.side===tr&&$.forceSinglePass===!1?($.side=Vn,$.needsUpdate=!0,C.renderBufferDirect(ie,W,ee,$,A,be),$.side=Br,$.needsUpdate=!0,C.renderBufferDirect(ie,W,ee,$,A,be),$.side=tr):C.renderBufferDirect(ie,W,ee,$,A,be),A.onAfterRender(C,W,ie,ee,$,be)}function Wr(A,W,ie){W.isScene!==!0&&(W=Pt);const ee=M.get(A),$=U.state.lights,be=U.state.shadowsArray,Fe=$.state.version,Te=Be.getParameters(A,$.state,be,W,ie),Ge=Be.getProgramCacheKey(Te);let ke=ee.programs;ee.environment=A.isMeshStandardMaterial?W.environment:null,ee.fog=W.fog,ee.envMap=(A.isMeshStandardMaterial?pe:de).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",Gn),ke=new Map,ee.programs=ke);let tt=ke.get(Ge);if(tt!==void 0){if(ee.currentProgram===tt&&ee.lightsStateVersion===Fe)return wo(A,Te),tt}else Te.uniforms=Be.getUniforms(A),A.onBeforeCompile(Te,C),tt=Be.acquireProgram(Te,Ge),ke.set(Ge,tt),ee.uniforms=Te.uniforms;const Ze=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=He.uniform),wo(A,Te),ee.needsLights=Ia(A),ee.lightsStateVersion=Fe,ee.needsLights&&(Ze.ambientLightColor.value=$.state.ambient,Ze.lightProbe.value=$.state.probe,Ze.directionalLights.value=$.state.directional,Ze.directionalLightShadows.value=$.state.directionalShadow,Ze.spotLights.value=$.state.spot,Ze.spotLightShadows.value=$.state.spotShadow,Ze.rectAreaLights.value=$.state.rectArea,Ze.ltc_1.value=$.state.rectAreaLTC1,Ze.ltc_2.value=$.state.rectAreaLTC2,Ze.pointLights.value=$.state.point,Ze.pointLightShadows.value=$.state.pointShadow,Ze.hemisphereLights.value=$.state.hemi,Ze.directionalShadowMap.value=$.state.directionalShadowMap,Ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ze.spotShadowMap.value=$.state.spotShadowMap,Ze.spotLightMatrix.value=$.state.spotLightMatrix,Ze.spotLightMap.value=$.state.spotLightMap,Ze.pointShadowMap.value=$.state.pointShadowMap,Ze.pointShadowMatrix.value=$.state.pointShadowMatrix),ee.currentProgram=tt,ee.uniformsList=null,tt}function Pa(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=mu.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function wo(A,W){const ie=M.get(A);ie.outputColorSpace=W.outputColorSpace,ie.batching=W.batching,ie.batchingColor=W.batchingColor,ie.instancing=W.instancing,ie.instancingColor=W.instancingColor,ie.instancingMorph=W.instancingMorph,ie.skinning=W.skinning,ie.morphTargets=W.morphTargets,ie.morphNormals=W.morphNormals,ie.morphColors=W.morphColors,ie.morphTargetsCount=W.morphTargetsCount,ie.numClippingPlanes=W.numClippingPlanes,ie.numIntersection=W.numClipIntersection,ie.vertexAlphas=W.vertexAlphas,ie.vertexTangents=W.vertexTangents,ie.toneMapping=W.toneMapping}function Da(A,W,ie,ee,$){W.isScene!==!0&&(W=Pt),H.resetTextureUnits();const be=W.fog,Fe=ee.isMeshStandardMaterial?W.environment:null,Te=Z===null?C.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:go,Ge=(ee.isMeshStandardMaterial?pe:de).get(ee.envMap||Fe),ke=ee.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,tt=!!ie.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ze=!!ie.morphAttributes.position,ft=!!ie.morphAttributes.normal,Mt=!!ie.morphAttributes.color;let kt=Ui;ee.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(kt=C.toneMapping);const Ot=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,wt=Ot!==void 0?Ot.length:0,Qe=M.get(ee),Rt=U.state.lights;if(Pe===!0&&(lt===!0||A!==ce)){const un=A===ce&&ee.id===fe;He.setState(ee,A,un)}let _t=!1;ee.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Rt.state.version||Qe.outputColorSpace!==Te||$.isBatchedMesh&&Qe.batching===!1||!$.isBatchedMesh&&Qe.batching===!0||$.isBatchedMesh&&Qe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Qe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Qe.instancing===!1||!$.isInstancedMesh&&Qe.instancing===!0||$.isSkinnedMesh&&Qe.skinning===!1||!$.isSkinnedMesh&&Qe.skinning===!0||$.isInstancedMesh&&Qe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Qe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Qe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Qe.instancingMorph===!1&&$.morphTexture!==null||Qe.envMap!==Ge||ee.fog===!0&&Qe.fog!==be||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==He.numPlanes||Qe.numIntersection!==He.numIntersection)||Qe.vertexAlphas!==ke||Qe.vertexTangents!==tt||Qe.morphTargets!==Ze||Qe.morphNormals!==ft||Qe.morphColors!==Mt||Qe.toneMapping!==kt||Qe.morphTargetsCount!==wt)&&(_t=!0):(_t=!0,Qe.__version=ee.version);let xn=Qe.currentProgram;_t===!0&&(xn=Wr(ee,W,$));let Ti=!1,rn=!1,Xr=!1;const Dt=xn.getUniforms(),st=Qe.uniforms;if(je.useProgram(xn.program)&&(Ti=!0,rn=!0,Xr=!0),ee.id!==fe&&(fe=ee.id,rn=!0),Ti||ce!==A){je.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Dt.setValue(B,"projectionMatrix",A.projectionMatrix),Dt.setValue(B,"viewMatrix",A.matrixWorldInverse);const cn=Dt.map.cameraPosition;cn!==void 0&&cn.setValue(B,pt.setFromMatrixPosition(A.matrixWorld)),St.logarithmicDepthBuffer&&Dt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Dt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),ce!==A&&(ce=A,rn=!0,Xr=!0)}if(Qe.needsLights&&(Rt.state.directionalShadowMap.length>0&&Dt.setValue(B,"directionalShadowMap",Rt.state.directionalShadowMap,H),Rt.state.spotShadowMap.length>0&&Dt.setValue(B,"spotShadowMap",Rt.state.spotShadowMap,H),Rt.state.pointShadowMap.length>0&&Dt.setValue(B,"pointShadowMap",Rt.state.pointShadowMap,H)),$.isSkinnedMesh){Dt.setOptional(B,$,"bindMatrix"),Dt.setOptional(B,$,"bindMatrixInverse");const un=$.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Dt.setValue(B,"boneTexture",un.boneTexture,H))}$.isBatchedMesh&&(Dt.setOptional(B,$,"batchingTexture"),Dt.setValue(B,"batchingTexture",$._matricesTexture,H),Dt.setOptional(B,$,"batchingIdTexture"),Dt.setValue(B,"batchingIdTexture",$._indirectTexture,H),Dt.setOptional(B,$,"batchingColorTexture"),$._colorsTexture!==null&&Dt.setValue(B,"batchingColorTexture",$._colorsTexture,H));const Rn=ie.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&at.update($,ie,xn),(rn||Qe.receiveShadow!==$.receiveShadow)&&(Qe.receiveShadow=$.receiveShadow,Dt.setValue(B,"receiveShadow",$.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(st.envMap.value=Ge,st.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&W.environment!==null&&(st.envMapIntensity.value=W.environmentIntensity),st.dfgLUT!==void 0&&(st.dfgLUT.value=Aw()),rn&&(Dt.setValue(B,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&La(st,Xr),be&&ee.fog===!0&&nt.refreshFogUniforms(st,be),nt.refreshMaterialUniforms(st,ee,we,J,U.state.transmissionRenderTarget[A.id]),mu.upload(B,Pa(Qe),st,H)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(mu.upload(B,Pa(Qe),st,H),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Dt.setValue(B,"center",$.center),Dt.setValue(B,"modelViewMatrix",$.modelViewMatrix),Dt.setValue(B,"normalMatrix",$.normalMatrix),Dt.setValue(B,"modelMatrix",$.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const un=ee.uniformsGroups;for(let cn=0,Ss=un.length;cn<Ss;cn++){const wi=un[cn];ve.update(wi,xn),ve.bind(wi,xn)}}return xn}function La(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Ia(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,W,ie){const ee=M.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=W,M.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:ie,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const ie=M.get(A);ie.__webglFramebuffer=W,ie.__useDefaultFramebuffer=W===void 0};const Nu=B.createFramebuffer();this.setRenderTarget=function(A,W=0,ie=0){Z=A,V=W,se=ie;let ee=null,$=!1,be=!1;if(A){const Te=M.get(A);if(Te.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(B.FRAMEBUFFER,Te.__webglFramebuffer),oe.copy(A.viewport),j.copy(A.scissor),X=A.scissorTest,je.viewport(oe),je.scissor(j),je.setScissorTest(X),fe=-1;return}else if(Te.__webglFramebuffer===void 0)H.setupRenderTarget(A);else if(Te.__hasExternalTextures)H.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const tt=A.depthTexture;if(Te.__boundDepthTexture!==tt){if(tt!==null&&M.has(tt)&&(A.width!==tt.image.width||A.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(A)}}const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(be=!0);const ke=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[W])?ee=ke[W][ie]:ee=ke[W],$=!0):A.samples>0&&H.useMultisampledRTT(A)===!1?ee=M.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?ee=ke[ie]:ee=ke,oe.copy(A.viewport),j.copy(A.scissor),X=A.scissorTest}else oe.copy(Q).multiplyScalar(we).floor(),j.copy(ue).multiplyScalar(we).floor(),X=_e;if(ie!==0&&(ee=Nu),je.bindFramebuffer(B.FRAMEBUFFER,ee)&&je.drawBuffers(A,ee),je.viewport(oe),je.scissor(j),je.setScissorTest(X),$){const Te=M.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Te.__webglTexture,ie)}else if(be){const Te=W;for(let Ge=0;Ge<A.textures.length;Ge++){const ke=M.get(A.textures[Ge]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ge,ke.__webglTexture,ie,Te)}}else if(A!==null&&ie!==0){const Te=M.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Te.__webglTexture,ie)}fe=-1},this.readRenderTargetPixels=function(A,W,ie,ee,$,be,Fe,Te=0){if(!(A&&A.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge){je.bindFramebuffer(B.FRAMEBUFFER,Ge);try{const ke=A.textures[Te],tt=ke.format,Ze=ke.type;if(!St.textureFormatReadable(tt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Ze)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-ee&&ie>=0&&ie<=A.height-$&&(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Te),B.readPixels(W,ie,ee,$,ye.convert(tt),ye.convert(Ze),be))}finally{const ke=Z!==null?M.get(Z).__webglFramebuffer:null;je.bindFramebuffer(B.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,W,ie,ee,$,be,Fe,Te=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge)if(W>=0&&W<=A.width-ee&&ie>=0&&ie<=A.height-$){je.bindFramebuffer(B.FRAMEBUFFER,Ge);const ke=A.textures[Te],tt=ke.format,Ze=ke.type;if(!St.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ft),B.bufferData(B.PIXEL_PACK_BUFFER,be.byteLength,B.STREAM_READ),A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Te),B.readPixels(W,ie,ee,$,ye.convert(tt),ye.convert(Ze),0);const Mt=Z!==null?M.get(Z).__webglFramebuffer:null;je.bindFramebuffer(B.FRAMEBUFFER,Mt);const kt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await $S(B,kt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ft),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,be),B.deleteBuffer(ft),B.deleteSync(kt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,ie=0){const ee=Math.pow(2,-ie),$=Math.floor(A.image.width*ee),be=Math.floor(A.image.height*ee),Fe=W!==null?W.x:0,Te=W!==null?W.y:0;H.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,ie,0,0,Fe,Te,$,be),je.unbindTexture()};const Uu=B.createFramebuffer(),qt=B.createFramebuffer();this.copyTextureToTexture=function(A,W,ie=null,ee=null,$=0,be=null){be===null&&($!==0?(Sa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=$,$=0):be=0);let Fe,Te,Ge,ke,tt,Ze,ft,Mt,kt;const Ot=A.isCompressedTexture?A.mipmaps[be]:A.image;if(ie!==null)Fe=ie.max.x-ie.min.x,Te=ie.max.y-ie.min.y,Ge=ie.isBox3?ie.max.z-ie.min.z:1,ke=ie.min.x,tt=ie.min.y,Ze=ie.isBox3?ie.min.z:0;else{const Rn=Math.pow(2,-$);Fe=Math.floor(Ot.width*Rn),Te=Math.floor(Ot.height*Rn),A.isDataArrayTexture?Ge=Ot.depth:A.isData3DTexture?Ge=Math.floor(Ot.depth*Rn):Ge=1,ke=0,tt=0,Ze=0}ee!==null?(ft=ee.x,Mt=ee.y,kt=ee.z):(ft=0,Mt=0,kt=0);const wt=ye.convert(W.format),Qe=ye.convert(W.type);let Rt;W.isData3DTexture?(H.setTexture3D(W,0),Rt=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(H.setTexture2DArray(W,0),Rt=B.TEXTURE_2D_ARRAY):(H.setTexture2D(W,0),Rt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const _t=B.getParameter(B.UNPACK_ROW_LENGTH),xn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ti=B.getParameter(B.UNPACK_SKIP_PIXELS),rn=B.getParameter(B.UNPACK_SKIP_ROWS),Xr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ot.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ot.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ke),B.pixelStorei(B.UNPACK_SKIP_ROWS,tt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ze);const Dt=A.isDataArrayTexture||A.isData3DTexture,st=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Rn=M.get(A),un=M.get(W),cn=M.get(Rn.__renderTarget),Ss=M.get(un.__renderTarget);je.bindFramebuffer(B.READ_FRAMEBUFFER,cn.__webglFramebuffer),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ss.__webglFramebuffer);for(let wi=0;wi<Ge;wi++)Dt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,M.get(A).__webglTexture,$,Ze+wi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,M.get(W).__webglTexture,be,kt+wi)),B.blitFramebuffer(ke,tt,Fe,Te,ft,Mt,Fe,Te,B.DEPTH_BUFFER_BIT,B.NEAREST);je.bindFramebuffer(B.READ_FRAMEBUFFER,null),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||M.has(A)){const Rn=M.get(A),un=M.get(W);je.bindFramebuffer(B.READ_FRAMEBUFFER,Uu),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,qt);for(let cn=0;cn<Ge;cn++)Dt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rn.__webglTexture,$,Ze+cn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Rn.__webglTexture,$),st?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,un.__webglTexture,be,kt+cn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,un.__webglTexture,be),$!==0?B.blitFramebuffer(ke,tt,Fe,Te,ft,Mt,Fe,Te,B.COLOR_BUFFER_BIT,B.NEAREST):st?B.copyTexSubImage3D(Rt,be,ft,Mt,kt+cn,ke,tt,Fe,Te):B.copyTexSubImage2D(Rt,be,ft,Mt,ke,tt,Fe,Te);je.bindFramebuffer(B.READ_FRAMEBUFFER,null),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else st?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Rt,be,ft,Mt,kt,Fe,Te,Ge,wt,Qe,Ot.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Rt,be,ft,Mt,kt,Fe,Te,Ge,wt,Ot.data):B.texSubImage3D(Rt,be,ft,Mt,kt,Fe,Te,Ge,wt,Qe,Ot):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,be,ft,Mt,Fe,Te,wt,Qe,Ot.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,be,ft,Mt,Ot.width,Ot.height,wt,Ot.data):B.texSubImage2D(B.TEXTURE_2D,be,ft,Mt,Fe,Te,wt,Qe,Ot);B.pixelStorei(B.UNPACK_ROW_LENGTH,_t),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,xn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ti),B.pixelStorei(B.UNPACK_SKIP_ROWS,rn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xr),be===0&&W.generateMipmaps&&B.generateMipmap(Rt),je.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&H.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?H.setTextureCube(A,0):A.isData3DTexture?H.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?H.setTexture2DArray(A,0):H.setTexture2D(A,0),je.unbindTexture()},this.resetState=function(){V=0,se=0,Z=null,je.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}const Rw=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,bw=`
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
`,Pw={square:0,circle:1,triangle:2,diamond:3},m_=({shape:r="square",pixelSize:e=4,inkColor:t="#ff5555",bgColor:s="#001d1d"})=>{const a=ki.useRef(null);return ki.useEffect(()=>{const l=a.current;if(!l)return;const c=l.clientWidth||window.innerWidth,d=l.clientHeight||window.innerHeight,h=new yy,m=new Mh(-1,1,1,-1,0,1),g=new Cw({alpha:!0,antialias:!0});g.setSize(c,d),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.domElement.classList.add("shader-canvas"),l.innerHTML="",l.appendChild(g.domElement);const _={uResolution:{value:new Ft(c,d)},uTime:{value:0},uColor:{value:new Ut(t)},uShapeType:{value:Pw[r]??0},uPixelSize:{value:e}},x=new Ei({vertexShader:Rw,fragmentShader:bw,uniforms:_,transparent:!0,glslVersion:Jd}),y=new Ca(2,2),T=new zi(y,x);h.add(T);const w=new Dy;let S=0;const v=()=>{_.uTime.value=w.getElapsedTime(),g.render(h,m),S=requestAnimationFrame(v)};v();const D=()=>{const L=l.clientWidth||window.innerWidth,b=l.clientHeight||window.innerHeight;g.setSize(L,b),_.uResolution.value.set(L,b)};return window.addEventListener("resize",D),()=>{cancelAnimationFrame(S),window.removeEventListener("resize",D),h.remove(T),y.dispose(),x.dispose(),g.dispose(),l.innerHTML=""}},[r,e,t]),De.jsx("div",{ref:a,className:"shader-container",style:{backgroundColor:s}})};m_.propTypes={shape:jt.oneOf(["square","circle","triangle","diamond"]),pixelSize:jt.number,inkColor:jt.string,bgColor:jt.string};function Dw(){const{lang:r,setLang:e,t}=ch();return De.jsxs("div",{className:"header-container",children:[De.jsx(m_,{shape:"circle",pixelSize:6,inkColor:"#999999",bgColor:"#000000"}),De.jsxs("div",{className:"header-title",children:[De.jsx(aS,{color:Kn.paragraph1,children:"Gerard Baholli"}),De.jsx(lS,{color:Kn.paragraph2,children:t("job_title")})]}),De.jsxs("div",{className:"header-language",children:[De.jsx("button",{className:`language-button ${r==="it"?"active":""}`,onClick:()=>e("it"),children:"it"}),De.jsx("button",{className:`language-button ${r==="en"?"active":""}`,onClick:()=>e("en"),children:"en"})]})]})}const Lw="/icons/arrow_outward_16dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.svg";function ih({href:r="#",children:e,target:t="_self",rel:s=""}){return De.jsxs("a",{href:r,className:"link-button-container",target:t,rel:s,children:[De.jsx(uS,{className:"link-text",children:e}),De.jsx("img",{src:Lw,alt:"Arrow icon",className:"link-arrow-icon"})]})}ih.propTypes={children:jt.node.isRequired,href:jt.string,target:jt.string,rel:jt.string};const Iw="Sono uno sviluppatore software e vivo a Treviso. Appassionato di programmazione e grafica 3D in tempo reale, lavoro principalmente con Unity e Three.js per creare esperienze interattive e web visualization. Mi piace sperimentare nuove tecnologie e contribuire all'open source.",Nw="I'm a software developer based in Treviso, Italy. Passionate about programming and real-time 3D graphics, I mainly work with Unity and Three.js to build interactive experiences and web visualizations. I enjoy exploring new technologies and contributing to open source.",Uw={it:Iw,en:Nw};function Fw(){const{t:r,lang:e}=ch(),t=e==="it"?"/GerardBaholli-Curriculum-It.pdf":"/GerardBaholli-Curriculum-En.pdf";return De.jsxs("div",{className:"about-container",children:[De.jsx(bu,{color:Kn.paragraph1,children:r("about_title")}),De.jsx(vs,{color:Kn.paragraph2,children:Uw[e]}),De.jsxs("div",{className:"link-list",children:[De.jsx(ih,{href:t,target:"_blank",rel:"noopener noreferrer",children:r("curriculum_button")}),De.jsx(ih,{href:"mailto:gerardbaholli@gmail.com",children:r("contact_button")})]})]})}const Ow="/icons/arrow_outward_16dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.svg";function pa({href:r="#",children:e,target:t="_self",rel:s=""}){return De.jsxs("a",{href:r,className:"link-arrow-container",target:t,rel:s,children:[De.jsx(uu,{as:"span",className:"link-text",children:e}),De.jsx("div",{className:"link-arrow-mask",style:{"--icon-url":`url(${Ow})`}})]})}pa.propTypes={children:jt.node.isRequired,href:jt.string,target:jt.string,rel:jt.string};function g_({title:r,description:e,techStack:t,links:s,image:a}){return De.jsxs("div",{className:"project-item-container",children:[a&&De.jsx("div",{className:"project-image-wrapper",children:De.jsx("img",{src:a,alt:r,className:"project-image"})}),De.jsxs("div",{className:"project-content",children:[De.jsx("div",{className:"project-header",children:De.jsx(vs,{color:Kn.paragraph1,className:"project-title",children:r})}),De.jsx("div",{className:"project-description",children:De.jsx(vs,{color:Kn.paragraph2,children:e})}),De.jsx("div",{className:"tech-stack-row",children:t.map((l,c)=>De.jsx("span",{className:"tech-badge",children:l},c))}),De.jsxs("div",{className:"project-links",children:[s.github&&De.jsx(pa,{href:s.github,target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),s.demo&&De.jsx(pa,{href:s.demo,target:"_blank",rel:"noopener noreferrer",children:"Demo"}),s.video&&De.jsx(pa,{href:s.video,target:"_blank",rel:"noopener noreferrer",children:"Video demo"}),s.open&&De.jsx(pa,{href:s.open,target:"_blank",rel:"noopener noreferrer",children:"Try it"})]})]})]})}g_.propTypes={title:jt.string.isRequired,description:jt.string.isRequired,techStack:jt.arrayOf(jt.string).isRequired,links:jt.shape({github:jt.string,demo:jt.string,video:jt.string,open:jt.string}).isRequired,image:jt.string};const kw=[{id:"astrovisio",title:"Astrovisio",description:{it:"Un'applicazione VR basata su Unity per la visualizzazione immersiva di dataset astrofisici. Fornisce strumenti interattivi per esplorare dati scientifici utilizzando mappe di colore e tecniche avanzate di mappatura dei dati.",en:"A Unity-based VR application for immersive visualization of astrophysical datasets. It provides interactive tools to explore scientific data using colormaps and advanced data mapping techniques."},techStack:["Unity Engine","C#","Unity UI Toolkit","HLSL","Git"],links:{github:"https://github.com/Astrovisio/astrovisio-unity",demo:null,video:"https://vimeo.com/1147345257?fl=pl&fe=sh"},image:"/projects/astrovisio.png"},{id:"fec-viewer3d",title:"FEC Digital Collection",description:{it:"Piattaforma digitale della Fondazione Ermanno Casoli dedicata alla fruizione online delle opere realizzate nell’ambito del Premio Ermanno Casoli. Progettata come un museo virtuale accessibile da qualsiasi dispositivo e compatibile con i principali visori VR, permette di esplorare le opere in modo interattivo attraverso foto, video e contenuti audio sul processo creativo. Una selezione è fruibile anche in 3D grazie alla digitalizzazione con tecnologia Gaussian Splatting. Particolare attenzione è stata dedicata all’accessibilità, con filtri per ipovedenti e daltonici, sottotitoli attivabili, contenuti in LIS e compatibilità con tecnologie assistive.",en:"A digital platform by Fondazione Ermanno Casoli that provides online access to artworks created as part of the Premio Ermanno Casoli. Designed as a virtual museum that works on any device and supports major VR headsets, it lets users explore each work interactively through photos, videos, and audio content about the creative process. A curated selection is also available in 3D thanks to Gaussian Splatting digitization."},techStack:["React","Three.js","Typescript","Webpack","Git"],links:{github:null,demo:null,open:"https://www.fecdigitalcollection.org//"},image:"/projects/fec.png"},{id:"gasperotti-viewer3d",title:"Gasperotti Configuratore",description:{it:"Configuratore 3D di porte pensato per supportare il processo di vendita e migliorare l’esperienza d’acquisto. Consente di personalizzare materiali e finiture della porta, sia lato interno che lato esterno, scegliere accessori da integrare e impostare il verso di apertura, con una preview interattiva durante la configurazione.",en:"A 3D door configurator designed to support the sales process and improve the customer buying experience. It lets users customize door materials and finishes for both the inside and outside, select optional accessories to add, and set the opening direction, with an interactive preview throughout the configuration."},techStack:["React","Three.js","Typescript","Webpack","Git"],links:{github:null,demo:null,open:"https://configuratore.gasperotti.com/"},image:"/projects/gasperotti.png"},{id:"rise-of-the-boxes",title:"Rise Of The Boxes",description:{it:"Progetto personale in Unity ispirato a Rise of the Blobs, in cui ho ricreato le meccaniche principali di un puzzle game 3D frenetico basato su match e reazioni a catena. Il gameplay ruota attorno alla rotazione di una piattaforma cilindrica per allineare gli elementi in caduta con quelli dello stesso colore, generando combo e liberando spazio prima che la situazione diventi ingestibile. Il progetto mi ha permesso di lavorare su game feel, gestione dello spawning, logiche di matching e bilanciamento del ritmo di gioco.",en:"A Unity personal project inspired by Rise of the Blobs, where I recreated the core mechanics of a fast-paced 3D puzzle game built around matching and chain reactions. Players rotate a cylindrical platform to align falling pieces with matching colors, triggering combos and clearing space before the board gets overwhelmed. This project let me focus on game feel, spawning systems, matching logic, and pacing and balance."},techStack:["Unity","C#","Git"],links:{github:"https://github.com/gerardbaholli/Rise-Of-The-Boxes",demo:null,open:null},image:"/projects/rise-of-the-boxes.jpg"},{id:"wana",title:"Wana",description:{it:"Digitalizzazione di Wana (罠), un gioco astratto di strategia rapido e minimale basato su posizionamento e manovre tattiche. Le regole sono essenziali: a ogni turno si muove una biglia e si vince quando si intrappola una biglia dell’avversario. Ispirato al Go, ruota attorno al concetto di iniziativa e al creare minacce che costringono l’altro a rispondere, con situazioni in cui anche una mossa apparentemente sfavorevole può trasformarsi in una trappola pianificata. Le partite durano pochi minuti, ma possono diventare più ragionate e strategiche.",en:"A digital version of Wana (罠), a quick and minimal abstract strategy game focused on positioning and tactical outmaneuvering. The rules are simple: on each turn you move one marble, and you win by trapping one of your opponent’s marbles. Inspired by Go and the idea of initiative, the game revolves around creating threats that force immediate responses, with situations where an apparently bad position can turn into a carefully prepared trap. Matches take just a few minutes, but can also be played more slowly and thoughtfully."},techStack:["Unity","C#","Git"],links:{github:"https://github.com/gerardbaholli/Wana",demo:null,open:null},image:"/projects/wana.jpg"},{id:"magickeywordwiki",title:"Magic Keyword Wiki",description:{it:"Un semplice tool nato dal bisogno di cercare rapidamente il significato delle parole chiave delle carte di Magic: The Gathering. L’obiettivo è aiutare soprattutto i nuovi giocatori a comprendere il regolamento delle keyword, che in MTG funzionano come abbreviazioni di porzioni di testo di regole più lunghe.",en:"A small tool born from the need to quickly look up the meaning of Magic: The Gathering card keywords. Its goal is to help new players understand keyword rules, since MTG keywords act as shorthand for longer pieces of rules text."},techStack:["React","Typescript","Vite","Git"],links:{github:"https://github.com/gerardbaholli/MagicKeywordWiki",demo:null,open:"https://gerardbaholli.github.io/MagicKeywordWiki/"},image:"/projects/mtgkeywordwiki.png"}];function Bw(){const{lang:r,t:e}=ch();return De.jsxs("div",{className:"projects-container",children:[De.jsx(bu,{color:Kn.paragraph1,children:e("projects_title")}),De.jsx("div",{className:"projects-list",children:kw.map(t=>De.jsx(g_,{title:t.title,description:t.description[r],techStack:t.techStack,links:t.links,image:t.image},t.id))})]})}const zw=[{name:"Unity",icon:"/icons/dev/unity-plain.svg"},{name:"Unreal Engine",icon:"/icons/dev/unrealengine-original.svg"},{name:"HTML5",icon:"/icons/dev/html5-plain.svg"},{name:"CSS3",icon:"/icons/dev/css3-plain.svg"},{name:"JavaScript",icon:"/icons/dev/javascript-plain.svg"},{name:"TypeScript",icon:"/icons/dev/typescript-plain.svg"},{name:"Python",icon:"/icons/dev/python-plain.svg"},{name:"Java",icon:"/icons/dev/java-plain.svg"},{name:"C#",icon:"/icons/dev/csharp-plain.svg"},{name:"React",icon:"/icons/dev/react-original.svg"},{name:"Three.js",icon:"/icons/dev/threejs-original.svg"},{name:"Node.js",icon:"/icons/dev/nodejs.svg"},{name:"Express",icon:"/icons/dev/express-original.svg"},{name:"PostgreSQL",icon:"/icons/dev/postgresql.svg"},{name:"SQLite",icon:"/icons/dev/sqlite-plain.svg"},{name:"Oracle",icon:"/icons/dev/oracle-original.svg"},{name:"JSON",icon:"/icons/dev/json-plain.svg"},{name:"XML",icon:"/icons/dev/xml-plain.svg"},{name:"Git",icon:"/icons/dev/git-plain.svg"},{name:"Perforce",icon:"/icons/dev/perforce-plain.svg"},{name:"DBeaver",icon:"/icons/dev/dbeaver-plain.svg"},{name:"gRPC",icon:"/icons/dev/grpc-plain.svg"},{name:"Selenium",icon:"/icons/dev/selenium-original.svg"},{name:"Figma",icon:"/icons/dev/figma-plain.svg"},{name:"Affinity",icon:"/icons/dev/affinity.svg"}];function Vw(){return De.jsxs("div",{className:"tech-container",children:[De.jsx(bu,{color:Kn.paragraph1,children:"Tech stack"}),De.jsx("div",{className:"tech-grid",children:zw.map((r,e)=>De.jsxs("div",{className:"tech-card",children:[De.jsx("div",{className:"icon-wrapper",children:De.jsx("img",{src:r.icon,alt:r.name,className:"tech-icon"})}),De.jsx("div",{className:"tech-name",children:De.jsx(vs,{color:Kn.paragraph2,children:r.name})})]},e))})]})}function Gw(){return De.jsxs("div",{className:"main-container",children:[De.jsx(Bw,{}),De.jsx(Vw,{})]})}function Hw(){return De.jsxs("div",{className:"content-container",children:[De.jsx(Fw,{}),De.jsx(Gw,{})]})}function __({onClose:r}){return De.jsx("div",{className:"privacy-modal-overlay",onClick:r,children:De.jsxs("div",{className:"privacy-modal-content",onClick:e=>e.stopPropagation(),children:[De.jsx("button",{className:"close-button",onClick:r,children:"×"}),De.jsx(bu,{color:Kn.paragraph1,children:"Privacy & Cookie Policy"}),De.jsxs("div",{style:{marginTop:"20px"},children:[De.jsx(vs,{style:{color:Kn.paragraph1,marginBottom:"10px"},children:"Cookies and Local Storage"}),De.jsx(vs,{color:Kn.paragraph2,children:"This website uses Local Storage solely to save your language preference (Italian/English). This is a purely technical functionality essential for the user experience and does not track your behavior or collect personal data. No profiling or marketing cookies are used."})]})]})})}__.propTypes={onClose:jt.func.isRequired};function Ww(){const[r,e]=ki.useState(!1);return De.jsxs("footer",{className:"footer-container",children:[De.jsx("div",{className:"footer-left",children:De.jsxs(vs,{color:Kn.paragraph2,children:["© ",new Date().getFullYear()," Gerard Baholli. All rights reserved."]})}),De.jsxs("div",{className:"footer-right",children:[De.jsx(uu,{href:"https://github.com/gerardbaholli",target:"_blank",children:"GitHub"}),De.jsx(uu,{href:"https://www.linkedin.com/in/gerardbaholli/",target:"_blank",children:"LinkedIn"}),De.jsx(uu,{onClick:()=>e(!0),children:"Privacy Policy"})]}),r&&De.jsx(__,{onClose:()=>e(!1)})]})}function Xw(){return De.jsxs("div",{className:"container",children:[De.jsx(Dw,{}),De.jsx(Hw,{}),De.jsx(Ww,{})]})}rx.createRoot(document.getElementById("root")).render(De.jsx(ki.StrictMode,{children:De.jsx(N0,{children:De.jsx(Xw,{})})}));

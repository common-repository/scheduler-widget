/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@mormat/react-scheduler/dist/mormat_react_scheduler.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@mormat/react-scheduler/dist/mormat_react_scheduler.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*! For license information please see mormat_react_scheduler.js.LICENSE.txt */
!function(t,e){ true?module.exports=e(__webpack_require__(/*! react */ "react")):0}(self,(t=>(()=>{"use strict";var e={228:t=>{var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,o){for(var i,a,u=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))r.call(i,c)&&(u[c]=i[c]);if(e){a=e(i);for(var s=0;s<a.length;s++)n.call(i,a[s])&&(u[a[s]]=i[a[s]])}}return u}},20:(t,e,r)=>{r(228);var n=r(91),o=60103;if(e.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),e.Fragment=i("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(t,e,r){var n,i={},c=null,s=null;for(n in void 0!==r&&(c=""+r),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(s=e.ref),e)u.call(e,n)&&!l.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===i[n]&&(i[n]=e[n]);return{$$typeof:o,type:t,key:c,ref:s,props:i,_owner:a.current}}e.jsx=c,e.jsxs=c},848:(t,e,r)=>{t.exports=r(20)},91:e=>{e.exports=t}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};return(()=>{n.r(o),n.d(o,{EventsList:()=>Pr,Scheduler:()=>kr,default:()=>Tr});var t=n(91);function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var r=1,i="mormat-scheduler-";function a(){return(n=(0,t.useState)((function(){return i+r++})),o=1,function(t){if(Array.isArray(t))return t}(n)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(n,o)||function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];var n,o}function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,s(n.key),n)}}function s(t){var e=function(t,e){if("object"!=u(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==u(e)?e:e+""}var f=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.start=e,this.end=r}return e=t,n=[{key:"from",value:function(e){return new t(e.start,e.end)}},{key:"createDay",value:function(e){return new t(new Date(b("yyyy-mm-dd",e)+" 00:00:00.000"),new Date(b("yyyy-mm-dd",e)+" 23:59:59.999"))}},{key:"createWeek",value:function(e){return new t(new Date(y(e)+" 00:00:00.000"),new Date(p(e)+" 23:59:59.999"))}},{key:"createMonth",value:function(e){var r=new Date(e),n=new Date(e);return r.setDate(1),n.setDate(1),n.setMonth(n.getMonth()+1),n.setDate(n.getDate()-1),new t(new Date(b("yyyy-mm-dd",r)+" 00:00:00.000"),new Date(b("yyyy-mm-dd",n)+" 23:59:59.999"))}},{key:"groupByPosition",value:function(e){var r,n=[],o=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}(e);try{var i=function(){var e=r.value,o=t.from(e);for(var i in n)if(!n[i].find((function(t){return o.intersects(t)})))return n[i].push(e),1;n.push([e])};for(o.s();!(r=o.n()).done;)i()}catch(t){o.e(t)}finally{o.f()}return n}}],(r=[{key:"intersects",value:function(e){return e.end<this.start||this.end<e.start?null:new t(new Date(Math.max(this.start.getTime(),e.start.getTime())),new Date(Math.min(this.end.getTime(),e.end.getTime())))}},{key:"contains",value:function(t){return this.start<=t.start&&t.end<=this.end}},{key:"includes",value:function(t){return this.start<=t&&t<=this.end}},{key:"getDays",value:function(){for(var e=[],r=new Date(this.start);r<this.end;)e.push(t.createDay(r)),r=h(r,1,"day");return e}},{key:"countDays",value:function(){return this.getDays().length}},{key:"getWeeks",value:function(){for(var e=[],r=t.createWeek(this.start);r.start<=this.end;)e.push(r),r=t.createWeek(h(r.end,1,"day"));return e}}])&&c(e.prototype,r),n&&c(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,r,n}(),y=function(t){var e=new Date(t);return e.setDate(e.getDate()-e.getDay()+(0==e.getDay()?-6:1)),d["yyyy-mm-dd"](e)},p=function(t){var e=new Date(t);return e.setDate(e.getDate()-e.getDay()+(0==e.getDay()?0:7)),d["yyyy-mm-dd"](e)},d={yyyy:function(t){return String(t.getFullYear())},mm:function(t){return("0"+(t.getMonth()+1)).slice(-2)},dd:function(t){return("0"+t.getDate()).slice(-2)},"yyyy-mm":function(t){return d.yyyy(t)+"-"+d.mm(t)},"yyyy-mm-dd":function(t){return d["yyyy-mm"](t)+"-"+d.dd(t)},hh:function(t){return("0"+t.getHours()).slice(-2)},ii:function(t){return("0"+t.getMinutes()).slice(-2)},"hh:ii":function(t){return d.hh(t)+":"+d.ii(t)},"yyyy-mm-dd hh:ii":function(t){return d["yyyy-mm-dd"](t)+" "+d["hh:ii"](t)}};function b(t,e){var r=e instanceof Date?e:new Date(e);return d[t](r)}function h(t,e,r){var n=new Date(t),o=new Date(n);if("day"===r&&o.setDate(n.getDate()+e),"week"===r&&o.setDate(n.getDate()+7*e),"month"===r){o.setDate(1),o.setMonth(n.getMonth()+e);var i=new Date(o);i.setMonth(o.getMonth()+1),i.setDate(0),o.setDate(Math.min(i.getDate(),n.getDate()))}return o}function m(t,e){var r=e.start,n=e.end.getTime()-r.getTime();return(t.getTime()-r.getTime())/n}var v=n(848);const g=function(t){var e=t.value;return t.schedulerOptions,(0,v.jsxs)("div",{className:"mormat-scheduler-Scheduler-DailyColumnsSheet-EventContent",children:[(0,v.jsxs)("div",{"data-role":"header",children:[(0,v.jsx)("span",{"data-type":"hour",children:d["hh:ii"](e.start)})," - ",(0,v.jsx)("span",{"data-type":"hour",children:d["hh:ii"](e.end)})]}),(0,v.jsx)("div",{"data-role":"content",children:e.label}),(0,v.jsx)("div",{"data-draggable":"resize-event"})]})},j=function(t){var e=t.width,r=void 0===e?24:e,n=t.height,o=void 0===n?24:n;return(0,v.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-plus",children:[(0,v.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,v.jsx)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})};function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}var w=["name","label","value","onChange","decorators"];function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?S(Object(r),!0).forEach((function(e){var n,o,i,a;n=t,o=e,i=r[e],a=function(t,e){if("object"!=O(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==O(a)?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const P=function(t){var e,r,n=t.name,o=t.label,i=t.value,a=t.onChange,u=t.decorators,l=void 0===u?{}:u,c=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,w);return(0,v.jsxs)("span",{className:"mormat-scheduler-Widget-Form","data-label":o,children:[(e="label",r=(0,v.jsx)("label",{children:o}),l[e]?l[e](r,n):r),(0,v.jsx)("input",x({type:"text",value:i,onChange:function(t){return a(t.target.value)}},c))]})};function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}var E=["value","onChange","label","disabled"];function C(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function A(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?C(Object(r),!0).forEach((function(e){var n,o,i,a;n=t,o=e,i=r[e],a=function(t,e){if("object"!=D(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==D(a)?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function k(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(t,e)||function(t,e){if(t){if("string"==typeof t)return T(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const I=function(e){var r=e.value,n=e.onChange,o=e.label,i=e.disabled,a=void 0!==i&&i,u=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(e,E),l=function(t){var e=new Date(Date.parse(t)||Date.now());return{year:d.yyyy(e),month:d.mm(e),day:d.dd(e)}}(r),c=k((0,t.useState)(l.year),2),s=c[0],f=c[1],y=k((0,t.useState)(l.month),2),p=y[0],b=y[1],h=k((0,t.useState)(l.day),2),m=h[0],g=h[1];(0,t.useEffect)((function(){var t=[s,p,m].join("-");t!==r&&n(t)}),[s,p,m]);var j=function(){for(var t=new Date(Date.now()),e={},r=1;r<=31;r++)e[String(r).padStart(2,"0")]=r;for(var n={},o=0;o<12;o++){var i=new Date(1970,o,1).toLocaleString("en",{month:"long"});n[String(o+1).padStart(2,"0")]=i}for(var a={},u=t.getFullYear(),l=u-9;l<=u;l++)a[l]=l;return{days:e,months:n,years:a}}();return(0,v.jsxs)("span",A(A({className:"mormat-scheduler-Widget-Form-DatePicker","data-label":o,"data-form-type":"DatePicker"},u),{},{children:[(0,v.jsx)("select",{value:m,onChange:function(t){return g(t.target.value)},title:"day",disabled:a,children:Object.keys(j.days).toSorted().map((function(t){return(0,v.jsx)("option",{value:t,onChange:function(t){return g(t.target.value)},children:j.days[t]},t)}))})," ",(0,v.jsx)("select",{value:p,onChange:function(t){return b(t.target.value)},title:"month",disabled:a,children:Object.keys(j.months).toSorted().map((function(t){return(0,v.jsx)("option",{value:t,onChange:function(t){return g(t.target.value)},children:j.months[t]},t)}))})," ",(0,v.jsx)("select",{value:s,title:"year",onChange:function(t){return f(t.target.value)},disabled:a,children:Object.entries(j.years).map((function(t){var e=k(t,2),r=e[0],n=e[1];return(0,v.jsx)("option",{value:r,children:n},r)}))})]}))};function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}var V=["value","onChange","label","minutesStep"];function N(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function R(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?N(Object(r),!0).forEach((function(e){var n,o,i,a;n=t,o=e,i=r[e],a=function(t,e){if("object"!=M(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=M(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==M(a)?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function U(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(t,e)||function(t,e){if(t){if("string"==typeof t)return _(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const L=function(e){var r=e.value,n=e.onChange,o=e.label,i=e.minutesStep,a=void 0===i?5:i,u=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(e,V),l=function(t){for(var e={},r=0;r<24;r++)for(var n=0;n<60;n+=t){var o=b("hh:ii","1970-01-01 ".concat(r,":").concat(n));e[o]=o}return e}(a),c=U((0,t.useState)((function(){var t=r||b("hh:ii",Date.now());return Object.values(l).filter((function(e){return e<=t})).at(-1)})),2),s=c[0],f=c[1];return(0,t.useEffect)((function(){s!==r&&n(s)}),[s]),(0,v.jsx)("span",R(R({className:"mormat-scheduler-Widget-TimePicker","data-label":o,"data-form-type":"DateTimePicker"},u),{},{children:(0,v.jsx)("select",{value:s,onChange:function(t){return f(t.target.value)},title:"time",children:Object.entries(l).map((function(t){var e=U(t,2),r=e[0];return e[1],(0,v.jsx)("option",{value:r,children:r},r)}))})}))};function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}var B=["value","onChange"];function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function W(t,e,r){var n;return n=function(t,e){if("object"!=H(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=H(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e),(e="symbol"==H(n)?n:n+"")in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function $(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(t,e)||function(t,e){if(t){if("string"==typeof t)return q(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?q(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Y(e){var r,n,o=e.value,i=e.label,a=e.onChange,u=e.name,l=e.decorators,c=void 0===l?{}:l,s=function(t){var e=(t||"").split(" ");return{date:e[0],time:e[1]}}(o),f=$((0,t.useState)(s.time),2),y=f[0],p=f[1],d=$((0,t.useState)(s.date),2),b=d[0],h=d[1];return(0,t.useEffect)((function(){var t=b+" "+y;t!==o&&a(t)}),[b,y]),(0,v.jsxs)("span",{className:"mormat-scheduler-Widget-Form-DateTimePicker","data-label":i,"data-form-type":"DateTimePicker",children:[(r="label",n=(0,v.jsx)("label",{children:i}),c[r]?c[r](n,u):n),(0,v.jsx)(L,{value:y,onChange:p})," ",(0,v.jsx)(I,{value:b,onChange:h})]})}const z=(X=Y,function(t){var e=t.value,r=t.onChange,n=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,B);return(0,v.jsx)(X,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(Object(r),!0).forEach((function(e){W(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({value:b("yyyy-mm-dd hh:ii",e),onChange:function(t){return r(new Date(t))}},n))});var X,G=["#0288d1","#9575cd","#0fc4a7","#721c24","#856404","#383d41"];const J=function(t){var e,r,n=t.value,o=t.onChange,i=t.label,a=t.decorators,u=void 0===a?{}:a;return(0,v.jsxs)("span",{className:"mormat-scheduler-Widget-Form-ColorPicker","data-label":i,"data-form-type":"ColorPicker",children:[(e="label",r=(0,v.jsx)("label",{children:i}),u[e]?u[e](r):r),(0,v.jsx)("span",{children:G.map((function(t){return(0,v.jsxs)("label",{onMouseDown:function(t){return t.preventDefault()},style:{borderColor:t===n?t:"transparent"},"data-label":t,children:[(0,v.jsx)("span",{style:{backgroundColor:t},children:"     "}),(0,v.jsx)("input",{type:"radio",value:t,checked:n===t,onChange:function(t){return o(t.target.value)}}),(0,v.jsx)("span",{style:{display:"none"},children:t})]},t)}))})]})},K=function(t){var e=t.children,r=t.type;return(0,v.jsx)("p",{className:"mormat-scheduler-Widget-Message","data-type":r,children:e})};function Q(t){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q(t)}var Z=["children","variant"];function tt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function et(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?tt(Object(r),!0).forEach((function(e){var n,o,i,a;n=t,o=e,i=r[e],a=function(t,e){if("object"!=Q(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=Q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==Q(a)?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):tt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const rt=function(t){var e=t.children,r=t.variant,n=void 0===r?"outline":r,o=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,Z);return(0,v.jsx)("button",et(et({className:"mormat-scheduler-Widget-Button","data-variant":n},o),{},{children:e}))};function nt(t){return nt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nt(t)}function ot(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function it(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ot(Object(r),!0).forEach((function(e){var n,o,i,a;n=t,o=e,i=r[e],a=function(t,e){if("object"!=nt(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=nt(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==nt(a)?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ot(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function at(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(t,e)||function(t,e){if(t){if("string"==typeof t)return ut(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ut(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ut(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var lt=["#0288d1","#9575cd","#0fc4a7","#721c24","#856404","#383d41"];const ct=function(e){var r=e.schedulerEvent,n=e.onConfirm,o=e.onDelete,i=at((0,t.useState)(r.label),2),a=i[0],u=i[1],l=at((0,t.useState)(r.start),2),c=l[0],s=l[1],f=at((0,t.useState)(r.end),2),y=f[0],p=f[1],d=at((0,t.useState)(lt.includes(r.bgColor)?r.bgColor:lt.at(0)),2),b=d[0],h=d[1],m=at((0,t.useState)([]),2),g=m[0],j=m[1],O=function(e){return(0,v.jsx)(t.Fragment,{children:g.filter((function(t){return t.name===e})).map((function(t,e){return(0,v.jsx)(K,{type:"error",children:t.text},e)}))})},w={label:function(e,r){return(0,v.jsxs)(t.Fragment,{children:[e,(0,v.jsx)("br",{}),O(r)]})}};return(0,v.jsxs)("form",{className:"mormat-scheduler-EventsManager-EventForm",children:[(0,v.jsx)("p",{children:(0,v.jsx)("label",{children:(0,v.jsx)(P,{label:"Description",name:"label",value:a,onChange:u,decorators:w})})}),(0,v.jsx)("p",{children:(0,v.jsx)(z,{value:c,onChange:s,name:"start",label:"From",decorators:w})}),(0,v.jsx)("p",{children:(0,v.jsx)(z,{value:y,onChange:p,name:"end",label:"To",decorators:w})}),(0,v.jsx)("p",{children:(0,v.jsx)(J,{value:b,onChange:h,name:"bgColor",label:"Color",colors:lt,decorators:w})}),(0,v.jsxs)("div",{style:{overflow:"auto",paddingTop:"5px",paddingBottom:"5px"},children:[(0,v.jsx)("span",{style:{float:"left"},children:o&&(0,v.jsx)(rt,{onClick:function(t){t.preventDefault(),confirm("Deleting event ?")&&o(r)},variant:"warning",type:"button",children:"Delete"})}),(0,v.jsx)("span",{style:{float:"right"},children:(0,v.jsx)(rt,{onClick:function(t){if(t.preventDefault(),0===function(){var t=[];return a.trim()||t.push({name:"label",text:"description required"}),c>y&&t.push({name:"start",text:"invalid date range"}),j(t),t}().length){var e=it(it({},r),{},{label:a,start:c,end:y,bgColor:b});n(e,r)}},type:"submit",variant:"primary",children:"Ok"})})]})]})},st=function(t){var e=t.width,r=void 0===e?24:e,n=t.height,o=void 0===n?24:n;return(0,v.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-x-circle",children:[(0,v.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,v.jsx)("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),(0,v.jsx)("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]})};function ft(t){return ft="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ft(t)}function yt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function pt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?yt(Object(r),!0).forEach((function(e){var n,o,i,a;n=t,o=e,i=r[e],a=function(t,e){if("object"!=ft(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=ft(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==ft(a)?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):yt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function dt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function bt(){return bt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},bt.apply(this,arguments)}const ht=function(e,r){var n=function(t){t.preventDefault(),r()};return function(r){var o,i,a=bt({},(function(t){if(null==t)throw new TypeError("Cannot destructure "+t)}(r),r)),u=(0,t.useRef)(),l=(o=(0,t.useState)({}),i=2,function(t){if(Array.isArray(t))return t}(o)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(o,i)||function(t,e){if(t){if("string"==typeof t)return dt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?dt(t,e):void 0}}(o,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=l[0],s=l[1];return(0,t.useEffect)((function(){var t=u.current.getBoundingClientRect(),e=t.width,r=t.height;s({marginTop:-r/2+"px",marginLeft:-e/2+"px",opacity:1})}),[]),(0,v.jsxs)("div",{className:"mormat-scheduler-Widget-withPopup",children:[(0,v.jsx)("div",{"data-role":"overlay"}),(0,v.jsxs)("div",{"data-role":"body",ref:u,style:c,children:[(0,v.jsx)("div",{"data-role":"close",onClick:n,children:(0,v.jsx)(st,{})}),(0,v.jsx)(e,pt({},a))]})]})}};function mt(t){return mt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mt(t)}var vt=["schedulerOptions"];function gt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function jt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?gt(Object(r),!0).forEach((function(e){var n,o,i,a;n=t,o=e,i=r[e],a=function(t,e){if("object"!=mt(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=mt(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==mt(a)?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):gt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Ot(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const wt=function(e,r){return function(n){var o,i,a=n.schedulerOptions,u=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(n,vt),l=(o=(0,t.useState)(),i=2,function(t){if(Array.isArray(t))return t}(o)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(o,i)||function(t,e){if(t){if("string"==typeof t)return Ot(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ot(t,e):void 0}}(o,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=l[0],s=l[1],f=ht(ct,(function(){return s(null)}));return(0,v.jsxs)("div",{className:"mormat-scheduler-Scheduler-withEditEvent",children:[(0,v.jsx)("a",{onClick:function(t){t.preventDefault(),t.stopPropagation(),s(r)},title:"Edit event","data-draggable":"none",children:(0,v.jsx)(j,{width:16,height:16})}),c&&(0,v.jsx)("div",{"data-draggable":"none",children:(0,v.jsx)(f,{schedulerEvent:c,onConfirm:function(t){a.onEventUpdate(t,{previous:r}),s(null)},onDelete:function(t){a.onEventDelete(t),s(null)}})}),(0,v.jsx)(e,jt(jt({},u),{},{schedulerOptions:a}))]})}};function St(t){return St="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},St(t)}function xt(t){return function(t){if(Array.isArray(t))return Pt(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return Pt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Pt(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Pt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Dt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,Et(n.key),n)}}function Et(t){var e=function(t,e){if("object"!=St(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=St(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==St(e)?e:e+""}var Ct=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height}return e=t,n=[{key:"createBounding",value:function(e){var r=Math.min.apply(Math,xt(e.map((function(t){return t.x})))),n=Math.min.apply(Math,xt(e.map((function(t){return t.y}))));return new t({x:r,y:n,width:Math.max.apply(Math,xt(e.map((function(t){return t.x+t.width}))))-r,height:Math.max.apply(Math,xt(e.map((function(t){return t.y+t.height}))))-n})}}],(r=[{key:"top",get:function(){return this.y}},{key:"right",get:function(){return this.x+this.width}},{key:"bottom",get:function(){return this.y+this.height}},{key:"contains",value:function(t){return this.x<=t.x&&this.y<=t.y&&t.x+t.width<=this.x+this.width&&t.y+t.height<=this.y+this.height}},{key:"includes",value:function(t){return this.x<=t.x&&this.y<=t.y&&t.x<=this.x+this.width&&t.y<=this.y+this.height}},{key:"getCenter",value:function(){return{x:this.x+this.width/2,y:this.y+this.height/2}}},{key:"intersectsWith",value:function(t){return!(t.x>this.x+this.width||t.x+t.width<this.x||t.y>this.y+this.height||t.y+t.height<this.y)}}])&&Dt(e.prototype,r),n&&Dt(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,r,n}();function At(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return kt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?kt(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){throw t})),f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){u=!0,i=t})),f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}function kt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Tt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function It(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Tt(Object(r),!0).forEach((function(e){_t(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Tt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Mt(t,e,r){return e=Nt(e),function(t,e){if(e&&("object"===Lt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,Vt()?Reflect.construct(e,r||[],Nt(t).constructor):e.apply(t,r))}function Vt(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(Vt=function(){return!!t})()}function Nt(t){return Nt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Nt(t)}function Rt(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ut(t,e)}function Ut(t,e){return Ut=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Ut(t,e)}function _t(t,e,r){return(e=Wt(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Lt(t){return Lt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Lt(t)}function Ht(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Bt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,Wt(n.key),n)}}function Ft(t,e,r){return e&&Bt(t.prototype,e),r&&Bt(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function Wt(t){var e=function(t,e){if("object"!=Lt(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=Lt(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==Lt(e)?e:e+""}var $t=function(){return Ft((function t(){Ht(this,t)}),[{key:"drag",value:function(t){}},{key:"move",value:function(t){}},{key:"drop",value:function(t){}},{key:"startDragAndDrop",value:function(t,e){var r=this;if(t.preventDefault(),0===t.button){this.drag(t),e({e:t,action:"drag",draggable:this});var n=function(t){r.move(t),e({e:t,action:"move",draggable:r})};window.addEventListener("mousemove",n),window.addEventListener("mouseup",(function t(o){r.drop(o),e({e:o,action:"drop",draggable:r}),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",t)}))}}}])}(),qt=function(t){function e(t,r,n){var o;return Ht(this,e),_t(o=Mt(this,e),"currentValue",null),_t(o,"diff",0),o.initialValue=t,o.onChange=r,o.area=n,o}return Rt(e,t),Ft(e,[{key:"getCurrentValue",value:function(){return this.currentValue}},{key:"getArea",value:function(){return this.area}},{key:"getCurrentTimestamp",value:function(t){var e=this.area.getData(t),r=e.percentY,n=e.day,o=e.minhour,i=e.maxhour,a={start:new Date(n+" "+o),end:new Date(n+" "+i)},u=a.end.getTime()-a.start.getTime();return a.start.getTime()+u*r/100}},{key:"drag",value:function(t){this.currentValue=It({},this.initialValue),this.diff=this.currentValue.start.getTime()-this.getCurrentTimestamp(t)}},{key:"move",value:function(t){var e=this.area.getData(t),r=(e.percentY,e.day),n=e.minhour,o=e.maxhour,i={start:new Date(r+" "+n),end:new Date(r+" "+o)},a=this.getCurrentTimestamp(t)+this.diff;a-=a%9e5;var u=this.initialValue.end.getTime()-this.initialValue.start.getTime();a<i.start.getTime()&&(a=i.start.getTime()),a+u>i.end.getTime()&&(a=i.end.getTime()-u),this.currentValue.start=new Date(a),this.currentValue.end=new Date(a+u)}},{key:"drop",value:function(t){this.onChange(this.currentValue,this.initialValue)}}])}($t),Yt=function(t){function e(t,r,n){var o;return Ht(this,e),_t(o=Mt(this,e),"currentValue",null),o.initialValue=t,o.onChange=r,o.area=n,o}return Rt(e,t),Ft(e,[{key:"getCurrentValue",value:function(){return this.currentValue}},{key:"getArea",value:function(){return this.area}},{key:"getCurrentTimestamp",value:function(t){var e=this.area.getData(t),r=e.percentY,n=e.day,o=e.minhour,i=e.maxhour,a={start:new Date(n+" "+o),end:new Date(n+" "+i)},u=a.end.getTime()-a.start.getTime();return a.start.getTime()+u*r/100}},{key:"drag",value:function(t){this.currentValue=It({},this.initialValue)}},{key:"move",value:function(t){var e=this.area.getData(t),r=(e.percentY,e.day),n=e.minhour,o=e.maxhour,i={start:new Date(r+" "+n),end:new Date(r+" "+o)},a=this.getCurrentTimestamp(t);(a-=a%9e5)>i.end.getTime()&&(a=i.end.getTime()),a<this.initialValue.start.getTime()&&(a=this.initialValue.start.getTime()+9e5),this.currentValue.end=new Date(a)}},{key:"drop",value:function(t){this.onChange(this.currentValue,this.initialValue)}}])}($t),zt=function(t){function e(t,r,n){var o;return Ht(this,e),(o=Mt(this,e)).initialValue=t,o.onChange=r,o.draggableArea=n,o}return Rt(e,t),Ft(e,[{key:"getCurrentValue",value:function(){return this.currentValue}},{key:"getArea",value:function(){return this.draggableArea}},{key:"drag",value:function(t){this.currentValue=It({},this.initialValue)}},{key:"move",value:function(t){var e=this.initialValue.end.getTime()-this.initialValue.start.getTime(),r=this.draggableArea.getData(t).day,n=new Date(r+" "+this.initialValue.start.getHours()+":"+this.initialValue.start.getMinutes()),o=new Date(n.getTime()+e);this.currentValue.start=n,this.currentValue.end=o}},{key:"drop",value:function(t){var e=this.initialValue.end.getTime()-this.initialValue.start.getTime(),r=this.draggableArea.getData(t).day,n=new Date(r+" "+this.initialValue.start.getHours()+":"+this.initialValue.start.getMinutes()),o=new Date(n.getTime()+e);this.currentValue.start=n,this.currentValue.end=o,this.onChange(this.currentValue,this.initialValue)}}])}($t),Xt=function(){return Ft((function t(e){Ht(this,t),this.selector=e}),[{key:"getData",value:function(t){var e=It({},this.getElement().dataset);if(t){var r=this.getRect(),n=r.x,o=r.y,i=r.width,a=r.height;e.percentX=100*(t.pageX-n)/i,e.percentY=100*(t.pageY-o)/a}return e}},{key:"getRect",value:function(){var t=this.getElement().getBoundingClientRect(),e=t.x,r=t.y,n=t.width,o=t.height;return{x:e+window.scrollX,y:r+window.scrollY,width:n,height:o}}},{key:"getElement",value:function(){return document.querySelector(this.selector)}}])}(),Gt=function(){return Ft((function t(e){Ht(this,t),this.children=e}),[{key:"getChildren",value:function(){return this.children}},{key:"getData",value:function(t){var e=this.getClosestChild(t);return e?e.getData(t):{}}},{key:"getRect",value:function(){var t,e=[],r=At(this.children);try{for(r.s();!(t=r.n()).done;){var n=t.value;e.push(n.getRect())}}catch(t){r.e(t)}finally{r.f()}return Ct.createBounding(e)}},{key:"getClosestChild",value:function(t){var e,r,n,o={x:t.pageX,y:t.pageY},i={},a=[],u=At(this.children);try{for(u.s();!(e=u.n()).done;){var l=e.value,c=new Ct(l.getRect());if(c){var s=(r=o,n=c.getCenter(),Math.sqrt(Math.pow(n.x-r.x,2)+Math.pow(n.y-r.y,2)));a.push(s),i[s]=l}}}catch(t){u.e(t)}finally{u.f()}return i[Math.min.apply(Math,a)]}}])}();function Jt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Kt(t){return function(t){if(Array.isArray(t))return Qt(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return Qt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Qt(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Qt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Zt(t){var e,r,n,o;switch(document.getElementById(t).getAttribute("data-droppable-type")){case"day-column":return e=null,r=null,n=null,o={drag:function(t){var o=t.e,i=(t.action,t.draggable);(e=o.currentTarget.parentNode.cloneNode(!0)).style.display="none",document.body.appendChild(e),r=o.target.dataset.action,n=i.getArea().getClosestChild(o)},move:function(t){var o,i=t.e,a=(t.action,t.draggable),u=(o="resize"===r?n:a.getArea().getClosestChild(i)).getRect(),l=o.getData(i),c=l.day,s=l.minhour,f=l.maxhour,y={start:new Date(c+" "+s),end:new Date(c+" "+f)},p=a.getCurrentValue(),b=Math.max(m(p.start,y),0),h=Math.min(m(p.end,y),1)-b;e.style.position="absolute",e.style.display="block",e.style.left=u.x+"px",e.style.width=u.width+"px",e.style.height=u.height*h+"px",e.style.top=u.y+u.height*b+"px";var v,g,j=(v=e.querySelectorAll('[data-type="hour"]'),g=2,function(t){if(Array.isArray(t))return t}(v)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(v,g)||function(t,e){if(t){if("string"==typeof t)return Jt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Jt(t,e):void 0}}(v,g)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),O=j[0],w=j[1];O.innerHTML=d["hh:ii"](p.start),w.innerHTML=d["hh:ii"](p.end)},drop:function(){document.body.removeChild(e),e=null}},function(t){t.action in o&&o[t.action](t)};case"timeline":return function(){var t=null,e={drag:function(e){var r=e.e;e.action,e.draggable,(t=r.currentTarget.parentNode.cloneNode(!0)).style.display="none",document.body.appendChild(t)},move:function(e){var r=e.e,n=(e.action,e.draggable.getArea().getClosestChild(r)),o=(n.getData(r),n.getRect()),i=o.x,a=o.y,u=o.height,l=o.width;t.style.position="absolute",t.style.display="block",t.style.left=i+"px",t.style.top=a+u/2+"px",t.style.width=l+"px"},drop:function(){document.body.removeChild(t),t=null}};return function(t){t.action in e&&e[t.action](t)}}()}}function te(t){return te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},te(t)}var ee=["schedulerOptions"];function re(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function ne(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?re(Object(r),!0).forEach((function(e){var n,o,i,a;n=t,o=e,i=r[e],a=function(t,e){if("object"!=te(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=te(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==te(a)?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):re(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const oe=function(t,e,r){return function(n){var o=n.schedulerOptions,i=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(n,ee),a=function(t,e){o.onEventUpdate(t,{previous:e})};return(0,v.jsx)("div",{className:"mormat-scheduler-Scheduler-withDraggableEvent",onMouseDown:function(t){var n,o,i,u=t.target.closest("[data-draggable]"),l=(n=u.dataset.draggable,o=a,i=function(t){var e=document.getElementById(t);switch(e.getAttribute("data-droppable-type")){case"day-column":var r=Kt(e.querySelectorAll("td[data-day]")).map((function(t){return t.getAttribute("data-day")}));return new Gt(Kt(new Set(r)).map((function(e){return new Xt("#".concat(t,' td[data-day="').concat(e,'"]'))})));case"timeline":var n=Kt(e.querySelectorAll("[data-day]")).map((function(t){return t.getAttribute("data-day")}));return new Gt(Kt(new Set(n)).map((function(e){return new Xt("#".concat(t,' [data-day="').concat(e,'"]'))})))}}(r),"timeline"===n?new zt(e,o,i):"move-event"===n?new qt(e,o,i):"resize-event"===n?new Yt(e,o,i):void 0);if(l){t.preventDefault();var c=Zt(r);l.startDragAndDrop(t,c)}},children:(0,v.jsx)(t,ne(ne({},i),{},{schedulerOptions:o}))})}},ie=function(t){var e=t.value,r=t.constraint,n=t.droppableId,o=t.schedulerOptions,a=t.offset,u=g;return o.editable&&(u=wt(u,e)),o.draggable&&(u=oe(u,e,n)),(0,v.jsx)("div",{className:("Scheduler-DailyColumnsSheet-EventContainer",i+"Scheduler-DailyColumnsSheet-EventContainer"),style:{top:100*m(e.start,r)+"%",bottom:100*(1-m(e.end,r))+"%",width:100/a.length+"%",left:100/a.length*a.current+"%",color:e.color,backgroundColor:e.bgColor,position:"absolute"},"data-draggable":"move-event",children:(0,v.jsx)(u,{value:e,schedulerOptions:o})})};function ae(t){return ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ae(t)}function ue(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function le(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ue(Object(r),!0).forEach((function(e){var n,o,i,a;n=t,o=e,i=r[e],a=function(t,e){if("object"!=ae(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=ae(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==ae(a)?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const ce=function(e){var r=e.cols,n=void 0===r?0:r,o=e.rows,i=void 0===o?0:o,a={position:"absolute",display:"block"},u=Array.from({length:n-1},(function(t,e){return le(le({},a),{},{top:0,left:100*(e+1)/n+"%",borderLeft:"1px dashed lightgray",height:"100%"})})),l=Array.from({length:i-1},(function(t,e){return le(le({},a),{},{top:100*(e+1)/i+"%",left:0,borderTop:"1px dashed lightgray",width:"100%"})}));return(0,v.jsxs)(t.Fragment,{children:[u.map((function(t,e){return(0,v.jsx)("span",{style:t,"data-orientation":"vertical"},e)})),l.map((function(t,e){return(0,v.jsx)("span",{style:t,"data-orientation":"horizontal"},e)}))]})},se=function(e){for(var r=e.events,n=e.schedulerOptions,o=e.dateRange,i=(a(),[]),u=n.minHour;u<n.maxHour;u++)i.push(("0"+u).slice(-2)+":00");var l=o.getDays().map((function(t){var e=b("yyyy-mm-dd",t.start),o=n.minHour+":00",i=n.maxHour+":00",a=new f(new Date(e+" "+o),new Date(e+" "+i)),u=r.filter((function(t){return a.contains(t)})),l=f.groupByPosition(u);return{day:e,minHour:o,maxHour:i,constraint:a,groupedEvents:l}})),c=a();return(0,v.jsx)("div",{style:{position:"absolute",top:"0",right:"0",bottom:"0",left:"0"},children:(0,v.jsx)("table",{className:"mormat-scheduler-Scheduler-DailyColumnsSheet-TableBody",id:c,"data-droppable-type":"day-column",style:{width:"100%",height:"100%"},children:(0,v.jsx)("tbody",{style:{position:"relative"},children:i.map((function(e,r){return(0,v.jsxs)("tr",{"data-hour":e,children:[(0,v.jsxs)("th",{style:{width:30,height:100/i.length+"%"},children:[(0,v.jsx)("span",{children:e}),0===r&&(0,v.jsx)(ce,{rows:i.length})]}),0===r&&l.map((function(e,r){var o=e.groupedEvents,a=e.constraint,u=e.day,l=e.minHour,s=e.maxHour;return(0,v.jsx)("td",{style:{position:"relative"},rowSpan:i.length,"data-day":u,"data-minhour":l,"data-maxhour":s,children:o.map((function(e,r){return(0,v.jsx)(t.Fragment,{children:e.map((function(t,e){return(0,v.jsx)(ie,{value:t,constraint:a,schedulerOptions:n,droppableId:c,offset:{current:r,length:o.length}},e)}))},r)}))},r)}))]},r)}))})})})},fe=function(t){var e=t.event;return t.schedulerOptions,(0,v.jsx)("div",{className:"mormat-scheduler-TimelineSheet-EventContent",children:(0,v.jsx)("span",{"data-role":"header",children:e.label})})},ye=function(t){var e=t.event,r=t.index,n=t.dateRange,o=t.droppableId,i=t.schedulerOptions,a=t.draggableType,u=n.intersects(e),l=new f(n.start,new Date(e.start-1)),c=u.countDays(),s=Math.max(l.countDays()-1,0),y=100/n.countDays(),p={right:100-(s+c)*y+"%",left:s*y+"%",top:r*i.spannedEventHeight,display:"block",position:"absolute",height:i.spannedEventHeight,color:e.color,backgroundColor:e.bgColor},d=fe;return i.editable&&(d=wt(d,e)),a&&i.draggable&&(d=oe(d,e,o)),(0,v.jsx)("span",{className:"mormat-scheduler-TimelineSheet-EventContainer",style:p,"data-event-from":b("yyyy-mm-dd hh:ii",e.start),"data-draggable":a,children:(0,v.jsx)(d,{event:e,schedulerOptions:i})})},pe=function(e){var r=e.events,n=e.dateRange,o=e.droppableId,i=e.draggableType,a=e.schedulerOptions,u=f.groupByPosition(r);return(0,v.jsx)("div",{className:"mormat-scheduler-Scheduler-TimelineSheet-Row",style:{height:a.spannedEventHeight*u.length,width:"100%",position:"relative"},"data-start":b("yyyy-mm-dd hh:ii",n.start),"data-end":b("yyyy-mm-dd hh:ii",n.end),children:u.map((function(e,r){return(0,v.jsx)(t.Fragment,{children:e.map((function(t,e){return(0,v.jsx)(ye,{event:t,index:r,dateRange:n,droppableId:o,draggableType:i,schedulerOptions:a},e)}))},r)}))})},de=function(t){var e=t.events,r=t.dateRange,n=t.schedulerOptions,o=r.getDays(),i=a();return(0,v.jsxs)("table",{style:{width:"100%"},children:[o.length>1&&(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{style:{width:30}}),o.map((function(t){var e=t.start;return(0,v.jsx)("th",{style:{textAlign:"center"},children:e.toLocaleString(n.locale,{weekday:"short",month:"short",day:"numeric"})},e)}))]})}),(0,v.jsx)("tbody",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{style:{width:30}}),(0,v.jsxs)("td",{colSpan:o.length,id:i,style:{position:"relative"},"data-droppable-type":"timeline",children:[o.map((function(t,e){var r=t.start;return(0,v.jsx)("div",{style:{position:"absolute",width:100/o.length+"%",height:"100%",top:0,left:100*e/o.length+"%"},"data-day":b("yyyy-mm-dd",r)},e)})),(0,v.jsx)(pe,{events:e,dateRange:r,schedulerOptions:n,droppableId:i,draggableType:"timeline"})]})]})})]})};function be(t){return be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},be(t)}function he(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function me(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?he(Object(r),!0).forEach((function(e){var n,o,i,a;n=t,o=e,i=r[e],a=function(t,e){if("object"!=be(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=be(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==be(a)?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const ve=function(t,e){return function(r){return(0,v.jsxs)("div",{className:"mormat-scheduler-Scheduler-withFixedHeader",style:{display:"flex",flexFlow:"column",position:"absolute",top:0,left:0,right:0,bottom:0},children:[(0,v.jsx)("div",{style:{flex:"0 1 auto"},children:e}),(0,v.jsx)("div",{style:{flex:"1 1 auto",position:"relative"},children:(0,v.jsx)(t,me({},r))})]})}};function ge(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const je=function(t){var e=t.events,r=t.schedulerOptions,n=t.dateRange,o=t.header,i=function(t,e){var n,o,i,a,u={},l=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return ge(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ge(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}(t);try{for(l.s();!(n=l.n()).done;){var c=n.value,s=(i=void 0,a=void 0,i=(o=c).start,a=o.end,b("yyyy-mm-dd",i)!==b("yyyy-mm-dd",a)||i.getHours()<r.minHour||a.getHours()>r.maxHour?"header":"body");s in u?u[s].push(c):u[s]=[c]}}catch(t){l.e(t)}finally{l.f()}return u}(e.filter((function(t){return n.intersects(t)}))),a=ve(se,(0,v.jsxs)(v.Fragment,{children:[o,(0,v.jsx)(de,{events:i.header||[],schedulerOptions:r,dateRange:n})]}));return(0,v.jsx)(a,{events:i.body||[],schedulerOptions:r,dateRange:n})},Oe=function(t){var e=t.width,r=void 0===e?24:e,n=t.height,o=void 0===n?24:n;return(0,v.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-plus",children:[(0,v.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,v.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})};function we(t){return we="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},we(t)}var Se=["schedulerOptions"];function xe(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Pe(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?xe(Object(r),!0).forEach((function(e){var n,o,i,a;n=t,o=e,i=r[e],a=function(t,e){if("object"!=we(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=we(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==we(a)?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):xe(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function De(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const Ee=function(e){return function(r){var n,o,i=r.schedulerOptions,a=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(r,Se),u=(n=(0,t.useState)(),o=2,function(t){if(Array.isArray(t))return t}(n)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(n,o)||function(t,e){if(t){if("string"==typeof t)return De(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?De(t,e):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=u[0],c=u[1],s=ht(ct,(function(){return c(null)}));return(0,v.jsxs)("div",{className:"mormat-scheduler-Scheduler-withCreateEvent",children:[(0,v.jsx)("a",{onClick:function(t){t.preventDefault(),c({label:"",start:new Date(Date.now()),end:new Date(Date.now()+36e5)})},title:"Add event",children:(0,v.jsx)(Oe,{width:"24",height:"24"})}),(0,v.jsx)(e,Pe(Pe({},a),{},{schedulerOptions:i})),l&&(0,v.jsx)(s,{schedulerEvent:l,onConfirm:function(t){i.onEventCreate(t,l),c(null)}})]})}},Ce={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let Ae;const ke=new Uint8Array(16);function Te(){if(!Ae&&(Ae="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Ae))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ae(ke)}const Ie=[];for(let t=0;t<256;++t)Ie.push((t+256).toString(16).slice(1));const Me=function(t,e,r){if(Ce.randomUUID&&!e&&!t)return Ce.randomUUID();const n=(t=t||{}).random||(t.rng||Te)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(let t=0;t<16;++t)e[r+t]=n[t];return e}return function(t,e=0){return Ie[t[e+0]]+Ie[t[e+1]]+Ie[t[e+2]]+Ie[t[e+3]]+"-"+Ie[t[e+4]]+Ie[t[e+5]]+"-"+Ie[t[e+6]]+Ie[t[e+7]]+"-"+Ie[t[e+8]]+Ie[t[e+9]]+"-"+Ie[t[e+10]]+Ie[t[e+11]]+Ie[t[e+12]]+Ie[t[e+13]]+Ie[t[e+14]]+Ie[t[e+15]]}(n)};function Ve(t){return Ve="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ve(t)}function Ne(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,Re(n.key),n)}}function Re(t){var e=function(t,e){if("object"!=Ve(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=Ve(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==Ve(e)?e:e+""}var Ue=function(){return t=function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=e.id||Me(),this.label=e.label,this.start=new Date(e.start),this.end=new Date(e.end),this.color=e.color||r.defaultEventColor,this.bgColor=e.bgColor||r.defaultEventBgColor,isNaN(this.end.getTime())&&this.end.setTime(this.start.getTime()+36e5)},(e=[{key:"equals",value:function(t){return this.id===t.id}},{key:"getStartAsString",value:function(t){return b(t,this.start)}},{key:"getEndAsString",value:function(t){return b(t,this.end)}},{key:"getData",value:function(){return{id:this.id,label:this.label,start:this.getStartAsString("yyyy-mm-dd hh:ii"),end:this.getEndAsString("yyyy-mm-dd hh:ii"),bgColor:this.bgColor}}}])&&Ne(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function _e(t){return t instanceof Ue?t:new Ue(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{})}function Le(t){return Le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Le(t)}var He=["events","schedulerOptions"];function Be(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Fe(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Be(Object(r),!0).forEach((function(e){var n,o,i,a;n=t,o=e,i=r[e],a=function(t,e){if("object"!=Le(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=Le(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==Le(a)?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Be(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function We(t,e){if(t){if("string"==typeof t)return $e(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?$e(t,e):void 0}}function $e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const qe=function(e){return function(r){var n,o,i=r.events,a=r.schedulerOptions,u=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(r,He),l=function(){return(i||[]).map((function(t){return _e(t,a)}))},c=(n=(0,t.useState)(l()),o=2,function(t){if(Array.isArray(t))return t}(n)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(n,o)||We(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=c[0],f=c[1],y=function(){return f(l())};return(0,v.jsx)(e,Fe(Fe({},u),{},{schedulerOptions:Fe(Fe({},a),{},{onEventCreate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=_e(t,a);f([].concat(function(t){return function(t){if(Array.isArray(t))return $e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||We(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(s),[r])),a.onEventCreate(r,Fe(Fe({},e),{},{reset:y}))},onEventUpdate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=_e(t,a);f(s.map((function(t){return t.equals(r)?r:t}))),a.onEventUpdate(r,Fe(Fe({},e),{},{reset:y}))},onEventDelete:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=_e(t,a);f(s.filter((function(t){return!t.equals(r)}))),a.onEventDelete(r,Fe(Fe({},e),{},{reset:y}))}}),events:s}))}};function Ye(t){return Ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ye(t)}var ze=["events"];function Xe(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Ge(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Xe(Object(r),!0).forEach((function(e){var n,o,i,a;n=t,o=e,i=r[e],a=function(t,e){if("object"!=Ye(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=Ye(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==Ye(a)?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Xe(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Je(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const Ke=function(e,r){return function(n){var o,i,a=n.events,u=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(n,ze),l=(o=(0,t.useState)(Array.isArray(a)?a:[]),i=2,function(t){if(Array.isArray(t))return t}(o)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(o,i)||function(t,e){if(t){if("string"==typeof t)return Je(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Je(t,e):void 0}}(o,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=l[0],s=l[1];(0,t.useEffect)((function(){a instanceof Function&&a((function(t){return s(t)}),{start:d["yyyy-mm-dd hh:ii"](r.start),end:d["yyyy-mm-dd hh:ii"](r.end)})}),[a]);var f=qe(e);return(0,v.jsx)(f,Ge(Ge({},u),{},{events:c}))}},Qe=function(t){var e=t.events,r=void 0===e?[]:e,n=t.schedulerOptions,o=t.dateRange,i=t.header,a=je;return n.editable&&(a=Ee(a)),a=Ke(a,o),(0,v.jsx)("div",{className:"mormat-scheduler-Scheduler-DailyColumnsSheet",children:(0,v.jsx)(a,{events:r,schedulerOptions:n,dateRange:o,header:i})})},Ze=function(e){var r=e.dateRange,n=e.events,o=e.schedulerOptions,i=a(),u=r.getWeeks();return(0,v.jsx)("table",{className:"mormat-scheduler-Scheduler-MonthlySheet-GridBody",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",tableLayout:"fixed",borderSpacing:0,borderCollapse:"none"},children:(0,v.jsx)("tbody",{id:i,style:{position:"relative"},"data-droppable-type":"timeline",children:u.map((function(e,a){return(0,v.jsx)(t.Fragment,{children:(0,v.jsx)("tr",{children:(0,v.jsxs)("td",{colSpan:"7",style:{position:"relative",height:100/u.length+"%"},children:[e.getDays().map((function(t,e){var n=t.start;return(0,v.jsx)("div",{style:{position:"absolute",top:0,left:100*e/7+"%",width:100/7+"%",bottom:0},"data-day":b("yyyy-mm-dd",n),"data-current-month":r.includes(n),children:n.getDate()},e)})),(0,v.jsx)(ce,{cols:"7"}),(0,v.jsx)(pe,{events:n.filter((function(t){return e.intersects(t)})),dateRange:e,droppableId:i,draggableType:"timeline",schedulerOptions:o})]})})},a)}))})})},tr=function(t){var e=t.dateRange,r=t.schedulerOptions,n=f.createWeek(e.start).getDays().map((function(t){return t.start.toLocaleString(r.locale,{weekday:"short"})}));return(0,v.jsx)("table",{style:{width:"100%"},children:(0,v.jsx)("thead",{children:(0,v.jsx)("tr",{children:n.map((function(t){return(0,v.jsx)("th",{style:{width:100/7+"%"},children:t},t)}))})})})},er=function(t){var e=t.dateRange,r=t.events,n=t.schedulerOptions,o=t.header,i=ve(Ze,(0,v.jsxs)(v.Fragment,{children:[o,(0,v.jsx)(tr,{schedulerOptions:n,dateRange:e})]}));return n.editable&&(i=Ee(i)),i=Ke(i,new f(f.createWeek(e.start).start,f.createWeek(e.end).end)),(0,v.jsx)("div",{className:"mormat-scheduler-Scheduler-MonthlySheet",children:(0,v.jsx)(i,{dateRange:e,events:r,schedulerOptions:n})})},rr=function(t){var e=t.value,r=t.onChange,n=void 0===r?function(){}:r,o=t.options,i=void 0===o?[]:o;return(0,v.jsx)("div",{className:"mormat-scheduler-Widget-ToggleButtonGroup",children:i.map((function(t){return(0,v.jsx)("button",{onClick:function(e){return n(t.value)},"data-checked":e===t.value,children:(0,v.jsx)("span",{children:t.label})},t.value)}))})};function nr(t){return nr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nr(t)}function or(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function ir(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?or(Object(r),!0).forEach((function(e){var n,o,i,a;n=t,o=e,i=r[e],a=function(t,e){if("object"!=nr(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=nr(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==nr(a)?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):or(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function ar(t){var e=t.title;return(0,v.jsx)("h3",{children:e||(0,v.jsx)("span",{children:" "})})}function ur(t){var e=t.schedulerOptions,r=t.currentDate,n=t.setCurrentDate,o=t.viewMode,i=e.labels;return(0,v.jsxs)("div",{style:{float:"left"},children:[(0,v.jsx)(rt,{onClick:function(){return n(h(r,-1,o))},variant:"outline",children:"<"}),(0,v.jsx)(rt,{onClick:function(){return n(new Date)},variant:"outline",children:i["header.today"]||"today"}),(0,v.jsx)(rt,{onClick:function(){return n(h(r,1,o))},variant:"outline",children:">"})]})}function lr(t){var e=t.schedulerOptions,r=t.viewMode,n=t.setViewMode,o=e.labels;return(0,v.jsx)("div",{style:{float:"right"},children:(0,v.jsx)(rr,{value:r,onChange:n,options:[{value:"day",label:o["header.day"]||"day"},{value:"week",label:o["header.week"]||"week"},{value:"month",label:o["header.month"]||"month"}]})})}const cr=function(t){return(0,v.jsxs)("div",{className:"mormat-scheduler-Header",children:[(0,v.jsxs)("div",{children:[(0,v.jsx)(ur,ir({},t)),(0,v.jsx)(lr,ir({},t))]}),(0,v.jsx)("div",{children:(0,v.jsx)(ar,ir({},t))})]})};function sr(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(t,e)||function(t,e){if(t){if("string"==typeof t)return fr(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?fr(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function fr(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var yr={events:[],initialDate:Date.now(),viewMode:"week",timelined:!1,defaultEventBgColor:"#0288d1",defaultEventColor:"white",locale:"en",width:800,height:600,spannedEventHeight:20,minHour:6,maxHour:22,draggable:!0,editable:!0,onEventCreate:function(){},onEventUpdate:function(){},onEventDelete:function(){},labels:{}};const pr=function(e){var r=e.events,n=e.schedulerOptions,o=sr((0,t.useState)(new Date(n.initialDate)),2),i=o[0],a=o[1],u=sr((0,t.useState)(n.viewMode),2),l=u[0],c=u[1],s={day:function(){var t=f.createDay(i),e=i.toLocaleString(n.locale,{weekday:"long",month:"short",day:"numeric",year:"numeric"});return(0,v.jsx)(Qe,{header:y(e),schedulerOptions:n,events:r,dateRange:t},"day-"+i)},week:function(){var t=f.createWeek(i),e=[t.start,t.end].map((function(t){return t.toLocaleString(n.locale,{month:"short",day:"numeric",year:"numeric"})})).join(" - ");return(0,v.jsx)(Qe,{header:y(e),schedulerOptions:n,events:r,dateRange:t},"week-"+i)},month:function(){var t=f.createMonth(i),e=i.toLocaleString(n.locale,{month:"long",year:"numeric"});return(0,v.jsx)(er,{header:y(e),schedulerOptions:n,events:r,dateRange:t},"month-"+i)}},y=function(t){return(0,v.jsx)(cr,{schedulerOptions:n,title:t,currentDate:i,setCurrentDate:a,viewMode:l,setViewMode:c})};return(0,v.jsx)("div",{className:"mormat-scheduler-Scheduler",id:n.id,style:{width:n.width,height:n.height},children:s[l]()})},dr=function(t){var e=t.width,r=void 0===e?24:e,n=t.height,o=void 0===n?24:n;return(0,v.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-trash",children:[(0,v.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,v.jsx)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]})};function br(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function hr(t){var e,r=(t||"").trim().replace("\r","").split("\n").map((function(t){return t.split("\t")})),n=r.shift(),o=[],i=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return br(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?br(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}(r);try{var a=function(){var t=e.value,r=n.map((function(e,r){return[e,t[r]]}));o.push(Object.fromEntries(r))};for(i.s();!(e=i.n()).done;)a()}catch(t){i.e(t)}finally{i.f()}return o}function mr(t){return mr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mr(t)}var vr=["start","end"];function gr(t){return function(t){if(Array.isArray(t))return Sr(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||wr(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function jr(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Or(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?jr(Object(r),!0).forEach((function(e){var n,o,i,a;n=t,o=e,i=r[e],a=function(t,e){if("object"!=mr(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=mr(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==mr(a)?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):jr(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function wr(t,e){if(t){if("string"==typeof t)return Sr(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Sr(t,e):void 0}}function Sr(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var xr=["#0288d1","#9575cd","#0fc4a7","#721c24","#856404","#383d41"];const Pr=function(e){var r,n,o=e.value,i=e.onChange,a=e.name,u=(r=(0,t.useState)((function(){return hr(o||"").map((function(t){return Or({bgColor:yr.defaultEventBgColor},_e(t))})).map((function(t){var e=t.start,r=t.end,n=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,vr);return Or({start:b("yyyy-mm-dd hh:ii",e),end:b("yyyy-mm-dd hh:ii",r)},n)}))})),n=2,function(t){if(Array.isArray(t))return t}(r)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(r,n)||wr(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=u[0],c=u[1],s=function(t,e,r){l[t][e]=r,c(gr(l))},f=function(t){var e=t.label,r=t.start,n=t.end,o=[];return e||o.push("Label required"),r>n&&o.push("Invalid date range"),o};return(0,t.useEffect)((function(){var t=l.map((function(t){return[t.label,t.start,t.end,t.bgColor,f(t).join(",")]})),e=[["label","start","end","bgColor","errors"]].concat(gr(t)).map((function(t){return t.join("\t")})).join("\n");i(e)}),[l]),(0,v.jsxs)("fieldset",{className:"mormat-scheduler-EventsManager-EventsList",children:[(0,v.jsx)("textarea",{name:a,value:o,readOnly:!0,cols:"70",rows:"10"}),(0,v.jsx)("table",{children:(0,v.jsx)("tbody",{children:l.map((function(e,r){return(0,v.jsxs)(t.Fragment,{children:[(0,v.jsx)("tr",{"data-nth-event":r+1,children:(0,v.jsx)("td",{colSpan:"3",children:f(e).map((function(e,n){return(0,v.jsxs)(t.Fragment,{children:[(0,v.jsx)(K,{type:"error",children:e}),(0,v.jsx)("input",{type:"hidden",value:r+1}),(0,v.jsx)("input",{type:"hidden",value:e})]},n)}))})}),(0,v.jsxs)("tr",{"data-nth-event":r+1,children:[(0,v.jsx)("td",{children:(0,v.jsx)(P,{value:e.label,label:"label",size:"30",onChange:function(t){return s(r,"label",t)},decorators:{label:function(){}},required:!0})}),(0,v.jsxs)("td",{rowSpan:"2",children:[(0,v.jsx)(Y,{value:e.start,onChange:function(t){return s(r,"start",t)},label:"from"}),(0,v.jsx)("input",{type:"hidden",value:e.start,readOnly:!0}),(0,v.jsx)("br",{}),(0,v.jsx)(Y,{value:e.end,onChange:function(t){return s(r,"end",t)},label:"to"}),(0,v.jsx)("input",{type:"hidden",value:e.end,readOnly:!0})]}),(0,v.jsx)("td",{rowSpan:"2",children:(0,v.jsx)("button",{onClick:function(t){return function(t,e){t.preventDefault(),c(l.filter((function(t){return t!==e})))}(t,e)},title:"Remove event",className:"button",children:(0,v.jsx)(dr,{width:"12",height:"12"})})})]}),(0,v.jsx)("tr",{"data-nth-event":r+1,children:(0,v.jsx)("td",{children:(0,v.jsx)(J,{value:e.bgColor,onChange:function(t){return s(r,"bgColor",t)},label:"color",colors:xr,decorators:{label:function(){}}})})})]},r)}))})}),(0,v.jsx)("p",{children:(0,v.jsx)("button",{onClick:function(t){return function(t){t.preventDefault();var e={label:"",start:b("yyyy-mm-dd hh:ii",Date.now()),end:b("yyyy-mm-dd hh:ii",Date.now()+36e5),bgColor:xr[0]};c([].concat(gr(l),[e]))}(t)},className:"button",children:"Add event"})})]})};var Dr=["events"];function Er(t){return Er="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Er(t)}function Cr(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Ar(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Cr(Object(r),!0).forEach((function(e){var n,o,i,a;n=t,o=e,i=r[e],a=function(t,e){if("object"!=Er(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=Er(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==Er(a)?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Cr(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var kr=function(t){for(var e=Ar(Ar({},yr),{},{initialDate:Date.now()},t),r=0,n=["minHour","maxHour"];r<n.length;r++){var o=n[r];e[o]=Number(e[o])}for(var i=0,a=["width","height"];i<a.length;i++){var u=a[i];isNaN(Number(e[u]))||(e[u]+="px")}e.initialDate||(e.initialDate=Date.now());var l=e.events,c=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(e,Dr);("string"==typeof l||l instanceof String)&&(l=hr(l).filter((function(t){return!t.errors})));var s=pr;return Array.isArray(l)&&(s=qe(s)),(0,v.jsx)(s,{events:l,schedulerOptions:c})};const Tr=kr})(),o})()));

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mormat_react_scheduler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mormat/react-scheduler */ "./node_modules/@mormat/react-scheduler/dist/mormat_react_scheduler.js");
/* harmony import */ var _mormat_react_scheduler__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mormat_react_scheduler__WEBPACK_IMPORTED_MODULE_5__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */




/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit({
  attributes,
  setAttributes,
  toggleSelection
}) {
  const {
    initialDate,
    viewMode,
    width,
    height,
    minHour,
    maxHour,
    namespace,
    locale
  } = attributes;
  const currentYear = new Date().getFullYear().toString();
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    style: {}
  });
  const isFixedWidth = function () {
    const classNames = blockProps.className.split(' ');
    if (classNames.includes('alignfull')) return true;
    if (classNames.includes('alignwide')) return true;
    return false;
  }();
  if (!isFixedWidth) {
    blockProps.style.maxWidth = 'fit-content';
  }
  const renderWidget = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_mormat_react_scheduler__WEBPACK_IMPORTED_MODULE_5__.Scheduler, {
    width: isFixedWidth ? 'auto' : width,
    height: height,
    initialDate: initialDate,
    viewMode: viewMode,
    minHour: minHour,
    maxHour: maxHour,
    editable: false,
    draggable: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      opacity: '0.35',
      cursor: 'not-allowed'
    }
  }));
  const withResizableBox = subject => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ResizableBox, {
    size: {
      height,
      width: isFixedWidth ? 'auto' : width
    },
    minWidth: "480",
    minHeight: "480",
    enable: {
      top: false,
      right: !isFixedWidth,
      bottom: true,
      left: !isFixedWidth,
      topRight: false,
      bottomRight: !isFixedWidth,
      bottomLeft: !isFixedWidth,
      topLeft: false
    },
    onResizeStop: (event, direction, elt, delta) => {
      setAttributes({
        height: Math.round(Number(height) + delta.height),
        width: Math.round(Number(width) + delta.width)
      });
      toggleSelection(true);
    },
    onResizeStart: () => {
      toggleSelection(false);
    }
  }, subject);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Settings', 'scheduler-widget')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default view mode', 'scheduler-widget'),
    value: viewMode,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Day', 'scheduler-widget'),
      value: 'day'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Week', 'scheduler-widget'),
      value: 'week'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Month', 'scheduler-widget'),
      value: 'month'
    }],
    onChange: value => setAttributes({
      viewMode: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Initial date', 'scheduler-widget'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("If not provided, the current date will be used", 'scheduler-widget'),
    value: initialDate,
    onChange: v => setAttributes({
      initialDate: v
    }),
    type: "date"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hour min', 'scheduler-widget'),
    type: "number",
    value: minHour,
    onChange: v => setAttributes({
      minHour: v
    }),
    min: "5",
    max: "10"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hour max', 'scheduler-widget'),
    type: "number",
    value: maxHour,
    onChange: v => setAttributes({
      maxHour: v
    }),
    min: "18",
    max: "22"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Width (px)', 'scheduler-widget'),
    value: width,
    onChange: v => setAttributes({
      width: v
    }),
    min: "480",
    max: "1080",
    type: "number",
    disabled: isFixedWidth
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Height (px)', 'scheduler-widget'),
    value: height,
    onChange: v => setAttributes({
      height: v
    }),
    min: "480",
    max: "1080",
    type: "number"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Events namespace', 'scheduler-widget'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display and manage a specific set of events", 'scheduler-widget'),
    value: namespace,
    onChange: v => setAttributes({
      namespace: v
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dates language code', 'scheduler-widget'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("The language code used for displaying the dates in the scheduler. It must be ISO 639-1 compliant. If not provided, the current site language will be used", 'scheduler-widget'),
    value: locale,
    onChange: v => setAttributes({
      locale: v
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Examples: en, fr or es", 'scheduler-widget')
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, withResizableBox(renderWidget())));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/block.json");

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



const schedulerIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "119.256",
  y: "222.607",
  class: "st0",
  width: "50.881",
  height: "50.885"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "341.863",
  y: "222.607",
  class: "st0",
  width: "50.881",
  height: "50.885"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "267.662",
  y: "222.607",
  class: "st0",
  width: "50.881",
  height: "50.885"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "119.256",
  y: "302.11",
  class: "st0",
  width: "50.881",
  height: "50.885"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "267.662",
  y: "302.11",
  class: "st0",
  width: "50.881",
  height: "50.885"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "193.46",
  y: "302.11",
  class: "st0",
  width: "50.881",
  height: "50.885"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "341.863",
  y: "381.612",
  class: "st0",
  width: "50.881",
  height: "50.885"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "267.662",
  y: "381.612",
  class: "st0",
  width: "50.881",
  height: "50.885"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "193.46",
  y: "381.612",
  class: "st0",
  width: "50.881",
  height: "50.885"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  class: "st0",
  d: "M439.277,55.046h-41.376v39.67c0,14.802-12.195,26.84-27.183,26.84h-54.025 c-14.988,0-27.182-12.038-27.182-26.84v-39.67h-67.094v39.297c0,15.008-12.329,27.213-27.484,27.213h-53.424 c-15.155,0-27.484-12.205-27.484-27.213V55.046H72.649c-26.906,0-48.796,21.692-48.796,48.354v360.246 c0,26.661,21.89,48.354,48.796,48.354h366.628c26.947,0,48.87-21.692,48.87-48.354V103.4 C488.147,76.739,466.224,55.046,439.277,55.046z M453.167,462.707c0,8.56-5.751,14.309-14.311,14.309H73.144 c-8.56,0-14.311-5.749-14.311-14.309V178.089h394.334V462.707z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  class: "st0",
  d: "M141.525,102.507h53.392c4.521,0,8.199-3.653,8.199-8.144v-73.87c0-11.3-9.27-20.493-20.666-20.493h-28.459 c-11.395,0-20.668,9.192-20.668,20.493v73.87C133.324,98.854,137.002,102.507,141.525,102.507z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  class: "st0",
  d: "M316.693,102.507h54.025c4.348,0,7.884-3.513,7.884-7.826V20.178C378.602,9.053,369.474,0,358.251,0H329.16 c-11.221,0-20.349,9.053-20.349,20.178v74.503C308.81,98.994,312.347,102.507,316.693,102.507z"
})));

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  icon: schedulerIcon,
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
function save() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  });
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/scheduler-widget","version":"0.1.0","title":"Scheduler","category":"widgets","icon":"smiley","description":"A google-like scheduler","example":{},"attributes":{"width":{"type":"integer","default":600},"height":{"type":"integer","default":600},"viewMode":{"type":"string","default":"week"},"initialDate":{"type":"string"},"minHour":{"type":"integer","default":6},"maxHour":{"type":"integer","default":21},"namespace":{"type":"string","default":"default"},"locale":{"type":"string"}},"supports":{"color":{"background":false,"text":false},"html":false,"align":true,"layout":false},"textdomain":"scheduler-widget","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkscheduler_widget"] = globalThis["webpackChunkscheduler_widget"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
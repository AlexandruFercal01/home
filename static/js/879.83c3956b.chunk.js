(self.webpackChunkaplicatie=self.webpackChunkaplicatie||[]).push([[879],{7879:function(t){t.exports=function(){"use strict";var t={d:function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}},e={};t.d(e,{default:function(){return I}});var n="rtl",r="ltr";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t){return"string"==typeof t?document.querySelector(t):t}function l(t){return Array.isArray(t)?t:null==t?[]:"object"==i(t)&&"number"==typeof t.length?o(t):[t]}function c(t){return Object.keys(t).includes("speed")&&!Number(t.speed)&&(t.speed=7),Number(t.speed)<=0&&(t.speed=1),Object.keys(t).includes("margin")&&!Number(t.margin)&&0!==Number(t.margin)&&(t.margin=10),Object.keys(t).includes("direction")&&(t.direction=t.direction.toLowerCase()),Object.keys(t).includes("direction")&&t.direction!==n&&t.direction!==r&&(t.direction=n),Object.keys(t).includes("autoplaySpeed")&&!Number(t.autoplaySpeed)&&(t.autoplaySpeed=5),Number(t.autoplaySpeed)<=0&&(t.autoplaySpeed=1),t}function u(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(){}var h=p.prototype;function f(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}h.on=function(t,e){if(!t||!e)return this;var n=this._events=this._events||{},r=n[t]=n[t]||[];return r.includes(e)||r.push(e),this},h.emitEvent=function(t,e){var n=this._events&&this._events[t];if(!n||!n.length)return this;e=e||[];var r,i=u(n=n.slice(0));try{for(i.s();!(r=i.n()).done;)r.value.apply(this,e)}catch(t){i.e(t)}finally{i.f()}return this},h.allOff=function(){return delete this._events,this};var g=0,S={};function w(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a(t);if(n){if(this.element=n,this.element.scrollCarouselGUID){var r=S[this.element.scrollCarouselGUID];return r&&r.option(e),r}this.baseOption=e,this.options=v({},this.constructor.defaults);var i=c(e);this.option(i),this._create()}else console&&console.error("Bad element for Scroll Carousel: ".concat(n||t))}w.defaults={speed:7,smartSpeed:!1,margin:10,autoplay:!1,autoplaySpeed:5,slideSelector:null,direction:n};var O,E,j,A,_=w.prototype;Object.assign(_,p.prototype),_._create=function(){var t=this.guid=++g;for(var e in this.element.scrollCarouselGUID=t,S[t]=this,this._createViewport(),this._createSlider(),this.options.on){var n=this.options.on[e];this.on(e,n)}this.activate()},_.option=function(t){Object.assign(this.options,t)},_.activate=function(){var t,e=this;if(!this.isActive){this.isActive=!0,this.translate=0,this.displacement=0,this.isScrolling=!0,this.prevPosition=document.body.scrollTop||document.documentElement.scrollTop,this.baseElems=l(this.element.children);var n=this._filterFindSlideElements(this.element.children);this.slideElems=this._makeSlides(n),this.options.direction===r&&(this.slideElems=this.slideElems.reverse());var i=this.slideElems.map((function(t){return t.cloneNode(!0)}));(t=this.slider).append.apply(t,f(this.slideElems).concat(f(i))),this.viewport.append(this.slider),this.element.append(this.viewport),this.options.direction===r&&this._supportLtr(),this.options.autoplay&&this._autoplay(),this.emitEvent("ready"),window.addEventListener("scroll",(function(){return e._transform()}))}},_._autoplay=function(){var t=this;this.interval=setInterval((function(){t._transform()}),10)},_._transform=function(){(function(t){if(!t)return!1;var e=t.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,r=window.innerWidth||document.documentElement.clientWidth,i=e.top<=n&&e.top+e.height>=0,o=e.left<=r&&e.left+e.width>=0;return i&&o})(this.element)&&(this.options.autoplay&&this._setIsScrolling(),this.options.smartSpeed?this._calcSmartSpeed():this._calcRegularSpeed(),this.emitEvent("move",[this.progress]))},_._calcRegularSpeed=function(){var t=this.slider.getBoundingClientRect();this.slider.style.transform="translateX(".concat(this.translate,"px)");var e=this.isScrolling?this.options.speed:1.2;this.options.direction===n&&(this.translate-=e),this.options.direction===r&&(this.translate+=e),this.options.direction===n&&this.translate<=-t.width/2&&(this.translate=0),this.options.direction===r&&this.translate>=0&&(this.translate=-t.width/2),this.progress=100*-this.translate/t.width*2},_._calcSmartSpeed=function(){var t=document.body.scrollTop||document.documentElement.scrollTop;this.displacement-=this.isScrolling?Math.abs(this.prevPosition-t):1.2,this.options.direction===r&&this.displacement<0&&(this.displacement=50/(10*this.options.speed/5500%50));var e,i=this.displacement/5500*(10*this.options.speed)%50;this.progress=2*-i,this.options.direction===n&&(e=i),this.options.direction===r&&(e=-i),this.slider.style.transform="translateX(".concat(e,"%)"),this.prevPosition=t},_._supportLtr=function(){var t=this.slider.getBoundingClientRect();this.translate=-t.width+Math.min(document.documentElement.clientWidth,window.innerWidth);var e=100*this.translate/t.width;this.displacement=-e/(10*this.options.speed/5500%50),this.options.smartSpeed?this.slider.style.transform="translateX(".concat(e,"%)"):this.slider.style.transform="translateX(".concat(this.translate,"px)")},_._setIsScrolling=function(){var t=document.body.scrollTop||document.documentElement.scrollTop;this.isScrolling=!0,this.prevPosition!==t?this.options.smartSpeed||(this.prevPosition=t):this.isScrolling=!1},_._makeSlide=function(t){var e=document.createElement("div");return e.style.marginRight=this.options.margin+"px",e.className="sc-slide",this.slideElem=e,this.slideElem.append(t),this.slideElem},_._makeSlides=function(t){var e=this;return t.map((function(t){return e._makeSlide(t)}))},_._createSlider=function(){var t=document.createElement("div");t.className="scroll-carousel-slider",this.slider=t},_._createViewport=function(){this.viewport=document.createElement("div"),this.viewport.className="scroll-carousel-viewport"},_._filterFindSlideElements=function(t){return function(t,e){return(t=l(t)).filter((function(t){return t instanceof HTMLElement})).reduce((function(t,n){var r;if(!e)return t.push(n),t;n.matches(e)&&t.push(n);var i=n.querySelectorAll(e);return(r=t).concat.apply(r,o(i))}),[])}(t,this.options.slideSelector)},_.destroy=function(){var t;this.isActive&&(this.viewport.remove(),(t=this.element).append.apply(t,f(this.baseElems)),this.isActive=!1,clearInterval(this.interval),window.removeEventListener("scroll",this),this.emitEvent("destroy"),this.allOff(),delete this.element.scrollCarouselGUID,delete S[this.guid])},_.reinit=function(){return new w(this.element,this.baseOption)},w.data=function(t){if(t=a(t))return S[t.scrollCarouselGUID]},O=w,E="carousel",j=function(){var t="data-"+E.replace(/(.)([A-Z])/g,(function(t,e,n){return e+"-"+n})).toLowerCase();o(document.querySelectorAll("[".concat(t,"]"))).forEach((function(e){var n,r=e.getAttribute(t);try{n=r&&JSON.parse(r)}catch(n){return void(console&&console.error("Error parsing ".concat(t," on ").concat(e.className,": ").concat(n)))}new O(e,n)}))},"complete"==(A=document.readyState)||"interactive"==A?setTimeout(j):document.addEventListener("DOMContentLoaded",j);var I=w;return e.default}()}}]);
//# sourceMappingURL=879.83c3956b.chunk.js.map
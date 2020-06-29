
/* Smart UI v7.7.0 (2020-June) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function o(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(n,l,function(t){return e[t]}.bind(null,l));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=104)}({104:function(e,t){Smart("smart-tooltip",class extends Smart.ContentElement{static get properties(){return{arrow:{value:!1,type:"boolean"},arrowDirection:{allowedValues:["bottom","top","left","right"],value:"bottom",type:"string"},delay:{value:0,type:"number"},messages:{extend:!0,value:{en:{invalidSelector:'{{elementType}}: "{{property}}" must be a String, an HTMLElement or null.',htmlTemplateNotSuported:"{{elementType}}: Browser doesn't support HTMLTemplate elements.",invalidTemplate:'{{elementType}}: "{{property}}" property accepts a string that must match the id of an HTMLTemplate element from the DOM.',invalidNode:'{{elementType}}: Invalid parameter "{{node}}" when calling {{method}}.'}},type:"object"},offset:{value:[],type:"array"},openMode:{allowedValues:["click","focus","hover","manual"],value:"hover",type:"string"},position:{allowedValues:["bottom","top","left","right","absolute","auto"],value:"top",type:"string"},selector:{value:null,type:"any?"},tooltipTemplate:{value:null,type:"any"},value:{value:"",type:"string",reflectToAttribute:!1},visible:{value:!1,type:"boolean"}}}static get styleUrls(){return["smart.tooltip.css"]}template(){return'<div id="container" role="presentation">\n                    <div id="content" class="smart-tooltip-content" inner-h-t-m-l="[[innerHTML]]" role="presentation">\n                        <content></content>\n                    </div>\n                </div>'}propertyChangedHandler(e,t,o){super.propertyChangedHandler(e,t,o);const n=this;let l;switch(e){case"openMode":n.close(),n._handleEventListeners(t),n._handleResize();break;case"selector":n._oldOwnerElement=n._ownerElement,n._handleSelector(o),n._handleEventListeners();break;case"tooltipTemplate":n._handleTemplate(t);break;case"value":n.tooltipTemplate?n._handleTemplate():n.$.content.innerHTML=n.value;break;case"visible":l=o?"open":"close",n.$.fireEvent(l,{owner:n._ownerElement},n.isInShadowDOM?{composed:!0,bubbles:!0,cancelable:!0}:void 0)}n._applyPosition()}ready(){const e=this;super.ready(),e.setAttribute("role","tooltip"),e._isParentPositionStatic="static"===window.getComputedStyle(e.parentElement||document.querySelector("body")).position,e._handleSelector(e.selector),e.visible&&e._applyPosition(),e._handleEventListeners(),e._handleResize(),e.value=e.$.content.innerHTML=e.value?e.value:e.innerHTML,e._handleTemplate()}appendChild(e){const t=this;if(!t.isCompleted){const e=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.appendChild.apply(t,e.concat(Array.prototype.slice.call(arguments)))}e?(t.$.content.appendChild(e),t._applyPosition()):t.error(t.localize("invalidNode",{elementType:t.nodeName.toLowerCase(),method:"appendChild",node:"node"}))}close(){const e=this;e._isOpening&&clearTimeout(e._isOpening),e.visible&&(e.$.fireEvent("close",{owner:e._ownerElement},e.isInShadowDOM?{composed:!0,bubbles:!0,cancelable:!0}:void 0),e.visible=!1)}insertBefore(e,t){const o=this;if(!o.isCompleted){const e=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.insertBefore.apply(o,e.concat(Array.prototype.slice.call(arguments)))}e&&t?(o.$.content.insertBefore(e,t),o._applyPosition()):o.error(o.localize("invalidNode",{elementType:o.nodeName.toLowerCase(),method:"insertBefore",node:"newNode/referenceNode"}))}open(){const e=this;e.disabled||e.readonly||e.visible||(e._isOpening=setTimeout((function(){e._applyPosition(),e.$.fireEvent("open",{owner:e._ownerElement},e.isInShadowDOM?{composed:!0,bubbles:!0,cancelable:!0}:void 0);const t=e.context;e.context=e,e.visible=!0,e.context=t}),e.delay))}removeChild(e){const t=this;if(!t.isCompleted){const e=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.insertBefore.apply(t,e.concat(Array.prototype.slice.call(arguments)))}e?(t.$.content.removeChild(e),t._applyPosition()):t.error(t.localize("invalidNode",{elementType:t.nodeName.toLowerCase(),method:"removeChild",node:"node"}))}toggle(){this.visible?this.close():this.open()}_getDomElementPosition(e){let t=[],o=e.parentElement;for(;o&&"BODY"!==o.nodeName;)t.push(o),o=!this.enableShadowDOM||o.parentElement?o.parentElement:o.getRootNode().host;return t}_getElementAndOwnerRelation(e){const t=this._getDomElementPosition(e||this),o=t.length;let n=null;for(let e=0;e<o;e++){if("static"!==window.getComputedStyle(t[e]).getPropertyValue("position")){n=t[e];break}}return n}_applyPosition(){const e=this;if(!e._ownerElement)return;if(!e.parentElement)return;e._isParentPositionStatic="static"===window.getComputedStyle(e.parentElement).position;const t=e._ownerElement.getBoundingClientRect(),o=e.parentElement?e.parentElement.getBoundingClientRect():{top:0,left:0};let n,l;e.parentElement&&"BODY"===e.parentElement.nodeName.toUpperCase()?(n=t.top+window.scrollY,l=t.left+window.scrollX):(n=t.top-o.top,l=t.left-o.left);const i={top:t.top,left:t.left,nonStaticParent:e._getElementAndOwnerRelation()},r=e.position;let s;switch(r){case"auto":case"bottom":case"top":case"left":case"right":{const t=e["_position"+r.charAt(0).toUpperCase()+r.slice(1)](l,n,i);n=t.top,l=t.left,s=t.translate;break}case"absolute":e.style.top=e.style.left="",n=l=0}s?e.$.container.style.setProperty("--smart-tooltip-arrow-translate",s+"px"):e.$.container.style.removeProperty("--smart-tooltip-arrow-translate"),void 0===n||isNaN(n)||(n+=parseInt(e.offset[1])||0,e.style.top=n+"px"),void 0===l||isNaN(l)||(l+=parseInt(e.offset[0])||0,e.style.left=l+"px")}_positionAuto(e,t,o){const n=this;let l,i=n.parentElement;for(;i;){if("hidden"===getComputedStyle(i).getPropertyValue("overflow")){l=i;break}i=i.parentElement}l||(l=document.body);const r=l.getBoundingClientRect(),s=parseFloat(window.getComputedStyle(n).getPropertyValue("--smart-tooltip-arrow-width"))||0;let a=n._positionTop(e,t,o),p=o.nonStaticParent,f=n.offsetWidth/2-s,c=0,d=0;if(p){const e=p.getBoundingClientRect();c=e.top,d=e.left}return a.top+c>=r.top?(t=a.top,{left:e=Math.max(r.left-d,a.left+Math.min(0,r.right-(a.left+d+n.offsetWidth))),top:t,translate:Math.max(-f,Math.min(f,a.left-e))}):(a=n._positionBottom(e,t,o),a.top+n.offsetHeight+c<=r.bottom?(t=a.top,{left:e=Math.max(r.left-d,a.left+Math.min(0,r.right-(a.left+d+n.offsetWidth))),top:t,translate:Math.max(-f,Math.min(f,a.left-e))}):(a=n._positionLeft(e,t,o),t=a.top,f=n.offsetHeight/2-s,t=Math.max(r.top-c,a.top+Math.min(0,r.bottom-(a.top+c+n.offsetHeight))),a.left+d>=r.left||(a=n._positionRight(e,t,o)),{left:e=a.left,top:t,translate:Math.max(-f,Math.min(f,a.top-t))}))}_getRelativeParentOffset(e){const t=this,o=t._ownerElement;let n=t._getElementAndOwnerRelation(o),l=0,i=0;if(!e)return{left:i,top:l};for(;e!==n;)l+=n.offsetTop,i+=n.offsetLeft,n=t._getElementAndOwnerRelation(n);return{left:i,top:l}}_positionTop(e,t,o){const n=this,l=n._getRelativeParentOffset(o.nonStaticParent);if(n.set("arrowDirection","bottom"),null===o.nonStaticParent)return t=o.top+window.scrollY-n.offsetHeight,{left:(e=o.left+window.scrollX-n.offsetWidth/2+n._ownerElement.offsetWidth/2)+l.left,top:t+l.top};if(n._isParentPositionStatic){if(t=n._ownerElement.offsetTop-n.offsetHeight,e=n._ownerElement.offsetLeft-n.offsetWidth/2+n._ownerElement.offsetWidth/2,n._ownerElement instanceof SVGElement){const o=n._ownerElement.getBoundingClientRect(),l=n._ownerElement.parentNode.getBoundingClientRect();t=o.top-l.top-n.offsetHeight/2,e=o.left-n.offsetWidth/2+l.left/2}return{left:e+l.left,top:t+l.top}}if(n._ownerElement instanceof SVGElement&&n._ownerElement.parentElement){const o=n._ownerElement.getBoundingClientRect(),i=n._ownerElement.parentNode.getBoundingClientRect();return t=o.top-i.top-n.offsetHeight,{left:(e=o.left-i.left-n.offsetWidth/2+o.width/2)+l.left,top:t+l.top}}return t-=n.offsetHeight,{left:(e=e-n.offsetWidth/2+n._ownerElement.offsetWidth/2)+l.left,top:t+l.top}}_positionBottom(e,t,o){const n=this,l=n._getRelativeParentOffset(o.nonStaticParent);return n.set("arrowDirection","top"),null===o.nonStaticParent?(t=o.top+window.scrollY+n._ownerElement.offsetHeight,{left:(e=o.left+window.scrollX-n.offsetWidth/2+n._ownerElement.offsetWidth/2)+l.left,top:t+l.top}):n._isParentPositionStatic?(t=n._ownerElement.offsetTop+n._ownerElement.offsetHeight,{left:(e=n._ownerElement.offsetLeft-n.offsetWidth/2+n._ownerElement.offsetWidth/2)+l.left,top:t+l.top}):(t+=n._ownerElement.offsetHeight,{left:(e=e-n.offsetWidth/2+n._ownerElement.offsetWidth/2)+l.left,top:t+l.top})}_positionLeft(e,t,o){const n=this,l=n._getRelativeParentOffset(o.nonStaticParent);return n.set("arrowDirection","right"),null===o.nonStaticParent?(t=o.top+window.scrollY+n._ownerElement.offsetHeight/2-n.$.content.offsetHeight/2,{left:(e=o.left+window.scrollX-n.offsetWidth)+l.left,top:t+l.top}):n._isParentPositionStatic?(t=n._ownerElement.offsetTop+n._ownerElement.offsetHeight/2-n.$.content.offsetHeight/2,{left:(e=n._ownerElement.offsetLeft-n.offsetWidth)+l.left,top:t+l.top}):(t=t+n._ownerElement.offsetHeight/2-n.$.content.offsetHeight/2,{left:(e-=n.offsetWidth)+l.left,top:t+l.top})}_positionRight(e,t,o){const n=this,l=n._getRelativeParentOffset(o.nonStaticParent);return n.set("arrowDirection","left"),null===o.nonStaticParent?(t=o.top+window.scrollY+n._ownerElement.offsetHeight/2-n.$.content.offsetHeight/2,{left:(e=o.left+window.scrollX+n._ownerElement.offsetWidth)+l.left,top:t+l.top}):n._isParentPositionStatic?(t=n._ownerElement.offsetTop+n._ownerElement.offsetHeight/2-n.$.content.offsetHeight/2,{left:(e=n._ownerElement.offsetLeft+n._ownerElement.offsetWidth)+l.left,top:t+l.top}):(t=t+n._ownerElement.offsetHeight/2-n.$.content.offsetHeight/2,{left:(e+=n._ownerElement.offsetWidth)+l.left,top:t+l.top})}_eventsHandler(e){const t=this;t.disabled||t.readonly||("click"!==e.type?"mouseenter"===e.type||"focus"===e.type?this.open():this.close():t.visible?this.close():this.open())}_handleEventListeners(e){const t=this;if(t._oldOwnerElement&&"manual"!==t.openMode){let e=t._oldOwnerElement.getAttribute("aria-describedby");e&&(e===t.id?t._oldOwnerElement.removeAttribute("aria-describedby"):(e=e.replace(" "+t.id,""),e=e.replace(t.id+" ",""),t._oldOwnerElement.setAttribute("aria-describedby",e))),t._oldOwnerElement.$.unlisten("mouseenter.tooltip"),t._oldOwnerElement.$.unlisten("mouseleave.tooltip"),t._oldOwnerElement.$.unlisten("focus.tooltip"),t._oldOwnerElement.$.unlisten("blur.tooltip"),t._oldOwnerElement.$.unlisten("click.tooltip"),t._oldOwnerElement=null}if(t._ownerElement){if(e)switch(e){case"hover":t._ownerElement.$.unlisten("mouseenter.tooltip"),t._ownerElement.$.unlisten("mouseleave.tooltip");break;case"focus":t._ownerElement.$.unlisten("focus.tooltip"),t._ownerElement.$.unlisten("blur.tooltip");break;case"click":t._ownerElement.$.unlisten("click.tooltip")}if("manual"!==t.openMode)switch(t._ownerElement instanceof Smart.BaseElement||(t._ownerElement.$=Smart.Utilities.Extend(t._ownerElement)),t.openMode){case"hover":t._ownerElement.$.listen("mouseenter.tooltip",t._eventsHandler.bind(t)),t._ownerElement.$.listen("mouseleave.tooltip",t._eventsHandler.bind(t));break;case"focus":t._ownerElement.$.listen("focus.tooltip",t._eventsHandler.bind(t)),t._ownerElement.$.listen("blur.tooltip",t._eventsHandler.bind(t));break;case"click":t._ownerElement.$.listen("click.tooltip",t._eventsHandler.bind(t))}}}_handleResize(){const e=this;function t(){e._applyPosition()}"click"===e.openMode?window.addEventListener("resize",t):window.removeEventListener("resize",t)}_handleSelector(e){const t=this;if("string"==typeof e)t._ownerElement=e.length>0?document.getElementById(e):void 0;else if(e instanceof HTMLElement||e instanceof SVGElement)t._ownerElement=e;else{if(null===e)return void(t._ownerElement=void 0);t.error(t.localize("invalidSelector",{elementType:t.nodeName.toLowerCase(),property:"selector"}))}const o=t._ownerElement?t._ownerElement.getAttribute("aria-describedby"):null;t._ownerElement&&(o?t._ownerElement.setAttribute("aria-describedby",o+" "+t.id):t._ownerElement.setAttribute("aria-describedby",t.id))}_handleTemplate(e){const t=this;let o=t.tooltipTemplate;if(e&&(t.$.content.innerHTML=t.value?t.value:""),null===o||!o)return;if("function"==typeof t.tooltipTemplate)return void t.tooltipTemplate(t.$.content,{value:t.value});if(!("content"in document.createElement("template")))return void t.error(t.localize("htmlTemplateNotSuported",{elementType:t.nodeName.toLowerCase()}));if(o=document.getElementById(o),null===o||!("content"in o))return void t.error(t.localize("invalidTemplate",{elementType:t.nodeName.toLowerCase(),property:"template"}));const n=o.content,l=n.childNodes.length,i=/{{\w+}}/g;let r,s=[];for(let e=0;e<l;e++)for(r=i.exec(n.childNodes[e].innerHTML);r;)s.push({childNodeIndex:e,bindingString:r[0]}),r=i.exec(n.childNodes[e].innerHTML);const a=s.length;let p,f,c=document.importNode(o.content,!0);for(let e=0;e<a;e++){p=c.childNodes[s[e].childNodeIndex],f=s.length;for(let o=0;o<f;o++)p.innerHTML=p.innerHTML.replace(s[e].bindingString,t.value)}t.$.content.innerHTML="";for(let e=0;e<c.childNodes.length;e++)c.childNodes[e].outerHTML&&(t.$.content.innerHTML+=c.childNodes[e].outerHTML)}})}});
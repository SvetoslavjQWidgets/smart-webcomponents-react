
/* Smart UI v7.7.0 (2020-June) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=96)}({96:function(e,t){Smart("smart-switch-button",class extends Smart.ToggleButton{static get properties(){return{inverted:{value:!1,type:"boolean"},orientation:{value:"horizontal",allowedValues:["horizontal","vertical"],type:"string"},switchMode:{value:"default",allowedValues:["default","click","drag","none"],type:"string"},clickMode:{value:"release",allowedValues:["press","release","pressAndRelease"],type:"string"}}}static get listeners(){return{"container.down":"_mouseDownHandler","document.move":"_drag","container.move":"_moveHandler","document.up":"_switchThumbDropHandler",mouseenter:"_switchButtonOnMouseEnter",mouseleave:"_switchButtonOnMouseLeave",resize:"_resizeHandler","container.resize":"_resizeHandler","document.selectstart":"_selectStartHandler"}}static get styleUrls(){return["smart.switchbutton.css"]}propertyChangedHandler(e,t,n){const i=this;switch(super.propertyChangedHandler(e,t,n),i._updateContentProperties(),e){case"indeterminate":n?(i._valueCache=i.checked,i.checked=null):i.checked=i._valueCache,i._setAriaState();break;case"trueContent":i.trueContent=n;break;case"falseContent":i.falseContent=n;break;case"orientation":i._resizeHandler()}i._getContainersSizeAndBreakPoint(),i._removeDragStyles(),i._resizeHandler()}template(){return"<div  id='container' class='smart-container' role=\"presentation\">\n                    <div id='innerContainer' class='smart-inner-container' role=\"presentation\">\n                        <span id='falseContentContainer' inner-h-t-m-l='[[falseContent]]' class='smart-false-content-container'></span>\n                        <span id='switchThumb' class='smart-thumb' role=\"presentation\"></span>\n                        <span id='trueContentContainer' inner-h-t-m-l='[[trueContent]]' class='smart-true-content-container'></span>\n                    </div>\n                    <input id='hiddenInput' class='smart-hidden-input' type='hidden'>\n                </div>"}ready(){const e=this;super.ready(),e.setAttribute("role","switch");let t=e.animation;e.hasAnimation&&(e.animation="none"),e._supportCSSVariables=Smart.Utilities.Core.CSSVariablesSupport()&&Boolean(window.getComputedStyle(e.$.container).getPropertyValue("--smart-switch-button-default-width")),e._htmlBindOnInitialization(),e._resizeHandler(),e._initializePrivateVariables(),e._getContainersSizeAndBreakPoint(),e.indeterminate&&(e._valueCache=e.checked,e.checked=null),e._setAriaState(),e._handleTemplate(!0),e._handleTemplate(!1),e._handleTemplate(),e._updateHidenInputNameAndValue(),e._updateThumbPosition(),e.animation=t}_mouseDownHandler(e){const t=this;t.disabled||t.readonly||"none"===t.switchMode||(e.originalEvent.target.closest(".smart-thumb")!==t.$.switchThumb||"default"!==t.switchMode&&"drag"!==t.switchMode||t._switchThumbDragStartHandler(e),t._isSwitchClicked=t,t._updateContentProperties(),"release"!==t.clickMode&&"click"===t.switchMode&&(t._updateStateOnClick(),t.$.fireEvent("click"),t.indeterminate=!1,t._updateHidenInputNameAndValue()))}_updateStateOnClick(){this._changeCheckState(),this.focus()}_drag(e){this._mouseDown&&(Smart.Utilities.Core.isMobile&&e.originalEvent.preventDefault(),this._switchThumbDragHandler(e))}_switchThumbDragStartHandler(e){this.disabled||("click"===this.switchMode&&"release"!==this.clickMode&&(e.preventDefault(),e.stopPropagation()),this._isInactiveOn("drag")||(this._mouseDown=!0,this._getContainersSizeAndBreakPoint(),this._pointerPosition="vertical"===this.orientation?e.pageY:e.pageX,e.preventDefault()))}_selectStartHandler(e){this._mouseDown&&e.preventDefault()}_switchThumbDragHandler(e){const t=this;if(t._isInactiveOn("drag"))return;if(!1===t._mouseDown)return void t._removeDragStyles();if(!t.hasAttribute("dragged")){if(Math.abs(("vertical"===t.orientation?e.pageY:e.pageX)-t._pointerPosition)<=1.5)return;t.setAttribute("dragged","")}let n=t.$.innerContainer,i=t.$.container.getBoundingClientRect(),r="vertical"===t.orientation?document.body.scrollTop||document.documentElement.scrollTop:document.body.scrollLeft||document.documentElement.scrollLeft,o="vertical"===t.orientation?i.top+r:i.left+r,a="vertical"===t.orientation?t._pointerPosition-n.offsetTop:t._pointerPosition-n.offsetLeft,s=t._pointerPosition>=o&&t._pointerPosition<=o+t._switchContainerSize;const l=-1*(t.offsetWidth-t.$.switchThumb.offsetWidth),h=-1*(t.offsetHeight-t.$.switchThumb.offsetHeight);if(t._pointerPosition="vertical"===t.orientation?e.pageY:e.pageX,s){let e=t._pointerPosition-a;e<-t._switchTrackLength&&(e=-t._switchTrackLength),e>0&&(e=0),"vertical"===t.orientation?t.$.innerContainer.style.top=Math.max(h,e)+"px":t.$.innerContainer.style.left=Math.max(l,e)+"px"}}_switchThumbDropHandler(){const e=this;e.hasAttribute("dragged")?e._endDrag():e._isSwitchClicked&&e._endClick(),e._mouseDown=!1,delete e._isSwitchClicked}_endDrag(){const e=this,t=e.inverted&&!e.rightToLeft||!e.inverted&&e.rightToLeft;if(e.indeterminate=!1,e._updateHidenInputNameAndValue(),e._isInactiveOn("drag")||!e._mouseDown)return;e.removeAttribute("dragged"),delete e._pointerPosition;const n=("vertical"===e.orientation?e.$.innerContainer.offsetTop+e.$.switchThumb.offsetTop+e.$.switchThumb.clientHeight/2:e.$.innerContainer.offsetLeft+e.$.switchThumb.offsetLeft+e.$.switchThumb.clientWidth/2)>e._switchBreakPoint;null!==e.checked?!t==(n===e.checked)&&e._changeCheckState(!e.checked):n?e._changeCheckState(t):e._changeCheckState(!t),e._removeDragStyles(),e._updateThumbPosition()}_endClick(){const e=this;e._resizeHandler(),e.disabled||e.readonly||e._isInactiveOn("click")||("release"!==e.clickMode&&"pressAndRelease"!==e.clickMode||e._updateStateOnClick(),e.indeterminate=!1,e._updateHidenInputNameAndValue())}_switchButtonOnMouseEnter(){this.disabled||this.readonly||this.$.addClass("hovered")}_switchButtonOnMouseLeave(){this.disabled||this.readonly||this.$.removeClass("hovered")}_isInactiveOn(e){const t=this.disabled||this.readonly||this.switchMode!==e;return"default"!==this.switchMode&&t}_keyUpHandler(e){this.disabled||this.readonly||32!==e.keyCode||"none"===this.switchMode||(this._getContainersSizeAndBreakPoint(),this._changeCheckState())}_initializePrivateVariables(){this._switchContainerSize=this._switchTrackLength=this._switchBreakPoint=this._pointerPosition=0,this._mouseDown=!1}_changeCheckState(e){const t=this;let n=t.checked;if(null===n&&void 0!==e)return t.$.fireEvent("change",{value:e,oldValue:null}),t.checked=e,void t._updateThumbPosition();null===t.checked?t.checked=!0:t.checked=!t.checked,t._setAriaState(),t._updateThumbPosition(),t.$.fireEvent("change",{value:t.checked,oldValue:n}),t._updateHidenInputNameAndValue()}_getContainersSizeAndBreakPoint(){this._switchContainerSize="vertical"===this.orientation?this.$.container.clientHeight:this.$.container.clientWidth,this._switchTrackLength="vertical"===this.orientation?this._switchContainerSize-this.$.switchThumb.clientHeight:this._switchContainerSize-this.$.switchThumb.clientWidth,this._switchBreakPoint=this._switchContainerSize/2}_removeDragStyles(){this._supportCSSVariables?this.$.innerContainer.removeAttribute("style"):this.$.innerContainer.style.left="",this._supportCSSVariables?this.$.innerContainer.removeAttribute("style"):this.$.innerContainer.style.top="",this._mouseDown=!1}_moveHandler(e){"touchmove"===e.originalEvent.type&&e.originalEvent.preventDefault()}_resizeHandler(){const e=this;if(!document.body.contains(e))return;const t=window.getComputedStyle(e,null),n=parseInt(t.getPropertyValue("border-top-width")),i=parseInt(t.getPropertyValue("border-right-width")),r=parseInt(t.getPropertyValue("border-bottom-width")),o=parseInt(t.getPropertyValue("border-left-width")),a="vertical"===e.orientation?e.offsetHeight-(n+r):e.offsetWidth-(o+i);e._getContainersSizeAndBreakPoint(),e._supportCSSVariables?e.$.container.style.setProperty("--smart-switch-button-default-width",a+"px"):(e._innerContainerSize=a,e.$.innerContainer.style.height=e.$.innerContainer.style.width="",e.$.trueContentContainer.style.height=e.$.trueContentContainer.style.width="",e.$.falseContentContainer.style.height=e.$.falseContentContainer.style.width="","horizontal"===e.orientation?(e.$.innerContainer.style.setProperty("width",2*a-e.$.switchThumb.clientWidth+"px"),e.$.trueContentContainer.style.setProperty("width",e._switchTrackLength+"px"),e.$.falseContentContainer.style.setProperty("width",e._switchTrackLength+"px")):(e.$.innerContainer.style.setProperty("height",2*a-e.$.switchThumb.clientHeight+"px"),e.$.trueContentContainer.style.setProperty("height",e._switchTrackLength+"px"),e.$.falseContentContainer.style.setProperty("height",e._switchTrackLength+"px")),e._updateThumbPosition())}_updateThumbPosition(){const e=this,t=e.inverted&&!e.rightToLeft||!e.inverted&&e.rightToLeft;!e._supportCSSVariables&&(t?!0!==e.checked:!1!==e.checked)&&e._innerContainerSize?((t?!1===e.checked:e.checked)&&("horizontal"===e.orientation?(e.$.innerContainer.style.left=-1*(e._innerContainerSize-e.$.switchThumb.offsetWidth)+"px",e.$.innerContainer.style.top=""):(e.$.innerContainer.style.top=-1*(e._innerContainerSize-e.$.switchThumb.offsetHeight)+"px",e.$.innerContainer.style.left="")),null===e.checked&&("horizontal"===e.orientation?(e.$.innerContainer.style.left=-1*(e._innerContainerSize/2-e.$.switchThumb.offsetWidth/2)+"px",e.$.innerContainer.style.top=""):(e.$.innerContainer.style.top=-1*(e._innerContainerSize/2-e.$.switchThumb.offsetHeight/2)+"px",e.$.innerContainer.style.left=""))):e.$.innerContainer.style.left=e.$.innerContainer.style.top=""}_setAriaState(){const e=this,t=!!e.checked;e.setAttribute("aria-checked",t),t?(e.$.falseContentContainer.setAttribute("aria-hidden",!0),e.$.trueContentContainer.removeAttribute("aria-hidden")):(e.$.trueContentContainer.setAttribute("aria-hidden",!0),e.$.falseContentContainer.removeAttribute("aria-hidden"))}})}});

/* Smart UI v7.7.0 (2020-June) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(t){var i={};function e(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}e.m=t,e.c=i,e.d=function(t,i,r){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)e.d(r,n,function(i){return t[i]}.bind(null,n));return r},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=73)}({73:function(t,i){let e;try{BigInt,e=!0}catch(t){e=!1}Smart.Utilities.Assign("BigNumber",class{constructor(t,i,e){var r,n=this;if(Smart.Utilities.BigNumber.bigIntSupport){if(t instanceof Smart.Utilities.BigNumber){if(!Array.isArray(t._d))return new Smart.Utilities.BigNumber(t._d);t=(t._s?"-":"")+(t._d.slice(0,t._f).join("")||"0")+(t._f!=t._d.length?"."+t._d.slice(t._f).join(""):"")}try{null===t?n._d=BigInt(0):"string"==typeof t&&-1!==t.toLowerCase().indexOf("e")?n._d=BigInt(parseFloat(t)):n._d=BigInt(t)}catch(i){try{const i=t.toString().split(".");let e=BigInt(i[0]),r=parseInt(i[1].charAt(0));if(e>=0&&r>=5)e+=BigInt(1);else if(e<0)if(r>5)e-=BigInt(1);else if(5===r){let t=1,r=i[1].charAt(t),n=!1;for(;""!==r;)if(t++,r=i[1].charAt(t),"0"!==r){n=!0;break}n&&(e-=BigInt(1))}n._d=e}catch(t){n._d=BigInt(0)}}return n._f=n._d.toString().replace("-","").length,void(n._s=n._d<0)}if(t instanceof Smart.Utilities.BigNumber){if("bigint"==typeof t._d)return new Smart.Utilities.BigNumber(t._d.toString());for(r in{precision:0,roundType:0,_s:0,_f:0})n[r]=t[r];return n._d=t._d.slice(),void(t._s&&1===t._d.length&&0===t._d[0]&&(n._s=!1))}if(void 0!==t&&("-0"===t&&(t="0"),new RegExp(/e/i).test(t))){var s=t.toString().toLowerCase(),a=s.indexOf("e"),l=new Smart.Utilities.BigNumber(s.slice(0,a)),o=s.slice(a+2),u=s.slice(a+1,a+2),_=new Smart.Utilities.BigNumber(10).pow(u+o);t=l.multiply(_).toString()}for(n.precision=isNaN(i=Math.abs(i))?Smart.Utilities.BigNumber.defaultPrecision:i,n.roundType=isNaN(e=Math.abs(e))?Smart.Utilities.BigNumber.defaultRoundType:e,n._s="-"==(t+="").charAt(0),n._f=((t=t.replace(/[^\d.]/g,"").split(".",2))[0]=t[0].replace(/^0+/,"")||"0").length,r=(t=n._d=(t.join("")||"0").split("")).length;r;t[--r]=+t[r]);n.round()}static get defaultPrecision(){return 40}static get defaultRoundType(){return 4}static get bigIntSupport(){return e&&!0!==Smart.Utilities.BigNumber.ignoreBigIntNativeSupport}add(t){if(Smart.Utilities.BigNumber.bigIntSupport)return new Smart.Utilities.BigNumber(this._d+new Smart.Utilities.BigNumber(t)._d);let i=this.normalizeOperand(this);if(t=i.normalizeOperand(t),i.isZero()&&i._s&&(i._s=!1),0===t||t.constructor===Smart.Utilities.BigNumber&&1===t._d.length&&0===t._d[0])return new Smart.Utilities.BigNumber(i);if(i._s!=(t=new Smart.Utilities.BigNumber(t))._s)return t._s^=1,i.subtract(t);var e,r,n=new Smart.Utilities.BigNumber(i),s=n._d,a=t._d,l=n._f,o=t._f;for(t=Math.max(l,o),l!=o&&((o=l-o)>0?n._zeroes(a,o,1):n._zeroes(s,-o,1)),e=(l=s.length)==(o=a.length)?s.length:((o=l-o)>0?n._zeroes(a,o):n._zeroes(s,-o)).length,r=0;e;r=(s[--e]=s[e]+a[e]+r)/10>>>0,s[e]%=10);return r&&++t&&s.unshift(r),n._f=t,n.round()}subtract(t){if(Smart.Utilities.BigNumber.bigIntSupport)return new Smart.Utilities.BigNumber(this._d-new Smart.Utilities.BigNumber(t)._d);let i=this.normalizeOperand(this);if(t=i.normalizeOperand(t),i.isZero()&&i._s&&(i._s=!1),0===t||t.constructor===Smart.Utilities.BigNumber&&1===t._d.length&&0===t._d[0])return new Smart.Utilities.BigNumber(i);if(i._s!=(t=new Smart.Utilities.BigNumber(t))._s)return t._s^=1,i.add(t);var e,r,n=new Smart.Utilities.BigNumber(i),s=n.abs().compare(t.abs())+1,a=s?n:t,l=s?t:n,o=a._f,u=l._f,_=o;for(a=a._d,l=l._d,o!=u&&((u=o-u)>0?n._zeroes(l,u,1):n._zeroes(a,-u,1)),e=(o=a.length)==(u=l.length)?a.length:((u=o-u)>0?n._zeroes(l,u):n._zeroes(a,-u)).length;e;){if(a[--e]<l[e]){for(r=e;r&&!a[--r];a[r]=9);--a[r],a[e]+=10}l[e]=a[e]-l[e]}return s||(n._s^=1),n._f=_,n._d=l,n.round()}multiply(t){if(Smart.Utilities.BigNumber.bigIntSupport)return new Smart.Utilities.BigNumber(this._d*new Smart.Utilities.BigNumber(t)._d);let i=this.normalizeOperand(this);t=i.normalizeOperand(t);var e,r,n,s=new Smart.Utilities.BigNumber(i),a=s._d.length>=(t=new Smart.Utilities.BigNumber(t))._d.length,l=(a?s:t)._d,o=(a?t:s)._d,u=l.length,_=o.length,g=new Smart.Utilities.BigNumber;for(e=_;e;a&&n.unshift(a),g.set(g.add(new Smart.Utilities.BigNumber(n.join("")))))for(n=new Array(_- --e).join("0").split(""),a=0,r=u;r;a+=l[--r]*o[e],n.unshift(a%10),a=a/10>>>0);return s._s=s._s!=t._s,s._f=((a=u+_-s._f-t._f)>=(r=(s._d=g._d).length)?i._zeroes(s._d,a-r+1,1).length:r)-a,s.round()}divide(t){if(Smart.Utilities.BigNumber.bigIntSupport)return new Smart.Utilities.BigNumber(this._d/new Smart.Utilities.BigNumber(t)._d);let i=this.normalizeOperand(this);if(t=i.normalizeOperand(t),"0"==(t=new Smart.Utilities.BigNumber(t)))throw new Error("Division by 0");if("0"==i)return new Smart.Utilities.BigNumber;var e,r,n,s=new Smart.Utilities.BigNumber(i),a=s._d,l=t._d,o=a.length-s._f,u=l.length-t._f,_=new Smart.Utilities.BigNumber,g=0,m=1,d=0,f=0;for(_._s=s._s!=t._s,_.precision=Math.max(s.precision,t.precision),_._f=+_._d.pop(),o!=u&&s._zeroes(o>u?l:a,Math.abs(o-u)),t._f=l.length,(l=t)._s=!1,l=l.round(),t=new Smart.Utilities.BigNumber;"0"==a[0];a.shift());t:do{for(n=d=0,"0"==t&&(t._d=[],t._f=0);g<a.length&&-1==t.compare(l);++g){if(n=g+1==a.length,(!m&&++d>1||(f=n&&"0"==t&&"0"==a[g]))&&(_._f==_._d.length&&++_._f,_._d.push(0)),"0"==a[g]&&"0"==t||(t._d.push(a[g]),++t._f),f)break t;if(n&&-1==t.compare(l)&&(_._f==_._d.length&&++_._f,1)||(n=0))for(;_._d.push(0),t._d.push(0),++t._f,-1==t.compare(l););}if(m=0,-1==t.compare(l)&&!(n=0))for(;n?_._d.push(0):n=1,t._d.push(0),++t._f,-1==t.compare(l););var h;for(r=new Smart.Utilities.BigNumber,e=0;t.compare(h=r.add(l))+1&&++e;r.set(h));t.set(t.subtract(r)),!n&&_._f==_._d.length&&++_._f,_._d.push(e)}while((g<a.length||"0"!=t)&&_._d.length-_._f<=_.precision);return _.round()}mod(t){if(Smart.Utilities.BigNumber.bigIntSupport)return new Smart.Utilities.BigNumber(this._d%new Smart.Utilities.BigNumber(t)._d);let i=this.normalizeOperand(this);t=i.normalizeOperand(t);var e=i.subtract(i.divide(t).intPart().multiply(t));return e.isZero()&&e._s&&(e._s=!e._s),e}pow(t){if(Smart.Utilities.BigNumber.bigIntSupport){let i=BigInt(1);for(let e=BigInt(0);e<new Smart.Utilities.BigNumber(t)._d;e+=BigInt(1))i*=this._d;return new Smart.Utilities.BigNumber(i)}let i=this.normalizeOperand(this);t=i.normalizeOperand(t);var e,r=new Smart.Utilities.BigNumber(i);if(0==(t=new Smart.Utilities.BigNumber(t).intPart()))return r.set(1);for(e=Math.abs(t);--e;r.set(r.multiply(i)));return t<0?r.set(new Smart.Utilities.BigNumber(1).divide(r)):r}set(t){return t=new Smart.Utilities.BigNumber(t),this._d=t._d,this._f=t._f,this._s=t._s,this}compare(t){if(Smart.Utilities.BigNumber.bigIntSupport){const i=new Smart.Utilities.BigNumber(t)._d;return this._d===i?0:this._d>i?1:-1}let i=this.normalizeOperand(this);t=i.normalizeOperand(t);var e,r,n,s=i,a=i._f,l=new Smart.Utilities.BigNumber(t),o=l._f,u=[-1,1];if(s.isZero()&&l.isZero())return 0;if(s._s!=l._s)return s._s?-1:1;if(a!=o)return u[a>o^s._s];for(a=(n=s._d).length,o=(l=l._d).length,e=-1,r=Math.min(a,o);++e<r;)if(n[e]!=l[e])return u[n[e]>l[e]^s._s];return a!=o?u[a>o^s._s]:0}negate(){if(Smart.Utilities.BigNumber.bigIntSupport)return new Smart.Utilities.BigNumber(this._d*BigInt(-1));let t=this.normalizeOperand(this);var i=new Smart.Utilities.BigNumber(t);return i._s^=1,i}abs(){if(Smart.Utilities.BigNumber.bigIntSupport)return new Smart.Utilities.BigNumber(this._d<0?this._d*BigInt(-1):this._d);let t=this.normalizeOperand(this);var i=new Smart.Utilities.BigNumber(t);return i._s=0,i}intPart(){if(Smart.Utilities.BigNumber.bigIntSupport)return new Smart.Utilities.BigNumber(this._d);let t=this.normalizeOperand(this);return new Smart.Utilities.BigNumber((t._s?"-":"")+(t._d.slice(0,t._f).join("")||"0"))}valueOf(t,i){return this.normalizeOperand(this).toString(t,i)}toString(t,i,e){function r(t){var i,e,r=new Smart.Utilities.BigNumber(2),s=[];e=void 0===t?n:t;do{i=e.mod(r),s.push(i.toString()),e=e.subtract(i).divide(r).intPart()}while(1===e.compare(new Smart.Utilities.BigNumber(0)));return s.reverse().join("")}let n,s,a;if(Smart.Utilities.BigNumber.bigIntSupport?(n=this,s=Array.isArray(n._d)?(n._s?"-":"")+(n._d.slice(0,n._f).join("")||"0")+(n._f!=n._d.length?"."+n._d.slice(n._f).join(""):""):this._d.toString()):(n=this.normalizeOperand(this),s=(n._s?"-":"")+(n._d.slice(0,n._f).join("")||"0")+(n._f!=n._d.length?"."+n._d.slice(n._f).join(""):"")),void 0===t||10===t)return s;if(n.compare(0)>-1)switch(t){case 2:a=r(),e&&(a=a.padStart(i,"0"));break;case 8:a=function(t){for(var i="";t.length%3!=0;)t="0"+t;for(var e=t.length/3;e>=1;e--){var r=t[3*e-3]+""+t[3*e-2]+t[3*e-1];i=parseInt(r,2).toString(8)+""+i}return i}(r());break;case 16:a=function(t){for(var i="";t.length%4!=0;)t="0"+t;for(var e=t.length/4;e>=1;e--){var r=t[4*e-4]+""+t[4*e-3]+t[4*e-2]+t[4*e-1];i=parseInt(r,2).toString(16)+""+i}return i}(r()).toUpperCase(),e&&(a=a.padStart(i/4,"0"))}else a=function(t,i,e){var r="";for(String.prototype.repeat&&(t="0".repeat(e-t.length)+t);t.length<e;)t="0"+t;for(var n=!0,s="",a=(r=(r=(r=(r=t.replace(/0/g,"a")).replace(/1/g,"b")).replace(/a/g,"1")).replace(/b/g,"0")).length-1;a>=0;a--){var l;"0"===r.charAt(a)?!0===n?(l="1",n=!1):l="0":l=!0===n?"0":"1",s=l+""+s}switch(i){case 2:return s;case 8:var o,u;switch(e){case 8:o=3,u="0";break;case 16:o=6,u="00";break;case 32:o=11,u="0";break;case 64:o=22,u="00"}s=u+s;for(var _="",g=o;g>=1;g--){var m=s[3*g-3]+""+s[3*g-2]+s[3*g-1];_=parseInt(m,2).toString(8)+""+_}return _;case 16:var d;switch(e){case 8:d=2;break;case 16:d=4;break;case 32:d=8;break;case 64:d=16}for(var f="",h=d;h>=1;h--){var p=s[4*h-4]+""+s[4*h-3]+s[4*h-2]+s[4*h-1];f=parseInt(p,2).toString(16)+""+f}return f.toUpperCase()}}(r(n.negate()),t,i);return a}_zeroes(t,i,e){var r=["push","unshift"][e||0];for(++i;--i;t[r](0));return t}round(){if("_rounding"in this)return this;var t,i,e,r,n=Smart.Utilities.BigNumber,s=this.roundType,a=this._d;for(this._rounding=!0;this._f>1&&!a[0];--this._f,a.shift());for(t=this._f,e=a[i=this.precision+t];a.length>t&&!a[a.length-1];a.pop());return r=(this._s?"-":"")+(i-t?"0."+this._zeroes([],i-t-1).join(""):"")+1,a.length>i&&(e&&s!=n.DOWN&&(s==n.UP||(s==n.CEIL?!this._s:s==n.FLOOR?this._s:s==n.HALF_UP?e>=5:s==n.HALF_DOWN?e>5:s==n.HALF_EVEN&&(e>=5&&1&a[i-1])))&&this.add(r),a.splice(i,a.length-i)),delete this._rounding,this}isZero(){return 1===this._d.length&&0===this._d[0]}normalizeOperand(t){return t instanceof Smart.Utilities.BigNumber&&"bigint"==typeof t._d?new Smart.Utilities.BigNumber(t._d.toString()):t}})}});
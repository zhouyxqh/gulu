(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{194:function(t,s,n){"use strict";var o=n(4),e=n(11),r=n(15),a=n(70),i=n(68),c=n(6),l=n(93).f,d=n(92).f,u=n(8).f,f=n(91).trim,v=o.Number,g=v,p=v.prototype,m="Number"==r(n(69)(p)),h="trim"in String.prototype,C=function(t){var s=i(t,!1);if("string"==typeof s&&s.length>2){var n,o,e,r=(s=h?s.trim():f(s,3)).charCodeAt(0);if(43===r||45===r){if(88===(n=s.charCodeAt(2))||120===n)return NaN}else if(48===r){switch(s.charCodeAt(1)){case 66:case 98:o=2,e=49;break;case 79:case 111:o=8,e=55;break;default:return+s}for(var a,c=s.slice(2),l=0,d=c.length;l<d;l++)if((a=c.charCodeAt(l))<48||a>e)return NaN;return parseInt(c,o)}}return+s};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var s=arguments.length<1?0:t,n=this;return n instanceof v&&(m?c(function(){p.valueOf.call(n)}):"Number"!=r(n))?a(new g(C(s)),n,v):C(s)};for(var _,w=n(7)?l(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;w.length>y;y++)e(g,_=w[y])&&!e(v,_)&&u(v,_,d(g,_));v.prototype=p,p.constructor=v,n(10)(o,"Number",v)}},197:function(t,s,n){},198:function(t,s,n){},207:function(t,s,n){"use strict";var o=n(3),e=n(71)(!0);o(o.P,"Array",{includes:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),n(94)("includes")},208:function(t,s,n){"use strict";var o=n(3),e=n(213);o(o.P+o.F*n(214)("includes"),"String",{includes:function(t){return!!~e(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},212:function(t,s,n){"use strict";var o=n(197);n.n(o).a},213:function(t,s,n){var o=n(72),e=n(16);t.exports=function(t,s,n){if(o(s))throw TypeError("String#"+n+" doesn't accept regex!");return String(e(t))}},214:function(t,s,n){var o=n(2)("match");t.exports=function(t){var s=/./;try{"/./"[t](s)}catch(n){try{return s[o]=!1,!"/./"[t](s)}catch(t){}}return!0}},215:function(t,s,n){"use strict";var o=n(198);n.n(o).a},221:function(t,s,n){"use strict";function o(t){return function(t){if(Array.isArray(t)){for(var s=0,n=new Array(t.length);s<t.length;s++)n[s]=t[s];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n(194),n(207),n(208),n(14),n(23),n(17);var e=function(t){var s=!0;return Object.keys(t).forEach(function(t){["span","offset"].includes(t)||(s=!1)}),s},r={name:"GuluCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:e},narrowPc:{type:Object,validator:e},pc:{type:Object,validator:e},widePc:{type:Object,validator:e}},data:function(){return{gutter:0}},methods:{createClasses:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var n=[];return t.span&&n.push("col-".concat(s).concat(t.span)),t.offset&&n.push("offset-".concat(s).concat(t.offset)),n}},computed:{colClass:function(){var t=this.span,s=this.offset,n=this.ipad,e=this.narrowPc,r=this.pc,a=this.widePc,i=this.createClasses;return o(i({span:t,offset:s})).concat(o(i(n,"ipad-")),o(i(e,"narrow-pc-")),o(i(r,"pc-")),o(i(a,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},a=(n(215),n(1)),i=Object(a.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)},[],!1,null,"1f204e58",null);s.a=i.exports},223:function(t,s,n){"use strict";n(14),n(194);var o={name:"GuluRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach(function(s){s.gutter=t.gutter})}},e=(n(212),n(1)),r=Object(e.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)},[],!1,null,"57b08083",null);s.a=r.exports},231:function(t,s,n){},259:function(t,s,n){"use strict";var o=n(231);n.n(o).a},292:function(t,s,n){"use strict";n.r(s);n(22);var o=n(223),e=n(221),r={components:{GRow:o.a,GCol:e.a},data:function(){return{content:'\n        * {\n          box-sizing: border-box;\n        }\n\n        <g-row class="demoRow" gutter="10">\n          <g-col span="8">\n            <div class="demoCol">8</div>\n          </g-col>\n          <g-col span="8" offset="8">\n            <div class="demoCol">8</div>\n          </g-col>\n        </g-row>\n        <g-row class="demoRow" gutter="10">\n          <g-col span="6" offset="6">\n            <div class="demoCol">6</div>\n          </g-col>\n          <g-col span="6" offset="6">\n            <div class="demoCol">6</div>\n          </g-col>\n        </g-row>\n        <g-row class="demoRow" gutter="10">\n          <g-col span="4">\n            <div class="demoCol">4</div>\n          </g-col>\n          <g-col span="4" offset="4">\n            <div class="demoCol">4</div>\n          </g-col>\n          <g-col span="4" offset="8">\n            <div class="demoCol">4</div>\n          </g-col>\n        </g-row>\n        <g-row class="demoRow" gutter="10">\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2" offset="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2" offset="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2" offset="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2" offset="2">\n            <div class="demoCol">2</div>\n          </g-col>\n        </g-row>\n    '.replace(/^ {8}/gm,"").trim()}}},a=(n(259),n(1)),i=Object(a.a)(r,function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[t._v("设置空隙")]),t._v(" "),t._m(0),t._v(" "),n("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("g-col",{attrs:{span:"8"}},[n("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),n("g-col",{attrs:{span:"8",offset:"8"}},[n("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("g-col",{attrs:{span:"6",offset:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),n("g-col",{attrs:{span:"6",offset:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"4",offset:"4"}},[n("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"4",offset:"8"}},[n("div",{staticClass:"demoCol"},[t._v("4")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2",offset:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2",offset:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2",offset:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2",offset:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])])],1),t._v(" "),t._m(1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content))])])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("预览")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("代码")])])}],!1,null,"4bee1c0e",null);s.default=i.exports}}]);
webpackJsonp([1],{"+3xQ":function(t,n){},"9iEd":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("ul",t._l(t.slots,function(n){return e("li",[t._v(t._s(n.day)+"\n      "),e("ul",t._l(n.startTimes,function(n){return e("li",[t._v(t._s(n.start)+" "+t._s(n.possible))])}))])}))])},i=[],r={render:a,staticRenderFns:i};n.a=r},DRgu:function(t,n,e){"use strict";n.a={name:"BookingInfo",props:{selectedSlot:{type:Object}},data:function(){return{currentSelection:"Current Selected Slot Info Goes Here"}}}},M93x:function(t,n,e){"use strict";function a(t){e("U5ve")}var i=e("xJD8"),r=e("UNBK"),s=e("VU/8"),o=a,c=s(i.a,r.a,!1,o,null,null);n.a=c.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),i=e("M93x");a.a.config.productionTip=!1,new a.a({el:"#app",template:"<App/>",components:{App:i.a}})},U5ve:function(t,n){},UNBK:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("Calendar",{attrs:{slots:t.slots}}),t._v(" "),e("BookingInfo")],1)},i=[],r={render:a,staticRenderFns:i};n.a=r},YT0m:function(t,n,e){"use strict";n.a={name:"Calendar",props:{slots:{type:Array}}}},iyFI:function(t,n,e){"use strict";function a(t){e("+3xQ")}var i=e("YT0m"),r=e("9iEd"),s=e("VU/8"),o=a,c=s(i.a,r.a,!1,o,"data-v-57c1b8a9",null);n.a=c.exports},"jt+1":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("p",[t._v(t._s(t.currentSelection))])])},i=[],r={render:a,staticRenderFns:i};n.a=r},nOtp:function(t,n,e){"use strict";var a=e("DRgu"),i=e("jt+1"),r=e("VU/8"),s=r(a.a,i.a,!1,null,null,null);n.a=s.exports},xJD8:function(t,n,e){"use strict";var a=e("iyFI"),i=e("nOtp"),r=e("mtWM"),s=e.n(r);n.a={name:"app",components:{Calendar:a.a,BookingInfo:i.a},data:function(){return{slots:[]}},created:function(){var t=this;s.a.get("https://private-anon-04dc74bb9a-housekeepavailability.apiary-mock.com/availability/?weekBeginning=$this.weekBeginnin)&visitDuration=2.5&postcode=EC1R%203BU").then(function(n){t.slots=n.data}).catch(function(t){console.log(t),alert("We were unable to find the availability for this week!")})}}}},["NHnr"]);
//# sourceMappingURL=app.b0bf387b815332a8b9ef.js.map
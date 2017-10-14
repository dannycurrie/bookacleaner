webpackJsonp([1],{"+3xQ":function(e,t){},"492k":function(e,t){},"5i+3":function(e,t){},"9SdP":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"footerwrap"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[e._m(0),e._v(" "),s("div",{staticClass:"col-lg-4"},[s("h4",[e._v("2. Select a slot")]),e._v(" "),s("div",{staticClass:"hline-w"}),e._v(" "),""!==e.currentSelection?s("h4",{staticClass:"currentSelectionLabel"},[e._v("You've selected "+e._s(e.currentSelection)+" ")]):e._e(),e._v(" "),""==e.currentSelection?s("h6",[e._v("Select an available slot from the calendar")]):e._e()]),e._v(" "),s("div",{staticClass:"col-lg-4"},[s("h4",[e._v("3. Book your cleaning visit!")]),e._v(" "),s("div",{staticClass:"hline-w"}),e._v(" "),s("p",{staticClass:"book-btn"},[""!==e.currentSelection?s("a",{staticClass:"btn btn-theme",attrs:{href:"#"},on:{click:e.sendBookingRequest}},[e._v("Book this slot!")]):e._e()])])])])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-lg-4"},[s("h4",[e._v("1. Check Availability")]),e._v(" "),s("div",{staticClass:"hline-w"}),e._v(" "),s("p",[e._v("The open slots on the calendar are available for you to book a visit. Simply click on the day and time when you would like your visit to start, and drag the selection to extend your booking.")])])}],i={render:n,staticRenderFns:a};t.a=i},"9iEd":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"cal"}})},a=[],i={render:n,staticRenderFns:a};t.a=i},Aw4U:function(e,t,s){"use strict";function n(e){var t=[];return e.map(function(e){var s=e.day;e.startTimes.map(function(e){var n={};n.start=s+" "+e.start,n.end=s+" "+e.end,n.possible=e.possible,n.selected=!1,t.push(n)})}),t}function a(e,t,s){return{start:e.start?e.start.format("YYYY-MM-DD HH:mm:ss"):e.format("YYYY-MM-DD HH:mm:ss"),end:t&&e.end?e.end.format("YYYY-MM-DD HH:mm:ss"):void 0,selected:s}}function i(e,t){var s=void 0;if(!(s=t.find(function(t){return t.start===e.start}))){var n=new Date(e.start);30===n.getMinutes()&&n.setMinutes(0),s=t.find(function(e){return e.start===d(n).format("YYYY-MM-DD HH:mm:ss")})}return s}function o(e){if(e.start&&e.end){var t=new Date(e.start),s=(new Date(e.end),l(e));return d(t).format("MMMM Do h:mma")+" for "+s+(1===s?" hour":" hours")}throw{name:"TypeError",message:"Unrecognised timeslot format: must have start and end: "+u()(e)}}function r(e){if(e.start&&e.end){return{day:e.start.substring(0,10),startTime:{start:e.start.substring(11),end:e.end.substring(11)},visitDuration:l(e)}}throw{name:"TypeError",message:"Unrecognised timeslot format "+u()(e)}}function l(e){var t=new Date(e.start),s=new Date(e.end);return Math.abs(t-s)/36e5}Object.defineProperty(t,"__esModule",{value:!0}),t.createTimeSlotsFromAPIData=n,t.createSlotFromEvent=a,t.findMatchingTimeSlot=i,t.getReadableTimeSlotString=o,t.createBookingRequestFromTimeSlot=r;var c=s("mvHQ"),u=s.n(c),d=s("PJh5")},DRgu:function(e,t,s){"use strict";var n=s("Aw4U");t.a={name:"BookingInfo",props:{selectedTimeSlot:{type:Object}},data:function(){return{currentSelection:""}},watch:{selectedTimeSlot:{handler:function(){if(!this.selectedTimeSlot)return void(this.currentSelection="");this.currentSelection=n.getReadableTimeSlotString(this.selectedTimeSlot)},deep:!0}},methods:{sendBookingRequest:function(){this.$emit("sendBookingRequest")}}}},JKNq:function(e,t){},M93x:function(e,t,s){"use strict";function n(e){s("U5ve")}var a=s("xJD8"),i=s("UNBK"),o=s("VU/8"),r=n,l=o(a.a,i.a,!1,r,null,null);t.a=l.exports},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),a=s("M93x");s("5i+3"),n.a.config.productionTip=!1,new n.a({el:"#app",template:"<App/>",components:{App:a.a}})},U5ve:function(e,t){},UNBK:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Calendar",{attrs:{timeSlots:e.timeSlots},on:{timeSlotSelected:e.timeSlotSelected}}),e._v(" "),s("BookingInfo",{attrs:{selectedTimeSlot:e.selectedTimeSlot},on:{sendBookingRequest:e.requestBooking}})],1)},a=[],i={render:n,staticRenderFns:a};t.a=i},YT0m:function(e,t,s){"use strict";var n=s("Aw4U"),a={};t.a={name:"Calendar",props:{timeSlots:{type:Array}},created:function(){a=s("cLFQ").calendarWrapper(this)},data:function(){return{init:!1}},watch:{timeSlots:{handler:function(){this.init?a.refreshCalendar():(a.initCalendar(),this.init=!0)},deep:!0}},methods:{selectSlot:function(e){var t=n.createSlotFromEvent(e,!1,!0);this.$emit("timeSlotSelected",t)},changeSlotDuration:function(e){var t=n.createSlotFromEvent(e,!0,!0);this.$emit("timeSlotSelected",t)}}}},cLFQ:function(e,t,s){"use strict";function n(e){var t=e,s=function(e){console.log(e);var t=[];return e&&(t=e.filter(function(e){return e.selected||!e.possible}).map(function(e){return e.selected?(e.color="#00B3FE",e.editble=!0,e.durationEditable=!0,e.title="Selected"):(e.color="#384452",e.title="Not available"),e})),t};return{unavailableColor:function(){return"#384452"},selectedColour:function(){return"#00B3FE"},initCalendar:function(){t.cal=i()(t.$el);var e={lang:"en",header:!1,height:"auto",themeSystem:"bootstrap3",defaultView:"agendaWeek",minTime:"08:00:00",maxTime:"17:00:00",allDaySlot:!1,eventTextColor:"white",firstDay:1,eventOverlap:!1,timeFormat:"HH:mm",events:s(t.timeSlots),dayClick:t.selectSlot,eventResize:function(e){t.changeSlotDuration(e)}};return console.log("initiating calendar"),t.cal.fullCalendar(e),e.events&&e.events.length>0&&t.cal.fullCalendar("gotoDate",e.events[0].start),t},createFCEvents:s,refreshCalendar:function(){console.log("refreshing calendar"),t.cal.fullCalendar("removeEvents"),t.cal.fullCalendar("addEventSource",s(t.timeSlots))}}}Object.defineProperty(t,"__esModule",{value:!0}),t.calendarWrapper=n;var a=s("7t+N"),i=s.n(a);s("olwm")},iyFI:function(e,t,s){"use strict";function n(e){s("+3xQ")}var a=s("YT0m"),i=s("9iEd"),o=s("VU/8"),r=n,l=o(a.a,i.a,!1,r,"data-v-57c1b8a9",null);t.a=l.exports},"j/Ql":function(e,t){},"ks+/":function(e,t){},nOtp:function(e,t,s){"use strict";function n(e){s("JKNq")}var a=s("DRgu"),i=s("9SdP"),o=s("VU/8"),r=n,l=o(a.a,i.a,!1,r,"data-v-2d60f5e8",null);t.a=l.exports},uslO:function(e,t,s){function n(e){return s(a(e))}function a(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var i={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};n.keys=function(){return Object.keys(i)},n.resolve=a,e.exports=n,n.id="uslO"},xJD8:function(e,t,s){"use strict";var n=s("iyFI"),a=s("nOtp"),i=s("mtWM"),o=s.n(i),r=s("Aw4U");s("ks+/"),s("5i+3"),s("j/Ql"),s("492k"),t.a={name:"app",components:{Calendar:n.a,BookingInfo:a.a},data:function(){return{timeSlots:[],selectedTimeSlot:{}}},created:function(){var e=this;o.a.get("https://private-anon-04dc74bb9a-housekeepavailability.apiary-mock.com/availability/?weekBeginning=$this.weekBeginnin)&visitDuration=2.5&postcode=EC1R%203BU").then(function(t){e.timeSlots=r.createTimeSlotsFromAPIData(t.data)}).catch(function(e){console.log(e),alert("We were unable to find the availability for this week!")})},methods:{timeSlotSelected:function(e){this.timeSlots.map(function(e){return e.selected=!1}),this.selectedTimeSlot=r.findMatchingTimeSlot(e,this.timeSlots),this.selectedTimeSlot?(this.selectedTimeSlot.selected=!0,e.end&&(this.selectedTimeSlot.end=e.end)):console.log("Invalid selection",e)},requestBooking:function(){var e=r.createBookingRequestFromTimeSlot(this.selectedTimeSlot);o.a.post("https://private-anon-04dc74bb9a-housekeepavailability.apiary-mock.com/book/",e).then(function(e){201===e.status?(console.log(e.data),alert("success! Booked session with "+e.data.cleaner.name)):alert("There was an issue requesting your booking!")}).catch(function(e){alert("Unable to confirm booking at this time",e)})}}}}},["NHnr"]);
//# sourceMappingURL=app.b076f05fcced8b12d253.js.map
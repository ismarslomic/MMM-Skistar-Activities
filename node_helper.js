/*! *****************************************************************************
  mmm-skistar-activities
  Version 1.0.0

  Magic Mirror example module in Typescript
  Please submit bugs at https://github.com/ismarslomic/MMM-Skistar-Activities/issues

  (c) ismar@slomic.no
  Licence: MIT

  This file is auto-generated. Do not edit.
***************************************************************************** */
"use strict";var e=require("node_helper"),t=require("logger"),o=require("https");function n(e){var t=Object.create(null);return e&&Object.keys(e).forEach((function(o){if("default"!==o){var n=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,n.get?n:{enumerable:!0,get:function(){return e[o]}})}})),t.default=e,Object.freeze(t)}var r,a=n(e),c=n(t),i=n(o);!function(e){e.GREETINGS_TEXT_REQUEST="GREETINGS_TEXT_REQUEST",e.GREETINGS_TEXT_RESPONSE="GREETINGS_TEXT_RESPONSE"}(r||(r={})),module.exports=a.create({start(){c.debug(`${this.name} is started!`)},stop(){c.debug(`${this.name} is started!`)},async socketNotificationReceived(e,t){if(e===r.GREETINGS_TEXT_REQUEST){c.debug(`${this.name} received a socket notification: '${e}' with config: ${JSON.stringify(t)}`);const o={hostname:"www.skistar.com",port:443,path:"/__api/calendar/find/",method:"POST",headers:{"Accept-Language":"en","Content-Type":"application/json","Content-Length":JSON.stringify({fromDate:"2023-03-11",toDate:"2023-03-11",destinationFilter:"hemsedal",areaFilter:["5fa13805c9e29924c09d74ef","5fa1380cc9e29924c09d74f0"],categoryFilter:["5fa13880c9e29924c09d74f5","5fa13936c9e29924c09d74f6","5fe0c69fc9e2993b906dbcc1","5ef34bccc9e29903b8e808ad"],skip:null,take:18}).length}},n=i.request(o,(e=>{console.log("statusCode:",e.statusCode),console.log("headers:",e.headers),e.on("data",(e=>{console.log("data:",e);const t={text:`${this.name} says: ${e[0].Heading}`,lastUpdated:Date.now()};this.sendSocketNotification(r.GREETINGS_TEXT_RESPONSE,t)}))}));n.on("error",(e=>{console.log("error:",e),console.error(e)})),console.log("ending request"),n.end()}else c.error(`${this.name} received unknown socket notification: '${e}'`)}});
//# sourceMappingURL=node_helper.js.map

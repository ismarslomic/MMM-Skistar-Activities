/*! *****************************************************************************
  mmm-skistar-activities
  Version 1.0.0

  Magic Mirror example module in Typescript
  Please submit bugs at https://github.com/ismarslomic/MMM-Skistar-Activities/issues

  (c) ismar@slomic.no
  Licence: MIT

  This file is auto-generated. Do not edit.
***************************************************************************** */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("logger")):"function"==typeof define&&define.amd?define(["logger"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).Log)}(this,(function(t){"use strict";function e(t){var e=Object.create(null);return t&&Object.keys(t).forEach((function(i){if("default"!==i){var a=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:function(){return t[i]}})}})),e.default=t,Object.freeze(e)}var i,a=e(t);!function(t){t.GREETINGS_TEXT_REQUEST="GREETINGS_TEXT_REQUEST",t.GREETINGS_TEXT_RESPONSE="GREETINGS_TEXT_RESPONSE"}(i||(i={})),Module.register("MMM-Skistar-Activities",{defaults:{text:"Hello World!"},start(){a.debug(`${this.name} is starting`),this.loadData(),this.scheduleUpdate(),this.updateDom()},getStyles(){return[this.file("css/MMM-Skistar-Activities.css")]},getTemplate:()=>"templates/MMM-Skistar-Activities.njk",getTemplateData(){return{text:this.state?.text,lastUpdated:new Date(this.state?.lastUpdated).toLocaleString()}},socketNotificationReceived(t,e){t===i.GREETINGS_TEXT_RESPONSE?(a.debug(`${this.name} received a socket notification: '${t}' with payload: ${JSON.stringify(e)}`),this.state=e,this.updateDom()):a.error(`${this.name} received unknown socket notification: '${t}'`)},scheduleUpdate(){setInterval((()=>{this.loadData()}),1e4)},loadData(){a.debug(`${this.name} is loading data`),this.sendSocketNotification("GREETINGS_TEXT_REQUEST",this.config)}})}));
//# sourceMappingURL=MMM-Skistar-Activities.js.map

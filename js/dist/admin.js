module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=18)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.extend},,function(t,e,n){"use strict";function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return o}))},,function(t,e){t.exports=flarum.core.compat["components/PermissionGrid"]},,,,,,,,,,function(t,e){t.exports=flarum.core.compat["components/SettingsModal"]},function(t,e){t.exports=flarum.core.compat["components/Switch"]},,function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(0),i=n.n(r),s=n(3),u=n(15),a=n.n(u),p=n(16),c=n.n(p),l="guest-posting.admin.settings.",f=function(t){function e(){return t.apply(this,arguments)||this}Object(s.a)(e,t);var n=e.prototype;return n.title=function(){return i.a.translator.trans(l+"title")},n.form=function(){var t=this;return[m(".Form-group",[m("label",c.a.component({state:"1"===this.setting("guest-posting.enableImport")(),onchange:function(e){t.setting("guest-posting.enableImport")(e?"1":"0")}},i.a.translator.trans(l+"enableImport")))]),m(".Form-group",[m("label",i.a.translator.trans(l+"sessionLifetime")),m("input.FormControl",{type:"number",min:0,step:1,bidi:this.setting("guest-posting.sessionLifetime",48)})]),m(".Form-group",[m("label",i.a.translator.trans(l+"usernames")),m("textarea.FormControl",{bidi:this.setting("guest-posting.usernames","")})])]},e}(a.a),g=n(5),d=n.n(g);function b(t,e){t.has(e)&&(t.get(e).allowGuest=!0)}i.a.initializers.add("guest-posting",(function(){i.a.extensionSettings["alter-guest-posting"]=function(){return i.a.modal.show(new f)},Object(o.extend)(d.a.prototype,"startItems",(function(t){b(t,"start"),b(t,"startDiscussionsWithoutApproval")})),Object(o.extend)(d.a.prototype,"replyItems",(function(t){b(t,"reply"),b(t,"replyWithoutApproval"),b(t,"fof-polls-vote")}))}))}]);
//# sourceMappingURL=admin.js.map
module.exports=function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=17)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/SignUpModal"]},function(t,e,o){"use strict";function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}o.d(e,"a",(function(){return r}))},function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},,function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["helpers/listItems"]},function(t,e){t.exports=flarum.core.compat["components/Badge"]},function(t,e){t.exports=flarum.core.compat["components/CommentPost"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionComposer"]},function(t,e){t.exports=flarum.core.compat["components/ReplyComposer"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},,,function(t,e,o){"use strict";o.r(e),o.d(e,"filterPostMentions",(function(){return k}));var r=o(0),n=o.n(r),s=o(1),u=o(4),a=o.n(u),i=o(6),c=o.n(i),p=o(3),f=o(7),l=o.n(f),d=o(8),b=o.n(d),g=o(2),y=o.n(g),v=o(9),h=o.n(v),x=function(t){function e(){return t.apply(this,arguments)||this}return Object(p.a)(e,t),e.prototype.view=function(){return m(".Alert.Alert-info",m(".container",[m("span.Alert-body",n.a.translator.trans("guest-posting.forum.alert.create-account",{count:n.a.forum.attribute("guestPostCount")})),m("ul.Alert-controls",h()([b.a.component({className:"Button Button--link",onclick:function(){n.a.modal.show(new y.a)}},n.a.translator.trans("guest-posting.forum.alert.signup"))]))]))},e}(l.a);function C(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];var s=t.apply(void 0,o);if(!n.a.forum.attribute("guestPostCount"))return s;var u=x.component();return Array.isArray(s)?(s.unshift(u),s):m("div",[u,s])}var j=o(10),O=o.n(j),P=o(11),A=o.n(P),_=o(12),w=o.n(_),S=o(13),D=o.n(S),G=o(14),M=o.n(G);function k(t){var e=app.store.getById("posts",t.getAttribute("id"));if(e&&e.attribute("guest_username"))return t.setAttribute("discussionid",e.discussion().id()),t.setAttribute("number",e.number()),t.setAttribute("displayname",e.attribute("guest_username")),!0}n.a.initializers.add("guest-posting",(function(){Object(s.override)(a.a.prototype,"hero",C),Object(s.override)(c.a.prototype,"view",C),Object(s.override)(M.a,"replyAction",(function(t,e,o){if(!n.a.session.user&&this.canReply()){var r=n.a.composer.component;n.a.composingReplyTo(this)&&!o||(r=new D.a({user:n.a.session.user,discussion:this}),n.a.composer.load(r)),n.a.composer.show(),e&&n.a.viewingDiscussion(this)&&!n.a.composer.isFullScreen()&&n.a.current.stream.goToNumber("reply");var s=m.deferred();return s.resolve(r),s.promise}return t(e,o)})),Object(s.override)(a.a.prototype,"newDiscussionAction",(function(t){if(!n.a.session.user&&n.a.forum.attribute("canStartDiscussion")){var e=new w.a({user:n.a.session.user});n.a.composer.load(e),n.a.composer.show();var o=m.deferred();return o.resolve(e),o.promise}return t()})),Object(s.extend)(A.a.prototype,"headerItems",(function(t){var e=this.props.post.attribute("guest_username");e&&(t.has("user")&&t.remove("user"),t.add("guest-user",m(".PostUser",[m("h3",[m("span.Avatar.PostUser-avatar",e.charAt(0).toUpperCase()),m("span.username",e)]),m("ul.PostUser-badges badges",m("li",O.a.component({type:"guest",icon:"fas fa-user-secret",label:n.a.translator.trans("guest-posting.forum.badge.guest")})))]),100))})),Object(s.extend)(y.a.prototype,"init",(function(){this.importGuestContent=!!n.a.forum.attribute("guestPostCount")})),Object(s.extend)(y.a.prototype,"fields",(function(t){var e=this;n.a.forum.attribute("guestPostCount")&&t.add("guest-posting",m(".Form-group",m("div",m("label.checkbox",[m("input",{type:"checkbox",checked:this.importGuestContent,onchange:function(){e.importGuestContent=!e.importGuestContent},disabled:this.loading}),n.a.translator.trans("guest-posting.forum.modal.import",{count:n.a.forum.attribute("guestPostCount")})]))))})),Object(s.extend)(y.a.prototype,"submitData",(function(t){this.importGuestContent&&(t.importGuestContent=this.importGuestContent)}))}))}]);
//# sourceMappingURL=forum.js.map
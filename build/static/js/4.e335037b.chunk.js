(this["webpackJsonpreact-way"]=this["webpackJsonpreact-way"]||[]).push([[4],{334:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__mDGBq",dialogsItems:"Dialogs_dialogsItems__2APIg",activelink:"Dialogs_activelink__1Bo5M",dialog:"Dialogs_dialog__7KRX8",messages:"Dialogs_messages__2_RMF",message:"Dialogs_message__3gs8g"}},340:function(e,s,a){"use strict";a.r(s);a(0);var i=a(148),n=a(1),t=a(334),c=a.n(t),o=a(20),d=function(e){var s="/dialogs/"+e.id;return Object(n.jsx)("div",{className:c.a.dialog+" "+c.a.active,children:Object(n.jsx)(o.b,{to:s,activeClassName:c.a.activelink,children:e.name})})},l=function(e){return Object(n.jsx)("div",{className:c.a.message,children:e.message})},g=a(151),r=a(152),m=a(80),j=a(71),b=Object(j.a)(50),u=Object(r.a)({form:"dialogAddMessageForm"})((function(e){return Object(n.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(n.jsx)("div",{children:Object(n.jsx)(g.a,{component:m.b,name:"newMessageBody",placeholder:"Enter your message",validate:[j.b,b]})}),Object(n.jsx)("button",{children:"Send"})]})})),O=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(n.jsx)(d,{name:e.name,id:e.id})})),i=s.messages.map((function(e){return Object(n.jsx)(l,{message:e.message})}));s.newMessageBody;return Object(n.jsxs)("div",{className:c.a.dialogs,children:[Object(n.jsx)("div",{className:c.a.dialogsItems,children:a}),Object(n.jsxs)("div",{className:c.a.messages,children:[Object(n.jsx)("div",{children:i}),Object(n.jsx)(u,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})]})},_=a(19),v=a(115),f=a(11);s.default=Object(f.d)(Object(_.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(i.b)(s))}}})),v.a)(O)}}]);
//# sourceMappingURL=4.e335037b.chunk.js.map
(this["webpackJsonpreact-way"]=this["webpackJsonpreact-way"]||[]).push([[3],{335:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2UCks",wallpaper:"ProfileInfo_wallpaper__2lFoW",ava:"ProfileInfo_ava__2tpf6"}},336:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__236xh",post:"MyPosts_post__2NRQF"}},337:function(t,e,s){t.exports={item:"Post_item__1Of8q",like:"Post_like__3fibP"}},339:function(t,e,s){"use strict";s.r(e);var a=s(4),n=s(7),o=s(8),c=s(15),i=s(16),r=s(1),u=s(0),p=s.n(u),l=s(335),j=s.n(l),d=s(82),b=s(125),f=s(44),O=function(t){var e=Object(u.useState)(!1),s=Object(f.a)(e,2),a=s[0],n=s[1],o=Object(u.useState)(t.status),c=Object(f.a)(o,2),i=c[0],p=c[1];return Object(u.useEffect)((function(){p(t.status)}),[t.status]),Object(r.jsxs)(r.Fragment,{children:[!a&&Object(r.jsx)("div",{children:Object(r.jsx)("span",{onDoubleClick:function(){n(!0)},children:t.status||"---"})}),a&&Object(r.jsx)("div",{children:Object(r.jsx)("input",{onChange:function(t){p(t.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),t.updateStatus(i)},value:i})})]})},h=function(t){var e=t.profile,s=t.updateStatus,a=t.status;return e?Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:j.a.descriptionBlock,children:[Object(r.jsx)("img",{className:j.a.ava,src:null!=e.photos.large?e.photos.large:b.a,alt:""}),"ava+description",Object(r.jsx)(O,{status:a,updateStatus:s})]})}):Object(r.jsx)(d.a,{})},x=s(116),m=s(336),v=s.n(m),g=s(337),P=s.n(g),_=function(t){return Object(r.jsxs)("div",{className:P.a.item,children:[Object(r.jsx)("img",{src:"https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"}),t.message,Object(r.jsxs)("div",{className:P.a.like,children:[Object(r.jsx)("span",{children:Object(r.jsx)("img",{src:"https://pngimg.com/uploads/like/like_PNG67.png",alt:""})})," ",t.likesCount]})]})},k=s(151),S=s(152),w=s(71),y=s(80),U=Object(w.a)(10),N=p.a.memo((function(t){var e=t.post.map((function(t){return Object(r.jsx)(_,{message:t.message,likesCount:t.likesCount})}));return Object(r.jsxs)("div",{className:v.a.postsBlock,children:[Object(r.jsx)("h3",{children:"My posts"}),Object(r.jsx)("div",{children:Object(r.jsx)(B,{onSubmit:function(e){t.addPost(e.newPostText)}})}),Object(r.jsx)("div",{className:v.a.posts,children:e})]})})),B=Object(S.a)({form:"addPostForm"})((function(t){return Object(r.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(k.a,{component:y.b,name:"newPostText",placeholder:"Add new post",validate:[w.b,U]})}),Object(r.jsx)("button",{children:"add post"})]})})),C=N,I=s(19),F=Object(I.b)((function(t){return{post:t.profilePage.post,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(x.a)(e))}}}))(C),T=function(t){return Object(r.jsxs)("div",{children:[Object(r.jsx)(h,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(r.jsx)(F,{})]})},M=s(14),z=s(115),D=s(11),J=function(t){Object(c.a)(s,t);var e=Object(i.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId),t||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"render",value:function(){return Object(r.jsx)(T,Object(a.a)(Object(a.a)({},this.props),{},{profile:this.props.profile,updateStatus:this.props.updateUserStatus}))}}]),s}(p.a.Component);e.default=Object(D.d)(Object(I.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId}}),{getUserProfile:x.c,getUserStatus:x.d,updateUserStatus:x.e}),M.f,z.a)(J)}}]);
//# sourceMappingURL=3.ddbfd7cf.chunk.js.map
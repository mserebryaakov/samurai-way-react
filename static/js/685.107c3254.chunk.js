"use strict";(self.webpackChunkfirst_app=self.webpackChunkfirst_app||[]).push([[685],{3685:function(e,r,n){n.r(r),n.d(r,{default:function(){return M}});var t=n(5671),o=n(3144),s=n(136),u=n(3668),i=n(2938),a="UsersPage_content__Mdj49",l=n(2791),c=n(5226),f={},p=n(184),g=function(e){var r=Math.ceil(e.totalUserCount/e.pageSize);return(0,p.jsxs)("div",{className:f.paginator,children:[e.currentPage-1!==0&&(0,p.jsx)("span",{onClick:function(){e.updateCurrentPage(e.currentPage-1)},children:"\u041d\u0430\u0437\u0430\u0434 "}),(0,p.jsx)("span",{children:e.currentPage}),(0,p.jsx)("span",{children:"..."}),(0,p.jsx)("span",{children:r-1}),e.currentPage!==r&&(0,p.jsx)("span",{onClick:function(){e.updateCurrentPage(e.currentPage+1)},children:" \u0412\u043f\u0435\u0440\u0435\u0434"})]})},h=function(e){return(0,p.jsxs)("div",{className:a,children:[(0,p.jsx)(c.Z,{isFetching:e.isFetching}),(0,p.jsx)(g,{totalUserCount:e.totalUserCount,pageSize:e.pageSize,updateCurrentPage:e.updateCurrentPage,currentPage:e.currentPage}),e.createUsersElements()]})},d=n(364),v="UserProfile_profile__IG1E-",P="UserProfile_content__nUUwa",C="UserProfile_photo__r9azF",m="UserProfile_profileInfo__aoYuo",w="UserProfile_item__1vzj4",y="UserProfile_divButton__3KehS",j="UserProfile_followButton__vcFGn",k=n(4937),U=n(1523);var _=function(e){return(0,p.jsxs)("div",{className:v,children:[(0,p.jsxs)("div",{className:P,children:[(0,p.jsx)("div",{children:(0,p.jsx)(U.OL,{to:"/profile/"+e.state.id,children:(0,p.jsx)("img",{className:C,src:null===e.state.photos.large?k:e.state.photos.large})})}),(0,p.jsxs)("div",{className:m,children:[(0,p.jsx)("p",{className:w,children:e.state.name}),(0,p.jsxs)("p",{className:w,children:["\u0421\u0442\u0430\u0442\u0443\u0441: ",e.state.status]})]})]}),(0,p.jsx)("div",{className:y,children:e.state.followed?(0,p.jsx)("button",{disabled:e.isFollowingProgress.some((function(r){return r===e.state.id})),className:j,onClick:function(){var r=e.state.id;e.unfollowThunkCreator(r)},children:"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"}):(0,p.jsx)("button",{disabled:e.isFollowingProgress.some((function(r){return r===e.state.id})),className:j,onClick:function(){var r=e.state.id;e.followThunkCreator(r)},children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})})]})},x=n(1103),F=n(7781),z="NOT_FOUND";var N=function(e,r){return e===r};function S(e,r){var n="object"===typeof r?r:{equalityCheck:r},t=n.equalityCheck,o=void 0===t?N:t,s=n.maxSize,u=void 0===s?1:s,i=n.resultEqualityCheck,a=function(e){return function(r,n){if(null===r||null===n||r.length!==n.length)return!1;for(var t=r.length,o=0;o<t;o++)if(!e(r[o],n[o]))return!1;return!0}}(o),l=1===u?function(e){var r;return{get:function(n){return r&&e(r.key,n)?r.value:z},put:function(e,n){r={key:e,value:n}},getEntries:function(){return r?[r]:[]},clear:function(){r=void 0}}}(a):function(e,r){var n=[];function t(e){var t=n.findIndex((function(n){return r(e,n.key)}));if(t>-1){var o=n[t];return t>0&&(n.splice(t,1),n.unshift(o)),o.value}return z}return{get:t,put:function(r,o){t(r)===z&&(n.unshift({key:r,value:o}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(u,a);function c(){var r=l.get(arguments);if(r===z){if(r=e.apply(null,arguments),i){var n=l.getEntries(),t=n.find((function(e){return i(e.value,r)}));t&&(r=t.value)}l.put(arguments,r)}return r}return c.clearCache=function(){return l.clear()},c}function T(e){var r=Array.isArray(e[0])?e[0]:e;if(!r.every((function(e){return"function"===typeof e}))){var n=r.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return r}function b(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];var o=function(){for(var r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];var s,u=0,i={memoizeOptions:void 0},a=t.pop();if("object"===typeof a&&(i=a,a=t.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var l=i,c=l.memoizeOptions,f=void 0===c?n:c,p=Array.isArray(f)?f:[f],g=T(t),h=e.apply(void 0,[function(){return u++,a.apply(null,arguments)}].concat(p)),d=e((function(){for(var e=[],r=g.length,n=0;n<r;n++)e.push(g[n].apply(null,arguments));return s=h.apply(null,e)}));return Object.assign(d,{resultFunc:a,memoizedResultFunc:h,dependencies:g,lastResult:function(){return s},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),d};return o}var E=b(S),A=function(e){return e.usersPage.allUsersProfiles},O=function(e){return e.usersPage.pageSize},Z=function(e){return e.usersPage.totalUserCount},q=function(e){return e.usersPage.currentPage},G=function(e){return e.usersPage.isFetching},I=function(e){return e.usersPage.isFollowingProgress},D=(E(A,(function(e){return e.filter((function(e){return!0}))})),function(e){(0,s.Z)(n,e);var r=(0,u.Z)(n);function n(){var e;(0,t.Z)(this,n);for(var o=arguments.length,s=new Array(o),u=0;u<o;u++)s[u]=arguments[u];return(e=r.call.apply(r,[this].concat(s))).createUsersElements=function(){return e.props.allUsersProfiles.map((function(r){return(0,p.jsx)(_,{state:r,unfollowThunkCreator:e.props.unfollowThunkCreator,isFollowingProgress:e.props.isFollowingProgress,followThunkCreator:e.props.followThunkCreator},r.id)}))},e.updateCurrentPage=function(r){e.props.switchPageGetUsersThunkCreator(r,e.props.pageSize)},e}return(0,o.Z)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(h,{totalUserCount:this.props.totalUserCount,pageSize:this.props.pageSize,updateCurrentPage:this.updateCurrentPage,currentPage:this.props.currentPage,createUsersElements:this.createUsersElements,isFetching:this.props.isFetching})})}}]),n}(l.Component)),M=(0,F.qC)((0,d.$j)((function(e){return{allUsersProfiles:A(e),pageSize:O(e),totalUserCount:Z(e),currentPage:q(e),isFetching:G(e),isFollowingProgress:I(e)}}),{unfollow:i.fv,follow:i.ZN,toggleIsFollowingProgress:i.Ar,getUsersThunkCreator:i.Uk,switchPageGetUsersThunkCreator:i.Z_,followThunkCreator:i.AC,unfollowThunkCreator:i.Ow}),x.D)(D)}}]);
//# sourceMappingURL=685.107c3254.chunk.js.map
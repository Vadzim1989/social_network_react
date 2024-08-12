"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[475],{3475:(e,t,o)=>{o.r(t),o.d(t,{default:()=>E});var n=o(5653),s=o(3003),r=o(5043);const l="Pagination_selectedPage__3bwfi",i="Pagination_pageNumber__2J8uv",c="Pagination_pagination__pQ19m";var a=o(579);const u=e=>{let{totalItemsCount:t,pageSize:o,currentPage:n,onPageChanged:s,portionSize:u}=e,p=Math.ceil(t/o),g=[];for(let r=1;r<=p;r++)g.push(r);(0,r.useEffect)((()=>h(Math.ceil(n/u))),[n,u]);let f=Math.ceil(p/u),[d,h]=r.useState(1),v=(d-1)*u+1,m=d*u;return(0,a.jsxs)("div",{className:c,children:[d>1&&(0,a.jsx)("button",{onClick:()=>{h(d-1)},children:"prev"}),g.filter((e=>e>=v&&e<=m)).map((e=>(0,a.jsx)("span",{className:n===e?l+" "+i:i,onClick:t=>{s(e)},children:e},e))),f>d&&(0,a.jsx)("button",{onClick:()=>{h(d+1)},children:"next"})]})},p="Users_photo__zVekV";var g=o(6457),f=o(5475);const d=e=>{let{followingInProgress:t,unfollow:o,follow:n,user:s}=e;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("span",{children:[(0,a.jsx)("div",{children:(0,a.jsx)(f.k2,{to:"/profile/"+s.id,children:(0,a.jsx)("img",{src:s.photos.small?s.photos.small:g,alt:"ava",className:p})})}),(0,a.jsx)("div",{children:s.followed?(0,a.jsx)("button",{disabled:t.some((e=>e===s.id)),onClick:()=>{o(s.id)},children:"unfollow"}):(0,a.jsx)("button",{disabled:t.some((e=>e===s.id)),onClick:()=>{n(s.id)},children:"follow"})})]}),(0,a.jsxs)("span",{children:[(0,a.jsxs)("span",{children:[(0,a.jsx)("div",{children:s.name}),(0,a.jsx)("div",{children:s.status})]}),(0,a.jsxs)("span",{children:[(0,a.jsx)("div",{children:"u.location.city"}),(0,a.jsx)("div",{children:"u.location.country"})]})]})]})},h=e=>{let{totalUsersCount:t,pageSize:o,currentPage:n,onPageChanged:s,users:r,followingInProgress:l,unfollow:i,follow:c}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)(u,{totalItemsCount:t,pageSize:o,currentPage:n,onPageChanged:s,portionSize:10}),r.map((e=>(0,a.jsx)(d,{followingInProgress:l,unfollow:i,follow:c,user:e},e.id)))]})};var v=o(2480),m=o(7863),w=o(3923);o(9526);function y(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected a function, instead received ".concat(typeof e);if("function"!==typeof e)throw new TypeError(t)}var j=e=>Array.isArray(e)?e:[e];function P(e){const t=Array.isArray(e[0])?e[0]:e;return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected all items to be functions, instead received the following types: ";if(!e.every((e=>"function"===typeof e))){const o=e.map((e=>"function"===typeof e?"function ".concat(e.name||"unnamed","()"):typeof e)).join(", ");throw new TypeError("".concat(t,"[").concat(o,"]"))}}(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}Symbol(),Object.getPrototypeOf({});var x="undefined"!==typeof WeakRef?WeakRef:class{constructor(e){this.value=e}deref(){return this.value}},C=0,b=1;function z(){return{s:C,v:void 0,o:null,p:null}}function k(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=z();const{resultEqualityCheck:n}=t;let s,r=0;function l(){let t=o;const{length:l}=arguments;for(let e=0,o=l;e<o;e++){const o=arguments[e];if("function"===typeof o||"object"===typeof o&&null!==o){let e=t.o;null===e&&(t.o=e=new WeakMap);const n=e.get(o);void 0===n?(t=z(),e.set(o,t)):t=n}else{let e=t.p;null===e&&(t.p=e=new Map);const n=e.get(o);void 0===n?(t=z(),e.set(o,t)):t=n}}const i=t;let c;if(t.s===b)c=t.v;else if(c=e.apply(null,arguments),r++,n){var a,u,p;const e=null!==(a=null===(u=s)||void 0===u||null===(p=u.deref)||void 0===p?void 0:p.call(u))&&void 0!==a?a:s;null!=e&&n(e,c)&&(c=e,0!==r&&r--);s="object"===typeof c&&null!==c||"function"===typeof c?new x(c):c}return i.s=b,i.v=c,c}return l.clearCache=()=>{o=z(),l.resetResultsCount()},l.resultsCount=()=>r,l.resetResultsCount=()=>{r=0},l}function S(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];const s="function"===typeof e?{memoize:e,memoizeOptions:o}:e,r=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];let n,r=0,l=0,i={},c=t.pop();"object"===typeof c&&(i=c,c=t.pop()),y(c,"createSelector expects an output function after the inputs, but received: [".concat(typeof c,"]"));const a={...s,...i},{memoize:u,memoizeOptions:p=[],argsMemoize:g=k,argsMemoizeOptions:f=[],devModeChecks:d={}}=a,h=j(p),v=j(f),m=P(t),w=u((function(){return r++,c.apply(null,arguments)}),...h);const x=g((function(){l++;const e=function(e,t){const o=[],{length:n}=e;for(let s=0;s<n;s++)o.push(e[s].apply(null,t));return o}(m,arguments);return n=w.apply(null,e),n}),...v);return Object.assign(x,{resultFunc:c,memoizedResultFunc:w,dependencies:m,dependencyRecomputations:()=>l,resetDependencyRecomputations:()=>{l=0},lastResult:()=>n,recomputations:()=>r,resetRecomputations:()=>{r=0},memoize:u,argsMemoize:g})};return Object.assign(r,{withTypes:()=>r}),r}var _=S(k),M=Object.assign((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected an object, instead received ".concat(typeof e);if("object"!==typeof e)throw new TypeError(t)}(e,"createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ".concat(typeof e));const o=Object.keys(e),n=t(o.map((t=>e[t])),(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(((e,t,n)=>(e[o[n]]=t,e)),{})}));return n}),{withTypes:()=>M});const F=_([e=>e.usersPage.users],(e=>e.filter((e=>!0)))),I=e=>e.usersPage.pageSize,O=e=>e.usersPage.totalUsersCount,R=e=>e.usersPage.currentPage,U=e=>e.usersPage.isFetching,A=e=>e.usersPage.followingInProgress;class T extends r.Component{constructor(){super(...arguments),this.onPageChanged=e=>{const{pageSize:t}=this.props;this.props.getUsers(e,t)}}componentDidMount(){const{currentPage:e,pageSize:t}=this.props;this.props.getUsers(e,t)}render(){return(0,a.jsx)(a.Fragment,{children:this.props.isFetching?(0,a.jsx)(v.A,{}):(0,a.jsx)(h,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,onPageChanged:this.onPageChanged,unfollow:this.props.unfollow,follow:this.props.follow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress})})}}const E=(0,w.Zz)(m.H,(0,s.Ng)((e=>({users:F(e),pageSize:I(e),totalUsersCount:O(e),currentPage:R(e),isFetching:U(e),followingInProgress:A(e)})),{follow:n.e6,unfollow:n.X2,setCurrentPage:n.Tm,toggleFollowingProgress:n.tL,getUsers:n.lo}))(T)}}]);
//# sourceMappingURL=475.f682450e.chunk.js.map
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8795,2489],{876:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||l;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8795:function(e,t,n){n.r(t),n.d(t,{default:function(){return le}});var a=n(2784),r=n(876),l=n(9702),i=n(6282),o=n(6277),c=n(2587),s=n(3578),u=n(7896);function d(e){return a.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var m=n(1077),p=n(1461),f=n(9817),b=n(1344),h=n(1090),v="menuHtmlItem_dvN_",E=n(9741),g=["item"],y=["item","onItemClick","activePath","level","index"],Z=["item","onItemClick","activePath","level","index"];function k(e){var t=e.item,n=(0,p.Z)(e,g);switch(t.type){case"category":return a.createElement(_,(0,u.Z)({item:t},n));case"html":return a.createElement(C,(0,u.Z)({item:t},n));default:return a.createElement(N,(0,u.Z)({item:t},n))}}function _(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=e.level,i=e.index,s=(0,p.Z)(e,y),d=t.items,b=t.label,h=t.collapsible,v=t.className,g=t.href,Z=function(e){var t=(0,E.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),k=(0,c._F)(t,r),_=(0,c.Mg)(g,r),C=(0,c.uR)({initialState:function(){return!!h&&(!k&&t.collapsed)}}),N=C.collapsed,S=C.setCollapsed;!function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,l=(0,c.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:k,collapsed:N,setCollapsed:S});var T=(0,c.fP)(),O=T.expandedItem,x=T.setExpandedItem;function M(e){void 0===e&&(e=!N),x(e?null:i),S(e)}var w=(0,c.LU)().autoCollapseSidebarCategories;return(0,a.useEffect)((function(){h&&O&&O!==i&&w&&S(!0)}),[h,O,i,S,w]),a.createElement("li",{className:(0,o.Z)(c.kM.docs.docSidebarItemCategory,c.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":N},v)},a.createElement("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},a.createElement(f.Z,(0,u.Z)({className:(0,o.Z)("menu__link",{"menu__link--sublist":h&&!g,"menu__link--active":k}),onClick:h?function(e){null==n||n(t),g?M(!1):(e.preventDefault(),M())}:function(){null==n||n(t)},"aria-current":_?"page":void 0,href:h?null!=Z?Z:"#":Z},s),b),g&&h&&a.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:b}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),M()}})),a.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:N},a.createElement(I,{items:d,tabIndex:N?-1:0,onItemClick:n,activePath:r,level:l+1})))}function C(e){var t=e.item,n=e.level,r=e.index,l=t.value,i=t.defaultStyle,s=t.className;return a.createElement("li",{className:(0,o.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(n),i&&v+" menu__list-item",s),key:r,dangerouslySetInnerHTML:{__html:l}})}function N(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=e.level,i=(e.index,(0,p.Z)(e,Z)),s=t.href,d=t.label,m=t.className,v=(0,c._F)(t,r);return a.createElement("li",{className:(0,o.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(l),"menu__list-item",m),key:d},a.createElement(f.Z,(0,u.Z)({className:(0,o.Z)("menu__link",{"menu__link--active":v}),"aria-current":v?"page":void 0,to:s},(0,b.Z)(s)&&{onClick:n?function(){return n(t)}:void 0},i),(0,b.Z)(s)?d:a.createElement("span",null,d,a.createElement(h.Z,null))))}var S=["items"];function T(e){var t=e.items,n=(0,p.Z)(e,S);return a.createElement(c.D_,null,t.map((function(e,t){return a.createElement(k,(0,u.Z)({key:t,item:e,index:t},n))})))}var I=(0,a.memo)(T),O="sidebar_Phem",x="sidebarWithHideableNavbar_OgHk",M="sidebarHidden_CDVn",w="sidebarLogo_CQQ7",P="menu_L8R3",L="menuWithAnnouncementBar_pNFu",A="collapseSidebarButton_mKUW",D="collapseSidebarButtonIcon_X2a5";function j(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",A),onClick:t},a.createElement(d,{className:D}))}function F(e){var t,n,r=e.path,l=e.sidebar,i=e.onCollapse,u=e.isHidden,d=function(){var e=(0,c.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,c.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),m=(0,c.LU)(),p=m.navbar.hideOnScroll,f=m.hideableSidebar;return a.createElement("div",{className:(0,o.Z)(O,(t={},t[x]=p,t[M]=u,t))},p&&a.createElement(s.Z,{tabIndex:-1,className:w}),a.createElement("nav",{className:(0,o.Z)("menu thin-scrollbar",P,(n={},n[L]=d,n))},a.createElement("ul",{className:(0,o.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(I,{items:l,activePath:r,level:1}))),f&&a.createElement(j,{onClick:i}))}var B=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,o.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(I,{items:n,activePath:r,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function H(e){return a.createElement(c.Cv,{component:B,props:e})}var R=a.memo(F),W=a.memo(H);function U(e){var t=(0,c.iP)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(R,e),r&&a.createElement(W,e))}var z=n(9854),V=n(3837),Y=n(456),q="details_ZdG1";function J(e){var t=Object.assign({},e);return a.createElement(c.PO,(0,u.Z)({},t,{className:(0,o.Z)("alert alert--info",q,t.className)}))}var K=["mdxType","originalType"];var X={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,p.Z)(r,K));return a.createElement(e.props.originalType,l)}return e}(e)}));return a.createElement(z.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||a.isValidElement(e)&&t.includes(e.props.mdxType)}))?a.createElement("code",e):a.createElement(V.Z,e)},a:function(e){return a.createElement(f.Z,e)},pre:function(e){var t;return a.createElement(V.Z,(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(J,(0,u.Z)({},e,{summary:n}),r)},h1:function(e){return a.createElement(Y.Z,(0,u.Z)({as:"h1"},e))},h2:function(e){return a.createElement(Y.Z,(0,u.Z)({as:"h2"},e))},h3:function(e){return a.createElement(Y.Z,(0,u.Z)({as:"h3"},e))},h4:function(e){return a.createElement(Y.Z,(0,u.Z)({as:"h4"},e))},h5:function(e){return a.createElement(Y.Z,(0,u.Z)({as:"h5"},e))},h6:function(e){return a.createElement(Y.Z,(0,u.Z)({as:"h6"},e))}},Q=n(2489),G="backToTopButton_EOoS",$="backToTopButtonShow_Iijp";function ee(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}function te(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],l=(0,a.useRef)(!1),i=ee(),s=i.smoothScrollTop,u=i.cancelScrollToTop;return(0,c.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(l.current)l.current=!1;else{var i=n<a;if(i||u(),n<300)r(!1);else if(i){var o=document.documentElement.scrollHeight;n+window.innerHeight<o&&r(!0)}else r(!1)}})),(0,c.SL)((function(e){e.location.hash&&(l.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",c.kM.common.backToTopButton,G,(e={},e[$]=n,e)),type:"button",onClick:function(){return s()}})}var ne=n(3181),ae={docPage:"docPage_CtYO",docMainContainer:"docMainContainer_MzcF",docSidebarContainer:"docSidebarContainer_RZnn",docMainContainerEnhanced:"docMainContainerEnhanced_iNMK",docSidebarContainerHidden:"docSidebarContainerHidden_fip4",collapsedDocSidebar:"collapsedDocSidebar_Jm0e",expandSidebarButtonIcon:"expandSidebarButtonIcon_JZ7J",docItemWrapperEnhanced:"docItemWrapperEnhanced_rnx6"};function re(e){var t,n,l,s=e.currentDocRoute,u=e.versionMetadata,p=e.children,f=e.sidebarName,b=(0,c.Vq)(),h=u.pluginId,v=u.version,E=(0,a.useState)(!1),g=E[0],y=E[1],Z=(0,a.useState)(!1),k=Z[0],_=Z[1],C=(0,a.useCallback)((function(){k&&_(!1),y((function(e){return!e}))}),[k]);return a.createElement(i.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadata:{version:v,tag:(0,c.os)(h,v)}},a.createElement("div",{className:ae.docPage},a.createElement(te,null),b&&a.createElement("aside",{className:(0,o.Z)(c.kM.docs.docSidebarContainer,ae.docSidebarContainer,(t={},t[ae.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(ae.docSidebarContainer)&&g&&_(!0)}},a.createElement(U,{key:f,sidebar:b,path:s.path,onCollapse:C,isHidden:k}),k&&a.createElement("div",{className:ae.collapsedDocSidebar,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:C,onClick:C},a.createElement(d,{className:ae.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,o.Z)(ae.docMainContainer,(n={},n[ae.docMainContainerEnhanced]=g||!b,n))},a.createElement("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",ae.docItemWrapper,(l={},l[ae.docItemWrapperEnhanced]=g,l))},a.createElement(r.Zo,{components:X},p)))))}function le(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,i=t.find((function(e){return(0,ne.LX)(r.pathname,e)}));if(!i)return a.createElement(Q.default,null);var o=i.sidebar,s=o?n.docsSidebars[o]:null;return a.createElement(a.Fragment,null,a.createElement(z.Z,null,a.createElement("html",{className:n.className})),a.createElement(c.qu,{version:n},a.createElement(c.bT,{sidebar:s},a.createElement(re,{currentDocRoute:i,versionMetadata:n,sidebarName:o},(0,l.H)(t,{versionMetadata:n})))))}},456:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7896),r=n(1461),l=n(2784),i=n(6277),o=n(1077),c=n(2587),s="anchorWithStickyNavbar_UUsI",u="anchorWithHideOnScrollNavbar_oSsD",d=["as","id"],m=["as"];function p(e){var t,n=e.as,m=e.id,p=(0,r.Z)(e,d),f=(0,c.LU)().navbar.hideOnScroll;return m?l.createElement(n,(0,a.Z)({},p,{className:(0,i.Z)("anchor",(t={},t[u]=f,t[s]=!f,t)),id:m}),p.children,l.createElement("a",{className:"hash-link",href:"#"+m,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(n,p)}function f(e){var t=e.as,n=(0,r.Z)(e,m);return"h1"===t?l.createElement("h1",(0,a.Z)({},n,{id:void 0}),n.children):l.createElement(p,(0,a.Z)({as:t},n))}},2489:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var a=n(2784),r=n(6282),l=n(1077);function i(){return a.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);
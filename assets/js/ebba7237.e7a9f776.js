"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[613],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,d=u["".concat(s,".").concat(m)]||u[m]||y[m]||i;return t?n.createElement(d,c(c({ref:r},p),{},{components:t})):n.createElement(d,c({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=m;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[u]="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6775:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const i={},c=void 0,o={unversionedId:"DSA BLOGS/BinarySearch/binarysearch",id:"DSA BLOGS/BinarySearch/binarysearch",title:"binarysearch",description:"Binary Search is a searching algorithm .",source:"@site/docs/DSA BLOGS/BinarySearch/binarysearch.md",sourceDirName:"DSA BLOGS/BinarySearch",slug:"/DSA BLOGS/BinarySearch/",permalink:"/crisptechy/docs/DSA BLOGS/BinarySearch/",draft:!1,editUrl:"https://github.com/pratikkumar399/crisptechy/tree/master/docs/DSA BLOGS/BinarySearch/binarysearch.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"DSA GUIDES",permalink:"/crisptechy/docs/category/dsa-guides"},next:{title:"binarysearch",permalink:"/crisptechy/docs/DSA BLOGS/BinarySearch/"}},s={},l=[],p={toc:l},u="wrapper";function y(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Binary Search is a searching algorithm .\nSearch time is O(log n) where n is the number of elements in the binary search . :)"),(0,a.kt)("p",null,"Code for binary Search : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"\n    // given an array and we have to find a target element\n    int start = 0;\n    int end = arr.size() -1; \n\n    while (start < end){\n        int mid = start + (start - end)/2 ;\n        if(mid == target){\n            answer = arr[mid];\n        }\n        else if(mid > target){\n            start = mid + 1 \n        }\n        else{\n            end = mid - 1 ;\n        }\n    }\n    \n\n")))}y.isMDXComponent=!0}}]);
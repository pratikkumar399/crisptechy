"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[52],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,m=u["".concat(s,".").concat(d)]||u[d]||y[d]||c;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<c;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1335:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const c={},i=void 0,o={unversionedId:"dsaconcepts/BinarySearch/binarysearch",id:"dsaconcepts/BinarySearch/binarysearch",title:"binarysearch",description:"Binary Search is a searching algorithm .",source:"@site/docs/dsaconcepts/BinarySearch/binarysearch.md",sourceDirName:"dsaconcepts/BinarySearch",slug:"/dsaconcepts/BinarySearch/",permalink:"/crisptechy/docs/dsaconcepts/BinarySearch/",draft:!1,editUrl:"https://github.com/pratikkumar399/crisptechy/tree/master/docs/dsaconcepts/BinarySearch/binarysearch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OOPS in C++",permalink:"/crisptechy/docs/OOPS/OOPS_IN_CPP"},next:{title:"Knapsack",permalink:"/crisptechy/docs/dsaconcepts/DynamicProgramming/KnapSack/"}},s={},p=[],l={toc:p},u="wrapper";function y(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Binary Search is a searching algorithm .\nSearch time is O(log n) where n is the number of elements in the binary search . :)"),(0,a.kt)("p",null,"Code for binary Search : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"\n    // given an array and we have to find a target element\n    int start = 0;\n    int end = arr.size() -1; \n\n    while (start < end){\n        int mid = start + (start - end)/2 ;\n        if(mid == target){\n            answer = arr[mid];\n        }\n        else if(mid > target){\n            start = mid + 1 \n        }\n        else{\n            end = mid - 1 ;\n        }\n    }\n    \n\n")))}y.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[2835],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(t),d=i,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(f,s(s({ref:n},l),{},{components:t})):r.createElement(f,s({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5838:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const a={},s=void 0,o={unversionedId:"InteviewQuestions/RepeatAndMissingnumber",id:"InteviewQuestions/RepeatAndMissingnumber",title:"RepeatAndMissingnumber",description:"Repeat and Missing Number Array",source:"@site/interviewseries/InteviewQuestions/RepeatAndMissingnumber.md",sourceDirName:"InteviewQuestions",slug:"/InteviewQuestions/RepeatAndMissingnumber",permalink:"/crisptechy/interviewseries/InteviewQuestions/RepeatAndMissingnumber",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"interviewSeries",previous:{title:"Pow(x,n)",permalink:"/crisptechy/interviewseries/InteviewQuestions/Pow(x,n)"},next:{title:"Reversepairs",permalink:"/crisptechy/interviewseries/InteviewQuestions/Reversepairs"}},p={},c=[{value:"Repeat and Missing Number Array",id:"repeat-and-missing-number-array",level:2},{value:"Problem Description",id:"problem-description",level:3}],l={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"repeat-and-missing-number-array"},"Repeat and Missing Number Array"),(0,i.kt)("h3",{id:"problem-description"},"Problem Description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"You are given a read only array of n integers from 1 to n.\n\nEach integer appears exactly once except A which appears twice and B which is missing.\n\nReturn A and B.\n\nNote: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?\n\nNote that in your output A should precede B.\n")),(0,i.kt)("p",null,"Problem link : ",(0,i.kt)("a",{parentName:"p",href:"https://www.interviewbit.com/problems/repeat-and-missing-number-array/"},"Repeat and Missing Number Array")),(0,i.kt)("p",null,"Lets discuss the brute force appraoch , we need to return the repeating and missing number in the array. We can use two loops and check for every element if there is a duplicate element in the array. If we find a duplicate element we can return it. This approach will take O(n^2) time and O(1) space."),(0,i.kt)("p",null,"Code for brute force approach:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"\n// Brute Force Approach\nint* repeatedNumber(const int* A, int n1, int *len1) {\n    \n    int *res = (int *)malloc(2*sizeof(int));\n    int i,j;\n    for(i=0;i<n1;i++){\n        for(j=i+1;j<n1;j++){\n            if(A[i]==A[j]){\n                res[0]=A[i];\n                break;\n            }\n        }\n    }\n    int sum = 0;\n    for(i=0;i<n1;i++){\n        sum+=A[i];\n    }\n    int sum1 = (n1*(n1+1))/2;\n    res[1] = res[0] + sum1 - sum;\n    *len1 = 2;\n    return res;\n}\n")),(0,i.kt)("p",null,"Let's discuss the optimal approach , we can use a hash table to store the elements of the array and then check if the element is already present in the hash table or not. If it is present then we can return it. This approach will take O(n) time and O(n) space."),(0,i.kt)("p",null,"Code for optimal approach:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"\n// Optimal Approach\nint* repeatedNumber(const int* A, int n1, int *len1) {\n    \n    int *res = (int *)malloc(2*sizeof(int));\n    int i;\n    int *hash = (int *)malloc((n1+1)*sizeof(int));\n    for(i=0;i<=n1;i++){\n        hash[i]=0;\n    }\n    for(i=0;i<n1;i++){\n        hash[A[i]]++;\n    }\n    for(i=1;i<=n1;i++){\n        if(hash[i]==2){\n            res[0]=i;\n        }\n        if(hash[i]==0){\n            res[1]=i;\n        }\n    }\n    *len1 = 2;\n    return res;\n}\n")))}m.isMDXComponent=!0}}]);
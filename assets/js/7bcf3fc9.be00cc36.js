"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[293],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,v=m["".concat(s,".").concat(h)]||m[h]||u[h]||i;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o=void 0,l={unversionedId:"DsaInteviewQuestions/RotateImage",id:"DsaInteviewQuestions/RotateImage",title:"RotateImage",description:"Rotate Image",source:"@site/interviewseries/DsaInteviewQuestions/RotateImage.md",sourceDirName:"DsaInteviewQuestions",slug:"/DsaInteviewQuestions/RotateImage",permalink:"/crisptechy/interviewseries/DsaInteviewQuestions/RotateImage",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"interviewSeries",previous:{title:"Reversepairs",permalink:"/crisptechy/interviewseries/DsaInteviewQuestions/Reversepairs"},next:{title:"Searchin2dMatrix",permalink:"/crisptechy/interviewseries/DsaInteviewQuestions/Searchin2dMatrix"}},s={},p=[{value:"Rotate Image",id:"rotate-image",level:2},{value:"Problem Statement",id:"problem-statement",level:3},{value:"Solution",id:"solution",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"rotate-image"},"Rotate Image"),(0,a.kt)("h3",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"You are given an n x n 2D matrix representing an image. Rotate the image by 90 degrees (clockwise)."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Problem link : ",(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/rotate-image/"},"Rotate Image"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(7609).Z,width:"633",height:"488"})),(0,a.kt)("h3",{id:"solution"},"Solution"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Approach 1 : Brute force",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Create a new matrix of same size"),(0,a.kt)("li",{parentName:"ul"},"Copy the elements of the original matrix to the new matrix in rotated form"))),(0,a.kt)("li",{parentName:"ul"},"Approach 2: Transpose and then reverse each row",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Transpose the matrix"),(0,a.kt)("li",{parentName:"ul"},"Reverse each row")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Brute force ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"\nclass Solution{\npublic:\n    void rotate(vector<vector<int>>& matrix) {\n        int n = matrix.size();\n        vector<vector<int>> res(n, vector<int>(n, 0));\n        for(int i = 0; i < n; i++){\n            for(int j = 0; j < n; j++){\n                res[j][n - i - 1] = matrix[i][j];\n            }\n        }\n        matrix = res;\n    }\n};\n\n")),(0,a.kt)("p",null,"Time Complexity : O(n^2)\nSpace Complexity : O(n^2)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," Now lets look at another approach")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Approach : Transpose and then reverse each row , In this approach we will first transpose the matrix and then reverse each row of the matrix. ")),(0,a.kt)("p",null,"The logic behind this approach is that if we transpose the matrix and then reverse each row, it will be equivalent to rotating the matrix by 90 degrees. By transpose we mean, we will change the rows to columns and columns to rows."),(0,a.kt)("p",null,"Lets write the code for this method : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"\nclass Solution{\npublic:\n    void rotate(vector<vector<int>>& matrix) {\n        int n = matrix.size();\n        for(int i = 0; i < n; i++){\n            for(int j = i; j < n; j++){\n                // transposing the matrix \n                // make rows as columns and columns as rows\n                // by swapping the elements\n                swap(matrix[i][j], matrix[j][i]);\n            }\n        }\n        for(int i = 0; i < n; i++){\n            reverse(matrix[i].begin(), matrix[i].end());\n        }\n    }\n};\n\n")),(0,a.kt)("p",null,"Time Complexity : O(n^2)\nSpace Complexity : O(1) -> Inplace"))}u.isMDXComponent=!0},7609:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-6-355153ea1ca227e8dea57839f798e0e0.png"}}]);
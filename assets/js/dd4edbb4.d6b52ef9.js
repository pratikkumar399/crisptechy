"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[8452],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,h=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={},a=void 0,l={unversionedId:"InteviewQuestions/SetMatrixZero",id:"InteviewQuestions/SetMatrixZero",title:"SetMatrixZero",description:"Set matrix zero",source:"@site/interviewseries/InteviewQuestions/SetMatrixZero.md",sourceDirName:"InteviewQuestions",slug:"/InteviewQuestions/SetMatrixZero",permalink:"/crisptechy/interviewseries/InteviewQuestions/SetMatrixZero",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"interviewSeries",previous:{title:"Searchin2dMatrix",permalink:"/crisptechy/interviewseries/InteviewQuestions/Searchin2dMatrix"},next:{title:"Sort012",permalink:"/crisptechy/interviewseries/InteviewQuestions/Sort012"}},s={},c=[{value:"Set matrix zero",id:"set-matrix-zero",level:2},{value:"Question",id:"question",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"set-matrix-zero"},"Set matrix zero"),(0,i.kt)("h3",{id:"question"},"Question"),(0,i.kt)("p",null,"Given a matrix, if an element is 0, set its entire row and column to 0. Do it in place."),(0,i.kt)("p",null,"Question Link : ",(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/set-matrix-zeroes/"},"Set Matrix Zero")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(3888).Z,width:"512",height:"313"})),(0,i.kt)("p",null,"Let's discuss about the problem ,  what it demands and how to approach the problem."),(0,i.kt)("p",null,"// my approach"),(0,i.kt)("p",null,"\ud83c\udfb1 Step 1  : first find the place where zero lies in the matrix and store them in a set to avoid duplication of the position . Maintain two sets one for row and one for col."),(0,i.kt)("p",null,"\ud83c\udfb1 Step 2 :  Now itereate through the matrix and then simply check if either the row or col any of them is present in the set , if yes then set the value of that position to zero."),(0,i.kt)("p",null,"Code : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"\nclass Solution {\n    public: \n    void setZeroes(vector<vector<int>>& matrix) {\n        int n = matrix.size();\n        int m = matrix[0].size();\n        set<int> row;\n        set<int> col;\n        for(int i = 0 ; i < n ; i++){\n            for(int j = 0 ; j < m ; j++){\n                if(matrix[i][j] == 0){\n                    row.insert(i);\n                    col.insert(j);\n                }\n            }\n        }\n        for(int i = 0 ; i < n ; i++){\n            for(int j = 0 ; j < m ; j++){\n                if(row.count(i) || col.count(j)){\n                    matrix[i][j] = 0;\n                }    \n            }\n        }\n    }\n};\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Time Complexity : O(n*m) "),(0,i.kt)("li",{parentName:"ul"},"Space Complexity : O(n+m)")),(0,i.kt)("p",null,"Another approach to optimize the space used :"),(0,i.kt)("blockquote",null,(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("p",{parentName:"blockquote"},"What we can do is that instead of storing the rows and cols in a set , we can mark the row and cols in which the zero is present by setting the value of the first element of that row and col to zero."))),(0,i.kt)("blockquote",null,(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("p",{parentName:"blockquote"},"Now we can iterate through the matrix and check if the first element of that row or col is zero , if yes then set the value of that position to zero."))),(0,i.kt)("p",null,"Optimized Code : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"\nclass Solution {\n    public: \n\n    void setZeroes(vector<vector<int>>& matrix) {\n        int n = matrix.size();\n        int m = matrix[0].size();\n        bool row = false;\n        bool col = false;\n        for(int i = 0 ; i < n ; i++){\n            for(int j = 0 ; j < m ; j++){\n                if(matrix[i][j] == 0){\n                    if(i == 0) row = true;\n                    if(j == 0) col = true;\n                    matrix[0][j] = 0;\n                    matrix[i][0] = 0;\n                }\n            }\n        }\n        for(int i = 1 ; i < n ; i++){\n            for(int j = 1 ; j < m ; j++){\n                if(matrix[i][0] == 0 || matrix[0][j] == 0){\n                    matrix[i][j] = 0;\n                }\n            }\n        }\n        if(row){\n            for(int i = 0 ; i < m ; i++){\n                matrix[0][i] = 0;\n            }\n        }\n        if(col){\n            for(int i = 0 ; i < n ; i++){\n                matrix[i][0] = 0;\n            }\n        }\n    }\n};\n// Time Complexity : O(n*m) + O(n*m)\n// Space Complexity : O(1) -\n\n")))}m.isMDXComponent=!0},3888:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-34a79639626f683f54bff0fc4e4d42ef.png"}}]);
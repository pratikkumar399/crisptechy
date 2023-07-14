"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[356],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,f=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},s=void 0,i={unversionedId:"InteviewQuestions/PascalsTraingle",id:"InteviewQuestions/PascalsTraingle",title:"PascalsTraingle",description:"Pascals traingle",source:"@site/interviewseries/InteviewQuestions/PascalsTraingle.md",sourceDirName:"InteviewQuestions",slug:"/InteviewQuestions/PascalsTraingle",permalink:"/crisptechy/interviewseries/InteviewQuestions/PascalsTraingle",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"interviewSeries",previous:{title:"Pacific Atlantic Water Flow",permalink:"/crisptechy/interviewseries/InteviewQuestions/PacificAtlanticWaterFlow"},next:{title:"Pow(x,n)",permalink:"/crisptechy/interviewseries/InteviewQuestions/Pow(x,n)"}},l={},c=[{value:"Pascals traingle",id:"pascals-traingle",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pascals-traingle"},"Pascals traingle"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(4866).Z,width:"912",height:"605"})),(0,a.kt)("p",null,"Problem Link : ",(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/pascals-triangle/"},"Pascals Triangle")),(0,a.kt)("p",null,"Problem statement :"),(0,a.kt)("p",null,"Given a non-negative integer numRows, generate the first numRows of Pascal's triangle. In Pascal's triangle, each number is the sum of the two numbers directly above it. "),(0,a.kt)("p",null,"Let's discuss about the problem ,  what it demands and how to approach the problem."),(0,a.kt)("p",null,"This is a very simple problem , we just need to observe the pattern and then we can easily solve the problem."),(0,a.kt)("p",null,"Methods to solve the problem :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Step 1 :  First we need to observe the pattern of the pascals traingle , we can see that the first and the last element of each row is 1 and the middle elements are the sum of the two elements above it.\n\nStep 2 :  Now we can simply iterate through the rows and then iterate through the columns and then set the value of the first and the last element of each row to 1 and then for the middle elements we can simply set the value of the element to the sum of the two elements above it.\n\n")),(0,a.kt)("p",null,"Recursive approach:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"\nclass Solution {\npublic:\n    vector<vector<int>> generate(int numRows) {\n        \n        // base case\n        if(numRows == 0){\n            return {};\n        }\n        if(numRows == 1){\n            return {{1}};\n        }\n        if(numRows == 2){\n            return {{1},{1,1}};\n        }\n\n        // recursive case\n        vector<vector<int>> ans = generate(numRows-1);\n        vector<int> temp;\n        temp.push_back(1);\n        for(int i = 1 ; i < numRows-1 ; i++){\n            temp.push_back(ans[numRows-2][i-1] + ans[numRows-2][i]);\n        }\n        temp.push_back(1);\n        ans.push_back(temp);\n        return ans;\n    }\n};\n\n")),(0,a.kt)("p",null,"Time Complexity : O(n^2)\nSpace Complexity : O(n^2)"),(0,a.kt)("p",null,"Iterative approach: Remember just two values are important for each row , the previous row and the current row. and we can use the previous row to calculate the current row."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Add the values of the current-1 and current position of the previous row to get the current position of the current row.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"\nclass Solution {\n    public: \n\n    vector<vector<int>> generate(int rows){\n        vector<vector<int>> ans;\n        for(int i = 0 ; i < rows ; i++){\n            // base case -> first and last element of each row is 1 \n            vector<int> temp(i+1,1);\n            // middle elements are the sum of the two elements above it.\n            // we are running the loop till i because the number of elements in each row is equal to the row number.\n            for(int j = 1 ; j < i ; j++){\n                temp[j] = ans[i-1][j-1] + ans[i-1][j];\n            }\n            ans.push_back(temp);\n        }\n        return ans;\n\n    }\n};\n\n")),(0,a.kt)("p",null,"Time Complexity : O(n^2)\nSpace Complexity : O(n^2)"))}m.isMDXComponent=!0},4866:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-1-47c6c3b6c1e0f795e1f7d73008adeb5f.png"}}]);
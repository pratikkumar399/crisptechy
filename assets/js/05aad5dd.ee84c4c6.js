"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[5224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={},o=void 0,s={unversionedId:"DsaInteviewQuestions/BestTimetoBuyAndSellStocks",id:"DsaInteviewQuestions/BestTimetoBuyAndSellStocks",title:"BestTimetoBuyAndSellStocks",description:"Best Time to Buy and Sell Stocks",source:"@site/interviewseries/DsaInteviewQuestions/BestTimetoBuyAndSellStocks.md",sourceDirName:"DsaInteviewQuestions",slug:"/DsaInteviewQuestions/BestTimetoBuyAndSellStocks",permalink:"/crisptechy/interviewseries/DsaInteviewQuestions/BestTimetoBuyAndSellStocks",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"interviewSeries",previous:{title:"4sum",permalink:"/crisptechy/interviewseries/DsaInteviewQuestions/4sum"},next:{title:"Course Schedule",permalink:"/crisptechy/interviewseries/DsaInteviewQuestions/CourseSchedule"}},p={},c=[{value:"Best Time to Buy and Sell Stocks",id:"best-time-to-buy-and-sell-stocks",level:2},{value:"Problem Statement",id:"problem-statement",level:3},{value:"Brute Force Approach",id:"brute-force-approach",level:3},{value:"Optimized Approach",id:"optimized-approach",level:3},{value:"Optimized Approach",id:"optimized-approach-1",level:3}],l={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"best-time-to-buy-and-sell-stocks"},"Best Time to Buy and Sell Stocks"),(0,i.kt)("p",null,"Problem: Given an array of stock prices, find the maximum profit that can be made by buying and selling stocks."),(0,i.kt)("h3",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(6974).Z,width:"913",height:"304"})),(0,i.kt)("p",null,"Lets discuss brute force first : "),(0,i.kt)("p",null,"Steps to solve this problem using brute force approach :"),(0,i.kt)("p",null,"1 . Iterate over the array and for each element find the maximum element in the right part of the array."),(0,i.kt)("p",null,"2 . Find the difference between the maximum element and the current element."),(0,i.kt)("p",null,"3 . Return the maximum difference."),(0,i.kt)("h3",{id:"brute-force-approach"},"Brute Force Approach"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"\nclass Solution {\n    public:\n        int maxProfit(vector<int>& prices) {\n            // base case\n            if(prices.size() == 1){\n                return 0;\n            }\n            int max_profit = INT_MIN;\n            for(int i = 0 ; i < prices.size() ; i++){\n                for(int j = i + 1 ; j < prices.size() ; j++){\n                    max_profit = max(max_profit,prices[j] - prices[i]);\n                }\n            }\n            return max_profit;\n        }\n};\n")),(0,i.kt)("p",null,"Time Complexity : O(n^2)\nSpace Complexity : O(1) -> No extra space is used."),(0,i.kt)("h3",{id:"optimized-approach"},"Optimized Approach"),(0,i.kt)("p",null,"Lets discuss optimized approach now :"),(0,i.kt)("p",null,"Steps to solve this problem using optimized approach :"),(0,i.kt)("p",null,"1 . Iterate over the array and for each element find the minimum element in the left part of the array."),(0,i.kt)("p",null,"2 . Find the difference between the current element and the minimum element."),(0,i.kt)("p",null,"3 . Return the maximum difference."),(0,i.kt)("h3",{id:"optimized-approach-1"},"Optimized Approach"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"\nclass Solution {\n    public:\n        int maxProfit(vector<int>& prices) {\n            // base case\n            if(prices.size() == 1){\n                return 0;\n            }\n            int max_profit = INT_MIN;\n            int min_price = INT_MAX;\n            for(int i = 0 ; i < prices.size() ; i++){\n                min_price = min(min_price,prices[i]);\n                max_profit = max(max_profit,prices[i] - min_price);\n            }\n            return max_profit;\n        }\n};\n")),(0,i.kt)("p",null,"Time complexity of this approach : O(n) ->  because we are iterating over the array only once.\nSpace complexity of this approach : O(1) -> No extra space is used."))}m.isMDXComponent=!0},6974:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-5-7ecf8784abcda6068a6de1dd9a3fd44a.png"}}]);
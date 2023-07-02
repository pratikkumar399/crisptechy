"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[4025],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=i,f=m["".concat(u,".").concat(h)]||m[h]||p[h]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[m]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={},a=void 0,s={unversionedId:"InteviewQuestions/2Sum",id:"InteviewQuestions/2Sum",title:"2Sum",description:"Two Sum",source:"@site/interviewseries/InteviewQuestions/2Sum.md",sourceDirName:"InteviewQuestions",slug:"/InteviewQuestions/2Sum",permalink:"/crisptechy/interviewseries/InteviewQuestions/2Sum",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"interviewSeries",next:{title:"3sum",permalink:"/crisptechy/interviewseries/InteviewQuestions/3sum"}},u={},l=[{value:"Two Sum",id:"two-sum",level:2}],c={toc:l},m="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(m,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"two-sum"},"Two Sum"),(0,i.kt)("p",null,"Problem Statement: Given an array of integers, return indices of the two numbers such that they add up to a specific target."),(0,i.kt)("p",null,"You may assume that each input would have exactly one solution, and you may not use the same element twice."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(5458).Z,width:"776",height:"305"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Let's do brute force:\n\nIntuition : For each element, we try to find if there is another element that sums up to the target.\n\nAlgorithm : For each element, we try to find if there is another element that sums up to the target.\n\nComplexity Analysis: \nTime complexity : O(n^2). For each element, we try to find its complement by looping through the rest of array which takes O(n) time. Therefore, the time complexity is O(n^2).\n\nSpace complexity : O(1).\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"\nclass Solution {\n\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        vector<int> result;\n        for (int i = 0; i < nums.size(); i++) {\n            for (int j = i + 1; j < nums.size(); j++) {\n                if (nums[j] == target - nums[i]) {\n                    result.push_back(i);\n                    result.push_back(j);\n                    return result;\n                }\n            }\n        }\n        return result;\n    }\n};\n\n")),(0,i.kt)("p",null,"Let's do better:"),(0,i.kt)("p",null,"-> Intuition : We can reduce the time complexity of looking up a value to O(1) using a hash map that maps a value to its index."),(0,i.kt)("p",null,"-> Algorithm : We iterate through each element in the array, and look up the complement value in the hash table. If it is found, we return the indices."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\n    public:\n        vector<int> twoSum(vector<int>& nums, int target) {\n            unordered_map<int, int> hash;\n            vector<int> result;\n            for (int i = 0; i < nums.size(); i++) {\n                int numberToFind = target - nums[i];\n                //if numberToFind is found in map, return them\n                if (hash.find(numberToFind) != hash.end()) {\n                    //+1 because indices are NOT zero based\n                    result.push_back(hash[numberToFind]); // -> push index of numbers\n                    result.push_back(i);            \n                    return result;\n                }\n                //number was not found. Put it in the map along with its index.\n                hash[nums[i]] = i;\n            }\n            return result;\n        }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Complexity",metastring:"Analysis:","Analysis:":!0},"\nTime complexity : O(n). We traverse the list containing nn elements only once. Each look up in the table costs only O(1) time.\nSpace complexity : O(n). The extra space required depends on the number of items stored in the hash table, which stores at most nn elements.\n\n")))}p.isMDXComponent=!0},5458:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-15-7512cf470bdab772ce81f5f7cb7c4441.png"}}]);
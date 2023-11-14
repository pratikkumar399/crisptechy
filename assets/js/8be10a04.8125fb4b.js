"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[2338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),f=i,h=m["".concat(u,".").concat(f)]||m[f]||p[f]||s;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const s={},a=void 0,o={unversionedId:"DsaInteviewQuestions/4sum",id:"DsaInteviewQuestions/4sum",title:"4sum",description:"4 Sum",source:"@site/interviewseries/DsaInteviewQuestions/4sum.md",sourceDirName:"DsaInteviewQuestions",slug:"/DsaInteviewQuestions/4sum",permalink:"/crisptechy/interviewseries/DsaInteviewQuestions/4sum",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"interviewSeries",previous:{title:"3sum",permalink:"/crisptechy/interviewseries/DsaInteviewQuestions/3sum"},next:{title:"BestTimetoBuyAndSellStocks",permalink:"/crisptechy/interviewseries/DsaInteviewQuestions/BestTimetoBuyAndSellStocks"}},u={},l=[{value:"4 Sum",id:"4-sum",level:2}],c={toc:l},m="wrapper";function p(e){let{components:t,...s}=e;return(0,i.kt)(m,(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"4-sum"},"4 Sum"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Problem Statement: Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(2664).Z,width:"776",height:"370"})),(0,i.kt)("p",null,"Let's do brute force:"),(0,i.kt)("p",null,"Intuition : For each element, we try to find if there is another element that sums up to the target. We can do this by using 2Sum algorithm. We can also use 3Sum algorithm to find 3 elements that sum up to the target. However, this will be O(n^3) time complexity."),(0,i.kt)("p",null,"Complexity Analysis:"),(0,i.kt)("p",null,"Time complexity : O(n^3). For each element, we try to find its complement by looping through the rest of array which takes O(n^2) time. Therefore, the time complexity is O(n^3)."),(0,i.kt)("p",null,"Space complexity : O(1)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<vector<int>> fourSum(vector<int>& nums, int target) {\n    vector<vector<int>> result;\n    int n = nums.size();\n    if (n < 4)\n            return result;\n    // Sort the input array\n    sort(nums.begin(), nums.end());\n\n    for (int a = 0; a < n - 3; ++a) {\n        // Skip duplicate values for a\n        if (a > 0 && nums[a] == nums[a - 1])\n            continue;\n\n        for (int b = a + 1; b < n - 2; ++b) {\n            // Skip duplicate values for b\n            if (b > a + 1 && nums[b] == nums[b - 1])\n                continue;\n\n            int left = b + 1;\n            int right = n - 1;\n\n            while (left < right) {\n                long long sum = static_cast<long long>(nums[a]) + nums[b] + nums[left] + nums[right];\n                if (sum < target) {\n                    ++left;\n                } else if (sum > target) {\n                    --right;\n                } else {\n                    result.push_back({nums[a], nums[b], nums[left], nums[right]});\n\n                    // Skip duplicate values for left and right\n                    while (left < right && nums[left] == nums[left + 1])\n                        ++left;\n                    while (left < right && nums[right] == nums[right - 1])\n                        --right;\n\n                    ++left;\n                    --right;\n                }\n            }\n        }\n    }\n\n    return result;\n    }\n};\n")))}p.isMDXComponent=!0},2664:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-16-f8573ba5f393eacb5684f5c8aabb3888.png"}}]);
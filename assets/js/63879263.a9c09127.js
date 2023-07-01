"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[1414],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},o=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),c=l(n),p=a,d=c["".concat(s,".").concat(p)]||c[p]||h[p]||i;return n?r.createElement(d,m(m({ref:t},o),{},{components:n})):r.createElement(d,m({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,m=new Array(i);m[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:a,m[1]=u;for(var l=2;l<i;l++)m[l]=n[l];return r.createElement.apply(null,m)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={},m=void 0,u={unversionedId:"InteviewQuestions/MaximumSubarray",id:"InteviewQuestions/MaximumSubarray",title:"MaximumSubarray",description:"Maximum Subarray",source:"@site/interviewseries/InteviewQuestions/MaximumSubarray.md",sourceDirName:"InteviewQuestions",slug:"/InteviewQuestions/MaximumSubarray",permalink:"/crisptechy/interviewseries/InteviewQuestions/MaximumSubarray",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"interviewSeries",previous:{title:"MajorityElement",permalink:"/crisptechy/interviewseries/InteviewQuestions/MajorityElement"},next:{title:"MergeIntervals",permalink:"/crisptechy/interviewseries/InteviewQuestions/MergeIntervals"}},s={},l=[{value:"Maximum Subarray",id:"maximum-subarray",level:2},{value:"Problem Statement",id:"problem-statement",level:3},{value:"Brute Force Approach",id:"brute-force-approach",level:3},{value:"Kadane&#39;s Algorithm",id:"kadanes-algorithm",level:3},{value:"Divide and Conquer",id:"divide-and-conquer",level:3}],o={toc:l},c="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,r.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"maximum-subarray"},"Maximum Subarray"),(0,a.kt)("h3",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(3657).Z,width:"895",height:"222"})),(0,a.kt)("p",null,"There are multiple ways to solve this problem : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Brute Force Approach : In this approach we will simply iterate over all the subarrays and then we will find the sum of all the subarrays and then we will return the maximum sum of all the subarrays.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Kadane's Algorithm : In this approach we will iterate over the array and then we will find the maximum sum of the subarray ending at the current index and then we will return the maximum sum of all the subarrays.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Divide and Conquer : In this approach we will divide the array into two parts and then we will find the maximum sum of the subarray in the left part , maximum sum of the subarray in the right part and the maximum sum of the subarray which crosses the middle element and then we will return the maximum of all the three."))),(0,a.kt)("h3",{id:"brute-force-approach"},"Brute Force Approach"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"\nclass Solution {\n\npublic:\n\n    int maxSubArray(vector<int>& nums) {\n\n        // base case\n\n        if(nums.size() == 1){\n\n            return nums[0];\n\n        }\n\n        int max_sum = INT_MIN;\n\n        // iterating over all the subarrays\n\n        for(int i = 0 ; i < nums.size() ; i++){\n\n            int sum = 0;\n\n            for(int j = i ; j < nums.size() ; j++){\n\n                sum += nums[j];\n\n                max_sum = max(max_sum,sum);\n\n            }\n\n        }\n\n        return max_sum;\n\n    }\n\n};\n\n")),(0,a.kt)("h3",{id:"kadanes-algorithm"},"Kadane's Algorithm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"\nclass Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        int sum=0,max_sum=INT_MIN;\n        for(int i = 0 ; i < nums.size() ; i++){\n            // finding the maximum sum of the subarray ending at the current index\n            sum = max(nums[i],sum+nums[i]);\n            // updating the maximum sum of all the subarrays\n            max_sum = max(max_sum,sum);\n        }\n        return max_sum;\n    }\n};\n\n")),(0,a.kt)("h3",{id:"divide-and-conquer"},"Divide and Conquer"),(0,a.kt)("p",null,"Approach :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step 1 :  First we will divide the array into two parts and then we will find the maximum sum of the subarray in the left part , maximum sum of the subarray in the right part and the maximum sum of the subarray which crosses the middle element. "),(0,a.kt)("li",{parentName:"ul"},"Step 2 :  Then we will return the maximum of all the three.")),(0,a.kt)("p",null,"Code : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"\nclass Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        return maxSubArrayHelper(nums,0,nums.size()-1);\n    }\n    int maxSubArrayHelper(vector<int>& nums,int left,int right){\n        // base case\n        if(left == right){\n            return nums[left];\n        }\n        // finding the middle element\n        int mid = left + (right-left)/2;\n        // finding the maximum sum of the subarray in the left part\n        int left_sum = maxSubArrayHelper(nums,left,mid);\n        // finding the maximum sum of the subarray in the right part\n        int right_sum = maxSubArrayHelper(nums,mid+1,right);\n        // finding the maximum sum of the subarray which crosses the middle element\n        int cross_sum = maxCrossingSum(nums,left,mid,right);\n        // returning the maximum of all the three\n        return max(left_sum,max(right_sum,cross_sum));\n    }\n    int maxCrossingSum(vector<int>& nums,int left,int mid,int right){\n        // finding the maximum sum of the subarray which crosses the middle element\n        int sum = 0;\n        int left_sum = INT_MIN;\n        for(int i = mid ; i >= left ; i--){\n            sum += nums[i];\n            left_sum = max(left_sum,sum);\n        }\n        sum = 0;\n        int right_sum = INT_MIN;\n        for(int i = mid+1 ; i <= right ; i++){\n            sum += nums[i];\n            right_sum = max(right_sum,sum);\n        }\n        return left_sum + right_sum;\n    }\n};\n\n")))}h.isMDXComponent=!0},3657:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-3-d470939ebb81e7bbc0a760c8bcd08d97.png"}}]);
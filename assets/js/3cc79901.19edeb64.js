"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[185],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>v});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=l(t),h=i,v=c["".concat(u,".").concat(h)]||c[h]||m[h]||s;return t?r.createElement(v,o(o({ref:n},p),{},{components:t})):r.createElement(v,o({ref:n},p))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=h;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a[c]="string"==typeof e?e:i,o[1]=a;for(var l=2;l<s;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const s={},o=void 0,a={unversionedId:"InteviewQuestions/Reversepairs",id:"InteviewQuestions/Reversepairs",title:"Reversepairs",description:"Reverse Pairs",source:"@site/interviewseries/InteviewQuestions/Reversepairs.md",sourceDirName:"InteviewQuestions",slug:"/InteviewQuestions/Reversepairs",permalink:"/crisptechy/interviewseries/InteviewQuestions/Reversepairs",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"interviewSeries",previous:{title:"RepeatAndMissingnumber",permalink:"/crisptechy/interviewseries/InteviewQuestions/RepeatAndMissingnumber"},next:{title:"RotateImage",permalink:"/crisptechy/interviewseries/InteviewQuestions/RotateImage"}},u={},l=[{value:"Reverse Pairs",id:"reverse-pairs",level:2},{value:"Question Description",id:"question-description",level:3}],p={toc:l},c="wrapper";function m(e){let{components:n,...s}=e;return(0,i.kt)(c,(0,r.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"reverse-pairs"},"Reverse Pairs"),(0,i.kt)("h3",{id:"question-description"},"Question Description"),(0,i.kt)("p",null,"Given an array nums, we call (i, j) an important reverse pair if i < j and nums","[i]"," > 2*nums","[j]","."),(0,i.kt)("p",null,"You need to return the number of important reverse pairs in the given array."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:t(5904).Z,width:"771",height:"371"})),(0,i.kt)("p",null,"Let's see what the question is asking us to do:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"We need to find the number of pairs (i,j) such that i < j and nums[i] > 2*nums[j]\n")),(0,i.kt)("p",null,"Brute force approach:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"We can use two loops and check for each pair if it is satisfying the condition or not.\n")),(0,i.kt)("p",null,"Time Complexity : O(n^2) where n is the size of the array.\nSpace Complexity : O(1)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int reversePairs(vector<int>& nums) {\n        int n = nums.size();\n        int count = 0;\n        for(int i = 0 ; i < n ; i++){\n            for(int j = i+1 ; j < n ; j++){\n                if(nums[i] > 2*nums[j]){\n                    count++;\n                }\n            }\n        }\n        return count;\n    }\n};\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Other ways to solve this :\n\n1.  Use merge sort to solve this problem.\n2.  Use binary search tree to solve this problem.\n")),(0,i.kt)("p",null,"Let's see how merge sort can be used to solve this problem:"),(0,i.kt)("p",null,"Intuition :  We can use merge sort to solve this problem. We can divide the array into two parts and then recursively call the function on the two parts. Then we can merge the two parts and count the number of pairs satisfying the condition."),(0,i.kt)("p",null,"Time Complexity : O(nlogn) where n is the size of the array.\nSpace Complexity : O(n)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int merge(vector<int>& nums,int low,int mid,int high){\n        int count = 0;\n        int j = mid+1;\n        for(int i = low ; i <= mid ; i++){\n            while(j <= high && nums[i] > 2LL*nums[j]){\n                j++;\n            }\n            count += (j-(mid+1));\n        }\n        vector<int> temp;\n        int left = low;\n        int right = mid+1;\n        while(left <= mid && right <= high){\n            if(nums[left] <= nums[right]){\n                temp.push_back(nums[left++]);\n            }\n            else{\n                temp.push_back(nums[right++]);\n            }\n        }\n        while(left <= mid){\n            temp.push_back(nums[left++]);\n        }\n        while(right <= high){\n            temp.push_back(nums[right++]);\n        }\n        for(int i = low ; i <= high ; i++){\n            nums[i] = temp[i-low];\n        }\n        return count;\n    }\n    int mergeSort(vector<int>& nums,int low,int high){\n        if(low >= high){\n            return 0;\n        }\n        int mid = (low+high)/2;\n        int inv = mergeSort(nums,low,mid);\n        inv += mergeSort(nums,mid+1,high);\n        inv += merge(nums,low,mid,high);\n        return inv;\n    }\n    int reversePairs(vector<int>& nums) {\n        return mergeSort(nums,0,nums.size()-1);\n    }\n};\n")))}m.isMDXComponent=!0},5904:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image-14-723acdb68103f33edba9ae577a224c1e.png"}}]);
"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[5911],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),d=i,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return t?r.createElement(h,l(l({ref:n},u),{},{components:t})):r.createElement(h,l({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2403:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const a={},l=void 0,o={unversionedId:"InteviewQuestions/FindtheDuplicateNumber",id:"InteviewQuestions/FindtheDuplicateNumber",title:"FindtheDuplicateNumber",description:"Find the Duplicate Number",source:"@site/interviewseries/InteviewQuestions/FindtheDuplicateNumber.md",sourceDirName:"InteviewQuestions",slug:"/InteviewQuestions/FindtheDuplicateNumber",permalink:"/crisptechy/interviewseries/InteviewQuestions/FindtheDuplicateNumber",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"interviewSeries",previous:{title:"Course Schedule",permalink:"/crisptechy/interviewseries/InteviewQuestions/CourseSchedule"},next:{title:"FloodFill",permalink:"/crisptechy/interviewseries/InteviewQuestions/FloodFill"}},s={},p=[{value:"Find the Duplicate Number",id:"find-the-duplicate-number",level:2},{value:"Problem link : Duplicate Number",id:"problem-link--duplicate-number",level:4}],u={toc:p},c="wrapper";function m(e){let{components:n,...a}=e;return(0,i.kt)(c,(0,r.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"find-the-duplicate-number"},"Find the Duplicate Number"),(0,i.kt)("h4",{id:"problem-link--duplicate-number"},"Problem link : ",(0,i.kt)("a",{parentName:"h4",href:"https://leetcode.com/problems/find-the-duplicate-number/"},"Duplicate Number")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:t(1615).Z,width:"586",height:"315"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Lets discuss the brute force approach first. We can use two loops and check for every element if there is a duplicate element in the array. If we find a duplicate element we can return it. This approach will take O(n^2) time and O(1) space.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Another approach is that we can sort the array and then check for the adjacent elements if they are equal or not. This approach will take O(nlogn) time and O(1) space.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We can use a hash table to store the elements of the array and then check if the element is already present in the hash table or not. If it is present then we can return it. This approach will take O(n) time and O(n) space.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"One more way to solve this problem is to use the array elements as indexes and mark the elements as negative. If we find a negative element then we can return it. This approach will take O(n) time and O(1) space."))),(0,i.kt)("p",null,"Let's code each of the appraoches:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Brute Force Approach")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"\n// Brute Force Approach\nint findDuplicate(vector<int>& nums) {\n    int n = nums.size();\n    for(int i=0;i<n;i++){\n        for(int j=i+1;j<n;j++){\n            if(nums[i]==nums[j]){\n                return nums[i];\n            }\n        }\n    }\n    return -1;\n}\n\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Sorting Approach")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"\n// Sorting Approach\nint findDuplicate(vector<int>& nums) {\n    int n = nums.size();\n    sort(nums.begin(),nums.end());\n    for(int i=0;i<n-1;i++){\n        if(nums[i]==nums[i+1]){\n            return nums[i];\n        }\n    }\n    return -1;\n}\n\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Hash Table Approach")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"\n// Hash Table Approach\nint findDuplicate(vector<int>& nums) {\n    int n = nums.size();\n    unordered_set<int> s;\n    for(int i=0;i<n;i++){\n        if(s.find(nums[i])!=s.end()){\n            return nums[i];\n        }\n        s.insert(nums[i]);\n    }\n    return -1;\n}\n\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Using Array Indexes")),(0,i.kt)("p",null,"Let's explain this approach. We will use the array elements as indexes and mark the elements as negative. If we find a negative element then we can return it. This approach will take O(n) time and O(1) space."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"\n// Using Array Indexes\nint findDuplicate(vector<int>& nums) {\n    int n = nums.size();\n    for(int i=0;i<n;i++){\n        int index = abs(nums[i]);\n        if(nums[index]<0){\n            return index;\n        }\n        nums[index] = -nums[index];\n    }\n    return -1;\n}\n\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Using slow and fast pointers")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"")))}m.isMDXComponent=!0},1615:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image-9-a0e60b8210557f77db412d3a3441c0d2.png"}}]);
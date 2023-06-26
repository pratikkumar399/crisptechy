"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[6187],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,m=u["".concat(o,".").concat(h)]||u[h]||v[h]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>v,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={},l=void 0,s={unversionedId:"InteviewQuestions/MergeIntervals",id:"InteviewQuestions/MergeIntervals",title:"MergeIntervals",description:"MergeIntervals",source:"@site/interviewseries/InteviewQuestions/MergeIntervals.md",sourceDirName:"InteviewQuestions",slug:"/InteviewQuestions/MergeIntervals",permalink:"/crisptechy/interviewseries/InteviewQuestions/MergeIntervals",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"interviewSeries",previous:{title:"MaximumSubarray",permalink:"/crisptechy/interviewseries/InteviewQuestions/MaximumSubarray"},next:{title:"MergeSortedarray",permalink:"/crisptechy/interviewseries/InteviewQuestions/MergeSortedarray"}},o={},p=[{value:"MergeIntervals",id:"mergeintervals",level:2},{value:"Question",id:"question",level:3},{value:"Example",id:"example",level:3}],c={toc:p},u="wrapper";function v(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"mergeintervals"},"MergeIntervals"),(0,i.kt)("h3",{id:"question"},"Question"),(0,i.kt)("p",null,"Given a collection of intervals, merge all overlapping intervals."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(5334).Z,width:"592",height:"269"})),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: [[1,3],[2,6],[8,10],[15,18]]\nOutput: [[1,6],[8,10],[15,18]]\n")),(0,i.kt)("p",null,"Problem Link : ",(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/merge-intervals/"},"Merge Intervals")),(0,i.kt)("p",null,"Let's discuss what this problem demands : "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We are given a collection of intervals, we need to merge all overlapping intervals.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We need to return a new collection of intervals after merging all overlapping intervals."))),(0,i.kt)("p",null,"Now how can we merge the intervals?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We can merge the intervals if the start time of the next interval is less than or equal to the end time of the previous interval.")),(0,i.kt)("p",null,"Let's discuss the brute force approach first :"),(0,i.kt)("p",null,"Steps to solve : "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sort the intervals based on the start time."),(0,i.kt)("li",{parentName:"ul"},"Create a new vector of intervals."),(0,i.kt)("li",{parentName:"ul"},"Push the first interval into the new vector. "),(0,i.kt)("li",{parentName:"ul"},"Iterate over the intervals and check if the start time of the current interval is less than or equal to the end time of the previous interval, if yes then merge the intervals and update the end time of the previous interval to the maximum of the end time of both the intervals.")),(0,i.kt)("p",null,"Let's write the code for this approach : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"\nclass Solution{\npublic:\n    vector<vector<int>> merge(vector<vector<int>>& intervals) {\n        // Sort the intervals based on the start time\n        sort(intervals.begin(), intervals.end());\n        vector<vector<int>> res;\n        res.push_back(intervals[0]);\n        for(int i = 1; i < intervals.size(); i++){\n            // If the start time of the current interval is less than or equal to the end time of the previous interval, merge the intervals and update the end time of the previous interval to the maximum of the end time of both the intervals.\n            if(intervals[i][0] <= res.back()[1]){\n                res.back()[1] = max(res.back()[1], intervals[i][1]);\n            }\n            // else push the current interval into the new vector\n            else{\n                res.push_back(intervals[i]);\n            }\n        }\n        return res;\n    }\n};\n\n")),(0,i.kt)("p",null,"Time Complexity : O(nlogn) + O(n) = O(nlogn)\nSpace Complexity : O(n) -> for the new vector"),(0,i.kt)("p",null,"Let's look at another approach :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We can also solve this problem using stack."),(0,i.kt)("li",{parentName:"ul"},"Sort the intervals based on the start time."),(0,i.kt)("li",{parentName:"ul"},"Push the first interval into the stack. "),(0,i.kt)("li",{parentName:"ul"},"Iterate over the intervals and check if the start time of the current interval is less than or equal to the end time of the top of the stack, if yes then merge the intervals and update the end time of the top of the stack to the maximum of the end time of both the intervals.")),(0,i.kt)("p",null,"Let's write the code for this approach : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"\nclass Solution{ \npublic:\n    vector<vector<int>> merge(vector<vector<int>>& intervals) {\n        // Sort the intervals based on the start time\n        sort(intervals.begin(), intervals.end());\n        stack<vector<int>> s;\n        s.push(intervals[0]);\n        for(int i = 1; i < intervals.size(); i++){\n            // If the start time of the current interval is less than or equal to the end time of the top of the stack, merge the intervals\n            if(intervals[i][0] <= s.top()[1]){\n                s.top()[1] = max(s.top()[1], intervals[i][1]);\n            }\n            // else push the current interval into the stack\n            else{\n                s.push(intervals[i]);\n            }\n        }\n        vector<vector<int>> res;\n        while(!s.empty()){\n            res.push_back(s.top());\n            s.pop();\n        }\n        reverse(res.begin(), res.end());\n        return res;\n    }\n};\n\n")))}v.isMDXComponent=!0},5334:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-7-78aef038702b5816849e4c30bf85883c.png"}}]);
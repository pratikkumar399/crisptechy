"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[6823],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>v});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),a=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=a(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=a(t),f=i,v=p["".concat(c,".").concat(f)]||p[f]||m[f]||s;return t?r.createElement(v,o(o({ref:n},l),{},{components:t})):r.createElement(v,o({ref:n},l))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=f;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u[p]="string"==typeof e?e:i,o[1]=u;for(var a=2;a<s;a++)o[a]=t[a];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4682:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>a});var r=t(7462),i=(t(7294),t(3905));const s={},o=void 0,u={unversionedId:"DsaInteviewQuestions/3sum",id:"DsaInteviewQuestions/3sum",title:"3sum",description:"3sum",source:"@site/interviewseries/DsaInteviewQuestions/3sum.md",sourceDirName:"DsaInteviewQuestions",slug:"/DsaInteviewQuestions/3sum",permalink:"/crisptechy/interviewseries/DsaInteviewQuestions/3sum",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"interviewSeries",previous:{title:"2Sum",permalink:"/crisptechy/interviewseries/DsaInteviewQuestions/2Sum"},next:{title:"4sum",permalink:"/crisptechy/interviewseries/DsaInteviewQuestions/4sum"}},c={},a=[{value:"3sum",id:"3sum",level:3}],l={toc:a},p="wrapper";function m(e){let{components:n,...s}=e;return(0,i.kt)(p,(0,r.Z)({},l,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"3sum"},"3sum"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:t(471).Z,width:"763",height:"375"})),(0,i.kt)("p",null,"Let's do brute force \ud83d\udc4d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<vector<int>> threeSum(vector<int>& nums) {\n        vector<vector<int>> res;\n        for(int i=0;i<nums.size();i++){\n            for(int j=i+1;j<nums.size();j++){\n                for(int k=j+1;k<nums.size();k++){\n                    if(nums[i]+nums[j]+nums[k]==0){\n                        vector<int> temp;\n                        temp.push_back(nums[i]);\n                        temp.push_back(nums[j]);\n                        temp.push_back(nums[k]);\n                        sort(temp.begin(),temp.end());\n                        //check if the vector is already present in the result\n                        //if not then push it\n                        if(find(res.begin(),res.end(),temp)==res.end())\n                            res.push_back(temp);\n                    }\n                }\n            }\n        }\n        return res;\n    }\n};\n")),(0,i.kt)("p",null,"Time Complexity: O(n^3)\nSpace Complexity: O(n)"),(0,i.kt)("p",null,"Let's do better than this \ud83d\udc4d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\npublic:\n    vector<vector<int>> threeSum(vector<int>& nums) {\n        vector<vector<int>> res;\n        sort(nums.begin(),nums.end());\n        for(int i=0;i<nums.size();i++){\n            if((i > 0 )and( nums[i] == nums[i-1])) continue; // skip duplicates in the outer loop itself\n            int front=i+1;\n            int back=nums.size()-1;\n            while(front<back){\n                int sum=nums[front]+nums[back] + nums[i]; // the triplets\n                if(sum<0)\n                    front++;\n                else if(sum>0)\n                    back--;\n                else{\n                    res.push_back(vector<int> {nums[i], nums[front], nums[back]}); // in case we find the triplets\n                    while(front < back and nums[front]== nums[front+1]) front++; // remove duplicates in the middle\n                    while(front < back and nums[back]==nums[back-1]) back--;\n                    front++; // move to next potential triplets\n                    back--;\n                }\n            }\n        }\n        return res;\n    }\n};\n\n\nint main() {\n    Solution solution;\n    vector<int> nums = {-1, 0, 1, 2, -1, -4};\n    vector<vector<int>> result = solution.threeSum(nums);\n\n    cout << "Unique triplets that sum up to zero:" << endl;\n    for (const auto& triplet : result) {\n        for (int num : triplet) {\n            cout << num << " ";\n        }\n        cout << endl;\n    }\n\n    return 0;\n}\n\n')),(0,i.kt)("p",null,"Time Complexity: O(n^2)\nSpace Complexity: O(n)"))}m.isMDXComponent=!0},471:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image-17-b40649ed2b99b2eacc9ff46c9da7b9cc.png"}}]);
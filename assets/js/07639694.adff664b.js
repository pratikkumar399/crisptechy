"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[7166],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=l(a),h=i,k=s["".concat(o,".").concat(h)]||s[h]||u[h]||r;return a?n.createElement(k,c(c({ref:t},m),{},{components:a})):n.createElement(k,c({ref:t},m))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,c=new Array(r);c[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:i,c[1]=p;for(var l=2;l<r;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6950:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var n=a(7462),i=(a(7294),a(3905));const r={},c=void 0,p={unversionedId:"dsaconcepts/DynamicProgramming/KnapSack/Knapsack",id:"dsaconcepts/DynamicProgramming/KnapSack/Knapsack",title:"Knapsack",description:"0/1 Knapsack Problem",source:"@site/docs/dsaconcepts/DynamicProgramming/KnapSack/Knapsack.md",sourceDirName:"dsaconcepts/DynamicProgramming/KnapSack",slug:"/dsaconcepts/DynamicProgramming/KnapSack/",permalink:"/crisptechy/docs/dsaconcepts/DynamicProgramming/KnapSack/",draft:!1,editUrl:"https://github.com/pratikkumar399/crisptechy/tree/master/docs/dsaconcepts/DynamicProgramming/KnapSack/Knapsack.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FIrstandLastOccurence",permalink:"/crisptechy/docs/dsaconcepts/BinarySearch/FIrstandLastOccurence"},next:{title:"PartitionEqualSubsetSum",permalink:"/crisptechy/docs/dsaconcepts/DynamicProgramming/KnapSack/PartitionEqualSubsetSum"}},o={},l=[{value:"0/1 Knapsack Problem",id:"01-knapsack-problem",level:2},{value:"Problem Statement",id:"problem-statement",level:3},{value:"Example",id:"example",level:3},{value:"Approach",id:"approach",level:3},{value:"Code Implementation",id:"code-implementation",level:3}],m={toc:l},s="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(s,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"01-knapsack-problem"},"0/1 Knapsack Problem"),(0,i.kt)("h3",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack. In other words, given two integer arrays val[0..n-1] and wt[0..n-1] which represent values and weights associated with n items respectively. Also given an integer W which represents knapsack capacity, find out the maximum value subset of val[] such that sum of the weights of this subset is smaller than or equal to W. You cannot break an item, either pick the complete item or don\u2019t pick it (0-1 property).")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: \n  val[] = {60, 100, 120};\n  wt[] = {10, 20, 30};\n  W = 50;\n\nOutput: 220\n\n")),(0,i.kt)("h3",{id:"approach"},"Approach"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Recursive Approach"),(0,i.kt)("li",{parentName:"ol"},"Memoization Approach "),(0,i.kt)("li",{parentName:"ol"},"Tabulation Approach "),(0,i.kt)("li",{parentName:"ol"},"Printing the Items")),(0,i.kt)("h3",{id:"code-implementation"},"Code Implementation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Recursive Approach"),(0,i.kt)("p",{parentName:"li"},"We have some cases in this approach : "),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Base Case"),(0,i.kt)("li",{parentName:"ol"},"If the weight of the item is greater than the capacity of the knapsack then we can't include that item"),(0,i.kt)("li",{parentName:"ol"},"Else we have two choices either to include the item or not."),(0,i.kt)("li",{parentName:"ol"},"If we include the item then we have to reduce the capacity of the knapsack and the number of items."),(0,i.kt)("li",{parentName:"ol"},"If we don't include the item then we have to reduce the number of items, because we are not including the item and the capacity of the knapsack remains the same.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"\nint knapSack(int wt[], int val[], int W, int n) \n{   \n    // Base Case\n    // if the items or the capacity of the knapsack is 0 then return 0\n    if(n==0 || W==0) return 0;\n\n    // Case 2: \n    // if the weight of the item is greater than the capacity of the knapsack then we can't include that item\n    if(wt[n-1]>W) return knapSack(wt,val,W,n-1);\n\n    // Case 3:\n    // else we have two choices either to include the item or not\n    // if we include the item then we have to reduce the capacity of the knapsack and the number of items\n    // if we don't include the item then we have to reduce the number of items\n    return max(val[n-1]+knapSack(wt,val,W-wt[n-1],n-1),knapSack(wt,val,W,n-1));\n} \n\n")),(0,i.kt)("p",null,"Time Complexity : O(2^n) "),(0,i.kt)("p",null,"Space Complexity : O(n)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Need for memoization arises due to the fact that the recursive implementation evaluates the same subproblems again and again.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Memoization Approach")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"\nvector<vector<int>> dp(1001,vector<int>(1001,-1));\n\nint knapSack(vector<int> wt , vector<int> val, int capacity, int items){\n    if(items==0 || capacity==0) return 0;\n    // in case we find that the value is already present in the dp array then we return the value\n    if(dp[items][capacity]!=-1) return dp[items][capacity];\n    \n    int take = val[items-1] + knapSack(wt,val,capacity-wt[items-1],items-1);\n    int notTake = knapSack(wt,val,capacity,items-1);\n\n    // storing the value in the dp array\n    dp[items][capacity] = max(take,notTake);\n\n    return dp[items][capacity];\n\n}\n")),(0,i.kt)("p",null,"Time Complexity : O(n*capacity)"),(0,i.kt)("p",null,"Space Complexity : O(n*capacity)"),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Tabulation Approach")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"\nint knapSack(vector<int> wt , vector<int> val, int capacity, int items){\n   vector<vector<int>> dp(items+1, vector<int> (capacity+1,0));\n\n   for(int item=1;item<=items;i++){\n         for(int cap=1;cap<=capacity;cap++){\n              if(wt[item-1]<=cap){\n                dp[item][cap] = max(val[item-1]+dp[item-1][cap-wt[item-1]],dp[item-1][cap]);\n              }\n              else{\n                dp[item][cap] = dp[item-1][cap];\n              }\n         }\n   }\n}\n")),(0,i.kt)("p",null,"Time Complexity : O(n*capacity)"),(0,i.kt)("p",null,"Space Complexity : O(n*capacity)"),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Priting the items")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'\n    int knapSack(vector<int> wt , vector<int> val, int capacity, int items){\n    vector<vector<int>> dp(items+1, vector<int> (capacity+1,0));\n\n    for(int item=1;item<=items;i++){\n            for(int cap=1;cap<=capacity;cap++){\n                if(wt[item-1]<=cap){\n                    dp[item][cap] = max(val[item-1]+dp[item-1][cap-wt[item-1]],dp[item-1][cap]);\n                }\n                else{\n                    dp[item][cap] = dp[item-1][cap];\n                }\n            }\n    }\n\n    int i=items,j=capacity;\n    vector<int> ans;\n    \n    // we will traverse the dp array from the last\n    // if the value of the dp array at i,j is equal to the value of the dp array at i-1,j then we will not include the item\n    // else we will include the item and reduce the capacity of the knapsack and the number of items\n\n    while(i>0 && j>0){\n        if(dp[i][j]==dp[i-1][j]){\n            i--;\n        }\n        else{\n            ans.push_back(wt[i-1]);\n            j = j-wt[i-1];\n            i--;\n        }\n    }\n    for(int i=0;i<ans.size();i++){\n        cout<<ans[i]<<" ";\n    }\n    }\n')),(0,i.kt)("p",null,"Questions based on Knapsack Pattern:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/partition-equal-subset-sum/"},"Partition Equal Subset Sum")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/partition-equal-subset-sum/"},"Equal Sum Partition")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/target-sum/"},"Count of Subset Sum")," "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/last-stone-weight-ii/"},"Minimum Subset Sum Difference")," "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/last-stone-weight-ii/"},"Target Sum")," "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/last-stone-weight-ii/"},"Number of Subset with given difference"))))}u.isMDXComponent=!0}}]);
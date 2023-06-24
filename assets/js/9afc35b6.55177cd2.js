"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(n),b=r,k=c["".concat(l,".").concat(b)]||c[b]||p[b]||o;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"dsaconcepts/DynamicProgramming/KnapSack/SubsetSum",id:"dsaconcepts/DynamicProgramming/KnapSack/SubsetSum",title:"SubsetSum",description:"Problem Statement",source:"@site/docs/dsaconcepts/DynamicProgramming/KnapSack/SubsetSum.md",sourceDirName:"dsaconcepts/DynamicProgramming/KnapSack",slug:"/dsaconcepts/DynamicProgramming/KnapSack/SubsetSum",permalink:"/crisptechy/docs/dsaconcepts/DynamicProgramming/KnapSack/SubsetSum",draft:!1,editUrl:"https://github.com/pratikkumar399/crisptechy/tree/master/docs/dsaconcepts/DynamicProgramming/KnapSack/SubsetSum.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PartitionEqualSubsetSum",permalink:"/crisptechy/docs/dsaconcepts/DynamicProgramming/KnapSack/PartitionEqualSubsetSum"},next:{title:"intro",permalink:"/crisptechy/docs/dsaconcepts/DynamicProgramming/intro"}},l={},u=[],m={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Problem Statement"),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"Given a set of non-negative integers, and a value sum, determine if there is a subset of the given set with sum equal to given sum."))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Subset sum problem is to find subset of elements that are selected from a given set whose sum adds up to a given number K. We are considering the set contains non-negative values. It is assumed that the input set is unique (no duplicates are presented).")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 9\nOutput: True\nThere is a subset (4, 5) with sum 9.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 30\nOutput: False\nThere is no subset that add up to 30.\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Approach")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1. If sum == 0, return true\n2. If n == 0, return false\n3. If last element is greater than sum, then ignore it\n4. Else, check if sum can be obtained by any of the following\n    (a) including the last element\n    (b) excluding the last element\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This question is a varition of 0/1 Knapsack problem where weight is equal to value. In 0/1 Knapsack, we either take an item or don't take it. Here also, we either include an element or exclude it. We return true if we get the sum equal to 0 by including or excluding elements, else we return false. ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Lets see how we can solve this problem using the approach of the 0/1 KnapSack problem .")),(0,r.kt)("p",null,"Methods to solve this problem: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Recursion (Top-Down)"),(0,r.kt)("li",{parentName:"ol"},"Memoization (Top-Down)"),(0,r.kt)("li",{parentName:"ol"},"Tabulation (Bottom-Up)"),(0,r.kt)("li",{parentName:"ol"},"Space Optimized Tabulation (Bottom-Up)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Let's look at the recursive approach first ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We have to make a choice whether to include the last element or not. "),(0,r.kt)("li",{parentName:"ul"},"If we include the last element, we have to check if the sum can be obtained by including the last element. "),(0,r.kt)("li",{parentName:"ul"},"If we exclude the last element, we have to check if the sum can be obtained by excluding the last element. "),(0,r.kt)("li",{parentName:"ul"},"If any of the above two cases return true, we return true. "),(0,r.kt)("li",{parentName:"ul"},"Else, we return false.")))),(0,r.kt)("p",null,"Code \ud83d\udc4d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"\nbool isSubsetSum(int set[], int n, int sum) \n{ \n    // Base Cases \n    if (sum == 0) \n        return true; \n    if (n == 0) \n        return false; \n  \n    // If last element is greater than sum, then ignore it \n    if (set[n - 1] > sum) \n        return isSubsetSum(set, n - 1, sum); \n  \n    /* else, check if sum can be obtained by any of the following \n    (a) including the last element \n    (b) excluding the last element */\n    return isSubsetSum(set, n - 1, sum) \n           || isSubsetSum(set, n - 1, sum - set[n - 1]); \n} \n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Time Complexity: O(2^n) In the worst case, this solution tries two possibilities (whether to include or exclude) for every element.\nAuxiliary Space: O(1) As no extra data structure has been used for storing values.\nStack Space: O(n) In worst case, n stack frames are pushed in the recursive call stack.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Now, let's look at the memoization approach. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We create a 2D array dp","[n+1][sum+1]"," to store the results of subproblems. "),(0,r.kt)("li",{parentName:"ul"},"dp","[i][j]"," will be true if there is a subset of elements from set","[0..i]"," with sum equal to j., otherwise false. "),(0,r.kt)("li",{parentName:"ul"},"We fill the array row by row and column by column. "),(0,r.kt)("li",{parentName:"ul"},"Finally, we return dp","[n][sum]",".")))),(0,r.kt)("p",null,"Code \ud83d\udc4d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"\n   bool f(int index , int target , vector<int> &arr , vector<vector<int>> &dp){\n    if(target == 0) return true; \n    // if we have reached the end of the array and target is not 0 \n    if(index == 0) return (arr[0] == target ) ;\n    \n     \n    if(dp[index][target] != -1) return dp[index][target] ;\n    // choice to take or not to take\n    bool notTake = f(index - 1 , target , arr , dp);\n    bool take = false;\n    // take only if the current element is less than or equal to the target\n    if(arr[index]<=target) take=f(index - 1 , target - arr[index] , arr , dp) ;\n\n    return dp[index][target] = take | notTake ;\n} \n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Time Complexity: O(sum",(0,r.kt)("em",{parentName:"p"},"n), where sum is the \u2018target sum\u2019 and \u2018n\u2019 is the size of array.\nSpace Complexity: O(sum"),"n), as the size of 2-D array is sum*n.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Now, let's look at the tabulation approach. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We create a 2D array dp","[n+1][sum+1]"," to store the results of subproblems. "),(0,r.kt)("li",{parentName:"ul"},"dp","[i][j]"," will be true if there is a subset of elements from set","[0..i]"," with sum equal to j., otherwise false. "),(0,r.kt)("li",{parentName:"ul"},"We fill the array row by row and column by column. "),(0,r.kt)("li",{parentName:"ul"},"Finally, we return dp","[n][sum]",".")))),(0,r.kt)("p",null,"Code \ud83d\udc4d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'\nbool isSubsetSum(int set[], int n, int sum) \n{ \n    // The value of subset[i][j] will be true if there is a  \n    // subset of set[0..j-1] with sum equal to i \n    bool subset[n + 1][sum + 1]; \n  \n    // If sum is 0, then answer is true \n    for (int i = 0; i <= n; i++) \n        subset[i][0] = true; \n  \n    // If sum is not 0 and set is empty, then answer is false \n    for (int i = 1; i <= sum; i++) \n        subset[0][i] = false; \n  \n    // Fill the subset table in botton up manner \n    for (int i = 1; i <= n; i++) { \n        for (int j = 1; j <= sum; j++) { \n            if (j < set[i - 1]) \n                subset[i][j] = subset[i - 1][j]; \n            if (j >= set[i - 1]) \n                subset[i][j] = subset[i - 1][j] \n                               || subset[i - 1][j - set[i - 1]]; \n        } \n    } \n  \n    /* // uncomment this code to print table \n    for (int i = 0; i <= n; i++) \n    { \n    for (int j = 0; j <= sum; j++) \n        cout<<subset[i][j]<<" "; \n    cout<<endl; \n    } */\n  \n    return subset[n][sum]; \n} \n\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Time Complexity: O(sum",(0,r.kt)("em",{parentName:"p"},"n), where sum is the \u2018target sum\u2019 and \u2018n\u2019 is the size of array.\nAuxiliary Space: O(sum"),"n), as the size of 2-D array is sum*n.")))}p.isMDXComponent=!0}}]);
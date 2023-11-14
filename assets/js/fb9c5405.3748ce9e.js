"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[7121],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),m=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,b=u["".concat(s,".").concat(d)]||u[d]||c[d]||n;return a?o.createElement(b,i(i({ref:t},p),{},{components:a})):o.createElement(b,i({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<n;m++)i[m]=a[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2674:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var o=a(7462),r=(a(7294),a(3905));const n={},i=void 0,l={unversionedId:"dsaconcepts/DynamicProgramming/intro",id:"dsaconcepts/DynamicProgramming/intro",title:"intro",description:"Dynammic Programming",source:"@site/docs/dsaconcepts/DynamicProgramming/intro.md",sourceDirName:"dsaconcepts/DynamicProgramming",slug:"/dsaconcepts/DynamicProgramming/intro",permalink:"/crisptechy/docs/dsaconcepts/DynamicProgramming/intro",draft:!1,editUrl:"https://github.com/pratikkumar399/crisptechy/tree/master/docs/dsaconcepts/DynamicProgramming/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SubsetSum",permalink:"/crisptechy/docs/dsaconcepts/DynamicProgramming/KnapSack/SubsetSum"},next:{title:"gitnotes",permalink:"/crisptechy/docs/dsaconcepts/GitNotes/"}},s={},m=[{value:"Dynammic Programming",id:"dynammic-programming",level:2},{value:"Overlapping Subproblems",id:"overlapping-subproblems",level:3},{value:"Optimal Substructure",id:"optimal-substructure",level:3},{value:"Dynamic Programming vs Divide and Conquer",id:"dynamic-programming-vs-divide-and-conquer",level:3},{value:"Dynamic Programming vs Greedy",id:"dynamic-programming-vs-greedy",level:3},{value:"Dynamic Programming vs Memoization",id:"dynamic-programming-vs-memoization",level:3},{value:"Dp problem patterns",id:"dp-problem-patterns",level:2}],p={toc:m},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"dynammic-programming"},"Dynammic Programming"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dynamic Programming is a method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions using a memory-based data structure (array, map,etc). "),(0,r.kt)("li",{parentName:"ul"},"Each of the subproblem solutions is indexed in some way, typically based on the values of its input parameters, so as to facilitate its lookup. "),(0,r.kt)("li",{parentName:"ul"},"So the next time the same subproblem occurs, instead of recomputing its solution, one simply looks up the previously computed solution, thereby saving computation time at the expense of expenditure in storage space. "),(0,r.kt)("li",{parentName:"ul"},"Each of the subproblem solutions is indexed in some way, typically based on the values of its input parameters, so as to facilitate its lookup. "),(0,r.kt)("li",{parentName:"ul"},"So the next time the same subproblem occurs, instead of recomputing its solution, one simply looks up the previously computed solution.")),(0,r.kt)("p",null,"Patterns in Dynamic Programming : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Overlapping Subproblems"),(0,r.kt)("li",{parentName:"ul"},"Optimal Substructure")),(0,r.kt)("h3",{id:"overlapping-subproblems"},"Overlapping Subproblems"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Like Divide and Conquer, Dynamic Programming combines solutions to sub-problems."),(0,r.kt)("li",{parentName:"ul"},"Dynamic Programming is mainly used when solutions of same subproblems are needed again and again.")),(0,r.kt)("h3",{id:"optimal-substructure"},"Optimal Substructure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A given problems has Optimal Substructure Property if optimal solution of the given problem can be obtained by using optimal solutions of its subproblems."),(0,r.kt)("li",{parentName:"ul"},"For example, the Shortest Path problem has following optimal substructure property:"),(0,r.kt)("li",{parentName:"ul"},"If a node x lies in the shortest path from a source node u to destination node v then the shortest path from u to v is combination of shortest path from u to x and shortest path from x to v.")),(0,r.kt)("h3",{id:"dynamic-programming-vs-divide-and-conquer"},"Dynamic Programming vs Divide and Conquer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Both paradigms (DP and Divide and Conquer) divide the given problem into subproblems and solve subproblems.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Divide and Conquer : The divide and conquer paradigm does not apply when there are overlapping subproblems as it leads to recomputation of same subproblems again and again.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dynamic Programming : Dynamic Programming is mainly used when solutions of same subproblems are needed again and again. In dynamic programming, computed solutions to subproblems are stored in a table so that these don\u2019t have to recomputed. So Dynamic Programming is not useful when there are no common (overlapping) subproblems because there is no point storing the solutions if they are not needed again. For example, Binary Search doesn\u2019t have common subproblems. If we take example of following recursive program for Fibonacci Numbers, there are many subproblems which are solved again and again."))),(0,r.kt)("h3",{id:"dynamic-programming-vs-greedy"},"Dynamic Programming vs Greedy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dynamic Programming is mainly an optimization over plain recursion. Wherever we see a recursive solution that has repeated calls for same inputs, we can optimize it using Dynamic Programming. The idea is to simply store the results of subproblems, so that we do not have to re-compute them when needed later. This simple optimization reduces time complexities from exponential to polynomial. For example, if we write simple recursive solution for Fibonacci Numbers, we get exponential time complexity and if we optimize it by storing solutions of subproblems, time complexity reduces to linear.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On the other hand, greedy algorithms have two properties that a problem must exhibit:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Greedy Choice Property"),(0,r.kt)("li",{parentName:"ol"},"Optimal Substructure"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If a problem can be solved using Greedy, then it can be solved using Dynamic Programming as well. But Greedy won\u2019t work if Greedy Choice property doesn\u2019t hold. For example, Fractional Knapsack problem can be solved using Greedy, but 0-1 Knapsack cannot be solved using Greedy.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In fact, Dynamic Programming is an algorithmic paradigm whereas Greedy is a technique (or approach) to solve a problem."))),(0,r.kt)("h3",{id:"dynamic-programming-vs-memoization"},"Dynamic Programming vs Memoization"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Memoization (Top Down) : The memoized program for a problem is similar to the recursive version with a small modification that it looks into a lookup table before computing solutions. We initialize a lookup array with all initial values as NIL. Whenever we need solution to a subproblem, we first look into the lookup table. If the precomputed value is there then we return that value, otherwise we calculate the value and put the result in lookup table so that it can be reused later."),(0,r.kt)("li",{parentName:"ul"},"Tabulation (Bottom Up) : The tabulated program for a given problem builds a table in bottom up fashion and returns the last entry from table. For example, for the same Fibonacci number, we first calculate fib(0) then fib(1) then fib(2) then fib(3) and so on. So literally, we are building the solutions of subproblems bottom-up."),(0,r.kt)("li",{parentName:"ul"},"Both Tabulated and Memoized store the solutions of subproblems. In Memoized version, table is filled on demand while in Tabulated version, starting from the first entry, all entries are filled one by one. Unlike the Tabulated version, all entries of the lookup table are not necessarily filled in Memoized version. For example, Memoized solution of the LCS problem doesn\u2019t necessarily fill all entries.")),(0,r.kt)("h2",{id:"dp-problem-patterns"},"Dp problem patterns"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"0/1 KnapSack"),(0,r.kt)("li",{parentName:"ol"},"Longest Common Subsequence"),(0,r.kt)("li",{parentName:"ol"},"Longest Increasing Subsequence"),(0,r.kt)("li",{parentName:"ol"},"Matrix Chain Multiplication"),(0,r.kt)("li",{parentName:"ol"},"Kadane's Algo"),(0,r.kt)("li",{parentName:"ol"},"Maximum Sum Increasing Subsequence")))}c.isMDXComponent=!0}}]);
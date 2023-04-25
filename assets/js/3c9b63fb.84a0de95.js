"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[839],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>h});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=p(r),f=o,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(h,i(i({ref:e},s),{},{components:r})):n.createElement(h,i({ref:e},s))}));function h(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[u]="string"==typeof t?t:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8666:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i=void 0,l={unversionedId:"DSA BLOGS/Graphs/topologicalsort",id:"DSA BLOGS/Graphs/topologicalsort",title:"topologicalsort",description:"Topological Sort",source:"@site/docs/DSA BLOGS/Graphs/topologicalsort.md",sourceDirName:"DSA BLOGS/Graphs",slug:"/DSA BLOGS/Graphs/topologicalsort",permalink:"/crisptechy/docs/DSA BLOGS/Graphs/topologicalsort",draft:!1,editUrl:"https://github.com/pratikkumar399/crisptechy/docs/DSA BLOGS/Graphs/topologicalsort.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"graphrepresentation",permalink:"/crisptechy/docs/DSA BLOGS/Graphs/graphrepresentation"},next:{title:"preordertraversal",permalink:"/crisptechy/docs/DSA BLOGS/Trees/Traversals/preordertraversal"}},c={},p=[],s={toc:p},u="wrapper";function d(t){let{components:e,...r}=t;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Topological Sort")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Topological sort means linear ordering of the graph "),(0,o.kt)("li",{parentName:"ul"},"In this every node that occurs before a node in the graph must occur before its next node in the linear ordering of the graph ."),(0,o.kt)("li",{parentName:"ul"},"only valid for directed acyclic graphs"),(0,o.kt)("li",{parentName:"ul"},"if a graph contains cycle then if cannot have topological sort .")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We will be using a dfs traversal to find the topological sort ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"So the intuition is that after the completion of th dfa call for a node , when we backtrack we will add that node in the stack\nand this will make sure that the nodes are added in the linear order of their apprearance .")),(0,o.kt)("p",null,"Code for it \ud83d\udc4d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution\n{\n    public:\n    \n    void topologicalSortDfs(int node , vector<int> &visited , vector<int> adj[] , stack<int> &st){\n        visited[node] = 1 ;\n        \n        for(auto it : adj[node]){\n            if(visited[it] == 0){\n                topologicalSortDfs(it,visited,adj,st) ;\n            }\n        }\n            st.push(node) ;\n        \n    }\n    \n    //Function to return list containing vertices in Topological order. \n    vector<int> topoSort(int V, vector<int> adj[]) \n    {\n        // code here\n        vector<int> visited(V, 0);\n        stack<int> st ;\n        \n        for(int i = 0 ; i<V ;i++){\n            if(!visited[i]){\n                topologicalSortDfs(i,visited,adj,st) ;\n            }\n        }\n        \n       vector<int> ans ;\n       while(!st.empty()){\n           int topo =  st.top() ;\n           st.pop() ;\n           \n           ans.push_back(topo) ;\n           \n       }\n        return ans ;\n    }\n};\n\n")))}d.isMDXComponent=!0}}]);
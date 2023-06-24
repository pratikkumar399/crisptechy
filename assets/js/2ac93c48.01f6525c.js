"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||c;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const c={},i=void 0,o={unversionedId:"dsaconcepts/Graphs/graphrepresentation",id:"dsaconcepts/Graphs/graphrepresentation",title:"graphrepresentation",description:"So there are two ways to represent a graph",source:"@site/docs/dsaconcepts/Graphs/graphrepresentation.md",sourceDirName:"dsaconcepts/Graphs",slug:"/dsaconcepts/Graphs/graphrepresentation",permalink:"/crisptechy/docs/dsaconcepts/Graphs/graphrepresentation",draft:!1,editUrl:"https://github.com/pratikkumar399/crisptechy/tree/master/docs/dsaconcepts/Graphs/graphrepresentation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dijkstraalgorithm",permalink:"/crisptechy/docs/dsaconcepts/Graphs/dijkstraalgorithm"},next:{title:"topologicalsort",permalink:"/crisptechy/docs/dsaconcepts/Graphs/topologicalsort"}},p={},s=[{value:"Adjacency List",id:"adjacency-list",level:4},{value:"Adjacency Matrix",id:"adjacency-matrix",level:3}],l={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," So there are two ways to represent a graph "),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Adjacency List "),(0,a.kt)("li",{parentName:"ul"},"Adjacency Matrix"))),(0,a.kt)("h4",{id:"adjacency-list"},"Adjacency List"),(0,a.kt)("p",null,"\ud83d\udc4d Adjacency List basically is a list of adjacent vertices connected to the current vertex "),(0,a.kt)("h3",{id:"adjacency-matrix"},"Adjacency Matrix"),(0,a.kt)("p",null,"\ud83d\udc4d Adjacency Matrix is simply a 2d matrix of size n * m , where n and m are the number of vertices in the graph and graph","[i][j]"," = 1 , means that there is a connecteion between vertex i and vertex j. "),(0,a.kt)("p",null,"Graph Representation :) "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include<bits/stdc++.h> \nusing namespace std ;\n\n\n\nint main(){\n    int n, m;\n    cin >> n >> m;\n    // adjacency list for undirected graph\n    // time complexity: O(2E)\n    vector<int> adj[n];\n    for (int i = 0; i < m; i++)\n    {\n        int u, v;\n        cin >> u >> v;\n        adj[u].push_back(v);\n        adj[v].push_back(u);\n    }\n\n    // for adjacent matrix  \n    for (int i = 0; i < m; i++)\n    {\n        int u, v;\n        cin >> u >> v;\n        adj[u][v] = 1 ;\n        adj[v][u] = 1 ;\n    }\n    \n   for(int i = 0 ; i < n ; i++){\n      cout<<i<<"->" ;\n      for(int j = 0 ; j < adj[i].size() ; j++){\n        cout<<adj[i][j]<<"," ;\n      }\n      cout<<endl ;\n   }\n    return 0 ;\n}       \n\n')))}d.isMDXComponent=!0}}]);
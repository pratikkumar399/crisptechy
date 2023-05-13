"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[792],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(t),f=a,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||i;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[l]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6666:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={},o=void 0,s={unversionedId:"DSA BLOGS/Graphs/bfsalgorithms",id:"DSA BLOGS/Graphs/bfsalgorithms",title:"bfsalgorithms",description:"",source:"@site/docs/DSA BLOGS/Graphs/bfsalgorithms.md",sourceDirName:"DSA BLOGS/Graphs",slug:"/DSA BLOGS/Graphs/bfsalgorithms",permalink:"/crisptechy/docs/DSA BLOGS/Graphs/bfsalgorithms",draft:!1,editUrl:"https://github.com/pratikkumar399/crisptechy/tree/master/docs/DSA BLOGS/Graphs/bfsalgorithms.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"gitnotes",permalink:"/crisptechy/docs/DSA BLOGS/GitNotes/"},next:{title:"bfsalgorithms",permalink:"/crisptechy/docs/DSA BLOGS/Graphs/bfsalgorithms"}},c={},p=[],u={toc:p},l="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(l,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'\n#include<bits/stdc++.h> \nusing namespace std ;\n\nclass Graph{\n \n  int V ;\n  vector<vector<int>> adj;\n  public : \n  Graph(int V) ; // constructor\n  // function to add an edge to the graph\n  void addEdge(int v , int u) ; \n  // function to do bfs traversal from a given source\n  void bfs(int source) ;\n\n};\n\nGraph::Graph(int V){\n    this->V = V ;\n    adj.resize(V) ;\n}\nvoid Graph::addEdge(int v, int u)\n{\n    adj[v].push_back(u);\n    adj[u].push_back(v);\n}\n\nvoid Graph::bfs(int source){\n    // mark all the vertices as not visited \n    vector<bool> visited(V , false) ;\n    // create a queue a bfs \n    queue<int> q ;\n    visited[source] = true ;\n    q.push(source) ;\n\n    while(!q.empty()){\n        // dequeue a vertex from queue\n        int u= q.front() ;\n        cout<<u<<" "<<endl ;\n        q.pop() ;\n        for(auto v : adj[u]){\n            if(!visited[v]){\n                visited[v] = true ;\n                q.push(v) ;\n            }\n        }\n    }\n\n\n}\n\nint main(){\n    int n, m;\n    cin >> n >> m;\n    // adjacency list for undirected graph\n    // time complexity: O(2E)\n\n    Graph g(n) ;\n    vector<int> adj[n];\n    for (int i = 0; i < m; i++)\n    {\n        int u, v;\n        cin >> u >> v;\n        g.addEdge(u , v) ;\n    }\n    int start ;\n    cin>> start ;\n\n    g.bfs(2) ;\n\n\n    return 0 ;\n}\n\n')))}d.isMDXComponent=!0}}]);
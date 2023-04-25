"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[556],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(t),h=i,f=p["".concat(s,".").concat(h)]||p[h]||u[h]||a;return t?r.createElement(f,o(o({ref:n},l),{},{components:t})):r.createElement(f,o({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=h;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},4397:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=t(7462),i=(t(7294),t(3905));const a={},o=void 0,c={unversionedId:"Graphs/cycle_dfs_bfs_undirected",id:"Graphs/cycle_dfs_bfs_undirected",title:"cycle_dfs_bfs_undirected",description:"Cycle detection In Undirected Graph",source:"@site/docs/Graphs/cycle_dfs_bfs_undirected.md",sourceDirName:"Graphs",slug:"/Graphs/cycle_dfs_bfs_undirected",permalink:"/crisptechy/docs/Graphs/cycle_dfs_bfs_undirected",draft:!1,editUrl:"https://github.com/pratikkumar399/crisptechy/docs/Graphs/cycle_dfs_bfs_undirected.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bfsalgorithms",permalink:"/crisptechy/docs/Graphs/bfsalgorithms"},next:{title:"dijkstraalgorithm",permalink:"/crisptechy/docs/Graphs/dijkstraalgorithm"}},s={},d=[{value:"Cycle detection In Undirected Graph",id:"cycle-detection-in-undirected-graph",level:2},{value:"DFS algorithm",id:"dfs-algorithm",level:2},{value:"BFS algorithm",id:"bfs-algorithm",level:3}],l={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"cycle-detection-in-undirected-graph"},"Cycle detection In Undirected Graph"),(0,i.kt)("p",null,"\u25b6\ufe0f Using DFS algorithm  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Concept")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> For finding a cycle in undirected graph , be it any of dfs or bfs traversals, we have to maintain a visited array.\n> Now when we do the traversal, and find the adjacent node of the current node already visited, then the case of the cycle arises : \n    \ud83d\udc4dIt is a cycle if and only if the adjacent node has already been visited and is not the parent of the current node. \n")),(0,i.kt)("h2",{id:"dfs-algorithm"},"DFS algorithm"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"    class Solution {\n  public:\n  bool isCycle_Check(int vertex , int parent ,vector<int> adj[] , vector<int>& visited){\n      \n      visited[vertex] = true ;\n      \n      for(auto it: adj[vertex]){\n          if(visited[it]==0){\n              if(isCycle_Check(it, vertex , adj ,visited))\n              return true ;\n          }  \n          else if(it != parent) return true ;\n      }\n      \n      return false ;\n  }\n  \n  \n  public : \n    // Function to detect cycle in an undirected graph.\n    bool isCycle(int V, vector<int> adj[]) {\n        // Code here\n        \n        vector<int> visited(V+1,0) ;\n        \n        for(int i = 0 ; i < V ;i++){\n            if(!visited[i]){\n                if(isCycle_Check(i ,-1 ,adj ,visited )) return true ;\n            }\n        }\n        return false ;\n    }\n};\n")),(0,i.kt)("h3",{id:"bfs-algorithm"},"BFS algorithm"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include<bits/stdc++.h> \nusing namespace std ;\n\n\n// lets do a bfs traversal\n// now if in the traversal if we find a node that has been visited and is not the parent \n// of the current node then we can say that yes we have found a cycle in the graph\n\nbool detect(int source , vector<vector<int>> &graph , vector<int> &visited){\n\n    // mark the current node as visited \n    visited[source] = 1 ;\n    // make a queue which stores the pair of current node and its parent node \n    queue<pair<int, int>> q ;\n    // store the first node along with its parent as -1\n    q.push({source , -1}) ;\n    while(!q.empty()){\n        // current node\n        int node = q.front().first ;\n        // parent node\n        int parent = q.front().second ;\n        // after traversing the current node make sure that we pop out the node \n        // this ensures that we do not visit that node again\n        q.pop();\n\n        // now go in the current node and find its adjacent node\n        for(auto adjacentNode : graph[node]){\n            // if the adjacent node has not been visited then mark it as visited \n            if(!visited[adjacentNode]){\n                visited[adjacentNode] = 1 ;\n                q.push({adjacentNode , node}) ;\n            }\n            // now if the adjacent node has been visited and it is not the parent node \n            // then surely this means that we have a cycle present in the graph\n            else if(parent != adjacentNode){\n                // so return true if there is a cycle\n                return true ;\n            }\n        }\n    }\n\n    return false ;\n}\n\n\n\nbool bfs(vector<vector<int>> &graph , int m ){\n    vector<int> visited(graph.size() + 1, 0) ;\n    for(int i = 0 ; i < graph.size() ; i++){\n        if(!visited[i]){\n            if(detect(i , graph , visited)) return true ;\n        }\n    }\n\n    return false ;\n}\n\nint main(){\n    int n , m ;\n    cin >> n >> m ;\n    \n    vector<vector<int>> graph(n+1) ;\n     \n    for(int i = 0 ; i < m ; i++){\n        int u , v ;\n        cin >> u >>v ;\n        graph[u].push_back(v) ;\n        graph[v].push_back(u) ;\n    }\n\n    cout<<bfs(graph , m)<<endl  ;\n\n\n\n    return 0 ;\n}\n")))}u.isMDXComponent=!0}}]);
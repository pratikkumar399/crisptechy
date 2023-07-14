"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[7088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(n),h=i,f=l["".concat(s,".").concat(h)]||l[h]||u[h]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:i,o[1]=c;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const a={},o=void 0,c={unversionedId:"dsaconcepts/Graphs/cycle_dfs_bfs_undirected",id:"dsaconcepts/Graphs/cycle_dfs_bfs_undirected",title:"cycle_dfs_bfs_undirected",description:"Cycle detection In Undirected Graph",source:"@site/docs/dsaconcepts/Graphs/cycle_dfs_bfs_undirected.md",sourceDirName:"dsaconcepts/Graphs",slug:"/dsaconcepts/Graphs/cycle_dfs_bfs_undirected",permalink:"/crisptechy/docs/dsaconcepts/Graphs/cycle_dfs_bfs_undirected",draft:!1,editUrl:"https://github.com/pratikkumar399/crisptechy/tree/master/docs/dsaconcepts/Graphs/cycle_dfs_bfs_undirected.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bipartite Graph",permalink:"/crisptechy/docs/dsaconcepts/Graphs/bipartitegraph"},next:{title:"dijkstraalgorithm",permalink:"/crisptechy/docs/dsaconcepts/Graphs/dijkstraalgorithm"}},s={},d=[{value:"Cycle detection In Undirected Graph",id:"cycle-detection-in-undirected-graph",level:2},{value:"DFS algorithm",id:"dfs-algorithm",level:2},{value:"BFS algorithm",id:"bfs-algorithm",level:3}],p={toc:d},l="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"cycle-detection-in-undirected-graph"},"Cycle detection In Undirected Graph"),(0,i.kt)("p",null,"\u25b6\ufe0f Using DFS algorithm  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Concept")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For finding a cycle in undirected graph , be it any of dfs or bfs traversals, we have to maintain a visited array.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Now when we do the traversal, and find the adjacent node of the current node already visited, then the case of the cycle arises\ud83d\udc4dIt is a cycle if and only if the adjacent node has already been visited and is not the parent of the current node. ")),(0,i.kt)("h2",{id:"dfs-algorithm"},"DFS algorithm"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"    class Solution {\n  public:\n  bool isCycle_Check(int vertex , int parent ,vector<int> adj[] , vector<int>& visited){\n      // mark the current node as visited\n      visited[vertex] = true ;\n      \n      for(auto it: adj[vertex]){\n          if(visited[it]==0){\n            // if the adjacent node has not been visited then mark it as visited\n              if(isCycle_Check(it, vertex , adj ,visited)) return true ;\n          } \n          // if the adjacent node has been visited and it is not the parent of the current node\n          // then we can say that yes we have found a cycle in the graph \n          else if(it != parent) return true ;\n      }\n      \n      return false ;\n  }\n  \n  \n  public : \n    // Function to detect cycle in an undirected graph.\n    bool isCycle(int V, vector<int> adj[]) {\n        // Code here\n        \n        vector<int> visited(V+1,0) ;\n        \n        for(int i = 0 ; i < V ;i++){\n            if(!visited[i]){\n                if(isCycle_Check(i ,-1 ,adj ,visited )) return true ;\n            }\n        }\n        return false ;\n    }\n};\n")),(0,i.kt)("h3",{id:"bfs-algorithm"},"BFS algorithm"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include<bits/stdc++.h> \nusing namespace std ;\n\n\n// lets do a bfs traversal\n// now if in the traversal if we find a node that has been visited and is not the parent \n// of the current node then we can say that yes we have found a cycle in the graph\n\nbool detect(int source , vector<vector<int>> &graph , vector<int> &visited){\n\n    // mark the current node as visited \n    visited[source] = 1 ;\n    // make a queue which stores the pair of current node and its parent node \n    queue<pair<int, int>> q ;\n    // store the first node along with its parent as -1\n    q.push({source , -1}) ;\n    while(!q.empty()){\n        // current node\n        int node = q.front().first ;\n        // parent node\n        int parent = q.front().second ;\n        // after traversing the current node make sure that we pop out the node \n        // this ensures that we do not visit that node again\n        q.pop();\n\n        // now go in the current node and find its adjacent node\n        for(auto adjacentNode : graph[node]){\n            // if the adjacent node has not been visited then mark it as visited \n            if(!visited[adjacentNode]){\n                visited[adjacentNode] = 1 ;\n                q.push({adjacentNode , node}) ;\n            }\n            // now if the adjacent node has been visited and it is not the parent node \n            // then surely this means that we have a cycle present in the graph\n            else if(parent != adjacentNode){\n                // so return true if there is a cycle\n                return true ;\n            }\n        }\n    }\n\n    return false ;\n}\n\n\n\nbool bfs(vector<vector<int>> &graph , int m ){\n    vector<int> visited(graph.size() + 1, 0) ;\n    for(int i = 0 ; i < graph.size() ; i++){\n        if(!visited[i]){\n            if(detect(i , graph , visited)) return true ;\n        }\n    }\n\n    return false ;\n}\n\nint main(){\n    int n , m ;\n    cin >> n >> m ;\n    \n    vector<vector<int>> graph(n+1) ;\n     \n    for(int i = 0 ; i < m ; i++){\n        int u , v ;\n        cin >> u >>v ;\n        graph[u].push_back(v) ;\n        graph[v].push_back(u) ;\n    }\n\n    cout<<bfs(graph , m)<<endl  ;\n\n\n\n    return 0 ;\n}\n")))}u.isMDXComponent=!0}}]);
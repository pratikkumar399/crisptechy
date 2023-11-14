"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[4692],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4740:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const o={},a="Number of Islands(Leetcode #200)",s={unversionedId:"DsaInteviewQuestions/NumberofIslands",id:"DsaInteviewQuestions/NumberofIslands",title:"Number of Islands(Leetcode #200)",description:"200)",source:"@site/interviewseries/DsaInteviewQuestions/NumberofIslands.md",sourceDirName:"DsaInteviewQuestions",slug:"/DsaInteviewQuestions/NumberofIslands",permalink:"/crisptechy/interviewseries/DsaInteviewQuestions/NumberofIslands",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"interviewSeries",previous:{title:"Next_permutation",permalink:"/crisptechy/interviewseries/DsaInteviewQuestions/Next_permutation"},next:{title:"Pacific Atlantic Water Flow",permalink:"/crisptechy/interviewseries/DsaInteviewQuestions/PacificAtlanticWaterFlow"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:n,...o}=e;return(0,i.kt)(p,(0,r.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"number-of-islandsleetcode-200"},"Number of Islands(Leetcode #200)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Question Link :  ",(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/number-of-islands/"},"Number of Islands"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Question Description :\n",(0,i.kt)("inlineCode",{parentName:"li"},"Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:t(2512).Z,width:"794",height:"332"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Approach : So this question is simple. All we have to do is that find a grid with value 1 and do a dfs call on it . And in the dfs call mark all the adjacent 1's with 2 and then move in 4 directions. And count all the number of dfs calls we made. Thats it.")),(0,i.kt)("p",null,"Lets write dfs code first : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"\n    class Solution {\n        \n        void dfs(vector<vector<char>>& grid, int i, int j) {\n            if(i < 0 || j < 0 || i >= grid.size() || j >= grid[0].size() || grid[i][j] != '1') {\n                return;\n            }\n            grid[i][j] = '2';\n            dfs(grid, i+1, j);\n            dfs(grid, i-1, j);\n            dfs(grid, i, j+1);\n            dfs(grid, i, j-1);\n        }\n        \n    public:\n        int numIslands(vector<vector<char>>& grid) {\n            int n = grid.size();\n            int m = grid[0].size();\n            int count = 0;\n            for(int i = 0; i < n; i++) {\n                for(int j = 0; j < m; j++) {\n                    if(grid[i][j] == '1') {\n                        dfs(grid, i, j);\n                        count++;\n                    }\n                }\n            }\n            return count;\n        }\n    };\n\n")),(0,i.kt)("blockquote",null,(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("p",{parentName:"blockquote"},"Time Complexity : O(n*m) where n is the number of rows and m is the number of columns."))),(0,i.kt)("blockquote",null,(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("p",{parentName:"blockquote"},"Space Complexity : O(n*m) where n is the number of rows and m is the number of columns."))),(0,i.kt)("p",null,"Now lets look at bfs code: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"\n    class Solution {\n        public: \n\n            int numIslands(vector<vector<char>> &grid){ \n                int n = grid.size();\n                int m = grid[0].size();\n                int count = 0;\n                vector<vector<int>> dir = {{1,0},{-1,0},{0,1},{0,-1}};\n                for(int i = 0; i < n; i++){\n                    for(int j = 0; j < m; j++){\n                        if(grid[i][j] == '1'){\n                            count++;\n                            queue<pair<int,int>> q;\n                            q.push({i,j});\n                            grid[i][j] = '2';\n                            while(!q.empty()){\n                                pair<int,int> p = q.front();\n                                q.pop();\n                                for(int k = 0; k < 4; k++){\n                                    int x = p.first + dir[k][0];\n                                    int y = p.second + dir[k][1];\n                                    if(x >= 0 && y >= 0 && x < n && y < m && grid[x][y] == '1'){\n                                        q.push({x,y});\n                                        grid[x][y] = '2';\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n                return count;\n            }\n    };\n\n")))}d.isMDXComponent=!0},2512:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image-18-9e90d28b01961def9f3aaf81bc17614b.png"}}]);
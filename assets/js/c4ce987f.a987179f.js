"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[7851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),l=c(n),d=o,f=l["".concat(u,".").concat(d)]||l[d]||p[d]||i;return n?r.createElement(f,s(s({ref:t},h),{},{components:n})):r.createElement(f,s({ref:t},h))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[l]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},s="Course Schedule",a={unversionedId:"DsaInteviewQuestions/CourseSchedule",id:"DsaInteviewQuestions/CourseSchedule",title:"Course Schedule",description:"Problem Statement",source:"@site/interviewseries/DsaInteviewQuestions/CourseSchedule.md",sourceDirName:"DsaInteviewQuestions",slug:"/DsaInteviewQuestions/CourseSchedule",permalink:"/crisptechy/interviewseries/DsaInteviewQuestions/CourseSchedule",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"interviewSeries",previous:{title:"BestTimetoBuyAndSellStocks",permalink:"/crisptechy/interviewseries/DsaInteviewQuestions/BestTimetoBuyAndSellStocks"},next:{title:"FindtheDuplicateNumber",permalink:"/crisptechy/interviewseries/DsaInteviewQuestions/FindtheDuplicateNumber"}},u={},c=[{value:"Problem Statement",id:"problem-statement",level:2}],h={toc:c},l="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"course-schedule"},"Course Schedule"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1. Some courses may have prerequisites,\nfor example to take course 0 you have to first take course 1, which is expressed as a pair: ","[0,1]",". Given the total number of\ncourses and a list of prerequisite pairs, is it possible for you to finish all courses?"),(0,o.kt)("p",null,"Problem link: ",(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/course-schedule/"},"Course Schedule")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Approach for this : \n\nLets first discuss how to appraoch this problem and arrive at a solution.\n\nThe first thing that comes to our mind is that we need to find the topological sort of \nthe graph.This is because we need to find the order in which the courses need to be taken. \nSo we need to find the topological sort of the graph. Topological sort is the order in\nwhich the nodes of the graph can be visited such that the nodes which have dependencies \nare visited after the nodes on which they are dependent.\n\nSo we need to find the topological sort of the graph. We can use the bfs approach to find\nthe topological sort of the graph. We will use the indegree array to keep track of the\nindegree of each node. We will use the queue to keep track of the nodes which have indegree 0.\n\nWhy are we finding indegree of each node? \nThis is because we need to find the nodes which have indegree 0. These are the nodes which\ncan be visited first. So we will find the nodes which have indegree 0 and push them \ninto the queue. \nWe will then pop the nodes from the queue and reduce the indegree of the nodes which \nare adjacent to it. \nIf the indegree of the adjacent node becomes 0, we will push it into the queue. We will\nkeep doing this until the queue becomes empty. If the queue becomes empty and the number of \nnodes visited is equal to the number of nodes in the graph, then we can say that the graph \nis a DAG and we can return true. Else we will return false. \n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Lets see the bfs approach first : ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"\nclass Solution {\npublic:\n  bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {\n      vector<vector<int>> graph(numCourses);\n        vector<int> indegree(numCourses,0);\n        // create the graph and find the indegree of each node\n        for(int i=0;i<prerequisites.size();i++){\n            graph[prerequisites[i][1]].push_back(prerequisites[i][0]);\n            indegree[prerequisites[i][0]]++;\n        }\n        queue<int> q;\n        // check if the indegree is zero \n        for(int i=0;i<numCourses;i++){\n            if(indegree[i]==0){\n                q.push(i);\n            }\n        }\n        int count=0;\n        while(!q.empty()){\n            int curr=q.front();\n            q.pop();\n            // count the number of bfs calls\n            count++;\n            for(auto it:graph[curr]){\n                indegree[it]--;\n                if(indegree[it]==0){\n                    q.push(it);\n                }\n            }\n        }\n        if(count==numCourses){\n            return true;\n        }\n        return false;\n  }\n}; \n\n")))}p.isMDXComponent=!0}}]);
# Course Schedule

## Problem Statement
There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1. Some courses may have prerequisites,
for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]. Given the total number of
courses and a list of prerequisite pairs, is it possible for you to finish all courses?

Problem link: [Course Schedule](https://leetcode.com/problems/course-schedule/)

    Approach for this : 

    Lets first discuss how to appraoch this problem and arrive at a solution.
    
    The first thing that comes to our mind is that we need to find the topological sort of 
    the graph.This is because we need to find the order in which the courses need to be taken. 
    So we need to find the topological sort of the graph. Topological sort is the order in
    which the nodes of the graph can be visited such that the nodes which have dependencies 
    are visited after the nodes on which they are dependent.

    So we need to find the topological sort of the graph. We can use the bfs approach to find
    the topological sort of the graph. We will use the indegree array to keep track of the
    indegree of each node. We will use the queue to keep track of the nodes which have indegree 0.

    Why are we finding indegree of each node? 
    This is because we need to find the nodes which have indegree 0. These are the nodes which
    can be visited first. So we will find the nodes which have indegree 0 and push them 
    into the queue. 
    We will then pop the nodes from the queue and reduce the indegree of the nodes which 
    are adjacent to it. 
    If the indegree of the adjacent node becomes 0, we will push it into the queue. We will
    keep doing this until the queue becomes empty. If the queue becomes empty and the number of 
    nodes visited is equal to the number of nodes in the graph, then we can say that the graph 
    is a DAG and we can return true. Else we will return false. 




> Lets see the bfs approach first : 

```cpp

class Solution {
public:
  bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
      vector<vector<int>> graph(numCourses);
        vector<int> indegree(numCourses,0);
        // create the graph and find the indegree of each node
        for(int i=0;i<prerequisites.size();i++){
            graph[prerequisites[i][1]].push_back(prerequisites[i][0]);
            indegree[prerequisites[i][0]]++;
        }
        queue<int> q;
        // check if the indegree is zero 
        for(int i=0;i<numCourses;i++){
            if(indegree[i]==0){
                q.push(i);
            }
        }
        int count=0;
        while(!q.empty()){
            int curr=q.front();
            q.pop();
            // count the number of bfs calls
            count++;
            for(auto it:graph[curr]){
                indegree[it]--;
                if(indegree[it]==0){
                    q.push(it);
                }
            }
        }
        if(count==numCourses){
            return true;
        }
        return false;
  }
}; 

```


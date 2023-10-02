
## BFS Algorithm

```
BFS is an algorithm for searching a graph data structure for a node that satisfies a given property. It starts at the tree root and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.

Extra memory, usually a queue, is needed to keep track of the child nodes that were encountered but not yet explored.
```

> Algorithm 
 
1. Maintain a queue of vertices to be visited.
2. Create a visited vector to check if a vertex has been visited or not.
3. Pop the front of the vertex queue and check the adjacent nodes.
4. All the nodes in the bfs algo is visited exactly once.
5. If the node is not visited, mark it as visited and push it into the queue.
6. Repeat the process until the queue is empty.
7. If the queue is empty, then the bfs traversal is complete.

> Time Complexity : O(V+E) where V is number of vertices in the graph and E is number of edges in the graph.

> Space Complexity : O(V) where V is number of vertices in the graph.


```cpp

#include<bits/stdc++.h> 
using namespace std ;

class Graph{
 
  int V ;
  vector<vector<int>> adj;
  public : 
  Graph(int V) ; // constructor
  // function to add an edge to the graph
  void addEdge(int v , int u) ; 
  // function to do bfs traversal from a given source
  void bfs(int source) ;

};

Graph::Graph(int V){
	this->V = V ;
	adj.resize(V) ;
}
void Graph::addEdge(int v, int u)
{
    adj[v].push_back(u);
    adj[u].push_back(v);
}

void Graph::bfs(int source){
	// mark all the vertices as not visited 
	vector<bool> visited(V , false) ;
	// create a queue a bfs 
	queue<int> q ;
	visited[source] = true ;
	q.push(source) ;

	while(!q.empty()){
		// dequeue a vertex from queue
		int u= q.front() ;
		cout<<u<<" "<<endl ;
		q.pop() ;
		for(auto v : adj[u]){
			if(!visited[v]){
				visited[v] = true ;
				q.push(v) ;
			}
		}
	}


}

int main(){
	int n, m;
    cin >> n >> m;
    // adjacency list for undirected graph
    // time complexity: O(2E)

    Graph g(n) ;
    vector<int> adj[n];
    for (int i = 0; i < m; i++)
    {
        int u, v;
        cin >> u >> v;
        g.addEdge(u , v) ;
    }
    int start ;
    cin>> start ;

    g.bfs(2) ;


	return 0 ;
}

```
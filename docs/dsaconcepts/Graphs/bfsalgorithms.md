
## BFS Algorithm

```
BFS is an algorithm for searching a graph data structure for a node that satisfies a given property. It starts at the tree root and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.

Extra memory, usually a queue, is needed to keep track of the child nodes that were encountered but not yet explored.
```

### Algorithm 
 
1. Maintain a queue of vertices to be visited.
2. Create a visited vector to check if a vertex has been visited or not.
3. Pop the front of the vertex queue and check the adjacent nodes.
4. All the nodes in the bfs algo is visited exactly once.
5. If the node is not visited, mark it as visited and push it into the queue.
6. Repeat the process until the queue is empty.
7. If the queue is empty, then the bfs traversal is complete.

> Time Complexity : O(V+E) where V is number of vertices in the graph and E is number of edges in the graph.

> Space Complexity : O(V) where V is number of vertices in the graph.


### Code
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
    // source vertex
    int start ;
    cin>> start ;

    // bfs traversal from source
    g.bfs(source) ;


	return 0 ;
}

```

### Another version of Bfs

```cpp

    vector<int> bfs(vector<vector<int>>& graph, int start){
        vector<int> visited(graph.size(), false); 
        vector<int> result; 

        queue<int> q; 
        visited[start] = true; 
        q.push(start); 

        while(!q.empty()){
            int current = q.front(); 
            q.pop(); 
            result.push_back(current); 

            for(auto it: graph[current]) { 
                if(!visited[it]){
                    visited[it] = true; 
                    q.push(it); 
                }
            }
        }
        return result; 
    }

```

### Tracing the path of the bfs traversal

>> Finding shortest path using bfs in undirected unweighted graph

```cpp
#include <bits/stdc++.h>
using namespace std;

// Function to add an edge to the graph (undirected).
void addEdge(vector<vector<int>> &graph, int from, int to)
{
    graph[from].push_back({to});
    graph[to].push_back({from}); // Add the reverse edge for an undirected graph.
}

// Function to perform BFS and return the previous nodes for path reconstruction.
vector<int> bfs(const vector<vector<int>> &graph, int start)
{
    int n = graph.size();
    vector<int> prev(n, -1);
    vector<bool> visited(n, false);
    queue<int> q;

    q.push(start);
    visited[start] = true;

    while (!q.empty())
    {
        int node = q.front();
        cout << node << "->";
        q.pop();

        for (auto edge : graph[node])
        {
            int to = edge;
            if (!visited[to])
            {
                visited[to] = true;
                prev[to] = node;
                q.push(to);
            }
        }
    }
    cout << endl;

    return prev;
}

// Function to reconstruct the path from start to end using the previous nodes.
vector<int> reconstructPath(vector<int> &prev, int start, int end)
{
    vector<int> path;
    for (auto at = end; at != -1; at = prev[at])
    {
        path.push_back(at);
    }
    reverse(path.begin(), path.end());

    if (path[0] == start)
    {
        return path; // Path found
    }

    path.clear(); // No path found, return an empty vector.
    return path;
}

// Function to format the path as a string.
string formatPath(vector<int> &path)
{
    string result;
    for (int i = 0; i < path.size(); i++)
    {
        result += to_string(path[i]);
        if (i < path.size() - 1)
        {
            result += " -> ";
        }
    }
    return result;
}

int main()
{
    int n = 6; // Number of nodes in the graph
    vector<vector<int>> graph(n);

    // Add edges to the graph (undirected).
    addEdge(graph, 0, 1);
    addEdge(graph, 0, 2);
    addEdge(graph, 1, 3);
    addEdge(graph, 2, 4);
    addEdge(graph, 3, 5);

    int start = 0;
    int end = 5;

    vector<int> prev = bfs(graph, start);
    vector<int> path = reconstructPath(prev, start, end);

    string formattedPath = formatPath(path);
    cout << "Path: " << formattedPath << endl;

    return 0;
}
```




## OverView of the Algorithm

It is an algorithm used to efficiently manage dynamic set of elements partioned into disjoint sets. Also known as `DisJoint Set Union` or `Merge Find Set`.

The primary operations performed by this algorihm is Union(merge two sets) and Find(Find the set to which an element belongs to).

Key operations: 
- `MakeSet(x)`: Creates a new set whose only member is x.
- `Union(x, y)`: Unites the dynamic sets that contain x and y, say Sx and Sy, into a new set that is the union of these two sets.
- `Find(x)`: Returns a pointer to the representative of the (unique) set containing element x.


## Implementation

> Initial Steps:

  * Every element starts as a single set.
  * then we merge the sets as we go along.
  * then we combine the sets containing the elements we want to merge.

### Naive Implementation

* Information about sets of elements will be kept in `parent` array.
* Initially, each element is in its own set, so the parent of each element is itself.
* To create a new set, we simply add a new element to the end of the array and set its parent to itself.

```cpp
void make_set(int v) {
    parent[v] = v;
}
```
* To combine two sets `union_sets(a,b)` , we first find the representative of the set in which a is located, and then we find representative of the set in which b is located. If they are different, then we simply assign the parent of the first set to the second set.

```cpp

void find_sets(int v){
    if(v == parent[v])
        return v;
    return find_sets(parent[v]);
}

void union_sets(int a, int b){
    a = find_sets(a);
    b = find_sets(b);
    // if the parent of both the sets are not same then we merge them.
    if(a != b)
        parent[b] = a;
}
```

> Here the time complexity of `find_sets` is `O(n)`  and we need to improve it.


## Path Compression

* The idea is to make the nodes on the path from the node to the root point directly to the root.

```cpp
int find_sets(int v){
    if(v == parent[v])
        return v;
    return parent[v] = find_sets(parent[v]);
}
```
> Here the time complexity of `find_sets` is `O(logn)`.

## Union by Rank/Size

<b><u>`Union By size`</u></b>

* Here the size of the tree is used as a metric to decide which tree should be the parent.
* The smaller tree is merged into the larger tree.

```cpp

void make_set(int v){
    parent[v] = v;
    // initially the size of each set is 1.
    size[v] = 1;
}

void union_sets(int a, int b){
    a = find_sets(a);
    b = find_sets(b);
    // if the parent of both the sets are not same then we merge them.
    if(a != b){
        // if the size of set a is less than the size of set b then we merge a into b.
        if(size[a] < size[b])
            swap(a,b);
        parent[b] = a;
        size[a] += size[b];
    }
}
```

<b><u>`Union By Rank`</u></b>

* Here the rank of the tree is used as a metric to decide which tree should be the parent.
* The smaller tree is merged into the larger tree.

```cpp

void make_set(int v){
    parent[v] = v;
    // initially the rank of each set is 0.
    rank[v] = 0;
}

void union_sets(int a, int b){
    a = find_sets(a);
    b = find_sets(b);
    // if the parent of both the sets are not same then we merge them.
    if(a != b){
        // if the rank of set a is less than the rank of set b then we merge a into b.
        if(rank[a] < rank[b])
            swap(a,b);
        parent[b] = a;
        // if the rank of both the sets are same then we increase the rank of the set a by 1.
        if(rank[a] == rank[b])
            rank[a]++;
    }
}
```



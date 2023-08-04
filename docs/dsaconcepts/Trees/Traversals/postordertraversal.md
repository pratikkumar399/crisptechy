## PostOrder Traversal

Recursive Code for it: 

```cpp
class Tree{
    public:
    vector<int> postOrderTraversal(TreeNode* root) {
        vector<int> list;
        dfs(root,list);
        return list;
    }

    private:
    void dfs(TreeNode* root, vector<int> list){
        if(root == NULL){
            return;
        }
        dfs(root->left,list);
        dfs(root->right,list);
        list.push_back(root);
    }   
}
```

Iterative Code for it: 

> Idea behind it : Similar to PreOrder Traversal, but we need to reverse the list at the end. We need to reverse the list because we are pushing the elements in the order of root->right->left, so we need to reverse it to get the order of left->right->root.


```cpp
class Tree {
public:
    vector<int> postorderTraversal(TreeNode* root) {
        vector<int> tree;
        if(root==NULL)return tree;
        stack<TreeNode*> st;
        st.push(root);
        while(!st.empty()){
            root=st.top();
            st.pop();
            tree.push_back(root->val);
            if(root->left != NULL)st.push(root->left);
            if(root->right != NULL)st.push(root->right);
        }
        reverse(tree.begin(),tree.end());
        return tree;
    }
};
```

Another iterative approach using one stack : 

```cpp
class Tree {
public:
    vector<int> postorderTraversal(TreeNode* root) {
        if(root == nullptr) return {};

        stack<TreeNode*> st;
        TreeNode *prevNode = nullptr;
        // the idea is that we will keep track of the previously visited node 
        // whether the right child has already been visited or not

        vector<int> res;
        while(root != nullptr || !st.empty()) {
            // lets go to the leftmost node
            while(root != nullptr) {
                st.push(root);
                root = root->left;
            }
            // now we are at the leftmost node
            TreeNode *currNode = st.top();
            // if the right child is null or the right child has already been visited that means we can visit the current node. 
            if(currNode->right == nullptr || currNode->right == prevNode) {
                res.push_back(currNode->val);
                st.pop();
                prevNode = currNode;
            } else {
                root = currNode->right;
            }
        }
    }
};
```

> Time  Complexity : O(n) 

> Space Complexity : O(n)
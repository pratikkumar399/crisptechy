```Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.```

> Approach : Run preorder Traversals on the both the tree and store their result in a list and then compare the list(vector in cpp). 
> Another approach : traverse to the left and right of the tree and compare the values of the nodes. If at any point the values are not equal then return false. If the traversal is complete then return true.

> We will proceed with the recursive approach.\

Code : 

```cpp
class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        if(p==NULL && q==NULL) return true;
        if(p==NULL || q==NULL) return false;
        if(p->val!=q->val) return false;
        return isSameTree(p->left,q->left) && isSameTree(p->right,q->right);
    }
};
```
> Time complexity : O(n) 
> Space complexity : O(H), where H is the height of the tree


Vector apporach : 

```cpp

    /**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<int> preorderTraversal(TreeNode* root ,vector<int> &ans) {
        
        pre(root,ans);
        return ans ;
    }
    
    void pre(TreeNode* root , vector<int> &ans){
         if(root == NULL) {
           ans.push_back(-1);
           return;
         }
        ans.push_back(root->val);
        pre(root->left,ans);
        pre(root->right ,ans);
      
  }

  
    bool isSameTree(TreeNode* p, TreeNode* q) {
        vector<int> tree1 ,tree2;
        preorderTraversal(p,tree1);
        preorderTraversal(q,tree2);
        if(tree1 == tree2) return true;
        return false;        
    }
};
```



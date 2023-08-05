## Binary Tree

A binary tree is a tree data structure where each node has at most two child nodes, referred to as the left child and the right child

➡️ Here's a brief overview of binary trees:

* The topmost node of a binary tree is called the root node.
* Each node can have at most two child nodes, referred to as the left child and the right child.
* Nodes with no children are called leaf nodes.
* The height of a binary tree is the length of the longest path from the root node to a leaf node.
* The depth of a node is the length of the path from the root node to that node.
* In-order traversal of a binary tree visits the left subtree, then the node itself, and then the right subtree.

> Lets see the implementation of the binary tree to understand it in more detail:
  * There will be insertion and deletion methods for the tree

```cpp
#include <bits/stdc++.h>
using namespace std;

class Node {
public:
    Node* left;
    Node* right;
    int val = 0;

    Node(int val) {
        left = nullptr;
        right = nullptr;
        this->val = val;
    }
};


Node* buildTree(Node *root){
	cout<<"Enter the value : "<<endl;
	int data;
	cin>>data;
	root = new Node(data);

	if(data == -1){
		return nullptr;
	}

	cout<<"Enter the value that you want to enter in the left of : "<< data<<endl;
	root->left = buildTree(root->left);
	cout<<"Enter the value that you want to enter in the right : " << data<<endl;
	root->right = buildTree(root->right);


	return root;

}

class BinaryTree {
public:
    Node* root;
    BinaryTree() {
        root = nullptr;
    }

    void insert(int val) {
        if (root == nullptr) {
            root = new Node(val);
            return;
        }
        queue<Node*> q;
        q.push(root);

        while (!q.empty()) {
            auto top = q.front();
            q.pop();

            if (top->left == nullptr) {
                top->left = new Node(val);
                return;
            } else if (top->right == nullptr) {
                top->right = new Node(val);
                return;
            } else {
                q.push(top->left);
                q.push(top->right);
            }
        }
    }

    void levelorderTraversal(Node* root) {
        queue<Node*> q;
        q.push(root);
        q.push(nullptr);

        while (!q.empty()) {
            auto front = q.front();
          
            q.pop();


            if(front == nullptr){
            	cout<<endl;
            	if(!q.empty()){
            		q.push(nullptr);
            	}
            }
            else{
            	cout << front->val << " ";
            	if (front->left)
                q.push(front->left);
            	if (front->right)
                q.push(front->right);
            }

            
        }
    }
};


void levelorderTraversal(Node* root) {
        queue<Node*> q;
        q.push(root);
        q.push(nullptr);

        while (!q.empty()) {
            auto front = q.front();
          
            q.pop();


            if(front == nullptr){
            	cout<<endl;
            	if(!q.empty()){
            		q.push(nullptr);
            	}
            }
            else{
            	cout << front->val << " ";
            	if (front->left)
                q.push(front->left);
            	if (front->right)
                q.push(front->right);
            }

            
        }
    }


int main() {
    // BinaryTree tree;
    // tree.insert(1);
    // tree.insert(2);
    // tree.insert(3);
    // tree.insert(4);
    // tree.insert(5);
    // tree.insert(6);
    // tree.insert(7);

    // tree.levelorderTraversal(tree.root);

    Node *root = nullptr;
    root = buildTree(root);

    levelorderTraversal(root);

    return 0;
}

```
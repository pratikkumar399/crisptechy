"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(i,".").concat(d)]||u[d]||h[d]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},s=void 0,l={unversionedId:"dsaconcepts/Trees/Ancestors/LowestCommonAncestors",id:"dsaconcepts/Trees/Ancestors/LowestCommonAncestors",title:"LowestCommonAncestors",description:"1. Define a function to find the LCA:",source:"@site/docs/dsaconcepts/Trees/Ancestors/LowestCommonAncestors.md",sourceDirName:"dsaconcepts/Trees/Ancestors",slug:"/dsaconcepts/Trees/Ancestors/LowestCommonAncestors",permalink:"/crisptechy/docs/dsaconcepts/Trees/Ancestors/LowestCommonAncestors",draft:!1,editUrl:"https://github.com/pratikkumar399/crisptechy/tree/master/docs/dsaconcepts/Trees/Ancestors/LowestCommonAncestors.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"topologicalsort",permalink:"/crisptechy/docs/dsaconcepts/Graphs/topologicalsort"},next:{title:"SameTree",permalink:"/crisptechy/docs/dsaconcepts/Trees/IntuitiveBinaryTrees/SameTree"}},i={},c=[],p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"In the context of binary trees, the LCA is defined as the deepest (furthest from the root) node that is a common ancestor of two specified nodes.")),(0,o.kt)("p",null,"Algorithm:"),(0,o.kt)("p",null,"Here's a simple algorithm to find the Lowest Common Ancestor (LCA) of two nodes in a binary tree:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. Define a function to find the LCA:\n     - The function takes three parameters: the root of the binary tree, and the two nodes, p and q, for which we want to find the LCA.\n     - The function returns the LCA node or null if one or both of the nodes are not present in the tree.\n\n2. If the root is null, return null (base case).\n\n3. If the root is either p or q, return the root itself as it is the LCA.\n\n4. Recursively find the LCA in the left and right subtrees:\n     - Call the function recursively for the left child of the root: LCA(root.left, p, q).\n     - Call the function recursively for the right child of the root: LCA(root.right, p, q).\n\n5. If both the left and right recursive calls return non-null values, it means p and q are present in different subtrees, and the current root is the LCA. Return the root.\n\n6. If only one of the left or right recursive calls returns a non-null value, it means both p and q are present in the same subtree. Return the non-null value as the LCA.\n\n7. If both the left and right recursive calls return null, it means either p or q (or both) is not present in the tree. Return null as the LCA.\n\n")),(0,o.kt)("p",null,"This algorithm finds the LCA by recursively traversing the binary tree and checking for the presence of nodes p and q in its left and right subtrees. By considering the cases where the nodes are present in different subtrees or in the same subtree, the algorithm determines the LCA effectively."),(0,o.kt)("p",null,"Iterative Implementation of the lca in a binary tree:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\n        if(root == p or root == q or root==nullptr) return root;\n\n        //iterative approach\n        stack<TreeNode*> st;\n        unordered_map<TreeNode*,TreeNode*> parent;\n        parent[root]=nullptr;\n        st.push(root);\n\n        while(!st.empty() and (parent.find(p)==parent.end() or parent.find(q)==parent.end())){\n            auto node=st.top();\n            st.pop();\n\n            if(node->left!=nullptr){\n                parent[node->left]=node;\n                st.push(node->left);\n            }\n            if(node->right!=nullptr){\n                parent[node->right]=node;\n                st.push(node->right);\n            }\n        }\n\n        unordered_set<TreeNode*> ancestors;\n        while(p!=nullptr){\n            ancestors.insert(p);\n            p=parent[p];\n        }\n\n        while(ancestors.find(q)==ancestors.end()){\n            q=parent[q];\n        }\n        return q;   \n}\n")),(0,o.kt)("p",null,"The time complexity of this approach is O(h), where h is the height of the BST. In the worst case, the height of a BST is O(n), where n is the number of nodes in the tree."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Now lets look at the recurive implementaion:")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\n    \n        if(root == p or root == q or root==nullptr) return root;\n\n        auto left_lca=lowestCommonAncestor(root->left,p,q);\n        auto right_lca=lowestCommonAncestor(root->right,p,q);\n\n        if(left_lca != nullptr and right_lca  != nullptr) return root;\n        return (left_lca != nullptr)? left_lca : right_lca;\n}\n\n")),(0,o.kt)("p",null,"Recursive implementation of ancestor in a binary search tree:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"\nTreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\n    if (root == nullptr || p == nullptr || q == nullptr) {\n        return nullptr;\n    }\n\n    int pVal = p->val;\n    int qVal = q->val;\n    int nodeVal = root->val;\n    // checking if both the p and q fall on the left side of the tree\n    if (pVal < nodeVal && qVal < nodeVal) {\n        return lowestCommonAncestor(root->left, p, q);\n    }\n    // checking if both the p and q fall on the right side of the tree \n    else if (pVal > nodeVal && qVal > nodeVal) {\n        return lowestCommonAncestor(root->right, p, q);\n    }\n    // if both the p and q fall on the different sides of the tree\n     else {\n        return root;\n    }\n\n    return nullptr;\n}\n\n")),(0,o.kt)("p",null,"Iterative implementation of ancestor in a binary search tree:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"\nTreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\n\n     if(root == p or root == q or root==nullptr) return root;\n\n     //iterzaive approach\n     while(root!=nullptr){\n         if(root->val > p->val and root->val > q->val){\n             root = root->left;\n         }else if(root->val < p->val and root->val < q->val){\n             root = root->right;\n         }else{\n             return root;\n         }\n     }\n    return root;\n}\n\n")))}h.isMDXComponent=!0}}]);
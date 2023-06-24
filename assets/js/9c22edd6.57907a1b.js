"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[517],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},i=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(t),v=o,f=u["".concat(l,".").concat(v)]||u[v]||d[v]||a;return t?n.createElement(f,s(s({ref:r},i),{},{components:t})):n.createElement(f,s({ref:r},i))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=v;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[u]="string"==typeof e?e:o,s[1]=c;for(var p=2;p<a;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},2994:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={},s=void 0,c={unversionedId:"dsaconcepts/Trees/Traversals/preordertraversal",id:"dsaconcepts/Trees/Traversals/preordertraversal",title:"preordertraversal",description:"PreOrder Traversal",source:"@site/docs/dsaconcepts/Trees/Traversals/preordertraversal.md",sourceDirName:"dsaconcepts/Trees/Traversals",slug:"/dsaconcepts/Trees/Traversals/preordertraversal",permalink:"/crisptechy/docs/dsaconcepts/Trees/Traversals/preordertraversal",draft:!1,editUrl:"https://github.com/pratikkumar399/crisptechy/tree/master/docs/dsaconcepts/Trees/Traversals/preordertraversal.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"postordertraversal",permalink:"/crisptechy/docs/dsaconcepts/Trees/Traversals/postordertraversal"},next:{title:"binarytree",permalink:"/crisptechy/docs/dsaconcepts/Trees/binarytree"}},l={},p=[{value:"PreOrder Traversal",id:"preorder-traversal",level:3}],i={toc:p},u="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"preorder-traversal"},"PreOrder Traversal"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Iterative Preorder"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Order of traversal : root->left->right"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Tree {\npublic:\n    vector<int> preorderTraversal(TreeNode* root) {\n        vector<int> tree;\n        if(root==NULL)return tree;\n        stack<TreeNode*> st;\n        st.push(root);\n        while(!st.empty()){\n            root=st.top();\n            st.pop();\n            tree.push_back(root->val);\n            if(root->right != NULL)st.push(root->right);\n            if(root->left != NULL)st.push(root->left);\n        }\n        \n        return tree;\n    }\n};\n")),(0,o.kt)("p",null,"Recursive Code for it: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Tree{\n    public:\n    vector<int> preorderTraversal(TreeNode* root) {\n        vector<int> list;\n        dfs(root,list);\n        return list;\n    }\n\n    private:\n    void dfs(TreeNode* root, vector<int> list){\n        if(root == NULL){\n            return;\n        }\n        list.push_back(root);\n        dfs(root->left,list);\n        dfs(root->right,list);\n    }   \n}\n")))}d.isMDXComponent=!0}}]);
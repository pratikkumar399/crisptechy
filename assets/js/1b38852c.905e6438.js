"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={},i=void 0,s={unversionedId:"NodeJs/CommonJs",id:"NodeJs/CommonJs",title:"CommonJs",description:"In Node.js, the module system is based on the CommonJS pattern. CommonJS is a module specification that defines a way to organize and share reusable JavaScript code. Node.js adopted the CommonJS module system to provide a structured approach to modularize code in Node.js applications.",source:"@site/docs/NodeJs/CommonJs.md",sourceDirName:"NodeJs",slug:"/NodeJs/CommonJs",permalink:"/crisptechy/docs/NodeJs/CommonJs",draft:!1,editUrl:"https://github.com/pratikkumar399/crisptechy/tree/master/docs/NodeJs/CommonJs.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Node_intro",permalink:"/crisptechy/docs/NodeJs/Node_intro"},next:{title:"Os_module",permalink:"/crisptechy/docs/NodeJs/Os_module"}},l={},p=[],d={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In Node.js, the module system is based on the CommonJS pattern. CommonJS is a module specification that defines a way to organize and share reusable JavaScript code. Node.js adopted the CommonJS module system to provide a structured approach to modularize code in Node.js applications."),(0,r.kt)("p",null,"Here's an explanation of how CommonJS modules work in Node.js:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Module Definition"),": Each Node.js file is considered a module. In a module file, you can define functions, objects, or variables that you want to make available to other modules. You do this by using the ",(0,r.kt)("inlineCode",{parentName:"li"},"module.exports")," object.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Example module file: greetings.js\n\nfunction sayHello() {\n  console.log('Hello!');\n}\n\nfunction sayGoodbye() {\n  console.log('Goodbye!');\n}\n\nmodule.exports = {\n  sayHello,\n  sayGoodbye\n};\n")),(0,r.kt)("p",null,"In the example above, the ",(0,r.kt)("inlineCode",{parentName:"p"},"greetings.js")," module exports two functions, ",(0,r.kt)("inlineCode",{parentName:"p"},"sayHello")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sayGoodbye"),", by assigning them to the ",(0,r.kt)("inlineCode",{parentName:"p"},"module.exports")," object."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Module Import"),": To use the functionality provided by another module, you need to import it in your code. This is done using the ",(0,r.kt)("inlineCode",{parentName:"li"},"require")," function and specifying the path to the module file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Example module usage: app.js\n\nconst greetings = require('./greetings');\n\ngreetings.sayHello(); // Outputs: Hello!\ngreetings.sayGoodbye(); // Outputs: Goodbye!\n")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"app.js")," file, the ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," function is used to import the ",(0,r.kt)("inlineCode",{parentName:"p"},"greetings")," module. The ",(0,r.kt)("inlineCode",{parentName:"p"},"greetings")," variable now holds the exported functions from the ",(0,r.kt)("inlineCode",{parentName:"p"},"greetings.js")," module, and you can invoke them as needed."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Module.exports and exports"),": In Node.js, the ",(0,r.kt)("inlineCode",{parentName:"li"},"module.exports")," object is the main object that gets exported from a module. However, there is a shorthand notation using the ",(0,r.kt)("inlineCode",{parentName:"li"},"exports")," object that allows you to directly assign properties to ",(0,r.kt)("inlineCode",{parentName:"li"},"module.exports"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Example module file: math.js\n\nexports.add = (a, b) => a + b;\nexports.subtract = (a, b) => a - b;\n")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"math.js")," module file, the properties ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"subtract")," are directly assigned to ",(0,r.kt)("inlineCode",{parentName:"p"},"exports"),". This shorthand notation is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"module.exports.add = ...")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"module.exports.subtract = ..."),"."),(0,r.kt)("p",null,"It's important to note that when using the shorthand ",(0,r.kt)("inlineCode",{parentName:"p"},"exports")," notation, you cannot reassign the ",(0,r.kt)("inlineCode",{parentName:"p"},"exports")," object itself. For example, the following will not work as expected:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Incorrect usage of exports\nexports = {\n  // properties\n};\n")),(0,r.kt)("p",null,"To correctly export an object using ",(0,r.kt)("inlineCode",{parentName:"p"},"exports"),", you need to assign properties directly to it, as shown in the previous example."),(0,r.kt)("p",null,"CommonJS modules provide a convenient way to organize and share code in Node.js applications. They allow you to encapsulate functionality into separate modules and import them when needed, promoting code reuse and maintainability."))}c.isMDXComponent=!0}}]);
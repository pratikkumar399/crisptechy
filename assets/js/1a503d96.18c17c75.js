"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),h=s,m=d["".concat(i,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:s,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),s=(n(7294),n(3905));const o={},a=void 0,c={unversionedId:"NodeJs/ChildProcess",id:"NodeJs/ChildProcess",title:"ChildProcess",description:"Child processes in Node.js are independent processes spawned by the main (parent) Node.js process. Each child process runs in its own memory space and operates concurrently with the parent process. Child processes can execute commands, scripts, or other Node.js scripts, enabling parallel processing and distributed computing.",source:"@site/docs/NodeJs/ChildProcess.md",sourceDirName:"NodeJs",slug:"/NodeJs/ChildProcess",permalink:"/crisptechy/docs/NodeJs/ChildProcess",draft:!1,editUrl:"https://github.com/pratikkumar399/crisptechy/tree/master/docs/NodeJs/ChildProcess.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Pathmodule",permalink:"/crisptechy/docs/NodeJs/Pathmodule"}},i={},p=[],l={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Child processes in Node.js are independent processes spawned by the main (parent) Node.js process. Each child process runs in its own memory space and operates concurrently with the parent process. Child processes can execute commands, scripts, or other Node.js scripts, enabling parallel processing and distributed computing."),(0,s.kt)("p",null,"In Node.js, you can define a child process using the ",(0,s.kt)("inlineCode",{parentName:"p"},"child_process")," module, which provides various methods for creating, communicating with, and managing child processes."),(0,s.kt)("p",null,"Here are the main methods available in the ",(0,s.kt)("inlineCode",{parentName:"p"},"child_process")," module for creating child processes:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"spawn"),": Spawns a new process and returns a ",(0,s.kt)("inlineCode",{parentName:"p"},"ChildProcess")," object. This method is suitable for scenarios where you want to execute a command and retrieve its output asynchronously.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"exec"),": Executes a command in a shell and buffers the output. This method is useful when you want to execute a command and capture its output after it has finished running.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"execFile"),": Executes a file with the specified arguments. This method is useful when you want to run an executable file or a script file directly.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"fork"),": Spawns a new Node.js process and establishes communication channels (IPC) between the parent and child processes. This method is specifically designed for creating child processes that are also Node.js scripts."))),(0,s.kt)("p",null,"The choice of which method to use depends on your specific requirements and the nature of the child process you want to create. Each method has its own strengths and use cases."),(0,s.kt)("p",null,"Once you have spawned a child process, you can communicate with it using various IPC mechanisms like sending messages, passing data through standard input/output streams, or using shared memory."),(0,s.kt)("p",null,"Defining a child process involves deciding which method to use, providing the necessary command or script to execute, and handling events or streams for capturing output, handling errors, and reacting to the child process's lifecycle events."),(0,s.kt)("p",null,"Remember to consider factors like error handling, security, and resource management when working with child processes to ensure proper execution and coordination between parent and child processes."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"}," Example code : ")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"\n    const { spawn } = require('child_process');\nconst cp = require('child_process');\n// Spawn a child process to execute a command\nconst childProcess = spawn('ls', ['-l', '-a']);\n\n// Capture the output of the child process\nchildProcess.stdout.on('data', (data) => {\n    console.log(`Child process output:\\n${data}`);\n});\n\n// Handle any error that occurs in the child process\nchildProcess.on('error', (err) => {\n    console.error('Child process error:', err);\n});\n\n// Handle the child process exit event\nchildProcess.on('exit', (code, signal) => {\n    console.log(`Child process exited with code ${code} and signal ${signal}`);\n});\n\nconst output = cp.execSync('node chaining.js');\nconsole.log(output.toString());\n\n\n\n")))}u.isMDXComponent=!0}}]);
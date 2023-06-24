"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[262],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?o.createElement(g,i(i({ref:n},p),{},{components:t})):o.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4621:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(7462),a=(t(7294),t(3905));const r={},i=void 0,l={unversionedId:"OOPS/Cohesion_Coupling",id:"OOPS/Cohesion_Coupling",title:"Cohesion_Coupling",description:"Cohesion and Coupling in OOPs",source:"@site/docs/OOPS/Cohesion_Coupling.md",sourceDirName:"OOPS",slug:"/OOPS/Cohesion_Coupling",permalink:"/crisptechy/docs/OOPS/Cohesion_Coupling",draft:!1,editUrl:"https://github.com/pratikkumar399/crisptechy/tree/master/docs/OOPS/Cohesion_Coupling.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pathmodule",permalink:"/crisptechy/docs/NodeJs/Pathmodule"},next:{title:"OOPS in C++",permalink:"/crisptechy/docs/OOPS/OOPS_IN_CPP"}},s={},c=[{value:"Cohesion and Coupling in OOPs",id:"cohesion-and-coupling-in-oops",level:3}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"cohesion-and-coupling-in-oops"},"Cohesion and Coupling in OOPs"),(0,a.kt)("p",null,"Cohesion and coupling are important concepts in software engineering that describe the relationships and interactions between different components or modules of a program. In C++, cohesion and coupling play a crucial role in designing and maintaining software systems. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Cohesion: Cohesion refers to the degree of relatedness or unity among the members of a module or class. It measures how closely the responsibilities and functionalities of a module or class are related to each other. High cohesion is desirable as it indicates that the members of a module work together towards a common purpose, leading to more maintainable and understandable code.")),(0,a.kt)("p",null,"Types of cohesion in C++:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Functional cohesion: Members of a module or class work together to perform a single function or task."),(0,a.kt)("li",{parentName:"ul"},"Sequential cohesion: Members are organized in a sequential order, where the output of one member becomes the input for the next member."),(0,a.kt)("li",{parentName:"ul"},"Communicational cohesion: Members operate on the same data or communicate closely with each other."),(0,a.kt)("li",{parentName:"ul"},"Temporal cohesion: Members are called in a specific order or within a specific time frame."),(0,a.kt)("li",{parentName:"ul"},"Procedural cohesion: Members are grouped based on a common procedural logic or algorithm.")),(0,a.kt)("p",null,"Example of high cohesion:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class FileManager {\npublic:\n    void openFile(const string& filename) {\n        // Code to open a file\n    }\n    \n    void readFile() {\n        // Code to read data from the file\n    }\n    \n    void closeFile() {\n        // Code to close the file\n    }\n};\n")),(0,a.kt)("p",null,"In the above example, all the methods in the ",(0,a.kt)("inlineCode",{parentName:"p"},"FileManager")," class are closely related to file handling operations. They work together towards the common purpose of managing files, indicating high cohesion."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Coupling: Coupling refers to the degree of interdependence between different modules or classes in a system. It measures how closely one module relies on or knows about the internals of another module. Low coupling is desirable as it promotes modularity, reusability, and maintainability of code.")),(0,a.kt)("p",null,"Types of coupling in C++:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tight coupling: Modules are highly dependent on each other, making changes in one module impact others significantly."),(0,a.kt)("li",{parentName:"ul"},"Loose coupling: Modules have minimal or no knowledge of the internal workings of other modules, reducing the impact of changes."),(0,a.kt)("li",{parentName:"ul"},"Content coupling: Modules share internal data directly, leading to high dependency."),(0,a.kt)("li",{parentName:"ul"},"External coupling: Modules depend on externally defined data or interfaces."),(0,a.kt)("li",{parentName:"ul"},"Control coupling: Modules control the behavior of other modules through parameters or flags.")),(0,a.kt)("p",null,"Example of low coupling:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'class Database {\npublic:\n    void insertData(const Data& data) {\n        // Code to insert data into the database\n    }\n};\n\nclass Logger {\npublic:\n    void logMessage(const string& message) {\n        // Code to log a message\n    }\n};\n\nclass DataManager {\npublic:\n    DataManager(Database& db, Logger& logger)\n        : database(db), logger(logger) {}\n    \n    void processData(const Data& data) {\n        // Process the data\n        database.insertData(data);\n        logger.logMessage("Data processed successfully");\n    }\n    \nprivate:\n    Database& database;\n    Logger& logger;\n};\n')),(0,a.kt)("p",null,"In the above example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"DataManager")," class depends on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Database")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Logger")," classes through their interfaces (references). It has no knowledge of the internal implementation details of the other classes, promoting loose coupling."),(0,a.kt)("p",null,"By considering both cohesion and coupling, you can design software systems that are more modular, maintainable, and extensible, leading to better code quality and easier development and maintenance."))}u.isMDXComponent=!0}}]);
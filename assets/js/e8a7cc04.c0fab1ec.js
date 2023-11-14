"use strict";(self.webpackChunkcrisptechy=self.webpackChunkcrisptechy||[]).push([[2186],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},h="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),d=o,u=h["".concat(i,".").concat(d)]||h[d]||k[d]||n;return a?r.createElement(u,l(l({ref:t},c),{},{components:a})):r.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[h]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7553:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=a(7462),o=(a(7294),a(3905));const n={},l="Network Protocols",s={unversionedId:"SystemDesign/NetworkProtocols",id:"SystemDesign/NetworkProtocols",title:"Network Protocols",description:"What is a network in computer science?",source:"@site/interviewseries/SystemDesign/NetworkProtocols.md",sourceDirName:"SystemDesign",slug:"/SystemDesign/NetworkProtocols",permalink:"/crisptechy/interviewseries/SystemDesign/NetworkProtocols",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"interviewSeries",previous:{title:"Latency in system design",permalink:"/crisptechy/interviewseries/SystemDesign/Latency"},next:{title:"intro",permalink:"/crisptechy/interviewseries/intro"}},i={},p=[{value:"Osi Model",id:"osi-model",level:2},{value:"Application Layer",id:"application-layer",level:3},{value:"Prensetation Layer",id:"prensetation-layer",level:3},{value:"Session Layer",id:"session-layer",level:3},{value:"Transport Layer",id:"transport-layer",level:3},{value:"Network Layer",id:"network-layer",level:3},{value:"Data Link Layer",id:"data-link-layer",level:3},{value:"Physical Layer",id:"physical-layer",level:3},{value:"Types of Network Protocols",id:"types-of-network-protocols",level:2},{value:"Internet Protocol (IP)",id:"internet-protocol-ip",level:3}],c={toc:p},h="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"network-protocols"},"Network Protocols"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"}," What is a network in computer science?")),(0,o.kt)("p",null,"\u25b6\ufe0f  A group of devices connected to each other via a medium wether wired or wireless to share resources, exchange data, and communicate with each other is called a network."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What are network protocols? ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u27a1\ufe0f Network protocols are a set of rules that governs the communication between devices in a network.\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Why do we need network protocols?")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u27a1\ufe0f Network protocols are needed to ensure that data is transferred from one device to another in a network in a reliable and secure manner.\n")),(0,o.kt)("h2",{id:"osi-model"},"Osi Model"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is OSI model? ")),(0,o.kt)("p",null,"\u25b6\ufe0f  OSI model is a conceptual model that defines a networking framework to implement protocols in layers. It is also called a seven-layer model."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Layers in OSI model"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Physical Layer"),(0,o.kt)("li",{parentName:"ol"},"Data Link Layer"),(0,o.kt)("li",{parentName:"ol"},"Network Layer"),(0,o.kt)("li",{parentName:"ol"},"Transport Layer"),(0,o.kt)("li",{parentName:"ol"},"Session Layer"),(0,o.kt)("li",{parentName:"ol"},"Presentation Layer"),(0,o.kt)("li",{parentName:"ol"},"Application Layer")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Lets take an example of sending a message from one computer to another computer over a network using the OSI model.\n\n1. Application Layer: The message is created in the application layer. The message is then passed to the presentation layer.\n\n2. Presentation Layer: The presentation layer converts the message into a format that can be used by the application layer. The message is then passed to the session layer.\n\n3. Session Layer: The session layer creates a session between the two computers. The message is then passed to the transport layer.\n\n4. Transport Layer: The transport layer breaks the message into smaller packets. The message is then passed to the network layer.\n\n5. Network Layer: The network layer adds the IP address of the sender and the receiver to the packets. The message is then passed to the data link layer.\n\n6. Data Link Layer: The data link layer adds the MAC address of the sender and the receiver to the packets. The message is then passed to the physical layer. \n\n7. Physical Layer: The physical layer converts the packets into bits and sends them over the network. The message is then received by the physical layer of the receiver computer.\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Let's take another example of a web browser requesting a web page from a web server.\n\n1. Application Layer: The web browser sends a request to the web server. The request is then passed to the presentation layer.\n\n2. Presentation Layer: The presentation layer converts the request into a format that can be used by the application layer. The request is then passed to the session layer.\n\n3. Session Layer: The session layer creates a session between the web browser and the web server. The request is then passed to the transport layer.\n\n4. Transport Layer: The transport layer breaks the request into smaller packets. The request is then passed to the network layer.\n\n5. Network Layer: The network layer adds the IP address of the web browser and the web server to the packets. The request is then passed to the data link layer.\n\n6. Data Link Layer: The data link layer adds the MAC address of the web browser and the web server to the packets. The request is then passed to the physical layer.\n\n7. Physical Layer: The physical layer converts the packets into bits and sends them over the network. The request is then received by the physical layer of the web server.\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Lets check out the layers in detail.\n")),(0,o.kt)("h3",{id:"application-layer"},"Application Layer"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is application layer?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"The application layer is the seventh layer of the OSI model. It is the top-most layer of the OSI model.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is the function of application layer?\n",(0,o.kt)("inlineCode",{parentName:"p"},"The application layer provides an interface between the application and the network. It provides services to the user. It also provides services to the application.      "))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What are the protocols used in application layer?\n",(0,o.kt)("inlineCode",{parentName:"p"},"The protocols used in application layer are HTTP, FTP, SMTP, POP3, IMAP, DNS, DHCP, SNMP, Telnet, SSH, TFTP, NTP, SIP, RTP, RTCP, etc."))),(0,o.kt)("h3",{id:"prensetation-layer"},"Prensetation Layer"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is presentation layer? ")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"}," The presentation layer is the sixth layer of the OSI model. It is the second top-most layer of the OSI model.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is the function of presentation layer? ")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"The presentation layer converts the data into a format that can be used by the application layer. It also converts the data into a format that can be used by the session layer. It is responsible for data compression and data encryption. Its main function is to present the data to the application layer.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What are the protocols used in presentation layer?\n",(0,o.kt)("inlineCode",{parentName:"p"},"The protocols used in presentation layer are JPEG, GIF, TIFF, PNG, MPEG, MP3, MIDI, ASCII, EBCDIC, MIME, SSL, TLS, etc."))),(0,o.kt)("h3",{id:"session-layer"},"Session Layer"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is session layer?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"The session layer is the fifth layer of the OSI model. It is the third top-most layer of the OSI model.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is the function of session layer?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"The session layer creates a session between the two computers. It also maintains the session between the two computers. It is responsible for session establishment, session maintenance, and session termination.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What are the protocols used in session layer?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"The protocols used in session layer are NetBIOS, PPTP, L2TP, SSH, TLS, etc.")),(0,o.kt)("h3",{id:"transport-layer"},"Transport Layer"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is transport layer?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"The transport layer is the fourth layer of the OSI model. It is the fourth top-most layer of the OSI model.")," "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is the function of transport layer?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"The transport layer breaks the data into smaller packets. It also ensures that the data is delivered to the correct application. It is responsible for end-to-end delivery of data.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What are the protocols used in transport layer?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"The protocols used in transport layer are TCP, UDP, SPX, etc.")),(0,o.kt)("h3",{id:"network-layer"},"Network Layer"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is network layer?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"The network layer is the third layer of the OSI model. It is the fifth top-most layer of the OSI model.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is the function of network layer?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"The network layer adds the IP address of the sender and the receiver to the packets. It also finds the best path for the data to travel. It is responsible for logical addressing and routing.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What are the protocols used in network layer?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"The protocols used in network layer are IP, ICMP, ARP, RARP, OSPF, RIP, BGP, etc.")),(0,o.kt)("h3",{id:"data-link-layer"},"Data Link Layer"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is data link layer?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"The data link layer is the second layer of the OSI model. It is the sixth top-most layer of the OSI model.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is the function of data link layer?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"The data link layer adds the MAC address of the sender and the receiver to the packets. It also finds the best path for the data to travel. It is responsible for logical addressing and routing.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What are the protocols used in data link layer?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"The protocols used in data link layer are Ethernet, Token Ring, FDDI, PPP, HDLC, etc.")),(0,o.kt)("h3",{id:"physical-layer"},"Physical Layer"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is physical layer?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"The physical layer is the first layer of the OSI model. It is the seventh top-most layer of the OSI model.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is the function of physical layer?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"The physical layer converts the packets into bits and sends them over the network. It also receives the bits from the network and converts them into packets. It is responsible for the transmission and reception of data.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What are the protocols used in physical layer?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"The protocols used in physical layer are Ethernet, Token Ring, FDDI, PPP, HDLC, etc.")),(0,o.kt)("h2",{id:"types-of-network-protocols"},"Types of Network Protocols"),(0,o.kt)("p",null,"\u2714\ufe0f ",(0,o.kt)("a",{parentName:"p",href:"#internet-protocol-ip"},"Internet Protocol (IP)"),") "),(0,o.kt)("p",null,"\u2714\ufe0f ",(0,o.kt)("a",{parentName:"p",href:"#transmission-control-protocol-tcp"},"Transmission Control Protocol (TCP)"),") "),(0,o.kt)("p",null,"\u2714\ufe0f ",(0,o.kt)("a",{parentName:"p",href:"#user-datagram-protocol-udp"},"User Datagram Protocol (UDP)"),")"),(0,o.kt)("p",null,"\u2714\ufe0f ",(0,o.kt)("a",{parentName:"p",href:"#hypertext-transfer-protocol-http"},"Hypertext Transfer Protocol (HTTP)"),")"),(0,o.kt)("p",null,"\u2714\ufe0f ",(0,o.kt)("a",{parentName:"p",href:"#hypertext-transfer-protocol-secure-https"},"Hypertext Transfer Protocol Secure (HTTPS)"),")"),(0,o.kt)("p",null,"\u2714\ufe0f ",(0,o.kt)("a",{parentName:"p",href:"#file-transfer-protocol-ftp"},"File Transfer Protocol (FTP)"),"   "),(0,o.kt)("p",null,"\u2714\ufe0f ",(0,o.kt)("a",{parentName:"p",href:"#simple-mail-transfer-protocol-smtp"},"Simple Mail Transfer Protocol (SMTP)")),(0,o.kt)("p",null,"\u2714\ufe0f ",(0,o.kt)("a",{parentName:"p",href:"#remote-procedure-call-rpc"},"Remote Procedure Call (RPC)")),(0,o.kt)("p",null,"\u2714\ufe0f ",(0,o.kt)("a",{parentName:"p",href:"#domain-name-system-dns"},"Domain Name System (DNS)")),(0,o.kt)("p",null,"\u2714\ufe0f ",(0,o.kt)("a",{parentName:"p",href:"#dynamic-host-configuration-protocol-dhcp"},"Dynamic Host Configuration Protocol (DHCP)")),(0,o.kt)("h3",{id:"internet-protocol-ip"},"Internet Protocol (IP)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is Internet Protocol (IP)?")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> Internet Protocol is a network layer protocol.\n> It is used to deliver data from one host to another host based on IP addresses.\n> When one machine wants to send data to another machine, it sends data in form of IP packets.\n> Each IP packet contains the IP address of the sender and the receiver.\n\n")))}k.isMDXComponent=!0}}]);
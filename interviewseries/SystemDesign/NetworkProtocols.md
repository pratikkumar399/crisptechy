# Network Protocols

>  What is a network in computer science?

▶️  A group of devices connected to each other via a medium wether wired or wireless to share resources, exchange data, and communicate with each other is called a network.

> What are network protocols? 

    ➡️ Network protocols are a set of rules that governs the communication between devices in a network.

> Why do we need network protocols?

    ➡️ Network protocols are needed to ensure that data is transferred from one device to another in a network in a reliable and secure manner.

## Osi Model 

> What is OSI model? 

▶️  OSI model is a conceptual model that defines a networking framework to implement protocols in layers. It is also called a seven-layer model.

* Layers in OSI model

    1. Physical Layer
    2. Data Link Layer
    3. Network Layer
    4. Transport Layer
    5. Session Layer
    6. Presentation Layer
    7. Application Layer

```
Lets take an example of sending a message from one computer to another computer over a network using the OSI model.

1. Application Layer: The message is created in the application layer. The message is then passed to the presentation layer.

2. Presentation Layer: The presentation layer converts the message into a format that can be used by the application layer. The message is then passed to the session layer.

3. Session Layer: The session layer creates a session between the two computers. The message is then passed to the transport layer.

4. Transport Layer: The transport layer breaks the message into smaller packets. The message is then passed to the network layer.

5. Network Layer: The network layer adds the IP address of the sender and the receiver to the packets. The message is then passed to the data link layer.

6. Data Link Layer: The data link layer adds the MAC address of the sender and the receiver to the packets. The message is then passed to the physical layer. 

7. Physical Layer: The physical layer converts the packets into bits and sends them over the network. The message is then received by the physical layer of the receiver computer.

```

```
Let's take another example of a web browser requesting a web page from a web server.

1. Application Layer: The web browser sends a request to the web server. The request is then passed to the presentation layer.

2. Presentation Layer: The presentation layer converts the request into a format that can be used by the application layer. The request is then passed to the session layer.

3. Session Layer: The session layer creates a session between the web browser and the web server. The request is then passed to the transport layer.

4. Transport Layer: The transport layer breaks the request into smaller packets. The request is then passed to the network layer.

5. Network Layer: The network layer adds the IP address of the web browser and the web server to the packets. The request is then passed to the data link layer.

6. Data Link Layer: The data link layer adds the MAC address of the web browser and the web server to the packets. The request is then passed to the physical layer.

7. Physical Layer: The physical layer converts the packets into bits and sends them over the network. The request is then received by the physical layer of the web server.

```

```
Lets check out the layers in detail.
```

### Application Layer

> What is application layer?

``` The application layer is the seventh layer of the OSI model. It is the top-most layer of the OSI model. ```
> What is the function of application layer?
``` The application layer provides an interface between the application and the network. It provides services to the user. It also provides services to the application.       ```

> What are the protocols used in application layer?
``` The protocols used in application layer are HTTP, FTP, SMTP, POP3, IMAP, DNS, DHCP, SNMP, Telnet, SSH, TFTP, NTP, SIP, RTP, RTCP, etc. ```

### Prensetation Layer

> What is presentation layer? 

``` The presentation layer is the sixth layer of the OSI model. It is the second top-most layer of the OSI model.```

> What is the function of presentation layer? 

``` The presentation layer converts the data into a format that can be used by the application layer. It also converts the data into a format that can be used by the session layer. It is responsible for data compression and data encryption. Its main function is to present the data to the application layer. ```

> What are the protocols used in presentation layer?
``` The protocols used in presentation layer are JPEG, GIF, TIFF, PNG, MPEG, MP3, MIDI, ASCII, EBCDIC, MIME, SSL, TLS, etc. ```


### Session Layer

> What is session layer?

``` The session layer is the fifth layer of the OSI model. It is the third top-most layer of the OSI model. ```

> What is the function of session layer?

``` The session layer creates a session between the two computers. It also maintains the session between the two computers. It is responsible for session establishment, session maintenance, and session termination. ```

> What are the protocols used in session layer?

``` The protocols used in session layer are NetBIOS, PPTP, L2TP, SSH, TLS, etc. ```

### Transport Layer

> What is transport layer?

``` The transport layer is the fourth layer of the OSI model. It is the fourth top-most layer of the OSI model. ``` 

> What is the function of transport layer?

``` The transport layer breaks the data into smaller packets. It also ensures that the data is delivered to the correct application. It is responsible for end-to-end delivery of data. ```

> What are the protocols used in transport layer?

``` The protocols used in transport layer are TCP, UDP, SPX, etc. ```

### Network Layer

> What is network layer?

``` The network layer is the third layer of the OSI model. It is the fifth top-most layer of the OSI model. ```

> What is the function of network layer?

``` The network layer adds the IP address of the sender and the receiver to the packets. It also finds the best path for the data to travel. It is responsible for logical addressing and routing. ```

> What are the protocols used in network layer?

``` The protocols used in network layer are IP, ICMP, ARP, RARP, OSPF, RIP, BGP, etc. ```

### Data Link Layer

> What is data link layer?

``` The data link layer is the second layer of the OSI model. It is the sixth top-most layer of the OSI model. ```

> What is the function of data link layer?

``` The data link layer adds the MAC address of the sender and the receiver to the packets. It also finds the best path for the data to travel. It is responsible for logical addressing and routing. ```
> What are the protocols used in data link layer?

``` The protocols used in data link layer are Ethernet, Token Ring, FDDI, PPP, HDLC, etc. ```

### Physical Layer

> What is physical layer?

``` The physical layer is the first layer of the OSI model. It is the seventh top-most layer of the OSI model. ```

> What is the function of physical layer?

``` The physical layer converts the packets into bits and sends them over the network. It also receives the bits from the network and converts them into packets. It is responsible for the transmission and reception of data. ```

> What are the protocols used in physical layer?

``` The protocols used in physical layer are Ethernet, Token Ring, FDDI, PPP, HDLC, etc. ```


## Types of Network Protocols

:heavy_check_mark: [Internet Protocol (IP)](#internet-protocol-ip)) 

:heavy_check_mark: [Transmission Control Protocol (TCP)](#transmission-control-protocol-tcp)) 

:heavy_check_mark: [User Datagram Protocol (UDP)](#user-datagram-protocol-udp))

:heavy_check_mark: [Hypertext Transfer Protocol (HTTP)](#hypertext-transfer-protocol-http))

:heavy_check_mark: [Hypertext Transfer Protocol Secure (HTTPS)](#hypertext-transfer-protocol-secure-https))

:heavy_check_mark: [File Transfer Protocol (FTP)](#file-transfer-protocol-ftp)   

:heavy_check_mark: [Simple Mail Transfer Protocol (SMTP)](#simple-mail-transfer-protocol-smtp)

:heavy_check_mark: [Remote Procedure Call (RPC)](#remote-procedure-call-rpc)

:heavy_check_mark: [Domain Name System (DNS)](#domain-name-system-dns)

:heavy_check_mark: [Dynamic Host Configuration Protocol (DHCP)](#dynamic-host-configuration-protocol-dhcp)

### Internet Protocol (IP)

> What is Internet Protocol (IP)?

```
> Internet Protocol is a network layer protocol.
> It is used to deliver data from one host to another host based on IP addresses.
> When one machine wants to send data to another machine, it sends data in form of IP packets.
> Each IP packet contains the IP address of the sender and the receiver.

```


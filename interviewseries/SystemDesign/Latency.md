# Latency in system design


* latency determins the speed at which data can be transferred from one end of a 
    system to another.
* It is a measure of how quickly data can be transferred between a client and a server.
* directly related to performance of a system
* lower latency means better performance 
* it is the time interval between the start of a request from the client side to delivering the response from 
    the server to the client side. That simply means that it is the round trip from the client 
   to the server and back to the client.


Causes of Latency: 

```
-> One of the measure factors contirbuting to latency is outbound calls.
-> Outbound calls are the calls made by the client to the server.
```
> But the major causes are : 
  - > **Transmission Medium** : Transmission medium is the physical path between start and endpoints(or client and server) in a data transmission system. The characteristics and quality of data transmission are determined both by the characteristics of the signal. Examples are WAN, fiber optics, copper wires, etc.
 - > **Propagation Delay** : Propagation delay is the time taken by the signal to travel from the source to the destination. It is the time taken by the signal to reach the destination from the source.
 - > **Routers** : Routers are devices that help to connect two or more networks. They are responsible for forwarding data packets between computer networks. They take some time to analyze the header information of the packet and then forward it to the destination. Now the latency depends upon how efficient the router is in processing the request and forwarding the data packets.
 - > **Storage Delays** : Storage delays are the delays that occur when the data is stored in the memory. The data is stored in the memory for a short period of time before it is processed. So the time taken to process and return data is also a factor that contributes to latency and is known as storage delay.

### Ways to measure latency : 

> Three most common ways to measure latency: 
- > Ping : Ping is a command-line utility that is used to test the reachability of a host on an Internet Protocol (IP) network and to measure the round-trip time for messages sent from the originating host to a destination computer. 
- > Tracerroute: Traceroute is a command-line tool included with Windows and other operating systems. It is used to show the route taken by packets across an IP network. It shows the path taken to reach the destination and the time taken to reach each intermediate hop.

Latency optimization: 

> Latency can be optimized by :
- >HTTP/2 : HTTP/2 is a major revision of the HTTP network protocol used by the World Wide Web. It allows parallel requests and responses. It also allows the server to send multiple responses for a single request. It minimizes the number of round trips required between the client and the server.
- >Less external HTTP requests: External HTTP requests are the requests made by third party apps. The more the number of external HTTP requests, the more the latency. So, the number of external HTTP requests should be minimized.
- >CDN: CDN stands for Content Delivery Network. It is a geographically distributed network of proxy servers and their data centers. It helps to distribute the service spatially relative to end-users to provide high availability and high performance. It helps to reduce the latency by reducing the distance between the server and the client.Instead of going to the origin server, the user can access the content from the nearest CDN server.
- >Caching: Caching is the process of storing data in a cache. A cache is a temporary storage component area where data is stored so that future requests for that data can be served faster. It helps to reduce the latency by reducing the number of round trips between the client and the server.

### Conclusion:

- >Latency is the time interval between the start of a request from the client side to delivering the response from the server to the client side.
- >It is the round trip from the client to the server and back to the client.
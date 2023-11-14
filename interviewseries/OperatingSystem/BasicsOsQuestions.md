### `1. What is an operating system?`

<p>
An operating system is a program that acts as an interface between the user 
and the computer hardware and controls the execution of all kinds of programs.
</p>

### `02. Explain the main functions of an operating system.`

Operating system performs the following functions: 


<u>1. Process Manangement :</u> 

* **Task Scheduling**: The OS decides which processes should run and when, managing the execution order to optimize CPU usage.
* **Creation and Termination**: The OS creates, terminates, and manages processes, including allocating resources and maintaining the process life cycle.

<u> 2. Memory management: </u>

* **Memory Allocation**: The OS allocates memory to processes and programs, ensuring that each process has enough memory to execute.
* **Virtual Memory**: The OS creates the illusion of having more memory than the system actually has, by using disk space to simulate RAM.

<u> 3. File System Management: </u>

* **File Creation and Deletion**: The OS creates and deletes files and directories, and manages the file system structure.
* **File Access Control**: Manages permissions and access control to ensure the security and integrity of files and data.

<u> 4. Device Management: </u>

* **Device Drivers**: The OS manages device drivers, which are programs that control the devices connected to the computer.
* **Interrupt Handling**: The OS handles interrupts, which are signals sent to the CPU by external devices to request attention.
  
<u> 5. Security: </u>

* **User Authentication**: The OS authenticates users to ensure that only authorized users can access the system.
* **User Authorization**: The OS authorizes users to ensure that each user has the correct permissions to access the system.

### `03.	Describe the difference between a process and a thread.`

Here's a tabular representation highlighting the key differences between a process and a thread:

| Characteristic          | Process                                      | Thread                                      |
|-------------------------|----------------------------------------------|---------------------------------------------|
| **Definition**          | An independent program with its own memory space, resources, and state. | A lightweight unit of a process, sharing the same resources and memory space with other threads in the same process. |
| **Execution**           | Each process runs independently of others, in its own memory space. | Threads within a process share the same memory space and resources, running concurrently. |
| **Communication**       | Inter-process communication is typically achieved through mechanisms like message passing or shared memory. | Threads within the same process communicate directly using shared data and variables. |
| **Creation Overhead**   | Higher overhead in terms of resources and time due to separate memory space and resources. | Lower overhead as threads share resources and memory within the same process. |
| **Resource Isolation**  | Processes are isolated; changes in one process do not affect others. | Threads within the same process share resources, and changes in one thread may affect others. |
| **Fault Tolerance**     | More fault-tolerant since a failure in one process does not affect others. | Less fault-tolerant as a failure in one thread may affect the entire process. |
| **Scalability**         | Generally less scalable due to the overhead of managing separate processes. | More scalable as threads within a process can be managed more efficiently. |
| **Context Switching**   | Context switching between processes is generally more expensive. | Context switching between threads within the same process is less expensive. |
| **Example**             | Running multiple instances of a word processor, each with its own memory space. | A web browser with multiple threads for handling user input, rendering, and network communication. |

### `04.	What are the differences between multiprogramming, multitasking, and multiprocessing?`

Here's a table summarizing the key differences between multiprogramming, multitasking, and multiprocessing:

| Characteristic      | Multiprogramming                                       | Multitasking                                           | Multiprocessing                                       |
|---------------------|--------------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------|
| **Basic Concept**   | Multiple programs are loaded into memory simultaneously, and CPU switches between them to increase CPU utilization. | A single CPU executes multiple tasks concurrently by rapidly switching between them. | Multiple processors (or CPU cores) execute tasks simultaneously. |
| **CPU Utilization**  | Aims to maximize CPU utilization by keeping it busy with different programs. | Aims to maximize CPU utilization by allowing the CPU to switch rapidly between tasks. | Aims to maximize overall system throughput by executing multiple tasks in parallel on multiple processors. |
| **Resource Sharing** | Resources such as memory and I/O devices are shared among multiple programs. | Resources are shared among multiple tasks running on a single CPU. | Resources are shared among multiple tasks running on multiple processors. |
| **Concurrency**      | Achieves concurrency by interleaving the execution of multiple programs. | Achieves concurrency by rapidly switching between different tasks. | Achieves true parallelism by having multiple processors working on different tasks simultaneously. |
| **Examples**         | Running multiple text editors, compilers, or applications concurrently. | Running a web browser, music player, and word processor concurrently on a single CPU. | Running scientific simulations, video rendering, and database queries concurrently on a system with multiple processors. |
| **Hardware Impact**  | Can be implemented on a system with a single CPU.              | Can be implemented on a system with a single CPU or multiple CPUs. | Requires multiple processors or CPU cores in the system.    |

These distinctions highlight the key features and goals of multiprogramming, multitasking, and multiprocessing, providing a clearer understanding of their roles in enhancing system performance and resource utilization.
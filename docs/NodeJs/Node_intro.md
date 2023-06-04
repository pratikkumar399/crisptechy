* ``` Node runs on a server that is not in a browser.```
* ``` It is javascript runtime environment out of the browser.```
* ``` Great for prototyping and agile development.```

Features of Node.js:

1. **Single-Threaded and Asynchronous**: Node.js runs on a single thread, but it employs an event-driven, non-blocking I/O model to achieve concurrency. It uses asynchronous operations extensively, allowing multiple I/O operations to run concurrently without blocking the execution of other code. When an I/O operation is initiated, Node.js registers a callback function and continues executing other code, which makes it highly efficient for handling concurrent requests.

2. **Modules and the CommonJS Pattern**: Node.js has a module system based on the CommonJS pattern. Modules are reusable blocks of code that encapsulate functionality and can be imported and used in other parts of the code. Each Node.js file is considered a module, and you can export specific functions, objects, or variables from a module to make them accessible to other modules using the `module.exports` object.

3. **Event-Driven Architecture**: Node.js follows an event-driven, non-blocking I/O model, which makes it highly efficient and scalable. It uses an event loop that listens for events and dispatches them to event handlers when they occur. This approach allows Node.js to handle a large number of concurrent connections without blocking the execution of other code.

4. **NPM (Node Package Manager)**: NPM is a package manager that comes bundled with Node.js. It allows developers to easily manage and install third-party libraries and modules for their Node.js applications.

5. **HTTP and Networking**: Node.js provides built-in modules, such as the `http` and `https` modules, which allow you to create web servers and handle HTTP/HTTPS requests and responses. This makes it straightforward to build web applications and APIs using Node.js. Additionally, Node.js provides modules for working with other network protocols like TCP and UDP.

6. **File System Access**: Node.js offers modules for interacting with the file system, allowing you to read from and write to files, create directories, and perform various file-related operations. The `fs` module provides a convenient API for file system manipulation.

7. **Non-blocking I/O and Callbacks**: Node.js relies heavily on the use of callbacks to handle asynchronous operations. When performing an I/O operation, such as reading a file or making an HTTP request, you pass a callback function that gets invoked when the operation completes. This approach ensures that the I/O operations do not block the execution of other code, as the callbacks are only executed when the corresponding I/O operations have finished.

Overall, Node.js combines JavaScript's familiarity and flexibility with an efficient, event-driven, non-blocking I/O model to provide a powerful platform for building scalable and high-performance server-side applications.
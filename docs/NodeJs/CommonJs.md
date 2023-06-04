In Node.js, the module system is based on the CommonJS pattern. CommonJS is a module specification that defines a way to organize and share reusable JavaScript code. Node.js adopted the CommonJS module system to provide a structured approach to modularize code in Node.js applications.

Here's an explanation of how CommonJS modules work in Node.js:

1. **Module Definition**: Each Node.js file is considered a module. In a module file, you can define functions, objects, or variables that you want to make available to other modules. You do this by using the `module.exports` object.

```javascript
// Example module file: greetings.js

function sayHello() {
  console.log('Hello!');
}

function sayGoodbye() {
  console.log('Goodbye!');
}

module.exports = {
  sayHello,
  sayGoodbye
};
```

In the example above, the `greetings.js` module exports two functions, `sayHello` and `sayGoodbye`, by assigning them to the `module.exports` object.

2. **Module Import**: To use the functionality provided by another module, you need to import it in your code. This is done using the `require` function and specifying the path to the module file.

```javascript
// Example module usage: app.js

const greetings = require('./greetings');

greetings.sayHello(); // Outputs: Hello!
greetings.sayGoodbye(); // Outputs: Goodbye!
```

In the `app.js` file, the `require` function is used to import the `greetings` module. The `greetings` variable now holds the exported functions from the `greetings.js` module, and you can invoke them as needed.

3. **Module.exports and exports**: In Node.js, the `module.exports` object is the main object that gets exported from a module. However, there is a shorthand notation using the `exports` object that allows you to directly assign properties to `module.exports`.

```javascript
// Example module file: math.js

exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
```

In the `math.js` module file, the properties `add` and `subtract` are directly assigned to `exports`. This shorthand notation is equivalent to `module.exports.add = ...` and `module.exports.subtract = ...`.

It's important to note that when using the shorthand `exports` notation, you cannot reassign the `exports` object itself. For example, the following will not work as expected:

```javascript
// Incorrect usage of exports
exports = {
  // properties
};
```

To correctly export an object using `exports`, you need to assign properties directly to it, as shown in the previous example.

CommonJS modules provide a convenient way to organize and share code in Node.js applications. They allow you to encapsulate functionality into separate modules and import them when needed, promoting code reuse and maintainability.
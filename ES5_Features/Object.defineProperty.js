//Defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
obj = {};
Object.defineProperty(obj,
    'answer', {
      value: 42,
      writable: true,
      enumerable: true,
      configurable: true
    });

 // Output : {answer: 42}      
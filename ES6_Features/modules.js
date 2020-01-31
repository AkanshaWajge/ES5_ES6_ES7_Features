//Module format common to CommonJS and AMD.

// ES6 Modules and How to Use Import and Export in JavaScript

/*
With ES2015 (ES6), with get built-in support for modules in JavaScript. Like with CommonJS,
 each file is its own module. To make objects, functions, classes or variables available to the outside world 
it’s as simple as exporting them and then importing them where needed in other files.
*/


//Exporting
//You can export members one by one. What’s not exported won’t be available directly outside the module:

export const myNumbers = [1, 2, 3, 4];
const animals = ['Panda', 'Bear', 'Eagle']; // Not available directly outside the module

export function myLogger() {
  console.log(myNumbers, animals);
}

export class Person {
   constructor() {
     // ...
   }
}


//Or you can export desired members in a single statement at the end of the module:

export { myNumbers, myLogger, Person };

//Exporting with alias
//You can also give an aliases to exported members with the as keyword:

export { myNumbers, myLogger as myNumbersLogger, myLogger1 }


//Default export
//You can define a default export with the default keyword:

export const myNumbers = [1, 2, 3, 4];
const animals = ['Panda', 'Bear', 'Eagle'];

export default function myLogger() {
  console.log(myNumbers, pets);
}

export class Person {
  constructor() {
    // ...
  }
}
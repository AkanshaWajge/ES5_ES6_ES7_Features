//for...of vs for...in Loops in JavaScript

// Traditional for loops are so last year! for..of and for…in loops give us a very clean and concise syntax 
// to iterate over all kinds of iterables and enumerables like strings, arrays and object literals.

// for…of
// Use for…of to iterate over the values in an iterable, like an array for example:

let animals = ['🐔', '🐷', '🐑', '🐇'];
let names = ['Gertrude', 'Henry', 'Melvin', 'Billy Bob'];

for (let animal of animals) {
  // Random name for our animal
  let nameIdx = Math.floor(Math.random() * names.length);

  console.log(`${names[nameIdx]} the ${animal}`);
}

// Henry the 🐔
// Melvin the 🐷
// Henry the 🐑
// Billy Bob the 🐇

//Strings are also an iterable type, so you can use for…of on strings:

let str = 'abcde';

for (let char of str) {
  console.log(char.toUpperCase().repeat(3));
}

// AAA
// BBB
// ...

//You can also iterate over maps, sets, generators, DOM node collections and the arguments object available inside a functions.


//for…in
// Use for…in to iterate over the properties of an object (the object keys):

let oldCar = {
  make: 'Toyota',
  model: 'Tercel',
  year: '1996'
};

for (let key in oldCar) {
  console.log(`${key} --> ${oldCar[key]}`);
}

// make --> Toyota
// model --> Tercel

//You can also use for…in to iterate over the index values of an iterable like an array or a string:

let str = 'Turn the page';

for (let index in str) {
  console.log(`Index of ${str[index]}: ${index}`);
}

// Index of T: 0
// Index of u: 1
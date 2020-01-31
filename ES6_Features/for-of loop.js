//Loop over Iterator objects

/*You can also iterate over maps, sets, generators, 
DOM node collections and the arguments object available inside a functions using for-of-loop */

//EXAMPLE 1: Use for…of to iterate over the values in an iterable, like an array for example:

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


//EXAMPLE 2: Strings are also an iterable type, so you can use for…of on strings:

let str = 'abcde';

for (let char of str) {
  console.log(char.toUpperCase().repeat(3));
}

// AAA
// BBB
// ...

//---------------------------------------------------------------------------------------------------------------

//for…in
//EAXMPLE 1:  Use for…in to iterate over the properties of an object (the object keys):

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

// EXAMPLE 2: You can also use for…in to iterate over the index values of an iterable like an array or a string:

let str = 'Turn the page';

for (let index in str) {
  console.log(`Index of ${str[index]}: ${index}`);
}

// Index of T: 0
// Index of u: 1
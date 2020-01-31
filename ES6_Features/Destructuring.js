// Extract data from arrays or objects.

var {foo, bar} = {foo: "lorem", bar: "ipsum"};
//foo => lorem and bar => ipsum

// 1. Array Destructuring
const names = ['Bob', 'Fred', 'Benedict'];

const [cat, dog, alligator] = names;

console.log(cat); // Bob
console.log(dog); // Fred
console.log(alligator); // Benedict

// 2. You can also skip items by using comas without any names for the variable names:

const names = ['Bob', 'Fred', 'Benedict'];

const [cat, , alligator] = names;

console.log(cat); // Bob
console.log(alligator); // Benedict

//3. And you can destructure part of the array, then put the rest in a new array:

const names = ['Bob', 'Fred', 'Benedict'];

const [cat, ...rest] = names;

console.log(cat); // Bob
console.log(rest); // ["Fred", "Benedict"]


//---------------------------------------------------------------------------------------------

//Object Destructuring 
/* Object destructuring is a bit different because keys are not necessarily in a specific order,
    so the new variables need to have matching names with the object’s keys: */

    const names = {cat: 'Bob', dog: 'Fred', alligator: 'Benedict'};

const {cat, dog, alligator} = names;

console.log(cat); // Bob
console.log(dog); // Fred
console.log(alligator); // Benedict


//There’s a way around matching names however, here’s how to give new names to the variables:

const names = {cat: 'Bob', dog: 'Fred', alligator: 'Benedict'};

const {cat: newCat, dog: newDog, alligator: newAlligator} = names;

console.log(newCat); // Bob
console.log(newDog); // Fred
console.log(newAlligator); // Benedict





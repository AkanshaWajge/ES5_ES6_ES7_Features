//Map

//Map object is a simple and effective key/value data-structure.

let m = new Map();
m.set('answer', 42);
m.get('answer'); //42
m.has('answer'); //true
m.delete('answer');// true
m.has('answer'); //false

m.set(keyFunc,() => "foo");
m.get(keyFunc)(); //"foo"

/* Unlike with objects, map keys can be of any type, even objects or functions. It’s also easy to get the size of a map, 
while it’s not as straightforward for objects. On top of that, with maps we can iterate 
in the order in which the values were added, contrary to objects where there’s no guarantee about the order. */

 /* Here’s a simple example of a map demonstrating a few of the available methods and 
 properties such as set, get, size, has, delete and clear: */


 let things = new Map();

const myFunc = () => '🍕';

things.set('🚗', 'Car');
things.set('🏠', 'House');
things.set('✈️', 'Airplane');
things.set(myFunc, '😄 Key is a function!');

things.size; // 4

things.has('🚗'); // true

things.has(myFunc) // true
things.has(() => '🍕'); // false, not the same reference
things.get(myFunc); // '😄 Key is a function!'

things.delete('✈️');
things.has('✈️'); // false

things.clear();
things.size; // 0

// setting key-value pairs is chainable
things.set('🔧', 'Wrench')
      .set('🎸', 'Guitar')
      .set('🕹', 'Joystick');

const myMap = new Map();

// Even another map can be a key
things.set(myMap, 'Oh gosh!');
things.size; // 4
things.get(myMap); // 'Oh gosh!'

//Initializing Maps from Arrays
//You can initialize a map from an array that contains arrays of two values:

const funArray = [
  ['🍾', 'Champagne'],
  ['🍭', 'Lollipop'],
  ['🎊', 'Confetti'],
];

let funMap = new Map(funArray);
funMap.get('🍾'); // Champagne

//Iterating Over Maps
//It’s easy to iterate over maps using for…of and array destructuring:

let activities = new Map();

activities.set(1, '🏂');
activities.set(2, '🏎');
activities.set(3, '🚣');
activities.set(4, '🤾');

for (let [nb, activity] of activities) {
  console.log(`Activity ${nb} is ${activity}`);
}

// Activity 1 is 🏂
// Activity 2 is 🏎
// Activity 3 is 🚣
// Activity 4 is 🤾
//…
/* And you can also use forEach to iterate over a map in the same manner. Note however how the first argument 
to the forEach callback function is the value and the second is the key. The following will have the same result 
as the for…of example: */

activities.forEach((value, key) => {
  console.log(`Activity ${key} is ${value}`);
});
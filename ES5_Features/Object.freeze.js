//Makes an object immutable.

var obj = {name: 'FooBar'}; 
Object.freeze(obj);                               
obj.name = 'BarFoo';
obj.name //Will still be 'FooBar'

//-----------------------------------------------------------------------------------------------------

//hasOwnProperty
//hasOwnProperty is a method available on object instances that allows to check if an object has a property directly on its instance. Here’s a simple example that should illustrate this very clearly:

const myObj = {
  clown: '🤡',
  police: '👮',
  santa: '🎅',
  farmer: '👩‍🌾'
}

console.log('clown' in myObj); // true
console.log('valueOf' in myObj); // true

console.log(myObj.hasOwnProperty('clown')); // true
console.log(myObj.hasOwnProperty('valueOf')); // false

//Object.keys can be really useful in allowing to use a for…of loop over an object:

const myObj = {
  clown: '🤡',
  police: '👮',
  santa: '🎅',
  farmer: '👩‍🌾'
}

for (let k of Object.keys(myObj)) {
  console.log(`Hey ${ myObj[k] }!`);
}

// "Hey 🤡!"
// "Hey 👮!"
// "Hey 🎅!"
// "Hey 👩‍🌾!"


// Object.is is a method used to check if two objects are the same.

//Note that only an object's enumerable properties will be copied over with Object.assign.

//The first argument is the source object, and the subsequent arguments are source objects. 
//You can pass-in multiple source objects, and duplicate properties in sources passed last will win:

const myObj = {
  clown: '🤡',
  police: '👮',
  santa: '🎅',
  farmer: '👩‍🌾'
}

const myObj2 = Object.assign({}, myObj, {
  santa: '🎄',
  teacher: '👩‍🏫'
});

console.log(myObj2);

// Object {
//   clown: "🤡",
//   farmer: "👩‍🌾",
//   police: "👮",
//   santa: "🎄",
//   teacher: "👩‍🏫"
// }

 /* Object.assign becomes really useful to create completely new objects from existing ones, 
allowing you to copy and expand objects in an immutable manner. */

//Bonus: Object.freeze
/* Use Object.freeze to shallowly freeze an object to prevent its properties from being changed. 
Note in this following example how, after using Object.free on an object, we can’t change a property, 
add a new one or delete one: */

const myObj = {
  clown: '🤡',
  police: '👮',
  santa: '🎅',
  farmer: '👩‍🌾'
}

myObj.clown = 'scary';
myObj.astronaut = '👨‍🚀';

Object.freeze(myObj);

myObj.clown = 'really scary';
myObj.student = '👩‍🎓';
delete myObj.santa;

console.log(myObj);

// Object {
//   clown: "scary",
//   farmer: "👩‍🌾",
//   police: "👮",
//   santa: "🎅",
//   astronaut: "👨‍🚀"
// }

//There’s also another useful method, Object.isFrozen, to know if an object has been frozen:

const myObj = {
  clown: '🤡',
  police: '👮',
  santa: '🎅',
  farmer: '👩‍🌾'
}

console.log(Object.isFrozen(myObj)); // false

Object.freeze(myObj);

console.log(Object.isFrozen(myObj)); // true

/* Note that nested objects won’t automatically be frozen by Object.freeze. In the following example, 
the nested animals object can still have its properties changed or deleted even after the containing object has been frozen: */

const myObj = {
  clown: '🤡',
  police: '👮',
  santa: '🎅',
  farmer: '👩‍🌾',
  animals: {
    cow: '🐄',
    rabbit: '🐇'
  }
}

Object.freeze(myObj);

delete myObj.animals.rabbit;
myObj.animals.cow = 'moo!';

console.log(myObj);

// Object {
//   clown: "🤡",
//   farmer: "👩‍🌾",
//   police: "👮",
//   santa: "🎅",
//   animals: {
//     cow: 'moo!'
//   }
// }

/* In order to deep-freeze an object, we would have to instead recursively freeze any object property that 
happens to also be an object. Here’s a good utility to make deep freeze a breeze. */
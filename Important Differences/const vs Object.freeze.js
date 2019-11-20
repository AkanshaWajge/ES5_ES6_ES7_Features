// const vs Object.freeze() in JavaScript


/*
One of the most common uses of an object is to hold states - like configuration values or constants used by your application.

They are usually globals (which eliminates the need to pass them around as function parameters) but globals are not 
safe if they can be changed by functions that have access to them. Let’s see why -
*/

var canAlligatorsFly = false;

function isItFlying() {
 canAlligatorsFly = true;

 if (canAlligatorsFly) {
  console.log("Yeah I'm flying");
} 
}
isItFlying(); 

// Yeah I'm flying


/*The function isItFlying() has access to the global variable and has the ability to assign a new value to canAlligatorsFly, 
enabling them to fly which is a terrible idea. How to we prevent this “reassignment of value” to a variable?

The go-to variable type for these kinds of situations is the const. The const prevents reassignment of value to a 
variable after it has been declared once in the program.
*/

const alligatorColor = "green";

function getMyColor() {
 alligatorColor = "yellow"; // This part throws an error

 return alligatorColor;
}

/*The error reads as “TypeError: Assignment to constant variable.” It appears that const has rendered the alligatorColor
 immutable.

Or has it? Let’s find out.
*/
const reptiles = ['alligators', 'crocs'];

reptiles.push('snakes');

/*console.log(reptiles); // ['alligators', 'crocs', 'snakes']
Looks like the value inside reptiles has been changed. So that means that const does not make the value of the variable
 immutable but instead makes the binding of the variable immutable. This means that reassignment of the variable is not
  allowed but the value referenced by the const variable can still be subject to change. That’s why we were able to change 
  the value of the array in the above example without suffering a TypeError.

How does const extend to objects now that we know that it’s the binding that’s immutable and not the value? Let’s do that -
*/

const alligator = {
  canItFly : false
};

alligator.canItFly = true;
console.log(alligator.canItFly); // true
/*Welp. Now that’s not very good for us if we plan to use globals for state management in our program. We need to have the
object be immune to the changes to its properties.

Here’s where Object.freeze() comes into play. Object.freeze() prevents modification or extension to the existing value 
of an object.
*/
let alligator = {
  canItFly : false
};

Object.freeze(alligator);
alligator.canItFly = true;

console.log(alligator.canItFly); // false, the value is not modified
//A quick note though, Object.freeze does allow reassignment:

let alligator = {
  canItFly : false
};

Object.freeze(alligator);
alligator = { pi: 3.14159 };

console.log(alligator) // {pi: 3.14159}
// So to sum it up:

// const makes the variable binding immutable but it’s value can still be modified.
// Object.freeze() ignores the value modification to an object but there is no restriction on the binding.
// What if we used the two in unison?

const alligator = {
  canItFly : false
};

Object.freeze(alligator);
alligator.canItFly = true; // This is ignored
alligator = {pi: 3.14}; // This will throw an TypeError

console.log(alligator); // {canItFly: false}

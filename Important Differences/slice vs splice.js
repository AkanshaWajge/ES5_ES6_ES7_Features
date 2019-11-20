//Array slice vs splice in JavaScript

//SLICE : Array.prototype.slice (SLICE AND GIVE IT IN A NEW PLATE ;) )

// The slice method returns a new array with a copied slice from the original array. 
//The first optional argument is the beginning index and the second optional argument is the ending index (non-inclusive).

// Without arguments, you get a copy of the full array:

const myArr = ['🍕', '🍾', '🎊', '✨'];

const myArrCopy = myArr.slice();

console.log(myArrCopy); // ["🍕", "🍾", "🎊", "✨"]

//With one argument, you get a copy from the specified index (zero-based) to the end of the array:

const myArr = ['🍕', '🍾', '🎊', '✨'];

const myArrCopy = myArr.slice(2);

console.log(myArrCopy); // ["🎊", "✨"]

//The specified beginning index can also be negative, in which case the starting index is calculated from the end:

const myArr = ['🍕', '🍾', '🎊', '✨'];

const myArrCopy = myArr.slice(-3);

console.log(myArrCopy); // ["🍾", "🎊", "✨"]

//And then here’s an example with two argument provided:

const myArr = ['🍕', '🍾', '🎊', '✨'];

const myArrCopy = myArr.slice(-3, 2);

console.log(myArrCopy); // ["🍾"]

//SPLICE : Array.prototype.splice (ADDING OR REMOVING AN ELEMENT FROM ARRAY, NO NEW ARRAY CREATION)
//The splice method changes the content of the array in place and can be used to add or remove items from the array.

//When only one argument is provided, all the items after the provided starting index are removed from the array:

let myArr = ['🍕', '🍾', '🎊', '✨'];

myArr.splice(2);

console.log(myArr); // ["🍕", "🍾"]

//The second optional argument is for the number of items to remove:

let myArr = ['🍕', '🍾', '🎊', '✨'];

myArr.splice(2, 1);

console.log(myArr); // ["🍕", "🍾", "✨"]

//An arbitrary amount of additional arguments can be passed-in and will be added to the array:

let myArr = ['🍕', '🍾', '🎊', '✨'];

myArr.splice(2, 1, '🌭', '🌮');

console.log(myArr); // ["🍕", "🍾", "🌭", "🌮", "✨"]

//You can specify 0 as the number of items to remove to simply add new items at the specified location in the array:

let myArr = ['🍕', '🍾', '🎊', '✨'];

myArr.splice(2, 0, '🌭', '🌮');

console.log(myArr); // ["🍕", "🍾", "🌭", "🌮", "🎊", "✨"]
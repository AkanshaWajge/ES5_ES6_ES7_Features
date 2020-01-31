//Rest params
//Rest Parameter is collecting all remaining elements into an array .
//Variable number of arguments without using the arguments object.

let sortRestArgs = (...theArgs) => theArgs.sort();

console.log(sortRestArgs(5,2,7,1)) //[1,2,5,7]

//Rest parameters are a new way in ES6 / ES2015 to work with functions that have an arbitrary amount of arguments passed in

function myFunc(...someArgs) {
    for (let i = 0; i < someArgs.length; i++) {
      console.log(`Argument ${ i + 1 }: ${ someArgs[i] }`);
    }
  }

  console.log(myFunc(5,2,7,1))

// Argument 1: 5 
// Argument 2: 2 
// Argument 3: 7 
// Argument 4: 1

console.log( myFunc('Paul', 'John', 'Ringo'));

// Argument 1: Paul 
// Argument 2: John 
// Argument 3: Ringo 




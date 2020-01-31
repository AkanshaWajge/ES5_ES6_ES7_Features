//The function* declaration defines a generator function, which returns a Generator object.

/* With generator functions in ES2015 (ES6), we're now able to define functions that can return 
multiple values with the help of the yield keyword. */

function* someGenerator(){
    yield 'Cats';
    yield 'Dogs';
    yield 'Birds';
  }


  /* 
    Notice the use of the * character next to the function keyword, to indicate that it’s
    a generator function.
    Now let’s create an instance of the generator and extract the values from it by calling next() 
    on the generator and getting value:
  */

 const gen = someGenerator();

 console.log(gen.next().value); // Cats   // console.log(gen2.next())    //{"value" : "Cats", "done": flase}
 console.log(gen.next().value); // Dogs
 console.log(gen.next().value); // Birds
 console.log(gen.next().value); // Undefined

 //next() returns an object with the value and a boolean called done that returns true if the generator is out of values:

 const gen2 = someGenerator();

 console.log(gen2.next().done); // false
 console.log(gen2.next().done); // false
 console.log(gen2.next().done); // false
 console.log(gen2.next().done); // true
 //--------------------------------------------------------------------------------------------------------------------

// ID Generator
/* You can use an infinite while in a generator function to create a function that will generate a new 
ID every time next() is called on it. In this case the infinite loop is not dangerous because it will only 
execute once with calls to next(): */

function* idGen(){
  let i = 0;
  while (true) {
    yield ++i;
  }
}

const myIdGen = idGen();

console.log(myIdGen.next().value); // 1
console.log(myIdGen.next().value); // 2
console.log(myIdGen.next().value); // 3
console.log(myIdGen.next().value); // 4
 



 
//Invokes the callback with an accumulator and each value of the array and reduce it to a single value.

// The reduce() method reduces the array to a single value.

// The reduce() method executes a provided function for each value of the array (from left-to-right).

// The return value of the function is stored in an accumulator (result/total).

// Note: reduce() does not execute the function for array elements without values.

// Note: this method does not change the original array.

// Reduce takes a custom callback as its first argument, and some initial value as its second argument.
// It’s important we don’t forget about the second argument, the initial value; and we explicitly set it while using it.
// The input arguments to the custom callback is accumulated value acc ; and the current item in Array, item .
// The value of acc for next iteration would be the returned value from inside the callback, in current iteration.
// Whole point of using reduce() is to form the acc properly; to return it finally from the reduce() call.

// EXAMPLE 1 --------------------------------------------------------------------------------------------

//Finding sum of all elements with the Reduce Method In JavaScript​
[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
    return previousValue+currentValue; 
  }, 10); //20

  // EXAMPLE 2 --------------------------------------------------------------------------------------------

//Finding Factorial with the Reduce Method In JavaScript​
  [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
    return previousValue*currentValue; 
  }, 10); //0

  // EXAMPLE 3 --------------------------------------------------------------------------------------------

//Finding Max value with the Reduce Method In JavaScript​
  var arr = [-20, -50, -5, -60];
  arr.reduce(function(acc, item){
    return Math.max(acc, item);
  }, -Infinity);

  // EXAMPLE 4 --------------------------------------------------------------------------------------------

//Finding an Average with the Reduce Method In JavaScript​
const euros = [29.76, 41.85, 46.5];

const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});

average // 39.37

// EXAMPLE 5 --------------------------------------------------------------------------------------------
//Flattening an array of arrays with the Reduce Method In JavaScript​​

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flat = data.reduce((total, amount) => {
  return total.concat(amount);
}, []);
flat; // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// // EXAMPLE 6 --------------------------------------------------------------------------------------------
//Reading data from objects of array , For instance, lets say we just want all the colors in the data variable below.
const data = [
  {a: 'happy', b: 'robin', c: ['blue','green']}, 
  {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
  {a: 'sad', b: 'goldfish', c: ['green','red']}
];
const colors = data.reduce((total, amount) => {
  amount.c.forEach( color => {
      total.push(color); //We’re going to step through each object and pull out the colours. 
      // We do this by pointing amount.c for each object in the array. 
      // We then use a forEach loop to push every value in the nested array into out total.
  })
  return total;
}, [])

colors //['blue','green','green','black','orange','blue','green','red']

// If we only need unique number then we can check to see of the number already exists in total before we push it.

const uniqueColors = data.reduce((total, amount) => {
  amount.c.forEach( color => {
    if (total.indexOf(color) === -1){
     total.push(color);
    }
  });
  return total;
}, []);

uniqueColors // [ 'blue', 'red', 'green', 'black', 'orange']



// EXAMPLE 7 --------------------------------------------------------------------------------------------

//Piping with Reduce
//An interesting aspect of the reduce method in JavaScript is that you can reduce over functions
//  as well as numbers and strings.


// Let’s say we have a collection of simple mathematical functions. these functions allow us to increment, 
// decrement, double and halve an amount.

function increment(input) { return input + 1;}

function decrement(input) { return input - 1; }

function double(input) { return input * 2; }

function halve(input) { return input / 2; }

let pipeline = [increment, double, decrement];

const result = pipeline.reduce(function(total, func) {
  return func(total);
}, 1);

result // 3
// For whatever reason, we need to increment, then double, then decrement an amount.

// You could write a function that takes an input, and returns (input + 1) * 2 -1. 
// The problem is that we know we are going to need to increment the amount three times, then double it, 
// then decrement it, and then halve it at some point in the future. We don’t want to have to rewrite our 
// function every time so we going to use reduce to create a pipeline.

// A pipeline is a term used for a list of functions that transform some initial value into a final value. 
// Our pipeline will consist of our three functions in the order that we want to use them.
//Spread operator

//Spread Operator is unpacking collected elements such as arrays into single elements .

//Expanded in places with `...` for arguments or multiple elements.

var nodeList = document.querySelectorAll('div');
var array = [...nodeList];

// Spread operator can be used in many cases,like when we want to expand,copy,concat,with math object.

//Concat()

//The concat() method provided by javascript helps in concatenation of two or more strings(String concat() ) 
//or is used to merge two or more arrays. In case of arrays,this method does not change the existing arrays but 
//instead returns a new array.

filter_none
brightness_4
// normal array concat() method 
let arr = [1,2,3]; 
let arr2 = [4,5]; 
  
arr = arr.concat(arr2); 
  
console.log(arr); // [ 1, 2, 3, 4, 5 ] 


//We can achieve the same output with the help of the spread operator, the code will look something like this:
// spread operator doing the concat job 
let arr = [1,2,3]; 
let arr2 = [4,5]; 
  
arr = [...arr,...arr2]; 
console.log(arr); // [ 1, 2, 3, 4, 5 ]

//Note: Though we can achieve the same result, but it is not recommended to use the spread in this particular case, 
//as for a large data set it will work slower as when compared to the native concat() method.

// Copy(like splice method)

// In order to copy the content of array to another we can do something like this:
// copying without the spread operator 
let arr = ['a','b','c']; 
let arr2 = arr; 
  
console.log(arr2); // [ 'a', 'b', 'c' ] 

//The above code works fine considering the fact that we are able to copy the contents of one array to another, 
// but under the hood it’s very different as when we mutate 
// new array it will also affect the old array(the one which we copied). See the code below:
// changed the original array 
let arr = ['a','b','c']; 
let arr2 = arr; 
  
arr2.push('d'); 
  
console.log(arr2); 
console.log(arr); // even affected the original array(arr) 

//In the above code we can clearly see that when we tried to insert an element inside the array, 
// the original array is also altered which we didn’t intended and is not recommended. 
// We can make use of the spread operator in this case, like this:

// spread operator for copying  
let arr = ['a','b','c']; 
let arr2 = [...arr]; 
  
console.log(arr); // [ 'a', 'b', 'c' ] 
  
arr2.push('d'); //inserting an element at the end of arr2 
  
console.log(arr2); // [ 'a', 'b', 'c', 'd' ] 
console.log(arr); // [ 'a', 'b', 'c' ] 

// By using the spread operator we made sure that the original array is not affected whenever we alter the new array.

// Expand

// Whenever we want to expand an array into another we do something like this:

// normally used expand method 
let arr = ['a','b']; 
let arr2 = [arr,'c','d']; 
  
console.log(arr2); // [ [ 'a', 'b' ], 'c', 'd' ] 

// Even though we get the content on one array inside the other one, but actually it is array inside another array which 
// is definitely what we didn’t want. 
// If we want the content to be inside a single array we can make use of the spread operator.

// expand using spread operator 
  
let arr = ['a','b']; 
let arr2 = [...arr,'c','d']; 
  
console.log(arr2); // [ 'a', 'b', 'c', 'd' ] 

//Math

//The Math object in javascript has different properties that we can make use of to do what we want like finding the minimum 
//from a list of numbers, finding maximum etc. Consider the case that we want to find the minimum from a list of numbers,
//we will write something like this:

console.log(Math.min(1,2,3,-1)); //-1  

//Now consider that we have an array instead of a list, this above Math object method won’t work and will return NaN, like:

// min in an array using Math.min() 
let arr = [1,2,3,-1]; 
console.log(Math.min(arr)); //NaN 

// When …arr is used in the function call, it “expands” an iterable object arr into the list of arguments
// In order to avoid this NaN output, we make use of spread operator, like:

// with spread  
let arr = [1,2,3,-1]; 
  
console.log(Math.min(...arr)); //-1 
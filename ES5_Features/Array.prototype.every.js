//Checks if all the elements of an array passes the specified test.
//The every() method checks if all elements in an array pass a test (provided as a function).

//The every() method executes the function once for each element present in the array:

//If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
//If no false occur, every() returns true
//Note: every() does not execute the function for array elements without values.

//Note: every() does not change the original array

[1, 2, 3].every(function(v, i, a) {
    return v > 3;
  });  //false
  
  [1, 2, 3].every(function(v, i, a) {
    return v > 0; 
  }); //true
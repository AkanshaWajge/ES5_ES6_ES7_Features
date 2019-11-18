// Returns an array that meet the condition specified in a callback function.

// The filter() method creates an array filled with all array elements that pass a test (provided as a function).

// Note: filter() does not execute the function for array elements without values.

// Note: filter() does not change the original array.
//-----------------------------------------------------------------------------------

// Type 1:

[1, '', true, false].filter(Boolean); 
//[1, true]

// Type 2:

var ages = [32, 33, 16, 40];
ages.filter(checkAdult) //directly returns the array
function checkAdult(age) {
  return age >= 18;
}

// Type 3:
var ages = [32, 33, 16, 40];
filteredArray = ages.filter(checkAdult) //gets resultant array when filteredArray is called
function checkAdult(age) {
  return age >= 18;
}


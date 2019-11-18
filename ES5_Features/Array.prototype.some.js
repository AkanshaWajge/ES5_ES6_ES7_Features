//Checks if any of the elements of an array passes the specified test.
// The some() method executes the function once for each element present in the array:

// If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values)
// Otherwise it returns false
// Note: some() does not execute the function for array elements without values.

// Note: some() does not change the original array.

[1, 3, 5, 7, 6].some(function(v, i, a) {
    return v%2 === 0;
  }); //true
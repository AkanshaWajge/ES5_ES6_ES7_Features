//For each element in an array performs the specified action.

//The forEach() method calls a function once for each element in an array, in order.

// Note: the function is not executed for array elements without values.


//Type 1 :

  arr1= [1, 2, 3];
  arr1.forEach((num, index) => {
    return arr1[index] = num * 2;
});

//Type 2:

arr2= [1, 2, 3];
arr2.forEach(multiply);

function multiply(num, index)  {
  return arr2[index] = num * 2;
}


//Type 3:

['foo', 'bar', 'baz'].forEach(function(v, i, a) {
    console.log(v, i);
  }); /* foo 0 bar 1 baz 2 */

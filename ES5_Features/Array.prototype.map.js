//Returns an array that contains the results of a invokation of the function passed to it.

// The map() method creates a new array with the results of calling a function for every array element.

// The map() method calls the provided function once for each element in an array, in order.

// Note: map() does not execute the function for array elements without values.

// Note: this method does not change the original array.

//Type 1:
arr1 = [64, 49];
arr1.map(Math.sqrt); //[8, 7]

//Type 2:
arr2 = [2, 4, 6, 8, 10]
let doubled = arr2.map(num => {
    return num * 2;
}); //  [12, 24, 36, 48, 60]
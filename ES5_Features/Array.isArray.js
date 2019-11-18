//Returns true if an object is an array, false if it is not.
var arr = ["a", "b"];
var arrObj = {name: "akansha"};
Array.isArray(arr);
Array.isArray(arrObj);
Array.isArray(Array.prototype); //true 
Array.isArray(); //true 
Array.isArray({}); //false 
Array.isArray(null); //false
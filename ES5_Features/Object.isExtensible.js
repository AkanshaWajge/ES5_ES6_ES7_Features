//Checks if the given object can be extended.

var obj =  {}; 
Object.preventExtensions(obj); 
Object.isExtensible(obj) // false
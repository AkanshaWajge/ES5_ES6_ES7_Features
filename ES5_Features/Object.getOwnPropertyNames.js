//Returns an array of all properties (enumerable or not) found directly upon a given object.

var obj = { 0: 'f', 1: 'o', 2: 'o' }; 
Object.getOwnPropertyNames(obj).sort(); //'0, 1, 2'
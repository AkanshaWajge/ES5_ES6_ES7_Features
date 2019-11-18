//Makes an object immutable.

var obj = {name: 'FooBar'}; 
Object.freeze(obj);                               
obj.name = 'BarFoo';
obj.name //Will still be 'FooBar'
//Prevents future extensions to the object and "CONFIGURABLE" is not set to false for all the properites.

var obj =  {name: 'FooBar'}; 
Object.preventExtensions(obj);
obj.name = 'BarFoo';
obj.name //Will still be 'FooBar'
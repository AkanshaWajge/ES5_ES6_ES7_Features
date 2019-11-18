// Prevents any new addition of properties but defined properties can be changed.

var obj = {name: 'FooBar'};
Object.seal(obj);
obj.name = 'BarFoo'; //Works delete obj.name //returns false and doesn't delete
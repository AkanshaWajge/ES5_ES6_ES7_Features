//Returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.


var proto = { };
var obj=Object.create(proto); 
Object.getPrototypeOf(obj) === proto; //true
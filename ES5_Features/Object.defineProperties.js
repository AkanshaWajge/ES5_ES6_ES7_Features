//Defines new or modifies existing properties directly on an object, returning the object.

var obj = { }; 
Object.defineProperties(obj, {
  "name": {
    value: true,
    writable: true
  },
  "msg": {
    value: "Hello",
    writable: false
  }//etc.etc.
});

//Output : {name: true, msg: "Hello"}
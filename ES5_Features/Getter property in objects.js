//Getter property in objects: Binds an object property to a function that will be invoked when that property is accessed.

//EXAMPLE 1
foo= { get x() { return 42 }}; 
foo.x; //42

//EXAMPLE 2

var obj = {
    log: ['a', 'b', 'c'],
    get latest() {
      if (this.log.length == 0) {
        return undefined;
      }
      return this.log[this.log.length - 1];
    }
  }
  
  console.log(obj.latest);
  // expected output: "c"
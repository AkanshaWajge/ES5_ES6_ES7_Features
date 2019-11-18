//Setter property in objects
//Binds an object property to a function that will be invoked when that property is been set.

var val = 0;
var foo = { set x(v) {
  val = v
}};
foo.x = 42 
val; //42
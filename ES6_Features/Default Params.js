//Initialize formal parameters with default values, if no value or undefined is passed.


let greet = (msg = "Hello", name = "World!") => console.log(msg,name);

greet(); //Hello World!
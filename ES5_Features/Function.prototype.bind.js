//Creates a new function that, when called, has its exectuion context bound to the provided value.

var log = console.log.bind(console);
log('meow') //meow
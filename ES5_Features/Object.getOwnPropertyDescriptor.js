//Returns a property descriptor for an own property i.e directly on the object and not the prototype chain.
obj= {name:'foo'};
Object.getOwnPropertyDescriptor(obj,'name'); 
/*{ value: 'foo', writable: true, enumerable: true, configurable: true }*/
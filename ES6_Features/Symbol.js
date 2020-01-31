//Symbol

//Unique and immutable data type.

var Cat = (function() {
    var nameSymbl = Symbol('name');
 
    function Cat(name) {
        this[nameSymbl] = name;
    }
 
    Cat.prototype.getName = function() {
        return this[nameSymbl];
    };
 
    return Cat;
}());
 
var c = new Cat('milly');
console.log("Cat's name: " + c.getName()); //milly
delete c.name; //Even after deleting
console.log("Cat's name is still: " + c.getName() + ' is private.'); //so milly

//Symbols are unique values created from string keys. Two Symbols created from the same key are not equal.

Symbol("123") === Symbol("456"); // false
Symbol("1") === Symbol("1"); // false

const x = Symbol("abc");
x === x; // true
//There is also a Symbol registry which is shared throughout the entire JavaScript process. 
//Symbols you create will not occur in the registry. Instead, you must retrieve them with Symbol.for. 
//If you attempt to retrieve a Symbol that does not exist in the registry, one will be added and all 
//subsequent requests for that key will return that Symbol.

Symbol("123") === Symbol.for("123"); // false
Symbol.for("123") === Symbol.for("123"); // true
Symbol.for("123") === Symbol.for("456"); // false
//Lastly, you can check if a Symbol is from the registry with Symbol.keyFor, which will check the registry for a Symbol, and return its key if it exists, and undefined otherwise.

const mySymbol = Symbol("myKey");
const theirSymbol = Symbol.for("myKey");

mySymbol === theirSymbol; // false
Symbol.keyFor(mySymbol); // undefined
Symbol.keyFor(theirSymbol); // "myKey"
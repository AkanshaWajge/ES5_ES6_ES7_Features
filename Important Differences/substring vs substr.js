//substring vs substr in JavaScript (Ref : alligator.io)

// Similar to how the difference between the slice vs splice array methods can be hard to remember, 
// it can also be hard to remember the difference between the substring and substr JavaScript string methods.

//String.prototype.substring
//The substring() method, all spelled out, returns a new string with a subset of the string. With one argument passed-in, 
//we get the string starting from the specified index (inclusive) until the end of the string:

const myStr = 'Alligator';

const myNewStr = myStr.substring(2);

console.log(myNewStr); // ligator

//With two arguments passed-in, we get a subset of the string from the starting index to the end index (exclusive):

const myStr = 'Alligator';

const myNewStr = myStr.substring(0, 3);

console.log(myNewStr); // All
String.prototype.substr

//The substr() method is very similar, but the second argument is not for the end index, it’s for the amount of characters.

//Here we want a 3-character string from a starting index of 2:

const myStr = 'Alligator';

const myNewStr = myStr.substr(2, 3);

console.log(myNewStr); // lig

// Negative start index
// Additionally, the first argument to substr can be a negative integer, in which case the start of the returned string
//  is counted from the end of the string that the method is used on:

const myStr = 'Alligator';

const myNewStr = myStr.substr(-2);

console.log(myNewStr); // or

// Same Result When Only One Argument
// When only the first argument is used and is a positive integer, both substring and  substr return the same value:

const myStr = 'Alligator';

const myNewStrViaSubstring = myStr.substring(3);

const myNewStrViaSubstr = myStr.substr(3);

console.log(myNewStrViaSubstring); // igator

console.log(myNewStrViaSubstr); // igator
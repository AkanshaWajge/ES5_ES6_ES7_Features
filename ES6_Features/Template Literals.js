//Template Literals

//Better string formatting capabilities.

var First = "Akansha";
var Last = " Wajge";
`${First} + ${Last} = ${First + Last}`;
//"Akansha + Wajge = Aknahsa Wajge"

//The ECMAScript 2015 specification (ES6) brings us template literals for string interpolation and multiline strings. 
//You may also have heard of them as template strings. The character used to define template literals is the backtick (`), 
//which is located to the right of the 1 on most keyboard layouts.

//And here’s an example of a multiline string:

console.log(`Right now
  is the perfect time to
  learn JavaScript`);
//And here’s yet another example of the power of string interpolation and multiline strings with template literals:

var user = { name: "Joe", email: "joe@example.com" };
var item = { quantity: 3, price: 4.99 };

var message = `Name: ${user.name}
Email: ${user.email}
-----
Total price: ${item.quantity * item.price}`;

console.log(message);
//Here’s the message that will be logged to the console from the above example:

// Name: Joe
// Email: joe@example.com
// -----
// Total price: 14.97
//What is the difference between Rest and Spread?

//Rest Parameter [ …rest]
//It is a collection of all remaining elements (hence, the name rest, as in “the rest of the elements”) into an array.
var myName = ["Marina" , "Magdy" , "Shafiq"] ;
const [firstName , ...familyName] = myName ;
console.log(firstName); // Marina ;
console.log(familyName); // [ "Magdy" , "Shafiq"] ;

/*
As shown on line 2 in the above example , those three dots collected the rest of the elements of 
myName into a new sub array , this is something called destructuring which is breaking my array or 
object into smaller pieces.
Destructuring using rest parameter helped us to break our array into a main parameters that can be called 
directly such as firstName and collecting the rest into another array such as familyName .
Where can we find rest parameter again ?
If you are going to call a function and send a number of arguments , you will receive them into rest
 parameter in the function implementation .

*/

function myData(...args){
console.log(args) ; // ["Marina",24,"Front-End Developer"]
}
myData("Marina",24,"Front-End Developer") ;

/*
as shown in the above example , myData received parameters in …args which will be an array containing 
all the sent arguments from function’s call.
Spread Operator […spread]
It’s the opposite to rest parameter , where rest parameter collects items into an array, the spread operator 
unpacks the collected elements into single elements.
*/
var myName = ["Marina" , "Magdy" , "Shafiq"];
var newArr = [...myName ,"FrontEnd" , 24];
console.log(newArr) ; // ["Marina" , "Magdy" , "Shafiq" , "FrontEnd" , 24 ] ;
/* 
Can you see what happened?
Yes it concatenated between 2 arrays and unpacked myName into single elements and, unlike 
the rest parameter, the spread operator can be the first element, but rest parameter needs to be 
the last to collect the rest elements .
It can be used to copy one array into another or to concatenate 2 arrays together.
*/

/*
Summary
Rest Parameter is collecting all remaining elements into an array .
Spread Operator is unpacking collected elements such as arrays into single elements .
*/

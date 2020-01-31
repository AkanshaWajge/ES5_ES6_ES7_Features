//JavaScript: Remove Duplicates from an Array


//There are multiple ways to remove duplicates from an array.

//The simplest approach (in my opinion) is to use the Set object which lets you store unique values of any type. 
//OPTION 1: In other words, Set will automatically remove duplicates for us.

const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

let unique = [...new Set(names)];
console.log(unique); // 'John', 'Paul', 'George', 'Ringo'  
//Note set returns an array


// OPTION 2:Another option is to use filter().

const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

let x = (names) => names.filter((v,i) => names.indexOf(v) === i)
x(names); // 'John', 'Paul', 'George', 'Ringo'
//Note filter returns an array

//OPTION 3: And finally we can use forEach().

const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

function removeDups(names) {
  let unique = {};
  names.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}

removeDups(names); // // 'John', 'Paul', 'George', 'Ringo'
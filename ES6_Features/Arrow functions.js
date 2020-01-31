// Lexical this, shoter functions.
let obj = {
    method: function () {
      return () => this;
    }
  };
  //Due to lexical scope obj.method()() <===> obj

  //EXAMPLE FACTORIAL OF NUMBER 
  
  let fact = (n) => { return n === 0 ? 1 : n * fact(n-1); };


//EXAMPLE FEBONACCI SERIES :Each subsequent number is the sum of the previous two
//  Eg : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . .

  
let fib = (n) => { return n < 2 ? n : fib(n-1) + fib(n-2); };

//---------------------------------------------------------------------------

var i;
var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 10; i++) {
  // Next fibonacci number = previous + one before previous
  // Translated to JavaScript:
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}
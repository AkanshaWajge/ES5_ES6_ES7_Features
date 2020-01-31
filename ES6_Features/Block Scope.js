//Declares a block scope local variable, optionally initializing it to a value.

var aboutme = () => {
    {
      var investements = 1;
      const salary = 10;
    }
    console.log(investements,salary); //1, undefined.
  }
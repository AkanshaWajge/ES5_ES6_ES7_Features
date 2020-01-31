//Tail recursion

// Tail Calls, Optimization.

//A recursive function is tail recursive when recursive call is the last thing executed by the function.

let factorial = (n, acc = 1) => {
    if (n <= 1) return acc;
    return factorial(n - 1, n * acc);
}
//NO S.O!
factorial(133333337);

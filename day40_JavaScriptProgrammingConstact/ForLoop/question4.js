//Factorial
const factorial = n => {
    let factorial = 1;
  
    for(let i = 1; i <= n; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
let n = 2;
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);

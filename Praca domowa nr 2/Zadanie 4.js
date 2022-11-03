//4.	Create a function that takes in a n (number) as a parameter and returns first n Fibonacci numbers - use recursion

function fibonacciSequence(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacciSequence(n - 1) + fibonacciSequence(n - 2);
  }
}

function fibonacciNumbers(n) {
  for (let i = 0; i <= n; i++) {
    console.log(fibonacciSequence(i));
  }
}

console.log(fibonacciNumbers(8));

//5.	Create a function that:
//a.	Checks if a given number is a prime number

function primeNumberCheck(n) {
  let zeroModulo = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      zeroModulo += 1;
    }
  }
  if (zeroModulo === 2) {
    return true;
  } else {
    return false;
  }
}
console.log(primeNumberCheck(2));

//b. takes in n (numbers) as a parameter and returns first n prime numbers
function firstPrimeNumbers(n) {
  let output = [];
  let i = 2;
  while (output.length < n) {
    if (primeNumberCheck(i)) {
      output.push(i);
    }
    i++;
    }
    return output;
  }

console.log(firstPrimeNumbers(4));

//2)	Write a class that prints the list of the first n Fibonacci numbers. The first two Fibonacci numbers are 1 and 1. The n+1 Fibonacci number can be computed by adding the n and the n-1 Fibonacci number. The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.

class Fibonacci {
  constructor() {
    this.numbers = [1, 1];
  }
  getNnumbers(n) {
    if (n === 1) {
      this.numbers = [1];
      return this.numbers;
    }
    if (n === 2) {
      return this.numbers;
    }
    for (let i = 2; i < n; i++) {
      this.numbers[i] = this.numbers[i - 1] + this.numbers[i - 2];
    }
    return this.numbers;
  }
}

const example = new Fibonacci();

console.log(example.getNnumbers(6));

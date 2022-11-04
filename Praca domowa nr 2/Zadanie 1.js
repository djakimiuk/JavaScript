//a.	example array: [1,6,23,8,4,8,3,7]
//b.	Create a function that takes in an array of numbers and returns sum of all elements

let exampleArray = [1, 6, 23, 8, 4, 8, 3, 7];

function sumArrayElements(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(`Sum of the all elements is: ${sumArrayElements(exampleArray)}`);

//c.	Create a function that takes in an array of numbers and returns sum of first and last element

function sumArrayFirstLastElement(array) {
  return array[0] + array[array.length - 1];
}

console.log(
  `Sum of the first and the last element is: ${sumArrayFirstLastElement(
    exampleArray
  )}`
);

//d.	Create a function that takes in an array and returns its copy in reverse order (DON’T use .reverse() method!)

function reverseArray(array) {
  let reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

console.log(`The reversed array is: [${reverseArray(exampleArray)}]`);

//e.	Create a function that takes two parameters - array of numbers, and number of attempts. Choose random numbers from the array based on the number of attempts and return the lowest among them.
function randomNumbers(array, attempts) {
  let outputArray = [];
  for (i = 0; i < attempts; i++) {
    outputArray.push(array[Math.floor(Math.random() * array.length)]);
  }
  return Math.min(...outputArray);
}
console.log(`The lowest drawed number is: ${randomNumbers(exampleArray, 2)}`);

//f.	Create a function that takes in an array and returns it in random order

function mixArrayElements(array) {
  let copyOfArray = [...array];
  let mixedArray = [];
  for (let i = 0; i < array.length; i++) {
    let arrayIndex = Math.floor(Math.random() * copyOfArray.length);
    mixedArray.push(copyOfArray[arrayIndex]);
    copyOfArray.splice(arrayIndex, 1);
  }
  return mixedArray;
}

console.log(`Random order of the array: [${exampleArray}] is: [${mixArrayElements(exampleArray)}]`);

//g.	Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]

let arrayToCalculate = [1,6,23,8,4,98,3,7,3,98,4,98];

function sumOdd(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sum += array[i]
    }
  }
  return sum;
}

console.log(`The sum of the odd numbers is: ${sumOdd(arrayToCalculate)}`);

//h.	With  a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]
function calculateNumbers(array) {
  let result = 0;
  for(let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      result += array[i]
    } else {
      result -= array[i]
    }
  }
  return result;
}

console.log(`The mathematical result of the given numbers is: ${calculateNumbers(arrayToCalculate)}`);

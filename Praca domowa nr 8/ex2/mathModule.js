let firstParemeter;
let secondParameter;
let result;
let lastOperation;

const add = (a, b) => {
  firstParemeter = a;
  secondParameter = b;
  result = a + b;
  lastOperation = "addition";
  console.log(`${a} + ${b} = ${result}`);
  return result;
};

const substract = (a, b) => {
  firstParemeter = a;
  secondParameter = b;
  result = a - b;
  lastOperation = "substraction";
  console.log(`${a} - ${b} = ${result}`);
  return result;
};

const multiply = (a, b) => {
  firstParemeter = a;
  secondParameter = b;
  result = a * b;
  lastOperation = "multiplication";
  console.log(`${a} * ${b} = ${result}`);
  return result;
};

const divide = (a, b) => {
  firstParemeter = a;
  secondParameter = b;
  result = a / b;
  lastOperation = "divison";
  console.log(`${a} / ${b} = ${result}`);
  return result;
};

const repeat = () => {
  firstParemeter = result;
  switch (lastOperation) {
    case "addition":
      result = firstParemeter + secondParameter;
      console.log(`${firstParemeter} + ${secondParameter} = ${result}`);
      return result;
    case "substraction":
      result = firstParemeter - secondParameter;
      console.log(`${firstParemeter} - ${secondParameter} = ${result}`);
      return result;
    case "multiplication":
      result = firstParemeter * secondParameter;
      console.log(`${firstParemeter} * ${secondParameter} = ${result}`);
      return result;
    case "divison":
      result = firstParemeter / secondParameter;
      console.log(`${firstParemeter} / ${secondParameter} = ${result}`);
      return result;
  }
};

export { add, substract, multiply, divide, repeat };

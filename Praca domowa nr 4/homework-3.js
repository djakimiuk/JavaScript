// Create an IIFE that returns an object with fields:
// method setValue(),
// method showValue()
// and method reverseValue().
// Calling showValue should log the value, or if there is no value
// - tell us about that.
// Calling setValue will set given number or string in closure,
// if the argument is other type - throw an error.
// Value can be type string or number.
// reverseValue(): If number do (*(-1)), if string reverse it.  Closure pattern.

const myObject = (() => {
  return {
    setValue: (input) => {
      if (typeof input === "string" || typeof input === "number") {
        return (myObject.output = input);
      } else {
        throw new Error("Invalid input type!");
      }
    },
    showValue: () => {
      if (myObject.output) {
        console.log(myObject.output);
      } else {
        throw new Error("There is no value!");
      }
    },
    reverseValue: () => {
      if (typeof myObject.output === "string") {
        myObject.output = myObject.output.split("").reverse().join("");
        console.log(myObject.output);
      } else {
        myObject.output = myObject.output * -1;
        console.log(myObject.output);
      }
    },
  };
})(); // YOUR CODE HERE

myObject.setValue(5);
myObject.showValue();
myObject.reverseValue();
myObject.showValue();
myObject.setValue("hello");
myObject.showValue();
myObject.reverseValue();
myObject.showValue();

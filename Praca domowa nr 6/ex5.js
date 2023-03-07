//5)	Given an array of objects, for each object call operation() function in the context of the next object. If the object is last, go back to the beginning of the array:
globalThis.x = 1;
const givenArray = [
  {
    x: 1,
    y: "object one value",
    // operation: () => "object one prefix" + this.x + this.y,
    operation: function () {
      return "object one prefix" + this.x + this.y;
    },
  },
  {
    x: 2,
    y: "object two value",
    // operation: () => "object two prefix" + this.x + this.y,
    operation: function () {
      return "object two prefix" + this.x + this.y;
    },
  },
  {
    x: 3,
    y: "object three value",
    //operation: () => "object three prefix" + this.x + this.y,
    operation: function () {
      return "object three prefix" + this.x + this.y;
    },
  },
];

function arrayOperation(array) {
  for (let i = 0; i < givenArray.length; i++) {
    const currentObject = givenArray[i];
    const nextObject = givenArray[(i + 1) % givenArray.length];
    const result = currentObject.operation.call(nextObject);
    console.log(result);
  }
}
arrayOperation(givenArray);

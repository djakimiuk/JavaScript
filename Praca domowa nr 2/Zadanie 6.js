//6.	Implement binary search

let arr = [1, 3, 5, 6, 7, 8, 10];

function binarySearch(array, target, startIndex, endIndex) {
  let middleIndex = Math.floor((startIndex + endIndex) / 2);
  if (startIndex > endIndex) {
    return "Not found";
  } else if (array[middleIndex] === target) {
    return middleIndex;
  } else if (array[middleIndex] > target) {
    return binarySearch(array, target, startIndex, middleIndex - 1);
  } else if (array[middleIndex] < target) {
    return binarySearch(array, target, middleIndex + 1, endIndex);
  }
}

console.log(binarySearch(arr, 3, 0, arr.length - 1));

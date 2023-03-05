//1)	Write a function that rotates a list by k elements. For example, [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]. Try solving this without creating a copy of the list.
const list = [1, 2, 3, 4, 5, 6];

function rotateArray(array, shuffles) {
  for (i = 0; i < shuffles; i++) {
    array.push(array.shift());
  }
}

rotateArray(list, 2);
console.log(list);

const list = [1, 2, 3, 4, 5, 6];

function rotateArray(array, shuffles) {
  for (i = 0; i < shuffles; i++) {
    array.push(array.shift());
  }
}

rotateArray(list, 2);
console.log(list);

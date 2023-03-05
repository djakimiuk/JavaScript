const string = "aaab cd eefg hh ej";

function deleteString(string) {
  const arr = string.split("");
  console.log(arr);
  const copyArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== " ") {
      copyArr.push(arr[i]);
    }
  }
  return copyArr.join("");
}

console.log(deleteString(string));

function deleteSameletter(string) {
  const arr = string.split("");
  const copyArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === arr[i]) {
      continue;
    } else {
      copyArr.push(arr[i]);
    }
  }
  return copyArr.join("");
}

console.log(deleteSameletter(deleteString(string)));

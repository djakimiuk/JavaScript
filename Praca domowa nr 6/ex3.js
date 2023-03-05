// 3)	Write a code that takes in a string and returns a list of its digits. So for 2342 it should return [2,3,4,2], and for ’A243b’ it should return [2,4,3].

function stringConvert(string) {
  if (!isNaN(string)) {
    return String(string).split("").map(Number);
  }
  const regex = /[0-9]/g;
  const numberArr = string.match(regex).map(Number);
  return numberArr;
}

console.log(stringConvert("A243b"));
console.log(stringConvert("0-700-880"));
console.log(stringConvert(2342));

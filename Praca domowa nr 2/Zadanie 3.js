//a.	First that takes in a string and shift number, and returns encrypted string using Caesar Cipher

function stringEncryption(string, shift) {
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let alphabetCopy = [...alphabet];
  let stringArray = string.toUpperCase().split("");
  let outputArray = [];
  for (let i = 0; i < shift; i++) {
    alphabetCopy.unshift(alphabetCopy.pop());
  }
  for (let j = 0; j < stringArray.length; j++) {
    if (alphabet.indexOf(stringArray[j]) >= 0) {
      outputArray.push(alphabetCopy[alphabet.indexOf(stringArray[j])]);
    } else {
      outputArray.push(stringArray[j]);
    }
  }
  return outputArray.join("");
}

console.log(stringEncryption("jebac pis", 3));

//b.	Second that takes in encrypted string and shift number, and returns decrypted message using Caesar Cipher
function stringDecryption(string, shift) {
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let alphabetCopy = [...alphabet];
  let stringArray = string.toUpperCase().split("");
  let outputArray = [];
  for (let i = 0; i < shift; i++) {
    alphabetCopy.unshift(alphabetCopy.pop());
  }
  for (let j = 0; j < stringArray.length; j++) {
    if (alphabetCopy.indexOf(stringArray[j]) >= 0) {
      outputArray.push(alphabet[alphabetCopy.indexOf(stringArray[j])]);
    } else {
      outputArray.push(stringArray[j]);
    }
  }
  return outputArray.join("");
}
console.log(stringDecryption("GBYXZ MFP", 3));

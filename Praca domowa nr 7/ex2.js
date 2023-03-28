class Palindrome {
  findAllPalindromes(string) {
    const palindromesArr = [];
    for (let i = 0; i <= string.length; i++) {
      let slicedString = string.slice(i);
      for (let j = 0; j <= slicedString.length; j++) {
        let slicedStringToIterate = slicedString.slice(0, j);
        if (this.#isPalindromeCheck(slicedStringToIterate)) {
          palindromesArr.push(slicedStringToIterate);
        }
        continue;
      }
    }
    palindromesArr.sort((a, b) => b.length - a.length);
    return palindromesArr[0];
  }

  #isPalindromeCheck(string) {
    const reversedString = string.split("").reverse().join("");
    return string === reversedString;
  }
}

const test = new Palindrome();
console.log(test.findAllPalindromes("baerren"));

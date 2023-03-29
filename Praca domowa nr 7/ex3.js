class CommonSubsequence {
  constructor(string1, string2) {
    this.string1 = string1;
    this.string2 = string2;
  }

  find() {
    const resultArr = [];
    for (let i = 0; i < this.string1.length; i++) {
      for (let j = 1; j <= this.string1.length; j++) {
        if (this.string2.includes(this.string1.slice(i, j))) {
          resultArr.push(this.string1.slice(i, j));
        }
        continue;
      }
    }
    resultArr.sort((a, b) => b.length - a.length);
    return resultArr[0];
  }
}

const test = new CommonSubsequence("karol", "rolki");
console.log(test.find());

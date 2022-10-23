let firstString = "This is an example.";
let secondString =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
//a.	count how many words it contains
console.log(`First example contains: ${firstString.split(" ").length} words.`);
//output = 4
console.log(
  `Second example contains: ${secondString.split(" ").length} words.`
);
//output = 69

//b.	count how many letter “A”  is in it
let firstOutput = 0;
let secondOutput = 0;
for (let i = 0; i < firstString.split("").length; i++) {
  if (firstString.split("")[i] === "A") {
    firstOutput += 1;
  }
}

for (let i = 0; i < secondString.split("").length; i++) {
  if (secondString.split("")[i] === "A") {
    secondOutput += 1;
  }
}
console.log(`First example contains ${firstOutput} 'A' letters.`);
//output = 0
console.log(`Second example contains ${secondOutput} 'A' letters.`);
//output = 0

//c.	display longest word
let firstLongestWord = Math.max(...firstString.split(" ").map((x) => x.length));
let secondLongestWord = Math.max(
  ...secondString.split(" ").map((x) => x.length)
);

for (let i = 0; i < firstString.split(" ").length; i++) {
  if (firstString.split(" ")[i].length === firstLongestWord) {
    console.log(
      `The longest word in the first example is '${firstString.split(" ")[i]}'`
    );
  }
}
//output: The longest word in the first example is 'example.'

for (let i = 0; i < secondString.split(" ").length; i++) {
  if (secondString.split(" ")[i].length === secondLongestWord) {
    console.log(
      `The longest word in the second example is '${
        secondString.split(" ")[i]
      }'`
    );
  }
}
//output: The longest word in the second example is 'reprehenderit'

//d.	display how many words of length same as the longest is in the string
let firstCounter = 0;
let secondCounter = 0;
for (let i = 0; i < firstString.split(" ").length; i++) {
if (firstString.split(" ")[i].length === firstLongestWord) {
  firstCounter += 1;
}
}
console.log(
  `There is ${firstCounter} word(s) of length same as the longest in the string`
);
//output: There is 1 word(s) of length same as the longest in the string

for (let i = 0; i < secondString.split(" ").length; i++) {
  if (secondString.split(" ")[i].length === secondLongestWord) {
    secondCounter += 1;
  }
}
console.log(
  `There is ${secondCounter} word(s) of length same as the longest in the string`
);
//output: There is 1 word(s) of length same as the longest in the string

//4)	Write a function that translates a text to Pig Latin and back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word, and adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.

function pigLatin(sentence) {
  const result = [];
  const wordsArr = sentence.split(" ");
  for (let i = 0; i < wordsArr.length; i++) {
    let word = wordsArr[i];
    if (!isNaN(word)) {
      result.push(word);
    }
    let convertedWord = word.split("");
    if (convertedWord[0] === convertedWord[0].toUpperCase()) {
      convertedWord[0] = convertedWord[0].toLowerCase();
      convertedWord[1] = convertedWord[1].toUpperCase();
    }
    convertedWord.push(convertedWord.shift(), "a", "y");
    convertedWord = convertedWord.join("");
    result.push(convertedWord);
  }
  return result.join(" ");
}

console.log(pigLatin("The quick brown fox"));

class MorseTranslator {
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
  morseCode = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
    ".......",
  ];
  constructor() {}
  englishToMorse(sentence) {
    const reg = new RegExp(/^[a-zA-Z" "]*$/);
    if (!sentence.match(reg)) {
      return "The sentence should contain letters only!";
    }
    const lettersArr = sentence.toUpperCase().split("");
    const resultArr = lettersArr.map(
      (letter) => this.morseCode[this.alphabet.indexOf(letter)]
    );
    return resultArr.join(" ");
  }
  morseToEnglish(sentenceInMorse) {
    const morseLettersArr = sentenceInMorse.split(" ");
    const resultArr = morseLettersArr.map(
      (letter) => this.alphabet[this.morseCode.indexOf(letter)]
    );
    return resultArr.join("");
  }
}

const translator = new MorseTranslator();

console.log(translator.englishToMorse("Dawid Dawid"));
console.log(
  translator.morseToEnglish("-.. .- .-- .. -.. ....... -.. .- .-- .. -..")
);

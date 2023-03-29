class MorseTranslator {
  reg = new RegExp(/^[a-zA-Z" "]*$/);
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
  constructor(sentence) {
    this.sentence = sentence;
  }

  translate() {
    if (!this.sentence.match(this.reg)) {
      return this.#morseToEnglish();
    }
    return this.#englishToMorse();
  }

  #englishToMorse() {
    const lettersArr = this.sentence.toUpperCase().split("");
    const resultArr = lettersArr.map(
      (letter) => this.morseCode[this.alphabet.indexOf(letter)]
    );
    return resultArr.join(" ");
  }

  #morseToEnglish() {
    const morseLettersArr = this.sentence.split(" ");
    const resultArr = morseLettersArr.map(
      (letter) => this.alphabet[this.morseCode.indexOf(letter)]
    );
    return resultArr.join("");
  }
}

const translator1 = new MorseTranslator("Dawid Dawid");
const translator2 = new MorseTranslator(
  "-.. .- .-- .. -.. ....... -.. .- .-- .. -.."
);

console.log(translator1.translate());
console.log(translator2.translate());

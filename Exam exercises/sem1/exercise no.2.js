//5.	EXAM Create a solution that will tell us what poker set we have. The solution is to deal us 5 cards from the standard 52 card deck at random. Based on cards on our hand the program should tell us what is the best poker set.
const prompt = require("sync-input");
class CardDeck {
  constructor() {
    this.cardDeck = [];
    this.playerHand = [];
    this.prepareDeck();
    this.shuffleCards();
    this.suits = ["♣", "♦", "♥", "♠"];
    this.values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
  }
  prepareDeck() {
    const { suits, values, cardDeck } = this;
    this.#clearDeck;
    for (let suit in suits) {
      for (let value in values) {
        cardDeck.push({ value: values[value], suit: suits[suit] });
      }
    }
    return this.cardDeck;
  }

  #clearDeck() {
    this.cardDeck = [];
  }

  shuffleCards() {
    const { cardDeck } = this;
    let remainingCards = cardDeck.length;
    for (let i = 0; i < remainingCards; i++) {
      let randomIndex = Math.floor(Math.random() * remainingCards);
      [cardDeck[i], cardDeck[randomIndex]] = [
        cardDeck[randomIndex],
        cardDeck[i],
      ];
    }
  }

  #cardOnHand(index) {
    return this.playerHand[index].value + " of " + this.playerHand[index].suit;
  }

  dealFiveCards() {
    this.playerHand = [];
    this.playerHand = this.cardDeck.splice(-5);
    console.log(
      `Your cards: ${this.#cardOnHand(0)}, ${this.#cardOnHand(
        1
      )}, ${this.#cardOnHand(2)}, ${this.#cardOnHand(3)}, ${this.#cardOnHand(
        4
      )}`
    );
  }

  remainingCards() {
    console.log(`There are ${this.cardDeck.length} cards left in the deck.`);
  }

  #playerHandSort() {
    const playerHand = this.playerHand.sort(
      (a, b) => this.values.indexOf(a.value) - this.values.indexOf(b.value)
    );
    return playerHand;
  }

  #valueCounter(playerHand) {
    const valueCounter = {};
    playerHand.forEach(
      (el) => (valueCounter[el.value] = (valueCounter[el.value] || 0) + 1)
    );
    return valueCounter;
  }

  #colorCounter(playerHand) {
    const colorCounter = {};
    playerHand.forEach(
      (el) => (colorCounter[el.suit] = (colorCounter[el.suit] || 0) + 1)
    );
    return colorCounter;
  }

  #comparisonArr(playerHand) {
    const valueArr = [];
    playerHand.forEach((el) => valueArr.push(el.value));
    return JSON.stringify(valueArr);
  }

  #valuesAmountCheck(obj, amount) {
    return Object.values(obj).includes(amount);
  }

  #uniqueKeyAmount(obj) {
    return Object.keys(obj).length;
  }

  bestPokerSet() {
    const values = this.values;
    const playerHand = this.#playerHandSort();
    const royalFlush = '["10", "J", "Q", "K", "A"]';
    const straightCases = ['["A", "2", "3", "4", "5"]'];
    for (let i = 0; i < values.length - 4; i++) {
      straightCases.push(
        JSON.stringify([
          values[i],
          values[i + 1],
          values[i + 2],
          values[i + 3],
          values[i + 4],
        ])
      );
    }
    const valueCounter = this.#valueCounter(playerHand);
    const colorCounter = this.#colorCounter(playerHand);
    const comparisonArr = this.#comparisonArr(playerHand);

    // console.log([valueCounter], [colorCounter]);
    switch (true) {
      case comparisonArr === royalFlush &&
        this.#valuesAmountCheck(colorCounter, 5):
        console.log(`Highest combination of cards: ROYAL FLUSH`);
        break;
      case straightCases.includes(comparisonArr) &&
        this.#valuesAmountCheck(colorCounter, 5):
        console.log(`Highest combination of cards: STRAIGHT FLUSH`);
        break;
      case this.#valuesAmountCheck(valueCounter, 4):
        console.log(`Highest combination of cards: FOUR OF A KIND`);
        break;
      case this.#valuesAmountCheck(valueCounter, 2 && 3):
        console.log(`Highest combination of cards: FULL HOUSE`);
        break;
      case this.#valuesAmountCheck(colorCounter, 5):
        console.log(`Highest combination of cards: FLUSH`);
        break;
      case straightCases.includes(comparisonArr):
        console.log(`Highest combination of cards: STRAIGHT`);
        break;
      case this.#valuesAmountCheck(valueCounter, 3):
        console.log(`Highest combination of cards: THREE OF A KIND`);
        break;
      case this.#valuesAmountCheck(valueCounter, 2) &&
        this.#uniqueKeyAmount(valueCounter) === 3:
        console.log(`Highest combination of cards: TWO PAIR`);
        break;
      case this.#valuesAmountCheck(valueCounter, 2) &&
        this.#uniqueKeyAmount(valueCounter) === 4:
        console.log(`Highest combination of cards: ONE PAIR`);
        break;
      default:
        console.log(
          `The highest card: ${playerHand[4].value} of ${playerHand[4].suit}`
        );
    }
  }
}

const gameInstruction = `To play you have to give instructions to the dealer. 
- 1, if you want to prepare a new card deck,
  - 2, if you want to shuffle the cards,
  - 3, if you want to receive 5 cards on the table,
  - 4, if you want to check the remaining number of cards in the deck,
  - 5, if you want to exit the game`;

function chooseFunc(action) {
  switch (action) {
    case 1:
      deck = new CardDeck();
      deck.prepareDeck();
      console.log(`New card deck prepared!`);
      break;
    case 2:
      deck.shuffleCards();
      console.log(`Cards shuffled!`);
      break;
    case 3:
      if (deck.cardDeck.length >= 5) {
        deck.dealFiveCards();
        deck.bestPokerSet();
      } else {
        console.log(
          `Sorry, there are ${deck.cardDeck.length} cards left in the deck. Ask the dealer to prepare a new deck of cards.`
        );
      }
      break;
    case 4:
      deck.remainingCards();
      break;
    case 5:
      break;
    case 6:
      console.log(gameInstruction);
      break;
    default:
      console.log(`Sorry, I don't understand you. Type 1, 2, 3, 4 or 5 >`);
  }
}

const name = prompt(`What is your name? >`);
console.log(`Welcome ${name ? name : "Unknown"} to Casino Royale!
${gameInstruction}`);
let deck = new CardDeck();
while (true) {
  const choosenOption = +prompt(`What do you want to do? (6 - for help) >`);
  chooseFunc(choosenOption);
  if (choosenOption === 5) {
    console.log(`See you next time!`);
    break;
  }
}

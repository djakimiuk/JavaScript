let cardNumber = 4111111111111111;
let cardType = "";
const re = new RegExp("^[0-9]{13,19}$");

const validateCardNumber = (number) => {
  //Check if the number contains only numeric value
  //and is of between 13 to 19 digits
  const regex = new RegExp("^[0-9]{13,19}$");
  if (!regex.test(number)) {
    return false;
  }

  return luhnCheck(number);
};

const luhnCheck = (val) => {
  let checksum = 0; // running checksum total
  let j = 1; // takes value of 1 or 2

  // Process each digit one by one starting from the last
  for (let i = val.length - 1; i >= 0; i--) {
    let calc = 0;
    // Extract the next digit and multiply by 1 or 2 on alternative digits.
    calc = Number(val.charAt(i)) * j;

    // If the result is in two digits add 1 to the checksum total
    if (calc > 9) {
      checksum = checksum + 1;
      calc = calc - 10;
    }

    // Add the units element to the checksum total
    checksum = checksum + calc;

    // Switch the value of j
    if (j == 1) {
      j = 2;
    } else {
      j = 1;
    }
  }

  //Check if it is divisible by 10 or not.
  return checksum % 10 == 0;
};

if (re.test(cardNumber) && validateCardNumber(cardNumber)) {
  if (
    cardNumber.toString().length === 15 &&
    ["34", "37"].includes(cardNumber.toString().slice(0, 2))
  ) {
    cardType = "American Express";
  } else if (
    cardNumber.toString().length === 16 &&
    ["51", "52", "53", "54", "55"].includes(cardNumber.toString().slice(0, 2))
  ) {
    cardType = "Master Card";
  } else if (
    (cardNumber.toString().length === 13 ||
      cardNumber.toString().length === 16) &&
    cardNumber.toString().slice(0, 1) === "4"
  ) {
    cardType = "Visa";
  }
} else {
  cardType = "INVALID";
}
console.log(cardType);

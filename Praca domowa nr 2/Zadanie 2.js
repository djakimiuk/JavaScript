function tillFridayCounter() {
  let today = new Date();
  let day = today.getDay();
  let tillFridayDays = 0;
  let friday = 5;
  if (friday - day > 0) {
    tillFridayDays = friday - day;
  } else {
    tillFridayDays = friday - day + 7;
  }
  return console.log(`There is ${tillFridayDays} days till Friday.`);
}

tillFridayCounter();

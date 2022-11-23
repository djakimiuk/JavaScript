// Create a function that returns a Promise that has
// a 50% chance of resolving, and 50% chance of rejecting,
// on resolve it should return “Now I work”
// and on reject “Now I don’t’.

function getRandomPromise() {
  const randomNumber = Math.round(Math.random()); //it returns random number 0 or 1
  const myPromise = new Promise((resolve, reject) => {
    if (randomNumber) {
      return resolve("Now I work");
    } else {
      return reject("Now I don't");
    }
  });
  return myPromise;
}

getRandomPromise()
  .then((result) => console.log('I expect this to be "Now I work": ', result))
  .catch((error) => console.log('I expect this to be "Now I don\'t": ', error));

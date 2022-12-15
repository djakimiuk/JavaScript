//EXAM Scale riddle. With 8 balls, ex.  [1,2,1,1,1,1,1,1] get position of the “heavy” ball. Indexes are to be chosen at random. Use weights comparison only two times.

function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createBallsArray(arrayLength) {
  const randomIndex = getRandomIndex(0, arrayLength - 1);
  const resultArray = new Array(arrayLength);
  resultArray.fill(1);
  resultArray[randomIndex] = 2;
  return resultArray;
}

function sumArrayElements(array, startIndex, endIndex) {
  const resultArray = array.slice(startIndex, endIndex + 1);
  return resultArray.reduce((sum, currEl) => {
    sum += currEl;
    return sum;
  }, 0);
}

function weightComparison() {
  const ballArray = createBallsArray(8);
  let heavyBallPosition;
  const part1Weight = sumArrayElements(ballArray, 0, 2);
  const part2Weight = sumArrayElements(ballArray, 3, 5);

  if (part1Weight === part2Weight) {
    if (ballArray[6] > ballArray[7]) {
      heavyBallPosition = 6;
    } else {
      heavyBallPosition = 7;
    }
  } else if (part1Weight > part2Weight) {
    if (ballArray[0] === ballArray[1]) {
      heavyBallPosition = 2;
    } else if (ballArray[1] > ballArray[0]) {
      heavyBallPosition = 1;
    } else {
      heavyBallPosition = 0;
    }
  } else {
    if (ballArray[3] === ballArray[4]) {
      heavyBallPosition = 5;
    } else if (ballArray[4] > ballArray[3]) {
      heavyBallPosition = 4;
    } else {
      heavyBallPosition = 3;
    }
  }
  console.log(ballArray);
  return heavyBallPosition;
}

console.log(weightComparison());

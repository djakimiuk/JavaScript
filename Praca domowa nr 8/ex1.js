const treasureHuntArr = [
  [34, 21, 32, 41, 25],
  [14, 42, 43, 14, 31],
  [54, 45, 52, 42, 23],
  [33, 15, 51, 31, 35],
  [21, 52, 33, 13, 23],
];

const findTreasure = (array) => {
  let currentPosition = [0, 0];
  let currentValue = array[0][0];
  for (let i = 0; i < Infinity; i++) {
    console.log(
      `Current array position: ${currentPosition}, Current value: ${currentValue}`
    );
    if (valueCompareFunc(currentPosition, currentValue)) {
      console.log(
        `The treasure is on the position: ${currentPosition}, value: ${currentValue}`
      );
      break;
    } else {
      currentPosition = setPosition(currentValue);
      currentValue = array[currentPosition[0]][currentPosition[1]];
      continue;
    }
  }
};

const valueCompareFunc = (currentPosition, currentValue) => {
  let valueFromPosition = getValueFromPosition(currentPosition);
  return valueFromPosition === currentValue;
};

const setPosition = (currentValue) => {
  return [currentValue.toString()[0] - 1, currentValue.toString()[1] - 1];
};

const getValueFromPosition = (currentPosition) => {
  return +(
    (currentPosition[0] + 1).toString() + (currentPosition[1] + 1).toString()
  );
};

findTreasure(treasureHuntArr);

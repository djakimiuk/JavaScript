class MatricesCalc {
  constructor(matrix1, matrix2) {
    this.matrix1 = matrix1;
    this.matrix2 = matrix2;
  }
  #matrixDimensionValidation() {
    return this.matrix1.length === this.matrix2[0].length;
  }
}

const matrix1 = [
  [1, 0],
  [2, 0],
];
const matrix2 = [
  [3, 4],
  [1, 9],
];

function matrixMultiply(matrix1, matrix2) {
  const resultArr = [];
  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[i].length; j++) {
      resultArr[i][j] = matrix1[i][j] * matrix2[j][i] + 
    }
  }
  return resultArr;
}

console.log(matrixMultiply(matrix1, matrix2));

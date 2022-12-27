const blankCell = "-";
const firstRow = [7, blankCell, 4, 8, blankCell, blankCell, 3, blankCell, 1];
const secondRow = [8, 2, 3, 4, 5, 6, 7, 8, 9];
const thirdRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const fourthRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const fifthRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sixthRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const seventhRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const eighthRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ninghtRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(`  | 1 2 3 | 4 5 6 | 7 8 9 |
===========================
1 | ${firstRow[0]} ${firstRow[1]} ${firstRow[2]} | ${firstRow[3]} ${firstRow[4]} ${firstRow[5]} | ${firstRow[6]} ${firstRow[7]} ${firstRow[8]} |
2 | ${secondRow[0]} ${secondRow[1]} ${secondRow[2]} | ${secondRow[3]} ${secondRow[4]} ${secondRow[5]} | ${secondRow[6]} ${secondRow[7]} ${secondRow[8]} |
3 | ${thirdRow[0]} ${thirdRow[1]} ${thirdRow[2]} | ${thirdRow[3]} ${thirdRow[4]} ${thirdRow[5]} | ${thirdRow[6]} ${thirdRow[7]} ${thirdRow[8]} |
===========================
4 | ${fourthRow[0]} ${fourthRow[1]} ${fourthRow[2]} | ${fourthRow[3]} ${fourthRow[4]} ${fourthRow[5]} | ${fourthRow[6]} ${fourthRow[7]} ${fourthRow[8]} |
5 | ${fifthRow[0]} ${fifthRow[1]} ${fifthRow[2]} | ${fifthRow[3]} ${fifthRow[4]} ${fifthRow[5]} | ${fifthRow[6]} ${fifthRow[7]} ${fifthRow[8]} |
6 | ${sixthRow[0]} ${sixthRow[1]} ${sixthRow[2]} | ${sixthRow[3]} ${sixthRow[4]} ${sixthRow[5]} | ${sixthRow[6]} ${sixthRow[7]} ${sixthRow[8]} |
===========================
7 | ${seventhRow[0]} ${seventhRow[1]} ${seventhRow[2]} | ${seventhRow[3]} ${seventhRow[4]} ${seventhRow[5]} | ${seventhRow[6]} ${seventhRow[7]} ${seventhRow[8]} |
8 | ${eighthRow[0]} ${eighthRow[1]} ${eighthRow[2]} | ${eighthRow[3]} ${eighthRow[4]} ${eighthRow[5]} | ${eighthRow[6]} ${eighthRow[7]} ${eighthRow[8]} |
9 | ${ninghtRow[0]} ${ninghtRow[1]} ${ninghtRow[2]} | ${ninghtRow[3]} ${ninghtRow[4]} ${ninghtRow[5]} | ${ninghtRow[6]} ${ninghtRow[7]} ${ninghtRow[8]} |
===========================`);

const sudokuGrid = [
  [0, 0, 0, 8, 0, 0, 4, 0, 3],
  [2, 0, 0, 0, 0, 4, 8, 9, 0],
  [0, 9, 0, 0, 0, 0, 0, 0, 2],
  [0, 0, 0, 0, 2, 9, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 7, 0, 6, 5, 0, 0, 0, 0],
  [9, 0, 0, 0, 0, 0, 0, 8, 0],
  [0, 6, 2, 7, 0, 0, 0, 0, 1],
  [4, 0, 3, 0, 0, 6, 0, 0, 0],
];



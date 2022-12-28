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

function valueCheck(grid, col, row, value) {
  let colArray = [];
  grid.forEach((element) => {
    colArray.push(element[col - 1]);
  });
  let subgridArray = [];
  switch (col) {
    case 1:
    case 2:
    case 3:
      switch (row) {
        case 1:
        case 2:
        case 3:
          subgridArray.push(
            grid[0][0],
            grid[0][1],
            grid[0][2],
            grid[1][0],
            grid[1][1],
            grid[1][2],
            grid[2][0],
            grid[2][1],
            grid[2][2]
          );
          break;
        case 4:
        case 5:
        case 6:
          subgridArray.push(
            grid[3][0],
            grid[3][1],
            grid[3][2],
            grid[4][0],
            grid[4][1],
            grid[4][2],
            grid[5][0],
            grid[5][1],
            grid[5][2]
          );
          break;
        case 7:
        case 8:
        case 9:
          subgridArray.push(
            grid[6][0],
            grid[6][1],
            grid[6][2],
            grid[7][0],
            grid[7][1],
            grid[7][2],
            grid[8][0],
            grid[8][1],
            grid[8][2]
          );
          break;
      }
      break;
    case 4:
    case 5:
    case 6:
      switch (row) {
        case 1:
        case 2:
        case 3:
          subgridArray.push(
            grid[0][3],
            grid[0][4],
            grid[0][5],
            grid[1][3],
            grid[1][4],
            grid[1][5],
            grid[2][3],
            grid[2][4],
            grid[2][5]
          );
          break;
        case 4:
        case 5:
        case 6:
          subgridArray.push(
            grid[3][3],
            grid[3][4],
            grid[3][5],
            grid[4][3],
            grid[4][4],
            grid[4][5],
            grid[5][3],
            grid[5][4],
            grid[5][5]
          );
          break;
        case 7:
        case 8:
        case 9:
          subgridArray.push(
            grid[6][6],
            grid[6][7],
            grid[6][8],
            grid[7][6],
            grid[7][7],
            grid[7][8],
            grid[8][6],
            grid[8][7],
            grid[8][8]
          );
          break;
      }
      break;
    case 7:
    case 8:
    case 9:
      switch (row) {
        case 1:
        case 2:
        case 3:
          subgridArray.push(
            grid[0][0],
            grid[0][1],
            grid[0][2],
            grid[1][0],
            grid[1][1],
            grid[1][2],
            grid[2][0],
            grid[2][1],
            grid[2][2]
          );
          break;
        case 4:
        case 5:
        case 6:
          subgridArray.push(
            grid[3][0],
            grid[3][1],
            grid[3][2],
            grid[4][0],
            grid[4][1],
            grid[4][2],
            grid[5][0],
            grid[5][1],
            grid[5][2]
          );
          break;
        case 7:
        case 8:
        case 9:
          subgridArray.push(
            grid[6][0],
            grid[6][1],
            grid[6][2],
            grid[7][0],
            grid[7][1],
            grid[7][2],
            grid[8][0],
            grid[8][1],
            grid[8][2]
          );
          break;
      }
      break;
  }

  if (
    grid[row].includes(value) &&
    colArray.includes(value) &&
    subgridArray.includes(value)
  ) {
    return true;
  }
}


//Y – when bouncing ball gets in collision with it, redirect the ball to a random direction, other that it came from. After that Y turns into 0
// X – border,
// 0 – fields, that the ball can travel through,
// 1 – bouncing ball

// The program should show how the ball travels and bounces against the walls. Bouncing objects starts in any corner. Assume that 1 and Y positions may vary.

const board = [
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "1", "0", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "X", "0", "0", "0", "0", "Y", "0", "X"],
  ["X", "0", "0", "X", "X", "X", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "X", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "Y", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
];

//linear function that guides the ball diagonally: y = -x + 15

// Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

// Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

// To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.

// Examples:
// countSquares(2) --> 26
// countSquares(4) --> 98


const countSquares = function(cuts){
  if (cuts === 0) return 1;
  const side = (cuts + 1) ** 2;
  const middle = side - (cuts - 1) ** 2;
  const amountMiddle = cuts - 1

  // console.log('cuts:', cuts, 'Сторона:', side, 'middle:', middle, 'amountMiddle:', amountMiddle);
  return side * 2 + middle * amountMiddle;
}


console.log(countSquares(0), 1);
console.log(countSquares(1), 8);
console.log(countSquares(2), 26);
console.log(countSquares(3), 56);
console.log(countSquares(4), 98);
// console.log(countSquares(5),152);
// console.log(countSquares(16),1538);
// console.log(countSquares(23),3176);

// 1          4 + 4                       = 8
// 2 =>       9 + 8 + 9                   = 26
// 3 =>       16 + 12 + 12 + 16           = 56
// 4 =>       25 + 16 + 16 + 16 + 25      = 98

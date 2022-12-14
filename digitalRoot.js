// Sum of Digits / Digital Root

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {
  let str = n.toString();
  let sum = 0;

  while (true) {
    for (let i = 0; i < str.length; i++) {
      sum += Number(str[i]);
    }

    if (sum < 10) return sum;
    str = sum.toString();
    sum = 0;
  }
}


console.log(digitalRoot(16), 7 );
console.log(digitalRoot(456), 6 );

//! Мое решение рекурсией
// function digitalRoot(n) {
//   const str = n.toString();
//   let sum = 0;
//   let res;

//   for (let i = 0; i < str.length; i++) {
//     sum += Number(str[i]);
//   }

//   res = sum.toString();

//   return res.length > 1 ? digitalRoot(res) : sum;
// }

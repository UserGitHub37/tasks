// Last digit of a large number
// Description: https://www.codewars.com/kata/5511b2f550906349a70004e1/train/javascript

// Examples
// lastDigit("4", "1")            // returns 4
// lastDigit("4", "2")            // returns 6
// lastDigit("9", "7")            // returns 9
// lastDigit("10","10000000000")  // returns 0

function lastDigit(str1, str2) {
  const number = Number(str1.at(-1));
  const degree = Number(str2.slice(-2));

  if (degree === 0 && str2.length === 1) return 1;
  if (number === 0 || number === 1 || number === 5 || number === 6) return number;
  if (number === 2) return [6, 2, 4, 8][degree % 4];
  if (number === 3) return [1, 3, 9, 7][degree % 4];
  if (number === 4) return [6, 4][degree % 2];
  if (number === 7) return [1, 7, 9, 3][degree % 4];
  if (number === 8) return [6, 8, 4, 2][degree % 4];
  if (number === 9) return [1, 9][degree % 2];
}


console.log(lastDigit("4", "1"), 4);
console.log(lastDigit("4", "2"), 6);
console.log(lastDigit("9", "7"), 9);
console.log(lastDigit("10","10000000000"), 0);
console.log(lastDigit("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"), 6);
console.log(lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"), 7);

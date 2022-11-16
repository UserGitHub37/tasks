// You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

// "zero nine five two" -> "four"

// If the string is empty or includes a number greater than 9, return "n/a"


function averageString(str) {
  let res;

  if (!str) return 'n/a';

  const numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  }

  const arr = str.split(' ').map(num => {
    return numbers[num];
  });

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'undefined') return 'n/a';

    sum += arr[i];
  }

  res = Math.floor(sum / arr.length);

  for (let num in numbers) {
    if (numbers[num] === res) return num;
  }

  return 'n/a';
}


console.log(averageString("zero nine five two"), "four");
console.log(averageString("four six two three"), "three");
console.log(averageString("one two three four five"), "three");
console.log(averageString("five four"), "four");
console.log(averageString("zero zero zero zero zero"), "zero");
console.log(averageString("one one eight one"), "two");
console.log(averageString(""), "n/a");


//! Best Ppractice
// const numbers = [
//   'zero',
//   'one',
//   'two',
//   'three',
//   'four',
//   'five',
//   'six',
//   'seven',
//   'eight',
//   'nine',
// ];

// const averageString = (str) => {
//   const nums = str.split(' ').map(v => numbers.indexOf(v));
//   if (nums.includes(-1)) return 'n/a'
//   const sum = nums.reduce((prev, cur) => prev + cur);
//   const average = Math.floor(sum / nums.length)
//   return numbers[average]
// }

// Consecutive Ducks
// Positive integers have so many gorgeous features. Some of them could be expressed as a sum of two or more consecutive positive numbers.

// Consider an Example :
// 10 , could be expressed as a sum of 1 + 2 + 3 + 4 .
// Task
// Given Positive integer, N , Return true if it could be expressed as a sum of two or more consecutive positive numbers , OtherWise return false .

// Notes
// Guaranteed constraint : 2 ≤ N ≤ (2^32) -1 .
// Input >> Output Examples:

// * consecutiveDucks(9)  ==>  return (true)  //  9 , could be expressed as a sum of ( 2 + 3 + 4 ) or ( 4 + 5 ) .

// * consecutiveDucks(64)  ==>  return (false)

// * consecutiveDucks(42)  ==>  return (true) //  42 , could be expressed as a sum of ( 9 + 10 + 11 + 12 )  .



function consecutiveDucks(num) {
  while (true) {
    num /= 2;
    if (num === 1) return false;
    if (num % 1) return true;
  }
}

//! Best Practice
// const consecutiveDucks = num => Math.log2(num) % 1 !== 0



// Отсортировав по булевым результатам стало понятно, что false возникает на целых степенях двойки
console.log(consecutiveDucks(8), false);
console.log(consecutiveDucks(16), false);
console.log(consecutiveDucks(32), false);


console.log(consecutiveDucks(6), true);
console.log(consecutiveDucks(9), true);
console.log(consecutiveDucks(13), true);
console.log(consecutiveDucks(25), true);
console.log(consecutiveDucks(38), true);
console.log(consecutiveDucks(57), true);
console.log(consecutiveDucks(65), true);
console.log(consecutiveDucks(69), true);
console.log(consecutiveDucks(75), true);
console.log(consecutiveDucks(91), true);
console.log(consecutiveDucks(99), true);



console.log(consecutiveDucks(522), true);
console.log(consecutiveDucks(974), true);
console.log(consecutiveDucks(755), true);
console.log(consecutiveDucks(512), false);
console.log(consecutiveDucks(739), true);
console.log(consecutiveDucks(1006), true);
console.log(consecutiveDucks(838), true);
console.log(consecutiveDucks(1092), true);
console.log(consecutiveDucks(727), true);
console.log(consecutiveDucks(648), true);
console.log(consecutiveDucks(1024), false);
console.log(consecutiveDucks(851), true);
console.log(consecutiveDucks(541), true);
console.log(consecutiveDucks(1011), true);
console.log(consecutiveDucks(822), true);


console.log(consecutiveDucks(382131), true);
console.log(consecutiveDucks(118070), true);
console.log(consecutiveDucks(17209), true);
console.log(consecutiveDucks(32768), false);
console.log(consecutiveDucks(161997), true);
console.log(consecutiveDucks(400779), true);
console.log(consecutiveDucks(198331), true);
console.log(consecutiveDucks(325482), true);
console.log(consecutiveDucks(88441), true);
console.log(consecutiveDucks(648), true);
console.log(consecutiveDucks(65536), false);
console.log(consecutiveDucks(323744), true);
console.log(consecutiveDucks(183540), true);
console.log(consecutiveDucks(65271), true);
console.log(consecutiveDucks(5263987), true);






//! Этот вариант основные тесты прошел а в глубоких не укладываюсь в 12 секунд
// function consecutiveDucks(num) {
//   const limit = Math.ceil(num / 2) + 1;
//   let sum;

//   for (let i = 1; i < limit; i++) {
//     sum = i;

//     for (let j = i + 1; j < limit; j++) {
//       sum += j;
//       if (sum === num) return true;
//       if (sum > num) break;
//     }
//   }

//   return false;
// }







// const obj = {};

// for (let i = 4, sum = 0; i < 13; i++) {
//   obj[i] = sum += i;
// }

// console.log(obj);

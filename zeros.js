// Number of trailing zeros of N!


// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros
// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.

//! решение отправленное на Codewars
// function zeros (n) {
//   if (n < 5) return 0; //! эту строчку можно удалить

//   let res = 0;

//   for (let i = 5; (i / 5) * 5 <= n; i *= 5) { //! вместо "(i / 5) * 5 <= n" оставить "i <= n"
//     res += Math.floor(n / i);
//   }

//   return res;
// }

//! код после рефакторинга
function zeros (n) {
  let res = 0;

  for (let i = 5; i <= n; i *= 5) {
    res += Math.floor(n / i);
  }

  return res;
}



console.log(zeros(777), 193, "n = 777");

console.log(zeros(0), 0, "Testing with n = 0");
console.log(zeros(5), 1, "Testing with n = 5");
console.log(zeros(6), 1, "Testing with n = 6");
console.log(zeros(25), 6, "Testing with n = 25");
console.log(zeros(30), 7, "Testing with n = 30"); // 265252859812191058636308480000000


// console.log(zeros(100), "n = 100");
// console.log(zeros(1000), "n = 1000");
// console.log(zeros(10000), "n = 10000");


//! Best Practice
// function zeros (n) {
//   var zs = 0;
//   while(n>0){
//     n=Math.floor(n/5);
//     zs+=n
//   }
//   return zs;
// }

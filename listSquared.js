// Integers: Recreation One

// 1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.

// Task
// Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

// We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.

// Example:
// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]
// The form of the examples may change according to the language, see "Sample Tests".

// Note
// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

//! доп пояснения задания (из обсуждения задачи)
// if list_squared(m, n), find all the numbers, x, between m and n (both inclusive) such that the sum of x's factors is a perfect square. Return [[x1, perfect-square1], [x2, perfect-square2]]

// eg list_squared(1, 250) ==> [[1, 1], [42, 2500], [246, 84100]] becuase 1 has factors [1] and 1^2 == 1 (perfect square) 42 has factors [1,2,3,6,7,14,21,42] and the sum of the sqaured factors is 1^2 + 2^2 + 3^2 + 6^2 + 7^2 + 14^2 + 21^2 + 42^2 == 2500 (perfect square)

// если list_squared(m, n), найти все числа x между m и n (оба включительно), такие, что сумма множителей x представляет собой идеальный квадрат. Вернуть [[x1, идеальный квадрат1], [x2, идеальный квадрат2]]

// например, list_squared(1, 250) ==> [[1, 1], [42, 2500], [246, 84100]] потому что 1 имеет множители [1] и 1^2 == 1 (идеальный квадрат) 42 имеет множители [1,2,3,6,7,14,21,42], а сумма возведенных в квадрат множителей равна 1^2 + 2^2 + 3^2 + 6^2 + 7^2 + 14^2 + 21 ^2 + 42^2 == 2500 (полный квадрат)


function listSquared(m, n) {
  const arr = [];
  const res = [];

  while (m <= n) {
    for (let i = 1; i <= Math.sqrt(m); i++) {
      if (m % i === 0) {
        arr.push(i, m / i)
      }
    }

    if (arr.length > 0) {
      const sum = Array.from(new Set(arr)).reduce((sum, cur) => {return sum + cur ** 2}, 0);
      if (Number.isInteger(Math.sqrt(sum))) {
        res.push([m, sum]);
      }
      arr.splice(0, arr.length);
    }

    m++;
  }

  return res;
}


console.log(listSquared(1, 250), [[1, 1], [42, 2500], [246, 84100]]);
console.log(listSquared(42, 250), [[42, 2500], [246, 84100]]);
console.log(listSquared(250, 500), [[287, 84100]]);



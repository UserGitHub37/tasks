// Memoized Fibonacci

// Problem Context
// The Fibonacci sequence is traditionally used to explain tree recursion.

// function fibonacci(n) {
//     if(n==0 || n == 1)
//         return n;
//     return fibonacci(n-1) + fibonacci(n-2);
// }
// This algorithm serves welll its educative purpose but it's tremendously inefficient, not only because of recursion, but because we invoke the fibonacci function twice, and the right branch of recursion (i.e. fibonacci(n-2)) recalculates all the Fibonacci numbers already calculated by the left branch (i.e. fibonacci(n-1)).

// This algorithm is so inefficient that the time to calculate any Fibonacci number over 50 is simply too much. You may go for a cup of coffee or go take a nap while you wait for the answer. But if you try it here in Code Wars you will most likely get a code timeout before any answers.

// For this particular Kata we want to implement the memoization solution. This will be cool because it will let us keep using the tree recursion algorithm while still keeping it sufficiently optimized to get an answer very rapidly.

// The trick of the memoized version is that we will keep a cache data structure (most likely an associative array) where we will store the Fibonacci numbers as we calculate them. When a Fibonacci number is calculated, we first look it up in the cache, if it's not there, we calculate it and put it in the cache, otherwise we returned the cached number.

//! Refactor the function into a recursive Fibonacci function that using a memoized data structure avoids the deficiencies of tree recursion. Can you make it so the memoization cache is private to this function?

// function fibonacci(n) {
//   if (n < 2)
//     return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// =======================

//! with private cache

function fibonacci(n) {
  const fib = {0: 0, 1: 1};

  function calcFib(num) {
    if (fib[num] === undefined) {
      fib[num] = calcFib(num - 1) + calcFib(num - 2);
    }
    return fib[num];
  }

  calcFib(n);

  return fib[n];
}

//! Refactoring a previous function (with IIFE)
// const fibonacci = (function () {
//   const fib = {0: 0, 1: 1};

//   return function (n) {
//     if (fib[n] === undefined) {
//       fib[n] = fibonacci(n - 1) + fibonacci(n - 2);
//     }
//     return fib[n];
//   }

// })();

console.log(fibonacci(0), 0);
console.log(fibonacci(1), 1);
console.log(fibonacci(5), 5);
console.log(fibonacci(10), 55);
console.log(fibonacci(15), 610);
console.log(fibonacci(20), 6765);
console.log(fibonacci(50), 12586269025);
console.log(fibonacci(60), 1548008755920);
console.log(fibonacci(70), 190392490709135);


//! no private cache
// const fib = {0: 0, 1: 1};

// function fibonacci(n) {

//   if (fib[n] === undefined) {
//     fib[n] = fibonacci(n - 1) + fibonacci(n - 2);
//   }

//   return fib[n];
// }


//! Best Practice

// var fibonacci = (function () {
//   var cache = {};

//   return function(n) {

//     // Base case
//     if(n==0 || n == 1)
//         return n;

//     // Recurse only if necessary
//     if(cache[n-2] === undefined)
//       cache[n-2] = fibonacci(n-2);
//     if(cache[n-1] === undefined)
//       cache[n-1] = fibonacci(n-1);

//     return cache[n-1] + cache[n-2];
//   };
// })(); // Immediately invoke to create a closure for the cache variable

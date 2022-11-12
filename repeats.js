// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

// Good luck!

// If you like this Kata, please try:

// Sum of prime-indexed elements

// Sum of integer combinations

function repeats(arr){
  const set = new Set(arr);
  let res = 0;

  for (const num of set) {
    if (arr.filter((n) => n === num).length === 1) {
      res += num;
    }
  }

  return res;
}


console.log(repeats([4,5,7,5,4,8]),15);
console.log(repeats([9, 10, 19, 13, 19, 13]),19);
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
console.log(repeats([5, 10, 19, 13, 10, 13]),24);


//! Best Practice

function repeats(arr){
  return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a,b) => a + b, 0);
};

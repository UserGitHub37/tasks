// This challenge is an extension of the kata of Codewars: Missing and Duplicate Number", authored by the user Uraza. (You may search for it and complete it if you have not done it)

// In this kata, we have an unsorted sequence of consecutive numbers from a to b, such that a < b always (remember a, is the minimum, and b the maximum value).

// They were introduced an unknown amount of duplicates in this sequence and we know that there is an only missing value such that all the duplicate values and the missing value are between a and b, but never coincide with them.

// Find the missing number with the duplicate numbers (duplicates should be output in a sorted array).

// Let's see an example:

// arr = [10,9,8,9,6,1,2,4,3,2,5,5,3]

// find_dups_miss([10,9,8,9,6,1,2,4,3,2,5,5,3]) == [7,[2,3,5,9]]

// The code should be fast to process long arrays (maximum length aprox. = 1.000.000). The values for the randon tests:

// 500 <= a <= 50000
// a + k <= b and 100 <= k <= 1000000
// amount of duplicates variable, according to the length of the array

function findDupsMiss(arr) {
  arr.sort((a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  })

  const set = new Set(arr);
  const uniqSortedArr = Array.from(set);
  const res = [];

  for (let j = 1; j < uniqSortedArr.length; j++) {
    if (uniqSortedArr[j] !== uniqSortedArr[j - 1] + 1) {
      res.push(uniqSortedArr[j - 1] + 1);
    }
  }

  const doubleValues = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === arr[i]) {
      doubleValues.push(arr[i]);
    }
  }

  res.push(doubleValues)

  return res;
}

const arr1 = [10,9,8,9,6,1,2,4,3,2,5,5,3];
console.log(findDupsMiss(arr1));
console.log([7, [2, 3, 5, 9]]);


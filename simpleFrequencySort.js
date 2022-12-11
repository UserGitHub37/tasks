// Simple frequency sort

// In this Kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// --we sort by highest frequency to lowest frequency. If two elements have same frequency, we sort by increasing value


function solve(arr){
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] === undefined ?  obj[arr[i]] = 1 : obj[arr[i]]++;
  }

  const frequencies = Object.entries(obj).sort((a, b) => {
    if (a[1] === b[1]) return Number(a[0]) - Number(b[0]);

    return b[1] - a[1];
  });

  return frequencies.reduce((acc, cur) => {
    return [...acc, ...(new Array(cur[1])).fill(Number(cur[0]))];
  }, []);
}


console.log(solve([2,3,5,3,7,9,5,3,7]),[3,3,3,5,5,7,7,2,9]);
console.log(solve([1,2,3,0,5,0,1,6,8,8,6,9,1]),[1,1,1,0,0,6,6,8,8,2,3,5,9]);
console.log(solve([5,9,6,9,6,5,9,9,4,4]),[9,9,9,9,4,4,5,5,6,6]);
console.log(solve([4,4,2,5,1,1,3,3,2,8]),[1,1,2,2,3,3,4,4,5,8]);
console.log(solve([4,9,5,0,7,3,8,4,9,0]),[0,0,4,4,9,9,3,5,7,8]);

console.log(solve([42, 42, 42, 14, 14, 26, 26, 31, 31, 35, 35, 47, 47, 25, 11, 12, 0, 21, 22, 1, 2, 28, 29, 6, 32, 7, 40, 9, 44, 10, 50]), [42, 42, 42, 14, 14, 26, 26, 31, 31, 35, 35, 47, 47, 0, 1, 2, 6, 7, 9, 10, 11, 12, 21, 22, 25, 28, 29, 32, 40, 44, 50]);


// [42, 42, 42, 14, 14, 26, 26, 31, 31, 35, 35, 47, 47, 0, 1, 2, 6, 7, 9, 10, 11, 12, 21, 22, 25, 28, 29, 32, 40, 44, 50]
// [42, 42, 42, 14, 14, 26, 26, 31, 31, 35, 35, 47, 47, 25, 11, 12, 0, 21, 22, 1, 2, 28, 29, 6, 32, 7, 40, 9, 44, 10, 50]

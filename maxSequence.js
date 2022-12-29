// Maximum subarray sum

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.


const maxSequence = function(arr) {
  let sum = 0;
  let maxSum = 0;

  if (arr?.length === 0) return 0;

  for (let i = 0; i < arr.length; i++) {
    if (sum <= 0) {
      sum = arr[i];
    } else {
      sum += arr[i];
    }

    if (sum > maxSum) maxSum = sum;
  }

  return maxSum;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
console.log(maxSequence([]), 0);
console.log(maxSequence([-2,-1,-3,-4,-1,-2,-1,-5,-4]), 0);
console.log(maxSequence([7,4,11,-11,39,36,10,-6,37,-10,-32,44,-26,-34,43,43]), 155);
console.log(maxSequence([-40,-43,-21,-13,20,5,-26,48,33,5,-41,4,-25]), 86);

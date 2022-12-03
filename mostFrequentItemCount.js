// Find Count of Most Frequent Item in an Array

// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5
// The most frequent number in the array is -1 and it occurs 5 times.


function mostFrequentItemCount(collection) {
  const score = {};
  let frequence = 0;

  for (let i = 0; i < collection.length; i++) {
    if (score[collection[i]] === undefined) {
      score[collection[i]] = 1;
    } else {
      score[collection[i]]++;
    }
  }

  for (const key in score) {
    if (score[key] > frequence) {
      frequence = score[key];
    }
  }

  return frequence;
}


console.log(mostFrequentItemCount([3, -1, -1]), 2)
console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]), 5)

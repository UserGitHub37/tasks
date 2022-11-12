function sumIntervals(intervals) {
  console.log(intervals);
  intervals.sort((a, b) => a[0] - b[0]);
  console.log(intervals);

  let res = 0;

  switch(intervals.length) {
    case 0:
      return 0;
    case 1:
      return intervals[0][1] - intervals[0][0];
  }

  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] >= intervals[i + 1][1]) {
      intervals[i + 1][0] = intervals[i][1];
      intervals[i + 1][1] = intervals[i][1];
    }

    if (intervals[i][1] > intervals[i + 1][0] && intervals[i][1] <= intervals[i + 1][1]) {
      intervals[i + 1][0] = intervals[i][1];
    }

  }

  console.log(intervals);

  for (let k = 0; k < intervals.length; k++) {
    res = res + intervals[k][1] - intervals[k][0];
  }

  return res;
}

// console.log(sumIntervals([[1,11],[10,20]])); // [1,11],[11,20] => 10 + 9 = 19
// console.log(sumIntervals([[1,11],[10,11]])); // [1,11],[11,20] => 10 + 0 = 10
console.log(sumIntervals([[1,11],[10,15]])); //
console.log(sumIntervals([[1,16],[10,15]])); //

// console.log(sumIntervals( [
//   [10, 20],
//   [-40, 30],
//   [50, 60]
// ] )); // =>

// console.log(sumIntervals( [
//   [-2, 3]
// ] )); // => 3

// console.log(sumIntervals( [
//   [-10, -2],
//   [-50, -10],
//   [-30, -4]
// ] )); // =>

// console.log(sumIntervals( [
//   [1,2],
//   [6, 10],
//   [11, 15]
// ] ));

// console.log(sumIntervals( [
//   [1,4],
//   [7, 10],
//   [3, 5]
// ] ));

// console.log(sumIntervals( [
//   [1,5],
//   [10, 20],
//   [1, 6],
//   [16, 19],
//   [5, 11]
// ] ));

// console.log(sumIntervals( [
//   [0, 20],
//   [-100000000, 10],
//   [30, 40]
// ] ));




// console.log(sumIntervals( [
//   [-4, -1],
//   [-3, -2]
// ] )); // =>

// console.log(sumIntervals( [
//   [10, 10],
//   [-100, -90],
//   [10, 10]
// ] )); // => 3

// console.log(sumIntervals( [
//   [10, 20],
//   [-10, 15],
//   [30, 40]
// ] )); // => 3

// console.log(sumIntervals( [
//   [1, 4],
//   [2, 3]
// ] )); // => 3

// console.log(sumIntervals( [
//   [1, 4],
//   [2, 4]
// ] )); // => 3

// console.log(sumIntervals( [
//   [1, 4],
//   [1, 3]
// ] )); // => 3

// console.log(sumIntervals( [
//   [1, 4],
//   [1, 4]
// ] )); // => 3

// console.log(sumIntervals( [
//   [1, 2],
//   [0, 10],
//   [3, 4]
// ] )); // => 11

// console.log(sumIntervals( [
//   [1, 2],
//   [5, 10],
//   [3, 4]
// ] )); // => 7

// console.log(sumIntervals( [
//   [0, 20],
//   [-100000000, 10],
//   [30, 40]
// ] )); // => 100000030




// console.log(sumIntervals([])); // 0
// console.log(sumIntervals([[1,5]])); // 4
// console.log(sumIntervals([[1,5]])); // 4
// console.log(sumIntervals([[1,5],[6,10]]));  // 8
// console.log(sumIntervals([[1,5],[1,5]])); // 4
// console.log(sumIntervals([[1,4],[7, 10],[3, 5]]));  // 7


// function testFunc(intervals) {
//   if (!Array.isArray(intervals)) {
//     return 'Function argument must be an array'
//   }

//   intervals.push([5, 6])
//   return intervals;
// }

// testFunc({a: 3});
// testFunc([[1, 2], [3, 4]]);

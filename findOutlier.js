// Find The Parity Outlier

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)


function findOutlier(integers){
  let coef = 0;

  for (let i = 0; i < 3; i++) {
    if (integers[i] % 2) {
      coef--;
    } else {
      coef++;
    }
  }

  return integers[integers.findIndex(num => (Boolean(num % 2) == (coef > 0)))];
}


console.log(findOutlier([-154033198,-77219040,-159729802,-72005558,-197503698,103768234,170169030,-128471803,141674858,-140309582,107193576,-199680860,21362462,-119190228,-183034388,83487298,-52660758,156489186,-12000668,-64114008,-100528714,94027608,-68089398,161795000,63607174,-143965034,11466458,198103112,-195759036,-89699378,-20734968,-165578980,172219684,-34625742]), -128471803);
console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([1, 2, 3]), 2);
console.log(findOutlier([2,6,8,10,3]), 3);
console.log(findOutlier([0,0,3,0,0]), 3);
console.log(findOutlier([1,1,0,1,1]), 0);


//! Best Practice
// function findOutlier(integers){
//   return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
// }
// function even(num){
//   return (num % 2 == 0);
// }
// function odd(num){
//   return !even(num)
// }

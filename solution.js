// Frog jumping

// Help the frog to find a way to freedom
// You have an array of integers and have a frog at the first position

// [Frog, int, int, int, ..., int]

// The integer itself may tell you the length and the direction of the jump

// For instance:
//  2 = jump two indices to the right
// -3 = jump three indices to the left
//  0 = stay at the same position
// Your objective is to find how many jumps are needed to jump out of the array.

// Return -1 if Frog can't jump out of the array

// Example:
// array = [1, 2, 1, 5];
// jumps = 3  (1 -> 2 -> 5 -> <jump out>)

function solution(a) {
  let i = 0;
  let jumps = 0;

  while (i >= 0 && i < a.length) {
    i += a[i];
    jumps++

    if (jumps > a.length) return -1;
  }

  return jumps;
}


console.log(solution([1, 2, 2, -1]), 4); // a[0] + a[1] + a[3] + a[2] + !a[4]
console.log(solution([1, 2, 1, 5]), 3); // a[0] + a[1] + a[3] + !a[8]
console.log(solution([1, 1, 1, 1]), 4);
console.log(solution([1, -1]), -1);
console.log(solution([-3]), 1);

//! Best Practice
//! почти тоже самое но лучше заменить условие цикла while на (typeof a[i] !== 'undefined')

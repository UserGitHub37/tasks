// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = function (text) {
  const setFromText = new Set(text);
  const arrFromText = text.split('');

  const res = Array.from(setFromText).map(char => {
    const amount = arrFromText.filter(item => item === char).length;
    return [char, amount];
  });

  return res;
};



console.log(orderedCount("abracadabra"));
console.log([['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]);

console.log(orderedCount("Code Wars"));
console.log([['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]);

console.log(orderedCount("233312"));
console.log([['2', 2], ['3', 3], ['1', 1 ]]);


// ! Best Practice!

// var orderedCount = function (text) {
//   return Array.from(new Set(text)).map(c => [c, text.match(new RegExp(c, 'g')).length]);
// }

// const orderedCount = s =>
//   Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));


// const orderedCount = str => [...new Set([...str])].map(char => [char, str.split(char).length - 1])

//! Best Practice

function stringTransformer(str) {

  const res = str.split('').map(s => /[a-z]/.test(s) ? s.toUpperCase() : s.toLowerCase()).join('').split(' ').reverse().join(' ');

  return res;
}


// function stringTransformer(str) {
//   const upperLowerCase = {
//     A: 'a',
//     B: 'b',
//     C: 'c',
//     D: 'd',
//     E: 'e',
//     F: 'f',
//     G: 'g',
//     H: 'h',
//     I: 'i',
//     J: 'j',
//     K: 'k',
//     L: 'l',
//     M: 'm',
//     N: 'n',
//     O: 'o',
//     P: 'p',
//     Q: 'q',
//     R: 'r',
//     S: 's',
//     T: 't',
//     U: 'u',
//     V: 'v',
//     W: 'w',
//     X: 'x',
//     Y: 'y',
//     Z: 'z',
//   }

//   const lowerUpperCase = {
//     a: 'A',
//     b: 'B',
//     c: 'C',
//     d: 'D',
//     e: 'E',
//     f: 'F',
//     g: 'G',
//     h: 'H',
//     i: 'I',
//     j: 'J',
//     k: 'K',
//     l: 'L',
//     m: 'M',
//     n: 'N',
//     o: 'O',
//     p: 'P',
//     q: 'Q',
//     r: 'R',
//     s: 'S',
//     t: 'T',
//     u: 'U',
//     v: 'V',
//     w: 'W',
//     x: 'X',
//     y: 'Y',
//     z: 'Z'
//   }

//   const res = str.split('').reduce((acc, cur) => {
//     if (cur === ' ') {
//       return acc + cur;
//     }

//     if (upperLowerCase[cur]) {
//       return acc + upperLowerCase[cur];
//     }

//     if (lowerUpperCase[cur]) {
//       return acc + lowerUpperCase[cur];
//     }

//   }, '').split(' ').reverse().join(' ');

//   // Переворачиваем объект
//   // const turnedObj = {};
//   // for (let key in obj) {
//   //   turnedObj[obj[key]] = key;
//   // }

//   // console.log(turnedObj);

//   return res;
// }

console.log(stringTransformer('Example Input'));

// Scramblies

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  const arr = str1.split('');
  const obj = {};

  for (let i = 0; i < str2.length; i++) {
    if (obj[str2[i]] === undefined) {
      obj[str2[i]] = 1;
    } else {
      obj[str2[i]] += 1;
    }
  }

  for (let letter in obj) {
    let index = 0
    for (let j = 0; j < obj[letter]; j++) {
      index = arr.indexOf(letter, index);
      if (index === -1) return false;
      index++;
    }
  }

  return true;
}

console.log(scramble('rkqodlw',           'world'      ), true );
console.log(scramble('cedewaraaossoqqyt', 'codewars'   ), true );
console.log(scramble('katas',             'steak'      ), false);
console.log(scramble('scriptjavx',        'javascript' ), false);
console.log(scramble('scriptingjava',     'javascript' ), true );
console.log(scramble('scriptsjava',       'javascripts'), true );
console.log(scramble('javscripts',        'javascript' ), false);
console.log(scramble('jscripts',          'javascript' ), false);
console.log(scramble('aabbcamaomsccdd',   'commas'     ), true );
console.log(scramble('commas',            'commas'     ), true );
console.log(scramble('sammoc',            'commas'     ), true )

let s1 = "abcdefghijklmnopqrstuvwxyz".repeat(10_000);
let s2 = "zyxcba".repeat(9_000);
console.log(scramble(s1, s2), true);


//! Best Practice

// function scramble(str1, str2) {
//   let occurences = str1.split("").reduce((obj, cur) => {
//     obj[cur] ? obj[cur]++ : obj[cur] = 1;
//     return obj;
//   }, {});

//   return str2.split("").every((character) => --occurences[character] >= 0);
// }

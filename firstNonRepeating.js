// First non-repeating character

// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
  const lowS = s.toLowerCase();
  const set = new Set(lowS);
  const arr = lowS.split('');

  for (let letter of set) {
    if (arr.indexOf(letter) === arr.lastIndexOf(letter)) {
      const regex = new RegExp(letter, 'i');
      return s.match(regex)[0];
    }
  }

  return '';
}


console.log(firstNonRepeatingLetter('a'), 'a');
console.log(firstNonRepeatingLetter('stress'), 't');
console.log(firstNonRepeatingLetter('moonmen'), 'e');
console.log(firstNonRepeatingLetter('sTreSS'), 'T');
console.log(firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!"), ',');


//! Best Practice

// function firstNonRepeatingLetter(s) {
//   for(var i in s) {
//     if(s.match(new RegExp(s[i],"gi")).length === 1) {
//       return s[i];
//     }
//   }
//   return '';
// }


// function firstNonRepeatingLetter(s) {
//   var t=s.toLowerCase();
//   for (var x=0;x<t.length;x++)
//     if(t.indexOf(t[x]) === t.lastIndexOf(t[x]))
//       return s[x];
//   return "";
// }

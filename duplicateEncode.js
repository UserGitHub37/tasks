// Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("


function duplicateEncode(word){
  word = word.toLowerCase();
  const dict = {};
  let newWord = '';

  for (let i = 0; i < word.length; i++) {
    if (dict[word[i]] === undefined) {
      dict[word[i]] = '(';
    } else {
      dict[word[i]] = ')';
    }
  }

  for (let i = 0; i < word.length; i++) {
    newWord += dict[word[i]]
  }

  return newWord;
}


console.log(duplicateEncode("din"),"(((");
console.log(duplicateEncode("recede"),"()()()");
console.log(duplicateEncode("Success"),")())())","should ignore case");
console.log(duplicateEncode("(( @"),"))((");


//! Best Practice

// function duplicateEncode(word) {
//   word = word.toLowerCase();
//   return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
// }

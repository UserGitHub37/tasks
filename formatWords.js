// Format words into a sentence

// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

// Note:

// Empty string values should be ignored.
// Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
// Example: (Input --> output)

// ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
// ['ninja', '', 'ronin'] --> "ninja and ronin"
// [] -->""

function formatWords(words){
  if (!words) return '';

  let filteredWords = words.filter(item => {
    return item !== '';
  })

  switch (filteredWords.length) {
    case 0: return '';
    case 1: return filteredWords[0];
  }

  return filteredWords.slice(0, filteredWords.length - 1).join(', ') + ' and ' + filteredWords[filteredWords.length - 1];
}

// ! Best Practice

// function formatWords(words){
//   if (!words) return "";
//   return words.filter(function(a) { return a !== ''}).join(', ').replace(/(, )+(\S+)$/, ' and $2');
// }


console.log(formatWords(['one', 'two', 'three', 'four']), 'one, two, three and four', "formatWords(['one', 'two', 'three', 'four'] should return 'one, two, three and four'");
console.log(formatWords(['one']), 'one', "formatWords(['one']) should return 'one'");
console.log(formatWords(['one', '', 'three']), 'one and three', "formatWords(['one', '', 'three']) should return 'one and three'");
console.log(formatWords(['', '', 'three']), 'three', "formatWords(['', '', 'three']) should return 'three'");
console.log(formatWords(['one', 'two', '']), 'one and two', "formatWords(['one', 'two', '']) should return 'one and two'");
console.log(formatWords([]),'', 'formatWords([]) should return ""');
console.log(formatWords(null), '', 'formatWords(null) should return ""');
console.log(formatWords(['']), '', 'formatWords([""]) should return ""');

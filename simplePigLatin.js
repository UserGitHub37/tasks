// Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  return str.split(' ').map(word => {
    if (word === '!' || word === '?') return word;
    return word.slice(1) + word.at(0) + 'ay';
  }).join(' ');
}


console.log(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay');
console.log(pigIt('This is my string'),'hisTay siay ymay tringsay');
console.log(pigIt('O tempora o mores !'),'Oay emporatay oay oresmay !');

//! Best Practice
// function pigIt(str){
//   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }

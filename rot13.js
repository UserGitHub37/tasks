// Rot13

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {

  return message.replace(/(\w)/g, (char) => {
    const charCode = char.codePointAt(0);

    if (charCode >= 65 && charCode <= 90) {
      return String.fromCodePoint((charCode - 65 + 13) % 26 + 65);
    }

    if (charCode >= 97 && charCode <= 122) {
      return String.fromCodePoint((charCode - 97 + 13) % 26 + 97);
    }

    return char;
  });

}



console.log(rot13("test"), "grfg");
console.log(rot13("Test"), "Grfg");


//! Best Practice

// function rot13(message) {
//   var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
//   return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
// }

// function rot13(message) {
//   var abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
//   return message.replace(/[a-z]/gi, c => abc[abc.indexOf(c) + 13]);
// }

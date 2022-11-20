// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.


function correct(string) {
  return string.split('').map(char => {
    switch (char) {
      case '5': return 'S';
      case '0': return 'O';
      case '1': return 'I';
      default: return char;
    }
  }).join('');
}

console.log(correct("L0ND0N"),);
console.log("LONDON");
console.log('---------------');
console.log(correct("DUBL1N"),);
console.log("DUBLIN");
console.log('---------------');
console.log(correct("51NGAP0RE"),);
console.log("SINGAPORE");
console.log('---------------');
console.log(correct("BUDAPE5T"),);
console.log("BUDAPEST");
console.log('---------------');
console.log(correct("PAR15"),);
console.log("PARIS");

// ! Best Practice
// const corrections = {
//   '5': 'S',
//   '0': 'O',
//   '1': 'I',
// };

// const correct = string => (
//   string.replace(/[501]/g, character => corrections[character])
// );

// function correct(string) {
//   return string.replace(/0/g, "O")
//                .replace(/5/g, "S")
//                .replace(/1/g, "I");
// }

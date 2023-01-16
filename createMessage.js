// "Stringing"+"Me"+"Along"

// Implement a function that receives a string, and lets you extend it with repeated calls. When no argument is passed you should return a string consisting of space-separated words you've received earlier.

// Note: There will always be at least 1 string; all inputs will be non-empty.

// For example:

// createMessage("Hello")("World!")("how")("are")("you?")() === "Hello World! how are you?"
// Tip (helpful, but not necessary): Try using classes!

// Good luck and happy coding!


function createMessage(string) {
  let message = string;

  function sumString (str) {
    if (str === undefined) {
      return message;
    } else {
      message += (" " + str);
      return sumString;
    }
  }

  return sumString;
}


console.log(createMessage("Hello")("World!")("how")("are")("you?")(), "Hello World! how are you?");

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(createMessage("Hello")("World!")("how")("are")("you?")(), "Hello World! how are you?");
//   });
// });


//! Best Practice

// function createMessage(str) {
//   return function(next){
//     if (next === undefined) {return str;}
//     return createMessage(str + " "+ next);
//   }
// }


// const createMessage = (...arr) =>
//   str => str ? createMessage(...arr, str) : arr.join(` `);


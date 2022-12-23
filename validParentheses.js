// Valid Parentheses

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens) {
  const arr = [];

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      arr.push('(');
    } else if (parens[i] === ')') {
      if (arr.pop() !== '(') return false;
    }
  }

  return arr.length === 0 ? true : false;
}



console.log(validParentheses( "(" ), false);
console.log(validParentheses( ")" ), false);
console.log(validParentheses( "" ), true);
console.log(validParentheses( "()" ), true);
console.log(validParentheses( "())" ), false);


//!Best Practice

// function validParentheses(parens){
//   var n = 0;
//   for (var i = 0; i < parens.length; i++) {
//     if (parens[i] == '(') n++;
//     if (parens[i] == ')') n--;
//     if (n < 0) return false;
//   }

//   return n == 0;
// }


// Strip Comments

// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function solution(input, markers) {
  const changedMarkers = markers.map(marker => marker === '$' ? '\\$' : marker);

  const regex = new RegExp(`\s*(${changedMarkers.join('|')})[^${markers.join('')}]+?(?=\n|$)`, 'g');

  return input.replace(regex, '').split('\n').map(str => str.trim()).join('\n');
}

console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]), '***', "apples, plums\npears\noranges");
console.log('------');
console.log(solution("Q @b\nu\ne -e f g", ["@", "-"]), '***', "Q\nu\ne");
console.log('------');
console.log(solution("a #b\nc\nd $e f g", ["#", "$"]), '***', "a\nc\nd");


//! Best Practice
// function solution(input, markers){
//   return input.replace(new RegExp(`\\s*[${markers.join('|')}].+`,'g'),'');
// }


//! Первый тест проходит с таким выражением
// function solution(input, markers) {
//   return input.replace(/\s*(%|!)[^%!]+?(?=\n|$)/g, '');
// }


//! Первичное решение
// function solution(input, markers) {

//   let markers2 = markers[0];

//   for (let i = 1; i < markers.length; i++) {
//     if (markers[i] === '$') {
//       markers2 += '|\\$';
//       console.log('dollar', markers2);
//     } else {
//       markers2 += '|' + markers[i];
//     }

//   }

//   console.log(markers, markers2);

//   const regex = new RegExp(`\s*(${markers2})[^${markers.join('')}]+?(?=\n|$)`, 'g');

//   return input.replace(regex, '').split('\n').map(str => str.trim()).join('\n');
// }

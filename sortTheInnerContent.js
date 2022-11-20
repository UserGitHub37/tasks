// You have to sort the inner content of every word of a string in descending order.

// The inner content is the content of a word without first and the last char.

// Some examples:

// "sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
// "wait for me"        -->  "wiat for me"
// "this kata is easy"  -->  "tihs ktaa is esay"
// Words are made up of lowercase letters.

// The string will never be null and will never be empty. In C/C++ the string is always nul-terminated.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!


function sortTheInnerContent(words) {
  let arr = words.split(' ');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < 4) continue;

    const sortedMiddle = arr[i].slice(1, -1).split('').sort().reverse().join('');

    arr[i] = arr[i][0] + sortedMiddle + arr[i][arr[i].length - 1];
  }

  return arr.join(' ');
}

console.log(sortTheInnerContent("sort the inner content in descending order"));
console.log("srot the inner ctonnet in dsnnieedcg oredr");
console.log('--------------');
console.log(sortTheInnerContent("wait for me"));
console.log("wiat for me");
console.log('--------------');
console.log(sortTheInnerContent("this kata is easy"));
console.log("tihs ktaa is esay");


//! Best Practice

// function sortTheInnerContent(words){
//   return words.replace(/\B\w+(?=\w)/g, function(match){
//     return match.split('').sort().reverse().join('');
//   });
// }

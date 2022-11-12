// Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second. The check should be case sensitive.

// For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.

// If the second string isn't a valid rotation of the first string, the method returns -1.


function shiftedDiff(first,second){
  if (first.length !== second.length) return -1;

  for (let i = 0; i < first.length; i++) {
    second += second[i];
  }

  return second.indexOf(first);
}

//! Best Practice
function shiftedDiff(first, second) {
  return (first.length == second.length) ? (second+second).indexOf(first) : -1;
}

console.log(shiftedDiff("coffee", "eecoff"), 2);  //  => 2
console.log(shiftedDiff("eecoff", "coffee"), 4);  //  => 4
console.log(shiftedDiff("moose", "Moose"), -1);  //  => -1
console.log(shiftedDiff("isn't", "'tisn"), 2);  //  => 2
console.log(shiftedDiff("Esham", "Esham"), 0);  //  => 0
console.log(shiftedDiff("dog", "god"), -1);  //  => -1


console.log(shiftedDiff("123456789!@#$%^&*( )qwerty", "9!@#$%^&*( )qwerty12345678"), 18);  //  =>  18

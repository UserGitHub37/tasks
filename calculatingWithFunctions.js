// Calculating with Functions

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));


function zero(action) {
  const num = 0;
  return parse(num, action);
}
function one(action) {
  const num = 1;
  return parse(num, action);
}
function two(action) {
  const num = 2;
  return parse(num, action);
}
function three(action) {
  const num = 3;
  return parse(num, action);
}
function four(action) {
  const num = 4;
  return parse(num, action);
}
function five(action) {
  const num = 5;
  return parse(num, action);
}
function six(action) {
  const num = 6;
  return parse(num, action);
}
function seven(action) {
  const num = 7;
  return parse(num, action);
}
function eight(action) {
  const num = 8;
  return parse(num, action);
}
function nine(action) {
  const num = 9;
  return parse(num, action);
}

function plus(num) {return '+' + num}
function minus(num) {return '-' + num}
function times(num) {return '*' + num}
function dividedBy(num) {return '/' + num}

function parse (num, action) {
  if (action === undefined) return num;
  switch (action[0]) {
    case '+': return num + Number(action[1]);
    case '-': return num - Number(action[1]);
    case '*': return num * Number(action[1]);
    case '/': return Math.floor(num / Number(action[1]));
  }
}


console.log(seven(times    (five ())), 35);
console.log(four (plus     (nine ())), 13);
console.log(eight(minus    (three())),  5);
console.log(six  (dividedBy(two  ())),  3);
console.log(one  (dividedBy(two  ())),  0);

//! Best Practice
// function zero(fn) {return fn ? fn(0) : 0}
// function one(fn) {return fn ? fn(1) : 1}
// function two(fn) {return fn ? fn(2) : 2}
// function three(fn) {return fn ? fn(3) : 3}
// function four(fn) {return fn ? fn(4) : 4}
// function five(fn) {return fn ? fn(5) : 5}
// function six(fn) {return fn ? fn(6) : 6}
// function seven(fn) {return fn ? fn(7) : 7}
// function eight(fn) {return fn ? fn(8) : 8}
// function nine(fn) {return fn ? fn(9) : 9}

// function plus(n) {return function(v) {return v + n}}
// function minus(n) {return function(v) {return v - n}}
// function times(n) {return function(v) {return v * n}}
// function dividedBy(n) {return function(v) {return v / n}}

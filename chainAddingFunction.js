
// A Chain adding function

// We want to create a function that will add numbers together when called in succession.

// add(1)(2); // == 3
// We also want to be able to continue to add numbers to our chain.

// add(1)(2)(3); // == 6
// add(1)(2)(3)(4); //  == 10
// add(1)(2)(3)(4)(5); // == 15
// and so on.

// A single call should be equal to the number passed in.

// add(1); // == 1
// We should be able to store the returned values and reuse them.

// var addTwo = add(2);
// addTwo; // == 2
// addTwo + 5; // == 7
// addTwo(3); // == 5
// addTwo(3)(5); // == 10
// We can assume any number being passed in will be valid whole number.


function add(n){
  //! Let the currying begin!

  const sum = function (z) {
    return add(n + z);
  }

  sum.valueOf = function() {
    return n;
  }

  return sum;
}


console.log(add(2) == 2);
console.log(add(1)(2) == 3);
console.log(add(1)(2)(3) == 6);
console.log(add(1)(2)(3)(4) == 10);
console.log(add(1)(2)(3)(4)(5) == 15);


// const equal = require('chai').assert.equal;

// describe("Sample Tests", () => {
// 	it("A single call should return the number passed in", () => {
// 		equal(add(1), 1);
// 	});
// 	it("several calls", () => {
// 		equal(add(1)(2), 3);
// 		equal(add(1)(2)(3), 6);
// 		equal(add(1)(2)(3)(4), 10);
// 		equal(add(1)(2)(3)(4)(5), 15);
// 	});
// 	it("should be able to be mixed with numbers", () => {
// 		equal(add(1)(2) + 3, 6);
// 	});
// 	it("Must be able to store values", () => {
// 		const a = add(1)(2);
// 		const b = add(3)(4);
// 		equal(a, 3);
// 		equal(b, 7);
// 	});
// 	it("Must be able to store curried functions", () => {
// 		const a = add(1)(2);
// 		equal(a, 3);
// 		equal(a(3), 6);
// 		equal(a, 3);
// 	});
// 	it("Must be callable with a curried function", () => {
// 		const a = add(1)(2);
// 		const b = add(3)(4);
// 		equal(a(b), 10);
// 		equal(b(a), 10);
// 		equal(a, 3);
// 		equal(b, 7);
// 	});
// });

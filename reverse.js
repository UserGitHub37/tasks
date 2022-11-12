// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

const reverse = function(array) {
  const res = [];

  for (let i = array.length - 1; i >= 0; i--) {
    res.push(array[i]);
  }

  return res;
}

console.log(reverse([1,2,3]), [3,2,1]);
console.log(reverse([1,null,14,"two"]), ["two",14,null,1]);

//! Best Practice

reverse = function(array) {
  return array.reduceRight(function(a, v){ return a.push(v), a }, []);
}

function reverse(array) {
  return array.reduce(function(a, b) {
    return [b].concat(a)
  }, []);
}

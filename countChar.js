function count (string) {
  if (string.length === 0) {
    return {};
  }

  return string.split('').reduce((acc, char) => {
    if (acc[char]) {
      return {...acc, [char]: acc[char] + 1};
    }

    return {...acc, [char]: 1};
  }, {})
}

console.log(count("aba"));  // { a: 2, b: 1 }

//! Best Practice
function count (string) {
  var count = {};
  string.split('').forEach(function(s) {
    count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}

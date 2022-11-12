function findSmallestInt(args) {
  if (args.length === 0) {
    return 0;
  }

  let minNumber = args[0];

  for (let num of args) {
    if (num < minNumber) {
      minNumber = num;
    }
  }

  return minNumber;
}


console.log(findSmallestInt([3,-4,6,-7,2,1,335,-66,]));

//! Другие решения

function findSmallestInt(args) {
  return Math.min(...args);
}

function findSmallestInt(args) {
  return args.reduce(function(prev, curr) {
    return prev < curr ? prev : curr;
  });
}

function findSmallestInt(args) {
  args.sort(function(a, b) {
  return a - b; } )
  return args[0];
}

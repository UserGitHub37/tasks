function sumEvenNumbers(input) {
  return input.reduce((acc, cur) => {
    console.log(acc, cur);
    return cur % 2 === 0 ? acc + cur : acc;
  }, 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

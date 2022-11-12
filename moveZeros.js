function moveZeros(arr) {

  const zeros = [];

  const filteredArr = arr.filter(item => {
    if (item === 0) {
      zeros.push(0);
    }

    return item !== 0;
  });

  const res = filteredArr.concat(...zeros);

  return res;
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));

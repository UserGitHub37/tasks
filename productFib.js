function productFib(prod){
  if (prod <= 0) {
    return ['data', 'is', false];
  }

  let prev = 0;
  let curr = 1;
  const res = [];

  while (true) {
    let product = prev * curr;

    res[0] = prev;
    res[1] = curr;


    if (product > prod) {
      res.push(false);
      return res;
    }

    if (product === prod) {
      res.push(true);
      return res;
    }

    prev = res[1];
    curr = res[0] + res[1];
  }

}


console.log(productFib(5895));

//! Best Practice

function productFib(prod){
  let [a, b] = [0, 1];
  while(a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}

function productFib(prod){
  var n = 0;
  var nPlus = 1;
  while(n*nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n*nPlus===prod];
}

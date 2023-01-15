// Primes in numbers

// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

function primeFactors(n){
  console.log(n);
  const res = [];
  let i = 2;
  let curN = n;
  let degree = 0
  const halfN = Math.ceil(n / 2);

  while (i <= halfN) {
    if (curN % i === 0) {
      degree++;
      curN = curN / i;
      continue;
    }

    if (degree) {
      res.push(degree > 1 ? `(${i}**${degree})` : `(${i})`);
    }

    i++;
    degree = 0;
  }

  return res.length ? res.join('') : `(${n})`;
}

console.log(primeFactors(7775460),"(2**2)(3**3)(5)(7)(11**2)(17)");
console.log(primeFactors(86240),"(2**5)(5)(7**2)(11)");
console.log(primeFactors(6134),"(2)(3067)");
// console.log(primeFactors(),"");
// console.log(primeFactors(),"");
// console.log(primeFactors(),"");

//! Best Practice
// Вы не должны проверять все факторы от 2 до i.
// Нет смысла проверять все четные числа после 2. Гораздо лучше проверить 2, начать с 3 и увеличивать += 2
// Нет смысла идти до n. Самый большой возможный делитель, который вам нужно проверить — √n.

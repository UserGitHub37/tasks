function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {

    if (num % i === 0) {
      return false;
    }

  }

  return true;
}

console.log(isPrime(0)); //false
console.log(isPrime(1)); //false
console.log(isPrime(2)); //true
console.log(isPrime(73)); //true
console.log(isPrime(75)); //false
console.log(isPrime(-1)); //false

console.log(isPrime(4)); //false

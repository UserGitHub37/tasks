// Count IP Addresses

// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50
// * With input "10.0.0.0", "10.0.1.0"   => return  256
// * With input "20.0.0.10", "20.0.1.0"  => return  246


function ipsBetween(start, end) {

  function convertIpToNumber (ipString) {
    let amount = 0;

    const binaryIp = ipString.split('.').map(item => {
      let binaryNum = Number(item).toString(2);

      if (binaryNum.length < 8) {
        return '0'.repeat(8 - binaryNum.length) + binaryNum
      }

      return binaryNum;
    }).join('');

    for (let i = 31, degree = 0; i >= 0; i--, degree++) {
      if (binaryIp[i] === '0') continue;
      amount += Math.pow(2, degree);
    }

    return amount;
  }

  return convertIpToNumber(end) - convertIpToNumber(start);
}




console.log(ipsBetween("0.0.0.1", "0.0.0.3"), 2);
console.log(ipsBetween("150.0.0.0", "150.0.0.0"), 0);
console.log(ipsBetween("150.0.0.0", "150.0.0.1"), 1);
console.log(ipsBetween("10.0.0.0", "10.0.0.50"), 50);
console.log(ipsBetween("20.0.0.10", "20.0.1.0"), 246);
console.log(ipsBetween("10.11.12.13", "10.11.13.0"), 243);
console.log(ipsBetween("160.0.0.0", "160.0.1.0"), 256);
console.log(ipsBetween("170.0.0.0", "170.1.0.0"), 65536);
console.log(ipsBetween("50.0.0.0", "50.1.1.1"), 65793);
console.log(ipsBetween("180.0.0.0", "181.0.0.0"), 16777216);
console.log(ipsBetween("1.2.3.4", "5.6.7.8"), 67372036);
console.log(ipsBetween("0.0.0.0", "255.255.255.255"), 2 ** 32 - 1);

//! Мое первое решение
// function ipsBetween(start, end) {
//   // console.log(convertIpToNumber(end), convertIpToNumber(start));
//   function convertIpToNumber (ipString) {
//     const ipArray = ipString.split('.');
//     let amount = 0;

//     for (let i = 3, k = 0; i >= 0; i--, k++) {
//       // console.log('i:', i);
//       let octet = Number(ipArray[k]);
//       for (let j = 7; j >= 0; j--) {
//         // console.log('j:', j);
//         let bit = Math.pow(2, j);
//         if (octet - bit >= 0) {
//           // console.log('octet:', octet, 'bit:', bit);
//           octet -= bit;
//           amount += Math.pow(2, j + 8 * i);
//         }
//       }
//     }

//     return amount;
//   }

//   return convertIpToNumber(end) - convertIpToNumber(start);
// }


//! Best Practice 1

// function ipsBetween(start, end){
//   const num = ip => ip.split('.')
//                       .map(x => parseInt(x))
//                       .reduce((acc, e) => acc * 256 + e);

//   return num(end) - num(start);
// }

//! Best Practice 2

// const ipsBetween = (start, end) => convertToNum(end) - convertToNum(start)
// const convertToNum = ip => ip.split(".")
//   .map(Number).reduce((a,b) => a*256+b);

function encrypt(text, n) {
  const oddIndexed = [];
  const evenIndexed = [];

  if (!text?.length || n < 1) {
    return text;
  }

  text.split('').forEach((val, i) => {
    if (i % 2 === 0) {
      evenIndexed.push(val);
    } else {
      oddIndexed.push(val);
    }
  });

  const res = oddIndexed.join('') + evenIndexed.join('');

  return n === 1 ? res : encrypt(res, --n);
}

console.log(encrypt("012345", 1)); // "135024"
console.log(encrypt("012345", 2)); // "135024"  ->  "304152"
console.log(encrypt("012345", 3)); // "135024"  ->  "304152"  ->  "012345"


console.log(encrypt("01234", 1)); // "13024"
console.log(encrypt("01234", 2)); // "13024" "32104"
console.log(encrypt("01234", 3)); // "13024" "32104" "20314"



function decrypt(encryptedText, n) {
  if (!encryptedText?.length || n < 1) {
    return encryptedText;
  }

  const oddIndexed = encryptedText.split('').slice(-Math.ceil(encryptedText.length / 2));
  const evenIndexed = encryptedText.split('').slice(0, Math.floor(encryptedText.length / 2));
  const res = [];

  for (let i = 0; i < oddIndexed.length; i++) {
    res.push(oddIndexed[i]);
    res.push(evenIndexed[i]);
  }

  if (encryptedText.length % 2 !== 0) {
    res.pop();
  }

  return n === 1 ? res.join('') : decrypt(res.join(''), --n);
}

console.log(decrypt("135024", 1)); // "012345"
console.log(decrypt("304152", 2)); // "012345"
console.log(decrypt("012345", 3)); // "012345"


console.log(decrypt("13024", 1)); // "01234"
console.log(decrypt("32104", 2)); // "01234"
console.log(decrypt("20314", 3)); // "01234"

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence

  let res = dna.split('').reduce((acc, cur) => {

    // console.log(acc, cur);

    if (cur === 'T') {
      acc.push('U');
    } else {
      acc.push(cur);
    }

    return acc;
  }, []).join('');

  return res;
}


console.log(DNAtoRNA('GCAT')); // -> 'GCAU'



//! Best practice

function DNAtoRNA(dna){
  return dna.replace(/T/g, 'U');
}

function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}

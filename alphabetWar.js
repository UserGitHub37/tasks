// Alphabet war - airstrike - letters massacre

// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began. The letters called airstrike to help them in war - dashes and dots are spreaded everywhere on the battlefield.

// Task
// Write a function that accepts fight string consists of only small letters and * which means a bomb drop place. Return who wins the fight after bombs are exploded. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.
// The * bombs kill the adjacent letters ( i.e. aa*aa => a___a, **aa** => ______ );

// Example
// alphabetWar("s*zz");           //=> Right side wins!
// alphabetWar("*zd*qm*wp*bs*"); //=> Let's fight again!
// alphabetWar("zzzz*s*");       //=> Right side wins!
// alphabetWar("www*www****z");  //=> Left side wins!

function alphabetWar(fight) {
  const arr = [];
  let survivors, powerLeft, powerRight;
  const powerLeftLetters = {w: 4, p: 3, b: 2, s: 1};
  const powerRightLetters = {m: 4, q: 3, d: 2, z: 1};

  for (let i = 0; i < fight.length; i++) {
    if (fight[i] !== '*' && fight[i - 1] === '*' || fight[i + 1] === '*') {
      arr.push('-');
    } else {
      arr.push(fight[i]);
    }
  }

  survivors = arr.join('');

  powerLeft = survivors.match(/[wpbs]/g)?.reduce((sum, item) => {
    return sum += powerLeftLetters[item]
  }, 0) ?? 0;

  powerRight = survivors.match(/[mqdz]/g)?.reduce((sum, item) => {
    return sum += powerRightLetters[item]
  }, 0) ?? 0;

  if (powerLeft > powerRight) {
    return "Left side wins!";
  } else if (powerLeft < powerRight) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }

}

// w, p, b, s => Left [wpbs]
// m, q, d, z => Right [mqdz]

console.log(alphabetWar("o*") , "Let's fight again!" );
console.log(alphabetWar("bbpwb") , "Left side wins!" );
console.log(alphabetWar("heam") , "Right side wins!" );
console.log(alphabetWar("*bdmr*hbmpe*o*d*") , "Right side wins!" );
console.log(alphabetWar("jpd*zrh*fpxh") , "Left side wins!" );
console.log(alphabetWar("za") , "Right side wins!" );
console.log(alphabetWar("*lsddadzjqz*pqd*") , "Right side wins!" );
console.log(alphabetWar("g*pw*p**") , "Let's fight again!" );
console.log(alphabetWar("nzmcxfwq") , "Right side wins!" );
console.log(alphabetWar("*ywn*fmbzbm*b*d*p") , "Left side wins!" );
console.log(alphabetWar("p*uop*y**w*") , "Let's fight again!" );
console.log(alphabetWar("xvduha*vb**ntsaj") , "Right side wins!" );



console.log(alphabetWar("z") , "Right side wins!" );
console.log(alphabetWar("****") , "Let's fight again!" );
console.log(alphabetWar("z*dq*mw*pb*s"), "Let's fight again!" );
console.log(alphabetWar("zdqmwpbs"), "Let's fight again!" );
console.log(alphabetWar("zz*zzs"), "Right side wins!" );
console.log(alphabetWar("sz**z**zs"), "Left side wins!" );
console.log(alphabetWar("z*z*z*zs"), "Left side wins!" );
console.log(alphabetWar("*wwwwww*z*"), "Left side wins!" );

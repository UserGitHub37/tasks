// @ts-check

function arrayMadness(a, b) {
  const resA = a.reduce((acc, cur) => {
    return acc + cur ** 2;
  }, 0);

  const resB = b.reduce((acc, cur) => {
    return acc + cur ** 3;
  }, 0);

  return resA > resB;
}

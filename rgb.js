function rgb(r, g, b){
  function convert (color) {
    if (color <= 0) {
          return '00';
        }

    if (color > 255) {
          return 'FF';
        }

    if (color < 16) {
      return '0' + color.toString(16);
    }

    return color.toString(16);
  }

  return (convert(r) + convert(g) + convert(b)).toUpperCase();
}

console.log(rgb(0, 0, 0));
console.log(rgb(0, 0, -20));
console.log(rgb(300,255,255));
console.log(rgb(173,255,47));
console.log(rgb(15,146,112));

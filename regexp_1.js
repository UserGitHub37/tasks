//! Сайт с описанием валидации паролей
//! https://techearl.com/regular-expressions/regex-password-strength-validation

// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)

// assign your RegExp to REGEXP

const REGEXP = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])[a-zA-Z0-9]{6,}$/;


console.log('1', REGEXP.test('fjd3IR9'), 'true'); // true
console.log('2', REGEXP.test('ghdfj32'), 'false'); // false
console.log('3', REGEXP.test('DSJKHD23'), 'false'); // false
console.log('4', REGEXP.test('dsF43'), 'false'); // false
console.log('5', REGEXP.test('4fdg5Fj3'), 'true'); // true
console.log('6', REGEXP.test('DHSJdhjsU'), 'false'); // false
console.log('7', REGEXP.test('fjd3IR9.;'), 'false'); // false
console.log('8', REGEXP.test('fjd3  IR9'), 'false'); // false
console.log('9', REGEXP.test('djI38D55'), 'true'); // true
console.log('10', REGEXP.test('djI3_8D55'), 'false'); // false
console.log('11', REGEXP.test('djI38D55@@'), 'false'); // false

console.log('12', REGEXP.test('ABC123abc'), 'true');
console.log('13', REGEXP.test('i95eOToGg'), 'true');

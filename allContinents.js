// You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
// false otherwise.

var list1 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' }
];

var list2 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' }
];




function allContinents(list) {

  const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const set = new Set();

  for (let i = 0; i < list.length; i++) {
    set.add(list[i].continent);
  }

  for (let j = 0; j < continents.length; j++) {
    if (!set.has(continents[j])) {
      return false;
    }
  }

  return true;
}


console.log(allContinents(list1), true);
console.log(allContinents(list2), false);


//! Best Practice

function allContinents(list) {
  return ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].every(x => list.some(y => x==y.continent));
}

function allContinents(list) {
  const continents = list.map(x => x.continent)
  return continents.includes('Africa' && 'Americas' && 'Asia' && 'Europe' && 'Oceania')
}

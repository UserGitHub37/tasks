// London CityHacker

// You are given a sequence of a journey in London, UK. The sequence will contain bus numbers and TFL tube names as strings e.g.

// ['Northern', 'Central', 243, 1, 'Victoria']
// Journeys will always only contain a combination of tube names and bus numbers. Each tube journey costs £2.40 and each bus journey costs £1.50. If there are 2 or more adjacent bus journeys, the bus fare is capped for sets of two adjacent buses and calculated as one bus fare for each set.

// For example: 'Piccadilly', 56, 93, 243, 20, 14 -> "£6.90"

// Your task is to calculate the total cost of the journey and return the cost rounded to 2 decimal places in the format (where x is a number): £x.xx

function londonCityHacker(journey) {
  let counter = 0;

  const res = '£' + journey.reduce((acc, cur) => {
    if (typeof(cur) === 'number') {
      counter++;
      return counter % 2 ? acc + 1.5 : acc;
    } else if (typeof(cur) === 'string') {
      counter = 0;
      return acc + 2.4;
    } else {
      return acc;
    }

  }, 0).toFixed(2);

  return res;
}

console.log(londonCityHacker([12, 'Central', 'Circle', 21]), "£7.80");
console.log(londonCityHacker(['Piccadilly', 56]), "£3.90");
console.log(londonCityHacker(['Northern', 'Central', 'Circle']), "£7.20");
console.log(londonCityHacker(['Piccadilly', 56, 93, 243]), "£5.40");
console.log(londonCityHacker([386, 56, 1, 876]), "£3.00");
console.log(londonCityHacker([]), "£0.00");


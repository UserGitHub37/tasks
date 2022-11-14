// (*) Продвинутая задача на работу с объектами и массивами

// Задача:

// У вас есть список учеников, которые хотят поиграть в игру:

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

// Пример:

// sortStudentsByGroups(students)  =>

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]
// Если убрать одно студента из списка, то результат будет:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]
// А если добавить одного, то:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]
// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

// Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили. Просто распишите логику действий строка за строкой.

const students1 = ['Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
const students2 = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
const students3 = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Bob'];

function sortStudentsByGroups(arr) {
  const sortedarray = arr.sort();
  const res = [];
  let remainder = 'Оставшиеся студенты: '

  for (let i = 0; i < 9; i += 3) {
    const group = [];

    for (let j = i; j < i + 3; j++) {
      group.push(sortedarray[j]);
    }

    res.push(group);
  }

  if (arr.length === 9) {
    remainder += '-';
  } else {
    remainder += sortedarray.slice(9).join(', ');
  }

  res.push(remainder);

  return res;
}

console.log(sortStudentsByGroups(students1));
console.log(sortStudentsByGroups(students2));
console.log(sortStudentsByGroups(students3));

// Краткое введение

// Некоторые из вас, возможно, помнят, как проводили дни, играя в Street Fighter 2 в какой-нибудь аркаде в 90-х или эмулируя ее сегодня с помощью многочисленных эмуляторов для ретро-консолей.

// Можете ли вы решить эту ката? Suuure-ты-можешь!

// ОБНОВЛЕНИЕ: новая более сложная версия ката доступна здесь .

// Ката

// Вам придется имитировать поведение экрана выбора персонажа видеоигры, точнее сетку выбора. Такой экран выглядит так:

// Экран:

// экран

// Макет сетки выбора в тексте:

// | Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
// | Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
// Вход

// список игровых персонажей в сетке 2х6;
// исходное положение курсора выбора (вверху слева (0,0));
// список ходов курсора выбора (это up, down, left, right);
// Выход

// список персонажей, на которых наведен курсор выбора после всех ходов (по порядку и с повторением, все после хода, удачного или нет, см. тесты);
// Правила

// Курсор выбора имеет круглую форму по горизонтали , но не по вертикали !

// Как вы помните из игры, курсор выбора вращается горизонтально, а не вертикально; это означает, что если я нахожусь в крайнем левом положении и попытаюсь снова пойти налево, то попаду в крайний правый (примеры: от Рю к Веге, от Кена к М. Бизону) и наоборот, от крайнего правого к крайнему левому.

// Вместо этого, если я попытаюсь пойти дальше вверх от самого верхнего или дальше вниз от самого нижнего, я просто останусь там, где я нахожусь (примеры: вы не можете опускаться ниже нижнего ряда: Кен, Чун Ли, Зангиев, Дхалсим, Сагат и М.Бизон на изображении выше, вы не можете подняться выше верхнего ряда: Рю, Э.Хонда, Бланка, Гайл, Балрог и Вега на изображении выше).

// Тест

// Для этой легкой версии расположение сетки бойцов и начальная позиция всегда будут одинаковыми во всех тестах, изменится только список ходов.

// Примечание : изменение некоторых входных данных может вам не помочь.

// Примеры

// fighters = [
//   ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//   ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ]
// initial_position = (0,0)
// moves = ['up', 'left', 'right', 'left', 'left']
// то я должен получить:

// ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
// как символы, на которые я наводил курсор выбора во время своих ходов. Обратите внимание: Ryu является первым только потому, что он «не проходит» первым up См. тестовые примеры для получения дополнительных примеров.

// fighters = [
//   ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//   ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ]
// initial_position = (0,0)
// moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
// Результат:

// ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']


function streetFighterSelection(fighters, position, moves){
  const res = [];

  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case 'left':
        position[1] === 0 ? position[1] = fighters[0].length - 1 : position[1] -= 1;
        res.push(fighters[position[0]][position[1]]);
        break;
      case 'right':
        position[1] === fighters[0].length - 1 ? position[1] = 0 : position[1] += 1;
        res.push(fighters[position[0]][position[1]]);
        break;
      case 'up':
        if (position[0] === 1) position[0] = 0;
        res.push(fighters[position[0]][position[1]]);
        break;
      case 'down':
        if (position[0] === 0) position[0] = 1;
        res.push(fighters[position[0]][position[1]]);
        break;
      default:
        break;
    }

  }

  return res;
}




let moves = []
let fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];



moves = ['up', 'left', 'right', 'left', 'left'];
console.log(streetFighterSelection(fighters, [0,0], moves),['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']);

moves = [];
console.log(streetFighterSelection(fighters, [0,0], moves),[]);

moves = ["left","left","left","left","left","left","left","left"];
console.log(streetFighterSelection(fighters, [0,0], moves),['Vega', 'Balrog', 'Guile', 'Blanka', 'E.Honda', 'Ryu', 'Vega', 'Balrog']);


moves = ["right","right","right","right","right","right","right","right"];
console.log(streetFighterSelection(fighters, [0,0], moves),['E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega', 'Ryu', 'E.Honda', 'Blanka']);

moves = ["up","left","down","right","up","left","down","right"];
console.log(streetFighterSelection(fighters, [0,0], moves),['Ryu', 'Vega', 'M.Bison', 'Ken', 'Ryu', 'Vega', 'M.Bison', 'Ken']);

moves = ["down","down","down","down"];
console.log(streetFighterSelection(fighters, [0,0], moves), ['Ken', 'Ken', 'Ken', 'Ken']);

moves = ["up","up","up","up"];
console.log(streetFighterSelection(fighters, [0,0], moves), ['Ryu', 'Ryu', 'Ryu', 'Ryu']);

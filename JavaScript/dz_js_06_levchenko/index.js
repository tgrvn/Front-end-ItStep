/*
1. Создать массив «Список покупок». Каждый элемент массива
является объектом, который содержит название продукта, необ-
ходимое количество и куплен или нет. Написать несколько функ-
ций для работы с таким массивом. 
*/

const foodBasket = [
  {
    name: 'яблоко',
    isBuy: false,
    numberOf: 3,
  },
  {
    name: 'лимон',
    isBuy: false,
    numberOf: 4,
  },
  {
    name: 'мандарин',
    isBuy: false,
    numberOf: 5,
  },
];

/*
1.1 Вывод всего списка на экран таким образом, чтобы сначала
шли некупленные продукты, а потом – купленные.
 */

function notByedFirsth(anyArray) {
  let result = '';

  anyArray.sort((a, b) =>
    a['isBuy'] === true ? 1 : b['isBuy'] === true ? -1 : 0
  );

  anyArray.forEach((element) => {
    result += element['name'] + ': ';
    result += element['numberOf'] + '\n';
    if (element['isBuy'] === true) {
      result += 'Куплено';
    } else {
      result += 'Не куплено' + '\n\n';
    }
  });

  return result;
}

alert(
  `Корзина продуктов (сначала идут не купленные):\n\n${notByedFirsth(
    foodBasket
  )}`
);

/*
1.2 Добавление покупки в список. Учтите, что при добавлении
покупки с уже существующим в списке продуктом, необ-
ходимо увеличивать количество в существующей покупке,
а не добавлять новую. 
*/

const userProduct = prompt(
  'Что добавить в корзину продуктов?(например арбуз, хлеб, бананы)'
);

const numberOfProduct = prompt(
  'Введите количество продукта котороый нужно купить'
);

function addBuy(anyArray) {
  const newArray = [];
  anyArray.forEach((element) => {
    newArray.push(element);
  });

  let count = true;
  let result = '';

  const tmpObj = {
    name: userProduct,
    isBuy: false,
    numberOf: numberOfProduct,
  };

  newArray.forEach((element) => {
    if (element['name'] === userProduct) {
      element['numberOf'] = numberOfProduct;
      count = false;
    } else {
      count = true;
    }
  });

  if (count === true) {
    newArray.push(tmpObj);
  }

  newArray.forEach((element) => {
    result += element['name'] + ': ';
    result += element['numberOf'] + '\n\n';
  });

  return result;
}

alert(addBuy(foodBasket));

/*
1.3 Покупка продукта. Функция принимает название продукта
и отмечает его как купленный.
*/

const userProductBued = prompt(
  `Какую покупку из списка отметить купленой?\n\n ${notByedFirsth(foodBasket)}`
);

function buyCheck(anyArray) {
  const newArray = [];
  let result = '';

  anyArray.forEach((element) => {
    newArray.push(element);
  });

  newArray.forEach((element) => {
    if (element['name'] === userProductBued) {
      element['isBuy'] = true;
    }
  });

  newArray.forEach((element) => {
    result += element['name'] + '   ';
    result += element['numberOf'] + '\n';
    if (element['isBuy'] === true) {
      result += 'Куплено' + '\n\n';
    } else {
      result += 'Не куплено' + '\n\n';
    }
  });

  return result;
}

alert(`Обновленный список:\n${buyCheck(foodBasket)}`);

/*
2. Создать массив, описывающий чек в магазине. Каждый эле-
мент массива состоит из названия товара, количества и цены за
единицу товара. Написать следующие функции.
*/

const check = [
  {
    nameOfProduct: 'хлеб',
    numberOfProduct: 2,
    priceOfProduct: 16,
  },
  {
    nameOfProduct: 'колбаса',
    numberOfProduct: 1,
    priceOfProduct: 67,
  },
  {
    nameOfProduct: 'кошачий корм',
    numberOfProduct: 4,
    priceOfProduct: 13,
  },
  {
    nameOfProduct: 'сыр',
    numberOfProduct: 2,
    priceOfProduct: 49,
  },
  {
    nameOfProduct: 'стики',
    numberOfProduct: 4,
    priceOfProduct: 63,
  },
  {
    nameOfProduct: 'соус',
    numberOfProduct: 2,
    priceOfProduct: 17,
  },
  {
    nameOfProduct: 'кола',
    numberOfProduct: 2,
    priceOfProduct: 14,
  },
];

/*
2.1 Распечатка чека на экран.
*/

function showCheck(anyArray) {
  let result = '';

  anyArray.forEach((element) => {
    result += element['nameOfProduct'] + '  ';
    result += element['numberOfProduct'] + '\n';
    result += element['priceOfProduct'] + ' грн' + '\n\n';
  });

  return result;
}

alert(showCheck(check));

/*
2.2 Подсчет общей суммы покупки.
*/

function checkSum(anyArray) {
  let result = 0;

  anyArray.forEach((element) => {
    result += element['priceOfProduct'];
  });

  return result;
}

alert(`${showCheck(check)}\nCумма чека:   ${checkSum(check)} грн`);

/*
2.3 Получение самой дорогой покупки в чеке.
*/

function mostExpensive(anyArray) {
  let result = '';

  anyArray.sort((a, b) => a['priceOfProduct'] - b['priceOfProduct']);

  result +=
    anyArray[anyArray.length - 1].nameOfProduct +
    '\n' +
    anyArray[anyArray.length - 1].priceOfProduct +
    ' грн';

  return result;
}

alert(`Самая дорогая покупка в чеке:\n\n${mostExpensive(check)}`);

/*
2.4 Подсчет средней стоимости одного товара в чеке.
*/

function averagePrice(anyArray) {
  let result = 0;
  anyArray.forEach((element) => {
    result += element['priceOfProduct'];
  });

  result = Math.round((result / anyArray.length) * 100) / 100;

  return result;
}

alert(`Средння сумма чека: ${averagePrice(check)} грн`);

/*
Создать массив css-стилей (цвет, размер шрифта, выравнива-
ние, подчеркивание и т. д.). Каждый элемент массива – это объ-
ект, состоящий из двух свойств: название стиля и значение стиля.
Написать функцию, которая принимает массив стилей и
текст, и выводит этот текст с помощью document.write() в тегах
<p></p>, добавив в открывающий тег атрибут style со всеми сти-
лями, перечисленными в массиве.
*/

const styles = [
  {
    name: 'font-size',
    value: '50px',
  },
  {
    name: 'background-color',
    value: 'black',
  },
  {
    name: 'font-style',
    value: 'italic',
  },
  {
    name: 'color',
    value: 'white',
  },
  {
    name: 'text-align',
    value: 'center',
  },
  {
    name: 'padding',
    value: '5px',
  },
  {
    name: 'text-decoration',
    value: 'underline red'
  }
];

const str = 'Hello world && JS !!!';

function styleTxt(anyStyleArr, anyStr) {
  let style = '';
  let text = '';
  anyStyleArr.forEach((element) => {
    style += element.name + ': ';
    style += element.value + '; ';
  });

  text = document.write(`<p style = "${style}">${anyStr}</p>`);

  return text;
}

styleTxt(styles, str);

/*
4. Создать массив аудиторий академии. Объект-аудитория со-
стоит из названия, количества посадочных мест (от 10 до 20) и
названия факультета, для которого она предназначена.
*/

const lectureHalls = [
  {
    hallName: 'potions',
    seats: 16,
    faculty: 'slytherin',
  },
  {
    hallName: 'charms',
    seats: 18,
    faculty: 'slytherin',
  },
  {
    hallName: 'herbology',
    seats: 22,
    faculty: 'gryffindor',
  },
  {
    hallName: 'defence against the dark arts',
    seats: 20,
    faculty: 'gryffindor',
  },
  {
    hallName: 'history of magic',
    seats: 20,
    faculty: 'ravenclaw',
  },
  {
    hallName: 'astronomy',
    seats: 18,
    faculty: 'ravenclaw',
  },
  {
    hallName: 'divination',
    seats: 14,
    faculty: 'hufflepuff',
  },
  {
    hallName: 'muggle Studies',
    seats: 16,
    faculty: 'hufflepuff',
  },
];

/*
4.1 Вывод на экран всех аудиторий.
*/

function showLectureHallName(anyArray) {
  let result = '';
  anyArray.forEach((element) => {
    result += element['hallName'] + '\n';
  });
  return result;
}

alert(`Все аудитории:\n\n${showLectureHallName(lectureHalls)}`);

/*
4.2 Вывод на экран аудиторий для указанного факультета.
*/

const userFaculty = 'gryffindor';

function showFacultyLecturyHall(anyArray) {
  let result = '';

  anyArray.forEach((element) => {
    if (element['faculty'] === userFaculty) {
      result += element['hallName'] + '\n';
    }
  });

  return result;
}

alert(
  `Аудитории для факультета ${userFaculty}:\n\n${showFacultyLecturyHall(
    lectureHalls
  )}`
);

/*
4.3 Вывод на экран только тех аудиторий, которые подходят для
переданной группы. Объект-группа состоит из названия,
количества студентов и названия факультета.
*/

const group = {
  name: 'bad boys',
  number: 16,
  faculty: 'slytherin',
};

function currentGroupLectureHall(anyArray) {
  let result = '';

  anyArray.forEach((element) => {
    if (
      element['faculty'] === group.faculty &&
      element['seats'] >= group.number
    ) {
      result += element['hallName'] + '\n';
    }
  });

  return result;
}

alert(
  `Для группы "${group.name}", которые поступили на факультет ${
    group.faculty
  } подходят адутории:\n\n${currentGroupLectureHall(lectureHalls)}`
);

/*
4.4 Функция сортировки аудиторий по количеству мест.
*/

function seatsNumbSort(anyArray) {
  const newArray = [];
  let result = '';

  anyArray.forEach((element) => {
    newArray.push(element);
  });

  newArray.sort((a, b) => a['seats'] - b['seats']);

  newArray.forEach((element) => {
    result += element['hallName'] + '\n';
    result += element['seats'] + '\n\n';
  });

  return result;
}

alert(
  `Сортировка аудиторий по колличеству мест:\n${seatsNumbSort(lectureHalls)}`
);

/*
4.5 Функция сортировки аудиторий по названию (по алфа-
виту).
*/

function alphabetSort(anyArray) {
  const newArray = [];
  let result = '';

  anyArray.forEach((element) => {
    newArray.push(element);
  });

  newArray.sort(function (a, b) {
    let hallNameA = a.hallName;
    let hallNameB = b.hallName;

    if (hallNameA < hallNameB) {
      return -1;
    } else if (hallNameA > hallNameB) {
      return 1;
    } else {
      return 0;
    }
  });

  newArray.forEach((element) => {
    result += '\n' + element.hallName;
  });

  return result;
}

alert(
  `Названия аудиторий по алфавитному порядку:\n${alphabetSort(lectureHalls)}`
);

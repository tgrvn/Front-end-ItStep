// 1
let userAge = +prompt('Укажите свой возраст');
userAgeResult = 'ввели неккоректные данные';

if (userAge >= 1 && userAge <= 2) {
  userAgeResult = 'ребенок';
} else if (userAge >= 12 && userAge < 18) {
  userAgeResult = 'подросток';
} else if (userAge >= 18 && userAge <= 60) {
  userAgeResult = 'взрослый';
} else if (userAge > 60) {
  userAgeResult = 'пенсионер';
}

alert(`Вы ${userAgeResult}`);

// 2
const userSymbNumb = +prompt('Укажите цифру, а я укажу символ на клавиатуре');

switch (userSymbNumb) {
  case 1:
    alert('!');
    break;

  case 2:
    alert('@');
    break;

  case 3:
    alert('#');
    break;

  case 4:
    alert('$');
    break;

  case 5:
    alert('%');
    break;

  case 6:
    alert('^');
    break;

  case 7:
    alert('&');
    break;

  case 8:
    alert('*');
    break;

  case 9:
    alert('(');
    break;

  case 0:
    alert(')');
    break;

  default:
    alert('Это не та клавиша');
    break;
}

// 3
const userNumb = +prompt('Введите трёхзначное число');
let res = '';
let a = 0;
a = (a % 100) + userNumb / 100;
a = Math.floor(a) % 100;
let b = 0;
b = (b % 10) + userNumb / 10;
b = Math.floor(b) % 10;
let c = userNumb % 10;

if (a == b && c !== a) {
  res = 'Первые две цифры одинаковые';
} else if (a == c && b !== c) {
  res = 'Первая и последняя цифра одинаковая';
} else if (b == c && a !== b) {
  res = 'Вторая и последняя цифра одинаковая';
} else if (a == b && b == c && c == a) {
  res = 'Все цифры одинаковые';
} else {
  res = 'Все цифры разные';
}

alert(res);

// 4
const year = +prompt('Введите год');
const currentYear =
  year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)
    ? 'Выосоксный год'
    : 'Не выосоксоный год';

alert(currentYear);

// 5
const fiveNumb = prompt('Введите пятизначное число');
const reverseFiveNumb = fiveNumb.split('').reverse().join('');
const answ = reverseFiveNumb == fiveNumb ? 'Палиндром' : 'Не палиндром';
alert(answ);

// 6
const userUsd = +prompt('Введите колличество USD');
const currency = prompt('Перевести USD в EUR, UAH, AZN?'.toLowerCase());
const EUR = 0.88;
const UAH = 28.18;
const AZN = 1.7;
let currentCurrency = '';

switch (currency) {
  case 'eur':
    currentCurrency = userUsd * EUR;
    break;
  case 'uah':
    currentCurrency = userUsd * UAH;
    break;
  case 'azn':
    currentCurrency = userUsd * AZN;
    break;

  default:
    break;
}

alert(`${userUsd} USD = ${currentCurrency} ${currency}`.toUpperCase());

// 7
const userPurchase = +prompt('Введите сумму покупки и мы рассчитаем скидку');
let userSaleSum = '';

if (userPurchase >= 200 && userPurchase <= 300) {
  userSaleSum = userPurchase * 0.03;
  userSaleSum = userPurchase - userSaleSum;
} else if (userPurchase > 300 && userPurchase < 500) {
  userSaleSum = userPurchase * 0.05;
  userSaleSum = userPurchase - userSaleSum;
} else if (userPurchase >= 500) {
  userSaleSum = userPurchase * 0.07;
  userSaleSum = userPurchase - userSaleSum;
} else {
  userSaleSum = 'скидка не предусмотрена :(';
}

alert(`Сумма со скидкой: ${userSaleSum}`);

// 8
const userCircle = +prompt('Введите окружность');
let userSquare = +prompt('Введите пермитер квадрата');
const result =
  userCircle / Math.PI <= userSquare
    ? 'Такой круг может поместиться в квадрат'
    : 'такой круг не может поместиться в квадрат';
alert(result);

9;
const currentAnswerOne = prompt(
  'В каком году началась вторая мировая война? :\n\n 1945\n\n 1939\n\n 2014\n'
);
const currentAnswerTwo = prompt(
  'В каком году началась первая мировая война? :\n\n 1914\n\n 2021\n\n 1916\n'
);
const currentAnswerThree = prompt(
  'Какой сейчас год? :\n\n 2022\n\n 2007\n\n 2021\n'
);
let userPoints = 0;

switch (currentAnswerOne) {
  case '1939':
    ++userPoints;
    break;

  default:
    break;
}
switch (currentAnswerTwo) {
  case '1914':
    ++userPoints;
    break;

  default:
    break;
}
switch (currentAnswerThree) {
  case '2022':
    ++userPoints;
    break;

  default:
    break;
}

alert(
  `Каждый правльный ответ равнялся одному поинту. Ваше колличество поинтов: ${userPoints}`
);

// 10

let dd = +prompt('Введите день:');
let mm = +prompt('Введите месяц:');
let yyyy = +prompt('Введите год:');

if (dd > 0 && dd <= 31 && mm > 0 && mm <= 12 && yyyy > 0) {
  switch (mm) {
    case 1:
      if (dd == 31) {
        dd = 1;
        ++mm;
      } else {
        ++dd;
      }
      break;

    case 2:
      if (yyyy % 4 == 0 || (yyyy % 400 == 0 && dd == 28)) {
        ++dd;
      } else if (dd === 28) {
        dd = 1;
        ++mm;
      } else {
        ++dd;
      }
      break;

    case 3:
      if (dd == 31) {
        dd = 1;
        ++mm;
      } else {
        ++dd;
      }
      break;

    case 4:
      if (dd == 30) {
        dd = 1;
        ++mm;
      } else {
        ++dd;
      }
      break;

    case 5:
      if (dd == 31) {
        dd = 1;
        ++mm;
      } else {
        ++dd;
      }
      break;

    case 6:
      if (dd == 30) {
        dd = 1;
        ++mm;
      } else {
        ++dd;
      }
      break;

    case 7:
      if (dd == 31) {
        dd = 1;
        ++mm;
      } else {
        ++dd;
      }
      break;

    case 8:
      if (dd == 31) {
        dd = 1;
        ++mm;
      } else {
        ++dd;
      }
      break;

    case 9:
      if (dd == 30) {
        dd = 1;
        ++mm;
      } else {
        ++dd;
      }
      break;

    case 10:
      if (dd == 31) {
        dd = 1;
        ++mm;
      } else {
        ++dd;
      }
      break;

    case 11:
      if (dd == 30) {
        dd = 1;
        ++mm;
      } else {
        ++dd;
      }
      break;

    case 12:
      if (mm === 12 && dd === 31) {
        ++yyyy;
        mm = 1;
        dd = 1;
      } else if (dd === 31) {
        dd = 1;
        ++mm;
      } else {
        ++dd;
      }
      break;

    default:
      break;
  }

  alert(
    `Завтра будет ${dd < 10 ? '0' + dd : dd}.${mm < 10 ? '0' + mm : mm}.${yyyy}`
  );
} else {
  alert('Что то тут не так...');
}

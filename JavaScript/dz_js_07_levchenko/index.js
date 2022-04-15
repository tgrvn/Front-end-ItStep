/*
1. Написать функцию, которая принимает строку и выводит
статистику о ней: количество букв, количество цифр и
количество других знаков. 
*/

const userStr =
  'dadasd sadasd asdasd sadasdss sdasd sas, dsadsad, sdwewq, dsaxx';

function userStrValue(anyStr) {
  let count = 0;
  const strSplit = anyStr.split('');

  strSplit.forEach((element) => {
    count++;
  });

  return count;
}

console.log(
  `В строке:\n"${userStr}"\n\nКолличество строк: ${userStrValue(userStr)}`
);

/*
5. Написать функцию, которая принимает словосочетание
и превращает его в аббревиатуру.
Например: cascading style sheets в CSS, объектно-
ориентированное программирование в ООП.
*/

const str = 'cascading style sheets';

function abb(anyStr) {
  let result = '';
  const strSplit = anyStr.split(' ');

  strSplit.forEach((element) => {
    result += element.slice(0, 1).toUpperCase();
  });

  return result;
}

console.log(abb(str));

/*
Написать функцию, которая принимает любое коли-
чество строк, объединяет их в одну длинную строку и
возвращает ее.
*/

function strSplit(anyStr) {
  const splitStr = anyStr.split('');
  let result = '';

  splitStr.forEach((element) => {
    if (
      element !== ' ' &&
      element !== ',' &&
      element !== ':' &&
      element !== '-' &&
      element !== '.' &&
      element !== ';' &&
      element !== '?' &&
      element !== '!'
    ) {
      result += element;
    }
  });

  return result;
}

console.log(strSplit(userStr));

/*
Написать функцию – калькулятор. Функция принимает
строку с примером, определяет, какое действие необходимо
выполнить (+ - * /), переводит операнды в числа, решает
пример и возвращает результат.
*/

const userEx = '2 + 2';

function calc(anyStr) {
  const splitStr = anyStr.split(' ');
  result = 0;
  symb = '';

  splitStr.forEach((element) => {
    if (
      element === '+' ||
      element === '-' ||
      element === '*' ||
      element === '/'
    ) {
      symb = element;
    }
  });

  const fNumb = Number(splitStr[0]);
  const lNumb = Number(splitStr[2]);

  switch (symb) {
    case '+':
      result = fNumb + lNumb;
      break;

    case '-':
      result = fNumb - lNumb;
      break;

    case '*':
      result = fNumb * lNumb;
      break;

    case '/':
      result = fNumb / lNumb;
      break;

    default:
      break;
  }

  return result;
}

console.log(calc(userEx));

/*
Написать функцию, которая получает url и выводит под-
робную информацию о нем.
Например: url “https://itstep.org/ua/about”, информация
“протокол: https, домен: itstep.org, путь: /ua/about”.
*/

const userUrl =
  'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/parseInt';

function urlInfo(anyStr) {
  // const tmpArray = userUrl.split(':');
  let protocol = userUrl.split(':')[0];
  let domain = userUrl.split('/')[2];
  let pathArr = userUrl.split('//');
  let result = '';

  pathArr = pathArr[1].split('/');
  pathArr.shift();

  let path = '';

  pathArr.forEach((element) => {
    path += element + '/';
  });

  result = `Адресс: ${anyStr}\nПротокол: ${protocol}\nДомен: ${domain}\nПуть: ${path}`;

  return result;
}

console.log(urlInfo(userUrl));

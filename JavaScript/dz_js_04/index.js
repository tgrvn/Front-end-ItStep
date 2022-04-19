// 1
const userNumbOne = +prompt('Введите первое число');
const userNumbTwo = +prompt('Введите второе число');

function biggestNumb(userNumbOne, userNumbTwo) {
  let result = '';
  if (userNumbOne > userNumbTwo) {
    result = 1;
  } else if (userNumbOne < userNumbTwo) {
    result = -1;
  } else if (userNumbOne === userNumbTwo) {
    result = 0;
  } else {
    result = 'Это не число';
  }
  return result;
}

alert(biggestNumb(userNumbOne, userNumbTwo));

// 2
const userFactorialNumb = +prompt(
  'Введите число, а я выведу факториал данного числа'
);

function factorial(userFactorialNumb) {
  let result = 1;
  for (let i = 1; i <= userFactorialNumb; i++) {
    result *= i;
  }
  return result;
}

alert(
  `Факториал числа !${userFactorialNumb} = ${factorial(userFactorialNumb)}`
);

// 3
const a = +prompt('Введите первое число');
const b = +prompt('Введите второе число');
const c = +prompt('Введите третье число');

const minNumb = (a, b, c) => `${a}${b}${c}`;
const numb = minNumb(a, b, c);

alert(numb);

// 4
const width = +prompt('Введите ширину прямоугольника');
const height = +prompt('Введите высоту прямоугольника');

function area(width, height) {
  let result = '';
  if (width == 0) {
    result = height * 4;
  } else if (height == 0) {
    result = width * 4;
  } else if (width > 0 && height > 0 && width !== height) {
    result = width * 2 + height * 2;
  } else if (width === height) {
    result = 'это не прямоугольник';
  } else {
    result = 'это не число';
  }
  return result;
}

alert(area(width, height));

// 5
const userNumb = +prompt('Введите число которое проверим на совершнество');
function perfectNumber(userNumb) {
  let tmp = 0;
  let result = '';

  for (let i = 1; i < userNumb; i++) {
    if (userNumb % i === 0) {
      tmp += i;
    }
  }

  if (tmp === userNumb) {
    result = `Число ${userNumb} является совершенным`;
  } else if (tmp !== userNumb && isNaN(userNumb) == false) {
    result = `Число ${userNumb} не является совершенным`;
  } else {
    result = 'Это не число';
  }
  return result;
}

alert(perfectNumber(userNumb));

// 6
let minValue = +prompt('Введите минимальное значение');
let maxValue = +prompt('Введите максимальное значение');

function perfectNumberDiapason() {
  let result = '';
  for (let i = minValue; i <= maxValue; i++) {
    let tmp = 0;
    for (let j = 1; j < i; j++) {
      if (i % j === 0) {
        tmp += j;
      }
    }
    if (tmp === i) {
      result += tmp + ' ';
    }
  }
  return result;
}

alert(
  `Совершенные числа из диапазона ${perfectNumberDiapason(minValue, maxValue)}`
);

// 7
let hh = prompt('Введите количество часов');
let mm = prompt('Введите количество минут');
let ss = prompt('Введите количество секунд');

function time(hh, mm, ss) {
  let res = '';
  if (hh <= 0) {
    res = 'ноль часов?';
  } else {
    hh < 10 ? (hh = '0' + hh) : hh;
    mm < 10 ? (mm = '0' + mm) : mm;
    ss < 10 ? (ss = '0' + ss) : ss;
    mm == 0 ? (mm = '00') : mm;
    ss == 0 ? (ss = '00') : ss;
    res = `${hh}:${mm}:${ss}`;
  }
  return res;
}

alert(time(hh, mm, ss));

// 8
const hhSec = prompt('Введите количество часов');
const mmSec = prompt('Введите количество минут');
const ssSec = prompt('Введите количество секунд');

let second = (hhSec, mmSec, ssSec) => hhSec * 3600 + mmSec * 60 + ssSec;
res = second(hhSec, mmSec, ssSec);

alert(`Секунд: ${res}`);

// 9
const seconds = +prompt('Введите количество секунд:');

function secToTime(seconds) {
  let result = '';
  let tmp = 0;
  const hh = Math.floor(seconds / 3600);
  tmp = Math.floor(seconds - hh * 3600);
  const mm = Math.floor(tmp / 60);
  const ss = tmp - mm * 60;

  result = `${hh < 10 ? '0' + hh : hh}:${mm < 10 ? '0' + mm : mm}:${
    ss < 10 ? '0' + ss : ss
  }`;
  return result;
}

alert(secToTime(seconds));

// 10
const hhOne = +prompt('Введите часы');
const mmOne = +prompt('Введите минуты');
const ssOne = +prompt('Введите секунды');
alert('Теперь введите следующее время и после мы сверим разницу');
const hhTwo = +prompt('Введите часы');
const mmTwo = +prompt('Введите минуты');
const ssTwo = +prompt('Введите секунды');

function timeDifference(hhOne, mmOne, ssOne, hhTwo, mmTwo, ssTwo) {
  let timeOne = hhOne * 3600 + mmOne * 60 + ssOne;
  let timeTwo = hhTwo * 3600 + mmTwo * 60 + ssTwo;
  let seconds = 0;
  let result = '';

  if (timeOne > timeTwo) {
    seconds = timeOne - timeTwo;
  } else if (timeOne < timeTwo) {
    seconds = timeTwo - timeOne;
  }

  const hh = Math.floor(seconds / 3600);
  tmp = Math.floor(seconds - hh * 3600);
  const mm = Math.floor(tmp / 60);
  const ss = tmp - mm * 60;

  result = `Разница: ${hh < 10 ? '0' + hh : hh}:${mm < 10 ? '0' + mm : mm}:${
    ss < 10 ? '0' + ss : ss
  }`;
  return result;
}

alert(timeDifference(hhOne, mmOne, ssOne, hhTwo, mmTwo, ssTwo));

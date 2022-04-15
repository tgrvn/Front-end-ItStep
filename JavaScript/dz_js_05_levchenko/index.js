const car = {
  manufacture: 'nissan',
  model: 'primera p12',
  yearOfIssue: '2002',
  kmH: 40,
};

// 1
function ex1(car) {
  let result = '';
  for (const key in car) {
    if (car.hasOwnProperty(key)) {
      result += `${key}: ${car[key]} \n`;
    }
  }
  return result;
}

// 2
alert(ex1(car));

while (true) {
  const distance = +prompt(
    'Введите расстояние в километрах которое должен преодолеть автомобиль'
  );

  function carDistance(car) {
    if (distance > 0 && !isNaN(distance)) {
      let km = distance * 1000;
      let mS = car.kmH / 3.6;
      let result = km / mS / 3600;
      let rest = 0;
      if (result >= 4) {
        rest = result / 4;
        result = rest + result;
      }
      return result.toFixed(2);
    } else {
      answer = `error`;
      return answer;
    }
  }

  if (carDistance(car) === 'error') {
    alert(`Не корректные данные`);
    continue;
  } else {
    alert(
      `Машина преодолевает расстояние ${distance}km за ${
        carDistance(car) < 1
          ? carDistance(car) + ' hour'
          : carDistance(car) + 'hours'
      }`
    );
    break;
  }
}

const fraction = {
  numerator: 10,
  denominator: 5,
};

// 1, 2, 3, 4, 5
while (true) {
  const userValue = prompt(
    'Введите операцию для числителя и знаменателя \n +, -, *, /'
  );

  function calc(fraction) {
    let result = 0;
    switch (userValue) {
      case '+':
        result = fraction.numerator + fraction.denominator;
        break;
      case '-':
        fraction.numerator > fraction.denominator
          ? (result = fraction.numerator - fraction.denominator)
          : (result = fraction.denominator - fraction.numerator);
        break;
      case '*':
        result = fraction.numerator * fraction.denominator;
        break;
      case '/':
        fraction.numerator > fraction.denominator
          ? (result = fraction.numerator / fraction.denominator)
          : (result = fraction.denominator / fraction.numerator);
        break;
      default:
        result = 'error';
        break;
    }
    return result;
  }

  if (calc(fraction) === 'error') {
    alert('Введите символ: \n +, -, *, / !!!');
    continue;
  } else {
    alert(
      `${fraction.numerator}${userValue}${fraction.denominator}=${calc(
        fraction
      )}`
    );
    break;
  }
}

const time = {
  hh: 11,
  mm: 42,
  ss: 43,
};

// 1
const whatTime = (time) => `${time.hh}:${time.mm}:${time.ss}`;
alert(whatTime(time));

// 2, 3, 4
while (true) {
  let userValue = +prompt('Введите желаемое время (часы, минуты или секунды)');
  let userAnswer = prompt(
    'Что хотите изменить? \nhh - часы \nmm - минуты \nss - секунды'
  );

  function ssChange(time) {
    let currentTime = '';
    let resultHh = 0;
    let resultMm = 0;
    let resultSs = 0;
    let sec = allSeconds(resultHh, resultMm, resultSs, userAnswer);

    function allSeconds(resultHh, resultMm, resultSs, userAnswer) {
      let allSec = 0;
      switch (userAnswer) {
        case 'hh':
          resultHh = (time.hh + userValue) * 3600;
          resultMm = time.mm * 60;
          resultSs = time.ss;
          allSec = resultHh + resultMm + resultSs;
          break;
        case 'mm':
          resultHh = time.hh * 3600;
          resultMm = (time.mm + userValue) * 60;
          resultSs = time.ss;
          allSec = resultHh + resultMm + resultSs;
          break;
        case 'ss':
          resultHh = time.hh * 3600;
          resultMm = time.mm * 60;
          resultSs = time.ss + userValue;
          allSec = resultHh + resultMm + resultSs;
          break;

        default:
          break;
      }
      return allSec;
    }

    if (userValue > 0 || userValue < 0) {
      resultHh = Math.floor(sec / 3600);
      resultMm = Math.floor(sec / 60) - resultHh * 60;
      resultSs = sec % 60;

      currentTime = `${resultHh < 10 ? '0' + resultHh : resultHh}:${
        resultMm < 10 ? '0' + resultMm : resultMm
      }:${resultSs < 10 ? '0' + resultSs : resultSs}`;
    } else {
      currentTime = 'error';
    }
    return currentTime;
  }

  if (ssChange(time) === 'error') {
    alert('Не корректно введенно время');
    continue;
  } else if (ssChange(time) === '00:00:00') {
    alert('Введите именно hh, mm или ss');
  } else {
    alert(
      `Время было изменено на ${userValue} \nПредыдущее время - ${time.hh}:${
        time.mm
      }:${time.ss} \nВремя после просчета - ${ssChange(time)}`
    );
    break;
  }
}

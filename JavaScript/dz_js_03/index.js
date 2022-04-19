let char = '*';

let strOne = '';
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 10; j++) {
    strOne += char;
  }
  strOne += '<br>';
}
strOne += '<br>';
document.write(strOne);

let strTwo = '';
for (let i = 0; i < 7; i++) {
  strTwo += char;
  document.write(strTwo + '<br>');
}

document.write('<br>');

let strThree = '';
for (let index = 0; index < 7; index++) {
  for (let j = 0; j < 6 - index; j++) {
    document.write('&nbsp;&nbsp;');
  }
  strThree += char;
  document.write(strThree + '<br>');
}

document.write('<br>');

let strFour = '';
for (let index = 0; index < 7; index++) {
  for (let j = 0; j < 7 - index; j++) {
    document.write(char);
  }
  strFour += '&nbsp;&nbsp;';
  document.write(strFour + '<br>');
}

document.write('<br>');

let strFive = '';
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < i - -1; j++) {
    document.write('&nbsp;' + '&nbsp;');
  }
  for (let j = 0; j < 7 - i; j++) {
    document.write(char);
  }
  strFive += '&nbsp;';
  document.write(strFive + '<br>');
}

document.write('<br>');

let strSix = '';
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < i - -1; j++) {
    document.write('&nbsp;');
  }
  for (let j = 0; j < 7 - i; j++) {
    document.write(char);
  }
  strSix += '&nbsp;';
  document.write(strSix + '<br>');
}

document.write('<br>');

let strSeven = '';
for (let index = 0; index < 7; index++) {
  for (let j = 0; j < 7 - index; j++) {
    document.write('&nbsp;');
  }
  for (let j = 0; j < index - 7; j++) {
    document.write('&nbsp;');
  }
  strSeven += char;
  document.write(strSeven + '<br>');
}

document.write('<br>');

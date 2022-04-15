document.body.style.margin = '0';
document.body.style.padding = '0.1px';

/* Создать html-страницу с кнопкой Открыть и модальным
окном. На модальном окне должен быть текст и кнопка Закрыть.
Изначально модальное окно не отображается. При клике на
кнопку Открыть появляется модальное окно, на кнопку Закрыть –
исчезает. */

const wrapper = document.createElement('div');
wrapper.style.maxWidth = '100%';
wrapper.style.Height = '100vh';
wrapper.style.backgroundColor = '#F5F5F5';

document.body.append(wrapper);

const exOne = document.createElement('div');
exOne.style.width = 'max-content';
exOne.style.height = 'max-content';
exOne.style.margin = '0 auto';
exOne.style.padding = '1rem';
exOne.style.backgroundColor = '#FFCCBC';

wrapper.append(exOne);

const button = document.createElement('button');
button.style.margin = '1rem';
button.innerText = 'Open modal';
button.style.cursor = 'pointer';

exOne.append(button);

const modalBckg = document.createElement('div');
modalBckg.style.width = '100%';
modalBckg.style.height = '100vh';
modalBckg.style.position = 'fixed';
modalBckg.style.backgroundColor = '#757575';
modalBckg.style.display = 'none';
modalBckg.style.alignItems = 'center';
modalBckg.style.justifyContent = 'center';
modalBckg.style.zIndex = '99';

document.body.prepend(modalBckg);

const modal = document.createElement('div');
modal.style.padding = '1rem';
modal.style.textAlign = 'center';
modal.style.backgroundColor = '#F5F5F5';

modalBckg.append(modal);

const modalTxt = document.createElement('p');
modalTxt.innerText = 'Hello from modal window!';

modal.prepend(modalTxt);

const modalBtn = document.createElement('button');
modalBtn.innerText = 'Close modal';
modalBtn.style.cursor = 'pointer';

modal.append(modalBtn);

modalBtn.onclick = function (event) {
  modalBckg.style.display = 'none';
};

button.onclick = function (event) {
  modalBckg.style.display = 'flex';
};

/* Создать html-страницу с футбольным полем, которое зани-
мает всю ширину и высоту экрана, и мячом размером 100 на 100
пикселей.
Сделать так, чтобы при клике мышкой по полю, мяч плавно
перемещался на место клика. Учтите: необходимо, чтобы центр
мяча останавливался именно там, где был совершен клик мышкой.
Также предусмотрите, чтобы мяч не выходил за границы поля. */

const field = document.createElement('div');
field.style.width = '1280px';
field.style.height = '720px';
field.style.margin = '1.5rem auto';
field.style.position = 'reletive';
field.style.backgroundImage = 'url("./img/field.jpg")';
field.style.backgroundSize = 'cover';
field.style.backgroundRepeat = 'no-repeat';

wrapper.append(field);

const ball = document.createElement('div');
ball.style.width = '100px';
ball.style.zIndex = 'auto';
ball.style.height = '100px';
ball.style.position = 'absolute';
ball.style.backgroundImage = 'url("./img/ball.png")';
ball.style.backgroundSize = 'cover';
ball.style.transition = '0.5s';

field.prepend(ball);

field.onclick = function ({ offsetX, offsetY }) {
  if (offsetX <= 1180 && offsetX >= 100 && offsetY <= 620 && offsetY >= 100) {
    ball.style.left = offsetX + 60 + 'px';
    ball.style.top = offsetY + 600 + 'px';
  }
};

/*
Создать html-страницу со светофором и кнопкой, которая
переключает светофор на следующий цвет.
*/

const lights = document.querySelectorAll('.light');
lights[0].classList.add('green');
const btn = document.querySelector('.switch-lights');

btn.onclick = function (event) {
  if (lights[0].classList.contains('green')) {
    lights[0].classList.toggle('green');
    lights[1].classList.toggle('yellow');
  } else if (lights[1].classList.contains('yellow')) {
    lights[1].classList.toggle('yellow');
    lights[2].classList.toggle('red');
  } else if (lights[2].classList.contains('red')) {
    lights[0].classList.toggle('green');
    lights[2].classList.toggle('red');
  }
};

/*
Создать html-страницу со списком книг.
При щелчке на книгу, цвет фона должен меняться на оранжевый.
Учтите, что при повторном щелчке на другую книгу, предыдущей –
необходимо возвращать прежний цвет.
*/

const books = document.querySelectorAll('.book');
const exFive = document.querySelector('.ex5');

exFive.onclick = function ({ target }) {
  books.forEach((element) => {
    element.classList.remove('bckg');
    if (element === target) {
      element.classList.toggle('bckg');
    }
  });
};

/*
Создать html-страницу с несколькими кнопками.
При наведении на кнопку, должна появляться подсказка с тек-
стом. По умолчанию – подсказка появляется сверху от кнопки. Но
если она не помещается сверху от кнопки, тогда отображается снизу.
*/

const btnTooltip = document.querySelectorAll('.btn');
const tooltip = document.querySelectorAll('.btn-tooltip');
console.log(btnTooltip);

btnTooltip[0].addEventListener('mouseenter', handlerTooltipSmall);

function handlerTooltipSmall(event) {
  tooltip[0].classList.add('btn-tooltip-show-small');

  btnTooltip[0].addEventListener('mouseleave', function (event) {
    tooltip[0].classList.remove('btn-tooltip-show-small');
  });
}

btnTooltip[1].addEventListener('mouseenter', handlerTooltipBig);

function handlerTooltipBig(event) {
  tooltip[1].classList.add('btn-tooltip-show-big');

  btnTooltip[1].addEventListener('mouseleave', function (event) {
    tooltip[1].classList.remove('btn-tooltip-show-big');
  });
}



document.addEventListener('DOMContentLoaded', () => {
  const changers = document.querySelector('.changers');
  const object = document.querySelector('.object');
  const figure = document.createElement('div');
  const css = document.querySelector('.css');
  const cssAtr = document.querySelectorAll('.css > p');

  figure.style.width = '50px';
  figure.style.height = '50px';
  figure.style.backgroundColor = 'rgb(0, 0, 0)';

  object.prepend(figure);

  changers.addEventListener('change', (event) =>
    handlerTarget(event, figure, cssAtr)
  );
});

function handlerTarget({ target }, item, css) {
  if (target.id === 'width') {
    item.style.width = target.value + 'px';
    css[0].innerText = `width: ${item.style.width};`;
  }

  if (target.id === 'height') {
    item.style.height = target.value + 'px';
    css[1].innerText = `height: ${item.style.height};`;
  }

  if (target.id === 'backgroundColor') {
    item.style.backgroundColor = target.value;
    css[2].innerText = `background-color: ${item.style.backgroundColor};`;
  }

  if (target.id === 'border') {
    item.style.border = `${target.value}px solid`;
    css[3].innerText = `border-width: ${item.style.borderWidth};`;
  }

  if (target.id === 'borderColor') {
    item.style.borderColor = target.value;
    css[4].innerText = `border-color: ${item.style.borderColor};`;
  }

  if (target.id === 'borderRadius') {
    item.style.borderRadius = target.value + '%';
    css[5].innerText = `border-radius: ${item.style.borderRadius};`;
  }

  if (target.id === 'rotate') {
    item.style.transform = `rotate(${target.value}deg)`;
    css[6].innerText = `transform: ${item.style.transform};`;
  }
}

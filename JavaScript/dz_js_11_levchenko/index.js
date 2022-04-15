document.addEventListener('DOMContentLoaded', function (event) {
  const line = document.querySelector('.range-line');
  const dot = document.querySelector('.range-dot');

  dot.addEventListener('mousedown', (event) =>
    handlerRangeChange(event, line, dot)
  );

  const carouselee = document.querySelector('.carouselee');
  const right = document.querySelector('.right');
  const left = document.querySelector('.left');
  const image = document.createElement('img');
  carouselee.prepend(image);
  image.classList.add('img');
  const imgArray = [
    'img-1.jpg',
    'img-2.jpg',
    'img-3.jpg',
    'img-4.jpg',
    'img-5.jpg',
  ];
  image.setAttribute('src', `./img/${imgArray[0]}`);

  carouselee.addEventListener('click', (event) =>
    handlerImgRight(event, image, imgArray, right, left)
  );

  const info = document.querySelectorAll('.accord > div > p');
  const accord = document.querySelector('.accord');
  const triggers = document.querySelectorAll('.accord > div > h3');
  console.log(triggers);
  info.forEach((element) => {
    element.classList.toggle('hide-info');
  });
  accord.addEventListener('click', (event) =>
    handlerShowInfo(event, info, triggers)
  );
});

function handlerRangeChange({ clientX }, line, dot) {
  const { left, width } = dot.getBoundingClientRect();

  // console.log(dot.getBoundingClientRect());

  line.addEventListener('mousemove', handlerDotMove);

  function handlerDotMove(event) {
    const x = event.pageX - (clientX - left) - width / 2 - 35;
    if (x + width / 2 <= event.target.offsetWidth && x >= -3) {
      dot.style.left = x + 'px';
    }
  }

  document.body.onmouseup = () => {
    line.removeEventListener('mousemove', handlerDotMove);
  };
}

let count = 0;

function handlerImgRight(
  { target: { className } },
  image,
  imgArray,
  right,
  left
) {
  if (className === 'right') {
    count++;

    if (count >= 0 && count <= 4) {
      image.setAttribute('src', `./img/${imgArray[count]}`);
      left.removeAttribute('disabled', 'disabled');
      left.style.borderBottom = '7px solid #81d4fa';
      left.style.borderLeft = '7px solid #81d4fa';

      if (count === 4) {
        count += 0;
        right.style.borderBottom = '7px solid #BDBDBD';
        right.style.borderLeft = '7px solid #BDBDBD';
        right.setAttribute('disabled', 'disabled');
      }
    }
  } else if (className === 'left') {
    count--;

    if (count >= 0 && count <= 4) {
      image.setAttribute('src', `./img/${imgArray[count]}`);
      right.removeAttribute('disabled', 'disabled');
      right.style.borderBottom = '7px solid #81d4fa';
      right.style.borderLeft = '7px solid #81d4fa';

      if (count === 0) {
        count = 0;
        left.setAttribute('disabled', 'disabled');
        left.style.borderBottom = '7px solid #BDBDBD';
        left.style.borderLeft = '7px solid #BDBDBD';
      }
    }
  }
}

function handlerShowInfo({ target }, info, triggers) {
  triggers.forEach((header, hIndex) => {
    if (header === target) {
      info.forEach((par, pIndex) => {
        if (hIndex === pIndex) {
          info.forEach((element) => {
            element.classList.remove('show-info');
            element.classList.add('hide-info');
          });
          par.classList.toggle('hide-info');
          par.classList.toggle('show-info');
        }
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', function (params) {
  const fWin = new Book(
    './img/book-1.png',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    'Lorem Ipsum',
    12
  );

  const dLoveMe = new Book(
    './img/book-2.jpg',
    'Consectetur adipisicing elit lorem ipsum dolor, sit amet.',
    'Sit Amet',
    9
  );

  const bTemp = new Book(
    './img/book-3.jpg',
    'Sit amet lorem ipsum dolor, consectetur adipisicing elit.',
    'Adipisicing Elit',
    16
  );

  const bBuy = document.forms.buy;
  const books = document.querySelector('.books');

  bBuy.addEventListener('submit', (event) => handlerBuySubmit(event, bBuy));
  books.addEventListener('click', (event) => handlerSelect(event, bBuy));
});

class Book {
  book = '';
  img = '';
  bName = '';
  bAuthor = '';
  cost = '';
  select = '';

  constructor(src, bName, bAuthor, cost) {
    this.book = createBook();
    this.img = createImg();
    this.bName = createBookName();
    this.bAuthor = createBookAuthor();
    this.cost = createCost();
    this.select = createBtn();

    function createBook() {
      const books = document.querySelector('.books');
      const book = document.createElement('div');
      book.classList.add('current-b');
      books.prepend(book);
      return book;
    }

    function createImg() {
      const book = document.querySelector('.current-b');
      const img = document.createElement('img');
      img.setAttribute('src', `${src}`);
      img.classList.add('b-cover');
      const div = document.createElement('div');
      div.classList.add('img');
      div.prepend(img);
      book.prepend(div);
      return img;
    }

    function createBookName() {
      const book = document.querySelector('.current-b');
      const h2 = document.createElement('h2');
      h2.innerText = `${bName}`;
      book.append(h2);
      return h2;
    }

    function createBookAuthor() {
      const book = document.querySelector('.current-b');
      const p = document.createElement('p');
      p.innerText = `${bAuthor}`;
      book.append(p);
      return p;
    }

    function createCost() {
      const book = document.querySelector('.current-b');
      const p = document.createElement('p');
      p.classList.add('cost');
      p.innerText = `${cost}$`;
      book.append(p);
      return p;
    }

    function createBtn() {
      const book = document.querySelector('.current-b');
      const btn = document.createElement('button');
      btn.innerText = 'select';
      btn.classList.add('select');
      book.append(btn);
      return btn;
    }
  }
}

function handlerSelect(
  {
    target: {
      tagName,
      parentElement: { children },
    },
  },
  bBuy
) {
  const { bname, quant } = bBuy;
  if (tagName === 'BUTTON') {
    bname.value = children[1].innerText;
    quant.value = 1;
  }
}

function handlerBuySubmit(event, bBuy) {
  event.preventDefault();
  let okay = false;
  const date = new Date();
  const dateNow = new Date();
  const dateFuture = new Date(date.setMonth(date.getMonth() + 1));

  if (bBuy.bname.value === '') {
    event.preventDefault();
    alert('Вы не выбрали книгу');
  } else if (bBuy.ddate.valueAsDate < dateNow) {
    event.preventDefault();
    alert('мы не можем доставлять в прошлое');
  } else if (bBuy.ddate.valueAsDate > dateFuture) {
    alert('заранее принимаем в течении месяца');
    event.preventDefault();
  } else {
    alert(
      `${bBuy.uname.value} спасибо за заказ. Книга "${bBuy.bname.value}" будет доставлена ${bBuy.ddate.value}, по адресу ${bBuy.deliv.value}`
    );
  }
}

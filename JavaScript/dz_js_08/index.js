/*
Реализовать класс, описывающий окружность. В классе долж-
ны быть следующие компоненты:
■■ поле, хранящее радиус окружности;
■■ get-свойство, возвращающее радиус окружности;
■■ set-свойство, устанавливающее радиус окружности;
■■ get-свойство, возвращающее диаметр окружности;
■■ метод, вычисляющий площадь окружности;
■■ метод, вычисляющий длину окружности.
Продемонстрировать работу свойств и методов.
*/

class Circle {
  radius = 0;

  constructor(circleRadius = 2) {
    this.radius = circleRadius;
  }

  get radius() {
    return this.radius;
  }

  set nRadius(newRadius) {
    this.radius = newRadius;
  }

  get diameter() {
    return this.radius ** 2;
  }

  areaOfCircle() {
    return Math.floor(Math.PI * this.diameter * 100) / 100;
  }

  widthCircle() {
    return Math.floor(2 * Math.PI * this.radius * 100) / 100;
  }
}

const userRadius = +prompt('Введите радиус');
const circle = new Circle(userRadius);

alert(`Радиус: ${circle.radius}\n
       Диаметр: ${circle.diameter}\n
       Площадь круга: ${circle.areaOfCircle()}\n
       Длина окружности: ${circle.widthCircle()}`);

/*
Реализовать класс, описывающий html элемент.
Класс HtmlElement должен содержать внутри себя:
■■ название тега;
■■ самозакрывающийся тег или нет;
■■ текстовое содержимое;
■■ массив атрибутов;
■■ массив стилей;
■■ массив вложенных таких же тегов;
■■ метод для установки атрибута;
■■ метод для установки стиля;
■■ метод для добавления вложенного элемента в конец теку-
щего элемента;
■■ метод для добавления вложенного элемента в начало те-
кущего элемента;
■■ метод getHtml(), который возвращает html код в виде
строки, включая html код вложенных элементов.
*/

const atr = [
  {
    name: 'id="wrapper"',
  },
  {
    name: 'src="./img/cat.jpg"',
  },
  {
    name: 'alt="Lorem Ipsum"',
  },
  {
    name: 'href="http://www.ipsum.com/"',
  },
  {
    name: 'target="_blank"',
  },
];

const styles = [
  {
    name: 'display:flex;',
  },
  {
    name: 'width:300px;',
  },
  {
    name: 'width:100%;',
  },
  {
    name: 'text-align:justify;',
  },
  {
    name: 'margin: 10px;',
  },
];

class Html {
  tagName = '';
  isSelfClosing = false;
  text = '';
  atrArray = [];
  stylesArray = [];
  nestedArray = [];

  constructor(tagName, isSelfClosing, text) {
    this.tagName = tagName;
    this.isSelfClosing = isSelfClosing;
    this.text = text;
  }

  atrPush(atrName) {
    return this.atrArray.push(atrName);
  }

  stylePush(styleName) {
    return this.stylesArray.push(styleName);
  }

  appendTag(tag) {
    return this.nestedArray.push(tag.html);
  }

  prependTag(tag) {
    return this.nestedArray.unshift(tag.html);
  }

  get html() {
    let html = '';
    if (this.isSelfClosing === false) {
      html = `<${this.tagName} ${this.atrArray.join('')} style="${this.stylesArray.join('')}">${this.text}${this.nestedArray.join(' ')}</${this.tagName}>`;
    } else {
      html = `<${this.tagName} ${this.atrArray.join(
        ''
      )} style="${this.stylesArray.join('')}">${
        this.text
      }${this.nestedArray.join(' ')}`;
    }

    return html;
  }
}

const wrapper = new Html('div', false, '');
wrapper.atrPush(atr[0].name);
wrapper.stylePush(styles[0].name);

const div = new Html('div', false, '');
div.stylePush(styles[1].name);
div.stylePush(styles[4].name);

const h3 = new Html('h3', false, 'What is lorem Ipsum?');

const img = new Html('img', true, '');
img.stylePush(styles[2].name);
img.atrPush(atr[1].name);
img.atrPush(atr[2].name);

const p = new Html(
  'p',
  false,
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quia nobis corporis, maiores esse rerum error laboriosam voluptatibus nihil, veritatis quisquam beatae repudiandae illum porro nemo neque consequuntur quis illo natus qui dolores voluptates, tempora ad. Pariatur quisquam distinctio maxime. Tenetur, expedita id. Provident ut sit blanditiis eveniet ipsam voluptatum?'
);
p.stylePush(styles[3].name);

const a = new Html('a', false, 'More...');
a.atrPush(atr[3].name + ' ');
a.atrPush(atr[4].name);


div.prependTag(p);
div.prependTag(img);
div.prependTag(h3);
wrapper.prependTag(div);
wrapper.appendTag(div);

document.write(wrapper.html);

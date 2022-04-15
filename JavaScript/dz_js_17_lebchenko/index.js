document.addEventListener('DOMContentLoaded', () => {
    const search = document.querySelector('.search');

    search.addEventListener('input', function handlerInput(event) {     
        const cards = document.querySelector('.cards');
        cards.innerHTML = '';   
        api.getDrinks(search.value, getDrinks);
    });

    function getDrinks(data) {
        const {drinks} = data;
        const cards = drinks.map(drink => getCard(drink));
        return;
    }

    function getCard(drink) {
        new Card(drink.strDrink, drink.strDrinkThumb, drink.strInstructions);
        return;
    }
});



class Card {
    constructor(name, image, description) {
        const cards = document.querySelector('.cards');
        const card = document.createElement('div');
        card.classList.add('card');

        const head = document.createElement('h2');
        head.innerText = `${name}`;

        const img = document.createElement('img');
        img.setAttribute('src', `${image}`);

        const descr = document.createElement('p');
        descr.innerText = `${description}`;

        card.append(head, img, descr);
        cards.append(card);
    }
}
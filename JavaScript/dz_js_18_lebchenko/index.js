document.addEventListener('DOMContentLoaded', () => {
    const search = document.querySelector('.search');
    const cards = document.querySelector('.cards');

    search.addEventListener('input', function handlerInput(event) {     
        cards.innerHTML = '';   
        api.getDrinks(search.value, getDrinks);

        cards.addEventListener('click', function handlerCardInfo(event) {
            api.getDrinks(search.value, getDrinksInfo);
            console.log(event);
        });
    });

    function getDrinks(data) {
        const {drinks} = data;
        const cards = drinks.map(drink => getCard(drink));
    }

    function getCard(drink) {
        new Card(drink.strDrink, drink.strDrinkThumb, drink.strInstructions);
        return;
    }

    function getDrinksInfo(data) {
        const { drinks } = data;
        return;
    }

    // function getCardInfo(params) {
    //     if () {
            
    //     }   
    // }
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
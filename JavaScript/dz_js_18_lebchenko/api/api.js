class Api {
    #URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

    getDrinks(drink, callback) {
        fetch(this.#URL + drink)
            .then(data => {
                if (data.ok && data.status === 200) {
                    return data.json();
                }
                throw('error');
            })
            .then(callback)
            .catch(error => {
                console.log(error);
            });
    }    
}

const api = new Api();


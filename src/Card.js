export default class Card{
    constructor(country){
        this.country = country;
        this.card = document.createElement('div');
        this.title = document.createElement('h2');
        this.title.textContent = `${country.name.common} ${country.flag}`;
        this.imgsDiv = document.createElement('div');
        this.imgsDiv.classList.add('imgsDiv');
        this.title.classList.add('card-title');
        this.card.classList.add('countryCard');
    }
    //resolver problema caso não tenha a informação de tal país
    //tem fronteiras? S: cria array com as fronteiras e coloca nomes ao invés de siglas / N: emite essa informação
    addCardInfo(){
        const element = document.createElement('p');
        element.textContent = `The country is located at ${this.country.continents}, has borders with ${this.country.borders.join(', ')}, and it has an area of ${this.country.area} km2. The capital city of ${this.country.name.common} is ${this.country.capital}, and the currency is ${Object.values(this.country.currencies)[0].name},
        which symbol is ${Object.values(this.country.currencies)[0].symbol}. ${this.country.name.common}'s gini coefficient is ${Object.values(this.country.gini)[0]}`;
        const brasao = document.createElement('img');
        brasao.src = this.country.coatOfArms.svg;
        brasao.style.width = '75%'; 
        const flag = document.createElement('img');
        flag.src = this.country.flags.svg;
        flag.style.width = '75%';
        flag.style.borderRadius = '10px';
        this.imgsDiv.append(flag, brasao);
        this.card.append(element, this.imgsDiv);
    }
    renderCard(parent){
        parent.append(this.title, this.card);
    }
}
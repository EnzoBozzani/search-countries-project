import Card from './Card.js';
const section3 = document.querySelector('#section3');
const datalist = document.querySelector('#countries');

function createInfoCard (country){
    const card = document.createElement('a');
    card.href = '#section2';
    const countryName = document.createElement('h3');
    countryName.textContent = country.name.common;
    const countryFlag = document.createElement('img');
    countryFlag.src = country.flags.svg;
    countryFlag.style.width = '50%';
    card.classList.add('info-card');
    card.append(countryName, countryFlag);
    section3.append(card);
    card.addEventListener('click', () => {
        if (document.querySelector('#before-img') !== null){
            document.querySelector('#before-img').remove();
        }
        getCountry(country.name.common).then(result => {createCard(result)});
    })
}

async function generateAllCards(){
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    const countries = await res.json();
    const countriesNames = countries.map(country => country.name.common);
    const countriesInOrder = [];
    countriesNames.sort().forEach(countryName => {
        countries.forEach(country => {
            if (countryName === country.name.common){
                countriesInOrder.push(country);
            }
        })
    })
    countriesInOrder.forEach(country => {
        const option = document.createElement('option');
        option.value = country.name.common;
        datalist.appendChild(option);
        createInfoCard(country);
    })
    
}

async function getCountry (countryName){
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    const countries = await res.json();
    let country = '';
    countries.forEach(element => {
        if (element.name.common === countryName){
            country = element;
        }
    })
    if (country === ''){
        return null;
    } else {
        return country;
    }
}

function createCard (country){
    console.log(country);
    if (document.querySelector('.countryCard') !== null){
        document.querySelector('.countryCard').remove();
        document.querySelector('.card-title').remove();
    }
    const cardArea = document.querySelector('#cardArea');
    const card = new Card(country);
    card.addCardInfo();
    card.renderCard(cardArea);
}

export {generateAllCards, getCountry, createCard};
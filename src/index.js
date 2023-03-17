import './css/style.css';
import 'animate.css';
import {generateAllCards, getCountry, createCard} from './functions.js'

const form = document.querySelector('form');
const input = document.querySelector('#searchInput');
const datalist = document.querySelector('#countries');

form.addEventListener('submit', ev => {
    ev.preventDefault();
    document.querySelector('#error-span').textContent = '';
    getCountry(input.value.charAt(0).toUpperCase() + input.value.slice(1)).then((result) => {
        if (result === null){
            document.querySelector('#error-span').textContent = 'ERRO! INFORME UM PAÍS VÁLIDO';
        } else {
            if (document.querySelector('#before-img') !== null){
                document.querySelector('#before-img').classList.add('animate__animated', 'animate__backOutRight');
                setTimeout(() => {
                    document.querySelector('#before-img').remove();
                }, 500);
            }
            createCard(result);
        }
    });
    form.reset();
})

document.addEventListener('DOMContentLoaded', generateAllCards);

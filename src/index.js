import './assets/styles/main.scss';
import Sample from './js/sample.js';

// querySelector - funkcja do pobierania pojedynczego elementu html
// querySelector() - wywolanie funkcji
// document.querySelector('[data-myselector="param1"]').onchange=handleUpdateParameter; // [data-myselector="param1"] - selector data atrybutu myselector
// document.querySelector('.form-element').onchange=handleUpdateParameter;  // .form-element - selector po class elementu html 
// document.querySelector('#param1').onchange=handleUpdateParameter;

const param1Element = document.querySelector('[data-myselector="param1"]'); // pobiram i zapisuje do zmiennej element z id param1
const param2Element = document.querySelector ('#param2');
const resultElement = document.querySelector('#result');

param1Element.onchange=handleUpdateParam1; // dodawanie handlera (funkcji) obslugujaca zmiane wartosci w inpucie
param2Element.onchange=handleUpdateParam2;

document.querySelector('#action-add').onclick=sum; // dodawanie handlera na zmiane wartosci

function handleUpdateParam1(ev) { //ev obiekt event ( w tym przypadku onchange ale moze byc click i wiele innych) dodawany przez przegladarke
    console.log(ev);
    console.log(ev.target.value); // pobieranie wartosci z inputa
    resultElement.value=ev.target.value
};
function handleUpdateParam2(ev) {
    resultElement.value=ev.target.value
};

function sum(ev) {
    
}




// gdzies tam w przegladarce handler (funkcja) jest wywolywana przez skrypt
// kroki jak postepuje przegladarka:
// 1. hej uzytkownik zmienial wartosc inputa
// 2. uzytkownik przed kliknieciem podal mi funkcje ktora chce wywolac na zmiane wartosci
// 3. wiec muszxe wywolac ta funkcje z parametrami ktore sa w standardzie js



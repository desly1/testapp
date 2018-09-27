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
const operations = {
    sum: '+',
    minus: '-',
    multiply: '*',
    divide: '/',
    // todo add more operations here lin minus etc.
};

let currentOperation = operations.sum;

param1Element.onchange=handleUpdateParam1; // dodawanie handlera (funkcji) obslugujaca zmiane wartosci w inpucie
param2Element.onchange=handleUpdateParam2;

document.querySelector('#action-add').onclick=sum; // dodawanie handlera na zmiane wartosci
document.querySelector('#action-minus').onclick=minus
document.querySelector('#action-multiply').onclick=multiply
document.querySelector('#action-divide').onclick=divide

function handleUpdateParam1(ev) { //ev obiekt event ( w tym przypadku onchange ale moze byc click i wiele innych) dodawany przez przegladarke
    // ev.target.value - pobieranie wartosci inputa z eventu
    const result = getResult(ev.target.value, param2Element.value);
    refreshResult(result);
};
function handleUpdateParam2(ev) {
    const result = getResult(ev.target.value, param1Element.value);
    refreshResult(result);
};

function getResult(param1, param2) {
    const param1Number  = parseInt(param1); //????
    const param2Number = parseInt(param2);  //????

    if(currentOperation === operations.sum) {
        return param1Number + param2Number;
    }
    else if(currentOperation === operations.minus){
        return param1Number - param2Number;
    }
    else if(currentOperation === operations.multiply){
        return param1Number * param2Number;
    }
    else if(currentOperation === operation.multiply){
        return param1Number / param2Number;
    }
    // todo add more ifs here operations handlers here
}

function refreshResult(result) {
    resultElement.value = result;
};

function sum(ev) {
    currentOperation = operations.sum;
    refreshResult(param1Element.value, param2Element.value);
};

function minus(ev){
    currentOperation = operations.minus;
    refreshResult(param1Element.value, param2Element.value);

};

function multiply(ev){
    currentOperation = operations.multiply;
    refreshResult(param1Element.value, param2Element.value);
};

function divide(ev){
    currentOperation = operations.divide;
    refreshResult(param1Element.value, param2Element.value);
};


// gdzies tam w przegladarce handler (funkcja) jest wywolywana przez skrypt
// kroki jak postepuje przegladarka:
// 1. hej uzytkownik zmienial wartosc inputa
// 2. uzytkownik przed kliknieciem podal mi funkcje ktora chce wywolac na zmiane wartosci
// 3. wiec muszxe wywolac ta funkcje z parametrami ktore sa w standardzie js



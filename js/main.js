"use strict";

const guessButton = document.querySelector(".js-button");
const numberRandom = getRandomNumber (100)
const inputNumber = document.querySelector ('.js-human-number');

// función que genera el juego
function guessNumber(){
    const inputNumberValue= inputNumber.value;
    console.log(inputNumberValue);
    
}
// función que genera el número aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
console.log(`EL número Random es ${numberRandom}`);
 
guessButton.addEventListener ('click', guessNumber);

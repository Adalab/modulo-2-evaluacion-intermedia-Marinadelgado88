'use strict';

const guessButton = document.querySelector('.js-button');
const numberRandom = getRandomNumber(100);
const inputNumber = document.querySelector('.js-human-number');
const clueElement = document.querySelector('.js-clue');
const attempsElement = document.querySelector('.js-attemps');
let numberAttempt = 0;

// función que genera el juego
function guessNumber() {
  const inputNumberValue = inputNumber.value;
  //   console.log(inputNumberValue);
  if (guessNumber === getRandomNumber) {
    // clueElement.innerHTML = 'Has ganado campeona!';
    clueElement.classList.add('Has ganado campeona!');
  } else if (guessNumber >= getRandomNumber) {
    clueElement.innerHTML = 'Demasiado alto.';
  } else if (guessNumber < getRandomNumber) {
    clueElement.innerHTML = 'Demasiado bajo.';
  } else if (guessNumber < 1 || guessNumber > 100) {
    clueElement.innerHTML = 'El número debe estar entre 1 y 100.';
  }
}
// función que genera el número aleatorio
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(`EL número Random es ${numberRandom}`);

// función para que funcione el contador
function handleAttemps() {
  numberAttempt = numberAttempts + 1;
  inputNumber.value = 'Número de intentos: ' + inputNumber;
}

guessButton.addEventListener('click', guessNumber);
guessButton.addEventListener = ('click', handleAttemps);

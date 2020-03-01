'use strict';

console.log( 'JS is ready to party!' );

var scores, roundScore, activePlayer;

scores = [ 0, 0 ];
roundScore = 0;
activePlayer = 1;

document.querySelector( '.dice' ).style.display = 'none';
document.getElementById( 'score-0' ).textContent = '0';
document.getElementById( 'score-1' ).textContent = '0';
document.getElementById( 'current-0' ).textContent = '0';
document.getElementById( 'current-1' ).textContent = '0';

function btn()
{
  // Generate a random number.
  let diceRoll = Math.floor( Math.random() * 6 ) + 1;

  // Display the result.
  let diceDOM = document.querySelector( '.dice' );
  diceDOM.style.display = 'block';
  diceDOM.src = './images/dice-' + diceRoll + '.png';
}

document.querySelector( '.btn-roll' ).addEventListener( 'click', btn );


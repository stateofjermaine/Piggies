'use strict';

console.log( 'JS is ready to party!' );

let scores, roundScore, activePlayer;

scores = [ 0, 0 ];
roundScore = 0;
activePlayer = 1;

console.log( dice );

document.querySelector( '#current-' + activePlayer ).textContent = dice;
document.querySelector( '.dice' ).style.display = 'none';

function btn()
{
  let dice = Math.floor( Math.random() * 6 ) + 1;

}

document.querySelector( '.btn-roll' ).addEventListener( 'click', btn );


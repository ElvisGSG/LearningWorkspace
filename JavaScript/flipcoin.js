
let coin = Math.random();
let InvalidInput = '';
result = ''
score = JSON.parse(localStorage.getItem('score')) || {
  
}

function playGame(guess){

  InvalidInput = guess !== 'Heads' && guess !== 'Tails' ? alert('Invalid input!') : guess === 'Heads' || guess === 'Tails' ? alert('Valid input!') : InvalidInput;

  coin <= 0.5 || coin > 1 ? result = 'Heads' : coin > 0.5 || coin <= 1 ? result = 'Tails' : InvalidInput;
  console.log(alert(result));

  guess === result ? score.wins++ : guess !== result ? score.losses++ : InvalidInput;

  alert(`You guessed: ${guess}, \n Coin flip result: ${result}, \n Wins: ${score.wins}, Losses: ${score.losses}`);

  localStorage.setItem('score', JSON.stringify(score));

}


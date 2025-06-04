

console.log('hello');

let game = true;

console.log(typeof(game));

/*ComputerMove*/
      function pickComputerMove() {
        const random = Math.random();

          let computerMove = '';

          if (random >= 0 && random < 1/3)
          {
            computerMove = 'rock';
          } else if (random >= 1/3 && random < 2/3)
          {
            computerMove = 'paper';
          } else if (random >= 2/3 && random < 1)
          {
            computerMove = 'sissors';
          } 
            return computerMove;  
        }

/*rock, paper, scissors*/
      function playgame(PlayerMove) {
        computerMove = pickComputerMove();
      
        let result = '';
        
        if (PlayerMove === 'sissors') {
          if (computerMove === 'sissors')
          {
            result = 'draw';
          } else if (computerMove === 'rock')
          {
            result = 'you lose';
          } else if (computerMove === 'paper')
          {
            result = 'you win';
          }

        } else if (PlayerMove === 'rock') {
            if (computerMove === 'sissors')
            {
              result = 'you win';
            } else if (computerMove === 'rock')
            {
              result = 'draw';
            } else if (computerMove === 'paper')
            {
              result = 'you lose';
            } 
            
        } else if (PlayerMove === 'paper') {
            if (computerMove === 'sissors')
            {
              result = 'you lose';
            } else if (computerMove === 'rock')
            {
              result = 'you win';
            } else if (computerMove === 'paper')
            {
              result = 'draw';
            } 
        }



            alert(`you picked ${PlayerMove}, computer picked ${computerMove}, ${result}`);
        }




// CSS code moved to a separate file
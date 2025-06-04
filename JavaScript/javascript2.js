      // This is a simple calculator that can perform basic arithmetic operations.
      // It uses the eval function to evaluate the expression entered by the user.
      // The calculator supports addition, subtraction, multiplication, and division.
      // The user can enter numbers and operators using buttons.
      // The result is displayed in the console.
    let calculation = JSON.parse(localStorage.getItem('calculation')) || 0;

      function calculate(number) {
        
        if (number === 1) {
          calculation += '1';
          console.log(calculation)
        } else if (number === 2) {
          calculation += '2';
          console.log(calculation)
        } else if (number === 3) {
          calculation += '3';
          console.log(calculation)
        } else if (number === 4) {
          calculation += '4';
          console.log(calculation)
        } else if (number === 5) {
          calculation += '5';
          console.log(calculation)
        } else if (number === 6) {
          calculation += '6';
          console.log(calculation)
        } else if (number === 7) {
          calculation += '7';
          console.log(calculation)
        } else if (number === 8) {
          calculation += '8';
          console.log(calculation)
        } else if (number === 9) {
          calculation += '9';
          console.log(calculation)
        } else if (number === '=') {
          calculation = eval(calculation);
          console.log(calculation)
        }
        else if (number === 0) {
          calculation += '0';
          console.log(calculation)
        }
        else if (number === '+'){
          calculation += ' + ';
          console.log(calculation)
        }
        else if (number === '*'){
          calculation += ' * ';
          console.log(calculation)
        }
        else if (number === '-'){
          calculation += ' - ';
          console.log(calculation)
        }
        else if (number === '/'){
          calculation += ' / ';
          console.log(calculation)
        }
        else if (number === 'c'){
          calculation = '';
          console.log('cleared')
        }
        else if (number === 'r'){
          console.log(calculation)
        }
        else {
          console.log('Invalid input');
        }
          localStorage.setItem('calculation', JSON.stringify(calculation));

        document.querySelector('.js-result').innerHTML = calculation;
      }

      document.querySelector('.js-result').innerHTML = calculation;
    


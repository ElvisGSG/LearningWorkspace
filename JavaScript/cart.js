      
      MaxQuantity = 10;
      MinQuantity = 0;
      quantity = JSON.parse(localStorage.getItem('cartQuantity')) || 0;

      
      function UpdateCartQuantity(cartQuantity) {
      
      if (cartQuantity === 1) {
        quantity += 1;
        console.log(`cart Quantity: ${quantity}`);
      }
      else if (cartQuantity === 2) {
        quantity += 2;
        console.log(`cart Quantity: ${quantity}`);
      }
      else if (cartQuantity === 3) {
        quantity += 3;
        console.log(`cart Quantity: ${quantity}`);
      }
      else if (cartQuantity === 4) {
        quantity -= 4;
        console.log(`cart Quantity: ${quantity}`);
      }
      else if (cartQuantity === 0) {
        quantity = 0;
        console.log(`cart Quantity: ${quantity}`);
        console.log('cart was reset.')
      }
      else if (cartQuantity === 'show quantity'){
        console.log(`cart Quantity: ${quantity}`);
      }
      

      if (quantity >= MaxQuantity) {
        console.log(alert('Cart is full!'));
      }
      else if (quantity <= MinQuantity) {
        console.log(alert('Cart cannot be 1 or less!'));
      }
       
      document.querySelector('p').innerHTML = `Cart Quantity: ${quantity}`;

      localStorage.setItem('cartQuantity',JSON.stringify(quantity));

    }

    document.querySelector('p').innerHTML = `Cart Quantity: ${quantity}`;

console.log(document.querySelector('.js-button').classList.contains('js-button'))
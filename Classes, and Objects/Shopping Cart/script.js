let cart = [];
let total = 0;

function addToCart(description, value) {
  cart.push({ description, value });
  total += value;
  updateCart();
}

function removeFromCart(index) {
  total -= cart[index].value;
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.description} - $${item.value}`;
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => removeFromCart(index));
    
    li.appendChild(removeButton);
    cartItemsElement.appendChild(li);
  });
  document.getElementById('total').textContent = total;
}

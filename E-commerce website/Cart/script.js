document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [
        { id: 1, name: 'Nike Shoe 1', price: 16999.99, quantity: 1, image: 'shoes2.png' },
        { id: 2, name: 'Nike Shoe 2', price: 8999.99, quantity: 2, image: 'shoes1.png' }
        // Add more items as needed
    ];

    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    function renderCartItems() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cartItems.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');

            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h5>${item.name}</h5>
                </div>
                <div class="cart-item-price">${item.price.toFixed(2)} .Rs</div>
                <div class="cart-item-quantity">Qty: ${item.quantity}</div>
                <button class="btn btn-danger cart-item-remove" data-id="${item.id}">Remove</button>
            `;

            cartItemsContainer.appendChild(cartItemElement);
            total += item.price * item.quantity;
        });

        cartTotalElement.textContent = total.toFixed(2);
    }

    function removeCartItem(itemId) {
        const itemIndex = cartItems.findIndex(item => item.id === itemId);
        if (itemIndex > -1) {
            cartItems.splice(itemIndex, 1);
            renderCartItems();
        }
    }

    cartItemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('cart-item-remove')) {
            const itemId = parseInt(event.target.getAttribute('data-id'), 10);
            removeCartItem(itemId);
        }
    });

    function checkout() {
        alert('Proceeding to checkout!');
    }

    renderCartItems();
});
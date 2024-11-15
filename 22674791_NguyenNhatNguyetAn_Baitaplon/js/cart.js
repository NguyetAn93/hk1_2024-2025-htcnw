// Lấy giỏ hàng từ LocalStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; 

    let totalPrice = 0; 
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <h4>${item.name}</h4>
            <p>Giá: ${item.price.toLocaleString()} VNĐ</p>
            <button onclick="removeFromCart(${index})">Xóa</button>
        `;
        cartItemsContainer.appendChild(itemDiv);
        totalPrice += item.price; 
    });

    document.getElementById('total').innerText = totalPrice.toLocaleString() + ' VNĐ';
}

function removeFromCart(index) {
    cart.splice(index, 1); 
    localStorage.setItem('cart', JSON.stringify(cart)); 
    displayCart(); 
}

function checkout() {
    window.location.href = 'thanh-toan.html'; 
}

displayCart();

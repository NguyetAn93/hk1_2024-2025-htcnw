// main.js
function registerUser() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Lưu thông tin người dùng vào LocalStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email); 
    localStorage.setItem('password', password);
    alert('Đăng ký thành công!');
    window.location.href = 'dang-nhap.html';
}

function loginUser() {
    let inputEmail = document.getElementById('username').value; 
    let inputPassword = document.getElementById('password').value;

    // Lấy thông tin đã đăng ký từ LocalStorage
    let storedEmail = localStorage.getItem('email'); 
    let storedPassword = localStorage.getItem('password');

    if (inputEmail === storedEmail && inputPassword === storedPassword) {
        alert('Đăng nhập thành công!');
        window.location.href = 'index.html';
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
}

function saveCartItem(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Sản phẩm đã được thêm vào giỏ hàng!');
}




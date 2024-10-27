import { renderProducts } from "./renderProduct.js";
import { products } from "../data/data.js";

var cartProducts = JSON.parse(localStorage.getItem("dataCart")) || [];
const cart = document.querySelector('.cart-summary__items')
const recommendedContainer = document.querySelector('.recommended');
let recommendedProducts = products.filter(product => product.tags.includes('recommended'))
let discount = 0; 
let totalPayment;

document.addEventListener('DOMContentLoaded', ()=> {
    renderCart();
    updateCartTotal();
    renderProducts(recommendedContainer, recommendedProducts);
})

function formattedValue (value) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(value);
}

function renderCart() {
    if(cartProducts.length > 0) {
        document.querySelector('.cart .row').style.display = '';
        document.querySelector('.cart-empty').style.display = 'none';

        let cartItemsHTML  =  cartProducts.map(product => {
            return`<div class="cart-summary__item">
                        <div>
                            <img src="${product.img}" alt="${product.name}">
                            <p>${product.name}</p>
                        </div>
                        <div><p>${formattedValue(product.price)}</p></div>
                        <div class="cart-summary__item-qty">
                            <i data-id="${product.id}" class="btnDecrease fa-solid fa-minus"></i>
                            <span>${product.quantity}</span>
                            <i data-id="${product.id}" class="btnIncrease fa-solid fa-plus"></i>
                        </div>
                        <div><p class="cart-summary__item-total">${formattedValue(product.price * product.quantity)}</p></div>
                        <div>
                            <input type="checkbox" data-id="${product.id}" class="cart-summary__checkbox">
                        </div>
                    </div>`
        }).join('')
        cart.innerHTML = cartItemsHTML;
        updateCartQuantity()

        document.querySelectorAll('.btnDecrease').forEach(btn => btn.addEventListener('click', updateProductQuantity));
        document.querySelectorAll('.btnIncrease').forEach(btn => btn.addEventListener('click', updateProductQuantity));
        document.querySelectorAll('.cart-summary__checkbox').forEach(checkbox => checkbox.addEventListener('change', handleCheckboxChange));
    }else {
        document.querySelector('.cart .row').style.display = 'none';
        document.querySelector('.cart-empty').style.display = 'block';
    }
}

function updateCartQuantity () {
    var count = 0;
    for(let i = 0; i < cartProducts.length; i++) {
        count += cartProducts[i].quantity;
    }
    const cartCount = document.querySelector('.cart-count');
    cartCount.style.display = count > 0 ? 'inline-block' : 'none';
    cartCount.innerHTML = count;
}

// áp dụng và kiểm tra xem voucher có đúng không
function checkVoucher() {
    var saveTime = localStorage.getItem("saveTime") || false;
    if (!saveTime) {
        alert("Chú ý: Thời gian khuyến mãi đã hết !!!");
        return;
    }

    var currDate = new Date();
    var distance = Date.parse(saveTime) - Date.parse(currDate);
    if (distance < 0) {
        localStorage.removeItem("saveTime");
        alert("Chú ý: Thời gian khuyến mãi đã hết !!!");
        return;
    }

    var vouchers = {
        'SKD23': 20000,
        'DFA33': 30000,
        'SS102': 40000
    }
    const voucherCode = document.getElementById('cart-voucher__input').value;
    if(vouchers.hasOwnProperty(voucherCode)) {
        discount = -vouchers[voucherCode];
        alert('Áp dụng voucher thành công!')
    }else {
        discount = 0;
        alert('Mã khuyến mãi không hợp lệ!');
    }
    updateCartTotal();
}

function updateCartTotal() {
    var shippingFee  = 20000;
    var total = cartProducts.reduce((sum, product) => sum + (product.quantity * product.price), 0);
    totalPayment = total + shippingFee  + discount
    console.log(totalPayment)
    document.getElementById('shipping-fee').innerText = formattedValue(shippingFee);
    document.getElementById('total-price').innerText = formattedValue(total);
    document.getElementById('discount').innerText = formattedValue(discount);
    document.getElementById('total-payment').innerText = formattedValue(totalPayment)
}

// tăng giảm số lượng sản phẩm khi nhấn nút
function updateProductQuantity(event) {
    const isDecreaseButton = event.target.classList.contains('btnDecrease')
    const isIncreaseButton = event.target.classList.contains('btnIncrease')
    const itemQty = event.target.parentElement.querySelector("span");
    const idSP = event.target.getAttribute('data-id');
    const product = cartProducts.find(product => product.id == idSP);

    if (product) {
        if (isDecreaseButton && product.quantity > 1) {
            product.quantity--;
        } else if (isIncreaseButton) {
            product.quantity++;
        }

        itemQty.innerHTML = product.quantity;
        renderCart()
        updateCartQuantity();
        updateCartTotal()
    }
}

//delete button 
function DeleteSelectedProduct() {
    const checkBoxCheckeds = cart.querySelectorAll('.cart-summary__checkbox:checked');
    
    checkBoxCheckeds.forEach(checkBoxChecked => {
        const cartItem = checkBoxChecked.closest('.cart-summary__item');
        var idSP = checkBoxChecked.getAttribute('data-id');

        cartProducts = cartProducts.filter(product => product.id != idSP);
        cartItem.remove();
    });

    document.querySelector('.select-all-checkbox').checked = false;

    localStorage.setItem("dataCart", JSON.stringify(cartProducts));
    cartProducts = JSON.parse(localStorage.getItem("dataCart")) || [];
    updateCartQuantity();
    updateCartTotal()
    renderCart();
}


function handleCheckboxChange(event) {
    const selectAllCheckbox = document.querySelector('.select-all-checkbox');
    const allCheckboxes = document.querySelectorAll('.cart-summary__checkbox');
    if (event.target.classList.contains('select-all-checkbox')) {
        allCheckboxes.forEach(checkbox => {
            checkbox.checked = selectAllCheckbox.checked;
        });
    } else {
        const allChecked = Array.from(allCheckboxes).every(checkbox => checkbox.checked);
        selectAllCheckbox.checked = allChecked;
    }
    updateSelectedCount();
}

function updateSelectedCount() {
    const selectedCount = document.querySelector('.selectedCount'); 
    let count = document.querySelectorAll('.cart-summary__checkbox:checked').length || 0;
    selectedCount.innerHTML = count;
}

function checkout() {
    if (cartProducts.length === 0) {
        alert('Giỏ hàng trống!');
        return;
    }

    // Hiển thị thông báo thanh toán thành công và tổng số tiền
    alert('Thanh toán thành công! Tổng số tiền: ' + formattedValue(totalPayment));

    // Xóa giỏ hàng
    cartProducts = [];
    localStorage.setItem('dataCart', JSON.stringify(cartProducts));
    renderCart();
    updateCartQuantity();
} 

function productCart(id, img, name, price, quantity) {
    // Tạo lớp Product trong giỏ hàng
    this.id = id;
    this.img = img;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

function addToCart(idSP, category) {
    var isInCart = false;
    console.log(cartProducts)
    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    for (let i = 0; i < cartProducts.length; i++) {
        if (cartProducts[i].id == idSP) {
            cartProducts[i].quantity++;
            isInCart = true;
            break;
        }
    }

    // Nếu sản phẩm chưa có trong giỏ hàng
    if (!isInCart) {
        let products;
        switch (category){
            case 'featured':
                products = featuredProducts;
                break;
            case 'sale':
                products = saleProducts;
                break;
            case 'recommended':
                products = recommendedProducts
                break;
            default:
                console.error("Không thể tìm thấy dữ liệu " + category);
                break;
        }

        // Tìm sản phẩm theo ID trong mảng category
        let product = products.find(product => product.id == idSP);
        // Nếu tìm thấy sản phẩm, thêm vào giỏ hàng
        var newProductCart = new productCart(product.id, product.image, product.name, product.price, 1);
        cartProducts.push(newProductCart);
    }

    // Lưu giỏ hàng vào localStorage
    localStorage.setItem("dataCart", JSON.stringify(cartProducts));
    cartProducts = JSON.parse(localStorage.getItem("dataCart"))
    renderCart()
    // Cập nhật tổng số lượng trong giỏ hàng
    updateCartQuantity();
    updateCartTotal()
}

document.querySelector('.select-all-checkbox').addEventListener('change', handleCheckboxChange);
document.getElementById('checkoutButton').addEventListener('click', checkout);
document.getElementById('BtnVoucher').addEventListener('click', checkVoucher);
document.getElementById('deleteSelectedBtn').addEventListener('click', DeleteSelectedProduct);
const productWraps = document.querySelectorAll('.product-list__wrap'); 
productWraps.forEach(productWrap => {
    productWrap.addEventListener('click', (event) => {
        if (event.target.classList.contains('buy-button')) {
            const category = productWrap.getAttribute("data-category");
            const idSP = event.target.getAttribute('data-id');
            addToCart(idSP, category);
        }
    });
});
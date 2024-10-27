import { carousel } from "./carousel.js";
import { products  } from "../data/data.js";
import { renderProducts } from "./renderProduct.js";

var perPage = 4;
const featuredProducts = products.filter(product => product.tags.includes("featured"));
const saleProducts = products.filter(product => product.tags.includes("sale"));
var cartProducts;

productDisplay();
checkCart();

function productDisplay() {
    const featuredContainer = document.querySelector('.products-container[data-category="featured"]'); // đừng thay đổi, cần container để set button ở carousrl.js
    const saleContainer = document.querySelector('.products-container[data-category="sale"]');

    renderProducts(featuredContainer, featuredProducts.filter(product => product.category == "men"));
    renderProducts(saleContainer, saleProducts.filter(product => product.category == "men"));

    updateData(featuredContainer, featuredProducts);
    updateData(saleContainer, saleProducts)
};

function updateData(container, data) {
    //  lấy button
    const buttonMale = container.querySelector("#button-male")
    const buttonFemale  = container.querySelector("#button-female")

    carousel(container, perPage);// khởi tạo navellipses

    buttonMale.addEventListener('click',function() {
        if(!buttonMale.classList.contains('button--active')) {
            // thay đổi class active
            buttonFemale.classList.remove('button--active');
            buttonMale.classList.add("button--active");

            renderProducts(container, data.filter(product => product.category == "men"));// update dữ liệu
            carousel(container, perPage); // reset lại carousel
        }
    })

    buttonFemale.addEventListener('click',function() {
        if(!buttonFemale.classList.contains('button--active')) {
            buttonMale.classList.remove('button--active');
            buttonFemale.classList.add("button--active");
            renderProducts(container, data.filter(product => product.category == "women")); 
            carousel(container, perPage);
        }
    })

}

function checkCart() {
    cartProducts = JSON.parse(localStorage.getItem("dataCart")) || []
    updateCartQuantity()
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
    // Cập nhật tổng số lượng trong giỏ hàng
    updateCartQuantity();
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

import { carousel } from "./carousel.js";
import { rates } from "../data/data.js";

rateDisplay()

export function rateDisplay() {
    const perPage = 1; // số item cho 1 trang.
    const rateWrap = document.querySelector('.rate__wrap');
    const rateContainer = document.querySelector('.rate');

    var str = rates.map(rate => {
        return `<div class="rate-item">
            <div class="col l-o-1 l-5">
                <div class="rate-item__content">
                    <div class="rate-item__content-stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i> 
                    </div>
                    <h3 class="rate-item__content-quotes">${rate.review}</h3>
                    <a href="#" class="rate-item__content-name-product">- ${rate.productName} -</a>
                </div>
            </div>
            <div class="col l-o-1 l-4">
                <img class="rate-item__content-img" src="${rate.productImage}" alt="${rate.productName}">
            </div>
        </div>`
    }).join('');

    rateWrap.innerHTML = str;
    carousel(rateContainer, perPage)
}

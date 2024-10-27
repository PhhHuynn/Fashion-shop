

function formattedValue (value) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(value);
}

export function renderProducts(container ,products) {
    if(container == null) {
        return console.error("container không tồn tại")
    }
    const productWrap = container.querySelector('.product-list__wrap');
    // reset khi đổi dữ liệu
    productWrap.innerHTML = ''
    products.forEach(product => {
        let saleOffElement = '';
        let oldPriceElement  = '';

        if(product.salePercentage != null) {
            product.salePrice = product.price - ((product.price / 100 ) * product.salePercentage);
            saleOffElement = `<div class="sale-off">${product.salePercentage}%</div>`
            oldPriceElement = `<span class="old-price">${formattedValue(product.price)}</span>`
        }else {
            product.salePrice = product.price;
        }
        
        let str = `
            <div class="col l-3 m-6 c-6">   
                <div class="item">
                    ${saleOffElement}
                    <div class="img-wrap"><img class="img" src="${product.image}" onerror="handleImageError(this)" alt="${product.name}"/></div>
                    <div class="content">
                        <div class="content__row">
                              <h4 class="name">${product.name}</h4>
                            <div>
                                <h4 class="price">${formattedValue(product.salePrice)}<br>${oldPriceElement}</h4>
                            </div>
                        </div>
                        <div class="content__row">
                            <div class="color__container">
                                <h4 class="color__title">Chọn màu</h4>
                                <div class="color__options">
                                    <div class="color__option" style="background-color: #39362E;"></div>
                                    <div class="color__option" style="background-color: #588f58;"></div>
                                    <div class="color__option" style="background-color: #8686ca;"></div>
                                </div>
                            </div>
                            <button class="buy-button" data-id="${product.id}" data-category="">Mua</button>
                        </div>
                    </div>
                </div>
            </div>`
        
        productWrap.innerHTML += str;
    })
}




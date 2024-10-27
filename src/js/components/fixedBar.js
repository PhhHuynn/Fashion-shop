export function loadFixedBar () {
    const fixedBar = document.getElementById('fixed-bar');
    fixedBar.innerHTML = `<div id="top-banner">
            <a href="#">Ưu đãi lớn mùa hè - Giảm giá lên đến 60%!</a>
        </div>
        <header class="header">
            <ul class="header__items">
                <li class="header__item"><a href="home.html" class="header__link ">Trang chủ</a></li>
                <li class="header__item"><a href="" class="header__link">Sản phẩm</a></li>
                <li class="header__item"><a href="" class="header__link">Về chúng tôi</a></li>
                <li class="header__item"><a href="" class="header__link">Liên hệ</a></li>
            </ul>
            <img src="src/img/logo.png" alt="logo của TaH" class="header__logo">
            <ul class="header__items">
                <li class="header__item">
                    <a href="" class="header__link">    
                        <i class="header__icon fa-solid fa-magnifying-glass"></i>
                    </a>
                </li>
                <li class="header__item">
                    <a href="" class="header__link">
                        <i class="header__icon fa-regular fa-user"></i></i>
                    </a>
                </li>
                <li class="header__item">
                    <a class="header__link" href="cart.html">
                        <i class="header__icon fa-solid fa-bag-shopping"></i>
                        <p class="cart-count"></p>
                    </a>
                </li>
            </ul>
        </header>

        <nav class="nav-header">
            <ul class="nav-header__items">  
                <li class="nav-header__item "><a href="" class="nav-header__link">Mới ra mắt</a></li>
                <li class="nav-header__item"><a href="" class="nav-header__link">Bộ sưu tập</a></li>
                <li class="nav-header__item"><a href="" class="nav-header__link">Đồ nam</a></li>
                <li class="nav-header__item"><a href="" class="nav-header__link">Đồ nữ</a></li>
                <li class="nav-header__item"><a href="sale_time.html" class="nav-header__link">Thời gian săn sale</a></li>
                <li class="nav-header__item"><a href="" class="nav-header__link nav-header__link--special">Khuyến mãi!</a></li>
            </ul>
        </nav>`

    document.body.prepend(fixedBar);

    const currentPath = window.location.pathname;
    const headerLinks = document.querySelectorAll('.header__link');
    headerLinks.forEach(link => {
        if(("/" + link.getAttribute('href')) == currentPath) {
            link.parentElement.classList.add('header__item--active')
        }
    })
}


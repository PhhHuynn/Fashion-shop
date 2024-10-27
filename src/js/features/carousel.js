export function carousel(container, perPage) {
    // Lấy các phần tử của sản phẩm nổi bật
    const carousel = container.querySelector('.row').children[0]; // wrap
    const leftButton = container.querySelector('#button-left');
    const rightButton = container.querySelector('#button-right');
    const navEllipses = container.querySelector('.nav-ellipses');
    //reset các biến 
    var currentPage = 0;
    navEllipses.innerHTML = '';
    carousel.style.transform = `translateX(0)`;

    // tạo các ellipses
    function createEllipses(navEllipses, totalPages) {
        for (let i = 0; i < totalPages; i++) {
            let ellipse = document.createElement("div");
            ellipse.classList.add("ellipse");
            navEllipses.appendChild(ellipse)
        }
    }

    // Hàm cập nhật carousel
    function updateCarousel(carousel, currentPage) {
        const offset = -currentPage * carousel.offsetWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    // cập nhập ellipses khi chuyển trang
    function updateNavEllipses(navEllipses, currentPage) {
        
        const ellipses =  Array.from(navEllipses.children);
        ellipses.forEach(ellipse => {
            if(ellipse.classList.contains("ellipse--now")) {
                ellipse.classList.remove("ellipse--now")
            }
        }); 
        // bị báo lỗi thì chỉ có thể lỗi ở việc tải trang
        if(ellipses.length != 0) {
            ellipses[currentPage].classList.add("ellipse--now")
        }else {
            console.error("không có phần tử trong navEllipses")
        }
    }
    
 
    // Hàm xử lý sự kiện cho các nút điều khiển
    function setupCarouselControls(carousel, leftButton, rightButton, navEllipses) {
        const totalPages = Math.ceil(carousel.children.length / perPage);
        createEllipses(navEllipses, totalPages);
        // khởi tạo nav ellipses
        updateNavEllipses(navEllipses, currentPage);
        // khi nhấn button left
        leftButton.addEventListener('click', () => {
            if (currentPage > 0) {
                currentPage--;
                // update
                updateCarousel(carousel, currentPage);
                updateNavEllipses(navEllipses, currentPage);
            }
        });

        // khi nhấn button right
        rightButton.addEventListener('click', () => {
            if (currentPage < totalPages - 1) {
                currentPage++;
                // update
                updateCarousel(carousel, currentPage);
                updateNavEllipses(navEllipses, currentPage);
            }
        });
    }

    // Thiết lập điều khiển cho cả hai carousel
    setupCarouselControls(carousel, leftButton, rightButton, navEllipses);
};


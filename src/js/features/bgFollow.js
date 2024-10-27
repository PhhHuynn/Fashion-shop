function updateBackground() {
    let mouseX = 0, mouseY = 0;
    let destX = 0, destY = 0;
    let inertia = 0.07;

    document.addEventListener('mousemove', function(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    function animate() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // cập nhập khoảng cách của bg để tới gần hơn với mouse
        destX += (mouseX - destX) * inertia;
        destY += (mouseY - destY) * inertia;


        // hiệu ứng parallax, di chuyển nền và nội dung theo các tốc độ khác nhau
        const offsetX = -((destX / windowWidth) - 0.5) * 100; // Tăng độ nhạy
        const offsetY = -((destY / windowHeight) - 0.5) * 100; // Tăng độ nhạy
        
        const background = document.querySelector('.background');
        if (background) {
            background.style.backgroundPosition = `calc(50% + ${offsetX}px) calc(50% + ${offsetY}px)`;
        }

        requestAnimationFrame(animate);
    }

    animate();
}

updateBackground();

loadHome();
checkSaleTimeIsEmpty();


var countdown;
var countdownDate; // tạo biến chứa tgian kết thúc khuyến mãi

function checkSaleTimeIsEmpty() {
    // kiểm tra xem đã thiết lập tgian khuyến mãi chưa
    var saveTime = localStorage.getItem('saveTime') || false;
    if(!saveTime) {
        document.querySelector('.countdown').style.display = 'none'
        return;
    }
    // bởi vì localStorage trả về chuỗi nên cần chuyển về int
    countdownDate = parseInt(saveTime, 10);

    // gọi hàm để cập nhập liên tục 
    countdown = setInterval(updateSaleTime, 1000);
}

// hàm tính tgian  còn lại và in ra
function updateSaleTime () {
    const now = Date.now();
    const distance = countdownDate - now;
    
    if(distance < 0) {
        clearInterval(countdown);
        document.querySelector('.countdown').style.display = 'none'
        localStorage.removeItem("saveTime");
        return;
    }

    // 1000ms = 1s, (1000 * 60 * 60 * 24): số ms có trong 1 ngày 
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    // distance % (1000 * 60 * 60 * 24): lấy SỐ DƯ (giờ còn lại)
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// home.html
function loadHome() {
    const countdownElement = document.querySelector('.countdown');

    // Kiểm tra nếu phần tử không tồn tại, trả về ngay lập tức
    if (!countdownElement) {
        return;
    }

    countdownElement.innerHTML = `
        <p>Ưu đãi kết thúc sau</p>
        <div class="time-box">
            <span id="days" class="numbers"></span>
            <div class="label">Ngày</div>
        </div>

        <div class="time-box">
            <span id="hours" class="numbers"></span>
            <div class="label">Giờ</div>
        </div>

        <div class="time-box">
            <span id="minutes" class="numbers"></span>
            <div class="label">Phút</div>
        </div>

        <div class="time-box">
            <span id="seconds" class="numbers"></span>
            <div class="label">Giây</div>
        </div>
        <button class="getVoucherbtn">
            Nhận voucher ở đây
            <i class="fa-solid fa-ticket"></i>
            <ul class="voucher-list">
                <li class="voucher-item">SS102 (40.000đ)</li>
                <li class="voucher-item">DFA33 (30.000đ)</li>
                <li class="voucher-item">SKD23 (20.000đ)</li>
            </ul>
        </button>`;
}

// thiết lập khi nhấn button Áp dụng
function saveSaleTime() {
    const dateInput = document.getElementById('dateInput').value;
    if(!dateInput) {
        alert('Vui lòng chọn một ngày!')
        return
    }
    // chuyển giá trị mm/dd/yyyy thành đối tượng date
    var countdownDate = new Date(dateInput).getTime();

    if(countdownDate <= Date.now()) {
        alert('Phải nhập 1 ngày ở tương lai!');
        return
    }

    localStorage.setItem('saveTime', countdownDate)
    alert('Thiết lập thời gian khuyến mãi thành công')
}
// dữ liệu sản phẩm
function Product(id, name, price, image, salePercentage, colors, category, tags) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.salePercentage = salePercentage;
    this.colors = colors;
    this.category = category
    this.tags = tags
}

const products = [
        new Product (
            1,
            "Áo Thun Nam Trơn",
            200000,
            "https://bizweb.dktcdn.net/thumb/1024x1024/100/460/639/products/10-3156c503-a149-4784-9195-d9eab4491eaa.png?v=1668654734560",
            20,
            ["#FFFFFF", "#000000", "#FF5733"],
            "men",
            ["featured", "sale", "recommended"]
        ),
        new Product (
            2,
            "Quần Jeans Skinny",
            350000,
            "https://th.bing.com/th/id/OIP.qRcjrKU5V8jfrFBNGiECZAHaJ3?rs=1&pid=ImgDetMain",
            null,
            ["#0000FF", "#008000", "#4B0082"],
            "men",
            ["featured", "sale", "recommended"]
        ),
        new Product (
            3,
            "Áo Sơ Mi tay dài cổ V",
            250000,
            "https://th.bing.com/th/id/OIP.C5LYdaDPyMm1Mv-rt5UYOgHaHa?w=736&h=736&rs=1&pid=ImgDetMain",
            null,
            ["#FFFFFF", "#FFD700", "#00008B"],
            "men",
            ["featured", "sale"]
        ),
        new Product (
            4,
            "Quần Short Thể Thao",
            150000,
            "https://bulbal.vn/wp-content/uploads/2022/01/QUAN-SHORT-THE-THAO-BULBAL-WASO-II-CHUOI-scaled.jpg",
            30,
            ["#FF4500", "#2E8B57", "#B22222"],
            "men",
            ["featured", "sale", "recommended"]
        ),
        new Product (
            5,
            "Áo Khoác Nam",
            500000,
            "https://ae01.alicdn.com/kf/H87290200f2d14f158c71cb0203a2460dB/2020-Brand-Mens-New-Fall-Winter-Down-Jacket-Long-Sleeve-Hooded-Clothes-Dust-Coat-Korean-Style.jpg",
            null,
            ["#696969", "#1E90FF", "#800080"],
            "men",
            ["featured", "sale"]
        ),
        new Product (
            6,
            "áo sơ mi basic trơn tay ngắn",
            600000,
            "https://th.bing.com/th/id/OIP.xn3WyaCN7j-vRW5jZNrUcQAAAA?rs=1&pid=ImgDetMain",
            60,
            ["#FFFFFF", "#A52A2A", "#000000"],
            "men",
            ["featured", "sale", "recommended"]
        ),
        new Product (
            7,
            "Áo hoodie Drew nỉ bông mềm mại cao cấp",
            400000,
            "https://dony.vn/wp-content/uploads/2022/01/ao-hoodie-nam-1.jpg",
            70,
            ["#000000", "#FF8C00", "#FF1493"],
            "men",
            ["featured", "sale", "recommended"]
        ),
        new Product (
            8,
            "Bộ Đồ Thể Thao nam mùa thu đông",
            700000,
            "https://ae01.alicdn.com/kf/HTB1eQ7KPVXXXXXYXXXXq6xXFXXXp/Men-sports-training-sets-men-zipper-tracksuits-male-sportswear-adult-coat-and-pants-autumn-winter-styles.jpg",
            null,
            ["#228B22", "#FF00FF", "#8B4513"],
            "men",
            ["featured", "sale"]
        ),
        new Product (
            9,
            "Váy Đầm Dạ Hội",
            500000,
            "https://damvaydep.net/image/dam-da-hoi-dai-xe-ta-tay-canh-doi-cuc-xinh-mau-den-vang-70103j.jpg",
            null,
            ["#FFD700", "#FF69B4", "#4B0082"],
            "women",
            ["featured", "sale"]
        ),
        new Product (
            10,
            "Áo Khoác Dạ",
            700000,
            "https://scontent.webpluscnd.net/photos-df/a-0/1912-2183068-1/ao-khoac-da-cao-cap-uniqlo--ww08.png?atk=00a66ab1775233783c2b78fbf668bcb6",
            25,
            ["#000000", "#FFFFFF", "#808080"],
            "women",
            ["featured", "sale", "recommended"]
        ),
        new Product (
            11,
            "áo trễ vai caro xanh",
            400000,
            "http://media.ttxt.vn/Upload/2019-01/14124553370M32L8378630SV1.jpg",
            null,
            ["#0000FF", "#008000", "#4B0082"],
            "women",
            ["featured", "sale", "recommended"]
        ),
        new Product (
            12,
            "Áo Thun Nữ Trơn",
            150000,
            "https://bizweb.dktcdn.net/thumb/1024x1024/100/454/935/products/ao-thun-trang-tron-co-tron-nam-nu-form-rong-kieu-unisex-20.jpg?v=1682129646697",
            null,
            ["#FFFFFF", "#000000", "#FF5733"],
            "women",
            ["featured", "sale", "recommended"]
        ),
        new Product (
            13,
            "Chân Váy Bút Chì",
            350000,
            "https://pos.nvncdn.com/80a557-93682/ps/20220912_94d3TkuMpr0fXSREhhj9r4CS.JPG",
            null,
            ["#FF6347", "#000000", "#FFD700"],
            "women",
            ["featured", "sale"]
        ),
        new Product (
            14,
            "Áo Sơ Mi Nữ",
            250000,
            "https://cache.maysoichivang.com/wp-content/uploads/2021/12/ao-so-mi-nu-trang-phoi-no.jpg",
            10,
            ["#FFFFFF", "#000000", "#FF69B4"],
            "women",
            ["featured", "sale"]
        ),
        new Product (
            15,
            "Áo Croptop Rộng có Chữ",
            250000,
            "https://camijeans.vn/wp-content/uploads/7-43.jpg",
            10,
            ["#FFFFFF", "#000000", "#FF69B4"],
            "women",
            ["featured", "sale"]
        ),
        new Product(
            16,
            "Áo Len Dáng Dài",
            250000,
            "https://bizweb.dktcdn.net/100/438/408/files/ao-len-nu-form-rong-dang-dai-yodyvn.jpg?v=1660794292962",
            10,
            ["#FFFFFF", "#000000", "#FF69B4"],
            "women",
            ["featured", "sale"]
        )
];
  

    

// dữ liệu đánh giá
function Rate(reviewText, imageUrl, productName) {
    this.review = reviewText,
    this.productImage = imageUrl,
    this.productName = productName
}

const rates = [
    new Rate(
        'Áo thun chất lượng tốt, màu sắc đẹp và vừa vặn. Sẽ mua thêm sản phẩm từ cửa hàng này.',
        'https://luvinus.com/wp-content/uploads/2022/12/tao-dang-chup-anh-nam-trong-quan-cafe-9.jpg',
        'Áo len nam tay dài mùa thu đông 2024'
    ),
    new Rate(
        'Đầm rất đẹp, phù hợp với môi trường công sở. Chất liệu vải mềm mại, thoải mái khi mặc.',
        'https://cf.shopee.vn/file/6abe338531ede6549a7aa9ac9898692b',
        'Đầm công sở nữ phối cổ nơ trắng'
    ),
    new Rate(
        'Quần jeans vừa vặn, chất liệu co giãn tốt. Giao hàng nhanh chóng, đóng gói cẩn thận.',
        'https://vn-test-11.slatic.net/p/9cf204693a883ba2e6bfccad10781844.jpg',
        'Quần jeans nam slim fit'
    ),
    new Rate(
        'Áo khoác giữ ấm tốt, kiểu dáng thời trang. Rất hài lòng với sản phẩm này.',
        'https://bizweb.dktcdn.net/thumb/1024x1024/100/403/511/products/o1cn01adbw801hfas9dvh4y2208978.jpg',
        'Áo khoác lông nữ dáng dài'
    ),
    new Rate(
        'Rất êm ái, phù hợp cho các hoạt động ngoài trời.',
        'https://down-vn.img.susercontent.com/file/sg-11134201-7qve7-lewtcmo6rd4m38',
        'Bộ Áo Sơ Mi Ngắn Tay + Quần Kaki Phong Cách Nhật Bản '
    )
]

export{products, rates}
const btnSlider = document.querySelectorAll(".slider-product-content-item")
btnSlider.forEach(function(button){
    button.addEventListener("click" , function(event)
    {
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector(".slider-product-content-item-text h3").innerText
        var productPrice = product.querySelector(".slider-product-item-price p").innerText
        var productSale = product.querySelector(".slider-product-item-price span").innerText
        var productCurrent = product.querySelector(".slider-product-item-price-current").innerText
        let products = sessionStorage.getItem('products') ?  JSON.parse(sessionStorage.getItem('products')) : []
        products.push({
            img: productImg,
            name: productName,
            sale:productSale,
            curent:productCurrent,
            price : productPrice,

        })

        // renderProduct()
        sessionStorage.setItem("products", JSON.stringify(products))
    })
})
function moveProduct() {
    let products = sessionStorage.getItem('products') ?  JSON.parse(sessionStorage.getItem('products')) : []
    let content = '<div class="detail-content-top">'
    products.forEach((product) => {
        content+= `
        <h1>${product.name}</h1>

        </div>
        <div class="detail-content-bottom">
        <div class="detail-content-left">
            <img src="${product.img}" alt="">

        </div>
        <div class="detail-content-right">
            <div class="product__detail-item__city">Giá tại <span>TP.HCM</span></div>
                <div class="product__detail-item__price">
                    <span class="product__detail-item__price-old">${product.price}</span>
                    <div class="product__detail-item__price-current">${product.curent}</div>
                    <span class="product__detail-item__sale-off-percent">${product.sale}</span>
                </div>
                <div class="product__detail-item__action">
                    <div class="product__detail-item__star ">
                        <i class="product__detail-item__gold fas fa-star "></i>
                        <i class="product__detail-item__gold fas fa-star "></i>
                        <i class="product__detail-item__gold fas fa-star "></i>
                        <i class="product__detail-item__gold fas fa-star "></i>
                        <i class="product__detail-item__gold fas fa-star "></i>

                    </div>

                </div>
                <div class="product__detail-item__origin">
                    <span>Thương hiệu : Apple </span>
                    <br>
                    <span>Xuất xứ : Mỹ</span>
                    <br>
                    <span>Số lượng: 5 sản phẩm</span>
                </div>
                <div class="product__detail-controls">
                    
                    <button class="product__detail-btn-checkout">Mua Ngay</button>
                    <button class="product__detail-btn-cart">
                        <i class="fas fa-cart-plus"></i>
                        Thêm Vào Giỏ Hàng</button>
                </div>
            

        </div>


    `
    }) 
    content+= '</div>'
    document.querySelector("#detail-content").innerHTML = content

}

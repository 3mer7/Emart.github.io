//open the filter menu uner 1000px

let filter_menu = document.querySelector(".filter")
let btn_filter = document.querySelector(".btn_filter")

btn_filter.addEventListener("click", () =>{
    filter_menu.classList.toggle("active")
})



fetch("../products.json")
    .then(response => response.json())
    .then(data => {

        let products_div1 = document.getElementById("products_div")

        all_Product_data = data

        data.forEach(product => {

        let percent_discount = Math.floor((product.oldPrice - product.price) / product.oldPrice * 200)

        if(product.oldPrice){
            products_div1.innerHTML += `
            
            <div class="product swiper-slide">

            <span class="offer">%${percent_discount}</span>

            <div class="img_product">
                <img src="../${product.img}" alt="">
            </div>

            <h3 class="name_product"><a href="">${product.name}</a></h3>

                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>

                <div class="icons">
                    <i onclick ="AddtoCart(${product.id},this )" class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-share"></i>
                </div>

                <div class="price">
                    <p><span>$${product.price}</span></p>
                    <p class="old_price">$${product.oldPrice}</p>
                </div>
        </div>
            `

        } 
        else {
            products_div1.innerHTML += `
            
            <div class="product swiper-slide">

            <div class="img_product">
                <img src="../${product.img}" alt="">
            </div>

            <h3 class="name_product"><a href="">${product.name}</a></h3>

                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>

                <div class="icons">
                    <i onclick ="AddtoCart(${product.id},this )" class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-share"></i>
                </div>

                <div class="price">
                    <p><span>$${product.price}</span></p>
                </div>
        </div>
            `
        }
    });
})

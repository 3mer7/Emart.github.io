fetch("../products.json")
    .then(response => response.json())
    .then(data => {

        let parentDiv = document.getElementById("Parent")
        let other_products_swiper2 = document.getElementById("other_products_swiper2")
        let second_product_slider = document.getElementById("other_products_swiper")

        all_Product_data = data

        data.forEach(product => {

            if(product.oldPrice){

        let percent_discount = Math.floor((product.oldPrice - product.price) / product.oldPrice * 200)
                
                
            parentDiv.innerHTML += `
            
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
            
        });

        data.forEach(product => {

            if(!product.oldPrice && !product.boolean ){

                
                
        second_product_slider.innerHTML += `
            
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

        data.forEach(product => {

            if(product.boolean ){

                
                
                other_products_swiper2.innerHTML += `
            
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

// open and close cart 

let cart = document.querySelector(".cart_product");


function open_cart(){
    cart.classList.add("active")
}

function close_cart(){
    cart.classList.remove("active")
}

// open and close cart 

let menu = document.querySelector(".menu_links");
let overlay_display = document.querySelector(".overlay")
let open_menu = document.querySelector(".open_menu");
let close_menu = document.querySelector(".close_menu_btn");

open_menu.addEventListener("click", () =>{
    menu.style.left = "0px"
    overlay_display.style.right = "0"
})

close_menu.addEventListener("click", () =>{
    menu.style.left = "-4200px"
    overlay_display.style.right = "-2000px"
})



overlay_display.addEventListener("click", () =>{
    menu.style.left = "-4200px"
    overlay_display.style.right = "-2000px"
})


// Inserting items in cart based on the click of the user

let removeItem = document.querySelector(".delete")

let all_Product_data;

let items_in_cart = document.querySelector(".items_in_cart")

let products_in_cart = [];
let count_item       =  document.querySelector(".count_item");
let Price_cart_head  =  document.querySelector(".Price_cart_head");
let price_cart_total =  document.querySelector(".price_cart_total");
let count_of_items_in_cart = document.querySelector(".count_of_items_in_cart")

function AddtoCart (product_id, btn) {

    products_in_cart.push(all_Product_data[product_id])
    btn.classList.add("active")

    getElementIncart()
}

function getElementIncart(){

    let totalPrice = 0;
    let count = 0;
    let innerHTML_product = "";

    for (let i = 0; i < products_in_cart.length; i++) {

        innerHTML_product += `
        
        <div class="item_cart">
        <img src="../${products_in_cart[i].img}" alt="">
        <div class="detail">
            <h4>${products_in_cart[i].name}</h4>
            <p class="price_cart">$${products_in_cart[i].price}</p>
        </div>
        <button onclick ="remove_from_cart(${i}) " class="delete"> <i class="fa-regular fa-trash-can"></i> </button>
    </div>
        `

        totalPrice += products_in_cart[i].price;
        count = products_in_cart.length
    }



    items_in_cart.innerHTML = innerHTML_product
    Price_cart_head.innerHTML = `$${totalPrice}`
    price_cart_total.innerHTML = `$${totalPrice}`
    count_item.innerHTML = count
    count_of_items_in_cart.innerHTML = ` (${count} Items in Cart)`
}

function remove_from_cart(index){

    products_in_cart.splice(index,1)
    getElementIncart()

    let addToCartButtons = document.querySelectorAll(".fa-cart-shopping")

    for (let i = 0; i < addToCartButtons.length; i++) {

        addToCartButtons[i].classList.remove("active")

        products_in_cart.forEach(product => {

            if(product.id == i){

                addToCartButtons[i].classList.add("active")
                
            }
            
        })
    }
}


let totalPrice = 0;
const blueberry = document.getElementById("blueberry");
const strawbreey = document.getElementById("strawberry");
const pig = document.getElementById("pig");
const total = document.getElementById("total");
const clear = document.getElementById("clear");

blueberry.onclick = () => {
    cart.productNum++;
    cart.product1++;
    cart.totalPrice += parseInt(blueberry.value);
    showCart();
}
strawbreey.onclick = () => {
    cart.productNum++;
    cart.product2++;
    cart.totalPrice += parseInt(strawbreey.value);
    showCart();
}

pig.onclick = () => {
    cart.productNum++;
    cart.product3++;
    cart.totalPrice += parseInt(pig.value);
    showCart();
}

total.onclick = () =>{
    showCart();
}

clear.onclick = () =>{
    cart.productNum = 0;
    cart.product1 = 0;
    cart.product2 = 0;
    cart.product3 = 0;
    cart.totalPrice = 0;
    console.log(`已清空購物車`);
    showCart();
}

function showCart(){
    console.log(`目前商品數 : ${cart.productNum}`)
    console.log(`商品1 : ${cart.product1}`)
    console.log(`商品2 : ${cart.product2}`)
    console.log(`商品3 : ${cart.product3}`)
    console.log(`目前購物車總額 : ${cart.totalPrice}`)
}

let cart = {
    productNum: 0,
    product1: 0,
    product2: 0,
    product3: 0,
    totalPrice: 0
}


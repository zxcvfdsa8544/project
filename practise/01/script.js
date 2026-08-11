let sum = 0;
const blueberry = document.getElementById("blueberry");
const strawbreey = document.getElementById("strawberry");
const pig = document.getElementById("pig");
const total = document.getElementById("total");
const clear = document.getElementById("clear");

blueberry.onclick = () => {
    sum += parseInt(blueberry.value);
    console.log(`目前購物車總額 : ${sum}`);
}
strawbreey.onclick = () => {
    sum += parseInt(strawbreey.value);
    console.log(`目前購物車總額 : ${sum}`);
}

pig.onclick = () => {
    sum += parseInt(pig.value);
    console.log(`目前購物車總額 : ${sum}`);
}

total.onclick = () =>{
    console.log(`目前購物車總額 : ${sum}`);
}

clear.onclick = () =>{
    sum = 0;
    console.log(`已清空購物車`);
    console.log(`目前購物車總額 : ${sum}`);
}


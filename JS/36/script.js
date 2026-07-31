// 將 title 文字改成 "報告阿柴，標題已經切換!" 並將字體顏色改成藍色
// function changeTitle(){
//     let titleDiv = document.getElementById('title');
//     let message = "報告阿柴，標題已經切換!"
//     titleDiv.innerText = message
//     titleDiv.style.color = 'blue'
// }

// 點擊顏色方塊後，下面輸出會出現這該顏色
const squares = document.querySelectorAll('.colorSquare');
const output = document.getElementById('output');

squares.forEach(square =>{
    square.onclick = () =>{
        console.log(square);
        let id = square.id;
        console.log(id);

        output.innerHTML = `<div class = "colorSquare" id="${id}"></div>`
    }
})
// 另一個寫法
// squares.forEach(function(square){
//     square.onclick = (function(){
//         console.log(square);
//         let _id = square.getAttribute('id');
//         console.log(_id);
//         output.innerHTML= `<div class = "colorSquare" id = "${_id}"></div> `
//         // output.innerHTML = "我已被點擊了!";
//     })
// })

// 簡寫
// squares.forEach(square =>{
//     square.onclick = () =>{
//         console.log("我已被點擊了!");
//     }
// })

// https://dog.ceo/api/breeds/image/random

const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')

// const getNewDog = () =>{
//     // Promise 語法
//     // 非同步
//     // 1.JS 拿著網址去向 dog.ceo 伺服器要資料
//     fetch('https://dog.ceo/api/breeds/image/random')
//     // 2.伺服器回傳上面的 JSON (包含 message 裡的圖片網址)
//     .then(response => response.json())
//     // 3.把 json.message （也就是 https://images.dog.ceo/.../lucy.jpg）拿來放到 <img> 標籤裡！
//     .then(json =>{
//         console.log(json)
//         dogImageDiv.innerHTML = `<img src='${json.message}'/>`
//     })
// }

const getNewDog = async() =>{
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const json = await response.json()
    dogImageDiv.innerHTML = `<img src='${json.message}'>`
}

dogButton.onclick = () => getNewDog()


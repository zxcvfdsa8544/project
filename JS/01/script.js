// 內建方法介紹 console.log() =>在控制台印出
// console.log("Hello World, JS")
// console.log("Hi, JS")

// 宣告變數(var 、const、let)
// let name = "codeshiba"
// console.log(name)

// let sentence = '今天過得如何?很高興見到你，希望你有美好的一天!'
// console.log(name + sentence)

// 內建方法介紹 prompt() 與  alert()
// fruit = prompt("你最喜歡的水果是甚麼")
// console.log(fruit)
// alert(fruit)


// 第一個程式 小費計算器
let food = parseInt(prompt("這餐食物花費多少錢?"))
let tipPercentage = parseInt(prompt("小費幾趴?")) / 100
let tipAmont = food * tipPercentage
let total = food + tipAmont
console.log("金額: " + food)
console.log("小費: " + tipAmont)
console.log("總金額: " + total)
// let food = parseInt(prompt("這餐食物花費多少錢?"))
// let tipPercentage = parseInt(prompt("小費幾趴?")) / 100
// let tipAmont = food * tipPercentage
// let total = food + tipAmont
// console.log("小費金額" + tipAmont)
// console.log("總金額" + total)

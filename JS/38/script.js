/*
剪刀石頭布
專案涵蓋的概念
1.迴圈 2.DOM 操作 3.變數 4.條件語句(if else if) 
5.樣板字面值 6.事件監聽器 7.高階函數(Math.random())
*/

// 隨機從 stone paper scissors 選擇一個並返回字串
function getComputerChoice(){
    let pssChoices = ['Stone', 'Paper', 'Scissors']
    let computerChoice = pssChoices[Math.floor(Math.random()*3)]
    return computerChoice
}

// 比較playerChioce 和 computerChoice 並相應地返回得分
// 玩家贏 - getResult('Stone', 'Scissors') => 1
// 玩家輸 - getResult('Scissors', 'Stone') => -1
// 平手 - getResult('Stone', 'Stone') => 0
function getResult(playerChoice, computerChoice){
    let score = 0;
    if(playerChoice === computerChoice){
        score = 0
    }else if(playerChoice === 'Stone' && computerChoice === 'Scissors'){
        score = 1        
    }else if(playerChoice === 'Scissors' && computerChoice === 'Paper'){
        score = 1
    }else if(playerChoice === 'Paper' && computerChoice === 'Stone'){
        score = 1
    }else{
        score = -1
    }
    return score
}

// showResult 函數根據得分在 DOM 上更新為 你贏了 或 你輸了 或 平手!
// 同時顯示玩家 和 電腦的選擇
function showResult(score, playerChoice, computerChoice){
    let result = document.getElementById('result')
    switch(score){
        case -1:
            result.innerText = `你輸了! \n你出了${playerChoice}\n電腦出了${computerChoice}`
            break;
        case 0:
            result.innerText =`平手! \n你出了${playerChoice}\n電腦出了${computerChoice}`
            break;
        case 1:
            result.innerText = `你贏了! \n你出了${playerChoice}\n電腦出了${computerChoice}`
            break;
    }
}

// 計算誰贏了 並顯示在螢幕上
function onClickPSS(playerChoice){
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice, computerChoice)
    showResult(score, playerChoice, computerChoice)
}

// 讓剪刀石頭布按鈕 actively 監聽點擊事件，一旦檢測到就執行某些動作
function playGame(){
    let pssButtons = document.querySelectorAll('.pssButton')
    
    pssButtons.forEach(pssButton => {
        let _value = pssButton.value
        pssButton.onclick = () => onClickPSS(_value)
    })

    // 添加 click 事件監聽器到結束遊戲案件上，單擊時運行 endGame() 函數
    let endGameBtn = document.getElementById('endGameButton')
    endGameBtn.onclick = () => endGame()
}

// endGame 函數清除 DOM 上的所有文本
function endGame(){
    let result = document.getElementById('result')
    result.innerText = ''
}

playGame()
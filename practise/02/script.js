const scissors = document.getElementById('scissors');
const stone = document.getElementById('stone');
const paper = document.getElementById('paper');

function generateComputerChoice(){
    const radomNum = Math.floor(Math.random()*3);
    let computerChoice = ""
    if(radomNum === 0){
        computerChoice = "剪刀";
    } else if(radomNum === 1){
        computerChoice = "石頭";
    } else {
        computerChoice = "布";
    }
    return computerChoice;
}

function playGame(userChoice){
    const computerChoice = generateComputerChoice();

    let result = ""
    if(userChoice === "剪刀"){
        if(computerChoice === "剪刀"){
            result = "平手!";
        }else if(computerChoice === "石頭"){
            result = "我輸了!";
        }else{
            result = "我贏了!";
        }   
    }else if(userChoice === "石頭"){
        if(computerChoice === "剪刀"){
            result = "我贏了!";
        }else if(computerChoice === "石頭"){
            result = "平手!";
        }else{
            result = "我輸了!";
        }
    }else{
        if(computerChoice === "剪刀"){
            result = "我輸了!";
        }else if(computerChoice === "石頭"){
            result = "我贏了!";
        }else{
            result = "平手!";
        }
    }
    alert(`我出${userChoice}，電腦出${computerChoice}，${result}`);
}


scissors.onclick = () =>{
    playGame("剪刀");
}

stone.onclick = () =>{
    playGame("石頭");
}

paper.onclick = () =>{
    playGame("布");
}
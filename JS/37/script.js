let seconds = 0
let m_seconds = 0
const displayMSeconds = document.getElementById('m_seconds')
const displaySeconds = document.getElementById('seconds')
const buttonStart = document.getElementById('button-start')
const buttonStop = document.getElementById('button-stop')
const buttonReset = document.getElementById('button-reset')
let interval

buttonStart.onclick = () => {
    interval = setInterval(timer, 10)
}

buttonStop.onclick = () => {
    clearInterval(interval)
}

buttonReset.onclick = () => {
    clearInterval(interval)
    seconds = 0
    m_seconds = 0
    displayMSeconds.innerHTML = `0${m_seconds}`
    displaySeconds.innerHTML = `0${seconds}`
}

// 碼表讀取方法
const timer = () =>{
    m_seconds++
    if(m_seconds <= 9){
        displayMSeconds.innerHTML = `0${m_seconds}`
    }

    if(m_seconds > 9){
        displayMSeconds.innerHTML = m_seconds
    }

    if(m_seconds >= 99){
        seconds++
        displaySeconds.innerHTML = `0${seconds}`
        m_seconds = 0
    }
}
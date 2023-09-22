// console.log('dd');

/**
 *  #counter: 숫자가 변해야하는곳
 *  #start: 숫자가 증가하도록 작동하는 버튼
 *  #stop: 숫자 증가를 멈추는 버튼
 */

const counter = document.getElementById('counter')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const resetBtn = document.getElementById('reset')

let index = 0;

// 셋인터벌 함수의 아이디를 담을 변수
let timerId
startBtn.addEventListener('click', ()=>{
    if(timerId){
        clearInterval(timerId)
    }
    timerId =setInterval(()=>{
        index++
        // console.log(index);
        counter.textContent = index
    },10)
})

stopBtn.addEventListener('click', ()=>{
    clearInterval(timerId)
    
})

resetBtn.addEventListener('click', ()=>{
    index = 0
    counter.textContent = index
    clearInterval(timerId)
} )
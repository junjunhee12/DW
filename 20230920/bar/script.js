/**
 * number, inc , dec
 * number : 변해야할 숫자
 * # inc 증가버튼
 * # dec 감소 버튼
 * 
 *  */

const number = document.getElementById('number')
const inc = document.querySelector('#inc')
const dec = document.getElementById('dec')
const bar = document.querySelector('.bar')
// console.log(number)
// console.log(inc)
// console.log(dec) 

// 증가할 값이 들어있는 변수
let counter = 0;


// inc - 증가하는 일
//addEventListener('이벤트 이름', 함수
inc.addEventListener('click', () => {
    // 누적시키는 방법
    

    if( counter < 100){
        counter += 10;
    bar.style.width = `${counter}%`
    number.innerText = (counter);

    }
    // inc.style.transform = `rotate(${counter}deg)`
    // 내가 만든 방식
    // rota = 'translateX(30px)'
    // for(let i = 0; i < 1; i++){
    //     inc.style.transform += rota
    // }
    // 두번 째 방법
    
    
})

// dec - 감소하는 일

dec.addEventListener('click', () => {
    // 누적시키는 방법
    // counter -= 1;
    // number.innerText = (counter);
    console.log(counter)
    
    if (counter > 0) {
        counter -= 10;
        bar.style.width = `${counter}%`
        number.innerText = (counter);
        // console.log(counter)
    } else {
        alert('음수는 안나옵니다.')
    }

    // 두번 째 방법

})

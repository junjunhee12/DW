// console.log('dd');

const lotto = document.getElementById('lotto')
const lottoBtn = document.getElementById('lotto-btn')
const li = document.querySelectorAll('#result > li')
// console.log(li);

// 최대 최소값을 이용한 난수생성
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


// 로또 번호 담을 배열
let lottoNumber = []

lottoBtn.addEventListener('click', () => {
    lottoBtn.classList.add('pro')
    lottoBtn.textContent = '로또번호 생성중..'
    if (lottoNumber.length > 0) {
        lottoNumber = [];
    }
    for (let i = 0; lottoNumber.length < 6; i++) {
        // 랜덤변수에 난수 생성한 값 할당
        const random = randomNumber(1, 45)
        // lottoNumber 내부에 랜덤과 일치하는 값이 있는지 true/false
        const isEntry = lottoNumber.includes(random)
        // console.log(isEntry);
        if (!isEntry) {
            lottoNumber.push(random)
        }
        
    }
    
    // 오름차순 정렬
    lottoNumber = lottoNumber.sort((a,b)=>a-b)
    // 로또번호를 요소에 추가하는 반복문
    for(let i =0; i < lottoNumber.length; i++){
        setTimeout(()=>{
            li[i].textContent = lottoNumber[i]
            // lottoBtn.classList.remove('pro')

        },500 * i)
    }
    setTimeout(()=>{
        lottoBtn.classList.remove('pro')
        lottoBtn.textContent = '로또번호 받기'
    },3000)
})


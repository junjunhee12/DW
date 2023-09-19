console.log('dksmfkjsn')

//getElementById는 ID를 기반으로 찾기때문에, #이라는 표현을 따로 적어주지 않아도 된다.
// const title = document.getElementById('title')

// querySelector는 태그, 클래스, 아이디, 등 범용으로 사용하기때문에 꼭 아이디인지, 클래스인지 태그인지 구분해서 적어줘야한다. 
// const title = document.querySelector('#title')
// console.log(title)
const title = document.querySelectorAll('.title')
console.log(title.length)

for(let i= 0; i < title.length; i++){
    // 요소들의 텍스트 내용을 i번째 요소 입니다.
    title[i].innerText = i +' 번째 요소입니다.'
    title[i].classList.add('red')
    //
    // if(i === title.length -1 ){
    //     title[i].classList.remove('red')
    // }

    title[title.length-1].classList.remove('red')
    // title[i].style.fontSize = `${(i+10) * 3}px`
    // title[i].style.width = `${(i*10) *10}px`
    // title[i].style.height = `${(i*10) *10}px`
    // title[i].style.fontWeight = '400'
    

    console.log(title[i])
}
// console.log(title[2]) 
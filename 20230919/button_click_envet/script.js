// const title = document.getElementById('title')
// console.log(title)
// 버튼을 가져와서 변수에 담기
const button = document.getElementById('btn')
console.log(button)

// 컨테이너 가져와서 변수에 담기
const container = document.querySelector('.container')
console.log(container)
//버튼 클랙했을 때 컨테이너에 bg 클래스를 추가한다.
button.addEventListener('click', ()=>{
    if(container.style.backgroundColor = 'white'){
        container.style.backgroundColor = 'blue'
    }
    else if(container.style.backgroundColor = 'blue'){
        container.style.backgroundColor = 'white'
    }
    container.classList.add('bg');
})


// 제목을 클릭했을 때, alert 창에 클릭 이라는 문구가 출력
// addEventListener( '이벤트 이름 ' , 실행할 함수)
title.addEventListener('click', ()=>{
    // alert('클릭')


    if(title.style.color === 'red'){
        title.style.color = 'black'
    }
    else{
        title.style.color = 'red'
    }
})



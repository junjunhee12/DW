// console.log('runing...');

const input = document.getElementById('add-todo')
const addButton = document.querySelector('.add-button')
const list = document.getElementById('list')
// console.log();


// input 창에 사용자가 특정 키를 입력했을 때 실행
input.addEventListener('keydown', (e) => {
    // Enter 키를 눌렀을 때 addListItem() 함수실행
    if (e.key === "Enter") {
        addListItem()
    }
})

// 추가 버튼을 눌렀을 때 실행
addButton.addEventListener('click', () => {
    addListItem()

})

// list에 할 일을 추가하는 함수
const addListItem = () => {
    // 사용자가 빈 값을 입력했을때 경고창 실행
    if (input.value.length === 0) {
        return alert('내용을 입력해주세요')
    }

    // li 생성
    const li = document.createElement('li')
    // li에 사용자의 입력값과 버튼 태그 추가
    li.innerHTML = `${input.value} <button class="list-delete">&#x2716</button>`
    // li에 list-item추가
    li.classList.add('list-item')
    // list에 li 요소 추가
    list.append(li)
    // 인풋 내용을 지워줌
    input.value = '';

    // 인풋에 포커스를 잡는 메소드
    input.focus();
    
    // localStorage에 저장
    saveList(list.innerHTML)


}

list.addEventListener('click', (e) => {
    //currentTarget - 이벤트가 걸려있는 해당요소
    // target - 클릭하는 요소
    console.log(e.target);

    //li 요소를 클릭했을 때
    if (e.target.tagName === 'LI') {
        // checked클래스를 추가하거나 삭제
        e.target.classList.toggle('checked')
        // 현재상태 저장
        saveList(list.innerHTML)
    }
    // 삭제버튼 눌렀을 때
    if (e.target.tagName === 'BUTTON') {
        // 삭제버튼의 부모를 삭제(li요소를 삭제)
        e.target.parentElement.remove()
        //localStorage에 현재상태 저장
        saveList(list.innerHTML)
    }
})

// saveList(list)
// 로컬스토리지에 todo라는 이름으로 저장
const saveList = (list) => {
    localStorage.setItem('todo', JSON.stringify(list))
}

const loadList = () =>{
    
    const getList = JSON.parse(localStorage.getItem('todo'))
    list.innerHTML = getList
}


// DOMContentLoaded :  DOM이 그려지고 난 뒤
// load : DOM도 그려지고 ,이미지와 같은 요소들도 모두 로드 되었을때
document.addEventListener('DOMContentLoaded', loadList())
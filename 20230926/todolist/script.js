// console.log('runing...');

const input = document.getElementById('add-todo')
const addButton = document.querySelector('.add-button')
const list = document.getElementById('list')
// console.log();



input.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        addListItem()
    }
})

addButton.addEventListener('click', () => {
    addListItem()

})

const addListItem = () => {
    if (input.value.length === 0) {
        return alert('내용을 입력해주세요')
    }
    const li = document.createElement('li')
    li.innerHTML = `${input.value} <button class="list-delete">&#x2716</button>`
    li.classList.add('list-item')
    list.append(li)
    // 인풋 내용을 지워줌
    input.value = '';

    // 인풋에 포커스를 잡는 메소드
    input.focus();
    
    saveList(list.innerHTML)


}

list.addEventListener('click', (e) => {
    //currentTarget - 이벤트가 걸려있는 해당요소
    // target - 클릭하는 요소
    console.log(e.target);

    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveList(list.innerHTML)
    }
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove()
        saveList(list.innerHTML)
    }
})

// saveList(list)
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
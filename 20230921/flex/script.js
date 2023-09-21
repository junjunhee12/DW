// console.constlog('ddd');

const menuItem = document.querySelectorAll('.menu-item')
console.log(menuItem);

// console.log(menuItem[menuItem.length-1]); 
/*
-----------------------------참고 자료-----------------
menuItem[4].addEventListener('click', (e)=>{
    // 기본적으로 발생하는 이벤트 취소하는 메소드
    e.preventDefault();
    // 이벤트 전파를 막는 메소드
    e.stopPropagation();
    menuItem[4].classList.add('active')
})
menuItem[0].addEventListener('click', (e)=>{
    menuItem[0].classList.remove('active')
})
*/


for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', (event) => {
        // console.log(menuItem[i]);
        // console.log(menuItem[i].classList.contains('active'));
        for (let j = 0; j < menuItem.length; j++) {
            menuItem[j].classList.remove('active')
        }
        menuItem[i].classList.add('active')
    })
}

// menuItem.forEach(item => {
//     item.addEventListener('click,', ()=>{
//         menuItem.forEach(botton => botton.classList.remove('active'))
//         item.classList.add('active')
//     })
// })


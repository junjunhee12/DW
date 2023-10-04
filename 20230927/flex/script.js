const menuItem = document.querySelectorAll('.menu-item')
console.log(menuItem);

for(let i = 0; i < menuItem.length; i++){
    menuItem[i].addEventListener('click', ()=>{
        for(let i = 0; i < menuItem.length; i++){
            menuItem[i].classList.remove('active')
        }
        menuItem[i].classList.add('active')
    })
}
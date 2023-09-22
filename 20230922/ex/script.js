const sidebar = document.getElementById('sidebar')
const trigger = document.getElementById('trigger')
const text = document.querySelector('.text')
const overlay = document.querySelector('.overlay')

trigger.addEventListener('click', ()=>{
    
    if(sidebar.classList.contains('show')){
        sidebar.classList.remove('show')
        text.classList.remove('show')
    }else{
        sidebar.classList.add('show')
        text.classList.add('show')
    }
})

overlay.addEventListener('click', ()=>{
    
    if(sidebar.classList.contains('show')){
        sidebar.classList.remove('show')
        text.classList.remove('show')
        overlay.classList.remove('open')
    }
})
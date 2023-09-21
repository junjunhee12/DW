const toggle = document.querySelector('.toggle')
const swi = document.querySelector('.switch')

console.log(toggle)


// toggle.classList.add('active')

toggle.addEventListener('click', () => {
    // if (toggle.classList.contains('active')) {
    //     toggle.classList.remove('active')
    // } else {
    //     toggle.classList.add('active')
    // }

    // toggle.classList.contains('active')?toggle.classList.remove('active'):toggle.classList.add('active')

    toggle.classList.toggle('active')
})


// console.log('dd');
const tabBtn = document.querySelectorAll('.tab-button')
const tabItem = document.querySelectorAll('.tab-item')
// console.log(tabItem);

for(let i = 0; i < tabBtn.length; i++){

    tabBtn[i].addEventListener('click', ()=>{
        for(let j = 0; j < tabBtn.length; j++){
            tabBtn[j].classList.remove('selected')
            tabItem[j].classList.remove('show')
        }
        tabBtn[i].classList.add('selected')
        tabItem[i].classList.add('show')
        
    })
    
}

// tabBtn.forEach((btn, i) => {
//     btn.addEventListener('click', () => {
//         tabBtn.forEach((btn, j) => {
//             btn.classList.remove('selected');
//             tabItem[j].classList.remove('show');
//         });
//         btn.classList.add('selected');
//         tabItem[i].classList.add('show');
//     });
// });


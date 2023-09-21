const image = document.querySelectorAll('.image')
// console.log(image);

for(let i = 0; i < image.length; i++){
    image[i].addEventListener('click', ()=>{
        for(let j = 0; j < image.length; j++){
            image[j].classList.remove('show')
        }
        image[i].classList.add('show')

        if(image[i] === 2){
            image[i].textContent = '안녕하세요'
        }
        else{
            image[i].textContent.remove='안녕하세요'
        }
    })
}

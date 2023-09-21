const data = [
    {
        title: '강아지1',
        url: 'img/img1.webp'
    },
    {
        title: '강아지2',
        url: 'img/img2.webp'
    },
    {
        title: '강아지3',
        url: 'img/img3.webp'
    },
    {
        title: '강아지4',
        url: 'img/img4.webp'
    },
    {
        title: '강아지5',
        url: 'img/img5.webp'
    }
]

// 1. list에 목록

const list = document.getElementById('list')
console.log(list);

for (let i = 0; i < data.length; i++) {
    // console.log(data[i]);
    list.innerHTML += `<li class="button">${data[i].title}</li>`
}

const image = document.getElementById('image')
const button = document.querySelectorAll('.button')
console.log(button);
const title = document.querySelector('#title')



for (let i = 0; i < button.length; i++) {
    button[0].classList.add('check')
    title.textContent =data[0].title
    // console.log(button[i])
    button[i].addEventListener('click', () => {
        image.src = data[i].url
        title.textContent = data[i]["title"]
        for(let j = 0; j < button.length; j++){
            button[j].classList.remove('check')
        }
        button[i].classList.add('check')
        // 
    })
    
    // 
}



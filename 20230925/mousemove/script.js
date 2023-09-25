// console.log('a');

const dot = document.querySelector('.dot')
console.log(dot);

window.addEventListener('mousemove', (event)=>{
    console.log(`X 좌표 : ${event.clientX}`);
    console.log(`Y 좌표 : ${event.clientY}`);
    // console.log(`dot의 width : ${dot.clientWidth /2}`);
    // console.log(`dot의 height : ${dot.clientHeight /2}`);

    //애니메이션 부드럽게 만들때 사용한다. 
    requestAnimationFrame(()=>{
        mouseMove(event)
    })
    
})

const mouseMove = (event) =>{
    dot.style.left = `${event.clientX -(dot.clientWidth /2)}px`
    dot.style.top = `${event.clientY -(dot.clientHeight /2)}px`
}
window.addEventListener('click', ()=>{
    const span = document.createElement('span')
    span.classList.add('bubble')
    dot.append(span)
    // dot.style.opacity = `0`;
    setTimeout(()=>{
        span.remove('bubble')
    },1000)
})



/**
 * wrapper에다가 snow를 추가해서 애니메이션
 */

const wrapper = document.querySelector('.wrapper')

const randomGenerator = (min, max) =>{
    return Math.floor(Math.random() * (max - min +1) + min)
}

for (let i = 0; i < 100; i++) {
    const snow = document.createElement('span')
    const size = randomGenerator(3,10)
    snow.classList.add('snow')
    snow.style.left = `${randomGenerator(0,100)}%`
    snow.style.animationDuration = `${randomGenerator(10, 30)}s`;
    snow.style.animationDelay = `${randomGenerator(0, 10)}s`;
    snow.style.opacity = Math.random()
    snow.style.width = `${size}px`;
    snow.style.height = `${size}px`;
    snow.style.filter = `blur(${randomGenerator(1,5)}px)`
    wrapper.append(snow)
}

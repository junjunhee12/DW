const wrapper = document.querySelector('.wrapper')
console.log(wrapper);

const randomGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const addBokeh =()=>{
    
        const bokeh = document.createElement('div')
        bokeh.classList.add('bokeh')
        const size = randomGenerator(3, 50)
        wrapper.append(bokeh)
        bokeh.style.width = `${size}px`
        bokeh.style.height = `${size}px`
        bokeh.style.left = `${randomGenerator(0, 100)}%`
        bokeh.style.top = `${randomGenerator(0, 100)}%`
        bokeh.style.backgroundColor = `rgb(${randomGenerator(0, 255)},${randomGenerator(0, 255)},${randomGenerator(0, 255)})`
        bokeh.style.animationDelay = `${randomGenerator(0, 5)}s`
        bokeh.style.filter = `blur(${randomGenerator(1, 2)}px)`
        bokeh.style.opacity = Math.random
}

for (let i = 0; i < 50; i++) {
    addBokeh()
}

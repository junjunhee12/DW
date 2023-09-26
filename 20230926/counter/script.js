const dataList = document.querySelectorAll('[data-counter]')
const app = document.getElementById('app')

// console.log(dataList);

// 반복문을 이용해서 dataList안에 있는 data-counter값을 콘솔로 출력

for(let i = 0; i < dataList.length; i++){
    const target = (dataList[i].dataset.counter);
    const timerText = dataList[i].querySelector('.timer')
    const step =Math.floor(target /200)
    console.log(step);
    index = 0;
    setInterval(()=>{
        
        // console.log(index);
        if( index < target){

            index = index + step;
            // console.log(index)
            timerText.textContent = index 
        }

        
    },1)
}
// setTimeout : 지연된 시간 후에 실행되는 함수
// setTimeout( 함수, 시간: 1s = 1000ms) 
// setTimeout(()=>{
//     console.log('1번째');
// }, 1000)
// setTimeout(()=>{
//     console.log('2번째');
// }, 2000)
// setTimeout(()=>{
//     console.log('3번째');
// }, 500)

const body = document.querySelector('body')
// console.log(body);
let index = 0;
console.log(index);
// 1초 뒤에 인덱스 값을 1로 변경해서 콘솔로 출력
// setTimeout(()=>{
//     index += 1
//     console.log(index);
//     // body.style.backgroundColor ='red'
// },1000)


let time = 1000;
// setInterval = 정해진 시간마다 반복 실행하는 비동기 함수
// setInterval(함수 , 시간)
setInterval(()=>{
    index += 1
    if(index%2 === 0){
        index += 4
    }else{
        index += 3
    }
    console.log(index);
    console.log(`나는 ${time}마다 반복됩니다.`);
}, 1000)
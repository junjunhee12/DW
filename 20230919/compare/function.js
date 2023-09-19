// console.log('function')


/**
 * add라는 이름의 함수
 * x와 y라는 값을 받아서 더하는 함수
 * x, y: 매개변수, parameter
 */
function add(x, y) {
    return console.log(`덧셈 결과는 ${x + y} `)
}

add(5, 2);
// console.log(add(5,2))

function mul(x, y) {
    add(x, y)
    return console.log(x * y)
}

mul(40, 50)

// fat arrow function, 화살표 함수 - 이걸 많이 사용한다. 
const addFun = (x, y) => {
    return console.log(x + y)
}
addFun(10, 20)

// 매개변수 name하나를 받아서 그대로 출력하는 함수
// const showName = (name) =>{
//     return console.log(`제이름은 ${name}입니다.`)
// }

// 매개변수가 하나고 , 한줄만 실행 할때는 리턴 없이 바로 츨력하도록 축약해서 쓸 수 있다.
const showName = name => console.log(`제 이름은 ${name}입니다.`)
showName('전준희')

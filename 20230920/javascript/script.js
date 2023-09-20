// 더하기 함수
function add(x, y) {
    return x + y;
}

console.log(add(2, 3))

// Fat arrow function , 혹은 화살표 함수
const addFun = (x, y) => {
    return console.log(x + y);
}

// 실행
addFun(3, 6)


// 매개 변수가 하나일때
const double = (x) =>{
    return console.log(x*2);
}

// 매개변수를 제곱하는 함수
double(4)

// 매개변수가 하나일때 위의 함수를 줄인 코드
const double1 = x => console.log(x*2) 
double1(4)

// -------------첫번째는 일반적인 화살표함수 / 두번째는 축약형 화살표함수---------------
const showName = (name) => {
    return console.log(`제이름은 ${name} 입니다.`)
}
showName(`전준희`) 


const showName1 = name => console.log(`제이름은 ${name} 입니다.`)
showName1(`전준희`) 
// --------------------------------------------------------------

// 따음표 종류 : 작은 따음표, 큰 따음표 , 백틱

// 함수 안에서 if문 사용 ---------------------------------------------------------------
function showName2(name){
    console.log(name.length);
    //매개변수 name의 타입이 string일 경우에만 출력
    console.log(`매개변수의 타입은${typeof name}입니다.`)
    if(typeof name === 'string'){
        return console.log(`제이름은 ${name}입니다.`)
    }else{
        return console.log(`${typeof name}형입니다. *문자형을 사용하세요`)
    }
    // console.log(`매개변수의 타입은${typeof name}입니다.`)
    // return console.log(name)
}

// ---------------------------------------------------------------------------------------
showName2(`전준희`)

// const showName3 = (name, name2) => {
//     return console.log(`제이름은 ${name} 입니다. 저의 이름은 ${name2}입니다.`)
// }
// showName3(`전준희`, `전준`) 


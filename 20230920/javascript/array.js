// console.log("ddd")

const number = [1, 2, 3];
const animal = ['고양이', '강아지', '코끼리'];

//number의 길이를 출력

console.log(number.length);

// 객체, object--------------------------------------------------------------------

const classRoom = {
    number :'202',
    students : '20',
    aircon : true, 
    computer: true,
    pokemon: ['피카츄','라이츄','꼬북이'],
    func: ( )=> {
        console.log('함수도 담을 수 있습니다. ')
    }
}

// 클래스룸 객체에서넘버라는 키를 이용해 값을 출력한 상황
classRoom.number ='300'
console.log(classRoom.number)

// 이런식으로도 접근이 가능하다.
console.log(classRoom['students'])

// 객체에는 배열도 담을 수있다.
console.log(classRoom.pokemon)

console.log(classRoom.pokemon[0])

// 함수 출력
classRoom.func()
//----------------------------------------------------------------------------------

const lunch = [
    {
        name: '짜장면',
        cost: 7000
    },
    {
        name: '짬뽕',
        cost: 8000
    },
    {
        name: '김밥',
        cost: 3500
    },
    {
        name: '콩나물 국밥',
        cost: 6000
    }
]

console.log(lunch[0].name) 
console.log(lunch[0]['name'])
console.log(lunch[3].cost)
const list = document.getElementById('list')
console.log(list)
let total = 0;
for(let i = 0; i < lunch.length; i++){
    // console.log(i)
    
    // 각 메뉴이름을 출력
    // console.log(lunch[i].name)

    // 각 메뉴의 금액을 출력
    // console.log(lunch[i].cost)

    //짜장면의 가격은 7000원입니다.
    console.log(`${lunch[i].name}의 가격은${lunch[i].cost.toLocaleString('ko-kr')}입니다  `)
    total += lunch[i].cost;

    // 화면에 띄우기
    // list.innerHTML += `<li>${lunch[i].name} : ${lunch[i].cost}</li> `

    document.body.querySelector('list').innerHTML += `<li>${lunch[i].name} : ${lunch[i].cost}</li> `
    
}
console.log(`총 비용: ${total.toLocaleString('ko-kr')}원`); 


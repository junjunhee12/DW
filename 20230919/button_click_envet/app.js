const friends = ['짱구','흰둥이','철수','훈이', '유리','맹구','짱아',]
console.log(friends)



// 친구들은 총 몇명인가요
console.log(friends.length)

// 흰둥이를 출력해주세요
console.log(friends[1])



// 짱아를 배열에서 뺴주기
friends.pop()
console.log(friends)

friends.push('짱아')
console.log(friends)

// for문

for(let i = 0; i < friends.length; i++){
    console.log(`${[i]}번째 친구는 ${friends[i]} 입니다`)
}

const numbers = [1,2,3,4,5]

// 차례대로 출력
const add = (x) => {
    return console.log(x* 2);
}

for(let i = 0; i < numbers.length; i++){
    // console.log(numbers[i])
    //add 함수를 이용해 2 4 6 8 10 출력
    add(numbers[i])
}

const showName = (name) => {
    return console.log(`제이름은 ${name}입니다.`)
}

for(let i = 0; i < friends.length; i++){
    showName(friends[i])
}
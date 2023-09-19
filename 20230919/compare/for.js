// console.log('for문 연습')

// for(let i =0; i < 10; i++){
//     console.log(`i : ${i}`)
//     for(let j=0; j<10; j++){
//         console.log(`j번째 : ${j}`)
//     }
// }

const pokemon = ['피카츄', '라이츄', '꼬북이', '파이리', '이브이']

for (let i = 0; i < pokemon.length; i++) {
    console.log(pokemon[i])
}

const style = 'background-color:red; color:white; border-radius:1rem '
for (let i = 1; i <= 9; i++) {
    console.log(`%c${i}단`, style )
    for (let j = 1; j <= 9; j++) {
        let res = i * j;
        console.log(`%c${i} x  ${j} = ${res}`,style)
    }
}


let star = '';
for(let i = 0; i < 5; i++){
    star += '*';
    console.log(star)
}
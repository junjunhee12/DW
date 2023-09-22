// // console.log('ddd');

// // PI
// console.log(Math.PI);


// // 절대값
// console.log(Math.abs(-1));


// // 반올림
// console.log(Math.round(1.5));
// console.log(Math.round(1.4));

// // 올림
// console.log(Math.ceil(1.2));

// // 버림
// console.log(Math.floor(1.3333));

// // 랜덤
// console.log(Math.random());
// console.log(Math.random());

// // Math.random() * (최대값 - 최솟값 + 1) + 최솟값;

// let max = 45
// let min = 1
// const random = Math.random() *( max - min + 1) + min
// console.log(Math.floor(random));

// const randomGenerator = (min, max) =>{
//     return console.log(Math.floor(Math.random()*( max - min + 1) + min));
// }

// randomGenerator(1, 1000)



function generateRandomLottoNumbers() {
    var lottoNumbers = [];
    while (lottoNumbers.length < 6) {
        var randomNumber = Math.floor(Math.random() * 45) + 1; // 1부터 45 사이의 무작위 숫자 생성
        if (!lottoNumbers.includes(randomNumber)) {
            lottoNumbers.push(randomNumber);
        }
    }
    return lottoNumbers;
}

var myLottoNumbers = generateRandomLottoNumbers();
console.log("로또 번호: " + myLottoNumbers.join(", "));
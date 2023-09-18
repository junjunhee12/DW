const userName = document.getElementById('username')

console.log(userName)
// prompt('사용자에게 보여줄 메세지', '기본 값')
let value =prompt('이름을 입력해주세요')
userName.textContent= value
let color =prompt('원하는 컬러를 입력', 'dodgerblue')
userName.style.color= color
let size = prompt('폰트 사이즈를 입력해주세요', '50px')
userName.style.fontSize=size


// let value = prompt('이름을 적어주세요');
// console.log(value)


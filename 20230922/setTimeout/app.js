const title = document.getElementById('text')
console.log(text);
console.log(title.textContent)

// title.textContent 내용을 배열로 변환
// split('기준이 되는문자') 메소드 : 기준이되는 문자를 기준으로 쪼개 배열로 변환, '' 그냥 따옴표를 넣으면 글자단위로 쪼갠다.
const textArray = title.textContent.split('')
console.log(textArray);

title.textContent = ''
for (let i = 0; i < textArray.length; i++) {
    setTimeout(() => {
        
        textArray[i].textContent += 
        console.log(textArray[i])
        // textArray.textContent = title.textContent
        // document.textContent.append(textArray[i])
    }, 500 * i)


}







// 태그를 생성하는 메소드
const p = document.createElement('p')

// 생성한 p태그 안에 타이틀의 텍스트 내용을 할당
p.textContent = title.textContent

// 바디의 맨마지막 부분에 생성한 피 태그 추가
document.body.append(p)
// console.log(p);


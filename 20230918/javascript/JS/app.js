// let a = 'app'
console.log('app')

// html문서 안에서 아이디를 기반으로 가지고 온다 - 그 아이디가 title이다.
// 문서안에서 title이라는 아이디를 가진 요소를 찾아서 text라는 변수에 담은 상황
const size = 60 
const text = document.getElementById('title');
console.log(text)
text.style.color = 'red';
text.style.backgroundColor = 'black'
text.style.fontSize = '50px';
// 사이즈 변수를 이용해서 fontSize 값을 변경 
// DOM을 제어한다, = html 요소들을 추가, 수정, 삭제...
text.style.fontSize = String(size) + 'px';
text.style.fontSize =  `${size}px`; // 문자열 결합방식
text.style.fontSize = size+ 'px'; // 템플릿 리터럴 방식

// 텍스트의 내용을 바꾸는 방법
text.textContent = ' 바뀐 내용입니다.';
text.innerText = '이렇게도 바뀐다.';
text.innerHTML = '<span> 이렇게 태그를 넣어서 바꿀 수도 있습니다.</span>';

const barGraph = document.getElementById('graph');
const graphValue = barGraph.dataset.value; // HTMl에서 data-value를 가지고 온다.
barGraph.style.width = graphValue + '%'
barGraph.textContent = `${graphValue}%`;
barGraph.style.color = `white`;
barGraph.style.display = 'flex'
barGraph.style.alignItems = 'center'
barGraph.style.justifyContent = 'center'
barGraph.style.fontSize = '50px'


console.log(barGraph, graphValue);
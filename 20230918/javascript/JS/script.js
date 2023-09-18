// console.log() : 개발자 도구에서 값을 확인할때 사용한다.
// 숫자 변수 문자 등등 많은 것을 넣어서 확인할 수 있다.
/*
    주석을 여러죽로 넣을때는 이런 방식으로 
    넣어주면 된다.


*/
console.log('안녕하세요');
console.error('에러메세지는 이렇게 나옵니다.');
console.warn('경고메세지는 이렇게 나옵니다.');

/**
 * ----------------------------------
 *  변수 
 * ----------------------------------
 *  
 */
// let , const, var - 변수 선언할 시
// 주로 쓰는 것은 ES6부터 추가된 let, const

// dog라는 변수를 선언한다.
let dog;

// 변수 선언시 주의점 - 이름이 중복되면 안된다.(스코프, scope가 달라야한다.)
// 변수 이름에 숫자를 적어도 되지만 맨 앞에 적으면 안된다. ex) 1dog
// 변수 이름에 연산자를 붙여서는 안된다. ex) + - * / 등
let dog1; // 숫자는 뒤에 붙여서 사용
let _dog; // underscore(밑줄)을 붙이는 것도 중요하다.
console.log(dog1, _dog);

//변수를 선언과 동시에 할당
let cat ='고양이';
console.log(cat);

// 이름 짓는 규칙
// 변수명은 대소문자를 가린다. 
let thisisusername; // 긴 변수명을 지을 때 소문자로만 지으면 읽기가 힘들다
let this_is_user_name; //snake case: 밑줄을 활용한 변수명 짓는 방법
// let this-is-user-name 이렇게 사용하지 않는다

let thisIsUserName; // camel case: 낙타등같이 생겼다고 해서

// PacalCase : 모든 단어의 첫 글자르 대문자로
let ThisIsUserName;

// let 이라는 키워드를 통해서 변수를 선언
// 변수 = 변하는 값
// 진도개 삼용이 , 치와와 영철이 , 포메 춘향이
let dogName = '삼용이';
dogName = '영철이';
dogName = '춘향이';
console.log(dogName);


// 고양이 - 보림이, 반달이, 밤이
const catName = '보름이'
// 상수(Constant)로 선언된 값은 중간에 바꿀 수 없다.
// const: 상수는 값이 변하면 안되는 경우에 사용
// catName = '밤이';
console.log(catName);

//몇몇의 예외적인 상황은 있지만, 기본적으로 상수는 변하지 않는다는 것이 기본
const number = [1,2,3];
number.push(4);
console.log(number);

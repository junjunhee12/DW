// console.log('switch')

//switch문 
// 조건별로 출력 내용을 다르게 구분해서 실행하는 방법

let food = '볶음밥'
// switch문은 비교연산자는 쓸 수 없지만, 하나의 값이 일치하면 , 해당 case를 실행한다. break문이 없으면 실행이 중단되지 않는다.
switch(food){
    case "짬뽕":
        console.log('오늘 점심은 짬뽕');
        break;
    case "볶음밥":
        console.log('오늘 점심은 볶음밥')
        break;
    case "떡볶이":
        console.log('오늘 점심은 볶음밥')
        break;
    default:
        console.log('오늘 점심은 굶습니다.');
        break;
    }

    


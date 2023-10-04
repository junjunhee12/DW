// 날짜 --------------------------------------------------------
var now = new Date();
document.write(now);

// 년도만 나오게 한다.
let year = now.getFullYear();
document.write(`<br/>${year}`)

// 월만 나오게 한다. 
let month = now.getMonth();
month = month + 1
month = month >= 10 ? month : `0${month}`
document.write(`<br/>${month}`)

// 일만 나오게한다. 
let date = now.getDate();
date = date >= 10 ? date : `0${date}`

document.write(`<br/>${date}`)

document.write(`<br/>${year}-${month}-${date}`)

let isoFormat = now.toISOString();

// split T를 기준으로 나누어준다.
isoFormat = isoFormat.split('T');
// 배열의 인덱스를 나누고 배열을 가지고 오는 방법
isoFormat = isoFormat[0];
document.write('<br/>' + isoFormat)


// 
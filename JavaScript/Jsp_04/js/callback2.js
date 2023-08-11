// 1. 이름과 나이를 입력받아 알림창에 표시하는 함수 정의
// 2. 함수를 인수로 받아서 또하나의 함수를 정의하고 그안에서 콜백 함수 실행

function showInfo(name, age) {
    alert(`안녕하세요?\n${name}님, 나이가 ${age}살이시군요`); // \n 줄바꿈
}

function getInfo(callback) {
    let name = prompt("이름을 입력하세요");
    let age = prompt("나이를 입력하세요");
    callback(name, age);
}

getInfo(showInfo);
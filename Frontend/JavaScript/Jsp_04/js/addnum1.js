// 익명 함수를 변수에 할당

let sum = function(a, b) {   // 변수 이름이 함수명 역할을 함
    return a + b;
}
 
console.log(`함수 실행 결과: ${sum(10, 20)}`);


// 즉시 실행 함수
(function() {
    let userName = prompt('이름을 입력하세요', '');
    console.log('첫번째 즉시 실행함수');
    alert(`안녕하세요, ${userName}님!`);
}());

(function(a, b) {
    console.log('두번째 즉시 실행함수');
    console.log(`a + b = ${a + b}`);
})(10, 20); // 함수를 정의하고 바로 호출(인수를 괄호에 넣어 전달)
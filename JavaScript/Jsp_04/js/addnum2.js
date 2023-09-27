// 간단한 화살표 함수

// let hi = function() {
//     return "안녕하세요.";
// }
let hi = () => "안녕하세요.";

alert(hi());


//매개변수가 있는 화살표 함수(매개변수가 1개일 때)

// let hi2 = function(name) { 
//     alert(name + "님, 안녕하세요.");
// }
let hi2 = (name) => alert(name + "님, 안녕하세요.");

hi2("홍길동");

//매개변수가 있는 화살표 함수(매개변수가 2개일 때)

// let sum = function(a, b) {
//     return a + b;
// }
let sum = (a, b) => a + b;

console.log('합계 : ' + sum(10, 20));
// 1. 텍스트 가져오기

// var로 변수 선언
//  첫번째 p태그의 텍스트를 가져와서 콘솔에 출력하기
var inText = document.querySelector("p").innerText;
console.log(`첫번째 p 태그 텍스트: ${inText}`);

var inText = document.querySelector(".user").innerText;
console.log(`첫번째 user 클래스 텍스트: ${inText}`);

var inText = document.querySelector("#desc").innerText;
console.log(`첫번째 desc 아이디 텍스트: ${inText}`);

// let으로 변수 선언
let inTexts = document.querySelectorAll("p");
console.log(`p 태그의 개수: ${inTexts.length}, inTexts 값 : ${inTexts}`); // 3개
console.log(`3번째 p 태그 텍스트: ${inTexts[2].innerText}`);

inTexts = document.querySelectorAll('.user')[1].innerText;
console.log(`두번째 user 클래스 텍스트: ${inTexts}`);


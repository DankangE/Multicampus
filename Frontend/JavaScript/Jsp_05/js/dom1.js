var inText = document.querySelector("p").innerText;
console.log('첫번째 p 태그 텍스트: ${inText}');

var inText = document.querySelector(".user").innerText;
console.log('첫번째 user 태그 텍스트: ${inText}');

var inText = document.querySelector("#desc").innerText;
console.log('첫번째 desc 태그 텍스트: ${inText}');

let inTexts = document.querySelectorAll("p")[2].innerText;
console.log('세번째 p 태그 텍스트: ${inText}');

inTexts = document.querySelectorAll(".user")[1].innerText;
console.log('두번째 user 태그 텍스트: ${inText}');
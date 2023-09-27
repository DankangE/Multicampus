// css 변경 기본: title 요소의 글자색과 배경색을 변경한다.

let title = document.querySelector("#title");

title.onclick = function() {
    title.style.color = "white";    // tiltle 요소의 글자색 변경
    title.style.backgroundColor = "black";   // title 요소의 배경색 변경
    title.style.border = "2px solid red";    // title 요소의 테두리 설정
    title.style.padding = "10px";   // title 요소의 padding 설정
}

// p 요소의 글자 스타일 변경.
let userName = document.querySelector("#desc p");

userName.onclick = function() {
    userName.style.color = "blue";
    userName.style.fontWeight = "bold";
}
// window.onload = alert("안녕하세요!");
// window.onresize = alert("화면 크기가 조정되었습니다.");

const btns = document.querySelectorAll("button");

btns[0].onclick = function() {
    document.body.style.backgroundColor = "green";
}

// btns[0].onclick = () => document.body.style.backgroundColor = "green";
btns[1].onclick = () => document.body.style.backgroundColor = "white";


// 키보드 이벤트
// 이벤트 영역 설정

const body = document.body;

// 키보드 이벤트 발생시 result 클래스에 키보드 이벤트 정보 출력

const result = document.querySelector("#result");

// body.onkeydown = function(event) {
//     result.innerText = `code : ${event.code}, \nkey ${event.key}`;
// }

body.addEventListener("keydown", (event) => {
    result.innerText = `code : ${event.code}, \n
                        key ${event.key}`;
});
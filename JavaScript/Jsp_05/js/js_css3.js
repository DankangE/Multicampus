
const title = document.querySelector("#title"); // 타이틀 객체 가져오기(전역변수)

// 타이틀 클릭시 타이틀 클래스 추가/제거
title.onclick = function() {
    console.log("console 출력" + title.classList.contains("blue-italic"));

    if (title.classList.contains("blue-italic")) { // blue-italic 클래스가 있으면
        title.classList.remove("blue-italic");      // blue-italic 클래스를 제거
    } else {                                        // blue-italic 클래스가 없으면
        title.classList.add("blue-italic");         // blue-italic 클래스를 추가
    }
}

// 이미지 클릭시 타이틀 클래스 추가/제거
const img = document.querySelector("#profile img"); // 이미지 객체 가져오기(전역변수)

img.onclick = function() {
    title.classList.toggle("blue-italic");
}
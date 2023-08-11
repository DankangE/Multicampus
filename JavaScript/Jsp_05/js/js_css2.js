// classList 프로퍼티(속성)를 사용하여 클래스를 추가하거나 삭제하기

// desc ID 내부의 p태그 클래스 이름 확인
const cList = document.querySelector('#desc p').classList;
console.log(cList);

// title에 클래스 추가/삭제
const title = document.querySelector('#title'); // id가 title인 요소 선택
title.onclick = function() {
    title.classList.add('blue-italic'); // title 요소를 클릭하면 blue-italic 클래스 추가
                                        // blue-italic 클래스가 css 있으면 추가, 없으면 무시
    document.querySelector('#desc p').classList.remove('clicked'); // desc ID 내부의 p태그 클래스 삭제
}
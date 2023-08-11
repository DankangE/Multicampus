const body = document.querySelector('body');
const pTag = document.querySelector('p');

body.addEventListener('click', function(event) {
    // alert(`마우스 위치 좌표 : ${event.pageX}, ${event.pageY}`);
    if (event.altKey) {
        pTag.style.display = 'flex';
        let altKey = "Alt 키가 눌렸습니다.";
        pTag.innerText = `마우스 위치 좌표 : ${event.pageX}, ${event.pageY}\n ${altKey}`;
    } else {
        pTag.style.display = 'none';
    }
});

const elements = document.querySelectorAll('*');

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function(event) {
        console.log(event.target.tagName);
    });
}

// 캘러셀 만들기
const container = document.querySelector('#container');
const imgPics = ['pic-1.jpg', 'pic-2.jpg', 'pic-3.jpg', 'pic-4.jpg', 'pic-5.jpg'];

container.style.backgroundImage = `url(./images/${imgPics[0]})`; // 초기 이미지

const arrows = document.querySelectorAll('.arrow');
let idx = 0; // 이미지 인덱스

arrows.forEach(function(arrow) {

});

for (let arrow of arrows) {
    arrow.addEventListener('click', function(event) {
        if (event.target.id === 'left') {
            idx--;
            if (idx < 0) {
                idx = imgPics.length - 1;
            }
            container.style.backgroundImage = `url(images/${imgPics[idx]})`;
        }
    })
    arrow.addEventListener('click', function(event) {
        if (event.target.id === 'right') {
            idx++;
            if (idx > 4) {
                idx = 0;
            }
            container.style.backgroundImage = `url(images/${imgPics[idx]})`;
        }
    })
}

// 마우스 오른쪽 버튼 비활성화 //

window.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert('오른쪽 마우스 사용할 수 없습니다.');
});


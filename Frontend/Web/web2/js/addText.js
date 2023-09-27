const orderInfo = document.querySelector('#orderInfo');
const orderBtn = document.querySelector('#order');
const h2_Title = document.querySelector('#container > h2');

// 주문하기 버튼 클릭 이벤트
orderBtn.addEventListener('click', function () {
    let newP = document.createElement('p'); // p 요소 생성
    let newText = document.createTextNode(h2_Title.innerText); // 책 제목 내용을 가져와 텍스트 노드 생성

    newP.appendChild(newText); // p 요소에 텍스트 노드 추가
    newP.style.color = 'blue';
    newP.style.fontSize = '0.8em';

    orderInfo.appendChild(newP); // 주문 내역에 p 요소 추가
}, {once: true});
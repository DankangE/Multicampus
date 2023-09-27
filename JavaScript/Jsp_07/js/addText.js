const orderInfo = document.querySelector('#orderInfo'); // 주문 내역 출력 div
const orderBtn = document.querySelector('#order'); // 주문 하기 
const h2_Title = document.querySelector('#container > h2'); // 책 제목 요소(h2))


// 주문하기 버튼 클릭 이벤트
orderBtn.addEventListener('click', function () {
    let newP = document.createElement('p'); // p 요소 생성
    let newText= document.createTextNode(h2_Title.innerText); // 책 제목 내용을 가져와 텍스트 노드 생성

    newP.appendChild(newText); // p 요소에 텍스트 노드 추가
    newP.style.color = 'blue'; // p 요소의 글자 색상을 파란색으로 변경
    newP.style.fontSize = '0.8em' // p 요소의 글자 크기를 0.8em으로 변경

    orderInfo.appendChild(newP); // 주문 내역에 p 요소 추가
}, {once: true}  // 이벤트 리스너를 한 번만 실행/ 생락하면 계속 추가됨
);

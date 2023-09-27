let btn = document.querySelector('button'); // 버튼 요소 가져오기

btn.addEventListener('click', function() { // 버튼 클릭 시
    let newImg = document.createElement('img'); // img 요소 생성
    let srcNode = document.createAttribute('src'); // src 속성 생성

    srcNode.value = 'images/wall.jpg'; // src 속성 값 지정
    newImg.setAttributeNode(srcNode); // img 요소에 src 속성 추가
    document.body.appendChild(newImg); // body 요소에 img 요소 추가
});
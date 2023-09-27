const btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
    // input 값 가져오기
    const word = document.querySelector('#word').value;
    // 문자열 길이 계산
    let wordLen = word.value.length;

    // result 영역에 계산결과 출력
    const resultClick = document.querySelector('#resultClick');
    resultClick.innerText = `글자수 : ${wordLen}`;

});

// input 요소의 값이 변경될 때 이벤트
word.onchange = function() {
    //문자열 길이 계산
    wordLen = word.value.length;

    // result 영역예 계산한 값 출력
    const resultChange = document.querySelector('#resultChange');
    resultChange.innerText = `글자 입력 : ${wordLen}`;
}
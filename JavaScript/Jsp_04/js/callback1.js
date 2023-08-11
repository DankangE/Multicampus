 const bttn = document.querySelector('button'); // 첫번째 버튼 요소를 가져옴

// 1. 콜백함수를 정의하고 전달하는 방법
 function dsp() {
    alert('콜백 기본 함수 버튼을 클릭했습니다.')
 }
 bttn.addEventListener('click', dsp); // 버튼을 클릭하면 display 함수를 호출함

 // 2. 익명함수로 콜백함수를 전달하는 방법
 bttn.addEventListener('click', () => {alert('익명함수 버튼을 클릭했습니다.')})
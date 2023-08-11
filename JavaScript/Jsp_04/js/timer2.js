let cnt = 0;

// 직접 함수를 호출하는 방식
let timer = setInterval( () => { 
    console.log('안녕하세요.');
    cnt++;  // cnt += 1; 인사말 표시 횟수 체크
    if (cnt === 5) 
        clearInterval(timer); // cnt가 5가 되면 타이머를 중지
}, 2000);

console.log('2초마다 실행될 겁니다.');

// 함수를 선언하고 호출하는 방식
// function timer() {
//     console.log("안녕하세요.");
//     cnt++;
//     if (cnt === 5)
//         clearInterval(timer);
// }

// setInterval(timer, 2000);
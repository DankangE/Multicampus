const factor = 5; // 전역 변수(상수)

function calc() {
    return num + factor; // num은 전역 변수가 아니므로 에러 발생
}

// {} 블록 안에서 선언된 변수는 지역 변수
{
    const num = 10; // 블록변수 num 선언
    let result = calc(); // 지역 변수 result 선언
    document.write(`result : ${result} <br>`);
}
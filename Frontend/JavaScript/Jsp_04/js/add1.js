// 1 ~ 10 까지의 합을 구하는 함수 정의
function calcSum1() {
    var sum = 0;
    for (var i = 1; i <= 10; i++) {
        sum += i;
    }
    console.log(`1부터 10까지의 합계는 ${sum}입니다.`);
}

// 매개변수를 이용한 함수 정의(종료값)
function calcSum2(s, n) {
    var sum = 0;
    for (var i = s; i <= n; i++) {
        sum += i;
    }
    console.log(`${s}부터 ${n}까지의 합계는 ${sum}입니다.`);
}

calcSum1()  // 함수 호출
calcSum2(51, 100)  // 함수 호출

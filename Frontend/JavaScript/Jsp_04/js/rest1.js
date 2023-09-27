// 함수에서 하나의 변수에 여러개의 데이터를 입력받는 방법

// 매개변수가 두 개인 함수
function addNum(a, b) {
    return a + b;
}

console.log('매개변수가 두 개인 함수'); // 3
console.log(addNum(1, 2)); // 3
console.log(addNum(1, 2, 5, 10)); // 3 => 5, 10은 무시됨

// 모두 받아서 배열로 만들기(인수의 개수에 상관업이 모두 받아서 처리)
function sumAll(...number) {
    let sum = 0;
    for (let num of number) {
        sum += num;
    }
    return sum;
}
console.log('...매개변수'); // 3
console.log(sumAll(1, 2, 3, 4, 5)); // 15
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55

// 첫번째는 변수1, 나머지는 변수2 받아서 처리하는 방법
function showName(firstName, ...lastName) {
    let str = '내가 가장 좋아하는 과일은(firstName) ' + firstName + '이고\n그 다음은(...lastName) ' 
                + lastName + '입니다.';
    return str;
}

console.log(showName('사과', '포도', '복숭아', '수박')); // 
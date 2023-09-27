// 사용자로부터 10개의 숫자데이터를 입력받아
// 합계와 평균을 구하는 프로그램을 작성하시오.
// 단, 평균은 소수점 2자리까지만 표현하시오.
// 사용자로부터 입력받은 데이터는 배열에 저장한다.

userArr = new Array();

for (var i = 0; i < 10; i++) {
    userArr.push(parseInt(prompt("숫자를 입력하세요.")));
}

var sum = 0;
for (var i = 0; i < userArr.length; i++) {
    sum += userArr[i];
}

userArr.forEach()

var avg = sum / userArr.length;

console.log("합계 : " + sum);
console.log("평균 : " + avg.toFixed(2));
console.log("데이터 : " + userArr);
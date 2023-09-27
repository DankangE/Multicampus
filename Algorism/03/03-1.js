// 평균 구하기(p38) => JS 코드
const n = prompt();
let scoreList = [];

for (let i = 0; i < n; i++) {
  scoreList.push(prompt());
}

let maxScore = Math.max(...scoreList);
// reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
// userSum = scoreList.reduce((sum, currValue) => acc + cur, 0);
userSum = scoreList.reduce(function add(sum, currValue) {
    return sum + currValue;
}, 0);

console.log(userSum / maxScore * 100 / n);
document.write(userSum / maxScore * 100 / n);
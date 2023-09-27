// 1번 문제 정답
function solution1(input) {
    let n = Number(input[0]);
    let count = 0;
    let numArr = [500,100,50,10];

    for(let i = 0; i < numArr.length; i++) {
        count += parseInt(n / numArr[i]);
        n = n % numArr[i];
    }

    return count;

}

let input1 = ['1260'];
console.log('동전', solution1(input1));



// //////////////////////////////////////////////////////////////////////
// 2번 문제 정답
function solution2(input) {
    let N = Number(input[0].split(' ')[0])
    let X = Number(input[0].split(' ')[1])
    let numArr = input[1].split(' ').map((dr) => Number(dr));

    let curV = 0; // 현재 값
    let maxV = 0; // 최대 값
    let maxC = 0; // 최대 값의 카운트

    for (let i = 0; i < N - X + 1; i++) {

        // 1)번 처음 값은 디폴트로 구해줌 (defalut 값)
        if (i == 0) {
            for (let j = 0; j < X; j++) {
                curV += numArr[j];
            }
            maxV = curV;
            maxC = 1;
        }
        // 다음 값 부터 ~
        else {

            // 2)번 전체적으로 한칸씩 오른쪽으로 이동한다고 생각해보면
            // 한칸 이동한 맨 왼쪽 값은 빼고
            // 한칸 이동한 맨 오른쪽 값은 더해준다!
            curV = curV - numArr[i - 1] + numArr[i + X - 1];

            // 3)번
            if (curV == maxV) {
                maxC += 1;
            } else if (curV > maxV) {
                maxV = curV;
                maxC = 1;
            }
        }
    }

    if (maxV == 0) {
        return 'SAD';
    } else {
        return maxV + '\n' + maxC;
    }
}

let input2 = ['5 2', '1 4 2 5 1']
console.log('방문자', solution2(input2));



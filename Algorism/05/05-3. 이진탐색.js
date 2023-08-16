// 1. [4, 1, 5, 2, 3] => [1, 2, 3, 4, 5] 로 정렬
// 2. [1, 3, 7, 9, 5] 배열을 순환하며 1번 배열에 값이 있는지 없는지 이분탐색을 진행

function solution(input) {
    // 1.입력값을 배열로 변환( [4, 1, 5, 2, 3] => [1, 2, 3, 4, 5])
    let originArr = input[1].split(' ').map((dr) => Number(dr)).sort((a, b) => a - b);
    // 2.찾을 값 배열로 변환
    let findArr = input[3].split(' ').map((dr) => Number(dr));

    console.log(originArr)
    console.log(findArr)

    document.write(originArr.join(' '))
    document.write('<br>')
    document.write(findArr.join(' '))
    document.write('<br>')

    let strIdx = 0; // 재귀에서 사용
    let endIdx = originArr.length - 1; // 재귀에서 사용
    
    // 3. 반복문을 이용한 이진 탐색 호출
    let result = []; // 결과값 저장함수 초기화
    findArr.forEach((dr) => {
        result.push(binarySearch_while(originArr, dr)); // 1.반복문 사용시
    });
    console.log('반복문 사용시')
    console.log(result.join('\n'))

    document.write('<br>')
    document.write(result.join(' '))
    document.write('<br>')


    
    // 4. 재귀를 이용한 이진 탐색 호출
    result = []; // 결과값 저장함수 초기화
    findArr.forEach((dr) => {
        result.push(binarySearch(originArr, strIdx, endIdx, dr)); // 2.재귀 사용시 
    });

    console.log('재귀 사용시')
    console.log(result.join('\n'))

    document.write('<br>')
    document.write(result.join(' '))
    document.write('<br>')
}


// 1.이분 탐색 (반복문 사용)
function binarySearch_while(originArr, findValue) {
    let sIdx = 0; // 시작 인덱스 
    let eIdx = originArr.length - 1; // 종료 인덱스 
    let mid = Math.floor((sIdx + eIdx) / 2); // 중간 값
    
    while (eIdx - sIdx >= 0) { //종료 인덱스가 시작 인덱스보다 클때까지만 반복
    
        // 탐색값과 같으면 종료
        if (originArr[mid] == findValue) {
            return 1
        }
        // 탐색값이 크면 중간 기준 왼쪽으로
        else if (originArr[mid] > findValue) {
            eIdx = mid - 1;
        }
        // 탐색값이 작으면 중간 기준 오른쪽으로
        else {
            sIdx = mid + 1;
        }
    
        // 탐색값과 다를 경우 중간값을 다시 설정
        mid = Math.floor((sIdx + eIdx) / 2);
    }

    return 0
}

// 2.이진 탐색 재귀
function binarySearch(arr, sIdx, eIdx, findValue) {
    let mid = Math.floor((sIdx + eIdx) / 2); // 중간 값

    if (eIdx - sIdx >= 0) {   //종료 인덱스가 시작 인덱스보다 클때까지만 반복
        if (arr[mid] == findValue) {   // 탐색값과 같으면 종료
            return 1
        } else if (arr[mid] > findValue) {   // 탐색값이 크면 중간 기준 왼쪽으로
            return binarySearch(arr, sIdx, mid - 1, findValue);
        } else {    // 탐색값이 작으면 중간 기준 오른쪽으로              
            return binarySearch(arr, mid + 1, eIdx, findValue);
        }
    }

    return 0
}

// 데이터 입력 및 실행
let input = ['5', '4 1 5 2 3', '5', '1 3 7 9 5'];
solution(input);
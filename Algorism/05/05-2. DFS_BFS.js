// 1. 주어진 배열 데이터를 인접 리스트로 변환 후 연결된 데이터 정렬
// 2. DFS, BFS 구조를 이용해 알고리즘 구현

function solution(input) {
    // 1. 데이터를 인접 리스트로 변환
    let info = input.slice(0, 1)[0].split(' ')[2];  
    let innerArr = new Object();  // 인접 리스트를 담을 객체

    input.slice(1).forEach((dr) => { // 데이터를 인접 리스트로 변환
        let [d1, d2] = dr.split(' ');  // 데이터를 분리
        innerArr[d1] = innerArr[d1] ? [...innerArr[d1], d2] : [d2];  // 인접 리스트에 추가
        innerArr[d2] = innerArr[d2] ? [...innerArr[d2], d1] : [d1];  // 인접 리스트에 추가
    });

    for (let data in innerArr) {  // 연결된 데이터 정렬
        innerArr[data] = innerArr[data].sort((a, b) => Number(a) - Number(b));
        // 연결된 데이터 정렬
    }

    document.write('<br>');
    document.write(DFS(innerArr, info));

    document.write('<br>');
    
    document.write(BFS(innerArr, info));
    document.write('<br>');
}


// 깊이 우선 탐색(D)
function DFS(innerArr, curNode) {
    let visitedArr = []; // 방문한 노드를 담는 배열
    let needArr = [curNode]; // 방문할 노드를 담는 배열

    while (needArr.length !== 0) { // 방문할 노드가 없을 때까지
        let node = needArr.shift();
        if (!visitedArr.includes(node)) { // 방문한 적이 없는 경우
            visitedArr.push(node); // 방문한 노드에 추가
            
            // 하위 노드들을 먼저 탐색해야하므로 연결된 노드 배열을 앞에 넣어줌.
            needArr = innerArr[`${node}`] ? [...innerArr[`${node}`], ...needArr] : [...needArr];
        }
    }
    return visitedArr.join(' ')
}


// 너비 우선 탐색
function BFS(innerArr, curNode) {
    let visitedArr = [];
    let needArr = [curNode];

    while (needArr.length !== 0) { // 방문할 노드가 없을 때까지
        let node = needArr.shift();
        if (!visitedArr.includes(node)) { // 방문한 적이 없는 경우
            visitedArr.push(node); // 방문한 노드에 추가
            
            // 현재 노드들을 먼저 탐색해야하므로 연결된 노드 배열을 뒤에 넣어줌.
            needArr = innerArr[`${node}`] ? [...needArr, ...innerArr[`${node}`]] : [...needArr];
        }
    }

    return visitedArr.join(' ')
}


// 데이터 입력 및 실행
input = ['4 5 1', '1 2', '1 3', '1 4', '2 4', '3 4'];
solution(input)
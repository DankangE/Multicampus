// 매개변수 기본 값 설정

function sum(x, y = 1) {
    return x + y;
}

console.log(sum(1,2)); // 3
console.log(sum(1)); // 2


// 가변형 매개변수 (나머지 매개변수)
function addNum(...numbers) {
    console.log(numbers);
    let result = 0;
    for (let numbers of numbers) {
        result += numbers;
    }

    return result;
}

console.log(addNum(1,2)); // 3
console.log(addNum(1,2,3,4,5)); // 15


// 배열 전개 연산자
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];

console.log(arr1.concat(arr2,arr3));
console.log(...arr1, ...arr2, ...arr3);

// 전개구문을 이용한 배열 복사
var arr1 = [1, 2, 3];
var arr2 = arr1; // 얕은 복사

arr2[1] = 100;

console.log(arr1, arr2); // [1, 100, 3] [1, 100, 3]

var arr3 = [...arr1] // 깊은 복사
arr3[1] = 200;
console.log(arr1, arr3); // [1, 100, 3] [1, 200, 3]
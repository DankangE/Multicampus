// 지역변수, 전역변수 (변수 = 스코프)
// 전역변수는 어디서든 사용 가능
// 지역변수는 선언된 함수 내에서만 사용 가능

var globaFs = 10; //전역변수

function sum() {
    var localFs = 10; // 지역변수
    var result = localFs + globaFs;  // result: 지역변수
    
    console.log(`함수 내부에서 출력: ${result}, ${localFs}, ${globaFs}`);
}

sum();
console.log(`함수 외부에서 출력: ${result}, ${localFs}, ${globaFs}`); 
//함수 내부 result, localFs 사용 불가능
// sum 함수를 벗어나는 순간 지역변수는 메모리 사라짐
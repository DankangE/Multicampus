var globaFs = 10; //전역변수 

function sum() {
    var localFs = 10; // 지역변수
    result = localFs + globaFs; //var 생략 가능(전역변수로 선언됨)
    
    console.log(`함수 내부에서 출력: ${result}, ${localFs}, ${globaFs}`);

    return localFs;
}

var lFs = sum();
console.log(`함수 외부에서 출력: ${result}, ${lFs}, ${globaFs}`); 
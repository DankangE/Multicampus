function hello() {
    return '안녕하세요?';
}

function bye() {
    return '안녕히 가세요.';
}

function userCheck(name, fn) {
    alert(`${name}님 ${fn()}`);
}

// 함수를 인수로 전달하면서 호출
userCheck('홍길동', hello);
userCheck('이순신', bye);
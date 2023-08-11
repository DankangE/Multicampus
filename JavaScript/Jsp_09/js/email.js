const email = document.getElementById('userEmail');
const btn = document.getElementsByTagName('button');
const result = document.querySelector('#result');


btn.addEventListener('click', function() {
    // 이메일 주소를 입력하지 않았을 경우
    if (email.value == '') {
        result.textContent = '이메일 주소를 입력해주세요.';
        email.focus();
    } else if (email.values.includes("@") === false) {
        result.innerText = '잘못된 이메일 주소가 입력되었습니다.';
        email.focus();
    } else {
        userId = email.value.split('@')[0];
        // userId = userId.substring(0, 3);
        leng = userId.length / 2;
        userId = userId.substring(0, leng); // userId의 절반 글자만 저장
        domain = email.value.split('@')[1];
        result.innerText = `${userId}***@${domain}`;

        email.value = ''; // 이메일 주소 입력란 초기화
        email.focus();
    }
});

function formCheck(form) {
    //유효성 검사
    if (form.id.value == "") {
        alert('아이디를 입력하세요.');
        form.id.focus();
        return;
    }
    if (form.pwd.value == "") {
        alert('비밀번호를 입력하세요.');
        form.pwd.focus();
        return;
    }
    if (form.pwd.value.length < 10 || form.pwd.value.length > 16) {
        alert('비밀번호는 10 ~ 16자 사이로 입력하세요.');
        form.pwd.focus();
        return;
    }
    if (form.pwdCheck.value == "") {
        alert('비밀번호 확인을 입력하세요.');
        form.pwdCheck.focus();
        return;
    }
    if (form.name.value == "") {
        alert('이름을 입력하세요.');
        form.name.focus();
        return;
    }
    if (form.mailid.value == "") {
        alert('e-mail을 입력하세요.');
        form.mailid.focus();
        return;
    }
    if (form.mailid.value == "") {
        alert('e-mail을 입력하세요.');
        form.mailid.focus();
        return;
    }
    if (form.email.value == "" && form.mailslc.selectedIndex == 0) {
        alert('e-mail을 입력하세요.');
        form.mailslc.focus();
        return;
    }

    if (form.pwd.value != form.pwdCheck.value) {
        alert('비밀번호가 일치하지 않습니다.');
        form.pwd.focus();
        return;
    }

    form.action = "/singup/insert";
    form.mothod = "post";
    form.submit();

    Window.on('load', () => {
        alert("회원가입이 완료되었습니다.");
        location.href = "/login";
  });

    // form.reset();
}

function checkId(form) {
}

function checkEmail(form) {


    return;
}


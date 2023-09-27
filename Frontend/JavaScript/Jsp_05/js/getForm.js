
const selectMenu = document.querySelector('#major');
console.log(selectMenu.options); // 선택된 option 태그의 index 값

selectMenu.onchange = function () {   // select 태그의 값이 변경되면
    // 선택된 option 태그의 value 값
    console.log(selectMenu.selectedIndex);
    let selectText = selectMenu.options[selectMenu.selectedIndex].innerText;
    console.log(selectText); 
    alert(selectText + '을(를) 선택하셨습니다.');
}


const fieldSet = document.getElementsByTagName('fieldset');

// 옵션 버튼 접근
fieldSet[1].onclick = function () {
    let subject = document.getElementsByName('subject');
    for (let i = 0; i < subject.length; i++) {
        if (subject[i].checked) {
            console.log(subject[i].value + '을(를) 선택하셨습니다.');
            break;
        }
    }
}

// 체크박스 접근
fieldSet[2].onclick = function () {
    let mailing = document.querySelectorAll("input[name='mailing']:checked");
    for (let i = 0; i < mailing.length; i++) {
        console.log(mailing[i].value + '을(를) 선택하셨습니다.');
    }
}


// 번튼 클릭시 옵션과 라디오 버튼 값 가져오기
const btn = document.querySelector('button');

btn.onclick = function () {
    let subject = document.getElementsByName('subject');
    let opt='';

    for (let i = 0; i < subject.length; i++) {
        if (subject[i].checked) {
           opt = subject[i].value;
           break;
        }
    }

    let mailing = document.querySelectorAll("input[name='mailing']:checked");
    console.log(mailing);
    red=[];
    for (let i = 0; i < mailing.length; i++) {
        red.push(mailing[i].value);
    }

    console.log('선택한 과목: ' + opt);
    console.log('메일 수신 여부: ' + red);
}
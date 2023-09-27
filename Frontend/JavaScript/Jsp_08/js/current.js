const today = new Date();
console.log(today);
console.log(today.toDateString());


const dspDate =  document.querySelector("#today");

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day = today.getDay();


const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log(week[day]+'day');


let week2;
switch(day) {
    case 0: week2 = 'Sun'; break;
    case 1: week2 = 'Mon'; break;
    case 2: week2 = 'Tue'; break;
    case 3: week2 = 'Wed'; break;
    case 4: week2 = 'Thu'; break;
    case 5: week2 = 'Fri'; break;
    case 6: week2 = 'Sat'; break;
}

dspDate.innerHTML = `${year}년 ${month}월 ${date}일 <span>${week2}</span>`;


const dspTime = document.querySelector('#clock');

// 시간을 계속해서 출력하기 위한 함수 작성

let clock = function () {
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let min = currentTime.getMinutes();
    let sec = currentTime.getSeconds();

    console.log(`${hour} : ${min} : ${sec}`)

    // 12시간 형식으로 출력
    let period = "AM"; // 오전, 오후 구분
    if(hour === 0) {
        hour = 12;
    } else if (hour > 12) {
        hour = hour - 12;
        period = "PM";
    }

    // 시간 자리수 통일 (00:00:00)
    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec > 10) ? "0" + sec : sec;

    dspTime.innerText = `${period} ${hour} : ${min} : ${sec}`;
    // 시간값만 출력하기 위해 innerText 사용
}

setInterval(clock, 1000);
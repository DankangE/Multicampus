const result = document.querySelector('#result');
const firstDay = new Date("2000-01-01"); // 시작일
const lastDay = new Date(); // 종료일(현재 날짜)


// 시작일부터 종료일까지의 기간 계산

// 시작일부터 오늘까지의 시간 계산
let pTime = lastDay.getTime() - firstDay.getTime();

// 밀리초를 일단위로 변환
let pDay = math.round(pTime / (1000 * 60 * 60 * 24));

// 결과 출력
result.innerText = pDay;
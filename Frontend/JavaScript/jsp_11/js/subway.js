// 역명 정의

function train() {
    yield '광운대';
    yield '월계';
    yield '석계';
    yield '신이문';
    yield '외대앞';
    yield '회기';
    yield '청량리';
    yield '제기동';
    yield '신설동';
    yield '동묘앞';
    yield '동대문';
    yield '종로5가';
    yield '종로3가';
    yield '종각';
    yield '시청';
    yield '서울역';
}

let subway = train();

const button = document.querySelector('button');
const result = document.querySelector('#result');

button.addEventListener('click', () => {
    let station = subway.next();
    if (!station.done) {
        result.innerHTML = station.value;
    } else {
        result.innerHTML = '종점입니다.';
        // button.setAttribute('disabled', 'disabled');
        button.disabled = true;
    }
});

// 첫번째 태그를 선택하고 요소를 가져온다.
let _div = document.querySelector('div'); // div 첫번째 태그를 선택
console.log(_div);

let _p = document.querySelector('p'); // p 첫번째 태그를 선택
console.log(_p);

let _div_id = document.querySelector('#desc'); // id가 desc인 태그를 선택
console.log(_div_id);

let _p_class = document.querySelector('.user');  // class가 user인 첫번째 태그를 선택
console.log(_p_class);

// 모든 태그를 선택하고 요소를 가져온다.
let _p_all = document.querySelectorAll('p'); // p 태그를 모두 선택
console.log(_p_all);
console.log(_p_all[1]);

const viewH1 = document.querySelector('h1');
viewH1.onclick = function() {
    alert('0000 님 안녕하세요.');
}

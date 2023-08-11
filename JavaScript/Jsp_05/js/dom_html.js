// 2. HTML 태그 가져오기

// # dest 태그의 HTML 가져오기
let inHTML = document.querySelector("#desc").innerHTML;
console.log(`#desc 태그 HTML: ${inHTML}`);

let inHTMLs = document.querySelectorAll("#desc").innerHTML; // 사용 불가
console.log(`inHTMLs 값 : ${inHTMLs}`);

// user 클래스의 HTML 가져오기
inHTML = document.querySelector(".user").innerHTML;
console.log(`.user 태그 HTML: ${inHTML}`);

inHTMLs = document.querySelectorAll(".user").innerHTML; // 사용 불가
console.log(`.user 태그 HTML: ${inHTMLs}`);


// textContent : 태그 내부의 문자열을 가져옴
let text = document.querySelector("#desc").textContent;
console.log(`#desc 태그 내부 문자열: ${text}`);

let texts = document.querySelectorAll("#desc").textContent;  // 사용 불가
console.log(`#desc 태그 내부 문자열: ${texts}`);
// 입력한 텍스트 길이

var str = prompt("문자열을 입력하세요", "");
console.log("입력한 문자열 : " + str);

console.log("입력한 문자열의 길이 : " + str.length);
console.log("특정 위치값의 글자 : " + str.charAt(3));
console.log("특정 위치값의 글자 : " + str[3]);
console.log("특정 글자의 위치값 출력 : " + str.indexOf('요'));

function searchChar(str, char) {
    let count = 0;
    let pos = new Array();

    for (let i = 0; i < str.length ; i++) {
        if(str === char) {
            count++;
            pos.push(i);
        }
    }
    console.log("찾는 문자의 개수 : " + count);
    console.log("찾는 문자의 위치 : " + pos);

    // return [count, pos];
    return {tcnt: count, tpos : pos};
}

const strText = prompt("문자를 입력하세요", "");
const charText = prompt("찾을 문자를 입력하세요", "");

let result = searchChar(strText, charText);
console.log(result);

console.log("찾는 문자의 개수 : " + result.tcnt);
console.log("찾는 문자의 위치 : " + result.tpos);
// 1. 사용자로부터 문장을 입력받아 변수에 저장한다.
// 2. 사용자로부터 찾을 문자를 입력받아 변수에 저장한다.
// 3. 입력받은 문장에서 입력받은 문자가 몇개이며 위치는 어디인지 반환하는 함수를 작성한다.

// var str = prompt("문자열을 입력하세요", "");

function searchChar(str, char) {
    let count = 0;
    let pos = new Array();
    var len = chr.length;

    for (var i = 0; i < String.length - len + 1; i++) {
        if (String.substring(i, len + i) == char) {
            cnt++;
            pos.push(i);
        }
    }

    // for (let i = 0; i < str.length ; i++) {
    //     if(str[i] === char) {
    //         count++;
    //         pos.push(i);
    //     }
    // }
    // console.log("찾는 문자의 개수 : " + count);
    // console.log("찾는 문자의 위치 : " + pos);

    // return [count, pos];
    return {count, pos};
}

const strText = prompt("문자를 입력하세요", "");
const charText = prompt("찾을 문자를 입력하세요", "");

let result = searchChar(strText, charText);
console.log(result);

console.log("찾는 문자의 개수 : " + result[0]);
console.log("찾는 문자의 위치 : " + result[1]);


console.log("******************");
strArr1 = string.split("");
console.log(strArr1);

strArr2 = [...string];
console.log(strArr2);

strArr3 = Array.from(string);
console.log(strArr3);

console.log("******************");
// 배열인 데이터를 텍스트로 합치기
console.log()
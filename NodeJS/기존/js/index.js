document.getElementById('button1').addEventListener('click', loadText);

function loadText() {
    let xhr = new XMLHttpRequest();
    // xhr.open(method, url, async);
    xhr.open('GET', '../data/sample.json', true); // true : 비동기, false : 동기
    xhr.onload = function() {
        // readyState : 0 - 초기화되지 않은 상태, 1 - 로드 중, 2 - 로드 완료, 
        // 3 - 데이터 처리 중, 4 - 데이터가 완전히 로드됨
        if (xhr.readyState != xhr.DONE) {
            return;
        }
        // status : 200 - 성공, 403 - 접근 금지, 404 - 찾을 수 없음
        if (this.status == 200) {
            document.getElementById('text').innerHTML = createTable(this.responseText);
            return;
        }
        // 에러 발생
        document.getElementById('text').innerHTML = `http ${this.status} 에러 발생`;
    }
    // request 에러 발생 이벤트
    xhr.onerror = function() {  
        document.getElementById('text').innerHTML = '에러 발생';
    }
    xhr.send();
}   

function createTable(jsontext) {
    let json = JSON.parse(jsontext);
    let table = `<table border="1">
                    <tr>
                        <th>이름</th>
                        <th>나이</th>
                        <th>성별</th>
                        <th>이메일</th>
                    </tr>`;
    for (let i = 0; i < json.length; i++) {
        let userTxt = json[i];
        table += `
            <tr>
                <td>${userTxt.name}</td>
                <td>${userTxt.age}</td>
                <td>${userTxt.gender}</td>
                <td>${userTxt.email}</td>
            </tr>`
        }
    table += `</table>`;
    return table;
}
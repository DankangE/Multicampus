
let newp = document.createElement("p"); // 새로운 p 태그 생성
let textNode = document.createTextNode("TypeScript"); // 텍스트 노드 생성

newp.appendChild(textNode); // p 태그에 텍스트 노드 연결

let div = document.querySelector("div"); // div 태그 선택
div.appendChild(newp); // div 태그에 p 태그 연결


// 버튼 클릭하면  p 태그 생성
let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let newp2 = document.createElement("p");
    let textNode2 = document.createTextNode("add p Tag");

    newp.appendChild(textNode2);

    let basicNode = document.querySelectorAll("p")[2];
    document.body.insertBefore(newp2, basicNode);

    //prtNode = basicNode.parentNode;
    //prtNode.insertBefore(newp, basicNode);

});
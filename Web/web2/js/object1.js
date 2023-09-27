let bookObj = {
    title : "JavaScript",
    pages : 450,
}

console.log(bookObj.title, bookObj["pages"]);


bookObj.pages =380;
bookObj.author = "홍길동";

console.log(bookObj);

let bookObj2 = {}; // 빈 객체 생성

bookObj2.title = "JavaScript";
bookObj2.pages = 380;
bookObj2.author = "홍길동";
bookObj2.price = 25000;

console.log(bookObj2);

// 속성 삭제
delete bookObj2.pages;
console.log(bookObj2);
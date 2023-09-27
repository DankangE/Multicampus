let arr = new Array();
console.log(arr);

// 생성자와 프로토 타입 객체 //
const Book = function (title, author, page, done=false) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.done = done;
    // this.finish = function () {
    //     this.done === false ? str = "읽는 중" : str = "완료";
    //     return str;
    // }
    this.finish = function () {
        if (this.done) {
            return "읽는 중";
        } else {
            return "완료";
        }
    }
}

// 프로토 타입 객체
const book1 = new Book("자바스크립트", "김영환", 800, false);

console.log(Book.prototype);
console.log(book1.title);

console.log(book1.__proto__);



const newBook = function (title, author, page, done=false) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.done = done;
    // this.finish = function () {
    //     this.done === false ? str = "읽는 중" : str = "완료";
    //     return str;
    // }
}

const book2 = new newBook("자바스크립트", "김영환", 800, false);
const book3 = new newBook("점프 투 파이썬", "홍길동", 322, true);
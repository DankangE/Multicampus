let book1 = {
    title : "자바스크립트",
    pages : 500,
    author : "홍길동",
}

let book2 = {
    title : "HTML + CSS3",
    pages : 320,
    author : "이순신",
}

class book {
    constructor(title, pages, author, done = false) {
        this.title = title;
        this.pages = pages;
        this.author = author;
        this.done = done;
    }    

    readBook() {
        let str;

        // if (this.done === true) {str = "읽음"} else {str = "읽지 않음"}
        this.done === true ? str = "읽음" : str = "읽지 않음";
        return str;
    }
}

let book3 = new book("자바스크립트", 500, "홍길동", true);
let book4 = new book("HTML + CSS3", 520, "이순신", false);

console.log(`${book3.title}, ${book3.author}, ${book3.readBook()}`);
console.log(`${book4.title}, ${book4.author}, ${book4.readBook()}`);
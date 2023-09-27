// 기본 생성자 함수
function Book (title, price) {
    this.title = title;
    this.price = price;
}

// Book 생성자 함수에 프로토타입으로 출력 메서드 추가
Book.prototype.buy = function () {
    console.log(`${this.title}을(를) ${this.price}원에 구매합니다.`);
}

const book1 = new Book('자바스크립트', 25000); // Book 인스턴스 생성
book1.buy(); // Book 객체의 buy() 메서드 호출



function NewBook (title, price, author) {
    Book.call(this, title, price); // Book 생성자 함수를 this로 호출 (Book의 속성을 재사용)
    this.author = author; // 새로운 속성 추가
}

NewBook.prototype.buyNewBook = function () {
    console.log(`${author}님이 집필한 ${this.title}을(를) ${this.price}원에 구매합니다.`);
}

Object.setPrototypeOf(NewBook.prototype, Book.prototype);

const newBook1 = new NewBook('자바스크립트', 25000, '홍길동'); // NewBook 인스턴스 생성
newBook1.buyNewBook();
newBook1.buy();

console.log(newBook1);


// ********************************************************* //
// ******** class 를 이용한 생성자(클래스) 함수 정의 ********* //
// ******************************************************** //

class BookClass {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    buy() {
        console.log(`${this.title}을(를) ${this.price}원에 구매합니다.`);
    }
}

const cbook1 = new Book('자바스크립트', 25000); // Book 인스턴스 생성
cbook1.buy(); // Book 객체의 buy() 메서드 호출

// 새로운 클래스 정의(자식클래스: 상속)
class NewBookClass extends BookClass {
    constructor(title, price, author) {
        super(title, price); // 부모 클래스의 생성자 함수 호출
        this.author = author; // 새로운 속성 추가
    }

    buyNewBook() {
        console.log(`${author}님이 집필한 ${this.title}을(를) ${this.price}원에 구매합니다.`);
    }
}

console.log(NewBookClass.prototype);

const cnewBook1 = new NewBookClass('자바스크립트', 25000, '홍길동');
cnewBook1.buyNewBook();
cnewBook1.buy();
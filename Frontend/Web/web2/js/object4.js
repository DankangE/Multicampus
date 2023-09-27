let bag = {
    type:"backpack",
    color: "blue",
    size: 15,
}

console.log(bag.type);
console.log(Object.keys(bag));

// 객체의 속석명을 이용해 값 접근
for (key in bag) {
    console.log(key, bag[key]);
}

console.log(Object.values(bag)); // bag 객체의 속성값을 배열로 반환
console.log(Object.entries(bag)); // bag 객체의 키와 속성값을 배열로 반환


let book = {
    title: "자바스크립트",
    pages: 553,
    buy : function() {
        console.log("책을 구입했습니다.");
    }
}

let keys = Object.keys(book);

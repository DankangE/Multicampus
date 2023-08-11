let arr = [10, 20, 30];
console.log('arr : ',arr);

let iter = arr[Symbol.iterator]();
console.log('iter : ',iter);

console.log(iter.next()); // { value: 10, done: false}
console.log(iter.next()); // { value: 20, done: false}
console.log(iter.next()); // { value: 30, done: false}
console.log(iter.next()); // { value: undefined, done: true}


// 제너레이터 : 이터레이터를 리턴하는 함수
function fnc() {
    console.log("1");
    console.log("2");
    console.log("3");
}

fnc(); // 1 2 3

function* gen() 
{
    yield 1;
    yield 2;
    yield 3;
}

let iter2 = gen();
console.log(iter2);

console.log(iter2.next()); // { value: 10, done: false}
console.log(iter2.next()); // { value: 20, done: false}
console.log(iter2.next()); // { value: 30, done: false}
console.log(iter2.next()); // { value: undefined, done: true}

console.log(iter2);

let g1 = gen();
g1.next();

for (const a of g1) {
    console.log(a);
}
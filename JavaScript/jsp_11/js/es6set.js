// 배열 : 키 없이 여러개의 값만을 나열한 것
// Set() : 중복되지 않는 유일한 값들의 집합

let numSet1 = new Set();
numSet1.add(10);
numSet1.add(20);

console.log(numSet1); // Set {10, 20}

let numSet2 = new Set();
numSet1.add(10).add(20).add(30).add(40).add(50);

console.log(numSet2); // Set { 10, 20 , 30, 40, 50 }

let numSet3 = new Set([10, 20, 30, 40, 50]);
console.log(numSet3);

let numSet4 = new Set([10, 20, 30, 40, 10, 20, 30, 50]); // 중복된 값은 하나만 유지
console.log(numSet4); // Set {10, 20, 30, 40, 50}

// Set() 객체를 이용한 이터러블 객체 생성
let languages = new Set(['C', 'C++', 'Java', 'Python', 'Python']);
console.log(languages);

for (let lang of languages) {
    console.log(lang);
}

console.log(languages.size); // 4
console.log(languages.values()); // [Set Iterator]

// languages.values(); // Set 
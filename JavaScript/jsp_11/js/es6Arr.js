let numbers = [1,2,3,4,5];

var newNnumbers = numbers * 2;

console.log(newNnumbers); // NaN

var newNnumbers = [];
for (var i = 0; i < numbers.length; i++) {
    newNnumbers.push(numbers[i] * 2);
}

console.log(newNnumbers); // [2, 4, 6, 8 , 10]

// map() 함수 사용
var newNnumbers = numbers.map(numbers => numbers * 2);
console.log(newNnumbers); // [2, 4, 6, 8, 10]

// map(f(값, 인덱스, 배열)) 함수 사용
var newNnumbers = numbers.map((numbers, index) => numbers * 2 + index);
console.log(newNnumbers); // [2, 5, 8 , 11, 14]

// filter() =================================
let scores = [82, 75, 48, 64, 36];

var newScores = scores.filter(score => score >= 60);
console.log(newScores);

var newScores = scores.filter((score, index) => {
    if (score >= 60) {
        console.log(`index: ${index}, score: ${score}`);
        return score;
    }
});
console.log(newScores); // [82, 75, 64]

// reduce() ==================================
let values = [1,2,3,4,5];
let result = values.reduce((tot, cur) => tot + cur, 0);
console.log(result); // 15

// map() / set() ============================
var bag = new Map();
bag.set('wallet', 2000);

console.log(bag);

//
var bag = new Map([
    ['wallet', 2000],
    ['bag', 10000],
    ['card', 5000]
]);

console.log(bag);

// Map() / set() / get() ======================
var bag = new Map();
bag.set('type', 'mini');
bag.set('item', 'wallet');


//

console.log(bag.size);
console.log(bag.get('type'));
console.log(bag.has('item'));
console.log(bag.keys());
console.log(bag.delete('item'));
console.log(bag);

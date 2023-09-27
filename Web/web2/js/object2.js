let student = {
    name : "홍길동",
    age : 20,
    score : {
        math: 80,
        science: 90,
        history: 75,
        average : function() {
            return (this.math + this.science + this.history) / 3;
        }
    }
}

console.log(student.name);
console.log(student.score.history);
console.log(student.score.average());

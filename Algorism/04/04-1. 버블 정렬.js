let n = Number(input[0]);
let Arr = [];

for (let i = 0; i < n; i++) {
    Arr[i] = Number(input[i]);
}

for (let i = 0; i < Arr.length; i++) {
    for (let j = 0; j < Arr.length - 1 + i; j++) {
        if (Arr[j] > A[j+1]) {
            var tmp = A[j];
            A[j] = A[j+1];
            A[j+1] = tmp;
        }
    }
}

for (let i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
}
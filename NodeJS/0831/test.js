function prn () {
    console.log('hello world');
    node_prn();
}

function prn () {
    console.log('node_prn');
}

prn();

console.log(this);
console.log(this === module.exports);
console.log(this === exports);

function whatIsThis() {
    console.log('function', this === exports, this === global);
}
whatIsThis();
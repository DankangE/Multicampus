const fs = require('fs');
// import fs from 'fs';

fs.readFile("./test.txt", (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data);
    console.log(data.toString());
});
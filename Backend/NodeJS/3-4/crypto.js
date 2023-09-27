const crypto = require('crypto');
const salt = crypot.randomBytes(128).toString('base64');

const inputPass = 'a12345'
const hashPassword = crypto.createHash('sha512').update(inputPass + salt).digest('hex');

console.log(hashPassword);



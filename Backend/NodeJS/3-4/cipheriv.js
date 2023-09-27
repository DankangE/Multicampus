const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';

const password = 'abc1234';

const cipher =(password, algorithm, key, iv) => {
    const encrypt = crypto.createCipheriv(algorithm, key, iv);
    let result1 = encrypt.update(password, 'utf8', 'base64');
    result1 += encrypt.final('base64');

    console.log('암호화:', result1);
    return result1;
}

const decipher = (password, algorithm, key, iv) => {
    const decode = crypto.createDecipheriv(algorithm, key, iv);
    const result2 = decode.update(password,'base64', 'utf8');
    result2 += decode.final('utf8');

    console.log('복호화', result2);
}

const password1 = 'abc1234';
const password2 = 'abc12345';

const enc1 = cipher(password1, algorithm, key, iv);
decipher(enc1, algorithm, key, iv);
const enc2 = cipher(password1, algorithm, key, iv);
decipher(enc2, algorithm, key, iv);

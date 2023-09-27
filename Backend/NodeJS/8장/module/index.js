const mongoose = require('mongoose');

const connectDB = async () => {
    // 개발 환경에서 콘설을 통해 모든 쿼리를 확인할 수 있도록 설정
    if (process.env.NODE_ENV !== 'production') {  
        mongoose.set('debug', true);
    }

    // 몽구스와 몽고디비를 연결하는 부분
    mongoose.connect('mongodb://localhost:27017/admin', {  // testdb는 데이터베이스 이름
        dbName: 'nodejs',   // dbName은 데이터베이스 이름
        useNewUrlParser: true,  // useNewUrlParser는 URL 구문 분석 사용 여부
    }), (error) => {
        if (error) {
            console.log('몽고디비 연결 에러', error);
        } else {
            console.log('몽고디비 연결 성공');
        }
    };
};

module.exports = connectDB;
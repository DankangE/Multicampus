const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema; // ObjectId를 사용하기 위해
const commentSchema = new Schema({  // 스키마 정의
    commenter: {
        type: ObjectId,
        required: true,
        ref: 'User', // User 스키마의 ObjectId와 연결
    },
    comment: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,  // 기본값
    }
});

module.exports = mongoose.model('Comment', commentSchema); // 스키마를 모델로 감싸준다.
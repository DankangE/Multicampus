use board_db;

CREATE TABLE board(
    _no INT NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT '글 번호',
    _id CHAR(25) NOT NULL COMMENT '아이디',
    _regdate DATETIME NOT NULL DEFAULT NOW() COMMENT '등록일',
    _title VARCHAR(100) NOT NULL COMMENT '제목',
    _doct VARCHAR(300) NOT NULL COMMENT '내용',
    FOREIGN KEY (_id) REFERENCES users(_id)
) COMMENT '게시판';

INSERT INTO users VALUES('b123', 'a12345', '서정동', '010-1234-1234', 'ssss@naver.com');

insert into board_db.board values(2,'b123', now(), '제목 입력','내용 입력 내용 입력 \n내용 입력');
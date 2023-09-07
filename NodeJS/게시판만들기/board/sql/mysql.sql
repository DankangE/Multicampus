use board_db;

INSERT INTO users VALUES('a123', '123456', '홍길동', '010-1234-1234', 'a123@naver.com');
INSERT INTO users VALUES('b123', 'a12345', '조정치', '010-1234-1234', 'ssss@naver.com');

INSERT INTO board VALUES(1, 'a123', now(), '제목 입력', '내용 입력 내용 입력 \n 내용 입력');
INSERT INTO board VALUES(2, 'b123', now(), '제목 입력', '내용 입력 내용 입력 \n 내용 입력');

_date = now();
INSERT INTO board VALUES('a123', _date, '안녕하세요. 가입했습니다.', '가입 인사드립니다. 잘 부탁드립니다.');


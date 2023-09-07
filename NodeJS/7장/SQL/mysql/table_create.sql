use testdb;


create table usertable(
    id VARCHAR(50) PRIMARY KEY comment '사용자 아이디',
    password VARCHAR(300) NOT NULL COMMENT '사용자 비밀번호',
    name VARCHAR(300) NOT NULL COMMENT '사용자 이름',
    email VARCHAR(300) NOT NULL COMMENT '사용자 이메일'
) COMMENT '사용자 테이블';
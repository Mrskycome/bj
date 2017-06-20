DROP DATABASE IF EXISTS bojue;
SET NAMES UTF8;
CREATE DATABASE bojue CHARSET=UTF8;
USE bojue;

CREATE TABLE t_user(
  uid   INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25) NOT NULL DEFAULT '',
  upwd  VARCHAR(32) NOT NULL DEFAULT ''
);
INSERT INTO t_user VALUES(null,'qd','123');
INSERT INTO t_user VALUES(null,'nc','123');

CREATE TABLE bj_banner(
 bid INT PRIMARY KEY AUTO_INCREMENT,
 pic VARCHAR(32)
);
INSERT INTO bj_banner VALUES
(NULL,'images/banner.jpg'),
(NULL,'images/banner2.jpg'),
(NULL,'images/banner3.jpg');


CREATE TABLE bj_photo(
 bid INT PRIMARY KEY AUTO_INCREMENT,
 pic VARCHAR(32)
);
INSERT INTO bj_photo VALUES
(NULL,'images/image1 (1).png'),
(NULL,'images/image1 (2).png'),
(NULL,'images/image1 (3).png'),
(NULL,'images/image1 (4).png'),
(NULL,'images/image1 (5).png'),
(NULL,'images/image1 (6).png'),
(NULL,'images/image1 (7).png'),
(NULL,'images/image1 (8).png'),
(NULL,'images/image1 (9).png'),
(NULL,'images/image1 (10).png'),
(NULL,'images/image1 (1).png'),
(NULL,'images/image1 (2).png');
-- SSWU Server System Construction and Practice 2022/ss 
-- team project 09
-- Host: localhost    Database: popeteDB
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3


DROP database IF EXISTS `popeteDB`;
CREATE database popeteDB;
use popeteDB;


CREATE TABLE `user` (
  `userID` int NOT NULL AUTO_INCREMENT,
  `nickName` varchar(50) DEFAULT NULL,
  `password` varchar(200) NOT NULL,
  `phoneNumber` int DEFAULT NULL,
  `email` varchar(50) NOT NULL UNIQUE,
  `ranking` varchar(10) DEFAULT NULL,
  `birth` datetime DEFAULT NULL,
  `last_login` datetime DEFAULT '2001-03-26',
  PRIMARY KEY (`userID`)
);


CREATE TABLE `follow` (
  `followerID` varchar(20) NOT NULL,
  `followeeID` varchar(20) NOT NULL,
  PRIMARY KEY (`followerID`,`followeeID`)
) ;


CREATE TABLE `category` (
  `categoryNum` INT(10) NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(10) DEFAULT NULL,
  `userAmount` INT(100) DEFAULT NULL,
  PRIMARY KEY (`categoryNum`)
);


CREATE TABLE `post` (
  `postNum` INT(10) NOT NULL AUTO_INCREMENT,
  `postTitle` varchar(40) DEFAULT NULL,
  `content` varchar(10000) DEFAULT NULL,
 `eventName` varchar(30) DEFAULT NULL,
 `categoryNum` INT(10) DEFAULT NULL,
  `writerID` int DEFAULT NULL,
  `likeNum` int DEFAULT 0,
  `writeDate` datetime DEFAULT now(),
  `reportCount` int(10) DEFAULT 0,
  `fileID` INT(10) DEFAULT NULL, 
  `file_src` TEXT DEFAULT NULL, 
  PRIMARY KEY (`postNum`),
  KEY `writerID` (`writerID`),
  CONSTRAINT `post_ibfk_2` FOREIGN KEY (`writerID`) REFERENCES `user` (`userID`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`categoryNum`) REFERENCES `category` (`categoryNum`)
);


CREATE TABLE `csboard` (
  `csNum` INT(10) NOT NULL AUTO_INCREMENT,
  `csTitle` varchar(40) DEFAULT NULL,
  `content` varchar(400) DEFAULT NULL,
  `answer` varchar(400) DEFAULT NULL,
  `writerID` int DEFAULT NULL,
  `writeDate` datetime DEFAULT now(),
  PRIMARY KEY (`csNum`),
  CONSTRAINT `cs_ibfk_2` FOREIGN KEY (`writerID`) REFERENCES `user` (`userID`)
);


CREATE TABLE `comment` (
  `commentNum` INT(10) NOT NULL AUTO_INCREMENT,
  `postNum` INT,
  `createDate` datetime DEFAULT NULL,
  `likeNum` int DEFAULT NULL,
  `userID` int DEFAULT NULL,
  `content` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`commentNum`),
  KEY `postNum` (`postNum`),
  KEY `userID` (`userID`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`postNum`) REFERENCES `post` (`postNum`) ON DELETE CASCADE,
  CONSTRAINT `comment_ibfk_3` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`)
) ;




-- insert DATA
INSERT INTO `user` VALUES ('20200908','johnDoe','johnho',01044444444,'johnDoe@gmail.com','gold','2001-04-04 00:00:00', default);
INSERT INTO `user` VALUES ('20200975','waterjin','starstar',01082636230,'20200975@sungshin.ac.kr','baby','2001-03-26 00:00:00', default);
INSERT INTO `user` VALUES ('20200901','aaaaaa','starstar',01082636230,'20200901@sungshin.ac.kr','baby','2001-03-26 00:00:00', default);
INSERT INTO `user` VALUES ('20200902','bbbbbb','starstar',01082636230,'20200902@sungshin.ac.kr','baby','2001-03-26 00:00:00', default);
INSERT INTO `user` VALUES ('20200903','cccccc','starstar',01082636230,'20200903@sungshin.ac.kr','baby','2001-03-26 00:00:00', default);
INSERT INTO `user` VALUES ('20200904','dddddd','starstar',01082636230,'20200904@sungshin.ac.kr','baby','2001-03-26 00:00:00', default);
INSERT INTO `user` VALUES ('20200905','ffffff','starstar',01082636230,'20200905@sungshin.ac.kr','baby','2001-03-26 00:00:00', default);
INSERT INTO `user` VALUES ('20200906','gggggg','starstar',01082636230,'20200906@sungshin.ac.kr','baby','2001-03-26 00:00:00', default);
INSERT INTO `user` VALUES ('20200907','hhhhhh','starstar',01082636230,'20200907@sungshin.ac.kr','baby','2001-03-26 00:00:00', default);
INSERT INTO `user` VALUES ('20200909','jjjjjj','starstar',01082636230,'20200909@sungshin.ac.kr','baby','2001-03-26 00:00:00', default);

INSERT INTO `follow` VALUES ('20200975','1111');

INSERT INTO `category` VALUES (1,'운동', 12);
INSERT INTO `category` VALUES (2,'음식', 22);
INSERT INTO `category` VALUES (3,'춤', 3);
INSERT INTO `category` VALUES (4,'노래', 1);
INSERT INTO `category` VALUES (5,'만들기', 52);
INSERT INTO `category` VALUES (6,'캠페인', 3);
INSERT INTO `category` VALUES (7,'게임', 2);

INSERT INTO `post` VALUES (1, '한번에 50개 완전 가능이지','쉽쥬?','팔굽혀펴기',1,20200975,123,'2022-05-27 09:10:52',0, 0, 0);
INSERT INTO `post` VALUES (2, '한번에 50개 완전 가능이지','쉽쥬?','한식',2,20200908,123,'2022-05-27 09:10:52',0, 0, 0);
INSERT INTO `post` VALUES (3, '한번에 50개 완전 가능이지','쉽쥬?','팝핀',3,20200907,123,'2022-05-27 09:10:52',0, 0, 0);
INSERT INTO `post` VALUES (4, '한번에 50개 완전 가능이지','쉽쥬?','힙합',4,20200906,123,'2022-05-27 09:10:52',0, 0, 0);
INSERT INTO `post` VALUES (5, '한번에 50개 완전 가능이지','쉽쥬?','점토',5,20200905,123,'2022-05-27 09:10:52',0, 0, 0);
INSERT INTO `post` VALUES (6, '한번에 50개 완전 가능이지','쉽쥬?','환경',6,20200904,123,'2022-05-27 09:10:52',0, 0, 0);
INSERT INTO `post` VALUES (7, '한번에 50개 완전 가능이지','쉽쥬?','쿠키런',7,20200903,123,'2022-05-27 09:10:52',0, 0, 0);
INSERT INTO `post` VALUES (8, '한번에 50개 완전 가능이지','쉽쥬?','수영',1,20200902,123,'2022-05-27 09:10:52',0, 0, 0);
INSERT INTO `post` VALUES (9, '한번에 50개 완전 가능이지','쉽쥬?','퓨전',2,20200901,123,'2022-05-27 09:10:52',0, 0, 0);
INSERT INTO `post` VALUES (10, '한번에 50개 완전 가능이지','쉽쥬?','크럼프',3,20200909,123,'2022-05-27 09:10:52',0, 0, 0);


INSERT INTO `comment` VALUES (1,1,'2022-05-28 11:01:47',111,'20200908','ㅋㅋㅋ우리 할아버지도 50개는 함ㅋ');

INSERT INTO `csboard` VALUES (1, '생일빠른 사람 우선순위', '생일빠른 사람은 동점이라도 더 높은 순위로 쳐주나요?', '네. 동점자일경우 생일 빠르신분이 더 높은 순위로 책정됩니다.', '20200975', now());
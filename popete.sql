-- SSWU Server System Construction and Practice 2022/ss 
-- team project 09
-- Host: localhost    Database: popeteDB
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3


DROP database IF EXISTS `popeteDB`;
CREATE database popeteDB;
use popeteDB;


CREATE TABLE `user` (
  `userID` int(10) NOT NULL AUTO_INCREMENT,
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
`userAmount` int DEFAULT NULL,
  PRIMARY KEY (`categoryNum`)
);


CREATE TABLE `post` (
  `postNum` INT(10) NOT NULL AUTO_INCREMENT,
  `postTitle` varchar(40) DEFAULT NULL,
  `content` varchar(10000) DEFAULT NULL,
 `eventName` varchar(30) DEFAULT NULL,
 `categoryNum` INT(10) DEFAULT NULL,
  `writerID` int DEFAULT NULL,
  `likeNum` int DEFAULT NULL,
  `writeDate` datetime DEFAULT now(),
  `file_src` TEXT default NULL,
`reportCount` int(10) DEFAULT 0,
  PRIMARY KEY (`postNum`),
  KEY `writerID` (`writerID`),
  CONSTRAINT `post_ibfk_2` FOREIGN KEY (`writerID`) REFERENCES `user` (`userID`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`categoryNum`) REFERENCES `category` (`categoryNum`)
);


CREATE TABLE `likeTbl` (
  `postNum` INT(10) NOT NULL,
  `userID` INT(10) NOT NULL,
  PRIMARY KEY (`postNum`,`userID`),
CONSTRAINT `like_ibfk_2` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`),
  CONSTRAINT `like_ibfk_1` FOREIGN KEY (`postNum`) REFERENCES `post` (`postNum`)
) ;


CREATE TABLE `reportTbl` (
  `postNum` INT(10) NOT NULL,
  `userID` INT(10) NOT NULL,
  PRIMARY KEY (`postNum`,`userID`),
CONSTRAINT `report_ibfk_2` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`),
  CONSTRAINT `report_ibfk_1` FOREIGN KEY (`postNum`) REFERENCES `post` (`postNum`)
) ;

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
INSERT INTO `user` VALUES ('1111','johnDoe','johnho',01044444444,'johnDoe@gmail.com','gold','2001-04-04 00:00:00', default);
INSERT INTO `user` VALUES ('20200975','waterjin','starstar',01082636230,'20200975@sungshin.ac.kr','baby','2001-03-26 00:00:00', default);

INSERT INTO `follow` VALUES ('20200975','1111');

INSERT INTO `category` VALUES (1,'운동', 12);
INSERT INTO `category` VALUES (2,'음식', 22);
INSERT INTO `category` VALUES (3,'춤', 3);
INSERT INTO `category` VALUES (4,'노래', 1);
INSERT INTO `category` VALUES (5,'만들기', 52);
INSERT INTO `category` VALUES (6,'캠페인', 3);
INSERT INTO `category` VALUES (7,'게임', 2);

INSERT INTO `post` VALUES (1011,'한번에 50개 완전 가능이지','쉽쥬?','팔굽혀펴기',1,20200975,123,'2022-05-27 09:10:52',default, 0);
INSERT INTO `likeTbl` VALUES (1011, 1111);
INSERT INTO `reportTbl` VALUES (1011, 20200975);
INSERT INTO `comment` VALUES (1,1011,'2022-05-28 11:01:47',111,'1111','ㅋㅋㅋ우리 할아버지도 50개는 함ㅋ');

INSERT INTO `csboard` VALUES (1, '생일빠른 사람 우선순위', '생일빠른 사람은 동점이라도 더 높은 순위로 쳐주나요?', '네. 동점자일경우 생일 빠르신분이 더 높은 순위로 책정됩니다.', '20200975', now());
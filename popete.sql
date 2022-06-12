-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: popeteDB
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

--
-- Table structure for table `attachment`
--
DROP database IF EXISTS `popeteDB`;
CREATE database popeteDB;
use popeteDB;

DROP TABLE IF EXISTS `attachment`;

CREATE TABLE `attachment` (
  `postNum` int NOT NULL,
  `fileNum` int NOT NULL,
  `fileName` varchar(40) DEFAULT NULL,
  `path` varchar(100) DEFAULT NULL,
  `extention` varchar(10) DEFAULT NULL,
  `size` int DEFAULT NULL,
  `saveOrder` int DEFAULT NULL,
  PRIMARY KEY (`postNum`,`fileNum`),
  CONSTRAINT `attachment_ibfk_1` FOREIGN KEY (`postNum`) REFERENCES `post` (`postNum`) ON DELETE CASCADE
);

--
-- Dumping data for table `attachment`
--


INSERT INTO `attachment` VALUES (1011,1,'gag','/c/w','.jpg',4,1);


--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `categoryNum` int NOT NULL,
  `categoryName` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`categoryNum`)
);

INSERT INTO `category` VALUES (1,'운동');


--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `commentNum` int NOT NULL,
  `postNum` int DEFAULT NULL,
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

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` VALUES (1,1011,'2022-05-28 11:01:47',111,'1111','ㅋㅋㅋ우리 할아버지도 50개는 함ㅋ');


--
-- Table structure for table `event`
--


--
-- Table structure for table `follow`
--

DROP TABLE IF EXISTS `follow`;
CREATE TABLE `follow` (
  `followerID` varchar(20) NOT NULL,
  `followeeID` varchar(20) NOT NULL,
  PRIMARY KEY (`followerID`,`followeeID`)
) ;

--
-- Dumping data for table `follow`
--


INSERT INTO `follow` VALUES ('20200975','1111');


--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;

CREATE TABLE `post` (
  `postNum` int NOT NULL,
  `postTitle` varchar(40) DEFAULT NULL,
  `content` varchar(10000) DEFAULT NULL,
 `eventName` varchar(30) DEFAULT NULL,
  `writerID` int DEFAULT NULL,
  `likeNum` int DEFAULT NULL,
  `commentON` tinyint(1) DEFAULT NULL,
  `writeDate` datetime DEFAULT NULL,
  PRIMARY KEY (`postNum`),
  KEY `writerID` (`writerID`),
  CONSTRAINT `post_ibfk_2` FOREIGN KEY (`writerID`) REFERENCES `user` (`userID`)
);


INSERT INTO `post` VALUES (1011,'한번에 50개 완전 가능이지','쉽쥬?','팔굽혀펴기','20200975',123,0,'2022-05-27 09:10:52');



DROP TABLE IF EXISTS `user`;
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


INSERT INTO `user` VALUES ('1111','johnDoe','johnho',01044444444,'johnDoe@gmail.com','gold','2001-04-04 00:00:00'),('20200975','waterjin','starstar',01082636230,'20200975@sungshin.ac.kr','baby','2001-03-26 00:00:00');
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
  `pw` varchar(200) NOT NULL,
  `phoneNumber` int DEFAULT NULL,
  `email` varchar(50) NOT NULL UNIQUE,
  `ranking` varchar(10) DEFAULT NULL,
  `birth` datetime DEFAULT NULL,
  `last_login` datetime DEFAULT '2001-03-26',
  PRIMARY KEY (`userID`)
);

CREATE TABLE `follow` (
  `followerID` int(10) NOT NULL,
  `followeeID` int(10) NOT NULL,
  PRIMARY KEY (`followerID`,`followeeID`),
  CONSTRAINT `follow_ibfk_2` FOREIGN KEY (`followerID`) REFERENCES `user` (`userID`),
  CONSTRAINT `follow_ibfk_1` FOREIGN KEY (`followeeID`) REFERENCES `user` (`userID`)
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
`reportCount` int(10) DEFAULT 0,
  PRIMARY KEY (`postNum`),
  KEY `writerID` (`writerID`),
  CONSTRAINT `post_ibfk_2` FOREIGN KEY (`writerID`) REFERENCES `user` (`userID`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`categoryNum`) REFERENCES `category` (`categoryNum`)
);

CREATE TABLE `attachment`(
`id` INT(10) NOT NULL AUTO_INCREMENT,
`file_src` TEXT, 
PRIMARY KEY(id)
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

SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));

-- insert DATA
INSERT INTO `user` (userID, nickName, pw, phoneNumber, email, ranking, birth, last_login) VALUES (1,'johnDoe','johnho',01044444444,'johnDoe@gmail.com','gold','2001-04-04 00:00:00', default);
INSERT INTO `user` (userID, nickName, pw, phoneNumber, email, ranking, birth, last_login) VALUES (2,'waterjin','starstar',01082636230,'20200975@sungshin.ac.kr','baby','2001-03-26 00:00:00', default);
INSERT INTO `user` (userID, nickName, pw, phoneNumber, email, ranking, birth, last_login) VALUES (3,'수룡','suryoung',01011111111,'suy@sungshin.ac.kr','silver','2000-11-11 00:00:00', default);
INSERT INTO `user` (userID, nickName, pw, phoneNumber, email, ranking, birth, last_login) VALUES (4,'수정','sujung',01011113333,'sujung@sungshin.ac.kr','baby','2003-11-11 00:00:00', default);
INSERT INTO `user` (userID, nickName, pw, phoneNumber, email, ranking, birth, last_login) VALUES (5,'떡볶이먹고싶다','teokbokki',01011112351,'deok@sungshin.ac.kr','silver','1988-11-11 00:00:00', default);
INSERT INTO `user` (userID, nickName, pw, phoneNumber, email, ranking, birth, last_login) VALUES (6,'종강내놔','jonggang',01022221111,'jong@gmail.com','gold','1999-11-11 00:00:00', default);
INSERT INTO `user` (userID, nickName, pw, phoneNumber, email, ranking, birth, last_login) VALUES (7,'시험보이콧','test',01013231111,'test@gmail.com','silver','2000-11-11 00:00:00', default);
INSERT INTO `user` (userID, nickName, pw, phoneNumber, email, ranking, birth, last_login) VALUES (8,'노는게제일좋아','play',01099991111,'olay@gmail.com','baby','2017-11-11 00:00:00', default);
INSERT INTO `user` (userID, nickName, pw, phoneNumber, email, ranking, birth, last_login) VALUES (9,'뿌','bbuu',01044441111,'bbu@gmail.com','gold','1997-11-11 00:00:00', default);
INSERT INTO `user` (userID, nickName, pw, phoneNumber, email, ranking, birth, last_login) VALUES (10, '덤벼라세상아','world',01077771111,'world@gmail.com','silver','1996-11-11 00:00:00', default);

INSERT INTO `follow` VALUES (2,1);
INSERT INTO `follow` VALUES (2,3);
INSERT INTO `follow` VALUES (3,4);
INSERT INTO `follow` VALUES (2,4);
INSERT INTO `follow` VALUES (9,10);
INSERT INTO `follow` VALUES (5,1);
INSERT INTO `follow` VALUES (8,2);
INSERT INTO `follow` VALUES (3,2);
INSERT INTO `follow` VALUES (6,3);
INSERT INTO `follow` VALUES (6,2);
INSERT INTO `follow` VALUES (1,8);
INSERT INTO `follow` VALUES (2,6);
INSERT INTO `follow` VALUES (3,1);
INSERT INTO `follow` VALUES (9,8);
INSERT INTO `follow` VALUES (8,1);

INSERT INTO `category` VALUES (1,'운동', 12);
INSERT INTO `category` VALUES (2,'음식', 22);
INSERT INTO `category` VALUES (3,'춤', 3);
INSERT INTO `category` VALUES (4,'노래', 1);
INSERT INTO `category` VALUES (5,'만들기', 52);
INSERT INTO `category` VALUES (6,'캠페인', 3);
INSERT INTO `category` VALUES (7,'게임', 2);
INSERT INTO `category` VALUES (8,'기타', 30);

INSERT INTO `post` (postNum, postTitle, content, eventName, categoryNum, writerID, likeNum, writeDate,  reportCount) VALUES (1,'한번에 10개 완전 가능이지','쉽쥬?','#팔굽혀펴기',1,2,123,'2022-05-27 09:10:52',default);
INSERT INTO `post` (postNum, postTitle, content, eventName, categoryNum, writerID, likeNum, writeDate, reportCount) VALUES (2,'나 공중부양 할수있음','니네 이거 되냐?','#공중부양',1,9,13,'2022-06-15 09:11:52',default);
INSERT INTO `post` (postNum, postTitle, content, eventName, categoryNum, writerID, likeNum, writeDate,  reportCount) VALUES (3,'헤이마마 챌린지 춰봤어요','노제언니 사랑해','#헤이마마_챌린지',3,7,23,'2021-05-27 09:10:52',default);
INSERT INTO `post` (postNum, postTitle, content, eventName, categoryNum, writerID, likeNum, writeDate, reportCount) VALUES (4,'TEARS 완창하기','생각보다 진짜 힘듦...','#TEARS',4,3,23,'2022-01-27 09:10:52',default);
INSERT INTO `post` (postNum, postTitle, content, eventName, categoryNum, writerID, likeNum, writeDate, reportCount) VALUES (5,'A4용지로 프라모델 만들기','목공풀을 사용하였습니다. 멋지죠? 물을 조심해야될것같긴한데 뿌듯합니다 ㅎㅎ','#프라모델',5,4,111,'2022-01-27 09:10:52',default);
INSERT INTO `post` (postNum, postTitle, content, eventName, categoryNum, writerID, likeNum, writeDate,  reportCount) VALUES (6,'눈감고 애국가 쳐보기','정확하게 치는 사람일수록 스마트폰 중독인 사람이래요 ㅎㅎ 저는 거의 다 맞춤ㅋㅋ','#스마트폰_중독',8,5,36,'2020-01-27 09:10:52',default);
INSERT INTO `post` (postNum, postTitle, content, eventName, categoryNum, writerID, likeNum, writeDate, reportCount) VALUES (7,'쓰레기 많이 줍기 캠페인 참여합니다','오늘 산책할 겸 나갔는데 쓰레기가 많더라구요! 나부터 시작하는 쓰레기 줍기 챌린지ㅎㅎ 저는 오늘 20개 주웠어요!','#쓰레기_줍기_챌린지',6,6,17,'2020-02-27 09:10:52',default);
INSERT INTO `post` (postNum, postTitle, content, eventName, categoryNum, writerID, likeNum, writeDate, reportCount) VALUES (8,'와 근데 진짜 쓰레기 많다','다들 길에 쓰레기 좀 버리지 마세요;; 저는 오늘 나갔다가 30개 주웠습니다','#쓰레기_줍기_챌린지',6,7,76,'2020-03-27 09:10:52',default);
INSERT INTO `post` (postNum, postTitle, content, eventName, categoryNum, writerID, likeNum, writeDate, reportCount) VALUES (9,'산책겸 나가면서 쓰레기 주우니까','되게 의미있는일 하는것같고 좋네요ㅎㅎ 이런 캠페인 좋은것같아요 운동도 되고ㅋㅋ 오늘은 10개 주움!','#쓰레기_줍기_챌린지',6,8,200,'2020-04-27 09:10:52',default);
INSERT INTO `post` (postNum, postTitle, content, eventName, categoryNum, writerID, likeNum, writeDate,  reportCount) VALUES (10,'여기 롤 마스터 있냐?','ㅋ','#롤',7,9,500,'2020-05-27 09:10:52',default);
INSERT INTO `post` (postNum, postTitle, content, eventName, categoryNum, writerID, likeNum, writeDate, reportCount) VALUES (11,'팔굽혀 펴기 한번에 백개','죽겠네요','#팔굽혀펴기',1,10,300,'2020-06-27 09:10:52',default);


INSERT INTO `attachment` (id, file_src) VALUES(1,'http://127.0.0.1:3000/post/images/pushup1.jpeg');
INSERT INTO `attachment` (file_src) VALUES('http://127.0.0.1:3000/post/images/2.jpg');
INSERT INTO `attachment` (file_src) VALUES( 'http://127.0.0.1:3000/post/images/heymamajpg.jpg');
INSERT INTO `attachment` (file_src) VALUES('http://127.0.0.1:3000/post/images/tears.jpg');
INSERT INTO `attachment` (file_src) VALUES('http://127.0.0.1:3000/post/images/gundam.jpg');
INSERT INTO `attachment` (file_src) VALUES('http://127.0.0.1:3000/post/images/eye.jpg');
INSERT INTO `attachment` (file_src) VALUES('http://127.0.0.1:3000/post/images/trash1.jpg');
INSERT INTO `attachment` (file_src) VALUES('http://127.0.0.1:3000/post/images/trash2.jpg');
INSERT INTO `attachment` (file_src) VALUES('http://127.0.0.1:3000/post/images/trash3.jpg');
INSERT INTO `attachment` (file_src) VALUES('http://127.0.0.1:3000/post/images/lol.jpg');
INSERT INTO `attachment` (file_src) VALUES('http://127.0.0.1:3000/post/images/pushup2.jpg');

INSERT INTO `likeTbl` VALUES (1, 2);
INSERT INTO `likeTbl` VALUES (2, 2);
INSERT INTO `likeTbl` VALUES (3, 2);
INSERT INTO `likeTbl` VALUES (1, 4);
INSERT INTO `likeTbl` VALUES (8, 2);
INSERT INTO `likeTbl` VALUES (9, 2);
INSERT INTO `likeTbl` VALUES (7, 3);
INSERT INTO `likeTbl` VALUES (4, 4);
INSERT INTO `likeTbl` VALUES (9, 3);
INSERT INTO `likeTbl` VALUES (1, 1);

INSERT INTO `reportTbl` VALUES (1, 2);
INSERT INTO `reportTbl` VALUES (2, 3);
INSERT INTO `reportTbl` VALUES (2, 4);
INSERT INTO `reportTbl` VALUES (2, 5);
INSERT INTO `reportTbl` VALUES (2, 6);
INSERT INTO `reportTbl` VALUES (2, 7);
INSERT INTO `reportTbl` VALUES (2, 8);
INSERT INTO `reportTbl` VALUES (2, 9);


INSERT INTO `comment`(commentNum,postNum,createDate,likeNum,userID,content) VALUES (1,1,'2022-05-28 11:01:47',111,1,'ㅋㅋㅋ우리 할아버지도 10개는 함ㅋ');
INSERT INTO `comment`(postNum,createDate,likeNum,userID,content) VALUES (2,'2022-06-15 11:00:47',500,2,'어 인증못하죠?');
INSERT INTO `comment`(postNum,createDate,likeNum,userID,content) VALUES (2,'2022-06-14 11:00:47',1,3,'개웃기네');
INSERT INTO `comment`(postNum,createDate,likeNum,userID,content) VALUES (2,'2022-06-13 11:00:47',1,4,'사진 올려봐');
INSERT INTO `comment`(postNum,createDate,likeNum,userID,content) VALUES (3,'2022-06-12 11:01:47',11,2,'와 진짜 잘추시네요...! 너무 멋져요');
INSERT INTO `comment`(postNum,createDate,likeNum,userID,content) VALUES (4,'2022-06-15 11:00:47',50,2,'아니 가수세요?');
INSERT INTO `comment`(postNum,createDate,likeNum,userID,content) VALUES (7,'2022-06-14 11:00:47',1,3,'오 취지 좋네요 괜찮은듯');
INSERT INTO `comment`(postNum,createDate,likeNum,userID,content) VALUES (8,'2022-06-13 11:00:47',1,4,'ㄹㅇ 특히 담배꽁초 진짜 ㅡㅡ 길에 쓰레기 작작버리세요');
INSERT INTO `comment`(postNum,createDate,likeNum,userID,content) VALUES (10,'2022-06-13 11:00:47',1,4,'ㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷ 마스터 ㄷㄷㄷ');
INSERT INTO `comment`(postNum,createDate,likeNum,userID,content) VALUES (11,'2022-06-13 11:00:47',1,4,'와 팔근육 장난아니시네요');

INSERT INTO `csboard` VALUES (1, '생일빠른 사람 우선순위', '생일빠른 사람은 동점이라도 더 높은 순위로 쳐주나요?', '네. 동점자일경우 생일 빠르신분이 더 높은 순위로 책정됩니다.', 1, now());
INSERT INTO `csboard` VALUES (2, '생일빠른 사람 우선순위', '생일빠른 사람은 동점이라도 더 높은 순위로 쳐주나요?', '네. 동점자일경우 생일 빠르신분이 더 높은 순위로 책정됩니다.', 2, now());
INSERT INTO `csboard` VALUES (3, '생일빠른 사람 우선순위', '생일빠른 사람은 동점이라도 더 높은 순위로 쳐주나요?', '네. 동점자일경우 생일 빠르신분이 더 높은 순위로 책정됩니다.', 3, now());
INSERT INTO `csboard` VALUES (4, '생일빠른 사람 우선순위', '생일빠른 사람은 동점이라도 더 높은 순위로 쳐주나요?', '네. 동점자일경우 생일 빠르신분이 더 높은 순위로 책정됩니다.', 4, now());
INSERT INTO `csboard` VALUES (5, '생일빠른 사람 우선순위', '생일빠른 사람은 동점이라도 더 높은 순위로 쳐주나요?', '네. 동점자일경우 생일 빠르신분이 더 높은 순위로 책정됩니다.', 5, now());
INSERT INTO `csboard` VALUES (6, '생일빠른 사람 우선순위', '생일빠른 사람은 동점이라도 더 높은 순위로 쳐주나요?', '네. 동점자일경우 생일 빠르신분이 더 높은 순위로 책정됩니다.', 6, now());
INSERT INTO `csboard` VALUES (7, '생일빠른 사람 우선순위', '생일빠른 사람은 동점이라도 더 높은 순위로 쳐주나요?', '네. 동점자일경우 생일 빠르신분이 더 높은 순위로 책정됩니다.', 7, now());
INSERT INTO `csboard` VALUES (8, '생일빠른 사람 우선순위', '생일빠른 사람은 동점이라도 더 높은 순위로 쳐주나요?', '네. 동점자일경우 생일 빠르신분이 더 높은 순위로 책정됩니다.', 8, now());
INSERT INTO `csboard` VALUES (9, '생일빠른 사람 우선순위', '생일빠른 사람은 동점이라도 더 높은 순위로 쳐주나요?', '네. 동점자일경우 생일 빠르신분이 더 높은 순위로 책정됩니다.', 9, now());
INSERT INTO `csboard` VALUES (10, '생일빠른 사람 우선순위', '생일빠른 사람은 동점이라도 더 높은 순위로 쳐주나요?', '네. 동점자일경우 생일 빠르신분이 더 높은 순위로 책정됩니다.', 10, now());


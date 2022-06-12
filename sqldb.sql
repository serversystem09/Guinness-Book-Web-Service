-- MySQL dump 10.13  Distrib 8.0.16, for Linux (x86_64)
--
-- Host: localhost    Database: sqldb
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `buytbl`
--

DROP TABLE IF EXISTS `buytbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `buytbl` (
  `num` int(11) NOT NULL AUTO_INCREMENT,
  `userID` char(8) COLLATE utf8_unicode_ci NOT NULL,
  `prodName` char(6) COLLATE utf8_unicode_ci NOT NULL,
  `groupName` char(4) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` int(11) NOT NULL,
  `amount` smallint(6) NOT NULL,
  PRIMARY KEY (`num`),
  KEY `userID` (`userID`),
  CONSTRAINT `buytbl_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `usertbl` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `buytbl`
--

LOCK TABLES `buytbl` WRITE;
/*!40000 ALTER TABLE `buytbl` DISABLE KEYS */;
INSERT INTO `buytbl` VALUES (1,'KBS','운동화',NULL,30,2),(2,'KBS','노트북','전자',1000,1),(3,'JYP','모니터','전자',200,1),(4,'BBK','모니터','전자',200,5),(5,'KBS','청바지','의류',50,3),(6,'BBK','메모리','전자',80,10),(7,'SSK','책','서적',15,5),(8,'EJW','책','서적',15,2),(9,'EJW','청바지','의류',50,1),(10,'BBK','운동화',NULL,30,2),(11,'EJW','책','서적',15,1),(12,'BBK','운동화',NULL,30,2);
/*!40000 ALTER TABLE `buytbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usertbl`
--

DROP TABLE IF EXISTS `usertbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usertbl` (
  `userID` char(8) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `birthYear` int(11) NOT NULL,
  `addr` char(2) COLLATE utf8_unicode_ci NOT NULL,
  `mobile1` char(3) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mobile2` char(8) COLLATE utf8_unicode_ci DEFAULT NULL,
  `height` smallint(6) DEFAULT NULL,
  `mDate` date DEFAULT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertbl`
--

LOCK TABLES `usertbl` WRITE;
/*!40000 ALTER TABLE `usertbl` DISABLE KEYS */;
INSERT INTO `usertbl` VALUES ('ABC','수룡이',2021,'서울','010','9999999',200,'2021-05-19'),('BBK','바비킴',1973,'서울','010','0000000',176,'2013-05-05'),('EJW','은지원',1972,'경북','011','8888888',174,'2014-03-03'),('IOP','IOP',2020,'SE','010','1234123',199,'2021-05-19'),('JKW','조관우',1965,'경기','018','9999999',172,'2010-10-10'),('JYP','조용필',1950,'경기','011','4444444',166,'2009-04-04'),('KBS','김범수',1979,'경남','011','2222222',173,'2012-04-04'),('KKH','김경호',1971,'전남','019','3333333',177,'2007-07-07'),('LJB','임재범',1963,'서울','016','6666666',182,'2009-09-09'),('LSG','이승기',1987,'서울','011','1111111',182,'2008-08-08'),('QWE','QWE',2020,'SE','010','1234123',188,'2021-05-19'),('SSK','성시경',1979,'서울',NULL,NULL,186,'2013-12-12'),('YJS','윤종신',1969,'경남',NULL,NULL,170,'2005-05-05');
/*!40000 ALTER TABLE `usertbl` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-31 11:53:21

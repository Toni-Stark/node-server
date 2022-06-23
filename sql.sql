/*
SQLyog Community v13.1.6 (64 bit)
MySQL - 8.0.29 : Database - watch_the_car
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`watch_the_car` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `watch_the_car`;

/*Table structure for table `sys_user` */

DROP TABLE IF EXISTS `sys_user`;

CREATE TABLE `sys_user` (
  `id` int NOT NULL COMMENT 'Id',
  `user_name` char(1) NOT NULL COMMENT '账户名',
  `password` char(32) NOT NULL COMMENT '账号密码',
  `real_name` varchar(50) NOT NULL COMMENT '真实姓名',
  `sex` tinyint NOT NULL DEFAULT '0' COMMENT '性别',
  `age` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '年龄',
  `birthday` date DEFAULT NULL COMMENT '生日',
  `phone` char(11) NOT NULL COMMENT '联系方式',
  `address` varchar(200) NOT NULL COMMENT '联系地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `sys_user` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

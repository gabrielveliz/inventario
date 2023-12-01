-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for inv_sys
CREATE DATABASE IF NOT EXISTS `inv_sys` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `inv_sys`;

-- Dumping structure for table inv_sys.orders_list
CREATE TABLE IF NOT EXISTS `orders_list` (
  `id_order` int NOT NULL DEFAULT '0',
  `id_product` int NOT NULL DEFAULT '0',
  `unit` int NOT NULL DEFAULT '0',
  `amount` int NOT NULL DEFAULT '0',
  KEY `FK__purchase_orders` (`id_order`),
  KEY `FK__products` (`id_product`),
  CONSTRAINT `FK__products` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`),
  CONSTRAINT `FK__purchase_orders` FOREIGN KEY (`id_order`) REFERENCES `purchase_orders` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table inv_sys.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `descr` varchar(50) NOT NULL,
  `price` int NOT NULL,
  `state` tinyint(1) NOT NULL,
  `id_supp` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_products_suppliers` (`id_supp`),
  CONSTRAINT `FK_products_suppliers` FOREIGN KEY (`id_supp`) REFERENCES `suppliers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table inv_sys.purchase_orders
CREATE TABLE IF NOT EXISTS `purchase_orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_supplier` int NOT NULL,
  `descr` varchar(50) NOT NULL DEFAULT '0',
  `date_created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK__suppliers` (`id_supplier`),
  CONSTRAINT `FK__suppliers` FOREIGN KEY (`id_supplier`) REFERENCES `suppliers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table inv_sys.role
CREATE TABLE IF NOT EXISTS `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_rol` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table inv_sys.suppliers
CREATE TABLE IF NOT EXISTS `suppliers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `contact_person` varchar(50) NOT NULL,
  `contact_number` int NOT NULL,
  `state` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table inv_sys.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL,
  `block` tinyint(1) NOT NULL DEFAULT '0',
  `name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `id_role` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `FK_users_role` (`id_role`),
  CONSTRAINT `FK_users_role` FOREIGN KEY (`id_role`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

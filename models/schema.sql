
USE fl1p892rofays2b0;

SELECT * FROM Yelps;

DROP TABLE Yelps;


DROP TABLE Yelps;

CREATE TABLE IF NOT EXISTS `Yelps` (`id` INTEGER NOT NULL auto_increment , `yelpID` VARCHAR(255), `name` VARCHAR(255), `image_url` TEXT, `category` VARCHAR(255), `rating` VARCHAR(255), `reviewCount` TEXT, `price` VARCHAR(255), `phone` TEXT, `closed` TINYINT(1), `url` TEXT, `lat` TEXT, `long` TEXT, `street` TEXT, `city` TEXT, `zip` TEXT, `state` TEXT, `review_1_text` TEXT, `review_1_rating` TEXT, `review_1_time` TEXT, `review_1_author` TEXT, `review_2_text` TEXT, `review_2_rating` TEXT, `review_2_time` TEXT, `review_2_author` TEXT, `review_3_text` TEXT, `review_3_rating` TEXT, `review_3_time` TEXT, `review_3_author` TEXT, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`));

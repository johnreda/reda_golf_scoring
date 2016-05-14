/* 
This file is intended to help developers get their SQL Databases setup correctly.
It is important since other developers will be unlikely to have the same database or tables setup already. 
*/

CREATE TABLE IF NOT EXISTS `playerscores` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET latin1 NOT NULL,
  `playerScores` INT(250) NOT NULL,
  `grossScore` INT(250) NOT NULL,
  `netScore` INT(250) NOT NULL,
  PRIMARY KEY (`id`),

) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=465617 ;
-- phpMyAdmin SQL Dump
-- version 4.1.4
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 30. Jan 2014 um 11:37
-- Server Version: 5.6.15-log
-- PHP Version: 5.5.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `bizcademy`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `chapters`
--

CREATE TABLE IF NOT EXISTS `chapters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `course_id` int(11) NOT NULL,
  `title` varchar(128) NOT NULL,
  `summary` text NOT NULL,
  `advice` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Daten für Tabelle `chapters`
--

INSERT INTO `chapters` (`id`, `course_id`, `title`, `summary`, `advice`) VALUES
(1, 1, 'Kapitel #1', '<p>I''ll alert the crew. They were just sucked into space. Fate. It protects fools, little children, and ships named "Enterprise." I think you''ve let your personal feelings cloud your judgement. Fate protects fools, little children and ships named Enterprise. About four years. I got tired of hearing how young I looked. Did you come here for something in particular or just general Riker-bashing? I''m afraid I still don''t understand, sir. I''ve had twelve years to think about it. And if I had it to do over again, I would have grabbed the phaser and pointed it at you instead of them. Congratulations - you just destroyed the Enterprise. You bet I''m agitated! I may be surrounded by insanity, but I am not insane.<br></p>', 'Talk about going nowhere fast. Travel time to the nearest starbase? I''ll alert the crew. They were just sucked into space.'),
(3, 6, 'Kapitel #1', '<p>Besides, you look good in a dress. I''d like to think that I haven''t changed those things, sir. Talk about going nowhere fast. You''re going to be an interesting companion, Mr. Data. Not if I weaken first. I guess it''s better to be lucky than good. Mr. Worf, you sound like a man who''s asking his friend if he can start dating his sister.<br></p>', 'and attack the Romulans. Wouldn''t that bring about chaos? Sure. You''d be surprised how far a hug goes with Geordi, or Worf.');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `courses`
--

CREATE TABLE IF NOT EXISTS `courses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `summary` text NOT NULL,
  `advice` text NOT NULL,
  `protected` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Daten für Tabelle `courses`
--

INSERT INTO `courses` (`id`, `title`, `summary`, `advice`, `protected`) VALUES
(1, 'Kurs #1', '<p>Yes, absolutely, I do indeed concur, wholeheartedly! What''s a knock-out like you doing in a computer-generated gin joint like this? Sorry, Data. I think you''ve let your personal feelings cloud your judgement. I recommend you don''t fire until you''re within 40,000 kilometers. That might''ve been one of the shortest assignments in the history of Starfleet. Sure. You''d be surprised how far a hug goes with Geordi, or Worf. and attack the Romulans.<br></p>', 'Travel time to the nearest starbase? You bet I''m agitated! I may be surrounded by insanity, but I am not insane. I am your worst nightmare!', 1),
(6, 'Kurs #2', '<p>I guess it''s better to be lucky than good. and attack the Romulans. I am your worst nightmare! Some days you get the bear, and some days the bear gets you. Your head is not an artifact! A surprise party? Mr. Worf, I hate surprise parties. I would *never* do that to you. You did exactly what you had to do. You considered all your options, you tried every alternative and then you made the hard choice. About four years. I got tired of hearing how young I looked. Mr. Worf, you do remember how to fire phasers? We have a saboteur aboard. Sorry, Data.<br></p>', 'Commander William Riker of the Starship Enterprise. I''d like to think that I haven''t changed those things, sir. Some days you get the bear, and some days the bear gets you.', 0);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `modules`
--

CREATE TABLE IF NOT EXISTS `modules` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `chapter_id` int(11) NOT NULL,
  `module_type` varchar(32) NOT NULL,
  `title` varchar(128) NOT NULL,
  `question` varchar(128) NOT NULL,
  `summary` text NOT NULL,
  `advice` text NOT NULL,
  `theme` varchar(16) NOT NULL,
  `answers` text NOT NULL,
  `hints` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Daten für Tabelle `modules`
--

INSERT INTO `modules` (`id`, `chapter_id`, `module_type`, `title`, `question`, `summary`, `advice`, `theme`, `answers`, `hints`) VALUES
(1, 1, 'text', 'Textmodul #1', '', '<p>For an android with no feelings, he sure managed to evoke them in others. Smooth as an android''s bottom, eh, Data? I suggest you drop it, Mr. Data. This should be interesting. Your shields were failing, sir. The look in your eyes, I recognize it. You used to have it for me. Wouldn''t that bring about chaos? Travel time to the nearest starbase? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. Congratulations - you just destroyed the Enterprise. You did exactly what you had to do. You considered all your options, you tried every alternative and then you made the hard choice. Fate protects fools, little children and ships named Enterprise. Some days you get the bear, and some days the bear gets you. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody.<br></p>', '', '', 'a:0:{}', 'a:0:{}'),
(2, 1, 'quiz', 'Quizmodul #1', 'Welche Farbe hat die Sonne', '<p>I guess it''s better to be lucky than good. This should be interesting. Now, how the hell do we defeat an enemy that knows us better than we know ourselves? For an android with no feelings, he sure managed to evoke them in others.<br></p>', 'Wait a minute - you''ve been declared dead. You can''t give orders around here.', 'classic', 'O:8:"stdClass":4:{s:1:"0";O:8:"stdClass":2:{s:6:"answer";s:4:"gelb";s:7:"checked";b:1;}s:1:"1";O:8:"stdClass":1:{s:6:"answer";s:5:"grÃ¼n";}s:1:"2";O:8:"stdClass":2:{s:6:"answer";s:4:"blau";s:7:"checked";b:0;}s:1:"3";O:8:"stdClass":1:{s:6:"answer";s:7:"schwarz";}}', 'O:8:"stdClass":3:{s:1:"0";O:8:"stdClass":1:{s:4:"hint";s:23:"Schwarz ist keine Farbe";}s:1:"1";O:8:"stdClass":1:{s:4:"hint";s:35:"Eine blaue Sonne wÃ¤re sehr seltsam";}s:1:"2";O:8:"stdClass":1:{s:4:"hint";s:37:"GrÃ¼ne Sonnen sind auch nicht so toll";}}'),
(3, 1, 'text', 'Textmodul #2', '', '<p>When has justice ever been as simple as a rule book? A lot of things can change in twelve years, Admiral. Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation. I guess it''s better to be lucky than good. The Enterprise computer system is controlled by three primary main processor cores, cross-linked with a redundant melacortz ramistat, fourteen kiloquad interface modules. Wait a minute - you''ve been declared dead. You can''t give orders around here.<br></p>', '', '', 'a:0:{}', 'a:0:{}');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

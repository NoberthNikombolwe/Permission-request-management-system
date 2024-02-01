-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 02, 2024 at 12:30 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `prms_db_dit`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `name`) VALUES
(1, 'Computer Engineering'),
(2, 'Mining Engineering'),
(3, 'Civil engineering'),
(4, 'Oil and gas engineering'),
(5, 'telecomunication Engineering'),
(6, 'Multimedia '),
(7, 'IT'),
(8, 'Jounalism'),
(9, 'Bussness Administration'),
(10, 'Food Engineering and science'),
(11, 'Clouding compututing'),
(12, 'mOBILLE'),
(13, 'cOMPUTING SPEED'),
(14, 'Texttile engineering');

-- --------------------------------------------------------

--
-- Table structure for table `lectures`
--

CREATE TABLE `lectures` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `modulle_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lectures`
--

INSERT INTO `lectures` (`id`, `firstname`, `lastname`, `email`, `phone`, `password`, `modulle_id`) VALUES
(1, 'ADAM', 'SIMBA', 'adam@dit.ac.tz', '+255677048078', '12345', 6);

-- --------------------------------------------------------

--
-- Table structure for table `modulles`
--

CREATE TABLE `modulles` (
  `id` int(11) NOT NULL,
  `coden` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `modulles`
--

INSERT INTO `modulles` (`id`, `coden`, `name`) VALUES
(1, 'Cou 0710', 'Fundamental of Programming'),
(2, 'Cou 0712', 'Fundamental of Analogy electronics'),
(3, 'COU 7507', 'Cyber security');

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `body` varchar(800) NOT NULL,
  `modulle_id` int(10) NOT NULL,
  `student_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `title`, `body`, `modulle_id`, `student_id`) VALUES
(1, 'Naumwa', ' Macho', 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `course_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `firstname`, `lastname`, `email`, `phone`, `password`, `course_id`) VALUES
(4, 'Fatuma', 'Jarubu', 'jarubut@gmail.com', '0657245605', '1234567', 1),
(5, 'Masiha', 'Jarubu', 'jarubut@gmail.com', '0657245605', '1234567', 1),
(6, 'Musonda', 'Jarubu', 'jarubut@gmail.com', '0657245605', '1234567', 1),
(7, 'Beatrice', 'Barnabus', 'nobert@gmail.com', '0657266017', '1234567', 2),
(8, 'Musa', 'Msuya', 'msuya@gmail.com', '0657266015', '1234567', 1),
(9, 'ADAM', 'SIMBA', 'noberthbariki@gmail.com', '+255677048078', '12345', 1),
(10, 'Msuva', 'macha', 'msuva@gmail.com', '0674648933', '1234567', 1),
(11, 'mwantumu', 'Jumbe', 'jumbe@gma.com', '+255677048078', '1234', 1),
(12, 'Vallerian', 'Mchau', 'mchau@gmail.com', '0758061789', '12345', 1),
(13, 'Juma', 'Lokole', 'lokolejuma@gmail.com', '0785266019', '12345', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lectures`
--
ALTER TABLE `lectures`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `modulles`
--
ALTER TABLE `modulles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `lectures`
--
ALTER TABLE `lectures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `modulles`
--
ALTER TABLE `modulles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

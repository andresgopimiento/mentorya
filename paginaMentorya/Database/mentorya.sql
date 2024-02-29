-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-02-2024 a las 05:06:16
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mentorya`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` int(11) NOT NULL,
  `nombre_categoria` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `nombre_categoria`) VALUES
(1, 'Marketing'),
(2, 'Matemáticas'),
(3, 'Desarrollo web'),
(4, 'Psicología'),
(5, 'Coaching liderazgo'),
(6, 'Repostería'),
(7, 'Desarrollo de Contenidos Digit'),
(8, 'Emprendimiento'),
(9, 'Seguridad informática'),
(10, 'Inglés');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mentores`
--

CREATE TABLE `mentores` (
  `id_mentor` int(11) NOT NULL,
  `nombres` varchar(25) NOT NULL,
  `apellidos` varchar(25) NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `país` varchar(25) NOT NULL,
  `ciudad` varchar(25) NOT NULL,
  `edad` int(2) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `ocupación` varchar(30) NOT NULL,
  `id_categoria` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mentores`
--

INSERT INTO `mentores` (`id_mentor`, `nombres`, `apellidos`, `sexo`, `email`, `país`, `ciudad`, `edad`, `categoria`, `ocupación`, `id_categoria`) VALUES
(1, 'Ana', 'Gómez', 'Femenino', 'ana.gomez@email.com', 'Argentina', 'Buenos Aires', 32, 'Educación en línea', 'Profesora', 1),
(2, 'Carlos', 'López', 'Masculino', 'carlos.lopez@email.com', 'México', 'Ciudad de México', 45, 'Plataformas Virtuales', 'Instructor', 2),
(3, 'Laura', 'Martínez', 'Femenino', 'laura.martinez@email.com', 'España', 'Madrid', 28, 'Tecnología Educativa', 'Consultora', 3),
(4, 'Ricardo', 'Hernández', 'Masculino', 'ricardo.hernandez@email.com', 'Colombia', 'Bogotá', 38, 'Aprendizaje Online', 'Facilitador', 4),
(5, 'María', 'Rodríguez', 'Femenino', 'maria.rodriguez@email.com', 'Perú', 'Lima', 35, 'Diseño de Cursos en Línea', 'Profesional del e-learning', 5),
(6, 'Javier', 'Sánchez', 'Masculino', 'javier.sanchez@email.com', 'Chile', 'Santiago', 42, 'Evaluación Virtual', 'Especialista en Educación a Di', 6),
(7, 'Paola', 'Vega', 'Femenino', 'paola.vega@email.com', 'Ecuador', 'Quito', 31, 'Desarrollo de Contenidos Digit', 'Escritora de Cursos Online', 7),
(8, 'Miguel', 'Romero', 'Masculino', 'miguel.romero@email.com', 'Venezuela', 'Caracas', 37, 'Innovación Educativa en Línea', 'Director de Educación Virtual', 8),
(9, 'Carmen', 'Torres', 'Femenino', 'carmen.torres@email.com', 'Uruguay', 'Montevideo', 29, 'Tutoría Virtual', 'Coordinadora Académica Online', 9),
(10, 'Luis', 'García', 'Masculino', 'luis.garcia@email.com', 'Panamá', 'Ciudad de Panamá', 40, 'Planes de Estudio Online', 'Asesor Educativo Virtual', 10);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `mentores`
--
ALTER TABLE `mentores`
  ADD PRIMARY KEY (`id_mentor`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `mentores`
--
ALTER TABLE `mentores`
  MODIFY `id_mentor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `mentores`
--
ALTER TABLE `mentores`
  ADD CONSTRAINT `mentores_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

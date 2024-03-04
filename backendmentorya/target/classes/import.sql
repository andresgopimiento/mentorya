--MENTORES

-- Mentor 1
INSERT INTO mentor (id, about_me, age, category, email, first_name, last_name, occupation, phone, skills)
VALUES (NULL, 'Soy un mentor con amplia experiencia en marketing digital. Me apasiona ayudar a otros a alcanzar sus metas en el mundo digital.', 35, 73, 'mentor_marketing@example.com', 'Juan', 'Pérez', 'Especialista en Marketing Digital', '3125692010', 'SEO, Estrategias de Contenido');

-- Mentor 2
INSERT INTO mentor (id, about_me, age, category, email, first_name, last_name, occupation, phone, skills)
VALUES (NULL, 'Ingeniero de software con más de 10 años de experiencia en desarrollo frontend. Me encanta compartir mis conocimientos y ayudar a otros a crecer en este campo.', 40, 74, 'mentor_frontend@example.com', 'María', 'Gómez', 'Desarrollador Frontend Senior', '32876545541', 'JavaScript, React, CSS');

-- Mentor 3
INSERT INTO mentor (id, about_me, age, category, email, first_name, last_name, occupation, phone, skills)
VALUES (NULL, 'Experto en desarrollo backend con enfoque en arquitecturas escalables y eficientes. Siempre dispuesto a guiar a nuevos desarrolladores en su aprendizaje.', 45, 75, 'mentor_backend@example.com', 'Pedro', 'Ramírez', 'Arquitecto de Software', '3152156999', 'Java, Spring Boot, MongoDB');

-- Mentor 4
INSERT INTO mentor (id, about_me, age, category, email, first_name, last_name, occupation, phone, skills)
VALUES (NULL, 'Coach profesional con enfoque en desarrollo personal y profesional. Mi objetivo es ayudarte a alcanzar tu máximo potencial.', 38, 76, 'mentor_coach@example.com', 'Laura', 'Hernández', 'Coach de Desarrollo Personal', '3165245236', 'Coaching Ejecutivo, Autoconfianza');

-- Mentor 5
INSERT INTO mentor (id, about_me, age, category, email, first_name, last_name, occupation, phone, skills)
VALUES (NULL, 'Scrum Master certificado y apasionado por las metodologías ágiles. Me encanta guiar equipos hacia la entrega eficiente de proyectos.', 42, 77, 'mentor_agile@example.com', 'Carlos', 'Martínez', 'Scrum Master', '31789321654', 'Scrum, Kanban, Agile Coaching');

-- Mentor 6
--INSERT INTO mentor (about_me, age, category, email, first_name, last_name, occupation, phone, skills)
--VALUES ('Psicólogo con experiencia en terapia cognitivo-conductual. Ayudo a las personas a superar obstáculos y mejorar su bienestar mental.', 36, 78, 'mentor_psicologia@example.com', 'Ana', 'Rodríguez', 'Psicólogo Clínico', '3145612378', 'Terapia Cognitiva, Gestión del Estrés');

-- Mentor 7
--INSERT INTO mentor (about_me, age, category, email, first_name, last_name, occupation, phone, skills)
--VALUES ('Especialista en sistemas y redes informáticas. Apasionado por compartir conocimientos y guiar a nuevos profesionales en el mundo de la informática.', 41, 79, 'mentor_informatica@example.com', 'Gabriel', 'Sánchez', 'Ingeniero de Redes', '3215422201', 'Seguridad Informática, Administración de Redes');

-- Mentor 8
--INSERT INTO mentor (about_me, age, category, email, first_name, last_name, occupation, phone, skills)
--VALUES ('Chef pastelera con experiencia en repostería creativa. Comparto mi amor por la cocina y enseño técnicas para crear postres únicos.', 33, 80, 'mentor_reposteria@example.com', 'Isabel', 'Díaz', 'Chef Repostera Creativa', '3132523321', 'Decoración de Pasteles, Repostería Artística');

-- Mentor 9
--INSERT INTO mentor (about_me, age, category, email, first_name, last_name, occupation, phone, skills)
--VALUES ('Especialista en desarrollo mobile con experiencia en Android. Comparto conocimientos para crear aplicaciones innovadoras.', 36, 81, 'mentor_android@example.com', 'Raúl', 'García', 'Desarrollador Android', '3198549621', 'Android SDK, Kotlin, UX/UI Design');

-- Mentor 10
--INSERT INTO mentor (about_me, age, category, email, first_name, last_name, occupation, phone, skills)
--VALUES ('Experta en diseño de interfaces y experiencia de usuario. Ayudo a crear productos digitales atractivos y fáciles de usar.', 29, 82, 'mentor_uxui@example.com', 'Camila', 'López', 'Diseñadora UX/UI', '3192585621', 'Prototipado, Adobe XD, Usabilidad');

-- Mentor 11
--INSERT INTO mentor (about_me, age, category, email, first_name, last_name, occupation, phone, skills)
--VALUES ('Ingeniero en sistemas con amplia experiencia en ciberseguridad. Brindo orientación para asegurar sistemas y datos críticos.', 45, 83, 'mentor_ciberseguridad@example.com', 'Diego', 'Martínez', 'Especialista en Ciberseguridad', '654789321', 'Penetration Testing, Seguridad de la Información');

-- Mentor 12
--INSERT INTO mentor (about_me, age, category, email, first_name, last_name, occupation, phone, skills)
--VALUES ('Nutricionista y entrenador personal. Ayudo a adoptar hábitos saludables y a lograr objetivos de bienestar físico.', 32, 84, 'mentor_salud@example.com', 'Carolina', 'Gómez', 'Nutricionista y Entrenador Personal', '32265656544', 'Nutrición, Ejercicio Físico, Salud Mental');


---PRODUCTOS

-- Producto 1
INSERT INTO product (id, description, id_mentor, name, price)
VALUES (NULL, 'Curso de Marketing Avanzado', 1, 'Marketing Avanzado', 8500.00);

-- Producto 2
INSERT INTO product (id, description, id_mentor, name, price)
VALUES (NULL, 'Curso de Desarrollo Frontend', 2, 'Desarrollo Frontend', 9500.00);

-- Producto 3
INSERT INTO product (id, description, id_mentor, name, price)
VALUES (NULL, 'Curso de Desarrollo Backend', 3, 'Desarrollo Backend', 11000.00);

-- Producto 4
INSERT INTO product (id, description, id_mentor, name, price)
VALUES (NULL, 'Coaching Personalizado', 4, 'Coaching Personalizado', 9000.00);

-- Producto 5
INSERT INTO product (id, description, id_mentor, name, price)
VALUES (NULL, 'Certificación Scrum Master', 5, 'Certificación Scrum Master', 12000.00);

-- Producto 6
--INSERT INTO product (description, id_mentor, name, price)
--VALUES ('Terapia Cognitiva Online', 6, 'Terapia Cognitiva Online', 8000.00);

-- Producto 7
--INSERT INTO product (description, id_mentor, name, price)
--VALUES ('Curso de Seguridad Informática', 7, 'Seguridad Informática', 10500.00);

-- Producto 8
--INSERT INTO product (description, id_mentor, name, price)
--VALUES ('Taller de Repostería Creativa', 8, 'Repostería Creativa', 10000.00);

-- Producto 9
--INSERT INTO product (description, id_mentor, name, price)
--VALUES ('Desarrollo de Apps Android', 9, 'Desarrollo de Apps Android', 11500.00);

-- Producto 10
--INSERT INTO product (description, id_mentor, name, price)
--VALUES ('Curso de Diseño UX/UI', 10, 'Diseño UX/UI', 7800.00);

-- Producto 11
--INSERT INTO product (description, id_mentor, name, price)
--VALUES ('Curso de Ciberseguridad Avanzada', 11, 'Ciberseguridad Avanzada', 12500.00);

-- Producto 12
--INSERT INTO product (description, id_mentor, name, price)
--VALUES ('Programa de Bienestar', 12, 'Programa de Bienestar', 7500.00);


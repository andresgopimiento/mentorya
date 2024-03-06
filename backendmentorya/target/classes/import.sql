-- Mentor 1 --TECNOLOGIA
INSERT INTO mentor (id, gender, country, about_me, age, category, email, first_name, last_name, occupation, phone, skills, photo) VALUES (NULL, 'Femenino', 'Argentina', 'Experta en desarrollo backend con enfoque en arquitecturas escalables y eficientes. Siempre dispuesto a guiar a nuevos desarrolladores en su aprendizaje.', 35, "Tecnologia", 'mentor_backend@example.com', 'Nicolás', 'Molina', 'Arquitecta de Software', '3152156999', 'Java, Spring Boot, MongoDB', 'https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/425733258_874056418060763_3325467383048027710_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=_-oKhQTL2c0AX_WSPUa&_nc_ht=scontent.feoh3-1.fna&oh=00_AfC0yP7GS5UYtp9ECNubobw8kBjuMRXSN0DBbY1kTnRB7g&oe=65ED3B47');

-- Mentor 2 -- TECNOLOGIA
INSERT INTO mentor (id, gender, country, about_me, age, category, email, first_name, last_name, occupation, phone, skills, photo) VALUES (NULL, 'Femenino', 'España', 'Ingeniera de software con más de 10 años de experiencia en desarrollo frontend. Me encanta compartir mis conocimientos y ayudar a otros a crecer en este campo.', 40, "Tecnologia", 'mentor_frontend@example.com', 'Miguel Angel', 'Durán', 'Desarrollador Frontend Senior', '34676545541', 'JavaScript, React, CSS', 'https://pbs.twimg.com/profile_images/1613612257015128065/oA0Is67J_400x400.jpg');

-- Mentor 3 --BIENESTAR
INSERT INTO mentor (id, gender, country, about_me, age, category, email, first_name, last_name, occupation, phone, skills, photo) VALUES (NULL, 'Femenino', 'Chile','Coach profesional con enfoque en desarrollo personal y profesional. Mi objetivo es ayudarte a alcanzar tu máximo potencial.', 38, "Bienestar", 'mentor_coach@example.com', 'Laura', 'Hernández', 'Coach de Desarrollo Personal', '3165245236', 'Coaching Ejecutivo, Autoconfianza', 'https://cristinaramosvega.com/wp-content/uploads/2017/11/Empoderando-mujer-Agile-Women-Leydy-Carolina-Interior.jpg');

-- Mentor 4 --MATEMATICAS
INSERT INTO mentor (id, gender, country, about_me, age, category, email, first_name, last_name, occupation, phone, skills, photo) VALUES (NULL, 'Masculino', 'Colombia', 'Soy un mentor con amplia experiencia en matemáticas. Me apasiona enseñar y ayudar a otros a comprender conceptos matemáticos de manera clara y efectiva.', 35, 'Matemáticas', 'mentor_matematicas@example.com', 'Felipe', 'Vergara', 'Especialista en Matemáticas', '3125692010', 'Álgebra, Cálculo, Estadísticas', 'https://felipevergara.co/wp-content/uploads/Felipe-landing-mobile.png');


-- Mentor 5 -ARTES
INSERT INTO mentor (id, gender, country, about_me, age, category, email, first_name, last_name, occupation, phone, skills, photo) VALUES (NULL, 'Masculino', 'Perú', 'Apasionado por las artes y el diseño. Comprometido con inspirar creatividad y originalidad en cada proyecto. ¡Vamos a crear algo increíble juntos!', 32, 'Artes', 'mentor_artes@example.com', 'Carla', 'Martínez', 'Artista y Diseñador', '31789321654', 'Ilustración, Diseño Gráfico, Pintura', 'https://latinfemaledesigners.com/wp-content/uploads/2023/07/MariceliaMogollon.jpg');


-- Mentor 6 --TECNOLOGIA
INSERT INTO mentor (id, gender, country, about_me, age, category, email, first_name, last_name, occupation, phone, skills, photo) VALUES (NULL, 'Masculino', 'Argentina','Ingeniero en sistemas con amplia experiencia en ciberseguridad. Brindo orientación para asegurar sistemas y datos críticos.', 43, 'Tecnologia', 'ciberseguridad@Udemybussiness.com', 'Alvaro', 'Chirou', 'Especialista en Ciberseguridad', '31789321654', 'Penetration Testing, Seguridad de la Información', 'https://achirou.com/wp-content/uploads/2021/10/Screenshot_2-2.png');

-- Mentor 7 --BIENESTAR
INSERT INTO mentor (id, gender, country, about_me, age, category, email, first_name, last_name, occupation, phone, skills, photo) VALUES (NULL, 'Femenino', 'España', 'Experta en bienestar y salud mental. Mi objetivo es guiar a las personas hacia una vida equilibrada y feliz. ¡Aprendamos juntos a cuidar de nuestra mente y cuerpo!', 40, 'Bienestar', 'mentor_bienestar@example.com', 'Ana', 'González', 'Coach de Bienestar', '3456789123', 'Mindfulness, Yoga, Consejería de Salud Mental', 'https://example.com/ana_gonzalez.jpg');

-- Mentor 6 --PSICOLOGIA
INSERT INTO mentor (id, gender, country, about_me, age, category, email, first_name, last_name, occupation, phone, skills, photo) VALUES (NULL, 'Masculino', 'México', 'Psicólogo clínico con experiencia en terapia individual y familiar. Trabajo para proporcionar apoyo emocional y herramientas prácticas para el bienestar mental.', 38, 'Psicología', 'mentor_psicologia@example.com', 'Carlos', 'Sánchez', 'Psicólogo Clínico', '5543219876', 'Terapia Cognitivo-Conductual, Consejería Familiar, Psicoterapia', 'https://example.com/carlos_sanchez.jpg');

-- Mentor 6 --IDIOMAS
INSERT INTO mentor (id, gender, country, about_me, age, category, email, first_name, last_name, occupation, phone, skills, photo) VALUES (NULL, 'Femenino', 'Panama', 'Instructora de idiomas apasionada por facilitar el aprendizaje de nuevos idiomas. ¡Vamos a explorar juntos el mundo de los idiomas y la cultura!', 28, 'Idiomas', 'mentor_idiomas@example.com', 'Luisa', 'Rodríguez', 'Instructora de Idiomas', '9876543210', 'Inglés, Español, Francés', 'https://example.com/luisa_rodriguez.jpg');

-- Productos:
-- Mentor 1 - TECNOLOGIA
INSERT INTO product (id, description, id_mentor, name, price) VALUES (NULL, 'Curso de Desarrollo Backend', 1, 'Desarrollo Backend', 11000.00);

-- Mentor 2 - TECNOLOGIA
INSERT INTO product (id, description, id_mentor, name, price) VALUES (NULL, 'Curso de Desarrollo Frontend', 2, 'Desarrollo Frontend', 9500.00);

-- Mentor 3 - BIENESTAR
INSERT INTO product (id, description, id_mentor, name, price) VALUES (NULL, 'Coaching Ejecutivo', 3, 'Coaching Ejecutivo', 9000.00);

-- Mentor 4 - MATEMATICAS
INSERT INTO product (id, description, id_mentor, name, price) VALUES (NULL, 'Álgebra Avanzada', 4, 'Álgebra Avanzada', 8000.00);

-- Mentor 5 - ARTES
INSERT INTO product (id, description, id_mentor, name, price) VALUES (NULL, 'Curso de Ilustración', 5, 'Ilustración', 10000.00);

-- Mentor 6 - TECNOLOGIA
INSERT INTO product (id, description, id_mentor, name, price) VALUES (NULL, 'Certificación en Ciberseguridad', 6, 'Ciberseguridad', 12500.00);

-- Mentor 7 - BIENESTAR
INSERT INTO product (id, description, id_mentor, name, price) VALUES (NULL, 'Mindfulness y Yoga', 7, 'Mindfulness y Yoga', 9500.00);

-- Mentor 8 - PSICOLOGIA
INSERT INTO product (id, description, id_mentor, name, price) VALUES (NULL, 'Terapia Cognitivo-Conductual', 8, 'Terapia Cognitivo-Conductual', 8000.00);

-- Mentor 9 - IDIOMAS
INSERT INTO product (id, description, id_mentor, name, price) VALUES (NULL, 'Curso de Inglés Avanzado', 9, 'Inglés Avanzado', 10000.00);

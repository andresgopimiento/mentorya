-- Mentor 1
INSERT INTO mentor (id, gender, country, about_me, age, category, email, first_name, last_name, occupation, phone, skills) VALUES (NULL, 'Masculino', 'Ecuador','Soy un mentor con amplia experiencia en marketing digital. Me apasiona ayudar a otros a alcanzar sus metas en el mundo digital.', 35, 73, 'mentor_marketing@example.com', 'Juan', 'Pérez', 'Especialista en Marketing Digital', '3125692010', 'SEO, Estrategias de Contenido');

-- Mentor 2
INSERT INTO mentor (id, gender, country, about_me, age, category, email, first_name, last_name, occupation, phone, skills) VALUES (NULL, 'Femenino', 'España', 'Ingeniero de software con más de 10 años de experiencia en desarrollo frontend. Me encanta compartir mis conocimientos y ayudar a otros a crecer en este campo.', 40, 74, 'mentor_frontend@example.com', 'María', 'Gómez', 'Desarrollador Frontend Senior', '34676545541', 'JavaScript, React, CSS');

-- Mentor 3
INSERT INTO mentor (id, gender, country, about_me, age, category, email, first_name, last_name, occupation, phone, skills) VALUES (NULL, 'Masculino', 'Colombia', 'Experto en desarrollo backend con enfoque en arquitecturas escalables y eficientes. Siempre dispuesto a guiar a nuevos desarrolladores en su aprendizaje.', 45, 75, 'mentor_backend@example.com', 'Pedro', 'Ramírez', 'Arquitecto de Software', '3152156999', 'Java, Spring Boot, MongoDB');

-- Mentor 4
INSERT INTO mentor (id, gender, country, about_me, age, category, email, first_name, last_name, occupation, phone, skills) VALUES (NULL, 'Femenino', 'Chile','Coach profesional con enfoque en desarrollo personal y profesional. Mi objetivo es ayudarte a alcanzar tu máximo potencial.', 38, 76, 'mentor_coach@example.com', 'Laura', 'Hernández', 'Coach de Desarrollo Personal', '3165245236', 'Coaching Ejecutivo, Autoconfianza');

-- Mentor 5
INSERT INTO mentor (id, gender, country, about_me, age, category, email, first_name, last_name, occupation, phone, skills) VALUES (NULL, 'Masculino', 'Argentina','Scrum Master certificado y apasionado por las metodologías ágiles. Me encanta guiar equipos hacia la entrega eficiente de proyectos.', 42, 77, 'mentor_agile@example.com', 'Carlos', 'Martínez', 'Scrum Master', '31789321654', 'Scrum, Kanban, Agile Coaching');


-- Productos:
INSERT INTO product (id, description, id_mentor, name, price) VALUES (NULL, 'Curso de Marketing Avanzado', 1, 'Marketing Avanzado', 8500.00);


INSERT INTO product (id, description, id_mentor, name, price) VALUES (NULL, 'Curso de Desarrollo Frontend', 2, 'Desarrollo Frontend', 9500.00);


INSERT INTO product (id, description, id_mentor, name, price) VALUES (NULL, 'Curso de Desarrollo Backend', 3, 'Desarrollo Backend', 11000.00);


INSERT INTO product (id, description, id_mentor, name, price) VALUES (NULL, 'Coaching Personalizado', 4, 'Coaching Personalizado', 9000.00);


INSERT INTO product (id, description, id_mentor, name, price) VALUES (NULL, 'Certificación Scrum Master', 5, 'Certificación Scrum Master', 12000.00);


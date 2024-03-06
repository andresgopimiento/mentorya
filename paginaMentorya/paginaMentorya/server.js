const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const usuariosFilePath = 'usuarios.json';

const leerUsuarios = () => {
    // Función de lectura como se mencionó anteriormente
};

const escribirUsuarios = (usuarios) => {
    // Función de escritura como se mencionó anteriormente
};

// Ruta para agregar un nuevo usuario
app.post('/usuarios', (req, res) => {
    const nuevoUsuario = req.body;
    const usuarios = leerUsuarios();

    usuarios.push(nuevoUsuario);
    escribirUsuarios(usuarios);

    res.json({ message: 'Usuario agregado correctamente' });
});

// Ruta para obtener todos los usuarios
app.get('/usuarios', (req, res) => {
    const usuarios = leerUsuarios();
    res.json(usuarios);
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const crudRoutes = require('./public/js/crud.js'); // Verifica que la ruta sea correcta
const app = express();
const PORT = 1702;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Servir archivos estáticos desde la carpeta public
app.use(express.static('public'));

// Usar rutas del CRUD
app.use('/crud', crudRoutes);

// Iniciar el servidor
app.listen(PORT, '0.0.0.0', (error) => {
    if (error) {
        console.log(`Error: ${error.message} al intentar iniciar el servidor`);
    } else {
        console.log(`Servidor ejecutándose en http://0.0.0.0:${PORT}`);
        console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    }
});

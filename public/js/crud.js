const express = require('express');
const mysql = require('mysql2');
const router = express.Router();

// Conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'streaming'
});

// Ruta para registrar nueva venta
router.post('/registrar', (req, res) => {
    const { Whatsapp, Nombre_Cliente, Tipo_Cuenta, Cuenta, Clave_Cuenta, Fecha_Inicio, Fecha_Fin } = req.body.venta;

    const sql = `INSERT INTO clientes (Whatsapp, Nombre_Cliente, Tipo_Cuenta, Cuenta, Clave_Cuenta, Fecha_Inicio, Fecha_Fin) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    connection.query(sql, [Whatsapp, Nombre_Cliente, Tipo_Cuenta, Cuenta, Clave_Cuenta, Fecha_Inicio, Fecha_Fin], (err, result) => {
        if (err) {
            console.error('Error al registrar la venta:', err);
            return res.status(500).json({ success: false, message: 'Error al registrar la venta.' });
        }
        res.json({ success: true });
    });
});

// Exportar el router
module.exports = router;

const { Router } = require('express');
const router = Router();

const pool = require('../db');

router.get('/', function (req, res) {
    pool.query("SELECT * FROM tareas", function (error, result, fields) {
        if (error) throw error;
        res.json(result);
    });
});

router.get('/:id', function (req, res) {
    pool.query(`SELECT * FROM tareas WHERE id = ${req.params.id}`, function (error, result, fields) {
        if (error) throw error;
        res.json(result);
    });
});

router.post('/', function (req, res) {
    const { tarea, descripcion, completa } = req.body;
    const sql = `INSERT INTO tareas (tarea, descripcion) VALUES ('${tarea}', '${descripcion}')`;
        
    pool.query(sql, function (err, result) {
        if (err) throw err;
  
        res.json({mensaje: 'Tarea creada'});
    });

});

router.put('/:id', function (req, res) {
    const { tarea, descripcion, completa } = req.body;

    const sql = `UPDATE tareas SET tarea = '${tarea}', descripcion = '${descripcion}', completa = '${completa}' WHERE id = '${req.params.id}'`;

    pool.query(sql, function (err, result) {
        if (err) throw err;
        res.json({mensaje: "Tarea actualizada"});
    });
});

router.delete('/:id', function (req, res) {
    const sql = `DELETE FROM tareas WHERE id = ${req.params.id}`;

    pool.query(sql, function (err, result) {
        if (err) throw err;
        res.json({mensaje: "Tarea eliminada"});
    })
});

module.exports = router;
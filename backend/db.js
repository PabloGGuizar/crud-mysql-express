const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 100,
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'mydb'
  });

module.exports = pool;
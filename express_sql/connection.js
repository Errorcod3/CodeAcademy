const mysql = require('mysql');
let pool  = mysql.createPool({
connectionLimit : 10,
host            : 'localhost',
user            : 'todoadmin',
password        : 'admin',
database        : 'test_todo'
});

module.exports.pool = pool

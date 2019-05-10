var mysql = require('mysql');
var pool  = mysql.createPool({
connectionLimit : 10,
host            : 'example.org',
user            : 'bob',
password        : 'secret',
database        : 'my_db'
});

function aquire(callback){
    pool.getConnection(function(err, connection){
        if(err){
            console.log(err);
            return
        }
        callback(connection);
    })
}

module.exports.pool = pool
module.exports.aquire = aquire

// pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
// if (error) throw error;
// console.log('The solution is: ', results[0].solution);
// });
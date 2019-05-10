let aquire = require('../connetion').aquire

function getTodos(res){
    aquaire((con) => {
        con.query('select * from todos', function (err, result){
            con.release();
            res.send(result);
        });
    })
}

module.exports.getTodos = getTodos
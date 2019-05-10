const pool = require("../connection").pool;
const bcrypt = require('bcrypt');
const saltRounds = 5;

function create(req, res){
    pool.query('SELECT * FROM USER WHERE username = ?', 
    [req.body.username], (err, result)=>{
        if(result[0]){
            return res.send('username aleady exists')
        }
        let password = bcrypt.hashSync(req.body.password, saltRounds);
        let username = req.body.username; 
        pool.query('INSERT INTO USER (`username`, `password`), VALUES(?,?)',[username, password], (err, res)=>{
            if(!err){
                return res.send('Signed Up!');
            }
            res.send({error: 'something broke'})
        })
    })
}
function getAll(req, res){
    pool.query('SELECT is, username FROM USER', (err, res)=>{
        res.send({error: err, users: res})
    })
}

function login(req, res){
    pool.query('SELECT * FROM USER WHERE username = ?', [req.body.username], (err, res)=>{
        if(res){
            if(valid = bcrypt.compareSync(req.body.password, result[0].password)){
            return res.send({message: 'Welcome'})
        }
        else{
            return res.send({error: 'Invalid username or password'})
        }
    }
    })
}

module.exports.getAll = getAll;
module.exports.create = create;
module.exports.login = login;
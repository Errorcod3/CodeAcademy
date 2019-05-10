const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000; 
const usersRoutes = require("./routes/users.routes");

app.use(bodyParser.json());

app.use(express.static(__dirname+'/dist'));

app.use('/users', usersRoutes);

app.get('/', (req,res)=>{
    res.send('Hello World');
});

app.get('/*', (req,res)=>{
    res.redirect('back');
})

app.listen(port);

const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes/user.routs');
const fetch = require('node-fetch');
global.Headers = fetch.Headers;
app.use(express.static(__dirname+'/dist'))
function middleWare(req, res, next){
    console.log("Hi I'm a middleWare");
    next();
}

app.use("/user", userRoutes)

app.get('/', middleWare, (req, res) => res.sendFile(__dirname+'/dist/index.html'));
app.all('/*', (req, res) => {
    res.redirect('back');
});

app.listen(port);


//create dist folder for ng build --prod

// let usersRouter = require('./routes/user.routes');
// let adminRouter = require('./routes/admin.routes');

// function sayName(req, res, next){
//     console.log('Benji');
//     next();
// }

//     app.use('/users', usersRouter);
//     app.use('/admin', adminRouter);
// app.get('/helloWorld', (req, res) => {
//     res.send('and also the moon!');
// });

// app.get('/friends/:friendID', sayName, (req, res, next) => {
//     res.send(req.params.friendID);
// });

// app.get('/:userId', middleWare, (req, res) => {
//     userID = req.params;
//     fetch('/users.json')
//     .then(function(response) {
//     let json = response.json()
//     res.send(json.userID)
//     });
// });
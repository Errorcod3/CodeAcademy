const express = require('express');
let router = express.Router();
let users = require('./users.json')

    // router.get('/:id', (req, res) => {
    //     let userID = req.params.id;
    //     let userPosts = users.filter(user => user.userID == userID)
    //     res.send(userPosts);
    // });

    router.get('/todos', (req, res) => {
        getTodos(res);
    })

    module.exports = router;


    // router.post('/settings', (req, res, next) => {
    //     // req.   Functionality to post to settings
    // });

    // router.get('/:userID/posts', (req, res, next) => {
    //     res.send(req.params.userID)
    //     next()
    // });
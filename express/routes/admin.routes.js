const express = require('express');
let router = express.Router();

    router.get('/permissions', (req, res) => {
        res.send('list of permissions');
    });
    router.get('config', (req, res) => {
        res.send('list of config');
    });

    module.exports = router;
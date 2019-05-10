const express = require ("express");
let router = express.Router();
let users = require("../models/users.model");

router.get("/all",(req, res)=>{
    users.getAll(req, res);
})

router.post("/signup",(req, res)=>{
    users.create(req, res);
})

router.post("/login",(req, res)=>{
    users.login(req, res);
})

module.exports = router;
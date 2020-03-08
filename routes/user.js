const express = require('express');
const router = express.Router();
const {Login, Register, User} = require('../models/user');

router.post('/register', async (req, res) => {
    let {name, email, password} = req.body;
    try {
        await Register(name, email, password);
        res.send('Success');
    } catch (error) {
        res.send(`Error: ${error}`);
    }
});

router.post('/login', async (req, res) => {
    let {email ,password} = req.body;
    try {
        let tokenKey = await Login(email, password);
        res.send(tokenKey);
    } catch (error) {
        res.send(`Error: ${error}`);
    }
})
module.exports = router;
const express = require('express');
const User = require('../models/User');
const { createHash, isValid } = require('../utils');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { first_name, last_name, email, age, password } = req.body;
    try {
        const user = new User({ first_name, last_name, email, age, password:createHash(password)});
        await user.save();
        res.redirect('/login');
    } catch (err) {
        res.status(400).send('Erro ao registrar usuário');
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !await isValid(user, password)) {
            return res.status(400).send('Credenciais inválidas');
        }
        req.session.user = user;
        res.redirect('/profile');
    } catch (err) {
        res.status(400).send('Erro ao logar usuário');
    }
});

module.exports = router;
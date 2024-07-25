const express = require('express');
const User = require('../models/User');
const { createHash, isValid } = require('../utils');
const router = express.Router();
const passport = require('passport');

// router.post('/register', async (req, res) => {
//     const { first_name, last_name, email, age, password } = req.body;
//     try {
//         const user = new User({ first_name, last_name, email, age, password:createHash(password)});
//         await user.save();
//         res.redirect('/login');
//     } catch (err) {
//         res.status(400).send('Erro ao registrar usuário');
//     }
// });

router.post('/register', passport.authenticate('register', {failureRedirect:'/failregister'}), async (req, res) => {
    res.send({status:"Sucesso", message:"Usuário registrado"});
});


router.get("/failregister", async(req, res)=>{
    res.send({èrro:"A solicitação falhou"});
})



// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ email });
//         if (!user || !await isValid(user, password)) {
//             return res.status(400).send('Credenciais inválidas');
//         }
//         req.session.user = user;
//         res.redirect('/profile');
//     } catch (err) {
//         res.status(400).send('Erro ao logar usuário');
//     }
// });

router.post('/login', passport.authenticate('login', {failureRedirect:'/faillogin'}), async (req, res) => {
    if(!req.user){
        return res.status(400).send({status:"Erro", erro:"As credencias do usuário são inválidas"});
    }

    req.session.user = {
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        age: req.user.age,
        email: req.user.email
    }

    res.send({status:"Sucesso", payload:req.user});
});


router.get('/faillogin', async (req, res) => {
    res.send({error:"O login do usuário falhou!"});
});
module.exports = router;
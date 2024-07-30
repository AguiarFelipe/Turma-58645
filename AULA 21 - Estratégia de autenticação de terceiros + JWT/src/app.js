const express = require('express');
const {generateToken, authToken} = require('./utils.js');

const app = express();
const PRIVATE_KEY = "CoderKeySecret";

const users = [];
app.use(express.json());

app.post('/register', (req, res)=>{
    const {name, email, password} = req.body;
    const exist = users.find(user=>user.email === email);
    if(exist){
        return res.status(400).send({status:"Erro", erro:"Usuário já existe"});
    }
    const user = {
        name,
        email,
        password
    };

    users.push(user);

    const access_token = generateToken(user);
    res.send({status:"Sucesso", access_token});
});

app.post('/login', (req, res)=>{
    const {email, password}=req.body;
    const user = users.find(user=>user.email===email && user.password===password);
    if(!user){
        return res.status(400).send({status:"Erro", erro:"Credenciais inválidas"});
    }
    const access_token = generateToken(user);
    res.send({status:"Sucesso", access_token});
});

app.get('/current', authToken, (req, res)=>{
    res.send({status:"Sucesso", payload: req.user});
})

app.listen(8080,()=>console.log('Servidor ouvindo na porta 8080'));
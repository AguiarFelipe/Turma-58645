const express = require('express');

const app = express();

const server = app.listen(8080, ()=>{console.log("Ouvindo na porta 8080")});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

let users = [];

app.get('/api/users', (req,res)=>{
    res.send({users});
});

app.post('/api/users', (req,res)=>{
    let user = req.body;
    if(!user.first_name||!user.last_name){
        return res.status(400).send({status:"Error", message:"Valores incompletos"});
    }
    users.push(user);
    res.send({status:"Sucess", message:"Usuário criado"});
});

app.put('/api/user', (req,res)=>{
    let user = req.body;

    if(!user.first_name||!user.last_name){
        return {...users};
    }
    users = users.map(obj=>{
        if(obj.first_name == user.first_name && obj.last_name == user.last_name){
            return {...users};
        }
        return {...obj}
    })

    res.send({status:"Success", messge:"User changed"});
});

app.delete('/api/user/:name', (req,res)=>{
    let name = req.params.name;
    let currentLength = users.length;
    
    users = users.filter(user=>user.first_name!=name)
    if(users.length == currentLength){
        res.status(400).send({status:"Error", message:"Usuário não encontrado"});
    }
    
    res.send({status:"Success", message:"Usuário removido com sucesso"});
});
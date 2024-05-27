const express = require('express')();

const users = [
    {id:1, nome: "Felipe", idade:35},
    {id:2, nome: "Camila", idade:36},
    {id:3, nome: "Gisele", idade:30}
]

express.get('/', (req, res)=>{
    res.send({users});
});

express.get('/:userId', (req, res)=>{
    let idUser = req.params.userId;
    let user = users.find(u=>u.id==idUser);
    if (!user){
        return res.send("Usuário não encontrado");
    }
    res.send({user});
});

express.listen(8080, ()=>{
    console.log('Listen on port 8080');
})
const express = require('express')();

express.get('/umparametro/:nome', (req, res)=>{
    res.send(`Bem vindo ${req.params.nome}`);
});

express.get('/doisparametros/:nome/:sobrenome', (req, res)=>{
    res.send(`Bem vindo ${req.params.nome} ${req.params.sobrenome}`);
});

express.listen(8080, ()=>{
    console.log('Listen on port 8080');
})
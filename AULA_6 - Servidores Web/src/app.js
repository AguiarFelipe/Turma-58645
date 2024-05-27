const express = require('express')();

express.get('/saudar', (req, res)=>{
    res.send('Olá pessoal');
})

express.get('/usuario',(req, res)=>{
    res.send({id:1,nome:'joão',idade:23});
})
express.listen(8188, ()=>{
    console.log('Ouvindo na porta 8080, porém com ExpressJS');
})
import express from 'express';

const app = express();

app.get('/olacoders', (req, res)=>{
    res.send({message:"Estamos rodando numa versão mais recente, agora executamos o --watch"});
});

app.listen(8080, ()=>{console.log("Ouvindo na porta 8080")});
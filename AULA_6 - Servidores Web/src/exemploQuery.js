const express = require('express');

const app = express();

app.use(express.urlencoded({extended:true}));

app.get('/exemploQueries', (req, res)=>{

    let consultas = req.query;

    let {nome, sobrenome, idade} = req.query;

    res.send(consultas);
});

app.listen(8080, ()=>{
    console.log('Listen on port 8080');
})
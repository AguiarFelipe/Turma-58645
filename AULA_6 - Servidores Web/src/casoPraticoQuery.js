const express = require('express');

const app = express();

const users = [
    {id:1, nome: "Felipe", idade:35, genero:"M"},
    {id:2, nome: "Camila", idade:36, genero:"F"},
    {id:3, nome: "Gisele", idade:30, genero:"F"},
    {id:4, nome: "Jonas", idade:35, genero:"M"},
    {id:5, nome: "Richter", idade:36, genero:"M"},
    {id:6, nome: "Maria", idade:30, genero:"M"}
]

app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    let genero = req.query.genero;
    if(!genero || (!genero=="F" && !genero=="M")){res.send({users})}
    let filterUser = users.filter(u=>u.genero==genero);
    res.send({users:filterUser});
});

app.listen(8080, ()=>{
    console.log('Listen on port 8080');
})
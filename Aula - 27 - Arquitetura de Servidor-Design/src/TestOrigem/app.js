const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.get('/test', (req, res)=>{
    res.send({message: "Resposta"});
});

app.listen(8080, ()=>{
    console.log("Ouvindo na porta 8080");
});
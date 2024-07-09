const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/users.router.js');

mongoose.connect('mongodb+srv://coders:123As123@codercluster.tawlznu.mongodb.net/?retryWrites=true&w=majority&appName=CoderCluster')
.catch((error)=>{
    console.log("Não foi possível conectar. Erro: "+error);
    process.exit();
});

app.use(express.json());
app.use('/api/users', userRouter);

app.listen(8080, ()=>{console.log("Servidor ouvindo na porta 8080")});
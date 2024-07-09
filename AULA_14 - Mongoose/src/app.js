const express = require('express');
const app = express();
const mongoose = require('mongoose');

const userRouter = require('./routes/user.router.js');

mongoose.connect('mongodb+srv://coderTurma:!As123456@codercluster2.ngaf2zc.mongodb.net/?retryWrites=true&w=majority&appName=CoderCluster2')
.catch((error)=>{
    console.log('Ocorreu uma falha');
    process.exit();
});

app.use(express.json());
app.use('/api/users', userRouter)

app.listen(8080, ()=>{console.log('Servidor ouvindo na porta 8080')});
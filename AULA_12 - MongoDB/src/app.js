const express = require('express');
const app = express();
const userRouter = require('./routes/users.router.js');

app.use('/api/users', userRouter);

app.listen(8080, ()=>{console.log("Servidor ouvindo na porta 8080")});
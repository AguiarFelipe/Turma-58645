const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

// app.use(function(req, res, next){
//     console.log('Execução em: ', Date.now());
//     next();
// });


// function logarData (req, res, next) {
//     console.log('Execução em: ', Date.now());
//     next();
// }

app.use(function(err, req, res, next){
    console.log(err.stack);
    res.status(500).send("Ocorreu um erro");
})

const userRouter = require('./routes/userRoute.js');
const petsRouter = require('./routes/petRoute.js');

app.use('/static',express.static(path.join(__dirname,'..','public')))

app.use('/api/users', userRouter);
app.use('/api/pets', petsRouter);

app.listen(8080, () => {
    console.log('Servidor ouvindo na porta 8080');
});
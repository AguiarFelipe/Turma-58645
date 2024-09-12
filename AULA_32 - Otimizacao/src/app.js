import express from 'express';
import compression from 'express-compression';
import brotli from 'brotli';
import userRouter from './routes/users.js';
import errorHandler from './middlewares/errors/index.js';

const app = express();

// app.use(compression({
//     brotli:{
//         enabled:true,
//          zLib:{}
//         }
//     }));

// app.get('/stringgigante3', (req, res)=>{
//     let string = 'Olá Coders, sou uma string gigante';
//     for(let i=0;i<1000000;i++){
//         string += 'Olá Coders, sou uma string gigante';
//     }
//     res.send(string);
// });


app.use(express.json());
app.use('/api/users', userRouter);
app.use(errorHandler);


app.listen(8080, ()=>{console.log('Ouvindo na porta 8080')});
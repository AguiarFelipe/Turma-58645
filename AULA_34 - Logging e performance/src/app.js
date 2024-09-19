import express from 'express';
import { addLogger } from './utils/logger.js';

const app = express();

app.use(addLogger);

app.get('/', (req, res)=>{
    req.logger.warning("Mensagem de alerta!!")
    res.send({message:"Mensagem do logger"});
});

app.get('/simple', (req, res)=>{
    let sum;
    for(let i=0; i<1000000;i++){
        sum+=sum;
    }
    res.send({sum});
});

app.get('/complex', (req, res)=>{
    let sum;
    for(let i=0; i<5e8;i++){
        sum+=sum;
    }
    res.send({sum});
});

app.listen(8080, ()=>{console.log("Ouvindo na porta 8080")})
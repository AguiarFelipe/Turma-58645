import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from './routes/users.router.js'
import orderRouter from './routes/orders.router.js'
import businessRouter from './routes/business.router.js'

const app = express();
const connect = mongoose.connect('mongodb://localhost:27017/Aula29');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors(
    {
        origin:['http://localhost:5500', 'http://127.0.0.1:5500'], 
        methods:['GET', 'POST', 'PUT']}));

app.use('/api/users', userRouter);
app.use('/api/orders',  orderRouter);
app.use('/api/business', businessRouter);

const port = process.env.PORT||8080;

app.listen(port, ()=>{console.log(`Servidor executando na porta ${port}`)});
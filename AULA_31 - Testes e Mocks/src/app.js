import express from 'express';
import userRouter from './routes/users.js';

const app = express();
const PORT = process.env.PORT||8080;

app.use('/api/users', userRouter);
app.listen(PORT, ()=>{console.log(`Servidor ouvindo na porta ${PORT}`)});
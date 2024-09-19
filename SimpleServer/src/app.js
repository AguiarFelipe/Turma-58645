import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoutes from './routes/auth.js';

const app = express();
const PORT = 8080;

mongoose.connect('mongodb://localhost:27017/user-auth', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro ao conectar ao MongoDB', err));


app.use(bodyParser.json());

app.use('/api/test', userRoutes);
app.use('/api/sessions', userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor ouvindo na porta ${PORT}`);
});

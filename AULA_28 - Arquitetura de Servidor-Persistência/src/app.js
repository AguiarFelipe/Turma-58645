import express, { json } from 'express';
import contactsRouter from './routes/contacts.router.js';

const app = express();

app.use(json());
app.use('/contacts', contactsRouter);

const server = app.listen(8080, ()=>{console.log("Ouvindo na porta 8080")});
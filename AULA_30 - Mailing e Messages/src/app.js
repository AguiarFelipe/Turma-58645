import express from 'express';
import nodemailer from 'nodemailer';
import twilio from 'twilio';

const app = express();

//Para saber o conteúdo deste arquivo, conferir no chat de sua turma ou no arquivo read contido na raíz do projeto

app.listen(8080, ()=>{console.log('Servidor ouvindo na porta 8080')});
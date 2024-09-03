import express from 'express';
import nodemailer from 'nodemailer';
import twilio from 'twilio';

const app = express();

const TWILIO_ACCOUNT_SID = 'AC438e07b9f7f22a877558b7f81885869b';
const TWILIO_AUTH_TOKEN = '8cf6c20359e6c0944088dfaeed6dbe7a';
const TWILIO_SMS_NUMBER = '+14695578199';

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);



const transport = nodemailer.createTransport({
    service:'gmail',
    port:587,
    auth:{
        user:'f.dutraaguiar@gmail.com',
        pass:'aakn rado fybf xueq'
    }
});

//Envio de SMS com Twilio
app.get('/sms', async(req, res)=>{
    let result = await client.messages.create({
        body:'Aula ao vivo do curso de BackEnd-CoderHouse',
        from:TWILIO_SMS_NUMBER,
        to:'+5512982252565'
    });

    res.send({status:"Sucesso", result:"SMS enviado!"});
});

//Envio com imagens e anexos
app.get('/mailimage', async(req, res)=>{
    let result = await transport.sendMail({
        from:'CoderHouse-Turma58645 <f.dutraaguiar@gmail.com>',
        to:'felipedutra_aguiar@hotmail.com',
        subject:"Email de teste da aula ao vivo",
        html:`
        <div>
            <h1>Isto é um teste com imagens e anexo</h1>
            <img src='cid:picapau'/>
        </div>
        `,
        attachments:[{
            filename:'picapau.jpg',
            path:'src/img/picapau.jpg',
            cid:'picapau'
        }]
    });
    res.send({status:"Sucesso", result:'Email enviado com sucesso'})
});

//Envio de mensagem sem anexo e/ou imagens
app.get('/mail', async(req, res)=>{
    let result = await transport.sendMail({
        from:'CoderHouse-Turma58645 <f.dutraaguiar@gmail.com>',
        to:'felipedutra_aguiar@hotmail.com',
        subject:"Email de teste da aula ao vivo",
        html:'<div><h1>Email de teste da aula</h1></div>',
        attachments:[]
    });
    res.send({status:"Sucesso", result:'Email enviado com sucesso'})
});

app.listen(8080, ()=>{console.log('Servidor ouvindo na porta 8080')});
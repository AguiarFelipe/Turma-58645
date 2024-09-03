import express from 'express';
import nodemailer from 'nodemailer';
import twilio from 'twilio';

const app = express();

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);



const transport = nodemailer.createTransport({
    service:'gmail',
    port:587,
    auth:{
        user:'email configurado da sua aplicação',
        pass:'password configurado da sua aplicação'
    }
});

//Envio de SMS com Twilio
app.get('/sms', async(req, res)=>{
    let result = await client.messages.create({
        body:'Aula ao vivo do curso de BackEnd-CoderHouse',
        from:TWILIO_SMS_NUMBER,
        to:'Telefone para o qual será enviado o SMS'
    });

    res.send({status:"Sucesso", result:"SMS enviado!"});
});

//Envio com imagens e anexos
app.get('/mailimage', async(req, res)=>{
    let result = await transport.sendMail({
        from:'Identificação de quem está enviando a mensagem <email do remetente>',
        to:'email destino',
        subject:"Assunto do email",
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
        from:'Identificação de quem está enviando a mensagem <email do remetente>',
        to:'email destino',
        subject:"Assunto do email",
        html:'<div><h1>Email de teste da aula</h1></div>',
        attachments:[]
    });
    res.send({status:"Sucesso", result:'Email enviado com sucesso'})
});

app.listen(8080, ()=>{console.log('Servidor ouvindo na porta 8080')});
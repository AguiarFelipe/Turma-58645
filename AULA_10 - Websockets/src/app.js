const express = require('express');
const handlebars = require('express-handlebars');
const routes = require('./routes/view.router.js');
const {Server} = require('socket.io');

const app = express();
const port = 8080;

const httpServer = app.listen(port, ()=>{`Servidor ouvindo na porta ${port}`});

const socketServer = new Server(httpServer);

app.engine('handlebars', handlebars.engine());
app.use('/', routes);
app.use(express.static(__dirname+'/public'));
app.set('views', __dirname+'/views');
app.set('view engine', 'handlebars');

socketServer.on('connection', socket=>{
    console.log('Novo cliente conectado');


    socket.on('message', data=>{
        console.log(data);
    });

    socket.emit('event_for_individual_socket', 'Esta mensagem só deve ser recebida pelo socket');
    
    socket.broadcast.emit('event_for_everyone_but_the_current_socket', 'Esta mensagem será vista por todos os sockets, EXCETO o socket atual de origem');
});

socketServer.emit('event_for_all', 'Esta mensagem é recebida por todos conectados');